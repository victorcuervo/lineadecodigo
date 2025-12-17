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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFJPFM3L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjVFArVb%2FtNaejoK%2BAbdQjPLnKuZ5T5suyBzAiot%2BgPAiBPsND46niDHRqPcRfsLRiGByTQzzVK%2FxpYimcMgjF%2BNyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMs4J7Yyi%2BipihcgfCKtwDvjUDCFnMo80CZnSEWBD8jXQDy2eCVPlFhGKKQ36R29hTbSQgZszHFW3%2Fu5oGSUVzHe9DuApEh8hnC3NtYaqWjxqRrMY8ocuqS297i7Rx8Znlmp8MkfXuCbNbObx04b3su4sqNFs9VUjW3B5Nl4YMrplzw0f9%2F651Surgp%2Bh0U8Qp7lhG4ECs8o7QPdoLd2IHsaIQvadvSdN38d47J0WrW1%2FDSoRX1HeO1VE834AcGVpKkCAj7sBqRUhnUjSpySGIfppe%2BzvxgCoderhlyXOHYiNk8%2F73cx7X%2B5FGFbVOOx%2FVw95rtjFIdQ6%2BRbHqvIbHpVLjkGN5cz%2BIvBuNKrpYeQOcR2bMs6F1S51ueUTq%2Fx08oXHMGor%2F4%2BwvDAs%2Bd6jKQq2TvvlCiSXYJALKvjinUKn%2F%2Fhd1ViutnnjkvKxHpskiEBXD9b0eb55zKZNkEyEBrTHLnZwBOc7bOFZ21xY6EZt0eiWGnfMdeWT9IU%2B3X1DfW44iAeDKAXY1VOBoBW39NsKfGJ6DdyyC924Hv0kr2MxLZ7sHZria1PwEZYKsM2KevuqEUldAKxkx1eQB2ufU2Xo7ghXsnQSY%2BYNJ12VHX3zoOPrK4JRcAlTqTPqzt8fu2Q1eCsd5gCJc8jEwn7iJygY6pgGw%2FVznclY1FdxXQiu6JFmiZXD2aoLgL94pGWNUB%2F%2BT2uGzqvxOUoCkUdk7TZWlvHxC8TZ6wYKt2gqHgCoyjYlj7wZoEKOC44xMBlvKzptR4NIv24lYiIDDo%2FX7WUl%2B8YVNf9M28z4dQvTbhP5WZ8jq4KGylkDY1nXmxo0KNI53%2Bs24sG%2FzoZVVUykx8TyPDkj9%2BNVEiuIbOjpG2ZwP2iTQA8DLT6Ls&X-Amz-Signature=e59a49e7d8025370a9b2f1c5827006c06e85c1209d8df572dd191ee07fd78742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFJPFM3L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjVFArVb%2FtNaejoK%2BAbdQjPLnKuZ5T5suyBzAiot%2BgPAiBPsND46niDHRqPcRfsLRiGByTQzzVK%2FxpYimcMgjF%2BNyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMs4J7Yyi%2BipihcgfCKtwDvjUDCFnMo80CZnSEWBD8jXQDy2eCVPlFhGKKQ36R29hTbSQgZszHFW3%2Fu5oGSUVzHe9DuApEh8hnC3NtYaqWjxqRrMY8ocuqS297i7Rx8Znlmp8MkfXuCbNbObx04b3su4sqNFs9VUjW3B5Nl4YMrplzw0f9%2F651Surgp%2Bh0U8Qp7lhG4ECs8o7QPdoLd2IHsaIQvadvSdN38d47J0WrW1%2FDSoRX1HeO1VE834AcGVpKkCAj7sBqRUhnUjSpySGIfppe%2BzvxgCoderhlyXOHYiNk8%2F73cx7X%2B5FGFbVOOx%2FVw95rtjFIdQ6%2BRbHqvIbHpVLjkGN5cz%2BIvBuNKrpYeQOcR2bMs6F1S51ueUTq%2Fx08oXHMGor%2F4%2BwvDAs%2Bd6jKQq2TvvlCiSXYJALKvjinUKn%2F%2Fhd1ViutnnjkvKxHpskiEBXD9b0eb55zKZNkEyEBrTHLnZwBOc7bOFZ21xY6EZt0eiWGnfMdeWT9IU%2B3X1DfW44iAeDKAXY1VOBoBW39NsKfGJ6DdyyC924Hv0kr2MxLZ7sHZria1PwEZYKsM2KevuqEUldAKxkx1eQB2ufU2Xo7ghXsnQSY%2BYNJ12VHX3zoOPrK4JRcAlTqTPqzt8fu2Q1eCsd5gCJc8jEwn7iJygY6pgGw%2FVznclY1FdxXQiu6JFmiZXD2aoLgL94pGWNUB%2F%2BT2uGzqvxOUoCkUdk7TZWlvHxC8TZ6wYKt2gqHgCoyjYlj7wZoEKOC44xMBlvKzptR4NIv24lYiIDDo%2FX7WUl%2B8YVNf9M28z4dQvTbhP5WZ8jq4KGylkDY1nXmxo0KNI53%2Bs24sG%2FzoZVVUykx8TyPDkj9%2BNVEiuIbOjpG2ZwP2iTQA8DLT6Ls&X-Amz-Signature=b28c64cdf69dd5ee2f97a7f53370a943344e9b2cc44be61c818bd65c015f75fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
