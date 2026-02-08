---
title: "Campos obligatorios de un formulario con wForms"
description: "Valida campos obligatorios en formularios HTML con wForms de forma sencilla. Aprende a personalizar mensajes de error en español."
date: 2007-06-23
updatedDate: 2026-02-08
tags: ["input","text","required"]
slug: wforms/basicos/campos-obligatorios-de-un-formulario-con-wforms
type: doc
topic: wforms
id: 2c8a9dfb-adca-81ca-8f2c-f7f73212c874
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/campos-obligatorios-de-un-formulario-wforms.html
---

Muchas son las librerías que han aparecido sobre el lenguaje [JavaScript](https://lineadecodigo.com/javascript). Todas ellas se han orientado para ayudar a la hora de realizar aplicaciones dinámicas, reduciendo la necesidad de escribir código J[JavaScript](https://lineadecodigo.com/javascript). Entre estas librerías encontramos **wForms**, la cual se especializa en ayudarnos en el desarrollo de controles sobre formularios.


Una de las cosas que podemos hacer con wForms es validar, de una forma muy sencilla, que el campo es obligatorio.


## Cargar las librerías de wForms


Lo primero que tenemos que hacer es cargar las librerías de wForms. A si que hay que descargarse la librería, en versión normal o en versión comprimida.


Para cargar la librería, simplemente la instanciamos mediante código [HTML](http://www.manualweb.net/html):


```html
<script type="text/javascript" src="wforms.js"></script>
```


## Asociar clase required al campo


A la hora de escribir un formulario, si queremos que el campo sea obligatorio, simplemente tendremos que asociarle la clase "required".


```html
<input type="text" class="required" id="campo_de_texto">
```


Muy sencillo. Ahora, cuando se vaya a enviar el formulario, la librería wForms se encargará de validar que haya algo en el campo antes de enviarle.


## Mensajes de validación


wForms te muestra dos mensajes. El primero será debajo del campo de texto indicando que ese campo es obligatorio y un mensaje de alerta diciendo que hay errores en el formulario y que no será enviado.


Los textos son mostrados en ingles. Es por ello que si queremos traducirlos a otro idioma (español, en nuestro caso) tenemos que modificar las variables errMsg_required y errMsg_notification.


```javascript
<script type="text/javascript">
wFORMS.behaviors['validation'].errMsg_required = "Este campo es obligatorio";
wFORMS.behaviors['validation'].errMsg_notification = "%% error(s) detectado(s). El formulario no se enviará.nPor favor, chequea la información suministrada."; 
</script>
```

