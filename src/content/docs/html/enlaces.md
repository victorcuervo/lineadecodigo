---
title: "Enlaces"
description: "Crea enlaces HTML con a y href: rutas relativas, anclas, destinos externos y nuevas pestañas. Incluye ejemplos y pautas de accesibilidad y seguridad."
date: 2026-01-18
updatedDate: 2026-10-12
tags: ["a","href","target","enlaces"]
slug: html/enlaces
type: category
topic: html
id: 2eca9dfb-adca-80f5-afe7-d6ecde7cd2bc
author: victor_cuervo
---

## ¿Qué son los Enlaces HTML?


Los **enlaces HTML** son hipervínculos que permiten navegar a otro recurso o a una parte de un documento. Se crean con el elemento `a` y el atributo `href`, que indica la dirección de destino.


En [HTML](https://lineadecodigo.com/html/), un atributo añade información a un elemento. En `<a href="https://lineadecodigo.com/html/">Ejemplos de HTML</a>`, `href` contiene la URL —la dirección del recurso— y «Ejemplos de HTML» es el texto que el usuario puede activar. El destino y el texto visible cumplen funciones diferentes: uno determina la navegación y el otro explica adónde conduce.


Un enlace puede ser **interno**, cuando apunta al mismo sitio, o **externo**, cuando conduce a otro. También puede usar un fragmento, como `#contacto`, para señalar un elemento concreto del documento. Estas categorías describen el destino; no requieren etiquetas distintas.


Un elemento `a` sin `href` no crea un hipervínculo. Tampoco basta con colorear o subrayar un texto: la navegación depende del marcado, no de su apariencia.


## Características de Enlaces HTML

- **Direcciones absolutas y relativas.** Una URL absoluta, como `https://lineadecodigo.com/html/`, especifica el esquema y el dominio. Una referencia relativa, como `contacto.html`, se resuelve respecto a la URL base del documento. Esa base suele ser la dirección de la página, aunque el elemento `base` puede modificarla. Un enlace interno puede usar una URL absoluta; «interno» y «relativo» no son sinónimos.
- **Rutas según la ubicación.** Si la página está en `https://ejemplo.com/guias/index.html`, `contacto.html` apunta a `/guias/contacto.html`, `../contacto.html` a `/contacto.html` y `/ayuda/` a la raíz del mismo sitio. Estos ejemplos suponen que no hay un elemento `base`. Una ruta que empieza por `/` se resuelve desde la raíz del sitio cuando se sirve por HTTP o HTTPS, no desde la carpeta actual.
- **Fragmentos y anclas.** `href="#contacto"` apunta al elemento con `id="contacto"` en el mismo documento. `guia.html#instalacion` combina otra página con un fragmento. Los identificadores deben ser únicos dentro del documento y coincidir con el destino escrito. El navegador suele desplazar la vista hasta ese elemento; no hace falta crear un enlace con el antiguo atributo `name` para marcarlo.
- **Destino de apertura.** Sin `target`, y salvo un destino predeterminado definido mediante `base`, la navegación se realiza en el contexto actual. `target="_self"` lo indica explícitamente; `target="_blank"` solicita uno nuevo, normalmente una pestaña, aunque la presentación depende del navegador y de las preferencias del usuario. Un enlace externo no necesita abrirse en otra pestaña por ser externo.
- **Relación y seguridad.** `rel="noopener"` evita que el nuevo contexto acceda al original mediante `window.opener`. Los navegadores modernos aplican implícitamente ese comportamiento a `target="_blank"`, pero declararlo hace explícita la intención. `rel="noreferrer"` también impide enviar la información de procedencia en la cabecera HTTP `Referer` e implica `noopener`; úsalo cuando quieras ese efecto de privacidad, no como sustituto indiferenciado.
- **Enlaces especiales.** `mailto:` solicita abrir un gestor de correo y `tel:` una aplicación capaz de realizar llamadas. Su funcionamiento depende de las aplicaciones configuradas y del dispositivo. Un enlace de correo no envía un mensaje automáticamente.
- **Descargas.** El atributo `download` expresa la intención de descargar el recurso y puede sugerir un nombre de archivo. No garantiza la descarga en cualquier situación: se aplica a recursos del mismo origen y a URL `blob:` o `data:`, y el resultado también depende del navegador y de las cabeceras de respuesta. El mismo origen supone compartir esquema, host y puerto.
- **Contenido y accesibilidad.** Un enlace puede contener texto o imágenes, pero no otro enlace ni controles interactivos como un botón. Su texto debe identificar el propósito del destino; «Consultar horarios del taller» es más informativo que «Haz clic aquí». Si una imagen es el único contenido, su texto alternativo debe comunicar ese propósito. `title` puede aportar información complementaria, pero no sustituye una etiqueta comprensible.

## ¿Por qué aprender sobre Enlaces HTML?


Los hipervínculos conectan páginas de un sitio, referencias técnicas y apartados de documentos extensos. Permiten construir navegación sin depender de scripts, con comportamientos que el navegador ya ofrece: abrir en otra pestaña, copiar la dirección o seguir el enlace mediante el teclado.


Comprender las rutas evita fallos al mover una página entre carpetas o publicar un sitio bajo un subdirectorio. Una referencia relativa puede dejar de apuntar al archivo esperado si cambia la ubicación del documento; una ruta desde la raíz puede omitir el subdirectorio donde está alojado el proyecto.


El texto descriptivo ayuda a decidir qué enlace seguir y a distinguir destinos cuando una tecnología de asistencia presenta una lista de enlaces. Avisar de una nueva pestaña o de un archivo descargable reduce sorpresas. No se debe depender únicamente del color para que el enlace sea reconocible.


También conviene distinguir **navegación y acción**. Para ir a otra página se utiliza `a` con `href`; para ejecutar una acción en la interfaz, como abrir un diálogo, normalmente se utiliza `button`. Sustituir enlaces por elementos genéricos con eventos obliga a reconstruir comportamientos de teclado y navegación que ya existen.


## Ejemplo de Enlaces HTML


Este documento incluye navegación a un apartado, una referencia externa en la pestaña actual y otra en una nueva. Guárdalo como `enlaces.html`, con codificación UTF-8, y ábrelo en un navegador. Los destinos externos necesitan conexión a Internet; los fragmentos del documento funcionan localmente.


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Información del taller</title>
</head>
<body>
  <main>
    <h1 id="inicio">Información del taller</h1>

    <p><a href="#horarios">Consultar horarios del taller</a></p>

    <h2>Material de consulta</h2>
    <p>
      <a href="https://lineadecodigo.com/html/">
        Consultar ejemplos de HTML
      </a>
    </p>
    <p>
      <a href="https://developer.mozilla.org/es/docs/Web/HTML"
         target="_blank"
         rel="noopener">
        Consultar la documentación de HTML en MDN
        (se abre en otra pestaña)
      </a>
    </p>

    <h2 id="horarios">Horarios del taller</h2>
    <p>El taller comienza a las 10:00 y termina a las 12:00.</p>
    <p><a href="#inicio">Volver al inicio de la información</a></p>
  </main>
</body>
</html>
```


Al activar «Consultar horarios del taller», el navegador seleccionará el fragmento `#horarios` de la URL y desplazará la vista hacia el encabezado correspondiente cuando sea necesario. Si todo el contenido ya cabe en pantalla, puede no apreciarse un desplazamiento. «Volver al inicio de la información» apunta al encabezado con `id="inicio"`.


El enlace a Línea de Código usa una dirección absoluta y navega en la pestaña actual. El enlace a MDN solicita una nueva pestaña mediante `target="_blank"`, informa de ese cambio en el texto visible y declara `rel="noopener"`. No se añade `noreferrer` porque impedir el envío de la procedencia sería una decisión adicional.


Para enlazar otra página del mismo proyecto, utiliza una ruta relativa cuando corresponda:


```html
<a href="contacto.html">Consultar los datos de contacto</a>
```


Este fragmento requiere que exista `contacto.html` en la misma carpeta que `enlaces.html`, siempre que no se haya cambiado la URL base. Si el archivo no existe, el enlace no lo crea: al seguirlo se producirá un error de carga o una respuesta de recurso no encontrado.


Comprueba la navegación con la tecla Tab para llegar a cada enlace y Enter para activarlo. Revisa que los textos distingan los destinos, que los fragmentos coincidan con sus identificadores y que solo el enlace que lo anuncia solicite una nueva pestaña.

