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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEF4GCW5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo%2Fl6b2nO4j7wIsC8KTzwupzKNRTADSfoeFcqtx1nJJAiEAsxahGXcpkNKaLcl8IBAPJTD4FUGiP9dInEQiqRv1rvAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGOk335CB5cs7EmnMyrcAwokAOUXl87f5qFpjLo%2Frp7rNfdwikyktoaqBTHH0%2F%2Ffba1ALYM6bBOUQdVChW7PI6C%2BOdcenlQAB8XBRGgZTD%2BSIgyDEX4VFi2kNYgXmUYXTzUlPhHUq2jxptP68tvNBibVuPW8IQQUhcsTQztmyIYUdTmQlUtRZhkT%2B3TabX5gHjms71nGo7nt1sNtbUOJYEBDYdRbz905L9gt5lnBcbR92bazLZOoMgf9MEHbhT%2FQAtRVICMYnj90xP8OokXt7uGZpkx6n3VJpi1vPao6XKmJICq4eYnEpxX%2BGFBO39xzerNUuVfs5w4vHUMeJEMYF0WQXk5wK6X9uAQpyGwC4fPKNUAKK22p5DYZ103tqrwZ9VCDuLIIf6onM%2F0QC0D4lsdT2tIU2C2tMTksScrpnvivJc%2F%2FqnaNEuaRZB%2FsbANGRDEo%2BmD30J%2FwaWwAv84JbNA2ni%2BXyUCEHOk2wBwivKWVfXFM078QJR3ZgGLpN54tPp5r8%2BO5tksXAwARyFMLaQJvN70IkkDed3PT22r7ghXO%2BhOxdkYgsdUMFIl0zVCVEDZmDGeS9u3ngg7kJTvQRjFpPsKb7MJMIXpqodUhdeir6iYtGWBMrHaSOHbPx%2B2bkGgz02XytklDHj6TMOmdicoGOqUB%2FBVZLddZraN%2Bt20fDPPO8Ae%2FK6VnkE6QNB1vy12u6%2FT%2F%2F%2FcKgYlevoyjhRT%2B3oHypbnHnDpiM9KClglqbie0R9Ajy8cHkF6jT1Ji3i3Iup2HBeGw1HO1otxu6dpFWjMnenGU4iF7TXSc%2FDCZHswi4GUGidGDFGvYfIwgSb%2F98WOTqEpKmsd7FD5Az17PEzF%2FYv62MErBioKy%2B5n381fYZan9SlBy&X-Amz-Signature=b855a4321b250185b750452beec7bf9e90f526531b9b9cd9adefd46d31153aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEF4GCW5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo%2Fl6b2nO4j7wIsC8KTzwupzKNRTADSfoeFcqtx1nJJAiEAsxahGXcpkNKaLcl8IBAPJTD4FUGiP9dInEQiqRv1rvAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGOk335CB5cs7EmnMyrcAwokAOUXl87f5qFpjLo%2Frp7rNfdwikyktoaqBTHH0%2F%2Ffba1ALYM6bBOUQdVChW7PI6C%2BOdcenlQAB8XBRGgZTD%2BSIgyDEX4VFi2kNYgXmUYXTzUlPhHUq2jxptP68tvNBibVuPW8IQQUhcsTQztmyIYUdTmQlUtRZhkT%2B3TabX5gHjms71nGo7nt1sNtbUOJYEBDYdRbz905L9gt5lnBcbR92bazLZOoMgf9MEHbhT%2FQAtRVICMYnj90xP8OokXt7uGZpkx6n3VJpi1vPao6XKmJICq4eYnEpxX%2BGFBO39xzerNUuVfs5w4vHUMeJEMYF0WQXk5wK6X9uAQpyGwC4fPKNUAKK22p5DYZ103tqrwZ9VCDuLIIf6onM%2F0QC0D4lsdT2tIU2C2tMTksScrpnvivJc%2F%2FqnaNEuaRZB%2FsbANGRDEo%2BmD30J%2FwaWwAv84JbNA2ni%2BXyUCEHOk2wBwivKWVfXFM078QJR3ZgGLpN54tPp5r8%2BO5tksXAwARyFMLaQJvN70IkkDed3PT22r7ghXO%2BhOxdkYgsdUMFIl0zVCVEDZmDGeS9u3ngg7kJTvQRjFpPsKb7MJMIXpqodUhdeir6iYtGWBMrHaSOHbPx%2B2bkGgz02XytklDHj6TMOmdicoGOqUB%2FBVZLddZraN%2Bt20fDPPO8Ae%2FK6VnkE6QNB1vy12u6%2FT%2F%2F%2FcKgYlevoyjhRT%2B3oHypbnHnDpiM9KClglqbie0R9Ajy8cHkF6jT1Ji3i3Iup2HBeGw1HO1otxu6dpFWjMnenGU4iF7TXSc%2FDCZHswi4GUGidGDFGvYfIwgSb%2F98WOTqEpKmsd7FD5Az17PEzF%2FYv62MErBioKy%2B5n381fYZan9SlBy&X-Amz-Signature=54b4722dd5f69a672c92c84380d9697b8d297168ff3551db1bf10978e009cd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
