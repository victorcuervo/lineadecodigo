---
title: "Validar que el campo es un email"
description: "Valida el formato de emails en formularios con wForms usando validate-email. Asegura que las direcciones tengan el formato correcto nombre@servidor."
date: 2007-08-28
updatedDate: 2026-02-09
tags: ["input","validate-email"]
slug: wforms/validaciones/validar-que-el-campo-es-un-email
type: doc
topic: wforms
id: a7056a71-7c96-4584-bd9a-a7d037140af9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/validar-email.html
---

Uno de los campos más comunes, cuando hacemos formularios web, es el de la dirección de e-mail. Imaginemos un alta de usuario, un libro de visitas, una respuesta en un blog,... Y lo más normal será que enviemos algún correo a dicha dirección en un momento posterior.


## Emails bien formados


Es por ello que nos interesa que la dirección de correo sea válida. Cuando hablamos que sea válida queremos decir que sea una dirección real a la que se pueda enviar e-mails. Para comprobar que es válida hay varios mecanismos, en el lado del servidor. Si bien, podemos adelantarnos a la validación en el formulario.


En este caso la validación solo será de formato. Es decir, que el e-mail está bien formado:


```javascript
nombre@servidor.dominio
```


Esto nos evitará que la gente ponga cosas que no cuadren con ese formato en el campo de email.


Si bien, hay que recordar que esto no prueba que sea una dirección válida. Ya que cosas como "aa@aa.com" pasaría la validación, y quizás no sea un e-mail real.


Pero bueno, una validación es una validación.


En este caso nos vamos a apoyar en la librería [wForms](https://lineadecodigo.com/wforms/). Puedes leerte algunos artículos sobre uso de wForms en Linea de Código. Para muestra [Campos Obligatorios de un formulario con wForms](http://lineadecodigo.com/wforms/campos-obligatorios-de-un-formulario-con-wforms/), [Validar que un campo del formulario es alfabético con wForms](http://lineadecodigo.com/wforms/validar-que-un-campo-del-formulario-es-alfabetico-con-wforms/),...


## Cargar la librería wForms


Lo primero, cargar la librería. Para ello incluimos el siguiente código script en la cabecera de la página.


```html
<script type="text/javascript" src="wforms.js"></script>
```


## Aplicar la clase validate-email


Para validar el email será muy sencillo. Y es que solo tendremos que dotarle de la clase `validate-email` al campo [`input`](https://www.w3api.com/HTML/input/) que queramos que contenga los emails.


Quedándonos la siguiente línea de código:


```html
<input type="text" id="email" class="validate-email">
```


Ahora, si intentamos introducir un valor que no tenga el formato del email, nos generará un error.


## Personalizar mensajes de error


Lo último que nos queda por hacer es configurar el mensaje que queremos mostrar al usuario cuando el formato del email no sea válido. Para ello podemos modificar la variable JavaScript `wFORMS.behaviors['validation'].errMsg_email`.


```html
<script type="text/javascript">
wFORMS.behaviors['validation'].errMsg_email = "El email introducido no tiene un formato valido";
wFORMS.behaviors['validation'].errMsg_notification = "%% error(s) detectado(s). El formulario no se enviará.nPor favor, chequea la información suministrada.";
</script>
```

