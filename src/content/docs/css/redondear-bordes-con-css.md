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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB547KA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg0d2fbsUJEZ6QaQhP9%2BaPgAnGt5y7xz3xKSIKmJ00BwIhAL%2Fuw8IuC7XT2iWtlJxeqHdCooaRlknZUQDMkDPAMvtjKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYyKpYcu0%2F4bvw8ZMq3AM5ZU%2B%2FaXmJg5ATYvLCygPvhBS0F0Zd4fJbIBdh6H0wl%2Bi1ZNARZ%2FI1SLOa5chHNAyRvHPkrHFTz1unqtVgK1RB3zU6MuQwlgGB4T5OXMdh6GJ9LulCfmT1oTxRNERySd54TTVikhmDNRo4GJYnj3Al1JH8TcV0G8dxZOPyD4j%2Brs9o2feJb5l1HVDIVweR%2FigS8AEBgggOAvTzS6UU6h%2FDXJ%2Bm6KgsG0xVajPq5EdoG7Gcydoim3STnZcA1F34lcPi0v%2BugISkOaxPJSif8teWGuaGLmCoh9PP9hJiUx882097kd%2F5oPj3TmmJIHD%2BOcdcQkbrvL9BIX3OIRvZs%2BVTJeUbexnVkEmkPbbLcLHlaDk79w6LqIWzjcX%2F2iXVr9GqrajsQNHNHAbJPE4To0kodgR%2FuRueGbJduD%2BKK0ftJynfhSaQ65H8G%2BoynkF2KhzIlIDeZ%2BcN8RNPi5jUl%2BrgJ1PZgacJtOO0TyiXCZ5vZzVKnpuYu0AEJ4lBaZ03FxmoryeBmU0og%2BdxmPXNWvAXDjaGrrSUJPQLPeZQ%2F5M4EAsqwK3Z6JJ72SLzalivZuOQDO3fS88hmQxeZ33%2BSFDHXtDtAKe%2BIwncIe3v8bRbWJwE8bIPgW0PtzTkQzD4s9bJBjqkAYh67ikkTMsZObohvXhKb0NpNzztAqkKD9prrZW%2FVzL8xC1gzGGzjlt2PhJibJFWDd%2F4KQzdWnFZGWnNdkOv0g5QmB9%2FWyW8Zl2uwm2jtW1ionGqkq7ZuwE66BdL6awN4%2Beo4GHFtD7SudrglTHLTTY5Nzd7xaZrpt%2BTd5JRQEXHXksx1JvcvNvHHOo1a0XFCdqUOZgBNrCqRxISKpqDX5gXZWNo&X-Amz-Signature=57cb686059c5d0c979255f9416d4d480af79ac4fc56b2868627f6f3d05faa8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB547KA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg0d2fbsUJEZ6QaQhP9%2BaPgAnGt5y7xz3xKSIKmJ00BwIhAL%2Fuw8IuC7XT2iWtlJxeqHdCooaRlknZUQDMkDPAMvtjKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYyKpYcu0%2F4bvw8ZMq3AM5ZU%2B%2FaXmJg5ATYvLCygPvhBS0F0Zd4fJbIBdh6H0wl%2Bi1ZNARZ%2FI1SLOa5chHNAyRvHPkrHFTz1unqtVgK1RB3zU6MuQwlgGB4T5OXMdh6GJ9LulCfmT1oTxRNERySd54TTVikhmDNRo4GJYnj3Al1JH8TcV0G8dxZOPyD4j%2Brs9o2feJb5l1HVDIVweR%2FigS8AEBgggOAvTzS6UU6h%2FDXJ%2Bm6KgsG0xVajPq5EdoG7Gcydoim3STnZcA1F34lcPi0v%2BugISkOaxPJSif8teWGuaGLmCoh9PP9hJiUx882097kd%2F5oPj3TmmJIHD%2BOcdcQkbrvL9BIX3OIRvZs%2BVTJeUbexnVkEmkPbbLcLHlaDk79w6LqIWzjcX%2F2iXVr9GqrajsQNHNHAbJPE4To0kodgR%2FuRueGbJduD%2BKK0ftJynfhSaQ65H8G%2BoynkF2KhzIlIDeZ%2BcN8RNPi5jUl%2BrgJ1PZgacJtOO0TyiXCZ5vZzVKnpuYu0AEJ4lBaZ03FxmoryeBmU0og%2BdxmPXNWvAXDjaGrrSUJPQLPeZQ%2F5M4EAsqwK3Z6JJ72SLzalivZuOQDO3fS88hmQxeZ33%2BSFDHXtDtAKe%2BIwncIe3v8bRbWJwE8bIPgW0PtzTkQzD4s9bJBjqkAYh67ikkTMsZObohvXhKb0NpNzztAqkKD9prrZW%2FVzL8xC1gzGGzjlt2PhJibJFWDd%2F4KQzdWnFZGWnNdkOv0g5QmB9%2FWyW8Zl2uwm2jtW1ionGqkq7ZuwE66BdL6awN4%2Beo4GHFtD7SudrglTHLTTY5Nzd7xaZrpt%2BTd5JRQEXHXksx1JvcvNvHHOo1a0XFCdqUOZgBNrCqRxISKpqDX5gXZWNo&X-Amz-Signature=a8dcf9f7e72396f978c7ce53cce32a159b6ac5d8d9c8a793a72cf937ed2e8b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
