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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7JZ6D5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0ymL8kztDDyX3aLwD76oT4CLvyfZAe0BI2tYS36JpcAiB0zwTKK3BV%2BxHMt%2BxKKkx7sFti9hro7VNo81aSwW%2FzlSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2ByLxu0azfIhcE%2FnqKtwDB7JbqRYCTXdLs9STUvmPwLyaIzks3nxOAaViGGl34Ys9AJX7Q1WRdmK9zmBE7dXSBWgMCuW3Lrp4kQFq35jWZbGE4A4OsSJSGdK337fFiD1NZX5yqZKhpLGZEIpav25WZS1Cfmifg7EFwGx8uccsCfaSt2DNzb%2FzjayC4lvE9nBIavkJnNV0LoZ8ZCbpy0H5medeQh2OSN8hDRmCvT1QDWwFoIA3OJ4r7iVhRUcwNxnPjdOlH7J0haXi7nUQOeiv3w8Shlq7h6CVuYO7J3DKw7Bwgia%2F%2Br39VULCEd3NOo9TYqDQmFsNVFy1ad97oBAGXxCzmogxUGYnvjEVg4mgnre%2FDeenNuaO929PWmN3hwWuXeoBTUj%2F9Yl3qp%2FACYfv24vtgNxRtdFhHuS8vx7vIDYWmgRcldZvFs7ImbRdi%2FdZnMb9TBAQGTZ1UNs8o4hroTQHcSKrK%2BKCtauZ2PhFr7tzoWAaSjMzhbcnMnUsinPqGcOKWHQlcE3Lmzc69Znzf2ZWIh7mVCgng%2F%2Fwat77rPu56b5A2Ojfp3CEM3VMHVtywNOgxBstxt%2FZ1QMMIosyAKoqKVSjR8fJL0LAai8g2t46SMAhagCTzJcxkz4mjzI5Rb7HfXF1SG7E15kwg5DbyQY6pgF%2F%2FyngNUD2BVSm7eW1J58hmEuDtGl%2FXOfvcOPuwWQLHmkxHWj%2BjzD06Ugb9YFT6Rp0kAcC5fK4hNIPEE26xVvbqYTuayDeSEUNOR1pQjd5BWl%2FvsDhDmwitlliL0fz6RCVfkdVJgr7nZ%2FLDLbnYi3Suzag0DwpKXDFytxaescGUTjpzVX7qc3aCV68Q6PBWbb8PYBNjXF471IEtnRHZNowtRKW7LLd&X-Amz-Signature=31461c292b6000f5011fa8a7686d6fc4c0858f18555898de4d90beec2f2cf92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7JZ6D5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0ymL8kztDDyX3aLwD76oT4CLvyfZAe0BI2tYS36JpcAiB0zwTKK3BV%2BxHMt%2BxKKkx7sFti9hro7VNo81aSwW%2FzlSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2ByLxu0azfIhcE%2FnqKtwDB7JbqRYCTXdLs9STUvmPwLyaIzks3nxOAaViGGl34Ys9AJX7Q1WRdmK9zmBE7dXSBWgMCuW3Lrp4kQFq35jWZbGE4A4OsSJSGdK337fFiD1NZX5yqZKhpLGZEIpav25WZS1Cfmifg7EFwGx8uccsCfaSt2DNzb%2FzjayC4lvE9nBIavkJnNV0LoZ8ZCbpy0H5medeQh2OSN8hDRmCvT1QDWwFoIA3OJ4r7iVhRUcwNxnPjdOlH7J0haXi7nUQOeiv3w8Shlq7h6CVuYO7J3DKw7Bwgia%2F%2Br39VULCEd3NOo9TYqDQmFsNVFy1ad97oBAGXxCzmogxUGYnvjEVg4mgnre%2FDeenNuaO929PWmN3hwWuXeoBTUj%2F9Yl3qp%2FACYfv24vtgNxRtdFhHuS8vx7vIDYWmgRcldZvFs7ImbRdi%2FdZnMb9TBAQGTZ1UNs8o4hroTQHcSKrK%2BKCtauZ2PhFr7tzoWAaSjMzhbcnMnUsinPqGcOKWHQlcE3Lmzc69Znzf2ZWIh7mVCgng%2F%2Fwat77rPu56b5A2Ojfp3CEM3VMHVtywNOgxBstxt%2FZ1QMMIosyAKoqKVSjR8fJL0LAai8g2t46SMAhagCTzJcxkz4mjzI5Rb7HfXF1SG7E15kwg5DbyQY6pgF%2F%2FyngNUD2BVSm7eW1J58hmEuDtGl%2FXOfvcOPuwWQLHmkxHWj%2BjzD06Ugb9YFT6Rp0kAcC5fK4hNIPEE26xVvbqYTuayDeSEUNOR1pQjd5BWl%2FvsDhDmwitlliL0fz6RCVfkdVJgr7nZ%2FLDLbnYi3Suzag0DwpKXDFytxaescGUTjpzVX7qc3aCV68Q6PBWbb8PYBNjXF471IEtnRHZNowtRKW7LLd&X-Amz-Signature=6fda60f0e0894b2ce4ef9baacc1c894624e4ce95071e755cb6edf594fe35715a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
