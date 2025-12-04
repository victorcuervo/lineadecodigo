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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSHMVXS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCW1qHHKaIbyAvNj6JZhHvI5wOJly%2FbVEH87YOTnajhZAIgYwd%2FKtoqmLm18dpz%2FvQvl3P%2BLCRG9fpe%2FboQBMOc1bQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEtFPm9eeVBqEfVeUCrcAzcCYxtFHHsv88ostuTJD2oGtOeOL06Snh6jsBm9Lnj4puWWb1RyM6j26Vz%2BjuarKB4X3jHj%2BoEZqMFSI6fvzP8LcjRNyGyiPNKTftssLB7frOlDh3utZQ80hVpTsDLwcLfpZ0%2FJuX%2F9F1xp4r4YfJcb0yP7IzezUx8jQiifjg49AprQFK%2FVf2EV%2Fqm4clkeVHk7B%2BTYGGDbIZyEUBvyV%2BN7VTRp9kc15REOKlgj6dS35UB5amVwk%2FS%2FwtGvlOg2%2Bms1E7PfOhi%2F3tWMjccfg%2BfvRIpBnQ9wt1CCZ%2Fbgj51Ap%2Fktm2rvfx84YahMLwY1Vc50kT%2BtsN8jif4XNlwnzI1G%2FP4xDNyhxthP09K0kgMr6BmDWyrfUiJwW1syHR2x%2BGvJnKMk4ksKfifzZ7xwPURAOfja0SuTtF8X6hcBQ9ZJhinUQi%2Fyz3aa5twk%2Bu%2BA2suISP5ig3N3B75CBB3ryqF9RchX4x6zJdmsU0iU1yK4di7jPy3V%2FBYlcseeX1qZ6XayrldUZkjfRlL7g9Ra5Q%2F%2BcTc8KupRlPqmj6kNpkOmtQTq1OI%2Bysvuri7%2FdjSBAPKZHqM17%2FMeEmaNfMX152eMSqlLr1o0mk0Vf4H5ZDnDfegOob5HAx4kNf12MLGDxskGOqUBXTCKCZWBtnw3aYfTdHMkfYX4k4PHldPcfDWN9CD9AL7XKMg7ne%2Bv6cmT48Gw%2FsIcLRYmUcdUOTQKTg7uXvuIReIpbnav9UnmyfWUOGuVpFB2e5RYapxYyH2wu5XXBdWmseqh83nw%2FeVnyg7qVWSX3NV%2BAFOVZ5etoPiuHM9MEj01CtLCjQl3uUejZKav%2FYakOXrqaw%2BUhK7xC4upKlR28AM04ixk&X-Amz-Signature=e03925fbf1ebe95d043d756381d97613013db3685fec22778154663291348d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSHMVXS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCW1qHHKaIbyAvNj6JZhHvI5wOJly%2FbVEH87YOTnajhZAIgYwd%2FKtoqmLm18dpz%2FvQvl3P%2BLCRG9fpe%2FboQBMOc1bQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEtFPm9eeVBqEfVeUCrcAzcCYxtFHHsv88ostuTJD2oGtOeOL06Snh6jsBm9Lnj4puWWb1RyM6j26Vz%2BjuarKB4X3jHj%2BoEZqMFSI6fvzP8LcjRNyGyiPNKTftssLB7frOlDh3utZQ80hVpTsDLwcLfpZ0%2FJuX%2F9F1xp4r4YfJcb0yP7IzezUx8jQiifjg49AprQFK%2FVf2EV%2Fqm4clkeVHk7B%2BTYGGDbIZyEUBvyV%2BN7VTRp9kc15REOKlgj6dS35UB5amVwk%2FS%2FwtGvlOg2%2Bms1E7PfOhi%2F3tWMjccfg%2BfvRIpBnQ9wt1CCZ%2Fbgj51Ap%2Fktm2rvfx84YahMLwY1Vc50kT%2BtsN8jif4XNlwnzI1G%2FP4xDNyhxthP09K0kgMr6BmDWyrfUiJwW1syHR2x%2BGvJnKMk4ksKfifzZ7xwPURAOfja0SuTtF8X6hcBQ9ZJhinUQi%2Fyz3aa5twk%2Bu%2BA2suISP5ig3N3B75CBB3ryqF9RchX4x6zJdmsU0iU1yK4di7jPy3V%2FBYlcseeX1qZ6XayrldUZkjfRlL7g9Ra5Q%2F%2BcTc8KupRlPqmj6kNpkOmtQTq1OI%2Bysvuri7%2FdjSBAPKZHqM17%2FMeEmaNfMX152eMSqlLr1o0mk0Vf4H5ZDnDfegOob5HAx4kNf12MLGDxskGOqUBXTCKCZWBtnw3aYfTdHMkfYX4k4PHldPcfDWN9CD9AL7XKMg7ne%2Bv6cmT48Gw%2FsIcLRYmUcdUOTQKTg7uXvuIReIpbnav9UnmyfWUOGuVpFB2e5RYapxYyH2wu5XXBdWmseqh83nw%2FeVnyg7qVWSX3NV%2BAFOVZ5etoPiuHM9MEj01CtLCjQl3uUejZKav%2FYakOXrqaw%2BUhK7xC4upKlR28AM04ixk&X-Amz-Signature=bb6ba0ee010ee8b583d6856978dfabb5854283a5b955851f689d5ff9cc1b6ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
