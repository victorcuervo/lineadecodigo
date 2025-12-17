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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLETPRJ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFw76OdccW21Qtl3iLOfx%2BBdjzMqbuBiFSAnWnk0TXAAiEAhdbARpM9VBcI5KaCbRln1khnVUlKd3F81MjByymMWo4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNdMBtxvJIf6s6x6RircA32M5BOxx3nlQ3jXlxg2RtzrAPvOUQbiUb27FI7EVfdPvrKvWf9op0LEY4L4eNAyHstRzCUNtSRBB8c4eZmCCwH%2Bs9f9zRylAsqd%2FmxIv%2FcVb3%2BLVRsyWKbIdNd%2BSM4Rztcm13lYFPkd6yPGuJeMHKsrdgYvjsvB5aYb8QthXSBv1PHTsOeYDLL7zeIsoHs1s63FBj7kvUsvIdkVxo56IwQcq4tfrsDkEEW0eiZ2%2FFIjO966qMm%2FcJwKoGOQ8S4hpeF4tl33uWkk%2BvrRAhsIH2%2FHTJULVsvLO0n8TUHXoLwRe6QgwPZM0JMpshKJaQ1JbOjtHL0TiEBUWddQsfajYxmhEP7VS3QM5TwPGNFn3Jm3pCcFJCZNLaTnFcQiaQQECI4Wpt9jfCAnfOYht%2FJxhYK1Vjbbce36a0CXo1jh%2F75Zrx6x5fgb4hHt4KszqtUIqQ84opU46o%2BCw5nfDafgg2qyGbrvryLI%2FH%2B69bXfjjEE1CDkCi6b9aSP0A%2FSKFgdqJwTzXPMIQWi553oHBghQutvDXAhKhm7xlv9luKc%2BQc9i0%2FEKeCpXCgdEgn84vIrviBeLjHgC0EKr4QFdzFaJ%2BQhqq0uAcNtB%2FPhW3hMOpAIS7er7ANTiBT1J90tMI7piMoGOqUBuzJnMY5Snpysgq9C9%2BT6Q3ZzmrufTbVh1CkEIUR1JcRBqWwGmEcQ7O7vfs9FeFrrFAfyZMhSzTPAqAVXj6n39darY8hd%2BiEtM%2BqKuMYzBKG7kqYoRms1L5f0uwIhUiyIf1FJmaoo1a2tX8ooYWC3WcR65ZH5pZUhxLWARXm2kfw0ab6%2FNASu2pUTX1i12yFWS%2BEVCPXpJo3b7UYwWp7eCynNU9Q6&X-Amz-Signature=f36bf6649bf205672ca9a4f220b17cbeec0c954cbeb9e4f892553fc5760b3a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLETPRJ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFw76OdccW21Qtl3iLOfx%2BBdjzMqbuBiFSAnWnk0TXAAiEAhdbARpM9VBcI5KaCbRln1khnVUlKd3F81MjByymMWo4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNdMBtxvJIf6s6x6RircA32M5BOxx3nlQ3jXlxg2RtzrAPvOUQbiUb27FI7EVfdPvrKvWf9op0LEY4L4eNAyHstRzCUNtSRBB8c4eZmCCwH%2Bs9f9zRylAsqd%2FmxIv%2FcVb3%2BLVRsyWKbIdNd%2BSM4Rztcm13lYFPkd6yPGuJeMHKsrdgYvjsvB5aYb8QthXSBv1PHTsOeYDLL7zeIsoHs1s63FBj7kvUsvIdkVxo56IwQcq4tfrsDkEEW0eiZ2%2FFIjO966qMm%2FcJwKoGOQ8S4hpeF4tl33uWkk%2BvrRAhsIH2%2FHTJULVsvLO0n8TUHXoLwRe6QgwPZM0JMpshKJaQ1JbOjtHL0TiEBUWddQsfajYxmhEP7VS3QM5TwPGNFn3Jm3pCcFJCZNLaTnFcQiaQQECI4Wpt9jfCAnfOYht%2FJxhYK1Vjbbce36a0CXo1jh%2F75Zrx6x5fgb4hHt4KszqtUIqQ84opU46o%2BCw5nfDafgg2qyGbrvryLI%2FH%2B69bXfjjEE1CDkCi6b9aSP0A%2FSKFgdqJwTzXPMIQWi553oHBghQutvDXAhKhm7xlv9luKc%2BQc9i0%2FEKeCpXCgdEgn84vIrviBeLjHgC0EKr4QFdzFaJ%2BQhqq0uAcNtB%2FPhW3hMOpAIS7er7ANTiBT1J90tMI7piMoGOqUBuzJnMY5Snpysgq9C9%2BT6Q3ZzmrufTbVh1CkEIUR1JcRBqWwGmEcQ7O7vfs9FeFrrFAfyZMhSzTPAqAVXj6n39darY8hd%2BiEtM%2BqKuMYzBKG7kqYoRms1L5f0uwIhUiyIf1FJmaoo1a2tX8ooYWC3WcR65ZH5pZUhxLWARXm2kfw0ab6%2FNASu2pUTX1i12yFWS%2BEVCPXpJo3b7UYwWp7eCynNU9Q6&X-Amz-Signature=c51e61233aa1bad5ca4a4efc2838b72bcd35f06ae48c5f607b4d22523ec1d8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
