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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUXSIO3H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICguEpIHemtetlrtFSDbOw%2FkVLnyBFCuHzcXCsqnzRdnAiB41x0UqD9TLcp5i4znPXWnKvVWIIH1rtLkSCxyhWQxsiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2BTxPnMHlVU23KvnKtwDu5TQrL%2F%2FI2D1bqwv2GF8PM715XKrhWhBGbB5Hto9hNTUCOdJcynk%2Fm30K1MNav7sDwOTBf6jU1AbLDhE2W7yIGYk0o%2F%2BCU4HALfY%2F1nbtYBug6euiymF4deyK7EkX1a3hr7wugMShjfCWirXsp%2FiNSCrXYDDQ%2FRgGD2aZHds4DbUhfARTbqjQoMQsFgwywecW5QvMX9L6r7SV6njtM%2BHXLUdHsfWM886Eh5OM5kj2WSWG1n1nXDj2cF2al3Wzt6VZ3m0YO5KuPyQsDvtpA6KG%2FoAFzAU1ianJhduqBXA570%2B4j00L34clK6zRYOujEV1mQq52OwfptZ79LCijUvd9R%2B8porUWAa7nCHRHZ30pPoJKIVk%2FwQ1D8KQUUZ5MojQGwD%2FVlbgxuKWcOTK1RA9lI3F1XVBlEzc%2B4oVcsfyhGBgBcNDGo4Rxa8e5uvmLosfqon3h0wL6nO45X7HNdmeBKr4KUBl6qT3TceIV%2F2IkqJ4qYlSZLeDZvI5%2BV6H37VdK4TSeTOoZQNemeGi%2FwMu%2F%2FOQLEbOBAyJSegEpwAAecWpZw83NavofwVW4bnd2k8sigMo%2BFoKz%2F4q6U%2FGajJQ37KEibtydmicADr1KUcaEp8ur0bDR%2FIpyCW2Eekwx8fXyQY6pgHFfvKED%2FmydwXeMBC8Blz3cciAUgp7QCeO2GqM94d0wiJvb10z9PTBy3B5b5E5PNOM1kj3Vns2Zs1i6wz5H6O7wiZeGnWsC14KN81u4KbDnWDKPX51E4i55c8tE5A1AwRzX%2Bwu7geM4dglYM0riXZxYtEemU34iyQgu14vbIfwcEsNu1szYYpSkv7NMPcWgBfToDCfyK8LTDFRA2dBQ7NFDlRWwCzI&X-Amz-Signature=d2deb2b671d2403d50d05db7664864e0f4918589c4df2b346fb436b24c07c623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUXSIO3H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICguEpIHemtetlrtFSDbOw%2FkVLnyBFCuHzcXCsqnzRdnAiB41x0UqD9TLcp5i4znPXWnKvVWIIH1rtLkSCxyhWQxsiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2BTxPnMHlVU23KvnKtwDu5TQrL%2F%2FI2D1bqwv2GF8PM715XKrhWhBGbB5Hto9hNTUCOdJcynk%2Fm30K1MNav7sDwOTBf6jU1AbLDhE2W7yIGYk0o%2F%2BCU4HALfY%2F1nbtYBug6euiymF4deyK7EkX1a3hr7wugMShjfCWirXsp%2FiNSCrXYDDQ%2FRgGD2aZHds4DbUhfARTbqjQoMQsFgwywecW5QvMX9L6r7SV6njtM%2BHXLUdHsfWM886Eh5OM5kj2WSWG1n1nXDj2cF2al3Wzt6VZ3m0YO5KuPyQsDvtpA6KG%2FoAFzAU1ianJhduqBXA570%2B4j00L34clK6zRYOujEV1mQq52OwfptZ79LCijUvd9R%2B8porUWAa7nCHRHZ30pPoJKIVk%2FwQ1D8KQUUZ5MojQGwD%2FVlbgxuKWcOTK1RA9lI3F1XVBlEzc%2B4oVcsfyhGBgBcNDGo4Rxa8e5uvmLosfqon3h0wL6nO45X7HNdmeBKr4KUBl6qT3TceIV%2F2IkqJ4qYlSZLeDZvI5%2BV6H37VdK4TSeTOoZQNemeGi%2FwMu%2F%2FOQLEbOBAyJSegEpwAAecWpZw83NavofwVW4bnd2k8sigMo%2BFoKz%2F4q6U%2FGajJQ37KEibtydmicADr1KUcaEp8ur0bDR%2FIpyCW2Eekwx8fXyQY6pgHFfvKED%2FmydwXeMBC8Blz3cciAUgp7QCeO2GqM94d0wiJvb10z9PTBy3B5b5E5PNOM1kj3Vns2Zs1i6wz5H6O7wiZeGnWsC14KN81u4KbDnWDKPX51E4i55c8tE5A1AwRzX%2Bwu7geM4dglYM0riXZxYtEemU34iyQgu14vbIfwcEsNu1szYYpSkv7NMPcWgBfToDCfyK8LTDFRA2dBQ7NFDlRWwCzI&X-Amz-Signature=948b8094d7d5ff69441e0fb3bb7451d1172810cda6363cbf3e9b7157f89a5db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
