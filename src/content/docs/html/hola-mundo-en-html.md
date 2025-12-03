---
title: Hola Mundo en HTML
description: "Descripción de cómo realizar mi primer programa Hola Mundo en HTML detallado paso a paso para poder ser creado en un editor de texto."
lastUpdated: 2023-05-22
author: victor_cuervo
---

Revisando todos los artículos de [Línea de Código](https://lineadecodigo.com/) hemos caído que no teníamos uno sobre Hola Mundo en [HTML](https://www.manualweb.net/html/). Y eso no podíamos dejarlo pasar. En este artículo sobre Hola Mundo en [HTML](https://www.manualweb.net/html/) vamos a ver cómo crear nuestra primera página web [HTML](https://www.manualweb.net/html/).


Antes de empezar necesitamos tener un editor de textos par crear la página. Para ello nos vale cualquiera, ya sea el [Notepad++](http://notepad-plus-plus.org/), [Sublime Text](http://www.sublimetext.com/) u otros más avanzados como [Dreamweaver](http://www.adobe.com/products/dreamweaver.html).


Lo primero que tenemos que hacer es crear un fichero con la extensión .html. Lo vamos a llamar como **holamundo.html**. El contenido de dicho documento será texto.


### Definición de tipo documento


La primera línea del documento Hola Mundo en [HTML](https://www.manualweb.net/html/) va a ser [la declaración de documento HTML](http://lineadecodigo.com/html/indicando-el-tipo-de-documento-html/). Esta declaración lo que indica es que el contenido del fichero es de tipo [HTML](https://www.manualweb.net/html/).


```html
<!DOCTYPE html>
```


### Estructura principal


Lo siguiente será la estructura principal del documento, la cual se representa con el elemento [`html`](https://www.w3api.com/HTML/html/).


```html
<!DOCTYPE html>
<html>
  ...
</html>
```


El documento tiene dos partes bien diferenciadas: _**cabecera**_ y _**cuerpo**_.


### Cabecera del documento HTML


Por un lado la cabecera del documento [HTML](https://www.manualweb.net/html/) la cual representamos con el elemento [`head`](https://www.w3api.com/HTML/head/). Esta parte no tiene información visible de la página, simplemente contiene información relativa al documento.


```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  ...
</html>
```


Por ejemplo nos vamos a encontrar la declaración de la codificación del documento. En este caso vamos a indicar que el documento es de tipo **utf-8**. Esto lo hacemos mediante el elemento [`meta`](https://www.w3api.com/HTML/meta/), al cual le asignamos al atributo [`charset`](https://www.w3api.com/HTML/meta/charset/).


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="uft-8">
  </head>
  ...
</html>

```


Otro elemento que encontramos en la cabecera es el título de la página. El título se visualiza, normalmente, en la barra del navegador web. El elemento que define el título es [`title`](https://www.w3api.com/HTML/title/).


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="uft-8">
    <title>Hola Mundo en HTML</title>
  </head>
  ...
</html>
```


### Cuerpo del documento HTML


El cuerpo del documento es la parte que se va a visualizar en el navegador web. Para limitar el cuerpo del documento [HTML](https://www.manualweb.net/html/) vamos a utilizar el elemento [`body`](https://www.w3api.com/HTML/body/).


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="uft-8">
    <title>Hola Mundo en HTML</title>
  </head>
  <body>
    ...
  </body>
</html>
```


En nuestro primer documento Hola Mundo en [HTML](https://www.manualweb.net/html/) vamos a insertar el elemento [`h1`](https://www.w3api.com/HTML/h1/) para poner un titular y un texto que indique Hola Mundo en [HTML](https://www.manualweb.net/html/) es nuestro primer documento en [HTML](https://www.manualweb.net/html/).


```html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="uft-8">
    <title>Hola Mundo en HTML</title>
  </head>
  <body>
    <h1>Mi primera página en HTML</h1>
  </body>
</html>
```


De esta forma ya tenemos completo nuestro primer ejemplo con el Hola Mundo en [HTML](https://www.manualweb.net/html/).

