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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGNTJRQR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoBgIZq4XJAJDYW4RGO0Yq2XzWMvtN%2FIm9IUYVavZlcAiBjsoD1%2FK%2B%2B8yLOOwjdHO7eW46HWaQ0ccuZfVj8fF0PDiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXPg%2B1JpdvXCk2LOKtwDiWC9eTVqhiaAlDbFyVMgIzjVxAfc4Mkf0%2F6v7JCGuP6TUCQ1mriAg0BbTvHQwyAUwn3fnGUwewbXBeSgo2Bue6MH15v5d3foS3RiEmeybYX7J5FRbsQVoKdD8sVgFrK7v5Wh4RTdajG2UM4D0td7IrlDVlaylJE0Xrw6Our9fMW3M2dv5%2BcAfHNaSwO7FCywjt7VH4GQjPB85b7fze6OkbjcQlyH2OuZdUmGlRD4OHTVaMIZKcqf0jz%2FXR8HyGrgysP3y1XagbOK8pyoI7m%2BVl9xYh6fCtDMDD0QgOaZBRRKj5mYzfzAD21qx08a6trGTQGSU0pCMJ4xi53xtvHElyz988GjQDQLphyI63NJkxgfozqX1SiFXzGe690D2qb%2FD8MfisuYakhVTej5o10LTEAnqpMmmmOc86aWuPdUCJl5Yy2m1ktwFPQ%2FYDSaIzAyWdh0BUxH9a5k5altSMIKjb2Z93jQ2kwkbUyr%2BbtJYuUfK87Y862hB9%2FU65iP1%2FvPSmgeYZ8Pzjxen2X0MU2nUKE5gv32Gf4MEr%2FsEtKC%2Fesy0w3gl2FhyQ7uZRPKD24cbRDqJGNYTlkmjdUZy2nceyZcBS7bfoJYjhmziyfgQPuLfJu3TS%2BSiWnzyYgw9f3SyQY6pgGxFpFKEquXYfgV6eYA0kFSyZ7kdRRZz0SHWvkZ5TIoKFsWoXBIYlq4nJhvPFfN7cCEJOQodiKVJU3bDohR7hBAly3mEZ9GZrIxBRQKVd9P4Kd6T6rXCKy8KZ9zkx%2FiUDGDOgkFdpRGCFP2Y2l%2B9c7eAKoYa0HFiedl7MqAeLlxqP8vRcE2pG7YOfkbkruchvvKL8UmOWITV42ytG3JhtdNdfipIVYL&X-Amz-Signature=7fca8e5a3dc9e7844c785544644586da7db47d2ec405d99f5e04e43b42da232f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGNTJRQR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoBgIZq4XJAJDYW4RGO0Yq2XzWMvtN%2FIm9IUYVavZlcAiBjsoD1%2FK%2B%2B8yLOOwjdHO7eW46HWaQ0ccuZfVj8fF0PDiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXPg%2B1JpdvXCk2LOKtwDiWC9eTVqhiaAlDbFyVMgIzjVxAfc4Mkf0%2F6v7JCGuP6TUCQ1mriAg0BbTvHQwyAUwn3fnGUwewbXBeSgo2Bue6MH15v5d3foS3RiEmeybYX7J5FRbsQVoKdD8sVgFrK7v5Wh4RTdajG2UM4D0td7IrlDVlaylJE0Xrw6Our9fMW3M2dv5%2BcAfHNaSwO7FCywjt7VH4GQjPB85b7fze6OkbjcQlyH2OuZdUmGlRD4OHTVaMIZKcqf0jz%2FXR8HyGrgysP3y1XagbOK8pyoI7m%2BVl9xYh6fCtDMDD0QgOaZBRRKj5mYzfzAD21qx08a6trGTQGSU0pCMJ4xi53xtvHElyz988GjQDQLphyI63NJkxgfozqX1SiFXzGe690D2qb%2FD8MfisuYakhVTej5o10LTEAnqpMmmmOc86aWuPdUCJl5Yy2m1ktwFPQ%2FYDSaIzAyWdh0BUxH9a5k5altSMIKjb2Z93jQ2kwkbUyr%2BbtJYuUfK87Y862hB9%2FU65iP1%2FvPSmgeYZ8Pzjxen2X0MU2nUKE5gv32Gf4MEr%2FsEtKC%2Fesy0w3gl2FhyQ7uZRPKD24cbRDqJGNYTlkmjdUZy2nceyZcBS7bfoJYjhmziyfgQPuLfJu3TS%2BSiWnzyYgw9f3SyQY6pgGxFpFKEquXYfgV6eYA0kFSyZ7kdRRZz0SHWvkZ5TIoKFsWoXBIYlq4nJhvPFfN7cCEJOQodiKVJU3bDohR7hBAly3mEZ9GZrIxBRQKVd9P4Kd6T6rXCKy8KZ9zkx%2FiUDGDOgkFdpRGCFP2Y2l%2B9c7eAKoYa0HFiedl7MqAeLlxqP8vRcE2pG7YOfkbkruchvvKL8UmOWITV42ytG3JhtdNdfipIVYL&X-Amz-Signature=6094411a6c50c00e0b24605f70d45de72ba00d5741ea18e8cf7b4a98493bca39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
