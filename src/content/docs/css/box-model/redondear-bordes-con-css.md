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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZPZAPA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSGyy1Q4hMcfW0iVRAs2jhO817yyJyLAJUMKxcEWNqVwIhAIuTqpkidHpJW0O4NVHLAI5k8JSHEGY3B1ZOJoCokgdvKv8DCHwQABoMNjM3NDIzMTgzODA1IgwF%2FZxpI1vDcItYjD0q3AOPA%2Bdog1X5KReZqe9nFXQ8f9Tr6ECZ3Ai98JuniIKvT9vkm85hL%2BCnURA9s2AmcuG4gFU0l7FzP2mopzD4gR%2FFJcAUIVnH5PHDXe%2FiuKfqRgbcpCQLTI%2BQn02hI89t4K9Fcts9wH1FOvftkHj7cNNq30BXjQOVF1o2fruASpdlhdphIzsMduREhOyJRKub7sP1AJpeyI0HxCE7hbtJVhaWkVo8Xl8sxArW0vObhV2iNIDcOl8G1oGD1Uei0iSXWQJUfpp42fUcNNUiI%2Fgqp6dh20J8KpOk3tUlgDVQtvjhAu2iwZLop47ZcJdGVZNI2JNcftFszmZvyR9ClEbeRwPuImlvPMjz%2FuiiMhbfRCXT0bI0bZCZkp6%2Brd73cESFRMF6YtW6Qs1GBCIvNfGXljq3nkirVTUQxpRciuQ9pDWde3FkLsa9zlSijLXjwndQAHu%2FX6ba%2FJTYIV4ilCBCPTMh%2F4RVxpPFboSOKm1mlxNc%2FTYLqdly7TFDzkWX22RuvvJA9mlpHwh0%2FQz6NwGLqnOj%2F%2B0Vm4rtAhV9MrTdZKEC2442bWsPbGlpmOh8NIwS0jLq9px7szAqcD0aGN3dbbjLrssxsWRGtdIN%2BMih4F5GOrwUFfdgY0%2ByxGtADDCBj4rKBjqkASryl9o8T%2Fe9YcaXxTFZOTf5y9d7rFwSVWip9WjO89YRfz%2BgH8Q4BT%2BgCnBcJtahPG4sU4w3joWA1%2F%2Bdm1QYpZ7%2B3VmV43CoYBXj2h7Mrkjc9VHd1lVLRdUSZkYRma6c5PNG%2BKj9eeWZpYNrjzCIOAOyg%2Fy2OsVE93dBZhXjsLf%2B%2BAENrn%2FtKQ5VR5YH%2B6EH0wcwc8zeWormhs1%2BUSxePWhHCKDr&X-Amz-Signature=14dfbe8f7d13da78795de45d2d4ac9f0304eb9b321810ad6fd2e5d8f5ab47bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZPZAPA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSGyy1Q4hMcfW0iVRAs2jhO817yyJyLAJUMKxcEWNqVwIhAIuTqpkidHpJW0O4NVHLAI5k8JSHEGY3B1ZOJoCokgdvKv8DCHwQABoMNjM3NDIzMTgzODA1IgwF%2FZxpI1vDcItYjD0q3AOPA%2Bdog1X5KReZqe9nFXQ8f9Tr6ECZ3Ai98JuniIKvT9vkm85hL%2BCnURA9s2AmcuG4gFU0l7FzP2mopzD4gR%2FFJcAUIVnH5PHDXe%2FiuKfqRgbcpCQLTI%2BQn02hI89t4K9Fcts9wH1FOvftkHj7cNNq30BXjQOVF1o2fruASpdlhdphIzsMduREhOyJRKub7sP1AJpeyI0HxCE7hbtJVhaWkVo8Xl8sxArW0vObhV2iNIDcOl8G1oGD1Uei0iSXWQJUfpp42fUcNNUiI%2Fgqp6dh20J8KpOk3tUlgDVQtvjhAu2iwZLop47ZcJdGVZNI2JNcftFszmZvyR9ClEbeRwPuImlvPMjz%2FuiiMhbfRCXT0bI0bZCZkp6%2Brd73cESFRMF6YtW6Qs1GBCIvNfGXljq3nkirVTUQxpRciuQ9pDWde3FkLsa9zlSijLXjwndQAHu%2FX6ba%2FJTYIV4ilCBCPTMh%2F4RVxpPFboSOKm1mlxNc%2FTYLqdly7TFDzkWX22RuvvJA9mlpHwh0%2FQz6NwGLqnOj%2F%2B0Vm4rtAhV9MrTdZKEC2442bWsPbGlpmOh8NIwS0jLq9px7szAqcD0aGN3dbbjLrssxsWRGtdIN%2BMih4F5GOrwUFfdgY0%2ByxGtADDCBj4rKBjqkASryl9o8T%2Fe9YcaXxTFZOTf5y9d7rFwSVWip9WjO89YRfz%2BgH8Q4BT%2BgCnBcJtahPG4sU4w3joWA1%2F%2Bdm1QYpZ7%2B3VmV43CoYBXj2h7Mrkjc9VHd1lVLRdUSZkYRma6c5PNG%2BKj9eeWZpYNrjzCIOAOyg%2Fy2OsVE93dBZhXjsLf%2B%2BAENrn%2FtKQ5VR5YH%2B6EH0wcwc8zeWormhs1%2BUSxePWhHCKDr&X-Amz-Signature=2735174f6ecdbc28b02fc8dd611a1874c51f446c295d204e587ff8127c759b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
