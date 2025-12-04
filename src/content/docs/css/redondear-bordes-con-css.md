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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6WVR7I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIA%2BNRWNUPh4N0ve3Rw9Fq%2FktH2fN5R2mInrDMHlDSvoHAiEA0gq6INKmBO%2B%2Br%2BfD3IJ6VWap7mjf0JuuyYt%2F26xhKzoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJVVu9i0EtEWZJT8LircA0F%2BcBjfyvNkG1qPD%2BASTgO55LT9NJdWnv%2FxLhVG3%2BsxZsaxQ%2FWy%2BIg79l5BeXPsg0dWdhciEH17L4Gdei%2Bax7DnB5P4%2FCqgT5kp%2Brh%2Fira1qKPL%2B8D2kyEHeft2d3UXs0xraFbCzUlPC3w2XBkLgHUB4jVM%2Baop%2F81Dg5DTN5UofEdsrJFh22q6ooIe13OgKJKI1WlZ%2BA5zVYQEu1f48qqbzfdQzEZUs01YPJxSJzqe1J2OfksXg7aIL%2B7DujrqD8EInmzXW3fRm13GGEPa30C85vZ8V3jfnu%2BD6WKPwT0k6FYJqDrgUs%2Fxt86eRPY1%2FPe6zi4uSfwD8I2fEz5FflsYbO3drq78Z2Z9WQx%2BjujrSHr1q2esM5cFDv6MMBBDG%2BEGprTDFXLq94TiZ9yVk03UFPUN3NF46S0t%2FIv45FSwSGbjGY3bauC9zlRQo6hjznhbUFLutxpIl%2B1438b9mVFlUPgSfZVLHFiY6TYMK5Mqy3sm1Ojx8KfxuPajFCoWT%2FecJs9imWUX8L5CA3PzbSqNdwL8cRJuQgRmDW1eSNeA42oCv5mvpdOBlM2FXAtrXozFSvJanv0WczB8pXvHv3xA6W%2BYB%2Bn%2BRV2ke7%2FQAIPT8CiWnUGoi94y1uv0MLiFxckGOqUBPDh4LMWY0dfiH9q6B%2FjxRgcWFmv1nySZvNw1SJnfuPxnR38N4DdX5tSf3aeJQULRA2SsyVazGFcXKRFVUlnaKCMpOSALFSRhlwIOanch00hUusOJfQexYE%2BPNExlGVwRQ9u7ycgR147LUlySo6rA7fUPHo3C1Wp3RruqMivoTFUqEa1yehjbiYAP3AAmQ6iE01lzm4OfLrBYtLeQcvFEKezHh%2FR7&X-Amz-Signature=dadf6a442b177c6c9d5eeb5eec254e0e377444c3eb45584fa45e5c96850cd8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6WVR7I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIA%2BNRWNUPh4N0ve3Rw9Fq%2FktH2fN5R2mInrDMHlDSvoHAiEA0gq6INKmBO%2B%2Br%2BfD3IJ6VWap7mjf0JuuyYt%2F26xhKzoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJVVu9i0EtEWZJT8LircA0F%2BcBjfyvNkG1qPD%2BASTgO55LT9NJdWnv%2FxLhVG3%2BsxZsaxQ%2FWy%2BIg79l5BeXPsg0dWdhciEH17L4Gdei%2Bax7DnB5P4%2FCqgT5kp%2Brh%2Fira1qKPL%2B8D2kyEHeft2d3UXs0xraFbCzUlPC3w2XBkLgHUB4jVM%2Baop%2F81Dg5DTN5UofEdsrJFh22q6ooIe13OgKJKI1WlZ%2BA5zVYQEu1f48qqbzfdQzEZUs01YPJxSJzqe1J2OfksXg7aIL%2B7DujrqD8EInmzXW3fRm13GGEPa30C85vZ8V3jfnu%2BD6WKPwT0k6FYJqDrgUs%2Fxt86eRPY1%2FPe6zi4uSfwD8I2fEz5FflsYbO3drq78Z2Z9WQx%2BjujrSHr1q2esM5cFDv6MMBBDG%2BEGprTDFXLq94TiZ9yVk03UFPUN3NF46S0t%2FIv45FSwSGbjGY3bauC9zlRQo6hjznhbUFLutxpIl%2B1438b9mVFlUPgSfZVLHFiY6TYMK5Mqy3sm1Ojx8KfxuPajFCoWT%2FecJs9imWUX8L5CA3PzbSqNdwL8cRJuQgRmDW1eSNeA42oCv5mvpdOBlM2FXAtrXozFSvJanv0WczB8pXvHv3xA6W%2BYB%2Bn%2BRV2ke7%2FQAIPT8CiWnUGoi94y1uv0MLiFxckGOqUBPDh4LMWY0dfiH9q6B%2FjxRgcWFmv1nySZvNw1SJnfuPxnR38N4DdX5tSf3aeJQULRA2SsyVazGFcXKRFVUlnaKCMpOSALFSRhlwIOanch00hUusOJfQexYE%2BPNExlGVwRQ9u7ycgR147LUlySo6rA7fUPHo3C1Wp3RruqMivoTFUqEa1yehjbiYAP3AAmQ6iE01lzm4OfLrBYtLeQcvFEKezHh%2FR7&X-Amz-Signature=c524f16974c18ff022f96369272e9e6cc30c316d80e66278ba34c78160525c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
