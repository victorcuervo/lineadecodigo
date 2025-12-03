---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJFBXUW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGYc16yRp2aX2oAZG0QKIxhOJNAw2pH%2BSdxEgsRb6i7TAiEArLs%2F%2BxIVzZGQc57aDweAGfcVy3%2FQzYayWiH4dVUm0x0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLUvXZuPzUqc%2FiVo8yrcA9EiT04%2B%2Fih7G9xvvRVNM9i2e6GHPpT8HV4lH1MrSlaSPbl9d455uIS%2FrluEZh81I3SMyvGIZI%2BUz%2B7FHWSRpfNcmws40VbU3QkI9Tg8kS4KAy2Tn1JWpYIdkBBiONPYO2Gd95QQlwXKSDG3rBT47jNZ%2FluUxuVa9nzmQ6GL3qE5cWtjnevuwGI7pjkvG%2FMLF4RcHvk5i%2FxczzJeztnTg0I8gzIMPWH%2Fkx0a2REc8k6%2FzDVnfjgPm4lJLPCtWa2p0yvtYtER2zkudCm8zgwvmydPQz8m6Yg9F%2Bu7%2FI%2FaRftd4P9Z02ehi%2F2yaNSgjYzZ5qvxs0GQJZL00K%2FfMSrQaINcPTyu%2FaJ1%2Bova49JiNuV7ycT6WLL3rXNDHCPuqHmESfhzAMScBMSd7%2B7NVOO5Ht9qU4KFdSgDP6LF3MX29BpFbWoVvYrS9JgC1RlnC%2BBDEpoAJv%2BAZqXFddOhveJLC09GUmUEizIliAKt4raHA63PyYnzmGsck1kjfq8RS3pZXVKpAdWvikaCHR1S7JQMhX5L0N0pd2ItSLNKEYD4m32NYhLjPYczuGSk9tw9u7zHe5wYbjmXklGpCFjDzLQhvRKi1zI7dBOlMgy88GyMswEpXxSfPnlPz1QLi4KCMLC%2BwskGOqUBypUlC5s5IoTxnXssQ5xjICW6JdzxjEH0ffjUWkkmfXX%2BYFvGHRPJ11wW7oprv29fHjvzuQdwrqEDc77s7km5iqY7tWSrQrymgyARL5K9ciyb59F%2BHRRk50mXUBG0MI8fKMmBX2xNdQLZjYim5kKBOSibOMd%2FHcpYzDKh1qRe0aTMZPFdCzNg5FOXjgAfNcn01tKiKX0MbVTS0tMRQdsW6IFpPs6Q&X-Amz-Signature=fa73b45ca4939e907284caf1d09cebf5ffe55a05630f660448eafd4be073fa5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJFBXUW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGYc16yRp2aX2oAZG0QKIxhOJNAw2pH%2BSdxEgsRb6i7TAiEArLs%2F%2BxIVzZGQc57aDweAGfcVy3%2FQzYayWiH4dVUm0x0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLUvXZuPzUqc%2FiVo8yrcA9EiT04%2B%2Fih7G9xvvRVNM9i2e6GHPpT8HV4lH1MrSlaSPbl9d455uIS%2FrluEZh81I3SMyvGIZI%2BUz%2B7FHWSRpfNcmws40VbU3QkI9Tg8kS4KAy2Tn1JWpYIdkBBiONPYO2Gd95QQlwXKSDG3rBT47jNZ%2FluUxuVa9nzmQ6GL3qE5cWtjnevuwGI7pjkvG%2FMLF4RcHvk5i%2FxczzJeztnTg0I8gzIMPWH%2Fkx0a2REc8k6%2FzDVnfjgPm4lJLPCtWa2p0yvtYtER2zkudCm8zgwvmydPQz8m6Yg9F%2Bu7%2FI%2FaRftd4P9Z02ehi%2F2yaNSgjYzZ5qvxs0GQJZL00K%2FfMSrQaINcPTyu%2FaJ1%2Bova49JiNuV7ycT6WLL3rXNDHCPuqHmESfhzAMScBMSd7%2B7NVOO5Ht9qU4KFdSgDP6LF3MX29BpFbWoVvYrS9JgC1RlnC%2BBDEpoAJv%2BAZqXFddOhveJLC09GUmUEizIliAKt4raHA63PyYnzmGsck1kjfq8RS3pZXVKpAdWvikaCHR1S7JQMhX5L0N0pd2ItSLNKEYD4m32NYhLjPYczuGSk9tw9u7zHe5wYbjmXklGpCFjDzLQhvRKi1zI7dBOlMgy88GyMswEpXxSfPnlPz1QLi4KCMLC%2BwskGOqUBypUlC5s5IoTxnXssQ5xjICW6JdzxjEH0ffjUWkkmfXX%2BYFvGHRPJ11wW7oprv29fHjvzuQdwrqEDc77s7km5iqY7tWSrQrymgyARL5K9ciyb59F%2BHRRk50mXUBG0MI8fKMmBX2xNdQLZjYim5kKBOSibOMd%2FHcpYzDKh1qRe0aTMZPFdCzNg5FOXjgAfNcn01tKiKX0MbVTS0tMRQdsW6IFpPs6Q&X-Amz-Signature=ad77fd8ee9a5287fc7b6347b80fb75c5a393ca39d84c718c4df29a539745bfd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
