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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X53XDB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4wiZaKJz1Pdztb2EdAzGI2NwW44HIQQYXsFHhWwt7fAiBLAj9YDmL5qmuia8MjubJtOycdk2BhHnaSfxzU9yQEkir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrfWJHy7%2BMGF5a6UnKtwDQxlz17hQZbtQlKRH1oqs1l%2FhkRwKXNzqLbT3w3mwiXXQD3xPwZzpArMBvcJ2CX3OedynSREmsWdzIyaH%2BBxrEk6vVWh38DQ5DvFLUBSsbtiweL5T%2FSbNMlpQxSPhQt9JiATJumdDfaYS0qU995KWL6bHUrySL0HY9bzk95JTVU9630vW1PC%2Fl%2F5OuwVubwrKxEoPBpGAaYHUF6%2BdNbmt1p50ABlDYxUNg8wmAWJe%2FQNH5nDnWIQDyGelL4N6kxRJNS2YqDykJ%2BW775ws9gqD1Bg%2BoHxZRaqMvl206HSFQsCouTn0pLlKC5agKD5i7LJgLAWOF27z1pXQLRLr4Pw8fu4V2foDRArJpQItnbF3kbXMoLdsN%2BRlelgRZPwvRDA5iOZZ2ZIx41Ir18aTAmzfNTa%2FseRQeE8ji%2FfcHrGR8hG%2BT1wGLPxEpJmBNOyp97x1CWW4TONRLd4k4by8FK6izkgqYYN%2Bpu%2FIR0df1UD02MH4vR7ta2LoocFJza8Nuv201ZXlwYRMMroIxtX4IdFJj1nWzchZvP7PnEQehuiTtAz5QaA4bW%2FTPeykET8c010czoLD6CJltWDV1Wo5e%2FbOXhapjKPEkGl7Tg91du%2F8jlsQVsaQNap3r8nn2y0wyabQyQY6pgGNEeV%2Bv33YCTCa8fFWhpetzXKDEDjSaydQEuWsl0TNuRQTVwWufo2XyX%2Fp14hHEJHfVc7tqHQzCMOvDV%2Fct8vIA6wgAtFn4oiGCwak1IiS5WwAy0CQXlxnOJhu1S%2B%2B78WELkb4Ti1lhoYJhDBWS4ov0V55nQ2Qu9TcGAcl0weCS4Xe8qpRLEamB7P%2FzDh1r%2FDIvF2pSRKzwTUS88YpFPjHDtr7XbKX&X-Amz-Signature=329c77725e222401934633e4580be1d7d1ce88ac4fce7d8e37dcdc630ff3d326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X53XDB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4wiZaKJz1Pdztb2EdAzGI2NwW44HIQQYXsFHhWwt7fAiBLAj9YDmL5qmuia8MjubJtOycdk2BhHnaSfxzU9yQEkir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrfWJHy7%2BMGF5a6UnKtwDQxlz17hQZbtQlKRH1oqs1l%2FhkRwKXNzqLbT3w3mwiXXQD3xPwZzpArMBvcJ2CX3OedynSREmsWdzIyaH%2BBxrEk6vVWh38DQ5DvFLUBSsbtiweL5T%2FSbNMlpQxSPhQt9JiATJumdDfaYS0qU995KWL6bHUrySL0HY9bzk95JTVU9630vW1PC%2Fl%2F5OuwVubwrKxEoPBpGAaYHUF6%2BdNbmt1p50ABlDYxUNg8wmAWJe%2FQNH5nDnWIQDyGelL4N6kxRJNS2YqDykJ%2BW775ws9gqD1Bg%2BoHxZRaqMvl206HSFQsCouTn0pLlKC5agKD5i7LJgLAWOF27z1pXQLRLr4Pw8fu4V2foDRArJpQItnbF3kbXMoLdsN%2BRlelgRZPwvRDA5iOZZ2ZIx41Ir18aTAmzfNTa%2FseRQeE8ji%2FfcHrGR8hG%2BT1wGLPxEpJmBNOyp97x1CWW4TONRLd4k4by8FK6izkgqYYN%2Bpu%2FIR0df1UD02MH4vR7ta2LoocFJza8Nuv201ZXlwYRMMroIxtX4IdFJj1nWzchZvP7PnEQehuiTtAz5QaA4bW%2FTPeykET8c010czoLD6CJltWDV1Wo5e%2FbOXhapjKPEkGl7Tg91du%2F8jlsQVsaQNap3r8nn2y0wyabQyQY6pgGNEeV%2Bv33YCTCa8fFWhpetzXKDEDjSaydQEuWsl0TNuRQTVwWufo2XyX%2Fp14hHEJHfVc7tqHQzCMOvDV%2Fct8vIA6wgAtFn4oiGCwak1IiS5WwAy0CQXlxnOJhu1S%2B%2B78WELkb4Ti1lhoYJhDBWS4ov0V55nQ2Qu9TcGAcl0weCS4Xe8qpRLEamB7P%2FzDh1r%2FDIvF2pSRKzwTUS88YpFPjHDtr7XbKX&X-Amz-Signature=690f62323ef65886b729dfd24e821b0b8053419ebbd383de35b5fa8854caf11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
