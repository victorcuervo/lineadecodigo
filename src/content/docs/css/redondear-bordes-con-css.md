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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEVLPN4H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZX5KSKCycnvXZ0c%2FWQUQVMmW0qfyDMcFFDIze90OeSwIhAMqW0gvOU6OYiAr40JQHyLmZ32Ia4ZmCk6vyLZSQTUU1Kv8DCFUQABoMNjM3NDIzMTgzODA1Igwu5UetbhN5o0%2BbfsAq3ANAzcx%2B2BJVB5%2BLzpP%2B1b1q6lD%2BpSgN4YqT9zBkEvUibJF02s62diZcDQAjGjdgkNBbiqxJUcaw0RMk17zgHj6%2BrDveBL%2FO%2FrUR5dVA%2BVlk%2BMsWIa8s%2BBq9B%2BUiClVNydcAlIsRaOkes6UpvFEOTmKDessK%2FHIrnOPwvYJlNmcOa5WZW6o9iNlCy%2BbBGuChMU03HK4WNEkzBZJ4VVW4eJF2cpMVFnnu9WBnq%2F04mp8OFVqXY%2BNMj06sAnaN2UTbT%2BQQMggG5c2ss90yYd5cN3pIHisodPFNGpYY4wbABmUzS0AoWIK90XZ4toryBQn0MmNnLQ6KSiUyOIigsCGLFRqXyIv4wwEDNzO23hV4dkUp6LGxwncWIPQziVpagi%2B0EY9TBfoHt2V1mN4ARMImODev%2F26x0wucghnqO0L%2FwLH9y5ShgtSxuAlbP3TCKsY0HeDJ6H0U8L1JW3b4xTidcnq1mscfgUhs8xK2DXIbWwEUjCpUERlsQBODPcp7zCXwb%2FXE1aybrOhSWNjPPYBwU8o5s9qdz04qxf2LCFgoiV78IUu5fmaSPJfpatruEjFfTXIuA8mVOe6wBdTHujKD78ExPPiRrALjUomqhqyNO2Fg9hxprbOGK%2FP0DCIa%2FDDAqcnJBjqkAba3kh2D6M3Z%2FRIUh4OuPHAkck1VnAfzHZLmxJ1zAkpss57coleHwzHhzu088ePXq8ZuBqcaXFa0da3demO%2BU4pUBmqLvCkPjfY%2Bjn8YXCMmT6Sy2O0JolTdBCUenY9PahqxUVWNLsTVgUPcn%2FlqeYoDFk4aJMZI2mdEk4mZBPFyFdUMcjzIPLBdOek0Bu2uYlHuWpyi8nMj6J%2BDpHXDcqoGYYqX&X-Amz-Signature=ecc38ac3bbc72e194f526287396b3cac7862440130727cd54e584ed8711b6db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEVLPN4H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZX5KSKCycnvXZ0c%2FWQUQVMmW0qfyDMcFFDIze90OeSwIhAMqW0gvOU6OYiAr40JQHyLmZ32Ia4ZmCk6vyLZSQTUU1Kv8DCFUQABoMNjM3NDIzMTgzODA1Igwu5UetbhN5o0%2BbfsAq3ANAzcx%2B2BJVB5%2BLzpP%2B1b1q6lD%2BpSgN4YqT9zBkEvUibJF02s62diZcDQAjGjdgkNBbiqxJUcaw0RMk17zgHj6%2BrDveBL%2FO%2FrUR5dVA%2BVlk%2BMsWIa8s%2BBq9B%2BUiClVNydcAlIsRaOkes6UpvFEOTmKDessK%2FHIrnOPwvYJlNmcOa5WZW6o9iNlCy%2BbBGuChMU03HK4WNEkzBZJ4VVW4eJF2cpMVFnnu9WBnq%2F04mp8OFVqXY%2BNMj06sAnaN2UTbT%2BQQMggG5c2ss90yYd5cN3pIHisodPFNGpYY4wbABmUzS0AoWIK90XZ4toryBQn0MmNnLQ6KSiUyOIigsCGLFRqXyIv4wwEDNzO23hV4dkUp6LGxwncWIPQziVpagi%2B0EY9TBfoHt2V1mN4ARMImODev%2F26x0wucghnqO0L%2FwLH9y5ShgtSxuAlbP3TCKsY0HeDJ6H0U8L1JW3b4xTidcnq1mscfgUhs8xK2DXIbWwEUjCpUERlsQBODPcp7zCXwb%2FXE1aybrOhSWNjPPYBwU8o5s9qdz04qxf2LCFgoiV78IUu5fmaSPJfpatruEjFfTXIuA8mVOe6wBdTHujKD78ExPPiRrALjUomqhqyNO2Fg9hxprbOGK%2FP0DCIa%2FDDAqcnJBjqkAba3kh2D6M3Z%2FRIUh4OuPHAkck1VnAfzHZLmxJ1zAkpss57coleHwzHhzu088ePXq8ZuBqcaXFa0da3demO%2BU4pUBmqLvCkPjfY%2Bjn8YXCMmT6Sy2O0JolTdBCUenY9PahqxUVWNLsTVgUPcn%2FlqeYoDFk4aJMZI2mdEk4mZBPFyFdUMcjzIPLBdOek0Bu2uYlHuWpyi8nMj6J%2BDpHXDcqoGYYqX&X-Amz-Signature=d92abe2134de4693078e8937153eb9f11097732df153460210985266d9767a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
