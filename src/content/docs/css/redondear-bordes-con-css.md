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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRCDXMJH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpE%2BAKzUH8y8w0ZKTQMRmoa%2Bd1NnvCFxGGZOEk%2F2lyZAIhAKRRRxBM4lU%2BnOisAh7rchP872%2Fd7XrNpyOyswhxYzL5KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK5ir9evf7jmVTj0oq3ANIuSY6Q%2B4DfffZ2UMonbpQ1lylGQCCjTXASsApI1gOkOA4HczhlcE2lU2MHh6v228B5S5tM9LXxEvU2VPqBXmeWM6t8S6OeKQDHXIwF5ONoEXE5uGVz6qH1nRVPRGZdXIRy8d3R5mn27FHjTvguVJXQJhzsfqaktYuoW1D%2FuMjKW6RIN8tiNAEgeDYupjSZ913P1L0yuNChvAizhrl6uFM2roV7rmjf6TXNV%2FKsvL9WXZWYSt%2BErpBvaZ4s5FyZDUdkR3mk8ywSSPAm6tt03RbU3S5BX%2BdwokDDhwswkWUXFSKs6fPGr%2B999OafplpNmd8JvCZSiu7S1Vxw7DkaS64%2BskJLaHpt5hWDQYm2a4AwfNUu4ef34oZqpfzRySRSUBqk9438WPBXv3%2BhpQT4T4JWpth%2FoC7NHvu5G12sxS7Z%2BpYyjuq1t%2Bx%2FdOse4UOBYEJs8CSJaLmcsiukCQ9RxWVIDmAsV6itIy31jPMjhaTPXQYJSJmmB%2FUum3yjNaE9jJ737M3kML6vJ0CodJhseHB4GPcYaVsa9BUplDPS%2B4I5an6aGC8VtxU1BSbwO4R6BX7YsjHyxoVnc6iVN3rG3JyUCtJroiQBwK0WiDaV0%2B4HQon7xkZ4m9%2BvGkRfzDJj9vJBjqkASZPzYoOwa2ul8U%2BvS5qIiR%2Bgqr1gb3pfyUGG6zmOPyoMXWBMQHX4Zaf3kGBmE3TKxiPZM4A%2Fim9qf%2BX2zPqw5d1k3G4zACxSI2kQZ94qbWXp%2B6UWgOxdCwUCpOwX%2FiIKo7oaSfKod6wBNALpd8ss546%2BvgUziLvl54d709Fd2tjATtqdjPQa7jjyS1v1twFG2naIzkBRUwfFM1%2BQIgOLYC5sm1y&X-Amz-Signature=ab9a1470ddf901102b62bfcf251bf1c77fae1256b5b3c684bd16ee8ebe185276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRCDXMJH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpE%2BAKzUH8y8w0ZKTQMRmoa%2Bd1NnvCFxGGZOEk%2F2lyZAIhAKRRRxBM4lU%2BnOisAh7rchP872%2Fd7XrNpyOyswhxYzL5KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK5ir9evf7jmVTj0oq3ANIuSY6Q%2B4DfffZ2UMonbpQ1lylGQCCjTXASsApI1gOkOA4HczhlcE2lU2MHh6v228B5S5tM9LXxEvU2VPqBXmeWM6t8S6OeKQDHXIwF5ONoEXE5uGVz6qH1nRVPRGZdXIRy8d3R5mn27FHjTvguVJXQJhzsfqaktYuoW1D%2FuMjKW6RIN8tiNAEgeDYupjSZ913P1L0yuNChvAizhrl6uFM2roV7rmjf6TXNV%2FKsvL9WXZWYSt%2BErpBvaZ4s5FyZDUdkR3mk8ywSSPAm6tt03RbU3S5BX%2BdwokDDhwswkWUXFSKs6fPGr%2B999OafplpNmd8JvCZSiu7S1Vxw7DkaS64%2BskJLaHpt5hWDQYm2a4AwfNUu4ef34oZqpfzRySRSUBqk9438WPBXv3%2BhpQT4T4JWpth%2FoC7NHvu5G12sxS7Z%2BpYyjuq1t%2Bx%2FdOse4UOBYEJs8CSJaLmcsiukCQ9RxWVIDmAsV6itIy31jPMjhaTPXQYJSJmmB%2FUum3yjNaE9jJ737M3kML6vJ0CodJhseHB4GPcYaVsa9BUplDPS%2B4I5an6aGC8VtxU1BSbwO4R6BX7YsjHyxoVnc6iVN3rG3JyUCtJroiQBwK0WiDaV0%2B4HQon7xkZ4m9%2BvGkRfzDJj9vJBjqkASZPzYoOwa2ul8U%2BvS5qIiR%2Bgqr1gb3pfyUGG6zmOPyoMXWBMQHX4Zaf3kGBmE3TKxiPZM4A%2Fim9qf%2BX2zPqw5d1k3G4zACxSI2kQZ94qbWXp%2B6UWgOxdCwUCpOwX%2FiIKo7oaSfKod6wBNALpd8ss546%2BvgUziLvl54d709Fd2tjATtqdjPQa7jjyS1v1twFG2naIzkBRUwfFM1%2BQIgOLYC5sm1y&X-Amz-Signature=f922e727c507a4b931c2a39fe3473726c3209f2636d8be62ca5508623553955e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
