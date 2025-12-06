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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZN5OWM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDQGS7Yn2YWNpe%2BK3AmYTJvxk7e50LZs7B%2BgTw2TtL%2FAiAjSjKgBDSr3zHGPdAItOrUp%2F4PRGE5YdgcUrr0%2FuRXvCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMPDYloGViot1evZpCKtwD2bNM7xecHiSqPZv8TMqztiRJyQ3oargdv25KtagXovaN4idzbSwHnHPXl1hSBf6e%2F05%2B5K%2BXrXyFSPkmFYxbgIDISCvvabQrkRysJMmChygLf%2FMkRV84zkNG4dQaYLSFds%2BoGsn19pP837223J32bJeiixGAfRJigvs%2BD92VT2FgZ26EzhbdXsGI6Jh3r%2BZah5KPyeaVRvcRuoomjsM3pJ%2BGfLk32p1wQnxHJc5VSKJo%2BO52beZ%2FTU0eQ%2F7iN2Cl0K3fEtzCBG6kU6oztGVBpL39uKTTOdVfTXsry7T%2BQ%2BbL4k0mks%2BFLaByYvyvKhs5esDck8J4Ia4tmOSa573NKh15pf9OFdjWMbqET2Gr%2BokLTkjbRoQhEu83pCq4P2Kd%2F73m9z4v7CVMW7puXCbEMnYFMY8MPJyC9%2BuEHk16hRhxG6wxUFYc0U0QVmjJiN8gM63FqsahAKFNgmZGQPuXsKx44HxxxCNGLU4p9eQY98rZR2HPP7kAjXNqUJyb3OtSVt8ITVB%2BUR5lRFaXbSSSA3Kq8a8zPTKvK5pgKVgva9%2BDxHrs0EtQbWlmq%2B2SPRw6WdjJj6AUYCBrnTNZ%2Fd4xeCcD%2BZcIbSb4BG8k7ZeDnphBpd0OJL%2BUKu0XvikwkevPyQY6pgEKiILm%2B4pJmvf8ql0yFnKGV8abUxe2wfm7lw8sNP0unJv3KtQdqZHFd0G%2FVGvYBSNlMslDzDRDbFFE%2BOYXjJm3orE6aFuqgx%2BEeirKloD7gM4CJgb8TvpwiML1U1OM2Q%2BqDg%2BPitTJNbSIlERFp0R3bx8Lr8LaWFkV77nWXQOMvzU%2BP94kC9xK2z9Y%2F1q2%2BJIsnjcBuk1BrRmPdGBZf%2FFHyie7BiMk&X-Amz-Signature=404a72636962c0ca20ff8b653afa9d78c6cbe56d67c41a49bd6b4dc8f12ca8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZN5OWM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDQGS7Yn2YWNpe%2BK3AmYTJvxk7e50LZs7B%2BgTw2TtL%2FAiAjSjKgBDSr3zHGPdAItOrUp%2F4PRGE5YdgcUrr0%2FuRXvCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMPDYloGViot1evZpCKtwD2bNM7xecHiSqPZv8TMqztiRJyQ3oargdv25KtagXovaN4idzbSwHnHPXl1hSBf6e%2F05%2B5K%2BXrXyFSPkmFYxbgIDISCvvabQrkRysJMmChygLf%2FMkRV84zkNG4dQaYLSFds%2BoGsn19pP837223J32bJeiixGAfRJigvs%2BD92VT2FgZ26EzhbdXsGI6Jh3r%2BZah5KPyeaVRvcRuoomjsM3pJ%2BGfLk32p1wQnxHJc5VSKJo%2BO52beZ%2FTU0eQ%2F7iN2Cl0K3fEtzCBG6kU6oztGVBpL39uKTTOdVfTXsry7T%2BQ%2BbL4k0mks%2BFLaByYvyvKhs5esDck8J4Ia4tmOSa573NKh15pf9OFdjWMbqET2Gr%2BokLTkjbRoQhEu83pCq4P2Kd%2F73m9z4v7CVMW7puXCbEMnYFMY8MPJyC9%2BuEHk16hRhxG6wxUFYc0U0QVmjJiN8gM63FqsahAKFNgmZGQPuXsKx44HxxxCNGLU4p9eQY98rZR2HPP7kAjXNqUJyb3OtSVt8ITVB%2BUR5lRFaXbSSSA3Kq8a8zPTKvK5pgKVgva9%2BDxHrs0EtQbWlmq%2B2SPRw6WdjJj6AUYCBrnTNZ%2Fd4xeCcD%2BZcIbSb4BG8k7ZeDnphBpd0OJL%2BUKu0XvikwkevPyQY6pgEKiILm%2B4pJmvf8ql0yFnKGV8abUxe2wfm7lw8sNP0unJv3KtQdqZHFd0G%2FVGvYBSNlMslDzDRDbFFE%2BOYXjJm3orE6aFuqgx%2BEeirKloD7gM4CJgb8TvpwiML1U1OM2Q%2BqDg%2BPitTJNbSIlERFp0R3bx8Lr8LaWFkV77nWXQOMvzU%2BP94kC9xK2z9Y%2F1q2%2BJIsnjcBuk1BrRmPdGBZf%2FFHyie7BiMk&X-Amz-Signature=6f0b3c108484aad0b0100000678fc13bb89d8f3cd51e42ec95de87da1ddd0b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
