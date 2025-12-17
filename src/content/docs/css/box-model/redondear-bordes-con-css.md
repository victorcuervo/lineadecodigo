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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULB352AX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRCA0jw9s7p5cMGSeS8r9zRDSi1K9kDYmp7AsvWasn0AiBw%2B9fdlwMh3NPwUYkcr95YO2n1JnEJSjG3fZaKZKeSrCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMG57%2B7WuevrWkVY6DKtwDa1DhZorI2ezywd06fkshVBcTFvwp0CGErld9aD27kk0XT%2BEAMiSmBmDRKbXYJvsPpNLkbRvCvQdl5GTAyyhPlfGW0qvKNiD6oBp7FYxI0UfBX71NT4EFwWgpSeL0itiUaWdeaH%2FXjMANzmWqIX3uHTpPHO%2F7vHqL4uM1O9mT35lcXr9%2FgL%2FKRCpMmsqzLJFF3mDoEkcZLS%2FPr%2F57JxsBT3MHQl6W8KxVYHH69BlBjlyRiUG4e3T5ex5kFUwM4ewAMbd6HD3eBr8oHmoK4TcDFG%2FQ2R4RDCibpgEm%2FpLRDI2LNVVdmx8n6EbWpQHYw%2FzMCFQreW5JZ7BQ%2BnzmmKnFVUiXiz12r5F0ZRhN3fyphdBgGviA6DvYQ47jBPwAanYRM0CJsM4cFa3X%2FhB1aplAoyPJBULBqiMaS0YW6bYlWFzF2dBF5KbcUdtZ1247v6eJUxcVxWxDhiMqrj3Sr6WTNb4Cr16LFnAHENWwzJPvDXjGEc04IENC0gVPuaSqx%2F2aeIxsMvQgO9JZlZHZJyot1UEHZjY0yOIG0T%2BdhMpncZvD755aqBt2Cfe2sIYrk8yqDUMUJYeynRlJx%2BFPYu4WTGJ1p7meY74Q0aKeNRhoLALU2ht2AKswHJz36iYw%2FYKJygY6pgGxAyp7oJm9RlpoWmjcQRiXWBR7N%2FPIwJ9aIcJ5ZqifzlZ9QpXtv8%2B0llMTUVTua%2BOi7vmLF1jvyqJyx52BEx9TXmG9Zg0afyy%2FFMFWqhcDkPPQ2eF4JWpzyPSfEFdHUBFw2FHQLZIZhp%2BNYWD0BW%2FZSxCOOJIh2OiGgJZGSQyUgzKiG1Y1fE7cZyxfudiBTpNe%2F7Lc%2BocJVndIqxFt1cJcMQbYN%2FQp&X-Amz-Signature=82c0ab47fb09eab75ad7c9be6d0732b7ca1640608674e64f02179d0e622213de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULB352AX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRCA0jw9s7p5cMGSeS8r9zRDSi1K9kDYmp7AsvWasn0AiBw%2B9fdlwMh3NPwUYkcr95YO2n1JnEJSjG3fZaKZKeSrCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMG57%2B7WuevrWkVY6DKtwDa1DhZorI2ezywd06fkshVBcTFvwp0CGErld9aD27kk0XT%2BEAMiSmBmDRKbXYJvsPpNLkbRvCvQdl5GTAyyhPlfGW0qvKNiD6oBp7FYxI0UfBX71NT4EFwWgpSeL0itiUaWdeaH%2FXjMANzmWqIX3uHTpPHO%2F7vHqL4uM1O9mT35lcXr9%2FgL%2FKRCpMmsqzLJFF3mDoEkcZLS%2FPr%2F57JxsBT3MHQl6W8KxVYHH69BlBjlyRiUG4e3T5ex5kFUwM4ewAMbd6HD3eBr8oHmoK4TcDFG%2FQ2R4RDCibpgEm%2FpLRDI2LNVVdmx8n6EbWpQHYw%2FzMCFQreW5JZ7BQ%2BnzmmKnFVUiXiz12r5F0ZRhN3fyphdBgGviA6DvYQ47jBPwAanYRM0CJsM4cFa3X%2FhB1aplAoyPJBULBqiMaS0YW6bYlWFzF2dBF5KbcUdtZ1247v6eJUxcVxWxDhiMqrj3Sr6WTNb4Cr16LFnAHENWwzJPvDXjGEc04IENC0gVPuaSqx%2F2aeIxsMvQgO9JZlZHZJyot1UEHZjY0yOIG0T%2BdhMpncZvD755aqBt2Cfe2sIYrk8yqDUMUJYeynRlJx%2BFPYu4WTGJ1p7meY74Q0aKeNRhoLALU2ht2AKswHJz36iYw%2FYKJygY6pgGxAyp7oJm9RlpoWmjcQRiXWBR7N%2FPIwJ9aIcJ5ZqifzlZ9QpXtv8%2B0llMTUVTua%2BOi7vmLF1jvyqJyx52BEx9TXmG9Zg0afyy%2FFMFWqhcDkPPQ2eF4JWpzyPSfEFdHUBFw2FHQLZIZhp%2BNYWD0BW%2FZSxCOOJIh2OiGgJZGSQyUgzKiG1Y1fE7cZyxfudiBTpNe%2F7Lc%2BocJVndIqxFt1cJcMQbYN%2FQp&X-Amz-Signature=df24c0e91cb250b336321e7ddd1a43787ab1540ad279512d619f1c363173d4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
