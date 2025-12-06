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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVI2I52%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCfkaX30OfA%2BYWH5cafStfPJKdMeh1N9rab9SQ1puAgIhAPuUP4puUA3N13qncvk1uXYf4I1ONQsgpUE3YW4BpfFRKv8DCHoQABoMNjM3NDIzMTgzODA1IgwKHLfh10gGWnRa0oYq3AMOv76kiv2DMscsSCqdpKkdw6QZ0Gu%2ByJ1x6CpUzdMQmJAIzJU7X%2B1%2BIjIseOfPkB3ZIYWz38ABg3dH9I0FOZU%2F2QcBReNBfMxZwJGoWim9AcMz7BkTSawIjArCYH%2BlaUdRE5VpV7Bj3l69If%2F1e%2BMnruRlIyXW2a2dZaDG1w3BgyJF4xuBzScksZwUK6%2BvVk%2F7e0PeTrxaF5g14SIwUZorHtVWv4Ftz%2FD4tRSuM3SJHvwWJC0yMQFOb0tKj%2BtIf%2F8rD54A5H4thB3FtuUZ0pMVOBHhydDpVfmmP4hRkghDMZvZ2h%2F4f1XNTx%2FOyZ5NOEPktcR81Y2QIK9zlDKxa33fu4qAelLwOdaa2diPm5fQhp5CEh48dKinuNXzdvbUcspa7HTC7kfHYsS7%2BLVSoyFbkdFldK1M85tCKcebz9sqv%2BXx%2Fg1PGa044wkDqQTqBzxLCIsI5zhiBHvauJMOyHVLjFo57oqA5cfhGy5iQ99b7dB8zmTqychZLfkng8pVCgnI46cmJe%2BEfJB7k%2FdYlwZXw1gLKNOXhINCx8wf5Rco3XFyZxif8ZtOWK2ypONstiLnXIwOAKvbDaGP6y1jzX1EMM7gM%2Bp%2B%2BzDgHP9jv1%2FxSCNtpC3V7QKWygtTnjCWyNHJBjqkARliLGJTqCmMBLhy8WaWPaEyOM10ITE2kNYS1tHPvRt4i887w0bGX2tqcw6Gx%2FVmR7w5yEE8sqqxidXs019gbXt8sk7yW6AqC8HwljnuMxVCzLRfSFb8ZRKFo8j2FzZqzIPSv4fXJ5x3Csr9ZtOQmz6olxswxh5%2BgJpro4JeNuxoBxy46eGq5lc5vXnqd%2F3BYlE59FRju3U2nfs0cY%2Blugwgzqrb&X-Amz-Signature=a3e322b68ba6dcc204130de12692f4f040bcb36fb2ce159f5516c943f2d9dba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVI2I52%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCfkaX30OfA%2BYWH5cafStfPJKdMeh1N9rab9SQ1puAgIhAPuUP4puUA3N13qncvk1uXYf4I1ONQsgpUE3YW4BpfFRKv8DCHoQABoMNjM3NDIzMTgzODA1IgwKHLfh10gGWnRa0oYq3AMOv76kiv2DMscsSCqdpKkdw6QZ0Gu%2ByJ1x6CpUzdMQmJAIzJU7X%2B1%2BIjIseOfPkB3ZIYWz38ABg3dH9I0FOZU%2F2QcBReNBfMxZwJGoWim9AcMz7BkTSawIjArCYH%2BlaUdRE5VpV7Bj3l69If%2F1e%2BMnruRlIyXW2a2dZaDG1w3BgyJF4xuBzScksZwUK6%2BvVk%2F7e0PeTrxaF5g14SIwUZorHtVWv4Ftz%2FD4tRSuM3SJHvwWJC0yMQFOb0tKj%2BtIf%2F8rD54A5H4thB3FtuUZ0pMVOBHhydDpVfmmP4hRkghDMZvZ2h%2F4f1XNTx%2FOyZ5NOEPktcR81Y2QIK9zlDKxa33fu4qAelLwOdaa2diPm5fQhp5CEh48dKinuNXzdvbUcspa7HTC7kfHYsS7%2BLVSoyFbkdFldK1M85tCKcebz9sqv%2BXx%2Fg1PGa044wkDqQTqBzxLCIsI5zhiBHvauJMOyHVLjFo57oqA5cfhGy5iQ99b7dB8zmTqychZLfkng8pVCgnI46cmJe%2BEfJB7k%2FdYlwZXw1gLKNOXhINCx8wf5Rco3XFyZxif8ZtOWK2ypONstiLnXIwOAKvbDaGP6y1jzX1EMM7gM%2Bp%2B%2BzDgHP9jv1%2FxSCNtpC3V7QKWygtTnjCWyNHJBjqkARliLGJTqCmMBLhy8WaWPaEyOM10ITE2kNYS1tHPvRt4i887w0bGX2tqcw6Gx%2FVmR7w5yEE8sqqxidXs019gbXt8sk7yW6AqC8HwljnuMxVCzLRfSFb8ZRKFo8j2FzZqzIPSv4fXJ5x3Csr9ZtOQmz6olxswxh5%2BgJpro4JeNuxoBxy46eGq5lc5vXnqd%2F3BYlE59FRju3U2nfs0cY%2Blugwgzqrb&X-Amz-Signature=a5a9ac0d514e132caf043c99f23b1007774d91f52d8f16698e62e7b722a1e782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
