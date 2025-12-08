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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USDOFO6U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPEWouxjkSE6pZuiY4Gr%2FdFWKygVGS%2BOjtcMKoQbLcWwIhAMDSNimrDDkTB%2BJodlGxPLemVze6%2FJkknh0QUg5EiM05KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc6veaIuDx1dyYauMq3AN7%2FJ9UUIXSvbSi1q0DRZx%2FMW5xyn6haBfYcEQbR4stKKM3xL0y3bQiYXB93ZIhu545Y4zokSJ8Ljz60YsHayFr8QA4JizShEppaFlh9xTMBAQcrcUlOkS4XlACja4f41Ch5VehjUAjWqqQ97UQQIJYF7SGyjSWJBHwhmzhrWgMdR7h91BUebpLICnUY7QCoVV3ENWPk9gbs8oM4Bfn9eE4kk1euwdooqjQ4Wc9ohvMnEzr6i6TIBmz17eUr3o2UXuqEB1QgkKgzaf5KY%2F2LEKqDLbpJWCTNage9rymTomZFAbuv6vGBuvsWSZjYtKPm7K%2Bc%2FNrZPQb%2FLEgbSOwW89w8DC5jGGUdNOyRjwlYe0o9xJaje%2FJTn2ztpP2CQys36MkJlIo%2B1Y6c180hVRcfkilbR3Q5xur0dB4bFjgHXZzJmjxmQE45uRc0Dkx%2FVv5%2FYyRmgc8x%2BrgqoghWfEdutkQr7v3mRWu6%2FTO8g1z4pSVtR4LIhS%2F%2B7K2j4JpZx4raVhGUpJ%2FlF%2FwLKBlO6%2FzKbHtwDP8VkPjmiUHFWCvT6HEgMuqt2SAtRuiqafLlQWypgh%2Bw9nbkXWsSL9aSQgOobQkDBJoM0R3AoM7q6XsVpBa9kQYE0wPFOIqevfUGzDv5NvJBjqkAUAZQtER81zG%2BvQk5UVdoV331VF3RTkybWqhwXT2cs4xRYM3zhi%2BEcTx5oh%2FarKFkX%2FiGqZ43IAiwafXfDjO4iKaXQLRpqZ79gpHP5REyJAlbm%2FXvBmOYAds6DYOHWtxdMYp3ogFDo6apl2GGflZ5b4n1jTeOLx%2B%2FisJmnnw69q1HM8rkg6dkfJJgUCniZI6oKCWshaVYEZEL6wgxUkrarajArlx&X-Amz-Signature=1e480e035ce76aaec2fda7a7cff3e48285b33ed541a128b03cea46d9ee5fd229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USDOFO6U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPEWouxjkSE6pZuiY4Gr%2FdFWKygVGS%2BOjtcMKoQbLcWwIhAMDSNimrDDkTB%2BJodlGxPLemVze6%2FJkknh0QUg5EiM05KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc6veaIuDx1dyYauMq3AN7%2FJ9UUIXSvbSi1q0DRZx%2FMW5xyn6haBfYcEQbR4stKKM3xL0y3bQiYXB93ZIhu545Y4zokSJ8Ljz60YsHayFr8QA4JizShEppaFlh9xTMBAQcrcUlOkS4XlACja4f41Ch5VehjUAjWqqQ97UQQIJYF7SGyjSWJBHwhmzhrWgMdR7h91BUebpLICnUY7QCoVV3ENWPk9gbs8oM4Bfn9eE4kk1euwdooqjQ4Wc9ohvMnEzr6i6TIBmz17eUr3o2UXuqEB1QgkKgzaf5KY%2F2LEKqDLbpJWCTNage9rymTomZFAbuv6vGBuvsWSZjYtKPm7K%2Bc%2FNrZPQb%2FLEgbSOwW89w8DC5jGGUdNOyRjwlYe0o9xJaje%2FJTn2ztpP2CQys36MkJlIo%2B1Y6c180hVRcfkilbR3Q5xur0dB4bFjgHXZzJmjxmQE45uRc0Dkx%2FVv5%2FYyRmgc8x%2BrgqoghWfEdutkQr7v3mRWu6%2FTO8g1z4pSVtR4LIhS%2F%2B7K2j4JpZx4raVhGUpJ%2FlF%2FwLKBlO6%2FzKbHtwDP8VkPjmiUHFWCvT6HEgMuqt2SAtRuiqafLlQWypgh%2Bw9nbkXWsSL9aSQgOobQkDBJoM0R3AoM7q6XsVpBa9kQYE0wPFOIqevfUGzDv5NvJBjqkAUAZQtER81zG%2BvQk5UVdoV331VF3RTkybWqhwXT2cs4xRYM3zhi%2BEcTx5oh%2FarKFkX%2FiGqZ43IAiwafXfDjO4iKaXQLRpqZ79gpHP5REyJAlbm%2FXvBmOYAds6DYOHWtxdMYp3ogFDo6apl2GGflZ5b4n1jTeOLx%2B%2FisJmnnw69q1HM8rkg6dkfJJgUCniZI6oKCWshaVYEZEL6wgxUkrarajArlx&X-Amz-Signature=1b10b8a9beb3a613cb4caa19e2001851a21667e63714074ca01ed1402befcf8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
