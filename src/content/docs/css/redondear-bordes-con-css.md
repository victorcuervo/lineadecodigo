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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJONL5J4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWx9aAa%2Fr2sxJX0ZLYSgriGfrFsdqL1t52%2BlKEqv4zigIhAObxd%2BsUgXxJtep5uotj4HvDxO8zIuy6o8%2BnEJ8AmnhDKv8DCFUQABoMNjM3NDIzMTgzODA1Igz%2BWlTcaaeTbjgqYZIq3ANw0Sd71X3gpvV9MpHaoYUJEvjk3Dp%2Bn%2BqImt9KYk%2BPG4b8DruVxN9uptQOCzy1r0U39FLQJp0JAIl1KIlmpdyqbhFMQzAeJ6chenJb9M%2BFKDUclFPVBve8PrGnKmoDarGpCBNfFOFaC89kfWIgKGWfUm5nA%2Fzd%2FND6bCzwcRaYG4D6M30O7oQVCMiWNKkVPeow8co0TubipScUbYshl%2BqGjrtb4KvMGBwmZ0fIUxjb7DEaO3YNGCF0%2FVQhS1G8euK13yX8HMl%2FxbEFX8Ouin1S8m21jw%2BLP6xKxtt%2BUkp7dxLELINMGOR5cc8B%2BcvYTTq7W6V6cJfzzoS61EDQqq0COQJOaliD6JXzvtWa9ON7nkYqwJy5wbcCL9ThuCo%2BEWzcl3n1nR5QqrjPkqfgFsB42tJYzkdEH4TjiaZ1Th%2FqzARmA3RoHqWVZPnCjrraBGqukPlWof%2BytBCfOIa3varepqIa4CNLwD8Eezd41y%2FJxm6%2BEGqLJw4zFwhw6tqfyyuYykBqZrZTBXZHz9gvcpxgZOCP3m4x6svJOYYPzddwiCTg271j3dmXDcxQY3fokw0UAfy8EyIHSkn1xENW3%2BgYvusxT7dC%2FiM%2BXsrMa4QhXsvw4eMYMXphVX4qqjC6ssnJBjqkAYkqWpQZvuMAEenJqVPbJQ7RXQf0GG1roL1GPs%2BKMazQVYIIMf3pOfz%2BRUMjztAzX%2FUddrG40W2PLY%2B6KjLhJY44B5tWfvVdHY9HumTv69zs%2BKZ2s0Vpu0%2B2JXYkDOz%2FJfFePwG8PP2byhH04bUGAZs4yfP3xJTzxRgK%2BuZOYKpd%2BGDkV6g0Upn8YCzanme7AcgKrbZ0Z8uuu9RCOSHo%2BQ%2BTHAw3&X-Amz-Signature=bd4108284511aa09d41382f80c1dc147d4115f08d1eff6c0fc323e7fa5b151b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJONL5J4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWx9aAa%2Fr2sxJX0ZLYSgriGfrFsdqL1t52%2BlKEqv4zigIhAObxd%2BsUgXxJtep5uotj4HvDxO8zIuy6o8%2BnEJ8AmnhDKv8DCFUQABoMNjM3NDIzMTgzODA1Igz%2BWlTcaaeTbjgqYZIq3ANw0Sd71X3gpvV9MpHaoYUJEvjk3Dp%2Bn%2BqImt9KYk%2BPG4b8DruVxN9uptQOCzy1r0U39FLQJp0JAIl1KIlmpdyqbhFMQzAeJ6chenJb9M%2BFKDUclFPVBve8PrGnKmoDarGpCBNfFOFaC89kfWIgKGWfUm5nA%2Fzd%2FND6bCzwcRaYG4D6M30O7oQVCMiWNKkVPeow8co0TubipScUbYshl%2BqGjrtb4KvMGBwmZ0fIUxjb7DEaO3YNGCF0%2FVQhS1G8euK13yX8HMl%2FxbEFX8Ouin1S8m21jw%2BLP6xKxtt%2BUkp7dxLELINMGOR5cc8B%2BcvYTTq7W6V6cJfzzoS61EDQqq0COQJOaliD6JXzvtWa9ON7nkYqwJy5wbcCL9ThuCo%2BEWzcl3n1nR5QqrjPkqfgFsB42tJYzkdEH4TjiaZ1Th%2FqzARmA3RoHqWVZPnCjrraBGqukPlWof%2BytBCfOIa3varepqIa4CNLwD8Eezd41y%2FJxm6%2BEGqLJw4zFwhw6tqfyyuYykBqZrZTBXZHz9gvcpxgZOCP3m4x6svJOYYPzddwiCTg271j3dmXDcxQY3fokw0UAfy8EyIHSkn1xENW3%2BgYvusxT7dC%2FiM%2BXsrMa4QhXsvw4eMYMXphVX4qqjC6ssnJBjqkAYkqWpQZvuMAEenJqVPbJQ7RXQf0GG1roL1GPs%2BKMazQVYIIMf3pOfz%2BRUMjztAzX%2FUddrG40W2PLY%2B6KjLhJY44B5tWfvVdHY9HumTv69zs%2BKZ2s0Vpu0%2B2JXYkDOz%2FJfFePwG8PP2byhH04bUGAZs4yfP3xJTzxRgK%2BuZOYKpd%2BGDkV6g0Upn8YCzanme7AcgKrbZ0Z8uuu9RCOSHo%2BQ%2BTHAw3&X-Amz-Signature=521675c187c9d69511c7da44f38c0d6faf9f7a20a9a7ef87fb5ccca09cb59821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
