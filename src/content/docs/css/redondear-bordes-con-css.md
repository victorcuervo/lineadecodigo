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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IEGUKX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpfrCPJPvbhj2W5jRC3je8w9pXewslVeoG8b8qgL7UVAiEAl7tRHFIG%2BLdZhthmlm6ixSyCdVtVLbbcXXnr9wXRYLYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIa%2F0tzvZMLl%2FmLs1ircAwLiL9hqlnBFvFUTJybxYSrhtSYA20eyCLKMx0LygF2CrMxb%2BpvgZWJZM2iEzhLKfHmPZ%2FIidqGT698l8fhaenJ1CM%2BWnkDLXEYXfuqm%2BjZb57%2F4DAi6lTguM3q%2FTrG9PbFixDNPL%2FTQphIX6g%2Fy5LvYjdHOSLG1%2FQ82N1cKNYTC6%2FG4%2FHuTiXGprBO8Li9WP7jAMv%2FwIFuLIPqkXTqNDI3iYKct0HJ6lAKCvYpGrlFy31MxxxAXPRTDXbr1ELVADR8L6LCpbIm7m7%2B%2F1TuCSFwqPyOiPy8rxn2g7uspAGmS9q3sh%2BC2pvKqJ5ww5hy3cgz%2FfbN6tt4XlX7WZN9R8qWxhAGWII0VSfhpu%2FGYdiw0bXYEi9yZqdXroQqyu%2BWGoJlYU0Az9LzdFyWfHGURPWwBZNyCRJJbg8dcr8R1LgeOiU1QeoJF8NJlNAU4SY%2FcZoL1tUB4Qcpetb0naBHnv%2BFeAHpxVNghrKGopgJ7TWCIWc9pc%2BdT8vE%2BTndffMZEFlzL3B0BvGXxpzdpsFGR6%2BO4GH5Pg%2FdWR9WIi7QVJJpUat%2FBZxvOj9TDfEM0OqVlErDawN4WcXLHg1Ql9W4UiRKKAGpkZhxRzqqSfQofysU4OXCds0JuWcaBS8J4MNbE38kGOqUBO0krOj1SyySuzB7U6U0Iy766jYdP%2BBmex4%2BZ6XAibqsDZ8pTLBCMs7GqkOS2DOn0HKvu4V1v0wNCXiUOQhEqMreRRZs1oSx7jq4BnCPm72g9j2kudX6Ud2%2Bmjer1gI7lkyHF3Z4lRYvF5%2FrLYg4E2Go1SITCPuMZTaLnxqVuhhqRUhbyu0FoWVQsroRH22MGDJF6Vr9amOST6MyD0543mZxBJ95n&X-Amz-Signature=42b0f7672b43e0b2a7fbdd4bfaddc618148e3022a99b2924249b4aa6011417b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IEGUKX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpfrCPJPvbhj2W5jRC3je8w9pXewslVeoG8b8qgL7UVAiEAl7tRHFIG%2BLdZhthmlm6ixSyCdVtVLbbcXXnr9wXRYLYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIa%2F0tzvZMLl%2FmLs1ircAwLiL9hqlnBFvFUTJybxYSrhtSYA20eyCLKMx0LygF2CrMxb%2BpvgZWJZM2iEzhLKfHmPZ%2FIidqGT698l8fhaenJ1CM%2BWnkDLXEYXfuqm%2BjZb57%2F4DAi6lTguM3q%2FTrG9PbFixDNPL%2FTQphIX6g%2Fy5LvYjdHOSLG1%2FQ82N1cKNYTC6%2FG4%2FHuTiXGprBO8Li9WP7jAMv%2FwIFuLIPqkXTqNDI3iYKct0HJ6lAKCvYpGrlFy31MxxxAXPRTDXbr1ELVADR8L6LCpbIm7m7%2B%2F1TuCSFwqPyOiPy8rxn2g7uspAGmS9q3sh%2BC2pvKqJ5ww5hy3cgz%2FfbN6tt4XlX7WZN9R8qWxhAGWII0VSfhpu%2FGYdiw0bXYEi9yZqdXroQqyu%2BWGoJlYU0Az9LzdFyWfHGURPWwBZNyCRJJbg8dcr8R1LgeOiU1QeoJF8NJlNAU4SY%2FcZoL1tUB4Qcpetb0naBHnv%2BFeAHpxVNghrKGopgJ7TWCIWc9pc%2BdT8vE%2BTndffMZEFlzL3B0BvGXxpzdpsFGR6%2BO4GH5Pg%2FdWR9WIi7QVJJpUat%2FBZxvOj9TDfEM0OqVlErDawN4WcXLHg1Ql9W4UiRKKAGpkZhxRzqqSfQofysU4OXCds0JuWcaBS8J4MNbE38kGOqUBO0krOj1SyySuzB7U6U0Iy766jYdP%2BBmex4%2BZ6XAibqsDZ8pTLBCMs7GqkOS2DOn0HKvu4V1v0wNCXiUOQhEqMreRRZs1oSx7jq4BnCPm72g9j2kudX6Ud2%2Bmjer1gI7lkyHF3Z4lRYvF5%2FrLYg4E2Go1SITCPuMZTaLnxqVuhhqRUhbyu0FoWVQsroRH22MGDJF6Vr9amOST6MyD0543mZxBJ95n&X-Amz-Signature=e867458d0456273b403fae8b9246f3120e17d702210874997fe04f0157a24063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
