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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DL6C47%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSQjGju2dPxeTMswOuD9uYdn%2BoBT%2FiI13uze%2FENVYqQAiAYnsxIsxUsJ271dpjhpi57b%2F9hPXrvb9C8P6LSaeBEICr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMKCbhvd1ZcxmKMvYxKtwDJ6Gr4zXV%2F8tvG%2Bpo4ZaI2cxIYByPpVUAOSj%2FOg1bsvey%2F1KIBgNY9gy8AGIwgrChPkNd0cqsvUVHuhAh89bICbJKbmHrTQuhcOSPMY46ql2Yc7ho6zwXCSVOQuqD6ydPLMi%2Bk%2BPIBy5SEoEkrutk5UnqFDYFL2E7yJg3YEvz3E5uM%2F3AHUmsNHI0MljGKqNySL3sN7xXKovmtPpoosquocM%2FwTFZykApR667%2BSb3uhn5sPzMRtUDEbpIysf5PWAAZ990SEiBNbSe7RNGCSrWX%2BBoQsQgEl%2FkHI9GJX%2FV3uOSX8EWvdJGcpIQ8JqbRGaUFnTL6lENbwKSsn7tHje%2FBmF%2Fh8iU2Ymb1TcqppeORHIrc3MD71%2BgeyxFAgZJQpS7%2F75eOlZLGxPtjn8wGgVB22NP3H%2FaSZQbO7ZxtZqE2fEd%2BPQvV8qnT3utiL8yasC6qXuOhlKp11%2F3rIkPd8qz9niGr9Mrh9ppVbiWoXnilu4NuvOKoZJMH%2B8JFbMcWQR3av0huko7qsamjh%2Fkb07hR8RXS%2FOUQ0HuAiF%2FIWkvmK2NtZ4UWjkwobyCUZB%2BiZ5sup0mBFqqtr94dJX4veen1qgIqb8OAzFbkZHZKeMTBHLjsD%2FrjGqie1BYJDYw7YnQyQY6pgG4Tk3tFlG1ESTDy%2Fq1ODLgtBIq2EsadnLs%2BewHzvzo%2BWSlPIBRu4qSpju1TVRJnlB%2FmduDlZ0bqVaK9DYB1YTFDxUqiNUJ8djUkWClZvYSxCHiwrsryXrW%2BGTxrtV1OqM4MfgZXQGY0IQz%2BcqQ2ddbwXt%2BZtt9JwZJeB7YhEjANPa0lclyXe%2FRIItQzrSxgX1mVS8yrJ5Qr1FciQz7BjGIlPanu%2Fim&X-Amz-Signature=af6178c8d44b570b5982634f85c5747710357714d8a968b70cfc93bf01819f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DL6C47%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSQjGju2dPxeTMswOuD9uYdn%2BoBT%2FiI13uze%2FENVYqQAiAYnsxIsxUsJ271dpjhpi57b%2F9hPXrvb9C8P6LSaeBEICr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMKCbhvd1ZcxmKMvYxKtwDJ6Gr4zXV%2F8tvG%2Bpo4ZaI2cxIYByPpVUAOSj%2FOg1bsvey%2F1KIBgNY9gy8AGIwgrChPkNd0cqsvUVHuhAh89bICbJKbmHrTQuhcOSPMY46ql2Yc7ho6zwXCSVOQuqD6ydPLMi%2Bk%2BPIBy5SEoEkrutk5UnqFDYFL2E7yJg3YEvz3E5uM%2F3AHUmsNHI0MljGKqNySL3sN7xXKovmtPpoosquocM%2FwTFZykApR667%2BSb3uhn5sPzMRtUDEbpIysf5PWAAZ990SEiBNbSe7RNGCSrWX%2BBoQsQgEl%2FkHI9GJX%2FV3uOSX8EWvdJGcpIQ8JqbRGaUFnTL6lENbwKSsn7tHje%2FBmF%2Fh8iU2Ymb1TcqppeORHIrc3MD71%2BgeyxFAgZJQpS7%2F75eOlZLGxPtjn8wGgVB22NP3H%2FaSZQbO7ZxtZqE2fEd%2BPQvV8qnT3utiL8yasC6qXuOhlKp11%2F3rIkPd8qz9niGr9Mrh9ppVbiWoXnilu4NuvOKoZJMH%2B8JFbMcWQR3av0huko7qsamjh%2Fkb07hR8RXS%2FOUQ0HuAiF%2FIWkvmK2NtZ4UWjkwobyCUZB%2BiZ5sup0mBFqqtr94dJX4veen1qgIqb8OAzFbkZHZKeMTBHLjsD%2FrjGqie1BYJDYw7YnQyQY6pgG4Tk3tFlG1ESTDy%2Fq1ODLgtBIq2EsadnLs%2BewHzvzo%2BWSlPIBRu4qSpju1TVRJnlB%2FmduDlZ0bqVaK9DYB1YTFDxUqiNUJ8djUkWClZvYSxCHiwrsryXrW%2BGTxrtV1OqM4MfgZXQGY0IQz%2BcqQ2ddbwXt%2BZtt9JwZJeB7YhEjANPa0lclyXe%2FRIItQzrSxgX1mVS8yrJ5Qr1FciQz7BjGIlPanu%2Fim&X-Amz-Signature=658c8307cf75d1069c8d191fcfd2276a1f7be5c54afb53c8a6877f8d987f9053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
