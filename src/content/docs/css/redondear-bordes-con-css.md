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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RFYYA5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVEZE12GBcAqrQWytYi%2BuB4isIK7XTZIPZWuE89cWMQIhAKrs0fEaiOECX5AabmHB6dCXUFYtyu1JdCbOQliUll1AKv8DCHoQABoMNjM3NDIzMTgzODA1IgyEGf5jSM5xM8H8tXgq3AMJmxWDyEl9FEql5RhkhzfoPudNVQpqDK%2B1O0NTOmL7m3c9%2BV8kzzlyN0%2Fmr%2FF5DzX5TSk2uCbwHeKOlIEMFhAJ%2Bm%2BIiwkO0HfJqfgha0mLnu30H4MjTrW%2FoRFhUgNlUGk55%2FagujFiZp7b3Eskgj5Jlorkq81TgdT4hahZUW4WCUHmuyzikE5QhlAlRap1WUK%2Bzr9KuSB%2Fys6Vj6iKCjPK%2FDgDeIoRNsO0rcrHStJpFNexTaQjvzi%2FuaTXLP27SeXcFDw2%2Fqm7s33P2xg30y%2BHciBRdsT59xXIR0CyajZ7q%2BdBuuv4dygTdJ6WG3H6oVEFlEjdIZxWBusOhh5oKAKq6boOnx3qp7Eds8fKST3JrlfGaL10L%2FtdwnuZEPoO8BCRWYdW9zlmMpf55EInQ6V9zn9a8SSIcbHtEe1gIGy%2FUTNlBQC52LasF44EtyEUWtRAnn3Xh6ArJ6LoqKvdTTVKYyoaQgxE3p8GnIizk31LNu%2Bo4RkIsdndBc7bYppAC2YchsqnzxiardSzX86uH2QPvw86b1%2BcRAC0bg1gtvB833Lyd3wDBLQF2pReMoJZdxAHqjtqsf%2Btb%2FXZYfKzI6JENCfoBWM7RaB2L61g9rO1kfw1EBwjd3a7tvxwQzCtwdHJBjqkAc1UUUehmWul%2BGeEZdiHxverBiiRptep80Fl9CsIQUaRsFg6KTjOn%2FwR7HA6j%2FmFOjPt2gJD6883YgfejAEayLY5w494p76qKrNtoiALUuDfIe3i9WXaTvMO%2BZsaHIO2QFOFCPPM4889jRK%2BDVYSGH4pvn9AkFK5ui8LtKdcrSsfcnQvW1DM3IIm0InP6ezriYzhj5fx0q3jDYmEifuAJcmGzIDb&X-Amz-Signature=258e2b4376d6bcba12ca0b8b00e964966f0d65762a755e32d10d7fd5ef064380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RFYYA5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVEZE12GBcAqrQWytYi%2BuB4isIK7XTZIPZWuE89cWMQIhAKrs0fEaiOECX5AabmHB6dCXUFYtyu1JdCbOQliUll1AKv8DCHoQABoMNjM3NDIzMTgzODA1IgyEGf5jSM5xM8H8tXgq3AMJmxWDyEl9FEql5RhkhzfoPudNVQpqDK%2B1O0NTOmL7m3c9%2BV8kzzlyN0%2Fmr%2FF5DzX5TSk2uCbwHeKOlIEMFhAJ%2Bm%2BIiwkO0HfJqfgha0mLnu30H4MjTrW%2FoRFhUgNlUGk55%2FagujFiZp7b3Eskgj5Jlorkq81TgdT4hahZUW4WCUHmuyzikE5QhlAlRap1WUK%2Bzr9KuSB%2Fys6Vj6iKCjPK%2FDgDeIoRNsO0rcrHStJpFNexTaQjvzi%2FuaTXLP27SeXcFDw2%2Fqm7s33P2xg30y%2BHciBRdsT59xXIR0CyajZ7q%2BdBuuv4dygTdJ6WG3H6oVEFlEjdIZxWBusOhh5oKAKq6boOnx3qp7Eds8fKST3JrlfGaL10L%2FtdwnuZEPoO8BCRWYdW9zlmMpf55EInQ6V9zn9a8SSIcbHtEe1gIGy%2FUTNlBQC52LasF44EtyEUWtRAnn3Xh6ArJ6LoqKvdTTVKYyoaQgxE3p8GnIizk31LNu%2Bo4RkIsdndBc7bYppAC2YchsqnzxiardSzX86uH2QPvw86b1%2BcRAC0bg1gtvB833Lyd3wDBLQF2pReMoJZdxAHqjtqsf%2Btb%2FXZYfKzI6JENCfoBWM7RaB2L61g9rO1kfw1EBwjd3a7tvxwQzCtwdHJBjqkAc1UUUehmWul%2BGeEZdiHxverBiiRptep80Fl9CsIQUaRsFg6KTjOn%2FwR7HA6j%2FmFOjPt2gJD6883YgfejAEayLY5w494p76qKrNtoiALUuDfIe3i9WXaTvMO%2BZsaHIO2QFOFCPPM4889jRK%2BDVYSGH4pvn9AkFK5ui8LtKdcrSsfcnQvW1DM3IIm0InP6ezriYzhj5fx0q3jDYmEifuAJcmGzIDb&X-Amz-Signature=54f956abfdf9fbebdd6a6f5116deaa4791bfad850e1c836459db77ef7e4860e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
