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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIMBKFT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhj%2BCi2AAtJcukqleAMabIajTxyPymeSFvSJsmS%2B10sgIhAKI%2BWqtttcBw7w%2FT0DOL169jpyp0kzBRNFCyc04unVp2Kv8DCFUQABoMNjM3NDIzMTgzODA1IgyFWQ151NWMED6gqdcq3AOcYh%2BBf0I30qAYD1nAoeeOT26oTmKIimAcHWeknZ23NDR0Ba%2FLLCIUolkKhd3VbKpwJQDZjcDQl4pld6W%2Bx9fqL3qwKxW%2FMG7%2ByIUVn3dZyEM8jnAkv4%2FWXT1PdWxb31%2FH3U20fRjfcf39%2B7BFOLvs50n9kwxO%2BiUUz6OxzI2RUtSl0Z4XHdyp68MkwurH2wGqhVNfLBzXfXRVJF20mNlpkwSZAUUQQCcdEDeVZp8TsBeDg%2FPqjaDOnTdWPcPNzLOQ%2BvtD%2FoBlzbNQ8x%2F5iHF0vhuvUGzMhuLN6pbE9CpwMJePDqFkdLHhhgIrHxc2JpkAz108PX2FQi2X9Lfkc7oji5dnpLcEpa0ONYc3UH604%2FIMfv%2Fz25yyBpZV%2BvT7tfmjZOWQKXUjI3xQeBmNk4s6%2B5tVzROUj%2BDcnz48yJT4KknNmuEQGVVr2NmAXu9qSQz5Zoo1Xj6Z8Mzy6chdo%2BUTvW1bOKFQVQgZBW71mRoKT7iEsk8GeawVW7ztXEZG%2BPWSwciS4i3Z85Lgw7J7e%2FWIwx%2FlbAC7vMcInZaKHMV1sZd4Y1rx2a53v%2FkfN8vZurQkqvVGcFRdDRykXGPg9pEnxbd%2B4IaA9M1KsdXlf7X8MFluXT5FPTcjUGtAsTCLqMnJBjqkAQn6H0WlT1C%2B%2FvTS8pY98NEg%2F0Nl0WY4K5WG%2F83udH%2BO9mG0hmEWVbds5BneKdDNvaTeWnvVdGxYKVQcvMEucKsZEaF3O7JK0fliTMLSbeucLQE89lpVjVaug8xNRwK6zwUJSKB0st4pG6CPrZRhSiIFpUWXZQn7fLXaOGfcd%2Bu%2BqB7YZTwnz7yK1eX7%2BEyKRm3EOSxCUg0GeDD2HFstTRk9jXVf&X-Amz-Signature=b97ae7f0606bd5efa6a44c2544e415b8d7e2f1b0a2db11f421fddca074a37bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIMBKFT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhj%2BCi2AAtJcukqleAMabIajTxyPymeSFvSJsmS%2B10sgIhAKI%2BWqtttcBw7w%2FT0DOL169jpyp0kzBRNFCyc04unVp2Kv8DCFUQABoMNjM3NDIzMTgzODA1IgyFWQ151NWMED6gqdcq3AOcYh%2BBf0I30qAYD1nAoeeOT26oTmKIimAcHWeknZ23NDR0Ba%2FLLCIUolkKhd3VbKpwJQDZjcDQl4pld6W%2Bx9fqL3qwKxW%2FMG7%2ByIUVn3dZyEM8jnAkv4%2FWXT1PdWxb31%2FH3U20fRjfcf39%2B7BFOLvs50n9kwxO%2BiUUz6OxzI2RUtSl0Z4XHdyp68MkwurH2wGqhVNfLBzXfXRVJF20mNlpkwSZAUUQQCcdEDeVZp8TsBeDg%2FPqjaDOnTdWPcPNzLOQ%2BvtD%2FoBlzbNQ8x%2F5iHF0vhuvUGzMhuLN6pbE9CpwMJePDqFkdLHhhgIrHxc2JpkAz108PX2FQi2X9Lfkc7oji5dnpLcEpa0ONYc3UH604%2FIMfv%2Fz25yyBpZV%2BvT7tfmjZOWQKXUjI3xQeBmNk4s6%2B5tVzROUj%2BDcnz48yJT4KknNmuEQGVVr2NmAXu9qSQz5Zoo1Xj6Z8Mzy6chdo%2BUTvW1bOKFQVQgZBW71mRoKT7iEsk8GeawVW7ztXEZG%2BPWSwciS4i3Z85Lgw7J7e%2FWIwx%2FlbAC7vMcInZaKHMV1sZd4Y1rx2a53v%2FkfN8vZurQkqvVGcFRdDRykXGPg9pEnxbd%2B4IaA9M1KsdXlf7X8MFluXT5FPTcjUGtAsTCLqMnJBjqkAQn6H0WlT1C%2B%2FvTS8pY98NEg%2F0Nl0WY4K5WG%2F83udH%2BO9mG0hmEWVbds5BneKdDNvaTeWnvVdGxYKVQcvMEucKsZEaF3O7JK0fliTMLSbeucLQE89lpVjVaug8xNRwK6zwUJSKB0st4pG6CPrZRhSiIFpUWXZQn7fLXaOGfcd%2Bu%2BqB7YZTwnz7yK1eX7%2BEyKRm3EOSxCUg0GeDD2HFstTRk9jXVf&X-Amz-Signature=ae42342566bf5dc5db9929bbe2c0e6d30ec5688f94b434607251c41e14301df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
