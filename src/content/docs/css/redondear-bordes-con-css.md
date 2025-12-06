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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLGOMH3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTo304DZj8A%2BRSjDUtO9OkEAiiMEN71Ya2voBsunlpIwIhANqEZMCRmQdQ4EEFNx5xJ65uyho%2B2zeFAiBTOuiEgKEqKv8DCHAQABoMNjM3NDIzMTgzODA1IgxRudOWczKD%2FvhGkwEq3AM2ZR98n%2Fn%2B8g%2FV1mbepTSbQcn%2BRTi4NYYU%2Bz1KdQnpXh4zH2bnm9OVgV2flgTAFUAk7JCJhtnByCO0xQJpeeVHrexyb9zuYfWWPJjnl%2BHGd2jyACet3VJgkJ%2Bak3leHjOlTVDvrT%2Fi99Ialx4SWlqXNBqcic6RkpG4Wq7ZGJujFIlsIHU4%2FK5y93Wpi5HBirGKuj%2BJowPkGVCigh0GPepzti831%2BCU4xn%2FXHg0466mI13rdRHCfYJ7pm59lUdCZJKNPo1UMxSSfFTINYtstyAwsIyJ%2BQ4AkDWLbk6T6JsUmVRBTV5u7EG7bYI19pdYzf48OhjjomK5BJMQk3SPvqCZRfi9rOUgp7TuK0rr26KCTvlEdaLgv2pIvu211XvNuQdwZOJnrHk5u2LHhK8CrAhj0rG7ftQwroPHrC515QeFQF7RH0e%2FTGrdleSlY%2BLtD%2FC%2Fsh3zg3RtaA9HAPhsgCvOpID7bACJ0wlkz7ikUglE9mwvWALVxcNWdY5641b6ho7Ei8stOFbEWzKcqB3C1dBGiVqh7agd84y31Gz7wfKlL%2BIzqXHCwQ8PgaSL8qR%2BKNEUge3RtKUlZ9T2dkQTYhFNQz7a50n43H4sOdEzz9u1LphvV%2F0ppFzZG5OAxzDzns%2FJBjqkAXJ4uwWaETXhCMwdFTOfuqLOMFpd0V5gmb37bfieh5%2FH4blr%2BOJNNgvOtvw7Z8Qd23CExrG2RHd%2FFwFUG3iBkl6qUhnm5tQFU37P9%2BKbI6J3gIvYi9ysO%2BDmjI1GCeaxfoM%2B8YoBfQIRCsancIUggmnyzGRzTOhebnROvaBzYSlICidu8tFk5%2B1hgoL0%2FgVgZPwBJm6OVBm2Xvw%2FJzQKPOHKOkUp&X-Amz-Signature=cba46f2b94311a882fdc7c1c58ce1698050521e6e729c29d38373d0870a39d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLGOMH3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTo304DZj8A%2BRSjDUtO9OkEAiiMEN71Ya2voBsunlpIwIhANqEZMCRmQdQ4EEFNx5xJ65uyho%2B2zeFAiBTOuiEgKEqKv8DCHAQABoMNjM3NDIzMTgzODA1IgxRudOWczKD%2FvhGkwEq3AM2ZR98n%2Fn%2B8g%2FV1mbepTSbQcn%2BRTi4NYYU%2Bz1KdQnpXh4zH2bnm9OVgV2flgTAFUAk7JCJhtnByCO0xQJpeeVHrexyb9zuYfWWPJjnl%2BHGd2jyACet3VJgkJ%2Bak3leHjOlTVDvrT%2Fi99Ialx4SWlqXNBqcic6RkpG4Wq7ZGJujFIlsIHU4%2FK5y93Wpi5HBirGKuj%2BJowPkGVCigh0GPepzti831%2BCU4xn%2FXHg0466mI13rdRHCfYJ7pm59lUdCZJKNPo1UMxSSfFTINYtstyAwsIyJ%2BQ4AkDWLbk6T6JsUmVRBTV5u7EG7bYI19pdYzf48OhjjomK5BJMQk3SPvqCZRfi9rOUgp7TuK0rr26KCTvlEdaLgv2pIvu211XvNuQdwZOJnrHk5u2LHhK8CrAhj0rG7ftQwroPHrC515QeFQF7RH0e%2FTGrdleSlY%2BLtD%2FC%2Fsh3zg3RtaA9HAPhsgCvOpID7bACJ0wlkz7ikUglE9mwvWALVxcNWdY5641b6ho7Ei8stOFbEWzKcqB3C1dBGiVqh7agd84y31Gz7wfKlL%2BIzqXHCwQ8PgaSL8qR%2BKNEUge3RtKUlZ9T2dkQTYhFNQz7a50n43H4sOdEzz9u1LphvV%2F0ppFzZG5OAxzDzns%2FJBjqkAXJ4uwWaETXhCMwdFTOfuqLOMFpd0V5gmb37bfieh5%2FH4blr%2BOJNNgvOtvw7Z8Qd23CExrG2RHd%2FFwFUG3iBkl6qUhnm5tQFU37P9%2BKbI6J3gIvYi9ysO%2BDmjI1GCeaxfoM%2B8YoBfQIRCsancIUggmnyzGRzTOhebnROvaBzYSlICidu8tFk5%2B1hgoL0%2FgVgZPwBJm6OVBm2Xvw%2FJzQKPOHKOkUp&X-Amz-Signature=112ed1559638792ada9f919f6cff7a2874fdfc87e70cff6611e9885c93be5c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
