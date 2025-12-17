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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LZHQWPV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDanLPSDtZ4tvZ6N0ScxpuMF0bqcNG%2BChkheQHn2mENUAiEAtr8lsnuPTpOBoNiv5lHlMvfQcT3X8gTeWup%2BoNn%2BFx0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDG9K93VPtSlxF3ImSCrcA2BYlf66NccBxM9NJQ4cRnry6eck1hCJN6C9Hns9M0Yo7VMAYE3GOhkgBO9ix994QnDNw88CgVwIuiVLbhiGYyo4yDw6RdQMdEK2yh7s%2F1Mhsz4RfumzKq5MyDXI8AQaQvDMqk1Sa6AbIxZ9z5ediSsU3U1XnOyUOO5c%2FrkI9zwWd1vxryoTQYEBjCbccrujNU1FuuMVBhS4R%2FsZirHNNz4BTVGyS2aA45pn6vrLotrancBxFzL0%2Fmr%2FtEM5n1mn%2FhlcFaMw21WjIVrFVNgKxY8MbS5QKfLen%2FVT%2BJ9frbDC%2ByrNGUUue5Ktfnz7lgug2JKtwSD9LMi4SC1lev5vCQSOeQmjiGxCnLnfLDYTnkTheU3R7mny2x6531Q7O50tzcVBmHYbH1sBeq4wbLorRapZxL3HlVelvOQuf7p1ddsAkz6yY4O3OL4JgFtAEQigy3QlUFSGMqlRTICeDVkP4nJ1PhPfXuoZ4Pbi7B5SxvBGmTucQK0RFbqJjsyRDb%2B6gxgQg9LA%2BS2IUfQ0%2BuGljBcWYIJLsPVl6jG1RJxGVnbfSE7jdUf3OxXkx39PS8ZpdckMtWkyx3GDj2ik7dVO90Wj%2FLhvj7%2FwMepgEIkv7DmavfnOQYWaGtznzHJ4MNCDiMoGOqUBY60DPtSFyuLBgbtMLnA5pLOygNhc4jhV9NTlEtPR3RSP6mCRQFNYzPTHDKxRgT58CybPDaryQ3Q7qNxemeuFpuLoeO%2FeesS2edMUckyCUJJ8TXfAd1o82MvHqDiEafJsYcHhbbL2UJm%2Bhxz5OL7YPLjiag6v0huweAk9O1a3ZtJRnnfvSlpyZygols%2FrW%2BGRvi2h7B3yhiN8VIpCBOkhb7G0hcqT&X-Amz-Signature=22520b8fb2250e31ad1f18ebbc7920264d5175ac3e579a32c8f6bbd4525bee66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LZHQWPV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDanLPSDtZ4tvZ6N0ScxpuMF0bqcNG%2BChkheQHn2mENUAiEAtr8lsnuPTpOBoNiv5lHlMvfQcT3X8gTeWup%2BoNn%2BFx0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDG9K93VPtSlxF3ImSCrcA2BYlf66NccBxM9NJQ4cRnry6eck1hCJN6C9Hns9M0Yo7VMAYE3GOhkgBO9ix994QnDNw88CgVwIuiVLbhiGYyo4yDw6RdQMdEK2yh7s%2F1Mhsz4RfumzKq5MyDXI8AQaQvDMqk1Sa6AbIxZ9z5ediSsU3U1XnOyUOO5c%2FrkI9zwWd1vxryoTQYEBjCbccrujNU1FuuMVBhS4R%2FsZirHNNz4BTVGyS2aA45pn6vrLotrancBxFzL0%2Fmr%2FtEM5n1mn%2FhlcFaMw21WjIVrFVNgKxY8MbS5QKfLen%2FVT%2BJ9frbDC%2ByrNGUUue5Ktfnz7lgug2JKtwSD9LMi4SC1lev5vCQSOeQmjiGxCnLnfLDYTnkTheU3R7mny2x6531Q7O50tzcVBmHYbH1sBeq4wbLorRapZxL3HlVelvOQuf7p1ddsAkz6yY4O3OL4JgFtAEQigy3QlUFSGMqlRTICeDVkP4nJ1PhPfXuoZ4Pbi7B5SxvBGmTucQK0RFbqJjsyRDb%2B6gxgQg9LA%2BS2IUfQ0%2BuGljBcWYIJLsPVl6jG1RJxGVnbfSE7jdUf3OxXkx39PS8ZpdckMtWkyx3GDj2ik7dVO90Wj%2FLhvj7%2FwMepgEIkv7DmavfnOQYWaGtznzHJ4MNCDiMoGOqUBY60DPtSFyuLBgbtMLnA5pLOygNhc4jhV9NTlEtPR3RSP6mCRQFNYzPTHDKxRgT58CybPDaryQ3Q7qNxemeuFpuLoeO%2FeesS2edMUckyCUJJ8TXfAd1o82MvHqDiEafJsYcHhbbL2UJm%2Bhxz5OL7YPLjiag6v0huweAk9O1a3ZtJRnnfvSlpyZygols%2FrW%2BGRvi2h7B3yhiN8VIpCBOkhb7G0hcqT&X-Amz-Signature=be0ad2a5eb311259493887b46c99278ac433fe2407c66853fabbd35b9f184a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
