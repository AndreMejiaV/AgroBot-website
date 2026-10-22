# AgroBot: solo descarga imágenes desde Wikimedia Commons.
# Revisar los enlaces en fuentes_componentes.csv antes de publicarlas.
# No cambia el código ni publica la web. Compatible con Windows PowerShell 5.1 y PowerShell 7.
$ErrorActionPreference = 'Stop'
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$dest = Join-Path $base 'public\images\components\catalogo'
New-Item -ItemType Directory -Force -Path $dest | Out-Null
$registros = Import-Csv -Path (Join-Path $base 'fuentes_componentes.csv') -Encoding UTF8
$reporte = @()
$hechos=0; $fallos=0; $faltantes=0
$headers = @{ 'User-Agent'='AgroBot-Research/1.0 (educational website image catalog; Wikimedia license metadata)' }
foreach ($row in $registros) {
    if ([string]::IsNullOrWhiteSpace($row.archivo_wikimedia)) {
        Write-Host "PENDIENTE DE FOTO PROPIA: $($row.material)" -ForegroundColor Yellow
        $reporte += [pscustomobject]@{ Material=$row.material; Estado='Pendiente de fotografia'; Archivo=''; Fuente=$row.pagina_fuente }
        $faltantes++
        continue
    }
    try {
        $title = 'File:' + $row.archivo_wikimedia
        $api = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url%7Cmime%7Cextmetadata&iiurlwidth=1000&titles=' + [uri]::EscapeDataString($title)
        $query = Invoke-RestMethod -Uri $api -Headers $headers -TimeoutSec 35
        $page = @($query.query.pages.PSObject.Properties.Value)[0]
        if ($null -eq $page.imageinfo -or $page.imageinfo.Count -eq 0) { throw "No se encontro el archivo en Wikimedia Commons" }
        $img = $page.imageinfo[0]
        $link = $img.url
        if ($img.thumburl) { $link = $img.thumburl }
        if (!$link) { throw 'No hay URL descargable' }
        $ext = [IO.Path]::GetExtension(([uri]$link).AbsolutePath).ToLowerInvariant()
        if (@('.jpg','.jpeg','.png','.webp','.svg') -notcontains $ext) {
            if ($img.mime -eq 'image/svg+xml') { $ext='.svg' }
            elseif ($img.mime -eq 'image/png') { $ext='.png' }
            else { $ext='.jpg' }
        }
        $outfile = Join-Path $dest ($row.archivo_base + $ext)
        Invoke-WebRequest -Uri $link -Headers $headers -OutFile $outfile -TimeoutSec 60
        if ((Get-Item $outfile).Length -lt 1500) { throw 'Archivo descargado demasiado pequeno' }
        Write-Host "OK: $($row.material) -> $([IO.Path]::GetFileName($outfile))" -ForegroundColor Green
        $reporte += [pscustomobject]@{ Material=$row.material; Estado='Descargado'; Archivo=$outfile; Fuente=$row.pagina_fuente }
        $hechos++
        Start-Sleep -Milliseconds 350
    } catch {
        Write-Warning ("No se pudo descargar {0}: {1}" -f $row.material, $_.Exception.Message)
        $reporte += [pscustomobject]@{ Material=$row.material; Estado='Error descarga'; Archivo=''; Fuente=$row.pagina_fuente }
        $fallos++
    }
}
$reporte | Export-Csv -NoTypeInformation -Encoding UTF8 -Path (Join-Path $base 'RESULTADOS_DESCARGA.csv')
Write-Host "Descargados: $hechos | Pendientes de foto: $faltantes | Errores: $fallos" -ForegroundColor Cyan
Write-Host "Destino: $dest"
