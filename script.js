const formulario = document.getElementById('formulario-notas');
const mensaje = document.getElementById('mensaje');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  mensaje.textContent = '';
  resultado.classList.add('oculto');

  const nombre = document.getElementById('nombre').value.trim();
  const camposNotas = [
    document.getElementById('nota1'),
    document.getElementById('nota2'),
    document.getElementById('nota3')
  ];

  if (!nombre || camposNotas.some((campo) => campo.value === '')) {
    mostrarError('Completa el nombre y las tres notas.');
    return;
  }

  const notas = camposNotas.map((campo) => Number(campo.value));
  if (notas.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 5)) {
    mostrarError('Cada nota debe estar entre 0.0 y 5.0.');
    return;
  }

  const promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  const aprobado = promedio >= 3.0;
  const estado = aprobado ? 'Aprobó' : 'No aprobó';
  // La nota mínima de aprobación es 3.0.

  resultado.innerHTML = `
    <h2>Resultado</h2>
    <p><strong>${escapeHtml(nombre)}</strong>, tu promedio es:</p>
    <div class="promedio">${promedio.toFixed(2)}</div>
    <p class="estado ${aprobado ? 'aprobado' : 'no-aprobado'}">${estado}</p>
    <small>La nota mínima para aprobar es 3.0.</small>
  `;
  resultado.classList.remove('oculto');
});

function mostrarError(texto) {
  mensaje.textContent = texto;
}

function escapeHtml(texto) {
  const elemento = document.createElement('div');
  elemento.textContent = texto;
  return elemento.innerHTML;
}
