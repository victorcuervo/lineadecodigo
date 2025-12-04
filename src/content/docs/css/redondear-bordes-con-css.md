---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJFEOLI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCi8rmlfZaRZLUMRRzujOWxtu69iX50RUxGNihsN44tTAIgDQiRxICwgjT5lYQSwwTAztw4%2B03PWtGkaSIpy4BtVhMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDP1zikN5ICK8SbtTfCrcAxoA9vhTRRxlZedAoKOLx4pMHq5he3BtCZXYhP4fUYtLJLq0cqyogy36RNe1RnZ3ySxEl1IYQbowhs%2B1BvVPZYsrAhdJ6Xb1nHJLAY3clcaC0zlehyrziWXUmBimAmMLmQzWgNGaSbgZpXwzYKLM5upR9NMleelfPo5mNPmU%2FX0ugnA%2B6V7%2Bjwr%2FqFjJx78kV%2FtbsDt9YWH6CfOeicW5bufwcMzIJERiDV%2FBXIUX4eo4%2FUQVp3dc8SeOKvEyY2Dkt22Zwb0iU4YkrUURXIJ71eB3K91M%2BWHnRQqTFtbaF8X2NCas%2F9uHmPdVn4rPEf1R9wKLtXP%2Bq9XfUSn1Yd3EjSrIT0I5Cf%2FeaROgvTusBJ7eZRaxHsYWGyfijEMsB1zI1DPCf3k3QbMGoUilvC4wDte0q4B9eC%2BP4ChPdUBR0IvnynpZQKmZkIjv3DfNRroLprAiFawtVG7dZ91tS9D0x%2FVHI7f2g1crRMw%2FAatCaE7FwM%2BImq9rVU4BtZJqgreER1vPCIwzG4xaOvl53bZExLnc1x13oUzFfbjLaNj1U2QUlqTQ3OovMmWnJzRQBEFoNJvyCjNO3xk30GCXOQIfx1sGKJZTT2qhtLiHqwLDqJx1AP2Uxbb%2BKThf8%2FujMIK0w8kGOqUBqPC4q6t9K5r5tBrXxbZWw%2BSl4rN6KraeNkcF1HFZCmAOtZg%2BDfqKs9cXfEra2Yr6VjwfPrMvKg9ZsjMZPW3rKsYQcE4%2BkdMnxTq%2F%2FaCq2j2AfNDL6Xg2V6KodSS9ebA%2Besqrn7n8FzVxglZuonxD%2Forb72UPUiSnn0YyAw4fdHmWlkFHnwO3noK1f09H4QGJiQc%2FOTCeFCf9YrXC86hzWIB8z7Je&X-Amz-Signature=1b16a8758260ea09977d605d6568dc35cc2365599fc7083dcd483ceb672d5a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJFEOLI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCi8rmlfZaRZLUMRRzujOWxtu69iX50RUxGNihsN44tTAIgDQiRxICwgjT5lYQSwwTAztw4%2B03PWtGkaSIpy4BtVhMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDP1zikN5ICK8SbtTfCrcAxoA9vhTRRxlZedAoKOLx4pMHq5he3BtCZXYhP4fUYtLJLq0cqyogy36RNe1RnZ3ySxEl1IYQbowhs%2B1BvVPZYsrAhdJ6Xb1nHJLAY3clcaC0zlehyrziWXUmBimAmMLmQzWgNGaSbgZpXwzYKLM5upR9NMleelfPo5mNPmU%2FX0ugnA%2B6V7%2Bjwr%2FqFjJx78kV%2FtbsDt9YWH6CfOeicW5bufwcMzIJERiDV%2FBXIUX4eo4%2FUQVp3dc8SeOKvEyY2Dkt22Zwb0iU4YkrUURXIJ71eB3K91M%2BWHnRQqTFtbaF8X2NCas%2F9uHmPdVn4rPEf1R9wKLtXP%2Bq9XfUSn1Yd3EjSrIT0I5Cf%2FeaROgvTusBJ7eZRaxHsYWGyfijEMsB1zI1DPCf3k3QbMGoUilvC4wDte0q4B9eC%2BP4ChPdUBR0IvnynpZQKmZkIjv3DfNRroLprAiFawtVG7dZ91tS9D0x%2FVHI7f2g1crRMw%2FAatCaE7FwM%2BImq9rVU4BtZJqgreER1vPCIwzG4xaOvl53bZExLnc1x13oUzFfbjLaNj1U2QUlqTQ3OovMmWnJzRQBEFoNJvyCjNO3xk30GCXOQIfx1sGKJZTT2qhtLiHqwLDqJx1AP2Uxbb%2BKThf8%2FujMIK0w8kGOqUBqPC4q6t9K5r5tBrXxbZWw%2BSl4rN6KraeNkcF1HFZCmAOtZg%2BDfqKs9cXfEra2Yr6VjwfPrMvKg9ZsjMZPW3rKsYQcE4%2BkdMnxTq%2F%2FaCq2j2AfNDL6Xg2V6KodSS9ebA%2Besqrn7n8FzVxglZuonxD%2Forb72UPUiSnn0YyAw4fdHmWlkFHnwO3noK1f09H4QGJiQc%2FOTCeFCf9YrXC86hzWIB8z7Je&X-Amz-Signature=9c5f0c5c6fafa3d7738f732f96029b444bfc71c64743cc40d6a4b7ee4b493dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
