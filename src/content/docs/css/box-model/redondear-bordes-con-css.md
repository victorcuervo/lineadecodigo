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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNC4TVR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjGrdAlfK9xS5HFz9PxxdGjNwJSyzoOgWXHdusm52hRAiEAn9c48ggRRAfKfA7QM1D3POkDDWSE9cuZwx5yHq%2FbJzoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPxDWQTOBCeHiH7BEyrcA%2BDH3oINMz%2B2f9Kzjn1TmqH%2F3ylAWtd3%2FSEVqlQk%2FccpXikIugtAFo9UPmJ8YEutpXsa5DDTENmlx%2Blx8AHhhY2IRbVe%2FleSuFoPmcG5q2iSLCx55Us2IeDEGh9caENaoX7Ji2wF%2Bx5jfWsCMLH%2FOfJWKD3BYiDal1hL7ymllCz2JPbO3yB%2B2T9yN79nIavuL8%2FMnUwab9WoiQWUj15r4%2FaxrGmF2UdzecYI035TG%2BEa2mnQRSX3fBiweFXs0edZmZqTxWu4oY4l0Uy4hOqi9Ij0FyDvSAeiw%2BXoAVIG%2Bl69fhcS7AfcNdAh97AKaixTgKdB3NQiOTWvSkx%2BLXphya9rU5p1EvZclpkkEckUGG4HJj6BM7nO1RKq9ZJfvrIyVaR1YMLPqcNt8K80Qn6u2iN7CfkfLwrwnJyAndEZQQnwthqVleVzzOseGROEvEaGRjJUp82ATvhdC7KTFSK%2BCjqCSMoDe4i0CoXipjPstfug1jFi74dqnQ3XKHiJIEYW99hwWly0Cwr4zR9XlSfQulFUrVSnBBbfyuITNWgIHNc3DfhC2bnbgJXCSZgon74eNGfAEOihQVDrTqsB4fjUFlLSMYz0LdtnZdyjA4eC2lqNtu7OQz%2Bg7X7cV74LMNSdicoGOqUBKN5mLnMssXxzM1buGK9E3iPwl7E0oxgfh2H9T8OBkFud%2FCeu0Hszrlupl7WA%2F3nw3AQwVfoXVIUHWtrnrThbeY4B4HZEBHQMyZJmYYC6tmNewqLZ32krEfIcSKu2HxTkpbBr9lt9KsLTIiewodcz36c%2FXf3og8xS4REhAPCJJbDB7U43mJ0vdHuJP0Ebd9xiiVT6NKizPG3FbOKo6K30fnvS%2FlZb&X-Amz-Signature=f91da64fed909decb1f059563ab0def75e13bd36871a45887e57a2178718c88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNC4TVR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjGrdAlfK9xS5HFz9PxxdGjNwJSyzoOgWXHdusm52hRAiEAn9c48ggRRAfKfA7QM1D3POkDDWSE9cuZwx5yHq%2FbJzoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPxDWQTOBCeHiH7BEyrcA%2BDH3oINMz%2B2f9Kzjn1TmqH%2F3ylAWtd3%2FSEVqlQk%2FccpXikIugtAFo9UPmJ8YEutpXsa5DDTENmlx%2Blx8AHhhY2IRbVe%2FleSuFoPmcG5q2iSLCx55Us2IeDEGh9caENaoX7Ji2wF%2Bx5jfWsCMLH%2FOfJWKD3BYiDal1hL7ymllCz2JPbO3yB%2B2T9yN79nIavuL8%2FMnUwab9WoiQWUj15r4%2FaxrGmF2UdzecYI035TG%2BEa2mnQRSX3fBiweFXs0edZmZqTxWu4oY4l0Uy4hOqi9Ij0FyDvSAeiw%2BXoAVIG%2Bl69fhcS7AfcNdAh97AKaixTgKdB3NQiOTWvSkx%2BLXphya9rU5p1EvZclpkkEckUGG4HJj6BM7nO1RKq9ZJfvrIyVaR1YMLPqcNt8K80Qn6u2iN7CfkfLwrwnJyAndEZQQnwthqVleVzzOseGROEvEaGRjJUp82ATvhdC7KTFSK%2BCjqCSMoDe4i0CoXipjPstfug1jFi74dqnQ3XKHiJIEYW99hwWly0Cwr4zR9XlSfQulFUrVSnBBbfyuITNWgIHNc3DfhC2bnbgJXCSZgon74eNGfAEOihQVDrTqsB4fjUFlLSMYz0LdtnZdyjA4eC2lqNtu7OQz%2Bg7X7cV74LMNSdicoGOqUBKN5mLnMssXxzM1buGK9E3iPwl7E0oxgfh2H9T8OBkFud%2FCeu0Hszrlupl7WA%2F3nw3AQwVfoXVIUHWtrnrThbeY4B4HZEBHQMyZJmYYC6tmNewqLZ32krEfIcSKu2HxTkpbBr9lt9KsLTIiewodcz36c%2FXf3og8xS4REhAPCJJbDB7U43mJ0vdHuJP0Ebd9xiiVT6NKizPG3FbOKo6K30fnvS%2FlZb&X-Amz-Signature=f77d975fb8820567f8fa5b1c9ee120eda9d66f4fa3f175c2531c704aa446a611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
