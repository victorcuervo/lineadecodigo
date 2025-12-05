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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZDREIGT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4tNIZr%2FIEpTW9v%2FA9r9rSA3KNCraYV25amELPAzxXqAiEAtc1nSPZzAbp8GfQ%2FR8ASGFZ6NjNZPuwVp8T9rcPpvC8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDO3p%2BG5g5M7N6rMgaCrcAwCDAfWQf0FiZqRUKnbosnGRiQLaft%2B%2FPc5hU7xrg7GIhf3OHqMQ7ABosLdj4x%2B%2BA2%2BcoiNCQMSE2cKiYhdwmaxiq7UvN%2FDIayh%2F3KV7Z0eFhWb1AgpJCKotYkFSDUjVl%2FE0VFKQBoFFe8vBnpHS8TlWb4q4iRkTXQeIKsaO7vRUe%2BKveE9rFmdu%2BPXrxArXtoMy2CUWBxzU%2F%2FAymyVTElhrQajxksTXgkUsOD1KCFaeow1k1M7X%2BR2azDkgFHBeTuHzrDBlWRjUGrUq1ndq325jxrK7Vb6lI9o06Apk%2B06DG0KMWd7t%2F%2BpBlsPuwtxlHQvcqtO0opnEnN1Oyq0vQDj8ka9ad%2FafmcxHpRrPhrHgPSjA2gmFTO3vLFmRxKNKmPVLx3hjpPtHC7PSZEmkCMJZC7Ho%2B7VNuOK8NHyjyTVOdUb40t34UEFBrQBogbNrnqS%2FiBSGwmaf%2BUGbso0Xm8LT7BAXqLEVVgGyoZ9YpTmBFBa0qUjlWTn%2FrBnbXAW9Yz3lMuifkh%2FECziolFLS29o%2BjPDZBytAISTQOXU9le6Bc2K7ci3yYYPXMT0c8LqPnueqEzequzeyWd8NuRLO1xrwA6bHI8p1UhqBApvFoiipdJfeTYeigqPbWpixMIvUyskGOqUB6xqryHZ7qHSreSBBUs1tZk4lrSf%2FuCG0FNqh9OytIclNUlAL%2F1GmjH4Xc7xFmNjHAPDOH%2B2xNExNSmwu863mwi8SY4kouFfJstjOZAs83FgLNxsbxE%2F32GTYanyN9gB6aD7tHwuNDzHqpmGG0r0DcotXQyZDO4oMxO1ZNkjETy07uwN6buj4mo5UR8WmmOQ%2FhHlQDB%2FaDgEHx2NhKKPFp9aexDn8&X-Amz-Signature=b66669febff248ef368478cb874e091393589f202e9e9f5ef4dd640209900cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZDREIGT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4tNIZr%2FIEpTW9v%2FA9r9rSA3KNCraYV25amELPAzxXqAiEAtc1nSPZzAbp8GfQ%2FR8ASGFZ6NjNZPuwVp8T9rcPpvC8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDO3p%2BG5g5M7N6rMgaCrcAwCDAfWQf0FiZqRUKnbosnGRiQLaft%2B%2FPc5hU7xrg7GIhf3OHqMQ7ABosLdj4x%2B%2BA2%2BcoiNCQMSE2cKiYhdwmaxiq7UvN%2FDIayh%2F3KV7Z0eFhWb1AgpJCKotYkFSDUjVl%2FE0VFKQBoFFe8vBnpHS8TlWb4q4iRkTXQeIKsaO7vRUe%2BKveE9rFmdu%2BPXrxArXtoMy2CUWBxzU%2F%2FAymyVTElhrQajxksTXgkUsOD1KCFaeow1k1M7X%2BR2azDkgFHBeTuHzrDBlWRjUGrUq1ndq325jxrK7Vb6lI9o06Apk%2B06DG0KMWd7t%2F%2BpBlsPuwtxlHQvcqtO0opnEnN1Oyq0vQDj8ka9ad%2FafmcxHpRrPhrHgPSjA2gmFTO3vLFmRxKNKmPVLx3hjpPtHC7PSZEmkCMJZC7Ho%2B7VNuOK8NHyjyTVOdUb40t34UEFBrQBogbNrnqS%2FiBSGwmaf%2BUGbso0Xm8LT7BAXqLEVVgGyoZ9YpTmBFBa0qUjlWTn%2FrBnbXAW9Yz3lMuifkh%2FECziolFLS29o%2BjPDZBytAISTQOXU9le6Bc2K7ci3yYYPXMT0c8LqPnueqEzequzeyWd8NuRLO1xrwA6bHI8p1UhqBApvFoiipdJfeTYeigqPbWpixMIvUyskGOqUB6xqryHZ7qHSreSBBUs1tZk4lrSf%2FuCG0FNqh9OytIclNUlAL%2F1GmjH4Xc7xFmNjHAPDOH%2B2xNExNSmwu863mwi8SY4kouFfJstjOZAs83FgLNxsbxE%2F32GTYanyN9gB6aD7tHwuNDzHqpmGG0r0DcotXQyZDO4oMxO1ZNkjETy07uwN6buj4mo5UR8WmmOQ%2FhHlQDB%2FaDgEHx2NhKKPFp9aexDn8&X-Amz-Signature=bc61d682bf896b6f8ec63cfcd851ffbaa237f2f6a4afa005535c2505dd36342e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
