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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZZHYAO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChC8EIWsKTOoMfE1mDbZ1HAr%2BI5NYeDxgxzUmAi3Z9nQIgI9LjdKufkATOTcrg%2BG6EmNHhNc2LzEpX8OdtVQOfiPIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN7SEBw5VKA3KbS2cSrcA3ovigQN8hOc01aXzxbFZJ3fFqyeSL0qkaEBwwg8cPcg795OO2hqLpT8OQ59%2F6CJyop%2Bb5uX6Ahk1DL0DcRGxIEpct9cQW4N5MQM1WnydkDSuLwg%2BvPiY5HtLt0MuHTeGIs3oKQBuUkecBB%2F1Nk9dO5vaOP8urPfi57Zz%2FbuJi634%2BQLn5NHSrW%2F3kJnh91OHH53iyGj1EUwLdem0ZrL%2FyZziideEy9nZfOHBEyoE5DQxVFnBUd1l599c83ZYA94QMfb8AsNKcHWMgFffOPRdTBSJ6oQ23NOML%2Brh%2FKZ1oQB%2BC8Fs0QUzkEkwmRewfJPE42SfRTQmjq9Bz4xONasOooBMsQoWOO58xFvfcyoG4PuHb6i%2F3BMT9h96BR7mJs721qHhHvvrXI57TbVQlOvBwJ54EB8GmvUjEeVOeh9CB2CrLoTSXTvyBk5Y3OM8tZ44dHOu5JMNTrcoN%2B8adFoH%2BIwYkzt76aGT%2F6kcL9au%2FImV9zHDnrHD4GkFGf1GUpqOiRqSNikgnx%2F8BBL%2Fc%2FtzHJWpbPt%2Fz1eRMis0U%2FBcDIBgyBLB0Iqn4kcvjvz5HNSCzuTyvHGzkfs35959SXtczASzl8vWED97vqkiXvt8SUCIO0bQ3iigrEkd2YkMIfQyskGOqUBokGF4yjPrgEuT6i9fBTvLv51Csr8w4ThBsIQB%2BJfT0BJeLtx%2Bsf%2Fvv9PiVEtmwFR8mmOWzuW76xmOOXjUehPW7OyW7OF29wS4pTZHHpdva%2F5SBwIHfWP%2BYPsPNQsaYzHGgCV1nly4WJXkKiBSPYcGv55ptShmh8Qn8S%2Fbq2p4rITZsX5NDlvrTBCHCN%2FMu2xPA7rmJYTNf4MfF2djZCwM6Wc%2BF00&X-Amz-Signature=5100939b5d59c5cdf5efdc6efaf8c53f7f516968c8b917050c0223af26109a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZZHYAO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChC8EIWsKTOoMfE1mDbZ1HAr%2BI5NYeDxgxzUmAi3Z9nQIgI9LjdKufkATOTcrg%2BG6EmNHhNc2LzEpX8OdtVQOfiPIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN7SEBw5VKA3KbS2cSrcA3ovigQN8hOc01aXzxbFZJ3fFqyeSL0qkaEBwwg8cPcg795OO2hqLpT8OQ59%2F6CJyop%2Bb5uX6Ahk1DL0DcRGxIEpct9cQW4N5MQM1WnydkDSuLwg%2BvPiY5HtLt0MuHTeGIs3oKQBuUkecBB%2F1Nk9dO5vaOP8urPfi57Zz%2FbuJi634%2BQLn5NHSrW%2F3kJnh91OHH53iyGj1EUwLdem0ZrL%2FyZziideEy9nZfOHBEyoE5DQxVFnBUd1l599c83ZYA94QMfb8AsNKcHWMgFffOPRdTBSJ6oQ23NOML%2Brh%2FKZ1oQB%2BC8Fs0QUzkEkwmRewfJPE42SfRTQmjq9Bz4xONasOooBMsQoWOO58xFvfcyoG4PuHb6i%2F3BMT9h96BR7mJs721qHhHvvrXI57TbVQlOvBwJ54EB8GmvUjEeVOeh9CB2CrLoTSXTvyBk5Y3OM8tZ44dHOu5JMNTrcoN%2B8adFoH%2BIwYkzt76aGT%2F6kcL9au%2FImV9zHDnrHD4GkFGf1GUpqOiRqSNikgnx%2F8BBL%2Fc%2FtzHJWpbPt%2Fz1eRMis0U%2FBcDIBgyBLB0Iqn4kcvjvz5HNSCzuTyvHGzkfs35959SXtczASzl8vWED97vqkiXvt8SUCIO0bQ3iigrEkd2YkMIfQyskGOqUBokGF4yjPrgEuT6i9fBTvLv51Csr8w4ThBsIQB%2BJfT0BJeLtx%2Bsf%2Fvv9PiVEtmwFR8mmOWzuW76xmOOXjUehPW7OyW7OF29wS4pTZHHpdva%2F5SBwIHfWP%2BYPsPNQsaYzHGgCV1nly4WJXkKiBSPYcGv55ptShmh8Qn8S%2Fbq2p4rITZsX5NDlvrTBCHCN%2FMu2xPA7rmJYTNf4MfF2djZCwM6Wc%2BF00&X-Amz-Signature=bc89aa8cab0fcc16787b1dc7707598c7ef2a6f98dad21de56166dc00f62c41f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
