// status: '' (sin documentar), 'proposed', 'implemented' o 'verified'.
// Implementada y verificada requieren evidence: referencia al prototipo o prueba.
// Los campos vacíos o con avisos provisionales se conservan aquí, pero no se publican.
export function hasUsefulValue(value) {
  if (value == null) return false
  const text = String(value).trim().replace(/[.!…]+$/, '').trim().toLocaleLowerCase('es')
  return Boolean(text) && !['por confirmar', 'pendiente de documentación', 'por definir', 'por definir y validar'].includes(text)
}

export const specificationGroups = [
  { id: 'control', title: 'Sistema de control', items: [
    { label: 'Microcontrolador', value: '', status: '', evidence: '' },
    { label: 'Arquitectura electrónica', value: '', status: '', evidence: '' },
    { label: 'Sistema de procesamiento', value: '', status: '', evidence: '' },
  ] },
  { id: 'sensors', title: 'Sensores', items: [
    { label: 'Parámetros que se busca medir', value: 'pH, humedad y temperatura del suelo', status: 'proposed', evidence: '' },
    { label: 'Modelos de sensores', value: '', status: '', evidence: '' },
    { label: 'Estado de integración', value: '', status: '', evidence: '' },
  ] },
  { id: 'mobility', title: 'Movilidad', items: [
    { label: 'Sistema de tracción', value: '', status: '', evidence: '' },
    { label: 'Configuración del chasis', value: '', status: '', evidence: '' },
    { label: 'Capacidades previstas', value: 'Movilidad todoterreno y navegación autónoma como objetivos de diseño', status: 'proposed', evidence: '' },
  ] },
  { id: 'power', title: 'Alimentación', items: [
    { label: 'Fuente de energía', value: '', status: '', evidence: '' },
    { label: 'Batería', value: '', status: '', evidence: '' },
    { label: 'Autonomía prevista o medida', value: '', status: '', evidence: '' },
  ] },
  { id: 'construction', title: 'Dimensiones y construcción', items: [
    { label: 'Materiales', value: '', status: '', evidence: '' },
    { label: 'Dimensiones', value: '', status: '', evidence: '' },
    { label: 'Peso', value: '', status: '', evidence: '' },
    { label: 'Características estructurales', value: '', status: '', evidence: '' },
  ] },
]
