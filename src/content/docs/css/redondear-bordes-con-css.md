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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMORC7P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMOvlcIVwOzxXgZECFCDbs50wa5FR9pX7WjP6lmmrcLAiEAoGO3CvNcRKmeyT8G6xrvGGAyzHkzjjlbnwV%2ByFJlVJ4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFv5vk%2FhkRztnL7NVSrcA70UeEBTJHjU%2Bd1fJULHpVZNz%2FLPMLS4tfpjHMFOOkXpmfDHtVWpTP9VYWqQQC6MQvcrOCaG1dELK6xTKMraeIzsk7ql74Fzc3FlhaRJVIuRWwCh0PQFzZm%2BLRMYURokwSyWZX%2FCVYJtudR2p06zoJDKZM6WAS%2BSfXoPR%2BSiMIItLQb8tOSVlwLCIlGQ1zggNUrjLcRbvNZ4aU0yl8xt988A7wLskQI1NMIm%2FlRJd%2BYJXOoXA1qrwyzy5QRTyrQhpzlcEardvSZcoy2d8x244pSCCF4qy%2FGXgO3AauDwMy%2F%2FN52qoQ7eUxxGR1Mw0Uu%2BeqpjjtyZxiq76nRmvQoY5hlo36ZlPSrjud6jvPz7R8PVIQbzNu0vjBu0AHMj%2BflZh4QqgH1gMYZwUsUlill0Bd3x4GHzRtAmaxOhnVxcCHiG7q1EypVSu9vqsHpMWFUX39KztdBGfC%2Bu0pI9MccW%2BmURJOpF%2FiXzg4l9GlAO8h1SF7iUrCjPr9CwGMIkFQ25x3xPfNrCXg1kQjyqaxd2oJf5stJJZLwVwlNk7yUK56FmaMPk6ZSiskhgZ%2F76sfmd%2Bo4N4qYPuDPTXE%2FnfHF%2FuYgif%2BmFov2MGyK6%2BfmHM74Z7mTQNjjEG8JmMY%2BlMJXU0skGOqUBUjve9YQmErNqtkLKErrcjgUg57O9Ltzx6p4d6pJJ%2BWvjQkCjIXySF1bProli37sqZ79JL9MPMpOd%2BWizm0v5ZeVx1aOXjPWl6bxBDpW1K%2BjVReS8aJ%2BNM9nwE76bimAIvqGmsoYl4WbRV5%2BjcLXOdowy1FhWM3wetAUeaLwzmPn7S24R3tjOhnZ9ePfhk9sXjI7vCDg%2FM%2FX9S7%2FCT%2BDkAeYusE15&X-Amz-Signature=fa98cd37f436d6848cea0df27a6f11297fd76d77c4a0facf9c5bd1375cc5e8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMORC7P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMOvlcIVwOzxXgZECFCDbs50wa5FR9pX7WjP6lmmrcLAiEAoGO3CvNcRKmeyT8G6xrvGGAyzHkzjjlbnwV%2ByFJlVJ4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFv5vk%2FhkRztnL7NVSrcA70UeEBTJHjU%2Bd1fJULHpVZNz%2FLPMLS4tfpjHMFOOkXpmfDHtVWpTP9VYWqQQC6MQvcrOCaG1dELK6xTKMraeIzsk7ql74Fzc3FlhaRJVIuRWwCh0PQFzZm%2BLRMYURokwSyWZX%2FCVYJtudR2p06zoJDKZM6WAS%2BSfXoPR%2BSiMIItLQb8tOSVlwLCIlGQ1zggNUrjLcRbvNZ4aU0yl8xt988A7wLskQI1NMIm%2FlRJd%2BYJXOoXA1qrwyzy5QRTyrQhpzlcEardvSZcoy2d8x244pSCCF4qy%2FGXgO3AauDwMy%2F%2FN52qoQ7eUxxGR1Mw0Uu%2BeqpjjtyZxiq76nRmvQoY5hlo36ZlPSrjud6jvPz7R8PVIQbzNu0vjBu0AHMj%2BflZh4QqgH1gMYZwUsUlill0Bd3x4GHzRtAmaxOhnVxcCHiG7q1EypVSu9vqsHpMWFUX39KztdBGfC%2Bu0pI9MccW%2BmURJOpF%2FiXzg4l9GlAO8h1SF7iUrCjPr9CwGMIkFQ25x3xPfNrCXg1kQjyqaxd2oJf5stJJZLwVwlNk7yUK56FmaMPk6ZSiskhgZ%2F76sfmd%2Bo4N4qYPuDPTXE%2FnfHF%2FuYgif%2BmFov2MGyK6%2BfmHM74Z7mTQNjjEG8JmMY%2BlMJXU0skGOqUBUjve9YQmErNqtkLKErrcjgUg57O9Ltzx6p4d6pJJ%2BWvjQkCjIXySF1bProli37sqZ79JL9MPMpOd%2BWizm0v5ZeVx1aOXjPWl6bxBDpW1K%2BjVReS8aJ%2BNM9nwE76bimAIvqGmsoYl4WbRV5%2BjcLXOdowy1FhWM3wetAUeaLwzmPn7S24R3tjOhnZ9ePfhk9sXjI7vCDg%2FM%2FX9S7%2FCT%2BDkAeYusE15&X-Amz-Signature=473a6350f51ecf9c4227e22349d2a62db4d0ab939eee04b3b211b87c3b8b2c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
