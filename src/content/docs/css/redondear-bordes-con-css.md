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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYKJGJX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF4gBMTLW7WarE45guJyPRbhvWs6pSf4KiZMbkfxmYkQIhAIyBKgGKOvEbR7qY1TECIi%2FyBw0SDDqyWGiTQ8az%2BY3EKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHeY94rJWAsUbwAjEq3AMzzUU31MoFFMq5Rl8uhUMfQ8bDY4ycdWyp6D593GN9Rqz9LtNfXyAbUyvizTuRXcBYC8UNmjj9aKayGKL9GNRFMooYHPATusuZ4TFSrZJmBzALzZhu%2FLZW7OjMKji%2BdwQU2jvhWw7uNIcBy3LkXMU8mU6zKvEjLcpor%2B0bEJDxZFGyrqqts4wpYj0qMf95z%2F4v3eS4OWySn1MPiyJO7Oo3AG6e6QfVxJcHZ9MTOFToUdEqfz4rXHhhKxo1feEehZqKEuIa3ndpDmgu0yCeAHJHhSKgUXPBhT%2BE6guqV2HjD8VK5mTm8ANVBr%2BrNYGQY2H%2FRL1A5UHma5vWWG6dIuiJNojd1BmTpFgJ0ajT%2FEYMg1WLFAL8tklr1v8XIRIdltS2xemR2Jy1Wy1NrO%2B9PeAF4s%2FpTTuK17yQ2b3mCw%2BYGlFBMfnU%2FDdT9y4W1RKZD1zjTMov%2Bw1Vl2k6X%2BcgAvQ9Cnk9tikjql%2BxfL4uoX%2FnPmGTCGlCYzdPFmpz%2BEc4B82sOBo%2BRPeHl77wpI%2Fap%2FAncgcHHWdQWE%2BkF%2FnJEYkU5CoxmwuEOvtugSLxNnQFeDtBPkldpDiMqHiQQN2sjVbwIOSMdc9qbSCJCS4yMR4Q61uvQ8XNMDvl1H8GzzCw%2FtLJBjqkAdXERB6nOmOWsaSQW%2BRX0lhhJAbocWo5C%2FDfDqpe%2BJsPYZTPju%2F8A8gyc%2FSYVq7Y0FiqicVQmE5F47e%2BhUeKWFh09KFh5GZrv96JHPW8uuEGRMgYlZYLHeYAIQfse7sil1ubnydMoZwPtNM%2Bkjcf5CRcwWO5KzbCdUaJRtyauup%2B7ICDKpPYghmLBMv509tH%2BRy00mjJPV3hDmngL0Bw6qgItn6t&X-Amz-Signature=4bfff1ac303d2e5a52dba6f64e668a17f47e8539597936a5c7d4c2c498b9260e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYKJGJX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF4gBMTLW7WarE45guJyPRbhvWs6pSf4KiZMbkfxmYkQIhAIyBKgGKOvEbR7qY1TECIi%2FyBw0SDDqyWGiTQ8az%2BY3EKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHeY94rJWAsUbwAjEq3AMzzUU31MoFFMq5Rl8uhUMfQ8bDY4ycdWyp6D593GN9Rqz9LtNfXyAbUyvizTuRXcBYC8UNmjj9aKayGKL9GNRFMooYHPATusuZ4TFSrZJmBzALzZhu%2FLZW7OjMKji%2BdwQU2jvhWw7uNIcBy3LkXMU8mU6zKvEjLcpor%2B0bEJDxZFGyrqqts4wpYj0qMf95z%2F4v3eS4OWySn1MPiyJO7Oo3AG6e6QfVxJcHZ9MTOFToUdEqfz4rXHhhKxo1feEehZqKEuIa3ndpDmgu0yCeAHJHhSKgUXPBhT%2BE6guqV2HjD8VK5mTm8ANVBr%2BrNYGQY2H%2FRL1A5UHma5vWWG6dIuiJNojd1BmTpFgJ0ajT%2FEYMg1WLFAL8tklr1v8XIRIdltS2xemR2Jy1Wy1NrO%2B9PeAF4s%2FpTTuK17yQ2b3mCw%2BYGlFBMfnU%2FDdT9y4W1RKZD1zjTMov%2Bw1Vl2k6X%2BcgAvQ9Cnk9tikjql%2BxfL4uoX%2FnPmGTCGlCYzdPFmpz%2BEc4B82sOBo%2BRPeHl77wpI%2Fap%2FAncgcHHWdQWE%2BkF%2FnJEYkU5CoxmwuEOvtugSLxNnQFeDtBPkldpDiMqHiQQN2sjVbwIOSMdc9qbSCJCS4yMR4Q61uvQ8XNMDvl1H8GzzCw%2FtLJBjqkAdXERB6nOmOWsaSQW%2BRX0lhhJAbocWo5C%2FDfDqpe%2BJsPYZTPju%2F8A8gyc%2FSYVq7Y0FiqicVQmE5F47e%2BhUeKWFh09KFh5GZrv96JHPW8uuEGRMgYlZYLHeYAIQfse7sil1ubnydMoZwPtNM%2Bkjcf5CRcwWO5KzbCdUaJRtyauup%2B7ICDKpPYghmLBMv509tH%2BRy00mjJPV3hDmngL0Bw6qgItn6t&X-Amz-Signature=349c5d729c87fe7e763118a3adf71ce0255fd65261539766c84006a3f995e3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
