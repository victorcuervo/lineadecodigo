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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6R5XFE5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF41mjI%2FDz1tlcL9XjZeuxapr3DDhbAkWzrzIjzRu0MAiEA%2F65OEi%2Bih6MDGkSXOMhv%2Fx9%2Bvnt3JdjChkmqyFhkwQ0q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKtKKLS6nqagHQu4JyrcA6bieLlQGv3t4fj9D%2Btt0VQEf7iGl9nsbOhEhCtavB2K95n%2BBKiyV20qMd3uXy2n4sFTmiR7973Y4HCCJM%2F%2Fdb32SqDmgY3iZwXIlwV12jfzq2FiK8aiVHQ%2FKuoUjZSEvJVmitlwNZkaiWFk3PziEkreNnL38detfk54ahbRS2S%2Fft1X92Kcuv828n0TU73PA2i0f2HLNAmM%2B6NVT0NwvkvTg%2F0PurPjAlfQu2%2FFHXddOYU6WqCF3j4iYiZ1BnNOPZfMlYKSiHKYfpIiitkKZ%2Fadhk5TMpGKkIqGmb8QUOx%2FMV50VxjhxpUTEidG%2Bb%2BduTgeI2hQY4QPMKyhyAX37dIHsmaD4%2FK4ToBg68ZFW18Qf%2FGxTYOPfMN5%2F8mHRom%2F86gsmeea%2BuLFA%2F9r0A3ozwyUzvkcaiji7vM6AmI6q2TIwBONb0BXJ1M%2F%2Bx2MNSJh5vuWHpEBT4WHkMJdiQxW4yRCK1L5TN9xJLtB8h1lRvWnELqXJIcLhsnR0wiEfWRCa1fDp1t8RmuAlREH1yCFA%2Bq7ZWMgQStgNjxH%2F8MRD6nWKrrOOOD0cBkckGxHuf%2FwZoh44YXiUpime5TOQYyy8L2YN2BZUicq7e3%2BBqEf9cSB0BT%2FjR9VVkK1NZD1ML2ez8kGOqUB%2FuqK0gnhqADNLJdVrI9q%2FcE5ZE%2Fr4fF0JI6PkvmA53rMcI5qMQcA9eCMg7k5Hw0dv%2BFxmIGkaKeiNGHIwVMc%2FyskB7Ox95yLPZd7DJkKEIdwtVhHYATtmlt%2FXcGJOLwuJIOvNXXGFiuX%2BNpJEkD3v638Rn3n4oZJsqcqxl%2F5CqXAGrp6jckgf2aQDWzlpOmpIoZe8uNoo47sQgpEt8btdnBtdWfx&X-Amz-Signature=7024416785cad7b5e923a262def1b156e9466181458067db9df15ba360ba9be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6R5XFE5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF41mjI%2FDz1tlcL9XjZeuxapr3DDhbAkWzrzIjzRu0MAiEA%2F65OEi%2Bih6MDGkSXOMhv%2Fx9%2Bvnt3JdjChkmqyFhkwQ0q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKtKKLS6nqagHQu4JyrcA6bieLlQGv3t4fj9D%2Btt0VQEf7iGl9nsbOhEhCtavB2K95n%2BBKiyV20qMd3uXy2n4sFTmiR7973Y4HCCJM%2F%2Fdb32SqDmgY3iZwXIlwV12jfzq2FiK8aiVHQ%2FKuoUjZSEvJVmitlwNZkaiWFk3PziEkreNnL38detfk54ahbRS2S%2Fft1X92Kcuv828n0TU73PA2i0f2HLNAmM%2B6NVT0NwvkvTg%2F0PurPjAlfQu2%2FFHXddOYU6WqCF3j4iYiZ1BnNOPZfMlYKSiHKYfpIiitkKZ%2Fadhk5TMpGKkIqGmb8QUOx%2FMV50VxjhxpUTEidG%2Bb%2BduTgeI2hQY4QPMKyhyAX37dIHsmaD4%2FK4ToBg68ZFW18Qf%2FGxTYOPfMN5%2F8mHRom%2F86gsmeea%2BuLFA%2F9r0A3ozwyUzvkcaiji7vM6AmI6q2TIwBONb0BXJ1M%2F%2Bx2MNSJh5vuWHpEBT4WHkMJdiQxW4yRCK1L5TN9xJLtB8h1lRvWnELqXJIcLhsnR0wiEfWRCa1fDp1t8RmuAlREH1yCFA%2Bq7ZWMgQStgNjxH%2F8MRD6nWKrrOOOD0cBkckGxHuf%2FwZoh44YXiUpime5TOQYyy8L2YN2BZUicq7e3%2BBqEf9cSB0BT%2FjR9VVkK1NZD1ML2ez8kGOqUB%2FuqK0gnhqADNLJdVrI9q%2FcE5ZE%2Fr4fF0JI6PkvmA53rMcI5qMQcA9eCMg7k5Hw0dv%2BFxmIGkaKeiNGHIwVMc%2FyskB7Ox95yLPZd7DJkKEIdwtVhHYATtmlt%2FXcGJOLwuJIOvNXXGFiuX%2BNpJEkD3v638Rn3n4oZJsqcqxl%2F5CqXAGrp6jckgf2aQDWzlpOmpIoZe8uNoo47sQgpEt8btdnBtdWfx&X-Amz-Signature=7232d4ee6df68ac7d0732260e43f47eb1bc7213ab78475d464e5f526cfc0ead2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
