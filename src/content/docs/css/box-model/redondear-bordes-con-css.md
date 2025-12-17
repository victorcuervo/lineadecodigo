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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUDIZXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBZ8V0Jp7oerzRd%2FhX0AiiqcqkdD1atcMTGtkVBg9eTAiEApA5GUX%2B6jirIxaZv%2Fb4gDB7123MXVe%2BCeqyGp1Ah9a4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBRwj6F87GwiD8UR8ircA7F%2BbwgzcWdyu%2B%2BnqZ7uOsjheQNUWLBQnjKgkS9qIJ8CvAWZ3iK5V1Q36Ue6QEThfoX41GTZmeb%2F%2BzxU2SgStzVGhayhcySSJ5iNt90cAkqxRM%2Be1cXVVJCYUkRt7cKg%2Bff5hDmHWYbfCnEcvPpYffI5UZBkBlseCIqmakacDmWS0DJMvYW5zE2ITTuF8Cg00PIkDt8EBNdckFJk%2B6bV67NUPAOFdPbSDxuqU4zz8F8O1%2BcKiYJ2ww4rgcIwTrsq4xmblBbKwY0eeElF7tCuQ6a2RNnuihll04jhAfPgLQ8pn2zBAG0E8oWND0r9BnLZqlzSRDUpeM7zDuMVEWZlLxEIXW4Z5VJLzGk1xRaZyOHeB4O72VNT6p4FRJruCQFG01pONe20Fy5uRfZWR1INuKABDuOdcq9WJR0RHrD9ICSpBuRWAoLQZBnBqNK39VNHsPax3KQXm2pT0mbuV3lVcbBcYr7H4RcWAraaiIDH%2Frb19MTEg7MQDBxfPiKcoXmze3DQ2PYO%2Bz99U1D2UXwL17wM%2B6CwQ9p%2BN8n77FF2hksv%2BccvaQ8djGJ8MibPSFgvAoI5LOb4hOPb1EiKf0M%2FYO3IuV5Egq99Br0YCVwh9D3NY%2FOBJE7MDoY0y2FMMPSOisoGOqUBSOQmH8AYZSjBPp8xuJRGL9rcOWy5sirW0PXJhhVb6Lm7B9vWwOAheDwF0x89P9oQ4Pp9%2FTFhcaFkcvrobn6TIBhpVb5RJ%2FHNVTN6L2Cq%2F0qxTpVWRNeKRzV7LExUxU%2BHXPB3rreCOGo83k%2BanZzW6NgVmPFHmWOC1RhovFLqqnaIGF%2Bk2v1IyVCaNRg4tHNITei441xV0nfQSoSWV3DAgBckwY8H&X-Amz-Signature=1594f8cd22450f341672d7d6a7092840984a182fab40f067b90d3a6e0c53c8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUDIZXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBZ8V0Jp7oerzRd%2FhX0AiiqcqkdD1atcMTGtkVBg9eTAiEApA5GUX%2B6jirIxaZv%2Fb4gDB7123MXVe%2BCeqyGp1Ah9a4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBRwj6F87GwiD8UR8ircA7F%2BbwgzcWdyu%2B%2BnqZ7uOsjheQNUWLBQnjKgkS9qIJ8CvAWZ3iK5V1Q36Ue6QEThfoX41GTZmeb%2F%2BzxU2SgStzVGhayhcySSJ5iNt90cAkqxRM%2Be1cXVVJCYUkRt7cKg%2Bff5hDmHWYbfCnEcvPpYffI5UZBkBlseCIqmakacDmWS0DJMvYW5zE2ITTuF8Cg00PIkDt8EBNdckFJk%2B6bV67NUPAOFdPbSDxuqU4zz8F8O1%2BcKiYJ2ww4rgcIwTrsq4xmblBbKwY0eeElF7tCuQ6a2RNnuihll04jhAfPgLQ8pn2zBAG0E8oWND0r9BnLZqlzSRDUpeM7zDuMVEWZlLxEIXW4Z5VJLzGk1xRaZyOHeB4O72VNT6p4FRJruCQFG01pONe20Fy5uRfZWR1INuKABDuOdcq9WJR0RHrD9ICSpBuRWAoLQZBnBqNK39VNHsPax3KQXm2pT0mbuV3lVcbBcYr7H4RcWAraaiIDH%2Frb19MTEg7MQDBxfPiKcoXmze3DQ2PYO%2Bz99U1D2UXwL17wM%2B6CwQ9p%2BN8n77FF2hksv%2BccvaQ8djGJ8MibPSFgvAoI5LOb4hOPb1EiKf0M%2FYO3IuV5Egq99Br0YCVwh9D3NY%2FOBJE7MDoY0y2FMMPSOisoGOqUBSOQmH8AYZSjBPp8xuJRGL9rcOWy5sirW0PXJhhVb6Lm7B9vWwOAheDwF0x89P9oQ4Pp9%2FTFhcaFkcvrobn6TIBhpVb5RJ%2FHNVTN6L2Cq%2F0qxTpVWRNeKRzV7LExUxU%2BHXPB3rreCOGo83k%2BanZzW6NgVmPFHmWOC1RhovFLqqnaIGF%2Bk2v1IyVCaNRg4tHNITei441xV0nfQSoSWV3DAgBckwY8H&X-Amz-Signature=c3d756ac2b643b10e528228873dd9c591921869f43b5c3e3af594bde4f161c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
