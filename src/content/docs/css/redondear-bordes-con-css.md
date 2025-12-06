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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBGCZR4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjeGBW4foHnS2cSYfeE5fAQEmfiLKYkSRH%2FFq0hsnacwIhANmIAxgUuMoQRuMEPdJh9W82W0AdcK38CzCk4nW2tm%2FhKv8DCHEQABoMNjM3NDIzMTgzODA1IgwY%2FXum5TU0%2BEeXQf4q3ANfNEOhPzs93z%2FC1TvLYZWLE8CldhehmBELa6u2azcsWQ94j3vguYO380ZtBHtZNRABZPaBV%2BDZCBXUYWTMWLflGWeu4qYqrLvmGUEeVUGCyyUX9l%2FRRE2yU7RPmT7IbK0SIwGQf9j0sf3o2%2FAjwOgAnOLXDQHRfwYCe%2B7SNw%2FV%2F6AkuRbTyWaNVLZHz%2BiIWHIG7ogHD5%2BJN%2F1ndPZQmip98RKR%2FE1NfNaiPMm2OZHCtFo0cK7JUDRAIbwodydpbEW5iEMKkV2t%2F2y2ovwgDOxeuP6mi6%2FzKUOu4rJKNe5oxVALkV7i7ElIZDNdFU4UMAPaAidcLAQEyGuqM05y1Mx8JXKuVY6mc7xMkK8COVtv%2B1MTKlILUp3oX6azFbCGHflAgXjHb1QbE5Xc5%2BaPdinzonkmBPtRxUXCzboe%2Ftt7cZf9Kp84EVNGYXylTssLoPIri3i5KnnDvg4%2FjxXERXCy2fuHqHdz1UzuTbwMtxP7I%2BS2sMBKKhSSv8o3EliqSpTASbBCuYrg7l2gf9U4QmaymD%2FfoYq9drpxuBIa8jqxIlHIEaAJ%2FnTM4uky7vhdUpekt82Mi1CDhU%2FpR3ALf3NMV%2BW5YaZ395LB7N%2FronVhODRENT5i00A54UhwEDDUvM%2FJBjqkAb40hW%2BMFF1KLER1E19CpqUeZ4EgrQGW6VDWyfUkSnWu80oAHwIC%2BDQAXhmiJDNvs6xgDDIhvRbz2SkEE4HpTuxvKhvHllL1Wx6ltnhs3YJHLYDdIbnpYICYt%2Ba3pwAMa2vyFv447wXwmKePeFWzv3Zt%2BykQQfGRcNr1ysJrpHeIRZoqGTprjHgDhzwgJjR9Cp8YsASY%2FOg4P8GrMr4n3pI2pCHg&X-Amz-Signature=960738272a4bce9548219fd8d178b8cc22d807acd1e6f6107338c1b641ff54c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBGCZR4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjeGBW4foHnS2cSYfeE5fAQEmfiLKYkSRH%2FFq0hsnacwIhANmIAxgUuMoQRuMEPdJh9W82W0AdcK38CzCk4nW2tm%2FhKv8DCHEQABoMNjM3NDIzMTgzODA1IgwY%2FXum5TU0%2BEeXQf4q3ANfNEOhPzs93z%2FC1TvLYZWLE8CldhehmBELa6u2azcsWQ94j3vguYO380ZtBHtZNRABZPaBV%2BDZCBXUYWTMWLflGWeu4qYqrLvmGUEeVUGCyyUX9l%2FRRE2yU7RPmT7IbK0SIwGQf9j0sf3o2%2FAjwOgAnOLXDQHRfwYCe%2B7SNw%2FV%2F6AkuRbTyWaNVLZHz%2BiIWHIG7ogHD5%2BJN%2F1ndPZQmip98RKR%2FE1NfNaiPMm2OZHCtFo0cK7JUDRAIbwodydpbEW5iEMKkV2t%2F2y2ovwgDOxeuP6mi6%2FzKUOu4rJKNe5oxVALkV7i7ElIZDNdFU4UMAPaAidcLAQEyGuqM05y1Mx8JXKuVY6mc7xMkK8COVtv%2B1MTKlILUp3oX6azFbCGHflAgXjHb1QbE5Xc5%2BaPdinzonkmBPtRxUXCzboe%2Ftt7cZf9Kp84EVNGYXylTssLoPIri3i5KnnDvg4%2FjxXERXCy2fuHqHdz1UzuTbwMtxP7I%2BS2sMBKKhSSv8o3EliqSpTASbBCuYrg7l2gf9U4QmaymD%2FfoYq9drpxuBIa8jqxIlHIEaAJ%2FnTM4uky7vhdUpekt82Mi1CDhU%2FpR3ALf3NMV%2BW5YaZ395LB7N%2FronVhODRENT5i00A54UhwEDDUvM%2FJBjqkAb40hW%2BMFF1KLER1E19CpqUeZ4EgrQGW6VDWyfUkSnWu80oAHwIC%2BDQAXhmiJDNvs6xgDDIhvRbz2SkEE4HpTuxvKhvHllL1Wx6ltnhs3YJHLYDdIbnpYICYt%2Ba3pwAMa2vyFv447wXwmKePeFWzv3Zt%2BykQQfGRcNr1ysJrpHeIRZoqGTprjHgDhzwgJjR9Cp8YsASY%2FOg4P8GrMr4n3pI2pCHg&X-Amz-Signature=adcce7acd5a0de581eb18228394b04d609a15c12f6862ce2b1b22e020b3611bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
