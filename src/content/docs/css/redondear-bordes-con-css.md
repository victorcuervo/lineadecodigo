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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZVDXPK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOXSwZ10oPWoDgq4LiMm4BytSuVDeRo5WWXT9zdY0LAIgJJAktDsFfVBZ9NGORAfDkl6coRNTj7kaPRx8FlI%2BrYQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJg6Z2Tcup4%2FsLEkySrcA%2Bx4zy0xhVe1PxR1JQXliKas8bKARSXpDihgacYoV9V3Q3Mw89m3cfHPAaFIPWWHhehleyE8rv4bba%2Bj2%2Ffs1wIylmdfPvDY8CBP%2BU%2FxigZNUnwuFLxqx3DiXu%2BhFHHXekpV3%2BTJ9FAKy9zMTNFJJ7As8sf8d%2F19xPaRnmXpInmOra2ZGIgnQvptYR3zgGWFwnZCIjxWQkBgAMoOnm8vpQLTa4RUyW9FYjn%2Bs75PBPHKLwsH8OLAQEYDiRMv3OpkLR2yoZe7Ud%2FUnL4%2FRDnlnNExw50h79nFysL1GNX3DTnawuV3mDt1QRBqkPWqLco5t%2B3Rwylyc6Wxc3Yt12FNkduRJFv6XDAO9YhbVcOME0FlMa06kbFgALuSSXNAFv1GkZWF83c4d1GSKuTpCSL6%2FJurF7IpRbhfJKEV%2BytnHUOpiba0XtC8S3uR2rtqqJa0BKNb4VymFKhvyUgWJ4PnVsR6I0c32JPUpC3C%2Br%2Fa8ZjDiyWPEOIpJ20wX5mDyNXpNy5wamaXt%2F4Nri%2F6buudJuJ8DJBUe0Hgf24J4NeLRBqFebgtYNX0UZJZvTy1sKyfTFIoYTUvRxwiBmYD9HaCVxQYoNI4R2%2FL9UXxI6QviovQLyP1ebgnA1RX6%2FzGMLPOyskGOqUB%2FlX8s5BAAE5cH36R9PQlLX1lIeRhM3Q5uTFOzZLlfIr9qVLtmy%2F6uhBFAZclH5WWu5%2FmiGJO4k%2B0Q9w2zEYnVRMPTehIY3w%2FIb50m84zhg0KTKOqyEHmQqVFqCMX0NN7%2FX31fiJezMonke3EliSvtefBm13aknNJQKiOJXSHk5wGZVil42NGKq9rKPXOtSY4LzTz8sQHit4BJVdhP4jVZDffAyzF&X-Amz-Signature=9d6d298bba8bec3d235db898a9c3388f0fe4afd846e645e1ad56272a11157453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZVDXPK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOXSwZ10oPWoDgq4LiMm4BytSuVDeRo5WWXT9zdY0LAIgJJAktDsFfVBZ9NGORAfDkl6coRNTj7kaPRx8FlI%2BrYQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJg6Z2Tcup4%2FsLEkySrcA%2Bx4zy0xhVe1PxR1JQXliKas8bKARSXpDihgacYoV9V3Q3Mw89m3cfHPAaFIPWWHhehleyE8rv4bba%2Bj2%2Ffs1wIylmdfPvDY8CBP%2BU%2FxigZNUnwuFLxqx3DiXu%2BhFHHXekpV3%2BTJ9FAKy9zMTNFJJ7As8sf8d%2F19xPaRnmXpInmOra2ZGIgnQvptYR3zgGWFwnZCIjxWQkBgAMoOnm8vpQLTa4RUyW9FYjn%2Bs75PBPHKLwsH8OLAQEYDiRMv3OpkLR2yoZe7Ud%2FUnL4%2FRDnlnNExw50h79nFysL1GNX3DTnawuV3mDt1QRBqkPWqLco5t%2B3Rwylyc6Wxc3Yt12FNkduRJFv6XDAO9YhbVcOME0FlMa06kbFgALuSSXNAFv1GkZWF83c4d1GSKuTpCSL6%2FJurF7IpRbhfJKEV%2BytnHUOpiba0XtC8S3uR2rtqqJa0BKNb4VymFKhvyUgWJ4PnVsR6I0c32JPUpC3C%2Br%2Fa8ZjDiyWPEOIpJ20wX5mDyNXpNy5wamaXt%2F4Nri%2F6buudJuJ8DJBUe0Hgf24J4NeLRBqFebgtYNX0UZJZvTy1sKyfTFIoYTUvRxwiBmYD9HaCVxQYoNI4R2%2FL9UXxI6QviovQLyP1ebgnA1RX6%2FzGMLPOyskGOqUB%2FlX8s5BAAE5cH36R9PQlLX1lIeRhM3Q5uTFOzZLlfIr9qVLtmy%2F6uhBFAZclH5WWu5%2FmiGJO4k%2B0Q9w2zEYnVRMPTehIY3w%2FIb50m84zhg0KTKOqyEHmQqVFqCMX0NN7%2FX31fiJezMonke3EliSvtefBm13aknNJQKiOJXSHk5wGZVil42NGKq9rKPXOtSY4LzTz8sQHit4BJVdhP4jVZDffAyzF&X-Amz-Signature=996222926cae087e458cdb651c1c7dfc11e49ee2d9342d5b3bab76209af89bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
