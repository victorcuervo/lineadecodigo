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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DRYPJV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrc%2FGo5K5Q1vjJa8kdgV2taeMJYKNsayEPSMQ%2F4UZDTAiEA0%2BxXVUP5x1DE5Bo1P%2FqsZJtpE45D%2BwejsDFPPhC4MI0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFnbgONEtKdQn9CpqSrcAyGxYMNwIdy2L9%2FoCceRgJLZtsRAMNO97u8a7tJyML2E3mXZl7HoTT2gRcprermeiNH6L%2FFUWpmeL9u1hXx9mSk9ois8G8Js1wwm5G%2Bl1qr9K%2BYOu5%2ByHELYC2xYjf8vLyn0sZnA6hdFq5UuMEhnwF8fP9208xJmQr9Kp8cye5QRFzcZWFlih7outx9IDzi3zb3cgUNcH37dYUO84l6IO1bEuWZgC5dBqNq1Kv7ZKMpmfa6mT%2FVCTkTHKEl5%2FbGHb4SOFTUER7JfEGy0RYMMTDT5vENpicnYHT3mn98aum2%2F2My%2FAgMYEb3F7rfoDeh4exhaFDuosVkX6vCTIT4KPKvg11tJb52uXltXe9HyP7CYoF0nGtVRzfXFqUnR6HknOUh3gu7LesxY7n0QYZ%2F5aGo15%2B0RL2Qcb%2BbIutHQlyLjdIwTI5AMGmBiGIb%2FExKy75KP1pjM8atVWTefe8FAKdgAKO8%2Bg1U2otSP2uBjox3Wi9wsaGF20ktZwZc2K%2Fe65%2FJbmOTHE5sELIdpaWV89TdYbnixvpuH17dQoUgfw%2BnobXvPmv1N5f4KCCZOI3Y%2BfETUIADWxlIXn18XMuakI6bk2r1qrDf%2BXV8zRR%2Ft0vCB4oo2COtN77qYDCVtMOT8zskGOqUBzo%2BFBlDlUn3r4F7frQhpVENOzJPKNYd8tmnG%2BoI%2BHKAtuy%2F%2BQUMBSfnHPll%2FBuD5ZO5uqayFfI4DEoLSFH7%2FZHEzGBzKFn2rFFBFcdXuZqEFDog350%2B8j7RXks1oq%2BS7XpfN%2BXWrFF0CJ3cwnNgsgIC1rDRzAERq1otUgy66%2Fjk0RJUo4nvaJ7RERFW7gVvJpp3t7eNzDLQ7j7Nr%2FT8HHKQT3BG8&X-Amz-Signature=29892dcf4bb22442ec0d4588d5fa8fbe47d927640b99b4815408286c812b0c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DRYPJV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrc%2FGo5K5Q1vjJa8kdgV2taeMJYKNsayEPSMQ%2F4UZDTAiEA0%2BxXVUP5x1DE5Bo1P%2FqsZJtpE45D%2BwejsDFPPhC4MI0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFnbgONEtKdQn9CpqSrcAyGxYMNwIdy2L9%2FoCceRgJLZtsRAMNO97u8a7tJyML2E3mXZl7HoTT2gRcprermeiNH6L%2FFUWpmeL9u1hXx9mSk9ois8G8Js1wwm5G%2Bl1qr9K%2BYOu5%2ByHELYC2xYjf8vLyn0sZnA6hdFq5UuMEhnwF8fP9208xJmQr9Kp8cye5QRFzcZWFlih7outx9IDzi3zb3cgUNcH37dYUO84l6IO1bEuWZgC5dBqNq1Kv7ZKMpmfa6mT%2FVCTkTHKEl5%2FbGHb4SOFTUER7JfEGy0RYMMTDT5vENpicnYHT3mn98aum2%2F2My%2FAgMYEb3F7rfoDeh4exhaFDuosVkX6vCTIT4KPKvg11tJb52uXltXe9HyP7CYoF0nGtVRzfXFqUnR6HknOUh3gu7LesxY7n0QYZ%2F5aGo15%2B0RL2Qcb%2BbIutHQlyLjdIwTI5AMGmBiGIb%2FExKy75KP1pjM8atVWTefe8FAKdgAKO8%2Bg1U2otSP2uBjox3Wi9wsaGF20ktZwZc2K%2Fe65%2FJbmOTHE5sELIdpaWV89TdYbnixvpuH17dQoUgfw%2BnobXvPmv1N5f4KCCZOI3Y%2BfETUIADWxlIXn18XMuakI6bk2r1qrDf%2BXV8zRR%2Ft0vCB4oo2COtN77qYDCVtMOT8zskGOqUBzo%2BFBlDlUn3r4F7frQhpVENOzJPKNYd8tmnG%2BoI%2BHKAtuy%2F%2BQUMBSfnHPll%2FBuD5ZO5uqayFfI4DEoLSFH7%2FZHEzGBzKFn2rFFBFcdXuZqEFDog350%2B8j7RXks1oq%2BS7XpfN%2BXWrFF0CJ3cwnNgsgIC1rDRzAERq1otUgy66%2Fjk0RJUo4nvaJ7RERFW7gVvJpp3t7eNzDLQ7j7Nr%2FT8HHKQT3BG8&X-Amz-Signature=d8ec1c8d9f8799b8c048208bff033c069e952a79eeb4b5388d37e85f33312635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
