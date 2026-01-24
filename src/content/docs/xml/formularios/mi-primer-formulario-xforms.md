---
title: "Mi primer formulario XForms"
description: ""
date: 2007-11-24
updatedDate: 2026-01-24
tags: ["action","form","input","instance","label","method","model","namespace","ref","submission","w3c"]
slug: xml/formularios/mi-primer-formulario-xforms
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_xforms/blob/master/mi-primer-formulario-xforms.xhtml
topic: xml


---

[XForms](http://www.manualweb.net/xforms/), otra tecnología X*. Un amigo mío dice, en broma, que toda tecnología que evoluciona el [W3C](http://www.w3c.org/) le pega la X. Ya lo hizo al evolucionar su [HTML](https://www.manualweb.net/html/) al XHTML, las Querys al XQuery y claro está los formularios (Form) a [XForms](http://www.manualweb.net/xforms/). Vamos, que podríamos decir que estamos delante de una verdadera generación X.


## ¿Qué es XForms?


[XForms](http://www.manualweb.net/xforms/) como reza su página del [W3C](http://www.w3c.org/) es “the next generation of web forms”.... la nueva generación de formularios web. Y es que los formularios [HTML](https://www.manualweb.net/html/) se nos habían quedado pequeños y había que acometer dos cosas sobre ellos:

- Separar el modelo de datos del formulario y su diseño visual
- Dotar de mayor potencia a los formularios: funciones de trabajo sobre ellos, nuevos componentes visuales,...

De las dos cosas mencionadas, la primera es la más importante. Separación de los datos de la presentación. Es por ello que se crea un conjunto de componentes visuales que pueden ser usados dentro de un documento XHTML o cualquier otro documento [XML](http://www.manualweb.net/xml/). Por otro lado se define el concepto de instancia de datos. Esto es un modelo de datos que viene a reflejar la estructura de datos que se va a manejar. Estos datos son los que realmente se van a intercambiar. Estas dos cosas: controles de formulario y la instancia de datos son ligados mediante un procesador [XForms](http://www.manualweb.net/xforms/) el cual define como se envía y recibe datos.


## Mi primer formulario


Pongámonos manos a la obra y construyamos nuestro primer formulario basado en [XForms](http://www.manualweb.net/xforms/). El movimiento se demuestra andando....Lo primero que tenemos que saber es que vamos a construir un documento XHTML.


```text
<h:html xmlns:h="http://www.w3.org/1999/xhtml">
 <h:head>
   <h:title>Mi primer formulario XForms</h:title>
 </h:head>
 <h:body>

 ...

 </h:body>
</h:html>
```


Si os fijáis en el código. El namespace escogido en mi ejemplo para el XHTML> es h. Esto nos permitirá diferenciarlo de las etiquetas [XForms](http://www.manualweb.net/xforms/). Lo siguiente que tenemos que hacer es incluir el namespace de [XForms](http://www.manualweb.net/xforms/). Este, está definido en http://www.w3.org/2002/xforms


```text
<h:html xmlns="http://www.w3.org/2002/xforms" xmlns:h="http://www.w3.org/1999/xhtml"></h:html>
```


En nuestro ejemplo vamos a poner un formulario de búsqueda. No nos vamos a complicar más la vida. Dentro de este formulario pondremos dos campos de entrada de texto y un botón que lance la búsqueda. > Lo más interesante de los [XForms](http://www.manualweb.net/xforms/) es que HA DESAPARECIDO LA ETIQUETA FORM.


Para añadir los campos de entrada de texto tenemos el elemento [input](https://www.w3api.com/Java/InputMismatchException/):


```text
<input></input>
  <label>Nombre:</label>
<h:br></h:br>
<input></input>
 <label>Apellido:</label>
```


Dentro de la etiqueta input podemos encontrar dos elementos

- Label: Para indicar el nombre que se antepondrá al campo de entrada
- Hint: Que es una etiqueta de texto emergente que nos servirá de aviso.

Para añadir el botón de búsqueda tendremos que trabajar con el elemento submit. Este elemento tiene asociado un atributo que es submission, el cual enlazará con una acción de envío.


```text
<submit submission="busqueda">
  <label>Buscar</label>
</submit>
```


## Enlazando el formulario con el modelo de datos


Como hemos dicho en la introducción. [XForms](http://www.manualweb.net/xforms/) separa los datos de la presentación. El modelo de dato se define dentro de la etiqueta model. Y un modelo contendrá una instancia del mismo (definida por el elemento instance), la cual contendrá los datos. Veamos como quedaría nuestro formulario con el nombre y apellido como modelo:


```text
<model>
  <instance>
    <data xmlns="">
      <nombre>Victor</nombre>
      <apellido>Cuervo</apellido>
    </data>
  </instance>
</model>
```


Si queremos hacer referencia a algún elemento del modelo desde los controles visuales lo haremos mediante el atributo ref. Así nuestros componentes visuales quedarían de la siguiente forma:


```text
<input ref="nombre"></input>
 <label>Nombre:</label>
<h:br></h:br>
<input ref="apellido"></input>
 <label>Apellido:</label>
```


Dentro del modelo también tendremos la acción desencadenada por el componente gráfico submit. El elemento que tiene la acción es submission.


```text
<submission action="http://example.com/buscar" method="post" id="buscar"/>
```


Este elemento tiene múltiples atributos, pero entre ellos destacamos tres: - action, que define la URI donde se enviarán los datos.

- method, que indica que tipo de protocolo se va a utilizar para la serialización de datos: post, get,...
- id, identificador que lo hace único y que será usado por el elemento submit para identificar la acción de búsqueda a usar.

## Visualizar nuestro trabajo: plug-in para Mozilla


Solo nos quedará por guardar nuestro ejemplo como .xhtml y probarlo. Para probar el [XForms](http://lineadecodigo.com/categoria/xforms/) con Mozilla y FireFox hay que descargarse un plug-in https://addons.mozilla.org/firefox/824/ que nos servirá para nuestros ejemplos.


Otros interpretes de [XForms](http://lineadecodigo.com/categoria/xforms/) están disponibles en [http://www.w3.org/MarkUp/Forms/#implementations](http://www.w3.org/MarkUp/Forms/#implementations)

