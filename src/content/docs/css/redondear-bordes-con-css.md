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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCEJDCP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BXetxVxt56y31UZODcHPHMnQvgQAeC6qDcxlUw%2F37wIhAPnnYwXESms2EwroJvlL5us3v1rmjy6XO%2B0YK%2BovV1eFKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIznD38HZ5yOpE19wq3AMpKlzWOBkU1GhK9E1h9jlxNy8IUF6lH765%2By0lxmNLmjbKQJOQspsQEh7MObQsjBSxyjZappw%2FCPY7PtMmK%2FrKRbTK0W3Ve8OGX7qylDYc%2BNoO5%2BqijcT9Sy80JPt0grW0fZ0zQAcsHT%2F%2Frfg7W1Ce8NQ8M2SrKAUmN40E%2F3X79QPa9Rmv83%2Fxvh0OIlmuzmbY3y8isNzIrlQn1y8q6MMN4YpPv5doyxGWkZSKw79NeN%2FI%2FuLf3fqtJj%2B1jBxKgCWdlEzjho7if%2BfY1CtXTT%2BBfxTTRUnrhKcFByctWLbQmntPuFIpjpXGH1%2BCdRT%2FYq73h7%2Bd3q3MJVMp4EMzKNyXjwGtJ%2BtHaOs%2FE2yYbdUG04gyzNFoZ%2BuNNTQR1w9U1MMRjR31ntJmz3RPxVOCpMXFMfLes6e1OsKGvHiY9jjTKozlZ%2FsYwU6oro4wlDvzKgm4ZURAGd%2BnxRNZY%2B3jFTOEpReOwHd%2FVjOl4WYOcIlsxmePYuc31RPCHvfOl80T26i4i75SvMcX2meFowJ1Mou43CNb7%2BCL7fo7BmXszcctNj4t3855lPwRG2p70EuBaLUlIUKVR4p81TQ%2B%2BAjxrSx4IygvBhk%2FOdT4TioAx2S7dmxm1xJ08ZbGuhkFkzDT28bJBjqkAVagreAwEzdha%2FFbVBYHDFtK5YFzwA7oFIwAvYDH1JZSGZf5rgjP9IBuz0d1cWPQnga%2FeZrMO78P7r6efa2QMKqRqIOcMnFucvCeLDK7zShsbfcpKHp2OOld2b3pjGavCqVtJ%2Ff2tN4BkLRsIqwb8eUHB50em4gvwn%2BjFPKuNqHfFqX07vZMIROi6LbIKiaEOVB4F747Aqb0I3CiSGkLGKUglHOk&X-Amz-Signature=d933e79695e3ce9c48d3b1706509538bbe859c939dce6cbb020c223bf598274b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCEJDCP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BXetxVxt56y31UZODcHPHMnQvgQAeC6qDcxlUw%2F37wIhAPnnYwXESms2EwroJvlL5us3v1rmjy6XO%2B0YK%2BovV1eFKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIznD38HZ5yOpE19wq3AMpKlzWOBkU1GhK9E1h9jlxNy8IUF6lH765%2By0lxmNLmjbKQJOQspsQEh7MObQsjBSxyjZappw%2FCPY7PtMmK%2FrKRbTK0W3Ve8OGX7qylDYc%2BNoO5%2BqijcT9Sy80JPt0grW0fZ0zQAcsHT%2F%2Frfg7W1Ce8NQ8M2SrKAUmN40E%2F3X79QPa9Rmv83%2Fxvh0OIlmuzmbY3y8isNzIrlQn1y8q6MMN4YpPv5doyxGWkZSKw79NeN%2FI%2FuLf3fqtJj%2B1jBxKgCWdlEzjho7if%2BfY1CtXTT%2BBfxTTRUnrhKcFByctWLbQmntPuFIpjpXGH1%2BCdRT%2FYq73h7%2Bd3q3MJVMp4EMzKNyXjwGtJ%2BtHaOs%2FE2yYbdUG04gyzNFoZ%2BuNNTQR1w9U1MMRjR31ntJmz3RPxVOCpMXFMfLes6e1OsKGvHiY9jjTKozlZ%2FsYwU6oro4wlDvzKgm4ZURAGd%2BnxRNZY%2B3jFTOEpReOwHd%2FVjOl4WYOcIlsxmePYuc31RPCHvfOl80T26i4i75SvMcX2meFowJ1Mou43CNb7%2BCL7fo7BmXszcctNj4t3855lPwRG2p70EuBaLUlIUKVR4p81TQ%2B%2BAjxrSx4IygvBhk%2FOdT4TioAx2S7dmxm1xJ08ZbGuhkFkzDT28bJBjqkAVagreAwEzdha%2FFbVBYHDFtK5YFzwA7oFIwAvYDH1JZSGZf5rgjP9IBuz0d1cWPQnga%2FeZrMO78P7r6efa2QMKqRqIOcMnFucvCeLDK7zShsbfcpKHp2OOld2b3pjGavCqVtJ%2Ff2tN4BkLRsIqwb8eUHB50em4gvwn%2BjFPKuNqHfFqX07vZMIROi6LbIKiaEOVB4F747Aqb0I3CiSGkLGKUglHOk&X-Amz-Signature=a198121721c7d2ef36e0d624a3b5d6f8fa578428edca64356832713c40814469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
