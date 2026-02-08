---
title: "Control alfanumérico en formularios con wForms"
description: "Implementa validación alfanumérica en formularios con wForms. Usa la clase validate-alphanum y personaliza mensajes de error en español."
date: 2007-08-13
updatedDate: 2026-02-08
tags: ["validate-alphanum","required"]
slug: wforms/validaciones/control-alfanumerico-en-formularios-con-wforms
type: doc
topic: wforms
id: 2c8a9dfb-adca-81da-ba0c-c1e630cba8ad
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/validacion-alfanumerica.html
---

Si ayer escribíamos como ["Validar que un campo del formulario es alfabético con wForms"](http://lineadecodigo.com/2007/08/12/validar-que-un-campo-del-formulario-es-alfabetico-con-wforms/) hoy vamos a ver como hacerlo para campos alfanuméricos.


Es código es muy poco y de una forma rápida conseguiremos nuestro objetivo. Una vez cargada la librería wForms simplemente tendremos que utilizar la clase validate-alphanum required en nuestro campo de entrada.


## Aplicar la clase validate-alphanum


La línea de código sería la siguiente:


```html
<input type="text" class="validate-alphanum required">
```


## Personalizar mensajes de error


Para que los mensajes de alerta al usuario no salgan en inglés podemos modificar los campos wFORMS.behaviors['validation'].errMsg_alphanum y wFORMS.behaviors['validation'].errMsg_notification. El primero para mostrar el texto de alerta ante un error de contenido alfanumérico y el segundo para el error general a la hora de hacer el envío del formulario.


```html
<script type="text/javascript">
wFORMS.behaviors['validation'].errMsg_alphanum = "Solo se pueden utilizar caracteres alfanumericos [a-z 0-9]";
wFORMS.behaviors['validation'].errMsg_notification = "%% error(s) detectado(s). El formulario no se enviará.nPor favor, chequea la información suministrada."; // %% will be replaced by the actual number of errors
</script>
```

