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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66PTFQH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMec3zi9Rf%2FtVA6GtAB4%2FROa8zqLzXwKvcOibJbyC0uAiBXgFzfIynbtyaSNZrjr2eyac0tgoiDx2BBUP2lJPRqAiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM55inlezPUcl9G82PKtwD96eXlCutZCvsnkcL76bWbnuj2raxDsBxQg8imWDKXDgRpc1f6jdvHXxKzpVWGGWSHgg%2FIMLqvBN7k5htBBDFoBO7JIJ%2Bx6lEpXMBO4s%2FKjimltSEhMxP28Rv%2FGgbkE7GMCSbAGVZyrnQsmft3UyND0PwQXHECRvJl17Fm0ESR9wJ3wgP%2FLZrm%2BqL2noSL6omcPi5SRkLzv8Vb6gMva27Bkk4nlcnxRbLO5MuTUsmciP%2BIOrZstdvUPM%2FsBY9BB9iA%2FjGSFwsncHGadl4OjgxVf0qNszFPgDN7hkp9OKLpVeJHU0AzCMGwYCOGj0myhtedQCDeTrwFNyvdHyKUg%2B1CXpnvSzAhr3vEipVxNuS5udeF6LG5%2F33P8lrPAye82gQ4T1c64Q1fnrniPZv%2BxcYKtqEh8%2F3rN60ipIFOWEaD816dA16oPan7O%2F0Dax03rAzZM5hK4918Xb8TZS%2FvIk9ca1bSY9UMAYdb8U4fnBk3De7x7e7rAitsc1JCaUsWwQFlZSmRfMVUsZVrTwnflWO7ZFpEN8QMA8AyJ4qUUU3XtXa%2FxOEoWw0HMEcZonphrlXWX3427fRbxqqpeeYaez70NsUCe5rN6TQOcxLgDtrmyOkEFizeSH7dt40FW0wx%2FTayQY6pgFlZ5Gs7irxU6JosMEFsqKbNyxPVLkIcWomzsokQJy8jJ1MyC2S3%2BiO5HcSDN3fwWlIR4D%2Fw7kExeCTmBRAWSH3Nf4d9Dsx91SZOn%2BhXTSLwoWVPKoMpvPGoX99SwnxT9PEyO4uGiVK2BkPqNpt2N6IyPehJK5YKfWqm9JFN4kmxwMT7nTQ5tkGauU1qyuSMB0yKz6%2FK8SWqm3fq%2BGQ%2F7jBIO6G7Ahn&X-Amz-Signature=59ac36d758f868d71ec68177981374a13f8074e27d07301f79c93b483a452a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66PTFQH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMec3zi9Rf%2FtVA6GtAB4%2FROa8zqLzXwKvcOibJbyC0uAiBXgFzfIynbtyaSNZrjr2eyac0tgoiDx2BBUP2lJPRqAiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM55inlezPUcl9G82PKtwD96eXlCutZCvsnkcL76bWbnuj2raxDsBxQg8imWDKXDgRpc1f6jdvHXxKzpVWGGWSHgg%2FIMLqvBN7k5htBBDFoBO7JIJ%2Bx6lEpXMBO4s%2FKjimltSEhMxP28Rv%2FGgbkE7GMCSbAGVZyrnQsmft3UyND0PwQXHECRvJl17Fm0ESR9wJ3wgP%2FLZrm%2BqL2noSL6omcPi5SRkLzv8Vb6gMva27Bkk4nlcnxRbLO5MuTUsmciP%2BIOrZstdvUPM%2FsBY9BB9iA%2FjGSFwsncHGadl4OjgxVf0qNszFPgDN7hkp9OKLpVeJHU0AzCMGwYCOGj0myhtedQCDeTrwFNyvdHyKUg%2B1CXpnvSzAhr3vEipVxNuS5udeF6LG5%2F33P8lrPAye82gQ4T1c64Q1fnrniPZv%2BxcYKtqEh8%2F3rN60ipIFOWEaD816dA16oPan7O%2F0Dax03rAzZM5hK4918Xb8TZS%2FvIk9ca1bSY9UMAYdb8U4fnBk3De7x7e7rAitsc1JCaUsWwQFlZSmRfMVUsZVrTwnflWO7ZFpEN8QMA8AyJ4qUUU3XtXa%2FxOEoWw0HMEcZonphrlXWX3427fRbxqqpeeYaez70NsUCe5rN6TQOcxLgDtrmyOkEFizeSH7dt40FW0wx%2FTayQY6pgFlZ5Gs7irxU6JosMEFsqKbNyxPVLkIcWomzsokQJy8jJ1MyC2S3%2BiO5HcSDN3fwWlIR4D%2Fw7kExeCTmBRAWSH3Nf4d9Dsx91SZOn%2BhXTSLwoWVPKoMpvPGoX99SwnxT9PEyO4uGiVK2BkPqNpt2N6IyPehJK5YKfWqm9JFN4kmxwMT7nTQ5tkGauU1qyuSMB0yKz6%2FK8SWqm3fq%2BGQ%2F7jBIO6G7Ahn&X-Amz-Signature=f91fd78d7e0b42d7642459dafa96ab4d2cba12a8833062c2584ce78fb6ba2a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
