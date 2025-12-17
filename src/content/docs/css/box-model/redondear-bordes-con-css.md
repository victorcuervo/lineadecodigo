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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LO4YE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkYf3B%2BvzLJhffyJGm6eK0coUs810NN3aHHSt5dSnKPAiEAqxeTY%2Bxx9nx1GnZi6y%2FNeBD6UpLDssBTKtWD3yxPgL8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLuiuYnpM61JeZwL8CrcAz6%2BlXbuFVuDuPtTn3tmPQkKp3b6nC7WiuNdNdGkT%2FcIxiCNecR9AUKXT3aajDpYOBM%2FVTUxFjb7hLhAu0GOMptCAIArPRzReXaTraf1k4FLsLP0ITx5pfunrq0sRBWChPJbJVDVRx3hjoX0rjimwirQTgBimwf6Tvig1Cr9cDipazsp3Me20HaqFng4iYvgkePcIP1dIXRRFxojYrQ1tZGxszrOBdX7fszP4XonVmAEhrxBvEEbXEmg2JC1GAaWApA02w83TCr63Y2GOVBgzSRY4LDle0yQMSbE0xbhARCRUqvy%2B1IykTsAYErm0pDjCBAi1Brla1NHaZjt5YuviK1bEJ3b3CXFUwYAhRdT%2Bof6umaQMb4jZmEJST9ARMwUGId8Pds7wirk66cw8VXElIiFh2PXpsC3UP6Iwb4UOXnGCjR8ArkEnLlNTtZo4TrAMib9FTs1oHnxoLdYupz96u3skitPVWOysWnazdGtrD3d9cByU6l5IyP7Q45NltorIt7FzojyCpPf9e5TWdu9Je0IgtVNznucgyt732Ed7%2F%2BgTKGe7GOk7OYjD%2FrBg23kl9SnMWvxzNZ8aIEZv2LpBa7cU0su3VXO6nKa5VATuBNvujexc35OJmwQZo5TMPOdicoGOqUBcdAf%2B02pez2akICBtFDE6L1CGwzHhLs%2BCIsJvS5AEtd4j1eK%2Fxz%2BhU8HG4t5Uk%2Ft%2FBHNVgb%2FpGu6s8zzgOrdWmo57dJVZc8d8PPty3vTAEXnLw6QvbHGhP5AWs5buYff7CEmKOAXyEOaUhlH4yplVoCxV8iv07L5tsk8iF7Te7Fl62kYXxvSboSdpXJQH3qe%2B2zMSXKD%2FoGFAOBtvA9S%2B2P4oNrW&X-Amz-Signature=eb091b13023002f2ef05c6248d4cbbeac28b7c5b15eedc06aad6bd233333cd81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LO4YE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkYf3B%2BvzLJhffyJGm6eK0coUs810NN3aHHSt5dSnKPAiEAqxeTY%2Bxx9nx1GnZi6y%2FNeBD6UpLDssBTKtWD3yxPgL8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLuiuYnpM61JeZwL8CrcAz6%2BlXbuFVuDuPtTn3tmPQkKp3b6nC7WiuNdNdGkT%2FcIxiCNecR9AUKXT3aajDpYOBM%2FVTUxFjb7hLhAu0GOMptCAIArPRzReXaTraf1k4FLsLP0ITx5pfunrq0sRBWChPJbJVDVRx3hjoX0rjimwirQTgBimwf6Tvig1Cr9cDipazsp3Me20HaqFng4iYvgkePcIP1dIXRRFxojYrQ1tZGxszrOBdX7fszP4XonVmAEhrxBvEEbXEmg2JC1GAaWApA02w83TCr63Y2GOVBgzSRY4LDle0yQMSbE0xbhARCRUqvy%2B1IykTsAYErm0pDjCBAi1Brla1NHaZjt5YuviK1bEJ3b3CXFUwYAhRdT%2Bof6umaQMb4jZmEJST9ARMwUGId8Pds7wirk66cw8VXElIiFh2PXpsC3UP6Iwb4UOXnGCjR8ArkEnLlNTtZo4TrAMib9FTs1oHnxoLdYupz96u3skitPVWOysWnazdGtrD3d9cByU6l5IyP7Q45NltorIt7FzojyCpPf9e5TWdu9Je0IgtVNznucgyt732Ed7%2F%2BgTKGe7GOk7OYjD%2FrBg23kl9SnMWvxzNZ8aIEZv2LpBa7cU0su3VXO6nKa5VATuBNvujexc35OJmwQZo5TMPOdicoGOqUBcdAf%2B02pez2akICBtFDE6L1CGwzHhLs%2BCIsJvS5AEtd4j1eK%2Fxz%2BhU8HG4t5Uk%2Ft%2FBHNVgb%2FpGu6s8zzgOrdWmo57dJVZc8d8PPty3vTAEXnLw6QvbHGhP5AWs5buYff7CEmKOAXyEOaUhlH4yplVoCxV8iv07L5tsk8iF7Te7Fl62kYXxvSboSdpXJQH3qe%2B2zMSXKD%2FoGFAOBtvA9S%2B2P4oNrW&X-Amz-Signature=679ef468890dd105dc36090387684d49e185ff5c20ee259c8b1aa66124e537bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
