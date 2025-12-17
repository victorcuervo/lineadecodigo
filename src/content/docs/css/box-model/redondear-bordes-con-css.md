---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSCB4WO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB2xtBvyB3wS6CmxSGS8qMRADOwhQ3buOju0UosTZ8gIgeSJgSBumME7lnr8bG%2BLgaFFoqTF0xBod7vI%2Bepqi9iQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw1k1UOy8F8x4v5NSrcA3UJJrPXKQ0tLY7eEc3isBnZOTdc0PdwI8V%2FBYymGj91CT98Z9MN6mDH2US04qJSU8Bm7e0F8Feo6QTuEGrGSf2IBckvSPtbUjZF%2FVE5xtTmpEuA%2FLdFA47Crq2UwO7D7KzCCflVSb7fQWgK2heFVQOCuRL8GF1A%2FP%2BslnylXb3v520W%2FQVQDVzqYoCUdwXNy6glJrHP4FJHvKJKW%2F0B98TcGkvB%2BLAaompca2Wbn2eyq1cIlkvcwkPwrS5cIgmSzukoT6y6ebsM764%2FdJ3OINWYKHb4Uxe%2B7H9pVTi%2Bg7n1pvTpmfor7y5dZqmfhlZcmw8ED537Zvou3nIn3dVL7rFPv05%2B%2FJgE7FuRzOJWV%2B38zsmz8Yv797Sc1ZeRbRhlU2Ndu2akAtWNTDIXwvOwv%2Bjc5wIrXhQlVoc%2FFwTRrNssuF892oGlyKJ30uCxLVeAbis3SGee3RPOX%2BQU8BSb1%2FCtvVwacj3bMyD13JIuqWlfACbgq21Kls1Dy7%2B0X1IPlpOpFmYm0GFnY3VhbyleOls0jUMOaa301%2Fja1uRrtLN1ac3M4EYRSgzJp2cj8g2ycB00kXZZTWxkoTVkm9y7qmQk5x%2F%2F4NZw4%2FSj5e%2FTuLIJUmw4nOpcRthVBau0MMrhisoGOqUB0K%2BMINd83MkiN1evgv%2FOcetxliAjvOxcUuRm4VhUHTy7rtyT8gsq75F0AAWsJOcd3cYLoB9T9NfVBLwTAbHsoXoaD5RUU%2FqZEeCKDVs5JLCDgCwprSaiWpjYkU6cJ2rYZt3YvxAU3TsN6%2F9qUuEAFpljYeNo8fTRpSeC5E70zLumvZ0v%2BpwXJ7dmkLNAEwBDlnpnoAEyIJtdFDKbWYykksN6bxzJ&X-Amz-Signature=b3bfffa6ad7289f192ecb61e68e04b755271e4d6ce6f365c7c2252addb703e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSCB4WO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB2xtBvyB3wS6CmxSGS8qMRADOwhQ3buOju0UosTZ8gIgeSJgSBumME7lnr8bG%2BLgaFFoqTF0xBod7vI%2Bepqi9iQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw1k1UOy8F8x4v5NSrcA3UJJrPXKQ0tLY7eEc3isBnZOTdc0PdwI8V%2FBYymGj91CT98Z9MN6mDH2US04qJSU8Bm7e0F8Feo6QTuEGrGSf2IBckvSPtbUjZF%2FVE5xtTmpEuA%2FLdFA47Crq2UwO7D7KzCCflVSb7fQWgK2heFVQOCuRL8GF1A%2FP%2BslnylXb3v520W%2FQVQDVzqYoCUdwXNy6glJrHP4FJHvKJKW%2F0B98TcGkvB%2BLAaompca2Wbn2eyq1cIlkvcwkPwrS5cIgmSzukoT6y6ebsM764%2FdJ3OINWYKHb4Uxe%2B7H9pVTi%2Bg7n1pvTpmfor7y5dZqmfhlZcmw8ED537Zvou3nIn3dVL7rFPv05%2B%2FJgE7FuRzOJWV%2B38zsmz8Yv797Sc1ZeRbRhlU2Ndu2akAtWNTDIXwvOwv%2Bjc5wIrXhQlVoc%2FFwTRrNssuF892oGlyKJ30uCxLVeAbis3SGee3RPOX%2BQU8BSb1%2FCtvVwacj3bMyD13JIuqWlfACbgq21Kls1Dy7%2B0X1IPlpOpFmYm0GFnY3VhbyleOls0jUMOaa301%2Fja1uRrtLN1ac3M4EYRSgzJp2cj8g2ycB00kXZZTWxkoTVkm9y7qmQk5x%2F%2F4NZw4%2FSj5e%2FTuLIJUmw4nOpcRthVBau0MMrhisoGOqUB0K%2BMINd83MkiN1evgv%2FOcetxliAjvOxcUuRm4VhUHTy7rtyT8gsq75F0AAWsJOcd3cYLoB9T9NfVBLwTAbHsoXoaD5RUU%2FqZEeCKDVs5JLCDgCwprSaiWpjYkU6cJ2rYZt3YvxAU3TsN6%2F9qUuEAFpljYeNo8fTRpSeC5E70zLumvZ0v%2BpwXJ7dmkLNAEwBDlnpnoAEyIJtdFDKbWYykksN6bxzJ&X-Amz-Signature=5902f85007ed961c26c3b876d478b644b32afc528cec18eadac91884b62fb9d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
