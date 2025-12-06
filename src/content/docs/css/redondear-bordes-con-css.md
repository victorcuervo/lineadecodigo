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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UPHGVR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHFNtbkePdeU5HjksmRW1MPxamdJfM61jXissk%2B1h4aAiEA6Gk%2BnzsMtR7R5xV4Exqqw88z1HfzR4r2ejRLAXy%2Fo20q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHkHeAcKIiRvHg6lhCrcA%2FXIjBQ7FalYTvphLczgKW9TDxqi%2F03Jfkt6MnlvRcxWrnytmfdituSCPgK5Sqcj%2BooKK4lMqnUPUOJWHWqDA3IEZ8Bpyi%2Fjry2GKIj%2BrPc7323%2B6BQFBx0WV0O%2BJqgnZM9M7cXqRF1%2FBYG%2B6N4fTNWP5UpF91rlDUCe0uC59Z%2FMYX%2F3b85EU7PUJP9oUSJWhZJ7YHG%2B1glvo3QjV39UdLHGymhNKwpglRu2kx%2B%2FAptq10u9rQgYBPs7AbBMpp3ODNilIw3wzMGwgdfAtcrwtwFFHySoB4rffvTTwiEpmyK7X3S6OHY2cQfdmDFVCNROjEEFJp0XYSfJ0ajZytG%2FfGQRho6yoslwj3AiE%2F1AqgtfkFI%2B9IfUb0g3WeXxWERN3qKfRh5JXHA1Wy3XS0XL43hNNn6wgyhDJfNbktOZA7w8VJh1f2BoI%2B2rnLlp2GjBPT%2F1CIlLfYlF9uaOr8%2FkS5Madxd9fnYKAY7mUd0t2DaiC5Xs5WZr61YGJCEwFOhkYehgWBPULsy05IB2X8YqonhSjEuPD5%2Bg1eg5wDZfdytkT5q3WNnCoOzUj7MabtJDvAUengzcJWQGZgDl7LaYDnFI8sQXqRYUXo47dEu0PiQ%2BcjsrovvDeyhBPEtrMJ3U0skGOqUBp6g6LJcDS5CDyXgIfquyEgXnkhIjs5vnTOU5jLyV1h8N%2F6ZVNX2abohTS7Tg3dKmDPSTh9PrKHV4pk71AG1Rex7mV7qiDxAIUQ2EgmMHK1qdabzvBqV8TVhr7rUMBcgZmXzILXwnOs8jvRQOIWHAAk5E57lRJKD%2FRBdjOLQPneWqamtU46ZfArvSaQlfDDsu08zv2fbq65ooybQceVs9hO4%2FVXaE&X-Amz-Signature=9bb9f07d223895765314ded37a1025922a3d5d069ab69783ad8d763402f6e326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UPHGVR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHFNtbkePdeU5HjksmRW1MPxamdJfM61jXissk%2B1h4aAiEA6Gk%2BnzsMtR7R5xV4Exqqw88z1HfzR4r2ejRLAXy%2Fo20q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHkHeAcKIiRvHg6lhCrcA%2FXIjBQ7FalYTvphLczgKW9TDxqi%2F03Jfkt6MnlvRcxWrnytmfdituSCPgK5Sqcj%2BooKK4lMqnUPUOJWHWqDA3IEZ8Bpyi%2Fjry2GKIj%2BrPc7323%2B6BQFBx0WV0O%2BJqgnZM9M7cXqRF1%2FBYG%2B6N4fTNWP5UpF91rlDUCe0uC59Z%2FMYX%2F3b85EU7PUJP9oUSJWhZJ7YHG%2B1glvo3QjV39UdLHGymhNKwpglRu2kx%2B%2FAptq10u9rQgYBPs7AbBMpp3ODNilIw3wzMGwgdfAtcrwtwFFHySoB4rffvTTwiEpmyK7X3S6OHY2cQfdmDFVCNROjEEFJp0XYSfJ0ajZytG%2FfGQRho6yoslwj3AiE%2F1AqgtfkFI%2B9IfUb0g3WeXxWERN3qKfRh5JXHA1Wy3XS0XL43hNNn6wgyhDJfNbktOZA7w8VJh1f2BoI%2B2rnLlp2GjBPT%2F1CIlLfYlF9uaOr8%2FkS5Madxd9fnYKAY7mUd0t2DaiC5Xs5WZr61YGJCEwFOhkYehgWBPULsy05IB2X8YqonhSjEuPD5%2Bg1eg5wDZfdytkT5q3WNnCoOzUj7MabtJDvAUengzcJWQGZgDl7LaYDnFI8sQXqRYUXo47dEu0PiQ%2BcjsrovvDeyhBPEtrMJ3U0skGOqUBp6g6LJcDS5CDyXgIfquyEgXnkhIjs5vnTOU5jLyV1h8N%2F6ZVNX2abohTS7Tg3dKmDPSTh9PrKHV4pk71AG1Rex7mV7qiDxAIUQ2EgmMHK1qdabzvBqV8TVhr7rUMBcgZmXzILXwnOs8jvRQOIWHAAk5E57lRJKD%2FRBdjOLQPneWqamtU46ZfArvSaQlfDDsu08zv2fbq65ooybQceVs9hO4%2FVXaE&X-Amz-Signature=35f391f26a1829edfe2f815fb2491ab7a0d3393b933bc4c214528f775beab02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
