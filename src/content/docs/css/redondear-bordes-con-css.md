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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVSY5VM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqbNHqwAYf5eA5%2FQrFvw8m70f8YVuUQt%2BNLoMfOefi1gIgCt4g0%2FLqX8ghhSr3dmsBDOtJAOsKpTdJ%2FBv6MxZoMs8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIekwZUvxwm08B%2F3rCrcA5BHuy4OJwggb0DqnCuXbZRjFcEbaHAcXNjexFrOiKKQWPTHcmaj3suQzunBdFHsTeg6kyJcLWvjQOulZsouNlYu1rZmrrqAvsKYsyt%2Bfx5bGlE%2BzRonQ2ZWv2XkichZxwoozNk%2FO2O0c9kw3qnck4LuX5sWYBlB4a%2FbE9z9S7croV7xnTXKac1b17sLaJk0SxBC5feenHyf2Jh30lfEvzCf0qicU9agoVQNMus30v5oiTDVpUU9MpWZZoHvqEvthBwchFj7EKMk6%2FdsDwEY%2FZl3VDWBRi2iC6pCrhKrl40NhrI5Od5z7pZAlzD4ct4hRKcF0DdzVmDdEPztvqDvNFjHpih7CmHaP7yKoBnlXgGMAqkEXBc5A0kn9tZvJpDPJmENaSALZi1qqhbrFDU27sOWggXBP1uXbdfeAbVb1UCmiuCE%2BVsGXE5BUk2XXsCv2glT8KYRszEfuLElZcvmL6J9dPENEyuI%2F%2Bolj1NrUrjreSYRioGWzrlB%2FPihTRoEVe%2FdkcwO97q1ImsMJEN8xAQoTUiNFZBzFLzDXajNwc3U%2B8RfV6EUCixx1x71Z2EX51ekEdTC0HOQCzgxeYJUx5O51eAJX9MZxJyMiuPiqazvn57a71XGbEZWsFcoMPbD0ckGOqUBPP1ARZYDwMXpHJgvE5V7AT3zwp6H9ZTiLexOGq6WpiSyqt6U3zR%2FvPPWc2Ejio0%2B407TV%2Biufx4FoPEQAEbs3cHOxLViafvSNrfKuKoJxJ1TjQUvLChuajS%2BhRxMoJdCZsnU%2F2QABguQK2XBxEBMXo%2Ft3yDq2QjoF2Sb6D69tZjm02TWET2k0odYOw6L8YFzWzUeSKW42yC7z3hLwQMfyCt82Zda&X-Amz-Signature=d810a2e685e0c9c561f5a3474becc11bd87abd9c4f7400884d33736b6381d30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVSY5VM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqbNHqwAYf5eA5%2FQrFvw8m70f8YVuUQt%2BNLoMfOefi1gIgCt4g0%2FLqX8ghhSr3dmsBDOtJAOsKpTdJ%2FBv6MxZoMs8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIekwZUvxwm08B%2F3rCrcA5BHuy4OJwggb0DqnCuXbZRjFcEbaHAcXNjexFrOiKKQWPTHcmaj3suQzunBdFHsTeg6kyJcLWvjQOulZsouNlYu1rZmrrqAvsKYsyt%2Bfx5bGlE%2BzRonQ2ZWv2XkichZxwoozNk%2FO2O0c9kw3qnck4LuX5sWYBlB4a%2FbE9z9S7croV7xnTXKac1b17sLaJk0SxBC5feenHyf2Jh30lfEvzCf0qicU9agoVQNMus30v5oiTDVpUU9MpWZZoHvqEvthBwchFj7EKMk6%2FdsDwEY%2FZl3VDWBRi2iC6pCrhKrl40NhrI5Od5z7pZAlzD4ct4hRKcF0DdzVmDdEPztvqDvNFjHpih7CmHaP7yKoBnlXgGMAqkEXBc5A0kn9tZvJpDPJmENaSALZi1qqhbrFDU27sOWggXBP1uXbdfeAbVb1UCmiuCE%2BVsGXE5BUk2XXsCv2glT8KYRszEfuLElZcvmL6J9dPENEyuI%2F%2Bolj1NrUrjreSYRioGWzrlB%2FPihTRoEVe%2FdkcwO97q1ImsMJEN8xAQoTUiNFZBzFLzDXajNwc3U%2B8RfV6EUCixx1x71Z2EX51ekEdTC0HOQCzgxeYJUx5O51eAJX9MZxJyMiuPiqazvn57a71XGbEZWsFcoMPbD0ckGOqUBPP1ARZYDwMXpHJgvE5V7AT3zwp6H9ZTiLexOGq6WpiSyqt6U3zR%2FvPPWc2Ejio0%2B407TV%2Biufx4FoPEQAEbs3cHOxLViafvSNrfKuKoJxJ1TjQUvLChuajS%2BhRxMoJdCZsnU%2F2QABguQK2XBxEBMXo%2Ft3yDq2QjoF2Sb6D69tZjm02TWET2k0odYOw6L8YFzWzUeSKW42yC7z3hLwQMfyCt82Zda&X-Amz-Signature=1e926ede31c9bea0d14917acf1a47893ad162edeef2d60a6924dd0f9598e30d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
