---
title: "Crear un documento editable con HTML5"
description: "Descubre cómo crear un documento editable con HTML5 utilizando designMode para hacer que todos los elementos sean editables desde tu navegador. ¡Hazlo ahora!"
date: 2012-03-20
updatedDate: 2026-01-21
tags: ["document","designmode"]
slug: html/documento/crear-un-documento-editable-con-html5
type: doc
topic: html
id: 2c8a9dfb-adca-8137-bc74-ea860f9cf6f1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/documento-editable.html
---

Ya veíamos en otro artículo como [en HTML5 tenemos la capacidad de definir áreas o elementos que sean editables](http://lineadecodigo.com/html5/crear-contenido-editable-en-html5/). Para ello nos basábamos en el atributo general de [HTML5](https://www.manualweb.net/html5/) [contentEditable](https://www.w3api.com/HTML/contentEditable).


Pero con [HTML5](https://www.manualweb.net/html5/) podemos llegar aún más lejos y podemos crear un documento editable. Es decir, que todos los elementos de la página serán editables desde nuestro navegador.


## Activar el modo de edición con designMode


Para poder crear nuestro documento editable en [HTML5](https://www.manualweb.net/html5/) deberemos de recurrir al [Javascript](https://www.manualweb.net/javascript/) y es que desde código [Javascript](https://www.manualweb.net/javascript/) podemos modificar el atributo designMode y aplicarle el valor "on".


```javascript
document.designMode = "on";
```


Esta simple línea de código Javascript que modifica un atributo [HTML5](https://www.manualweb.net/html5/) permite que el documento entero sea editable.


## Limitaciones


No he encontrado forma de hacerlo directamente sobre el código [HTML5](https://www.manualweb.net/html5/) de la página, sin recurrir al código [Javascript](https://www.manualweb.net/javascript/). Si alguien sabe como resolverlo, su respuesta será muy bienvenida.

