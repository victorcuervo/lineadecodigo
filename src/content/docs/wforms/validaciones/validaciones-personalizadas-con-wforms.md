---
title: "Validaciones personalizadas con wForms"
description: "Crea validaciones personalizadas en wForms usando expresiones regulares con validate-custom. Valida códigos postales, sexo y más campos específicos."
date: 2007-11-20
updatedDate: 2026-02-09
tags: ["validate-custom","expresiones-regulares"]
slug: wforms/validaciones/validaciones-personalizadas-con-wforms
type: doc
topic: wforms
id: 2c8a9dfb-adca-8177-8a4d-e9c372fbaba7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/validaciones-personalizadas.html
---

Junto con [wForms](https://lineadecodigo.com/wforms/) vienen predefinidas las validaciones básicas: números, fechas, direcciones de email,... pero [wForms](https://lineadecodigo.com/wforms/) también nos da la posibilidad de hacer validaciones personalizadas.


En nuestro ejemplo vamos a definir dos validaciones. La primera será la de un código postal. La validación comprobará que sea un dígito de 5 números. La segunda validación comprobará que el texto introducido sea M o F. Intentando representar el concepto de texto.


## Usar la clase validate-custom


Para hacer las validaciones personalizadas con [wForms](https://lineadecodigo.com/wforms/) utilizamos la clase `validate-custom`, la cual **va seguida de una expresión regular**.


Hay que recordar que la expresión regular va entre dos barras invertidas (/)


```javascript
/expresión_regular/
```


No vamos a entrar en el detalle de como se conforman las expresiones regulares en [JavaScript](http://lineadecodigo.com/tag/scripting/javascript/) y las diferentes estructuras que se pueden conformar. Para nuestros ejemplos las expresiones regulares que utilizaremos serán las siguientes:

- Código Postal **/d{2}/**
- Sexo **/m|f|M|F/**

## Aplicar las expresiones regulares


Es por ello que nuestras clases quedarán de la siguiente forma:


```html
<input type="text" id="cp" class="validate-custom /\d{5}/"/>
<input type="text" id="sexo" class="validate-custom /m|f|M|F/"/>
```


## Cargar las librerías wForms


Hay que acordarse de instanciar las librerías [wForms](http://lineadecodigo.com/tag/scripting/wForms/) al principio de la página:


```html
<script type="text/javascript" src="wforms.js"></script>
```

