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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326ZZONP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfoz8bt%2BNyw8ikKCx4kdTCpnvuhbyLbDh8pxP0f9a3fAiEAzWbJHkVwoxvrJTCPl%2F7hWMVdYvj8YwIIutgNZ%2F8ns38q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGYb%2BFImP3J3laOesSrcAy3gM4%2F7RDIj0z%2B14ou0XM0T94NFC%2FpynTl02uENwHdt%2F6tza6KL%2B7Pdymlx6BSnYVVPrhPahBsM7mAKoy0uBv18HAbZd8JiHdBb6jD4dhrE%2FzIJEmektb8zYETWXXK4YpOIILX6640eparXSBVj19bdvVtFYKZ4%2FUifol52tkS8Pwnt0LLHhkmy3fRDeefeq9fdDm3vRPVdg0ivb3t8nsSLFXQeVs8z3yRki1j4tVFKcbxmnFNUzZdHPVVk%2BV8K2MQrT7CBXp%2FEuGrEWOmYiDkR74X96L2xYxhQ584JrOKk8DJnFbVZ8mC41b0za1pWbXANZn2FlwK0K%2BJdj9GL8t15GWX3w56PgLgtzHNTSJyqpIIQJ32IaJoMn9KjXg%2Bedrl54j65IU%2FyYrvuVnC7P1NW0ySG2ZJI8UfdOsTmt4t4oWKHPs%2F88hP23cNNpDIFMbICPox4n4tTf8CwVNcjsvzxpb6EHwFKNVz54rzpk%2BJVTus9ERgwuQQB%2BYOayFo2PwRxgywRv1tjkhLJvSIXFqKttRVERFjibCAHtHOFVRDtkbmioU1DTKpaDNpczEGqUcqY%2Fg%2F5FDUPASyUy%2FAteqeMDrc1BW%2Bx0SnwT3eY%2BhCyIU7H8VK0FuGUCyfcMLrSicoGOqUBDXunggrnwkZ0PwPSNiF3cXMmaVrCieo%2FwQheC2MKdkYFxoNC0wU7DW%2FgRVDMUt6XUTPBMITkrtJsd2AmGw8wngKg0JyPdjgT1vk2W8oBh9IBj2nNwX5UjREvkSbV%2BnJARzB%2FE%2FPiGBdBslUfTDqtSvckPKzbJwmifv8SOoGg5SJc2mdT2FltQp0Fg3xHWEpwtPJ2%2B79L3SU%2Fv9sCYAd4izjBYPbT&X-Amz-Signature=6cf6e66ad9acd2a7df5588b193885bd94c76463eadb60f470f95b480ee418f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326ZZONP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfoz8bt%2BNyw8ikKCx4kdTCpnvuhbyLbDh8pxP0f9a3fAiEAzWbJHkVwoxvrJTCPl%2F7hWMVdYvj8YwIIutgNZ%2F8ns38q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGYb%2BFImP3J3laOesSrcAy3gM4%2F7RDIj0z%2B14ou0XM0T94NFC%2FpynTl02uENwHdt%2F6tza6KL%2B7Pdymlx6BSnYVVPrhPahBsM7mAKoy0uBv18HAbZd8JiHdBb6jD4dhrE%2FzIJEmektb8zYETWXXK4YpOIILX6640eparXSBVj19bdvVtFYKZ4%2FUifol52tkS8Pwnt0LLHhkmy3fRDeefeq9fdDm3vRPVdg0ivb3t8nsSLFXQeVs8z3yRki1j4tVFKcbxmnFNUzZdHPVVk%2BV8K2MQrT7CBXp%2FEuGrEWOmYiDkR74X96L2xYxhQ584JrOKk8DJnFbVZ8mC41b0za1pWbXANZn2FlwK0K%2BJdj9GL8t15GWX3w56PgLgtzHNTSJyqpIIQJ32IaJoMn9KjXg%2Bedrl54j65IU%2FyYrvuVnC7P1NW0ySG2ZJI8UfdOsTmt4t4oWKHPs%2F88hP23cNNpDIFMbICPox4n4tTf8CwVNcjsvzxpb6EHwFKNVz54rzpk%2BJVTus9ERgwuQQB%2BYOayFo2PwRxgywRv1tjkhLJvSIXFqKttRVERFjibCAHtHOFVRDtkbmioU1DTKpaDNpczEGqUcqY%2Fg%2F5FDUPASyUy%2FAteqeMDrc1BW%2Bx0SnwT3eY%2BhCyIU7H8VK0FuGUCyfcMLrSicoGOqUBDXunggrnwkZ0PwPSNiF3cXMmaVrCieo%2FwQheC2MKdkYFxoNC0wU7DW%2FgRVDMUt6XUTPBMITkrtJsd2AmGw8wngKg0JyPdjgT1vk2W8oBh9IBj2nNwX5UjREvkSbV%2BnJARzB%2FE%2FPiGBdBslUfTDqtSvckPKzbJwmifv8SOoGg5SJc2mdT2FltQp0Fg3xHWEpwtPJ2%2B79L3SU%2Fv9sCYAd4izjBYPbT&X-Amz-Signature=e4e85e74eacc947638c8a579adec05f336eafe0f9f1ae777dd0bdb1f97b4bb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
