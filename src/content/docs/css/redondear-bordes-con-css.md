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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVHFPB2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl3kmlC15DDgGwl7XFN61gWfbP4imFQK9nloO%2FdKLnzAiB9fKIAG04RZMWVOQSWpA72ORFyy1lq4hpMsWDDUa3K8CqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Iyutvm0mc3FcVbZKtwDRnrvqwA2Bu9%2BkaQ4NZ4IGCVoehhjKIbdOF1Mz3RswvftLRdfQmJyBJzuyvjaB3p3dESSIcCJIfptyOMl0sNCvhS3TJLtEmySKUjLbZ0%2FfTSi6mVle4fd%2BLUD%2BKMJFkNKUGEWBcJDL%2BMJgaNfbYI004zj7IvNIwAZ0OWIDgHz3%2FkB2DrvouQUPfGJLAHqhqzIFz8ex7lGFF1T17dxZjhDlZ7f41uPISJI9eqwny6WfEwbWD%2F3lVO%2F89%2F5hc2Q4T9G3C3u9g6Zubpia0IzHl2LjRWL1YoEL5JfVB9uRIS3A%2FuTT9xKyy6w%2BElofAawuOWv0%2B43qsmQaW5c9GNvHktc5KpUuqPlXqr05yHHuh2yrHy%2FVKP2RRidFzZgvpqqPpqhm3MHDL1gCOXfoNN%2F3mutbaxvoaTEAvEepVBYFQpgm50Vkl9%2FXwMMjIfBAKqz4XqJ7uqiiw9BnldvuqHWXhlBkJ3%2FZhmUxattCplmY545dqfW2RPdm1sK97CrnEFLnox6Ef9RarNabyIpOKeX3D44RBDkln1iZYAlnaD%2FBZF%2BuFXT%2FljtfkpHFu%2BULJnTiL3PU7iE%2BltYcoPnTg1XgEPYFFXHITtyQ3Ujo9ZR%2BmFZMeKVwZxWMrZiDOEglvQwiKLUyQY6pgEpii3%2FDb0SPW7vQQfwW95S7QLEUKP1eaZlAW2yVWbDc9ag4Z0nyI6tXe7DCaWOwcldlNVuEQNH1ggZQ3iHsVqVw8gp4ABs8FMTvlp8KZZEdxDmPDw0ivLvHRD%2FjvI1CDIszNjDjD6QTWeybWnquEv%2BGzcOZrLqCXx2SdRs7K7e00dp%2F3gWKFZCSh9yLKwTe9TSuP1Fb2zpKyNwot6SXSTUzFyVkHXs&X-Amz-Signature=74d0dca722feec675b58018c11c08a7cd3bbbd5c43e36b7e7e98cb59d572e6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVHFPB2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl3kmlC15DDgGwl7XFN61gWfbP4imFQK9nloO%2FdKLnzAiB9fKIAG04RZMWVOQSWpA72ORFyy1lq4hpMsWDDUa3K8CqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Iyutvm0mc3FcVbZKtwDRnrvqwA2Bu9%2BkaQ4NZ4IGCVoehhjKIbdOF1Mz3RswvftLRdfQmJyBJzuyvjaB3p3dESSIcCJIfptyOMl0sNCvhS3TJLtEmySKUjLbZ0%2FfTSi6mVle4fd%2BLUD%2BKMJFkNKUGEWBcJDL%2BMJgaNfbYI004zj7IvNIwAZ0OWIDgHz3%2FkB2DrvouQUPfGJLAHqhqzIFz8ex7lGFF1T17dxZjhDlZ7f41uPISJI9eqwny6WfEwbWD%2F3lVO%2F89%2F5hc2Q4T9G3C3u9g6Zubpia0IzHl2LjRWL1YoEL5JfVB9uRIS3A%2FuTT9xKyy6w%2BElofAawuOWv0%2B43qsmQaW5c9GNvHktc5KpUuqPlXqr05yHHuh2yrHy%2FVKP2RRidFzZgvpqqPpqhm3MHDL1gCOXfoNN%2F3mutbaxvoaTEAvEepVBYFQpgm50Vkl9%2FXwMMjIfBAKqz4XqJ7uqiiw9BnldvuqHWXhlBkJ3%2FZhmUxattCplmY545dqfW2RPdm1sK97CrnEFLnox6Ef9RarNabyIpOKeX3D44RBDkln1iZYAlnaD%2FBZF%2BuFXT%2FljtfkpHFu%2BULJnTiL3PU7iE%2BltYcoPnTg1XgEPYFFXHITtyQ3Ujo9ZR%2BmFZMeKVwZxWMrZiDOEglvQwiKLUyQY6pgEpii3%2FDb0SPW7vQQfwW95S7QLEUKP1eaZlAW2yVWbDc9ag4Z0nyI6tXe7DCaWOwcldlNVuEQNH1ggZQ3iHsVqVw8gp4ABs8FMTvlp8KZZEdxDmPDw0ivLvHRD%2FjvI1CDIszNjDjD6QTWeybWnquEv%2BGzcOZrLqCXx2SdRs7K7e00dp%2F3gWKFZCSh9yLKwTe9TSuP1Fb2zpKyNwot6SXSTUzFyVkHXs&X-Amz-Signature=3b21fb83545944dee4a405bea2d653ece0fcdbd7e54123c42c8bc6a2ae6b161e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
