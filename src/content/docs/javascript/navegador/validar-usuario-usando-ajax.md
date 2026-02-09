---
title: "Validar usuario usando AJAX"
description: "Aprende a validar usuarios con AJAX sin recargar la página. Descubre cómo usar XMLHttpRequest para verificar disponibilidad de nombres en tiempo real."
date: 2008-03-27
updatedDate: 2026-02-09
tags: ["xmlhttprequest","onreadystatechange","activexobject"]
slug: javascript/navegador/validar-usuario-usando-ajax
type: doc
topic: javascript
id: c0a54977-983c-4e0a-aafa-0d48ea282cc4
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_ajax/blob/master/ExisteUsuario/existe-usuario.html
---

[AJAX](http://www.manualweb.net/javascript/) podemos verlo como un paradigma de programación Web. Resumiéndolo podemos decir que permite la recarga de datos de la página sin necesidad de una recarga total de la misma.


No debemos de tomarnos dicho paradigma como la solución a todos nuestros problemas de rendimiento. Sobre todo porque existen ciertos escenarios donde [AJAX](http://www.manualweb.net/javascript/) complica el diseño de una manera desmesurada. Si bien, en ciertas ocasiones puede ser algo muy útil.


Uno de los ejemplos prácticos es la validación de los datos del formulario. Cuando vamos a recuperar información del usuario podemos utilizar [JavaScript](https://www.manualweb.net/javascript/) de una forma muy potente para validar la información introducida. Por ejemplo podemos validar los tamaños del texto introducido, si cumple algún patrón, si son números o fechas validar rangos y límites.


Pero todo tiene un límite. Y el límite de las validaciones del cliente es cuando queremos validar lógica de negocio. Me explico, podemos pedirle al usuario que tecleé su usuario y querer validar si existe dicho usuario en nuestra base de datos. Sería algo poco sensato el tener descargado en el cliente el listado entero de usuarios para saber si el dato introducido es correcto o no.


Es en estos casos cuando el paradigma [AJAX](http://www.manualweb.net/javascript/) nos da una gran potencia ya que podemos ir de forma asíncrona al servidor de negocio y validar si existe el dato introducido. De tal manera podemos avisar al usuario de forma rápida si su nombre es válido o no.


En este ejemplo vamos a ver cómo usar el paradigma [AJAX](http://www.manualweb.net/javascript/) para validar si el usuario introducido por pantalla ya le tenemos dado de alta en nuestras bases de datos. Algo muy útil en un formulario de alta de usuarios.


## Creando el formulario y la capa oculta


Lo primero que tenemos que hacer es crear la página con el formulario. Tarea simple. ¿Quién no conoce el uso de la etiqueta form?


```html
<form action="" method="post" name="form1">
  <label for="usuario">Usuario:</label>
  <input id="usuario" type="text"></input>
  <input name="Submit" type="submit" value="Enviar"></input>
  <input name="Submit2" type="reset" value="Borrar"></input>
</form>
```


El comportamiento que vamos a dar a nuestro formulario es que una vez el usuario haya introducido su usuario vayamos a validarlo al servidor. Si el servidor me dice que ya existe el usuario, entonces deberemos de mostrarle al usuario una ventana diciéndole que ya existe el usuario en la base de datos.


Es por ello que necesitamos dos cosas más en nuestra página web. La primera es capturar el evento onChange del campo de texto del usuario. Es decir, una vez que el usuario tecleé el usuario y vaya a otro campo realizaremos la validación.


```html
<input id="usuario" onchange="return autentica();" type="text"></input>
```


En el código que acabamos de poner llamaremos a la función [JavaScript](https://www.manualweb.net/javascript/) autentica() que será la que realice la validación asíncrona.


La segunda necesidad es la de tener una capa, oculta al principio, donde se le diga al usuario que su usuario ya está ocupado. Dicha capa la mostraremos si la respuesta del servidor es que si está ocupado y la ocultaremos nuevamente si la validación da un resultado positivo.


```html
<span id="error" style="font-family: Verdana, Arial, 
   Helvetica, sans-serif; font-size: 12pt;color: #CC3300;
  position:relative;visibility:hidden;">
usuario Ocupado ¡¡¡
</span>
```


## Función Autentica


Como hemos indicado en el párrafo anterior, la función autentica() será la que realice la petición asíncrona al servidor. Dentro de la función lo que haremos serán tres cosas:

1. Recuperar el valor del usuario introducido por el usuario
2. Montar la url del servidor donde el valor del usuario irá como parámetro
3. Llamar a la función leer_doc(url) que es la que se encarga únicamente de realizar la petición a la URL indicada como parámetro

```javascript
function autentica(){
  usuario = document.getElementById("usuario").value;
  url = "/samples/existeusuario.php?usuario=" + usuario;
  leer_doc(url);
}
```


## Petición XMLHttpRequest


Para realizar la llamada al servidor vamos a crear una variable request que será la que en toda la vida del programa [JavaScript](https://www.manualweb.net/javascript/) mantenga la referencia a la petición.


```javascript
var req;
```


Dicha variable será la que dentro de la función leer_doc(url) realice la conexión mediante el objeto XMLHttpRequest. El objeto XMLHttpRequest tiene dos formas de llamarse dependiendo del navegador en el que nos encontremos (que raro). Si existe el objeto como objeto del navegador bastará con realizar un new sobre el mismo, sino tendremos que instanciarlo como un ActiveX para los navegadores Internet Explorer (versiones 5 y 6). Quedándonos el siguiente código:


```javascript
if (window.XMLHttpRequest) { 
   req = new XMLHttpRequest();
} else if (window.ActiveXObject) {
   req = new ActiveXObject("Microsoft.XMLHTTP"); 
}
```


## XMLHttpRequest y Callback


El objeto XMLHttpRequest se maneja mediante callbacks. ¿Qué quiere decir esto? Que la respuesta del objeto será manipulada por la función que le indiquemos. Para ello tendremos que informar a la variable .onreadystatechange


En nuestro caso será la función procesarRespuesta la que analice la respuesta. Lo que nos quedará será el realizar la petición a la URL previamente montada. Para ello utilizamos el método .open


```javascript
if(req){
   req.onreadystatechange = procesarRespuesta;
   req.open('GET', url, true);
   req.send(null);
}
```


## Analizando la respuesta: parsear el XML


Una vez retornada la respuesta por el servidor los datos adjuntos a la misma irán a parar a nuestra función de callback procesarRespuesta(). En este caso, y como veremos en un momento, los datos devueltos por el servidor vienen en formato [XML](http://www.manualweb.net/xml/).


Los datos los recuperaremos del atributo .responseXML del objeto XMLHttpRequest. Como la respuesta viene en XML deberemos utilizar funciones del DOM para poder ver que valores tienen y actuar en consecuencia. En este caso la función [.getElementsByTagName("tag")](https://www.w3api.com/DOM/.getElementsByTagName()).


Dentro del XML devuelto viene la etiqueta <existe> que tendrá un valor de "true" si el usuario enviado ya existe y un valor de "false" si el valor enviado no existe en la base de datos. A si que en caso afirmativo pondremos la capa de error de la página a visible (el usuario existe) o la ocultaremos (si el usuario no existe)


```javascript
function procesarRespuesta(){

 respuesta = req.responseXML;

 var existe = respuesta.getElementsByTagName('existe')
   .item(0).firstChild.data;

 if (existe=="true")
   document.getElementById("error").style.visibility = "visible";
 else
   document.getElementById("error").style.visibility = "hidden";
}
```


## Página PHP, ¿Nuestro WebService?


En esto del [AJAX](http://www.manualweb.net/javascript/) pasa a ser algo de vital importancia el uso de servicios web, ya sean WebServices, páginas con script de servidor, CGI o similares.


En nuestro ejemplo la llamada se hace a la [http://lineadecodigo.com/samples/existeusuario.php?usuario=miusuario](http://lineadecodigo.com/samples/existeusuario.php?usuario=miusuario) Es decir, que estamos usando una página PHP.


Dicha página [PHP](http://www.manualweb.net/php/) es muy sencilla, y aunque lo suyo sería que fuese a una base de datos, lo que he hecho ha sido devolver un [XML](http://www.manualweb.net/xml/) estático. Dicho [XML](http://www.manualweb.net/xml/) solo varía cuando se meta un usuario en concreto ("victor").


```php
<?php
   header("Content-type: text/xml");
   echo("<?xml version='1.0' encoding='ISO-8859-1'?>");

   if ($_GET["usuario"]=="victor") {
     echo("<existe>true</existe>");
   } else {
     echo("<existe>false</existe>");
   }
?>
```


Ahora que podemos complicar este código cuanto queramos. Acceder a una base de datos...

