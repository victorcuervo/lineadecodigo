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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DO3G7V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDXrYFQGkveefSnFn95vbb6WGkYFDg6C1qgeGQTVzGI%2BAiBlwnuOjtqivGXDhHLw9vr0wQjuu4wSC24jzTQk8fJksSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMsMNqq%2B3KTaz%2F57C3KtwD8Y80Qx9bdbJ%2Bi40nV6AoU5P%2Bp3ALXD2EXNs7OHCTIAxLW4KRmRnj%2FMQLqjqSpIe68IQ9xffM6DbSGo0303fBrJo4PkyYdxMvHts%2FFtA4y2sHoBMKWq1DfYo347ZLJLVxQQnr%2FdeXc3gYggRaTY6MbxPvspgr9d1Bf%2FGcJPhLCvavFPCM4JSd%2BECfWMieEO8m7ByEPRle5IVJJQRVnlZf7YihBRIsDIiC6gaxq4rskHVJjTZwXnssmJX34j9Eh3g3dCkHqH5NVjlLR8cKBh0O29als%2F8TqxwbvHguSlohyrxYwWYgkdYrPrVME8wBCt8UH%2F510RvYnR6jZORllF8%2FqBrlhdHkg6FKEWGfiyDgnE76wtQG9T1osWFLW6M2XcxI7vuFdtIi9IODMQM5psG6WChWsGBz2QKGOHuRbfkx4NV0V%2FIJtPpciYpy0LO2BIEz6UUsbyBIy7FqHmCAXKB63Glw5kuGtlhTbOofBmq%2Bd0e49a3yng8QZOPDzgepZUNBMyw6Iluh49CWRPP1XzYD5sZzbljgGpR6sYQaaFv4AaDqZmZi%2B7ErSS2eFF7ycqXxMpqP4uZHklRb7qqxSn8g5yGxlEgArPYTqG7JZLuHijkXeZ5i2y%2FCE%2B2c7Iows%2BfEyQY6pgE%2BLIIISV0vj%2BqdQ%2B%2BNjCh3D8NpXZxL93NVpC9ahcLmwGyV3zI5UgfGDjovnCbydS6gblKJ6RoDgEGwSwwsWkwXH%2BrEJaIHZOVisSWLr2XWtAtW7qfTkyoBaNGuJsLROD3PaNCrRJCR68OzKVBfqKSls6%2BjCv8GEFOQnC6HHFxd8wFh62e4gyM8AvkRA0q6Vfpz%2Fp3ip1B5eiFUj14g4EHDZ95D5eNw&X-Amz-Signature=69c4386667460c9c8ee9f23da4e87728184ebb77bc013c401884cb83c1903182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DO3G7V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDXrYFQGkveefSnFn95vbb6WGkYFDg6C1qgeGQTVzGI%2BAiBlwnuOjtqivGXDhHLw9vr0wQjuu4wSC24jzTQk8fJksSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMsMNqq%2B3KTaz%2F57C3KtwD8Y80Qx9bdbJ%2Bi40nV6AoU5P%2Bp3ALXD2EXNs7OHCTIAxLW4KRmRnj%2FMQLqjqSpIe68IQ9xffM6DbSGo0303fBrJo4PkyYdxMvHts%2FFtA4y2sHoBMKWq1DfYo347ZLJLVxQQnr%2FdeXc3gYggRaTY6MbxPvspgr9d1Bf%2FGcJPhLCvavFPCM4JSd%2BECfWMieEO8m7ByEPRle5IVJJQRVnlZf7YihBRIsDIiC6gaxq4rskHVJjTZwXnssmJX34j9Eh3g3dCkHqH5NVjlLR8cKBh0O29als%2F8TqxwbvHguSlohyrxYwWYgkdYrPrVME8wBCt8UH%2F510RvYnR6jZORllF8%2FqBrlhdHkg6FKEWGfiyDgnE76wtQG9T1osWFLW6M2XcxI7vuFdtIi9IODMQM5psG6WChWsGBz2QKGOHuRbfkx4NV0V%2FIJtPpciYpy0LO2BIEz6UUsbyBIy7FqHmCAXKB63Glw5kuGtlhTbOofBmq%2Bd0e49a3yng8QZOPDzgepZUNBMyw6Iluh49CWRPP1XzYD5sZzbljgGpR6sYQaaFv4AaDqZmZi%2B7ErSS2eFF7ycqXxMpqP4uZHklRb7qqxSn8g5yGxlEgArPYTqG7JZLuHijkXeZ5i2y%2FCE%2B2c7Iows%2BfEyQY6pgE%2BLIIISV0vj%2BqdQ%2B%2BNjCh3D8NpXZxL93NVpC9ahcLmwGyV3zI5UgfGDjovnCbydS6gblKJ6RoDgEGwSwwsWkwXH%2BrEJaIHZOVisSWLr2XWtAtW7qfTkyoBaNGuJsLROD3PaNCrRJCR68OzKVBfqKSls6%2BjCv8GEFOQnC6HHFxd8wFh62e4gyM8AvkRA0q6Vfpz%2Fp3ip1B5eiFUj14g4EHDZ95D5eNw&X-Amz-Signature=ab4a07f7b0c1d906557d54babc86f568833166be2bb0bff17f13ee3b53d00609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
