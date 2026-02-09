---
title: "Personalizar mensajes de error en wForms"
description: "Personaliza mensajes de error en wForms ajustando texto, apariencia CSS y posición. Mejora la experiencia de usuario en formularios web."
date: 2007-12-09
updatedDate: 2026-02-09
tags: ["validation","css","error"]
slug: wforms/errores/personalizar-mensajes-de-error-en-wforms
type: doc
topic: wforms
id: 2c8a9dfb-adca-81a5-9898-f90ff3a1fb57
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/personalizar-mensajes-de-error.html
---

Si no configuramos nada de [wForms](http://lineadecodigo.com/tag/scripting/wForms/), los mensajes tienen un comportamiento predeterminado. Este comportamiento es que los mensajes salen justamente debajo del elemento del formulario que ha generado el error y un popup que indica el número de errores que hay en total.


Además el texto de los mensajes es en inglés.


Pero mediante código [JavaScript](http://lineadecodigo.com/tag/scripting/javascript/) podemos personalizar el comportamiento de los mensajes de error. Para ello podemos alterar tres cosas:

- El texto
- La apariencia
- La posición dentro del formulario

## Personalizar el texto


El texto se encuentra dentro del objeto wFORMS.behaviors['validation']. En él encontramos las diferentes propiedades que podemos modificar. Cada una de las propiedades hace referencia a un tipo diferente de error. Así tenemos las siguientes:

- **.errMsg_required**, para los campos obligatorios.
- **.errMsg_alpha**, para los errores alfabéticos.
- **.errMsg_email**, para las validaciones del formato del email.
- **.errMsg_integer**, para las validaciones de numeros enteros.
- **.errMsg_float**, para validar numeros decimales.
- **.errMsg_alphanum**, para validaciones alfanuméricas.
- **.errMsg_date**, validaciones de fechas.
- **.errMsg_custom**, mensajes personalizados.
- **.errMsg_notification**, es el error del mensaje popup.

Solo tendremos que incluir un pequeño código [JavaScript](http://lineadecodigo.com/tag/scripting/javascript/) sobrescribiendo el valor de estas propiedades, por ejemplo.


```html
<script type="text/javascript">
wFORMS.behaviors['validation'].errMsg_required = "Campo obligatorio";
wFORMS.behaviors['validation'].errMsg_alpha = "El campo tiene que ser alfabético";
wFORMS.behaviors['validation'].errMsg_email = "El campo tiene que ser un email";
wFORMS.behaviors['validation'].errMsg_integer = "El campo tiene que ser un numero entero";
wFORMS.behaviors['validation'].errMsg_float = "El campo tiene que ser un numero decimal";
wFORMS.behaviors['validation'].errMsg_alphanum =" El campo tienen que ser alfanumérico";
wFORMS.behaviors['validation'].errMsg_date = "El campo tiene que ser una fecha";
wFORMS.behaviors['validation'].errMsg_custom = "Mensaje personalizado";
wFORMS.behaviors['validation'].errMsg_notification = "%% error(s) detectado(s). El formulario no se enviará.\nPor favor, chequea la información suministrada.";
</script>
```


## Personalizar la apariencia


A la hora de modificar la apariencia de los mensajes de error, vía [CSS](http://lineadecodigo.com/tag/markup/css/) podemos modificar dos elementos. El primero será el campo del formulario que contiene error (.errFld) y el segundo es el texto de error asociado (.errMsg).


Simplemente tendremos que redefinir estas clases [CSS](http://lineadecodigo.com/tag/markup/css/) modificando el valor de sus atributos:


```html
<style type="text/css">
  .errFld {border: 1px solid #F00; background: #FF6347;}
  .errMsg { color: #C33; }
</style>
```


Este código lo podemos añadir de igual forma en la cabecera de la página.


## Personalizar la posición dentro del formulario


Lo último que podemos personalizar en los mensajes de error de [wForms](http://lineadecodigo.com/tag/scripting/wForms/), es la zona donde queremos que salgan.


Para ello, tendremos que crear un elemento DIV o SPAN cuyo identificador siga la siguiente nomenclatura:


```html
idcampoformulario-E
```


De esta manera, si tenemos un campo de formulario llamado fechadenacimiento, tendremos que crear el siguiente elemento:


```html
<span id="fechadenacimiento-E"></span>
```


Y posicionarlo donde queramos que salga el error.

