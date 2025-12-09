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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFRFQX5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkNQqVpz%2B0By4Ya5cs%2BuRR1wTGcwLinNJj2pN%2FbXLqvAiAROEyDZQ%2FFFprhgoo53NiN2s8FdnVWUTfCVs0vJ9FwDCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntO6x4%2F2mpCvB7pwKtwDUHd0zWsoLHg7WpJbpdO52l0OJ3ZOVHEgukC9OynQSKfKOdskIDa%2BpS%2FC0SiK%2B%2BFd6VgEJdLN5DBPaftBpjcjZvlZGSh3mfRt%2F%2Fw2h3fC1otGZlht0u2EgpUxOEa0Ra8srO2MGcYsljA8WZfYaMkg6DGJQygLTEAKS%2BOlDdhSCp7cbCEBYD9PSDCEkdFUB8BS0dUU1QdWn6Vo4gXufwOLlGAW9lCKqF0Sq1g2vR3lrUoUqb%2BGH3o4pJyLi%2FVCD0SbAy3NYKJZ7ngsR2nVOaiNzOsQiWO95TWtxL4zLub8yVlyucq%2Fd720tlnUkyr5C%2Fzf702zPOSV2hJnXYtdu%2FtslKObHHMz%2FWBM%2BuAg23m9ZBswvKSmpsrd05lNxnOhbN0e%2B47mYZWK0FJzCrlLuMPSFg97KgktIliByrqnKdki%2FD2atzz5WDf6XxEVHDj9OITzaTsakYXDxub6Zk%2FBW61Q1oXkL4LNqtLr5MrmcVWbZ1b8iIcbqey9H3Oilvnc7MaslJ%2BuBL%2B26jETijWnT79E30H9WjztMmGq6V6LVMR5N2fLjhPhDecaHASbmEpN6GxVZn4%2B%2BfhYG8exBK3HYqwCab9HABQDQ55QYaOT8zWrTz8BBLR22gCeZ%2BCkJbYw%2BsPfyQY6pgGzRqZz8vUG4rJjEa2WeFSMFEk2ApTe2VAOPRZUG8eugeBxA90qM1mdm5%2BgYy303SQgzueAzTH%2BO%2BuKre4vPeGs84%2F56uwnuoyOHgDW5Ci3jWS3iwM8U6jqy%2FkFan6JbDHQdxtpuP47qpxeeA%2FeQEYCdNB4HIsr1Gg32AO%2Bjp4iZVeA4vqEZFwt4MTZlkA1e27UdmseFko1ZFOV6OgSQmgeLjuVJofg&X-Amz-Signature=521e1fa02e63c4bd52aa11336ee943ea23d8fdd19e79f37dbbad83c80d844117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFRFQX5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkNQqVpz%2B0By4Ya5cs%2BuRR1wTGcwLinNJj2pN%2FbXLqvAiAROEyDZQ%2FFFprhgoo53NiN2s8FdnVWUTfCVs0vJ9FwDCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntO6x4%2F2mpCvB7pwKtwDUHd0zWsoLHg7WpJbpdO52l0OJ3ZOVHEgukC9OynQSKfKOdskIDa%2BpS%2FC0SiK%2B%2BFd6VgEJdLN5DBPaftBpjcjZvlZGSh3mfRt%2F%2Fw2h3fC1otGZlht0u2EgpUxOEa0Ra8srO2MGcYsljA8WZfYaMkg6DGJQygLTEAKS%2BOlDdhSCp7cbCEBYD9PSDCEkdFUB8BS0dUU1QdWn6Vo4gXufwOLlGAW9lCKqF0Sq1g2vR3lrUoUqb%2BGH3o4pJyLi%2FVCD0SbAy3NYKJZ7ngsR2nVOaiNzOsQiWO95TWtxL4zLub8yVlyucq%2Fd720tlnUkyr5C%2Fzf702zPOSV2hJnXYtdu%2FtslKObHHMz%2FWBM%2BuAg23m9ZBswvKSmpsrd05lNxnOhbN0e%2B47mYZWK0FJzCrlLuMPSFg97KgktIliByrqnKdki%2FD2atzz5WDf6XxEVHDj9OITzaTsakYXDxub6Zk%2FBW61Q1oXkL4LNqtLr5MrmcVWbZ1b8iIcbqey9H3Oilvnc7MaslJ%2BuBL%2B26jETijWnT79E30H9WjztMmGq6V6LVMR5N2fLjhPhDecaHASbmEpN6GxVZn4%2B%2BfhYG8exBK3HYqwCab9HABQDQ55QYaOT8zWrTz8BBLR22gCeZ%2BCkJbYw%2BsPfyQY6pgGzRqZz8vUG4rJjEa2WeFSMFEk2ApTe2VAOPRZUG8eugeBxA90qM1mdm5%2BgYy303SQgzueAzTH%2BO%2BuKre4vPeGs84%2F56uwnuoyOHgDW5Ci3jWS3iwM8U6jqy%2FkFan6JbDHQdxtpuP47qpxeeA%2FeQEYCdNB4HIsr1Gg32AO%2Bjp4iZVeA4vqEZFwt4MTZlkA1e27UdmseFko1ZFOV6OgSQmgeLjuVJofg&X-Amz-Signature=feb721e0b0089f3c903176070013be607170bcf0591b9f23a4b76ae6ab0cb7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
