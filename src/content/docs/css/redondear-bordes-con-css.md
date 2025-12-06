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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WP7CGIW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaxR0biDWqW%2FeX0cjyJR8QxpkXmh1rEEhVU9w4qoSTdwIhAO6lELEFra4DPJ%2Fyg0cj3ZXbJ0CYFJhSlfJ9UH9wnMizKv8DCHoQABoMNjM3NDIzMTgzODA1IgzVhM2ZijxlUCJCcOgq3AP%2FsT1iZ%2FEhy0gxc6dRXVwavT%2FO%2B%2F2MMyX5b7%2FLelUFvA%2BLChsi5hhVO%2FleVuiBZ7yn8%2BUOunHzPxPhww4V20Ai67su557SzYRZha40jXLm1qGIDRKugMIwWq4APSM4wGWSDzZyyqysoLVjQ8Zm0II8pppzhU9SPa%2FKuAOJYQjsezXrg7p79q3gzPa9myCiGlmQwDReXCImXQny6B6h%2BRomb%2BwN0FROYVjEototCRl9FTdS4Vfli9uq65SmAh%2FMThIvqNuACGCVUp%2Fc%2BhTuhV%2BiDWkhqqX8zoVDZC5XhtU%2FcRnUVCn0jGhNF8ioM8zUP3%2Fenq49JetARrE1lCX%2B1q%2FFbROIJHSPLxqBYaJ80aujNjfwQTcFzUb7uzqQi5SdiNesUkrvYwMNWnzOyWum5mJnV%2BZGt6UQd9DvM5Uxyr%2B27HoYjAsU8kLOeTPkH8FOMJhH6NzuKP%2FcfPH2VZr9sMZZnQFOk%2BktkHJHm201gcyDMdwb7pVVjwLzFx4hEYdVl9kK3PRKcRwzDA%2BhqlsNoBE4%2BB4HCu25MhMzmT2wcNWpGQVWeWVy0QQR1zjfx%2BZn%2FsxrFZpPkOri90pL4hRF4fi2xkW5RZS0TSPq9EPfaBT1Kuh8tZK7KcLp17kbszCty9HJBjqkAZVrX6XX98Vooiwnerjz%2Fg3MLm5KzXJvQ730kPhKHo5lJ6EG3sqRwin0uYWy4X81a%2FiLv5DvzoSu%2BWoHAOgFMD%2BBSAx72T9TbpIbP79TZkwY9jJUaNfYprnEIn8%2BOThrl%2BNJu8%2BHMZXyv5wJfQT29ulU4UrSJMbz6lCBhYej5S1DQGMuJVD8ZmWUF54X%2Fx9%2F0m8WjdK8ky0pWZ9fRabY8Whx4nE8&X-Amz-Signature=2ce42aae74bcc6ed2496070678638010efecc500dcaf302011aced01cb08f102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WP7CGIW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaxR0biDWqW%2FeX0cjyJR8QxpkXmh1rEEhVU9w4qoSTdwIhAO6lELEFra4DPJ%2Fyg0cj3ZXbJ0CYFJhSlfJ9UH9wnMizKv8DCHoQABoMNjM3NDIzMTgzODA1IgzVhM2ZijxlUCJCcOgq3AP%2FsT1iZ%2FEhy0gxc6dRXVwavT%2FO%2B%2F2MMyX5b7%2FLelUFvA%2BLChsi5hhVO%2FleVuiBZ7yn8%2BUOunHzPxPhww4V20Ai67su557SzYRZha40jXLm1qGIDRKugMIwWq4APSM4wGWSDzZyyqysoLVjQ8Zm0II8pppzhU9SPa%2FKuAOJYQjsezXrg7p79q3gzPa9myCiGlmQwDReXCImXQny6B6h%2BRomb%2BwN0FROYVjEototCRl9FTdS4Vfli9uq65SmAh%2FMThIvqNuACGCVUp%2Fc%2BhTuhV%2BiDWkhqqX8zoVDZC5XhtU%2FcRnUVCn0jGhNF8ioM8zUP3%2Fenq49JetARrE1lCX%2B1q%2FFbROIJHSPLxqBYaJ80aujNjfwQTcFzUb7uzqQi5SdiNesUkrvYwMNWnzOyWum5mJnV%2BZGt6UQd9DvM5Uxyr%2B27HoYjAsU8kLOeTPkH8FOMJhH6NzuKP%2FcfPH2VZr9sMZZnQFOk%2BktkHJHm201gcyDMdwb7pVVjwLzFx4hEYdVl9kK3PRKcRwzDA%2BhqlsNoBE4%2BB4HCu25MhMzmT2wcNWpGQVWeWVy0QQR1zjfx%2BZn%2FsxrFZpPkOri90pL4hRF4fi2xkW5RZS0TSPq9EPfaBT1Kuh8tZK7KcLp17kbszCty9HJBjqkAZVrX6XX98Vooiwnerjz%2Fg3MLm5KzXJvQ730kPhKHo5lJ6EG3sqRwin0uYWy4X81a%2FiLv5DvzoSu%2BWoHAOgFMD%2BBSAx72T9TbpIbP79TZkwY9jJUaNfYprnEIn8%2BOThrl%2BNJu8%2BHMZXyv5wJfQT29ulU4UrSJMbz6lCBhYej5S1DQGMuJVD8ZmWUF54X%2Fx9%2F0m8WjdK8ky0pWZ9fRabY8Whx4nE8&X-Amz-Signature=877cbc5a44ae6e2ca64d4e4c7c744ae1d051a3220d97a6effd504f44309e3bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
