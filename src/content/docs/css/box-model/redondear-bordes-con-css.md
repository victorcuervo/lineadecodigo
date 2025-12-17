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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVEMUEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCd9k3VEnG3KF1%2BG8xA4oTuP437QNsxLC8r1oRvo5oDQIgCOuKC1xV7e4DnZhOUKlbbeMYMMUHw9%2FwZ8a66EVGFnkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDG9a7TpPb45orrJyWircAyIp0jLxsSwMHBADi1QZYz3Bd6tOxh5VueRMQFnu4vkyfO3KJ4yMjqdDbmC0lO%2FHLvNArMq%2BSAyI4QdBHHkaPFkHbX%2BRXjuvNHmvK5cCUJd9kLbbGzw7BrQHNAegmCWsny0DMXoJr5h9FrJVwqFNH0jCMzV8uwDJS8BQvCcCr5xKgDRcYtjmmW%2Bek0pZ26kxTIQwgxUmSIFV4N9enPaWDOfOkfxowjtg4rPPjyMnKn5QcjhlWagxENNUMXTrTebZtxF%2BZrhrdpGAQI0pxXGKbJupz8SZY%2B1Tn2lEFaPAFkLGBIUlhbn0RBzbaQ%2F9TSr0v5s%2BC87hmBe%2BwNSEy9Av2vbct7Tz04vLRZnGXXVUCOV4o0BODLk8Hw6EdEKRODg9z9LT59guRvGqc4bkzrA9HiihV5D0NASG6SecaHHHCje%2BiIsCFbKo%2FKMTGYYSdXrpc1wIyQc%2FJdXFme0gHoalvJmAQCJM8UAYegrkvjAnU5ao3%2Bs5H9Hat%2FdL9VxIgSEzQ8TsH0vrUPlnfYHn4%2FcbyUjmm88rZIBTfXNQoohnbDwW3juyF3oNvqAdBYdyCa%2BBpXB0KRyEFP8rwMYegP2Pv6rMbPwMa430E6FyCCpCsd30gAe1zWVCFtlMEC6LMIPqiMoGOqUBNtLg3c%2FKabnTy3bM0%2BixYUFS8pu47ufDMehDU%2FlPKHev31%2FNH4BxF5ngUPilxW%2BHMFHw4uVv%2BF9ZZwosi6QdXaLic04nk06HgUPw4Dp2zTcp5%2FcRELJFSsl%2BjZKwfHAL9RxXhCIodHTjWUXKoK8yN8jfDepB5y5pLeHMEEr8KyJ%2B2OIzMQ8O%2Bm7l93535SN6cITk%2Fo4etHT0FNXTpBp6iqDPwGiP&X-Amz-Signature=e0729e9558819cbee5476d546b7c5efc10c9b06d6ced7ad76870d3f26b6d34b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVEMUEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCd9k3VEnG3KF1%2BG8xA4oTuP437QNsxLC8r1oRvo5oDQIgCOuKC1xV7e4DnZhOUKlbbeMYMMUHw9%2FwZ8a66EVGFnkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDG9a7TpPb45orrJyWircAyIp0jLxsSwMHBADi1QZYz3Bd6tOxh5VueRMQFnu4vkyfO3KJ4yMjqdDbmC0lO%2FHLvNArMq%2BSAyI4QdBHHkaPFkHbX%2BRXjuvNHmvK5cCUJd9kLbbGzw7BrQHNAegmCWsny0DMXoJr5h9FrJVwqFNH0jCMzV8uwDJS8BQvCcCr5xKgDRcYtjmmW%2Bek0pZ26kxTIQwgxUmSIFV4N9enPaWDOfOkfxowjtg4rPPjyMnKn5QcjhlWagxENNUMXTrTebZtxF%2BZrhrdpGAQI0pxXGKbJupz8SZY%2B1Tn2lEFaPAFkLGBIUlhbn0RBzbaQ%2F9TSr0v5s%2BC87hmBe%2BwNSEy9Av2vbct7Tz04vLRZnGXXVUCOV4o0BODLk8Hw6EdEKRODg9z9LT59guRvGqc4bkzrA9HiihV5D0NASG6SecaHHHCje%2BiIsCFbKo%2FKMTGYYSdXrpc1wIyQc%2FJdXFme0gHoalvJmAQCJM8UAYegrkvjAnU5ao3%2Bs5H9Hat%2FdL9VxIgSEzQ8TsH0vrUPlnfYHn4%2FcbyUjmm88rZIBTfXNQoohnbDwW3juyF3oNvqAdBYdyCa%2BBpXB0KRyEFP8rwMYegP2Pv6rMbPwMa430E6FyCCpCsd30gAe1zWVCFtlMEC6LMIPqiMoGOqUBNtLg3c%2FKabnTy3bM0%2BixYUFS8pu47ufDMehDU%2FlPKHev31%2FNH4BxF5ngUPilxW%2BHMFHw4uVv%2BF9ZZwosi6QdXaLic04nk06HgUPw4Dp2zTcp5%2FcRELJFSsl%2BjZKwfHAL9RxXhCIodHTjWUXKoK8yN8jfDepB5y5pLeHMEEr8KyJ%2B2OIzMQ8O%2Bm7l93535SN6cITk%2Fo4etHT0FNXTpBp6iqDPwGiP&X-Amz-Signature=751c132448a278f920d1ad09cfe86431e85ff1d5e16eedba334e8862dc5b6121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
