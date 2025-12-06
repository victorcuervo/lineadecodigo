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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2W4MSUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK50x2qg%2F92SMUkAgMHKujnUoGzorLhC5QTPKtQghJwAiBjgg0d54QnpGphLosZLnnPyxdnOpxA3AuqbCAI8xLCyir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYV%2BdcFBR4sw%2BjSr6KtwDRs%2BRj%2B33L5CDlQ%2FUTwIAvrIh8xlwqioOb7J%2BF8soGr%2F7oSTyUe6xATzcb5zJWIQYMirnRBBzyWhCbvn%2BvoPH2R4lmYu%2FaI2FEOpgSgtfjm777qOCW2INUIoazTzpnwn5rGo7NLKiOyePKIoqRtimkyxBKk5oPku%2BM%2F7x6F1DIOBz5wDdV1%2F1EnwYwRrlQiAGnpXM%2BwN6eLRIlpE%2BD1JniAnfdrbUjinNi%2BFI6xZwvzSoaHpyR7GLdp81KQOZcrKtNMZQwvOqnIGJQVjj%2FT7UEF6RojxeCymMiYPRh2VTAd2pWb%2Bi0YD6vpkEo8%2Fx%2ByVxBhnzZrWl9pFM0%2FuMGyrOvBpzI8O%2BSrzI6HWIiwXx4mVgRbr%2Fee949bfk1ZpEdbkh4Xu7wCXeIB975j%2ByAs6T%2BJiHjmrgsCOQbLrmTv4yd3gnN6JVVNHmRAwAZVhEULN7bij3RC9%2FyGDYCt7o0J6oyIrkIEN0vXGimIbzyPTwl1tQ%2FSWlB1YNFXK43ZC9YzOtkiEJsR6FYXZpY9ZuEF3XUkD8c1RR6vzh9mOjHh8ouixrK6YxLETcA9HP59FIbGOxLq5CuDEnnaZnTx9J%2BCuzeWuFBHpMBZ%2B6m2cgL8wD%2FXuHMC1ArZHaOiw7MyUw7czRyQY6pgHWz7yTl%2B%2FHp%2BD5ffMvm5ODd8fhl3lTT1%2BZyqzJp8ir9C2qj45firN%2FSibmVTBGXPRIPMXOL4lk1Ic8ZMwm%2BtGjI5DUjk7FEmX6x94avoUfl2nBteteR1oonvcNG%2FaUmXLYDJpxbrVH3FatPOT9N0jqQRHQUzLYEEik%2BS9jU2Sz%2Bw0xdd8xcHeWqzYp6%2BfMD6dSgBuT8zh5gEvdNPXmEL2u41tjBpg0&X-Amz-Signature=8b3bb2ba3f2a70299e1f595d930ebaf4f960154dddff2a69650d3bcc779291cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2W4MSUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK50x2qg%2F92SMUkAgMHKujnUoGzorLhC5QTPKtQghJwAiBjgg0d54QnpGphLosZLnnPyxdnOpxA3AuqbCAI8xLCyir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYV%2BdcFBR4sw%2BjSr6KtwDRs%2BRj%2B33L5CDlQ%2FUTwIAvrIh8xlwqioOb7J%2BF8soGr%2F7oSTyUe6xATzcb5zJWIQYMirnRBBzyWhCbvn%2BvoPH2R4lmYu%2FaI2FEOpgSgtfjm777qOCW2INUIoazTzpnwn5rGo7NLKiOyePKIoqRtimkyxBKk5oPku%2BM%2F7x6F1DIOBz5wDdV1%2F1EnwYwRrlQiAGnpXM%2BwN6eLRIlpE%2BD1JniAnfdrbUjinNi%2BFI6xZwvzSoaHpyR7GLdp81KQOZcrKtNMZQwvOqnIGJQVjj%2FT7UEF6RojxeCymMiYPRh2VTAd2pWb%2Bi0YD6vpkEo8%2Fx%2ByVxBhnzZrWl9pFM0%2FuMGyrOvBpzI8O%2BSrzI6HWIiwXx4mVgRbr%2Fee949bfk1ZpEdbkh4Xu7wCXeIB975j%2ByAs6T%2BJiHjmrgsCOQbLrmTv4yd3gnN6JVVNHmRAwAZVhEULN7bij3RC9%2FyGDYCt7o0J6oyIrkIEN0vXGimIbzyPTwl1tQ%2FSWlB1YNFXK43ZC9YzOtkiEJsR6FYXZpY9ZuEF3XUkD8c1RR6vzh9mOjHh8ouixrK6YxLETcA9HP59FIbGOxLq5CuDEnnaZnTx9J%2BCuzeWuFBHpMBZ%2B6m2cgL8wD%2FXuHMC1ArZHaOiw7MyUw7czRyQY6pgHWz7yTl%2B%2FHp%2BD5ffMvm5ODd8fhl3lTT1%2BZyqzJp8ir9C2qj45firN%2FSibmVTBGXPRIPMXOL4lk1Ic8ZMwm%2BtGjI5DUjk7FEmX6x94avoUfl2nBteteR1oonvcNG%2FaUmXLYDJpxbrVH3FatPOT9N0jqQRHQUzLYEEik%2BS9jU2Sz%2Bw0xdd8xcHeWqzYp6%2BfMD6dSgBuT8zh5gEvdNPXmEL2u41tjBpg0&X-Amz-Signature=5cd1f72f3d4f5e94e0e885846cda0a1bd7eb340bcc31dd3910acaa1bfed6306e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
