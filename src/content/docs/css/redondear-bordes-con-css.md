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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TL2PH5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGcaw7SX0hr%2FWz%2FNT7eWQQsDFsbovBSs%2BNhTzPN%2FZvDBAiB7TKuTsiJufFNAeWbG7cpYpa8y2LGxiSZzpvTptfcmYCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMQI0SDpfu8PMT3sxeKtwDC5TgCQS140zQRpv1FTXK9435BfDa9Jlp7umWuBow2redMYxptHGjk7NUGBF%2FSYIor8pnbIvMtJJZuzk15vUSe4eUXFYkaH%2FgsV3dbUIt%2F0KWZgobc1fhb8E4tsadQ7TvjlTuKZ8%2BAvfHBidEJ0kU6eDWLQyDwatFne9xNT18gzuv7gL85QMga2U0Nuu4ghAmB11GaZ9N%2F%2B%2F%2B8SsuF65HBPycM%2BXGwvg4lrT1Vay7tPQ2s0voZkQOtXcp6SZlrJm0ZrPzNMY%2FH%2BLuyQOXgB0ULLVCHXiGGvGob0vdBSs%2BwWm9DDtANHh2Pn1yc%2FTTl%2FqQaRKIHRA%2BTqCcqrynONe1wAirn%2Fk%2BoCR3j47ILBzZhEgetU0E3BpcH3NOtTbjFDm5J%2F81R4ASZqyzXi85OXlzCv8KRk3D%2BltSJFn6TeBe9M69i603RyExfzF7mvmkK1qilUQp%2Bs4sSbhXx0FWHsMOkhWCL5l8fhZmCxgq59MYz9Na3UK6%2FiKZnY%2Bi4cRb1y368LAmEBihOX1FAsV3gWniDmuqp1PtjVEOkPDkULoVi2IxsC3VqzWTdGzIji%2FSPv0%2BLEqSGOFTAaKX0svLh%2BOUMOo9n8WMNqIsfaEOwP38FqNdr%2BGQIcXhyMbhyqUwoqvFyQY6pgFQkB9TirxJLMIH1bNg1LNyWtvceix9ySrHorPphWzWhwNHiQX0Cd36ChI27ilLVQKF8yxTp1fRaJ1cThUKKf18uTyaxhf9qN3BDQQoTofeDRNrFpJU6nIEUdys%2BiyZLwi0d1dm9eKCLzaHbfyAQIv0DToV0015WDwAiJZSeocDfj4O8lkHUuRwKfwzLPaIpZvr%2FArrg379G%2BOM2UJYqqZzA4uIXtjJ&X-Amz-Signature=afc75cec006102e727b2208afab425f8b6dbf03d1524e14898e625af18b20867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TL2PH5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGcaw7SX0hr%2FWz%2FNT7eWQQsDFsbovBSs%2BNhTzPN%2FZvDBAiB7TKuTsiJufFNAeWbG7cpYpa8y2LGxiSZzpvTptfcmYCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMQI0SDpfu8PMT3sxeKtwDC5TgCQS140zQRpv1FTXK9435BfDa9Jlp7umWuBow2redMYxptHGjk7NUGBF%2FSYIor8pnbIvMtJJZuzk15vUSe4eUXFYkaH%2FgsV3dbUIt%2F0KWZgobc1fhb8E4tsadQ7TvjlTuKZ8%2BAvfHBidEJ0kU6eDWLQyDwatFne9xNT18gzuv7gL85QMga2U0Nuu4ghAmB11GaZ9N%2F%2B%2F%2B8SsuF65HBPycM%2BXGwvg4lrT1Vay7tPQ2s0voZkQOtXcp6SZlrJm0ZrPzNMY%2FH%2BLuyQOXgB0ULLVCHXiGGvGob0vdBSs%2BwWm9DDtANHh2Pn1yc%2FTTl%2FqQaRKIHRA%2BTqCcqrynONe1wAirn%2Fk%2BoCR3j47ILBzZhEgetU0E3BpcH3NOtTbjFDm5J%2F81R4ASZqyzXi85OXlzCv8KRk3D%2BltSJFn6TeBe9M69i603RyExfzF7mvmkK1qilUQp%2Bs4sSbhXx0FWHsMOkhWCL5l8fhZmCxgq59MYz9Na3UK6%2FiKZnY%2Bi4cRb1y368LAmEBihOX1FAsV3gWniDmuqp1PtjVEOkPDkULoVi2IxsC3VqzWTdGzIji%2FSPv0%2BLEqSGOFTAaKX0svLh%2BOUMOo9n8WMNqIsfaEOwP38FqNdr%2BGQIcXhyMbhyqUwoqvFyQY6pgFQkB9TirxJLMIH1bNg1LNyWtvceix9ySrHorPphWzWhwNHiQX0Cd36ChI27ilLVQKF8yxTp1fRaJ1cThUKKf18uTyaxhf9qN3BDQQoTofeDRNrFpJU6nIEUdys%2BiyZLwi0d1dm9eKCLzaHbfyAQIv0DToV0015WDwAiJZSeocDfj4O8lkHUuRwKfwzLPaIpZvr%2FArrg379G%2BOM2UJYqqZzA4uIXtjJ&X-Amz-Signature=a893c373cc218416630fa628c25462b5fd129fea231dcc71fa6d7a5bac360289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
