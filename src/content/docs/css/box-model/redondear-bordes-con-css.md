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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEMLU5N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwU9%2BSTkQRZS6fWoegdO3ol%2Fbyn%2F3Fw%2FwEZ9z%2BhQ3VsgIhALD2V7eXQGiAE2dBncYPMzUTIlAThejqvUsfFHlPgLJQKv8DCHwQABoMNjM3NDIzMTgzODA1IgzWchKRzWhjela0Tj0q3AO5v128oe477US4ZQ%2FfuBwazEv7oOEGhOKeSzd2phAaFnonhymyOKoQJDbR9%2Fcku%2FLl4gZetOS25RrVvSNoBj4vg43YSmedZ%2B3uEbLhjW1mqZKrKFYnKwws8NVsUv%2FCBVckO8syQhIqpJkMwekAUlzMgHIQ%2BItdpqYJz2uI9Mz1%2FZyz7ibugl0%2Bcy77B3vf5pZT6JAiuc4ksoYB2OEvniC2QQKaCMfyHDxWg4zyobf0ZO2g0v52ZWmEeillSdanFlnKs4SNSaX%2F25nel6WD1BKtdoOcroNMI080O8Fa9N%2FU4pX7Tf9Z7FPlyKXHbOSYGkrSB8NOr2AyBYk13Dl6ePy0mhN9zajn%2F8NCYwRNQzTnyER%2BTULltBPBHzUHPa31%2BGIvQPzLn1hGS3OcupfePt8IiWF4pRtUlRZtXAk1LS9K3Wx%2FB7iPbprf6oEle07DeZtEhee3QwmeDJGObR%2BQr9QDsxLwYhYluVrydvTEcKYn0tmPCJtBs7Y0BicotSHDcUmcN6iWuTEPwSVV8vjjpHlIepM4Gxba2LVRTW9gMIHcC1xAeRJffhFhaUB8CT5Cj%2BR7lQaXJX9Rl6%2Fa11xJztgT9mo4Gfes8RZI0cuDc3fVFVZ5LK%2F5NfT%2BO90XizD0jorKBjqkAQLG3TnWXfEQqn4DixaOgmgdceImEg%2Fg50uibqWZh4qplrpHNh4X9sbXx2nRxoIvKgpmuCViRVNEiziEpaEHBvpheGiIJq8RLE113BSbGwk%2FlrC7hH7oVaI2WSisjoOZiAG66IYLm5ULJ1B1E29dgSF7OL%2FIcTgpGrm3uNrCTEOwYO7vYM47UxtJYFi10DhoW%2BeJD8gEHyROXYR%2FjuYny%2F%2FZ1QOZ&X-Amz-Signature=6166ce5f68e3550c715fb4916fc97219a91496a1db8f28f11c468a1646010925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEMLU5N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwU9%2BSTkQRZS6fWoegdO3ol%2Fbyn%2F3Fw%2FwEZ9z%2BhQ3VsgIhALD2V7eXQGiAE2dBncYPMzUTIlAThejqvUsfFHlPgLJQKv8DCHwQABoMNjM3NDIzMTgzODA1IgzWchKRzWhjela0Tj0q3AO5v128oe477US4ZQ%2FfuBwazEv7oOEGhOKeSzd2phAaFnonhymyOKoQJDbR9%2Fcku%2FLl4gZetOS25RrVvSNoBj4vg43YSmedZ%2B3uEbLhjW1mqZKrKFYnKwws8NVsUv%2FCBVckO8syQhIqpJkMwekAUlzMgHIQ%2BItdpqYJz2uI9Mz1%2FZyz7ibugl0%2Bcy77B3vf5pZT6JAiuc4ksoYB2OEvniC2QQKaCMfyHDxWg4zyobf0ZO2g0v52ZWmEeillSdanFlnKs4SNSaX%2F25nel6WD1BKtdoOcroNMI080O8Fa9N%2FU4pX7Tf9Z7FPlyKXHbOSYGkrSB8NOr2AyBYk13Dl6ePy0mhN9zajn%2F8NCYwRNQzTnyER%2BTULltBPBHzUHPa31%2BGIvQPzLn1hGS3OcupfePt8IiWF4pRtUlRZtXAk1LS9K3Wx%2FB7iPbprf6oEle07DeZtEhee3QwmeDJGObR%2BQr9QDsxLwYhYluVrydvTEcKYn0tmPCJtBs7Y0BicotSHDcUmcN6iWuTEPwSVV8vjjpHlIepM4Gxba2LVRTW9gMIHcC1xAeRJffhFhaUB8CT5Cj%2BR7lQaXJX9Rl6%2Fa11xJztgT9mo4Gfes8RZI0cuDc3fVFVZ5LK%2F5NfT%2BO90XizD0jorKBjqkAQLG3TnWXfEQqn4DixaOgmgdceImEg%2Fg50uibqWZh4qplrpHNh4X9sbXx2nRxoIvKgpmuCViRVNEiziEpaEHBvpheGiIJq8RLE113BSbGwk%2FlrC7hH7oVaI2WSisjoOZiAG66IYLm5ULJ1B1E29dgSF7OL%2FIcTgpGrm3uNrCTEOwYO7vYM47UxtJYFi10DhoW%2BeJD8gEHyROXYR%2FjuYny%2F%2FZ1QOZ&X-Amz-Signature=91bf5cefc53d067fc0bc02efced9190ce7e6a1fc027d68cd9df4380c6223b7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
