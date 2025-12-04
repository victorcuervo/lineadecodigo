---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6QYH7BT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHJUCV794WLu6OOjTmhxLIQegDgYHYVnMYgZhnWx5BOrAiB8qYiiZCVU1oBsEWSR%2Biuh1zrydiMZbtzGjpc2K79Wyir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMA9j58FqWv6iLU48LKtwDFhodeFyMsQ2bUjGHvHRNxk13SQfAJ02zCU3HtPtMxbQOEnSdL%2BGETY5V7bMdvejPYj75ww52LqQ%2BmlNigzwgI%2F5eSOuZ%2Bei01f36ToB%2BWlZUsc2o6u8Y63ZPdlXDCztdASHk7JYMfbgmssLSXcAJmbSgdMtqzaJG4ORzZhpbF%2B3YViFeXMfJf%2BNTFdjSa8X6toK3gBXixfeHUG44p0hU%2FHIDcD8sIhEAQ8Fq2Rjn%2F8UiHZ8KaheCyV%2FRpmAxJlMPw382HreZmOdTbR1tvLrkcVhysjkffiyPvhxh02HpeQ2WOsQf2WsVjwSxXUih0wAL9GtKGSukdaWarI1Aa5qpRqCN%2BrAp9sHl7aUiTULu2Hc4L3OzZNa898gu2trf%2FZMAJtDzRLR9P5V5yylGhmFaekPCge4Kci9PjC0i%2BfbWgxGSfxjaxyNxpyhHUlDaKcXW8MamECiyFMmkqWPMgz%2F3Y5%2BfeuC4rd6jC8CT6jkY88YD%2BETTEXTThW60u9pMV7qBQ679ckOsHxrpzeLHJ9KgypmvV6fPxcH9IJCneDiBsRUzQK6wQWLcD71nZMOBKmT4rvHjp3y9WZDKZhB55PhdBzEBFdwgTCE8GykllQD9x9X%2BO7nEPKEbv%2FFmnKQw1%2BfEyQY6pgHzKEjPij1b9rGevKNgKnKkw3SBRZpQPQmxx7muz1pVeZMDR8zEojC1Qr%2FAZsZ3WUN%2FcUu%2BCJ84iRXS9RemMKQ96Ab0yLgeO4aHjemypwhl9vfPktaqgguBMZd8H3d6QOT%2Bb6TUcgPuLdAFkgE9ghL9zpoZwyS3GAnMmePHdPCcq0jaklEgHN6uWcQuSMpAEHUfTWcUu%2FS5UNqm9BDWReGlML4qv92t&X-Amz-Signature=9abb3042f5de7c7707e5f5f6f5bbd13bd95819f0a8549571240816290855f8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6QYH7BT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHJUCV794WLu6OOjTmhxLIQegDgYHYVnMYgZhnWx5BOrAiB8qYiiZCVU1oBsEWSR%2Biuh1zrydiMZbtzGjpc2K79Wyir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMA9j58FqWv6iLU48LKtwDFhodeFyMsQ2bUjGHvHRNxk13SQfAJ02zCU3HtPtMxbQOEnSdL%2BGETY5V7bMdvejPYj75ww52LqQ%2BmlNigzwgI%2F5eSOuZ%2Bei01f36ToB%2BWlZUsc2o6u8Y63ZPdlXDCztdASHk7JYMfbgmssLSXcAJmbSgdMtqzaJG4ORzZhpbF%2B3YViFeXMfJf%2BNTFdjSa8X6toK3gBXixfeHUG44p0hU%2FHIDcD8sIhEAQ8Fq2Rjn%2F8UiHZ8KaheCyV%2FRpmAxJlMPw382HreZmOdTbR1tvLrkcVhysjkffiyPvhxh02HpeQ2WOsQf2WsVjwSxXUih0wAL9GtKGSukdaWarI1Aa5qpRqCN%2BrAp9sHl7aUiTULu2Hc4L3OzZNa898gu2trf%2FZMAJtDzRLR9P5V5yylGhmFaekPCge4Kci9PjC0i%2BfbWgxGSfxjaxyNxpyhHUlDaKcXW8MamECiyFMmkqWPMgz%2F3Y5%2BfeuC4rd6jC8CT6jkY88YD%2BETTEXTThW60u9pMV7qBQ679ckOsHxrpzeLHJ9KgypmvV6fPxcH9IJCneDiBsRUzQK6wQWLcD71nZMOBKmT4rvHjp3y9WZDKZhB55PhdBzEBFdwgTCE8GykllQD9x9X%2BO7nEPKEbv%2FFmnKQw1%2BfEyQY6pgHzKEjPij1b9rGevKNgKnKkw3SBRZpQPQmxx7muz1pVeZMDR8zEojC1Qr%2FAZsZ3WUN%2FcUu%2BCJ84iRXS9RemMKQ96Ab0yLgeO4aHjemypwhl9vfPktaqgguBMZd8H3d6QOT%2Bb6TUcgPuLdAFkgE9ghL9zpoZwyS3GAnMmePHdPCcq0jaklEgHN6uWcQuSMpAEHUfTWcUu%2FS5UNqm9BDWReGlML4qv92t&X-Amz-Signature=86312e028951fdfc9f592882d2cf5e749fbb992725328077f0512878b378d53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
