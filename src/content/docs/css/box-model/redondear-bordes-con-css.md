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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM2X2VTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpDkdSyGNdteEPfk%2BlNzS4PVca%2BYsEO8i%2BCKP81%2FUgAIhAIZqg4UOS9S4JVdXROSBPzAFkHWg1jQZcixMSHiyQ359Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwfbU1UfBdw5DOoqRgq3AMf9Fz2XpNtOLpBGa6H9C8dPxoUT2TGUGAgjTV0c3k4loz1ndz4G570Fx%2BK5CaOIAPwLePU%2Bsgzh8SJqI4v1Ugm3X5X8Lq5Me8VHrloMZQfdb0je8rvSpEW1kb7AoSHgx6KIvBYsVO%2FPQ%2BYnO%2FCDDSP1k1YCC3LjJC%2Fn9BLtzL8jAVwyO5lbypC%2FI9Eb4DFQQc6KSvzrrWPVGs0GRfEruqglNLpe8B666ni%2FBcnK%2FKkb7YviJXxozJZSrLbqUpmk%2BqZTYTD6EAEJDETm5xq2RkMwm7I3kI8wbyNrojTha5giZqJdTY2yc6VQKjmrho%2FQRU0%2FhDcOvjGarfjCbwXwbPj3XbhuE%2BYhL4GqZHuhJBD%2BMrYvkkvMLsMkCbqGheXblBejmmIylbM%2BmMcm7iMs6Uamvkw3JXNlltYaHeEfXCc%2BWTNYoya9ST4iYk6wvU373MC6OhSEDhGCpVqhChfRXSVvTWAbTb%2B0l9FzucXwYnMYc7XO7Q30Q0FY9nNWP9y6zBO%2Bi9t6b2yDqS1ooj5LNmb2y57MKE1oBlnt8AeBACegm%2BFJC5qDQnIh6Tf8RyqKuuyTv544G2im3t1TUEo4w6ou%2BGUUfo10uUcDhy6F2DXEMnxzuAQ2UlmkroxwDDrxYrKBjqkAVqwEh1a6WgU1kFzA5lSd%2FxXkA1xSPBtFmyvX3wYeJsWN1JfH%2F%2BQkNgX9m%2FfA%2BsJIA0ubH99U2ZsCDUh3ZAVQyKYtndFqcaY1LAxn8fPZI4VtljftWbZqbt1%2FqSlirbTabNRStE1QEQVclWzV2Uih898Tnau3Au%2Bl6wgHBsihUgD1yunORWn%2BjxNQfbJDy70NL9Ssq4Bc1CKTwVxNk2wUFnUeIvW&X-Amz-Signature=742067d1d64396eeffef4369d5d2c50eb47aa121cbee9e26ca7fb395a35fbe8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM2X2VTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpDkdSyGNdteEPfk%2BlNzS4PVca%2BYsEO8i%2BCKP81%2FUgAIhAIZqg4UOS9S4JVdXROSBPzAFkHWg1jQZcixMSHiyQ359Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwfbU1UfBdw5DOoqRgq3AMf9Fz2XpNtOLpBGa6H9C8dPxoUT2TGUGAgjTV0c3k4loz1ndz4G570Fx%2BK5CaOIAPwLePU%2Bsgzh8SJqI4v1Ugm3X5X8Lq5Me8VHrloMZQfdb0je8rvSpEW1kb7AoSHgx6KIvBYsVO%2FPQ%2BYnO%2FCDDSP1k1YCC3LjJC%2Fn9BLtzL8jAVwyO5lbypC%2FI9Eb4DFQQc6KSvzrrWPVGs0GRfEruqglNLpe8B666ni%2FBcnK%2FKkb7YviJXxozJZSrLbqUpmk%2BqZTYTD6EAEJDETm5xq2RkMwm7I3kI8wbyNrojTha5giZqJdTY2yc6VQKjmrho%2FQRU0%2FhDcOvjGarfjCbwXwbPj3XbhuE%2BYhL4GqZHuhJBD%2BMrYvkkvMLsMkCbqGheXblBejmmIylbM%2BmMcm7iMs6Uamvkw3JXNlltYaHeEfXCc%2BWTNYoya9ST4iYk6wvU373MC6OhSEDhGCpVqhChfRXSVvTWAbTb%2B0l9FzucXwYnMYc7XO7Q30Q0FY9nNWP9y6zBO%2Bi9t6b2yDqS1ooj5LNmb2y57MKE1oBlnt8AeBACegm%2BFJC5qDQnIh6Tf8RyqKuuyTv544G2im3t1TUEo4w6ou%2BGUUfo10uUcDhy6F2DXEMnxzuAQ2UlmkroxwDDrxYrKBjqkAVqwEh1a6WgU1kFzA5lSd%2FxXkA1xSPBtFmyvX3wYeJsWN1JfH%2F%2BQkNgX9m%2FfA%2BsJIA0ubH99U2ZsCDUh3ZAVQyKYtndFqcaY1LAxn8fPZI4VtljftWbZqbt1%2FqSlirbTabNRStE1QEQVclWzV2Uih898Tnau3Au%2Bl6wgHBsihUgD1yunORWn%2BjxNQfbJDy70NL9Ssq4Bc1CKTwVxNk2wUFnUeIvW&X-Amz-Signature=d53e4d56791648d37a85811d5467fd93e3a2645a72e085c275a90c1577c1a506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
