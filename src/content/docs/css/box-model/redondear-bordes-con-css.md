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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7GNPT2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4Z8CTYMx2855eE%2B8Li7szfKNhR5TWUUHAGpef1UNhzAiAlIUw5SYPcdyKNjuqeh56h2WTcnIS93OgW5vw2jHiarCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMupV2sdojcxRniPC6KtwDG%2B%2Brw6JmvlYhUddztLxQ%2FSyVAfHmPBd2qncCB8ccg7yzJJo9M541KNAth0iEnpVPRtimjIwilXnzVPMLhM867g%2BH9b33mBCGu66SWBQoO5LgFO0Qo%2FXcJmP%2FcjNCMKgP4oqq0Esxignu4iKWiCATryMYv3o%2FtiD%2BiB%2BzLOspjeI29TluV8BoW9LY1rtcdQGV50ff9sNr1Mu8EfBwDa%2F3uYjVeBFjD5RzVbA07HHDnsLaRg1s1HmXFNgxVTHnhKwEOfDHU2NNZKa%2B%2BxhGgzje8uoaYwOJasJezwIbxwlnVFvksN1oDZfPvuoyaBr73JWIBDH7Wb4YhwSq9vvJ86Cqv8SgGtE3kS3Qo0HJHVmeIIMnkCK3%2B728Qulj%2B7epqG41bf6PZrRCzvXSrTYsGmAkBMw1r4Hx6E8nLmx%2B7QsBAz05OoYQyiwUZdjiKrrSLczeoIQ3u%2FUYskRjbL32N8Pr00XIwgdPtST53KWgxYYFecFqYcuO%2FE7CNtgbhyWJoi%2B4dMlZcesGDa7z5qvTO2rqkaY5XBJ92IfiMyija7999SPWushQuCVFlebfg%2BBgSW4va1%2BlVO0t0C8KFyhzybyqthItnTD3cE8gs2q%2BclWFrt5sReW2HJGFTDzsSGowq%2BGKygY6pgEuUcXxmcUCbgwWpCUZVxOh9QY5jveVZzTe49A%2Ft%2BKWHCB2xTaCbI9gz2Wv74gRbfDZy4zuXswBzjTJYx0XtvFYWbEhUJAu5%2ByGINCReq7if9lhY1AkEKTsLbk%2BlvHXa3gUAGf1xf6kmABoo1T8TiFrraPeGqpMG1EvlP1hFp4TnHXdhqdOB2FD59ElQX4g7b85HWlyEdjU%2F7qXCQM53tKi5yA6Gmih&X-Amz-Signature=e625df21f93c510992f910e49d4654fc8ddaf8bad03d538743c6261bffb56ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7GNPT2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4Z8CTYMx2855eE%2B8Li7szfKNhR5TWUUHAGpef1UNhzAiAlIUw5SYPcdyKNjuqeh56h2WTcnIS93OgW5vw2jHiarCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMupV2sdojcxRniPC6KtwDG%2B%2Brw6JmvlYhUddztLxQ%2FSyVAfHmPBd2qncCB8ccg7yzJJo9M541KNAth0iEnpVPRtimjIwilXnzVPMLhM867g%2BH9b33mBCGu66SWBQoO5LgFO0Qo%2FXcJmP%2FcjNCMKgP4oqq0Esxignu4iKWiCATryMYv3o%2FtiD%2BiB%2BzLOspjeI29TluV8BoW9LY1rtcdQGV50ff9sNr1Mu8EfBwDa%2F3uYjVeBFjD5RzVbA07HHDnsLaRg1s1HmXFNgxVTHnhKwEOfDHU2NNZKa%2B%2BxhGgzje8uoaYwOJasJezwIbxwlnVFvksN1oDZfPvuoyaBr73JWIBDH7Wb4YhwSq9vvJ86Cqv8SgGtE3kS3Qo0HJHVmeIIMnkCK3%2B728Qulj%2B7epqG41bf6PZrRCzvXSrTYsGmAkBMw1r4Hx6E8nLmx%2B7QsBAz05OoYQyiwUZdjiKrrSLczeoIQ3u%2FUYskRjbL32N8Pr00XIwgdPtST53KWgxYYFecFqYcuO%2FE7CNtgbhyWJoi%2B4dMlZcesGDa7z5qvTO2rqkaY5XBJ92IfiMyija7999SPWushQuCVFlebfg%2BBgSW4va1%2BlVO0t0C8KFyhzybyqthItnTD3cE8gs2q%2BclWFrt5sReW2HJGFTDzsSGowq%2BGKygY6pgEuUcXxmcUCbgwWpCUZVxOh9QY5jveVZzTe49A%2Ft%2BKWHCB2xTaCbI9gz2Wv74gRbfDZy4zuXswBzjTJYx0XtvFYWbEhUJAu5%2ByGINCReq7if9lhY1AkEKTsLbk%2BlvHXa3gUAGf1xf6kmABoo1T8TiFrraPeGqpMG1EvlP1hFp4TnHXdhqdOB2FD59ElQX4g7b85HWlyEdjU%2F7qXCQM53tKi5yA6Gmih&X-Amz-Signature=cc111437f7851d447d10dc2e8b542d9811772fbeb2d77dce633c1e918ed2ac9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
