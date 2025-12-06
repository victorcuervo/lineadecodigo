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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIMJVJB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWBnkzbBhsZ1px7DSvBjhdzn88%2B4u9iANH7Qn%2Fn%2F%2BdDAiEArm1rfvWnnRTGg7L2noOwUbOHkpRoyseYmn51h%2BKNN3kq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJiLwE2OeO1ngFN%2FXCrcA0A0RgQNcv3WdlmZXXxAPcdD9lXCWdbO52qNTCuyX%2B9seSGLmx6RiyMaGyhqV0RoL95nr%2FXKnQnRKXlm%2B51hsz4lcz5cHYJp90Esic782jVKby74xXdTmqfNY9fQLuRuq0ZgvOkXLD31NkNVX%2BbDnRB%2Fh9%2FTOdodE88I0ZJ6hmsN%2F83p9cIYlIXYVdJA6nQXFZ4VUCnDvc57UK1uu6NUBbbJ5%2Fywf3cPNgOyd57wKaC1Rsl6zI8yJfqrH1h26Hh7c2HRjeD35JA5y7EAG5cvokxyZYI4RgWI1Q8K77LVkdLLEXU3%2FbyEykLhLfwwQTpD7uCQS8scAgVlh8Uwcpif7467k8d4Tpz2mk9FE6E12VgKvXU2ROo2afZdiyJfS0qoABIcBp1CTu7xtvWu2g5gmgBmvckaYdkED0VMgatx9xc12hPno0taGiW2J7CWQMIhaD9I%2BXqVZkmGbOOqIGMP6URXjFRRPsrOTVKNOp0uuwnkr1dmTK1LuQYcC775uE5N0aBfK3EPv6DQznIQztLoqJeZ6mPVX7WlInjNX5ib30ggv5%2BIbmZZ3UlhbVPY%2Bwf99DC7CRhRP07ig2aJCA5lf6Ca%2BmaFbO%2BRhcv%2F00MKU0%2FZs8NOBhlhrFN75v9RMMrCzskGOqUBR8VPWXKuSXmuCYA1GyUBNuDlPhrq%2B1XABAVcFhMBIfQ8enk0kEO7ZfoM3mcus%2FS%2Fd%2Fo%2F5cTLf1mKe8MAdj7M4zdVuRYLJyUWRVi3Kz4oz3c3rhB5zxc0hyFz7QjE1OiIduXp4eum9%2BDNtUw9kTrIJ1FqCaESfImiQyUBIdxWYdXyGwOQmf%2BaXWgW3yuDyifa9J%2Ft%2FndOc2R4z%2F7s%2FdOHUia0EI%2F%2F&X-Amz-Signature=ad8252a223f4c3299c7c9b4cc34649c67ecaa185202fe3054d8e87b83d112c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIMJVJB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWBnkzbBhsZ1px7DSvBjhdzn88%2B4u9iANH7Qn%2Fn%2F%2BdDAiEArm1rfvWnnRTGg7L2noOwUbOHkpRoyseYmn51h%2BKNN3kq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJiLwE2OeO1ngFN%2FXCrcA0A0RgQNcv3WdlmZXXxAPcdD9lXCWdbO52qNTCuyX%2B9seSGLmx6RiyMaGyhqV0RoL95nr%2FXKnQnRKXlm%2B51hsz4lcz5cHYJp90Esic782jVKby74xXdTmqfNY9fQLuRuq0ZgvOkXLD31NkNVX%2BbDnRB%2Fh9%2FTOdodE88I0ZJ6hmsN%2F83p9cIYlIXYVdJA6nQXFZ4VUCnDvc57UK1uu6NUBbbJ5%2Fywf3cPNgOyd57wKaC1Rsl6zI8yJfqrH1h26Hh7c2HRjeD35JA5y7EAG5cvokxyZYI4RgWI1Q8K77LVkdLLEXU3%2FbyEykLhLfwwQTpD7uCQS8scAgVlh8Uwcpif7467k8d4Tpz2mk9FE6E12VgKvXU2ROo2afZdiyJfS0qoABIcBp1CTu7xtvWu2g5gmgBmvckaYdkED0VMgatx9xc12hPno0taGiW2J7CWQMIhaD9I%2BXqVZkmGbOOqIGMP6URXjFRRPsrOTVKNOp0uuwnkr1dmTK1LuQYcC775uE5N0aBfK3EPv6DQznIQztLoqJeZ6mPVX7WlInjNX5ib30ggv5%2BIbmZZ3UlhbVPY%2Bwf99DC7CRhRP07ig2aJCA5lf6Ca%2BmaFbO%2BRhcv%2F00MKU0%2FZs8NOBhlhrFN75v9RMMrCzskGOqUBR8VPWXKuSXmuCYA1GyUBNuDlPhrq%2B1XABAVcFhMBIfQ8enk0kEO7ZfoM3mcus%2FS%2Fd%2Fo%2F5cTLf1mKe8MAdj7M4zdVuRYLJyUWRVi3Kz4oz3c3rhB5zxc0hyFz7QjE1OiIduXp4eum9%2BDNtUw9kTrIJ1FqCaESfImiQyUBIdxWYdXyGwOQmf%2BaXWgW3yuDyifa9J%2Ft%2FndOc2R4z%2F7s%2FdOHUia0EI%2F%2F&X-Amz-Signature=a3e7939b43bcf07fd00e8884046509bd4c1df5cfad08671ed430047342907629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
