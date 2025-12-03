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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWVHMN4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFvE%2F0VlFZA%2BD2TnplcKsbT0fS%2BKp0OC4%2FNVYndFX69yAiARvv9CqjsLRFFWd43mar4Dkl1lkIVIG%2BWd9c%2ByLkz%2B1ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMSIc7d4uxcks3ssFVKtwDOSDbP8R6VCkkUAI1%2Fg3Ng%2Blk4Nj2KsMZHRjTSQmyQglmb%2FaMHc%2FbwBuNyitEHfaWkB5BdYskaVcQDSzcBuhFmgM%2BM6ZSJptKWcw00fJd%2BrCL95ySWhEe4LdYLQ8KJaeJp1vXFxHoTBdM4elb8suYpgc84oyuawShjarFHfE4CSGVt596PHX3LSjJhG8H%2BqIM%2FPPqDa4iYxxTsm4rJwX46GLZdfNqo5kSTMmyw0jaOjTcX%2BYESgwZdWa9HUaYwpxIH9WUz29JoZeWH63LHZdVIgp%2Bc91A9fTNLNYnBpP7bgCrrO0UU5w13Pp1qf80hpGfI2YW4AmBCYazL365oGoX0UeqmXxpKLlGvcyYojeG1Jvr3F1pT3J9%2BMqUiqb8yeRP%2Bwou4t6NPezImtiThrZGoYmJJuFbPhFALTQ11cSsMash8msz9y0uY41HKKYaCpCSpnmgDBrCf4BSl4cBMUtsfhJrv0Jhy3GzckTv7NGBBD%2BXfDKOUQMBiCk%2Bfw3ploWgfLF6UzH4%2BimjX6UetbJIvcOVqd4KdcrnaPHBIkliL0l6cMBdcWl99C%2BKwGMEG1KHftbkewXaAy2b5qbWFq1zbGNPXDJdnm%2BqEf5ItN8RzrZ2okMJ8ubuMDMBhZQwir3CyQY6pgFvYzyyEe9Z%2Bdm9B%2F%2BlCpcBCrCkSRY2wFj3o3bzfN4FoTUjqOahFmlGtxv4hXcvzp4X9Aj8MLmFpbimAONzvn0Et2KIVxwYNbeEJNWBUpQUDjYD%2B%2B0Eb%2FwpfTGm70eiiv%2FejpZCswPyma%2Bno4MRo9a6OnipzzzZy9BT9S1gz9IooYHzsmLx8CevLnAaqPk2EO5yNwVIDrV0VQOI7F8U8k6tNagV3npn&X-Amz-Signature=b924f46525a736586ceede12a940a71885adf12eded43ea241c73cdbef8e880d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWVHMN4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFvE%2F0VlFZA%2BD2TnplcKsbT0fS%2BKp0OC4%2FNVYndFX69yAiARvv9CqjsLRFFWd43mar4Dkl1lkIVIG%2BWd9c%2ByLkz%2B1ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMSIc7d4uxcks3ssFVKtwDOSDbP8R6VCkkUAI1%2Fg3Ng%2Blk4Nj2KsMZHRjTSQmyQglmb%2FaMHc%2FbwBuNyitEHfaWkB5BdYskaVcQDSzcBuhFmgM%2BM6ZSJptKWcw00fJd%2BrCL95ySWhEe4LdYLQ8KJaeJp1vXFxHoTBdM4elb8suYpgc84oyuawShjarFHfE4CSGVt596PHX3LSjJhG8H%2BqIM%2FPPqDa4iYxxTsm4rJwX46GLZdfNqo5kSTMmyw0jaOjTcX%2BYESgwZdWa9HUaYwpxIH9WUz29JoZeWH63LHZdVIgp%2Bc91A9fTNLNYnBpP7bgCrrO0UU5w13Pp1qf80hpGfI2YW4AmBCYazL365oGoX0UeqmXxpKLlGvcyYojeG1Jvr3F1pT3J9%2BMqUiqb8yeRP%2Bwou4t6NPezImtiThrZGoYmJJuFbPhFALTQ11cSsMash8msz9y0uY41HKKYaCpCSpnmgDBrCf4BSl4cBMUtsfhJrv0Jhy3GzckTv7NGBBD%2BXfDKOUQMBiCk%2Bfw3ploWgfLF6UzH4%2BimjX6UetbJIvcOVqd4KdcrnaPHBIkliL0l6cMBdcWl99C%2BKwGMEG1KHftbkewXaAy2b5qbWFq1zbGNPXDJdnm%2BqEf5ItN8RzrZ2okMJ8ubuMDMBhZQwir3CyQY6pgFvYzyyEe9Z%2Bdm9B%2F%2BlCpcBCrCkSRY2wFj3o3bzfN4FoTUjqOahFmlGtxv4hXcvzp4X9Aj8MLmFpbimAONzvn0Et2KIVxwYNbeEJNWBUpQUDjYD%2B%2B0Eb%2FwpfTGm70eiiv%2FejpZCswPyma%2Bno4MRo9a6OnipzzzZy9BT9S1gz9IooYHzsmLx8CevLnAaqPk2EO5yNwVIDrV0VQOI7F8U8k6tNagV3npn&X-Amz-Signature=b6887db89115acb147b99e1c7b3931dc8133a80bafcd2ce403302187c268efc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
