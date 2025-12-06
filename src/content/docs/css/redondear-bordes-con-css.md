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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VC42N5O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3pJBjobJPIWGv6L40BWM9ubMpOnAEvp7FgDubn6ylhAiEAuROYjC6r%2BUmCu5haQHy8MNQpr97WITzrdiDKDW2h4Dsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLFWc5iccKvGr3pdWSrcA%2Bk5BzwrSczPn1ow1J7zAg%2Bq1v684oU6aCjwcnUbh43Rd3igO37PHmpRNp8bAdqRcSvlKOrWaUzIDYdZowWqbmqPCxvR3xeFjt1z9qRYMHaNMqv2K3nIP67gdvykqzycevpieRvMgUXkC1rqeFEHGpdJf2xdj1y%2FXyamrMgcsGtx0%2BaThe2WXbbM%2FEvDDcE71CTYQX%2F%2BrJEymdZCRB0eT2Ern7CUcZO7TOlFCzjy61MEVKDa9zncAcAjURxhqvK0djw69wP9LBC49lMVsQ4SQM628Arv0%2Fcearf4XE0iThIGqNe1wJFsBZLdmGgQW1qyWVycFYKlm8E2KsKXE7QOXxjChGENlu6TGV1Y6mNeZUiuDlq5UNHphRbxuxfaIthtTB5caPMwyUOuMRZqB1DpJ4AFiyuRQD4HZdN4tRsKZb0OhzUdz%2FvKSBzOB2qaZaPrL2wfvQ%2FRtiQukWjygIFTz4243OjzFVlasfIavcJ9XRJY%2BW7qY3tooHBTaSOVxwB%2F31pAVRd4R7ITTs5LR750GzvXN4YuxxczHThPDtY2legDr0BXpsASx3x3W3WgnhYEg%2FFGzCR23fQSyXO9%2BrXb5RcXvyzfh8Iuo%2B%2FrywqEk590G7mqf%2BtMduhkteBqMLHU0skGOqUBkAg27v0F8ey2gXzfDxPbC0zARUem9Z2BUTkvR81oMRfFrb3ny0%2FTr6abRVhgPEF9kljHQM4bjfMt0zfZNuFcOgYFcA54Wd5Twk%2FrYKn7PCeg4cIQ9HYkZa4dvMtnOm7cmBWTLwUy3zgyhhISvmiYP8xv3JntcmIoAb8Cb05ZdCIMd4BBqSWYrk5GPCjevm3%2BDQ5fT8Jh8zOPTktOra63L4A6goll&X-Amz-Signature=6c5bb2480b0681a785d4d49fde070bed1bb9bdf1f48c45cdc89e4b5ecef555b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VC42N5O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3pJBjobJPIWGv6L40BWM9ubMpOnAEvp7FgDubn6ylhAiEAuROYjC6r%2BUmCu5haQHy8MNQpr97WITzrdiDKDW2h4Dsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLFWc5iccKvGr3pdWSrcA%2Bk5BzwrSczPn1ow1J7zAg%2Bq1v684oU6aCjwcnUbh43Rd3igO37PHmpRNp8bAdqRcSvlKOrWaUzIDYdZowWqbmqPCxvR3xeFjt1z9qRYMHaNMqv2K3nIP67gdvykqzycevpieRvMgUXkC1rqeFEHGpdJf2xdj1y%2FXyamrMgcsGtx0%2BaThe2WXbbM%2FEvDDcE71CTYQX%2F%2BrJEymdZCRB0eT2Ern7CUcZO7TOlFCzjy61MEVKDa9zncAcAjURxhqvK0djw69wP9LBC49lMVsQ4SQM628Arv0%2Fcearf4XE0iThIGqNe1wJFsBZLdmGgQW1qyWVycFYKlm8E2KsKXE7QOXxjChGENlu6TGV1Y6mNeZUiuDlq5UNHphRbxuxfaIthtTB5caPMwyUOuMRZqB1DpJ4AFiyuRQD4HZdN4tRsKZb0OhzUdz%2FvKSBzOB2qaZaPrL2wfvQ%2FRtiQukWjygIFTz4243OjzFVlasfIavcJ9XRJY%2BW7qY3tooHBTaSOVxwB%2F31pAVRd4R7ITTs5LR750GzvXN4YuxxczHThPDtY2legDr0BXpsASx3x3W3WgnhYEg%2FFGzCR23fQSyXO9%2BrXb5RcXvyzfh8Iuo%2B%2FrywqEk590G7mqf%2BtMduhkteBqMLHU0skGOqUBkAg27v0F8ey2gXzfDxPbC0zARUem9Z2BUTkvR81oMRfFrb3ny0%2FTr6abRVhgPEF9kljHQM4bjfMt0zfZNuFcOgYFcA54Wd5Twk%2FrYKn7PCeg4cIQ9HYkZa4dvMtnOm7cmBWTLwUy3zgyhhISvmiYP8xv3JntcmIoAb8Cb05ZdCIMd4BBqSWYrk5GPCjevm3%2BDQ5fT8Jh8zOPTktOra63L4A6goll&X-Amz-Signature=203cb9992df37b262b40d91933ed4ce032dcadc05dce5b0cbe628ba79b1e3436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
