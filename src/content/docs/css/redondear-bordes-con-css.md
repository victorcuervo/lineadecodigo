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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEYHSFH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLeTJ5q32%2BI49J2DDM4iR3dy2DixzAM9XVDOvAWF9EAgIgP6hKAwQQwKTllJQqTqRIUgWkNuxTToCg3WW3sZjwo1Mq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFshBE%2FWRJNWRpk2XircA5xzbFC205tYLj5RkrpZC85Y6ep0wl%2FSl04r8wtvS7qmNhI%2BxX%2FsZ7RJXq72LXnC6CXLFUSOoVRGIkearLHaRI126568KA1xTmwl6l0iVik8n%2B8QKcR14k2%2FL5AJ905K0Qxyr%2BhvA8QNx%2Fr5%2F9MyDndSUE7hqagdnqwyDTLS%2FKh4kRW%2FmDH234wYm9ixIMRTTpuLVVo50VCNEJC%2Fc7RR6hKzwYdLZVXtM4GXULHiU4VY%2FyiI0Lxhs%2BjWB4mW2xXpgu6Q75YwsV%2FUWcQ2EHIB81gfSeqIquBe2f8Xs5abRunZLBIXDEfeFg8tFdZnYEhf0oxdJtkdG1SVwazVeJ%2BoBh%2FvmKsqVgG9Ijyh9kv%2BatO0uKpYMX8Cix39At9Ak%2FwJ2TqkbF1a95zlp4rVM%2BMG5CH6QmRSOH0nvHDIlfhV%2FOU1SHfR8wUFWaIB%2BCtMehKucZVv8IuN6omYg1hZhAXqEzXvWMI7REUP9hj3xOaO7%2BoHNBj%2FQpMNUwnn19zhzRJAFX6hnQMfdlTjGZsoJSMBX85WnAQNkHk2L7XvxdZjhlkWr53Oj2B7mfNFjdYuDZdm%2FCYG1s3l9IJLjbmnHZZzvNvIs71MOkJW8mGDQbEqDuqPNlWYtLOAD5g6WZPmMOXqy8kGOqUBUtQTQFzeZk5wHoUJEGFNTO1XEVFLryVq7%2FrS3zB2zFQKk8yYXCsIm5NKiSWBereRTP8WLfE46nQxMZrM3fyRGpmNvcxqb8dAtTYvtGHsqmEaL%2B1wonS%2FLigBfy8%2BxXuHmW3%2FvHsHQnJbmSEb7LOiWqdxA1gI2BoTl2OMywKlHaA3cVHQu5NUI90A9vk6qJWhmaqh%2BZPNDvJYe9QZiM0xEvbDjpLj&X-Amz-Signature=770783a93849daa732b5fec81e2b3e0d6b690731e923a456322098017fd79e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEYHSFH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLeTJ5q32%2BI49J2DDM4iR3dy2DixzAM9XVDOvAWF9EAgIgP6hKAwQQwKTllJQqTqRIUgWkNuxTToCg3WW3sZjwo1Mq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFshBE%2FWRJNWRpk2XircA5xzbFC205tYLj5RkrpZC85Y6ep0wl%2FSl04r8wtvS7qmNhI%2BxX%2FsZ7RJXq72LXnC6CXLFUSOoVRGIkearLHaRI126568KA1xTmwl6l0iVik8n%2B8QKcR14k2%2FL5AJ905K0Qxyr%2BhvA8QNx%2Fr5%2F9MyDndSUE7hqagdnqwyDTLS%2FKh4kRW%2FmDH234wYm9ixIMRTTpuLVVo50VCNEJC%2Fc7RR6hKzwYdLZVXtM4GXULHiU4VY%2FyiI0Lxhs%2BjWB4mW2xXpgu6Q75YwsV%2FUWcQ2EHIB81gfSeqIquBe2f8Xs5abRunZLBIXDEfeFg8tFdZnYEhf0oxdJtkdG1SVwazVeJ%2BoBh%2FvmKsqVgG9Ijyh9kv%2BatO0uKpYMX8Cix39At9Ak%2FwJ2TqkbF1a95zlp4rVM%2BMG5CH6QmRSOH0nvHDIlfhV%2FOU1SHfR8wUFWaIB%2BCtMehKucZVv8IuN6omYg1hZhAXqEzXvWMI7REUP9hj3xOaO7%2BoHNBj%2FQpMNUwnn19zhzRJAFX6hnQMfdlTjGZsoJSMBX85WnAQNkHk2L7XvxdZjhlkWr53Oj2B7mfNFjdYuDZdm%2FCYG1s3l9IJLjbmnHZZzvNvIs71MOkJW8mGDQbEqDuqPNlWYtLOAD5g6WZPmMOXqy8kGOqUBUtQTQFzeZk5wHoUJEGFNTO1XEVFLryVq7%2FrS3zB2zFQKk8yYXCsIm5NKiSWBereRTP8WLfE46nQxMZrM3fyRGpmNvcxqb8dAtTYvtGHsqmEaL%2B1wonS%2FLigBfy8%2BxXuHmW3%2FvHsHQnJbmSEb7LOiWqdxA1gI2BoTl2OMywKlHaA3cVHQu5NUI90A9vk6qJWhmaqh%2BZPNDvJYe9QZiM0xEvbDjpLj&X-Amz-Signature=564faa414776a7d62a468601d21f8071e42f102ba27e7b27b8e9aa87c1b6732b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
