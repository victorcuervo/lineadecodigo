---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632P7HGBR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEm1NBfApKxFJ8kkc5wp8zw2GopI%2BqSoglpJvkizakBsAiBJluTbj27VeMEL9tT6cTWIM%2B6PYUilV2KUsL3kdWZEIir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpJRtGL3bfw9XoSKUKtwDA8tQy1j2giQavMwnPMHI27RoITE%2Fmu2KcaJCQ3NXHpcp4kw%2Brrah4k1OZlgzW%2BTUWw5rF%2FuPrm8rO6uPH7iAP3Mfy4QE7lTcr%2FrpEWMAFO3TLqTWmU%2FYSpxOU7aOnuj87fUiMSyv7b3D4EKwJN6gJDBP9%2B9lE9h1%2Br1bavDFAgDFk8rioQwGgHX5NvlMWDxLsb5uNcdeFj2Ik1pxX10CQCqWsV1V2SPW6Bl%2Ftj4W7puQtIP9sxyTSDIeuuo%2BUvevV5eu%2B4hAnrmlAkSBFazQX4rxwXUfYVx0f%2F7IqVFwgzKUOc9XBErybB%2BXnlkk9fT3Ycbf3nxvURDFgNOBsAai6M%2FvGB5OJz87tGsbNu6nWMQsqa87WLH3qdksErBwujSNNIO8ayIZFgigAwAAMG5AHCNmQk8acnMKiuwMxV%2FjvlO%2B6DRNttnghYIiUzZstA7Of%2FvqyQSA9hKnK52K8Lxsi5%2B1ptV9kWMPXEDAldWEwQCbxIFiZse4xizs5w2oBmI7AMbDLrOfNJpupM3qJfLPbEGIUYEhtQWPe%2F3lKU5mWr3n7vRcn6NNjmIIZ56luabrbj7dEPzVYBaPx1d06wWvjPI0WEhvU%2FhdwSAPn4IKsBTiNdyIMJsYK3%2FBjgMwg4bFyQY6pgFZ3%2BJvs5PZgeYEGcJeskvHykcBhG76Hh1sgfeeGZHOh2CHQ0%2B9FDu8D8SnIvX%2FOfiiHeR8x7xLtnoAg4%2Br1Rsyvk6GLHPcpN7BIxhF9s5wXr6AGcGejAUoELiEJ1CkyM85fwGK1yK8GvU7ddWOvFfo2K6dL4nZcI8BXX6FLeOljJcdZua6lPQp3RROM3GXcgrIeD0py4Q%2Fs02YiEUATw6hhp8XlYSA&X-Amz-Signature=5d620a3969684f8924028b1302d244a403b7c5ecd9ffe8ea962abf4daecae584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632P7HGBR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEm1NBfApKxFJ8kkc5wp8zw2GopI%2BqSoglpJvkizakBsAiBJluTbj27VeMEL9tT6cTWIM%2B6PYUilV2KUsL3kdWZEIir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpJRtGL3bfw9XoSKUKtwDA8tQy1j2giQavMwnPMHI27RoITE%2Fmu2KcaJCQ3NXHpcp4kw%2Brrah4k1OZlgzW%2BTUWw5rF%2FuPrm8rO6uPH7iAP3Mfy4QE7lTcr%2FrpEWMAFO3TLqTWmU%2FYSpxOU7aOnuj87fUiMSyv7b3D4EKwJN6gJDBP9%2B9lE9h1%2Br1bavDFAgDFk8rioQwGgHX5NvlMWDxLsb5uNcdeFj2Ik1pxX10CQCqWsV1V2SPW6Bl%2Ftj4W7puQtIP9sxyTSDIeuuo%2BUvevV5eu%2B4hAnrmlAkSBFazQX4rxwXUfYVx0f%2F7IqVFwgzKUOc9XBErybB%2BXnlkk9fT3Ycbf3nxvURDFgNOBsAai6M%2FvGB5OJz87tGsbNu6nWMQsqa87WLH3qdksErBwujSNNIO8ayIZFgigAwAAMG5AHCNmQk8acnMKiuwMxV%2FjvlO%2B6DRNttnghYIiUzZstA7Of%2FvqyQSA9hKnK52K8Lxsi5%2B1ptV9kWMPXEDAldWEwQCbxIFiZse4xizs5w2oBmI7AMbDLrOfNJpupM3qJfLPbEGIUYEhtQWPe%2F3lKU5mWr3n7vRcn6NNjmIIZ56luabrbj7dEPzVYBaPx1d06wWvjPI0WEhvU%2FhdwSAPn4IKsBTiNdyIMJsYK3%2FBjgMwg4bFyQY6pgFZ3%2BJvs5PZgeYEGcJeskvHykcBhG76Hh1sgfeeGZHOh2CHQ0%2B9FDu8D8SnIvX%2FOfiiHeR8x7xLtnoAg4%2Br1Rsyvk6GLHPcpN7BIxhF9s5wXr6AGcGejAUoELiEJ1CkyM85fwGK1yK8GvU7ddWOvFfo2K6dL4nZcI8BXX6FLeOljJcdZua6lPQp3RROM3GXcgrIeD0py4Q%2Fs02YiEUATw6hhp8XlYSA&X-Amz-Signature=d826667c38e451b03df7b605931ef2a0ce528806797d36e4ab19a0fa5e9fb906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
