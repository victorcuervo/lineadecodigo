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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPO7RIJW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa7U0FEMaMTzr5aVm39ZF5doK0jvJdRynobqFUHYylpAiEAoe9n1hzm4gQTWTCxxbqP%2B8HG2gkA6R4fjjbVYwxQJD4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPDAQrdgCDVxiqcqCCrcAwvr3D9B%2BYCZ2Ftz9x6rI8c0%2FHZJ17kLc2HMwPWbAJWsTlXKuLOreUC5XpyU5XUby5TBiqO11jkImkwNLi6In9UQ8NNiZS6x4dwAYmlm4FSVHNCR9mWrO7qFZuvy4O4TF%2F840LXAa6nk6WUf7Y0ZhwLMiDo2c8h24zPQ%2B3Wc5RCeHYSgAeoM714kkfqNwG8jnef6jJS4QpetweR5Cm7L7Gf0NT%2BpFJ1Syyoklfggg%2B7clmN%2F4gTctQRorY79GMU7NwyaIF7DHVO%2F5Qyu3ZgK2tbU5kcGslCEF0mA%2FUrSN0suuFtWgsY6i0l8TgTPq2tKm4FRq2yRHZVbVv8f4%2FUoKynht2Viln%2FIQvsVrvbGHajAPZBdwhvR88daw%2FCVoNWkxPSnNfZwZT4p9Z4niLf2i4Q44xz9NgEKKR60%2B9rSKy%2BI5K%2Fir%2Flnsvvhbswhp2zgkOFJzAtfqXPxDaeVNj3jh9RNuy8ZnSktmqthWKjnprLd5SQ9lvjnkdz6ejv18LVD%2FgRt%2BwHcUDSI5kM7ELSmmR3KYwexoYj9hkDgc%2Fp17DxdZbWFySVnafcHcSM8cnMN1qzDHMiY4RuSvwHz%2BHNh4S1mvcn3kKHc2ib5SMgVcQuuaDHETTgMME5dHezPMIPF0ckGOqUBTiVHwPn4eNhRm%2FwVPpPVe1Vz5X1FZoqozJuEurQQMtR928SbEe5jZAxm1gYihsX3WHw7ZonQLZCzi8jrXRCVbrkU%2F346faAbNRIMYi%2BQucTTqNJN2fBPp5GjGMH%2B98ridqoeSk%2Bpgtsqp0nO2ZYRfF8SklKZqRO3pLxrskMagORqPSntcCsv%2ByxBitRd13j7qrAVPPJVhMQyx4%2FN%2Fa2GIH9XBxPf&X-Amz-Signature=a080c1426576982b0093a80be174cd5a5639ec7885ae29a858190f2cf53ddb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPO7RIJW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa7U0FEMaMTzr5aVm39ZF5doK0jvJdRynobqFUHYylpAiEAoe9n1hzm4gQTWTCxxbqP%2B8HG2gkA6R4fjjbVYwxQJD4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPDAQrdgCDVxiqcqCCrcAwvr3D9B%2BYCZ2Ftz9x6rI8c0%2FHZJ17kLc2HMwPWbAJWsTlXKuLOreUC5XpyU5XUby5TBiqO11jkImkwNLi6In9UQ8NNiZS6x4dwAYmlm4FSVHNCR9mWrO7qFZuvy4O4TF%2F840LXAa6nk6WUf7Y0ZhwLMiDo2c8h24zPQ%2B3Wc5RCeHYSgAeoM714kkfqNwG8jnef6jJS4QpetweR5Cm7L7Gf0NT%2BpFJ1Syyoklfggg%2B7clmN%2F4gTctQRorY79GMU7NwyaIF7DHVO%2F5Qyu3ZgK2tbU5kcGslCEF0mA%2FUrSN0suuFtWgsY6i0l8TgTPq2tKm4FRq2yRHZVbVv8f4%2FUoKynht2Viln%2FIQvsVrvbGHajAPZBdwhvR88daw%2FCVoNWkxPSnNfZwZT4p9Z4niLf2i4Q44xz9NgEKKR60%2B9rSKy%2BI5K%2Fir%2Flnsvvhbswhp2zgkOFJzAtfqXPxDaeVNj3jh9RNuy8ZnSktmqthWKjnprLd5SQ9lvjnkdz6ejv18LVD%2FgRt%2BwHcUDSI5kM7ELSmmR3KYwexoYj9hkDgc%2Fp17DxdZbWFySVnafcHcSM8cnMN1qzDHMiY4RuSvwHz%2BHNh4S1mvcn3kKHc2ib5SMgVcQuuaDHETTgMME5dHezPMIPF0ckGOqUBTiVHwPn4eNhRm%2FwVPpPVe1Vz5X1FZoqozJuEurQQMtR928SbEe5jZAxm1gYihsX3WHw7ZonQLZCzi8jrXRCVbrkU%2F346faAbNRIMYi%2BQucTTqNJN2fBPp5GjGMH%2B98ridqoeSk%2Bpgtsqp0nO2ZYRfF8SklKZqRO3pLxrskMagORqPSntcCsv%2ByxBitRd13j7qrAVPPJVhMQyx4%2FN%2Fa2GIH9XBxPf&X-Amz-Signature=3966e08d141aae92b41b6ec52de5e4c0b86126cf0683eedde41fb1509bc7c606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
