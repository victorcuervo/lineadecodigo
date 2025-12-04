---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIF627SP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHbV92fPbxJL69puEY7MbXgLfD81GSS%2BNL6mEqW5pTGqAiEA2pvwZGKCinbTNtJ4Rr1x5KCwvMj625AI6gMVH8KpDN4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKAWROkyrvMJmkHS0yrcA8%2BQ6vWFZM5ycmNIorVUl4N%2BTZdjLlOUDmWIOIqhHb0F%2Bow59HU15b7CTPpK%2FADUoVrDR8kFIxJ%2B%2BL4K2kdwHk4DRJTyWJ6MKtn7VtwiViBvYPuYS0XCssYQWuZzrlM3lNWJAicCE713jaZjKnt2uqVOqf17Qp1yavRtjMpeTFL%2B91q%2BkMKJDRgEl%2F6uFiwfaIqJU7JXpdB%2F3ykU6XmfZMVd82KDBsaVwdkHB%2B09Ti6vKSw3uNsiYHNx%2BMwWkUjzPikpS7mATFL6xZDJiMTtVZXLMfnss8WW78pG%2FhC2ZEiGUEBTHZdJqf277RlcohA90ioT%2BB1BrxXoW0i1vUvqlevQPU7PI9d1csSnSxSqQeUi8%2FwAE%2BTrySsQ%2FOOGHlyys7IRV1GF8foADHxhCxewV4XR2LRsKRKsZ5yVKI7SuvGaZYdu4RtM4G1mPsqv2Bvhm3udEh4MmKK0okdVhvt9qSeVmq3PcYSR%2F7PPPSlbgnA9TWWyY1If%2F%2FrCb%2Fzs8z%2FmGS8HgkZl0rtYTt3fzox3rCyn1eMbLUxZs2cZeuA%2FAGbYtRI%2FXl6SAf3xOPaqDqMmExQFFWTmth%2FVZwAcqFmoqBBp02BVnpil4wjRjtxyySzWGW3D2KfK23OUeogDMM%2FoxMkGOqUB66rv81fGVUxG2IdI%2Bln8%2FNn1H4UYj75rR68Qb9%2FpQX%2FJk4PZ%2BTXygw2IV%2FJjLln02CH2%2FjPmd8f3LAU7jM4OyLZTNtsDdmmXEoOqAeJewCiSjlbmL5cXCltqVnOg11kimp%2BreYsaY9U6Ew1W087iWjmH2MYG8EemE2vIkvpGmKQZd4HEuj1gAdOmMUH7B6csATQMl2EJ5E29M%2FHTGQR4t9EcIg4z&X-Amz-Signature=ef88bb40c74eaf555696ff95d71b3a7689c6141dc3d18b31913b0aeb6517a94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIF627SP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHbV92fPbxJL69puEY7MbXgLfD81GSS%2BNL6mEqW5pTGqAiEA2pvwZGKCinbTNtJ4Rr1x5KCwvMj625AI6gMVH8KpDN4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKAWROkyrvMJmkHS0yrcA8%2BQ6vWFZM5ycmNIorVUl4N%2BTZdjLlOUDmWIOIqhHb0F%2Bow59HU15b7CTPpK%2FADUoVrDR8kFIxJ%2B%2BL4K2kdwHk4DRJTyWJ6MKtn7VtwiViBvYPuYS0XCssYQWuZzrlM3lNWJAicCE713jaZjKnt2uqVOqf17Qp1yavRtjMpeTFL%2B91q%2BkMKJDRgEl%2F6uFiwfaIqJU7JXpdB%2F3ykU6XmfZMVd82KDBsaVwdkHB%2B09Ti6vKSw3uNsiYHNx%2BMwWkUjzPikpS7mATFL6xZDJiMTtVZXLMfnss8WW78pG%2FhC2ZEiGUEBTHZdJqf277RlcohA90ioT%2BB1BrxXoW0i1vUvqlevQPU7PI9d1csSnSxSqQeUi8%2FwAE%2BTrySsQ%2FOOGHlyys7IRV1GF8foADHxhCxewV4XR2LRsKRKsZ5yVKI7SuvGaZYdu4RtM4G1mPsqv2Bvhm3udEh4MmKK0okdVhvt9qSeVmq3PcYSR%2F7PPPSlbgnA9TWWyY1If%2F%2FrCb%2Fzs8z%2FmGS8HgkZl0rtYTt3fzox3rCyn1eMbLUxZs2cZeuA%2FAGbYtRI%2FXl6SAf3xOPaqDqMmExQFFWTmth%2FVZwAcqFmoqBBp02BVnpil4wjRjtxyySzWGW3D2KfK23OUeogDMM%2FoxMkGOqUB66rv81fGVUxG2IdI%2Bln8%2FNn1H4UYj75rR68Qb9%2FpQX%2FJk4PZ%2BTXygw2IV%2FJjLln02CH2%2FjPmd8f3LAU7jM4OyLZTNtsDdmmXEoOqAeJewCiSjlbmL5cXCltqVnOg11kimp%2BreYsaY9U6Ew1W087iWjmH2MYG8EemE2vIkvpGmKQZd4HEuj1gAdOmMUH7B6csATQMl2EJ5E29M%2FHTGQR4t9EcIg4z&X-Amz-Signature=5dbbcccf5ec9c1660aeabd70f8b933d3260351771ef71426b60772ae5d486a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
