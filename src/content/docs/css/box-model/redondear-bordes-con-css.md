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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAEKD2AN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7HZP6r7WSE5xCu6EEQSvcOHBPY5ps%2BZ%2B7pnBOwrw2KAiEA5wFvaBmXpqWTuHVlQqIG%2FPi3z8jyLtCXAsh2P8NP6ZUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMa1rfjjTtrS2ROECrcA%2BTvaij4evjAvpQYmaYJfOSZnXIQxiE3GdwEk6zUQXmswSqkfX72lxnfjornCizZFoEiEojL1wJrxm3P%2B2zOO7KevXNGq%2BVCja1BVyQ3cXkiH7MM%2Fg9%2BCbnvGqXL4%2FNRiCNh8hZE2tETP%2BBPgFHxUn2d5rkabFcVamkEpM05S9CmE4H%2BllvWe7tOANWfdXXpwCpP3PJfR3djhyhGYC8qJcz3Cl1e9FVDb7xMaf0Mxaf5zA9lci3Dccnnke%2FR5%2FKyyWoS8FxqQbuXBDHUsheMOxXY4MQQrT2A6yqy0I6KIW%2BS5BicCm%2FQnJqHwK%2By6zV98kxrPHFuGi%2BEXHPKEo%2FpONmu3IKV9a7CChO8dSa6ggTxGFlMrLxZh2Z3q7%2BygQFyHuz00bheeIhZXywd54szavcwjCqp8Ira%2FcInGMpzvwjSuyC7QipSS2g%2B04eW9yjWig1%2FmqxpW0qOiTpcrXZeQ3mH2oa2OiBaYIrfWVl1YOnAzwhwfwFBa5lvMIIuo3Al8U97%2FYSMPPyRMA40%2BlP58rJ%2BzrP5T7RSlla%2B78gDpU4eTeapqxGUQpG%2FqEohgBgPdpAfyboGUIdGv88ZjwQ7Q3IlFfdYJz23kUhBvhIdRv6eDeQheejIgtXUnKLBMLiujMoGOqUBFei0K3Y2DYOscxzFCzbXAcRJ8EdK%2F1b7QiZHWsN2IF68QOoVq7EreYtpyO0%2FSfw2a%2FfPthL9kGqH24pfkL6dmVGv1VTLWuzubXt%2FPRfVvvOYrEWeOBhqV1gg510OqUlVyFgLNkAmGCxjTWDCPASGk8anfRGbTenSYYI7kDqmhbAYeOHcPzStuzHAikPU2d0UUWEXGn%2B3WVKMuds9uUw5EhHyD%2B2A&X-Amz-Signature=cd6718df37bfb4b649e14ee4f506c3f4df3b2813023a0aa39570d223a6c324a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAEKD2AN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7HZP6r7WSE5xCu6EEQSvcOHBPY5ps%2BZ%2B7pnBOwrw2KAiEA5wFvaBmXpqWTuHVlQqIG%2FPi3z8jyLtCXAsh2P8NP6ZUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMa1rfjjTtrS2ROECrcA%2BTvaij4evjAvpQYmaYJfOSZnXIQxiE3GdwEk6zUQXmswSqkfX72lxnfjornCizZFoEiEojL1wJrxm3P%2B2zOO7KevXNGq%2BVCja1BVyQ3cXkiH7MM%2Fg9%2BCbnvGqXL4%2FNRiCNh8hZE2tETP%2BBPgFHxUn2d5rkabFcVamkEpM05S9CmE4H%2BllvWe7tOANWfdXXpwCpP3PJfR3djhyhGYC8qJcz3Cl1e9FVDb7xMaf0Mxaf5zA9lci3Dccnnke%2FR5%2FKyyWoS8FxqQbuXBDHUsheMOxXY4MQQrT2A6yqy0I6KIW%2BS5BicCm%2FQnJqHwK%2By6zV98kxrPHFuGi%2BEXHPKEo%2FpONmu3IKV9a7CChO8dSa6ggTxGFlMrLxZh2Z3q7%2BygQFyHuz00bheeIhZXywd54szavcwjCqp8Ira%2FcInGMpzvwjSuyC7QipSS2g%2B04eW9yjWig1%2FmqxpW0qOiTpcrXZeQ3mH2oa2OiBaYIrfWVl1YOnAzwhwfwFBa5lvMIIuo3Al8U97%2FYSMPPyRMA40%2BlP58rJ%2BzrP5T7RSlla%2B78gDpU4eTeapqxGUQpG%2FqEohgBgPdpAfyboGUIdGv88ZjwQ7Q3IlFfdYJz23kUhBvhIdRv6eDeQheejIgtXUnKLBMLiujMoGOqUBFei0K3Y2DYOscxzFCzbXAcRJ8EdK%2F1b7QiZHWsN2IF68QOoVq7EreYtpyO0%2FSfw2a%2FfPthL9kGqH24pfkL6dmVGv1VTLWuzubXt%2FPRfVvvOYrEWeOBhqV1gg510OqUlVyFgLNkAmGCxjTWDCPASGk8anfRGbTenSYYI7kDqmhbAYeOHcPzStuzHAikPU2d0UUWEXGn%2B3WVKMuds9uUw5EhHyD%2B2A&X-Amz-Signature=67d1ca611bb8d8ce58a5996bbf315e7f04072c6df6231a849c3b8bfe2914a557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
