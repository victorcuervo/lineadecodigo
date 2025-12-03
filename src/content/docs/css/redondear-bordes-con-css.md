---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YIP3QAS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFohTu%2BZQxde02%2FXgVI2RbdWitLCK%2BthdwJYnmFH3k8kAiBcAL4oB8IbZH%2BD9KnJhID5fUlcuBhRgk0qi8ZreS8iLCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM7znFf1LY8%2BOELMsYKtwDV5AcrjbkaTO7QcyIOTsytJypqNUwyLQXsTL4fFkRJ6eQ5Vv6WbfZziRbs5v9FB%2FeFMJ8ePg8Q0YtRtNkAqXfsmeVTnPYZk3%2BJBjGTX5bnw3dZSbdsQo0zNRf1JC5MBIA%2BP7FR0yTQgzjXegfdP%2BG6dRBBx3FTQGHpO08bNeet%2F3Bggq8lKYjnVZ8OhjLZgCKVmFS%2FjAjqwdSH2mmmOUoTz6KLVW1p2Ns1EL5RZiim4h%2BRy8H%2FEg0%2F%2B81EJoxxLOYtfDKqq%2BsWoifQG%2FghWPMOMnd0BH9p6iLgvmirhS3X4prji%2FodmHdZguROoc%2Frh0pZQB3FX4clzsRiJM%2FpH8nR04WleIBspA3ze0XD%2F8kdVRoWu%2FQuHU9NWVTf3BfZ3toU9mgnzmhQI986oqJTJQcCeIrrOieCQ9u6r6XUokD89iRebDd9kxF0DyYCUcor11MuapVkg0h%2FQoKRNWLx%2Bk4aYd0aCGXzCeLXm7wR86j4qAEZGRnqs%2By86IB2v%2FZ4hrsqW%2Fpq1tWzdGzeZjAd1iMNQ2o%2BQEOMdGai2Iu%2BwcxzPW9pA%2FG0Gm2uGHS53Uilc%2BOf%2FXBaZN7adfubkLrRGnVax2DGdQ9vpfnbo4WUqeWM61B0SC%2B7MmewWwug%2BMwhb7CyQY6pgHIhnmKBp8F8e%2Bnqw6I5p%2FUdkc1FURi2uwTSY80zVaUCy6JDPqcwQXM6wrxhLxHm14N9YTz3rrrES9akH%2BCU6iqyeWEe%2B0z95NHLhF6ZxVo20XI9LQJHTtAQ57%2Br79gnXVAS4SH%2FWWdShqWZYSxEKR4x7k%2BNwAchn8PXXkKo20r1Hwp9odbDwRsvLoyOKl4EGrle%2FY5v0Ll7zhg7l5eWQUH6yK6warj&X-Amz-Signature=8b47fe863b66d58d96f34b71ac500e90c0d5915b5fbdf1106804837a181b1249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YIP3QAS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFohTu%2BZQxde02%2FXgVI2RbdWitLCK%2BthdwJYnmFH3k8kAiBcAL4oB8IbZH%2BD9KnJhID5fUlcuBhRgk0qi8ZreS8iLCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM7znFf1LY8%2BOELMsYKtwDV5AcrjbkaTO7QcyIOTsytJypqNUwyLQXsTL4fFkRJ6eQ5Vv6WbfZziRbs5v9FB%2FeFMJ8ePg8Q0YtRtNkAqXfsmeVTnPYZk3%2BJBjGTX5bnw3dZSbdsQo0zNRf1JC5MBIA%2BP7FR0yTQgzjXegfdP%2BG6dRBBx3FTQGHpO08bNeet%2F3Bggq8lKYjnVZ8OhjLZgCKVmFS%2FjAjqwdSH2mmmOUoTz6KLVW1p2Ns1EL5RZiim4h%2BRy8H%2FEg0%2F%2B81EJoxxLOYtfDKqq%2BsWoifQG%2FghWPMOMnd0BH9p6iLgvmirhS3X4prji%2FodmHdZguROoc%2Frh0pZQB3FX4clzsRiJM%2FpH8nR04WleIBspA3ze0XD%2F8kdVRoWu%2FQuHU9NWVTf3BfZ3toU9mgnzmhQI986oqJTJQcCeIrrOieCQ9u6r6XUokD89iRebDd9kxF0DyYCUcor11MuapVkg0h%2FQoKRNWLx%2Bk4aYd0aCGXzCeLXm7wR86j4qAEZGRnqs%2By86IB2v%2FZ4hrsqW%2Fpq1tWzdGzeZjAd1iMNQ2o%2BQEOMdGai2Iu%2BwcxzPW9pA%2FG0Gm2uGHS53Uilc%2BOf%2FXBaZN7adfubkLrRGnVax2DGdQ9vpfnbo4WUqeWM61B0SC%2B7MmewWwug%2BMwhb7CyQY6pgHIhnmKBp8F8e%2Bnqw6I5p%2FUdkc1FURi2uwTSY80zVaUCy6JDPqcwQXM6wrxhLxHm14N9YTz3rrrES9akH%2BCU6iqyeWEe%2B0z95NHLhF6ZxVo20XI9LQJHTtAQ57%2Br79gnXVAS4SH%2FWWdShqWZYSxEKR4x7k%2BNwAchn8PXXkKo20r1Hwp9odbDwRsvLoyOKl4EGrle%2FY5v0Ll7zhg7l5eWQUH6yK6warj&X-Amz-Signature=d429ddf2a45f52ab4051134ecbeb3a93d7c0b0496c2b0c6149c2b94b93bb3d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
