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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667F3VPYG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjMUA3v1G0NgjWEyc4z1WBhcrveNSeVmMecrWxafRnlgIhAKsy9jgOTkjClvjly6UaK1xn10oPVMA8CT2RNK2NQUPEKv8DCHEQABoMNjM3NDIzMTgzODA1Igwyz%2FxJiu1METd9u5Yq3APzWo7ctbkJTZCR2ry%2BRDi6Lja0c4c0t3h6rVVgsxioreyNQABaGIicb2YRILOD6o7bO%2Fq3HhqDimV9YIzhEWMxyMfPxMdZTE5XSFZjmpMEJZ4zqaKFWxfVu3FWNG%2B945orjiu20YdxPVAKRYKYMaixbO%2BRqn5ayw%2BJgTib9Ys1zlk4rzBpApt2DM4C7Wlf4vllYWmH1f%2Bdunavn%2FUTmNL3Lc0jwcm70C2ysou%2FxVPzfMVcnvnnqiDGuL5LmdJvc0%2BtObTqraUQNi%2BpDMG8e1E0fb%2Fn5YmHkU4LLsJp9lpvn1CPx%2F6VfDnS2C4%2BXe%2B6gR72cj94L5nFuqXx9n2vxVrYYg9bBiwZhh%2Bw73i%2FPYSxf8T7UrycUuXgo7Mt4WNB5os3eYxq%2FdxmiFaR7rlNjCHFlb2W%2B7sRWdTYTjPeNs42gr1QF0ejK3JRUXiGA%2BbQircjigN%2B7qTm%2FTWOleeXN1Weyuly%2B7Hi2VzeID%2BKQFRItHfsuHGlK3ASC5W1VxPFO7ySNLufCYogvJlnek1cK5wm0tMpzWenpsd%2F%2Fd7CQvaL5wPXL2QWjRi%2BJDl7CsDisfr1oMQO2nJ9lqDtTqdYypxFJXE%2F02NLrSi%2FT1uJzJP%2FT9mwF5Wz6WfrslI2GTD73ofKBjqkATQqqLKOteuR3KGwTsfhspZhiIPFJv0VzOxLrIeSzdm%2F5wQu0eZwcF57nkSst6WXHKT%2F%2BLOYVsxY8gHlClidCI%2BWw2S1n6sS0M%2F%2FLuIby03xCgYdFk%2BWA0iJ4FLnNMBvMR4gWCsOe0z0bxKzVbFEJFV5Uf15DSHKvOZ6VZZYhyDvGwBXamHw1gBW3bbWf%2B0atOZVgzODD0Bk1L9qKry64EFBNhJ%2F&X-Amz-Signature=09841986a26d35e089a0ac657ad67f926d96f9fa9b1be587a2d1d08ba0ea210c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667F3VPYG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjMUA3v1G0NgjWEyc4z1WBhcrveNSeVmMecrWxafRnlgIhAKsy9jgOTkjClvjly6UaK1xn10oPVMA8CT2RNK2NQUPEKv8DCHEQABoMNjM3NDIzMTgzODA1Igwyz%2FxJiu1METd9u5Yq3APzWo7ctbkJTZCR2ry%2BRDi6Lja0c4c0t3h6rVVgsxioreyNQABaGIicb2YRILOD6o7bO%2Fq3HhqDimV9YIzhEWMxyMfPxMdZTE5XSFZjmpMEJZ4zqaKFWxfVu3FWNG%2B945orjiu20YdxPVAKRYKYMaixbO%2BRqn5ayw%2BJgTib9Ys1zlk4rzBpApt2DM4C7Wlf4vllYWmH1f%2Bdunavn%2FUTmNL3Lc0jwcm70C2ysou%2FxVPzfMVcnvnnqiDGuL5LmdJvc0%2BtObTqraUQNi%2BpDMG8e1E0fb%2Fn5YmHkU4LLsJp9lpvn1CPx%2F6VfDnS2C4%2BXe%2B6gR72cj94L5nFuqXx9n2vxVrYYg9bBiwZhh%2Bw73i%2FPYSxf8T7UrycUuXgo7Mt4WNB5os3eYxq%2FdxmiFaR7rlNjCHFlb2W%2B7sRWdTYTjPeNs42gr1QF0ejK3JRUXiGA%2BbQircjigN%2B7qTm%2FTWOleeXN1Weyuly%2B7Hi2VzeID%2BKQFRItHfsuHGlK3ASC5W1VxPFO7ySNLufCYogvJlnek1cK5wm0tMpzWenpsd%2F%2Fd7CQvaL5wPXL2QWjRi%2BJDl7CsDisfr1oMQO2nJ9lqDtTqdYypxFJXE%2F02NLrSi%2FT1uJzJP%2FT9mwF5Wz6WfrslI2GTD73ofKBjqkATQqqLKOteuR3KGwTsfhspZhiIPFJv0VzOxLrIeSzdm%2F5wQu0eZwcF57nkSst6WXHKT%2F%2BLOYVsxY8gHlClidCI%2BWw2S1n6sS0M%2F%2FLuIby03xCgYdFk%2BWA0iJ4FLnNMBvMR4gWCsOe0z0bxKzVbFEJFV5Uf15DSHKvOZ6VZZYhyDvGwBXamHw1gBW3bbWf%2B0atOZVgzODD0Bk1L9qKry64EFBNhJ%2F&X-Amz-Signature=f7036d9d758ee38a5e93d38bf114f9a8005a541fc0a03cdb2590ec142bfc1cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
