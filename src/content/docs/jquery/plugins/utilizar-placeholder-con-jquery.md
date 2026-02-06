---
title: "Utilizar Placeholder con jQuery"
description: "Aprende a utilizar placeholder con jQuery y mejora la experiencia del usuario en tus formularios, sin depender de HTML5 y con un simple plugin."
date: 2012-02-16
updatedDate: 2026-02-06
tags: ["placeholder","plugin"]
slug: jquery/plugins/utilizar-placeholder-con-jquery
type: doc
topic: jquery
id: 2c8a9dfb-adca-814e-8249-d57c82d3ef2a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/tree/master/plugins/jquery-placeholder
---

Seguro que alguno de vosotros ha leído nuestro [artículo que cuenta como utilizar un placeholder con HTML5](http://lineadecodigo.com/html5/placeholder-marcadores-de-posicion-en-html5/). Esto nos posibilita el poner un texto dentro de un campo de un formulario para orientar al usuario sobre qué contenido insertar en dicho campo.


Si bien, uno de los problemas que nos plantea el uso de ciertas propiedades [HTML5](https://www.manualweb.net/html5/) es la falta de implementación por parte de ciertos navegadores. Es por ello que la experiencia del usuario de esos navegadores puede ser diferente a la del resto.


Si queremos utilizar [placeholders](https://www.w3api.com/HTML/input/.placeholder) sin [HTML5](https://www.manualweb.net/html5/) podemos recurrir a un [plugin de jQuery](https://github.com/mathiasbynens/jquery-placeholder).


Mediante el uso de [jQuery](http://www.manualweb.net/jquery/) y este plugin será muy sencillo poder utilizar un [placeholders](https://www.w3api.com/HTML/input/.placeholder). Además es que la forma en la que utilicemos el [placeholders](https://www.w3api.com/HTML/input/.placeholder) será la misma forma en la que lo utilizábamos en [HTML5](https://www.manualweb.net/html5/).


Es decir, si queremos crear un [placeholders](https://www.w3api.com/HTML/input/.placeholder) pondremos lo siguiente:


```html
<label for="texto">Nombre: </label>
<input id="texto" placeholder="Inserte su nombre" size="40" type="text"></input>
```


## Instalar jQuery y el Plugin


Para poder utilizar el [placeholders](https://www.w3api.com/HTML/input/.placeholder) con [jQuery](http://www.manualweb.net/jquery/) tendremos que hacer varias cosas. La primera será instanciar [jQuery](http://www.manualweb.net/jquery/) e instanciar el [plugin de jQuery](https://github.com/mathiasbynens/jquery-placeholder).


```html
<script src="jquery.js"></script>
<script src="jquery.placeholder.min.js"></script>
```


## Inicializar el Plugin


El siguiente paso es inicializar el [plugin de jQuery](https://github.com/mathiasbynens/jquery-placeholder). En este caso el código de inicialización es:


```javascript
$('input, textarea').placeholder();
```


Si bien, deberemos de esperar a tener cargada la página. Por ello recurriremos al método [ready()](https://www.w3api.com/jQuery/ready) de [jQuery](http://www.manualweb.net/jquery/).


```javascript
<script>
$(document).ready(function(){
	$('input, textarea').placeholder();
});
</script>
```


Con un [plugin de jQuery](https://github.com/mathiasbynens/jquery-placeholder) y unas pocas líneas de código tenemos la capacidad de dar soporte a los placeholders de [HTML5](https://www.manualweb.net/html5/).


Te puedes descargar el [plugin jQuery](https://github.com/mathiasbynens/jquery-placeholder) desde [https://github.com/mathiasbynens/jquery-placeholder](https://github.com/mathiasbynens/jquery-placeholder).

