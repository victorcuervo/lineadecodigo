---
title: "Validar que un campo del formulario es alfabético con wForms"
description: "Valida campos alfabéticos en formularios con wForms usando validate-alpha. Solo permite letras [a-z A-Z] y personaliza mensajes de error en español."
date: 2007-08-12
updatedDate: 2026-02-09
tags: ["validate-alpha","required","input"]
slug: wforms/validaciones/validar-que-un-campo-del-formulario-es-alfabetico-con-wforms
type: doc
topic: wforms
id: 2c8a9dfb-adca-8175-b530-ee00c3340311
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/validacion-alfabetica.html
---

Si queremos validar que un campo de un formulario es alfabético, las librerías [wForms](https://lineadecodigo.com/wforms/) nos serán de gran ayuda. Estas, nos permitirán mediante pocas líneas de código conseguir esta validación.


## Cargar las librerías wForms


Lo primero será cargar las librerías wForms. Para ello deberemos de añadir en la cabecera de nuestra página [HTML](https://www.manualweb.net/html/) la siguiente línea de código:


```html
<script type="text/javascript" src="wforms.js"></script>
```


## Aplicar la clase validate-alpha


Ahora simplemente tendremos que utilizar la clase `validate-alpha required` en el campo de [`input`](https://www.w3api.com/HTML/input/) sobre el que queramos realizar la validación alfabética.


El campo del formulario nos quedaría de la siguiente forma:


```html
<input type="text" class="validate-alpha required">
```


## Personalizar mensajes de error


Solo nos quedará un pequeño detalle, ya que, por defecto, el mensaje de error nos saldrá en inglés.


```javascript
The text must use alphabetic characters only (a-z, A-Z). Numbers are not allowed.
```


Pero wForms nos permitirá parametrizar este mensaje. Para ello tenemos la propiedad `wFORMS.behaviors['validation'].errMsg_alpha`, a la cual podemos dar el texto que más nos interese.


Finalmente nos quedará el siguiente código:


```javascript
<script type="text/javascript">
wFORMS.behaviors['validation'].errMsg_alpha = "Solo se pueden utilizar caracteres alfabéticos [a-z A-Z]";
wFORMS.behaviors['validation'].errMsg_notification = "%% error(s) detectado(s). El formulario no se enviará.nPor favor, chequea la información suministrada."; // %% will be replaced by the actual number of errors
</script>
```


Por cierto, con `wFORMS.behaviors['validation'].errMsg_notification` parametrizamos el mensaje general del formulario si se produce cualquier error.

