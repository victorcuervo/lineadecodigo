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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDYFMDJM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDY3A178SDEvyqbX4qDDa6HLEPcicBawwlKTAJ3E6GiJAiA%2BOsmaqVUTxycHDKgThFTrGRcGoUWcLCG8njYFCDjfXiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhp25qnIuM1eO2HaFKtwDti5EtzaridcR%2Bh4OuvGQLTyXd1LMyYLviEcKCQEo37OnBO%2FsSMUcn2FoqXEhlrYr2lleDChHn7TvBlVYfuS6zi51Xz2bWUq2npBywJPnq1bMRkknRYAXezDvJV6ZeKlg%2BYcPTck%2FYam6tFxxv7Xj602%2BKYBZzhf6m9GysDUI9o6w0XitHZR9GLDc%2Bd1AKav4ur9QXxqYb5wWsoM7rpx0jh0kSlC%2BrEgeNtkyYtQsyW7uzuZMwDxmLuHAZLOIa4JqwHiBijKAA%2B%2BXgmVE2slbV2LPpfpAWCsAtcGk0sitbaKKLHOBxMA7OWU%2BcO1dIAeMZ5RaftOSijg8xPCBesTQDT8JsY1yaMjdQrMvmljGtherZ2ZhFv%2BjlyxbnINU4T1%2BwwlKz3oo%2Bb%2F4LpRJxFsl6wyNsqYs4lzxt2fZ09UvlB185ZxtU2XOJgeypO1MSJGk3oseGjwbah%2BTwRA2lWVN3M3lF08djdjqf%2FTPoip97qKGNGlQTX%2FdjhiV%2F3miovAC51Gr8N%2Bs8Ivl2vJoo%2FyWn9rLvSl9LEqg8NFGttg%2BCKc9Sf53BmiEJTrKIMF5CYYZQ4tnwdq4%2FH0IV%2F5WiZHamHX%2BmEVuQOHgd9V9zZ8vujWffeXk2aVFn3VDwyAw8YuMygY6pgGS7h0560hKXS9My%2FX0FCfmeHKpWjaUj9fTB5wbGgWvT4QyVFRt0kYC0Pgkt%2BbwxtiO8rhU4iHOhgp9l1aS2Q4zG8%2FA%2F9O0yelxLEa%2FvST%2B0lhK%2F2423fAXe4Lf6wloPh7SS9J8WxLpslCt%2Bm5rFFvgJs9hLadPMqwVJf9diysf63IFQKFfhj4rfrMkgAZq%2Bph6wMT58My%2B%2Fqpm6oTXZWrUILCvVBMJ&X-Amz-Signature=b34be720f8e6b4da732f523902208f92863e544ebe835d6769a6d5f4761098c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDYFMDJM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDY3A178SDEvyqbX4qDDa6HLEPcicBawwlKTAJ3E6GiJAiA%2BOsmaqVUTxycHDKgThFTrGRcGoUWcLCG8njYFCDjfXiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhp25qnIuM1eO2HaFKtwDti5EtzaridcR%2Bh4OuvGQLTyXd1LMyYLviEcKCQEo37OnBO%2FsSMUcn2FoqXEhlrYr2lleDChHn7TvBlVYfuS6zi51Xz2bWUq2npBywJPnq1bMRkknRYAXezDvJV6ZeKlg%2BYcPTck%2FYam6tFxxv7Xj602%2BKYBZzhf6m9GysDUI9o6w0XitHZR9GLDc%2Bd1AKav4ur9QXxqYb5wWsoM7rpx0jh0kSlC%2BrEgeNtkyYtQsyW7uzuZMwDxmLuHAZLOIa4JqwHiBijKAA%2B%2BXgmVE2slbV2LPpfpAWCsAtcGk0sitbaKKLHOBxMA7OWU%2BcO1dIAeMZ5RaftOSijg8xPCBesTQDT8JsY1yaMjdQrMvmljGtherZ2ZhFv%2BjlyxbnINU4T1%2BwwlKz3oo%2Bb%2F4LpRJxFsl6wyNsqYs4lzxt2fZ09UvlB185ZxtU2XOJgeypO1MSJGk3oseGjwbah%2BTwRA2lWVN3M3lF08djdjqf%2FTPoip97qKGNGlQTX%2FdjhiV%2F3miovAC51Gr8N%2Bs8Ivl2vJoo%2FyWn9rLvSl9LEqg8NFGttg%2BCKc9Sf53BmiEJTrKIMF5CYYZQ4tnwdq4%2FH0IV%2F5WiZHamHX%2BmEVuQOHgd9V9zZ8vujWffeXk2aVFn3VDwyAw8YuMygY6pgGS7h0560hKXS9My%2FX0FCfmeHKpWjaUj9fTB5wbGgWvT4QyVFRt0kYC0Pgkt%2BbwxtiO8rhU4iHOhgp9l1aS2Q4zG8%2FA%2F9O0yelxLEa%2FvST%2B0lhK%2F2423fAXe4Lf6wloPh7SS9J8WxLpslCt%2Bm5rFFvgJs9hLadPMqwVJf9diysf63IFQKFfhj4rfrMkgAZq%2Bph6wMT58My%2B%2Fqpm6oTXZWrUILCvVBMJ&X-Amz-Signature=f130935ac8757f42894b5ecd814ebdca74d68bd62c6ab551dfaa721e198231ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
