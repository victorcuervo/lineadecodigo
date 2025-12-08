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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VA63MW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFmYQmG4RO1fhIxxj%2BlnNltexLaH6dck62%2FQfinYiTYAiA6WR0EHz8FnCZX%2FRkA8zZcfOQGu1URLLmtKtwKEggngiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5zqKJxyqY9vhwtrjKtwDb%2BzaQv61eQ%2FuUR2qakw7WLHusx2IEfE5%2FOfb8Xx71uDGmpdaFz5XeaNJ3KYm5HfaPZ0YKoM9LzGv4TdS4jg%2B%2BJ%2BP%2B71IbstBbLCA4YV1hJDOGz2Kits%2FFd6xKRGIJ2QkuQ9hk%2BLS9L2gieKLTzN2Zn4kDetROHgEUHgGsGr0zVz48cKoydX2gt4YAZd5ujVnyYPAHn8cjgn%2FnsUNlBs4zqIPKKWARvnbGfh2%2BbP7lqQNq3MECNqj9loTe0dqK6Wj8EWQleSedHSnpXpDl61YPWS1xStcGv8iiYh9%2FcRgnA833f137IObScFmkX5wZMt7H%2FDce%2FYAZSQZlup4Sf0U7zVc7wE688dCc5vS%2FkBZKyBMQRRqHFK%2FS38PuSPEoqwr2Je5bX0ICt6i6keB5VnfvDNtaPmcD2jgXKyUr16Kw2zykXeJeZ5xosVBxdS0AGZslgYPt0JtDNsIqAOSRF9m7%2BltLoxTXbN6ocD6kNsYjANf1QEmjxOZ4inwrJbmBnDXHHvx6MBe8XSzi%2Fc8OI9xrk5%2B%2B%2BL5%2FnEbGBvEfVHM4dumWkK0%2FCAKZfYdv7yZ%2BrHvGleDvBijlLFfxQy0OUIi39JkPbVE4LtTve4yD%2B0X9kEn4QIeYR%2BhcKU%2B7sswxYDdyQY6pgGGDr%2BAOic2s2TQ%2BO6A%2BztV5gQcwPwTn83BUzR9LLfKqjJWF44%2FLpAGFvd94EnMv713wHqgYxlnrOUA6NVnIo9MZsourzIkgzymPVe6Q8X%2Bectzhxei%2B4RBcEUXBJeWSKdmRKtzz%2BD1eV4qfMAGAp2iwslD7xPHUKen8%2FQQK7WX984kO832oI5%2B257te35DgPvl7kZeT%2FtnN1vzHK2k24LqAYyTsYUW&X-Amz-Signature=9cc01b6913e04ef01514b08c0f8c0a3f5ee123af3da64f25f744aba1fdf5eadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VA63MW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFmYQmG4RO1fhIxxj%2BlnNltexLaH6dck62%2FQfinYiTYAiA6WR0EHz8FnCZX%2FRkA8zZcfOQGu1URLLmtKtwKEggngiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5zqKJxyqY9vhwtrjKtwDb%2BzaQv61eQ%2FuUR2qakw7WLHusx2IEfE5%2FOfb8Xx71uDGmpdaFz5XeaNJ3KYm5HfaPZ0YKoM9LzGv4TdS4jg%2B%2BJ%2BP%2B71IbstBbLCA4YV1hJDOGz2Kits%2FFd6xKRGIJ2QkuQ9hk%2BLS9L2gieKLTzN2Zn4kDetROHgEUHgGsGr0zVz48cKoydX2gt4YAZd5ujVnyYPAHn8cjgn%2FnsUNlBs4zqIPKKWARvnbGfh2%2BbP7lqQNq3MECNqj9loTe0dqK6Wj8EWQleSedHSnpXpDl61YPWS1xStcGv8iiYh9%2FcRgnA833f137IObScFmkX5wZMt7H%2FDce%2FYAZSQZlup4Sf0U7zVc7wE688dCc5vS%2FkBZKyBMQRRqHFK%2FS38PuSPEoqwr2Je5bX0ICt6i6keB5VnfvDNtaPmcD2jgXKyUr16Kw2zykXeJeZ5xosVBxdS0AGZslgYPt0JtDNsIqAOSRF9m7%2BltLoxTXbN6ocD6kNsYjANf1QEmjxOZ4inwrJbmBnDXHHvx6MBe8XSzi%2Fc8OI9xrk5%2B%2B%2BL5%2FnEbGBvEfVHM4dumWkK0%2FCAKZfYdv7yZ%2BrHvGleDvBijlLFfxQy0OUIi39JkPbVE4LtTve4yD%2B0X9kEn4QIeYR%2BhcKU%2B7sswxYDdyQY6pgGGDr%2BAOic2s2TQ%2BO6A%2BztV5gQcwPwTn83BUzR9LLfKqjJWF44%2FLpAGFvd94EnMv713wHqgYxlnrOUA6NVnIo9MZsourzIkgzymPVe6Q8X%2Bectzhxei%2B4RBcEUXBJeWSKdmRKtzz%2BD1eV4qfMAGAp2iwslD7xPHUKen8%2FQQK7WX984kO832oI5%2B257te35DgPvl7kZeT%2FtnN1vzHK2k24LqAYyTsYUW&X-Amz-Signature=54f2cad224784afab4d5e1d1328e3ebc0ecaf37f78effa708e677cc0cfe93a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
