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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G4LWRPP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiDznqkehvq0IBvuVZvtUJLM2todvdKN60doO3LNSMUAiEArD7uFPJwXTZikCqqWwFIE%2FcsMGGdKKqImB8dziFN9PEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDL1Q5VnNAUUOjRSzHCrcA97HMaCfgtufgDsI14acoYKaMdDEffo7V4s5W4Eo5lVi7jP5eMWUBy7C%2BHPvp2w0q8uodJNYLqdfqY%2B03NarQ6uD28hWlwETaBLQYxetD3L%2FYNGHXc8jpBLm6E4bV%2FqwypskfmcmgJdau70nXwmTwYbTikcQKBejJzbXEgvECzKF6F3vkyE0vF3RmhlkP0%2Fbeaq4qxX%2BfQyd4TkRwv77b7zzDem6eQmC03xNX3bPfBAig7ziq9a%2BuJIsLKvP2BzKOuCrcv3RBtd7oUt6qNK9rG6V0QSJfiZhG%2FoqG92UvEvEQ0kMMihbhmufd91Ji%2FQuJtcaZIOPSm0SRFTRUKI%2FrQVkCXJQE2ugMMeJLLHGfUzR805T5SD1tQ6uMLM0%2BqUdO%2FUHRiYBvOtV7XtCwDnoyu%2Flp%2FBovCZFeP1sl%2Bx2NdgocII63JWx4DmOhiEXbfiM%2F1wRVTsFBMJdUHl0OXqDg8F9yfYi9E0EOmpV%2BIaU3sELd7Lxi08L9iKS74Qmfi7NQqFhP2P%2BkfxhGh1IOs3%2FXQ05NBnm3JERf9lE%2Bcy%2B3bXp004R6OcIo1Jj7c1KsY3QEQEyQfAtySGRsdSXQ90trFsu1iBA56S2mW2yFy7QQS50ZFwcKeOK%2BT2iFiO2MLeXiMoGOqUBz1P%2BR241CgrbmPXnrQXz1K7b00hq%2FPXx6AysBT%2FXu0olCJcHyB5JuFPeTvNq2XXna5xf2JcC48wL7gm2%2FwMUESwZn7UDSw3X0YHo1cBOMUr4fqvvcswX77R14022%2FJLiqk0hpT3B27DCXR2GXc1Mtex3YutNXRllcPYklf3kGVOIaD9yXYFjlp%2Fxa0XhDLKYcYEcsxir3TodfXKx4enuY0ENWPaV&X-Amz-Signature=23ffb5d26dbc62636a6bb4840c4d3284ea08b63348880535951af076cd6114ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G4LWRPP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiDznqkehvq0IBvuVZvtUJLM2todvdKN60doO3LNSMUAiEArD7uFPJwXTZikCqqWwFIE%2FcsMGGdKKqImB8dziFN9PEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDL1Q5VnNAUUOjRSzHCrcA97HMaCfgtufgDsI14acoYKaMdDEffo7V4s5W4Eo5lVi7jP5eMWUBy7C%2BHPvp2w0q8uodJNYLqdfqY%2B03NarQ6uD28hWlwETaBLQYxetD3L%2FYNGHXc8jpBLm6E4bV%2FqwypskfmcmgJdau70nXwmTwYbTikcQKBejJzbXEgvECzKF6F3vkyE0vF3RmhlkP0%2Fbeaq4qxX%2BfQyd4TkRwv77b7zzDem6eQmC03xNX3bPfBAig7ziq9a%2BuJIsLKvP2BzKOuCrcv3RBtd7oUt6qNK9rG6V0QSJfiZhG%2FoqG92UvEvEQ0kMMihbhmufd91Ji%2FQuJtcaZIOPSm0SRFTRUKI%2FrQVkCXJQE2ugMMeJLLHGfUzR805T5SD1tQ6uMLM0%2BqUdO%2FUHRiYBvOtV7XtCwDnoyu%2Flp%2FBovCZFeP1sl%2Bx2NdgocII63JWx4DmOhiEXbfiM%2F1wRVTsFBMJdUHl0OXqDg8F9yfYi9E0EOmpV%2BIaU3sELd7Lxi08L9iKS74Qmfi7NQqFhP2P%2BkfxhGh1IOs3%2FXQ05NBnm3JERf9lE%2Bcy%2B3bXp004R6OcIo1Jj7c1KsY3QEQEyQfAtySGRsdSXQ90trFsu1iBA56S2mW2yFy7QQS50ZFwcKeOK%2BT2iFiO2MLeXiMoGOqUBz1P%2BR241CgrbmPXnrQXz1K7b00hq%2FPXx6AysBT%2FXu0olCJcHyB5JuFPeTvNq2XXna5xf2JcC48wL7gm2%2FwMUESwZn7UDSw3X0YHo1cBOMUr4fqvvcswX77R14022%2FJLiqk0hpT3B27DCXR2GXc1Mtex3YutNXRllcPYklf3kGVOIaD9yXYFjlp%2Fxa0XhDLKYcYEcsxir3TodfXKx4enuY0ENWPaV&X-Amz-Signature=d5629afae62c32354ed04c9b8bb61419348af2eafafb49750d8f9cf2715a8e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
