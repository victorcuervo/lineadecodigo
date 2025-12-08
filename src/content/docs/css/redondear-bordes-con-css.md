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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OXJHFUV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbBN0YQsPpVRCm05Sch9DOZgSGv8WNib8BQGa%2BQCG%2BcgIhAO2%2BQver0pOOfiEb9O31segw7FbDQndckOsPMVVQ1rbIKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEwMxcCptAKezApZMq3AP%2BorK4djs9A39%2F0Z4CZUIMkYbBy%2F7aL3I3n508T4AwarE6BWPjp7aphQ0i8XcOKel1nPk5zj2Qg09BIq89n6ZFU0GRl13o6WV2SCM7MHwcGR9nymHFUJQ5thjXTPQL1ht5ATd%2Fb9fcrusBe0P%2FkMKpQdyoyrQT%2BdsV%2FLkgWGUfaRz4%2BRmu6q0s86Tjsbm7AsMRWhf6Y64N7qWAryDUnR4%2BJEIUCIlQe0X3KH0dVrY6t97ouKyQsGBHfO%2FFFdn8x6Lj3Qs4GU%2BXLrHuYlEJxszIrN6JZXbW4OxIx1boOvJEQ5IhPb1NHAxzKTKj%2Fe%2Bu6Zsq0GET%2FPPJ3RVcHWbwOEJCCfyAxgyZvT8X8TaPyFGZO7XJPWhJUx53qirnHRAAjwpx4WUAnkpJXI9rqJbNQp0HZ7hIzPhImRtm%2Bn4bvVfNWi9iGiWIkF%2BhGzBcfK2QEZVQsv3%2FQ8kXJjA3noJuAHlFHj6telk7AcFBFLkfyEYuh8YcIjkUIWipqAZnzqt0HHpPcYFp%2Fhawgtv%2B9ti0yn2jXOzAwK5V0bY9EXeYGBPJc0LqySD3CTS4ZBytllK99bxO%2BNlra2RGGtfeIpKWvyfMSTY4B3Qe84uQQSveqQh%2B45%2BnlGHM6cmBnfvxJjCp7dnJBjqkAQBkPMCjKM2Wl6bqh79JQx0LoXJfwvsyrJEJ214OJVf8gnhnScPwLWtNrzZD9PafPzUsqcu64hrMkcMF2rQk4xUnPl3SzC4TwutjXluoY3U7r1iIRRPDkrQ0B0iv0iMpwL8bFLciW2fP4oIxDVl8akgXNR9B92CTnoH4GJfjvvQOP5InObn6fZG%2BXXsSpgmmXf0sKFTgwrw8EbUShREZsVWfrS%2FB&X-Amz-Signature=6bef6856becf173d1dc99f87f1437d7cfb6d91691438b1d708fc5166ac22e82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OXJHFUV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbBN0YQsPpVRCm05Sch9DOZgSGv8WNib8BQGa%2BQCG%2BcgIhAO2%2BQver0pOOfiEb9O31segw7FbDQndckOsPMVVQ1rbIKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEwMxcCptAKezApZMq3AP%2BorK4djs9A39%2F0Z4CZUIMkYbBy%2F7aL3I3n508T4AwarE6BWPjp7aphQ0i8XcOKel1nPk5zj2Qg09BIq89n6ZFU0GRl13o6WV2SCM7MHwcGR9nymHFUJQ5thjXTPQL1ht5ATd%2Fb9fcrusBe0P%2FkMKpQdyoyrQT%2BdsV%2FLkgWGUfaRz4%2BRmu6q0s86Tjsbm7AsMRWhf6Y64N7qWAryDUnR4%2BJEIUCIlQe0X3KH0dVrY6t97ouKyQsGBHfO%2FFFdn8x6Lj3Qs4GU%2BXLrHuYlEJxszIrN6JZXbW4OxIx1boOvJEQ5IhPb1NHAxzKTKj%2Fe%2Bu6Zsq0GET%2FPPJ3RVcHWbwOEJCCfyAxgyZvT8X8TaPyFGZO7XJPWhJUx53qirnHRAAjwpx4WUAnkpJXI9rqJbNQp0HZ7hIzPhImRtm%2Bn4bvVfNWi9iGiWIkF%2BhGzBcfK2QEZVQsv3%2FQ8kXJjA3noJuAHlFHj6telk7AcFBFLkfyEYuh8YcIjkUIWipqAZnzqt0HHpPcYFp%2Fhawgtv%2B9ti0yn2jXOzAwK5V0bY9EXeYGBPJc0LqySD3CTS4ZBytllK99bxO%2BNlra2RGGtfeIpKWvyfMSTY4B3Qe84uQQSveqQh%2B45%2BnlGHM6cmBnfvxJjCp7dnJBjqkAQBkPMCjKM2Wl6bqh79JQx0LoXJfwvsyrJEJ214OJVf8gnhnScPwLWtNrzZD9PafPzUsqcu64hrMkcMF2rQk4xUnPl3SzC4TwutjXluoY3U7r1iIRRPDkrQ0B0iv0iMpwL8bFLciW2fP4oIxDVl8akgXNR9B92CTnoH4GJfjvvQOP5InObn6fZG%2BXXsSpgmmXf0sKFTgwrw8EbUShREZsVWfrS%2FB&X-Amz-Signature=abe4c8c8801df2a848bfd6204021248aa4274a29037d25ae42a72d53bd334d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
