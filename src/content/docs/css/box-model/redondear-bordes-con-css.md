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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4X32O5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeGkRBjlSmgLSDYtr1BxaXCuaDUvXA0wvRC4Z2%2BcGsXAiEArU6yrfBQxdC9TDLqI4aCjPHkWVhSpUWMiF2uZmMoLScq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHyt3iaqnXZSKILKwircA8Qhf9in8Hkb7e46E548BfyyhJVqP3z24U%2FKEIk4qJOP4HJQXNbbDZGFuOkfYiIaNqJWprX7nGUtfyPN4ZuyrTyV%2F8niNx5AqEcCKI5Rf6bo57gxriuaOrB0U%2Bee5app4H6agWkoh%2FbdSfStma5p30cxMOE35Wwvo6fcQpw29w7yfxgIWfToqeO1vTgjd5Mqr5D5OviQ5guXf6U2OC9rnIPrZJYk1pOIcLsElOZewZKsD2oSQxIZBoVGhGC5fHST%2F7LT9PEd0NV%2BF8S8RXfsrlI3jiCK%2FA6W31r6TAGIW72ifgz22B7uUb4dN8x6R%2FXcGlH3YsTR%2FnYbLjjbuNeDhIk8JL3isXYqooTeyFapWbjGf%2BtkN7VyDoRXYpu8ulbNqC54XO%2BGOoASPmt8nf899JfWUxmSUCHtuNQIC43wL2y7JEgo7KW7rnn9JztRjbuhkBth%2Bub1PTXl6pxmEgzI%2BoBumM%2BCGiFV7llY5xi2KyQmq5mtOfkPQN6VzVMDVQBAGIl2pF3PBrDn3bInU01OiAZB9RthgAe1wPSXZHUgoz7mat13Ebe7PvIPrysfzJwDWvRMdXJK%2BVEiuAONDm6SVHAMZmQWZn8sD27h7UiTOBdV7Cq05DjzbVqrA9rnML%2BWiMoGOqUBUQcEYcAJT0f36sdQKgzmXRlqU7QReTGn1OoydUAifj3tBzK7B4JzBEUI%2BQTE5j1CqDKTAb%2F31ZL4V3icpyWDD34TQtCJfPLgRxRyJzM4SvuP02aBNrKvAdCRKwhZCerYlCdhZ2EeR%2BpBsJ6ImdRXo9T6VEUOu7JNAvzhpXZuHbp5MGmA%2FIVGf0eOdbwICVDGUfrwqRHfpCR6Q5nW3E0%2FKKN41MWa&X-Amz-Signature=ee5bb96e5c22abba2cdb24d78aba248e88c93377d23d5be997a5f5c74f5d7e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4X32O5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeGkRBjlSmgLSDYtr1BxaXCuaDUvXA0wvRC4Z2%2BcGsXAiEArU6yrfBQxdC9TDLqI4aCjPHkWVhSpUWMiF2uZmMoLScq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHyt3iaqnXZSKILKwircA8Qhf9in8Hkb7e46E548BfyyhJVqP3z24U%2FKEIk4qJOP4HJQXNbbDZGFuOkfYiIaNqJWprX7nGUtfyPN4ZuyrTyV%2F8niNx5AqEcCKI5Rf6bo57gxriuaOrB0U%2Bee5app4H6agWkoh%2FbdSfStma5p30cxMOE35Wwvo6fcQpw29w7yfxgIWfToqeO1vTgjd5Mqr5D5OviQ5guXf6U2OC9rnIPrZJYk1pOIcLsElOZewZKsD2oSQxIZBoVGhGC5fHST%2F7LT9PEd0NV%2BF8S8RXfsrlI3jiCK%2FA6W31r6TAGIW72ifgz22B7uUb4dN8x6R%2FXcGlH3YsTR%2FnYbLjjbuNeDhIk8JL3isXYqooTeyFapWbjGf%2BtkN7VyDoRXYpu8ulbNqC54XO%2BGOoASPmt8nf899JfWUxmSUCHtuNQIC43wL2y7JEgo7KW7rnn9JztRjbuhkBth%2Bub1PTXl6pxmEgzI%2BoBumM%2BCGiFV7llY5xi2KyQmq5mtOfkPQN6VzVMDVQBAGIl2pF3PBrDn3bInU01OiAZB9RthgAe1wPSXZHUgoz7mat13Ebe7PvIPrysfzJwDWvRMdXJK%2BVEiuAONDm6SVHAMZmQWZn8sD27h7UiTOBdV7Cq05DjzbVqrA9rnML%2BWiMoGOqUBUQcEYcAJT0f36sdQKgzmXRlqU7QReTGn1OoydUAifj3tBzK7B4JzBEUI%2BQTE5j1CqDKTAb%2F31ZL4V3icpyWDD34TQtCJfPLgRxRyJzM4SvuP02aBNrKvAdCRKwhZCerYlCdhZ2EeR%2BpBsJ6ImdRXo9T6VEUOu7JNAvzhpXZuHbp5MGmA%2FIVGf0eOdbwICVDGUfrwqRHfpCR6Q5nW3E0%2FKKN41MWa&X-Amz-Signature=1981e023eb1d842adf3888af4a5f5c8fb9ff5b64b559ec4ab967129e2b189a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
