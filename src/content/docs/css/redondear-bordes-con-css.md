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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC4XRQEV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7ULD6J%2FdFDKqPa3CICviiNZGYBsEySEpRxmajVe3SrgIhAPibVdGcxtB0E8wy2AQ%2FFN1mDonktEAV2Z1sziH6%2FKsXKv8DCFoQABoMNjM3NDIzMTgzODA1IgyQKBo9QzS4K4nZfWwq3ANx%2BTUkHBOZZ8PWRv8h6EK2Pvy%2FxVC2etdSBRHoPGy2sZv4sd0UEW5S38ICNtZI5tWVjjIumD%2Fv8xBeeHVdKFezdJUeDEPMbeg7AEvlwSPgTYku%2BBiqRN5SZLRrBTIMQnzqEUcwAyfhTuZzw514fX%2BHKQGj8io9xE1OffvSP6tpnqkKahh%2Fjcmyz30cksBHpw01rOXaiEpfX%2FTR9Aru51SiNFCjJb%2FnMN4kFIogN37K77JOOpS29UAZ7ReMW46oTzCvM5h8QZOF%2FHR4FGCd0IerXhR9Ssvm6qYWGxQxPOzDwzXIAtAytFnNCIc0NrUuD%2Bkq94IqwO2UK2bkSsCYxQ31OacsYJFL7GlA%2FbOI6QGNr6W8P1ou38nsIrlUrv3xiJqx%2FYtsPeJ71u4z2VIi5SjkA9F7UugkIzY%2FozInhkRMt8Wd2KtuyHqwj9yMc8vcbRTpvNeq9jDePnkqWCc6CdT8t0ls3eTRpNMbupIz77WYXCMHfwxwSxm9ErTZd%2Ba7EgZT7RgWtJpqi1Mm2gq0dGju7KvVI%2FeY5AfGD41lfR0lovXHZqQ1svqZbH9wBSZ9V2GRzJatLDdTww2VzS3V38pCX%2F3W%2FPrIxiULPiCFrjOOIyUC7amRTcW6JQS%2BfzCYyMrJBjqkAXnWWNiJ%2BOIL0bVBVffvmMVX%2BTcLF1jpSPYgf3ZgeoelWd54DHM0Wa1i6Po%2BuIzbdpx2hTZzHK0wNQYIAMRfd108%2BOvBrU%2FFHTKs8M5ZCiQE3LbcaSOtPhKA%2B41H2XHixaOzXXmLRaj2n7UgEM7bPrpTrSXlR7wet6ls4AWTDRoJFCt4f0DXclV6LWmlP77uAedaK9dWdrC8r0pIIlPnTo5Vs9Qc&X-Amz-Signature=b4e02936a3f208f88d9d68aa4213996a510175ba2f1cb9576c10e2aed33d6e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC4XRQEV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7ULD6J%2FdFDKqPa3CICviiNZGYBsEySEpRxmajVe3SrgIhAPibVdGcxtB0E8wy2AQ%2FFN1mDonktEAV2Z1sziH6%2FKsXKv8DCFoQABoMNjM3NDIzMTgzODA1IgyQKBo9QzS4K4nZfWwq3ANx%2BTUkHBOZZ8PWRv8h6EK2Pvy%2FxVC2etdSBRHoPGy2sZv4sd0UEW5S38ICNtZI5tWVjjIumD%2Fv8xBeeHVdKFezdJUeDEPMbeg7AEvlwSPgTYku%2BBiqRN5SZLRrBTIMQnzqEUcwAyfhTuZzw514fX%2BHKQGj8io9xE1OffvSP6tpnqkKahh%2Fjcmyz30cksBHpw01rOXaiEpfX%2FTR9Aru51SiNFCjJb%2FnMN4kFIogN37K77JOOpS29UAZ7ReMW46oTzCvM5h8QZOF%2FHR4FGCd0IerXhR9Ssvm6qYWGxQxPOzDwzXIAtAytFnNCIc0NrUuD%2Bkq94IqwO2UK2bkSsCYxQ31OacsYJFL7GlA%2FbOI6QGNr6W8P1ou38nsIrlUrv3xiJqx%2FYtsPeJ71u4z2VIi5SjkA9F7UugkIzY%2FozInhkRMt8Wd2KtuyHqwj9yMc8vcbRTpvNeq9jDePnkqWCc6CdT8t0ls3eTRpNMbupIz77WYXCMHfwxwSxm9ErTZd%2Ba7EgZT7RgWtJpqi1Mm2gq0dGju7KvVI%2FeY5AfGD41lfR0lovXHZqQ1svqZbH9wBSZ9V2GRzJatLDdTww2VzS3V38pCX%2F3W%2FPrIxiULPiCFrjOOIyUC7amRTcW6JQS%2BfzCYyMrJBjqkAXnWWNiJ%2BOIL0bVBVffvmMVX%2BTcLF1jpSPYgf3ZgeoelWd54DHM0Wa1i6Po%2BuIzbdpx2hTZzHK0wNQYIAMRfd108%2BOvBrU%2FFHTKs8M5ZCiQE3LbcaSOtPhKA%2B41H2XHixaOzXXmLRaj2n7UgEM7bPrpTrSXlR7wet6ls4AWTDRoJFCt4f0DXclV6LWmlP77uAedaK9dWdrC8r0pIIlPnTo5Vs9Qc&X-Amz-Signature=34c262ced4615b01a6b038be228c55c16453dae40db5aa64d0a62cb81ed0dbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
