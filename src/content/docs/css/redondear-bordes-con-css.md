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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTBXGOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP0O3mIJD4%2FsHDpZpf9JbCQrLr2XOLDeEkTL6pfV2p%2FAiEA04292HoJzAPSM%2BJJ8ahUf3kIjBXiQ%2F%2BKxi5ms89oahcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4KqmwIbDT1cztN1yrcA%2B06tf9%2Fdqv5E4UHzHGY1sDjkTDL1pQbFO50XqMf6yHX%2BXmDJVGmoV001HOWH1VI97DFs5oNlTQAk6LfXUwSQwUv5lldUZSKGdgMDQ2VjcdwsgCkdhPM3i8aOrQYNWj40HytqTkQmxpUdvuirqXA9GbEtHmjeFZBpzenddwiv6CkdgNLCn7lV3y9z5iFFaCwY9Wj5HeDh7xzmNugIFonzSkPC%2Foc3nqMNMuQq8AxJheVO3Yadv1aY894EFiCDyKHwa7TZpxuPh01aVHzrh2U4S0PK2hQQbGj4YLGegPT%2FMhwaHuy%2BLxm4QNH%2FtS1u4DsGoXy%2FXi7sRfh%2Fca9M05h5CiXOZEsvz%2FEiL6stqaAi4BQ6UGX1tQZKFDMF4oouYZiGPkocoGQx%2FuDFZfqCWqIVjwn6zYTiNR%2FfmF0fYF%2FiUVWIDVHgKUfUW%2BdjvLcNG3085vIhHg%2F1DCneDucTDg%2Fb9IHjUZn%2F%2BkeP5OIp2Ukwx8Dz6zCImimo68Q3MavqVruQ%2BFSd6ieHwvg7%2F2r%2FPZzdKqasOUk2dO7XFKRcJecxVGz9y7uYrfWZIG1vg%2BvWDY2B%2Fvlj2R9ajXs1rFOELx82AGAYml%2FLyKlUhxFPzic4xpXz2SRNG4IumpkbAY1MMKMyMkGOqUBpJloGyk2st5niO%2FOSCQzHmFNMxaanpGhPWk50UQS2E7Xa4ogUHYojY3s%2FIrijxzGqhQS%2FROpMNc0mq6%2Fhha9zKO4070Rqs2Jtc0%2Bjr7NeyWpPUbYIwPwWqMlE89DLjm4sS1MZpsXmGqmPSADW%2BP0cBS%2BUkG3IcA5wZVDs1jVUbfTEzXiB8rXsnLZ11xLT99%2F4axpvifI%2FZmSBUYMY4CF%2F0m9vPc9&X-Amz-Signature=b8bf1092092a4049cc778c25351ce33bfe02fe60cef0998a5505197cc08a8805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTBXGOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP0O3mIJD4%2FsHDpZpf9JbCQrLr2XOLDeEkTL6pfV2p%2FAiEA04292HoJzAPSM%2BJJ8ahUf3kIjBXiQ%2F%2BKxi5ms89oahcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4KqmwIbDT1cztN1yrcA%2B06tf9%2Fdqv5E4UHzHGY1sDjkTDL1pQbFO50XqMf6yHX%2BXmDJVGmoV001HOWH1VI97DFs5oNlTQAk6LfXUwSQwUv5lldUZSKGdgMDQ2VjcdwsgCkdhPM3i8aOrQYNWj40HytqTkQmxpUdvuirqXA9GbEtHmjeFZBpzenddwiv6CkdgNLCn7lV3y9z5iFFaCwY9Wj5HeDh7xzmNugIFonzSkPC%2Foc3nqMNMuQq8AxJheVO3Yadv1aY894EFiCDyKHwa7TZpxuPh01aVHzrh2U4S0PK2hQQbGj4YLGegPT%2FMhwaHuy%2BLxm4QNH%2FtS1u4DsGoXy%2FXi7sRfh%2Fca9M05h5CiXOZEsvz%2FEiL6stqaAi4BQ6UGX1tQZKFDMF4oouYZiGPkocoGQx%2FuDFZfqCWqIVjwn6zYTiNR%2FfmF0fYF%2FiUVWIDVHgKUfUW%2BdjvLcNG3085vIhHg%2F1DCneDucTDg%2Fb9IHjUZn%2F%2BkeP5OIp2Ukwx8Dz6zCImimo68Q3MavqVruQ%2BFSd6ieHwvg7%2F2r%2FPZzdKqasOUk2dO7XFKRcJecxVGz9y7uYrfWZIG1vg%2BvWDY2B%2Fvlj2R9ajXs1rFOELx82AGAYml%2FLyKlUhxFPzic4xpXz2SRNG4IumpkbAY1MMKMyMkGOqUBpJloGyk2st5niO%2FOSCQzHmFNMxaanpGhPWk50UQS2E7Xa4ogUHYojY3s%2FIrijxzGqhQS%2FROpMNc0mq6%2Fhha9zKO4070Rqs2Jtc0%2Bjr7NeyWpPUbYIwPwWqMlE89DLjm4sS1MZpsXmGqmPSADW%2BP0cBS%2BUkG3IcA5wZVDs1jVUbfTEzXiB8rXsnLZ11xLT99%2F4axpvifI%2FZmSBUYMY4CF%2F0m9vPc9&X-Amz-Signature=54506aa88253392fb2262771285ad660ad27941918f51dd6ed109ed2d8c99c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
