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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PZ752R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDEqgHtHQo9LaqUgb6wxf7EpP0o%2B71spNZs1ttOUV9tKAIhANoLkQilCcBebUeQAFDtsxOmdD3TIJadSwSwaFJRTKUqKv8DCEUQABoMNjM3NDIzMTgzODA1IgzY1UQEye642NHoBPMq3AO63wacUT15suHPpQH8%2FgSlFY1a0JFGeW9XJxqlIG%2FoqdzusMIRzlDDVJ61KwgCm6XqmkGCZIMP68kC%2F6fr7tUj48TDzqeb6vn1zuZJZLUo7WWL2ehuiwoD0yvz7niWhUFrFdJ98J%2BGIO5Wr%2FTcezV0HAagI5JMd%2F%2BsleRLk1LTP9MuCxetGoX24nMfMntDIV7kxs6gaY4bA54RL51tXBkhAfuZ6yIBh9Ylt%2FMmxXrLOK1KEbg0vJZ1FwbJf%2BAyReZQ2dWA%2F2%2B%2FEb7DwRDIzbgp%2BMZ9zVIe32Ifj3dR86jUaosVYt%2BJDXf3rVYgR5HpqKoFfoQQCQDh1dSRkGaSeYToSz1CK8qle8Y9dyy8Z1pcaouihG0Uu375GqHOFdQfkaupfVLVaGfEGEZ7smQpxAQHQfasztzqyhRfmykbpbz%2BZLb8W9sHmbB11H6HoulwGnl7ABb3ucxmTNdwb2OYX49sUpET%2BU6bw52SEhwz%2Fc%2FdJYdFwX1S8Zj4jq%2BJl1FqBDgqQd8lG7rrYcMx%2BoA81pIMrKTYNqyzzNJd0vBRtpcsoQCsxynOKLlHBF1m8EWJmXt%2FAG64UMjFpk0cZZIYsUpoTTvIvSTB9IpcMO%2Fx0HM3%2F94GtWKz%2BMAmsEbuazDm58XJBjqkAWgTdDdEQjdgXNqso6FAwSI7BTsme75cMMXOmrQXTQ8ky7ct4hmMetY85TUpI3eAKo1OwGKhInC5aVNKdKzsxkGTofI4UUfwzrOwR8Ih2Gowu%2BrhZWG9zkhJFsDdOpBQY5GCbYxUosVZEn2Wd%2BZ9xWHxGqgpICmvqRkQ9wLsvB6wVPihUAG%2FwadwN%2BsuYBb5RuVZZfR3QQ2QXoJvEJBcGEN64B8z&X-Amz-Signature=a4e29fd660cd75b9e0d3d1a0c9a1e19fb69395a707ac3f0d7b1830bda8a3058e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PZ752R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDEqgHtHQo9LaqUgb6wxf7EpP0o%2B71spNZs1ttOUV9tKAIhANoLkQilCcBebUeQAFDtsxOmdD3TIJadSwSwaFJRTKUqKv8DCEUQABoMNjM3NDIzMTgzODA1IgzY1UQEye642NHoBPMq3AO63wacUT15suHPpQH8%2FgSlFY1a0JFGeW9XJxqlIG%2FoqdzusMIRzlDDVJ61KwgCm6XqmkGCZIMP68kC%2F6fr7tUj48TDzqeb6vn1zuZJZLUo7WWL2ehuiwoD0yvz7niWhUFrFdJ98J%2BGIO5Wr%2FTcezV0HAagI5JMd%2F%2BsleRLk1LTP9MuCxetGoX24nMfMntDIV7kxs6gaY4bA54RL51tXBkhAfuZ6yIBh9Ylt%2FMmxXrLOK1KEbg0vJZ1FwbJf%2BAyReZQ2dWA%2F2%2B%2FEb7DwRDIzbgp%2BMZ9zVIe32Ifj3dR86jUaosVYt%2BJDXf3rVYgR5HpqKoFfoQQCQDh1dSRkGaSeYToSz1CK8qle8Y9dyy8Z1pcaouihG0Uu375GqHOFdQfkaupfVLVaGfEGEZ7smQpxAQHQfasztzqyhRfmykbpbz%2BZLb8W9sHmbB11H6HoulwGnl7ABb3ucxmTNdwb2OYX49sUpET%2BU6bw52SEhwz%2Fc%2FdJYdFwX1S8Zj4jq%2BJl1FqBDgqQd8lG7rrYcMx%2BoA81pIMrKTYNqyzzNJd0vBRtpcsoQCsxynOKLlHBF1m8EWJmXt%2FAG64UMjFpk0cZZIYsUpoTTvIvSTB9IpcMO%2Fx0HM3%2F94GtWKz%2BMAmsEbuazDm58XJBjqkAWgTdDdEQjdgXNqso6FAwSI7BTsme75cMMXOmrQXTQ8ky7ct4hmMetY85TUpI3eAKo1OwGKhInC5aVNKdKzsxkGTofI4UUfwzrOwR8Ih2Gowu%2BrhZWG9zkhJFsDdOpBQY5GCbYxUosVZEn2Wd%2BZ9xWHxGqgpICmvqRkQ9wLsvB6wVPihUAG%2FwadwN%2BsuYBb5RuVZZfR3QQ2QXoJvEJBcGEN64B8z&X-Amz-Signature=f83da0a6dcdee1dcdd139c70dbfb7ec32eebf1aa6ae176c939865e2c623d6e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
