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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY662MR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDYYtedOF6cqFWv0H6LtLP2qiNd56pjSiuveVaaLFlBlgIgAk45LRERh9GQ7nKtFzrgcwlrzfXyLO783o6q%2BH1OXWMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDurnqB0Y%2BNoAzDWCSrcAzzBagrhyiNL79yAZYlsArn6i%2BxMr7C%2FCF6R81FQAnFdExMOiUWTHhEcVRdPTWrfevWhX3v1W6nLOFuabDRGEuKZ%2FCGnQKRmkVnnmBFYruc7b6vQ9rKeM1Dxy52Aufq9TFoKyPUc8dNyyZDlMN0DV0xr7cSQE51ri2s1bi2YtOCM3olHOoB%2FVFz29GIfQoWVTKZ1JU4G%2FjaWTF0w1Uxp7YYX6jqVk2vPQZfuhm2hGQZHn2HUyMKNeWxFnd60MQaC7ndkNzP1ZT7wO5uuyPH20W9yVFb7GUUdGxtPAM%2FsCGc%2Br9sSyFRf252zzEYqlGX9LBc84a51QDCYZPsYuY%2Fy7h%2BaQKUAgcBuSrG3ayGePRJk%2BLvXsIffRINiksk3Ygvd93ClmQqiGKHc0n%2BepIcNvuclgr06uviEXzk3VT3lNSlUaUqAFN3EIEhzWUUpl7QcNvGi3PbowwZZki7pSYIwisWy931hQxFFydC24GIGlshLOx1Kpqb3IzSjvkjLrTm%2B3y%2F83jxf%2BKIn2jT5mG19s%2BZ5djsNqS2WqB1YiVErgs0xwL3NxKZ3Q4GyppnzdtdqbgpZepJdDdyb8nr0bUuio%2BHLmbEkBZoL9lXLbOpdv1LeJ0m%2BrOAmzWqz8%2FLvMJTLxMkGOqUBMXG828nnhRBw23FUU0LQAiuVAWYUGNQeWqYIrSLiLB%2BVHEza4U1r%2BGRXE9XEsp646HZvNWA4iGZjwiB4BtetRPZmXhlh%2B64sFBdV8gEEKYhBTl2NHvS90%2BmqE%2FjgDM97B7imY5lfG0rSkQ%2FbqUd5Kz7aK7zdnz7e7Cm9XSo2FPOVY4WdNcakL2Cr4NfBOZWpFpkrtHpIe240K9cZKC0eMOfPp8Pa&X-Amz-Signature=ffb9b904cfa0bbc882711261d8331e63ca7b2d7b59e51679e1845e7a85879ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY662MR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDYYtedOF6cqFWv0H6LtLP2qiNd56pjSiuveVaaLFlBlgIgAk45LRERh9GQ7nKtFzrgcwlrzfXyLO783o6q%2BH1OXWMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDurnqB0Y%2BNoAzDWCSrcAzzBagrhyiNL79yAZYlsArn6i%2BxMr7C%2FCF6R81FQAnFdExMOiUWTHhEcVRdPTWrfevWhX3v1W6nLOFuabDRGEuKZ%2FCGnQKRmkVnnmBFYruc7b6vQ9rKeM1Dxy52Aufq9TFoKyPUc8dNyyZDlMN0DV0xr7cSQE51ri2s1bi2YtOCM3olHOoB%2FVFz29GIfQoWVTKZ1JU4G%2FjaWTF0w1Uxp7YYX6jqVk2vPQZfuhm2hGQZHn2HUyMKNeWxFnd60MQaC7ndkNzP1ZT7wO5uuyPH20W9yVFb7GUUdGxtPAM%2FsCGc%2Br9sSyFRf252zzEYqlGX9LBc84a51QDCYZPsYuY%2Fy7h%2BaQKUAgcBuSrG3ayGePRJk%2BLvXsIffRINiksk3Ygvd93ClmQqiGKHc0n%2BepIcNvuclgr06uviEXzk3VT3lNSlUaUqAFN3EIEhzWUUpl7QcNvGi3PbowwZZki7pSYIwisWy931hQxFFydC24GIGlshLOx1Kpqb3IzSjvkjLrTm%2B3y%2F83jxf%2BKIn2jT5mG19s%2BZ5djsNqS2WqB1YiVErgs0xwL3NxKZ3Q4GyppnzdtdqbgpZepJdDdyb8nr0bUuio%2BHLmbEkBZoL9lXLbOpdv1LeJ0m%2BrOAmzWqz8%2FLvMJTLxMkGOqUBMXG828nnhRBw23FUU0LQAiuVAWYUGNQeWqYIrSLiLB%2BVHEza4U1r%2BGRXE9XEsp646HZvNWA4iGZjwiB4BtetRPZmXhlh%2B64sFBdV8gEEKYhBTl2NHvS90%2BmqE%2FjgDM97B7imY5lfG0rSkQ%2FbqUd5Kz7aK7zdnz7e7Cm9XSo2FPOVY4WdNcakL2Cr4NfBOZWpFpkrtHpIe240K9cZKC0eMOfPp8Pa&X-Amz-Signature=e854e4bc8375e3853e6dc300569924659b7fb0fea01044f0a637decdd696475c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
