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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQFBENJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4cvvQmWYO7vhAiz923%2B7AoktuZDeH%2BHVDwzzB3pNWAIhAODngnFisWYrAUwiDVv6Afc5P9PGyGMKGx5Ouj1LfxadKv8DCHUQABoMNjM3NDIzMTgzODA1Igz43YrZvKadxXhOMkkq3AM3eczL2JAkDZyIZbwP5TQPRXeBVJoxmVAmN5%2FRN97UjJY1%2FsG7zfR4TgYxAl5ZSatvWn7OjLsFj%2FEWZa%2FyZUFay7XANsNJdpO1pfkiFDuGpUfptD43X0KiTGJqzz32JiwpNoYIndIzfP%2B%2BegGpOXHq73t1Z%2Bm5wDrDNtuFEG73flmeQan1%2FhH5hWTcd2jcPEbasKiW8g2dJZnQzFW%2BrpsySeG1%2BOoYYOL90RJs%2F9xuS5rdwU25xsSbXtotOLmZ9GsSoIu%2BNhUpfJSI8agiEpbq8hswAftebUzDCkB5lfIbN5gwJAUyxKc9E7zMKerCCVt1vshYXXl4PEqyetjHGaEJaBDHW%2Fj0CRh%2BNwhihM9aU91vu4r4eatAuNWbwLJ5x8UnJvXb%2BhbkbOU1fTy%2BX6UjEHEJU1Al6%2FL3fov9xPipHl7nZjbYpEymOHJz2HaMa1tBUdLwPRULx%2FFVJsSFhHcJIawQsxMt5HpnEiMH65up44khVdSXrG4mET2bWeMcDaVxSs29%2FGoT4WCBEr7CvzPhSMhLXgMP2xB2d6jGONCrnUBznCJAFRJvfLx0jUACyAtZHClcGWxEbFmQxdlCsAm%2BeoZ1CaAvHncMusnXU5G9GAP0DcYKSnOfACsBgDCOzojKBjqkAQPyx1GE3RXUCpSojNHVlsj4zDFg7opz%2FU%2Fg3RDHEsVwyTcA9nStfLPyo5mPYCNthfHlDGRn%2BhYt%2FKBPSBAh8NgyWAeYVMfX51m3otwiYNF1vvyWeVwBTDwoQ7BtbyorIWjyDmMOVskO3A0M9ELJ6N3I%2FeQmTxILkoUCV8PE5%2BN12Id7fXxN%2FsUok%2FWGIiYw%2Fxq3cUVMYNKvwGgRlyfgDuqmFVDB&X-Amz-Signature=90803b1e553429f5e6b30750391580c5b610abe2cd477c7a06bb60aa9bf2e48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQFBENJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4cvvQmWYO7vhAiz923%2B7AoktuZDeH%2BHVDwzzB3pNWAIhAODngnFisWYrAUwiDVv6Afc5P9PGyGMKGx5Ouj1LfxadKv8DCHUQABoMNjM3NDIzMTgzODA1Igz43YrZvKadxXhOMkkq3AM3eczL2JAkDZyIZbwP5TQPRXeBVJoxmVAmN5%2FRN97UjJY1%2FsG7zfR4TgYxAl5ZSatvWn7OjLsFj%2FEWZa%2FyZUFay7XANsNJdpO1pfkiFDuGpUfptD43X0KiTGJqzz32JiwpNoYIndIzfP%2B%2BegGpOXHq73t1Z%2Bm5wDrDNtuFEG73flmeQan1%2FhH5hWTcd2jcPEbasKiW8g2dJZnQzFW%2BrpsySeG1%2BOoYYOL90RJs%2F9xuS5rdwU25xsSbXtotOLmZ9GsSoIu%2BNhUpfJSI8agiEpbq8hswAftebUzDCkB5lfIbN5gwJAUyxKc9E7zMKerCCVt1vshYXXl4PEqyetjHGaEJaBDHW%2Fj0CRh%2BNwhihM9aU91vu4r4eatAuNWbwLJ5x8UnJvXb%2BhbkbOU1fTy%2BX6UjEHEJU1Al6%2FL3fov9xPipHl7nZjbYpEymOHJz2HaMa1tBUdLwPRULx%2FFVJsSFhHcJIawQsxMt5HpnEiMH65up44khVdSXrG4mET2bWeMcDaVxSs29%2FGoT4WCBEr7CvzPhSMhLXgMP2xB2d6jGONCrnUBznCJAFRJvfLx0jUACyAtZHClcGWxEbFmQxdlCsAm%2BeoZ1CaAvHncMusnXU5G9GAP0DcYKSnOfACsBgDCOzojKBjqkAQPyx1GE3RXUCpSojNHVlsj4zDFg7opz%2FU%2Fg3RDHEsVwyTcA9nStfLPyo5mPYCNthfHlDGRn%2BhYt%2FKBPSBAh8NgyWAeYVMfX51m3otwiYNF1vvyWeVwBTDwoQ7BtbyorIWjyDmMOVskO3A0M9ELJ6N3I%2FeQmTxILkoUCV8PE5%2BN12Id7fXxN%2FsUok%2FWGIiYw%2Fxq3cUVMYNKvwGgRlyfgDuqmFVDB&X-Amz-Signature=de56f5527dd8cedb48f722cf7a7afcde311aa6fb30551b8e1c4a88d540b57f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
