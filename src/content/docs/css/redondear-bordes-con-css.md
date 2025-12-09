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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG6V677H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsYSTRtY1VZSVYdFAI2jSjFsx4r3hA0mVbZ2ska2%2F7HQIhALoaldXr3Rs3KFuHg%2FTEzOc3BfTcmtZMzbZadd0l6mtFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynkiCyyXGZHoaAx9kq3AMxPtHmKmhn54Q675QbFQqfZZRpCdi8tMKsaCRGNs09%2FYWEcGENV448cDRjT0dbXWoKgHKR5x223EPiNHjjtIi3MpuqjrdI6NjDUn6ECiCkOEjkCZjx4oHkTpjGmARs%2BN%2BH3nlK5d8goxW%2FTqGJcCf4r9z94Fyu0f3CVStqi52OAfohIn0oiK4wRDnaqpEM4Zt4vqHCGHbPp4JeMi27nFfLRZP8H1fURXB2HxsuxtZWlMIT6krvI5Qle2YoY1KGSCVug546n%2FE8dNmLj8MZ9U9A2svnDPzHlWW6TphmqV3g3h8W9o7mtRES8CwA39xBaVMxshFx7xL6x1y3pNXgKNMK0o48QLAMweG0alF99jG1jtYaPouJ0omAGXTVkzK0MYd0y021nCcjL5qRJqtGrBdUl9zmY8ctkY2unq2OZQ7Rppj6UE87LorJdbhSWTUhvpTQhaoDk%2B7rkNep%2BSxl9zB8Y4YU66K0ysdDLQCaTSKco6I9j9n0sQ%2BUgMoeaMLRrpGnMMQGhTetgbU3ysGiCffldIxwySG%2Fo3kpmIeKoWl6cCRpIEi1vt61owAZEHaeY8C1SL0oJkyhXlBk%2FnmLI3kuHrZjaJ8dCvK6N7l12CJ8D%2BVMDY1PFLy3x834UDCswt3JBjqkAQ9bOeeU6XbNAZOLSamkLRMrIgvmaMW93cc3uw%2BhD3YluJb4BDb7Nqt2BtcfximRRkpPI06bpGK6X9rMJ87VV5JXGyfy4nh%2B5GMjBvMoVHVTgnYohTb0gy9NCxb0%2BHYciwMVrpy5lL3GZr6t6ko6owXtiq7AstGoJwG%2Bhk2PvAFBSAYiewStado0bUqSbIiZmd1g%2Bo0Y%2BtO9diQjkqIbYMqKjtTp&X-Amz-Signature=24e48d7faea933c6c503943aea44a7ab011ccbd1a28fdeae04bb83bd25451f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG6V677H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsYSTRtY1VZSVYdFAI2jSjFsx4r3hA0mVbZ2ska2%2F7HQIhALoaldXr3Rs3KFuHg%2FTEzOc3BfTcmtZMzbZadd0l6mtFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynkiCyyXGZHoaAx9kq3AMxPtHmKmhn54Q675QbFQqfZZRpCdi8tMKsaCRGNs09%2FYWEcGENV448cDRjT0dbXWoKgHKR5x223EPiNHjjtIi3MpuqjrdI6NjDUn6ECiCkOEjkCZjx4oHkTpjGmARs%2BN%2BH3nlK5d8goxW%2FTqGJcCf4r9z94Fyu0f3CVStqi52OAfohIn0oiK4wRDnaqpEM4Zt4vqHCGHbPp4JeMi27nFfLRZP8H1fURXB2HxsuxtZWlMIT6krvI5Qle2YoY1KGSCVug546n%2FE8dNmLj8MZ9U9A2svnDPzHlWW6TphmqV3g3h8W9o7mtRES8CwA39xBaVMxshFx7xL6x1y3pNXgKNMK0o48QLAMweG0alF99jG1jtYaPouJ0omAGXTVkzK0MYd0y021nCcjL5qRJqtGrBdUl9zmY8ctkY2unq2OZQ7Rppj6UE87LorJdbhSWTUhvpTQhaoDk%2B7rkNep%2BSxl9zB8Y4YU66K0ysdDLQCaTSKco6I9j9n0sQ%2BUgMoeaMLRrpGnMMQGhTetgbU3ysGiCffldIxwySG%2Fo3kpmIeKoWl6cCRpIEi1vt61owAZEHaeY8C1SL0oJkyhXlBk%2FnmLI3kuHrZjaJ8dCvK6N7l12CJ8D%2BVMDY1PFLy3x834UDCswt3JBjqkAQ9bOeeU6XbNAZOLSamkLRMrIgvmaMW93cc3uw%2BhD3YluJb4BDb7Nqt2BtcfximRRkpPI06bpGK6X9rMJ87VV5JXGyfy4nh%2B5GMjBvMoVHVTgnYohTb0gy9NCxb0%2BHYciwMVrpy5lL3GZr6t6ko6owXtiq7AstGoJwG%2Bhk2PvAFBSAYiewStado0bUqSbIiZmd1g%2Bo0Y%2BtO9diQjkqIbYMqKjtTp&X-Amz-Signature=5d6822609466d5a9a14de29c1663a8fc9a688c24323dee5b7b4aa63a10249fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
