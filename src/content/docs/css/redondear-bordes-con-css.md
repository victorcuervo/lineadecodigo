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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5QWNFCI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1Tm5mrLWHlvMqUami11aiKovl2KKjp1HkMvYsWmzVjAiBfAGLXJDz1H0IJ04Sr5Kcdxf5SZTibqjfe%2BfgCL5AvjyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1YpDneFrYxtQWBxKtwDhe2SGZGcfOaCYozWiYJ8PMpD8roA%2BERyIp9PmTawGih%2FHGfIITefZcu2NRbqK4XlKjREuA9czZYP%2BLYIB7BTeBBPvzIhcDPx7nUqOVQTDhcUDzbWUQh%2Fh7XsG1Xt4C9W2Uw%2FRrqGstd30frQr4Rqb%2Fy23Jy0uK7CKOd197tTHgQ%2F1doGxrCQhjJ84gRZxv%2FmuhlZyXqPiY4vyxJS1%2FVfPsdQGRi7kx1mqP2Ame2rOoI1TVOt9ADowkQyP8MOCw83CQaYgMDT0HvjP9XkA4UfE9tkMnOa3idIz10Xtfh%2FAOZZcdiVP%2Bmt5YqGxyqHmxR9HiUN1O14Lx68YphAgBkdXGWyQ7DZphRCKU2irt0EvELMX%2B3pcVBtAZtcxucs7D4kM%2FWHfTKNvYlT08KlcBLP7pVmA4nAeEnNa9kXx%2B%2FYwPibCN0cPwW9kX%2BbFPkFm3g3KI3Pk9YqVlCPs6ZCjgEqA90%2B1Qs4u46OPEJC8BHMZraWs1xljy0gjSr2DZA870QjlGN2Ct9PL3UzAVv5I6dVCV%2Bzwu1ebKiODAUNvpppkx1%2BqSV9HbD8svSjdNGdC7XWM7x1joy%2B9YKuz%2BZ7TUrs%2FTJ%2FTzSh3tFjaTOA9BdXZuF%2BM4%2FLHvxk%2F9XeUB4wn6jXyQY6pgFYcy07%2Bp%2FsvzqJdAL%2BSJioGpHNIW%2FZxsGZPSypv9x3M0VOV%2FHThSB4Fvm7KWtka283xlrRq3WtmLpApn732mNUdEw5Kbq0f5Dc4hZsens%2BHlGJ2vdFtuKuBt09%2BFA2jK2BqGesUIGW3cf4z8QhRa9ZmYRaL2jBnFhqa05MbINZPJdPJxmrc0WqFwQyZuEblA0%2FKuvq2ANo4QYw8zlsf1HjQXwGvFaf&X-Amz-Signature=8808a09cc5b57c3fd2af40dc5a25bd8856355627d793b744432965575e29d9cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5QWNFCI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1Tm5mrLWHlvMqUami11aiKovl2KKjp1HkMvYsWmzVjAiBfAGLXJDz1H0IJ04Sr5Kcdxf5SZTibqjfe%2BfgCL5AvjyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1YpDneFrYxtQWBxKtwDhe2SGZGcfOaCYozWiYJ8PMpD8roA%2BERyIp9PmTawGih%2FHGfIITefZcu2NRbqK4XlKjREuA9czZYP%2BLYIB7BTeBBPvzIhcDPx7nUqOVQTDhcUDzbWUQh%2Fh7XsG1Xt4C9W2Uw%2FRrqGstd30frQr4Rqb%2Fy23Jy0uK7CKOd197tTHgQ%2F1doGxrCQhjJ84gRZxv%2FmuhlZyXqPiY4vyxJS1%2FVfPsdQGRi7kx1mqP2Ame2rOoI1TVOt9ADowkQyP8MOCw83CQaYgMDT0HvjP9XkA4UfE9tkMnOa3idIz10Xtfh%2FAOZZcdiVP%2Bmt5YqGxyqHmxR9HiUN1O14Lx68YphAgBkdXGWyQ7DZphRCKU2irt0EvELMX%2B3pcVBtAZtcxucs7D4kM%2FWHfTKNvYlT08KlcBLP7pVmA4nAeEnNa9kXx%2B%2FYwPibCN0cPwW9kX%2BbFPkFm3g3KI3Pk9YqVlCPs6ZCjgEqA90%2B1Qs4u46OPEJC8BHMZraWs1xljy0gjSr2DZA870QjlGN2Ct9PL3UzAVv5I6dVCV%2Bzwu1ebKiODAUNvpppkx1%2BqSV9HbD8svSjdNGdC7XWM7x1joy%2B9YKuz%2BZ7TUrs%2FTJ%2FTzSh3tFjaTOA9BdXZuF%2BM4%2FLHvxk%2F9XeUB4wn6jXyQY6pgFYcy07%2Bp%2FsvzqJdAL%2BSJioGpHNIW%2FZxsGZPSypv9x3M0VOV%2FHThSB4Fvm7KWtka283xlrRq3WtmLpApn732mNUdEw5Kbq0f5Dc4hZsens%2BHlGJ2vdFtuKuBt09%2BFA2jK2BqGesUIGW3cf4z8QhRa9ZmYRaL2jBnFhqa05MbINZPJdPJxmrc0WqFwQyZuEblA0%2FKuvq2ANo4QYw8zlsf1HjQXwGvFaf&X-Amz-Signature=40c31b302031b531d4cfa03310eaaa13887a5c7547f485d67f271ae7d42f2f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
