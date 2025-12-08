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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUXADROX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FSFL7PtSLqkpKIwDoFZIHwdMKR%2B57fJJ9%2FYaXiFrouQIgV1hrHvj5L%2FPQ%2FGq70dyBjgwDU0BoTzKDprfeVRoaCBcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhkqcSJ%2Bf76UrJixSrcAz%2F0u1ZCBujEQDuv%2BxFrsrnoE5jgL1ERBU07h3UpJUp%2FVySN524yMMNSkvbnYk9AbGDRn%2B3K%2BUm6C8q94mv%2B9yFFpMxZkxK35DHfyEisxS9mQ7nfnridmaC5jYRuf%2BjvjmKTbovqHY4bUApxjAu3nPYIA5wZqU8oeU8qis0MSL0WWEXT3xnfNX%2FLVkdQR7oUmEvQEnMm8w56GJ90HDppGl3GEVHINLNGUpEjYZLYQqshOuRfSYpjTlTc0fc7KH%2FlbyFw76JOz8asBwabnRpC7EuDNtVYz9SKzeKNCIDq6jjQHHeqqFI1I2PW2fYBSFaZvbYAV36ZPSXqnaTcQewq0S9FJ5UoIW7jkNQ%2FBbgkT0K9qeG2kLpWQqrVRMxD62tEask6%2B%2B%2F69XV1xVYpl19o0PGWZGwls5zY1JPTMId45ww4bsSq%2B2cHZnJ5hoPN5X8E06jra6BTLG8OGtv7LDYb%2FBOphlx435VdL03VZ6WXswOt5mWwmIJtdGr1GlpKRSUdP6GnO6ji74YwSCYvyrRr1of1Zjakh7IG8fkyKChFvjVs33cp02l%2F2KcPinJJQTVjONKm1l%2FBTYT6eB8Ld7hhu7KkAZhGbNRHHIyse45YFUTHBvw7kP7hoLCl0CPOMPju2MkGOqUBoOt57kjszfvJxeJQbz0bdSFO9hGyS1IZtsRw8qKsGeaoELXz4YkJJnvrkDlSVIR6o4SYEuRQ5okUZAtwVbnxfyLi6DbPDP%2BfPnVS7EVErWTcTVECl214H4gpolVBll%2F%2FMXtEVRFiY3%2Bj3d%2FMjS7H4vnJaXZv%2BXnN2dklnFCI3kmD6tYQnYL5CCERG%2B1hXIdctOa7GDF0r58v3bG1KtlRQG%2BMTa1O&X-Amz-Signature=e1c63dffec7d4647254844f80e3f85d498ce459efe0bd77e17537ea2b2427b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUXADROX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FSFL7PtSLqkpKIwDoFZIHwdMKR%2B57fJJ9%2FYaXiFrouQIgV1hrHvj5L%2FPQ%2FGq70dyBjgwDU0BoTzKDprfeVRoaCBcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhkqcSJ%2Bf76UrJixSrcAz%2F0u1ZCBujEQDuv%2BxFrsrnoE5jgL1ERBU07h3UpJUp%2FVySN524yMMNSkvbnYk9AbGDRn%2B3K%2BUm6C8q94mv%2B9yFFpMxZkxK35DHfyEisxS9mQ7nfnridmaC5jYRuf%2BjvjmKTbovqHY4bUApxjAu3nPYIA5wZqU8oeU8qis0MSL0WWEXT3xnfNX%2FLVkdQR7oUmEvQEnMm8w56GJ90HDppGl3GEVHINLNGUpEjYZLYQqshOuRfSYpjTlTc0fc7KH%2FlbyFw76JOz8asBwabnRpC7EuDNtVYz9SKzeKNCIDq6jjQHHeqqFI1I2PW2fYBSFaZvbYAV36ZPSXqnaTcQewq0S9FJ5UoIW7jkNQ%2FBbgkT0K9qeG2kLpWQqrVRMxD62tEask6%2B%2B%2F69XV1xVYpl19o0PGWZGwls5zY1JPTMId45ww4bsSq%2B2cHZnJ5hoPN5X8E06jra6BTLG8OGtv7LDYb%2FBOphlx435VdL03VZ6WXswOt5mWwmIJtdGr1GlpKRSUdP6GnO6ji74YwSCYvyrRr1of1Zjakh7IG8fkyKChFvjVs33cp02l%2F2KcPinJJQTVjONKm1l%2FBTYT6eB8Ld7hhu7KkAZhGbNRHHIyse45YFUTHBvw7kP7hoLCl0CPOMPju2MkGOqUBoOt57kjszfvJxeJQbz0bdSFO9hGyS1IZtsRw8qKsGeaoELXz4YkJJnvrkDlSVIR6o4SYEuRQ5okUZAtwVbnxfyLi6DbPDP%2BfPnVS7EVErWTcTVECl214H4gpolVBll%2F%2FMXtEVRFiY3%2Bj3d%2FMjS7H4vnJaXZv%2BXnN2dklnFCI3kmD6tYQnYL5CCERG%2B1hXIdctOa7GDF0r58v3bG1KtlRQG%2BMTa1O&X-Amz-Signature=e92ac149a5044af986cd52614c468490b588b18ae484aab870b4435befd6108f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
