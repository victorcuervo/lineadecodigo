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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XDISLTG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWPyKHxFyp7AgPMa9VFqpPDJPK23XCHhhiMsb38shweQIgEYdsCnu%2BL1X%2FyUc34evwPJcbZbYsnGs7hwUHoORYlrQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHRxF%2F7Ija1fMtQhoSrcAzXKeGzrXfi57um1%2FKYfGJ0XMeM4zjWXjf6zjc8OXzDLHgQbOj60CyqYcPhHeG5qqe09iHNVstXPtDTwC%2FJ75B2Uav%2F3%2BP5GjUJtcZfLYFoTEdwQ9eDK8Oo%2Bbk6OXqsZHX1vC7m9SGDgt30kiCBLwewKTMoyUqfe%2BxSp%2FAOHwp7cZ1mlJIWbgeM2WsMmQbNdeAKcNU0%2FHaT06zIe94kPQzkNZ5uTREH3VACalGD6zl0RPCJCquECaA6eho%2BVE9vIoQMftyj8uwdijWea4bqHr7n9yjAXfF8d8urJuUclHEgiBRhF09IQSFmTQ9PQU9waORrggUWv0mVYnCi60Z1M8j0mUxoTkOHmcZn7eJX2x7M5Fs%2Folj4e5ZLJY5yQDnrhDTu0wgxN%2BPEQXibZX36uJ4jUee7oyL2QMu63mh8muD1VObh1FqU6q75ESUBS%2BKhgqtcP%2FVvGkLfuY8qog4p8BFqcs5%2F3sgheFkqLE7aP3w6BV2qz%2BBYzZEK0W%2BXz44KunU9jEFsBT%2B0px0R261theq08%2BN6RxeBmjdSWDnHLgcTwKdS%2Fgj61tVQ5xbnUivlLO2f7X223%2BpqtTDTiznJKoP3xBZmdoEE8RSNP%2FybnzGX7fC5BFnBLijVOwvlmML2yyckGOqUBXYvefg7OMATHwwR%2FbH54IA4rMtu1GPjF6px7kh62gUJXRtZ5TyNBTfcrjzaF5n0LlYFyDesygjxMqBUuKqixC5mq6cvAXa3ktlqjkK%2FScXdBxdd0PumN%2FXE4WhexBHfUPG2OWMQnvQOodO1HHe66fexgBudna%2BAmkqguvPY%2FJ9KbVF69MlTBTPw1VAbZUZI3m00V4HthBnm7KxUq5EwCX9XAALhv&X-Amz-Signature=f03b90024bae9d13493b625e1db4db1a0789bf05f3b1ea9de03658e51f2947c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XDISLTG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWPyKHxFyp7AgPMa9VFqpPDJPK23XCHhhiMsb38shweQIgEYdsCnu%2BL1X%2FyUc34evwPJcbZbYsnGs7hwUHoORYlrQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHRxF%2F7Ija1fMtQhoSrcAzXKeGzrXfi57um1%2FKYfGJ0XMeM4zjWXjf6zjc8OXzDLHgQbOj60CyqYcPhHeG5qqe09iHNVstXPtDTwC%2FJ75B2Uav%2F3%2BP5GjUJtcZfLYFoTEdwQ9eDK8Oo%2Bbk6OXqsZHX1vC7m9SGDgt30kiCBLwewKTMoyUqfe%2BxSp%2FAOHwp7cZ1mlJIWbgeM2WsMmQbNdeAKcNU0%2FHaT06zIe94kPQzkNZ5uTREH3VACalGD6zl0RPCJCquECaA6eho%2BVE9vIoQMftyj8uwdijWea4bqHr7n9yjAXfF8d8urJuUclHEgiBRhF09IQSFmTQ9PQU9waORrggUWv0mVYnCi60Z1M8j0mUxoTkOHmcZn7eJX2x7M5Fs%2Folj4e5ZLJY5yQDnrhDTu0wgxN%2BPEQXibZX36uJ4jUee7oyL2QMu63mh8muD1VObh1FqU6q75ESUBS%2BKhgqtcP%2FVvGkLfuY8qog4p8BFqcs5%2F3sgheFkqLE7aP3w6BV2qz%2BBYzZEK0W%2BXz44KunU9jEFsBT%2B0px0R261theq08%2BN6RxeBmjdSWDnHLgcTwKdS%2Fgj61tVQ5xbnUivlLO2f7X223%2BpqtTDTiznJKoP3xBZmdoEE8RSNP%2FybnzGX7fC5BFnBLijVOwvlmML2yyckGOqUBXYvefg7OMATHwwR%2FbH54IA4rMtu1GPjF6px7kh62gUJXRtZ5TyNBTfcrjzaF5n0LlYFyDesygjxMqBUuKqixC5mq6cvAXa3ktlqjkK%2FScXdBxdd0PumN%2FXE4WhexBHfUPG2OWMQnvQOodO1HHe66fexgBudna%2BAmkqguvPY%2FJ9KbVF69MlTBTPw1VAbZUZI3m00V4HthBnm7KxUq5EwCX9XAALhv&X-Amz-Signature=070f85def837aea182e86bf5b176a22c1ed29f1039454eb06ba50b94e73b4892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
