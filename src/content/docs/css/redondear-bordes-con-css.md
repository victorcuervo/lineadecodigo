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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BMCN3NT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTl4l9NUngjKvfqXVMsE%2BHxhTCdJymDyMssDM7sQOQkAIhAMhfB%2B319mEpzYAeA6MN1ZXZd8MpNj%2B8n5j32aFFC3IUKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGptVSgGxlTFptPaoq3APFU8Nc%2Bj01D1YXvL8rdQlmkuZSG6NqGmEzwWAOOosVX1tgIKtptbJdtuY8PZju%2B7fse7P3v5LBhcVAXUnq%2BDMEZiPaNeCS7F%2BNtzPGKO0EwexYVNtceRLnNEiJtriRyIZLjVnIiFYJyMZ6D9FdDLTDaXFxyFpD0xdgKkYaUSkHkNLz9rliWCVbfJGRc48VSfcV4ZVAnlUthEWBwgBzUUlcCwR0vW4p7hZ8iAXx6SkNBNji8tsnYowyST5kY9M4jEpK5qKI1m%2FhJys24irb2GqRs2Th4l9XqJXTQpH5kgU8UoFoLdoCTaspbbPJ%2F0TDxGg2yAni1u2zljFA9z%2BsUyY6j18yLvlWx%2FiUpCCxShlLzn5Vf%2FQ%2BolgiCwQcplSwHzRm0keM2UYWIKlKSyGGzlug0gSqI8a02xtx1zqCMnL7s%2FF6guZgsPKBLujv2V7KGnrIlU2rjDYUUPx%2F%2FHZoXnPO6hitsimA3zWpUqoDxlU9Twd1ba0HC4bNWv3iWu5mArDdP8ZZ9WvOY22ZDv0oKQ8GBjK%2FSVBFGUAZCvjtZRVMwCzOfL2v%2B6SQUbROSyDoLY85iRcOo70hYBAntW7Wvm4wcxXVpHeGQB7cktlAtoKto63GE8E1Tmcqw0e7CDDQutbJBjqkAeCetrq%2BkTtNcP9x36it%2FnvTSpHtX1dD5lnVBFYf1s7sFbLa9YjJ6giEiS6vHegP6g76ikHDJ0JjveAuTpUIaOOyevEQgZDxaFPrU97odJ%2BCJH6fx0eLU%2Fp8xdxy07J%2BMeSg6hKHfgo20YxE136I%2BKQi%2F4RLZWxlceGAk97Fwaz4cagM4QHBMpdqAQibuB3OVeag42FSKJ1qnhmicynTaKPCZiZg&X-Amz-Signature=44cb0752e49a7e99f098f2a28665a965ffd6ce18a331a2c044b7230acd0473a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BMCN3NT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTl4l9NUngjKvfqXVMsE%2BHxhTCdJymDyMssDM7sQOQkAIhAMhfB%2B319mEpzYAeA6MN1ZXZd8MpNj%2B8n5j32aFFC3IUKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGptVSgGxlTFptPaoq3APFU8Nc%2Bj01D1YXvL8rdQlmkuZSG6NqGmEzwWAOOosVX1tgIKtptbJdtuY8PZju%2B7fse7P3v5LBhcVAXUnq%2BDMEZiPaNeCS7F%2BNtzPGKO0EwexYVNtceRLnNEiJtriRyIZLjVnIiFYJyMZ6D9FdDLTDaXFxyFpD0xdgKkYaUSkHkNLz9rliWCVbfJGRc48VSfcV4ZVAnlUthEWBwgBzUUlcCwR0vW4p7hZ8iAXx6SkNBNji8tsnYowyST5kY9M4jEpK5qKI1m%2FhJys24irb2GqRs2Th4l9XqJXTQpH5kgU8UoFoLdoCTaspbbPJ%2F0TDxGg2yAni1u2zljFA9z%2BsUyY6j18yLvlWx%2FiUpCCxShlLzn5Vf%2FQ%2BolgiCwQcplSwHzRm0keM2UYWIKlKSyGGzlug0gSqI8a02xtx1zqCMnL7s%2FF6guZgsPKBLujv2V7KGnrIlU2rjDYUUPx%2F%2FHZoXnPO6hitsimA3zWpUqoDxlU9Twd1ba0HC4bNWv3iWu5mArDdP8ZZ9WvOY22ZDv0oKQ8GBjK%2FSVBFGUAZCvjtZRVMwCzOfL2v%2B6SQUbROSyDoLY85iRcOo70hYBAntW7Wvm4wcxXVpHeGQB7cktlAtoKto63GE8E1Tmcqw0e7CDDQutbJBjqkAeCetrq%2BkTtNcP9x36it%2FnvTSpHtX1dD5lnVBFYf1s7sFbLa9YjJ6giEiS6vHegP6g76ikHDJ0JjveAuTpUIaOOyevEQgZDxaFPrU97odJ%2BCJH6fx0eLU%2Fp8xdxy07J%2BMeSg6hKHfgo20YxE136I%2BKQi%2F4RLZWxlceGAk97Fwaz4cagM4QHBMpdqAQibuB3OVeag42FSKJ1qnhmicynTaKPCZiZg&X-Amz-Signature=bbd95360b6a529e16bef87bb62fa045850251c40f7b82341785a37d3233c7ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
