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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMNNLR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa7rLeoz648KQhy%2BvWR55f3Eamg06ilTu7owreHMbC2gIhAMKmWpCUzkwTP6LxpMXYl2uxIlAu5UA7iqvxxN7tN81lKv8DCHkQABoMNjM3NDIzMTgzODA1IgwmZOGkku6nKAfFVpgq3ANnZiePKBFYKtF%2BtM2DQ4N8%2FLIY4fk%2FSzAiXo9TB%2FHuwAKcWI0JVszH76UjsinP2YhBmq1u2hRux%2FWVOS10F9OmpdBqJBpoZisQPtL8slZtlCQD%2FrqxH8U2fNOk6%2FGk3LK6%2B1IwpkM2CNofLRYazzO%2FBe4Ig0cFVMVFdKSUfA5NfiaFu%2FR2lTFlyNpByRCfLzq4zv6imckfRcIG1u9Et2QD41I9LXEe8mCpfNNnREnoaUbMuCUWhrzAvYMvnOqBx9XnL2DeIG8FTP9V3AV1faYMRXPdsNRveE7pFYvQ3PGlQMxZgHlSErq5xEgjg0eY0QK8S0k%2FowwSmrdQ0PPLRk0yW1I4aqpiLkcL%2FHmDfg2SJBqsThmXVdBOMMK8rF4fGfOuueQgVYO1DkRxoz6cJ226qzUAsS%2Fdl%2FpNA0%2Bw26eyCBbZRkqfWe4CUjF58ij1TAHo4hr%2FgM2ewjX4Ouj2Pp7VCg4J3W5C780oDRFeSVu6gJg9dZqAumCD0GFFPjnPOXidQDa%2FLdZ7XM0XREAxp73EqgqWAxPlXrevPgIVYHYCyMao%2F1Ows%2Fv6Slb%2B96effCPZs%2BdvcMQZAfVGPeuS9M2ftlGBkwYTyZbDCvoFqKVmRWg7vYRToc3l7mnzRjCOt4nKBjqkAR76tvaH0mYZIVmicUWyEIdj0cXpBJJexn7CrM%2Feit9XveATPyUOwD2prQCRCARO65hX4iecEX9W7%2BOw2MCKjRfpqYyo1hc0UMu6QBYQ2YF3UGEwwZ%2FyGuw%2FQkiJv9yoHLq74xVjIyxEbaWqg8q39MOEU6fDHqdJ%2BEXzMHpb2LYQfXpKxX1xmgXg61TsPmuQH9frkEsOAj9dx8QzAtSC87x0I0CD&X-Amz-Signature=6097e2f4d21f2c9a0b3f3b9907e37fadfda5eb5d93d9e0220b6ef6a2f8deed5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJMNNLR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa7rLeoz648KQhy%2BvWR55f3Eamg06ilTu7owreHMbC2gIhAMKmWpCUzkwTP6LxpMXYl2uxIlAu5UA7iqvxxN7tN81lKv8DCHkQABoMNjM3NDIzMTgzODA1IgwmZOGkku6nKAfFVpgq3ANnZiePKBFYKtF%2BtM2DQ4N8%2FLIY4fk%2FSzAiXo9TB%2FHuwAKcWI0JVszH76UjsinP2YhBmq1u2hRux%2FWVOS10F9OmpdBqJBpoZisQPtL8slZtlCQD%2FrqxH8U2fNOk6%2FGk3LK6%2B1IwpkM2CNofLRYazzO%2FBe4Ig0cFVMVFdKSUfA5NfiaFu%2FR2lTFlyNpByRCfLzq4zv6imckfRcIG1u9Et2QD41I9LXEe8mCpfNNnREnoaUbMuCUWhrzAvYMvnOqBx9XnL2DeIG8FTP9V3AV1faYMRXPdsNRveE7pFYvQ3PGlQMxZgHlSErq5xEgjg0eY0QK8S0k%2FowwSmrdQ0PPLRk0yW1I4aqpiLkcL%2FHmDfg2SJBqsThmXVdBOMMK8rF4fGfOuueQgVYO1DkRxoz6cJ226qzUAsS%2Fdl%2FpNA0%2Bw26eyCBbZRkqfWe4CUjF58ij1TAHo4hr%2FgM2ewjX4Ouj2Pp7VCg4J3W5C780oDRFeSVu6gJg9dZqAumCD0GFFPjnPOXidQDa%2FLdZ7XM0XREAxp73EqgqWAxPlXrevPgIVYHYCyMao%2F1Ows%2Fv6Slb%2B96effCPZs%2BdvcMQZAfVGPeuS9M2ftlGBkwYTyZbDCvoFqKVmRWg7vYRToc3l7mnzRjCOt4nKBjqkAR76tvaH0mYZIVmicUWyEIdj0cXpBJJexn7CrM%2Feit9XveATPyUOwD2prQCRCARO65hX4iecEX9W7%2BOw2MCKjRfpqYyo1hc0UMu6QBYQ2YF3UGEwwZ%2FyGuw%2FQkiJv9yoHLq74xVjIyxEbaWqg8q39MOEU6fDHqdJ%2BEXzMHpb2LYQfXpKxX1xmgXg61TsPmuQH9frkEsOAj9dx8QzAtSC87x0I0CD&X-Amz-Signature=a1ae23920e3506f3f6edd9d49778b84150b67c20b7a260c149fe116e4a387529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
