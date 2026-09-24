---
title: "Chrome"
description: "Desarrollo en Chrome con JavaScript: DevTools, depuración, automatización con scripts, extensiones y un ejemplo práctico para inspeccionar páginas."
date: 2026-09-24
updatedDate: 2026-09-24
tags: ["extensiones","devtools","userscripts","pwa"]
slug: google/chrome
type: category
topic: google
id: 3e5a9dfb-adca-8014-9615-c9ad4cfb636d
author: victor_cuervo
---

## ¿Qué es Desarrollo en Chrome?


El **desarrollo en Chrome** es el conjunto de técnicas y herramientas utilizadas para crear, ejecutar, depurar y analizar aplicaciones web en Google Chrome. En el contexto de [JavaScript](https://lineadecodigo.com/javascript/), abarca tanto el trabajo sobre una página abierta en el navegador como la creación de funciones que amplían su comportamiento.


Chrome incorpora **DevTools**, un entorno de herramientas de desarrollo que permite inspeccionar el DOM —la representación en objetos del documento [HTML](https://lineadecodigo.com/html/)—, modificar estilos, ejecutar JavaScript, establecer puntos de interrupción y analizar solicitudes de red, almacenamiento y rendimiento. DevTools se abre desde el menú de Chrome o con `F12` y `Ctrl+Shift+I` en Windows y Linux; en macOS se utiliza `Cmd+Option+I`.


El código [JavaScript](https://lineadecodigo.com/javascript/) puede ejecutarse directamente en la consola, guardarse como un _snippet_ de DevTools o integrarse en distintos tipos de soluciones:

- **Aplicaciones web y PWA:** sitios que usan APIs del navegador; una PWA puede añadir instalación, funcionamiento sin conexión y otras capacidades mediante un _service worker_ y un manifiesto.
- **Extensiones:** paquetes instalables con un manifiesto, scripts y permisos explícitos para modificar Chrome o interactuar con páginas.
- **Userscripts:** scripts que una extensión gestora inyecta en páginas que coinciden con determinadas direcciones.
- **Bookmarklets:** pequeños programas [JavaScript](https://lineadecodigo.com/javascript/) guardados como la dirección de un marcador y ejecutados en la página activa.

Las antiguas Chrome Apps no son el modelo recomendado para nuevos proyectos. Para elegir una alternativa conviene separar la necesidad: una aplicación web o PWA para ofrecer un producto accesible por URL; una extensión para integrarse con el navegador; y un script o bookmarklet para automatizaciones personales pequeñas.


## Características de Desarrollo en Chrome

- **Inspección en tiempo real:** el panel Elements muestra el [DOM](https://lineadecodigo.com/dom/) y los estilos calculados. Los cambios realizados allí son temporales y sirven para probar una solución antes de modificar los archivos originales.
- **Consola JavaScript:** permite evaluar expresiones en el contexto de la página, explorar objetos y usar utilidades como `console.table()`, `console.dir()` y `console.time()`. El código ejecutado dispone de APIs como `document`, `window`, `fetch()` y `localStorage`, siempre sujeto al contexto y a los permisos de la página.
- **Depuración con puntos de interrupción:** el panel Sources puede pausar la ejecución en una línea, en un controlador de eventos o cuando cambia un [nodo del DOM](https://lineadecodigo.com/dom/nodos/). Al detenerse, muestra la pila de llamadas, las variables locales y el ámbito léxico.
- **Análisis de red:** Network registra solicitudes, cabeceras, tiempos y respuestas. Resulta útil para detectar recursos lentos, errores HTTP, problemas de caché y peticiones `fetch()` que devuelven datos inesperados.
- **Medición de rendimiento:** Performance registra actividad de [JavaScript](https://lineadecodigo.com/javascript/), renderizado y tareas largas. Lighthouse complementa el diagnóstico con auditorías de rendimiento, accesibilidad y PWA, pero sus resultados deben interpretarse junto al comportamiento real de la aplicación.
- **Persistencia y almacenamiento:** Application permite revisar cookies, `localStorage`, `sessionStorage`, IndexedDB, cachés y _service workers_. Esto facilita comprobar qué datos conserva una aplicación y limpiar estados que interfieren en una prueba.
- **Modelo de seguridad:** la política del mismo origen, la Política de Seguridad de Contenido y los permisos de las extensiones limitan qué recursos puede leer o modificar un script. El código que funciona en la consola no obtiene automáticamente esos permisos en una aplicación publicada.
- **Ecosistema de APIs del navegador:** el desarrollo combina el [DOM](https://lineadecodigo.com/dom/), eventos con `addEventListener()`, objetos y [arrays de JavaScript](https://lineadecodigo.com/javascripts/arrays/), y operaciones asíncronas basadas en promesas. La disponibilidad exacta de una API debe comprobarse para los navegadores que soporte el proyecto.

## ¿Por qué aprender Desarrollo en Chrome?


Trabajar con Chrome permite observar lo que sucede entre el código fuente y el resultado que recibe el usuario. En lugar de añadir mensajes al azar o modificar archivos repetidamente, se puede pausar una función, revisar sus valores y seguir la pila de llamadas hasta localizar el origen de un error.


También ayuda a resolver problemas que no pertenecen únicamente a JavaScript. Una interfaz puede fallar porque un selector no encuentra el nodo esperado, una solicitud devuelve un estado incorrecto, el navegador conserva una respuesta en caché o una tarea bloquea el hilo principal. DevTools reúne esas señales en un mismo entorno.


Este conocimiento resulta útil para:

- probar expresiones y APIs antes de incorporarlas al proyecto;
- depurar controladores de eventos y operaciones asíncronas;
- verificar las estructuras de objetos y arrays recibidas por una aplicación;
- reproducir solicitudes de red y examinar su respuesta;
- analizar problemas de carga, renderizado y uso de memoria;
- crear snippets, userscripts o bookmarklets para automatizar tareas repetitivas;
- desarrollar y probar extensiones desde `chrome://extensions` mediante el modo de desarrollador;
- validar el registro, la caché y el funcionamiento sin conexión de una PWA.

Para una persona con nivel medio de JavaScript, estas herramientas conectan conceptos como el DOM, los eventos, las promesas y el ciclo de ejecución con su comportamiento real en el navegador. Esa relación permite diagnosticar problemas con evidencias y no solo leyendo el código de forma estática.


## Ejemplo de Desarrollo en Chrome


El siguiente script se ejecuta en la consola de DevTools sobre cualquier página. Localiza enlaces, botones y controles de formulario visibles, comprueba si tienen un nombre accesible básico y muestra el resultado en una tabla.


```javascript
const elementosInteractivos = [
  ...document.querySelectorAll(
    'a[href], button, input, select, textarea, [role="button"]'
  ),
];

const informe = elementosInteractivos.map((elemento, indice) => {
  const textoVisible = elemento.textContent.trim();
  const etiqueta = elemento.getAttribute('aria-label');
  const titulo = elemento.getAttribute('title');
  const valor = elemento instanceof HTMLInputElement ? elemento.value : '';
  const nombreAccesible = etiqueta || textoVisible || titulo || valor;

  return {
    indice: indice + 1,
    elemento: elemento.tagName.toLowerCase(),
    texto: nombreAccesible || '(sin nombre)',
    visible: Boolean(elemento.offsetWidth || elemento.offsetHeight),
  };
});

console.table(informe);

const elementosSinNombre = elementosInteractivos.filter((elemento) => {
  const textoVisible = elemento.textContent.trim();
  const etiqueta = elemento.getAttribute('aria-label');
  const titulo = elemento.getAttribute('title');
  const valor = elemento instanceof HTMLInputElement ? elemento.value : '';

  return !(etiqueta || textoVisible || titulo || valor);
});

console.log('Elementos sin nombre:', elementosSinNombre);
```


Mediante el método `document.querySelectorAll()` obtiene una colección de elementos interactivos del DOM. El operador de propagación la convierte en un array para poder aplicar `map()` y `filter()`. Cada elemento se transforma en un objeto con datos adecuados para `console.table()`, que presenta el informe en columnas.


La segunda operación conserva las referencias reales a los nodos que no tienen texto, `aria-label`, `title` ni valor. Chrome permite desplegar el array de la consola y seleccionar cada nodo para inspeccionarlo en Elements. El resultado sirve como diagnóstico inicial; no sustituye el cálculo completo del nombre accesible ni una auditoría de accesibilidad.


Para estudiar la ejecución, se puede guardar el código en **Sources > Snippets**, establecer un punto de interrupción dentro de la función de `map()` y ejecutarlo paso a paso. Así se observan el elemento actual, el ámbito de las variables y el contenido de cada objeto antes de incorporarlo al informe.

