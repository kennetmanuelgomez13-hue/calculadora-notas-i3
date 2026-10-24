# Gestión de Configuración de Software con GitHub

## Trabajo individual: Calculadora de Notas Instituto i3

### Adaptación de la modalidad

Aunque la guía original propone grupos de tres aprendices, este trabajo se realizó de manera individual. Para demostrar la misma gestión de configuración, asumí los tres roles en ramas separadas:

- `interfaz`: construcción de `index.html`.
- `logica`: construcción de `script.js`.
- `estilos`: construcción de `style.css`, validaciones y ajustes visuales.

Cada rama se integró a main mediante pull request y merge. Los commits registrados corresponden a las cargas de archivos y a los merges de cada rama.


## Fase 1: Investigación

**¿Qué es Git?** Git es un sistema de control de versiones distribuido. Permite registrar los cambios de un proyecto, consultar su historial y recuperar versiones anteriores.

**¿Qué es GitHub?** GitHub es una plataforma en línea que aloja repositorios Git. Facilita compartir código, colaborar, revisar cambios y guardar el proyecto en la nube.

**¿Para qué sirve un repositorio?** Un repositorio almacena los archivos del proyecto y el historial de cambios. También permite organizar ramas, commits y documentación.

**¿Qué es un commit?** Es un registro permanente de un conjunto de cambios. Un commit debe tener un mensaje descriptivo para explicar qué se modificó.

**¿Qué es una rama o branch?** Es una línea de trabajo independiente dentro del repositorio. Permite desarrollar una función sin alterar directamente la rama principal.

**¿Qué es un merge?** Es la acción de unir los cambios de una rama con otra, por ejemplo, integrar `interfaz` en `main`.

**Ventajas de GitHub:** conserva el historial, permite trabajar con ramas, facilita la colaboración, muestra quién hizo cada cambio, permite revisar código y sirve como respaldo remoto del proyecto.

## Fase 2: Desarrollo

La aplicación solicita el nombre y tres notas entre 0.0 y 5.0. Calcula el promedio y muestra “Aprobó” cuando el resultado es mayor o igual a 3.0; en caso contrario muestra “No aprobó”.

> Nota técnica: para que la aplicación funcione directamente en un navegador se utilizó `script.js`. La guía menciona `script.py`, pero Python no se ejecuta automáticamente en una página HTML sin un servidor adicional.

## Fase 3: Historial de configuración

Ramas utilizadas: `main`, `interfaz`, `logica` y `estilos`.

Commits sugeridos y realizados:

- `Se crea estructura inicial del proyecto`
- `Se agrega formulario principal`
- `Se agrega captura de notas y promedio`
- `Se muestra estado de aprobación`
- `Se implementan validaciones de campos y rango`
- `Se mejora diseño responsive`

## Reflexión

**¿Qué ventajas encontré al trabajar con GitHub?** Pude organizar el trabajo por ramas, conservar un historial claro y regresar a una versión anterior si fuera necesario. Además, el repositorio funciona como respaldo y permite mostrar el proceso, no solamente el resultado final.

**¿Qué dificultades tuve?** La principal dificultad fue coordinar mentalmente los tres roles al trabajar solo. También fue necesario aprender la diferencia entre guardar archivos, crear commits, cambiar de rama y hacer merge. La práctica permitió superar estas dificultades.

**¿Por qué GitHub es una herramienta de gestión de configuración?** Porque ayuda a identificar, controlar y versionar los elementos del proyecto. Permite saber qué cambió, cuándo cambió y en qué versión se encuentra cada archivo.

**¿Qué habría pasado si todos modificaban el mismo archivo sin control de versiones?** Podrían sobrescribirse cambios, perderse trabajo, aparecer errores difíciles de rastrear y no habría una forma sencilla de saber quién hizo cada modificación o de recuperar una versión estable.

## Evidencias que debo capturar

1. Página principal del repositorio en GitHub.
2. Lista de ramas (`main`, `interfaz`, `logica`, `estilos`).
3. Historial de commits.
4. Aplicación funcionando con un caso aprobado.
5. Aplicación mostrando validación o un caso no aprobado.
