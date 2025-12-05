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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636L3RDHQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvu36YSc2IDIXAoKXmTZAP2aHhQfQDnrEp4qW7goYMjAiATFpk0KixJ4qSC3tBQ5NcIPhMO9YTT4T50E1uvETngzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM5kBDGLef1mznA5aEKtwDLua8q3stE3%2BFpN4IxBsEgyWqGDT1fcwOWDDDMa77Mtf0cqVbm%2FQgfdg1Di3kadbqTgCWM6GkiGrVMEMYDnnOep6SvPu96nlcAcdQ27dTG%2FKQugVHmRbTqGHOwd%2FcwDy0ZtVWAFyW8uVJ8ySvkHGOWNbFrHD6BkqcLkG1avo67eQULPYL8XmLERivSF4CNCuljEHRbi52%2FmaLPBa3RJHS8rHtw8kDy99j%2Feh0f9sbfw2Urpbogo6jSF2k%2FRIcBeGJVIu3tFXTApBaJ6QIORq3jGUF54TEYF0re6vQzYdHUTywqNL18pJd1VFqVgZWflq93%2BysXnNJl4JCHjSRBhMJXTz8d1k128xW7gCpJOVdIwnXmQOuNEwUpTu7sUKgs3Le0jNJMY0A1mjWRMKd09ofbyQP925ueHpLoj2PfAJk7bWt4PIH302pKvzZj%2FOnAu%2BfNVhAK6qzxqOXuXiizaoA2FSJuI61Qa4WUrVJRvkCm8WEmHGHt3bqxs9u760Akidk8pqUOQXZQQE9urj6FpP8uA0KHFRY8V2p2JVXF6GNAZwuYm%2BE97WMr%2BF9n7aXmpvd2E6Srrtcl1ZDW2pqUeM%2FAroTp6s5t4MjiPZjWpddbyzIGw7SudDrVN6f7aUw79PKyQY6pgHKuqJTf%2FaKKsVRq9bEOYZtx7GpumBFViev0Cjnf7oztm%2FgZXQPL4OONizK4uOkDly%2BMYjIBTDnHWaI3Mg348tebKtxJNf9WyHi%2B8iyaMfREB%2B4kUwi%2B5pkyJFaQYL6m%2FIr5WEIpLP37A7diZL6AQk1wzXysQ8%2BkY2EjAzkWmOBqr%2Fez8twj9Cvj1%2Bb3XpFI9xq1cOE8pFkDf312iwtklgCmjKPgUGo&X-Amz-Signature=042e4b56836ae5cadb0aa4fb30ce980c936558ea622accdf693bfbf754c04500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636L3RDHQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvu36YSc2IDIXAoKXmTZAP2aHhQfQDnrEp4qW7goYMjAiATFpk0KixJ4qSC3tBQ5NcIPhMO9YTT4T50E1uvETngzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM5kBDGLef1mznA5aEKtwDLua8q3stE3%2BFpN4IxBsEgyWqGDT1fcwOWDDDMa77Mtf0cqVbm%2FQgfdg1Di3kadbqTgCWM6GkiGrVMEMYDnnOep6SvPu96nlcAcdQ27dTG%2FKQugVHmRbTqGHOwd%2FcwDy0ZtVWAFyW8uVJ8ySvkHGOWNbFrHD6BkqcLkG1avo67eQULPYL8XmLERivSF4CNCuljEHRbi52%2FmaLPBa3RJHS8rHtw8kDy99j%2Feh0f9sbfw2Urpbogo6jSF2k%2FRIcBeGJVIu3tFXTApBaJ6QIORq3jGUF54TEYF0re6vQzYdHUTywqNL18pJd1VFqVgZWflq93%2BysXnNJl4JCHjSRBhMJXTz8d1k128xW7gCpJOVdIwnXmQOuNEwUpTu7sUKgs3Le0jNJMY0A1mjWRMKd09ofbyQP925ueHpLoj2PfAJk7bWt4PIH302pKvzZj%2FOnAu%2BfNVhAK6qzxqOXuXiizaoA2FSJuI61Qa4WUrVJRvkCm8WEmHGHt3bqxs9u760Akidk8pqUOQXZQQE9urj6FpP8uA0KHFRY8V2p2JVXF6GNAZwuYm%2BE97WMr%2BF9n7aXmpvd2E6Srrtcl1ZDW2pqUeM%2FAroTp6s5t4MjiPZjWpddbyzIGw7SudDrVN6f7aUw79PKyQY6pgHKuqJTf%2FaKKsVRq9bEOYZtx7GpumBFViev0Cjnf7oztm%2FgZXQPL4OONizK4uOkDly%2BMYjIBTDnHWaI3Mg348tebKtxJNf9WyHi%2B8iyaMfREB%2B4kUwi%2B5pkyJFaQYL6m%2FIr5WEIpLP37A7diZL6AQk1wzXysQ8%2BkY2EjAzkWmOBqr%2Fez8twj9Cvj1%2Bb3XpFI9xq1cOE8pFkDf312iwtklgCmjKPgUGo&X-Amz-Signature=11f48ea6ba310776b8ceaa31aa7ff423784f6d78a48c9901c6a5d8688ab2ff6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
