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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XACB7HMX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6V59CcfgrsAuv7HrTdyV9Qwo%2Bw3gjeTFet8qoqIvvnAiEAvjHADPQ7%2BOGGH9mKYrpB41pA8OrisXc721CGI%2FcRZtsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT0WSZMHXup6aRSNircA2nNPOn%2BuzYXHKhzKwh1ByL%2BbYcLBIBWSXZFmG5%2FSnV0Y2yzZzHbb0FBUmTNYyKe0loN13d%2Fo5LMPXdgh6CDi0Yi4HM%2FaBo6q3zaIvAInpKE5%2FJ1DcGsde199qnoBhnzTO07WjZgW6bw6LGHtu2cy5vHJ16KOkFKXHVL8D9Iqijv7SAISNzJhJ2UlBkGAeX6okd7epFftY14nZMIMYpMJfpz1aaArWeBmCtB2oF5wk480q5cVyhe%2FxqvdztW0ol8mkxGlk%2BdqkxgJa23Z%2FXxQs6u31j6WvlwSbGyGZ0xP04g44gM%2BDORw5c%2FM2DZPDBDNDXsBe5BkoeTqaJsWZh9f2lkal2v5KyP2ghDx%2FmOpgTB%2Fe2R6vMcTFWF4WUcxSAkwgfsqIFdn3O10rkdEGfZOKWtGohUBnN114ibHR0OMKtKJH2lotNEMoFQoBry194gsySUaS8nZQ9BrCbj0gQfM3BUpGCsveV8K4s8cy97GsafOGbKkCkA6s71w57DlUfihi8srI%2FCOKWGuVCsQu%2FmNrgU3PUilvqoqHmcSXV3Q2msrSP50FLzcsHdVDU6zx8XyyEW9gw6ag8Web4AFH6pnyvKrNuxUV74Kk044fH%2B2VnXBbWQCNZu0XNzX8xLMK%2F%2B0skGOqUBQPfDGb2DSG2lt7YdOsreXgCwDZ7Ce0gRvjt4Ce4IZNRuYl%2BojnlnzGAWiTNduMwio8%2BjF9%2FU0o60qpO%2BA8Tj7ynEYmHbcFkI9zkJGHtCMxuVwZz5Gn2sC2XLySvBCgFdzCPp7O%2BK2luGuJX6VHs63zZC5Fwebc0lvB0xY9MgpM9haCxvcpGAOQL8ap0FLw6R9LritZpr%2F8NMQrJvr2ET0C6LxLbV&X-Amz-Signature=45ed417b07304ee8efd9e61a34ef50936b6f28728bee29c871a5607797faf128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XACB7HMX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6V59CcfgrsAuv7HrTdyV9Qwo%2Bw3gjeTFet8qoqIvvnAiEAvjHADPQ7%2BOGGH9mKYrpB41pA8OrisXc721CGI%2FcRZtsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT0WSZMHXup6aRSNircA2nNPOn%2BuzYXHKhzKwh1ByL%2BbYcLBIBWSXZFmG5%2FSnV0Y2yzZzHbb0FBUmTNYyKe0loN13d%2Fo5LMPXdgh6CDi0Yi4HM%2FaBo6q3zaIvAInpKE5%2FJ1DcGsde199qnoBhnzTO07WjZgW6bw6LGHtu2cy5vHJ16KOkFKXHVL8D9Iqijv7SAISNzJhJ2UlBkGAeX6okd7epFftY14nZMIMYpMJfpz1aaArWeBmCtB2oF5wk480q5cVyhe%2FxqvdztW0ol8mkxGlk%2BdqkxgJa23Z%2FXxQs6u31j6WvlwSbGyGZ0xP04g44gM%2BDORw5c%2FM2DZPDBDNDXsBe5BkoeTqaJsWZh9f2lkal2v5KyP2ghDx%2FmOpgTB%2Fe2R6vMcTFWF4WUcxSAkwgfsqIFdn3O10rkdEGfZOKWtGohUBnN114ibHR0OMKtKJH2lotNEMoFQoBry194gsySUaS8nZQ9BrCbj0gQfM3BUpGCsveV8K4s8cy97GsafOGbKkCkA6s71w57DlUfihi8srI%2FCOKWGuVCsQu%2FmNrgU3PUilvqoqHmcSXV3Q2msrSP50FLzcsHdVDU6zx8XyyEW9gw6ag8Web4AFH6pnyvKrNuxUV74Kk044fH%2B2VnXBbWQCNZu0XNzX8xLMK%2F%2B0skGOqUBQPfDGb2DSG2lt7YdOsreXgCwDZ7Ce0gRvjt4Ce4IZNRuYl%2BojnlnzGAWiTNduMwio8%2BjF9%2FU0o60qpO%2BA8Tj7ynEYmHbcFkI9zkJGHtCMxuVwZz5Gn2sC2XLySvBCgFdzCPp7O%2BK2luGuJX6VHs63zZC5Fwebc0lvB0xY9MgpM9haCxvcpGAOQL8ap0FLw6R9LritZpr%2F8NMQrJvr2ET0C6LxLbV&X-Amz-Signature=79b9fa551384c8568aa76808979966a4f1eb85f8073258f8da3e558e4c1f4128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
