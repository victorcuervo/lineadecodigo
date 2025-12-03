---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGTXFU7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBBSKMzwsGsyu%2BOWTk3KV9AHpoqsGQn4q1hWItS8o0hGAiEA5Yv0IL%2Fqay5l%2FWVQQAYtBM4pWXHgN6eycKESZ7J9aBIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDH8ThnAia4DFR25b%2BCrcA%2Bfw5wfrnN2H8wKLJ8Ivuz89IDBgmgTd%2BCeBWZpmJlQquoMSSFm%2F%2FvCPnqmiTizGlkHN%2BaDRqHbEuT86eq5nwUgbOe%2F3A1rG5vWRG12Koju%2FzimwGtqwdMH4Bkape6CguuPDVSstGN6FUzkaRTzU2aOIPaHypVYZS7oPA6y5jy2sMd7leB%2FLCLy%2BiolZ%2Bjev8gGubQTaT7Jr6XV8oa5QBA%2FZ6WFkoS3fGHqXUCypjCtZYC56qC5F%2FrAvLSib3mZqM07J9IAUE6CRUJTy92VSQjAijtoG94E01V4uoYcFj1fmW%2FgaXRB1QQuscrCGHbb%2Fj3LUyq2k7m4o%2BmbjTKG4KQYe81ZDMsqa5KEUYp3C7tsCqYUXVEDSt%2FIVlN9S6m%2FmuOlyIfCLo19FNxhPTCHke3AcH58khoDrdtY4T1t8wOdd3ACygUKjrfK%2BjRp%2BwjjxKJQtWc2uk0ujeujUy7PRuaL8mgibj0cAADL0k2m4yJUDuVYC3ZwkBbKqOIhZLKbFvuNq27QFyhwA5U5hPaHPqmgGk7z3IovvPP8f7BNZz4sC8PBcg5IucOzhpOoqhCY2zj32w7%2FKaNVpHTaKTjX1rc2wX9LScaA9JNNSPSyuerJAEYfNSiL9Ztnm%2B6niMMb3wskGOqUBE8J4%2FDyIhLxUt6wTXb0ALe63CbJLXhfcntNectuf8PSLFdpIEf0sZRa0zAMbrs2Nqc1swD4sTqkoeCw6%2BC6F56QlH7ZlQTgIjRcA6CJQCa567tmoAQuKJFczF1vPgl%2Fz51Mgcpabexc%2FyEdI8Clin6gqOQdozF5ojfyBJ5Gv60JGiFq%2BYvFUEEJKuK%2BNLPYqmKyj7sFkkol4SD95pqLRztcAbXaT&X-Amz-Signature=ae9260495319005351cd37470bd43f9ea10391ea6221b682290a043c7894ad96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGTXFU7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBBSKMzwsGsyu%2BOWTk3KV9AHpoqsGQn4q1hWItS8o0hGAiEA5Yv0IL%2Fqay5l%2FWVQQAYtBM4pWXHgN6eycKESZ7J9aBIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDH8ThnAia4DFR25b%2BCrcA%2Bfw5wfrnN2H8wKLJ8Ivuz89IDBgmgTd%2BCeBWZpmJlQquoMSSFm%2F%2FvCPnqmiTizGlkHN%2BaDRqHbEuT86eq5nwUgbOe%2F3A1rG5vWRG12Koju%2FzimwGtqwdMH4Bkape6CguuPDVSstGN6FUzkaRTzU2aOIPaHypVYZS7oPA6y5jy2sMd7leB%2FLCLy%2BiolZ%2Bjev8gGubQTaT7Jr6XV8oa5QBA%2FZ6WFkoS3fGHqXUCypjCtZYC56qC5F%2FrAvLSib3mZqM07J9IAUE6CRUJTy92VSQjAijtoG94E01V4uoYcFj1fmW%2FgaXRB1QQuscrCGHbb%2Fj3LUyq2k7m4o%2BmbjTKG4KQYe81ZDMsqa5KEUYp3C7tsCqYUXVEDSt%2FIVlN9S6m%2FmuOlyIfCLo19FNxhPTCHke3AcH58khoDrdtY4T1t8wOdd3ACygUKjrfK%2BjRp%2BwjjxKJQtWc2uk0ujeujUy7PRuaL8mgibj0cAADL0k2m4yJUDuVYC3ZwkBbKqOIhZLKbFvuNq27QFyhwA5U5hPaHPqmgGk7z3IovvPP8f7BNZz4sC8PBcg5IucOzhpOoqhCY2zj32w7%2FKaNVpHTaKTjX1rc2wX9LScaA9JNNSPSyuerJAEYfNSiL9Ztnm%2B6niMMb3wskGOqUBE8J4%2FDyIhLxUt6wTXb0ALe63CbJLXhfcntNectuf8PSLFdpIEf0sZRa0zAMbrs2Nqc1swD4sTqkoeCw6%2BC6F56QlH7ZlQTgIjRcA6CJQCa567tmoAQuKJFczF1vPgl%2Fz51Mgcpabexc%2FyEdI8Clin6gqOQdozF5ojfyBJ5Gv60JGiFq%2BYvFUEEJKuK%2BNLPYqmKyj7sFkkol4SD95pqLRztcAbXaT&X-Amz-Signature=2ee5806694a7a6104107cf7d9afceaa3256551a50262ea2770e971bd2e1c2c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
