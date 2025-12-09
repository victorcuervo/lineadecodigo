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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7MRU5Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi33rrQpBsX0QW29t4%2Bv34zF5MP0ZaTDVvKvjWy0dPGQIhAJFV%2BE3LKpQVNqWrDCyA89HwUVgUGmtRxE8X%2B24muRSRKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdEYsIeQh8VANlihIq3AO838nkaL15yzfTsK2SGfRNW2UGPGqwWplBGwlqI%2BXpIb%2FKpIuRdWxp1HVQXWlKfozVEt12AOo6LsKsy%2F%2BKZDbrZSdVIfo%2FG9aZ%2BDqsp1%2BWX5gpr%2F56oyVQixFtZkWGsB6hUuAKFlgQHqT4gaKBDnNYB%2BwDhwB9zZxrbyqcSmQfajaD2KZ3obTsgC7Ckqs%2F5qvqFVU7nPITtYcBcAxFWksM6hoSN4jDLbFkaJjA9KVMfo5u15XGmaWU%2FPO773qcUTd%2Ffv4zUXZMoh4nWu3v9oLj5dAkkvqThyceL4uABuK7KrMLjx2k6dg2k9GRZ7iUOeJPkZOK0LDBJ%2FXbFIoVSszjAWXGidFMCtOY1rcbhCVMQnA5kE%2BGoFO%2BRNu03MxdZxpll8Uh7cuQfgAjdoOHhwk591gYGmF524RVex4X4xjN0dOXPZcQcmRF1lWV%2FLRYog1feaAF76RqGXCQKKgWZrj9pVAj%2FAYwBQK3pISGTNO%2Fvp5YpM%2FNcMO3gkGttowijILrCB3lxDGiw%2Bfvdo4LR2x4TWZ9kmkSF6Jkvj8%2BijG8fcmT3HXTcKY1WzTVCO4g3qv8%2FrxKV8u7vbCzCq8XoAletxNnnclXdZjLk3f0wMWwCjvQ814u5BwaAHSSQDCZxN%2FJBjqkASEfMaubZitaUjFn8EmPvwLqnX167ObdDaHPtX2%2FSduyHKZ5wBqNTf8y7ej4YnHanafsBQ1OfMPu%2BbJQagySw1x4u9ghpCHY1EPNni1W3EzPrzlvhAR0l3qvaxduSxvBy7vuxwHFPC31dofuS97FGpgS%2F4CaHLOX5Fb7D8ElqOaP5j2A%2F0zyBY%2FxWM7QVgYnKy3SRZcTezxAuXgADm3d1VnQ5bWR&X-Amz-Signature=4ada9e8b4fd9a853177f18462dffdb1e6290225e009b18c592f8d769afae6a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7MRU5Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi33rrQpBsX0QW29t4%2Bv34zF5MP0ZaTDVvKvjWy0dPGQIhAJFV%2BE3LKpQVNqWrDCyA89HwUVgUGmtRxE8X%2B24muRSRKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdEYsIeQh8VANlihIq3AO838nkaL15yzfTsK2SGfRNW2UGPGqwWplBGwlqI%2BXpIb%2FKpIuRdWxp1HVQXWlKfozVEt12AOo6LsKsy%2F%2BKZDbrZSdVIfo%2FG9aZ%2BDqsp1%2BWX5gpr%2F56oyVQixFtZkWGsB6hUuAKFlgQHqT4gaKBDnNYB%2BwDhwB9zZxrbyqcSmQfajaD2KZ3obTsgC7Ckqs%2F5qvqFVU7nPITtYcBcAxFWksM6hoSN4jDLbFkaJjA9KVMfo5u15XGmaWU%2FPO773qcUTd%2Ffv4zUXZMoh4nWu3v9oLj5dAkkvqThyceL4uABuK7KrMLjx2k6dg2k9GRZ7iUOeJPkZOK0LDBJ%2FXbFIoVSszjAWXGidFMCtOY1rcbhCVMQnA5kE%2BGoFO%2BRNu03MxdZxpll8Uh7cuQfgAjdoOHhwk591gYGmF524RVex4X4xjN0dOXPZcQcmRF1lWV%2FLRYog1feaAF76RqGXCQKKgWZrj9pVAj%2FAYwBQK3pISGTNO%2Fvp5YpM%2FNcMO3gkGttowijILrCB3lxDGiw%2Bfvdo4LR2x4TWZ9kmkSF6Jkvj8%2BijG8fcmT3HXTcKY1WzTVCO4g3qv8%2FrxKV8u7vbCzCq8XoAletxNnnclXdZjLk3f0wMWwCjvQ814u5BwaAHSSQDCZxN%2FJBjqkASEfMaubZitaUjFn8EmPvwLqnX167ObdDaHPtX2%2FSduyHKZ5wBqNTf8y7ej4YnHanafsBQ1OfMPu%2BbJQagySw1x4u9ghpCHY1EPNni1W3EzPrzlvhAR0l3qvaxduSxvBy7vuxwHFPC31dofuS97FGpgS%2F4CaHLOX5Fb7D8ElqOaP5j2A%2F0zyBY%2FxWM7QVgYnKy3SRZcTezxAuXgADm3d1VnQ5bWR&X-Amz-Signature=c9060b87ac9d4d03236a03718326e392bb17fba0d35b7c19021440360b1bf5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
