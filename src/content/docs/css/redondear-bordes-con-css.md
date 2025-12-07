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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DALPT5O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhwrPtXwQUolqxBE68cGYbG7e3GnnvXjPEcn6h4TY0FAiBTcYNAIYUG5EXczvQ6nv6g0XN%2FSMQrrF5ujeZsd1LJgyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOk0mY5kj%2FSqrHE0gKtwDsS6bAK79b9UHM2v8D7AR5N3PoJ%2FMxtcs7RRLCw%2BEfaFyrgdOHxO902D9wog9YH68dLpXFARzRy2RkgUF834bS3cOo8fRUnM04pc%2BulaN0nL%2F9XTv9zZk7aNhGYkHT0%2FUTHZK%2BK8%2FFdrIMQ6RyDxObotKqAo6ve9ez50X6FRO1a42PRfm4yYUXdvkG4HsPvqUt%2Fv8237aawugApnQzu7TeghXq69VSfxHlWXOjRF4c%2FlGUL0NT%2F1JE51%2BNInIr8Zsx2NaO73BefAGU9sA%2FXeZZDb1wOUW4jwMf0V8d8Hxb4m%2B0NJS5PI7EOi57Ua8NlwI7xQGdyn2vFDV7BdBkM8kTb4zCd1yBZjByw0cCy8vw4ptfczQ87zewmYyxT6Xvm0hHVct%2F62SsdicrHSRZ7nwhVP5G%2F5%2Bhj93klrx9oX%2FDm61ZtvAQN%2Be80Hmy5Zm4y%2Br5Vubvg51r2mjAaPffGOWfpmmU76MAcLgZcnsxfkvFMSkoXPPXct3RlEGzRK2i5KA%2BvXoJdiqsJY4Ft9rIRZUWWtiZ7GDR449NTLJT6rBGN0bjNRXcA6tyUlLA%2BrqwxOkK0cm48RDKlmlXrP19S3HqdatpkPUO2kTzWXgAWZu9wb8H%2BcclDOWZmvB3D4wysfXyQY6pgE9WS1ObdeqD9xr4UmYik7J0RMCggj8KKpswZCZJaPEPl5hsPRnTgZeGYgiR%2FHJKX9NBJk47OZ6Dh7D%2BLxVRBLYhBfUs%2FPHGsbqlTCOWc4eCPuA3JQ%2BqiI%2Fb4xgM9DMIaXHUmtS5%2FQinxuDIkPeZnwV1BLAG6EPTfGcdPvwB51oOTZG2IAgX79c4Gby78aF1QhwDyrxraGn13r3ubaGQ%2BVspAYY7mv5&X-Amz-Signature=e57e8d4431c3885d13e349c22d21d4d3408de9553361460807d8a267c91a3dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DALPT5O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhwrPtXwQUolqxBE68cGYbG7e3GnnvXjPEcn6h4TY0FAiBTcYNAIYUG5EXczvQ6nv6g0XN%2FSMQrrF5ujeZsd1LJgyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOk0mY5kj%2FSqrHE0gKtwDsS6bAK79b9UHM2v8D7AR5N3PoJ%2FMxtcs7RRLCw%2BEfaFyrgdOHxO902D9wog9YH68dLpXFARzRy2RkgUF834bS3cOo8fRUnM04pc%2BulaN0nL%2F9XTv9zZk7aNhGYkHT0%2FUTHZK%2BK8%2FFdrIMQ6RyDxObotKqAo6ve9ez50X6FRO1a42PRfm4yYUXdvkG4HsPvqUt%2Fv8237aawugApnQzu7TeghXq69VSfxHlWXOjRF4c%2FlGUL0NT%2F1JE51%2BNInIr8Zsx2NaO73BefAGU9sA%2FXeZZDb1wOUW4jwMf0V8d8Hxb4m%2B0NJS5PI7EOi57Ua8NlwI7xQGdyn2vFDV7BdBkM8kTb4zCd1yBZjByw0cCy8vw4ptfczQ87zewmYyxT6Xvm0hHVct%2F62SsdicrHSRZ7nwhVP5G%2F5%2Bhj93klrx9oX%2FDm61ZtvAQN%2Be80Hmy5Zm4y%2Br5Vubvg51r2mjAaPffGOWfpmmU76MAcLgZcnsxfkvFMSkoXPPXct3RlEGzRK2i5KA%2BvXoJdiqsJY4Ft9rIRZUWWtiZ7GDR449NTLJT6rBGN0bjNRXcA6tyUlLA%2BrqwxOkK0cm48RDKlmlXrP19S3HqdatpkPUO2kTzWXgAWZu9wb8H%2BcclDOWZmvB3D4wysfXyQY6pgE9WS1ObdeqD9xr4UmYik7J0RMCggj8KKpswZCZJaPEPl5hsPRnTgZeGYgiR%2FHJKX9NBJk47OZ6Dh7D%2BLxVRBLYhBfUs%2FPHGsbqlTCOWc4eCPuA3JQ%2BqiI%2Fb4xgM9DMIaXHUmtS5%2FQinxuDIkPeZnwV1BLAG6EPTfGcdPvwB51oOTZG2IAgX79c4Gby78aF1QhwDyrxraGn13r3ubaGQ%2BVspAYY7mv5&X-Amz-Signature=eb43af89276abce98e695b2086f5b296f18277543c7c6e1b10e1191fe8b6e57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
