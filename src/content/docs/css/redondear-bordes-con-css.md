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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAHLURS7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfeyLTDLywVU68iBD0A0JpQIctHgtbku%2BJq3286U5AcAiAj8yqf0LJyJI%2FeZ%2F3KgD50h9Do4lpp2ka%2BChHZkQ1n6yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIQvdJ%2B5PHYeQhUeZKtwDqIKPYdH4qtanPFWbv9blixl2s5R7KJ2tWBnpgvT%2FrRl4PZ79GKXKbsayuGw8BGM0WFveDQp7vEwXBOioE%2B0regFaQoC2vSklSUq5BLcNe%2FbKJ9B%2BG3Z0UBsPwJ8VGUX002FkWPp91vDvq6PKYXbXR5fKlL6KT1M1Y2Whg1Xy0rLNfp2p%2BYYEFX5txikiXUZo%2FwFzmU0pSI1pnuSqOGnQDZP948vZ8RHzoeEEwZFrQHCbPigwlvgTP%2FEU%2FWSwgL9GZRP5UxqlhVIQBye1TuEwMFDK%2Fdp23jT%2Fvg3z2JwY1f8Uk7CziTINSKgNKjuucBHofb1EKQRXLL4po50rxIhHyzDpLvfwOZe58bBA1vZoj8ubZpYy22pFUO7p%2BclsCJPbFvaOLgt2oPvX5Rbg6Iusa9LHak8q3EtoX29RlJRUBxvbMi0BrRK2HiaknmIuniOpFI4VLCyDLv9mUajL9MGwRHGUbaiSaHyR2Sg1kZRzVKmpK3umBbJ7jNXM445by1PuFD%2FvjOmRA1trWNQHWdLR1nQw6otLW8s23Y51dAZ4OjzPoQZmha5hv8XSTtNqoIsmvbpmANdwW75dHP4Grqary1Kq2qQ%2BT4lcfJ3%2BqHoTFQVP9TUlBdVyWZdO7r0wg%2F7SyQY6pgGmG9%2FsYOK4%2BFhYZvtG8%2BKlBzNmhViGXAkyuziozs0zT8fEFi2xOQHCviTUqebNM0LVHNf28JwIdCjJ%2Fb728T9%2FPW%2B0V%2FoFhsQBZnqjikuc3yphrzrPp1gcrwf9wNQlZBox8CmOvYciIH7xy4anucNka1owwU9c3e%2BRhGhYJ1JtsijbILNXUYBR8e8hQnBhqRLbhRHAEoBKVvmCh7ErEU0bSJ%2FEUxtP&X-Amz-Signature=b4375b7da1b1f539dbbf5d3b919f84221908b4b55e7687c604afe465260bebbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAHLURS7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfeyLTDLywVU68iBD0A0JpQIctHgtbku%2BJq3286U5AcAiAj8yqf0LJyJI%2FeZ%2F3KgD50h9Do4lpp2ka%2BChHZkQ1n6yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIQvdJ%2B5PHYeQhUeZKtwDqIKPYdH4qtanPFWbv9blixl2s5R7KJ2tWBnpgvT%2FrRl4PZ79GKXKbsayuGw8BGM0WFveDQp7vEwXBOioE%2B0regFaQoC2vSklSUq5BLcNe%2FbKJ9B%2BG3Z0UBsPwJ8VGUX002FkWPp91vDvq6PKYXbXR5fKlL6KT1M1Y2Whg1Xy0rLNfp2p%2BYYEFX5txikiXUZo%2FwFzmU0pSI1pnuSqOGnQDZP948vZ8RHzoeEEwZFrQHCbPigwlvgTP%2FEU%2FWSwgL9GZRP5UxqlhVIQBye1TuEwMFDK%2Fdp23jT%2Fvg3z2JwY1f8Uk7CziTINSKgNKjuucBHofb1EKQRXLL4po50rxIhHyzDpLvfwOZe58bBA1vZoj8ubZpYy22pFUO7p%2BclsCJPbFvaOLgt2oPvX5Rbg6Iusa9LHak8q3EtoX29RlJRUBxvbMi0BrRK2HiaknmIuniOpFI4VLCyDLv9mUajL9MGwRHGUbaiSaHyR2Sg1kZRzVKmpK3umBbJ7jNXM445by1PuFD%2FvjOmRA1trWNQHWdLR1nQw6otLW8s23Y51dAZ4OjzPoQZmha5hv8XSTtNqoIsmvbpmANdwW75dHP4Grqary1Kq2qQ%2BT4lcfJ3%2BqHoTFQVP9TUlBdVyWZdO7r0wg%2F7SyQY6pgGmG9%2FsYOK4%2BFhYZvtG8%2BKlBzNmhViGXAkyuziozs0zT8fEFi2xOQHCviTUqebNM0LVHNf28JwIdCjJ%2Fb728T9%2FPW%2B0V%2FoFhsQBZnqjikuc3yphrzrPp1gcrwf9wNQlZBox8CmOvYciIH7xy4anucNka1owwU9c3e%2BRhGhYJ1JtsijbILNXUYBR8e8hQnBhqRLbhRHAEoBKVvmCh7ErEU0bSJ%2FEUxtP&X-Amz-Signature=f4fa6c2ecb88fde35b7e2141c68b55c8e6164c2b00c14da90184f6964c659ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
