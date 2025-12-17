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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNZIMP2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeb9j4YGX5U3Tb1%2FqxI7tOo4EI6Fo5Vaf6ien2ADJw1gIhAJfUGzGzwvZg50U5PqLDP3z37R0ws7qoUephpXnULRiLKv8DCHUQABoMNjM3NDIzMTgzODA1Igw1os8Z6Kp3MPt1Fowq3AP3ZU0GIS2lrmQpt5g8MYowpFb9GQKZGkHuv2g6liMVkqtggTBN3%2F7NQI6n4kFBm4zznRsmEAHeO0KY5xIfDPY2NDddpNZlh2GgoMW%2BuDr3b%2FLsMHzFfSKDzGttCtfFuLqXj4a54ZvGDK%2Bha5Rb7fjYJZAnm1x6cghMGCtEALB6yfs5W%2BEXqjKRf0SDB8PXPO5xjm0hLSprTwEeAfhJGoP0Ey6ZSc0MnXZoihgfmHNzCfC4iZD30FLPCrrE4cFWM%2BFfRgHX3xJzbQ6lMhED690p2s7iXpEMRVbZDojBNP7ONgl8Ba7RF23ix8ReOAydVTvUTvQeR1ih0bmtzm4VjQj0n5lfNI3OI4MzSfBy6XTlVrgoGZeU50PbLyumd2iRt%2Bqtv3W4YANKxQOkQDT9Qo7iiy9egIsa627TeeEcntSC4%2FWuKdMfusnViaVFRwdlNgL7rW0K3ACBEJCUHz8wecbhY7UrjwHCKgAFGnog6P3eS9ilpwiX7Zs%2BOWFoWfLngcPKW9g%2B1fHPrEp3a4JJU3kfqKlq9rdtgdSM93fLg4EIKtf5Di%2Bogr4%2Bd9f1WTLcXV9itzngDAPVnKmss2O7kS6SggwmvdlTF727%2BNJP%2FZh6P6H%2FbS6GSZAlY5PJEDD7zojKBjqkAbkFDGpfA5ugBOVMKzB6%2BEPYM0l%2Fp3EyqifLe5g7s806c2U4JsRKNHxlT2d7%2F5UegsPraJ7IQVBGYCJcTWqsjUgd%2FVV%2FzX%2BKYaUDE%2FI6SpkYIEWyiw9EaCLhGtnBDO0ACK7JRRntrqDVA%2F%2BfUzga3F9KRXgzwVIA96%2BuVmHxfV1faWupiC9kmYY9hFPSo22DKqqgibSDsos59tDYnjezg%2FSgoSks&X-Amz-Signature=7e3857b3b6541aa46651160d24b3606af0849899cdc2212d2deb4412b1a97217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNZIMP2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeb9j4YGX5U3Tb1%2FqxI7tOo4EI6Fo5Vaf6ien2ADJw1gIhAJfUGzGzwvZg50U5PqLDP3z37R0ws7qoUephpXnULRiLKv8DCHUQABoMNjM3NDIzMTgzODA1Igw1os8Z6Kp3MPt1Fowq3AP3ZU0GIS2lrmQpt5g8MYowpFb9GQKZGkHuv2g6liMVkqtggTBN3%2F7NQI6n4kFBm4zznRsmEAHeO0KY5xIfDPY2NDddpNZlh2GgoMW%2BuDr3b%2FLsMHzFfSKDzGttCtfFuLqXj4a54ZvGDK%2Bha5Rb7fjYJZAnm1x6cghMGCtEALB6yfs5W%2BEXqjKRf0SDB8PXPO5xjm0hLSprTwEeAfhJGoP0Ey6ZSc0MnXZoihgfmHNzCfC4iZD30FLPCrrE4cFWM%2BFfRgHX3xJzbQ6lMhED690p2s7iXpEMRVbZDojBNP7ONgl8Ba7RF23ix8ReOAydVTvUTvQeR1ih0bmtzm4VjQj0n5lfNI3OI4MzSfBy6XTlVrgoGZeU50PbLyumd2iRt%2Bqtv3W4YANKxQOkQDT9Qo7iiy9egIsa627TeeEcntSC4%2FWuKdMfusnViaVFRwdlNgL7rW0K3ACBEJCUHz8wecbhY7UrjwHCKgAFGnog6P3eS9ilpwiX7Zs%2BOWFoWfLngcPKW9g%2B1fHPrEp3a4JJU3kfqKlq9rdtgdSM93fLg4EIKtf5Di%2Bogr4%2Bd9f1WTLcXV9itzngDAPVnKmss2O7kS6SggwmvdlTF727%2BNJP%2FZh6P6H%2FbS6GSZAlY5PJEDD7zojKBjqkAbkFDGpfA5ugBOVMKzB6%2BEPYM0l%2Fp3EyqifLe5g7s806c2U4JsRKNHxlT2d7%2F5UegsPraJ7IQVBGYCJcTWqsjUgd%2FVV%2FzX%2BKYaUDE%2FI6SpkYIEWyiw9EaCLhGtnBDO0ACK7JRRntrqDVA%2F%2BfUzga3F9KRXgzwVIA96%2BuVmHxfV1faWupiC9kmYY9hFPSo22DKqqgibSDsos59tDYnjezg%2FSgoSks&X-Amz-Signature=a7dcacb8f453dea0707928a57197d752c19ee458582759fa3a0ebffcbe80737f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
