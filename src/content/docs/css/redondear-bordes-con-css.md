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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBV24EUT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB0e14JfLa5dG5W%2BQAeb80UXmX6gwiEnRU3QELR2DmLAIgfPDiDoqmHtIKbOqJHw92SbF3o0mX19mcgWOAa6hxbnkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7WoDlqBFpPKMbq%2FircAwYMKiqhbtPtacWxZo%2Fp6JEVuvMZv1%2BRgzkrmXMWaiQndWGmjtIyoEFRUyuSXKokldqb0KKoji60zv%2FqLaLb2h%2FfeoYwp%2B4P5GlNkyxWVV%2FdDO4YN53Ke2AWP5GrfCJ5WDVjbe9qGHKfwx5N3AOi3kqS%2FiWlnh6SRH%2FBAhPXxpfjSSXf7S8E1x0XhKEQzG0Zjwu6mNUN1ERV87Nxs0YmeSyKkmUg50nZUuqUlKZVoRFlMxCWxefVNKgXt0JzfcOHMwCxKqtLg9tH8Q4XPJZtxkZoV0qsTxBmHOzGCEs%2Bu0A%2BC86f7MIl6oVdpYXpQ1WoblNw4%2F6RVvKNnMpe1uVv4EVRuhKIzq5dTQvOkKPzHRdfCzrhNnQMLR30ph3PgvJTMrsW5nxWxN%2BpqLP%2FWuqky1%2B9BkCTaCwOWF4h%2B3YIO%2BYXSyg3YzRjmUZODZE608EaVuypimJz4ZKMOHTUWXRZCBISBrMi6jq0kI7fcmPqrkneGsuYxkCHb%2BLiHEMtRtkZ%2FXrZ4sguoHW11JHbo5XoLeNb2MKDFFq5PhnG3Lm7kSh7%2FipzOIbSZg2p%2FysJit23w0PHfyort2Rd%2F5mKt5rUNJQ%2FKmY%2FzsMDOAOqsOpxVbe5ygDzQYe2QVlZQq9lMKHt2ckGOqUBmV730m2udr49ZrlqmkBWwnUCC6Ls38TLn%2Blf55eHmame3%2B2nB9iK9hNGOtuPhxImu8c8JRaoe3YVUnzGBM%2FG328PXLpGZoVS6wg9vWR2z%2BSmmfmLaO6LbRP6Oj%2B4R1nFLK8Rdu%2FbV3dIpe1YAwXOVz15GMhA1TmoSw4rpz%2FQxtRut3pceYdK0%2F4AAQYNQpo1UAd0dk6dENzsEnCdheUPNvl%2FMxvZ&X-Amz-Signature=d61ff0cadba99cf4adbc71ea84f230e4b99c7694e46d63b2ad0944bd4f50dd02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBV24EUT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB0e14JfLa5dG5W%2BQAeb80UXmX6gwiEnRU3QELR2DmLAIgfPDiDoqmHtIKbOqJHw92SbF3o0mX19mcgWOAa6hxbnkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7WoDlqBFpPKMbq%2FircAwYMKiqhbtPtacWxZo%2Fp6JEVuvMZv1%2BRgzkrmXMWaiQndWGmjtIyoEFRUyuSXKokldqb0KKoji60zv%2FqLaLb2h%2FfeoYwp%2B4P5GlNkyxWVV%2FdDO4YN53Ke2AWP5GrfCJ5WDVjbe9qGHKfwx5N3AOi3kqS%2FiWlnh6SRH%2FBAhPXxpfjSSXf7S8E1x0XhKEQzG0Zjwu6mNUN1ERV87Nxs0YmeSyKkmUg50nZUuqUlKZVoRFlMxCWxefVNKgXt0JzfcOHMwCxKqtLg9tH8Q4XPJZtxkZoV0qsTxBmHOzGCEs%2Bu0A%2BC86f7MIl6oVdpYXpQ1WoblNw4%2F6RVvKNnMpe1uVv4EVRuhKIzq5dTQvOkKPzHRdfCzrhNnQMLR30ph3PgvJTMrsW5nxWxN%2BpqLP%2FWuqky1%2B9BkCTaCwOWF4h%2B3YIO%2BYXSyg3YzRjmUZODZE608EaVuypimJz4ZKMOHTUWXRZCBISBrMi6jq0kI7fcmPqrkneGsuYxkCHb%2BLiHEMtRtkZ%2FXrZ4sguoHW11JHbo5XoLeNb2MKDFFq5PhnG3Lm7kSh7%2FipzOIbSZg2p%2FysJit23w0PHfyort2Rd%2F5mKt5rUNJQ%2FKmY%2FzsMDOAOqsOpxVbe5ygDzQYe2QVlZQq9lMKHt2ckGOqUBmV730m2udr49ZrlqmkBWwnUCC6Ls38TLn%2Blf55eHmame3%2B2nB9iK9hNGOtuPhxImu8c8JRaoe3YVUnzGBM%2FG328PXLpGZoVS6wg9vWR2z%2BSmmfmLaO6LbRP6Oj%2B4R1nFLK8Rdu%2FbV3dIpe1YAwXOVz15GMhA1TmoSw4rpz%2FQxtRut3pceYdK0%2F4AAQYNQpo1UAd0dk6dENzsEnCdheUPNvl%2FMxvZ&X-Amz-Signature=9ca45321843c4a23a7636e497d29c781fa55bf3ba131d2d7266ba121fd8dd80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
