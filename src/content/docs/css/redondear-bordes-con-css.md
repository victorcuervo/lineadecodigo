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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GCJJ4F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjceSg48VwnfMfUhXUhuJCshtdX2830GxKe8y%2FVbDZeAiBN%2FibpWkNniknwxwCQAImWxBpBYu35o0f5SfbRJJyu2yr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMkfeg4%2BC%2F%2FdKzULU%2BKtwDx5yKhI4VuZJHWYYyYN8kJARIOi8uWizFv%2BO5LE17ZaQm3DVTjaLduQFSUeGmi6nqGAJs9ZbkJnGYTwpTUnmJ06L%2FVeRjtmps5MZAPoyVMm0p%2F1cWWidlGfdYVsYKyV%2B6XCkfPZP%2B1SeWBJJ81SBJabMImoOnL7SGbTBhjmFacP9x%2FHXwkXr6Nhvc2X7mAXDneNchX4uCV9pShV%2Bz6aIHLTw5BdUVQi6xmst5%2BbJkFvw%2B2a%2FN%2FXmBcX%2BmrcqIRWN%2Bd2%2BYpRB95QH%2FcgHxLbcMuAUzUuWwZYj0%2Bj8Tus4BehNxwaamaKusqDstqsf3XvdisW71o5d2Ek5dW4%2F5eKINwavO5OgQXmS28JKJOImk0KZCRrKrMH2O4Hwgl1e5GJvM2HLvnT6yc5Oq2QkUgIjfAwPZ9duhixo1z4C%2BfjBD1%2F0DpweOSE9HWkP%2By3EzJjp15xc87lVTpdz299GJ4FFCOg032xR1hUy3p6yJ8KOsK%2FFf99aUFaNK7q07X1OHg%2BswZ2EFtk8rc7zriwFOsikPpl8zcHCS2O37k17dRSyOeYzNylAVt0kjDhDtg8SEC68PosCUXAkRDcIqnzyoX1emZfnYJ3pR3w5%2B3ywyC2vaqT6VdYAE9z%2FkRWSK0sgw34zIyQY6pgEfzcJPXTjN73lTCWGv7YcDpL0iYTXoB5Zg6JhL4nNZGse%2BycAmp%2BgfyEeMbbM9wwIN8%2ByooaIDdum7e07apNXwjnGQAzm4iwKTvY4lwrz0dnsMw%2FQRiJSJ63YS5V86MpSz1Z29ldT63cXMLQ2MDdP%2Fuze4wBk9pFbHd1ZQSGKeuWL0%2FEJ3TT4B2vTOHRt5dpNNLVi8IcxVeENNGerdooc9Q2XU3j7X&X-Amz-Signature=5a8e223e8a0cb9d3cbec5cda37dc8bb7c0201ce37530b54b399916b2e8ce9f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GCJJ4F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjceSg48VwnfMfUhXUhuJCshtdX2830GxKe8y%2FVbDZeAiBN%2FibpWkNniknwxwCQAImWxBpBYu35o0f5SfbRJJyu2yr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMkfeg4%2BC%2F%2FdKzULU%2BKtwDx5yKhI4VuZJHWYYyYN8kJARIOi8uWizFv%2BO5LE17ZaQm3DVTjaLduQFSUeGmi6nqGAJs9ZbkJnGYTwpTUnmJ06L%2FVeRjtmps5MZAPoyVMm0p%2F1cWWidlGfdYVsYKyV%2B6XCkfPZP%2B1SeWBJJ81SBJabMImoOnL7SGbTBhjmFacP9x%2FHXwkXr6Nhvc2X7mAXDneNchX4uCV9pShV%2Bz6aIHLTw5BdUVQi6xmst5%2BbJkFvw%2B2a%2FN%2FXmBcX%2BmrcqIRWN%2Bd2%2BYpRB95QH%2FcgHxLbcMuAUzUuWwZYj0%2Bj8Tus4BehNxwaamaKusqDstqsf3XvdisW71o5d2Ek5dW4%2F5eKINwavO5OgQXmS28JKJOImk0KZCRrKrMH2O4Hwgl1e5GJvM2HLvnT6yc5Oq2QkUgIjfAwPZ9duhixo1z4C%2BfjBD1%2F0DpweOSE9HWkP%2By3EzJjp15xc87lVTpdz299GJ4FFCOg032xR1hUy3p6yJ8KOsK%2FFf99aUFaNK7q07X1OHg%2BswZ2EFtk8rc7zriwFOsikPpl8zcHCS2O37k17dRSyOeYzNylAVt0kjDhDtg8SEC68PosCUXAkRDcIqnzyoX1emZfnYJ3pR3w5%2B3ywyC2vaqT6VdYAE9z%2FkRWSK0sgw34zIyQY6pgEfzcJPXTjN73lTCWGv7YcDpL0iYTXoB5Zg6JhL4nNZGse%2BycAmp%2BgfyEeMbbM9wwIN8%2ByooaIDdum7e07apNXwjnGQAzm4iwKTvY4lwrz0dnsMw%2FQRiJSJ63YS5V86MpSz1Z29ldT63cXMLQ2MDdP%2Fuze4wBk9pFbHd1ZQSGKeuWL0%2FEJ3TT4B2vTOHRt5dpNNLVi8IcxVeENNGerdooc9Q2XU3j7X&X-Amz-Signature=fc0c339a5486022568669cbc28a5908c0c13c3c3b017a9885f53a27f8447de93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
