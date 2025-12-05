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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCB6KIBA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUFTgVOsyoXW421XAcbkIkyVN8E8pQCTCDK8%2BiC%2BbzlAiBnvA7of5qLNx76vctr%2FumjvVgWz9320Gj1780WLo9Tfir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMDv%2Fr6MA4FFlK3NdSKtwDFKXW1kIIGIUJ0S6iGqR7xclzRjLs4yGYNcw%2B7popT3nLe0gbc8MAVW0JSx7rxzUTrermdlHdc2biNez0TqTgXmeBxi99xLiaInqsHzAVyWij%2BPh93LSHX6Bmdz%2Bcgu8c4PWrJG2x1muNl%2FdsESQ2x2omP8CGutiigNgofn%2F2Nb%2BDfrxYQX0RSdxQMLgTfB5yMDqCBV%2FTNVPgOqcKFUev0T0mi4C7SHzderHPXJ%2Bsn3BWkdlEgYRXt%2Fdz3Cq9jW96jmUaV3LzOXYNqf1ZwYRuzNsRP7Mj4ZdGnQmeUmCvcpECOq13CJMiBCRusVK3wcGVgJg5x76Pdy7n%2FId6vAf6Vdyh4lverNZEWhsqkHuNoZPlRPXLcja5kkhtf4dteAKgRF3RLKJoCiPTYKlyumgmXQ9xn578wroQNK1ePW4huaWUeubrW%2FLGQEGZgD3O6q3cxH1%2BqvMVUMPrta82agHu3tNwLfY%2FYILukO43HVOY6qZCED1LqEY6hjrDGVzUOOKuJtj4tNXessJ%2FExWpYKbo9G71J6VNMbY2pO6QMO5R0d0d5FnUnG70WGwEnDmHqOmHVTiyKDYGWyM9AVNiTp5UvtOGHCRohkkbaajk2zZeukIN5W9%2FN4ABz1VN0oAw6PbLyQY6pgErTkWrnbruKGwpWoOHZ9dtTZyObLUxJEG2t%2BiM%2FCqkqU3zCTFWAKJAXWhb%2ByPsSKaq%2BO9v%2FnCs%2BU90zw5HpeNX%2BHvD%2BnxCRNsLxdAndUoV0rdeW%2FbSW6R0%2Fftc8WuWReFdAbQ3qVzieH5k42rgdNntF12%2Fgcf9BNhyro8TUO46oOqvjVD3lNSi5Xy07bCJ0vbdAoy939rS7glzMYVDfGlRjRVaLX%2Bi&X-Amz-Signature=fff60f9870f8b74a8175773061a0ae96128af12c5d854fcc129dae87cfe35e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCB6KIBA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUFTgVOsyoXW421XAcbkIkyVN8E8pQCTCDK8%2BiC%2BbzlAiBnvA7of5qLNx76vctr%2FumjvVgWz9320Gj1780WLo9Tfir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMDv%2Fr6MA4FFlK3NdSKtwDFKXW1kIIGIUJ0S6iGqR7xclzRjLs4yGYNcw%2B7popT3nLe0gbc8MAVW0JSx7rxzUTrermdlHdc2biNez0TqTgXmeBxi99xLiaInqsHzAVyWij%2BPh93LSHX6Bmdz%2Bcgu8c4PWrJG2x1muNl%2FdsESQ2x2omP8CGutiigNgofn%2F2Nb%2BDfrxYQX0RSdxQMLgTfB5yMDqCBV%2FTNVPgOqcKFUev0T0mi4C7SHzderHPXJ%2Bsn3BWkdlEgYRXt%2Fdz3Cq9jW96jmUaV3LzOXYNqf1ZwYRuzNsRP7Mj4ZdGnQmeUmCvcpECOq13CJMiBCRusVK3wcGVgJg5x76Pdy7n%2FId6vAf6Vdyh4lverNZEWhsqkHuNoZPlRPXLcja5kkhtf4dteAKgRF3RLKJoCiPTYKlyumgmXQ9xn578wroQNK1ePW4huaWUeubrW%2FLGQEGZgD3O6q3cxH1%2BqvMVUMPrta82agHu3tNwLfY%2FYILukO43HVOY6qZCED1LqEY6hjrDGVzUOOKuJtj4tNXessJ%2FExWpYKbo9G71J6VNMbY2pO6QMO5R0d0d5FnUnG70WGwEnDmHqOmHVTiyKDYGWyM9AVNiTp5UvtOGHCRohkkbaajk2zZeukIN5W9%2FN4ABz1VN0oAw6PbLyQY6pgErTkWrnbruKGwpWoOHZ9dtTZyObLUxJEG2t%2BiM%2FCqkqU3zCTFWAKJAXWhb%2ByPsSKaq%2BO9v%2FnCs%2BU90zw5HpeNX%2BHvD%2BnxCRNsLxdAndUoV0rdeW%2FbSW6R0%2Fftc8WuWReFdAbQ3qVzieH5k42rgdNntF12%2Fgcf9BNhyro8TUO46oOqvjVD3lNSi5Xy07bCJ0vbdAoy939rS7glzMYVDfGlRjRVaLX%2Bi&X-Amz-Signature=01b15b208eb3ce1839b5e5a8e485aa2cf810d8c7ca547759effff9b73f2a6561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
