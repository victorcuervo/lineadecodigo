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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X355X2CS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkxQSWEAKGjIrVJI0IXko%2Fuvin9osXVSH2KVNP95uOhAiEAz8UrlKaaRY9BJLxkhiVRQ9qlFhnGfteCWFCfLxrtjzAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLTGQ43C5yixX6dk0yrcA1MnWDIUilb%2FzWR8K4%2FQBvFSKr%2FKZJa1UG%2BmfDML%2F%2B%2B%2Frc1NX3C%2BlbUX31eXnV1NiAplUGDBEG0QtkhEgms1s2h5KYBbAqlFWBf6ERH31yI3h3sudd7fuAbmtm7FcHZWUgka%2BENhIRKOTNdCU3yS1dmmGAusEkypZydKWRkLNTENLJvwbhkSkcV69WX47PHnEbb6UEpMD1HrP8NqDqWSCFmnQeZG9UJ2pPaDhnGilyd4RmzazNOu0ro32xuVmLS%2BdhH14a3s1qSCZY%2FJxQU1c8SRZEjwhXEygSM46hCMqlqVvQGuGnciZu6PzAdgVzT6LimgziNmyev%2BNUPbbvvqvKayJKAlqoe2UNy4TDpOGjddxaCq4PoS5Nx3Tnfb2xrl%2ByNpo8Z6OX9mwnppaBH1s7dWGCAikbxSYyapcfXGf4QiLENgNSOBvkkKBZX9lc8YNQu34RGKpGgy1WPMI0XmOG1hvjQUn4ulSf2gynFuG3uck5RoT8dyou9aazQ0GSxmR6YtoUcMOwJmliegK2pYW1vXzqm%2FPaqCqluGL43dzS1ztFVAnu6DaWgaMPYpqsKVSHliYJUhZ6dJb4dkElPk6f%2FOHO6wWmn%2BDZMDBGtiuK3yOyAT75Q%2FQaPlFumyMI6ziMoGOqUBE%2BzB4i0FMJ6Z1zqX0a1eTpUZwzCUxsIPkgnhfO68MQFORgYbPW4Lhc3u6FEEzTzIaob0pR2qFUqCQARNZ7Xb%2BE%2FTVvlXDOj2Fq3vp8CgY1DY%2FPi1nQaI8WIj8mDAJP%2FVYwjyY8kOK9zDPwlGyow0YMs6RXzjXqoSsYO%2BI%2Bi6pZu8UAReIkzeh%2BHGYtej%2BHdXV8HHoyT96vNHd6zSOOd9obKMvQIL&X-Amz-Signature=f044c15cf8b328a64dd23f262f617f72f0d791fcb73e5c33af1266d329d03d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X355X2CS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkxQSWEAKGjIrVJI0IXko%2Fuvin9osXVSH2KVNP95uOhAiEAz8UrlKaaRY9BJLxkhiVRQ9qlFhnGfteCWFCfLxrtjzAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLTGQ43C5yixX6dk0yrcA1MnWDIUilb%2FzWR8K4%2FQBvFSKr%2FKZJa1UG%2BmfDML%2F%2B%2B%2Frc1NX3C%2BlbUX31eXnV1NiAplUGDBEG0QtkhEgms1s2h5KYBbAqlFWBf6ERH31yI3h3sudd7fuAbmtm7FcHZWUgka%2BENhIRKOTNdCU3yS1dmmGAusEkypZydKWRkLNTENLJvwbhkSkcV69WX47PHnEbb6UEpMD1HrP8NqDqWSCFmnQeZG9UJ2pPaDhnGilyd4RmzazNOu0ro32xuVmLS%2BdhH14a3s1qSCZY%2FJxQU1c8SRZEjwhXEygSM46hCMqlqVvQGuGnciZu6PzAdgVzT6LimgziNmyev%2BNUPbbvvqvKayJKAlqoe2UNy4TDpOGjddxaCq4PoS5Nx3Tnfb2xrl%2ByNpo8Z6OX9mwnppaBH1s7dWGCAikbxSYyapcfXGf4QiLENgNSOBvkkKBZX9lc8YNQu34RGKpGgy1WPMI0XmOG1hvjQUn4ulSf2gynFuG3uck5RoT8dyou9aazQ0GSxmR6YtoUcMOwJmliegK2pYW1vXzqm%2FPaqCqluGL43dzS1ztFVAnu6DaWgaMPYpqsKVSHliYJUhZ6dJb4dkElPk6f%2FOHO6wWmn%2BDZMDBGtiuK3yOyAT75Q%2FQaPlFumyMI6ziMoGOqUBE%2BzB4i0FMJ6Z1zqX0a1eTpUZwzCUxsIPkgnhfO68MQFORgYbPW4Lhc3u6FEEzTzIaob0pR2qFUqCQARNZ7Xb%2BE%2FTVvlXDOj2Fq3vp8CgY1DY%2FPi1nQaI8WIj8mDAJP%2FVYwjyY8kOK9zDPwlGyow0YMs6RXzjXqoSsYO%2BI%2Bi6pZu8UAReIkzeh%2BHGYtej%2BHdXV8HHoyT96vNHd6zSOOd9obKMvQIL&X-Amz-Signature=8502499b3f6e405188871671ff461eb704e4cd35658eed62ee4f532c7beb61bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
