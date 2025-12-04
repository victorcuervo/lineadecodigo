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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELGLQTV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDJSIgCZzhniG1hxDzLsMzQv7hdyOEWAsY1A1pDOkD0pQIgC2YY0GZAB4Gxlt%2Bj%2BVp2wZjreGxBD0S9vZ%2BCVHQySYAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDN3%2FrQ0B7ltwD1wI9CrcAwrgrQ32Nc%2Fb1xR%2BPL4PKp8GvhQInzIUhXZf7bqBTpf0P9jzD3mB70w%2FIT6fyQ%2F9XLsNaih2pzzC%2Bs14J3HS8f3ITkM3s4LPajWGuBqfLwxG%2FMiBOKvZFZV%2F7VXuWY9sw7PEIMzinnCN3yX3l33Dzq%2FjB%2Fiz%2FISB5zZARCuSwH0JiCfF6C6qtNGpeJROa3WKUh%2FttcB88Mb61e1d0%2Fu6xSkyZKV%2BAAi4%2FsHTrrneTUL0Q2PfEGQhwPsKNexHi6S093Ej9WkuPOIWcFI32%2Fy70fhMXyRKViohsDyunE1XWaGzrhTS04dJ1c%2BbEcUSZCRtqj8cXTHVFZxP5PTiYppw0e%2FCRXsykroKzLOsmnNG02I9TJ3ulWXqdoqINrdzjDpDhij5HG5XtgTJC2eh28IjhpeSf%2BLt03s5qC7F4RDWJHrO%2FCoVC69FOrSgEYzUyeCce3GJfdJrjkzZ0JLIUELiOU97KZ0LO25LcrBb3XXpPH8Hg0jF1TNBAV4hHqTrLxh7TBUHh5WhM8BcSQBwKMXGGSOF2bVavtS12TGLiv%2BDGsEWqsdZl0C5HonuUe9A0lE5TWibcBIwRSM7ZOSVkoOK2jEIXk%2FX5wOIYcOfWDQCTQRXnuH6qYijAOywc15LMOWhxskGOqUBPgsw3Ufde9KcIUZnU%2BVebRxVO1YzymRquiOd4RzxIDiWKBp60hJ2xHgo5sgL4AV85qEBVnsuly45Obe6FSVAJrQmz9EwW%2FbjJgwpcY6pr5EyqFOfvMjMXZF4ZP5zEKLblJ%2FpAUyaqHxXhGwcx%2BC3dRgUUDyeBUpQSt29Q4a7lmK12iSOUO1uz1jfV%2F2zt58%2BKwJYVLCscNOmoNhHWfu4U1imt76p&X-Amz-Signature=8da6981ae7efbe05a69c5cc104189d20092ca8d9048c96d89bcf489b264d85f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELGLQTV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDJSIgCZzhniG1hxDzLsMzQv7hdyOEWAsY1A1pDOkD0pQIgC2YY0GZAB4Gxlt%2Bj%2BVp2wZjreGxBD0S9vZ%2BCVHQySYAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDN3%2FrQ0B7ltwD1wI9CrcAwrgrQ32Nc%2Fb1xR%2BPL4PKp8GvhQInzIUhXZf7bqBTpf0P9jzD3mB70w%2FIT6fyQ%2F9XLsNaih2pzzC%2Bs14J3HS8f3ITkM3s4LPajWGuBqfLwxG%2FMiBOKvZFZV%2F7VXuWY9sw7PEIMzinnCN3yX3l33Dzq%2FjB%2Fiz%2FISB5zZARCuSwH0JiCfF6C6qtNGpeJROa3WKUh%2FttcB88Mb61e1d0%2Fu6xSkyZKV%2BAAi4%2FsHTrrneTUL0Q2PfEGQhwPsKNexHi6S093Ej9WkuPOIWcFI32%2Fy70fhMXyRKViohsDyunE1XWaGzrhTS04dJ1c%2BbEcUSZCRtqj8cXTHVFZxP5PTiYppw0e%2FCRXsykroKzLOsmnNG02I9TJ3ulWXqdoqINrdzjDpDhij5HG5XtgTJC2eh28IjhpeSf%2BLt03s5qC7F4RDWJHrO%2FCoVC69FOrSgEYzUyeCce3GJfdJrjkzZ0JLIUELiOU97KZ0LO25LcrBb3XXpPH8Hg0jF1TNBAV4hHqTrLxh7TBUHh5WhM8BcSQBwKMXGGSOF2bVavtS12TGLiv%2BDGsEWqsdZl0C5HonuUe9A0lE5TWibcBIwRSM7ZOSVkoOK2jEIXk%2FX5wOIYcOfWDQCTQRXnuH6qYijAOywc15LMOWhxskGOqUBPgsw3Ufde9KcIUZnU%2BVebRxVO1YzymRquiOd4RzxIDiWKBp60hJ2xHgo5sgL4AV85qEBVnsuly45Obe6FSVAJrQmz9EwW%2FbjJgwpcY6pr5EyqFOfvMjMXZF4ZP5zEKLblJ%2FpAUyaqHxXhGwcx%2BC3dRgUUDyeBUpQSt29Q4a7lmK12iSOUO1uz1jfV%2F2zt58%2BKwJYVLCscNOmoNhHWfu4U1imt76p&X-Amz-Signature=aaa0b31c29a1017a68dc252698df753e08b622332e9b3cd67a1aeba7e7389d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
