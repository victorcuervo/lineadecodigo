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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35YV33F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDYBS2884Z1bbIfbQuyCWj6FqvvX%2FBuJNs%2B1wxFTSoAIgCyUT6GCJB7tUaKqSKClt43jQKsPHlwNHY2Hqz7yQ60Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIWy6PqhzJY2paeL8ircA3T4j5U9%2F4ZfzPVZ5GkGacaNWeQIjDvjVQz%2BC0zuwgxe68xy1fVS%2FoKwRchXy0ZMxkXhzojCU8bnUUmzOQdD%2FR%2FgNtkObn6%2FLQ9oJfsmuBtzZQ2pzTjmqg5cOVh%2FoO2xChlpLB9jo2W23LK2XynBdL5w41pvxnMMs%2BtC1q8R%2BgN2JRf4jHWZzlZpXOYOqVslDB%2FYf%2FjVoBLKmPZqalFuEXWjhiTKVU02AR6gwGKye6Gu7ibaPaYoGw9yGe7K%2F%2FD7midwkqT4qA%2Btlt0lr1b7GigvjgriEdB5C8r48CNQ9ZGUNWJmNvKPR%2FG9objfgywXlKckizcNrfffao%2FkblLoHiPByN4J8wsaLBAxGC1ZC2txZnreDnrP7JVykC5RNLaK5lNugo%2F3ksolvLpL85FXF3owOkqc%2Bp5VuHU3uhL%2BOLMXJ%2BQWvYNjA9cgyQdUTEwTdMY7tYMv9Izd1CNxxDi7tiV76QHkE7Qi12NKvZ9rTFiJW7Pff6T7ENqACzWNdtNzY78HaJszxez6DA4hyLeqsDy5E2sMlIrv%2FPUo9N8iehgofMRE43sJvZ1rqVCnMT43%2BnRxOd32N8MFseM9OcXIh3EgpZrCO3Woric6jzmJl3aAtU9yxWNkpdR4eNkWMMqEzMkGOqUBMJdaaz7HXCU0IUPdgRzQROuOG91SZDew92WXcNGHw2acoqbpHhGC7VoX2OB6ZOQLlUEnbduNiI60wwjFolFIrBckDqR0JuK%2BoKwC7XRVpuimxh8fyn9k%2BnERkxWmUOmyUWDOMZtfj2OoVaYulVtMkRU%2BXGc9t7DKGRnfkzvrFIIrhAwr1lZfirVJX0KZkmWN0tWn2%2F3qJbpeIKaArZ8BJg3BqSGu&X-Amz-Signature=3052d5c1a95d0b10aec579c6041aab6a837cc64979130cf9ef166e6d5a9d2f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35YV33F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDYBS2884Z1bbIfbQuyCWj6FqvvX%2FBuJNs%2B1wxFTSoAIgCyUT6GCJB7tUaKqSKClt43jQKsPHlwNHY2Hqz7yQ60Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIWy6PqhzJY2paeL8ircA3T4j5U9%2F4ZfzPVZ5GkGacaNWeQIjDvjVQz%2BC0zuwgxe68xy1fVS%2FoKwRchXy0ZMxkXhzojCU8bnUUmzOQdD%2FR%2FgNtkObn6%2FLQ9oJfsmuBtzZQ2pzTjmqg5cOVh%2FoO2xChlpLB9jo2W23LK2XynBdL5w41pvxnMMs%2BtC1q8R%2BgN2JRf4jHWZzlZpXOYOqVslDB%2FYf%2FjVoBLKmPZqalFuEXWjhiTKVU02AR6gwGKye6Gu7ibaPaYoGw9yGe7K%2F%2FD7midwkqT4qA%2Btlt0lr1b7GigvjgriEdB5C8r48CNQ9ZGUNWJmNvKPR%2FG9objfgywXlKckizcNrfffao%2FkblLoHiPByN4J8wsaLBAxGC1ZC2txZnreDnrP7JVykC5RNLaK5lNugo%2F3ksolvLpL85FXF3owOkqc%2Bp5VuHU3uhL%2BOLMXJ%2BQWvYNjA9cgyQdUTEwTdMY7tYMv9Izd1CNxxDi7tiV76QHkE7Qi12NKvZ9rTFiJW7Pff6T7ENqACzWNdtNzY78HaJszxez6DA4hyLeqsDy5E2sMlIrv%2FPUo9N8iehgofMRE43sJvZ1rqVCnMT43%2BnRxOd32N8MFseM9OcXIh3EgpZrCO3Woric6jzmJl3aAtU9yxWNkpdR4eNkWMMqEzMkGOqUBMJdaaz7HXCU0IUPdgRzQROuOG91SZDew92WXcNGHw2acoqbpHhGC7VoX2OB6ZOQLlUEnbduNiI60wwjFolFIrBckDqR0JuK%2BoKwC7XRVpuimxh8fyn9k%2BnERkxWmUOmyUWDOMZtfj2OoVaYulVtMkRU%2BXGc9t7DKGRnfkzvrFIIrhAwr1lZfirVJX0KZkmWN0tWn2%2F3qJbpeIKaArZ8BJg3BqSGu&X-Amz-Signature=d41043e34e1b790d82c71080a37877ea9fec5b24bc902e3461688dddfe21a34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
