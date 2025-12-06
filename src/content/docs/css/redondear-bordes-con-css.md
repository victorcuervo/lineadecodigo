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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVRYHNXH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUNqOqo%2Fl1l4tABJsC7wAfF08LpKRTtPbvBCu7Bew1wIhAKhbRaX9M3eVbXHFbAIRDmxHCm8Z8NFAldZ40c43jJmMKv8DCHoQABoMNjM3NDIzMTgzODA1IgxgJNgtYPCB%2FayE0%2FUq3AMQ4GCmFo8srJwdKfdgQ1o%2BCbGTehNf5sNWRXnBJGQVT6OBdlaBG3abim2Ls%2BSn9ISglOh2oT9EKNlJd6Fd61ch57lKGaXTr2kr89jAwtrSYKnS4307e3e%2BvC9KvkDoNA6pHpmVpbClxx3Ksad1TQRtIW72kvf3nWkD5crdhnjeCTh2HwydML9%2Fgfc3cixKOkwj237TtjsC3LzGN3dS4FJ5ztGl9kXHnMyRpmuibFMLIYdOi%2FPj0bAtnhk2JgUUML%2FglHSvHjRfWg%2B0slAOHjvg0FwHDw%2F4l7Gmtb%2FndT4n%2FNvWCd7VnwAkar1oArW%2FAArrYKdc6UoKfQ%2B6tZU1v%2BVMl0wLo9k%2FnyBGyRDH%2FQYfOxZjiMFqxNBQvr1hhcWXbzielhqyY59nkZq3DlJ%2F6KnI9c4uQh8%2FQauNLNJXggZaZuh%2F%2FXAcw0AMIWb%2Bqcgl7fkUuKGOF5fld%2BsrZZMC%2FhWD%2B76F1%2FpnP%2FMWtAtgjss3Oi54y6oLhE0Zxwb5GiAHZx%2BX417ybM%2F2d26jCYmhHXmqI4hs8j5neEYnT8w56k2vs5bSWKL1PudZ5Q4kcoT0QwhSSIXzU%2F6kVBwM0uLrtb2qYdoysN2l1zSvC7eJZ5%2B2JdqxuIw5m4gIBf4H3zCww9HJBjqkAc9j657GFi%2FSbc2D1PK%2FzmZKDnRoj0nzoSrZn02vrQ5rcEGfeGrD01pkQH23bdDwJl9sFoHwm6P1ALwCJwk%2FTTo7ilo0kyjm%2FwJD1F5rzZt0YPz1b2ZZHgMMU%2FfIICYXIm6tS98NhYHo9fh4MqLkpUoihMPOOd1sUponOnjmgMOy93Uywl0HprKa8zWfjdl4d1bHnIZdw4nG5sq8C0MxcThj8zmR&X-Amz-Signature=182a963c5593ef6a3bb2bee0c104851a229595dbc86dedc27446979c0c626968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVRYHNXH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUNqOqo%2Fl1l4tABJsC7wAfF08LpKRTtPbvBCu7Bew1wIhAKhbRaX9M3eVbXHFbAIRDmxHCm8Z8NFAldZ40c43jJmMKv8DCHoQABoMNjM3NDIzMTgzODA1IgxgJNgtYPCB%2FayE0%2FUq3AMQ4GCmFo8srJwdKfdgQ1o%2BCbGTehNf5sNWRXnBJGQVT6OBdlaBG3abim2Ls%2BSn9ISglOh2oT9EKNlJd6Fd61ch57lKGaXTr2kr89jAwtrSYKnS4307e3e%2BvC9KvkDoNA6pHpmVpbClxx3Ksad1TQRtIW72kvf3nWkD5crdhnjeCTh2HwydML9%2Fgfc3cixKOkwj237TtjsC3LzGN3dS4FJ5ztGl9kXHnMyRpmuibFMLIYdOi%2FPj0bAtnhk2JgUUML%2FglHSvHjRfWg%2B0slAOHjvg0FwHDw%2F4l7Gmtb%2FndT4n%2FNvWCd7VnwAkar1oArW%2FAArrYKdc6UoKfQ%2B6tZU1v%2BVMl0wLo9k%2FnyBGyRDH%2FQYfOxZjiMFqxNBQvr1hhcWXbzielhqyY59nkZq3DlJ%2F6KnI9c4uQh8%2FQauNLNJXggZaZuh%2F%2FXAcw0AMIWb%2Bqcgl7fkUuKGOF5fld%2BsrZZMC%2FhWD%2B76F1%2FpnP%2FMWtAtgjss3Oi54y6oLhE0Zxwb5GiAHZx%2BX417ybM%2F2d26jCYmhHXmqI4hs8j5neEYnT8w56k2vs5bSWKL1PudZ5Q4kcoT0QwhSSIXzU%2F6kVBwM0uLrtb2qYdoysN2l1zSvC7eJZ5%2B2JdqxuIw5m4gIBf4H3zCww9HJBjqkAc9j657GFi%2FSbc2D1PK%2FzmZKDnRoj0nzoSrZn02vrQ5rcEGfeGrD01pkQH23bdDwJl9sFoHwm6P1ALwCJwk%2FTTo7ilo0kyjm%2FwJD1F5rzZt0YPz1b2ZZHgMMU%2FfIICYXIm6tS98NhYHo9fh4MqLkpUoihMPOOd1sUponOnjmgMOy93Uywl0HprKa8zWfjdl4d1bHnIZdw4nG5sq8C0MxcThj8zmR&X-Amz-Signature=63dfa64ec5ad15581acf5d66dd46d4d53cf133186ac6c8010eaabf68cd059a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
