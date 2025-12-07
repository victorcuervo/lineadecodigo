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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5GA5NW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg47LFWaqz6IGuNFh9yM%2FHKdeEZqQTrprrzRx%2B6JO8zAiBkbYRxHGS7EjJf7XgnTbORwT5azso3W2bBGwByuOy32iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuKR6dHCVUxXUmDQGKtwDIs%2F5VVuhfDcJlCNikvDBS42dpibEjoBMYLTo%2FQoDcij2wWN6PIZb6E4wz5dQCfc3f5y445lNMv5e4pLR%2B1wFaGaEtOLAnRBk%2FAVk6F5wL4eh2th%2Bq%2BbYHNlojhIFOOmp0yHpl1T%2BESiG8GteshstaEHaFTDqgLroHCfZf%2FQt%2Bl8pQqFYouSNoUQBxyaXoTXNe7c%2F%2BXTuinERQIH%2FfkGf0RPqwSvZqrSdqfs%2FKpFYZ8%2BGMPN5t4lVVFfjbdBsV6raXTWYhG9KzmKE8OTcDz3TgQot%2Ba9z1IDiP8jwPH%2FwcSapE6MbLv%2BqhcLcBwkeCc%2FnsN%2B7UwX%2FRVtwcAvgPCa94nCVLYjdwxwKclau3c3E4igCwa1tPjAsdUNiJjTg0VZ2Hzs%2BuAl8e9yR5A6ATS%2BqK%2FLAOvqPB6p%2BmrgOP7Zklwa639il1rGV3czZpSyfVg7Rty%2F5%2BNn7mZz1kua719QT7B99Na0JaDW1N6%2BvceDmqgoTmTsM9X5bRKbjvQRWtgcjjqXooW43q8Vc2TNw7EzUFYU%2BI%2FFl7g5EJbCcziGrrv%2BndfwutCmlJ7%2FYRuAszX4qrN3Uvz8AvUX9OBnInYCPE2vAFgX0AbUql55LhSAYMrY1Y3b1QkYBG44g3UMwxYXYyQY6pgGbPvXJvdlv6XFYKrT5042riY2QIidD90LxRI6oZ42lMiGnYqBB155DIIQoUZELT9xqRO7u16raF2jPDiQ8Xq%2BL%2F1YfUxKJ1ETjUBu4vPFbGGk9YmLjqho6Rdr0vCwe9CeqPUdQn0m9WKY97MVww8el7aYiuxs7JYmgj2pXtddEbDOp0QpHz5yItVNNk9KDxRwT2KtDEQXc77iM3chtvyeEyjJcoPcP&X-Amz-Signature=345d0e14896572a2c510f26f487679253beef98ac8bd970d7f847f2efa1dea53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5GA5NW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg47LFWaqz6IGuNFh9yM%2FHKdeEZqQTrprrzRx%2B6JO8zAiBkbYRxHGS7EjJf7XgnTbORwT5azso3W2bBGwByuOy32iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuKR6dHCVUxXUmDQGKtwDIs%2F5VVuhfDcJlCNikvDBS42dpibEjoBMYLTo%2FQoDcij2wWN6PIZb6E4wz5dQCfc3f5y445lNMv5e4pLR%2B1wFaGaEtOLAnRBk%2FAVk6F5wL4eh2th%2Bq%2BbYHNlojhIFOOmp0yHpl1T%2BESiG8GteshstaEHaFTDqgLroHCfZf%2FQt%2Bl8pQqFYouSNoUQBxyaXoTXNe7c%2F%2BXTuinERQIH%2FfkGf0RPqwSvZqrSdqfs%2FKpFYZ8%2BGMPN5t4lVVFfjbdBsV6raXTWYhG9KzmKE8OTcDz3TgQot%2Ba9z1IDiP8jwPH%2FwcSapE6MbLv%2BqhcLcBwkeCc%2FnsN%2B7UwX%2FRVtwcAvgPCa94nCVLYjdwxwKclau3c3E4igCwa1tPjAsdUNiJjTg0VZ2Hzs%2BuAl8e9yR5A6ATS%2BqK%2FLAOvqPB6p%2BmrgOP7Zklwa639il1rGV3czZpSyfVg7Rty%2F5%2BNn7mZz1kua719QT7B99Na0JaDW1N6%2BvceDmqgoTmTsM9X5bRKbjvQRWtgcjjqXooW43q8Vc2TNw7EzUFYU%2BI%2FFl7g5EJbCcziGrrv%2BndfwutCmlJ7%2FYRuAszX4qrN3Uvz8AvUX9OBnInYCPE2vAFgX0AbUql55LhSAYMrY1Y3b1QkYBG44g3UMwxYXYyQY6pgGbPvXJvdlv6XFYKrT5042riY2QIidD90LxRI6oZ42lMiGnYqBB155DIIQoUZELT9xqRO7u16raF2jPDiQ8Xq%2BL%2F1YfUxKJ1ETjUBu4vPFbGGk9YmLjqho6Rdr0vCwe9CeqPUdQn0m9WKY97MVww8el7aYiuxs7JYmgj2pXtddEbDOp0QpHz5yItVNNk9KDxRwT2KtDEQXc77iM3chtvyeEyjJcoPcP&X-Amz-Signature=a6189a9efd601ef1b088fcdc4e8e246ae9ed3f52c0fc6de757e5006f2278b248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
