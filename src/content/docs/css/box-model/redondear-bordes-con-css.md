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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUPUYNF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHyM65zYeG90sALpgbkm3CLlN7mflAN%2FNFIEkYsiV1qMCIC7M1r2xBbIOQS9L2sSnL7%2FIwjLoRdvR%2B%2FvtCbk6S3GFKv8DCHIQABoMNjM3NDIzMTgzODA1Igzh53VNJQQIylKXnPMq3APkT4uh0ANgB59BZ24SQtCh8sebsoojo4YSt0v0ZKHhaVTh0olJ3AoI4tizw%2BtVDMG0oAhXxmM5U6qGZVSjgIqqESmoeA8G5Vkq1zQvYZzOo8YADBnJnIdlIbrW59ug0Cnwm%2ByG%2B1urmh%2FkWGR%2BnwPN2n3R2sjfCIIec9ypCWBMq%2FnfpIM4KuXch7DmQAFqvOMDanr9Dx6MrayTLnD5pw%2BLA0GHH9%2BQT8jNaLiU1KTswuNXaROyQrisUDL3yIqx3Q6kYd7iOj0CIVVAIovPgTMJECiJTetMDbrxX7ujNkru0vRw%2BuVn%2FMB%2BLjHnB3M4pIKJ6NQQS33U5NUBw29EOWSRZNJJ%2BBZbC3Lc6rc%2FW7L7nZQ7YpLTFU74ozwwKfHPciCW4OzftVeAyu8ttaj8IZWouzl1f0hjnGjKozFSJnzhaEbDKdvMTZYnVYriPHlLFAzz2VpPq6SKE4Eli2pj%2FyP9gfy1%2FydflqUZlZIfit6JViFqENr8Gokri%2Fmo100VZLA1jHw2O25ZWT8qQeLYtNmXloK%2BIHqtvYbMR5XkMEGTJVNHTn9%2BGcvnxgaK9CRi63pmTYFrhZN8wepsFSl6t8Fs7H1TZ4XCp8X3Rrn%2F3l6UH5SGJ5pe4eHSpyMiXDC8%2B4fKBjqnAThgWhmz4RSMXB2rBHzSsJKAgcrXeB3uL7p6CxeG4lnzfz1e5D3KiBvcK%2BFpCqIwaGC4EPBMXa23fQkgA8NWQi4h951DsAl%2B%2BWb4gEvvsdkgFTX0pp2zoNxImJgqlLv%2B4I%2FWn4r%2BxdJPxDwjUhG4C75S4EyvHipuI3fVxxptShoaiuXupv8OJLh5HwURCNlIuJ9VbUsyEXQOHhboBmCvtP7vD8rrIF1w&X-Amz-Signature=751fc52384741db1ae20e55c4e1cec54fc5d481f0a0f31036cf9014cdca9da3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUPUYNF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHyM65zYeG90sALpgbkm3CLlN7mflAN%2FNFIEkYsiV1qMCIC7M1r2xBbIOQS9L2sSnL7%2FIwjLoRdvR%2B%2FvtCbk6S3GFKv8DCHIQABoMNjM3NDIzMTgzODA1Igzh53VNJQQIylKXnPMq3APkT4uh0ANgB59BZ24SQtCh8sebsoojo4YSt0v0ZKHhaVTh0olJ3AoI4tizw%2BtVDMG0oAhXxmM5U6qGZVSjgIqqESmoeA8G5Vkq1zQvYZzOo8YADBnJnIdlIbrW59ug0Cnwm%2ByG%2B1urmh%2FkWGR%2BnwPN2n3R2sjfCIIec9ypCWBMq%2FnfpIM4KuXch7DmQAFqvOMDanr9Dx6MrayTLnD5pw%2BLA0GHH9%2BQT8jNaLiU1KTswuNXaROyQrisUDL3yIqx3Q6kYd7iOj0CIVVAIovPgTMJECiJTetMDbrxX7ujNkru0vRw%2BuVn%2FMB%2BLjHnB3M4pIKJ6NQQS33U5NUBw29EOWSRZNJJ%2BBZbC3Lc6rc%2FW7L7nZQ7YpLTFU74ozwwKfHPciCW4OzftVeAyu8ttaj8IZWouzl1f0hjnGjKozFSJnzhaEbDKdvMTZYnVYriPHlLFAzz2VpPq6SKE4Eli2pj%2FyP9gfy1%2FydflqUZlZIfit6JViFqENr8Gokri%2Fmo100VZLA1jHw2O25ZWT8qQeLYtNmXloK%2BIHqtvYbMR5XkMEGTJVNHTn9%2BGcvnxgaK9CRi63pmTYFrhZN8wepsFSl6t8Fs7H1TZ4XCp8X3Rrn%2F3l6UH5SGJ5pe4eHSpyMiXDC8%2B4fKBjqnAThgWhmz4RSMXB2rBHzSsJKAgcrXeB3uL7p6CxeG4lnzfz1e5D3KiBvcK%2BFpCqIwaGC4EPBMXa23fQkgA8NWQi4h951DsAl%2B%2BWb4gEvvsdkgFTX0pp2zoNxImJgqlLv%2B4I%2FWn4r%2BxdJPxDwjUhG4C75S4EyvHipuI3fVxxptShoaiuXupv8OJLh5HwURCNlIuJ9VbUsyEXQOHhboBmCvtP7vD8rrIF1w&X-Amz-Signature=5e5a59ca359c97913e57cd3d7bdb42644d0581815fa28a85d6a1b1b51a1d64d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
