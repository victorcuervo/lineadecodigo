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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TY4RGPY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfB5hmbmlxBCeTwL1cme5MwEL6XaDQ%2B6IvMnymW25YrAiACDGuGpbe0Jzbt7ZpTwyWLoyUbwQbmMgWLeb12EK16LSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2muDhVx4S7%2B9AF6NKtwDxIvIVW6i2gbgRX9EZNabPBJpdDQVf6mTgJlPf9y4Z1rAZNmx38PPwa6gDyegp%2FuuQvfP%2BMjHgZN7HpnBsHkSE4IHh0pgffHSzZOVjGq4ruCTOJ65%2BQ0uFi4ZoDizUHCKyWTrTK8hSDS5JfJ4YtOV4pNftXo2wYSvOcaBVG68acxmauBle5tCARjgi1iijE1DR8pKrzRksPRL%2FeVuaaHHo4gLF334O2bvKBqPKeEbt8dzbEJbvCSn1QH%2F%2BuY3mhyrkbAaATjxr95O2ro8Oh%2B1oK5GgnCyBz3ZlMNfO3EFsV8zUbkTijMnjbKThkd1ZuPFpAjQJhbhxKYNQjOjc%2FuAxM6%2BB9fVPNlIhKa7KySrH5JwaztTes0X5GFt8FdZz%2B%2BzrwIuF8UyChxolAGdI88XwS2IJLUu5Fz%2B0%2F2UVUHnvRaRfHJasVadyAfidkwaG%2FXcB6YjFbAqylU7NbCDv4X4ZNkd31REmF4HpGsZy44fSCrmO6h%2Bv4j%2Bk6RFf%2F8DpgzNk9tE23yHpX9tJTaytoYYXQBt%2B%2B%2Bvs521mxC2EHlhrh%2B2WFM%2FNh3radD0MAJaL1t%2B3MQAzvBC3BkuXcB3626mcYLM0DOFGX5mRfe2K%2FL1m0hbUjmf7SijX3H%2B3X0wlI7eyQY6pgHOfhTdClVLgipjRs9P10on%2BKEz1glI6bh5VBkY60n9o%2BzltOQHNkrxm%2F64QI0lKFJlZVTrC6XeR8kzYdSW7Lyu5SXNXmhLDLXDDujrP58hUc892MZv1HwIxwUUUdqlAXSP3Qsqf5NIYv3tS%2BhojLN13cMRehy000VSNP0vildJBqKmnhxduKoK0Bard3A0HFQXRsB8VxEAIB1nge3WFl%2BC8iKKstkO&X-Amz-Signature=3c23f002cff76950892a9f89a0730c0469562c4966932325a4901876c6b46622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TY4RGPY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfB5hmbmlxBCeTwL1cme5MwEL6XaDQ%2B6IvMnymW25YrAiACDGuGpbe0Jzbt7ZpTwyWLoyUbwQbmMgWLeb12EK16LSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2muDhVx4S7%2B9AF6NKtwDxIvIVW6i2gbgRX9EZNabPBJpdDQVf6mTgJlPf9y4Z1rAZNmx38PPwa6gDyegp%2FuuQvfP%2BMjHgZN7HpnBsHkSE4IHh0pgffHSzZOVjGq4ruCTOJ65%2BQ0uFi4ZoDizUHCKyWTrTK8hSDS5JfJ4YtOV4pNftXo2wYSvOcaBVG68acxmauBle5tCARjgi1iijE1DR8pKrzRksPRL%2FeVuaaHHo4gLF334O2bvKBqPKeEbt8dzbEJbvCSn1QH%2F%2BuY3mhyrkbAaATjxr95O2ro8Oh%2B1oK5GgnCyBz3ZlMNfO3EFsV8zUbkTijMnjbKThkd1ZuPFpAjQJhbhxKYNQjOjc%2FuAxM6%2BB9fVPNlIhKa7KySrH5JwaztTes0X5GFt8FdZz%2B%2BzrwIuF8UyChxolAGdI88XwS2IJLUu5Fz%2B0%2F2UVUHnvRaRfHJasVadyAfidkwaG%2FXcB6YjFbAqylU7NbCDv4X4ZNkd31REmF4HpGsZy44fSCrmO6h%2Bv4j%2Bk6RFf%2F8DpgzNk9tE23yHpX9tJTaytoYYXQBt%2B%2B%2Bvs521mxC2EHlhrh%2B2WFM%2FNh3radD0MAJaL1t%2B3MQAzvBC3BkuXcB3626mcYLM0DOFGX5mRfe2K%2FL1m0hbUjmf7SijX3H%2B3X0wlI7eyQY6pgHOfhTdClVLgipjRs9P10on%2BKEz1glI6bh5VBkY60n9o%2BzltOQHNkrxm%2F64QI0lKFJlZVTrC6XeR8kzYdSW7Lyu5SXNXmhLDLXDDujrP58hUc892MZv1HwIxwUUUdqlAXSP3Qsqf5NIYv3tS%2BhojLN13cMRehy000VSNP0vildJBqKmnhxduKoK0Bard3A0HFQXRsB8VxEAIB1nge3WFl%2BC8iKKstkO&X-Amz-Signature=6e242b551bd3b44ea764c8ed1a31580a1eba845b16782cf0b7bf41ea6033af17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
