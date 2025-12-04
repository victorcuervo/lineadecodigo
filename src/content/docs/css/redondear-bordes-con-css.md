---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJLW7NX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDwlsZoj1Q6%2BkZGlNwRFSlhLoAJDP4CoasugiIcVwfoQQIgJJTBdM4A%2F6usQxGXwZdqV8PunY7WgfKZgZM3z%2F7os5sq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDrqIt%2FDnS%2Ft2QWNsyrcA9t7k31zZ6tp1s3EB2gjsTybj0AFLgAlaHsHw7VFufprqiMg4H2%2BrW%2B7rKZp0aN3SUYQGryLHLcWuypU3HFSX7vtzG3%2B19X99f%2Fg8wiF7FfF0cZTcCuRci3whKOZ22hHhHQiTFkemdjM0SgKZhXMsowkC5zmGv4v%2BTPc1KNuhA31BFC%2BQp9D9A%2BzY%2BTyc%2FWGcPmkQbd4%2FrK3M%2B0z9QoYmrpvxuvjjLVPq9KIfhiqwcdoqxDTaa0zWAPZh92tKAfZNRKY2r5HZlcyp9wdm2D0udA0ioyLKYcb1Yi1ZRiFU71WMceuqggfWpc6u8Y3Yd9aYhQ9ihc%2BDRQ8CU8ysnu2zYuKVzX2Wdf7J5znVv3k%2B7XgnMK3hn4Cx0iqMY%2BvwEx6UZiwpLWmJecBlhOVYSkP5N0Up3hf65ySC9rMnuNku6pNHg1HjJuJJYIiESJvhzPtuVhl0eqhpJNkJDBtHeJqmAlzBmDfZijyqfGfOP23551yP2qLgHk1kcSjSanWACrmcnt4zuF%2FSeVSPu%2BEn%2FZb0un9fcMM1kOv8gtjEVRAcIDHemAVCjAXHBE4J1skQAsre%2BNY8PhS9lO91kL0gK0vN8Ipy6Bh71d61FrA5ikruL%2B1UK9wl%2BNYRcTVuqp8ML%2B0w8kGOqUBcHPFvQ0wFXRY2Bkvkcym4AneseMmdKzTRzLGu2xJZOsjjFF8nO1s4177fUG2QpUyhqolt7N%2BcY%2Fv2r6gDsneaF8sVLvnzmXplUFrINw2%2FdY0G8O2M0akOmF21quwEHxr2%2BuYCgMd%2BxaMS6ZKDsS0OGvNPo8urrO4Iwko4b2nk9xyA7Ek0S8dM2C5Up0Dm6jc%2F96tmiZL3G4lhPnpbhcuDKX0n6Nb&X-Amz-Signature=a340c99ef70a063b42a3e1368ab8bee9aa739aaf2e624640ffc3010ac6084fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJLW7NX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDwlsZoj1Q6%2BkZGlNwRFSlhLoAJDP4CoasugiIcVwfoQQIgJJTBdM4A%2F6usQxGXwZdqV8PunY7WgfKZgZM3z%2F7os5sq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDrqIt%2FDnS%2Ft2QWNsyrcA9t7k31zZ6tp1s3EB2gjsTybj0AFLgAlaHsHw7VFufprqiMg4H2%2BrW%2B7rKZp0aN3SUYQGryLHLcWuypU3HFSX7vtzG3%2B19X99f%2Fg8wiF7FfF0cZTcCuRci3whKOZ22hHhHQiTFkemdjM0SgKZhXMsowkC5zmGv4v%2BTPc1KNuhA31BFC%2BQp9D9A%2BzY%2BTyc%2FWGcPmkQbd4%2FrK3M%2B0z9QoYmrpvxuvjjLVPq9KIfhiqwcdoqxDTaa0zWAPZh92tKAfZNRKY2r5HZlcyp9wdm2D0udA0ioyLKYcb1Yi1ZRiFU71WMceuqggfWpc6u8Y3Yd9aYhQ9ihc%2BDRQ8CU8ysnu2zYuKVzX2Wdf7J5znVv3k%2B7XgnMK3hn4Cx0iqMY%2BvwEx6UZiwpLWmJecBlhOVYSkP5N0Up3hf65ySC9rMnuNku6pNHg1HjJuJJYIiESJvhzPtuVhl0eqhpJNkJDBtHeJqmAlzBmDfZijyqfGfOP23551yP2qLgHk1kcSjSanWACrmcnt4zuF%2FSeVSPu%2BEn%2FZb0un9fcMM1kOv8gtjEVRAcIDHemAVCjAXHBE4J1skQAsre%2BNY8PhS9lO91kL0gK0vN8Ipy6Bh71d61FrA5ikruL%2B1UK9wl%2BNYRcTVuqp8ML%2B0w8kGOqUBcHPFvQ0wFXRY2Bkvkcym4AneseMmdKzTRzLGu2xJZOsjjFF8nO1s4177fUG2QpUyhqolt7N%2BcY%2Fv2r6gDsneaF8sVLvnzmXplUFrINw2%2FdY0G8O2M0akOmF21quwEHxr2%2BuYCgMd%2BxaMS6ZKDsS0OGvNPo8urrO4Iwko4b2nk9xyA7Ek0S8dM2C5Up0Dm6jc%2F96tmiZL3G4lhPnpbhcuDKX0n6Nb&X-Amz-Signature=a6dc543e80ece75a88362e127a1bb87c001e83beb72efbe968bd1face0b83dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
