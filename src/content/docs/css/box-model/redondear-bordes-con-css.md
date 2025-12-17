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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYDYC6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA5lIuooFY%2BVmcCJVTu3JvWquz5jjFKsAo2VQKhJEvqAiEAvWBNi9zeRhJG0d9RQJu%2FmgY%2BhoyNZBt3vmp5hYRveMMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFZ%2FqMGaFZ8C1QBl9SrcA5zaUISJ8qyTsjeGUTqWbDku55HvdBBrdvR933j2onjJrUs%2Fpz0KcUxRjuuAsGfoydYbneln2v%2BL4AdYbB7z499QG7EmhLUi%2BOPyqJFR63RqZbZ5HYu1axOE0vHNMmfFgJ33p96APY03jtFbR705%2Fxo4LwdCkHaUbv1Lsrj08uLgqSUExbSwgeer2wnktMc2rBK6Hf0WyLu6e6KPYg5c5ChuQ2Re%2Bxz4PlkGZM3zb5iEYRn2s4C3q0p9rEi8L239Ghs0LrAhTRl7EusR8VZh3U2Md%2BsS4mVyuUtV5Grhv6se5CKrtxCUlNdaQioFNd%2Bi1Cumd974p%2BE5JpaeqyTAwCUBMQ24EzsvIRHqEwIiNHROSqxDzTXsEbpp5DnX4ZmmTuykNOJlK499R9Uk%2BnsvRkoHtf5isl58F%2BgbdMyC9iPOBL4%2F4%2BEmBO%2FmnqCC3LztJ9cWOLcjTnTK6FtmVfqjNEgWUYSrCLypyQOwFd9P6wOxDHqbVu7kfsdO1FjSfsvOZQ%2BOumicDoZgV0QtvBI3sGuaPM22FFdxae7GTGrh4focmuXr22Dm3jWFesQQToBUZinI17KynGIG2Us78du44zU00FbRR%2B2A94MTpk8YQPDuAW7tmeAmJEhhYuSxMPzOiMoGOqUBbzfzq7F7OpMDjBBG%2BP0TkR32UD%2BmfdEIrbzOTaI4NPk0UcgyBfKLHPNTzmW8lP9ngLct3UMF5lk8ivIkXs%2BUw9MgVvNIXNGp8pnL19mpN7Gp%2B4D8KvbgWclqHWMpKDzOgaT2JN5UBfctpATkIsd3di%2BnsAznJ8okR5WHYuJKIY9eGmYRYVmcNalqFxJp28P8SFlY0uB0wjJfVQ4PVIFst0T1Q%2Foc&X-Amz-Signature=4585858c6642eaea53e98b5e6bd1ce283153c104f4b6934d44cb5d172707f36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYDYC6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA5lIuooFY%2BVmcCJVTu3JvWquz5jjFKsAo2VQKhJEvqAiEAvWBNi9zeRhJG0d9RQJu%2FmgY%2BhoyNZBt3vmp5hYRveMMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFZ%2FqMGaFZ8C1QBl9SrcA5zaUISJ8qyTsjeGUTqWbDku55HvdBBrdvR933j2onjJrUs%2Fpz0KcUxRjuuAsGfoydYbneln2v%2BL4AdYbB7z499QG7EmhLUi%2BOPyqJFR63RqZbZ5HYu1axOE0vHNMmfFgJ33p96APY03jtFbR705%2Fxo4LwdCkHaUbv1Lsrj08uLgqSUExbSwgeer2wnktMc2rBK6Hf0WyLu6e6KPYg5c5ChuQ2Re%2Bxz4PlkGZM3zb5iEYRn2s4C3q0p9rEi8L239Ghs0LrAhTRl7EusR8VZh3U2Md%2BsS4mVyuUtV5Grhv6se5CKrtxCUlNdaQioFNd%2Bi1Cumd974p%2BE5JpaeqyTAwCUBMQ24EzsvIRHqEwIiNHROSqxDzTXsEbpp5DnX4ZmmTuykNOJlK499R9Uk%2BnsvRkoHtf5isl58F%2BgbdMyC9iPOBL4%2F4%2BEmBO%2FmnqCC3LztJ9cWOLcjTnTK6FtmVfqjNEgWUYSrCLypyQOwFd9P6wOxDHqbVu7kfsdO1FjSfsvOZQ%2BOumicDoZgV0QtvBI3sGuaPM22FFdxae7GTGrh4focmuXr22Dm3jWFesQQToBUZinI17KynGIG2Us78du44zU00FbRR%2B2A94MTpk8YQPDuAW7tmeAmJEhhYuSxMPzOiMoGOqUBbzfzq7F7OpMDjBBG%2BP0TkR32UD%2BmfdEIrbzOTaI4NPk0UcgyBfKLHPNTzmW8lP9ngLct3UMF5lk8ivIkXs%2BUw9MgVvNIXNGp8pnL19mpN7Gp%2B4D8KvbgWclqHWMpKDzOgaT2JN5UBfctpATkIsd3di%2BnsAznJ8okR5WHYuJKIY9eGmYRYVmcNalqFxJp28P8SFlY0uB0wjJfVQ4PVIFst0T1Q%2Foc&X-Amz-Signature=be2157e8b01e35b4930aee0a87a3571bb88fcb0d941911a34bba3ff9212832e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
