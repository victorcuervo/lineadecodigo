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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGHX2R2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdV%2FfJdLkaQJ7ftvbJ0ZIvXslmE3nAqw6SG8I5gYHQ9wIgb4Xa9QTj%2B5Dl1Yhy5IlzRdSfXQNNTe16L5Wy5Ky0PO8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHlcGQVqMr5aKyxtoyrcA2FCrBridQUm8iVfQcVEOJqk1anRDW74CS9lSQz0qaQMgcY%2B2Ym8w5paMP7c1m6jnaZ8c8Oa9JubWytTuZUcdXfD6m60kVmuIscZbZnA4s2VW2m6UAAHr8hLbOe8j27BTEbduqzKLG5pq2MldaVrXtKIQ3TBzhWcj2YsAjJSFqT75zsr0sdLXkWsw%2FgMf63RfZniYxTuHWsVYVkSRXXyRXTE5aLhB%2FtTVlzFsd3%2BT4EbGzwADkXpE0rcyBLUkdUAdzb7y3AHgleTS%2FDTyi%2BEjwH9puen2v1YbzqExhYxhOW5yUlQ2zU7umss7GJ6v2ZauDLMN2zGl9YvzaB0YiZAdzMznYBXLRJdIdVWTuNmVrijNTJNdKB3A19oDOCF7R3JfgGEEG%2FziokZKoprSHFhebDzuakhJ5HeIU6ba5rmd5KMCpVYbxbHydKH2cmgniW%2BPS5xpDsMubWrCjkxsuR8fXFC%2FWF8UtC5C1GqBnwu0D7nKhJa4rM6ENzYqJXpdEmzpcout6FUPSgOdAqJcHqRNdWM7oS1tdS%2FN6qwSGEn0Rnd6X13XRmPiPpuLSOE6PitM9wA%2FsvaUtN4SMx%2FQm5CwSWfmRSxvPVXz4GUmqYoldyMbLFN7Oexh0kbGOKyMOKm0MkGOqUBR1sJNLlgatGPxe%2F7hX1snMU2HvsfPKMTeUHkeHcevXzFMlf7ET589zSPGKEEu3auPTFYWaHTbkHm%2FWxyOxTbJEhBSCuMIES96XbdDhtzfUubVPaNM4qzLJ2mOdFlF55xZ9nL0%2BIodnaRkq1TVuX0hAJhXVs%2F1JJG210MVIkO49cDr3cu8xHk7SqyWxtX%2BMhB1jepsgMkyHNQi07Ulgn%2BwqhP4FO%2F&X-Amz-Signature=c9dd59e7ebfc9c1c2025067ba1da7aa08746f88c8115a2ebd45d04406c30f9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGHX2R2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdV%2FfJdLkaQJ7ftvbJ0ZIvXslmE3nAqw6SG8I5gYHQ9wIgb4Xa9QTj%2B5Dl1Yhy5IlzRdSfXQNNTe16L5Wy5Ky0PO8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHlcGQVqMr5aKyxtoyrcA2FCrBridQUm8iVfQcVEOJqk1anRDW74CS9lSQz0qaQMgcY%2B2Ym8w5paMP7c1m6jnaZ8c8Oa9JubWytTuZUcdXfD6m60kVmuIscZbZnA4s2VW2m6UAAHr8hLbOe8j27BTEbduqzKLG5pq2MldaVrXtKIQ3TBzhWcj2YsAjJSFqT75zsr0sdLXkWsw%2FgMf63RfZniYxTuHWsVYVkSRXXyRXTE5aLhB%2FtTVlzFsd3%2BT4EbGzwADkXpE0rcyBLUkdUAdzb7y3AHgleTS%2FDTyi%2BEjwH9puen2v1YbzqExhYxhOW5yUlQ2zU7umss7GJ6v2ZauDLMN2zGl9YvzaB0YiZAdzMznYBXLRJdIdVWTuNmVrijNTJNdKB3A19oDOCF7R3JfgGEEG%2FziokZKoprSHFhebDzuakhJ5HeIU6ba5rmd5KMCpVYbxbHydKH2cmgniW%2BPS5xpDsMubWrCjkxsuR8fXFC%2FWF8UtC5C1GqBnwu0D7nKhJa4rM6ENzYqJXpdEmzpcout6FUPSgOdAqJcHqRNdWM7oS1tdS%2FN6qwSGEn0Rnd6X13XRmPiPpuLSOE6PitM9wA%2FsvaUtN4SMx%2FQm5CwSWfmRSxvPVXz4GUmqYoldyMbLFN7Oexh0kbGOKyMOKm0MkGOqUBR1sJNLlgatGPxe%2F7hX1snMU2HvsfPKMTeUHkeHcevXzFMlf7ET589zSPGKEEu3auPTFYWaHTbkHm%2FWxyOxTbJEhBSCuMIES96XbdDhtzfUubVPaNM4qzLJ2mOdFlF55xZ9nL0%2BIodnaRkq1TVuX0hAJhXVs%2F1JJG210MVIkO49cDr3cu8xHk7SqyWxtX%2BMhB1jepsgMkyHNQi07Ulgn%2BwqhP4FO%2F&X-Amz-Signature=d42a8f28bdd0ba41d2448f7895a3f62df1168c89c519acca0afb65d25ffbd16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
