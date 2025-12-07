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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGV7LCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAtc9uusrzcYFda3gJIr5sI2XY4%2BIAA7P%2FP%2FOItbgpDwIge9icjKFcXxdm6bcbTmGdkHmTgaZOg17lHcwz76mMkZQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMw9mhjdaN%2FxNXO3SrcAxHD99zWSa%2F7HdeltIzCpLa4S1Om2yXO9l7MeMk5m2%2B6r3DskyTXzc38Uq38Cimq6SXj4zxoyr7iN7I6ZGdaA0VzSuj6rThSQLk1Wn5oWKJAtXYTu7Imflgb9Z4%2FDBr7eyJRdDMeJfucJKpl5w7TnpicODBU%2BTxSkVv5GYVcsoc3Mw9QMCuxO9bn%2F%2B9D7l4P%2B8jzKe91SLsnx03tDn9hv3o1st1X0V4mkHB1NzmYu%2B%2FGau7YCBqkShPj2mqsEatt821ZHJ0q83kHBvCy8b%2BLW8JYVkylosMqvEFz%2FmNPGdr%2BqDDHtqr%2FWxiENQ093wmIud4OetvIhwZWexlgcbBiSBrDSuC%2Fg5iTlysyw%2Fz7yv6bvl8mGtgUA9ccaXVP65v3vXeJS9qIFG0GCMHqGAx5UydRM4yBq9CsRdZ6iGqArue1NLbiFLDTIU3XnMBB1cctE0L3sANYtU1B5ho%2BJ0MWuDUyRqmdbuGkFthPR6Yl9mycXRnTHV3txK7nDc1rSgeD5iaHqmFcdVSq0nCaxl81JsLPU3%2FuVO9FUEHCk1um01qy4Yozu4tym80oBDKjPGp%2BuiVlgDltsxg4lLvzbScphqYeuA9UKrs%2FLFNsSMDzjr3vfvxWcuRvlnzc86hiMPH90skGOqUB6F%2BkCPRb3oIQDYr9cse3Y%2FVRnAd%2Fvca1PGsfk98k9RmmyRtRJOumUNKrapGBY7ePDIs0y52J8kbInfE6LcCOmFFR9T%2BLyVqWrp0ZwHhWmn8K0yAySKruZYYLrNxLQBJBJBZ%2FOdAzhi2OGusRbDoMGgEd7msE%2BMXeQvLFZoCNlliqAdk6R6KAXpbts8rZIZz5slbHE1EyTkRugsn2PbvCPSJs55yY&X-Amz-Signature=6b52f9bf5f750b149e9525cd158f59c07ca176a1fbe1079fce34d11968be01c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGV7LCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAtc9uusrzcYFda3gJIr5sI2XY4%2BIAA7P%2FP%2FOItbgpDwIge9icjKFcXxdm6bcbTmGdkHmTgaZOg17lHcwz76mMkZQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMw9mhjdaN%2FxNXO3SrcAxHD99zWSa%2F7HdeltIzCpLa4S1Om2yXO9l7MeMk5m2%2B6r3DskyTXzc38Uq38Cimq6SXj4zxoyr7iN7I6ZGdaA0VzSuj6rThSQLk1Wn5oWKJAtXYTu7Imflgb9Z4%2FDBr7eyJRdDMeJfucJKpl5w7TnpicODBU%2BTxSkVv5GYVcsoc3Mw9QMCuxO9bn%2F%2B9D7l4P%2B8jzKe91SLsnx03tDn9hv3o1st1X0V4mkHB1NzmYu%2B%2FGau7YCBqkShPj2mqsEatt821ZHJ0q83kHBvCy8b%2BLW8JYVkylosMqvEFz%2FmNPGdr%2BqDDHtqr%2FWxiENQ093wmIud4OetvIhwZWexlgcbBiSBrDSuC%2Fg5iTlysyw%2Fz7yv6bvl8mGtgUA9ccaXVP65v3vXeJS9qIFG0GCMHqGAx5UydRM4yBq9CsRdZ6iGqArue1NLbiFLDTIU3XnMBB1cctE0L3sANYtU1B5ho%2BJ0MWuDUyRqmdbuGkFthPR6Yl9mycXRnTHV3txK7nDc1rSgeD5iaHqmFcdVSq0nCaxl81JsLPU3%2FuVO9FUEHCk1um01qy4Yozu4tym80oBDKjPGp%2BuiVlgDltsxg4lLvzbScphqYeuA9UKrs%2FLFNsSMDzjr3vfvxWcuRvlnzc86hiMPH90skGOqUB6F%2BkCPRb3oIQDYr9cse3Y%2FVRnAd%2Fvca1PGsfk98k9RmmyRtRJOumUNKrapGBY7ePDIs0y52J8kbInfE6LcCOmFFR9T%2BLyVqWrp0ZwHhWmn8K0yAySKruZYYLrNxLQBJBJBZ%2FOdAzhi2OGusRbDoMGgEd7msE%2BMXeQvLFZoCNlliqAdk6R6KAXpbts8rZIZz5slbHE1EyTkRugsn2PbvCPSJs55yY&X-Amz-Signature=64cd62da8dce9555dbf2ee73d2f2d0019ae1f54a96fefd64b70327a167be5222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
