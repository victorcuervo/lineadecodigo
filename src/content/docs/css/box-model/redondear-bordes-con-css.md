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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACI4R6T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfwfh%2BwzfVXtqUZtSZao2YoK5rl6PZSfwFIta36kzagIgYB7wdlJ0O2mLyhkHMbINDE%2Bb3pCLmJzm34bYIHpM%2Bacq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCZtzI4KyzZnqgf8yCrcAx2rk6fRrJw%2FZ0tDx4kFWRnHP8SVfvScJF%2FtQ0MzVvume7b8WP52%2BzDIMR3yx4WHNqe%2BrAixyxOuhHTtEO2gqZtn%2BYDfMOw9C6j55uHZpoW%2Bbnhzu0KeE1uOHYnQf7jrb2EP7R2Bg3MYGFLYk91QUnzJ0UDgfWkdrCZlLLkZpSt%2Fn8NZ8ycowPdX%2BxeP9%2BVetvcSp8POG5l3pkmxeF7zpheXDZ5%2BenRcMGSDrU4AuQKRYI%2BM2ejY1PbNITlN2qtjR8%2Fe02ZncAq%2FK%2Fg6XF7UnX41g1jKynaWTOTZfShtqPXDDYhhh4GeCKO6H9vVjzcCFjKg2U9TTELP%2FWi%2FxMWqEg1N266ayIVh1kQfMWp0FgiuvLRamClIRGegoPiikuS0cti8cONcLnjRCBJWz6T0vWEfRA0fER7SQokUZUp5setXoLtYM%2FDBCzXzFnPSMGYiJpAtZ4dD2LkzJN4VCGdouOs40Snl0fnoXggiyrz8jbw3kbCkgIHKDmpeprG7HK7HCnHKp3iorjN4bCd7sNHVrFW3fBVsQksBoDYrYbZwv9ogFEqpdw2KA0VDIeuqUJPw2D7U23UIknci3t2tShj1gJ%2FZOYJ28dPdloNeqFuIy264V8Sf0ceBknRGL%2FnlMLbhisoGOqUBZyAzQyfqcwbgZ%2By23T0qrGM14Ebh5RJgzVN91Ns5QQwgM3VqYbBT2paqKfpuNz%2FW%2FKrT6dPai7lWS21DeZBaxor%2B9PUiNuT9PFbn2VX93V0F09r1vPV43PcGERMhP9fDgM4xnz%2BVReqRXkWZ%2BC7B0GKECsUxaBMIoj7m3T9LLmPypR2mpdUmLsagRAVH5qM6Z8unp%2BnKccB643mmBYAeHJNGSUxp&X-Amz-Signature=b14d6b38ae7742c669bb7652a9ec0e0d0470a0ba7272b70c82c18805f22d52f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACI4R6T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfwfh%2BwzfVXtqUZtSZao2YoK5rl6PZSfwFIta36kzagIgYB7wdlJ0O2mLyhkHMbINDE%2Bb3pCLmJzm34bYIHpM%2Bacq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCZtzI4KyzZnqgf8yCrcAx2rk6fRrJw%2FZ0tDx4kFWRnHP8SVfvScJF%2FtQ0MzVvume7b8WP52%2BzDIMR3yx4WHNqe%2BrAixyxOuhHTtEO2gqZtn%2BYDfMOw9C6j55uHZpoW%2Bbnhzu0KeE1uOHYnQf7jrb2EP7R2Bg3MYGFLYk91QUnzJ0UDgfWkdrCZlLLkZpSt%2Fn8NZ8ycowPdX%2BxeP9%2BVetvcSp8POG5l3pkmxeF7zpheXDZ5%2BenRcMGSDrU4AuQKRYI%2BM2ejY1PbNITlN2qtjR8%2Fe02ZncAq%2FK%2Fg6XF7UnX41g1jKynaWTOTZfShtqPXDDYhhh4GeCKO6H9vVjzcCFjKg2U9TTELP%2FWi%2FxMWqEg1N266ayIVh1kQfMWp0FgiuvLRamClIRGegoPiikuS0cti8cONcLnjRCBJWz6T0vWEfRA0fER7SQokUZUp5setXoLtYM%2FDBCzXzFnPSMGYiJpAtZ4dD2LkzJN4VCGdouOs40Snl0fnoXggiyrz8jbw3kbCkgIHKDmpeprG7HK7HCnHKp3iorjN4bCd7sNHVrFW3fBVsQksBoDYrYbZwv9ogFEqpdw2KA0VDIeuqUJPw2D7U23UIknci3t2tShj1gJ%2FZOYJ28dPdloNeqFuIy264V8Sf0ceBknRGL%2FnlMLbhisoGOqUBZyAzQyfqcwbgZ%2By23T0qrGM14Ebh5RJgzVN91Ns5QQwgM3VqYbBT2paqKfpuNz%2FW%2FKrT6dPai7lWS21DeZBaxor%2B9PUiNuT9PFbn2VX93V0F09r1vPV43PcGERMhP9fDgM4xnz%2BVReqRXkWZ%2BC7B0GKECsUxaBMIoj7m3T9LLmPypR2mpdUmLsagRAVH5qM6Z8unp%2BnKccB643mmBYAeHJNGSUxp&X-Amz-Signature=33f5f2845ace611753269c1c8e9cb4caa468d9be86004fcccc14dfbf46305d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
