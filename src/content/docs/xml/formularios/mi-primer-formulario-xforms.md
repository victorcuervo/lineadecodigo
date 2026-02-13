---
title: "Mi primer formulario XForms"
description: ""
date: 2007-11-24
updatedDate: 2026-02-13
tags: ["action","form","input","instance","label","method","model","namespace","ref","submission","w3c"]
slug: xml/formularios/mi-primer-formulario-xforms
type: doc
topic: xml
id: 2c8a9dfb-adca-81e6-9b6a-fb58a22591ed
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_xforms/blob/master/mi-primer-formulario-xforms.xhtml
---

## Introducción


[XForms](https://lineadecodigo.com/xml/xforms/), otra tecnología X*. Un amigo mío dice, en broma, que a toda tecnología que evoluciona el [W3C](http://www.w3c.org/) le pega la X.


Ya lo hizo al evolucionar [HTML](https://www.manualweb.net/html/) a XHTML, las _queries_ a XQuery y, claro está, los formularios (_forms_) a [XForms](https://lineadecodigo.com/xml/xforms/). Vamos, que podríamos decir que estamos delante de una verdadera generación X.


## ¿Qué es XForms?


[XForms](https://www.manualweb.net/xforms/), como reza su página del [W3C](http://www.w3c.org/), es “the next generation of web forms”, la nueva generación de formularios web.


Y es que los formularios HTML se nos habían quedado pequeños y había que acometer dos cosas:

- Separar el modelo de datos del formulario y su diseño visual.
- Dotar de mayor potencia a los formularios: funciones de trabajo, nuevos componentes visuales, etc.

De las dos cosas mencionadas, la primera es la más importante: la separación de los datos y la presentación.


Por un lado, se crea un conjunto de componentes visuales que pueden ser usados dentro de un documento XHTML o cualquier otro documento [XML](http://www.manualweb.net/xml/).


Por otro lado, se define el concepto de **instancia de datos**, un modelo que refleja la estructura de información que se va a manejar. Estos datos son los que realmente se van a intercambiar.


Ambas piezas, controles de formulario e instancia de datos, se ligan mediante un procesador [XForms](https://lineadecodigo.com/xml/xforms/), que define cómo se envían y reciben datos.


## Mi primer formulario


Pongámonos manos a la obra y construyamos nuestro primer formulario basado en [XForms](https://lineadecodigo.com/xml/xforms/). El movimiento se demuestra andando.


Lo primero que tenemos que saber es que vamos a construir un documento XHTML:


```xml
<h:html xmlns:h="http://www.w3.org/1999/xhtml">
	<h:head>
		<h:title>Mi primer formulario XForms</h:title>
	</h:head>
	<h:body>
		...
	</h:body>
</h:html>
```


Si te fijas en el código, el _namespace_ escogido para XHTML es `h`. Esto nos permitirá diferenciarlo de las etiquetas de XForms.


Lo siguiente es incluir el _namespace_ de XForms, definido en [`http://www.w3.org/2002/xforms`](http://www.w3.org/2002/xforms):


```xml
<h:html xmlns="http://www.w3.org/2002/xforms" xmlns:h="http://www.w3.org/1999/xhtml">
</h:html>
```


En nuestro ejemplo vamos a poner un formulario de búsqueda. No nos vamos a complicar más.


Dentro de este formulario pondremos dos campos de entrada de texto y un botón que lance la búsqueda.


Lo más interesante de XForms es que **ha desaparecido la etiqueta** **`form`**.


### Campos de entrada (`input`)


Para añadir los campos de entrada de texto tenemos el elemento `input`:


```xml
<input></input>
<label>Nombre:</label>
<h:br></h:br>
<input></input>
<label>Apellido:</label>
```


Dentro de la etiqueta `input` podemos encontrar dos elementos:

- `label`: indica el nombre que se antepondrá al campo de entrada.
- `hint`: muestra un texto emergente a modo de ayuda o aviso.

### Botón de búsqueda (`submit`)


Para añadir el botón de búsqueda tendremos que trabajar con el elemento `submit`. Este elemento tiene asociado el atributo `submission`, que enlazará con una acción de envío.


```xml
<submit submission="busqueda">
	<label>Buscar</label>
</submit>
```


## Enlazar el formulario con el modelo de datos


Como hemos dicho en la introducción, XForms separa los datos de la presentación.


El modelo de datos se define dentro de la etiqueta `model`, y contendrá una instancia (definida por el elemento `instance`) que, a su vez, contendrá los datos.


Veamos cómo quedaría nuestro formulario con el nombre y el apellido como modelo:


```xml
<model>
	<instance>
		<data xmlns="">
			<nombre>Victor</nombre>
			<apellido>Cuervo</apellido>
		</data>
	</instance>
</model>
```


Si queremos hacer referencia a algún elemento del modelo desde los controles visuales lo haremos mediante el atributo `ref`. Así nuestros componentes visuales quedarían de la siguiente forma:


```xml
<input ref="nombre"></input>
<label>Nombre:</label>
<h:br></h:br>
<input ref="apellido"></input>
<label>Apellido:</label>
```


Dentro del modelo también tendremos la acción desencadenada por el componente gráfico `submit`. El elemento que define la acción es `submission`:


```xml
<submission action="http://example.com/buscar" method="post" id="buscar"/>
```


Este elemento tiene múltiples atributos, pero entre ellos destacamos tres:

- `action`: define la URI donde se enviarán los datos.
- `method`: indica qué tipo de protocolo se va a utilizar para la serialización de datos (`post`, `get`, etc.).
- `id`: identificador único, que será usado por el elemento `submit` para identificar la acción de búsqueda.

## Probar el formulario


Solo nos quedará guardar nuestro ejemplo como `.xhtml` y probarlo.


Para probar XForms con Mozilla Firefox hay que descargarse un _plug-in_ desde [https://addons.mozilla.org/firefox/824/](https://addons.mozilla.org/firefox/824/), que nos servirá para ejecutar los ejemplos.


Otros intérpretes de XForms están disponibles en: [http://www.w3.org/MarkUp/Forms/#implementations](http://www.w3.org/MarkUp/Forms/#implementations)

