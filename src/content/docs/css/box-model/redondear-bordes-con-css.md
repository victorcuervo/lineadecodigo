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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ6H4DA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1mSVoRmc8uyUVwBRhOKUdCBa3xVVUIFbDcBjzN6xUZAIhAKAUIHKxfAijQN01hMvcT3cQWrwmNotwjK3O%2BSi%2FCK9HKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFJHIyKqN5n3epZGcq3AOzIiJf%2BNBD%2F5wEQ40KF6IqPnuna%2FiwVIP51lvw4alzwVUG3kiM4aMpfSkoAocdub0yoHMce6GnP%2B8pOjYmM8DMIxa3olJccG%2Fp9YFtnsqUJ%2FFEPG1%2BskfuC3lW8l%2FnBwJ1FqEAii7jrIhy%2BAslCoz9LfMGk5fUd5Aap6mSFL3%2FzkosGSHQ2viWX5zFWqqjuhZb3NpE81hmkmhAZLFDsnNvngtYr8VrE1TA6EbPep3GLVoW3D%2FG%2FKS2oz2uP7KtKsynfoMAtMdet3w489dyuPSHrc225J%2B3fwUXnXQ09%2BH5ExHR6rCYWlbtiFZuO0tk4fRIVe6GLqcl2QVmEk%2FZNMDIUcW7b4M%2FFqVbbiOTrcNrYeF%2FN4SPqKkCz3fQHlA6tlW7TYag%2Bw0x72cmwqP78clrTcw3aXaaJXadL2MVMi%2FeUArNxEsj42CRlup1z3nmowXOZG%2B%2Fb9fhs9EICDJXG5jQpRP38u7aWfK%2FaNpz8M5I7by6TYs8ni1OcEuLFS%2F28bnmI3MBsI2P7AgyafE%2FpoOzzwrN2TLPJem7GWSJK9Aj9vx%2B8BIIu4k%2FShJ8IwnWe5kIi2fbq5GrVe6z4wp6nkSRi3ffCpTQ2wHEj6JYAKa9kMqB0sI2WATX9zkbSzDtgYvKBjqkAchW0orkyCE4QHZTnrwb3psOyIixeDaBEIxOB8clDXGqdWTuR9eaA22B5BnRLVTIHFT4rVhHS2jY%2FCGkR6Bab8EJDTi6h1YM6L3LmXyh0p1SFU6WuS0qpyi9%2FhaWEbfgHBTfBgbRVsyAkGXLP8AhLM0XrW6M5uDTElYwBVsRd3U7xMQ2YSyLnrQV8rKEoZf%2BYVxNO0RjDIBg2sgwQ%2BZhuP9UqBw1&X-Amz-Signature=2ba0482bdb80268377ef59c8a509106a978c76d34b1fd307cd7bf3c1485ef942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ6H4DA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1mSVoRmc8uyUVwBRhOKUdCBa3xVVUIFbDcBjzN6xUZAIhAKAUIHKxfAijQN01hMvcT3cQWrwmNotwjK3O%2BSi%2FCK9HKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFJHIyKqN5n3epZGcq3AOzIiJf%2BNBD%2F5wEQ40KF6IqPnuna%2FiwVIP51lvw4alzwVUG3kiM4aMpfSkoAocdub0yoHMce6GnP%2B8pOjYmM8DMIxa3olJccG%2Fp9YFtnsqUJ%2FFEPG1%2BskfuC3lW8l%2FnBwJ1FqEAii7jrIhy%2BAslCoz9LfMGk5fUd5Aap6mSFL3%2FzkosGSHQ2viWX5zFWqqjuhZb3NpE81hmkmhAZLFDsnNvngtYr8VrE1TA6EbPep3GLVoW3D%2FG%2FKS2oz2uP7KtKsynfoMAtMdet3w489dyuPSHrc225J%2B3fwUXnXQ09%2BH5ExHR6rCYWlbtiFZuO0tk4fRIVe6GLqcl2QVmEk%2FZNMDIUcW7b4M%2FFqVbbiOTrcNrYeF%2FN4SPqKkCz3fQHlA6tlW7TYag%2Bw0x72cmwqP78clrTcw3aXaaJXadL2MVMi%2FeUArNxEsj42CRlup1z3nmowXOZG%2B%2Fb9fhs9EICDJXG5jQpRP38u7aWfK%2FaNpz8M5I7by6TYs8ni1OcEuLFS%2F28bnmI3MBsI2P7AgyafE%2FpoOzzwrN2TLPJem7GWSJK9Aj9vx%2B8BIIu4k%2FShJ8IwnWe5kIi2fbq5GrVe6z4wp6nkSRi3ffCpTQ2wHEj6JYAKa9kMqB0sI2WATX9zkbSzDtgYvKBjqkAchW0orkyCE4QHZTnrwb3psOyIixeDaBEIxOB8clDXGqdWTuR9eaA22B5BnRLVTIHFT4rVhHS2jY%2FCGkR6Bab8EJDTi6h1YM6L3LmXyh0p1SFU6WuS0qpyi9%2FhaWEbfgHBTfBgbRVsyAkGXLP8AhLM0XrW6M5uDTElYwBVsRd3U7xMQ2YSyLnrQV8rKEoZf%2BYVxNO0RjDIBg2sgwQ%2BZhuP9UqBw1&X-Amz-Signature=585ff7716cea1483b80f67f78371980ed52098050b26b971ba0a1b7ec4d3a21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
