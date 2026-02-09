---
title: "Posicionar el lugar de error en wForms"
description: "Aprende a posicionar mensajes de error en wForms usando elementos SPAN con IDs específicos. Controla dónde aparecen los errores del formulario."
date: 2007-12-11
updatedDate: 2026-02-09
tags: ["error","form"]
slug: wforms/errores/posicionar-el-lugar-de-error-en-wforms
type: doc
topic: wforms
id: 2c8a9dfb-adca-8101-8709-f3276ef1756e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/posicionar-el-lugar-del-error.html
---

Si utilizamos [wForms](http://lineadecodigo.com/tag/scripting/wForms/) veremos que los mensajes de error siempre se posicionan debajo del campo del formulario que ha generado el error. Si bien, de una forma muy sencilla podremos definir donde queremos que salga el error.


Lo más normal es que el error se muestre cerca del campo que ha generado el error para, de esta forma, ayudar al usuario a localizar el campo y corregir el error. Si bien, en ciertos casos, piden a los programadores que los errores se sitúen en sitios insospechados.


Por ejemplo, si tenemos un formulario que pida un nombre y una edad, podríamos querer mostrar el error, siempre, en la parte inferior, entre el último campo y el botón de envío.


## Formulario básico


Tendríamos el siguiente formulario:


```html
<form>
<label for="nombre">Nombre:</label><input type="text" id="nombre" class="validate-alpha required"><br>
<label for="edad">Edad:</label><input type="text" id="edad" class="validate-integer required"><br>
<input type="submit" value="Enviar">
</form>
```


## Definir la zona del error


Para posicionar la zona del error tendremos que posicionar una estructura SPAN o DIV cuyo id sea el nombre del campo asociado al error seguido de un guión y E.


Así los id de estos campos para nuestro caso serían:


```html
nombre-E
edad-E
```


A si que tendríamos que poner el siguiente código donde queramos que salga el error:


```html
<span id="nombre-E"></span>
<span id="edad-E"></span>
```


## Formulario completo


El formulario completo, dejando el campo del error entre los campos de texto y el botón de envío sería el siguiente:


```html
<form>
<label for="nombre">Nombre:</label><input type="text" id="nombre" class="validate-alpha required"><br>
<label for="edad">Edad:</label><input type="text" id="edad" class="validate-integer required"><br>
<span id="nombre-E"></span><span id="edad-E"></span><br>
<input type="submit" value="Enviar">
</form>
```

