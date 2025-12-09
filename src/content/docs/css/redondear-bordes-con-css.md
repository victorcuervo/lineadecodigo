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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632EOI6QE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB18gDBvXnVaJKyKja3vTaRNNqZmh3oEjbhlMQTNU9uAiEAyztOVNBDteXNCes2U53h4OmzHV%2Fqh3RBmG%2FJOOWPhRcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvhwX8PoqXYomgxnircA%2FdMpKW3wPxa293Jd7t9UErR6CAUfqZI%2FWV5mgbDDQACmciJBGkuQFpmWPNG2stErFULtZZ23PHcIHtMfFrwYjWhE%2BCPEDg9X6VgtPjt2BQWU3EAfw2zoSOGEFZGMFkkK%2FRfEOp74hbyfVamCN0YQaq6hz2lO2go25WSzEF%2F4MKFtPOb35%2Bvh2muBMSO7E%2BWTBbAwexuTSQxeXG%2F0eLbjxeb9BWSKM0ChEL5gifMKD9po3n4OM1CRwBuIxKGNTAvkJwAUkkOlAMlw0C%2FcyKG%2F40MvEh%2FxmfIk7mvcZZmUiPc8bZLwJ51RxIic67bRWAxXurpfCynQdwPQ6J1lh3wte9cvA7up5Oaj%2BHl2VKEforW1HkdCq%2FuuJ0QkQdYc%2BvIr8GZvyWat2mRAs4eWVtn5SOCU8Ui5P5MnXcMzpZPbf4rJEideO3aruNK85kALwXWqkfGJ0jzq3nzsL10jFlyv06TwSz2WDa6JbtLbMTkkL4p7vOq9GBNIJ1FIwhvyadkQA7TjzGboEXx9d8LawpP4CKPE6ZmxHH9cfkIbjo%2F8t4sX8SNDZtJ2W4neLtiRC51kfrKZ3AQr7np4JY4%2FhWpToYdq26IYEJs1bpQsur8Enc%2FcJy22GLM%2BIlVBFyTMK6H38kGOqUBEmS8M6sxqAGzNIKQ%2BtJVCQZgmDNkVSaw7V3IX7uixIBUSTTdZGpxsVAOL5PhOXXY6qQSM8L8p%2F1bmjKoGCw8kvVvgF2m%2FKDq4t%2FU6O3WpzMfZ8K3Elc0oZev8SdP9k1VGFtnE5BB6psLqe0cdyve%2F7DgE45XN0j7r2CIaVUhRVszhzrHe4fVUvlcYI9QxCCKGdgasILj%2FiS6Z%2FmwQbauBXOB95nm&X-Amz-Signature=6e8c34e30dfc78ee7607054a47e6f88b36a386ea0805745c57861ef7ae674658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632EOI6QE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB18gDBvXnVaJKyKja3vTaRNNqZmh3oEjbhlMQTNU9uAiEAyztOVNBDteXNCes2U53h4OmzHV%2Fqh3RBmG%2FJOOWPhRcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvhwX8PoqXYomgxnircA%2FdMpKW3wPxa293Jd7t9UErR6CAUfqZI%2FWV5mgbDDQACmciJBGkuQFpmWPNG2stErFULtZZ23PHcIHtMfFrwYjWhE%2BCPEDg9X6VgtPjt2BQWU3EAfw2zoSOGEFZGMFkkK%2FRfEOp74hbyfVamCN0YQaq6hz2lO2go25WSzEF%2F4MKFtPOb35%2Bvh2muBMSO7E%2BWTBbAwexuTSQxeXG%2F0eLbjxeb9BWSKM0ChEL5gifMKD9po3n4OM1CRwBuIxKGNTAvkJwAUkkOlAMlw0C%2FcyKG%2F40MvEh%2FxmfIk7mvcZZmUiPc8bZLwJ51RxIic67bRWAxXurpfCynQdwPQ6J1lh3wte9cvA7up5Oaj%2BHl2VKEforW1HkdCq%2FuuJ0QkQdYc%2BvIr8GZvyWat2mRAs4eWVtn5SOCU8Ui5P5MnXcMzpZPbf4rJEideO3aruNK85kALwXWqkfGJ0jzq3nzsL10jFlyv06TwSz2WDa6JbtLbMTkkL4p7vOq9GBNIJ1FIwhvyadkQA7TjzGboEXx9d8LawpP4CKPE6ZmxHH9cfkIbjo%2F8t4sX8SNDZtJ2W4neLtiRC51kfrKZ3AQr7np4JY4%2FhWpToYdq26IYEJs1bpQsur8Enc%2FcJy22GLM%2BIlVBFyTMK6H38kGOqUBEmS8M6sxqAGzNIKQ%2BtJVCQZgmDNkVSaw7V3IX7uixIBUSTTdZGpxsVAOL5PhOXXY6qQSM8L8p%2F1bmjKoGCw8kvVvgF2m%2FKDq4t%2FU6O3WpzMfZ8K3Elc0oZev8SdP9k1VGFtnE5BB6psLqe0cdyve%2F7DgE45XN0j7r2CIaVUhRVszhzrHe4fVUvlcYI9QxCCKGdgasILj%2FiS6Z%2FmwQbauBXOB95nm&X-Amz-Signature=b1b19385540623f1273d57684c6236879b9be4713bc4db9eb1af68fa0487ef61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
