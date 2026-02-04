---
title: "Borrado de campos en XForms"
description: "El artículo explica cómo borrar campos en XForms utilizando eventos de interacción en lugar del botón tradicional de reinicio."
date: 2007-11-25
updatedDate: 2026-01-24
tags: ["form","input","label","model","trigger"]
slug: xml/formularios/borrado-de-campos-en-xforms
type: doc
topic: xml
id: 2c8a9dfb-adca-817e-9558-d9e47db641e0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_xforms/blob/master/borrado-de-campos.xhtml
---

Hace ya tiempo, cuando aprendí a construir formularios con [HTML](https://www.manualweb.net/html/), me hacía mucha gracia que todos los formularios que veía por Internet tenían dos botones. El primero era el que realizaba el envío de la información, mientras que el segundo te borraba el contenido de todo el formulario. Esta claro que no voy a cuestionar la utilidad de los dos botones, ya que útiles son. Pero quién no le ha dado al botón de borrar en vez de enviar, cuando realmente lo que quería era enviar y no borrar. Seguro que a todos nos ha pasado alguna vez y nos hemos visto en la tesitura de volver a introducir todos los datos. En la especificación de [XForms](http://www.manualweb.net/xforms/) ¡han eliminado al componente “input type reset”¡..... Pero no del todo. La verdad es que ha dejado de ser un control y ha pasado a ser un “evento de interacción”..... ¿Cómo? Intentare explicarlo... La idea es que los eventos de interacción sean los que correlacionen los eventos con el modelo de datos de [XForms](http://www.manualweb.net/xforms/). Dentro de la categoría de eventos de interacción tenemos, además del "reset", "next" para cuando pasamos al siguiente control del formulario , ["previous"](https://www.w3api.com/Java/ArrayList/listIterator/) cuando hacemos lo mismo, pero hacía atrás, "focus" para cuando queremos hacer foco en un determinado control,..... Vale, pero yo quiero poner mi botón de toda la vida en el formulario,...... Lo primero que tenemos que hacer es construir un modelo de datos. Para este ejemplo tampoco nos vamos a inventar un mega-modelo. Hagamoslo sencillo:


```text
<model id="mipersona">
   <instance>
     <persona xmlns="">
       <nombre></nombre>
       <apellido></apellido>
       <edad></edad>
       <domicilio></domicilio>
     </persona>
   </instance>
</model>
```


Si os dais cuenta, los campos del modelo están vacíos. Y es que el evento de interacción reset no borra los campos, sino que lo que hace es volver a poner en el formulario el modelo inicial. Vamos con el siguiente paso, construyamos el formulario. Para ello nos basamos en dos componentes sencillos: [input](https://www.w3api.com/Java/InputMismatchException/) y textarea. De ellos solo tienes que darte cuenta que para hacer referencia a un campo del modelo usan el atributo ref. El código nos quedaría algo así:


```text
<input ref="/persona/nombre"></input>
  <label>Persona: </label>


<h:br></h:br>

<input ref="/persona/apellido"></input>
  <label>Apellido: </label>


<h:br></h:br>

<input ref="/persona/edad"></input>
  <label>Edad: </label>


<h:br></h:br>

<textarea ref="/persona/domicilio">
   <label>Domicilio: </label>
</textarea>
```


Y ahora llega lo más importante.... Nuestro botón de borrado... Para poner un botón tenemos que usar el componente trigger. Dentro de este componente es donde pondremos nuestro evento de interacción. La etiqueta del elemento es reset y como atributos tendremos dos: el evento que lo activa que será DOMActivate . El evento DOMActivate viene a reflejar la acción por defecto sobre un control, en nuestro caso pulsar el botón. En el caso de que fuese una caja de texto, la acción por defecto sería pulsar "Intro". El segundo atributo del reset es el modelo que tiene que resetear. Ya que podemos tener varios modelos en nuestra página.....


```text
<trigger>
   <label>Borrar</label>
   <reset ev:event="DOMActivate" model="mipersona"></reset>
</trigger>
```


Bueno, al final, tampoco ha sido tan difícil....

