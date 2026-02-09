---
title: "Validaciones de fechas en formularios con wForms"
description: "Valida fechas en formularios con wForms usando la clase validate-date. Comprueba que los datos se cargan correctamente en objetos Date JavaScript."
date: 2007-09-08
updatedDate: 2026-02-09
tags: ["validate-date","required"]
slug: wforms/validaciones/validaciones-de-fechas-en-formularios-con-wforms
type: doc
topic: wforms
id: 2c8a9dfb-adca-8128-b906-faf0cd761790
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/validacion-fechas.html
---

Dentro de la lista de validaciones que nos ofrece [wForms](https://lineadecodigo.com/wforms/), tenemos la validación de fechas. Esta validación comprobará que el dato insertado en un campo de un formulario puede ser cargado en un objeto Date de [JavaScript](https://lineadecodigo.com/javascript/).


## Aplicar la clase validate-date


Para poder ejecutar la validación, deberemos de indicar que el campo del formulario es de tipo `validate-date required`. Es por ello que el código es muy sencillo:


```html
<form action="enviar.php">
<label for="fecha">Entrada Alfanumerica:</label>
<input id="fecha" type="text" class="validate-date required"><br>
<input type="submit" value="Enviar"/>
</form>
```


## Cargar el framework wForms


No hay que olvidarse de que lo primero es cargar el framework [wForms](https://lineadecodigo.com/wforms/). Esto lo añadiremos dentro de las etiquetas [`head`](https://www.w3api.com/HTML/head/) de la página [HTML](https://www.manualweb.net/html/).


```html
<script type="text/javascript" src="wforms.js"></script>
```


## Personalizar mensajes de error


Además tenemos la posibilidad de alterar el mensaje que sale cuando falla la validación. Para ello podemos modificar el objeto [JavaScript](https://lineadecodigo.com/javascript/) wFORMS.behaviors['validation'].errMsg_date.


```html
<script type="text/javascript">
wFORMS.behaviors['validation'].errMsg_date = "El formato de la fecha insertada no es válido [dd-mm-aaaa]";
wFORMS.behaviors['validation'].errMsg_notification = "%% error(s) detectado(s). El formulario no se enviará.\nPor favor, chequea la información suministrada."; // %% will be replaced by the actual number of errors
</script>
```

