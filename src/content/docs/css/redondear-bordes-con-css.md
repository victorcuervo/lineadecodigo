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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4NAHIQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvi8rgmeRqgfoaMntizgWSyY39Ea0EguWhUxB6mzgbwIhAOQgarxP0Ol0SZ5MJ6xFRHPnJT5Q4TtRQD78MtUCJIghKv8DCHMQABoMNjM3NDIzMTgzODA1IgwJE6hW1ETYRDWjEvMq3AMLNJ2Ndik5B4Ojk7iwkd1ul8p9guXSfMlLsIvp40vEnqV7MNTltGukpDQgWnNRUw%2FttLaB38jVbaV5m5fSfm0alpWTarE9mBB9rQziqAXpqrnI0BeV%2FPDCCXuiZOU5blceR%2Bm3poOBV6eyQaY3g%2BOKaUFyh0TKHbAzjO1DyU8uV2RyQz%2Fde%2F4U0hrOVOCPrKG1NkCAyTzhPlVD7gDNf3TcsK907%2BQ09QERScVm1qLOOXbTC3wXcfWhOBxPT%2FbYNEDDSGILJE7nseboCYaLvfmt%2BX%2FfmRTCE8fh5fOLhROMjMWlsuApim%2BJOal1YcaZx%2FuZMuCCVWELUIGI%2FXTiymnGr3x7CIyeEz78cO1stFU0dKgux2VThpn8qSqGPWrvFqNV71fgrduFDHGe9jFcryUex6V%2Bc5tEZAt6XUpKaUOPZKqRSEJMeJrz%2Fys6IKabCUXAykIKv%2BKnAc97gUuD1wJFADDYI9%2BRw2ttfarJ%2B3eECf2OvRkEUQr1O8IU7aftO5XpvRwR2ZzL2ErHZk4h2ZG7UcgGCN9Nd3L6PNub5wbmejlubn8Yfgw9NwJ7UKb0Io3aqCcYcXionxddim1x9ROpIa03I07MEQ1Uz4HHZwxqossxL0rdecXqtUfLzTCF7M%2FJBjqkAdR%2Bq51xXfKkEFkAk6Bk1u2vc2u4Pfj%2BE7cpSP3fPvLuSzEo7myOVFoSCDlHrIhVeeH5MUC75MnBeNgrQOT1AdFnfTOtKIGUkrpcAMz9tEVymwJ4m6Y71RYpq19%2F7JFWF%2B76vo3waBYrsRAbW3txcqUbgev5c3arJex9xiDkvYnW9vW5QBTvrPX%2FjEOk5KW4RJT6uPw%2Ble6ykOZdRs8oALHkfisL&X-Amz-Signature=b2a8ab09e9599cd9a9e57c4afcc3b86aa31fd2df3d5e5b33b00498696eaa06a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4NAHIQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvi8rgmeRqgfoaMntizgWSyY39Ea0EguWhUxB6mzgbwIhAOQgarxP0Ol0SZ5MJ6xFRHPnJT5Q4TtRQD78MtUCJIghKv8DCHMQABoMNjM3NDIzMTgzODA1IgwJE6hW1ETYRDWjEvMq3AMLNJ2Ndik5B4Ojk7iwkd1ul8p9guXSfMlLsIvp40vEnqV7MNTltGukpDQgWnNRUw%2FttLaB38jVbaV5m5fSfm0alpWTarE9mBB9rQziqAXpqrnI0BeV%2FPDCCXuiZOU5blceR%2Bm3poOBV6eyQaY3g%2BOKaUFyh0TKHbAzjO1DyU8uV2RyQz%2Fde%2F4U0hrOVOCPrKG1NkCAyTzhPlVD7gDNf3TcsK907%2BQ09QERScVm1qLOOXbTC3wXcfWhOBxPT%2FbYNEDDSGILJE7nseboCYaLvfmt%2BX%2FfmRTCE8fh5fOLhROMjMWlsuApim%2BJOal1YcaZx%2FuZMuCCVWELUIGI%2FXTiymnGr3x7CIyeEz78cO1stFU0dKgux2VThpn8qSqGPWrvFqNV71fgrduFDHGe9jFcryUex6V%2Bc5tEZAt6XUpKaUOPZKqRSEJMeJrz%2Fys6IKabCUXAykIKv%2BKnAc97gUuD1wJFADDYI9%2BRw2ttfarJ%2B3eECf2OvRkEUQr1O8IU7aftO5XpvRwR2ZzL2ErHZk4h2ZG7UcgGCN9Nd3L6PNub5wbmejlubn8Yfgw9NwJ7UKb0Io3aqCcYcXionxddim1x9ROpIa03I07MEQ1Uz4HHZwxqossxL0rdecXqtUfLzTCF7M%2FJBjqkAdR%2Bq51xXfKkEFkAk6Bk1u2vc2u4Pfj%2BE7cpSP3fPvLuSzEo7myOVFoSCDlHrIhVeeH5MUC75MnBeNgrQOT1AdFnfTOtKIGUkrpcAMz9tEVymwJ4m6Y71RYpq19%2F7JFWF%2B76vo3waBYrsRAbW3txcqUbgev5c3arJex9xiDkvYnW9vW5QBTvrPX%2FjEOk5KW4RJT6uPw%2Ble6ykOZdRs8oALHkfisL&X-Amz-Signature=25ec56b0d113b86d27d5e297a96f26502b5b63fa1a3310f50e4a1018370f056d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
