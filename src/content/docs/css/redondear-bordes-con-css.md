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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7NN2HE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWjT5TjVzBnIHCug6N%2BgN53Uop0qY3mB7YKZwVoH4urAiB5mF3v7iui7VoSNqzkjeyaMkHidSVHAgHOVgMgEC8DkyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbp%2B0V0M%2BoQuMGboKtwDC2j8SV32F%2Bcr%2FBVrlbohFrUCe35lIjFfqxhowcRi7dUYGxMFXX2oUj%2B64Togc4GX4lXv4NEd%2F8MhcCRIo8xzXvIlA7oMrxHtHiWVMp40T4mXkUr997EizdOuwhZ679BbpWZbwyrJvGvl%2Bej6t9w0jCSILNypNwhu1dJ9%2FEVwuDElfb6rocB5NLNnZJOIP1h4X5cd4N6zpsLEVTyOI6uSigDZDOWpvoMTbrHHywT5O6Z0vZ7Z0C5tbUTjJFDnXQaNTE5PO8VJHzQ6GY23NwCppWUDHnB%2FJeggkWReRO5KI18U%2Bz9hparXAvjgNbwn5ptp3RxBiu1Nx%2FuL7%2Fi6QS3y0VeCTdAhmxoY0SJs3sdZjbDsny3xH8rA65YPRucGjq6XGn7vLJw5MICzHj9kD5l2raAyf16lD1zgpu0EVXxZer33m%2BQBSMGpVJUK6p80SlaC0rTo7o2IUoiUdT1NAvG4HqXvRYxo7thrtNwuEtP81C%2BVQNh1AKGFt5%2Fotfv5qvte8hQK1sN9JBQ6DeV5fl%2Bl59u9922aMs%2Fwn%2FwiNTSHG851BWuUNa3ZNG8AF%2B7UEL24%2BE9EXRVgYU%2FqkhDW2gXZUjCF25SA9Z1vvPlk7LCMbnwOmVB8umRZ9uuv%2BbswlZrVyQY6pgHnct5puyBtGg%2BeDH0mLI1PM0%2BUjoh9zWjVX6BSx7nzXeB8ob7IluyzZY6UHcavbWDpacd52BDMS08%2FgvBtUYPDfEHmTIW7%2F7CWqhOr1NJEV0V4ncuB1Ww8IEZ3EKdrEqtcDHGCCC89noOhyAmfHbSSnqgIvbDULlbCi2Z%2BGUgHkwTMfrjh4ZxnEQo4uNI9FHteYSdIVeqvQye0cJnbAf%2BtviNg9wJQ&X-Amz-Signature=7cb9ed89084543548b92b82bf5ab45b78ee77f889c704b5b220fe7e8f0ff1827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7NN2HE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWjT5TjVzBnIHCug6N%2BgN53Uop0qY3mB7YKZwVoH4urAiB5mF3v7iui7VoSNqzkjeyaMkHidSVHAgHOVgMgEC8DkyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbp%2B0V0M%2BoQuMGboKtwDC2j8SV32F%2Bcr%2FBVrlbohFrUCe35lIjFfqxhowcRi7dUYGxMFXX2oUj%2B64Togc4GX4lXv4NEd%2F8MhcCRIo8xzXvIlA7oMrxHtHiWVMp40T4mXkUr997EizdOuwhZ679BbpWZbwyrJvGvl%2Bej6t9w0jCSILNypNwhu1dJ9%2FEVwuDElfb6rocB5NLNnZJOIP1h4X5cd4N6zpsLEVTyOI6uSigDZDOWpvoMTbrHHywT5O6Z0vZ7Z0C5tbUTjJFDnXQaNTE5PO8VJHzQ6GY23NwCppWUDHnB%2FJeggkWReRO5KI18U%2Bz9hparXAvjgNbwn5ptp3RxBiu1Nx%2FuL7%2Fi6QS3y0VeCTdAhmxoY0SJs3sdZjbDsny3xH8rA65YPRucGjq6XGn7vLJw5MICzHj9kD5l2raAyf16lD1zgpu0EVXxZer33m%2BQBSMGpVJUK6p80SlaC0rTo7o2IUoiUdT1NAvG4HqXvRYxo7thrtNwuEtP81C%2BVQNh1AKGFt5%2Fotfv5qvte8hQK1sN9JBQ6DeV5fl%2Bl59u9922aMs%2Fwn%2FwiNTSHG851BWuUNa3ZNG8AF%2B7UEL24%2BE9EXRVgYU%2FqkhDW2gXZUjCF25SA9Z1vvPlk7LCMbnwOmVB8umRZ9uuv%2BbswlZrVyQY6pgHnct5puyBtGg%2BeDH0mLI1PM0%2BUjoh9zWjVX6BSx7nzXeB8ob7IluyzZY6UHcavbWDpacd52BDMS08%2FgvBtUYPDfEHmTIW7%2F7CWqhOr1NJEV0V4ncuB1Ww8IEZ3EKdrEqtcDHGCCC89noOhyAmfHbSSnqgIvbDULlbCi2Z%2BGUgHkwTMfrjh4ZxnEQo4uNI9FHteYSdIVeqvQye0cJnbAf%2BtviNg9wJQ&X-Amz-Signature=8207271697fb2dc83df26806d11c810a54b5b30103d972e00d25c6f778754242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
