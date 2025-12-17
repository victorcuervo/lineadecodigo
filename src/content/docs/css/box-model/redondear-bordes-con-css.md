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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTER4UXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK1FL8twFegn3Li8YV147hqLB5H%2B26Km59sI9Oz8a1PgIhAIXvHv805134rhZE5XDyQ3U3ZwqhPAtYtraFcBA4LuIkKv8DCHcQABoMNjM3NDIzMTgzODA1IgyI96DrV9MwAvB5IsUq3ANfp9y%2FNFM6h53xb0sVJ6AMs1IzYnqOkvm16b197F%2BvpQeFPq%2BaqoFbFHfpqZYhtrRhrNRANRtl8bAW1o3M72SAh3YPiy%2F4twkRZw2UCx1b3JqzryPFy5tdJvljYBFOQKck0HcHP421Yx72cEYPS5FJ2XCEXiAMWYKGIzE8a4tDGrlognmKQvEIASUxvM9FOzk%2BN18Ccbz1DcluR6uVzNZ5LEfiMv%2BHGET0qL9r2mGMulOgbNQ1YoT2pduykRtXDtrz5AiUBGXwtSIvNGAvN9bX8GUxceL2W1yGZFn%2FW%2FHUS32oBcNIACL6Ol7rZbWa7WUZMuMQTgtVNb2tcALtv%2BgRIj6qft3eyP0jpQk8S41%2B4tQW5OVI2fhowQUHqP3xvYu%2FeSWNICjEadPU74IezATLgkTmvuqiYKt6EpcNcfSUpivn3lFjOQikJVaJxgnjSTCMYNFaSIBcedkU9AQ79N0Ng9M7H6nFVDXSskzS54KB0Dkn6NzKySx6Vl%2FE%2BlwL5IJRp%2FybMKMDDsqxQt%2FCU1jhBt6H3Z9q8koDy4T%2BKweaq4Kv3mHQI7z%2Fnt3rChxoQgbN2bNks%2BF2QngUFsvhw0cyQTfHjC5dcnOqdOdOpuQ9Qj1N%2B%2FYABuGfJc4n%2FjChg4nKBjqkAWSO3N2KFiZi%2BQSB4sATDDACDqVSbTeIPH7E3l7d%2BxetJnZYW8SZ1Dsj7YtBMtvOxqPxMtaMmQZ4FK0vh39HsJwD%2BHN2nV0%2FZUK6xD0u7wuzHUBxAylIvhnO18%2BWnm4uxlJ9l0XA%2FCgSLHKT%2B6OA64q4IUg8U6phpTKgwtjLShuoNGZnbGci%2BpMW8kJopWCGvMba84%2BUCe1uy8BgR48FzZEfs%2B3f&X-Amz-Signature=519798fc23d0c2d01f33913dc99a2f8b9198cc6f3aba968cafc2f3a31b2715d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTER4UXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK1FL8twFegn3Li8YV147hqLB5H%2B26Km59sI9Oz8a1PgIhAIXvHv805134rhZE5XDyQ3U3ZwqhPAtYtraFcBA4LuIkKv8DCHcQABoMNjM3NDIzMTgzODA1IgyI96DrV9MwAvB5IsUq3ANfp9y%2FNFM6h53xb0sVJ6AMs1IzYnqOkvm16b197F%2BvpQeFPq%2BaqoFbFHfpqZYhtrRhrNRANRtl8bAW1o3M72SAh3YPiy%2F4twkRZw2UCx1b3JqzryPFy5tdJvljYBFOQKck0HcHP421Yx72cEYPS5FJ2XCEXiAMWYKGIzE8a4tDGrlognmKQvEIASUxvM9FOzk%2BN18Ccbz1DcluR6uVzNZ5LEfiMv%2BHGET0qL9r2mGMulOgbNQ1YoT2pduykRtXDtrz5AiUBGXwtSIvNGAvN9bX8GUxceL2W1yGZFn%2FW%2FHUS32oBcNIACL6Ol7rZbWa7WUZMuMQTgtVNb2tcALtv%2BgRIj6qft3eyP0jpQk8S41%2B4tQW5OVI2fhowQUHqP3xvYu%2FeSWNICjEadPU74IezATLgkTmvuqiYKt6EpcNcfSUpivn3lFjOQikJVaJxgnjSTCMYNFaSIBcedkU9AQ79N0Ng9M7H6nFVDXSskzS54KB0Dkn6NzKySx6Vl%2FE%2BlwL5IJRp%2FybMKMDDsqxQt%2FCU1jhBt6H3Z9q8koDy4T%2BKweaq4Kv3mHQI7z%2Fnt3rChxoQgbN2bNks%2BF2QngUFsvhw0cyQTfHjC5dcnOqdOdOpuQ9Qj1N%2B%2FYABuGfJc4n%2FjChg4nKBjqkAWSO3N2KFiZi%2BQSB4sATDDACDqVSbTeIPH7E3l7d%2BxetJnZYW8SZ1Dsj7YtBMtvOxqPxMtaMmQZ4FK0vh39HsJwD%2BHN2nV0%2FZUK6xD0u7wuzHUBxAylIvhnO18%2BWnm4uxlJ9l0XA%2FCgSLHKT%2B6OA64q4IUg8U6phpTKgwtjLShuoNGZnbGci%2BpMW8kJopWCGvMba84%2BUCe1uy8BgR48FzZEfs%2B3f&X-Amz-Signature=a5fc71b4686da1b9a7c2650e6ab3e8f9990544790a64b11b327c19211c60d5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
