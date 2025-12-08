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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLXN5KZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp8RgiULIW9csOAdzJIsc%2BXBg0LHHE7l7%2FZ0wVUbGDDAiEAlx%2BYGl6TvwoXwkb%2BUfdd8fqreXeS%2F4YlGYegE8Yw0dcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU9W3m%2F%2F0IZ%2Fu7ghCrcA2V4JzfNOJv0xKPuxg7KXw%2BRvbyHPxJyVMKnjnVZky6Tb5rLJoW0tDmqzrrOVyL91bHp%2BOMwFOLlA%2Fe05VCD9hJEJijWbOMQjUSzE9xeDv81f46uBZ%2FgkhWEk%2FrV0sUe3bEhzy0o0nHMNvcX52%2BrYO8wjCBYmoaRYlyGVvbXMmFAyz2VVN7PF5H%2BC6ttG8bhzsO7%2BH8%2BRPo%2BFohbdVw7N%2BRegasdmKQFpaA8g0sNqQulhbBDQnDQdiIULf%2BmlKFmW4T2yrmiRovZ4DbBbuCB%2FJ6uGLY2iZwuhh7LdIWtP96T4AV1F6JsAmSDci%2FPZX1h9652S%2BUmfmuN4nIKwgRl%2FH%2FP7zCCJUsc8oTrcvuh9i89wUzDvozDROiUq21FUGgiuQnOgaoIclKVtCVMtAc7%2FX%2B06y11cMxACK%2B9YfmNFDJkQyYAHhD%2BzjoaKZijuREuO3iaNxDShwNykFny7fAtES%2FYLRFHQzqNom9ZQUfN%2BnnTC6OyyXLRnRidGmAHnRr51Pa%2BIwX5ounfDayu%2F6RnZKRDK0fCSpnSOB3w%2F%2FXPXggSsgkj7%2FezfYyK45ODFRvdULcWUSB1I%2FX4EZHDaAVA1AgnJaYERyCxhoEyhy9EUEiwwfNjgG5UBu6rMozFMOzQ2ckGOqUBCXne3sFsKE3qhjJrre1tTHgneFRwNnfyUS18Wh6mgzkuemKcRenLqAlt1opPaDgu9NaYuy%2FIKbcIu%2FAYXiT8OPUcvCzUSDthnQ%2FbOnYv5yw8JfYh8Vr9mCL7H5iPMWqABFJj5m2%2BWwvUOG4TvNLt2sFr2Pt74cW39nwlCvQRyK5UxXOSunSWmgd4m82E88a1UZD6zL4mE5UOIkxIY5eG9kt%2BUCAl&X-Amz-Signature=1d83ecee1dbba3a8a439cfc279df413fb4696d1094738a6aa52219186906ca66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLXN5KZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp8RgiULIW9csOAdzJIsc%2BXBg0LHHE7l7%2FZ0wVUbGDDAiEAlx%2BYGl6TvwoXwkb%2BUfdd8fqreXeS%2F4YlGYegE8Yw0dcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU9W3m%2F%2F0IZ%2Fu7ghCrcA2V4JzfNOJv0xKPuxg7KXw%2BRvbyHPxJyVMKnjnVZky6Tb5rLJoW0tDmqzrrOVyL91bHp%2BOMwFOLlA%2Fe05VCD9hJEJijWbOMQjUSzE9xeDv81f46uBZ%2FgkhWEk%2FrV0sUe3bEhzy0o0nHMNvcX52%2BrYO8wjCBYmoaRYlyGVvbXMmFAyz2VVN7PF5H%2BC6ttG8bhzsO7%2BH8%2BRPo%2BFohbdVw7N%2BRegasdmKQFpaA8g0sNqQulhbBDQnDQdiIULf%2BmlKFmW4T2yrmiRovZ4DbBbuCB%2FJ6uGLY2iZwuhh7LdIWtP96T4AV1F6JsAmSDci%2FPZX1h9652S%2BUmfmuN4nIKwgRl%2FH%2FP7zCCJUsc8oTrcvuh9i89wUzDvozDROiUq21FUGgiuQnOgaoIclKVtCVMtAc7%2FX%2B06y11cMxACK%2B9YfmNFDJkQyYAHhD%2BzjoaKZijuREuO3iaNxDShwNykFny7fAtES%2FYLRFHQzqNom9ZQUfN%2BnnTC6OyyXLRnRidGmAHnRr51Pa%2BIwX5ounfDayu%2F6RnZKRDK0fCSpnSOB3w%2F%2FXPXggSsgkj7%2FezfYyK45ODFRvdULcWUSB1I%2FX4EZHDaAVA1AgnJaYERyCxhoEyhy9EUEiwwfNjgG5UBu6rMozFMOzQ2ckGOqUBCXne3sFsKE3qhjJrre1tTHgneFRwNnfyUS18Wh6mgzkuemKcRenLqAlt1opPaDgu9NaYuy%2FIKbcIu%2FAYXiT8OPUcvCzUSDthnQ%2FbOnYv5yw8JfYh8Vr9mCL7H5iPMWqABFJj5m2%2BWwvUOG4TvNLt2sFr2Pt74cW39nwlCvQRyK5UxXOSunSWmgd4m82E88a1UZD6zL4mE5UOIkxIY5eG9kt%2BUCAl&X-Amz-Signature=b63df67f1b4839351c95c17e870db45d6ec12759d782b002e911062e8cf8ae28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
