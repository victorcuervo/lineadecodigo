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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZQ5YVU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEEkoeTqRIapmRsTkTxxJQ6Ed5Vn7C7WHpcHPao9Is7ZAiEA%2BMXa5siYj5E%2BLqxEdTLavDF8xG0L5lB0xttCey%2F9UYoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLRSC9dE%2FqZd07k0sSrcA1CmJGnEzNQ8LJ76ANqh65xScSjd1IZm5VcZUhZOmK5v2RxTm%2BPvulLmnSmqzfzD5Cw0wL4M74mNKpVdcAceRYZ0jxOlYHIFQXFpX4H%2FwalmBZHH3QLZDGbtXw7IJe5dGxsmsrnXyASV06fYpZoS5W0gPxUR75ggvIxDMTPoeIhEec%2BhXdNixTnqOR%2B0ia1OjEpijBWgIOLQiPPGQiwLCBFigzlYGsKEheNJwM4HCcaUVsB%2F46RdJaqIAVKvFZ%2BTzOOCKMG6GUEPR2Ymgu0Z727%2BuowelgIdXUJz9Gp%2BWeNoZSxZg%2Bv0dadZ%2F3fB%2FsOprTxdTl16cB72ng%2BdfWOnkHCR9iHVYpDzPQCA%2B7HERsidBHfo2jyCxaU7nIq6NCrBzENCYLO00QGhiry7q7%2B39QFGVHb6HSqVsnis009cTZNJ3mRv4cHWDG0pJ%2FiNu6B60ycwrocrMwyt23HuLRGd4zTcYjJKq%2FiWvzv848DoySVsnOOj9B6D83RabMzQgGRPiVDPnK1iMyWAvS2jpC20xPVuXhCIWed8bqb%2Bi0W5ArcFklYO0R7NqxlwYdGe6vFeRsWE6YnYGXeGpu1PO4r8ohIoE4zzMsTIW3OoueRpZIpW6N8mtGaCmAb2p8JeMNn3wskGOqUBHgY1Jv3pLVA5bsyLgFhuKMdF%2BSXLj11HEjovizf4Rrl8evMN6v7LOSP110NgbjXMFycUF9xPHCyPh0B48IEqD0TBAzWjXy1w4MCZKUhL%2F7iAzk%2BGABt1qLbYZJw8EInBBTnQRshOtuBSukR1GSGix69nwLR76DN1HcPio%2BfVMNxH0pIxickkq4WWa56Q7TJF1rU%2FV7HJoOhY8g3KyCiko9s3W1N%2B&X-Amz-Signature=958fcbce852c9d7edd179d36283a7d26fec8c38a48c1eb7d1a4dab278838c311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZQ5YVU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEEkoeTqRIapmRsTkTxxJQ6Ed5Vn7C7WHpcHPao9Is7ZAiEA%2BMXa5siYj5E%2BLqxEdTLavDF8xG0L5lB0xttCey%2F9UYoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLRSC9dE%2FqZd07k0sSrcA1CmJGnEzNQ8LJ76ANqh65xScSjd1IZm5VcZUhZOmK5v2RxTm%2BPvulLmnSmqzfzD5Cw0wL4M74mNKpVdcAceRYZ0jxOlYHIFQXFpX4H%2FwalmBZHH3QLZDGbtXw7IJe5dGxsmsrnXyASV06fYpZoS5W0gPxUR75ggvIxDMTPoeIhEec%2BhXdNixTnqOR%2B0ia1OjEpijBWgIOLQiPPGQiwLCBFigzlYGsKEheNJwM4HCcaUVsB%2F46RdJaqIAVKvFZ%2BTzOOCKMG6GUEPR2Ymgu0Z727%2BuowelgIdXUJz9Gp%2BWeNoZSxZg%2Bv0dadZ%2F3fB%2FsOprTxdTl16cB72ng%2BdfWOnkHCR9iHVYpDzPQCA%2B7HERsidBHfo2jyCxaU7nIq6NCrBzENCYLO00QGhiry7q7%2B39QFGVHb6HSqVsnis009cTZNJ3mRv4cHWDG0pJ%2FiNu6B60ycwrocrMwyt23HuLRGd4zTcYjJKq%2FiWvzv848DoySVsnOOj9B6D83RabMzQgGRPiVDPnK1iMyWAvS2jpC20xPVuXhCIWed8bqb%2Bi0W5ArcFklYO0R7NqxlwYdGe6vFeRsWE6YnYGXeGpu1PO4r8ohIoE4zzMsTIW3OoueRpZIpW6N8mtGaCmAb2p8JeMNn3wskGOqUBHgY1Jv3pLVA5bsyLgFhuKMdF%2BSXLj11HEjovizf4Rrl8evMN6v7LOSP110NgbjXMFycUF9xPHCyPh0B48IEqD0TBAzWjXy1w4MCZKUhL%2F7iAzk%2BGABt1qLbYZJw8EInBBTnQRshOtuBSukR1GSGix69nwLR76DN1HcPio%2BfVMNxH0pIxickkq4WWa56Q7TJF1rU%2FV7HJoOhY8g3KyCiko9s3W1N%2B&X-Amz-Signature=cef68ca8cc684de4dd9ffc07924e2a93d4c7fde15800ded942acc7cc814ab4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
