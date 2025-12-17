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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FASYCX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2d2iTz4f1OKz4iSBU%2FHmWHg7w6BNFey2PV68IIszj4QIhANs2SvlJP43yvI360LlrtfhoO5dtkI9p5RcSjwyhv4%2BIKv8DCHMQABoMNjM3NDIzMTgzODA1Igx5FwZU2G1GN6ePMLQq3APDIWCjgyKJ0hKwIhB7XJkjf36vzipSC3kXTf7F%2Fzn5QlQbSMFt%2BfJNGEKavDFKuW7cOQNzpi69PXn6txYCiWEI6fBFnMAvFPHsBinuzOHyfqqGviud4aOhvrw8R2n26kR%2FLGm3veDhGfUZFUT11hRE6wwPGnqZlHbhthprvFpW8Jn7AB35aVQobP1GvHSm6QfEDuUd3McjYs%2FGhQT17e06WpNcoXUDNG2mTlK4GhmI7k3b4Iz6ghWKR0dKT9eIXc5o84R%2B7tW14ZvzMwnrhH4vTg9GqFe6M9GwSYCWxS3LkLjDa%2B82wo5MXzqy2sFHntvW2Hm4mu9nJ8y3giIt6%2B9RtwVeUGwpcHQyZj4B4xJlKeUqUPg0P1htJU5XxbctTvJGCowmoaElpIIsWGKJxiTIqot2Zu0n84KZR%2BCIh9TJpMlgqhOcHKCzl5LLokcTExd%2BI76uX7oycM6IwfIfuIfNsV5iW5ZVhOHL7gpwwtZE20nqU8UMr4BSuosH7gDyQ0m6i5hY2607rKs33eMXC9IxI5DWzOwnjdXaw48lgZxUHvj0nV3BbKDvbXjp9gHRcxBOpZprahYQx57DVy%2FXcFloNeJhD8Jv%2BkEQ9T67NCxHUnM4VEjlVcAC1JIjxjCsmIjKBjqkAdIt7kSaAM0uPGvbUd059FVWJMXq5N1bvADlku%2FpA7GU8JMeuhN6OdUH%2BwJurXx%2BPnWqNXuVnQSDRsx%2BXK8zrk3fTVMFN726uqsbOx%2BR9%2BwNwQTn8dQ3gRg18IsyE7lYZU7WLjJd%2FmH4zXXdQIchBMy0x0mkmsEO9sr3ZtiGIACxbofxuRXKm%2FvT7jyUJXR60Itm5NsAF6JPJrar0MwutSfsJPYZ&X-Amz-Signature=e571a2f5f47e6873d3ce548f5b70e4029092a5be67beb7af3e8d72766bcd6526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FASYCX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2d2iTz4f1OKz4iSBU%2FHmWHg7w6BNFey2PV68IIszj4QIhANs2SvlJP43yvI360LlrtfhoO5dtkI9p5RcSjwyhv4%2BIKv8DCHMQABoMNjM3NDIzMTgzODA1Igx5FwZU2G1GN6ePMLQq3APDIWCjgyKJ0hKwIhB7XJkjf36vzipSC3kXTf7F%2Fzn5QlQbSMFt%2BfJNGEKavDFKuW7cOQNzpi69PXn6txYCiWEI6fBFnMAvFPHsBinuzOHyfqqGviud4aOhvrw8R2n26kR%2FLGm3veDhGfUZFUT11hRE6wwPGnqZlHbhthprvFpW8Jn7AB35aVQobP1GvHSm6QfEDuUd3McjYs%2FGhQT17e06WpNcoXUDNG2mTlK4GhmI7k3b4Iz6ghWKR0dKT9eIXc5o84R%2B7tW14ZvzMwnrhH4vTg9GqFe6M9GwSYCWxS3LkLjDa%2B82wo5MXzqy2sFHntvW2Hm4mu9nJ8y3giIt6%2B9RtwVeUGwpcHQyZj4B4xJlKeUqUPg0P1htJU5XxbctTvJGCowmoaElpIIsWGKJxiTIqot2Zu0n84KZR%2BCIh9TJpMlgqhOcHKCzl5LLokcTExd%2BI76uX7oycM6IwfIfuIfNsV5iW5ZVhOHL7gpwwtZE20nqU8UMr4BSuosH7gDyQ0m6i5hY2607rKs33eMXC9IxI5DWzOwnjdXaw48lgZxUHvj0nV3BbKDvbXjp9gHRcxBOpZprahYQx57DVy%2FXcFloNeJhD8Jv%2BkEQ9T67NCxHUnM4VEjlVcAC1JIjxjCsmIjKBjqkAdIt7kSaAM0uPGvbUd059FVWJMXq5N1bvADlku%2FpA7GU8JMeuhN6OdUH%2BwJurXx%2BPnWqNXuVnQSDRsx%2BXK8zrk3fTVMFN726uqsbOx%2BR9%2BwNwQTn8dQ3gRg18IsyE7lYZU7WLjJd%2FmH4zXXdQIchBMy0x0mkmsEO9sr3ZtiGIACxbofxuRXKm%2FvT7jyUJXR60Itm5NsAF6JPJrar0MwutSfsJPYZ&X-Amz-Signature=11890a7b606c04a07b32f3515d4749a8a4673295d69a53ab88a5365134fcb72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
