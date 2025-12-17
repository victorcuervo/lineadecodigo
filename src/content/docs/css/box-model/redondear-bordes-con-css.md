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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW7G66MZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHCfxDr6KMtckzl1rXU7dxzc4v%2Fz%2F0362O4oNBtdV7eAiEA%2BuGFnzMQHPcv1So1VJIuSObTP4JDyFlHXNW13mgn5mEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJhoTbYIQMr4%2FfCExyrcAwTJITMRN7rkbUHRNYdNi3t6Cv9G5Ze0XnhsPCIIWQs9c%2BIFRkNXACv6JcsWN6JuPQaMKsJMRLIeYNoktzDhO1WssB1fyhS4rgXlLI6ukQ4kvRkcCLXGJYHaWhxa0VlUWd%2FcxjaVUcGaRAOHzyx4ipZvo9Nw9F%2BKgeBWpbsjHQQjFgucngKdIG5KGy1drnwO8XVVuyU6E1DYedahUCCxt5OnPEeKkWON1uGLMlOo50kTD3%2FhsnG%2B78Z%2FsuENxwfTZ4tHU6vhd%2BcvdWtcWg1zQCHSuxyK24AKmudreIixb1GUvMx%2BP7KmTDeIh09SvZ2g4VYIpo44FxgWmtixc%2FNN1SQJa6fn6vfcll%2B0Uxr%2BJWDxPf167mPkVRKPf6xXY8aLfX6zpWq6nRbBym5gXQIgUMCH1fmwzsJ0YUz4DPbEx0lCGWVRQLvtvV8DN3n1YrkkGnjKBitNhFIRQU7C14aJfyofRyFaescT4Ef7J%2BefJukWz%2BBb0X5OgaAAq6WmIKumdPCJiou8ElctqnUpbk7x%2BFzYC4%2B%2BOyFJARMvKf5%2FsQbcYmmVGUvTJC8k2FUNiJGH9u881QRqA0brpEUYokhi6gCgEXwPOSngv8jsfgnqsZHga1w7YlSL83lvbGHEMLeyiMoGOqUBs%2FJ2OKeAoffwdulWqoE4%2BWFQO6QwVZB779khmw4GhUWWVNz4VV9hGmcR052LfIsynHRwk9R78V47dJ%2B6QwmgXFYjzyQ2ZdIcAPvPn%2FSc7O9NnB2sIaEuCYEp%2FkrTOYgdTQni3Ua%2FkV%2FYBfHUQlSulRpBC829UZES9Y0wklZ9OMhWnQ2%2B7cHUmc42IPDdROY8xSRh765qJQpCFxDpNQkd5%2BdYOjOw&X-Amz-Signature=4b387c269b63b1fd368c03c34c8bb3bd887d919fe64ab975d46100e800906388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW7G66MZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHCfxDr6KMtckzl1rXU7dxzc4v%2Fz%2F0362O4oNBtdV7eAiEA%2BuGFnzMQHPcv1So1VJIuSObTP4JDyFlHXNW13mgn5mEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJhoTbYIQMr4%2FfCExyrcAwTJITMRN7rkbUHRNYdNi3t6Cv9G5Ze0XnhsPCIIWQs9c%2BIFRkNXACv6JcsWN6JuPQaMKsJMRLIeYNoktzDhO1WssB1fyhS4rgXlLI6ukQ4kvRkcCLXGJYHaWhxa0VlUWd%2FcxjaVUcGaRAOHzyx4ipZvo9Nw9F%2BKgeBWpbsjHQQjFgucngKdIG5KGy1drnwO8XVVuyU6E1DYedahUCCxt5OnPEeKkWON1uGLMlOo50kTD3%2FhsnG%2B78Z%2FsuENxwfTZ4tHU6vhd%2BcvdWtcWg1zQCHSuxyK24AKmudreIixb1GUvMx%2BP7KmTDeIh09SvZ2g4VYIpo44FxgWmtixc%2FNN1SQJa6fn6vfcll%2B0Uxr%2BJWDxPf167mPkVRKPf6xXY8aLfX6zpWq6nRbBym5gXQIgUMCH1fmwzsJ0YUz4DPbEx0lCGWVRQLvtvV8DN3n1YrkkGnjKBitNhFIRQU7C14aJfyofRyFaescT4Ef7J%2BefJukWz%2BBb0X5OgaAAq6WmIKumdPCJiou8ElctqnUpbk7x%2BFzYC4%2B%2BOyFJARMvKf5%2FsQbcYmmVGUvTJC8k2FUNiJGH9u881QRqA0brpEUYokhi6gCgEXwPOSngv8jsfgnqsZHga1w7YlSL83lvbGHEMLeyiMoGOqUBs%2FJ2OKeAoffwdulWqoE4%2BWFQO6QwVZB779khmw4GhUWWVNz4VV9hGmcR052LfIsynHRwk9R78V47dJ%2B6QwmgXFYjzyQ2ZdIcAPvPn%2FSc7O9NnB2sIaEuCYEp%2FkrTOYgdTQni3Ua%2FkV%2FYBfHUQlSulRpBC829UZES9Y0wklZ9OMhWnQ2%2B7cHUmc42IPDdROY8xSRh765qJQpCFxDpNQkd5%2BdYOjOw&X-Amz-Signature=7aa9a081651e5ac2c90dd2272583a9dd9de574c9ca6012a82c2ecd21c3ca0b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
