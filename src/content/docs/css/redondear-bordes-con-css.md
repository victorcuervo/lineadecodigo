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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KSU7BVN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcibdNW8KgRYXRd8csY283PNsmk0nHUccMUxVYWPItUQIgEFZWDpx7tXBAvJC53FI2KVfC%2FDMHNmOHfwCt68G2afcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6E7whgebsSgxTy1CrcA2uaY2cb6fKt2hXbbBzrkD8cpWZYeqlHEVLo4fc1UASShzYfIYOeh4dOO%2FIIuLVMLvgjJgY0xd8Y4zMVcCnWR58aqdlVIhlW6mKniA%2BKtJiLbgrMZ%2F1G2Pq668a1ZHym3tkFs8Pa4VjHLjLqGbkfVwsImYCbbiCmD80P7CH9uO%2FhgF7c3YmO2RxWGvbzzKlgRQWeoPXn8g1alaF6kiWR9Tw5S%2B3SQISB08eIKWAEkJv%2FF4BtARfOffrQWHoQ1wK74DR74jWCFYPFHHbiBGw9xdWrNv%2FVFxo33ADR0%2BPBlFxR7PasCWCtjIsJLAF5waoi%2BTljar6w%2FHIRayhZWtcl3RfTm5D0EfigHvMa7x%2FrE8NxDS3soJwYkz%2BUgiNgdli5K43d3L304BcaWUeUvpERRhYfNIexBz5QbSd9wq0YKS1AXOqC1Kf4dqEYEMaEwjTkZ2EgujMY0t1ihkAcbMzjnzYnIxha5nyvSQGaT1r7qmjZQpPZhKhJQ3XReTNQVnukXqYx4CSWjHwqhmZPqFRE44MJuGzDcGryLoFMPx20x9BZEf4Xm7dUKi%2F55oobRG3dzT6aQzSrbh5vrwOQzJIRSj1X6JdeRHseUmJ6mX6x2Tf%2BIWZzV5XMi1piLigtMPG61skGOqUBLk8NRrK6PjOICZBivzNIUy8YgfuMZtGkHbFTFChiZ5uW5Zc6hsh2ZQRQgp46Vw%2B9jn1EIzFYnhQnJh8rFUA0bV7xjpYGK0DoVYvv3A7%2Fej1SAWlb0JQbHrIY3Ym0K0xd5xt9ev8JBH8dEl%2FPanXwBu7gxOE1tym%2FNBhrzEotUjzAI4ByaVk8JOKbWXj1X5ZkPORh5lCWYb%2F1Pf9uLXBdwEFjFev6&X-Amz-Signature=8daabd9f54daa71a8653f6c4aad95c05eea54cf0402892f6be8106fc32cd6f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KSU7BVN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcibdNW8KgRYXRd8csY283PNsmk0nHUccMUxVYWPItUQIgEFZWDpx7tXBAvJC53FI2KVfC%2FDMHNmOHfwCt68G2afcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6E7whgebsSgxTy1CrcA2uaY2cb6fKt2hXbbBzrkD8cpWZYeqlHEVLo4fc1UASShzYfIYOeh4dOO%2FIIuLVMLvgjJgY0xd8Y4zMVcCnWR58aqdlVIhlW6mKniA%2BKtJiLbgrMZ%2F1G2Pq668a1ZHym3tkFs8Pa4VjHLjLqGbkfVwsImYCbbiCmD80P7CH9uO%2FhgF7c3YmO2RxWGvbzzKlgRQWeoPXn8g1alaF6kiWR9Tw5S%2B3SQISB08eIKWAEkJv%2FF4BtARfOffrQWHoQ1wK74DR74jWCFYPFHHbiBGw9xdWrNv%2FVFxo33ADR0%2BPBlFxR7PasCWCtjIsJLAF5waoi%2BTljar6w%2FHIRayhZWtcl3RfTm5D0EfigHvMa7x%2FrE8NxDS3soJwYkz%2BUgiNgdli5K43d3L304BcaWUeUvpERRhYfNIexBz5QbSd9wq0YKS1AXOqC1Kf4dqEYEMaEwjTkZ2EgujMY0t1ihkAcbMzjnzYnIxha5nyvSQGaT1r7qmjZQpPZhKhJQ3XReTNQVnukXqYx4CSWjHwqhmZPqFRE44MJuGzDcGryLoFMPx20x9BZEf4Xm7dUKi%2F55oobRG3dzT6aQzSrbh5vrwOQzJIRSj1X6JdeRHseUmJ6mX6x2Tf%2BIWZzV5XMi1piLigtMPG61skGOqUBLk8NRrK6PjOICZBivzNIUy8YgfuMZtGkHbFTFChiZ5uW5Zc6hsh2ZQRQgp46Vw%2B9jn1EIzFYnhQnJh8rFUA0bV7xjpYGK0DoVYvv3A7%2Fej1SAWlb0JQbHrIY3Ym0K0xd5xt9ev8JBH8dEl%2FPanXwBu7gxOE1tym%2FNBhrzEotUjzAI4ByaVk8JOKbWXj1X5ZkPORh5lCWYb%2F1Pf9uLXBdwEFjFev6&X-Amz-Signature=168edafa1afa10be0fa154c29e97f591dc80e7ab354b52403967735216386b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
