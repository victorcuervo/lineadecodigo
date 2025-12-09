---
title: Página web para descargar archivos
description: "Página web para descargar archivos que permite acceder a diferentes enlaces de manera sencilla y eficiente."
lastUpdated: 2025-12-09
slug: html/pagina-web-para-descargar-archivos
author: victor_cuervo
---

Una de las cosas que más pregunta la gente cuando está aprendiendo a hacer páginas web es sobre cómo puede poner ficheros para ser descargados. Yo me pregunto que cuantas de estas personas están pensado en poner canciones, videos o fotos más o menos picantes a descargar desde su página. Pero tenemos que tener claro que Internet se fundamenta y subsiste por el intercambio de información. Y estas descargas no dejan de ser otra forma de intercambio de información. Aunque desde el punto de vista judicial se esté intentando “poner puertas al campo”. Pero, bueno, esto es para un post sobre “pajas mentales en la internet”. Crear un enlace para descargar un fichero es muy sencillo. Lo primero que tenemos que hacer es subir el fichero a nuestro servidor. Esto lo podemos hacer de dos formas: 

1. Bien que el servidor tenga instalado un sistema de subida de ficheros desde una página web. En este caso será tan sencillo como el utilizar un formulario web.
2. Bien utilizar un cliente de FTP. Este es un programa que se ejecutará en nuestra máquina, el cual sirve para conectarse para un sistema remoto y pasar ficheros desde local a este sistema. Son muy sencillos de utilizar. Por ejemplo te puedes decargar [clientes FTP desde Softonic.](http://www.softonic.com/seccion/179/Clientes_FTP)

Una vez que hayamos subido nuestro fichero al servidor deberemos de construir la página [HTML](http://www.manualweb.net/tutorial-html/) para descargarlo. Para descargarlo simplemente deberemos de crear un enlace al fichero. Los enlaces se crean mediante la etiqueta [A](http://w3api.com/wiki/HTML:A) y utilizando el [atributo href](http://w3api.com/wiki/HTML:Href). En dicho atributo deberemos de poner el nombre del fichero que queremos descargarnos. Así, si nuestro fichero se llama lineadecodigo.txt tendremos que poner la siguiente línea de código:


```html
<a href="lineadecodigo.txt">Descargar fichero lineadecodigo.txt</a>
```


En este código hay que tener especial cuidado con el path en el que hemos subido el fichero. Así, no suele ser bueno subirlo en el directorio raiz. A si que es recomendable el crear un fichero de descargas. En este caso, la línea de código quedaría de la siguiente forma:


```html
<a href="/descargas/lineadecodigo.txt">Descargar fichero lineadecodigo.txt</a>
```


Y ¿qué pasa cuando pincho al enlace?. Pues bien, todo depende del ordenador y navegador donde estemos ejecutando la página web. Y es que el navegador interpretará el tipo (conociendo la extensión del fichero) del fichero y verá si tiene un programa asociado para abrirlo. Así, si estamos en un sistema Windows, lo más probable es que el documento .txt lo abra el NotePad, los .mp3 un reproductor de música (WinAmp, Windows Media Player,…) y así por todas las extensiones configuradas en tu sistema. Si el navegador no conoce la extensión del fichero solo indica que si se quiere guardar en local. La opción de guardar siempre aparece, independientemente de la extensión. Como buena práctica, es recomendable que al lado del fichero a descargar se indique la extensión y tamaño del mismo, con el fin de facilitar su manipulación al usuario que visite nuestra web. Veamos cómo quedaría nuestro ejemplo


[Línea de Código](http://lineadecodigo.com/wp-content/uploads/2006/12/lineadecodigo.txt) (.txt, 1Kb)

