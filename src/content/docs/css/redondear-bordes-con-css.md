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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226ZLZKD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfh43BOa4FoAxaoLMjJslP7XhzHaC1BxZOZFXRXVE4agIhAND66mMWnfa8GYi5G%2FUWeqGuSJPIrItUlF2APdiJE%2ByHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaBjjd0VriT27T61Yq3AMiRyKTnwfl%2B7%2BLN0TDv7205%2FvEcuuN7YkTmkA9tn9m2oU%2FgpfTH%2FLo7AvlRYsdxMCWvcdBIzT4LwXyFgV5k61yNUa%2F%2FrvKaqV9r93BnFQoxDwsJD4zByiMlVxiM83SPGghQYW2m4LARfNAFPgeG3NR7x9rduJPTXVo9Pa0phf0hmBnuecaYXR8HdE7883tuvLfHMVL5psSSALzh5a%2FsO4t%2FNU8uTV6QXbcg1YiqbMVSQOvM31XtPk%2BSMrzVcCtm0Lx%2BasLR6reEw2Rgx49O%2FcmWMr7TvR9u06dF%2BQyDzweb10Vxf2lWSCZNxbAjKfsyQVk7IqMkJ4lm1h3s24tVkW7wUIbtTnhLq2GQMfBVJZF8LdnX5T9qQMmqfanUAn%2B%2FinTrB1uOCto916P%2FfWYBwwE%2BXuYXMOIBUP1kUr6fAVxSV4DcyaoOI3uh0DhznXsRnLgDeoP57C8IsowVYemhNUuhyVDd%2F%2FIqm5QZEcZb8AJd%2FDr%2FuXhvksYBj3q6YpRZF%2BsMofJZlcpX9Rjzwvjmc7gowsk8htl%2FNqP2OYVYrzJdc24D7xbrczr0WuQ88Ddf%2F%2BReQKzhqMQqbH%2FzEbhbXDP%2FKrewrwnL0nOyWIr%2FT5lq9OwrYYH1AWNSmrj9zDbh9%2FJBjqkAV75ZhgR3gFbw61A3vZeGFFPQmJGYA4oPtyN5PiR5ZjVL5YdGCYQIybjuHWkDyQTzhpumNGagZ39R1r0HYO7c4waGu0UNRifhSE3QclEs6ThFnIZ7J332vTDhb17ptc5zs9oFyF5pfWd4ig65nXR2ZQgN5ioD%2FGNeQphAqtri9GRhLMTHkE6SsMmTSs20JCEx7t0LuqOjobNvHSYygePgk5QkThY&X-Amz-Signature=d529a1b4650837934668197ec62ec5b155ff2c2166a6fcc75034aefdb04479ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226ZLZKD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfh43BOa4FoAxaoLMjJslP7XhzHaC1BxZOZFXRXVE4agIhAND66mMWnfa8GYi5G%2FUWeqGuSJPIrItUlF2APdiJE%2ByHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaBjjd0VriT27T61Yq3AMiRyKTnwfl%2B7%2BLN0TDv7205%2FvEcuuN7YkTmkA9tn9m2oU%2FgpfTH%2FLo7AvlRYsdxMCWvcdBIzT4LwXyFgV5k61yNUa%2F%2FrvKaqV9r93BnFQoxDwsJD4zByiMlVxiM83SPGghQYW2m4LARfNAFPgeG3NR7x9rduJPTXVo9Pa0phf0hmBnuecaYXR8HdE7883tuvLfHMVL5psSSALzh5a%2FsO4t%2FNU8uTV6QXbcg1YiqbMVSQOvM31XtPk%2BSMrzVcCtm0Lx%2BasLR6reEw2Rgx49O%2FcmWMr7TvR9u06dF%2BQyDzweb10Vxf2lWSCZNxbAjKfsyQVk7IqMkJ4lm1h3s24tVkW7wUIbtTnhLq2GQMfBVJZF8LdnX5T9qQMmqfanUAn%2B%2FinTrB1uOCto916P%2FfWYBwwE%2BXuYXMOIBUP1kUr6fAVxSV4DcyaoOI3uh0DhznXsRnLgDeoP57C8IsowVYemhNUuhyVDd%2F%2FIqm5QZEcZb8AJd%2FDr%2FuXhvksYBj3q6YpRZF%2BsMofJZlcpX9Rjzwvjmc7gowsk8htl%2FNqP2OYVYrzJdc24D7xbrczr0WuQ88Ddf%2F%2BReQKzhqMQqbH%2FzEbhbXDP%2FKrewrwnL0nOyWIr%2FT5lq9OwrYYH1AWNSmrj9zDbh9%2FJBjqkAV75ZhgR3gFbw61A3vZeGFFPQmJGYA4oPtyN5PiR5ZjVL5YdGCYQIybjuHWkDyQTzhpumNGagZ39R1r0HYO7c4waGu0UNRifhSE3QclEs6ThFnIZ7J332vTDhb17ptc5zs9oFyF5pfWd4ig65nXR2ZQgN5ioD%2FGNeQphAqtri9GRhLMTHkE6SsMmTSs20JCEx7t0LuqOjobNvHSYygePgk5QkThY&X-Amz-Signature=752f57d54b89925fd017d49481a307d4a78e1cb6ddbca52c89c10c86853602ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
