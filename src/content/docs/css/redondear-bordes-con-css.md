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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LQVNZC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjkjH8btE9IkkXm0dYYM6F6Wkrt1qqFWYK7xOetRbFOAiAuIUUiWDFNbVq6VeB69hoH8xa2OCZOaR9RAcajuP4jhSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3XrreJwHQuZmEe50KtwDCm9nwP5BXYBAj1NBmHrI1MFpCcUOR8OC4RvEU%2B68Ej1dy7ZS12UfZIIc0x9%2FWKJ6HvBBn83tEeUXbwZ6BMxRLFWwZXxajrR2gz9giVANUuhkZSmy7C%2BwtyDC%2BCOc3RLg8Yw9czdEs24upliaIaZm2fQrZx8r9%2FYZ74Ji%2FJMtxFCvbdwYSfmhzKbeNgMHDlmWEl9idzawTWqDU4TqM31Do4lRwFtEonpKKDtNUKVZduWVdIHYaFLB3Rp2ocsrbOpQCbQPkJLV8OSfc24Zm2shx741kurvg0%2FaF0lOFT%2FOZtvgz9lIZfaFkwmQgmSC735PYkjYVAjuQxd7Hc%2B%2B%2B1YXq1X7jKHSQPJy5v8M%2FkzbSxWOA82dlCMqS93XIRQrnwNvu2Om6EGtMQwYBypl2weUFS0E3AeH0hS04BbDWE0HtJv1d%2BMqRXRShkQ0As082DBGxLeBfS2hE4%2FAR%2BNbHOHDUE0t3pdeRXvO%2B5x%2BY8kUHUUPOEiTG0EOB%2BoYt%2F36UDGpRQSsTLiTOg93tTf06%2FBkYktdSVCJnwDoTNwbGmSalXAaOaTbZIWWEOZc43Vob7l5W6ItdzVtPZ8OQBLAnqoJK4NWaM9fdfFZTGqO5scXBFSQ3c43UaI6yRbf9JQwurTZyQY6pgHxSQ8xV2n4xDkY%2Bj6htGqASAGw4AEbtgB%2BHA6hrm%2B3inztfb784Qpom7ro%2Fs0ts26Pb92BDiyYmVFBTzdwQiF5rZ11P%2FlQbbBoA6Usjx037SXX91OssVNh1dtbsLdOjJ4BrJK7gurCoe7G5KWVAfz8E%2BupN2VHTvEAOBDw4S6UltoUDjKrqY8zHHVDZjVu8iBBldB16rgR1SpjXtUkIBa%2FGOeGd2ro&X-Amz-Signature=5bdd5a8204736e87e378b34a077beed1984f19f7e89c87d0d524fe78ddade16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LQVNZC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjkjH8btE9IkkXm0dYYM6F6Wkrt1qqFWYK7xOetRbFOAiAuIUUiWDFNbVq6VeB69hoH8xa2OCZOaR9RAcajuP4jhSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3XrreJwHQuZmEe50KtwDCm9nwP5BXYBAj1NBmHrI1MFpCcUOR8OC4RvEU%2B68Ej1dy7ZS12UfZIIc0x9%2FWKJ6HvBBn83tEeUXbwZ6BMxRLFWwZXxajrR2gz9giVANUuhkZSmy7C%2BwtyDC%2BCOc3RLg8Yw9czdEs24upliaIaZm2fQrZx8r9%2FYZ74Ji%2FJMtxFCvbdwYSfmhzKbeNgMHDlmWEl9idzawTWqDU4TqM31Do4lRwFtEonpKKDtNUKVZduWVdIHYaFLB3Rp2ocsrbOpQCbQPkJLV8OSfc24Zm2shx741kurvg0%2FaF0lOFT%2FOZtvgz9lIZfaFkwmQgmSC735PYkjYVAjuQxd7Hc%2B%2B%2B1YXq1X7jKHSQPJy5v8M%2FkzbSxWOA82dlCMqS93XIRQrnwNvu2Om6EGtMQwYBypl2weUFS0E3AeH0hS04BbDWE0HtJv1d%2BMqRXRShkQ0As082DBGxLeBfS2hE4%2FAR%2BNbHOHDUE0t3pdeRXvO%2B5x%2BY8kUHUUPOEiTG0EOB%2BoYt%2F36UDGpRQSsTLiTOg93tTf06%2FBkYktdSVCJnwDoTNwbGmSalXAaOaTbZIWWEOZc43Vob7l5W6ItdzVtPZ8OQBLAnqoJK4NWaM9fdfFZTGqO5scXBFSQ3c43UaI6yRbf9JQwurTZyQY6pgHxSQ8xV2n4xDkY%2Bj6htGqASAGw4AEbtgB%2BHA6hrm%2B3inztfb784Qpom7ro%2Fs0ts26Pb92BDiyYmVFBTzdwQiF5rZ11P%2FlQbbBoA6Usjx037SXX91OssVNh1dtbsLdOjJ4BrJK7gurCoe7G5KWVAfz8E%2BupN2VHTvEAOBDw4S6UltoUDjKrqY8zHHVDZjVu8iBBldB16rgR1SpjXtUkIBa%2FGOeGd2ro&X-Amz-Signature=83db7719480732454695fbc873efa51a37d042ba59037dd0f3276d34cd9960a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
