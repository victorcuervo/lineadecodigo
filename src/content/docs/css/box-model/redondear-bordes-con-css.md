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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQGTOY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6nHKRAa6kqia9wx8RPVaGOlJ6ozwM2Bbn6BKGkhZHLQIhANDhkrBxjeDT51AqTUgeIEaWd2kfLTlXYYPLSvGchx1eKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTwnAcyspYKgqpwPkq3AP9wkXwwjYgRRSBK6PsBD8%2FqF%2FwcItJBRGuTqc2%2BJQKuV5u7FrKBacB3yV6z6Uu4g8K9h5FepAKyku173j7c6N5Ee1YmgN9935lgq%2FSyffUkvwdbc7j1aZ8OKOpN%2B%2F1c%2FEvhjdLgitjaxSIPlylEGuNYdO%2FSyxt5nFhqaBSlQvl7cA9C%2BWe2%2BA7azwTqrj4WgoW0mOLv8GyO7MquEmCXlt9BkoKC7neyEjZ%2F2hWfxxgzT2x3iKiPGiIVWbza%2FzA%2BeNwW1J0XlYndRsbv1wMkPDfbqJCPHa45qnUDqQhwRXvX1DDbjqitN%2Bv%2BBINStbFI6Z3xQFHGAjS%2FF00NcvifZo1enWEr2RqLMDOm%2FUjmv86cxQR3DXOZfVlGzOVSvC4mPwSLhRTUJrp1o2hegEa5PrgVE79znzxicqWEQnYkMwxA97isBGwc1t1ZUb9oFTdxiYVz6rC9QMG4lLSUVCCr3VvC9kq0oopw%2ByaYsIv4%2BhSU2D2ZngAb8d9OAOIctmfaISpxz3jI5kV1qF5xWVOrM1L9Mje2SxC9ZY%2FDfMmx77i67Aj5kjZ2U%2BFEl54Vw%2BmTENwRtxJgvFlgpEpJIQPyyPf7qhGx280IDy1Kqvu96GlQUjbN3hHGfrFo%2BHQRjDMnovKBjqkATEK5Z%2BkYREL3eoRYVBrMVOQEMmA4vkOlwoiLIp%2B81%2FYk7zwSNRONnEuhswCjmY2onUD8KuG69bSqg91%2F5tkEnKAXYMYGhdoqaffU3D78Fo57Kk%2FukZUKKjaEnR1try%2FL78%2BFUiisn0Sio4KBIToViGS3qL7tpQBgy3b%2BFdb%2Fl1zkf4qC%2BOsHoQo3f9Z5BUYWnoxvfp5YFkQorUIj0si%2FFE2Su4h&X-Amz-Signature=015995abfea24ce3b46c6b2431cd271a07d16c62009b662a0f44433619da4ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQGTOY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6nHKRAa6kqia9wx8RPVaGOlJ6ozwM2Bbn6BKGkhZHLQIhANDhkrBxjeDT51AqTUgeIEaWd2kfLTlXYYPLSvGchx1eKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTwnAcyspYKgqpwPkq3AP9wkXwwjYgRRSBK6PsBD8%2FqF%2FwcItJBRGuTqc2%2BJQKuV5u7FrKBacB3yV6z6Uu4g8K9h5FepAKyku173j7c6N5Ee1YmgN9935lgq%2FSyffUkvwdbc7j1aZ8OKOpN%2B%2F1c%2FEvhjdLgitjaxSIPlylEGuNYdO%2FSyxt5nFhqaBSlQvl7cA9C%2BWe2%2BA7azwTqrj4WgoW0mOLv8GyO7MquEmCXlt9BkoKC7neyEjZ%2F2hWfxxgzT2x3iKiPGiIVWbza%2FzA%2BeNwW1J0XlYndRsbv1wMkPDfbqJCPHa45qnUDqQhwRXvX1DDbjqitN%2Bv%2BBINStbFI6Z3xQFHGAjS%2FF00NcvifZo1enWEr2RqLMDOm%2FUjmv86cxQR3DXOZfVlGzOVSvC4mPwSLhRTUJrp1o2hegEa5PrgVE79znzxicqWEQnYkMwxA97isBGwc1t1ZUb9oFTdxiYVz6rC9QMG4lLSUVCCr3VvC9kq0oopw%2ByaYsIv4%2BhSU2D2ZngAb8d9OAOIctmfaISpxz3jI5kV1qF5xWVOrM1L9Mje2SxC9ZY%2FDfMmx77i67Aj5kjZ2U%2BFEl54Vw%2BmTENwRtxJgvFlgpEpJIQPyyPf7qhGx280IDy1Kqvu96GlQUjbN3hHGfrFo%2BHQRjDMnovKBjqkATEK5Z%2BkYREL3eoRYVBrMVOQEMmA4vkOlwoiLIp%2B81%2FYk7zwSNRONnEuhswCjmY2onUD8KuG69bSqg91%2F5tkEnKAXYMYGhdoqaffU3D78Fo57Kk%2FukZUKKjaEnR1try%2FL78%2BFUiisn0Sio4KBIToViGS3qL7tpQBgy3b%2BFdb%2Fl1zkf4qC%2BOsHoQo3f9Z5BUYWnoxvfp5YFkQorUIj0si%2FFE2Su4h&X-Amz-Signature=324ea0e1360c8d616150ebcb872ae0265ee8e8d5d662631ab452f63f8df838d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
