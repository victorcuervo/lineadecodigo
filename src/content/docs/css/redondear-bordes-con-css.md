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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2SYIQS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC67dKZCddMcdO7VW1QdU9%2F0RoAxljfpvtbJ3aDV1ukvAIgZssO2gdhujJlL2tiKjDZ9SaZqZyTPzo4rD3RgQg0XPgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMzKNvS%2FDz5qgR8HMCrcAzCBQcAli%2FnBdHoqW3xS2SH4gb3V8PSI4J%2BvQ9UBoe1ZDxYzYM2x9J4f76IST%2FxYLbxIvoTa7uAQB7%2B8epdkPAZ3SOX%2FqEpW7Cf6lA1MA8jYo3SExtsGOWc92Eou6%2BtWCZI2NzrCJ73ZhXLVXjLHqRypB%2FxCsj7KI%2FZT%2Ft3YL0A7sIWMmCxwxwvnbbHaWqKKL0X2NUUo4mmDOcbidJs4vjUCpcqpZivY1N9CJwhlGXtQZpEFgYRTaflQFU3CLob9%2B6GCWzoi%2FZedPvfoP%2FZi2ifx%2BFXqxleRDE5FOjcGFztwkGlZOH1%2BLpdXm3xmw8RxflZ3FytDLkNg3H5tqmmmrewtzTPf8QS1Y2%2BXFoikgEdrTo1gRO%2BAFb3FDTb8JzMoo3UDxczHGG%2Fna7I1%2FFTChBLDxG3p%2FKVrAUlcNZP1%2FtoH3C6F%2FeyJfdl%2BvdIfQGzSbzhIQZfnLYLmVOM5bceR2jzs8qWZ8a9fRiNSXwqQq%2BbUy%2BJveHnCB2Caxpw5nmNK5cPxz3skeH4VUWM8vhTW5AWHQ3iebYATwB%2Bs9nd1BW7BRoItTYHgxGJ3ZxQdfhWuHI6BOgSW1fnHtfDhYxCRMoSiGWXfVePBI3QJUf6QHtOSIRtS8fEUrheBLbPoMNPG0ckGOqUBWvTwG0HbhFBppa%2BU6giZZMT%2Bj4RJ%2FspOLNhHGfmYuJn%2FDA8MUX%2FMCf9bgfktKtuXGruSrFHZpvlwLiwPFAAJTn6xzXRmRMdvW2jAaEXp3XRd1zls5NZAIgFttm0baEI4wgB8%2FYJi0PDQ%2BUsEUIlR69rO0yUftqSsKQJ9ivuEP0kQrvXLFKQfkaD6uF%2FoprwwunDHsI9ZiDFZxkcIl%2B3MzvtYhiyo&X-Amz-Signature=d0b27e0333249d3804a62df85d72ddba285b06e5da809eaa6a23a41e68258bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2SYIQS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC67dKZCddMcdO7VW1QdU9%2F0RoAxljfpvtbJ3aDV1ukvAIgZssO2gdhujJlL2tiKjDZ9SaZqZyTPzo4rD3RgQg0XPgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMzKNvS%2FDz5qgR8HMCrcAzCBQcAli%2FnBdHoqW3xS2SH4gb3V8PSI4J%2BvQ9UBoe1ZDxYzYM2x9J4f76IST%2FxYLbxIvoTa7uAQB7%2B8epdkPAZ3SOX%2FqEpW7Cf6lA1MA8jYo3SExtsGOWc92Eou6%2BtWCZI2NzrCJ73ZhXLVXjLHqRypB%2FxCsj7KI%2FZT%2Ft3YL0A7sIWMmCxwxwvnbbHaWqKKL0X2NUUo4mmDOcbidJs4vjUCpcqpZivY1N9CJwhlGXtQZpEFgYRTaflQFU3CLob9%2B6GCWzoi%2FZedPvfoP%2FZi2ifx%2BFXqxleRDE5FOjcGFztwkGlZOH1%2BLpdXm3xmw8RxflZ3FytDLkNg3H5tqmmmrewtzTPf8QS1Y2%2BXFoikgEdrTo1gRO%2BAFb3FDTb8JzMoo3UDxczHGG%2Fna7I1%2FFTChBLDxG3p%2FKVrAUlcNZP1%2FtoH3C6F%2FeyJfdl%2BvdIfQGzSbzhIQZfnLYLmVOM5bceR2jzs8qWZ8a9fRiNSXwqQq%2BbUy%2BJveHnCB2Caxpw5nmNK5cPxz3skeH4VUWM8vhTW5AWHQ3iebYATwB%2Bs9nd1BW7BRoItTYHgxGJ3ZxQdfhWuHI6BOgSW1fnHtfDhYxCRMoSiGWXfVePBI3QJUf6QHtOSIRtS8fEUrheBLbPoMNPG0ckGOqUBWvTwG0HbhFBppa%2BU6giZZMT%2Bj4RJ%2FspOLNhHGfmYuJn%2FDA8MUX%2FMCf9bgfktKtuXGruSrFHZpvlwLiwPFAAJTn6xzXRmRMdvW2jAaEXp3XRd1zls5NZAIgFttm0baEI4wgB8%2FYJi0PDQ%2BUsEUIlR69rO0yUftqSsKQJ9ivuEP0kQrvXLFKQfkaD6uF%2FoprwwunDHsI9ZiDFZxkcIl%2B3MzvtYhiyo&X-Amz-Signature=39cfb1f9963203ca115a897ce0fa75d7ae2d2a96a44ce5a5a558bc2b87c251af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
