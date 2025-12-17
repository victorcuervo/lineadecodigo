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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQACIYI4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDT6YanSytLkEMMpeqEL%2FNzrjF3mSf2stpY7uHdPIXYIAiBMZzOhodrWEEOxsAB0Sygks%2Bq%2FfEaB0d%2FWSIdzG2Z%2B2yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQwEW65sPKmznorFeKtwDBEt8y4AVTe7EGzVEbDjkGRTTNNxg0D7bnAHIcj%2BseO0Ekoisnyqgth1hx%2FtAx5uGZfkfEhFtXy9I4A0tbzfPrksV43wRL5cpYG34Rrg5SEp97ysNJpvGWDA8sg3MR2y1pelGJUAzT3MIctutUQPb0BkgyVcy422%2FvRXRa0osIB67rPHY3mSUl3In2eNjngkeFfh9VPGMHZ0ouvPtS9DG5NwkJwO0f8f1cgda1BsX%2BD7UMgtnr613duujbTYEYKu7G69SCJgAGO1NLqpC0KETnUp%2FGTd42Tch%2BqK360yAQ0IEevgjyZt7du4u90ockAlAB40EoOqQEgE52TqeFTCi%2BXWpmsbigqWGSoi72fY9lgSfg3w%2BeAqoAtkipe8McxSUVGmriptSUi0kU7GRBwd80lZt%2FZkcWxqD1nf64ZxIJ%2BFoh7Dr417kke5kY6AqtFsvvTg%2BNtL%2FoVg01qlGssHWXymdmW3Y9ujpaTw29xpvwEcyZz3KCkpBwD0LhkSbVa9BIu3jSMS%2BkB%2FbFhccOfA6vhcuez9xJtMoyJWLDSKczRl5AFgFPOF2l9QKA1un1ziFl7K%2FIMKo%2BcfzzVcI0i6QORCMjeFFt56H3U11L7w767wcSCo80YzaFcFU850whoCLygY6pgGQhu%2BP0qN6dwU3O9PeJT5bqSg965IBHoLSQK7MN3zoH%2BTzr2XTDxP6iEaEBxwEwN0FUy1qlwWyowME41hBfqnRS4y2DvZUKLDbT7BdhNQIrVVP8Zrsgj0WwzUafyh5trD5nkKeXpk7%2BLInlCef7vS0vujA%2BU65NlNjXfdFalvaOZ3r%2Bw7nMroc28hCX5qejJMgd5kldZsNEi342sCDtF1LcOmdx6nv&X-Amz-Signature=c5c0d10418ba01265e3173f6d6bb4e9c19930a6ea89ed6a4490cbaabee275a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQACIYI4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDT6YanSytLkEMMpeqEL%2FNzrjF3mSf2stpY7uHdPIXYIAiBMZzOhodrWEEOxsAB0Sygks%2Bq%2FfEaB0d%2FWSIdzG2Z%2B2yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQwEW65sPKmznorFeKtwDBEt8y4AVTe7EGzVEbDjkGRTTNNxg0D7bnAHIcj%2BseO0Ekoisnyqgth1hx%2FtAx5uGZfkfEhFtXy9I4A0tbzfPrksV43wRL5cpYG34Rrg5SEp97ysNJpvGWDA8sg3MR2y1pelGJUAzT3MIctutUQPb0BkgyVcy422%2FvRXRa0osIB67rPHY3mSUl3In2eNjngkeFfh9VPGMHZ0ouvPtS9DG5NwkJwO0f8f1cgda1BsX%2BD7UMgtnr613duujbTYEYKu7G69SCJgAGO1NLqpC0KETnUp%2FGTd42Tch%2BqK360yAQ0IEevgjyZt7du4u90ockAlAB40EoOqQEgE52TqeFTCi%2BXWpmsbigqWGSoi72fY9lgSfg3w%2BeAqoAtkipe8McxSUVGmriptSUi0kU7GRBwd80lZt%2FZkcWxqD1nf64ZxIJ%2BFoh7Dr417kke5kY6AqtFsvvTg%2BNtL%2FoVg01qlGssHWXymdmW3Y9ujpaTw29xpvwEcyZz3KCkpBwD0LhkSbVa9BIu3jSMS%2BkB%2FbFhccOfA6vhcuez9xJtMoyJWLDSKczRl5AFgFPOF2l9QKA1un1ziFl7K%2FIMKo%2BcfzzVcI0i6QORCMjeFFt56H3U11L7w767wcSCo80YzaFcFU850whoCLygY6pgGQhu%2BP0qN6dwU3O9PeJT5bqSg965IBHoLSQK7MN3zoH%2BTzr2XTDxP6iEaEBxwEwN0FUy1qlwWyowME41hBfqnRS4y2DvZUKLDbT7BdhNQIrVVP8Zrsgj0WwzUafyh5trD5nkKeXpk7%2BLInlCef7vS0vujA%2BU65NlNjXfdFalvaOZ3r%2Bw7nMroc28hCX5qejJMgd5kldZsNEi342sCDtF1LcOmdx6nv&X-Amz-Signature=1cc9046f643a02433d21a3b2a382c58e9cb5d9505387a0fe1c690af7588fa241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
