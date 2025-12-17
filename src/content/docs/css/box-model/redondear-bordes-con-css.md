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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTTHZXS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyr6bGiEmbRRb4fTs4KZmlSXDnNXQVb7dz52Ig5XoZIAIgRaygHKjt86mdoBAWU68v2Q28ZaHOyk9rp%2FyfUeNJLzAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKV7AZsUyFldlD4a2ircA%2F0U0PtH9brzl4HrKC1dnxf%2FKZdKLZnKKoaU%2Fe0%2Fv108P44u88FC97o7iFXH0wtZWpBxhqVGGPcIGCqj7elHNSNS5PO3eVs4XytDSI%2BvT671ik0lEDsNzhdnUFca9Xo1otf3as%2BPnjAo0TCZo9NAw%2FBDcfu4ueU3KXfV1aycVQD%2BamyQarpJTfEufjS6FwqExAj%2FNNu%2B7DhlG2E50MyIiYCoDC8tUGdKYLsfSKDKZTP%2BB29SlmzoI%2FCKHcIrPbCf4CVbN3vnCIbq%2BYuL5ghnwvMaOLM6JWwINB4KWIFK9PX%2FbVVFjBOgzjJ0UQ5Pr%2FJBEfrPLBbwVj4s1eqaH2yjPbZG6Y2jKcKaThbtvnNH8ZYJhBQfHTuyHCmh0aQFunJ5uShaHrMKljQcwY6LwVnRJafrQ0Ag59NlKC5eJVumwnp4oqWWFai9wiKJ%2BNMI%2B0lVmqiKVswM5Aqr5se3y%2B6IqPFJWhhT4qIuX%2Fm578%2FwwSGBhqTyd0xs9WmzZyfVfvREA9X%2F4uWQe0rD0ruHgBlQUNxTtYu%2ForhrR%2FWiixiA9R7mvW0nJzDsOtREirC8wOZHoxPfL%2FuuwZqGf7Z4IHhyjIQY2NPyGk8n2DGgKBRoNsiczdXnhtzT7hMgUlwoMMmCicoGOqUBuqdPcmDPlfyfK%2FfzSKoPQ1vBf6XV9xc%2Fmxs4QMyt79aiGxCj82Vwu63giOAF%2BEI%2FV6cjVoFwQXtv4PKYSdXxTR0e7sVYmulkEDjKvsb6EDO0pNAb1unr0wya0aid3Hgj4QoI%2FGhH%2BwoN6Tcso9AxyFzxytFECOV%2FnKdKIVJSBv2fGXj9YlDAxTH9llhIIZjhH6L2JNDSH0Jyf5feGUUmUk%2B4ovPA&X-Amz-Signature=c097e09657beca88e1c418aca32916bdf6725f21d1f608e03187ca47295ce649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTTHZXS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyr6bGiEmbRRb4fTs4KZmlSXDnNXQVb7dz52Ig5XoZIAIgRaygHKjt86mdoBAWU68v2Q28ZaHOyk9rp%2FyfUeNJLzAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKV7AZsUyFldlD4a2ircA%2F0U0PtH9brzl4HrKC1dnxf%2FKZdKLZnKKoaU%2Fe0%2Fv108P44u88FC97o7iFXH0wtZWpBxhqVGGPcIGCqj7elHNSNS5PO3eVs4XytDSI%2BvT671ik0lEDsNzhdnUFca9Xo1otf3as%2BPnjAo0TCZo9NAw%2FBDcfu4ueU3KXfV1aycVQD%2BamyQarpJTfEufjS6FwqExAj%2FNNu%2B7DhlG2E50MyIiYCoDC8tUGdKYLsfSKDKZTP%2BB29SlmzoI%2FCKHcIrPbCf4CVbN3vnCIbq%2BYuL5ghnwvMaOLM6JWwINB4KWIFK9PX%2FbVVFjBOgzjJ0UQ5Pr%2FJBEfrPLBbwVj4s1eqaH2yjPbZG6Y2jKcKaThbtvnNH8ZYJhBQfHTuyHCmh0aQFunJ5uShaHrMKljQcwY6LwVnRJafrQ0Ag59NlKC5eJVumwnp4oqWWFai9wiKJ%2BNMI%2B0lVmqiKVswM5Aqr5se3y%2B6IqPFJWhhT4qIuX%2Fm578%2FwwSGBhqTyd0xs9WmzZyfVfvREA9X%2F4uWQe0rD0ruHgBlQUNxTtYu%2ForhrR%2FWiixiA9R7mvW0nJzDsOtREirC8wOZHoxPfL%2FuuwZqGf7Z4IHhyjIQY2NPyGk8n2DGgKBRoNsiczdXnhtzT7hMgUlwoMMmCicoGOqUBuqdPcmDPlfyfK%2FfzSKoPQ1vBf6XV9xc%2Fmxs4QMyt79aiGxCj82Vwu63giOAF%2BEI%2FV6cjVoFwQXtv4PKYSdXxTR0e7sVYmulkEDjKvsb6EDO0pNAb1unr0wya0aid3Hgj4QoI%2FGhH%2BwoN6Tcso9AxyFzxytFECOV%2FnKdKIVJSBv2fGXj9YlDAxTH9llhIIZjhH6L2JNDSH0Jyf5feGUUmUk%2B4ovPA&X-Amz-Signature=808cdbc8ba03d38cdef76d73aca43cad39ce8bae6f12f378e96a6147675ec2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
