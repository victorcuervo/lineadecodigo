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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAO723E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6A1NA%2FXgrIfmcyITJpE3RkXh3Dj%2Bmd%2FZiOsl1J7c3BwIgNLDpaxjiyZQ2nXiFgyfWVL0aQD5mAALyX0hunENoCBoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAuuZNPrdGMYvUd28CrcA74%2Fay90bHsDwvXsfrgy9MVhZ9SKGYqKqjFTHYQo7au3MMQ6qFxkYFWH%2F4hXSZ4Chg%2B6nwGICuffRDqXdC%2BGccUq%2F2NEed%2Fusw9ylbatAgbKC9qCHmYJ7rKOSRSPj2PEQcMcX0povWsoy2icZdy98uF77loxkWB7w4dOVwyZF1pvaUXQiVIH0IVoQ0XLgTZAe8WJnTxhjjoERa8aSJff%2FilL0%2Bf%2Fqqc3ut6Q9KPYBwvcUKnOFL9lAHBydnlZpQDCNWGQQwg7BL%2F1oyaKA9KDdU9igUz9xJWITSwWdwnxufJd0ARlbvNRrwYEmncy1%2FReNVcFpusImaeD6DKLNSabC%2FemD1eM32pKRVhfpLDnn%2BYxpG%2FzmqdbbhE6cRVQ0i%2FT2J5UvkJ22gmA0yjODHTAmtE0FO%2F8w7djm6L9Lh%2Flvi1hfgvXWL%2BFBxO6RPQiNzg9A1l6vRuS3G26wOzEypxndFKGW0ulHk468wd9ROH%2FcFbCj6ikq%2F8fAS5Gy7ZayMuGeu%2F32ci4wrx5iewFpKcbPMTs7T1EIZWe0Cj8ZRDrbxBK%2BP4Llyv4A8cxvetV50h4ctf7RQQ%2BWZUYVW1kbg7ELdW0E2a0j40DgJpF0%2FQzNSVKOfC6HppW%2B9HJvW1PMN%2Fsy8kGOqUBPTr9wVKwcAvqH8wxlamwMD81dEKAA1H5J25OaDWPofuPf4CQf9Pt4RvaJDXGbJdDN7roYKT%2Bv91Cvqfsz54nHmM1Sw%2F9omU%2FhIj6p%2FESfqh0gmR8GlTDs8kS8Ff2eoKp%2BOFaanHsOaydCymA8HqIXPn2dbaZ6a8lg8fTnRS%2B4Gub%2FkPkYGQ%2BSwt0RPzA2aIT1rxRmIyc6slCyc82L%2F%2BwVGBJdmvW&X-Amz-Signature=71895c22edde87578bc54f9d19876b3730fea3d1661f74547d87d10dbf40bee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAO723E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6A1NA%2FXgrIfmcyITJpE3RkXh3Dj%2Bmd%2FZiOsl1J7c3BwIgNLDpaxjiyZQ2nXiFgyfWVL0aQD5mAALyX0hunENoCBoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAuuZNPrdGMYvUd28CrcA74%2Fay90bHsDwvXsfrgy9MVhZ9SKGYqKqjFTHYQo7au3MMQ6qFxkYFWH%2F4hXSZ4Chg%2B6nwGICuffRDqXdC%2BGccUq%2F2NEed%2Fusw9ylbatAgbKC9qCHmYJ7rKOSRSPj2PEQcMcX0povWsoy2icZdy98uF77loxkWB7w4dOVwyZF1pvaUXQiVIH0IVoQ0XLgTZAe8WJnTxhjjoERa8aSJff%2FilL0%2Bf%2Fqqc3ut6Q9KPYBwvcUKnOFL9lAHBydnlZpQDCNWGQQwg7BL%2F1oyaKA9KDdU9igUz9xJWITSwWdwnxufJd0ARlbvNRrwYEmncy1%2FReNVcFpusImaeD6DKLNSabC%2FemD1eM32pKRVhfpLDnn%2BYxpG%2FzmqdbbhE6cRVQ0i%2FT2J5UvkJ22gmA0yjODHTAmtE0FO%2F8w7djm6L9Lh%2Flvi1hfgvXWL%2BFBxO6RPQiNzg9A1l6vRuS3G26wOzEypxndFKGW0ulHk468wd9ROH%2FcFbCj6ikq%2F8fAS5Gy7ZayMuGeu%2F32ci4wrx5iewFpKcbPMTs7T1EIZWe0Cj8ZRDrbxBK%2BP4Llyv4A8cxvetV50h4ctf7RQQ%2BWZUYVW1kbg7ELdW0E2a0j40DgJpF0%2FQzNSVKOfC6HppW%2B9HJvW1PMN%2Fsy8kGOqUBPTr9wVKwcAvqH8wxlamwMD81dEKAA1H5J25OaDWPofuPf4CQf9Pt4RvaJDXGbJdDN7roYKT%2Bv91Cvqfsz54nHmM1Sw%2F9omU%2FhIj6p%2FESfqh0gmR8GlTDs8kS8Ff2eoKp%2BOFaanHsOaydCymA8HqIXPn2dbaZ6a8lg8fTnRS%2B4Gub%2FkPkYGQ%2BSwt0RPzA2aIT1rxRmIyc6slCyc82L%2F%2BwVGBJdmvW&X-Amz-Signature=1f85bcfb555fe71102a139f2170331d63e832268b9996b12e72a0c54fd50f355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
