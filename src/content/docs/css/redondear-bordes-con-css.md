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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRYDWK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwWQHk6jKM3a6tUGLGK%2FCilRb5YoDC8v%2FehXJJQajjFgIhAKaQ8Llue5kdZVhM4CIdmh86IKutbjoJHbEu4bLfdYhIKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJuUD8BlrESL26kMoq3AMhprOmSsT0rvyu2yWQX9y6yuIzrNAtYsJ6TUE60Eqqw7dU0gqepg0OqcWJ7CfkirLhZZTlnkKcXMVhjNDUd0o7GS%2BUGyzZfwlccQOq1xDQu73ZlqIyc0jFcKvfGKbCGSnRwRZcEYwyCW%2F4qEcA67UI26OEBjYICEoSs4VltdS7y%2BK7hHoiRakGnXbHcNCkyi7pzbjSOD1wKy%2FLxoKQJW4R1jOBXG7Q5a4EabJET2yWZLA9n3PA8tbmTt5FoHdi1fIXiSuTbFDSS%2FKWA9pt5WXJ97%2FhNXVa9ZUK0oku59wBeRz2rxqCeg8siQcW3xX4gdoLQQh9GT8aLjsu7fMOAlSbDyOQ0IW4%2FRNKfH9hd%2BgFxZu5A2IPIBbS8JsCq9QFApzi1s%2FvVOuiQs3TjYGD6UJLoe0jHZRbImgB0WXah8iET2y2MxQmNe2Iq5KXrc4EKCzYjRmHMEkJhjp2aGTHzIyPHTiE7mdEgWeVseW6oxRhjBrA%2FLw9W2fGpzvrzUdNMWUwpkB%2BpMCC%2B4tYzg4srB1MSlb2%2FyYq8i4OpdmG5nD9P3owsIJazyAeiJwdBSmG%2FaQcWNBQzqb%2ByOIf%2Fif6b5r%2F7St5pUd5o%2FmdXkxefQdL8f3BWYUCbG0nBEzhpTDSmdXJBjqkAYNwwZNhK3sQ6yxqLrSzl301tfumu3u%2F%2B8cFpuTzBhVhv1cIEZtLLMR572AnFHSYu48wxTwBMVoBWiQ0scx0RyYyeRLXrZXF58jJRcQnbw4Lnv00iC7HXaDAzwOpqGsk4SHFMUPHPSE8fNnje3neDarpZT4pNjJGg5t9EIWwz8wi9aY4q6rhIQcf8vyrez3gIaJjzvdoyOxXlxiJXSWqqkjY5ZHF&X-Amz-Signature=46e16c4192800d47d79c0ba1b52b1442a4030939e108496bbc5f69c1aee560a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRYDWK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwWQHk6jKM3a6tUGLGK%2FCilRb5YoDC8v%2FehXJJQajjFgIhAKaQ8Llue5kdZVhM4CIdmh86IKutbjoJHbEu4bLfdYhIKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJuUD8BlrESL26kMoq3AMhprOmSsT0rvyu2yWQX9y6yuIzrNAtYsJ6TUE60Eqqw7dU0gqepg0OqcWJ7CfkirLhZZTlnkKcXMVhjNDUd0o7GS%2BUGyzZfwlccQOq1xDQu73ZlqIyc0jFcKvfGKbCGSnRwRZcEYwyCW%2F4qEcA67UI26OEBjYICEoSs4VltdS7y%2BK7hHoiRakGnXbHcNCkyi7pzbjSOD1wKy%2FLxoKQJW4R1jOBXG7Q5a4EabJET2yWZLA9n3PA8tbmTt5FoHdi1fIXiSuTbFDSS%2FKWA9pt5WXJ97%2FhNXVa9ZUK0oku59wBeRz2rxqCeg8siQcW3xX4gdoLQQh9GT8aLjsu7fMOAlSbDyOQ0IW4%2FRNKfH9hd%2BgFxZu5A2IPIBbS8JsCq9QFApzi1s%2FvVOuiQs3TjYGD6UJLoe0jHZRbImgB0WXah8iET2y2MxQmNe2Iq5KXrc4EKCzYjRmHMEkJhjp2aGTHzIyPHTiE7mdEgWeVseW6oxRhjBrA%2FLw9W2fGpzvrzUdNMWUwpkB%2BpMCC%2B4tYzg4srB1MSlb2%2FyYq8i4OpdmG5nD9P3owsIJazyAeiJwdBSmG%2FaQcWNBQzqb%2ByOIf%2Fif6b5r%2F7St5pUd5o%2FmdXkxefQdL8f3BWYUCbG0nBEzhpTDSmdXJBjqkAYNwwZNhK3sQ6yxqLrSzl301tfumu3u%2F%2B8cFpuTzBhVhv1cIEZtLLMR572AnFHSYu48wxTwBMVoBWiQ0scx0RyYyeRLXrZXF58jJRcQnbw4Lnv00iC7HXaDAzwOpqGsk4SHFMUPHPSE8fNnje3neDarpZT4pNjJGg5t9EIWwz8wi9aY4q6rhIQcf8vyrez3gIaJjzvdoyOxXlxiJXSWqqkjY5ZHF&X-Amz-Signature=d663c654c85176425555544c4d1f13fc2426f920cd4a87872fc8044a5f86ff74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
