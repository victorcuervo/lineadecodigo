---
title: "Deshabilitar el popup de error en wForms"
description: "Aprende a deshabilitar el popup de error en wForms usando showAlertOnError. Controla la visualización de mensajes de validación en formularios."
date: 2007-12-06
updatedDate: 2026-02-08
tags: ["validation","showalertonerror"]
slug: wforms/errores/deshabilitar-el-popup-de-error-en-wforms
type: doc
topic: wforms
id: 2c8a9dfb-adca-8191-b535-fac89bf95c82
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/deshabilitar-el-pop-up-de-error.html
---

Si habéis trabajado con [wForms](http://lineadecodigo.com/tag/scripting/wForms/) para las validaciones en formularios, habréis visto que por defecto, al realizar la validación muestra un popup con los errores que se han producido, o bien con el mensaje de error que le hayamos definido en la propiedad errMsg_notification.


```javascript
wFORMS.behaviors['validation'].errMsg_notification = "texto del mensaje de error";
```


En ciertos casos, este mensaje puede llegar a ser molesto o bien innecesario. Es por ello que querremos deshabilitar el popup de error en [wForms](http://lineadecodigo.com/tag/scripting/wForms/).


## Deshabilitar el popup


Para ello tenemos la propiedad wFORMS.showAlertOnError a la cual podremos dar el valor de true o false, dependiendo del comportamiento que busquemos. En el caso de que queramos deshabilitar le asignaremos el valor de false.


```javascript
wFORMS.showAlertOnError = false;
```


Este código habrá que incluirle en la cabecera de la página.


[Visualizar el ejemplo](http://lineadecodigo.com/wp-content/uploads/2007/12/deshabilitar-el-pop-up-de-error.html) | [Descargar el código](http://lineadecodigo.com/wp-content/uploads/2007/12/deshabilitar-el-pop-up-de-error.zip)

