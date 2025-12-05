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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNM235E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEg9fdg9PHLG%2BjSK%2FZysZHf7l9CUa%2FL%2BKOjGWktVvNMAIhAOKb5Y8IPMLWK%2Ft1pUzQSZrOT4l7A7eqqd3Z%2FUL2g80TKv8DCE8QABoMNjM3NDIzMTgzODA1IgwG8gunroTdT9XUDTUq3AOMVBdRY1D5meMEOKM%2BNr2nHeONRocxgUdLY%2F03yKlVsBb0ykq85hrkDE0CTf5nGm%2BK3gDXmWLRCV7K8GGwIPm84cRiHWm34WttbC%2BvL1EoisJQBsVimAwQ2IUgR3y857uYIcFnuRhqOqsE9htfBSRUQC4MG3wZqXTXC5M1lTUgCKzqK48ytDpBEgFnCJY4iDg0rvK5eSXk7QvYSLB5Ese0ykDID6Ohln9r%2FgInORYhqqvqH9%2BU3%2Fa88eUsoWJLdxrLdp4AbD83D7hpnQrA0r94LwLY5Z4jysTLZ8XxDLZ5XO%2FL5YjxFWnvqZVFW42sLdSAsXDXjqkD5nIpzaJhB1e5OjEHWaJclS1F8wGVtUhN9f3bUOpAugFJD05KudXKRHi%2FsT7k3dc%2BqxHBNHNex%2FookBsnXYD%2BQ5oG1CfJvEz39PKDvG5siiuO%2BhJ9fHpMnJN8EI7Kogb9xy9lWtoLd11CP9I2Z%2FLSucRztSw9d%2FD096AZTA%2B%2F9%2BLeELCvlE8K%2Fdk9tmCC4ZV6QE%2BS%2Fe4jDwLRpY1%2B%2Be1hEHFwj7VXwGaZFKjGfNZ4T2DhrTKiMENbOt42JnFHlfGdQWqIwqCLztYzV%2B3%2FbI4emwjMdJo9JMvNx0TMzuonQikdaOJi6TCTjMjJBjqkASwcVzFIGt67nRC%2BMPJyeX7TfdI%2FPCeRQJFjHfh9bGX%2BDDPZkcs68IdojfN9rOJzr%2FVFNzsbxuzPPUYAiiNpgxWltJmNaHqr4RbTgRC6tw%2BYJ%2Bo78yzUzVIZIZZg8Xg4wxNMTy8JMSqYMAHFgnM8jWBa2CHZ9wjI63ZB83Csdn1aGLASzGadas2oPhoTHyIYXbJnArQ9ATvJY6PIoNdoV6nyaear&X-Amz-Signature=04226b3cf6b7a94ff24b01be9d1ebebcf029677a6cc4374cd99f837997f0f32e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNM235E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEg9fdg9PHLG%2BjSK%2FZysZHf7l9CUa%2FL%2BKOjGWktVvNMAIhAOKb5Y8IPMLWK%2Ft1pUzQSZrOT4l7A7eqqd3Z%2FUL2g80TKv8DCE8QABoMNjM3NDIzMTgzODA1IgwG8gunroTdT9XUDTUq3AOMVBdRY1D5meMEOKM%2BNr2nHeONRocxgUdLY%2F03yKlVsBb0ykq85hrkDE0CTf5nGm%2BK3gDXmWLRCV7K8GGwIPm84cRiHWm34WttbC%2BvL1EoisJQBsVimAwQ2IUgR3y857uYIcFnuRhqOqsE9htfBSRUQC4MG3wZqXTXC5M1lTUgCKzqK48ytDpBEgFnCJY4iDg0rvK5eSXk7QvYSLB5Ese0ykDID6Ohln9r%2FgInORYhqqvqH9%2BU3%2Fa88eUsoWJLdxrLdp4AbD83D7hpnQrA0r94LwLY5Z4jysTLZ8XxDLZ5XO%2FL5YjxFWnvqZVFW42sLdSAsXDXjqkD5nIpzaJhB1e5OjEHWaJclS1F8wGVtUhN9f3bUOpAugFJD05KudXKRHi%2FsT7k3dc%2BqxHBNHNex%2FookBsnXYD%2BQ5oG1CfJvEz39PKDvG5siiuO%2BhJ9fHpMnJN8EI7Kogb9xy9lWtoLd11CP9I2Z%2FLSucRztSw9d%2FD096AZTA%2B%2F9%2BLeELCvlE8K%2Fdk9tmCC4ZV6QE%2BS%2Fe4jDwLRpY1%2B%2Be1hEHFwj7VXwGaZFKjGfNZ4T2DhrTKiMENbOt42JnFHlfGdQWqIwqCLztYzV%2B3%2FbI4emwjMdJo9JMvNx0TMzuonQikdaOJi6TCTjMjJBjqkASwcVzFIGt67nRC%2BMPJyeX7TfdI%2FPCeRQJFjHfh9bGX%2BDDPZkcs68IdojfN9rOJzr%2FVFNzsbxuzPPUYAiiNpgxWltJmNaHqr4RbTgRC6tw%2BYJ%2Bo78yzUzVIZIZZg8Xg4wxNMTy8JMSqYMAHFgnM8jWBa2CHZ9wjI63ZB83Csdn1aGLASzGadas2oPhoTHyIYXbJnArQ9ATvJY6PIoNdoV6nyaear&X-Amz-Signature=54394042988ee2457c4802bf058fb0ce4f9233b282b23cd370db113a0b4f499f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
