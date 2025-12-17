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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MPHKCZC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCChuT1275RV5gOhmrMKqQebYz%2FXrssLdvHGFZPewghsQIgMVvMll3wFXfsrbjNjHAOOPD7loTthELt5q9vETfEZqUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPfFyVssy7IqvxOLZSrcA%2BXvW6q%2FzrucWVvLWcDxVS1sR6YhtT4PzAfdWVfo5LEK3R8K8gmwAvhIqJmiHkivR9l8gNnvUod89o%2FvB4h1GbDUXEuUpQpAzDFRMk1H3Prlbn8G982DHQmPfAGdf1QmlVN%2FoLQLvkXKNg0leBhybvvjz7VgXNOybrQYEC7CXDYYjDa%2F8aEhfmgUsbmeYR3i8I1DppmPJkd797aOQE1S3%2B9b6M9H%2BrwpXe1zhR61SJsVq2aJRY8nAbesb0oO%2BGDG%2B54johBOu0kXk54257ncn4j0wR2xz3PEnwAOsjv1X6xrSbiPhjH8ag9DnwDhEp8mBUZ6SbSMA%2F8v%2BVNMLW8N9KJyjbRKRXkR1nHJnuyfE3VRev7MqX%2BYG%2FDv3wPZjju5aoRYazROAajaopbsCSRNWA0pz6ERxfjoAItWOzcBn%2BdTrp2pCIKGtbwjBn%2B%2BYvnp1LMCSjOjoZEryOSHDyfwcOBGeyfXWe9AxhFVFeIECrCIQRlPceiHAYGrff8VNHtcnjcMnqLRJ71ah843LzH1y7hdyxTJCh9uKQoCksQe8t2BhvNjBx7PBx3ihy%2BSUmG%2Flf7SZQIvj9MuGU%2FNNCudDus9h01NpXhsB%2FQFaTip%2B3fKi9xnaZ7P6%2BfuQnBrMJKDicoGOqUBsDtMvfapJL8WRbdPKOYEea6U4W6hcJYzibgq3ieayMPdrjVzgVkgc26RcdxkZNGI7G5PjIb04EMnEz29hkxdAqBbrjBUV%2FNg5gSLPVacOy2pEuxVOYWqziTmP6DB0zMga5P90SZ3Ti7F0OszCmkWEZtmyfoWWxaPXH0Ub2wpFxwo3J3JuBH93LxTYZ%2BXOM4HExEzu4B9Ff1oaC4Cvic%2ByAowKpqI&X-Amz-Signature=d85fe0f8bc4a510493fee4dc21df51ef3fbaeee07f1508a382b7e0bf599c8442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MPHKCZC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCChuT1275RV5gOhmrMKqQebYz%2FXrssLdvHGFZPewghsQIgMVvMll3wFXfsrbjNjHAOOPD7loTthELt5q9vETfEZqUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPfFyVssy7IqvxOLZSrcA%2BXvW6q%2FzrucWVvLWcDxVS1sR6YhtT4PzAfdWVfo5LEK3R8K8gmwAvhIqJmiHkivR9l8gNnvUod89o%2FvB4h1GbDUXEuUpQpAzDFRMk1H3Prlbn8G982DHQmPfAGdf1QmlVN%2FoLQLvkXKNg0leBhybvvjz7VgXNOybrQYEC7CXDYYjDa%2F8aEhfmgUsbmeYR3i8I1DppmPJkd797aOQE1S3%2B9b6M9H%2BrwpXe1zhR61SJsVq2aJRY8nAbesb0oO%2BGDG%2B54johBOu0kXk54257ncn4j0wR2xz3PEnwAOsjv1X6xrSbiPhjH8ag9DnwDhEp8mBUZ6SbSMA%2F8v%2BVNMLW8N9KJyjbRKRXkR1nHJnuyfE3VRev7MqX%2BYG%2FDv3wPZjju5aoRYazROAajaopbsCSRNWA0pz6ERxfjoAItWOzcBn%2BdTrp2pCIKGtbwjBn%2B%2BYvnp1LMCSjOjoZEryOSHDyfwcOBGeyfXWe9AxhFVFeIECrCIQRlPceiHAYGrff8VNHtcnjcMnqLRJ71ah843LzH1y7hdyxTJCh9uKQoCksQe8t2BhvNjBx7PBx3ihy%2BSUmG%2Flf7SZQIvj9MuGU%2FNNCudDus9h01NpXhsB%2FQFaTip%2B3fKi9xnaZ7P6%2BfuQnBrMJKDicoGOqUBsDtMvfapJL8WRbdPKOYEea6U4W6hcJYzibgq3ieayMPdrjVzgVkgc26RcdxkZNGI7G5PjIb04EMnEz29hkxdAqBbrjBUV%2FNg5gSLPVacOy2pEuxVOYWqziTmP6DB0zMga5P90SZ3Ti7F0OszCmkWEZtmyfoWWxaPXH0Ub2wpFxwo3J3JuBH93LxTYZ%2BXOM4HExEzu4B9Ff1oaC4Cvic%2ByAowKpqI&X-Amz-Signature=aa216303160305e97a50a067b4f1131918d177762cc5a41e672fb9f6656ce989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
