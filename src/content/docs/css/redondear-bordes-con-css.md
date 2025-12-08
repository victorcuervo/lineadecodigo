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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMUFDXKX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH17ldtEX2t6D2Tnej97rGL%2Fpdm0a41wRwBu87SCDRmQIhAPBahHdHaOu0L6C%2FXu3Dc1Gn4j0FlLfb3FaFS0eZdh7AKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUHLMZDayB4qaEOBIq3AMo1MCKtgU6x73ONPHmwesCM6QDKM0X4bKOsE8d1pDxmYPTchVZIx4XjmkeuFa2xvO%2BP36%2FKT8qbDxk1vQNAOzl3AmcDD4EUTnjSljrMQAXT90qIophHmAVtnsIfmREkI7hk1eD%2FvIyBsc9RAcrtPvFANm8MIjT0uEeVy4uEFjxsy54uPGRA2m5%2B3K1haChgLYFXU%2BsNDM5jnZ37BkzSMB6mDicLZuLETBILLAG7vGwqm81Yz4tZI9pRVlUAqRuaN5V2%2FcWR66reTiYXOPDRUivA0I82Cef%2BZdE7RtNOorUKkBMCpYI%2BpFz%2B1FgGAhYOzpojmYh2sFqFTCZq16KaeVwbiV1td2fz8Kijz6jrXZcvT2fFadF8m402tCGKsALJTW3wN1XalQwPyzJgwxhoZRMEb6jhxaF5RGhv1chHejRYQJl5OVgtGJahVQph1z%2BCCOi%2F9AQy2sBE%2F%2Fnso2KX0%2F51x%2BBTuHJiZAK2zhfnPe8FgZInQkh9hrLxXZNupq5pE%2BoNGGV4sjM8NEpnjua8rDxVbKQrmT4JHkudVXY%2Fr2ajhOcrdF54J46pJMpoAOV7ipAByNgIBMog2%2BX%2F2yxEIR%2FrqAnYFWHC64c5yjfIr3TP%2BYI7XDySAj4wBwyqjDas9zJBjqkAQrNc7QiGuiO%2B49waaHoFNPynYGqofwvVxMHHdkikk5O4uW%2B1wS1MFpMCGdfvRonAu%2BW7EVBOcXiUi%2Fm12IpifCV31LN5JMqqQnZhi%2B8AsLpzhwvHMBj16FPlc8gzIpPgEY3g%2BuH2fMmL8n2lCjmHrDvOEHEWDZR%2FX6jR4iHlZYvB%2FdbLOAQ8Fvm8eoI13aYdaxNtmdyunxutaN9HQBSWawANcMt&X-Amz-Signature=f0ab7aafed35aa498edabf431e7a4d34652713fccf5000663088c3f80ecd4777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMUFDXKX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH17ldtEX2t6D2Tnej97rGL%2Fpdm0a41wRwBu87SCDRmQIhAPBahHdHaOu0L6C%2FXu3Dc1Gn4j0FlLfb3FaFS0eZdh7AKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUHLMZDayB4qaEOBIq3AMo1MCKtgU6x73ONPHmwesCM6QDKM0X4bKOsE8d1pDxmYPTchVZIx4XjmkeuFa2xvO%2BP36%2FKT8qbDxk1vQNAOzl3AmcDD4EUTnjSljrMQAXT90qIophHmAVtnsIfmREkI7hk1eD%2FvIyBsc9RAcrtPvFANm8MIjT0uEeVy4uEFjxsy54uPGRA2m5%2B3K1haChgLYFXU%2BsNDM5jnZ37BkzSMB6mDicLZuLETBILLAG7vGwqm81Yz4tZI9pRVlUAqRuaN5V2%2FcWR66reTiYXOPDRUivA0I82Cef%2BZdE7RtNOorUKkBMCpYI%2BpFz%2B1FgGAhYOzpojmYh2sFqFTCZq16KaeVwbiV1td2fz8Kijz6jrXZcvT2fFadF8m402tCGKsALJTW3wN1XalQwPyzJgwxhoZRMEb6jhxaF5RGhv1chHejRYQJl5OVgtGJahVQph1z%2BCCOi%2F9AQy2sBE%2F%2Fnso2KX0%2F51x%2BBTuHJiZAK2zhfnPe8FgZInQkh9hrLxXZNupq5pE%2BoNGGV4sjM8NEpnjua8rDxVbKQrmT4JHkudVXY%2Fr2ajhOcrdF54J46pJMpoAOV7ipAByNgIBMog2%2BX%2F2yxEIR%2FrqAnYFWHC64c5yjfIr3TP%2BYI7XDySAj4wBwyqjDas9zJBjqkAQrNc7QiGuiO%2B49waaHoFNPynYGqofwvVxMHHdkikk5O4uW%2B1wS1MFpMCGdfvRonAu%2BW7EVBOcXiUi%2Fm12IpifCV31LN5JMqqQnZhi%2B8AsLpzhwvHMBj16FPlc8gzIpPgEY3g%2BuH2fMmL8n2lCjmHrDvOEHEWDZR%2FX6jR4iHlZYvB%2FdbLOAQ8Fvm8eoI13aYdaxNtmdyunxutaN9HQBSWawANcMt&X-Amz-Signature=8c555413b67e076feb7db16d37869c50cc48516870063ba440eef06ce1ec43a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
