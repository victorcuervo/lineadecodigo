---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZES3WDT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyz5kKoA4O4YLtUjkKQgAQBORmL1NOdVVmZPZTtv%2FvbAIgWtD%2FESyH9j2aAIPqCH4tji%2BythJTAjgffqUab%2BPVFBkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDK13fVtBMC%2B9p3KDoCrcAwPsexcVK83ka0DgyXVWNF7zzs4wmJHNhOzIOWEXF9uvU82wDkeydRvABNHCpK2yiZdqxvfklE1sD9BhHYbY4Mz365mkhGsimR2ecc7AWu%2BlRf15dLjOYn9YVPY7vKrkxKWriLWc0AHt7R%2BEKOSBh9hQ6vKGkaqS0dfescyx3LazPZtpY3IRRRZJiDIw52XjeIeU56puL7x5uIWES%2BGa76hXIjTdZP1qGE55r1p37eeNkfJkJ8HtnxmlMj7zn0MQSc%2BFPIOEs9%2F%2FXMsDRQBix233pnSzAZJ7TcBB2VjlmEpE8Y3mzsarkH3u2ccWg4lOgl2iecwxK6WF1W3hjJ%2Bh0zDEeWd0Vg3lvmHZf%2BX2Sv5BPPqCOw7XZfyeliyqSvpcuXMstOeUUePPTb99TF9ElQQWQjNvJ08Bi%2FeoJGDqGPCZfirc3sDuRWuxbVK59txmfsMz5XeZgJ9%2BTLIirTgOO1jigS1CUuvsnBpB83pJ8PTCm6UErqez2d%2Fy%2Flb9hESziopKDeX1YfFNdHT5s55ULV0oq8GONFzjDSXPETTSJjhQGdYXk82lxZxOj4%2FAMG1Gkv6%2F3nL3sMSMETS%2BIr8%2Bw8V3PGAMDnZ74ti29EK%2FsRO5chuo1LvAWWg5ji3wMIa4icoGOqUByDTvE7Gclu6ywxVlI1gi6ZVWyLvxTbiXW6a%2BEauK%2Fhhg9s8u94jYoYIbHv4pn7tlMbwqMR3fDuJAlrFcZHjPPxoBzhDNsTR9c0HMKIXgq8lgq4W7DwT95uR0v7zSC%2FHrjeJQ8TbZitZIh2wT09QS2r65w2sS3KdPbmBlmh72UnNIkyDvkjKofpTCC1bG%2Fgqbz0yD0LI%2FR7DF7J9rmYAtISu2Pj0R&X-Amz-Signature=7da571cfefd69ad779cef53e4457ba69e65e3a0f8f40f78cc661a36bd1a768e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZES3WDT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyz5kKoA4O4YLtUjkKQgAQBORmL1NOdVVmZPZTtv%2FvbAIgWtD%2FESyH9j2aAIPqCH4tji%2BythJTAjgffqUab%2BPVFBkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDK13fVtBMC%2B9p3KDoCrcAwPsexcVK83ka0DgyXVWNF7zzs4wmJHNhOzIOWEXF9uvU82wDkeydRvABNHCpK2yiZdqxvfklE1sD9BhHYbY4Mz365mkhGsimR2ecc7AWu%2BlRf15dLjOYn9YVPY7vKrkxKWriLWc0AHt7R%2BEKOSBh9hQ6vKGkaqS0dfescyx3LazPZtpY3IRRRZJiDIw52XjeIeU56puL7x5uIWES%2BGa76hXIjTdZP1qGE55r1p37eeNkfJkJ8HtnxmlMj7zn0MQSc%2BFPIOEs9%2F%2FXMsDRQBix233pnSzAZJ7TcBB2VjlmEpE8Y3mzsarkH3u2ccWg4lOgl2iecwxK6WF1W3hjJ%2Bh0zDEeWd0Vg3lvmHZf%2BX2Sv5BPPqCOw7XZfyeliyqSvpcuXMstOeUUePPTb99TF9ElQQWQjNvJ08Bi%2FeoJGDqGPCZfirc3sDuRWuxbVK59txmfsMz5XeZgJ9%2BTLIirTgOO1jigS1CUuvsnBpB83pJ8PTCm6UErqez2d%2Fy%2Flb9hESziopKDeX1YfFNdHT5s55ULV0oq8GONFzjDSXPETTSJjhQGdYXk82lxZxOj4%2FAMG1Gkv6%2F3nL3sMSMETS%2BIr8%2Bw8V3PGAMDnZ74ti29EK%2FsRO5chuo1LvAWWg5ji3wMIa4icoGOqUByDTvE7Gclu6ywxVlI1gi6ZVWyLvxTbiXW6a%2BEauK%2Fhhg9s8u94jYoYIbHv4pn7tlMbwqMR3fDuJAlrFcZHjPPxoBzhDNsTR9c0HMKIXgq8lgq4W7DwT95uR0v7zSC%2FHrjeJQ8TbZitZIh2wT09QS2r65w2sS3KdPbmBlmh72UnNIkyDvkjKofpTCC1bG%2Fgqbz0yD0LI%2FR7DF7J9rmYAtISu2Pj0R&X-Amz-Signature=84e5d3ceeb15192d1004a478fb04ef49cc789e11d703e4feca16423ebac7100d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
