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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK5VVZ7Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbIcbxCDZioTl%2FsBt8EWvxRs8h%2B7iWWbclPAdkevRNdAiB2eTPc8o%2F7cvM1%2Fd%2BfKXbNy2EWJzvYg%2BGKCDc6PcNalSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmiuDFoI2vmCGl%2F09KtwDUjsWRddlLMgbEJvyjzgWe4wxnk3UMNl%2F4N0Jt67XOLr5IHjukoP75oEUT3jcfgdJ2y8VRc59%2BTHopZUUGcmCu8jr10HIKtsgMFoXfCs%2BIFRG7q1ORaI5At6HZzwz4wjnn8uR%2BEYmJmvFERkfTIpD%2BzLXdsaYwlvBW%2BVKHlqqesXnk8FYSJbFSpoFO%2B04k7nEAof0050pKc1wU1mEMFJv713B1lBJ%2BJRs48jSc%2BHSIy9j1WWSagUekn6cXx5Lzmww0Sw4v1e%2BsAYSWCvzJf5RCuCvqtNSq%2ByoUPjx4ySXVImEXXlJJ9pep0EQ1ZdaJqgAXUmpFt4xm2tUUwZm9O3K128V0r3E%2F30rgn2rEeKSgDTe9R0IyuO1apZFRENw5MbU5GrDz0TQ5PaPmP6V83Z585OfHRf8gFfa546oMzVjYnjqUUlLi%2F%2BXqUvaQbn1faDWxzzz52gGDG%2BzzTrGQ4wFVFVOGYrdj2havnw%2BOXx38iOWv0Gmdtwv3TVO71KygQ6TPnYOpFGxqq0sbEbt%2BRtpqV3%2FgP%2BlsQniWSpxZSZjbCpwNrZhK8GfrM%2BEBHxJ%2B0ElKqJd9hGrmRZ8VZfSxIvqQqTUnPfxD064BRhuPkEzlBIPlQRdQxeSYgh55bUwkY7eyQY6pgFg4xdLkFpMqVC0dsAmogZi4quom7IY9GaCB7uENn1ye0msP1DBJCZKa7b6mmO5ZzSY%2B19SZpTfxgzg2h7cKgh6OqIEaTYzjumb1zREtmRtXzcaVKtgy4rPR46hK6BJlMtT4PHKwOo13ivn3lnxHObNdXrfzdeSgiyNsqj368fsKZC957qiALeOP6XZpa37JzO6VvScE1EuLZ6P2w4D%2B%2FMKjHbC9gWH&X-Amz-Signature=9b6190631aa55b553dfce3b651b8062f7b89299de89fa3498ff949f74762b402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK5VVZ7Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbIcbxCDZioTl%2FsBt8EWvxRs8h%2B7iWWbclPAdkevRNdAiB2eTPc8o%2F7cvM1%2Fd%2BfKXbNy2EWJzvYg%2BGKCDc6PcNalSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmiuDFoI2vmCGl%2F09KtwDUjsWRddlLMgbEJvyjzgWe4wxnk3UMNl%2F4N0Jt67XOLr5IHjukoP75oEUT3jcfgdJ2y8VRc59%2BTHopZUUGcmCu8jr10HIKtsgMFoXfCs%2BIFRG7q1ORaI5At6HZzwz4wjnn8uR%2BEYmJmvFERkfTIpD%2BzLXdsaYwlvBW%2BVKHlqqesXnk8FYSJbFSpoFO%2B04k7nEAof0050pKc1wU1mEMFJv713B1lBJ%2BJRs48jSc%2BHSIy9j1WWSagUekn6cXx5Lzmww0Sw4v1e%2BsAYSWCvzJf5RCuCvqtNSq%2ByoUPjx4ySXVImEXXlJJ9pep0EQ1ZdaJqgAXUmpFt4xm2tUUwZm9O3K128V0r3E%2F30rgn2rEeKSgDTe9R0IyuO1apZFRENw5MbU5GrDz0TQ5PaPmP6V83Z585OfHRf8gFfa546oMzVjYnjqUUlLi%2F%2BXqUvaQbn1faDWxzzz52gGDG%2BzzTrGQ4wFVFVOGYrdj2havnw%2BOXx38iOWv0Gmdtwv3TVO71KygQ6TPnYOpFGxqq0sbEbt%2BRtpqV3%2FgP%2BlsQniWSpxZSZjbCpwNrZhK8GfrM%2BEBHxJ%2B0ElKqJd9hGrmRZ8VZfSxIvqQqTUnPfxD064BRhuPkEzlBIPlQRdQxeSYgh55bUwkY7eyQY6pgFg4xdLkFpMqVC0dsAmogZi4quom7IY9GaCB7uENn1ye0msP1DBJCZKa7b6mmO5ZzSY%2B19SZpTfxgzg2h7cKgh6OqIEaTYzjumb1zREtmRtXzcaVKtgy4rPR46hK6BJlMtT4PHKwOo13ivn3lnxHObNdXrfzdeSgiyNsqj368fsKZC957qiALeOP6XZpa37JzO6VvScE1EuLZ6P2w4D%2B%2FMKjHbC9gWH&X-Amz-Signature=6adc6439f671e15fbc50fafa96895789d6301ca2b77d3ff1674da0ee58aa10ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
