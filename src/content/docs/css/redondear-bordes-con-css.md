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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRIADZBZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4%2BfwTstUzjb5ZnVem78ZvcFADaYfuB%2Fv5QLPSEh9BagIhALvlqJdvsgp6q5CZ%2B8NL30qf1eu%2BjYFPp%2B2LBdyvKf%2BvKv8DCFsQABoMNjM3NDIzMTgzODA1Igz0vKQ%2FoeTISztIKroq3ANRoY1wYPvAEsJWgs7rS0iZt5zL5IN3Yeh2EwOMd%2BOvoGAmZyVmtxgweV78MVuSYvy86AbRx4LTPn4H0k9tPumRqTEpDlfgj9UrOxc9GvFNMx7dNB%2BrLR21Ue%2BmlokfFGm15OGT9sJOAzZLkvpdx00yLCgXjxeQ0paHov6bxxcQD3As6s3r4ICZjIg%2FelOH5jfGAdD3pVXl5%2Bf%2BzifAOX5M9ldEbwANyFbA%2B%2FReMIm1ERJavWFJZbMulFW%2BqUEi9rRBubCQrNYs37oCDR4LedTss8NdBOB1qV9FVhoWVSaGAFgnS3jXywCyDiY5OsqRW6bU2UNj78ivnnfe9LvwT9f6yW6dz7Ix1HwpwFz6nKN1cQB3cr%2BicYLDWiFoTFTIMIVDFBjsPQRxEdfGaRvg%2FnZpZQi%2B%2FztUtEycyeFmE9NSkD9cFnqGmY8PJhu2VjXeIXSUFsWxlJRqZJUy5%2FrqFSMAKMOCWq87pE%2FbhbjJRGxiHHkm%2BTuum6QyhvvKdixq68mptjSxb%2BZgwLADy1ooLQR6HFV90gK%2BK%2BQVBJ%2BrDTwL%2FohnXQMj1E71gqA3WDIuHiB4WmSfMptZPEZdvv%2FUUQDMkEYUVCce8VntIUN5bPRfwRq%2BLYS5bCIDz0%2FnhDCI0MrJBjqkAaCT%2FuxF747PwIvu0g5YbzU3PkZj11RYFcSMQoe1YYVuwLFz7q5d2GmlJ%2FpKFj600gTKQvAYfwauSr%2FLfmF26w037ksUIBLCclOZrM3QcRJvUAX4vRYI%2BkCXgC5OKotoqcklpHFGpJcJa0DAUdJlFiP0JvqpZ6Tn2Ye2bpEzJ3sPPiyiVINYmid%2FbQ4ozizHpNpKDFqg6fFePmqOoypQQe1%2BFaEW&X-Amz-Signature=f2632857804f8a63f42ed039398ba4db1b800cbeb5c37a81ebd0b87eb01536bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRIADZBZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4%2BfwTstUzjb5ZnVem78ZvcFADaYfuB%2Fv5QLPSEh9BagIhALvlqJdvsgp6q5CZ%2B8NL30qf1eu%2BjYFPp%2B2LBdyvKf%2BvKv8DCFsQABoMNjM3NDIzMTgzODA1Igz0vKQ%2FoeTISztIKroq3ANRoY1wYPvAEsJWgs7rS0iZt5zL5IN3Yeh2EwOMd%2BOvoGAmZyVmtxgweV78MVuSYvy86AbRx4LTPn4H0k9tPumRqTEpDlfgj9UrOxc9GvFNMx7dNB%2BrLR21Ue%2BmlokfFGm15OGT9sJOAzZLkvpdx00yLCgXjxeQ0paHov6bxxcQD3As6s3r4ICZjIg%2FelOH5jfGAdD3pVXl5%2Bf%2BzifAOX5M9ldEbwANyFbA%2B%2FReMIm1ERJavWFJZbMulFW%2BqUEi9rRBubCQrNYs37oCDR4LedTss8NdBOB1qV9FVhoWVSaGAFgnS3jXywCyDiY5OsqRW6bU2UNj78ivnnfe9LvwT9f6yW6dz7Ix1HwpwFz6nKN1cQB3cr%2BicYLDWiFoTFTIMIVDFBjsPQRxEdfGaRvg%2FnZpZQi%2B%2FztUtEycyeFmE9NSkD9cFnqGmY8PJhu2VjXeIXSUFsWxlJRqZJUy5%2FrqFSMAKMOCWq87pE%2FbhbjJRGxiHHkm%2BTuum6QyhvvKdixq68mptjSxb%2BZgwLADy1ooLQR6HFV90gK%2BK%2BQVBJ%2BrDTwL%2FohnXQMj1E71gqA3WDIuHiB4WmSfMptZPEZdvv%2FUUQDMkEYUVCce8VntIUN5bPRfwRq%2BLYS5bCIDz0%2FnhDCI0MrJBjqkAaCT%2FuxF747PwIvu0g5YbzU3PkZj11RYFcSMQoe1YYVuwLFz7q5d2GmlJ%2FpKFj600gTKQvAYfwauSr%2FLfmF26w037ksUIBLCclOZrM3QcRJvUAX4vRYI%2BkCXgC5OKotoqcklpHFGpJcJa0DAUdJlFiP0JvqpZ6Tn2Ye2bpEzJ3sPPiyiVINYmid%2FbQ4ozizHpNpKDFqg6fFePmqOoypQQe1%2BFaEW&X-Amz-Signature=a8381b568b419e49dc376d9ae84a90b7c40b9cdfdad463f48608c13b8780a206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
