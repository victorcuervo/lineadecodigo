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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NOAEDJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEMFzgo0b5U7CkKHRQUDAghsVZd94JBQT5fb8M8Y9CjgIhAPNai0XA5QaZLel%2B%2ByjLQ1H7usEAzzSKbSAQg1K9VFJAKv8DCHEQABoMNjM3NDIzMTgzODA1IgyPPaKSFX9Q1t0jbqkq3APIEDNqe%2Brza6Hi40FEdCp7i7akBiQq1ZFRcDSPMhutmQMvlSlwJqQEGUPLksQp%2FfWR3iqD33KtpDgdTlFzcLKQeHj5vS0gemkYcVOkcL3EgLlf5pq109f9em0oa%2BC29wnvABx2vGb2U3b0ojVOTgxl73aY0azz8TXu59UtEQVynFO3lZIITfjP9jOAxKd%2B12chTSnqeH5mrfFgHJTrtu085PhQqGoz2RaR7l4FUcu8ylvixbbuzzHbfaN6cB4zadFppMaI6kkbFikPajVd8nQMQMfFIgmsR7NzcyEl49JJ3bHtXeS8YB8mthhQArOaEXimuceA%2FwBTd1jITCFrXeI0gBUTqQ9eLpqdlC%2BS1iAiPuZYP4H%2F%2BCLTd%2F5eI%2BxOkdpMWwao4zQbkpxQUf%2FOPAPAdf0pu406tKi%2Bw%2FUxnM8GEmSJsH27Rp%2BK2xoev3w3xNM%2FPmQhmnnUpICAockwo7%2FfNA9n0UrJJ6pEOtbSomlreh%2BQJDhkyAuVbcePRcubJU%2B3YS953TaENSABWaFay0df62UzSgNA6Ep2lt2%2F8G52wZSeW7Ib1jAN%2Fnnu4FfdB0jXH1gWabdcOzahFeGlx84ZCP19peSN6OKqYnV9Eeos5gAKSyyaA%2Foo2S3A%2FTC9vM%2FJBjqkAYhhpmX4hW7aWX4VF2uW%2BVxQvH4%2BCMLqeybDxRyX%2FpbVjAzluk%2BIjaZ2d7xyKmaLHtgRgF0OI7dnnBAojxAaKmfKXyjcA3bhpDE7V3hBzcXWKCvonXZMsZ60K%2Blxf4LW6JXVzlywyzAJ8Pk6FoymLcBLUv0a777MMtjKNLL3UBvjojmk8rfE64XICVLAyOTSBCnzDQYzrBeNMz24wtxWnOldEisF&X-Amz-Signature=585eed6bb0bbb22a3d54993b9872dc4287cbb6330ffa9f1a75c5bdea8b48e707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NOAEDJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEMFzgo0b5U7CkKHRQUDAghsVZd94JBQT5fb8M8Y9CjgIhAPNai0XA5QaZLel%2B%2ByjLQ1H7usEAzzSKbSAQg1K9VFJAKv8DCHEQABoMNjM3NDIzMTgzODA1IgyPPaKSFX9Q1t0jbqkq3APIEDNqe%2Brza6Hi40FEdCp7i7akBiQq1ZFRcDSPMhutmQMvlSlwJqQEGUPLksQp%2FfWR3iqD33KtpDgdTlFzcLKQeHj5vS0gemkYcVOkcL3EgLlf5pq109f9em0oa%2BC29wnvABx2vGb2U3b0ojVOTgxl73aY0azz8TXu59UtEQVynFO3lZIITfjP9jOAxKd%2B12chTSnqeH5mrfFgHJTrtu085PhQqGoz2RaR7l4FUcu8ylvixbbuzzHbfaN6cB4zadFppMaI6kkbFikPajVd8nQMQMfFIgmsR7NzcyEl49JJ3bHtXeS8YB8mthhQArOaEXimuceA%2FwBTd1jITCFrXeI0gBUTqQ9eLpqdlC%2BS1iAiPuZYP4H%2F%2BCLTd%2F5eI%2BxOkdpMWwao4zQbkpxQUf%2FOPAPAdf0pu406tKi%2Bw%2FUxnM8GEmSJsH27Rp%2BK2xoev3w3xNM%2FPmQhmnnUpICAockwo7%2FfNA9n0UrJJ6pEOtbSomlreh%2BQJDhkyAuVbcePRcubJU%2B3YS953TaENSABWaFay0df62UzSgNA6Ep2lt2%2F8G52wZSeW7Ib1jAN%2Fnnu4FfdB0jXH1gWabdcOzahFeGlx84ZCP19peSN6OKqYnV9Eeos5gAKSyyaA%2Foo2S3A%2FTC9vM%2FJBjqkAYhhpmX4hW7aWX4VF2uW%2BVxQvH4%2BCMLqeybDxRyX%2FpbVjAzluk%2BIjaZ2d7xyKmaLHtgRgF0OI7dnnBAojxAaKmfKXyjcA3bhpDE7V3hBzcXWKCvonXZMsZ60K%2Blxf4LW6JXVzlywyzAJ8Pk6FoymLcBLUv0a777MMtjKNLL3UBvjojmk8rfE64XICVLAyOTSBCnzDQYzrBeNMz24wtxWnOldEisF&X-Amz-Signature=8cf111bcf9c9dcf015f9c0294bbd4ba414a58c927d7c12b7975fb17ec5e8342c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
