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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5357SA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ3d9cZJIMhLLFVwp1PiJLikrgvwlatm1wdT40g3BeKgIgXjGZs2vGS1ni8HbRtWLatb7xIAyZYnGrPa44AWRUDTsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH8PwwuH9%2BITb9ccBircAzm5x82qsgfo4NoBwjC5j%2FOArV0D%2BkF55Eq3zLfvwHPXeX%2FL3MnOcuvcvXqD3LIvW%2BQBf%2FKOxeWrVcVJzmYNvzCPioHv7APmhrqzPNP7%2B4tfFxxD%2F2bEowxIZOu7wlvGsFRgQwLXTUpZZ5HLkrbMKwy9y3jueeq4TbpyKcjt7CzwY%2FUbuCbrtXHuzbwtEvKn919RzkG4H9PKgNlrnDseQqLqMGMKXwUpcd4CBoPeSa5wkoVuU8vdOowuuM3KoN8PESNgUVCPkARF8DpU%2BFGdho%2BgpVC0Ri7EZIiHy9hPXvApu0WA4C2hS3y41WQam1xspfpwNTVbFQ8g3jRZE0%2FliV4Um2vwGNCCaHR5hNyB3tuO6K%2BNz%2Fro26xs0h2BbKutfqg5TTAARqdGykn8CFeyCJP%2FwLMejF2Y9CMOQ3e%2BWKSC19pGcqsTy9d1fTdXB8XvC8twpz6CzHISVlWN3EotO9A5Z1M9XGMki0biPLhU7Wj34b%2FPnZD4q8S9kJ0067XDUW3r0spjKFfEfI0TRi%2B%2BaDU2SutTePMnAOVQ%2B%2BFa7qRvRsxuiYu5kCGqqIUWCiv4sLKYXat3gvJY20uJRJfeV%2FFwyCwVwaLDKNnckVPop0u1EDEECoXbP0tZnvYnMJHRicoGOqUBnrxGEa3ahItL0V85IAPRzekpFDxTddRbIadoKPU%2BzScllHSn35Lftvcpg1PmJDqJOD5bVlzsaopNVASsp6fZB0S%2Broq489ZJ6oqKGqTbfA0u2lRyh90TFCPGRNHMw1ZhSr0IgYhQPdA5Xp7%2F6cxC%2FN3ihUbwUp9R7xMZEAQGsGZJKt404eB6PWlTA%2F02pSznpuolaloDUt4SkTUrD4%2BlhIaTATha&X-Amz-Signature=820291e1923e940fad43b8eac884725e54b9c8c2440f6b6c8f20441531c50524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5357SA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ3d9cZJIMhLLFVwp1PiJLikrgvwlatm1wdT40g3BeKgIgXjGZs2vGS1ni8HbRtWLatb7xIAyZYnGrPa44AWRUDTsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH8PwwuH9%2BITb9ccBircAzm5x82qsgfo4NoBwjC5j%2FOArV0D%2BkF55Eq3zLfvwHPXeX%2FL3MnOcuvcvXqD3LIvW%2BQBf%2FKOxeWrVcVJzmYNvzCPioHv7APmhrqzPNP7%2B4tfFxxD%2F2bEowxIZOu7wlvGsFRgQwLXTUpZZ5HLkrbMKwy9y3jueeq4TbpyKcjt7CzwY%2FUbuCbrtXHuzbwtEvKn919RzkG4H9PKgNlrnDseQqLqMGMKXwUpcd4CBoPeSa5wkoVuU8vdOowuuM3KoN8PESNgUVCPkARF8DpU%2BFGdho%2BgpVC0Ri7EZIiHy9hPXvApu0WA4C2hS3y41WQam1xspfpwNTVbFQ8g3jRZE0%2FliV4Um2vwGNCCaHR5hNyB3tuO6K%2BNz%2Fro26xs0h2BbKutfqg5TTAARqdGykn8CFeyCJP%2FwLMejF2Y9CMOQ3e%2BWKSC19pGcqsTy9d1fTdXB8XvC8twpz6CzHISVlWN3EotO9A5Z1M9XGMki0biPLhU7Wj34b%2FPnZD4q8S9kJ0067XDUW3r0spjKFfEfI0TRi%2B%2BaDU2SutTePMnAOVQ%2B%2BFa7qRvRsxuiYu5kCGqqIUWCiv4sLKYXat3gvJY20uJRJfeV%2FFwyCwVwaLDKNnckVPop0u1EDEECoXbP0tZnvYnMJHRicoGOqUBnrxGEa3ahItL0V85IAPRzekpFDxTddRbIadoKPU%2BzScllHSn35Lftvcpg1PmJDqJOD5bVlzsaopNVASsp6fZB0S%2Broq489ZJ6oqKGqTbfA0u2lRyh90TFCPGRNHMw1ZhSr0IgYhQPdA5Xp7%2F6cxC%2FN3ihUbwUp9R7xMZEAQGsGZJKt404eB6PWlTA%2F02pSznpuolaloDUt4SkTUrD4%2BlhIaTATha&X-Amz-Signature=2d388e6d56f5ee0791bad7743aeb0f56f26bac410399aeacff1652afbc8ddea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
