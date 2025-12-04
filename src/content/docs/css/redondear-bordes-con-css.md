---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVXRYLOJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFKijyuwE2R5zr7HRnPgCLMeunago1dqpuQQCbG9hC8WAiB0Wnd70TXq7xD7n1GexlP8IF%2BZm2Qi%2BK86FA9fbP7kHir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIML2c5mIvnTN%2FyX1ZZKtwDNCzuM7zj03m6QTfgSku8fzw%2BzHjDBXOVAon3xilNlD5DspbZId7%2B4PCoByyygt8l3kjOWnaEII%2BtZxDWU00T3IVPgbZDPyQaMojTth5LIrQqaeseVaIPt0EDDjBd9SE8s8Fq9zVpcQ%2FXccZSxPqj6ieHO5pJVNM41OY%2BqaikYCKlll%2FgaXpuPkCwOSrCvCZ6qZzEuRg3t55VWiwgdxjBZ5lb2IYLT77Dp7d4jan7q5WigTjRfUtEcG4dMKgIplL2v8rafD5xqz5Cd%2FbI%2Fd0BIUE6XBEtZXkeggzLJoghBA8QvExY%2FEyij%2BWFpLVt3oA2oih6QuH7rJoqE%2FsozJw96DKnc4cvzRW%2Fg5oMu5obdhZAfa%2B%2FyYmdbYFqRM5SLu9ivPUNcgAQHAyaE9F5jbnNHKIPwlsBLT0ePNuqrbR8TXcwJ36BmyUCCF9KSmpXzFDOmgqR7PZJwRFWx045r8UA8tkJxSWGN9N9NIVmUA92dX6nkd%2Fb4jOL29jCU9aMZmhc2cekCjC12zOk%2BhRYYcC9J9Jh6sdHWU%2F%2Fh%2Fn4wf%2Bqc8sdHu9JdIytAXkSMCUMdoDdO4W%2B9VMWgMb%2BqSS5nmXCaV1K7RLj9X2O8fgQSxFIWMGf16dWdobyk1Gjn0kwpYTGyQY6pgH3yphDZDzAuj0npLLz8slUZaZo%2FWDwSMqaybXn4%2BPUYx8MCZ1pZx%2Bmf0PAfNou5THSnoe%2BVI8EGmCybe97eXSf9etcUZvqIAUxmtvqajSs%2BzyL1hjAMiMk0XcbnbyDqrnylOmzFSkGrie6dbFd3kYiWwHG6ERYpq55GHd80D7bOzabOGYUB16lAqyYX3YA6U2I8KyXUOhjx%2FOvd%2FG9274Pz2rID7EX&X-Amz-Signature=3de4f3a2273c09e121f36061458a370efff3df2825dc207749fd573b684472c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVXRYLOJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFKijyuwE2R5zr7HRnPgCLMeunago1dqpuQQCbG9hC8WAiB0Wnd70TXq7xD7n1GexlP8IF%2BZm2Qi%2BK86FA9fbP7kHir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIML2c5mIvnTN%2FyX1ZZKtwDNCzuM7zj03m6QTfgSku8fzw%2BzHjDBXOVAon3xilNlD5DspbZId7%2B4PCoByyygt8l3kjOWnaEII%2BtZxDWU00T3IVPgbZDPyQaMojTth5LIrQqaeseVaIPt0EDDjBd9SE8s8Fq9zVpcQ%2FXccZSxPqj6ieHO5pJVNM41OY%2BqaikYCKlll%2FgaXpuPkCwOSrCvCZ6qZzEuRg3t55VWiwgdxjBZ5lb2IYLT77Dp7d4jan7q5WigTjRfUtEcG4dMKgIplL2v8rafD5xqz5Cd%2FbI%2Fd0BIUE6XBEtZXkeggzLJoghBA8QvExY%2FEyij%2BWFpLVt3oA2oih6QuH7rJoqE%2FsozJw96DKnc4cvzRW%2Fg5oMu5obdhZAfa%2B%2FyYmdbYFqRM5SLu9ivPUNcgAQHAyaE9F5jbnNHKIPwlsBLT0ePNuqrbR8TXcwJ36BmyUCCF9KSmpXzFDOmgqR7PZJwRFWx045r8UA8tkJxSWGN9N9NIVmUA92dX6nkd%2Fb4jOL29jCU9aMZmhc2cekCjC12zOk%2BhRYYcC9J9Jh6sdHWU%2F%2Fh%2Fn4wf%2Bqc8sdHu9JdIytAXkSMCUMdoDdO4W%2B9VMWgMb%2BqSS5nmXCaV1K7RLj9X2O8fgQSxFIWMGf16dWdobyk1Gjn0kwpYTGyQY6pgH3yphDZDzAuj0npLLz8slUZaZo%2FWDwSMqaybXn4%2BPUYx8MCZ1pZx%2Bmf0PAfNou5THSnoe%2BVI8EGmCybe97eXSf9etcUZvqIAUxmtvqajSs%2BzyL1hjAMiMk0XcbnbyDqrnylOmzFSkGrie6dbFd3kYiWwHG6ERYpq55GHd80D7bOzabOGYUB16lAqyYX3YA6U2I8KyXUOhjx%2FOvd%2FG9274Pz2rID7EX&X-Amz-Signature=c1a434a75e1e8d221061ea8c36ecbc1d5446746df547ce264193a459f397c40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
