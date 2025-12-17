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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XFG64L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy4185SKOZIK%2BfaM1KCsm65w6N2THmVPXVRfKP97Y9fQIhAI%2BAGDELVeExhdEiuI%2Fqgu%2FN5AoMmyYv2VGGikuaLxq1Kv8DCHcQABoMNjM3NDIzMTgzODA1Igx9p2TdhkGKkWnG4IUq3AN0IgcEFSPX%2BTKiGoiPsfoSvAXpHIBePIutf0a8Ao%2FlVnLgRMDz6aWvYzhDvYRZ4ExW7Ipcx93itMIUyP2DCmh10yVaOqZfSUHUAC4htpfprXwuo61y2M25LIR2lcBr8Aubko50cmjbCP8cv9N0awEJaDX7lvmJj%2BY0TmFnXeaIwYz5BbITX0wAF%2BUdvbUib1wEjaemWWLwU0tXafKlwGETGZtJx%2BG6JUBZGk56TJb8O4AWy7Lg1jiQ%2FgSUaVmgdVJx44fDKosJykL3Zu6m0uGD5%2Fls7PX2xEDpu6ZlcwNI77xpzYDbCiqZVyecYioy5HzRxZ7b25mWCsZ5WUNF4fgnI4EpZ0PO%2F5si%2FTbYvTsZHihSSTPI%2BfOgyIS25b%2Fb9351Z4OYjSyiL%2BJFRMfJzs%2F4hY2WrN6KFXML0Rlsk0IjhvM1viUaV0Yqkno6XCqyO8tBGKgo9ndFqTRsFzgEUlwF5gVwNGH8JXWk5XE5hLDTzM4IxGW93fbvKE1V6OF50t2eHq8nw%2F0t%2F%2FnSJlvk54kl43qgyzXAsWnWA3rRvIGDRjnET1Y%2FwnQ4hZYAKL2H0YtS%2FyrVi0hieQqqcwrsbtNTbak%2FHU50A5Ha79Kkec1GDYUvMx%2FIdVRBAvB1mTDJgonKBjqkAW7bgqt4hPhz0plKFPmG3kVhafy8mCnHi4hKYWqhBnD3EZwPuiS2EIbQvI%2Fh8ecgliAXso8Fp7ACRToxlVOXV5DAfq2vWLlglLZBj1V%2Bo3wK%2BMbn1eIuw5gv%2BxgIe9xOz4VHyhCljkyNKeriL%2FqF%2FPXKHQY7yxEjKTbegBOYZPUsHlbOXBj65koz7f7D5wIsAIde8aGGcKpPZOLMZ9YPW%2Fao0Rhc&X-Amz-Signature=0438e0bee16719414728acfa6f03c22d6ffc124b55e11adc80f3507d1b917792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XFG64L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy4185SKOZIK%2BfaM1KCsm65w6N2THmVPXVRfKP97Y9fQIhAI%2BAGDELVeExhdEiuI%2Fqgu%2FN5AoMmyYv2VGGikuaLxq1Kv8DCHcQABoMNjM3NDIzMTgzODA1Igx9p2TdhkGKkWnG4IUq3AN0IgcEFSPX%2BTKiGoiPsfoSvAXpHIBePIutf0a8Ao%2FlVnLgRMDz6aWvYzhDvYRZ4ExW7Ipcx93itMIUyP2DCmh10yVaOqZfSUHUAC4htpfprXwuo61y2M25LIR2lcBr8Aubko50cmjbCP8cv9N0awEJaDX7lvmJj%2BY0TmFnXeaIwYz5BbITX0wAF%2BUdvbUib1wEjaemWWLwU0tXafKlwGETGZtJx%2BG6JUBZGk56TJb8O4AWy7Lg1jiQ%2FgSUaVmgdVJx44fDKosJykL3Zu6m0uGD5%2Fls7PX2xEDpu6ZlcwNI77xpzYDbCiqZVyecYioy5HzRxZ7b25mWCsZ5WUNF4fgnI4EpZ0PO%2F5si%2FTbYvTsZHihSSTPI%2BfOgyIS25b%2Fb9351Z4OYjSyiL%2BJFRMfJzs%2F4hY2WrN6KFXML0Rlsk0IjhvM1viUaV0Yqkno6XCqyO8tBGKgo9ndFqTRsFzgEUlwF5gVwNGH8JXWk5XE5hLDTzM4IxGW93fbvKE1V6OF50t2eHq8nw%2F0t%2F%2FnSJlvk54kl43qgyzXAsWnWA3rRvIGDRjnET1Y%2FwnQ4hZYAKL2H0YtS%2FyrVi0hieQqqcwrsbtNTbak%2FHU50A5Ha79Kkec1GDYUvMx%2FIdVRBAvB1mTDJgonKBjqkAW7bgqt4hPhz0plKFPmG3kVhafy8mCnHi4hKYWqhBnD3EZwPuiS2EIbQvI%2Fh8ecgliAXso8Fp7ACRToxlVOXV5DAfq2vWLlglLZBj1V%2Bo3wK%2BMbn1eIuw5gv%2BxgIe9xOz4VHyhCljkyNKeriL%2FqF%2FPXKHQY7yxEjKTbegBOYZPUsHlbOXBj65koz7f7D5wIsAIde8aGGcKpPZOLMZ9YPW%2Fao0Rhc&X-Amz-Signature=24f4013d7d6dcc03011dfb25f5ed1e026eec9ee780a63d53116fd1febf7189cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
