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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUU247FN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeO4lWddVo2TPtHrFkdmIZVYddxUqyG7nZLOnRm7DhsAiAhWlx05aIPTnyAcqmORDJ3VpK4j%2B1Uth0j30GT%2FPVilCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiJVC%2Foq3QhZI3Vr7KtwDA3qixg3k72pne0GUfTzVCLEDKh47Jl8cJgK62osUAfBzqdC4NDiPFlZDdEQBL0TW9%2Bu%2Bp87yefYzN9xpNtiKTHIFbk3Wz7ykcqhN8a5l3KGII2eauN0MgQ0G3i12rrMRNwiHAAKyHHDdQmb6Me6v8uZatYzFwIWEzloalhylkTLeuk9F4Mr2oXXwRrYvwhMDvqxSk4KhBmD9ushrR2HrfatQFM0Gi%2BaaX2iw0eb8TlCNs0BbjncQeHEGkvFlaMhVttqt%2FIf7opuaSRD9YxCbNCx9tcWyDakU86hBfjDlmliofzt3jTTuYcqSBJfYdI42LTxKf58Hw0wkEnY1WE3O2WugLdIYya0NYLKZ%2BKd2yM%2BQbH2pW2K0%2FqRlmSz4v3vLFALIowcq0uKI%2BJjAkV6WbsTWibCZ0TNoOGE3DaNSanurknqYi66HoGfNsdwY73Vdq%2FtonkV4wbljxclHIibmnN0oOR2hvQ26YDHkhBHUhUYeWQVa6hrwKZGh5hd2tlWkO2X9sriBPCJAMU3gVhYp2nZKyGaKtp5Ma5VGrJFk0e%2FXdj8Eu4%2BhGqvOjUPtayTRmzcYAsLN9cEb7lmEuIDmQQBy%2BLZBnQpanMsXPv1oMJf7YMpP9vDgIMGQ8e0w%2BuzZyQY6pgEw2cvRcRfhNQg4yNvXpqksfqGiYQIyZg53%2FTrKD0WIZ%2FbKHC70n1CYpCIx9%2BjHUlMFq2M6it3ZESTifAHjxtS%2BaTkmWH3kXLSnILbMpnVjuFLyjn4mdW7pLahXOwMCI7%2BZZoqdxKgF5HH8nPiEElMcNQot5TIAgpga4uKCqc9HiVabAK2s8ftQJCyUY1oT1hUPYN9WVeoWxb7K2MklClcxprFf63O6&X-Amz-Signature=9cbf4f621a46668228cc4d4a339a7973e6898eaa74c9f106a015b68dec3b46de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUU247FN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeO4lWddVo2TPtHrFkdmIZVYddxUqyG7nZLOnRm7DhsAiAhWlx05aIPTnyAcqmORDJ3VpK4j%2B1Uth0j30GT%2FPVilCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiJVC%2Foq3QhZI3Vr7KtwDA3qixg3k72pne0GUfTzVCLEDKh47Jl8cJgK62osUAfBzqdC4NDiPFlZDdEQBL0TW9%2Bu%2Bp87yefYzN9xpNtiKTHIFbk3Wz7ykcqhN8a5l3KGII2eauN0MgQ0G3i12rrMRNwiHAAKyHHDdQmb6Me6v8uZatYzFwIWEzloalhylkTLeuk9F4Mr2oXXwRrYvwhMDvqxSk4KhBmD9ushrR2HrfatQFM0Gi%2BaaX2iw0eb8TlCNs0BbjncQeHEGkvFlaMhVttqt%2FIf7opuaSRD9YxCbNCx9tcWyDakU86hBfjDlmliofzt3jTTuYcqSBJfYdI42LTxKf58Hw0wkEnY1WE3O2WugLdIYya0NYLKZ%2BKd2yM%2BQbH2pW2K0%2FqRlmSz4v3vLFALIowcq0uKI%2BJjAkV6WbsTWibCZ0TNoOGE3DaNSanurknqYi66HoGfNsdwY73Vdq%2FtonkV4wbljxclHIibmnN0oOR2hvQ26YDHkhBHUhUYeWQVa6hrwKZGh5hd2tlWkO2X9sriBPCJAMU3gVhYp2nZKyGaKtp5Ma5VGrJFk0e%2FXdj8Eu4%2BhGqvOjUPtayTRmzcYAsLN9cEb7lmEuIDmQQBy%2BLZBnQpanMsXPv1oMJf7YMpP9vDgIMGQ8e0w%2BuzZyQY6pgEw2cvRcRfhNQg4yNvXpqksfqGiYQIyZg53%2FTrKD0WIZ%2FbKHC70n1CYpCIx9%2BjHUlMFq2M6it3ZESTifAHjxtS%2BaTkmWH3kXLSnILbMpnVjuFLyjn4mdW7pLahXOwMCI7%2BZZoqdxKgF5HH8nPiEElMcNQot5TIAgpga4uKCqc9HiVabAK2s8ftQJCyUY1oT1hUPYN9WVeoWxb7K2MklClcxprFf63O6&X-Amz-Signature=95e0992f554b2bdeed9675bc08baeec14c1b3d07b3c99b0caffba2370527a9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
