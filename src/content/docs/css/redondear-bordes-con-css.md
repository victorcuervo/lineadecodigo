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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKCTJPV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDatf1q3cthNUTMSXQ3x%2BJpenZYcTi6kBeaFE%2Fjd%2BgtfQIgZDweDZ7uqubr1TkkQuoSaMSDGtV%2FM53FFs%2BywAYaTkIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEg3QwJTpN5rBzg%2BuyrcA0dAvjl6uEfsp2ea%2B8goNZY2v68I3UK2dBHipar9TKAAztgHbc63Fw%2FhJ2jbUitGHTiNc%2Bi8eCzsuWGbFpb2GSvBGb02DvFlllxvB6%2Fa%2B0W%2B8C0%2FeViUR%2BZlUBjYffWlb%2FDtT2WTg8ulLgsPcD1KrDLsDla80Ki1OB7lhGos%2FzRG392A2hmGIiNv1HcY4XBp%2FfGcA0c3aaqfReh4SaPzvdOS0eDqqKAcR90gfnNwvJjh2qn35gAmIgJjtor2v5Wr%2BzHojr%2F8eHwF7jw0VK2x9gbRoPEoO%2Fgw0WsLP0n7LoHAZ6zt6KrQh7e8k3jSr6NRiswU3G%2FZfSs%2FXqVpNe1ay24wxwQpuyx9hOqzDlIzuEX2EEj8T3pS1BGlmI1OKomvOrAM1gpAWREDCjcilmCNPVB1WhbOwBXKsA6rS0Ztu%2FFk1WW3lEDCuJvjcXZqkzbZKQ4aXvMWTUPQTY4y%2BL4xZvLxCWXPjXW%2FxY%2B7UOGmJCiri9iDt9GE08W60mjaX5Y2%2BqWQJp6qIKyw7XaWcg4DbpSFo9nUhRYrAuFilY5EIrHH%2FwafNt8d%2B0qYOdfFyy%2FNRkAcSb9aN9IAoiwrDWPoq9eFaNVS5kuLYlhSENWOdfWlUaUEKK4KwIOKgbdhMNPG0ckGOqUBtdXxFaH0ulCzvvSX4PG3QmQnw6PuIqgt1C4VQM%2BgydZnJPsEDZPwwGAB08o%2F3tRNigcTlGM7hPeBYye3DcFePNJkH2GRz%2Br2lReYtReEQQ0J01iPyrw2NrT8Z8jCaUEDUW9WiJ4sO8RieAtswAQFufhPaz1S7IEWSHHcgN5ID5kepc1PqsKtmYFXoZTsqhFD1vIsSXvK5uLtdXOAR%2FObouJfW%2Bmw&X-Amz-Signature=0b267d2c0deb7bc0c8bf4eaa6d1d71442a94d1cca832af975e2dd1af1f627044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKCTJPV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDatf1q3cthNUTMSXQ3x%2BJpenZYcTi6kBeaFE%2Fjd%2BgtfQIgZDweDZ7uqubr1TkkQuoSaMSDGtV%2FM53FFs%2BywAYaTkIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEg3QwJTpN5rBzg%2BuyrcA0dAvjl6uEfsp2ea%2B8goNZY2v68I3UK2dBHipar9TKAAztgHbc63Fw%2FhJ2jbUitGHTiNc%2Bi8eCzsuWGbFpb2GSvBGb02DvFlllxvB6%2Fa%2B0W%2B8C0%2FeViUR%2BZlUBjYffWlb%2FDtT2WTg8ulLgsPcD1KrDLsDla80Ki1OB7lhGos%2FzRG392A2hmGIiNv1HcY4XBp%2FfGcA0c3aaqfReh4SaPzvdOS0eDqqKAcR90gfnNwvJjh2qn35gAmIgJjtor2v5Wr%2BzHojr%2F8eHwF7jw0VK2x9gbRoPEoO%2Fgw0WsLP0n7LoHAZ6zt6KrQh7e8k3jSr6NRiswU3G%2FZfSs%2FXqVpNe1ay24wxwQpuyx9hOqzDlIzuEX2EEj8T3pS1BGlmI1OKomvOrAM1gpAWREDCjcilmCNPVB1WhbOwBXKsA6rS0Ztu%2FFk1WW3lEDCuJvjcXZqkzbZKQ4aXvMWTUPQTY4y%2BL4xZvLxCWXPjXW%2FxY%2B7UOGmJCiri9iDt9GE08W60mjaX5Y2%2BqWQJp6qIKyw7XaWcg4DbpSFo9nUhRYrAuFilY5EIrHH%2FwafNt8d%2B0qYOdfFyy%2FNRkAcSb9aN9IAoiwrDWPoq9eFaNVS5kuLYlhSENWOdfWlUaUEKK4KwIOKgbdhMNPG0ckGOqUBtdXxFaH0ulCzvvSX4PG3QmQnw6PuIqgt1C4VQM%2BgydZnJPsEDZPwwGAB08o%2F3tRNigcTlGM7hPeBYye3DcFePNJkH2GRz%2Br2lReYtReEQQ0J01iPyrw2NrT8Z8jCaUEDUW9WiJ4sO8RieAtswAQFufhPaz1S7IEWSHHcgN5ID5kepc1PqsKtmYFXoZTsqhFD1vIsSXvK5uLtdXOAR%2FObouJfW%2Bmw&X-Amz-Signature=92262a4dc831714c8fc9a34eed63601139f24fb023a2b02d651ebf338618752c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
