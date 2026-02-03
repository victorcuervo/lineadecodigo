---
title: "Botones con imágenes en XForms"
description: "Se explican botones con imágenes en XForms utilizando etiquetas trigger e img para mejorar el diseño de formularios."
date: 2007-01-07
updatedDate: 2026-01-24
tags: ["img","label","trigger"]
slug: xml/formularios/botones-con-imagenes-en-xforms
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-816f-8449-cdde36e6d8ba
download: https://github.com/victorcuervo/lineadecodigo_xforms/blob/master/botones-con-imagenes-xforms.xhtml
---

Si echamos la vista atrás podemos recordar que con los formularios [HTML](https://www.manualweb.net/html/) podíamos tener campos de texto de tipo "image". Estos campos de texto no eran más que una imagen sobre la que se podía pinchar. Luego aparecio la etiqueta [button](https://www.w3api.com/HTML/button/) que ya permitía anidar otros elementos. Mediante [CSS](http://www.manualweb.net/css/) se daba un nuevo salto y las propiedades permitían jugar con el color e imagen de fondo del botón. Con [XForms](http://www.manualweb.net/xforms/) vamos un paso más allá y aquí se pueden construir botones con imágenes, mediante la etiqueta IMG de [HTML](https://www.manualweb.net/html/). Algo parecido al elemento [button](https://www.w3api.com/HTML/button/) de [HTML](https://www.manualweb.net/html/). Y todo de una forma muy sencilla. Lo primero que tenemos que ver es cómo construir un botón. Para ello nos valemos de la etiqueta trigger. La verdad es que esto ha sido un cambio bastante sustancial con respecto a los [button](https://www.w3api.com/HTML/button/) del [HTML](https://www.manualweb.net/html/)Anidada a la etiqueta trigger utilizaremos [label](https://www.w3api.com/Java/JFrame/setLayout/) para indicar el texto que va sobre el botón. Teniendo un código similar al siguiente:


Como se puede observar, algo muy sencillo de codificar y muy útil en cuanto al diseño. Toda una novedad de [XForms](http://www.manualweb.net/xforms/). Veamos como sería el código completo:


```xml
<h:html xmlns="http://www.w3.org/2002/xforms" xmlns:h="http://www.w3.org/1999/xhtml">
<h:head>
 <h:title>Mi primer formulario XForms</h:title>
</h:head>
<h:body>
 
 <h:p>

  <trigger>
   <label><h:img src="documento.gif"></h:img></label>
  </trigger>

  <trigger>
   <label>Mi boton</label>
  </trigger>

 </h:p>
</h:body>
</h:html>
```


[FireFox](http://www.getfirefox.com/) ya da soporte a la especificación de [XForms](http://www.manualweb.net/xforms/), aunque, que yo sepa incompleto. Puedes encontrar otros interpretes de [XForms](http://www.manualweb.net/xforms/) en [http://www.w3.org/MarkUp/Forms/#implementations](http://www.w3.org/MarkUp/Forms/#implementations)


```xml
<trigger>
   <label><h:img src="documento.gif"></h:img></label>
</trigger>
```


Incrustar una imagen como elemento del botón será un procedimiento muy sencillo, ya que bastará con utilizar la etiqueta img, referenciando a la imagen que queramos usar, como valor del label del botón


```xml
<trigger>
   <label>Mi boton</label>
</trigger>
```

