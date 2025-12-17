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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25AWSDG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOXkD9sDGlb5%2BYhdRJrFQvVYCXgIOlbPNEVeuGeFul3QIhAJHegD2nAEZ3kA6rLDfglEjPWWBJdZ6UTMn0XsQFHJNtKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR6S1TvxcYivsNs1kq3AN71VXJX7YhwOqT3momQPF1h4jN7YKN2y3sarda2pIY3Ex1BVdyES8sUwDCfBxJrmgRF0ozGAlwlIaOc0QPYP9tHDhRKTZuj5MPU%2FgOuUxEAvMSUyfpetQ%2FrEjbRHhkDPfrJA47NDyGEGDyt3FIk40HGn4SQTmySzV6rQwnbbwW1sDIGTGEKdTrq35adRCpOCVTNRz1XRXpylujUwK9Lw5EmIEERlj0co4S7dRIWicKdHyCWKgfxtJ8IpdyuxpprX7VK0DdTq4uXH4mcO5HlxxJAnRLOl0sIfUZzBQ2DwMgX3%2FY83Q5eww77x0ZBe0R8FMX1jHMKSHIPYi9mGFkfHzf68WQvMg3aSXIfcbs26e2wa7rQ5nKMDMYT8CNh%2B4y9j%2FE%2FeSHb%2FTIHYU7CRaz8AntFFE6qWTyCAt4yWnUXZzYmIOk7nWug2pRXzxoaQuGlTmYgqMsJPNDbbjpPWcNtwae368gTJRW4OvXu4BrOG1IWZoTqlmGcVNJHHSlN%2Bg0LM4nc8QyxTqWGQe8oX1dJWvofgNm5HB1VXcE2jc78ApnZvy7jVJw64l3cli7hU2s9iALRFadSDHnMnVCBJpUR7V9w%2BNIgcyKqkOtKajj65x5rAp6PB0VfFS5KFXwiDDLnovKBjqkAdFF22cjcWQKmJ9duiOSckucelFoIGo0iUyllsNu%2F7Gc%2Fh2XkSC%2F0CcvHXCwnFXs0h4FJrjgNGPRr%2F%2FaNMWIhBhfXsNjM5t7O1HE7RR%2BfhvgrhKAsOR0NIjoa%2BeNhFR6kgNrUxCDQk9%2F0bXa7oFCx7EX5qIULcyF2DcRsKGytrTzftACD5eJaYlQaMB4p7peDbQgNUvJs9giNQkJCEBU%2FuaJeQjZ&X-Amz-Signature=ea0e499cc99fe0a665c97c9a9f7a140eff25b0ff6babd3170c1f43ad84c86eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25AWSDG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOXkD9sDGlb5%2BYhdRJrFQvVYCXgIOlbPNEVeuGeFul3QIhAJHegD2nAEZ3kA6rLDfglEjPWWBJdZ6UTMn0XsQFHJNtKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR6S1TvxcYivsNs1kq3AN71VXJX7YhwOqT3momQPF1h4jN7YKN2y3sarda2pIY3Ex1BVdyES8sUwDCfBxJrmgRF0ozGAlwlIaOc0QPYP9tHDhRKTZuj5MPU%2FgOuUxEAvMSUyfpetQ%2FrEjbRHhkDPfrJA47NDyGEGDyt3FIk40HGn4SQTmySzV6rQwnbbwW1sDIGTGEKdTrq35adRCpOCVTNRz1XRXpylujUwK9Lw5EmIEERlj0co4S7dRIWicKdHyCWKgfxtJ8IpdyuxpprX7VK0DdTq4uXH4mcO5HlxxJAnRLOl0sIfUZzBQ2DwMgX3%2FY83Q5eww77x0ZBe0R8FMX1jHMKSHIPYi9mGFkfHzf68WQvMg3aSXIfcbs26e2wa7rQ5nKMDMYT8CNh%2B4y9j%2FE%2FeSHb%2FTIHYU7CRaz8AntFFE6qWTyCAt4yWnUXZzYmIOk7nWug2pRXzxoaQuGlTmYgqMsJPNDbbjpPWcNtwae368gTJRW4OvXu4BrOG1IWZoTqlmGcVNJHHSlN%2Bg0LM4nc8QyxTqWGQe8oX1dJWvofgNm5HB1VXcE2jc78ApnZvy7jVJw64l3cli7hU2s9iALRFadSDHnMnVCBJpUR7V9w%2BNIgcyKqkOtKajj65x5rAp6PB0VfFS5KFXwiDDLnovKBjqkAdFF22cjcWQKmJ9duiOSckucelFoIGo0iUyllsNu%2F7Gc%2Fh2XkSC%2F0CcvHXCwnFXs0h4FJrjgNGPRr%2F%2FaNMWIhBhfXsNjM5t7O1HE7RR%2BfhvgrhKAsOR0NIjoa%2BeNhFR6kgNrUxCDQk9%2F0bXa7oFCx7EX5qIULcyF2DcRsKGytrTzftACD5eJaYlQaMB4p7peDbQgNUvJs9giNQkJCEBU%2FuaJeQjZ&X-Amz-Signature=901942ca78cb6bdc3fcfd13f050d0e68acd2df9c6b127850d5d8ce8ab061d8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
