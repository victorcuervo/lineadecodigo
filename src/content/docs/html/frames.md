---
title: "Frames"
description: "Comprende los frames HTML, la diferencia entre frameset e iframe y cómo incrustar documentos con sandbox, control de origen y un ejemplo accesible."
date: 2026-10-13
updatedDate: 2026-10-13
tags: ["frame","frameset","accesibilidad"]
slug: html/frames
type: category
topic: html
id: 3f7a9dfb-adca-804a-ae9a-f5d472866eab
author: victor_cuervo
---

## ¿Qué son los Frames HTML?


Los **frames HTML** son marcos que muestran un documento dentro de un contexto de navegación separado. Cada marco puede cargar su propia página y permite que ese contenido se visualice sin sustituir necesariamente el documento que lo contiene.


El término abarca dos mecanismos que conviene distinguir. Históricamente, `<frameset>` dividía la ventana en filas o columnas y cada `<frame>` cargaba una página. Los elementos `<frameset>`, `<frame>` y `<noframes>` están obsoletos y no son conformes con HTML actual: pueden aparecer en sitios antiguos, pero no deben utilizarse en desarrollos nuevos.


La alternativa vigente para **incrustar un documento** es `<iframe>`. Se coloca dentro del contenido normal de una página y crea un contexto de navegación anidado, es decir, un espacio con su propio documento y navegación. No es un sustituto de las herramientas de diseño para distribuir las secciones de un sitio.


El navegador realiza el **renderizado**, la conversión del documento en su representación visible, de forma independiente para la página principal y el contenido incrustado. Por ello, el documento del iframe no pasa a formar parte de la estructura interna de la página que lo contiene, ni hereda automáticamente sus estilos.


## Características de Frames HTML

- **Contenido con** **`src`** **o** **`srcdoc`****.** `src` indica la URL del documento que se carga, ya sea relativa o absoluta. `srcdoc` permite proporcionar directamente el código HTML del documento incrustado y tiene prioridad sobre `src` cuando el navegador lo admite. No introduzcas contenido no confiable en `srcdoc` sin medidas de seguridad: también se interpreta como un documento HTML.
- **Dimensiones del marco.** `width` y `height` establecen dimensiones en píxeles CSS mediante valores numéricos, como `width="600"`. Describen el espacio del iframe, no el tamaño del documento que carga. Su altura no se ajusta automáticamente al contenido interno; puede aparecer desplazamiento si este supera el espacio disponible.
- **Origen y acceso entre documentos.** Un origen se define por la combinación de protocolo, host y puerto. `https://ejemplo.com` y `https://ejemplo.com:8443` tienen orígenes distintos. La política del mismo origen limita el acceso mediante scripts entre documentos de orígenes diferentes. Poder mostrar una página en un iframe no implica poder leer o modificar su contenido desde la página principal.
- **Aislamiento con** **`sandbox`****.** Un atributo `sandbox` sin permisos adicionales aplica restricciones, entre ellas impedir la ejecución de scripts, el envío de formularios y diversas formas de navegación o apertura de ventanas. También trata el documento como si tuviera un origen opaco, sin la identidad normal de su origen. Este aislamiento no impide por sí solo todas las solicitudes de red ni sustituye a otras medidas de seguridad.
- **Permisos mínimos necesarios.** Los valores de `sandbox` relajan restricciones concretas: `allow-scripts` permite scripts, `allow-forms` permite enviar formularios y `allow-same-origin` conserva el origen real en lugar de imponer uno opaco. Este último no convierte un sitio externo en contenido del mismo origen. Evita combinar `allow-scripts` y `allow-same-origin` para contenido del mismo origen que la página principal: puede permitir que el contenido elimine el aislamiento impuesto por el atributo.
- **Capacidades con** **`allow`****.** Este atributo configura la delegación de funciones sujetas a la política de permisos, como cámara, micrófono o pantalla completa. No equivale a `sandbox`, no garantiza que la función pueda utilizarse y no elimina los requisitos de autorización del usuario ni las restricciones del navegador. Concede únicamente las capacidades que la integración necesite.
- **Identificación y accesibilidad.** Un `title` descriptivo, como «Vista previa del programa del curso», identifica el marco para usuarios de tecnologías de asistencia. No sustituye al título ni a la accesibilidad del documento incrustado. El atributo `name` tiene otra función: identifica el contexto como destino de enlaces o formularios mediante `target`.
- **Carga y privacidad.** `loading="lazy"` permite aplazar la carga de marcos alejados del área visible y puede reducir el trabajo inicial. `referrerpolicy` controla la información de procedencia enviada al cargar el contenido; por ejemplo, `no-referrer` omite la cabecera Referer. No evita que el proveedor reciba la petición ni otros datos asociados a ella.

No todas las páginas permiten la incrustación. El servidor del documento puede bloquearla mediante la directiva `frame-ancestors` de **Content Security Policy (CSP)** o mediante `X-Frame-Options`. La página principal también puede limitar qué documentos carga con su propia directiva CSP `frame-src`. Estas restricciones no se solucionan cambiando `sandbox`; habilitar **CORS** tampoco concede permiso para incrustar una página.


Los atributos históricos de presentación, como `frameborder`, no deben utilizarse en [HTML](https://lineadecodigo.com/html/) actual. El aspecto visual se configura por separado; eliminar bordes no cambia el aislamiento ni los permisos del documento.


## ¿Por qué aprender Frames HTML?


Distinguir los frames antiguos de `<iframe>` permite mantener código heredado sin trasladar una estructura obsoleta a un sitio nuevo. Si un proyecto utiliza `<frameset>` para separar navegación y contenido, la modernización debe replantear esa estructura, no limitarse a sustituir cada marco por un iframe.


La incrustación resulta útil para incorporar un mapa, un reproductor externo, una vista previa o una herramienta que se entrega como documento independiente. En esas situaciones, conocer el origen y las restricciones ayuda a explicar por qué el contenido puede mostrarse, pero no ser accesible desde la página principal.


Los permisos mínimos reducen las capacidades innecesarias del contenido incrustado. La carga diferida puede evitar descargar integraciones antes de que se necesiten, y un título claro ayuda a identificar el propósito del marco al navegar con un lector de pantalla.


Comprender estos límites también evita elegir un iframe cuando solo se necesita reutilizar una cabecera o mostrar una sección del mismo documento. Cada marco añade una página independiente, con sus propios recursos, navegación y necesidades de accesibilidad.


## Ejemplo de Frames HTML


Este ejemplo incrusta una vista previa local con aislamiento restrictivo. Guarda los siguientes dos archivos en la misma carpeta. No requiere servicios externos, scripts ni librerías.


El archivo `index.html` contiene la página principal:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Programa del curso</title>
</head>
<body>
  <h1>Curso de HTML</h1>
  <p>Consulta el programa en la vista previa.</p>

  <iframe
    src="programa.html"
    title="Vista previa del programa del curso de HTML"
    width="600"
    height="300"
    sandbox
    loading="lazy"
    referrerpolicy="no-referrer"
  ></iframe>

  <p>
    <a href="programa.html">Abrir el programa como página independiente</a>
  </p>
</body>
</html>
```


El archivo `programa.html` contiene el documento incrustado:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Programa de HTML</title>
</head>
<body>
  <h1>Programa del curso</h1>
  <ol>
    <li>Estructura del documento</li>
    <li>Enlaces e imágenes</li>
    <li>Formularios y tablas</li>
  </ol>
  <p>Duración total: 12 horas.</p>
</body>
</html>
```


Abre `index.html` en el navegador. Verás el encabezado y la descripción de la página principal, junto con un marco que muestra el programa. Si el marco queda fuera del área visible, su carga puede aplazarse hasta que te aproximes a él.

- `src="programa.html"` resuelve una ruta relativa a la página principal. El programa sigue siendo un documento separado, aunque ambos archivos estén en la misma carpeta.
- `sandbox` se escribe sin permisos adicionales porque la vista previa solo necesita mostrar contenido estático. No contiene scripts ni formularios que requieran excepciones.
- `title` describe la función del marco; el `<title>` de `programa.html` identifica el documento interno. Son datos complementarios, no intercambiables.
- `width` y `height` reservan un área de 600 por 300 píxeles CSS. No redimensionan ni recortan permanentemente el documento interno; el navegador puede permitir desplazarse dentro del marco si hace falta.
- El enlace está fuera del iframe y ofrece una alternativa explícita para abrir el programa como documento principal. Al hacerlo, las restricciones del atributo `sandbox` de este marco no se aplican a esa navegación independiente.

Para probar restricciones de origen y cabeceras HTTP, sirve ambos archivos desde un servidor local: el comportamiento de las URL `file:` no representa fielmente el de un sitio web. Si sustituyes `src` por la URL de un proveedor externo, utiliza su dirección oficial de incrustación y verifica qué permisos exige antes de concederlos.

