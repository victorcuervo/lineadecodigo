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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMHGZWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPYxx0q%2B0TPuj%2Bi5SEsDJSjPYvzoKvM02uiH7hoXMX5AiAl%2FuvMV1DpJESGMtanCzmbeTXi3zuDEz63Gr6bFMa2kir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM5HVfZiCH30YUmCl%2FKtwDaX41xWA1sxom%2BUqJH6WmrYLuyOJTz0laIcXI4iZo%2BZVAY3wrfdj8kf%2BaDn2W2eeXyp0Y%2F9%2B5xoA5yQZdoBSGxMHlwkBHifri1RRP8JbCLS9tfis2ndYB4Ey%2B3tKHhkHavL%2BKR1Deo8BoRyAn2HpVioMLlIbxknKdQbagu9g6L%2Bwt9BxWaYuAlhVrEJ%2B9MKRdCtT6boBzThrbNmcXFJtMZeK%2BMQYopWsg0vHV%2FvV163DEWJJL0thRt0zcC8Gr0Ew1EHvUpPg1m61Jw03ImPwQJrb3sfCiONRw0UNg3DwFmFAqyZRroqQmKuzHT9Ss4atuxdxlsEYPLrKkCQj62nNHTijbXzZQ4USpH5KXyd2j2GpuSIaX2wnOWyY%2BKGnrSWjRBv0FxTWi0fb4RjJFWD4cqtWJYSQL7dOQE0G0HfE7RhT0I8tRXXKAvftSW9uUVxUmW%2BaQVBh8a0Ijk5s4mKKeViAMY%2FeXHvGwzcni47Qsi7ulx3njvtoZNFjEgggnbUD49OFGlNsaTY1920QpqfbuhlAE3XhTCucSH3fYG3PWRyUj0epYvSwbmgXkjEQ1nUxLtsg2KUNc%2FJKBJ%2FIIKnsyop8%2BiM7u1QvR0UqY2DW1bmZ6gmMNX0jh3mJOzk0w4d6HygY6pgEEcn2u9qyZ%2FsG3FXo0qwQMf6r%2BwNcoAkOdwV8QCFpIxdVFqc3o4JFxb9uqZ8OYfdWaHk1RVlvtewKmM38kqUKBkNSQ4bQxT%2FIcoG44maoFFffshn6IrTcWCoYO7piS3K%2BK8o3N%2F%2Bhqv46P80HHOhxj9KV1jaJZXyXaoUH5CvjpGE2MH13KlmZhlZDpNjhDgDfeKIYK8Olf15Rs%2Bk3ZkJwDSZhtL8kv&X-Amz-Signature=d66fe6c6f3916e040a85f45d9b867df5e98541a26396875dab1e642250cbdc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMHGZWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPYxx0q%2B0TPuj%2Bi5SEsDJSjPYvzoKvM02uiH7hoXMX5AiAl%2FuvMV1DpJESGMtanCzmbeTXi3zuDEz63Gr6bFMa2kir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM5HVfZiCH30YUmCl%2FKtwDaX41xWA1sxom%2BUqJH6WmrYLuyOJTz0laIcXI4iZo%2BZVAY3wrfdj8kf%2BaDn2W2eeXyp0Y%2F9%2B5xoA5yQZdoBSGxMHlwkBHifri1RRP8JbCLS9tfis2ndYB4Ey%2B3tKHhkHavL%2BKR1Deo8BoRyAn2HpVioMLlIbxknKdQbagu9g6L%2Bwt9BxWaYuAlhVrEJ%2B9MKRdCtT6boBzThrbNmcXFJtMZeK%2BMQYopWsg0vHV%2FvV163DEWJJL0thRt0zcC8Gr0Ew1EHvUpPg1m61Jw03ImPwQJrb3sfCiONRw0UNg3DwFmFAqyZRroqQmKuzHT9Ss4atuxdxlsEYPLrKkCQj62nNHTijbXzZQ4USpH5KXyd2j2GpuSIaX2wnOWyY%2BKGnrSWjRBv0FxTWi0fb4RjJFWD4cqtWJYSQL7dOQE0G0HfE7RhT0I8tRXXKAvftSW9uUVxUmW%2BaQVBh8a0Ijk5s4mKKeViAMY%2FeXHvGwzcni47Qsi7ulx3njvtoZNFjEgggnbUD49OFGlNsaTY1920QpqfbuhlAE3XhTCucSH3fYG3PWRyUj0epYvSwbmgXkjEQ1nUxLtsg2KUNc%2FJKBJ%2FIIKnsyop8%2BiM7u1QvR0UqY2DW1bmZ6gmMNX0jh3mJOzk0w4d6HygY6pgEEcn2u9qyZ%2FsG3FXo0qwQMf6r%2BwNcoAkOdwV8QCFpIxdVFqc3o4JFxb9uqZ8OYfdWaHk1RVlvtewKmM38kqUKBkNSQ4bQxT%2FIcoG44maoFFffshn6IrTcWCoYO7piS3K%2BK8o3N%2F%2Bhqv46P80HHOhxj9KV1jaJZXyXaoUH5CvjpGE2MH13KlmZhlZDpNjhDgDfeKIYK8Olf15Rs%2Bk3ZkJwDSZhtL8kv&X-Amz-Signature=9127d5008aa9fea4e6557beeff95b738f8c0c027641a80c85bacf664adf0be02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
