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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4S3GGQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2DNe%2BwqKdvh8lETcSGvjl7xgfTvxxeGWF%2FcgXi0YmqAiEAxLKflrPUzUZIsw22ZK41p38oUZQKA7hrhy3P2UvqaNQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPtVLafFJWO0azSDuSrcAyjY0%2F055uUVMv3IvT0QOLLu%2B0nlKoVqn20k2CtH3552%2FFx%2BaUt74jUY9ii80ApJciGLqBxdIJKfs7KQn5nZ9Ogg40tsR7vDGEO5Ehmf1Xl1OhlrOzlwfMl3btBi6VJ4ZejeRW28jMI7rFfSdW8NZnruUyw%2BnlReDTgToucn8SBbX8wtvnnPQ2do1blmgOchxF8d1NyrHoKsdZxljO8dnaG80N8YO0upW7a7GkGpJM6B77Zu8LZcl5VPX2KRkHKkJ1e1ZviCRHO8kW3%2FaahLLMHmCBcwYFZOcXpTyk3TRxetYGXZFoyCYsKKiddM1iDEb4UQGDrUxP5zz%2BjnfmrKuH9XpaD7IMA03fpocnIYvI15tdHnPTA%2FNeE%2FSiHXjeNnaHJZwC9MFsldhqZA7LhE%2FaYTPewExvSi4lrIdJ53LcTSDYnTv1EKC3vFa7dF1joLKZ3bW9f%2BvYpj1KQ0Gj2o5JuktWsSrSF5dOrefXhn%2Fjd5NU3ZSAV7v7IRc50YhDq7zLuXOvf%2FBZNG3dgTIhv8x09bpJ7swxjm52%2Banxg7BBjIl1qNnNo3Pm1GmyiU5ibuvXhprCmIb36Njg3TrO5w%2BGtnWByMMSdOOtTcTI2H5GmqBrBZMzMZFncqU%2Bb%2FMJnRicoGOqUBNtmaqn0pGqSpxrsoI3m5aPJ%2F5ttsjQEUq4PMXSsg%2FoZP%2BpVQV2uyk0JF52apWea82MJQtD6jI0GIfq2DtTkmtzAipuHhZjXUs3vgvsoFOGcag5LzM4897gyIvMsSAhTvJTDzaemkT%2F6JenoPOg0uYeSRbhd%2F18j2bbFlzWEVjzummIP9lrjN0LH2RDeXHsZvYodPOvHJ4ueW6FHCElRu877S5CPl&X-Amz-Signature=035836f7c97d1cd4c9dc1ce642f379dda6ac20d4d868e77706bd5deaca298701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4S3GGQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2DNe%2BwqKdvh8lETcSGvjl7xgfTvxxeGWF%2FcgXi0YmqAiEAxLKflrPUzUZIsw22ZK41p38oUZQKA7hrhy3P2UvqaNQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPtVLafFJWO0azSDuSrcAyjY0%2F055uUVMv3IvT0QOLLu%2B0nlKoVqn20k2CtH3552%2FFx%2BaUt74jUY9ii80ApJciGLqBxdIJKfs7KQn5nZ9Ogg40tsR7vDGEO5Ehmf1Xl1OhlrOzlwfMl3btBi6VJ4ZejeRW28jMI7rFfSdW8NZnruUyw%2BnlReDTgToucn8SBbX8wtvnnPQ2do1blmgOchxF8d1NyrHoKsdZxljO8dnaG80N8YO0upW7a7GkGpJM6B77Zu8LZcl5VPX2KRkHKkJ1e1ZviCRHO8kW3%2FaahLLMHmCBcwYFZOcXpTyk3TRxetYGXZFoyCYsKKiddM1iDEb4UQGDrUxP5zz%2BjnfmrKuH9XpaD7IMA03fpocnIYvI15tdHnPTA%2FNeE%2FSiHXjeNnaHJZwC9MFsldhqZA7LhE%2FaYTPewExvSi4lrIdJ53LcTSDYnTv1EKC3vFa7dF1joLKZ3bW9f%2BvYpj1KQ0Gj2o5JuktWsSrSF5dOrefXhn%2Fjd5NU3ZSAV7v7IRc50YhDq7zLuXOvf%2FBZNG3dgTIhv8x09bpJ7swxjm52%2Banxg7BBjIl1qNnNo3Pm1GmyiU5ibuvXhprCmIb36Njg3TrO5w%2BGtnWByMMSdOOtTcTI2H5GmqBrBZMzMZFncqU%2Bb%2FMJnRicoGOqUBNtmaqn0pGqSpxrsoI3m5aPJ%2F5ttsjQEUq4PMXSsg%2FoZP%2BpVQV2uyk0JF52apWea82MJQtD6jI0GIfq2DtTkmtzAipuHhZjXUs3vgvsoFOGcag5LzM4897gyIvMsSAhTvJTDzaemkT%2F6JenoPOg0uYeSRbhd%2F18j2bbFlzWEVjzummIP9lrjN0LH2RDeXHsZvYodPOvHJ4ueW6FHCElRu877S5CPl&X-Amz-Signature=d9c660b735e769792c408485cb45d25f5f746e6d0aeffb79901eb9c92095c996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
