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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKNXJVK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe2sZiYyy987hsU3H712B5wb9Q%2B94SVQdfVvSBacVdXAiBNYNpeYksJ4slZbhBLVumd0ptpHLzQZWJ2NLcBVms3niqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu2ORHm1hRZmq76GKtwDCcktcZAm2cBPEZqryxygKgqPoXXRx4mw914pM7g8lKqkfaKrOnUtsL9Wnjt168%2BoChj%2BWYlYN0iH7B38UYLjezF99htvW9JjWoWe1oSyqwOpmIWCUXKCX4OENxCYw1rLUUvx%2FaeEDF3OjBsy9yVtaGDxXL%2F6fTekLqHD9LkhJWdaYrf1fq%2FLngbzr%2Flw8FivPXw%2BmHoLOqJJlR%2FmlHHZltQQB2pc7At4Bkp9IR2zbL7sjdQWbiAUoIxFjwYBGN45IWtQB3TpN9efGaV068q5%2FyPAOqgv%2B2owRNphpqH3eNCXvdxv5fqUbj1%2FabJOXHTSsTsKCu%2Bz3%2Fx9%2B5knA%2FC0cIZ1tuBvQViigpojjYESZR50OyF4K4EChEZ62ZDIMOS2sFigiVEljUAKdQ0YPkx%2FKNJ8UQvEo%2B5gDmXoLCPYjTKyJdNWLUlTI6Kr0d4%2BZ0oHYfGNbBuVfcapHpdoKzG%2F85XRCHOqXwbxhF1TLqSWT0BKdn9uJ2cgcUXdyCdcolGJm8UNaWA5VfFZdzqfZn%2Ff0tWq8jzc2QPET2IcDV8Rgo6YUorN%2B2rwbGT2WruX1%2FgHKKdyc9CYuJY4ArIiJdYitxQHoLztjGq%2ByVwB8ghCW4HK6J1Imt%2BpczW2M7sw49zcyQY6pgGhNE37AdXknDYz0UPxl1XhMrB4q7Z7sZjZ4ZNmwhKpuxtZDo9iHnzHaE8uCQAGaWrhlW81RUBsu32KhGkpVEYOzk6hz1VDabn9jzh%2FpbuVRIJI8Vf1zfWcdxb0MxNr7%2FF%2BpeNRUcL5kOk507lcSh3l8KUVqYkw8jc%2BNYcPeiMKnuFkCup0F4EwrQVhnbRBgxCFpAOuJg4C8BvprBgT88hrHrLCI7mo&X-Amz-Signature=fb2aedd0e505fe2a50fdc7c8fd16e6c3335f1427eefdd68e64d22ee0f262c514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKNXJVK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe2sZiYyy987hsU3H712B5wb9Q%2B94SVQdfVvSBacVdXAiBNYNpeYksJ4slZbhBLVumd0ptpHLzQZWJ2NLcBVms3niqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu2ORHm1hRZmq76GKtwDCcktcZAm2cBPEZqryxygKgqPoXXRx4mw914pM7g8lKqkfaKrOnUtsL9Wnjt168%2BoChj%2BWYlYN0iH7B38UYLjezF99htvW9JjWoWe1oSyqwOpmIWCUXKCX4OENxCYw1rLUUvx%2FaeEDF3OjBsy9yVtaGDxXL%2F6fTekLqHD9LkhJWdaYrf1fq%2FLngbzr%2Flw8FivPXw%2BmHoLOqJJlR%2FmlHHZltQQB2pc7At4Bkp9IR2zbL7sjdQWbiAUoIxFjwYBGN45IWtQB3TpN9efGaV068q5%2FyPAOqgv%2B2owRNphpqH3eNCXvdxv5fqUbj1%2FabJOXHTSsTsKCu%2Bz3%2Fx9%2B5knA%2FC0cIZ1tuBvQViigpojjYESZR50OyF4K4EChEZ62ZDIMOS2sFigiVEljUAKdQ0YPkx%2FKNJ8UQvEo%2B5gDmXoLCPYjTKyJdNWLUlTI6Kr0d4%2BZ0oHYfGNbBuVfcapHpdoKzG%2F85XRCHOqXwbxhF1TLqSWT0BKdn9uJ2cgcUXdyCdcolGJm8UNaWA5VfFZdzqfZn%2Ff0tWq8jzc2QPET2IcDV8Rgo6YUorN%2B2rwbGT2WruX1%2FgHKKdyc9CYuJY4ArIiJdYitxQHoLztjGq%2ByVwB8ghCW4HK6J1Imt%2BpczW2M7sw49zcyQY6pgGhNE37AdXknDYz0UPxl1XhMrB4q7Z7sZjZ4ZNmwhKpuxtZDo9iHnzHaE8uCQAGaWrhlW81RUBsu32KhGkpVEYOzk6hz1VDabn9jzh%2FpbuVRIJI8Vf1zfWcdxb0MxNr7%2FF%2BpeNRUcL5kOk507lcSh3l8KUVqYkw8jc%2BNYcPeiMKnuFkCup0F4EwrQVhnbRBgxCFpAOuJg4C8BvprBgT88hrHrLCI7mo&X-Amz-Signature=96dffabbcd357c297b06b9e701c98a56b380a6ceaf828400576e01fe490ef4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
