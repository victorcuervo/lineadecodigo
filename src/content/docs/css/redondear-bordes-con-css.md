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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLL3EALW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuNhrxynysTpQQ5JMPFWdlfYaMPjYsSHAiuEGH8adZwIhAM9btcdR6ffP2BXxpl%2FBhL33iJYCTtYdXJeaselnRqVGKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5a4ctQqSqVVCZ9B8q3APGBydvmZWQswiDmXALF%2BW5r1rCynp0MdLjWWjFmIVVWeT8byZCClhu4JqGZB0kkSSpqIx6E5YIY3AXnzH29Jty6JcpeuF77Mf6DnOgNAmX7M1TzFcNWRwM%2BHejxqz5stu2tG%2FykauAONAuSGYu4%2BWbbBv4tmvabnWLjvoXCJkXphTG30EGz5pxnp%2F1cS%2FiSe8wvlFTjGQZlReSkRfF7Py%2FTEuc76aA2m6xT0jV61iV%2BUVOyqR%2FpfzCahh%2F5Xx2tUjNW%2Bb1r924%2Bm1y07ZJZz1AehQSdgNuPcMD%2Ff%2B8MeXnPABG8jMpHUdgR%2FRCfZf4V%2BHuWFZXTqdOQ36NN%2Fayz%2BCdStThgBsUQQU73k5JaugHINlCWJdWLa5X1cw4XSdLiKhXnGfjjBJjtrqZZz8Um%2BV9%2F10HGKypVk5d5Hx5xBOHDDj287aYexd0bC3Ls1qb0274oUqbOJZKuI8jbcXKT7zfcc1sa6fpxlScAX%2FLJPvw8x1mdGp%2FKDDR%2BlxY0j7c2dVLnBTkne%2FsyLFk5VzjFr8kimT4kEspyZhHpaVZb%2B9VtEuaYMNCDgqRKcFAhlD0E0OYPHgo4igDGxllox82RjRrC6j%2Fa%2BZEgiAWkA9W7itN31HZXhKd8PqKkrNklzDoqNfJBjqkAROPxlcJ4XTSNtZIJe2uaE6q8alxcpSNh%2BHl4aXiE1sL0T9Ykje86ZcCPbhGOLb%2BEAB2%2BCAWrsMXPZ%2BdLwJtY6o6Yyj6T5giiGM6pkOdJmBUw6m%2FTNJQWRx3UrqIqxveZWTDCua4wKwzcXQxXjeu50p8UBNVOvpGrjRyVvRVMrz6m592%2Fyk3nLgxdQvo8AoVObnAVvCMcX5KNmnKf2yiqwuvZk%2Bd&X-Amz-Signature=2e3f305f78f9a0204c9f5a52e01b66f75219efdd36434e128597d6a39b358eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLL3EALW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuNhrxynysTpQQ5JMPFWdlfYaMPjYsSHAiuEGH8adZwIhAM9btcdR6ffP2BXxpl%2FBhL33iJYCTtYdXJeaselnRqVGKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5a4ctQqSqVVCZ9B8q3APGBydvmZWQswiDmXALF%2BW5r1rCynp0MdLjWWjFmIVVWeT8byZCClhu4JqGZB0kkSSpqIx6E5YIY3AXnzH29Jty6JcpeuF77Mf6DnOgNAmX7M1TzFcNWRwM%2BHejxqz5stu2tG%2FykauAONAuSGYu4%2BWbbBv4tmvabnWLjvoXCJkXphTG30EGz5pxnp%2F1cS%2FiSe8wvlFTjGQZlReSkRfF7Py%2FTEuc76aA2m6xT0jV61iV%2BUVOyqR%2FpfzCahh%2F5Xx2tUjNW%2Bb1r924%2Bm1y07ZJZz1AehQSdgNuPcMD%2Ff%2B8MeXnPABG8jMpHUdgR%2FRCfZf4V%2BHuWFZXTqdOQ36NN%2Fayz%2BCdStThgBsUQQU73k5JaugHINlCWJdWLa5X1cw4XSdLiKhXnGfjjBJjtrqZZz8Um%2BV9%2F10HGKypVk5d5Hx5xBOHDDj287aYexd0bC3Ls1qb0274oUqbOJZKuI8jbcXKT7zfcc1sa6fpxlScAX%2FLJPvw8x1mdGp%2FKDDR%2BlxY0j7c2dVLnBTkne%2FsyLFk5VzjFr8kimT4kEspyZhHpaVZb%2B9VtEuaYMNCDgqRKcFAhlD0E0OYPHgo4igDGxllox82RjRrC6j%2Fa%2BZEgiAWkA9W7itN31HZXhKd8PqKkrNklzDoqNfJBjqkAROPxlcJ4XTSNtZIJe2uaE6q8alxcpSNh%2BHl4aXiE1sL0T9Ykje86ZcCPbhGOLb%2BEAB2%2BCAWrsMXPZ%2BdLwJtY6o6Yyj6T5giiGM6pkOdJmBUw6m%2FTNJQWRx3UrqIqxveZWTDCua4wKwzcXQxXjeu50p8UBNVOvpGrjRyVvRVMrz6m592%2Fyk3nLgxdQvo8AoVObnAVvCMcX5KNmnKf2yiqwuvZk%2Bd&X-Amz-Signature=9408491ec90cf1c630cd942935b564a0a7274bf4689168163d1f7926436e3347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
