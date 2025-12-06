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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TEC2K4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7FhumsKSoUoVJSUjXuB9rCmuPsxhAH5Ti3vUpiyVgIAiBCOcra94a%2FC0G7Sk2BbSCnoIuCETPkoi3wI2U7E6UPqCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsyrKRcaMU9Gmv84QKtwDiMxhhadmmzfpmhvqkOGMrhpGvbmcos1mYb5PlxdHak5I9wMRBZ3D3TsYMu%2FuVQiNlBvvAa9TsQE4M38Ixz%2Feqyf6xRODj5eWIDRTvgValUsoCRN1kdChhX0oJ4e5xbq5eJS1JwPWfAXAhsyI2KT3kfLVDr4CW0%2BWdc6o9ULmyLCNWjQjBaIsTk5S4I3TlTnqiCAES%2FXPci81z4LVy2RRH7EQ3ro58mlFCUTwHRYi6uFWwU5ZpNqsWFvBexO0maE2zPnZdGVs4rWAo6NPiVThUR6PWkPg4MawrH3pe%2BRhARav%2BGqVhWJQ7mkMu%2Bwc43yytgtXKQTyi7R0x4ITwz6CYuQTQHuBlbK8DuaJHRV3nmaGLZFsyBeLfVBJV2vbVYdHUG0Mvdg5pa2ZWMEaOp76q44sfqz8qKbt25TBz%2Bt1cOP9ug9241%2BMuOSUJxo3jLPVydKkaN0pcMO7PWcYXhwktmHlHPHsQxCMZlKi1gWpribdoWNvVzAplCj%2FOHlk39UTRW6gDq2wwipOjICsNXIOIvN%2FdWVz5G3QpLY7SGyvg2JalOlebtU6pvbkwlqk4C5vKQGRnWq0%2FekyjHHs%2FiWwr8GrQN7ukHHtvcMw09c4baThPK1NevK%2FeKAAjYAwkafQyQY6pgECP6oudnKBOJC7clUVz3wQsBhiPvekcBsHEScHnrsg1UpYHBZiAlQjGiJr2eJDLXWNAR9CH6e%2B8mArUJ2ZTO7XU%2B0VMI5UQtMSNqpRIoihbPKmp%2F0Ik6fk3RF9tFkvE%2FT4c4LpZRWHNzvrfa5jnTD11Y0ZAkW68VyiJGmvQ57DmJO7WFp%2FqEBpBBc5gUxjLPBqzYMu77FMDi20KKrMUsaq5QmOsgBh&X-Amz-Signature=43e2bc2c5997077a20acf90a282cac04f764a0ac2ccf0e8bc79e53e80f4eaaf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TEC2K4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7FhumsKSoUoVJSUjXuB9rCmuPsxhAH5Ti3vUpiyVgIAiBCOcra94a%2FC0G7Sk2BbSCnoIuCETPkoi3wI2U7E6UPqCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsyrKRcaMU9Gmv84QKtwDiMxhhadmmzfpmhvqkOGMrhpGvbmcos1mYb5PlxdHak5I9wMRBZ3D3TsYMu%2FuVQiNlBvvAa9TsQE4M38Ixz%2Feqyf6xRODj5eWIDRTvgValUsoCRN1kdChhX0oJ4e5xbq5eJS1JwPWfAXAhsyI2KT3kfLVDr4CW0%2BWdc6o9ULmyLCNWjQjBaIsTk5S4I3TlTnqiCAES%2FXPci81z4LVy2RRH7EQ3ro58mlFCUTwHRYi6uFWwU5ZpNqsWFvBexO0maE2zPnZdGVs4rWAo6NPiVThUR6PWkPg4MawrH3pe%2BRhARav%2BGqVhWJQ7mkMu%2Bwc43yytgtXKQTyi7R0x4ITwz6CYuQTQHuBlbK8DuaJHRV3nmaGLZFsyBeLfVBJV2vbVYdHUG0Mvdg5pa2ZWMEaOp76q44sfqz8qKbt25TBz%2Bt1cOP9ug9241%2BMuOSUJxo3jLPVydKkaN0pcMO7PWcYXhwktmHlHPHsQxCMZlKi1gWpribdoWNvVzAplCj%2FOHlk39UTRW6gDq2wwipOjICsNXIOIvN%2FdWVz5G3QpLY7SGyvg2JalOlebtU6pvbkwlqk4C5vKQGRnWq0%2FekyjHHs%2FiWwr8GrQN7ukHHtvcMw09c4baThPK1NevK%2FeKAAjYAwkafQyQY6pgECP6oudnKBOJC7clUVz3wQsBhiPvekcBsHEScHnrsg1UpYHBZiAlQjGiJr2eJDLXWNAR9CH6e%2B8mArUJ2ZTO7XU%2B0VMI5UQtMSNqpRIoihbPKmp%2F0Ik6fk3RF9tFkvE%2FT4c4LpZRWHNzvrfa5jnTD11Y0ZAkW68VyiJGmvQ57DmJO7WFp%2FqEBpBBc5gUxjLPBqzYMu77FMDi20KKrMUsaq5QmOsgBh&X-Amz-Signature=dba9354d2c34b8dfa485578027a693f8cf8c25647a7bb11b0b0037227c1e4559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
