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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISXDVO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1bnfMzDlBKmt6PFLEPYFy0B0dN6CeWqK7gfa2BxovwAiEAh1UnDDkKPmwUtF4xE0cygEi56kGvizqpWKNntM2Offoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCOYSbi5gFcmazKG%2BCrcA2Yk6%2BldvrwySDvOMFLfxcAoRI2j0LKY%2FhxQ38lsi%2Bg55juMvd%2BSQ7tVKeu7pi7jRN%2Bc4veALehJyasTfUxxCPIKMpsFJoKwOZ9%2BAv%2FDs1CEw2pPIwZKkEGUckhmg37q86fjxn3oXeKCx3mQvCEGpkdcRUjzKFBhXbUV3tqGhHealer%2FcEcmsOD1v4MOHTYzZfhJXU6J815lHg%2BxIOk8JUM%2Ft%2Bi3ufRhsikpWpkFB2Y74e4fepzY3dK4C4J5z2uCZB%2Fd1NYQusAC4cw2zPAMXt5uxtEwu11PhpigFbkqK2JNibrptnSARo7Qu6Z0USLDcECaIxd%2BYVOhWN9d49h7Fvuw9SjDC5eYkSydSLwXw2Ix1tx%2B%2FbrmkMju40%2FsT3xT4ui4LWwsU25AFg664MjGoZMkEDudA6gen0OOwsf6Y6HmxS5PMSsHIxBXSh4pfgVeiEgxlXjeNXi1Jy75%2FhGsKmMxQKEmvmLJ0nFnwRKjGY2l2FYg86NkMGtNmrPonjZFs%2FhZO%2FaNETeuCtWTrx4nsYs%2Bkr5kC8V2uCu7QDotHzdil3y8EAUyKSQeQxg5cQ3uWPi6zrUNBquUMsp7vbiwgTxNi9Df%2FOM6i0nyVO70RDOewHHBc0nsBEzv%2FoqjMO7wicoGOqUB%2B3%2BiOBMdMsLz9HJJO9cx7oa443NwNgXQ5Rjikn0hkWPtgTeBHr4Q%2FmymM7xNsJIWCBB5uVn0Rq%2BVmWL7mqEbJjXCxZg0lqXJDud3ZMRbkjvl2CvjAsjjP9wKH%2FVnFFRVw5xrtwx0VyxooiIDSCc%2FH4WK6Z8cXjDyjsL5OZ0q9LZ8PX8d7cttmity%2BppcbZnWUYS4xjX5Yzb%2Fbv7DnThefdDQ3rNT&X-Amz-Signature=e0a2d632a64234f308d719ad04d260e4e9745538ef63668f494eba68ddf0f264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISXDVO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1bnfMzDlBKmt6PFLEPYFy0B0dN6CeWqK7gfa2BxovwAiEAh1UnDDkKPmwUtF4xE0cygEi56kGvizqpWKNntM2Offoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCOYSbi5gFcmazKG%2BCrcA2Yk6%2BldvrwySDvOMFLfxcAoRI2j0LKY%2FhxQ38lsi%2Bg55juMvd%2BSQ7tVKeu7pi7jRN%2Bc4veALehJyasTfUxxCPIKMpsFJoKwOZ9%2BAv%2FDs1CEw2pPIwZKkEGUckhmg37q86fjxn3oXeKCx3mQvCEGpkdcRUjzKFBhXbUV3tqGhHealer%2FcEcmsOD1v4MOHTYzZfhJXU6J815lHg%2BxIOk8JUM%2Ft%2Bi3ufRhsikpWpkFB2Y74e4fepzY3dK4C4J5z2uCZB%2Fd1NYQusAC4cw2zPAMXt5uxtEwu11PhpigFbkqK2JNibrptnSARo7Qu6Z0USLDcECaIxd%2BYVOhWN9d49h7Fvuw9SjDC5eYkSydSLwXw2Ix1tx%2B%2FbrmkMju40%2FsT3xT4ui4LWwsU25AFg664MjGoZMkEDudA6gen0OOwsf6Y6HmxS5PMSsHIxBXSh4pfgVeiEgxlXjeNXi1Jy75%2FhGsKmMxQKEmvmLJ0nFnwRKjGY2l2FYg86NkMGtNmrPonjZFs%2FhZO%2FaNETeuCtWTrx4nsYs%2Bkr5kC8V2uCu7QDotHzdil3y8EAUyKSQeQxg5cQ3uWPi6zrUNBquUMsp7vbiwgTxNi9Df%2FOM6i0nyVO70RDOewHHBc0nsBEzv%2FoqjMO7wicoGOqUB%2B3%2BiOBMdMsLz9HJJO9cx7oa443NwNgXQ5Rjikn0hkWPtgTeBHr4Q%2FmymM7xNsJIWCBB5uVn0Rq%2BVmWL7mqEbJjXCxZg0lqXJDud3ZMRbkjvl2CvjAsjjP9wKH%2FVnFFRVw5xrtwx0VyxooiIDSCc%2FH4WK6Z8cXjDyjsL5OZ0q9LZ8PX8d7cttmity%2BppcbZnWUYS4xjX5Yzb%2Fbv7DnThefdDQ3rNT&X-Amz-Signature=d6cd02c99a66dcf8e35589af8af61520d563738b2487aa98c3b8ab11dc83710c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
