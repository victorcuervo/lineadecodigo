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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5PMMNC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg9RS%2BLZnTyZF8F%2BMSQqcGHqA1gkcLXCUNi%2BtuM1BvsAiAX72BHWKi3N5Zg5UwyaFAnIPfFzDc2zk0dIHoc0uQfnCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRlOEhJNkX41wyRuwKtwDe0kpq8uu97FVHZefv6K81RXDHIIczBH7%2Bm2ktkRB6pnwsvJHhjiS5LKFwEUns2UvI6Gg3hBkRQ35uv2p1p4Dn0T8NsIvjRCiRa8Avk071Bodzb63MFaS9Dj%2F7G%2FX%2FNAKLHUmZm2JjbSnY06N9PU%2BkuZYg1I4FdHFz%2FJLsmDslomz418q3vR%2B%2Fo1MnvKL79I4iYZndyJOrPg9P5TGwPt7Wp6DVMyPFoCUeEVz2mSNsE0GfMES4dbn2DgXq5lLsysYLFuO5z33Q5hi0DyFs%2BNuKhAEQfLUrI7aWJk4F1DkLRGLAi70tbU3u1TWIb%2BgLvugN12ZXCXidZovhIjOI9GyOKEengVbHuw%2FffD0XSgQBONF%2Fmj3LuPqtvdE3iceZeeV4NzW8nQvlzCFsPxJBD2vM9FA7ik578qfWhQmo6wscZTfBCrOjFzpy%2B5fqLtnSxvia1MHvO1Og6f3O3OTMGIYzeQhYK5V%2FZ4G10dzxQTCnboABt3Lsawvw2zA5mQLCIAUJCYaiHLrm1ppH9RYHAAVF1fJdEVzrLzHogMzIe%2B4SfjiSmea3SIOYAaCifsy3BQrBzqxz%2Bx%2BZpLNQ6%2BaU814yUGQpGJMUD7cY%2Bb3S6afZPS2AsOnnziENACbKU8wnZ%2FUyQY6pgFHklc08YEU%2BDgYRgcD%2FoDxUFLK4o5UKWX3ZmSM1dixkWi7deIrNLEAQ%2BvjvnKNk3CBRG1Qt8AhxqDHCQQgylwSd5UEgW1RZ7AWytEylULA4hjj4%2BhUzbycXRBbva2zOTU0WQDurZ1DQl9kq3hFyhPYaoATAq6VCBiteHtoBErlGLCvm%2BrVW2TqQlLmYXlJ2XqI93xWTibt0vDKIP0ycOPfpKmt%2Fw9Y&X-Amz-Signature=eb72e9997a290dc9f52eb47c6966dfab5dffac3676351c0e5c3796b0bc17975e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5PMMNC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg9RS%2BLZnTyZF8F%2BMSQqcGHqA1gkcLXCUNi%2BtuM1BvsAiAX72BHWKi3N5Zg5UwyaFAnIPfFzDc2zk0dIHoc0uQfnCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRlOEhJNkX41wyRuwKtwDe0kpq8uu97FVHZefv6K81RXDHIIczBH7%2Bm2ktkRB6pnwsvJHhjiS5LKFwEUns2UvI6Gg3hBkRQ35uv2p1p4Dn0T8NsIvjRCiRa8Avk071Bodzb63MFaS9Dj%2F7G%2FX%2FNAKLHUmZm2JjbSnY06N9PU%2BkuZYg1I4FdHFz%2FJLsmDslomz418q3vR%2B%2Fo1MnvKL79I4iYZndyJOrPg9P5TGwPt7Wp6DVMyPFoCUeEVz2mSNsE0GfMES4dbn2DgXq5lLsysYLFuO5z33Q5hi0DyFs%2BNuKhAEQfLUrI7aWJk4F1DkLRGLAi70tbU3u1TWIb%2BgLvugN12ZXCXidZovhIjOI9GyOKEengVbHuw%2FffD0XSgQBONF%2Fmj3LuPqtvdE3iceZeeV4NzW8nQvlzCFsPxJBD2vM9FA7ik578qfWhQmo6wscZTfBCrOjFzpy%2B5fqLtnSxvia1MHvO1Og6f3O3OTMGIYzeQhYK5V%2FZ4G10dzxQTCnboABt3Lsawvw2zA5mQLCIAUJCYaiHLrm1ppH9RYHAAVF1fJdEVzrLzHogMzIe%2B4SfjiSmea3SIOYAaCifsy3BQrBzqxz%2Bx%2BZpLNQ6%2BaU814yUGQpGJMUD7cY%2Bb3S6afZPS2AsOnnziENACbKU8wnZ%2FUyQY6pgFHklc08YEU%2BDgYRgcD%2FoDxUFLK4o5UKWX3ZmSM1dixkWi7deIrNLEAQ%2BvjvnKNk3CBRG1Qt8AhxqDHCQQgylwSd5UEgW1RZ7AWytEylULA4hjj4%2BhUzbycXRBbva2zOTU0WQDurZ1DQl9kq3hFyhPYaoATAq6VCBiteHtoBErlGLCvm%2BrVW2TqQlLmYXlJ2XqI93xWTibt0vDKIP0ycOPfpKmt%2Fw9Y&X-Amz-Signature=66a2f7f3b2ff76ca0cb869ac274b54d65d9f58c98b9ba5abf364574c4e522874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
