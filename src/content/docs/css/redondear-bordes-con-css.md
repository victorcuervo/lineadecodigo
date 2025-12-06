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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3FZWE4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcjETUGQWUhlmAZJOJJVlzMtYHg5hlifVKQF2R%2B5HYIAiAh234QIi%2FzcHqfbOedi67GTPLwUi%2BfWlWW%2FZWfYla%2BIir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMPOgCwqDevgh0ruelKtwDfMkqws2c6DzMzXNq1PEInCpQ4K7v1JVAF3O6FAXe5vc8IK880a2Pf14eSyKIpNgJxv4FOdFBTyr7yvrwFWyE7%2F3lS2aZRMPf4Qz%2FT3VWoCt6O9BN0RLySw%2FLKgG%2FHYzT6NzrC1BP%2FCgYxKhGv6UON503Smb7R74RSy5hRCIvk0ZPus9fvbDhut05I5kkfSQbm9L%2BZTIGsuCgHrpGl9a4dLxqXXIEp8iS2w0wWnWfMqDZFw0FVpBoIwNOf8Ph5RKwpuf1H%2BjgxCMFNnZ9oNalVe2aoQc9DH2GS5zmhJG9cvGSbpA9A7QBBb2JMErnFrFYYc0N9AH8zXdJe8Pq5GSdMhsCsXN4d4lQvND7zSzibhMm6DUbMQQ9j5rXxPjuUT1BVRoX0OGDWDfiKDYgt4K8l0q5Jz7WWEZODZjLIRRKb91Ctab4KQieE0dTcroYoknTpoXZ4uB5FNqnfQDsdLTZFe87KRgtV5Hm4an1IrtsiGbqH3zTj8PKFSalL0GLBCqyS1t%2Bi9jEuoqTD7UYiSPTtY%2BEjS0XUSVPnN6SaJrOScdgkrlYy4G8n9bo10UpZiRXdGdIgH1UKe1KVtpJDm5IfNpoj09ZWJ6QekzXbS1V7Lwhku80iSdjj1t85Ngw0afOyQY6pgEml44RBPoeizOEIBXE8YAH6dTl5MTOCpST2mKRrZLrZpFU%2BF500Xg5NZjUPsLt7Fs7CcwY4noN9o7UKwqlU%2FRvbUUHmYqnVJecNVKSQiPOOWzSjDVVOXfXYTM051rbwIoBPbYZ6zP6mebRjG0riVRacQUzEe%2FjyobBVYKPGoLms71iYYnoTKYZ1cw434T16yvUJmhPJ99ez0yOC5p%2FkyQOH9eApE8j&X-Amz-Signature=9ec3dc94ebbffe6c34c5ce949b3b97fdb278723ae54e1347deefbc96960eea80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3FZWE4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcjETUGQWUhlmAZJOJJVlzMtYHg5hlifVKQF2R%2B5HYIAiAh234QIi%2FzcHqfbOedi67GTPLwUi%2BfWlWW%2FZWfYla%2BIir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMPOgCwqDevgh0ruelKtwDfMkqws2c6DzMzXNq1PEInCpQ4K7v1JVAF3O6FAXe5vc8IK880a2Pf14eSyKIpNgJxv4FOdFBTyr7yvrwFWyE7%2F3lS2aZRMPf4Qz%2FT3VWoCt6O9BN0RLySw%2FLKgG%2FHYzT6NzrC1BP%2FCgYxKhGv6UON503Smb7R74RSy5hRCIvk0ZPus9fvbDhut05I5kkfSQbm9L%2BZTIGsuCgHrpGl9a4dLxqXXIEp8iS2w0wWnWfMqDZFw0FVpBoIwNOf8Ph5RKwpuf1H%2BjgxCMFNnZ9oNalVe2aoQc9DH2GS5zmhJG9cvGSbpA9A7QBBb2JMErnFrFYYc0N9AH8zXdJe8Pq5GSdMhsCsXN4d4lQvND7zSzibhMm6DUbMQQ9j5rXxPjuUT1BVRoX0OGDWDfiKDYgt4K8l0q5Jz7WWEZODZjLIRRKb91Ctab4KQieE0dTcroYoknTpoXZ4uB5FNqnfQDsdLTZFe87KRgtV5Hm4an1IrtsiGbqH3zTj8PKFSalL0GLBCqyS1t%2Bi9jEuoqTD7UYiSPTtY%2BEjS0XUSVPnN6SaJrOScdgkrlYy4G8n9bo10UpZiRXdGdIgH1UKe1KVtpJDm5IfNpoj09ZWJ6QekzXbS1V7Lwhku80iSdjj1t85Ngw0afOyQY6pgEml44RBPoeizOEIBXE8YAH6dTl5MTOCpST2mKRrZLrZpFU%2BF500Xg5NZjUPsLt7Fs7CcwY4noN9o7UKwqlU%2FRvbUUHmYqnVJecNVKSQiPOOWzSjDVVOXfXYTM051rbwIoBPbYZ6zP6mebRjG0riVRacQUzEe%2FjyobBVYKPGoLms71iYYnoTKYZ1cw434T16yvUJmhPJ99ez0yOC5p%2FkyQOH9eApE8j&X-Amz-Signature=cb96db3dcb15067165fed4d3590704adc42dd02fcf575a181c07fc87028c48a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
