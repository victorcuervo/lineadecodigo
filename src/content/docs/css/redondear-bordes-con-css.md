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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTMO2LT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BVWBOJSQurkrLGBlk9nQzhBP3lth3H6gcu%2FIkAw%2BjgAIhANG0WOtoO1yx7LZ2FrdTsmc0sqoMcEOlmKoK50fXG8txKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTYjJ%2FcGWwr9%2BlP6gq3ANgne6Ro2XRVQIVA7J5HtBuO7AA5U9W%2FYQgxp3cmx4nhpZ1Fgpr68I8pFRAbo0yAsclDcopXViRzIhp9ZD5ZVV4EKgWPMri4hPUH1D6IeKnTanErpOm2Jd5TRhIclx57oC5lZeZXpiDGekMsA%2BZO43UcCYHPnxbErMKsCkDnq1yxN50HiXsQE4rh7PUh04o%2B64YYVOibMXAP7QpHjTUnTZ418p2rbVPHJg5m0eCxqzj%2FONflY1eUgbMshI%2FCDZKtaUrgVsiRxTygv1t03ImuAsnpIswZbG3gU1w6ruM1fGu6%2Fk4UZNOA6fIuQWB6FZVS7PrTyMqEMqHLw3v%2BQax4FFwexks2O7MtnC7AR%2B7N%2FL%2Bl5EuVL8EMQIhLayqLVf%2FwlNsUhi1%2FjuMyDwDv%2BxVfnkKIjZWgf0NPzv9z7V3B5ayjez%2FQFfHPBrKrO8qunPHfCqyiufzphuF1mwa9lP1GByQS97kxdv4RpB4VxMbLKiQE3ZtZ26Zo4cGJCQh6J%2BChLi1WWD5xwLYXetyQzX7RRgHFhwxLjVh4biYBFuIij0s%2F5O34%2FuESWJ88uFmXkz9fYuFbM%2BFEz%2BBlmr4bPi092xZb2mlqMQV2NF3fWdmI5%2ByzGb2xs6k%2FgKDJAAh3DCi%2FdLJBjqkAU05S3zU0GM4Lnjlnta%2B84ZN9ZeKX7yFrnkzsr%2BhBLmIrkbv0pMmAMp%2BtfZOmzBMaN%2Fk9H%2FgKmehoUqgziiTr3N%2BizL4JOtgcI8O2NWWjfk0bpze2rHV8V2YBDNgL8cb5acuT8FoBTdwRktEMioyLc3XedfTe3Ni92DZkIExL7JCMVQs7rmzOIQ0PIIOiS%2F9YNdPAmdY46Dxfl5R912%2FeO0lofSD&X-Amz-Signature=aa0c13198801a6da3f51a59ff329efa40b5f86e5c6a441b27e791f1cf9266dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTMO2LT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BVWBOJSQurkrLGBlk9nQzhBP3lth3H6gcu%2FIkAw%2BjgAIhANG0WOtoO1yx7LZ2FrdTsmc0sqoMcEOlmKoK50fXG8txKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTYjJ%2FcGWwr9%2BlP6gq3ANgne6Ro2XRVQIVA7J5HtBuO7AA5U9W%2FYQgxp3cmx4nhpZ1Fgpr68I8pFRAbo0yAsclDcopXViRzIhp9ZD5ZVV4EKgWPMri4hPUH1D6IeKnTanErpOm2Jd5TRhIclx57oC5lZeZXpiDGekMsA%2BZO43UcCYHPnxbErMKsCkDnq1yxN50HiXsQE4rh7PUh04o%2B64YYVOibMXAP7QpHjTUnTZ418p2rbVPHJg5m0eCxqzj%2FONflY1eUgbMshI%2FCDZKtaUrgVsiRxTygv1t03ImuAsnpIswZbG3gU1w6ruM1fGu6%2Fk4UZNOA6fIuQWB6FZVS7PrTyMqEMqHLw3v%2BQax4FFwexks2O7MtnC7AR%2B7N%2FL%2Bl5EuVL8EMQIhLayqLVf%2FwlNsUhi1%2FjuMyDwDv%2BxVfnkKIjZWgf0NPzv9z7V3B5ayjez%2FQFfHPBrKrO8qunPHfCqyiufzphuF1mwa9lP1GByQS97kxdv4RpB4VxMbLKiQE3ZtZ26Zo4cGJCQh6J%2BChLi1WWD5xwLYXetyQzX7RRgHFhwxLjVh4biYBFuIij0s%2F5O34%2FuESWJ88uFmXkz9fYuFbM%2BFEz%2BBlmr4bPi092xZb2mlqMQV2NF3fWdmI5%2ByzGb2xs6k%2FgKDJAAh3DCi%2FdLJBjqkAU05S3zU0GM4Lnjlnta%2B84ZN9ZeKX7yFrnkzsr%2BhBLmIrkbv0pMmAMp%2BtfZOmzBMaN%2Fk9H%2FgKmehoUqgziiTr3N%2BizL4JOtgcI8O2NWWjfk0bpze2rHV8V2YBDNgL8cb5acuT8FoBTdwRktEMioyLc3XedfTe3Ni92DZkIExL7JCMVQs7rmzOIQ0PIIOiS%2F9YNdPAmdY46Dxfl5R912%2FeO0lofSD&X-Amz-Signature=1b58b222df75942156949e559e3c58fc823f36093bc46cdc1587cb8532f90260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
