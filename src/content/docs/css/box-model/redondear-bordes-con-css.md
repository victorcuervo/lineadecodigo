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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVHYZM3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0dfy%2FpV4Ac9gAP5htn%2BbtkKRHkG1JtkIf%2FtVuYODuWgIgbDlSvhwCMw%2BUxAIwGYSvGiyCA12vAUDGf8EPyItEoccq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHV7XECFp4eg4ncJLyrcA%2Fq%2F96dfflogFfFjh26MkTw8DOIBvktAw6ouhFWCtYtjvEw5ahu9Flpv3cT%2Fgk5fjR5icaWCQkfPTIaQKMfMw94dxNHWHCMo93q5Q3qw8hDO3L2U1n5bYGGzitbnPDA4jiYW3FLzAvdabJIIGyT2BYi%2Fp23szy6yJzd5T1l8QOlM3CLqXAsD6m5ZOV3l2RDNW5xQNmh99LfbooZ1oPrcGfKPBDv7NtqJv7EPl2oF9jBhDrQPBu9kbtj5B9MURephMcK1T8F5eVU5UlwpeAAx6jd5rVanp1dhFM6RLx7Yv6uyseEcfACNGf%2B3qklFMXB8w7ujE3wCfbTxrQtxLMST%2FvQc1jFYCyTR2qyjjoY16a7uGNQBuSnOHSplL9Hehj%2BmWrsd8p7oSPZPaFOjD6S4nwVD1%2FwVw5UpzRqE8kke8DQuO0AUotxyaecg3T%2FkNxz7l0Vh4IUxHATVtQwTf%2FQ0uvU761p3eKYrH9%2Fy10fRS9%2FjLWhyVJZ5%2B2Os3hIGWkPtSH21Z5fZx2OFvNLONHuuv2mPWT9szUNzfBzGsVkWCXLZZxGlRST0JH1vnYTBdwKzzPlXyzQ7hrah5MfeQ9mCyIMA%2FCCZj5x2bxRyp10Ad24ESopDHnNviBxXKmapMPbhisoGOqUBFu46pweUcBJ0OOuExImCRd6hpaDRNVcjKT3poyGTwYvE%2FJ0kOhlIyRJPTVUjTMSvugrXpAnycIELkosLUQAj5E7RAxxCXNNJHE0Jue2SvRq3O5wWU%2FluYJzvO1SDqXcWOOZWYjFKqOvPUjnmnI%2B8SEUMmguwUiGRsjC6sAvbLkvsjbXsMjtRCwuRF%2BV2umRi6iMNw3b%2FIGBwd1YGH3ybywiBHtoF&X-Amz-Signature=71a0a8ac873814a34ef73057a1970cb358f66c902599048e9b32aa053a5bcfd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVHYZM3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0dfy%2FpV4Ac9gAP5htn%2BbtkKRHkG1JtkIf%2FtVuYODuWgIgbDlSvhwCMw%2BUxAIwGYSvGiyCA12vAUDGf8EPyItEoccq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHV7XECFp4eg4ncJLyrcA%2Fq%2F96dfflogFfFjh26MkTw8DOIBvktAw6ouhFWCtYtjvEw5ahu9Flpv3cT%2Fgk5fjR5icaWCQkfPTIaQKMfMw94dxNHWHCMo93q5Q3qw8hDO3L2U1n5bYGGzitbnPDA4jiYW3FLzAvdabJIIGyT2BYi%2Fp23szy6yJzd5T1l8QOlM3CLqXAsD6m5ZOV3l2RDNW5xQNmh99LfbooZ1oPrcGfKPBDv7NtqJv7EPl2oF9jBhDrQPBu9kbtj5B9MURephMcK1T8F5eVU5UlwpeAAx6jd5rVanp1dhFM6RLx7Yv6uyseEcfACNGf%2B3qklFMXB8w7ujE3wCfbTxrQtxLMST%2FvQc1jFYCyTR2qyjjoY16a7uGNQBuSnOHSplL9Hehj%2BmWrsd8p7oSPZPaFOjD6S4nwVD1%2FwVw5UpzRqE8kke8DQuO0AUotxyaecg3T%2FkNxz7l0Vh4IUxHATVtQwTf%2FQ0uvU761p3eKYrH9%2Fy10fRS9%2FjLWhyVJZ5%2B2Os3hIGWkPtSH21Z5fZx2OFvNLONHuuv2mPWT9szUNzfBzGsVkWCXLZZxGlRST0JH1vnYTBdwKzzPlXyzQ7hrah5MfeQ9mCyIMA%2FCCZj5x2bxRyp10Ad24ESopDHnNviBxXKmapMPbhisoGOqUBFu46pweUcBJ0OOuExImCRd6hpaDRNVcjKT3poyGTwYvE%2FJ0kOhlIyRJPTVUjTMSvugrXpAnycIELkosLUQAj5E7RAxxCXNNJHE0Jue2SvRq3O5wWU%2FluYJzvO1SDqXcWOOZWYjFKqOvPUjnmnI%2B8SEUMmguwUiGRsjC6sAvbLkvsjbXsMjtRCwuRF%2BV2umRi6iMNw3b%2FIGBwd1YGH3ybywiBHtoF&X-Amz-Signature=a2961d321894575230aa4709d604d2c6ded9ad010891d2d9823b57a53b28396f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
