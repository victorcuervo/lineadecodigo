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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJERPALD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX7mjqcGDyuLVG63R9%2BUYMVYrXoZ%2FhLdT%2FoALlydNThwIhAPoLVCRi0cx6CKc8negOdHETy6nf9h5GXhctnKF1RzEbKv8DCFUQABoMNjM3NDIzMTgzODA1IgzsejArrbKD57f6cu8q3ANDSkFGQQ9K4bkVg0SrKaolsjtv64n7IEvit%2FnXpC60EXwQvVf7knoLQoEZXBQDUpVSzWnsONHtDlZjmM1C0EyEyXZSBwpbl56%2F74MyaY5Enb2cTvZmHwYE2L68AloSFLxapwB0UIyY0IzbD9fzYN%2FfrZTuC9N09Ztf6ACQ2k8ZtkNZKn%2FJJ%2BsCXfw4j1QM%2BsK3a9gr9DeOjRSQkJdiIZRI96zLmKmm1rUgbuLXrSqiZmBWkiFF03X425tXWTQgKEHOB9YhybW%2FW0rB4QuTfIrs65SwhXi1lXHzXJNP%2FKZ5DcxuNBsoAFtRgP1Bc%2BhoBGHkJc5i6303yxxNTHQU4DQEf9ZKYgWmp6GImFAYMuj1WTUUucyonXgVyVnq8cKOaHy51ZLKTvAcQSrzpAvTzTgeR9AW5vKnLU2OGuR70l9nYz7ORcXmUGb5AJT9m6mh%2Bb4zC1wuMDfc0Nfc4uZELFQUPHNGgOA5m6J7XxTTA1tMbmnOUpbYF1SIwX1ycfNQysUI2zrbQHsMuBPL47KeRfEQWHUZaEPoxYuy%2BoFogb8RB9MSdBuC%2B0dEmzdloKWrausLi3QZUK%2F9C8y3ayV2sq%2F4sZ8VZoOsiIqdvGhfL4B9eFMQcd58LVZwenSrcDDdrcnJBjqkARRXYX4UFMm3S0AmY%2FmyLhTy%2Fw%2B7WxQtykPcTPfCQ1uSM%2Bfb%2FW9pQaiUz5tXcArNGncsK18zdFI3Ye%2BY0RdGVJffZ2tmupkdt68N35Ezi25IuKo7xUZmUzHaH2x5bqP6tvcgFz67zCaiVktSkdneUxCaI3PswsOLgGWgAPeQ4PcPiBNWDOkHcqvowmYWETuQyr3uI3v4FUeaBvairP4wmYuIaz6T&X-Amz-Signature=a2f01d42c345ce61c1e2dd31ec2e776d4c385253234c313ab5c0cf6271ae045c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJERPALD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX7mjqcGDyuLVG63R9%2BUYMVYrXoZ%2FhLdT%2FoALlydNThwIhAPoLVCRi0cx6CKc8negOdHETy6nf9h5GXhctnKF1RzEbKv8DCFUQABoMNjM3NDIzMTgzODA1IgzsejArrbKD57f6cu8q3ANDSkFGQQ9K4bkVg0SrKaolsjtv64n7IEvit%2FnXpC60EXwQvVf7knoLQoEZXBQDUpVSzWnsONHtDlZjmM1C0EyEyXZSBwpbl56%2F74MyaY5Enb2cTvZmHwYE2L68AloSFLxapwB0UIyY0IzbD9fzYN%2FfrZTuC9N09Ztf6ACQ2k8ZtkNZKn%2FJJ%2BsCXfw4j1QM%2BsK3a9gr9DeOjRSQkJdiIZRI96zLmKmm1rUgbuLXrSqiZmBWkiFF03X425tXWTQgKEHOB9YhybW%2FW0rB4QuTfIrs65SwhXi1lXHzXJNP%2FKZ5DcxuNBsoAFtRgP1Bc%2BhoBGHkJc5i6303yxxNTHQU4DQEf9ZKYgWmp6GImFAYMuj1WTUUucyonXgVyVnq8cKOaHy51ZLKTvAcQSrzpAvTzTgeR9AW5vKnLU2OGuR70l9nYz7ORcXmUGb5AJT9m6mh%2Bb4zC1wuMDfc0Nfc4uZELFQUPHNGgOA5m6J7XxTTA1tMbmnOUpbYF1SIwX1ycfNQysUI2zrbQHsMuBPL47KeRfEQWHUZaEPoxYuy%2BoFogb8RB9MSdBuC%2B0dEmzdloKWrausLi3QZUK%2F9C8y3ayV2sq%2F4sZ8VZoOsiIqdvGhfL4B9eFMQcd58LVZwenSrcDDdrcnJBjqkARRXYX4UFMm3S0AmY%2FmyLhTy%2Fw%2B7WxQtykPcTPfCQ1uSM%2Bfb%2FW9pQaiUz5tXcArNGncsK18zdFI3Ye%2BY0RdGVJffZ2tmupkdt68N35Ezi25IuKo7xUZmUzHaH2x5bqP6tvcgFz67zCaiVktSkdneUxCaI3PswsOLgGWgAPeQ4PcPiBNWDOkHcqvowmYWETuQyr3uI3v4FUeaBvairP4wmYuIaz6T&X-Amz-Signature=94b90426b6c1cc94c37ac87b9e2877402f5705e6032b01f25bb23f2e0e81e2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
