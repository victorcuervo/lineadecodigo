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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMAI5DL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEOr%2FLSI97MPDPTbUhHDb1c7V8wy2AT16TSm4N17ZACAiEAnUUxy6IGSILP4Df5tZmJu8AsmGVQQ8b6yzkt4h3cBakq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOrA0umifGSI45G5WCrcA6Afdq1BBf4Ujc9AH%2FN3A1mexWNgH%2FGK8E71ctNk8KKCgSLtA%2BBWoKilXg8duFYZJ0M8EHbYe8iqBk%2FxRzqdnAt3Dm%2Bimmw1XJLeT%2FYVaJaDLnLVz2K6dSrder%2FUNW8F%2BuvRdzOrLXc0xqfZZ%2Fj3pjEpwHHlA7EpXtZp%2FMrX7aj8MMnWSiB46rRvTgM%2FmxYvIqB5aAeBmqXLpqnmQ37an7rP2v9r7DAVQ65zJXacBYzjR%2FETgX5LK82zVaA6iRQwqleWiBwnpoaKZMd02tsTQqbgs2F%2B3SWkAmacdgll94uUvI5%2BJzqGpoqV7%2FiGKHcxzqWXFSPOvsECyZYTgrLMh3Rt7kJw1rc2xi%2BblRo5r0hp3rUxQa4M1%2F4ulBoWrJM8%2BFt85zW8I2Oz2ly9ghPBsFZr%2FPBRLU5RDblApuBoa21yvEgOJEVpvCFGVanu4WJvTlW%2BcdPW4dm9m33FU4%2BIkKtPxaPDRvrPIjxYwUHPNMW9KsjhhMzJA85j0tVptFITYK3qiWluVUbLPqkW8xPUEoPFPHVqkjVVF0aY93O7tm4x4O4rIBIvfrBwxzHQWnbzumHs04zWkXhR6LPYf5DZdkU99%2FinBqw%2FpUtqxnACcLL2SS0mNnyJYmbqG1TDMLTGzckGOqUBAPCV6ECEs3eHP2nRJQn7q6ly3zbf%2F7R36ul3CIZxOHdYDIzXE20t4O8dNbP40TlMlQ7KlLwlfAVhY0XV2qgQgoGeWhu%2BzKYb0en5lI%2FHFmuWwlbGlmt87bxImEpPLHZbxTbejlIKiXwAVNUpYDXU1X%2FsGKUbV0qI9JdFpgz1GwQCtgL5oTcBAWsjC89qHGe742hRWxLovwFj9tKq7WHJo%2BFIqeb3&X-Amz-Signature=bcd17f6cb166bed9ee8f6fe848d5e5b0ada2106d60dd7a030213b5d2ab38c7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMAI5DL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEOr%2FLSI97MPDPTbUhHDb1c7V8wy2AT16TSm4N17ZACAiEAnUUxy6IGSILP4Df5tZmJu8AsmGVQQ8b6yzkt4h3cBakq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOrA0umifGSI45G5WCrcA6Afdq1BBf4Ujc9AH%2FN3A1mexWNgH%2FGK8E71ctNk8KKCgSLtA%2BBWoKilXg8duFYZJ0M8EHbYe8iqBk%2FxRzqdnAt3Dm%2Bimmw1XJLeT%2FYVaJaDLnLVz2K6dSrder%2FUNW8F%2BuvRdzOrLXc0xqfZZ%2Fj3pjEpwHHlA7EpXtZp%2FMrX7aj8MMnWSiB46rRvTgM%2FmxYvIqB5aAeBmqXLpqnmQ37an7rP2v9r7DAVQ65zJXacBYzjR%2FETgX5LK82zVaA6iRQwqleWiBwnpoaKZMd02tsTQqbgs2F%2B3SWkAmacdgll94uUvI5%2BJzqGpoqV7%2FiGKHcxzqWXFSPOvsECyZYTgrLMh3Rt7kJw1rc2xi%2BblRo5r0hp3rUxQa4M1%2F4ulBoWrJM8%2BFt85zW8I2Oz2ly9ghPBsFZr%2FPBRLU5RDblApuBoa21yvEgOJEVpvCFGVanu4WJvTlW%2BcdPW4dm9m33FU4%2BIkKtPxaPDRvrPIjxYwUHPNMW9KsjhhMzJA85j0tVptFITYK3qiWluVUbLPqkW8xPUEoPFPHVqkjVVF0aY93O7tm4x4O4rIBIvfrBwxzHQWnbzumHs04zWkXhR6LPYf5DZdkU99%2FinBqw%2FpUtqxnACcLL2SS0mNnyJYmbqG1TDMLTGzckGOqUBAPCV6ECEs3eHP2nRJQn7q6ly3zbf%2F7R36ul3CIZxOHdYDIzXE20t4O8dNbP40TlMlQ7KlLwlfAVhY0XV2qgQgoGeWhu%2BzKYb0en5lI%2FHFmuWwlbGlmt87bxImEpPLHZbxTbejlIKiXwAVNUpYDXU1X%2FsGKUbV0qI9JdFpgz1GwQCtgL5oTcBAWsjC89qHGe742hRWxLovwFj9tKq7WHJo%2BFIqeb3&X-Amz-Signature=17016b6e1e55eb0d15fad64cfc7577ddc12925fa5a7454e80ef59760fa8b472a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
