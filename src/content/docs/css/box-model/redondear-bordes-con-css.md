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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHP4AYU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkJPZ2F2ntT3081o6qc%2FPNJ7Gn1CPH7yfkG39KU5%2FvJAiBORUI9apGWS2FzyjqsVPXpRmnHDeDPy0Qkya1r%2FXeWaCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhR6qayUuQ30ccHQKtwDaIuJGPalVKC09PWCXHcgy%2BqRCVElgBBn2LKNEc0jXV3NSsW8TVhh2ck9cyOpj2MBqAsSWsUneL%2B5cSfuWgxdR1RWGhAZqPBAoavXA1pGGAVCT35C6dLbSjlj0bHxvmKnwTKTzJVA%2Fr6vXmyxqGEW4ySBaQ17znGR%2BcM5JvxUSAS9LWqiaNHqA9jiqEt0B6YFXohciP1JwHr6R19j22fBu5TJHtnLRypddWSmaLCraQWU1e9vuW%2FIPmvQboG6drlv6I95inasmr9yQyGKKLLtnudLI3RebN01PNIEdH%2Bj%2BBJk4ObTJp6yvgArpxLxUJjH%2BovQK9RNe0ETTA1VpCVidXbW%2BFDZ%2BRNozoiEDDRD8y9TcFMDT0AQcEBYovWXO9EkkIbn9rhkU9AEB6p9f5Wk6UpBGRGctakkftBl4QYeM9HhruCNRsFHPz6W08JzDsXpPqZa4vJq7aIS7%2Bhbxe7%2BRrh3fn4vubq1tGVDVXawuxWohSSdxAxVKQbk%2Fp4w1VWJMhyDrZ2OWvlHyMDxk04itBQl8%2BTe61oCoTmEcS3hLlQtxR%2FUSj8KuOYix5P75ILQMsEwNttk5klrBZVCfcrjt75yzwIYHAfCppvVXKoAX4M0P5Y4BT0VP%2Bxdpdgw7p6LygY6pgFf2hvfGtorcTCLh0MmHdxE2SSEXXRAhm09OYBgjOzimARgoPUX%2F7mxsJXXrWCLqqS3Zb6t2axc8zh61axZ9WEHCAn0z1iMRY0Jn8kl4Mgb%2FMd9vq0PJHAx0Jg%2BHdwQMAVVfFw06wGAYkc2z%2FhE3kYdgL6XatPmN3KydEKYNGZ0xXVWl9UTytF2aiSIdJxIXD1hSfo1uzKkD7AAmAKaSjCJcmQJeLPT&X-Amz-Signature=f2a2493c22bf799c3b5e1fb4e38529388e9244ecd69337ceb65a250dca82942e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHP4AYU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkJPZ2F2ntT3081o6qc%2FPNJ7Gn1CPH7yfkG39KU5%2FvJAiBORUI9apGWS2FzyjqsVPXpRmnHDeDPy0Qkya1r%2FXeWaCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhR6qayUuQ30ccHQKtwDaIuJGPalVKC09PWCXHcgy%2BqRCVElgBBn2LKNEc0jXV3NSsW8TVhh2ck9cyOpj2MBqAsSWsUneL%2B5cSfuWgxdR1RWGhAZqPBAoavXA1pGGAVCT35C6dLbSjlj0bHxvmKnwTKTzJVA%2Fr6vXmyxqGEW4ySBaQ17znGR%2BcM5JvxUSAS9LWqiaNHqA9jiqEt0B6YFXohciP1JwHr6R19j22fBu5TJHtnLRypddWSmaLCraQWU1e9vuW%2FIPmvQboG6drlv6I95inasmr9yQyGKKLLtnudLI3RebN01PNIEdH%2Bj%2BBJk4ObTJp6yvgArpxLxUJjH%2BovQK9RNe0ETTA1VpCVidXbW%2BFDZ%2BRNozoiEDDRD8y9TcFMDT0AQcEBYovWXO9EkkIbn9rhkU9AEB6p9f5Wk6UpBGRGctakkftBl4QYeM9HhruCNRsFHPz6W08JzDsXpPqZa4vJq7aIS7%2Bhbxe7%2BRrh3fn4vubq1tGVDVXawuxWohSSdxAxVKQbk%2Fp4w1VWJMhyDrZ2OWvlHyMDxk04itBQl8%2BTe61oCoTmEcS3hLlQtxR%2FUSj8KuOYix5P75ILQMsEwNttk5klrBZVCfcrjt75yzwIYHAfCppvVXKoAX4M0P5Y4BT0VP%2Bxdpdgw7p6LygY6pgFf2hvfGtorcTCLh0MmHdxE2SSEXXRAhm09OYBgjOzimARgoPUX%2F7mxsJXXrWCLqqS3Zb6t2axc8zh61axZ9WEHCAn0z1iMRY0Jn8kl4Mgb%2FMd9vq0PJHAx0Jg%2BHdwQMAVVfFw06wGAYkc2z%2FhE3kYdgL6XatPmN3KydEKYNGZ0xXVWl9UTytF2aiSIdJxIXD1hSfo1uzKkD7AAmAKaSjCJcmQJeLPT&X-Amz-Signature=b81bf8ef3faf160b61ea44e75155482b145db5b321246b9b2396d4a56d328d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
