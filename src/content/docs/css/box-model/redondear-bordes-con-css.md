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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DXE2GH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuG5GR039CIb60tIKA%2FXUxZvRuK4i5cR7S%2FTivhfaphwIhAJ8B3BW4JIjW1mRvYrQNlxy7lYbP2jdCjkqxr0nlmobCKv8DCHYQABoMNjM3NDIzMTgzODA1IgwfL9nWGt08u2kfNA8q3AOJLxqjDBexNClqiV79FYT49JCWnbwrih24TGqX0USHIZXm1NMzNkxlfs1qtST1MBqaLA4khRMet06GQLxTYDKV2LoJBfOb13DV6VgcMWoYSLtQyuJvoKRFxnpzbA%2Fjsuu6ONQudCIGyQ06GGs26%2Btp5NIgcc0XVbFHI2oFxLntvf72x3UemSzUtl7fhdyia%2B1zikKUB%2F5lFHKAa1vtf4YOZvpLLBadUe0jzc%2FhmQPA%2Bw8%2F1mKCx9xXcCagKRH4smxBg8uviCnpvhfwHlSNBQN8nhtv26A3BrMn0Wx3ZyFSpZxgyzW%2BhxULkZt3a450183OEKn0%2F4XqO6Hji5sd0bRkiBTxUo9YkJUQWgscz0e7Ze4jXhQDDL6WqdIYQKvo5jsUQylVZOtQHZd4VRhv%2Bx%2FyRrAhlMGFF5WCv3m2nRzQDOx0v7u7bP6WkzLHqfpfP7Dd5WgnTLdf99aLLX8w19C%2B5CE4o9J%2BxaTn%2BbAH1CtSSgZVP0aSbxvgnblKEWoKU7UyQmJ7S3aTsy5aiDGqc968oIdJBcNDahxaE629E6c9NHB5yz4lQOSuIZoY7bwELSHHM1jS9ofc%2Bi2FbMm3zCI5ylgp8mwwLl1DZt%2FBgItMbXFPFODCqAZPjBRUczDh6YjKBjqkAc56sN31UYjB9KXmKdZv8%2F%2FVSOvS31tZnM2fW6a1e6qUNLsIt%2FZOG8DabntiEYP5%2BgiwfWr5saiSM0iNLKMztyaQJ0tD9umEj6UpWRBxUD86vg978zVNnKNtqMIMjsbrS84K8kScDI3JD5H56lx%2FvDRDNumEsAXhmlQQrWZLdmiQHvWe3YVoU%2BJZkyuEQXzrJzl0Hfk4rSt2ZFmw%2BW%2FWxIz6M80e&X-Amz-Signature=f5cd3aad804568f4fd42ad0489ecabf242082cb6c218d62018d5f94c0785923f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DXE2GH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuG5GR039CIb60tIKA%2FXUxZvRuK4i5cR7S%2FTivhfaphwIhAJ8B3BW4JIjW1mRvYrQNlxy7lYbP2jdCjkqxr0nlmobCKv8DCHYQABoMNjM3NDIzMTgzODA1IgwfL9nWGt08u2kfNA8q3AOJLxqjDBexNClqiV79FYT49JCWnbwrih24TGqX0USHIZXm1NMzNkxlfs1qtST1MBqaLA4khRMet06GQLxTYDKV2LoJBfOb13DV6VgcMWoYSLtQyuJvoKRFxnpzbA%2Fjsuu6ONQudCIGyQ06GGs26%2Btp5NIgcc0XVbFHI2oFxLntvf72x3UemSzUtl7fhdyia%2B1zikKUB%2F5lFHKAa1vtf4YOZvpLLBadUe0jzc%2FhmQPA%2Bw8%2F1mKCx9xXcCagKRH4smxBg8uviCnpvhfwHlSNBQN8nhtv26A3BrMn0Wx3ZyFSpZxgyzW%2BhxULkZt3a450183OEKn0%2F4XqO6Hji5sd0bRkiBTxUo9YkJUQWgscz0e7Ze4jXhQDDL6WqdIYQKvo5jsUQylVZOtQHZd4VRhv%2Bx%2FyRrAhlMGFF5WCv3m2nRzQDOx0v7u7bP6WkzLHqfpfP7Dd5WgnTLdf99aLLX8w19C%2B5CE4o9J%2BxaTn%2BbAH1CtSSgZVP0aSbxvgnblKEWoKU7UyQmJ7S3aTsy5aiDGqc968oIdJBcNDahxaE629E6c9NHB5yz4lQOSuIZoY7bwELSHHM1jS9ofc%2Bi2FbMm3zCI5ylgp8mwwLl1DZt%2FBgItMbXFPFODCqAZPjBRUczDh6YjKBjqkAc56sN31UYjB9KXmKdZv8%2F%2FVSOvS31tZnM2fW6a1e6qUNLsIt%2FZOG8DabntiEYP5%2BgiwfWr5saiSM0iNLKMztyaQJ0tD9umEj6UpWRBxUD86vg978zVNnKNtqMIMjsbrS84K8kScDI3JD5H56lx%2FvDRDNumEsAXhmlQQrWZLdmiQHvWe3YVoU%2BJZkyuEQXzrJzl0Hfk4rSt2ZFmw%2BW%2FWxIz6M80e&X-Amz-Signature=344ac5db8b72809b051f230cd029b7dc82c9a8ba5b3f72f9d5b63c1dfe7b67e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
