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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667UJ7AFW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDys3XqPS469%2Fxmj78Mx2vjld8jDgR2Ii4wjoVX2KMfAIgJ7X%2BaaUv59SMh4UUQpmZa7daGYdlsCrGwhoSH5ttbS4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAHZX7MfNQusrNBu1CrcAztC3RMLU37PtyDmIbeg4LPhohOZOgSJ8kKJWZX0ikQhH4yyN%2BrwOGHRqmFAej%2BAjups8zB%2FP%2BEMYHU%2BY9vKyS3e3ReZzrUTqa0v9vhg6LzZxOdFeyc2VpNmgGbHQ9W4JPJmHcbdgbBKOZbITxFYrQ7ZR34LVXvmoSqwN7FO78QqSSr78MNHplXrVlBy7SJhFeg8tdMn8rI5qdvKKaWSX4yzqXPTwDYYx9mlAaU0QAr9FGv77EJ%2B64toKpvYNqUJ2pRINOqb0vD%2BTTq%2FgJ8WS8cLZU8579VCZkMEaDFkp5PPQIWxRGL95AgPXpPPbmlAmosZkpEaBVMXYV0%2FKpPUi4qsi1dQWmlWvatb0Wy6phXlM0uMWCjjoyXtJleg5sVhyQyOGJPcDIO2T9V17oMzE55Q8CMEHUS699k2Br6XJ7K5PxaEbNQsR0ZwLhd7jNtbX%2FwmZUoS1VmJel82sEhUpaaw6UsD%2FSzN7z8t0rXmnC1ikx%2FhLySEPGEDP6HtyAVOmhg%2FRJ64aRmOokYIY1vazM85KuYY%2BnD190gm6TjyhX2laRofP%2BXoZEaYXA%2BLaJHnZ8tKsJ%2FBNltG3VxHYA%2FqLfnjZwf3iGQgrgUjuJ2KSP6vyFXX4DgzQDQ0p58RMMOcicoGOqUBDUOSx6LKuFRGAMZ0gCY%2BR%2B7WAydtpMuqxGTd4iepM3EIJ4hOd3cDJtBGGVJFk3dCyeXhK8IyyOjI2wlElR3quIWfoqQprovTcJqFgATcGM%2FOFKc2XNaJcabCAv%2BV6qmX7p%2ByF5jXFtr%2BVstthoNML7AiMl%2FMOta3jXLCBZppd7%2Fi1SyswBDxKq%2FyuKOadtZyFrH9YxiethV6DsBBnywyXByS2zXQ&X-Amz-Signature=cd5a72c0f579588c13592af738979b7def859274240c75665c916c2564e2f71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667UJ7AFW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDys3XqPS469%2Fxmj78Mx2vjld8jDgR2Ii4wjoVX2KMfAIgJ7X%2BaaUv59SMh4UUQpmZa7daGYdlsCrGwhoSH5ttbS4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAHZX7MfNQusrNBu1CrcAztC3RMLU37PtyDmIbeg4LPhohOZOgSJ8kKJWZX0ikQhH4yyN%2BrwOGHRqmFAej%2BAjups8zB%2FP%2BEMYHU%2BY9vKyS3e3ReZzrUTqa0v9vhg6LzZxOdFeyc2VpNmgGbHQ9W4JPJmHcbdgbBKOZbITxFYrQ7ZR34LVXvmoSqwN7FO78QqSSr78MNHplXrVlBy7SJhFeg8tdMn8rI5qdvKKaWSX4yzqXPTwDYYx9mlAaU0QAr9FGv77EJ%2B64toKpvYNqUJ2pRINOqb0vD%2BTTq%2FgJ8WS8cLZU8579VCZkMEaDFkp5PPQIWxRGL95AgPXpPPbmlAmosZkpEaBVMXYV0%2FKpPUi4qsi1dQWmlWvatb0Wy6phXlM0uMWCjjoyXtJleg5sVhyQyOGJPcDIO2T9V17oMzE55Q8CMEHUS699k2Br6XJ7K5PxaEbNQsR0ZwLhd7jNtbX%2FwmZUoS1VmJel82sEhUpaaw6UsD%2FSzN7z8t0rXmnC1ikx%2FhLySEPGEDP6HtyAVOmhg%2FRJ64aRmOokYIY1vazM85KuYY%2BnD190gm6TjyhX2laRofP%2BXoZEaYXA%2BLaJHnZ8tKsJ%2FBNltG3VxHYA%2FqLfnjZwf3iGQgrgUjuJ2KSP6vyFXX4DgzQDQ0p58RMMOcicoGOqUBDUOSx6LKuFRGAMZ0gCY%2BR%2B7WAydtpMuqxGTd4iepM3EIJ4hOd3cDJtBGGVJFk3dCyeXhK8IyyOjI2wlElR3quIWfoqQprovTcJqFgATcGM%2FOFKc2XNaJcabCAv%2BV6qmX7p%2ByF5jXFtr%2BVstthoNML7AiMl%2FMOta3jXLCBZppd7%2Fi1SyswBDxKq%2FyuKOadtZyFrH9YxiethV6DsBBnywyXByS2zXQ&X-Amz-Signature=832a680e26e2f38374bfb1d2710e59015717abb5412904e04dc3b0fc2e0b91ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
