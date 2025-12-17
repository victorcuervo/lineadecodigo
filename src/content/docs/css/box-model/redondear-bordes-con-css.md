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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F2M3BRL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFum821AawuUPyNojzfLaqzV2HtNXMOKLAj4DkZhcMO5AiAqnc7mLZiPqo9yBNXT%2Fy4Nw6hCCK2f6NAhA92INCrA2Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMYxqqvRGp0UB3SHehKtwDoCGPjjvfhNer3xnAxSZFmOG817zcIOf0MiM3toUYZxioJsSfpag0vzUqkl8wjey8NPyWeqAaXZR6jLriVnX541hedpmZJhgsTIXGEgVRTKrnONjwoICZWtk77J4JHmxud2bDRYa9%2F5PF%2FYA5FMvJDUG8CdZi0CFR35AtDq72TJzrEWMWhYGOsC%2FpCJSbTx%2Bb1GP1UzoXmFOb9q5fY0lmhjngP9s7HREK3pUh0Et0BVZjTx0Jz2JI%2BNSMUEuhewv1hw1r4eOpUMzVEXQacDZs1w9PHcIPgbUHiROy%2BCUJ02xAHZDXZNpsHOHnfausnAT%2BCgaLSnZY9fHSqjnq3Ffor7cR3%2BVvc21%2BpB3acYi46Nd%2F81rTYcgiJKjxgmfBQQnIvlKlWI07oXECSPCM1yaXqht2QZ5KAw3R4WO%2F5LjwJSUDThvJj0%2BsmxnNJu4m%2FM2%2Fp%2Bunm2YlaV8GLNUiU8vrj3iBjTTvghLk2yd%2FrB8prh2pFw5PIMBpk5XGo57%2F33Xl%2FRvHyGZt8CvYhH1vfji3%2Flqa%2F6Ai%2BM%2BdFr2CKMVIbI3L9HzNo8b80UZgqEAo5SXG%2FIamhKaDlg2CAp7tINmk3LIvnxUbF3wmIKCnAe4DubNtPPkMsHc1uH0HK7Mw8uCKygY6pgHcJt%2B2A%2BA7OFJEHP%2Fuj%2Byoo5ruPVk8k%2BVbHbQH5SIyVKE1DtTkwF93HlBJh%2BB7xGF6yuMiVhMRAZ1tbE%2F%2FobGPVqO0AaAuYrZM0WkEV%2F3887GxTM6gZIO9aRHXaybmW97HbLss2%2FySf7ReHdPslAR%2FwOwgDu%2FsCVEoXTMSL9Nh9fv6i51h87Tf17mWYYRUcjURgTwxPM32tlKhntwPofZtcMW0eXzx&X-Amz-Signature=b169dabda3cdfd5152bbb6002b905b93c9b2a99a6e0162f2354db429d55609d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F2M3BRL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFum821AawuUPyNojzfLaqzV2HtNXMOKLAj4DkZhcMO5AiAqnc7mLZiPqo9yBNXT%2Fy4Nw6hCCK2f6NAhA92INCrA2Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMYxqqvRGp0UB3SHehKtwDoCGPjjvfhNer3xnAxSZFmOG817zcIOf0MiM3toUYZxioJsSfpag0vzUqkl8wjey8NPyWeqAaXZR6jLriVnX541hedpmZJhgsTIXGEgVRTKrnONjwoICZWtk77J4JHmxud2bDRYa9%2F5PF%2FYA5FMvJDUG8CdZi0CFR35AtDq72TJzrEWMWhYGOsC%2FpCJSbTx%2Bb1GP1UzoXmFOb9q5fY0lmhjngP9s7HREK3pUh0Et0BVZjTx0Jz2JI%2BNSMUEuhewv1hw1r4eOpUMzVEXQacDZs1w9PHcIPgbUHiROy%2BCUJ02xAHZDXZNpsHOHnfausnAT%2BCgaLSnZY9fHSqjnq3Ffor7cR3%2BVvc21%2BpB3acYi46Nd%2F81rTYcgiJKjxgmfBQQnIvlKlWI07oXECSPCM1yaXqht2QZ5KAw3R4WO%2F5LjwJSUDThvJj0%2BsmxnNJu4m%2FM2%2Fp%2Bunm2YlaV8GLNUiU8vrj3iBjTTvghLk2yd%2FrB8prh2pFw5PIMBpk5XGo57%2F33Xl%2FRvHyGZt8CvYhH1vfji3%2Flqa%2F6Ai%2BM%2BdFr2CKMVIbI3L9HzNo8b80UZgqEAo5SXG%2FIamhKaDlg2CAp7tINmk3LIvnxUbF3wmIKCnAe4DubNtPPkMsHc1uH0HK7Mw8uCKygY6pgHcJt%2B2A%2BA7OFJEHP%2Fuj%2Byoo5ruPVk8k%2BVbHbQH5SIyVKE1DtTkwF93HlBJh%2BB7xGF6yuMiVhMRAZ1tbE%2F%2FobGPVqO0AaAuYrZM0WkEV%2F3887GxTM6gZIO9aRHXaybmW97HbLss2%2FySf7ReHdPslAR%2FwOwgDu%2FsCVEoXTMSL9Nh9fv6i51h87Tf17mWYYRUcjURgTwxPM32tlKhntwPofZtcMW0eXzx&X-Amz-Signature=f9214661500ec56f1f8ef65a2ec2781a207159722e0f4654827e564212133b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
