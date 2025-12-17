---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JN6KV3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyzXs5vFaRSLh%2BC2lmOk%2B8wPPsFyuPhh9WhZ40QZypzwIhAJf7omVTZ0xmE4jhczs4QuwxFEDtE0kSjlwnZmsqkUzMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxadMT8MX2pePqPXMsq3ANV1s92TEnC57yC%2Fvcn%2BFgFNsgQfcCllUoEfQQzeW6XaQbGrY8sOCQL6%2F%2Fmys6CRuXXb7zC491Ubk9wh%2F0n78%2F%2BGfUX5gEbIyADZDUTPNqpcUL%2FKamX1QwfS1hyirYBiqgaLumaA%2Bj%2BjITkS7bUOPIeOUHbNxM43RaeUZTRr9jSGw1nInjsLOKoGKcI6yKQ6QCM%2BtIquwiH25%2Fvcb8tJbaDyGCpCOSc9QQH90tsrUKCKMFOMcZAcSn5pAu7CK%2BWopdQYohIgdijq0yx71B7TaI8DDBHJGeoM99qmIJVYaxLLMiJdB4elZo91znuQfWm2mKlt38xxcDL9B3jTGIA3cqZC8qemMIHQaDukcmP5ARPurG02a5jurigr332ZGDQ2ttWuftZnXqGiFDhCb6iYIQRCwwLnUC6orN%2B51sBj82qzhVC4af4jtyKyFd54665LpMJBHKN%2B7g5p6PO2H6JwtRKVzdtfNbBsfL2zO75DXK3qzDpe%2F9LAn%2B%2FM1vaRmha%2BEhyNYhP9hRS9pCE9CkyalRrS6nXC3%2Bb4YbHUJ5ZABW%2BS7zpvkHG4mWlhoK2B4pc2%2FUi%2Bd%2B4yJQYLTf%2Br1uoJlDUsRsqxvfvdh7PwqRDZ05UvcFEMYVMCoyVIkqFjzCWn4vKBjqkAUcrk8lYzOO7xfLYeqq5CDYztkLUXuv%2Bk6gQcI%2FrWn98k9%2FrsauM%2BVEONXt4zEwFrJpMCGmA%2BFl%2FC4db8%2BrlybkSLcNcNW0wFlT9Go0M5CpxqHWy%2FvtqgEGZ1kBSwI47sCkPIbXvFQedZ%2BaSttYAvo3boOF4LS16wtvV2xdG3llWaabBFJDZLOANHXDDeVuOXJm1EjsqcHiT%2Fx6DGyp0ieF2NTjS&X-Amz-Signature=6e3933df6024ff4dfb7f422844fb1294201d8e22ef0e543c76c4884d62bdcb4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JN6KV3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyzXs5vFaRSLh%2BC2lmOk%2B8wPPsFyuPhh9WhZ40QZypzwIhAJf7omVTZ0xmE4jhczs4QuwxFEDtE0kSjlwnZmsqkUzMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxadMT8MX2pePqPXMsq3ANV1s92TEnC57yC%2Fvcn%2BFgFNsgQfcCllUoEfQQzeW6XaQbGrY8sOCQL6%2F%2Fmys6CRuXXb7zC491Ubk9wh%2F0n78%2F%2BGfUX5gEbIyADZDUTPNqpcUL%2FKamX1QwfS1hyirYBiqgaLumaA%2Bj%2BjITkS7bUOPIeOUHbNxM43RaeUZTRr9jSGw1nInjsLOKoGKcI6yKQ6QCM%2BtIquwiH25%2Fvcb8tJbaDyGCpCOSc9QQH90tsrUKCKMFOMcZAcSn5pAu7CK%2BWopdQYohIgdijq0yx71B7TaI8DDBHJGeoM99qmIJVYaxLLMiJdB4elZo91znuQfWm2mKlt38xxcDL9B3jTGIA3cqZC8qemMIHQaDukcmP5ARPurG02a5jurigr332ZGDQ2ttWuftZnXqGiFDhCb6iYIQRCwwLnUC6orN%2B51sBj82qzhVC4af4jtyKyFd54665LpMJBHKN%2B7g5p6PO2H6JwtRKVzdtfNbBsfL2zO75DXK3qzDpe%2F9LAn%2B%2FM1vaRmha%2BEhyNYhP9hRS9pCE9CkyalRrS6nXC3%2Bb4YbHUJ5ZABW%2BS7zpvkHG4mWlhoK2B4pc2%2FUi%2Bd%2B4yJQYLTf%2Br1uoJlDUsRsqxvfvdh7PwqRDZ05UvcFEMYVMCoyVIkqFjzCWn4vKBjqkAUcrk8lYzOO7xfLYeqq5CDYztkLUXuv%2Bk6gQcI%2FrWn98k9%2FrsauM%2BVEONXt4zEwFrJpMCGmA%2BFl%2FC4db8%2BrlybkSLcNcNW0wFlT9Go0M5CpxqHWy%2FvtqgEGZ1kBSwI47sCkPIbXvFQedZ%2BaSttYAvo3boOF4LS16wtvV2xdG3llWaabBFJDZLOANHXDDeVuOXJm1EjsqcHiT%2Fx6DGyp0ieF2NTjS&X-Amz-Signature=3c63018e2af87a6e9b2caa73884b5942effc12584131eeb2cb6b5ef9385be057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
