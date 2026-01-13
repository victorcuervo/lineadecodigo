---
title: "Validar el email con JavaScript"
description: "Explicación de la utilización de expresiones regulares para poder validar el email con JavaScript mediante un objeto RegExp."
date: 2009-01-09
updatedDate: 2026-01-13
tags: ["regexp","email","dominio","servidor"]
slug: javascript/expresiones-regulares/validar-el-email-con-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/validaciones/validar-email.html
topic: javascript

---

Muchas aplicaciones pueden precisar de una validación de email, es decir, validar si lo que está introduciendo el usuario es realmente un email. Esta comprobación es susceptible de hacerse en la máquina cliente, evitando así cargar al servidor con la respectiva comprobación y la consiguiente llamada desde la página web.


Nosotros nos valdremos de [JavaScript](https://www.manualweb.net/javascript/) para validar si la cadena introducida por el usuario es un email. Y al trabajar con validaciones con cadenas nos valdremos de las expresiones regulares.


Toda la implementación del ejercicio estará en montar la expresión regular. Para ello debemos de tener en cuenta varias cosas.


En primer lugar, la expresión regular delimita su inicio con `/^` y su fin con `$/`. Por lo que una expresión regular tendría la forma:


```javascript
/^ expr regular $/
```


El email se compone de tres partes:


```javascript
nombre usuario + @ + servidor + dominio
```


Veamos que consideraciones debemos de tener con cada una de esas partes.


**Nombre y servidor**

- Debe de empezar por letra o número. Al menos tiene una letra o número. La letra o número se expresa mediante el carácter `\w`. Para asegurarnos de que la letra o número aparezca al menos una vez utilizaremos el modificador `+`.
- Puede contener puntos y guiones además de las letras y números. Esta combinación podrá aparecer, y es por ello que utilizaremos el modificador `*` (cero o varias veces). Insertaremos toda la combinación entre paréntesis.

Su expresión regular, para ambos casos, será la siguiente:


```javascript
\w+([\.-]?\w+)*
```


**Dominio**

- Irá al final, detrás de un punto. Podrá tener dos (.es, .fr, .it,…) o tres letras (.com, .net, .org,..) o cuatro (.mobi, info,…). Si queremos indicar un número concreto de caracteres lo expresamos con el número entre los operadores `{` y `}`
- Además podemos tener varios dominios seguidos (.com.ar, .com.uk,…), es por ello que deberemos de usar el modificador `+`. Ya que el dominio podrá aparecer varias veces.

Su expresión regular será como sigue:


```javascript
(\.\w{2,3,4})+
```


La expresión regular final para validar el email con [JavaScript](https://www.manualweb.net/javascript/) sería:


```javascript
/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
```


Para la implementación de validar el email con [JavaScript](http://www.manualweb.net/tutorial-javascript/) vamos a crear un formulario, el cual llamará a la función `validarEmail`. Esta función será la que ejecute la expresión regular.


```javascript
function validarEmail(email){...}

```


La expresión regular la ejecutaremos mediante el método test del objeto [`RegExp`](https://www.w3api.com/Javascript/RegExp/). El objeto [`RegExp`](https://www.w3api.com/Javascript/RegExp/), como su nombre bien indica, representa las expresiones regulares.


```javascript
function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}

```


### **Actualizado 20.junio.09**


No se había contemplado la gestión de dominios de 4 letras como .mobi o .info.

