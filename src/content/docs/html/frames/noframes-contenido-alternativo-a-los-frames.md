---
title: "NOFRAMES - Contenido alternativo a los frames"
description: "El contenido alternativo a los frames es esencial para navegadores que no los soportan, ofreciendo información accesible a todos."
date: 2006-12-14
updatedDate: 2026-01-06
tags: ["noframes","frame"]
slug: html/frames/noframes-contenido-alternativo-a-los-frames
type: doc
topic: html
id: 2c5a9dfb-adca-8052-b3ed-ed7820bf3d51
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/tree/master/lineadecodigo_html/frames/noframes
---

Aunque un porcentaje muy alto de navegadores tiene a día de hoy un soporte de frames, aún podemos encontrarnos con navegadores que no lo tengan. Y es que si pensamos en los [FireFox 2](http://www.getfirefox.com/), [Internet Explorer 7](http://www.microsoft.com/windows/ie/), [Opera 9](http://www.opera.com/) y compañia nunca se nos va a presentar el no soporte de frames. Si bien, navegadores en formato texto (Lynx ya los sporta desde la versión 2.6) o ciertas agentes podrían no soportar una página web con frames. En este segundo grupo podríamos englobar a bot de buscadores, herramientas de accesibilidad,… Y es en estos casos cuando debemos de proporcionar un contenido alternativo a los frames. Ya que nuestro agente no va a ser capaz de cargarlos. En estos casos, la especificación HTML v4.01 nos proporciona la etiqueta [NOFRAMES](http://www.w3api.com/wiki/HTML:NOFRAMES). Dicha etiqueta la deberemos de situar detras de la etiqueta [FRAMESET](http://www.w3api.com/wiki/HTML:FRAMESET) y su contenido será el contenido alternativo que se presentará en vez de los frames. Un ejemplo de página preparada para un no soporte de frames sería la siguiente:


```html
<noframes>
  <body>
   Necesitas un navegador con soporte de frames para poder ver esta página. Puedes descargarte los siguientes...
  </body>
</noframes>
```


Podemos ver que la etiqueta [NOFRAMES](http://www.w3api.com/wiki/HTML:NOFRAMES) va dentro de la etiqueta [FRAMESET](http://www.w3api.com/wiki/HTML:FRAMESET) y su contenido será lo que se muestre si nuestro browser o agente no soporta los frames. Lo que más se suele ver en Internet es el mensaje que nos indica que nuestro navegador no soporta frames. Si bien, este enfoque, no es del todo válido. En cierta forma estamos discriminando a la persona que no tiene soporte de frames. Cosa, que en ciertos casos podría llegar a ser un impedimento legal. El mejor enfoque es darles la misma información que se da en la página, pero de una forma distinta al sistema de frames. No pasa nada porque visualmente no tenga una apariencia correcta, si bien, desde el punto de vista funcional debe de dar la misma información. Así, un buen caso podría ser el siguiente:


```html
<noframes>
   <body>
    <h1>Pagina principal</h1>

    <h2>Menu</h2>
    <a href=enlace1.html>enlace 1</a>
    <a href=enlace2.html>enlace 2</a>
    <a href=enlace3.html>enlace 3</a>

    <h2>Contenido</h2>
    Contenido de la página
   </body>
</noframes>
```


Dentro de la etiqueta [NOFRAMES](http://www.w3api.com/wiki/HTML:NOFRAMES) estamos metiendo el mismo contenido que irá en las diferentes páginas del sistema de frames.


**NOTA**: Para poder visualizar el ejemplo de forma correcta deberás de utilizar un navegador que no soporte frames.

