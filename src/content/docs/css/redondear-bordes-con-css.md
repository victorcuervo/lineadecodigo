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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU3IM7SZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2G9KgFrE610T0sokVKwshCvtfx7kythnT7bhwJpMBdwIgT4ci6%2FXqBmxJEMQY3bdftuGDgfup%2F9OIp%2B0sAwkSciMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ4zrywHLJzfjHh9lircAywh44IFzMYBx0jqX8aj0Xg0MIG%2BZuv2bQgJt9RpqHCr0Tmz%2Fbpv8NmkJTkENaNOPJLhqQg2dYpuzXeBGXIg7e9q7FuzdtY9pX36xSyObh2Fjt2AM1hFOWO%2FEn2sDWc20i2hXFKSomYnzvi%2FfVbQ6paE8ySSbuV5SIZCulivNOCXVxn4iS3mBykdcZtBwUiAIS49tw9%2BYtsxB2TtuL8NLxLfEAtFwsJc7hfINdvzI2HbKCx1JRYJ33A2bDB0i5s2EqcJkiK%2B7FM2SCxyDNutuvvN8ZZS8cT2D0o0iW%2BS%2Bdp01efYrBosWjw9%2Fb5k7J7Yq18QnfO8zMfRcC8F%2Bm2E23w5DeXk0Sv%2BYEklDxPFEx%2FarL8Wpu9CjKj1Bt%2F%2FOng11x9yR558ASucIv599HWjyiIDFn2Oa0AsBSrTcg%2FCIzTssV%2BLI6%2FtxmsOP34Ztqmvr8tirca%2BS17H81ri9vGZvJ5QLgG61RlPpOy7InMYQS2vW%2BNi1YHA%2Bca9PZPcQ6oUSXa8e0xaQypM2y3LXmdyv5eVP8v8u%2Bo2XvUByKGEfIucKvgfiuoUqXZtE%2BTkT3QyReCzUw%2F9aepnbHgnsl3WqKzcn6ivsdOPqZbvs0j6e%2FkWMZn14rtCiJhyGGyBMInDzskGOqUBF2KASya3GZU%2FJ6K7A83MP6jIq75ve%2F%2BUT%2ByLv5yZDGp5K%2F1vMKckAufi3UQXQG73UqEY39YYWJToAPuNc41MCMcLBq9hgrgjXCLvYrz2F1dDH%2FGPodP6akFAlaXBiI21D6NF6q0IxOtADJ75pKtNWVOhqxxp2%2BXdj%2BXvVTTo6MNliR9q2vA8CHoqei62lb9nVVOLF6%2BXZtpbol0hQcZTkXN%2BEUDZ&X-Amz-Signature=777ab09598c15f55fffc20bb0751951880357fdedc50a8fdfd0a725f907aff9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU3IM7SZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2G9KgFrE610T0sokVKwshCvtfx7kythnT7bhwJpMBdwIgT4ci6%2FXqBmxJEMQY3bdftuGDgfup%2F9OIp%2B0sAwkSciMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ4zrywHLJzfjHh9lircAywh44IFzMYBx0jqX8aj0Xg0MIG%2BZuv2bQgJt9RpqHCr0Tmz%2Fbpv8NmkJTkENaNOPJLhqQg2dYpuzXeBGXIg7e9q7FuzdtY9pX36xSyObh2Fjt2AM1hFOWO%2FEn2sDWc20i2hXFKSomYnzvi%2FfVbQ6paE8ySSbuV5SIZCulivNOCXVxn4iS3mBykdcZtBwUiAIS49tw9%2BYtsxB2TtuL8NLxLfEAtFwsJc7hfINdvzI2HbKCx1JRYJ33A2bDB0i5s2EqcJkiK%2B7FM2SCxyDNutuvvN8ZZS8cT2D0o0iW%2BS%2Bdp01efYrBosWjw9%2Fb5k7J7Yq18QnfO8zMfRcC8F%2Bm2E23w5DeXk0Sv%2BYEklDxPFEx%2FarL8Wpu9CjKj1Bt%2F%2FOng11x9yR558ASucIv599HWjyiIDFn2Oa0AsBSrTcg%2FCIzTssV%2BLI6%2FtxmsOP34Ztqmvr8tirca%2BS17H81ri9vGZvJ5QLgG61RlPpOy7InMYQS2vW%2BNi1YHA%2Bca9PZPcQ6oUSXa8e0xaQypM2y3LXmdyv5eVP8v8u%2Bo2XvUByKGEfIucKvgfiuoUqXZtE%2BTkT3QyReCzUw%2F9aepnbHgnsl3WqKzcn6ivsdOPqZbvs0j6e%2FkWMZn14rtCiJhyGGyBMInDzskGOqUBF2KASya3GZU%2FJ6K7A83MP6jIq75ve%2F%2BUT%2ByLv5yZDGp5K%2F1vMKckAufi3UQXQG73UqEY39YYWJToAPuNc41MCMcLBq9hgrgjXCLvYrz2F1dDH%2FGPodP6akFAlaXBiI21D6NF6q0IxOtADJ75pKtNWVOhqxxp2%2BXdj%2BXvVTTo6MNliR9q2vA8CHoqei62lb9nVVOLF6%2BXZtpbol0hQcZTkXN%2BEUDZ&X-Amz-Signature=3b9f975195c99c7e5723e3f619f6fac750498837e503c150e7983a46aefa67f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
