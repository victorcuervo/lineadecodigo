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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLHJFWG4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFg6OOJZpxa6036odNATbSKi17Ki1N1%2BzMa%2B3nabkn2AiB6a1sxfYHxfCFfy1TI5FpBQMEeWZ6ajAQ0qqOzhQferSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpXi22zSM0JU7NoKzKtwD1HjCGQdocbcTzMSGyHcRPygAD2eb0R4SXHw0AcikeiNZ10eQZPX2g8ehmJrKrbONTFHnj%2BMqHhsTaIlfv4iFF2e4WVVWRvlIqM01ZddKkTkNi0MPhrzi9wDEomfnASAWUc0%2BPU42g8D6c5hbKGv63SG9cjh%2BGa6013QRaG6snk%2FdtdDW9ar4aeTujPDqRyLfCQ2uD05vN7GvACPkwFe%2BdGutO2PASzbzDldtkQEhl1ayap8ipLeQSxs69dsz5e3KXiIeNzrwSKqaBOzSIk5EF3J0x1c65NVYr1%2BlbJkKOpi5%2BfkgJBxohL85%2Fl3f7LXsEL%2B58cb245GhB9eSDRGlL8tzj8hUpSutmxmvNXQr1Qj9mk2moGyczp6AJ2AqDLQFA3SnnnbPpQtaRLp1ccO1w7QkCiWsMBG3WJTbeBwUhJgcWK%2FwW%2BXk05PAnNNEkRnMXYno8UpSMtFfdcxZzC0KIyLqGMuWuMQbu3YUiqTWTPj%2FgHbACEvhiwp202XfZ%2BHzdLxfCEdePOnvKzpuPQxlMOa70nXvaOfD3hrDwzEH47rZ0T1yYBq3lh4vIOlMa59alTebYLFbFqKqYyFS%2FNBjUjbhQmVr8%2BeX12x4ANiAyMkksqqNUgLd2FxPQkkwud3cyQY6pgF11rmA3PbGAZE0%2BBY5BwQ%2Flf7xZkuYWXhzVsqANNoUvrRlnxBPJ3TGjLh5%2Bjer2kjcBFbmb3kxonVOk9aeAdoMlSbJvB%2BLbIohVGh55XqYqNjl3yJb1OGTIgOvsFD0CdZujcRVds5D%2BrwEdaoAxuzDDoiusJa66%2BRv85ZGTJ9GluBpQkCiRmJ6vzSZYyDNVeM8dX1X5mUQk%2FICXajhcMETmowjnSuz&X-Amz-Signature=2f7b6c086331a91f4a7a7d6f9bf5ca16449ab10d996db121fe2f95739f1facf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLHJFWG4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFg6OOJZpxa6036odNATbSKi17Ki1N1%2BzMa%2B3nabkn2AiB6a1sxfYHxfCFfy1TI5FpBQMEeWZ6ajAQ0qqOzhQferSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpXi22zSM0JU7NoKzKtwD1HjCGQdocbcTzMSGyHcRPygAD2eb0R4SXHw0AcikeiNZ10eQZPX2g8ehmJrKrbONTFHnj%2BMqHhsTaIlfv4iFF2e4WVVWRvlIqM01ZddKkTkNi0MPhrzi9wDEomfnASAWUc0%2BPU42g8D6c5hbKGv63SG9cjh%2BGa6013QRaG6snk%2FdtdDW9ar4aeTujPDqRyLfCQ2uD05vN7GvACPkwFe%2BdGutO2PASzbzDldtkQEhl1ayap8ipLeQSxs69dsz5e3KXiIeNzrwSKqaBOzSIk5EF3J0x1c65NVYr1%2BlbJkKOpi5%2BfkgJBxohL85%2Fl3f7LXsEL%2B58cb245GhB9eSDRGlL8tzj8hUpSutmxmvNXQr1Qj9mk2moGyczp6AJ2AqDLQFA3SnnnbPpQtaRLp1ccO1w7QkCiWsMBG3WJTbeBwUhJgcWK%2FwW%2BXk05PAnNNEkRnMXYno8UpSMtFfdcxZzC0KIyLqGMuWuMQbu3YUiqTWTPj%2FgHbACEvhiwp202XfZ%2BHzdLxfCEdePOnvKzpuPQxlMOa70nXvaOfD3hrDwzEH47rZ0T1yYBq3lh4vIOlMa59alTebYLFbFqKqYyFS%2FNBjUjbhQmVr8%2BeX12x4ANiAyMkksqqNUgLd2FxPQkkwud3cyQY6pgF11rmA3PbGAZE0%2BBY5BwQ%2Flf7xZkuYWXhzVsqANNoUvrRlnxBPJ3TGjLh5%2Bjer2kjcBFbmb3kxonVOk9aeAdoMlSbJvB%2BLbIohVGh55XqYqNjl3yJb1OGTIgOvsFD0CdZujcRVds5D%2BrwEdaoAxuzDDoiusJa66%2BRv85ZGTJ9GluBpQkCiRmJ6vzSZYyDNVeM8dX1X5mUQk%2FICXajhcMETmowjnSuz&X-Amz-Signature=26010283bd1468d6934f4791c7a3ac903f7c8fb4ef6126a99b52bfe559d7f541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
