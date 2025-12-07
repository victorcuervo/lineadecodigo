---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSITZSXZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQComgwC5izxez8GBc%2FqjlLKUDgXDf1HK8Xpe2ROe%2FOnSQIhAJxhXNvZ3R%2B2XGRFKPvp6WS3VbJEvCZjoCsIzvfuRb5CKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp7KHNUbeI6ToruZMq3AMUa95Axgz7iY5E1dp0qczCshORkjfSAPYv%2F7sPvhXOyOakXvIrpL0FQqr2Uok5ApsjuqBXAue4Y6%2F9tvy3Y3rRxUBNulCGp6AOrabdoyDkmCl%2BIP%2FLb5dnjsB8edPbTNvAGAgo84u1dgkBpnWOdKll6%2FXRmmelF3jJZS2b6hIr72Fw4AoAetKA%2Byc%2BZjGd3gMhofMe9kPoBUE0azLNrWACo8sqtFqlY6pRAXcSTzTqBQSE%2BplZePnEs6Z%2ByGvHw%2FP4WUr85M1My2RTxSPqznvDUS06BroTodKJxas94Xsv8a6m26xRSRSleR02GiAOf5h3VmCYskMKA14MwSUKulngR7fXBYTeGxMDPH8HjoQVO7q10yQ3voaffOVLwu87RTToRl3qJX1Psb1TNT9s5lgLFT1PfLf1qkCnxV9HH1UvgPqi9RiIDXoc4%2FPtA4s%2BT1dsAX4BNJum5KdlfvoRY8VlPBygNDzW2qt8O1dSv%2BdFFjWxJeXm4F5SaRR3Xsfu4HN0plaNeJltNKy%2B%2BXdY%2BYu5FS5BGWRa3l7D8sUAhR7RlXxuxaU1W9qTIrDe%2FDIvj2NE%2BIQt%2FxeOMUBqVKo%2BWsyRbfUZ%2BuiMn3j6Aw9DIaxxyqoNPFgxC1kd08vhpzDRqNfJBjqkAcTsvGl2sMetI2l5LxaaygsZkVfubwYD38GtpC3ncNcKRBRlOP%2B9aLsOktlLRNGuFljY5mFBerGiCLYM9rVRQV8Q28NdP3iZXd90xy%2B63jhrW6HCIVx3AvlH6WC6GHTybgN3Cl0MkAf1kkzcrZDScEJ%2BZzOo4uKxLdsoNPzKmDGkJfepIsQPBdsFwOj8mZqCAqI1NbOBKvJIowcUCIBtBA%2F8KZUR&X-Amz-Signature=9a9b6877f1e63f5bd57fbbc2d74c39f97a50d2ba7459781ad5f1813b0f0e07ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSITZSXZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQComgwC5izxez8GBc%2FqjlLKUDgXDf1HK8Xpe2ROe%2FOnSQIhAJxhXNvZ3R%2B2XGRFKPvp6WS3VbJEvCZjoCsIzvfuRb5CKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp7KHNUbeI6ToruZMq3AMUa95Axgz7iY5E1dp0qczCshORkjfSAPYv%2F7sPvhXOyOakXvIrpL0FQqr2Uok5ApsjuqBXAue4Y6%2F9tvy3Y3rRxUBNulCGp6AOrabdoyDkmCl%2BIP%2FLb5dnjsB8edPbTNvAGAgo84u1dgkBpnWOdKll6%2FXRmmelF3jJZS2b6hIr72Fw4AoAetKA%2Byc%2BZjGd3gMhofMe9kPoBUE0azLNrWACo8sqtFqlY6pRAXcSTzTqBQSE%2BplZePnEs6Z%2ByGvHw%2FP4WUr85M1My2RTxSPqznvDUS06BroTodKJxas94Xsv8a6m26xRSRSleR02GiAOf5h3VmCYskMKA14MwSUKulngR7fXBYTeGxMDPH8HjoQVO7q10yQ3voaffOVLwu87RTToRl3qJX1Psb1TNT9s5lgLFT1PfLf1qkCnxV9HH1UvgPqi9RiIDXoc4%2FPtA4s%2BT1dsAX4BNJum5KdlfvoRY8VlPBygNDzW2qt8O1dSv%2BdFFjWxJeXm4F5SaRR3Xsfu4HN0plaNeJltNKy%2B%2BXdY%2BYu5FS5BGWRa3l7D8sUAhR7RlXxuxaU1W9qTIrDe%2FDIvj2NE%2BIQt%2FxeOMUBqVKo%2BWsyRbfUZ%2BuiMn3j6Aw9DIaxxyqoNPFgxC1kd08vhpzDRqNfJBjqkAcTsvGl2sMetI2l5LxaaygsZkVfubwYD38GtpC3ncNcKRBRlOP%2B9aLsOktlLRNGuFljY5mFBerGiCLYM9rVRQV8Q28NdP3iZXd90xy%2B63jhrW6HCIVx3AvlH6WC6GHTybgN3Cl0MkAf1kkzcrZDScEJ%2BZzOo4uKxLdsoNPzKmDGkJfepIsQPBdsFwOj8mZqCAqI1NbOBKvJIowcUCIBtBA%2F8KZUR&X-Amz-Signature=1c27d0ae151453f7ce2bf23ef37b5100aba555529cc085153a8829ccd3821976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
