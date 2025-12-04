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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5P6SYN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDGeBeh%2FMavQp4DG1Tf3uhDMJWSEkG3zQTUuIQPu4Ki%2BAiAhox27WsUZHDIAWbNuK3tTcygDFLpqX%2FYC9rQ3j%2FksCCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM%2FuIvG9Dlo7vu9XQAKtwDabFBcaO%2FjDMcmu3r3Tu55oBZR%2B6yvBqjYIKEuBFQn08u5MY4IOuHqxXY5sRqTI8Xe%2Fsy%2BnbLAKYO1nylD7aKnqxRpG1vLWmPrd9NAzCCTur1hr7zUgPfdGZqIItC30k6Bv%2Fg2vNifXvwhoVnc9oN%2F3NxgTAdunSlatY%2BMsuP%2BE2UawNiU36JVHlAcVL0wx7S%2BNvk7%2F%2BD%2FwBv80l4M2D%2BamRHmhOeuENzeMJ2I%2FSO9c266292cO%2FsCbSMnvcYlLNCjO2aX9wlbxt3%2BW0vaIOWB5%2FzVcPRyXqEwWHt0CXHklRFnQuKdlFgV9SOQ9zzffo67sultOk%2BcblGNtPhA00gHI3XWf9Y3LZ4sR6v7DROlgVD9uuxVU6Mb1NW%2FU0aP7wj%2F%2FFkwihj1AF4yHVXa8Oz0xeUDmeHDpX7gpUl6mLw3F%2F3HekIU5Zor%2BjMWbrKRBE7XzGh4jO78o88Eod2MJz3uyXuSFoUAR1lT4zXUtRdOc%2FuyneGxncHADSwb4IuA22Rr1ffXu%2BFlzoe%2FQCmJ6V1I5wlqrS%2BWY5IvnmBXchw7ITNolXf3QnU3N8toKdfKlriDdTCHrTHLbPWvyr09df9KQWLSz8y8wu9%2FBoCtTYEIpjhyrwTC5X13%2Fztx5swhbTDyQY6pgEo6SRQkvg2ocOkPadsCC4zA4RoXRku8OfjKngYl7Q0AKy9HxBfquui5t%2FyVb1fXUDKT90cdmxz%2FitlhOEdLfw53YaIkLMmyolF4lRTNm6Y6fluOnJZob2Lq5o0usqkXlHtWI8cg4%2BMI0KBOdWRnZjk2y8jCrgZT31eSx1mX0G6B%2FStZborZMUkXzjBT5SON7KF6XZ3pYIYxn5yk1RkU%2FdRaeViOZX%2F&X-Amz-Signature=59bc609f17fd84c90c161c224a0a7af09e6267527675cec866b0fd3e64286030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5P6SYN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDGeBeh%2FMavQp4DG1Tf3uhDMJWSEkG3zQTUuIQPu4Ki%2BAiAhox27WsUZHDIAWbNuK3tTcygDFLpqX%2FYC9rQ3j%2FksCCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM%2FuIvG9Dlo7vu9XQAKtwDabFBcaO%2FjDMcmu3r3Tu55oBZR%2B6yvBqjYIKEuBFQn08u5MY4IOuHqxXY5sRqTI8Xe%2Fsy%2BnbLAKYO1nylD7aKnqxRpG1vLWmPrd9NAzCCTur1hr7zUgPfdGZqIItC30k6Bv%2Fg2vNifXvwhoVnc9oN%2F3NxgTAdunSlatY%2BMsuP%2BE2UawNiU36JVHlAcVL0wx7S%2BNvk7%2F%2BD%2FwBv80l4M2D%2BamRHmhOeuENzeMJ2I%2FSO9c266292cO%2FsCbSMnvcYlLNCjO2aX9wlbxt3%2BW0vaIOWB5%2FzVcPRyXqEwWHt0CXHklRFnQuKdlFgV9SOQ9zzffo67sultOk%2BcblGNtPhA00gHI3XWf9Y3LZ4sR6v7DROlgVD9uuxVU6Mb1NW%2FU0aP7wj%2F%2FFkwihj1AF4yHVXa8Oz0xeUDmeHDpX7gpUl6mLw3F%2F3HekIU5Zor%2BjMWbrKRBE7XzGh4jO78o88Eod2MJz3uyXuSFoUAR1lT4zXUtRdOc%2FuyneGxncHADSwb4IuA22Rr1ffXu%2BFlzoe%2FQCmJ6V1I5wlqrS%2BWY5IvnmBXchw7ITNolXf3QnU3N8toKdfKlriDdTCHrTHLbPWvyr09df9KQWLSz8y8wu9%2FBoCtTYEIpjhyrwTC5X13%2Fztx5swhbTDyQY6pgEo6SRQkvg2ocOkPadsCC4zA4RoXRku8OfjKngYl7Q0AKy9HxBfquui5t%2FyVb1fXUDKT90cdmxz%2FitlhOEdLfw53YaIkLMmyolF4lRTNm6Y6fluOnJZob2Lq5o0usqkXlHtWI8cg4%2BMI0KBOdWRnZjk2y8jCrgZT31eSx1mX0G6B%2FStZborZMUkXzjBT5SON7KF6XZ3pYIYxn5yk1RkU%2FdRaeViOZX%2F&X-Amz-Signature=7287d59f289655b4bf572288a465d18b4664090a585841a472c2c60a404c2e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
