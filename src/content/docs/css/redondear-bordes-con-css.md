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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6DHDVN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0SLko0bGSHi%2FtW8BWLj6rsqPeVxxeuAWMW7WgjgVxiAiB%2BB6Cid4G2IrOgwU8D1WMKh9LyJuk9%2B0nJRzmXIWUtmSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX3AepkQH2Vaz%2FZUIKtwD%2FBiw%2BONhvoVS2z3aKjaCr2SmtxY4ozLdkp%2FeohNI0bQXlSw07iKK41Of%2FjZD1kLQTQyYvior23U6OIFR%2FFtI3%2FIOu4ow9FacI%2F8pJdrVvF1TmPUIn%2BUE5lvp6JtQp31h3dE14NwEX4KaiqS0vc9IHgC1BSUONJsgVi5JEOOKUexo2IQZZYV49vWD9NYymMdN3nUrtsqznfzNr%2FieY1h6BYH0kdroCPQ%2F68xSXc3tc6OwvjSyCn8SfRJXESZdfwHzc31lDdsYNoQZFfp%2FJPu16Z7apG6cFLlFJXp0msg09LqNSgGa1L2koQWnkTqvHDxGJVDxFKNzfAT3PBkhZO7bvbwnbqT8vgvRrPF44PQb95CtjZGWQf%2B5F1PZWNZwhrcG74LoI68X0WBT12Akx06p9mq0sBXAZdpYVvaAIWFUurAWm4nC28sf4i9Ic3luZ%2B1KqkrZAIZqunqcrp%2FZCZaREHUFLcLmJFYN3BHOtAO08DJ0s1JaiZj2UehYyS0%2BvjYAdOyAlzBBMBHCPN5ymbiVWIxcFBV47b%2Ba8QsdDjLd7NLMGUyUSAnbOXZT7cui7lpTLKJCYTFjuMxjC2FvtgeSRzJb%2B9QiTTf3aeEo0XaTCGHA3%2FUdc%2BLSHCLMaeIwmJnVyQY6pgFri0CqFMe99GbC0XPb1wNknXjK4B4qbwaPPkYQoVzCGUEbkEBSRvouRzMeBm2FESs8CPtJ1IXtR8gf9eEY4EuUL%2FvFQF%2FB%2Fn%2B%2ForhnKQWbdHeBrjpm%2BbrbpJoWih4YV0m8BjOO89CEzMadnRwvONS%2BdFLj7ZaCQyHCndCnaqVF5VwsofWgu9iLnMqaRW5JuUDX9k9EvMdA5BdhBE34Wn8rOZQIefQk&X-Amz-Signature=b927f64b74c78ed2410535c7e4e2dc8c61e3a3a0432ba6992ed5bb3dd429fe25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6DHDVN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0SLko0bGSHi%2FtW8BWLj6rsqPeVxxeuAWMW7WgjgVxiAiB%2BB6Cid4G2IrOgwU8D1WMKh9LyJuk9%2B0nJRzmXIWUtmSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX3AepkQH2Vaz%2FZUIKtwD%2FBiw%2BONhvoVS2z3aKjaCr2SmtxY4ozLdkp%2FeohNI0bQXlSw07iKK41Of%2FjZD1kLQTQyYvior23U6OIFR%2FFtI3%2FIOu4ow9FacI%2F8pJdrVvF1TmPUIn%2BUE5lvp6JtQp31h3dE14NwEX4KaiqS0vc9IHgC1BSUONJsgVi5JEOOKUexo2IQZZYV49vWD9NYymMdN3nUrtsqznfzNr%2FieY1h6BYH0kdroCPQ%2F68xSXc3tc6OwvjSyCn8SfRJXESZdfwHzc31lDdsYNoQZFfp%2FJPu16Z7apG6cFLlFJXp0msg09LqNSgGa1L2koQWnkTqvHDxGJVDxFKNzfAT3PBkhZO7bvbwnbqT8vgvRrPF44PQb95CtjZGWQf%2B5F1PZWNZwhrcG74LoI68X0WBT12Akx06p9mq0sBXAZdpYVvaAIWFUurAWm4nC28sf4i9Ic3luZ%2B1KqkrZAIZqunqcrp%2FZCZaREHUFLcLmJFYN3BHOtAO08DJ0s1JaiZj2UehYyS0%2BvjYAdOyAlzBBMBHCPN5ymbiVWIxcFBV47b%2Ba8QsdDjLd7NLMGUyUSAnbOXZT7cui7lpTLKJCYTFjuMxjC2FvtgeSRzJb%2B9QiTTf3aeEo0XaTCGHA3%2FUdc%2BLSHCLMaeIwmJnVyQY6pgFri0CqFMe99GbC0XPb1wNknXjK4B4qbwaPPkYQoVzCGUEbkEBSRvouRzMeBm2FESs8CPtJ1IXtR8gf9eEY4EuUL%2FvFQF%2FB%2Fn%2B%2ForhnKQWbdHeBrjpm%2BbrbpJoWih4YV0m8BjOO89CEzMadnRwvONS%2BdFLj7ZaCQyHCndCnaqVF5VwsofWgu9iLnMqaRW5JuUDX9k9EvMdA5BdhBE34Wn8rOZQIefQk&X-Amz-Signature=1ff5479b871b0656c017c252847c8acc0fa8b16d8bca0d8d3e821bf230040b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
