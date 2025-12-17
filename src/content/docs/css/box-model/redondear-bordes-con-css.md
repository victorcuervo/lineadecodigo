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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXANGDHW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQNKR61AAjcES8%2BXU%2Fi5rsNSDwNwKdIpkzKuJ51NXYVQIhAI0aBpLILVzQc5B%2BmrObN4KQGshlNvD2Z4lLqaYZWzzmKv8DCHYQABoMNjM3NDIzMTgzODA1IgyOLFb3Kr0R0eGLV8Iq3AN8cXQpnxhzN1K2T%2B9NzPoVYYJuLrxrhqYCOUQhz36BpFEb14UV%2FPJvV9yfFgwiui78P5FqAA5y3oiZOTEC%2F8dnyf9Y%2B6Im3eOVWjl2qtLEiXI8Fb5hgAO%2BNQGzmsHwVEOpJmIwD5KAsIKFHOX8AjJ8sqrCqyXcbg0UaQcGCxUbKEg%2B%2BkOUEhVqqqXYI9gW%2FSCE3nQnRPpG05MC1QKsxxeM0cS%2F%2B6zYJPDRGR%2Fo1qeH9in940bi8Yc83Z2TxObTibyLzu33u4BhOtwhgiEpn%2BQFZoSuPrxRP5JBhOsnxp2goxC6IZYYaA6l7NY6Te1%2FziFpwtVkU3MX%2FDGrqFNW2JPik%2Bz1M5fV6ht4dgbvKn%2FZQfT3%2FTkUDISrL3upuqROf6x8Iv71umxJ7nzr2bPHoh91QXaVdfOHzDU1J3WwMwBvOIqIWc92N5inLIWP42wK42rxG%2F5Uardf0TPvS7jzXCz%2B9S0DyhhZpXYvhWwPIHa8u%2FDwtfW2KRwXuhb8Irje2rtQ8nyxBjJc4GVJZhcjXuXICYCiu%2BFI03TcJSazpx4c8q0PoSySlVXzzmYG6%2BmqgsiJAnJfKs%2BsXANrNvFnQYhvmEyLWnwfFU1foSK2jOH%2BOlkHnStYucP4cS7OPDCO6ojKBjqkAdKQmjjUEoVE%2B79PPoia48DDExrYIauqDvyG4IXkIV4JoQlfp8AF%2BoLaaexJNLQXcvoAOstYKqw8Qo0iOlKbqLe2JkQxj7UO36SrExHgQOWROTtY%2BcT%2FqTx0JSPSEnPbf7Tkih6icfzpdL12LmKR0ve5jsBcwLgubOcj%2Bv68d%2ByAmhKFofmtyLTtixs3yfr6SO8OhWCqjLq%2BKJRTg0U11COyjdH7&X-Amz-Signature=55932a4a6eef108be5e553bcab63aada681399de70baf8087054a98d5885afed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXANGDHW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQNKR61AAjcES8%2BXU%2Fi5rsNSDwNwKdIpkzKuJ51NXYVQIhAI0aBpLILVzQc5B%2BmrObN4KQGshlNvD2Z4lLqaYZWzzmKv8DCHYQABoMNjM3NDIzMTgzODA1IgyOLFb3Kr0R0eGLV8Iq3AN8cXQpnxhzN1K2T%2B9NzPoVYYJuLrxrhqYCOUQhz36BpFEb14UV%2FPJvV9yfFgwiui78P5FqAA5y3oiZOTEC%2F8dnyf9Y%2B6Im3eOVWjl2qtLEiXI8Fb5hgAO%2BNQGzmsHwVEOpJmIwD5KAsIKFHOX8AjJ8sqrCqyXcbg0UaQcGCxUbKEg%2B%2BkOUEhVqqqXYI9gW%2FSCE3nQnRPpG05MC1QKsxxeM0cS%2F%2B6zYJPDRGR%2Fo1qeH9in940bi8Yc83Z2TxObTibyLzu33u4BhOtwhgiEpn%2BQFZoSuPrxRP5JBhOsnxp2goxC6IZYYaA6l7NY6Te1%2FziFpwtVkU3MX%2FDGrqFNW2JPik%2Bz1M5fV6ht4dgbvKn%2FZQfT3%2FTkUDISrL3upuqROf6x8Iv71umxJ7nzr2bPHoh91QXaVdfOHzDU1J3WwMwBvOIqIWc92N5inLIWP42wK42rxG%2F5Uardf0TPvS7jzXCz%2B9S0DyhhZpXYvhWwPIHa8u%2FDwtfW2KRwXuhb8Irje2rtQ8nyxBjJc4GVJZhcjXuXICYCiu%2BFI03TcJSazpx4c8q0PoSySlVXzzmYG6%2BmqgsiJAnJfKs%2BsXANrNvFnQYhvmEyLWnwfFU1foSK2jOH%2BOlkHnStYucP4cS7OPDCO6ojKBjqkAdKQmjjUEoVE%2B79PPoia48DDExrYIauqDvyG4IXkIV4JoQlfp8AF%2BoLaaexJNLQXcvoAOstYKqw8Qo0iOlKbqLe2JkQxj7UO36SrExHgQOWROTtY%2BcT%2FqTx0JSPSEnPbf7Tkih6icfzpdL12LmKR0ve5jsBcwLgubOcj%2Bv68d%2ByAmhKFofmtyLTtixs3yfr6SO8OhWCqjLq%2BKJRTg0U11COyjdH7&X-Amz-Signature=3a1cc9695942b5a23bbbe71653ff95a5c8db7be2747680fefe4890fe0177f916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
