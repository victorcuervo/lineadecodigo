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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXHLBNX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6jBihrwNb9OgWYEz%2FXmEqKPdZEk2I8x4rNw4EU3tXLAIgMil9%2BmdhAguIglXCXivj3CVLbnuGqNQJF9TSwrcxQYwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJkik%2FKrtDYbg6l7JCrcA7rGs67ppUngKsS8m5bfqSgoxRatZJGpKadNRtWpm2YrLafcefUFMuWkbQauxVUxlTPwz950kagosJzpRJg2ZZI0ePR7FwAfdrf%2BvG%2FRgWLwhLDxi5gwhYPgdt3ENXdDh25zIqj7n6ROOqUvR8nDygcCVAW9exbGI3CiXpAx6Xg22YsBX25rYFpWK%2F3TzOh8fQYchHw%2FUgrsjiX3MBu%2FupGQyZn48Q5ViHlxVpeAGm0Waz%2FcnMdQ5LqiQMfuQ26Bi38%2FrVTOsx4VFjVWtta%2Fsn%2Fedxh6ybJyX3wm0UP%2B%2FXE7BP%2FuUjD3r1pRH1ulCeL1abt5kfFrAML8XcgcU4q8QJ3wZlJYX7rxOZ7QgBRYHgRcn2AxVfFhQDNKxqDcjKPQZZKZvnGo99ZLNYASqyLdOZqKWWAmHjeTd3Ot8KM0vwhINVurcvjl1VLlNSplSUkbC4qokA7UtORh1Wra7xWCKrhN1PScXzawi1HWiBJsY9u8BjGMSYRi1VwaC9NMirla4zW8XTTCTThu%2FaiF65UISQBWku3FRk97bwbh3oaNes4mhCGT%2Fc2qV8naQgf7OlqL3NSZtHVJmaZxKHjKTvRd0IlnN6m8KOX1Fi9uuS%2BM1BwUaRkYUMrh3Z0xZx1zMKynzskGOqUB%2BkB3waOunB%2B2B4YGNKP3FvrCRBxvMlYqb%2B7WZZthVtDi1reJOijMMFnve9I8zYiB2lbaybNlyCbDjKMHs5B3s4sDK2QpeLGmewa44Ity9v%2B0tKsn8gpJYHfz%2BZQIJ1Ka0gL5iT5XZa5og%2BTKY1WGcHcPMYZFfn%2BPTl4Ux2gppar505fwHErOfTJql8MpQxnw%2BMJT9G1mIDCYGhbVDc%2B4jqbxbW%2B1&X-Amz-Signature=3a7274826efff1686c7f4b37182272dbd46ab5abaf4c46cb48ed4d12b7e886bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXHLBNX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6jBihrwNb9OgWYEz%2FXmEqKPdZEk2I8x4rNw4EU3tXLAIgMil9%2BmdhAguIglXCXivj3CVLbnuGqNQJF9TSwrcxQYwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJkik%2FKrtDYbg6l7JCrcA7rGs67ppUngKsS8m5bfqSgoxRatZJGpKadNRtWpm2YrLafcefUFMuWkbQauxVUxlTPwz950kagosJzpRJg2ZZI0ePR7FwAfdrf%2BvG%2FRgWLwhLDxi5gwhYPgdt3ENXdDh25zIqj7n6ROOqUvR8nDygcCVAW9exbGI3CiXpAx6Xg22YsBX25rYFpWK%2F3TzOh8fQYchHw%2FUgrsjiX3MBu%2FupGQyZn48Q5ViHlxVpeAGm0Waz%2FcnMdQ5LqiQMfuQ26Bi38%2FrVTOsx4VFjVWtta%2Fsn%2Fedxh6ybJyX3wm0UP%2B%2FXE7BP%2FuUjD3r1pRH1ulCeL1abt5kfFrAML8XcgcU4q8QJ3wZlJYX7rxOZ7QgBRYHgRcn2AxVfFhQDNKxqDcjKPQZZKZvnGo99ZLNYASqyLdOZqKWWAmHjeTd3Ot8KM0vwhINVurcvjl1VLlNSplSUkbC4qokA7UtORh1Wra7xWCKrhN1PScXzawi1HWiBJsY9u8BjGMSYRi1VwaC9NMirla4zW8XTTCTThu%2FaiF65UISQBWku3FRk97bwbh3oaNes4mhCGT%2Fc2qV8naQgf7OlqL3NSZtHVJmaZxKHjKTvRd0IlnN6m8KOX1Fi9uuS%2BM1BwUaRkYUMrh3Z0xZx1zMKynzskGOqUB%2BkB3waOunB%2B2B4YGNKP3FvrCRBxvMlYqb%2B7WZZthVtDi1reJOijMMFnve9I8zYiB2lbaybNlyCbDjKMHs5B3s4sDK2QpeLGmewa44Ity9v%2B0tKsn8gpJYHfz%2BZQIJ1Ka0gL5iT5XZa5og%2BTKY1WGcHcPMYZFfn%2BPTl4Ux2gppar505fwHErOfTJql8MpQxnw%2BMJT9G1mIDCYGhbVDc%2B4jqbxbW%2B1&X-Amz-Signature=e9093e364d79b01a524e50c54d1ba651fb9b6f4337f982001153951017fce241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
