---
title: "Ocultar y mostrar elementos con jQuery"
description: "Aprende a ocultar y mostrar elementos con jQuery para dar dinamismo a tus páginas web. Usa funciones sencillas y mejora la interacción con tus usuarios."
date: 2009-02-05
updatedDate: 2026-02-06
tags: ["hide","show","click"]
slug: jquery/efectos/ocultar-y-mostrar-elementos-con-jquery
type: doc
topic: jquery
id: 4d0a595b-4d69-4965-8620-8d36d6464489
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/basicos/ocultar-mostrar-elemento.html
---

Ocultar y mostrar elementos nos permitirá un gran dinamismo dentro de nuestras páginas web. Esto lo podremos hacer modificando las propiedades [CSS](http://www.manualweb.net/css/) de los elementos dinámicamente con [JavaScript](https://www.manualweb.net/javascript/). 


[jQuery](http://www.manualweb.net/jquery/) nos ayudará a realizar esta tarea de una forma más sencilla. Si queremos ocultar y mostrar elementos con [jQuery](http://www.manualweb.net/jquery/) podemos apoyarnos en las funciones `.show()` y `.hide()`.


## El HTML


En nuestro ejemplo la página se compondrá de una capa con el texto y dos botones, a los que asignaremos las propiedades de ocultar y mostrar elementos. Nuestro código [HTML](https://www.manualweb.net/html/) es el siguiente:


```html
<button id="ocultar">Ocultar Texto</button>
<button id="mostrar">Mostrar Texto</button>

<div id="msgid1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a nunc. Ut ac purus. Mauris tempor, arcu aliquam pulvinar elementum, sapien pede consequat lectus, id lobortis justo mi nec eros. Integer condimentum leo at risus. Aenean vel mauris eget lectus condimentum laoreet. Duis dictum. Etiam mattis pretium metus. Vestibulum diam lectus, egestas in, semper consectetur, iaculis et, arcu. Integer ut lacus. Curabitur tempus nibh. Vivamus consectetur velit eget nulla. Sed at libero sit amet nulla commodo suscipit. Nunc elementum. Mauris magna lorem, tristique et, semper a, feugiat pulvinar, eros. Mauris lacus velit, vehicula ut, faucibus porttitor, ultrices id, ipsum. Vivamus ligula sem, interdum et, porttitor nec, commodo eu, odio. Nullam id lacus. Donec feugiat adipiscing dui. Nullam lobortis mi ac sem.</div>
```


## Gestionar el Evento Click


Ahora vamos con el código [jQuery](http://www.manualweb.net/jquery/). Lo que haremos será gestionar el evento click de los botones y asignarles la función que nos permite ocultar y mostrar elementos con [jQuery](http://www.manualweb.net/jquery/).


```javascript
$("#ocultar").click();
$("#mostrar").click();
```


Accedemos a los botones mediante su id anteponiéndoles la almohadilla (#).


## Las Funciones hide() y show()


Como hemos comentado antes, las funciones para ocultar y mostrar elementos con [jQuery](http://www.manualweb.net/jquery/) son `.hide()` y `.show()`, las cuales asignaremos a los botones `#ocultar` y `#mostrar` respectivamente. 


Ambas funciones tienen la siguiente sintaxis:


```javascript
hide(velocidad, funcion_callback);
show(velocidad, funcion_callback);
```


La **velocidad** tendrá el valor de la velocidad con la que queremos que se muestren u oculten las cosas. Los valores posibles son: `slow`, `normal` y `fast` o bien los milisegundos que queremos que se tarde.


Por otro lado la **funcion_callback** será la función a la cual queremos llamar al acabar de ejecutar la función `.show()` o `.hide()`. El parámetro de funcion_callback es opcional.


## Código Completo


De esta manera nuestro código para ocultar y mostrar elementos con [jQuery](http://www.manualweb.net/jquery/) sería de la siguiente forma:


```javascript
$("#ocultar").click(function(){$("#msgid1").hide("slow")});
$("#mostrar").click(function(){$("#msgid1").show("slow")});
```


Solo nos quedará ponerlo dentro de la función `.ready()`, básica para [jQuery](http://www.manualweb.net/jquery/).


```javascript
$(document).ready(function(){
 $("#ocultar").click(function(){$("#msgid1").hide("slow")});
 $("#mostrar").click(function(){$("#msgid1").show("slow")});
});
```

