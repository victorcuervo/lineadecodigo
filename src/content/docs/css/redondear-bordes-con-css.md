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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCS2NDWD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG7jFurWdytLp2XCBi1jtmwAqvoi75yNsd7nHu3zhAxAiAjhk6XgQRd02sPwdIaXQw5FHfwQr7huyFsUuFpE0x%2FoSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMvCF6Z1R6wpWGXbV8KtwDaPimk1mctfa2PW3mRHgAdfpzIJOYIvToG9y0IfTmd30qvkE6DIOKIYHOhw08JBMszv8PtzQk%2Bk5Rh4VIaYguF%2FNSoOcSsmZTtwwlRZJQjQiqA4%2FN7IpI%2FeoW9%2FNiuNfiYNj3fiP55CSJXL77UraZkUx5EkbjHQXHAbyEUSS0JGsNs%2FQWzTbPlCRCPBxwL45iwgTtrqQI0N9H0t7zc2BdO7FVfd%2BjdZhlvFFXlZNdYv5Vqg%2FVr8cJThII4pFi%2BktQXz5TbBMTfNHan48MdPWY%2FcEp8cN2QheVzJbfcc6cyiHKa%2F3vlKjuaji5NwpseLv8sFC21a0r0GL00ubfvbl3BzCWjI4WY%2B%2FxHZF7etddfxQ%2BbbjfXuKwLhcqd88MjXFAlJjf5vzf5MEarxcsl%2FFxyZaufaaJdExlniHRdO%2FghTUitkbwmX8ycbR5dcT1q0hSJy2zyARyV5zq7CXLsYrokZTnOpXP0KCkBlsqeowsoHgzrlkbYAjAM7Rw7qdttxAsuOEKQ%2FjxvB337Qq7Mk748lVMhMak%2Bs2ZqQbqEZw15btGqOCq%2B%2FImphTwMPJwcaw%2FJ1aAQaN8wU%2FxXKqS0PSkknz79TFGxNN16RrtTfwtD%2F8i8ewE3i79y%2Bpppgow98fKyQY6pgHxZr%2B14zYSyK7x0Fsh6iOKHc9HIdiGVMmUO4ech58fxVmitL%2FkE2fzQcjAWHiyVV025qgWmLH2dO8dTuujyLukanNf7NVwHOp%2FBqzIZ3IHOhZ1%2BTXpI8mjtM1jHX4oZSV3981fy2%2FMQ1VY63LzvFPg2zzVPnStwxsmB2%2BEWUR7psyU%2BNMK2v3gz%2BtpMCcXwlINkffMc1FGX5mkvPAazrIbIqgi%2FtaT&X-Amz-Signature=3473834b6d8302460e4c0c8c190c169ac8f6428148c2fbc01ada077481e2bd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCS2NDWD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG7jFurWdytLp2XCBi1jtmwAqvoi75yNsd7nHu3zhAxAiAjhk6XgQRd02sPwdIaXQw5FHfwQr7huyFsUuFpE0x%2FoSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMvCF6Z1R6wpWGXbV8KtwDaPimk1mctfa2PW3mRHgAdfpzIJOYIvToG9y0IfTmd30qvkE6DIOKIYHOhw08JBMszv8PtzQk%2Bk5Rh4VIaYguF%2FNSoOcSsmZTtwwlRZJQjQiqA4%2FN7IpI%2FeoW9%2FNiuNfiYNj3fiP55CSJXL77UraZkUx5EkbjHQXHAbyEUSS0JGsNs%2FQWzTbPlCRCPBxwL45iwgTtrqQI0N9H0t7zc2BdO7FVfd%2BjdZhlvFFXlZNdYv5Vqg%2FVr8cJThII4pFi%2BktQXz5TbBMTfNHan48MdPWY%2FcEp8cN2QheVzJbfcc6cyiHKa%2F3vlKjuaji5NwpseLv8sFC21a0r0GL00ubfvbl3BzCWjI4WY%2B%2FxHZF7etddfxQ%2BbbjfXuKwLhcqd88MjXFAlJjf5vzf5MEarxcsl%2FFxyZaufaaJdExlniHRdO%2FghTUitkbwmX8ycbR5dcT1q0hSJy2zyARyV5zq7CXLsYrokZTnOpXP0KCkBlsqeowsoHgzrlkbYAjAM7Rw7qdttxAsuOEKQ%2FjxvB337Qq7Mk748lVMhMak%2Bs2ZqQbqEZw15btGqOCq%2B%2FImphTwMPJwcaw%2FJ1aAQaN8wU%2FxXKqS0PSkknz79TFGxNN16RrtTfwtD%2F8i8ewE3i79y%2Bpppgow98fKyQY6pgHxZr%2B14zYSyK7x0Fsh6iOKHc9HIdiGVMmUO4ech58fxVmitL%2FkE2fzQcjAWHiyVV025qgWmLH2dO8dTuujyLukanNf7NVwHOp%2FBqzIZ3IHOhZ1%2BTXpI8mjtM1jHX4oZSV3981fy2%2FMQ1VY63LzvFPg2zzVPnStwxsmB2%2BEWUR7psyU%2BNMK2v3gz%2BtpMCcXwlINkffMc1FGX5mkvPAazrIbIqgi%2FtaT&X-Amz-Signature=7c6898a9a9d4bfb2e5bb4cae5779339b0360a00cea9f9cab3177a7074d52e807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
