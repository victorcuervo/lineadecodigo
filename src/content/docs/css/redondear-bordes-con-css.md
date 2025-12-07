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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMS2XFO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwjmqWHS4wzPrKQSJ64Pfa2LsGCsPULiBj6EvWIiJokAiAqDkMvDTy4%2BXvoCH7R0OOjOHBPcExmeclv9%2Fyt8rNknSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYBs4L9Ygmy1b4C3tKtwDLUWIhyrfgD1Y8DtVhKZbEISKTh8uczySMvOrLfaNq07u1CqS5Dn%2Bm%2BGjpNCUxHO%2BPHL7%2BumBF1rvbbJxoFtFVlH8s3I1vFpRbYW7pIXnzktxI46FREPPw%2FLp6PpAkWV8Oia92Y4MdOdOvxZkfIoa6M99tSGvAZ8CrWNrNY8BPRhQC84xRL6GqApd5joPqwNigW9S3rfzErA1sBYyKJstzuG26omO8JkuRmwPCgYoYmRx8XO0brwm95RkB4%2BoTXU%2FG9BeU4tbmIaDHwunrxgZNaXuWhLc85hP%2FajmAJ0fBRUoa6OW%2FGq9Nx8qHXJD084%2FaUaPQCAqv88535kBs6iCT0bZr%2Bk0VRkvkEgp%2Fxxty6S%2FGKWB48Q1gwZbRGL5z5FwqW8Ddezl977sRPbfE3wEmgd2kywdId1Yw5UUZod45bUl%2Fv8TVI2zviNUBDpyyYGqdVW4DQFXK8%2F88BSGYEGd7w4E21XgBOTXbxf6CdaV4yUIQEe7D1vQnRujc6WyCWYtGIrtblz3N1MwZRCH8RjG77zY2A3dJUczaL2LcQ8s9w4006n5ahfRK6E7Winu5jEAASh0FgzAL%2F4mOxH2cB35IYKTFcT1XerdZn72woeK4Tpc%2BnY9Df835DQJ2bQwuJnVyQY6pgHGDvf%2BE6lmhoFvyxEls2bXrU7%2BHhISXUz3qyNKSLAi7ifNdwGizc5C42utUH4dyGwl3awNweRcNqqpqcVJtjaA%2FE2ZblxdgmAOiWj4INaH4By5M%2F3osQGzOoyb8eCYbwVOD2udRtK9moDYSHIm2u%2FkVGRq86Eo4TmK0dqzgObCcIScb1sUUpQ45v2Nn3yW8Y274qrLCkYbJafBnIwnIQ8nRPJuFbmn&X-Amz-Signature=1c23a47fbf0d363cebe32762334800e97d039b93329e066dca023cc2e3a9506f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMS2XFO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwjmqWHS4wzPrKQSJ64Pfa2LsGCsPULiBj6EvWIiJokAiAqDkMvDTy4%2BXvoCH7R0OOjOHBPcExmeclv9%2Fyt8rNknSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYBs4L9Ygmy1b4C3tKtwDLUWIhyrfgD1Y8DtVhKZbEISKTh8uczySMvOrLfaNq07u1CqS5Dn%2Bm%2BGjpNCUxHO%2BPHL7%2BumBF1rvbbJxoFtFVlH8s3I1vFpRbYW7pIXnzktxI46FREPPw%2FLp6PpAkWV8Oia92Y4MdOdOvxZkfIoa6M99tSGvAZ8CrWNrNY8BPRhQC84xRL6GqApd5joPqwNigW9S3rfzErA1sBYyKJstzuG26omO8JkuRmwPCgYoYmRx8XO0brwm95RkB4%2BoTXU%2FG9BeU4tbmIaDHwunrxgZNaXuWhLc85hP%2FajmAJ0fBRUoa6OW%2FGq9Nx8qHXJD084%2FaUaPQCAqv88535kBs6iCT0bZr%2Bk0VRkvkEgp%2Fxxty6S%2FGKWB48Q1gwZbRGL5z5FwqW8Ddezl977sRPbfE3wEmgd2kywdId1Yw5UUZod45bUl%2Fv8TVI2zviNUBDpyyYGqdVW4DQFXK8%2F88BSGYEGd7w4E21XgBOTXbxf6CdaV4yUIQEe7D1vQnRujc6WyCWYtGIrtblz3N1MwZRCH8RjG77zY2A3dJUczaL2LcQ8s9w4006n5ahfRK6E7Winu5jEAASh0FgzAL%2F4mOxH2cB35IYKTFcT1XerdZn72woeK4Tpc%2BnY9Df835DQJ2bQwuJnVyQY6pgHGDvf%2BE6lmhoFvyxEls2bXrU7%2BHhISXUz3qyNKSLAi7ifNdwGizc5C42utUH4dyGwl3awNweRcNqqpqcVJtjaA%2FE2ZblxdgmAOiWj4INaH4By5M%2F3osQGzOoyb8eCYbwVOD2udRtK9moDYSHIm2u%2FkVGRq86Eo4TmK0dqzgObCcIScb1sUUpQ45v2Nn3yW8Y274qrLCkYbJafBnIwnIQ8nRPJuFbmn&X-Amz-Signature=c7ad1e91e1deb93fd4b5896a55c4054edaa953ba13b11eb26416692eb66097b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
