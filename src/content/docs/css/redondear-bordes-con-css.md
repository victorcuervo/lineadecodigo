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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BM3LXTF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0AAC3bYY2sGljLbxqwcGQVUEROKRcktzelzqwaYX8aAiEA3LhKxHgp5%2FnC5hNvbiWQsE7GpZDqzzUPcCe59c2ZBGEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKqZuVOi57t%2FrByH5ircA2IOBB%2B8VA8tNimyL5X%2FQWlLGuKrSrMaCu7fqJFyXAodJZHCuA3cmMRp9rRVtSxb8PT4WUzdjQcZjr1Brr9pgpNqh%2BCPE0IT1%2F8Oixyh5Tjn0ZOKuYrRK7B4IFeH5cfX3BfmPn7%2BnVWiFJrNtrhzPMGh3pJEyGXw2%2BPpqd%2BzqdNhizs279ePwnY%2FYjGU4kN2U9aq7nHOtt2ysoxJmSOnq2OzihzFt1uUT1pf9Kqdi3IrXnd7RtqyTNhHq8ytdUo7%2FSAiAAY41eKvDkF3hUTkEaS%2FGwcLXImlasXD%2FMfljyMTau%2BoZyhPepkX%2FddSNYolHjh0Uhl5Fd0aiKrJohmucvkmdfWkWMCWmSEIuQnesrs0Y26jViJNsfNZjJZwnWHYuRtIj0ZpWJFq9uMrkOwUU8AhozzOkE69%2BFe3VbFIlM9iY6xMZuhacJ3qIQFLLLhUXFuEXr0fcpCXE1%2FRnUkjV7PExuJ9yQLdV99xx0b97xqoDfmt94%2FJlN5fGHR%2BHOcjzy1nkEB9nmquiZMBFBx2MdNskxWoFahW59ARZOHlzvv%2BV7t4IqorqD2AXQQcyljkSwakeu%2F6nWLe5kUNLznnA7yBz674WctRiBrEZHdc6%2FIlbDZvM0qyIU%2FSxgaDMJOMyMkGOqUBGRkEsDpVCrV1NoLU2D%2FncOmLC9yEBB55ioSf53HQJwoTsSxMrdieoJKQGXmXZ11SsZdQ7f%2BpTKmLHe98tety8TCziZcXoUc%2BKIxQtkrnsNYQ6sY%2FF5I7ueGKR3OefbnierP62ANjP%2FqzOWus1JADdXdqpfaHvbMjoaqT4TAzrcEQ3G5m6NoxvgPUAMnBWjZsYZVnCm2NOQbQ0f81%2FlzNfDQkX5Ei&X-Amz-Signature=d2ce70668ea2de4043ec6fc38de79c70f7cd3657bd802d89ab8a512b7922a3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BM3LXTF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0AAC3bYY2sGljLbxqwcGQVUEROKRcktzelzqwaYX8aAiEA3LhKxHgp5%2FnC5hNvbiWQsE7GpZDqzzUPcCe59c2ZBGEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKqZuVOi57t%2FrByH5ircA2IOBB%2B8VA8tNimyL5X%2FQWlLGuKrSrMaCu7fqJFyXAodJZHCuA3cmMRp9rRVtSxb8PT4WUzdjQcZjr1Brr9pgpNqh%2BCPE0IT1%2F8Oixyh5Tjn0ZOKuYrRK7B4IFeH5cfX3BfmPn7%2BnVWiFJrNtrhzPMGh3pJEyGXw2%2BPpqd%2BzqdNhizs279ePwnY%2FYjGU4kN2U9aq7nHOtt2ysoxJmSOnq2OzihzFt1uUT1pf9Kqdi3IrXnd7RtqyTNhHq8ytdUo7%2FSAiAAY41eKvDkF3hUTkEaS%2FGwcLXImlasXD%2FMfljyMTau%2BoZyhPepkX%2FddSNYolHjh0Uhl5Fd0aiKrJohmucvkmdfWkWMCWmSEIuQnesrs0Y26jViJNsfNZjJZwnWHYuRtIj0ZpWJFq9uMrkOwUU8AhozzOkE69%2BFe3VbFIlM9iY6xMZuhacJ3qIQFLLLhUXFuEXr0fcpCXE1%2FRnUkjV7PExuJ9yQLdV99xx0b97xqoDfmt94%2FJlN5fGHR%2BHOcjzy1nkEB9nmquiZMBFBx2MdNskxWoFahW59ARZOHlzvv%2BV7t4IqorqD2AXQQcyljkSwakeu%2F6nWLe5kUNLznnA7yBz674WctRiBrEZHdc6%2FIlbDZvM0qyIU%2FSxgaDMJOMyMkGOqUBGRkEsDpVCrV1NoLU2D%2FncOmLC9yEBB55ioSf53HQJwoTsSxMrdieoJKQGXmXZ11SsZdQ7f%2BpTKmLHe98tety8TCziZcXoUc%2BKIxQtkrnsNYQ6sY%2FF5I7ueGKR3OefbnierP62ANjP%2FqzOWus1JADdXdqpfaHvbMjoaqT4TAzrcEQ3G5m6NoxvgPUAMnBWjZsYZVnCm2NOQbQ0f81%2FlzNfDQkX5Ei&X-Amz-Signature=12820d8cd1993f2cd8fe7977b635713ec7c089e1768a5fb96a7e0bcc8284a435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
