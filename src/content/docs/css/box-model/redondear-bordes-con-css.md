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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLB6UKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZxqbk7OMIfWNakAXSD2UbBEC4D%2BOj%2BCL7UG%2FQR6q93AiEAxXNy3vFxDJBmZ8HtXiYAFNdF%2F2iIHdolP%2FXtuSKfLEYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnpmGwm1yQYWBmNQircAwRYS3D3aFMc3A67vJJDiauN515CyN3hAqfQZwHXMWnkBXq7GLCJJwMTTh6WG8%2Bcp%2F3zMK%2Bebu6VjX8u0uTcZeZxFPl6JQWezO7nLN69kdjZ20xjsrFI1BjADf5rF5j%2BXYSWDEyvDhEcmw1CL%2Fkat1T%2BpXA7N1ZUH02hTTmNDyb1T7QL%2FubwRsUBtGWQ5luTblKUBXRfglLskOE9FUE4Ke%2FOQUugRir%2FZ1SdhLwvyKeAicYYX4YO9zWHjAGv4MG5X87S5VtKx1JSVIP8iDLxo0ZDEP9Vw4kS5h4qBs5j71NzcsuAublBweo5QdOM%2BwL9rSmtZ73NFS8j3Jvn1kYKK%2B7luR%2B7RfIaOehMI3PQf2iDSAhiOWProVh28cspinwsaBFAgRNN15fDZJ34laN51xvZavEVtTlH9aW9sRGJGTwCaqdPUTC1OcyusObXpQ9jhnJ5h2Hx7g8vfsZMyLGJhuAYyAUjU6t2Jdnbcdc0JWzmFncQuMQqcnbpB6o7mgH7qh%2FUKNQfAAG18gogTM8Q3npNy0PGiCf0OSF%2BONDZso11RBeZgQ4z%2BLNRpwGcPMyXXzCNH1A5g9PIvdDaGyAzjlLdeX2kdWir%2FitjhLCsUu4YwNL%2BOhwdB6mUb0TSMM2ei8oGOqUBDe3SS7Fc%2B2QPtB5C6dhP9DjnGU%2BAcBEnRjy35Lf7uElDBltfHuOmO7Oix7LCfDKe5MvvSG0XCtfk1TX%2BkdAeEwIVPcemw%2FClH0aC1a1SswvQ8J%2FW9YhbuXAv9rZM65exYoqt%2FFRFHoN7UMTcVQKtyVP1ldGcH6MZ5bgIBIqMCzjLO8u8K61CQJGtONJLFwhwmpJvDajxfC263EKg8mo6WcFjuUFl&X-Amz-Signature=9b88a70f610a7238748252520e16bd25ff652f9a09d506c0e9552ae0438b60e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLB6UKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZxqbk7OMIfWNakAXSD2UbBEC4D%2BOj%2BCL7UG%2FQR6q93AiEAxXNy3vFxDJBmZ8HtXiYAFNdF%2F2iIHdolP%2FXtuSKfLEYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnpmGwm1yQYWBmNQircAwRYS3D3aFMc3A67vJJDiauN515CyN3hAqfQZwHXMWnkBXq7GLCJJwMTTh6WG8%2Bcp%2F3zMK%2Bebu6VjX8u0uTcZeZxFPl6JQWezO7nLN69kdjZ20xjsrFI1BjADf5rF5j%2BXYSWDEyvDhEcmw1CL%2Fkat1T%2BpXA7N1ZUH02hTTmNDyb1T7QL%2FubwRsUBtGWQ5luTblKUBXRfglLskOE9FUE4Ke%2FOQUugRir%2FZ1SdhLwvyKeAicYYX4YO9zWHjAGv4MG5X87S5VtKx1JSVIP8iDLxo0ZDEP9Vw4kS5h4qBs5j71NzcsuAublBweo5QdOM%2BwL9rSmtZ73NFS8j3Jvn1kYKK%2B7luR%2B7RfIaOehMI3PQf2iDSAhiOWProVh28cspinwsaBFAgRNN15fDZJ34laN51xvZavEVtTlH9aW9sRGJGTwCaqdPUTC1OcyusObXpQ9jhnJ5h2Hx7g8vfsZMyLGJhuAYyAUjU6t2Jdnbcdc0JWzmFncQuMQqcnbpB6o7mgH7qh%2FUKNQfAAG18gogTM8Q3npNy0PGiCf0OSF%2BONDZso11RBeZgQ4z%2BLNRpwGcPMyXXzCNH1A5g9PIvdDaGyAzjlLdeX2kdWir%2FitjhLCsUu4YwNL%2BOhwdB6mUb0TSMM2ei8oGOqUBDe3SS7Fc%2B2QPtB5C6dhP9DjnGU%2BAcBEnRjy35Lf7uElDBltfHuOmO7Oix7LCfDKe5MvvSG0XCtfk1TX%2BkdAeEwIVPcemw%2FClH0aC1a1SswvQ8J%2FW9YhbuXAv9rZM65exYoqt%2FFRFHoN7UMTcVQKtyVP1ldGcH6MZ5bgIBIqMCzjLO8u8K61CQJGtONJLFwhwmpJvDajxfC263EKg8mo6WcFjuUFl&X-Amz-Signature=e255f16cb31c55f5d1911b0eaf12a9af11b7fee20dd585e7b59f3cb1f0c4e267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
