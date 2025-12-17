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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7D2PFMO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO7GYfuY7pq%2FBBDTyebHHRt6m8jmc06S9QnKVYEs6HVQIhAMDYuVy%2BSklfSW8VR5lLnSjKalsCaMFZNteNfa4heYzSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKV%2Fp6Ac8Q7CFTI0sq3APYhRmyzMWdkv9%2BNZH4FltZipWzPUh7IfezD5g7chX0Bcqu7urwqwbZiDPrrrpIsmmCAkDqwXmXNwfOADX%2FXaXehTz9BLiSeY61At2SaJN7NYSmJIYjArqx6qOfysbFFV4%2FoXaet%2FhqqK3XALl6m9nKAsmkN9fuwDhqQTUQ5u1HHL6riMHovN1aatjzo8j5NJnv8Zr1Jrmfn%2B07Rlf9bBq3bLKNuDvpHtRzodHJOpPKI1FL%2B33E1dlPYEwyQPe8RXvJkjOaVMv6hyWbwdA1ej%2Bg2ESUMYajE%2Bc8mYjRK34dJPwK7J%2F78NX4xG8I%2Fr%2FTAuagDolj4RybFk0sKuKC0XRl1nVO1KqYep0A9d2M%2BaRFGJLyc41BqJ0bNyoFz10oZ2SI0GVuqGMJiMTqFfzwoDgLS4awWikALammvr0B%2FK1SYulJfQPLfP1cKBzSU%2FEji9t9zEOJRDX%2FDNW2x20WWnMgPS0HA7nq4gDc%2F33v85oSaRoW%2B4cDhGDS0qwsaM0%2FjCiuEsyMGkjsy2UIzOcYziRXWEZZbs2epIIRAK1sDsxoM71XA1nSkSCKED%2Fn2qn%2BI282GLg3Xvws1dCy13j1fahsHezkEp3NeoMRI71YH6ZflZx66zE4euYQW2Y5%2FjC6n4vKBjqkAUi7U%2BtYh2Yvlipe1CxuIO1PGwdo%2B%2F7tbDVoIPj3as5kIitUSJ6xPOXGrL%2FRBkiyaBrbpZzGjJKS2e7IwoAZJ4k1kBp992fdOaweL8shCMzIdLu%2BoIHMEUZVViTTx%2FdvzWeMwPO9bKd0CwsOoTt1An08mIYlONv1SYmoKd5RIpT%2BqNsHVVdNZvR%2BQ4dtwTTjLc2ZlxNa8d3lZ3QsUNnk3ZLiii4H&X-Amz-Signature=102e3dce699f7c8ed7d46534d874fd5d1df69dd9c0078d98bc92fa79e1603c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7D2PFMO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO7GYfuY7pq%2FBBDTyebHHRt6m8jmc06S9QnKVYEs6HVQIhAMDYuVy%2BSklfSW8VR5lLnSjKalsCaMFZNteNfa4heYzSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKV%2Fp6Ac8Q7CFTI0sq3APYhRmyzMWdkv9%2BNZH4FltZipWzPUh7IfezD5g7chX0Bcqu7urwqwbZiDPrrrpIsmmCAkDqwXmXNwfOADX%2FXaXehTz9BLiSeY61At2SaJN7NYSmJIYjArqx6qOfysbFFV4%2FoXaet%2FhqqK3XALl6m9nKAsmkN9fuwDhqQTUQ5u1HHL6riMHovN1aatjzo8j5NJnv8Zr1Jrmfn%2B07Rlf9bBq3bLKNuDvpHtRzodHJOpPKI1FL%2B33E1dlPYEwyQPe8RXvJkjOaVMv6hyWbwdA1ej%2Bg2ESUMYajE%2Bc8mYjRK34dJPwK7J%2F78NX4xG8I%2Fr%2FTAuagDolj4RybFk0sKuKC0XRl1nVO1KqYep0A9d2M%2BaRFGJLyc41BqJ0bNyoFz10oZ2SI0GVuqGMJiMTqFfzwoDgLS4awWikALammvr0B%2FK1SYulJfQPLfP1cKBzSU%2FEji9t9zEOJRDX%2FDNW2x20WWnMgPS0HA7nq4gDc%2F33v85oSaRoW%2B4cDhGDS0qwsaM0%2FjCiuEsyMGkjsy2UIzOcYziRXWEZZbs2epIIRAK1sDsxoM71XA1nSkSCKED%2Fn2qn%2BI282GLg3Xvws1dCy13j1fahsHezkEp3NeoMRI71YH6ZflZx66zE4euYQW2Y5%2FjC6n4vKBjqkAUi7U%2BtYh2Yvlipe1CxuIO1PGwdo%2B%2F7tbDVoIPj3as5kIitUSJ6xPOXGrL%2FRBkiyaBrbpZzGjJKS2e7IwoAZJ4k1kBp992fdOaweL8shCMzIdLu%2BoIHMEUZVViTTx%2FdvzWeMwPO9bKd0CwsOoTt1An08mIYlONv1SYmoKd5RIpT%2BqNsHVVdNZvR%2BQ4dtwTTjLc2ZlxNa8d3lZ3QsUNnk3ZLiii4H&X-Amz-Signature=6dccc654c6aaf236c0beec0839adf04159da643f1579db6f2bd5692498ded959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
