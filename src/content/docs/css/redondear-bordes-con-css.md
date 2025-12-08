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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VCB56U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDInCOUPmVMhcpvpxYNlwb%2FYYIUYQoDMsuKGBO2GUOP8AiEAoFtnEIgQoHFbhdv7W0zfsvQ993zHMopGGFrz63JP5jIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiedUIfRsatARN15SrcA4qF930L8ZNxgLybSkUjFAVkh1xc%2FLfWnZIKFw%2B%2B0SfC%2FuqUaeYQwR%2BYyMDdT57Zdhjg5lz%2FJXHGI0ZwfQITPagYCeepDuJrI%2B6toENKMpei%2Bpe4Ywb9xYcfOOmqXRLeHn%2FUYM15%2FpP20Fpgmk6vnmTFjPL2miQ0aGIRidsePsVZLFDDBG8cwRcvuG%2FYLP9NDLSA6rTerwXc5%2FTirU6mZj%2Byz2Uf0W9ZWm6hTO3nlFdiQmVQWkojbz7l%2FxbdUm%2BwV0TpIF2mhgYGkC1taL1cOxEy3oMJc7YCBKMo%2BvFUoMs%2FSKrwkgHC3pLKwuLQM9QfFPB49%2BUA%2F3WlyF4k5fZkOBnmanCIKw%2FJjzFJ4AAinTKZuDkdTXLvLeXaku79TNWDlqYc6lA7u%2BDmtZskypYAg9aOs6oP9ycCIrw9OmnTPV8ZxdRldii5fqBM7co%2FBjxJlEwYtY3LXmpQS1PQV4iyyndD8iQh3QJnJQVUrR%2FdISquskQQuZZKjYr672tKD9nxFEvBFsD9E8siYKlXnWO9kOcc40sGLgxb7foemDweVVItImHgnW%2BBS0GJmP8xLjQ9S%2FHDAIfX0vkDaa70GSpjD3BT1qzdadzHV6OKMplxLT%2F9kK2VFxoNp2BGmFkFMNaU2ckGOqUBQDzASRPd5vtHk6CuvT0d6G4TUT6qPTVHZ8%2Fp3i6bgXC9ghI%2BqfS%2BezvydkcteWJPNWvWSLSrfz%2BR0HAVmIsVd8FqPZCAThT4%2FZAIiiqbctnF1uD58aGZNIH0WWsdCTNvulKzHwaC%2BmPZRdJNFLsjDfUork9fSQY3EMtLqaRuaQuoMNUP4aANsCZkYA8NjBveW29DQW0gfWX0u6xn2TVJQ8fLO%2Fdo&X-Amz-Signature=e9a4879f38efdfd47c76aff2735d36a7878233a5d75f3a0ba8f368b243342190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VCB56U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDInCOUPmVMhcpvpxYNlwb%2FYYIUYQoDMsuKGBO2GUOP8AiEAoFtnEIgQoHFbhdv7W0zfsvQ993zHMopGGFrz63JP5jIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiedUIfRsatARN15SrcA4qF930L8ZNxgLybSkUjFAVkh1xc%2FLfWnZIKFw%2B%2B0SfC%2FuqUaeYQwR%2BYyMDdT57Zdhjg5lz%2FJXHGI0ZwfQITPagYCeepDuJrI%2B6toENKMpei%2Bpe4Ywb9xYcfOOmqXRLeHn%2FUYM15%2FpP20Fpgmk6vnmTFjPL2miQ0aGIRidsePsVZLFDDBG8cwRcvuG%2FYLP9NDLSA6rTerwXc5%2FTirU6mZj%2Byz2Uf0W9ZWm6hTO3nlFdiQmVQWkojbz7l%2FxbdUm%2BwV0TpIF2mhgYGkC1taL1cOxEy3oMJc7YCBKMo%2BvFUoMs%2FSKrwkgHC3pLKwuLQM9QfFPB49%2BUA%2F3WlyF4k5fZkOBnmanCIKw%2FJjzFJ4AAinTKZuDkdTXLvLeXaku79TNWDlqYc6lA7u%2BDmtZskypYAg9aOs6oP9ycCIrw9OmnTPV8ZxdRldii5fqBM7co%2FBjxJlEwYtY3LXmpQS1PQV4iyyndD8iQh3QJnJQVUrR%2FdISquskQQuZZKjYr672tKD9nxFEvBFsD9E8siYKlXnWO9kOcc40sGLgxb7foemDweVVItImHgnW%2BBS0GJmP8xLjQ9S%2FHDAIfX0vkDaa70GSpjD3BT1qzdadzHV6OKMplxLT%2F9kK2VFxoNp2BGmFkFMNaU2ckGOqUBQDzASRPd5vtHk6CuvT0d6G4TUT6qPTVHZ8%2Fp3i6bgXC9ghI%2BqfS%2BezvydkcteWJPNWvWSLSrfz%2BR0HAVmIsVd8FqPZCAThT4%2FZAIiiqbctnF1uD58aGZNIH0WWsdCTNvulKzHwaC%2BmPZRdJNFLsjDfUork9fSQY3EMtLqaRuaQuoMNUP4aANsCZkYA8NjBveW29DQW0gfWX0u6xn2TVJQ8fLO%2Fdo&X-Amz-Signature=89d672fb59c76d37386697600a14114d546d42fc38c015a7bb8b16449e89aa66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
