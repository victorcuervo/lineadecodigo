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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHISTT7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBOMTCnEKd5gUzS%2Bdp9zALAl9jwKysmWxUXHPbJ0DhLaAiEA9ZJuWlADqfExYSRS%2Fs2RBzIP8Ys7EK1oLXF6WzmKDC8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOzCWTX2EkEwMI5m%2FSrcA%2FlO53VwoqTmzUsQS4kAwAvOTp5QWFkUbozX3l0Eyhp7aQsbfWsH5mF9Rqi4DNjUdEOdih6G259YFjKoQTdDkY9gsJ30CWFxCVChP6Xf8qrexlNrCDADMNXGPHJlcl1ADZKYdm3%2B7cTWkcaXwH8k%2FAigQBZccS9agOcG%2B2tqh08Fh4JgB8gAkM9CYfcrF4AzBO7WsBs1c48bsoZk2eIW2WBco%2FpWAqcelF%2BQPuvM%2F5h23aYB8RYzLrOlCgg2kOGlAWtQu%2B19oxGt6jRsAvfaRGiz0%2FfklZvrTqcf7zopg63sbCeqCQdPXjxxBHv%2F9SACr2WCJjTnD2bpeuyEIDgyfSeQyBwKqseP5nrGXhY2qfLfNd3z8pae9DoBmS7YdsOnlkrMgyN8kTID9TPhneZ3G66ezB%2B7Vo8ipmxmPtFhZLFDikNj7hzAv1HQdKLL%2Fgvut3dIhXZ8UIsmtKAod3lCoQR93ENfmG2YJf74CrJFVUH5kvmNg7pUhPfm3mwcWncyKR2iD%2FEGq0rBQgI6jUsdiMxmlY4mQcN%2FM%2FUHf%2FKeFbYEaebsWCEOWS%2BubYh5C%2FkQA5Udf8bntP98rffNSUAeUMwEAi5Uur1cJscACVizHQgnAyCnyz08FtlrJhY1MMOtxMkGOqUBPTP%2BoR2471i7Z22OTHAPKz9120hwnpDFbQXmnUrHOeaaEuf4LUSWOF3SHdCeWLdsRJrq%2B0MadW6r4QEjkIq6o%2BMoktObc0Wt5s%2FDsKt0Z6Y%2BxY67LtAMicmkwGZzttzkM1XXsxFMja28kScOref25zncTWz2do8pt4HZ6kexpwBLKxRyebQDcLugGTFMTJJVWDtK7SpLeURxKRWVGj9XmeN3nZQY&X-Amz-Signature=75bdbc615f3dde15f8b9481df94f3777a62ddd17a369cd78afc08cfd87749297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHISTT7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBOMTCnEKd5gUzS%2Bdp9zALAl9jwKysmWxUXHPbJ0DhLaAiEA9ZJuWlADqfExYSRS%2Fs2RBzIP8Ys7EK1oLXF6WzmKDC8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOzCWTX2EkEwMI5m%2FSrcA%2FlO53VwoqTmzUsQS4kAwAvOTp5QWFkUbozX3l0Eyhp7aQsbfWsH5mF9Rqi4DNjUdEOdih6G259YFjKoQTdDkY9gsJ30CWFxCVChP6Xf8qrexlNrCDADMNXGPHJlcl1ADZKYdm3%2B7cTWkcaXwH8k%2FAigQBZccS9agOcG%2B2tqh08Fh4JgB8gAkM9CYfcrF4AzBO7WsBs1c48bsoZk2eIW2WBco%2FpWAqcelF%2BQPuvM%2F5h23aYB8RYzLrOlCgg2kOGlAWtQu%2B19oxGt6jRsAvfaRGiz0%2FfklZvrTqcf7zopg63sbCeqCQdPXjxxBHv%2F9SACr2WCJjTnD2bpeuyEIDgyfSeQyBwKqseP5nrGXhY2qfLfNd3z8pae9DoBmS7YdsOnlkrMgyN8kTID9TPhneZ3G66ezB%2B7Vo8ipmxmPtFhZLFDikNj7hzAv1HQdKLL%2Fgvut3dIhXZ8UIsmtKAod3lCoQR93ENfmG2YJf74CrJFVUH5kvmNg7pUhPfm3mwcWncyKR2iD%2FEGq0rBQgI6jUsdiMxmlY4mQcN%2FM%2FUHf%2FKeFbYEaebsWCEOWS%2BubYh5C%2FkQA5Udf8bntP98rffNSUAeUMwEAi5Uur1cJscACVizHQgnAyCnyz08FtlrJhY1MMOtxMkGOqUBPTP%2BoR2471i7Z22OTHAPKz9120hwnpDFbQXmnUrHOeaaEuf4LUSWOF3SHdCeWLdsRJrq%2B0MadW6r4QEjkIq6o%2BMoktObc0Wt5s%2FDsKt0Z6Y%2BxY67LtAMicmkwGZzttzkM1XXsxFMja28kScOref25zncTWz2do8pt4HZ6kexpwBLKxRyebQDcLugGTFMTJJVWDtK7SpLeURxKRWVGj9XmeN3nZQY&X-Amz-Signature=d14d9726a68eeb8abcbb3a717fa0f106100bb731a8cd509270eec21d7d5d9503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
