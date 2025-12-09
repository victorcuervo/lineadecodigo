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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHV3P5J2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzLlaJufUjtuw27a4MWfJrxSq1LubIw2uYX4ul0J00%2FgIhANezkULuzxxR06WQGMerkNqzsollah8zFZpFMj8%2FO2pWKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcuVbZCTxCdQEBPh0q3AN5YRUPtOl3krYOBrei3%2F4sTqxDABaMNI4j%2BD0xqS5BrPMsU2ue%2Fmrf6TQtcr0goN3WGdKYh7slpdzi7Id1E0SEJs4fw4y7g%2F5XSIgqd%2B8oCHUbUgX1ZCVPipgDYyANUWORB%2Bs2wawMt3WOSEIi8f2cX2c2J7%2F4jwxEgTp5JBmro7%2FCCGG1VZXk%2FTQqOtQQM4XRT7MyNL%2BtDxXi6mXS6et26rGp%2B7Cp%2Fn%2F5Y7GtEZ5B3raN2O%2BreyF7%2FRnsc34LexyTCng1BSumAWaOiXxQ86X10zRbi9zs1V9a58nn2gdJ%2FqxKaMP7DgTndvmKdRsjmBBdd4bFqss5iyUQtOY5KXuCPLE9uehZdGlhluRU5aAydWdqtHAWMxdtBmKp7hVcvs%2FLhHycurc3CdKjbHiWVqu0vadrjp1q2oyiLQAc44q4QYO38FpZka3Kx5K5zPNO4GhnvXdwWJsZwwYz0466ohzZhByzpMl6i7D6d60VldiWa2yJLxyJYXbuEwQk518r4WtG9T3YEK2dymaaP2ZJFoR57LrbzofpPoztFF5bD0Jgp%2FW%2FeF5kfxviaYSntcRFNjuLB0RdRARODwhXy5tK0eJ8uayrxQnA%2BA3bi2icZCH4SYxxZ75x5rTt6FoedTDU5d7JBjqkAdqO1RePRcE2o%2Fsv22coOmRqpOiqVvkeNJ%2FgbitrW2hEH25cBF%2BczvM7MK1El%2BOHveVof7UtoHRvxA%2F8xmT7ABZGGKt7nrmkLbQSBIc1hmv5w1tX4NMBfY9Uy9Bw%2FTktCyJ6cEaLw5ZQmrEO0HB3x03%2FmvVTQUci%2Fukk%2FDSrqqJNN%2F%2BgL5y1cIu0htfscDQz7UvAmZy7ZX70Ov2hIcdNL4HXQPzb&X-Amz-Signature=fea474b4fbd442a99f1108134785628f0ed5709fd2223b49f73ef6776aaa7d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHV3P5J2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzLlaJufUjtuw27a4MWfJrxSq1LubIw2uYX4ul0J00%2FgIhANezkULuzxxR06WQGMerkNqzsollah8zFZpFMj8%2FO2pWKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcuVbZCTxCdQEBPh0q3AN5YRUPtOl3krYOBrei3%2F4sTqxDABaMNI4j%2BD0xqS5BrPMsU2ue%2Fmrf6TQtcr0goN3WGdKYh7slpdzi7Id1E0SEJs4fw4y7g%2F5XSIgqd%2B8oCHUbUgX1ZCVPipgDYyANUWORB%2Bs2wawMt3WOSEIi8f2cX2c2J7%2F4jwxEgTp5JBmro7%2FCCGG1VZXk%2FTQqOtQQM4XRT7MyNL%2BtDxXi6mXS6et26rGp%2B7Cp%2Fn%2F5Y7GtEZ5B3raN2O%2BreyF7%2FRnsc34LexyTCng1BSumAWaOiXxQ86X10zRbi9zs1V9a58nn2gdJ%2FqxKaMP7DgTndvmKdRsjmBBdd4bFqss5iyUQtOY5KXuCPLE9uehZdGlhluRU5aAydWdqtHAWMxdtBmKp7hVcvs%2FLhHycurc3CdKjbHiWVqu0vadrjp1q2oyiLQAc44q4QYO38FpZka3Kx5K5zPNO4GhnvXdwWJsZwwYz0466ohzZhByzpMl6i7D6d60VldiWa2yJLxyJYXbuEwQk518r4WtG9T3YEK2dymaaP2ZJFoR57LrbzofpPoztFF5bD0Jgp%2FW%2FeF5kfxviaYSntcRFNjuLB0RdRARODwhXy5tK0eJ8uayrxQnA%2BA3bi2icZCH4SYxxZ75x5rTt6FoedTDU5d7JBjqkAdqO1RePRcE2o%2Fsv22coOmRqpOiqVvkeNJ%2FgbitrW2hEH25cBF%2BczvM7MK1El%2BOHveVof7UtoHRvxA%2F8xmT7ABZGGKt7nrmkLbQSBIc1hmv5w1tX4NMBfY9Uy9Bw%2FTktCyJ6cEaLw5ZQmrEO0HB3x03%2FmvVTQUci%2Fukk%2FDSrqqJNN%2F%2BgL5y1cIu0htfscDQz7UvAmZy7ZX70Ov2hIcdNL4HXQPzb&X-Amz-Signature=9423f33439b9095e5daf85342061bd6849dfe4ce6860d9b2dbcdd7d3002bf8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
