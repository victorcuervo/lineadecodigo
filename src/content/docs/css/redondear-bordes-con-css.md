---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VF4PEA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCYxMGf9d7amhkZ2D6NcrCn57fdrYerwK2e3tFxMYg0zwIhAMpVJH5KZBbCUqV2C21wrWOsA6W6%2BLdgQQCrn7V%2BvjfqKv8DCD8QABoMNjM3NDIzMTgzODA1Igx27SKlSa%2FmfU9U86cq3AMtXqcULVtg%2FJmPzc2qHLiKkoM5PA5WMhdQldP9%2FfMZdVC8o%2BUbySUrbKut2FDZdcmhuVWwDzFarvTljcIZfczBjaaVU5PIIO3dgySE2awyHlbZkuHaYLEkyCc8ZhKrHDRyLGmaw1p%2F7v2hB6YYJ9rA73%2Fe5V7walFZjlaWEC49S57Dmk%2BiCenEGLcKvM7NF3%2BauAuhHZzvkrR0oWbmp56hFYd5pVPHXFaQ9RqXZoAWRoFOPWGebe4wc947OX0LBbZKdFWIns%2FrkeDpCTkT5lSC9JY87m7HNX%2B600RuG21oVib1ZSlc5eZZA02rw%2FJr18%2BjSDe5tVI8gmciYuEYkb2HxKnWg0C4o1sQhpDC7waymUb6w1pq%2B4Nh0fGbxPBywqz1opM8PbLAFe4CQXHriSnhi8uvI5wG5AGu2vjMwmwKMlRSwZDKedP0EjVlYMv%2F8iDfXj8axSzH2qmsFmNx73YbZL8C3KzDYlv7EUjU%2FZZsGaXWYLTbgeJ8H188jKfS%2FYR0rg0Bcb1utToU6FjsShnEN%2Ft0SU6I9sS2nolxCsPNGUyMF7OK3ZFXuUZZ6IgK4I7Y0pObfNrASOgaBVz%2F1Qs7N9GPErK3UI%2BULl90MHIlAGF0X%2BOwmDsYRKbYPDCOy8TJBjqkAfkxsA7b5Bu9p28qzdbEGm3qAOy12Wk9gupQkguEsPat47%2Fe48SOprB3f3tqvky56qEII6Pb%2BCMTlA4typXLJdmNLearLuNs0tfleJJYS88NHgW0NEDiYIlTjkL14lXsXdOfj3NVUEKUQQ0RHbEKiA643AiroXJosm0oKdfXnYXiBexxu5MUA8Rb%2F60m9TMHnTqzwemziThlmA8GxBoeRKKepi5o&X-Amz-Signature=0fc7bff1553bc8f259c34f9afc28c96091bbb232e0c310fe5b1c9aef6f52afa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VF4PEA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCYxMGf9d7amhkZ2D6NcrCn57fdrYerwK2e3tFxMYg0zwIhAMpVJH5KZBbCUqV2C21wrWOsA6W6%2BLdgQQCrn7V%2BvjfqKv8DCD8QABoMNjM3NDIzMTgzODA1Igx27SKlSa%2FmfU9U86cq3AMtXqcULVtg%2FJmPzc2qHLiKkoM5PA5WMhdQldP9%2FfMZdVC8o%2BUbySUrbKut2FDZdcmhuVWwDzFarvTljcIZfczBjaaVU5PIIO3dgySE2awyHlbZkuHaYLEkyCc8ZhKrHDRyLGmaw1p%2F7v2hB6YYJ9rA73%2Fe5V7walFZjlaWEC49S57Dmk%2BiCenEGLcKvM7NF3%2BauAuhHZzvkrR0oWbmp56hFYd5pVPHXFaQ9RqXZoAWRoFOPWGebe4wc947OX0LBbZKdFWIns%2FrkeDpCTkT5lSC9JY87m7HNX%2B600RuG21oVib1ZSlc5eZZA02rw%2FJr18%2BjSDe5tVI8gmciYuEYkb2HxKnWg0C4o1sQhpDC7waymUb6w1pq%2B4Nh0fGbxPBywqz1opM8PbLAFe4CQXHriSnhi8uvI5wG5AGu2vjMwmwKMlRSwZDKedP0EjVlYMv%2F8iDfXj8axSzH2qmsFmNx73YbZL8C3KzDYlv7EUjU%2FZZsGaXWYLTbgeJ8H188jKfS%2FYR0rg0Bcb1utToU6FjsShnEN%2Ft0SU6I9sS2nolxCsPNGUyMF7OK3ZFXuUZZ6IgK4I7Y0pObfNrASOgaBVz%2F1Qs7N9GPErK3UI%2BULl90MHIlAGF0X%2BOwmDsYRKbYPDCOy8TJBjqkAfkxsA7b5Bu9p28qzdbEGm3qAOy12Wk9gupQkguEsPat47%2Fe48SOprB3f3tqvky56qEII6Pb%2BCMTlA4typXLJdmNLearLuNs0tfleJJYS88NHgW0NEDiYIlTjkL14lXsXdOfj3NVUEKUQQ0RHbEKiA643AiroXJosm0oKdfXnYXiBexxu5MUA8Rb%2F60m9TMHnTqzwemziThlmA8GxBoeRKKepi5o&X-Amz-Signature=53fbfcc0119d6f7c1b92e8ff6ec2c3655ef5d1001a02548f785b6f76712dd460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
