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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQBRB67L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfrP4wEba%2Bh5dbNg%2FO%2BhBkUw34MXZCRmONvHu7fT6UAAiEA%2B0n%2FpN3B69HUBQTnlFVm2Tet8k%2Bwzzazs6hE53ArEjIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNp7il2fOpqTKd5eJyrcA%2BKetS1hTJmMeGIWgYj7ca9yCjwsW9pG1tkbcvXV5x2uvTwBiGIgY9RkKmTs7toh6nq9II44yFGr3IPJn4PKpNV20s7%2Foy4RRNos3UywM6R%2BLha%2F3w7%2FXgV8vc5OrpDEsKyQ6tQcxrnFnHKhGWvk8o7pqnLpnMG1FC5wud5r%2BbgdTzKqB8C6ZY3CSIvSi%2BdW36bKmWfolLCmpaFYdunnQ8509DGHcXMwGKHIAKR0MxPDS1oK2CGLiodh7xgRP5f1adsnjwGV4BeOuNc437M0TnFlOm1aexFYdaPVQK2k0LLrAh7GLAt48fGwJsLl%2F%2FfETAvkGQc6MzcizCdSRzi4We2rvz6NHUAsh42u75mD3UqTSXOfpxy43iq7JMGPAlgM4i6xDyPD1BncvhdWs47tX5FQ05vZPdEH2SkpfIcrz8If6yVqPtpz6Vok7wmnKb9nSCwRmbe%2BlHwNUbl%2BqOvHvrNdEDpqGfHWvhJoKz9DJLWxe4spL7QPQaTkFN92XHcvDZuyMd21EXtUw%2F3bFyLH7apKhUr%2BY2wDgcVFF1PYTIw5Q83YAqQXViC4NlaABUUrREYsbJwZ0erHVJs397ZfJ2g8sB%2BTPGAzZwNB%2ByxfpXpjIoDZeVXGEd1u%2F9NdML%2BujMoGOqUBP%2BkivnMFFlZRl6EK5sDBmGgTr20KAeR%2B8kwl19eBwElsLPN3dutGuG9OhOjmhtjrc7T6kp6TsqG3tfJYy2alRMaQiruiXQg6gF0UXqfoWA8x1fqoHLVePxZ8XYDXJvAvfnS3eKS7%2FwGPQW0PIRGb5MUAyU6OArPLXTZR9CeWKs9%2Bv0pbnYChylHvEPGp%2BOzy5%2FIMLq03hc%2Fg4wczBx%2BGXACRWKBS&X-Amz-Signature=4a3e385f328612bc626db216b13baa12e816fc299f296eff3231a3c600c6bead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQBRB67L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfrP4wEba%2Bh5dbNg%2FO%2BhBkUw34MXZCRmONvHu7fT6UAAiEA%2B0n%2FpN3B69HUBQTnlFVm2Tet8k%2Bwzzazs6hE53ArEjIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNp7il2fOpqTKd5eJyrcA%2BKetS1hTJmMeGIWgYj7ca9yCjwsW9pG1tkbcvXV5x2uvTwBiGIgY9RkKmTs7toh6nq9II44yFGr3IPJn4PKpNV20s7%2Foy4RRNos3UywM6R%2BLha%2F3w7%2FXgV8vc5OrpDEsKyQ6tQcxrnFnHKhGWvk8o7pqnLpnMG1FC5wud5r%2BbgdTzKqB8C6ZY3CSIvSi%2BdW36bKmWfolLCmpaFYdunnQ8509DGHcXMwGKHIAKR0MxPDS1oK2CGLiodh7xgRP5f1adsnjwGV4BeOuNc437M0TnFlOm1aexFYdaPVQK2k0LLrAh7GLAt48fGwJsLl%2F%2FfETAvkGQc6MzcizCdSRzi4We2rvz6NHUAsh42u75mD3UqTSXOfpxy43iq7JMGPAlgM4i6xDyPD1BncvhdWs47tX5FQ05vZPdEH2SkpfIcrz8If6yVqPtpz6Vok7wmnKb9nSCwRmbe%2BlHwNUbl%2BqOvHvrNdEDpqGfHWvhJoKz9DJLWxe4spL7QPQaTkFN92XHcvDZuyMd21EXtUw%2F3bFyLH7apKhUr%2BY2wDgcVFF1PYTIw5Q83YAqQXViC4NlaABUUrREYsbJwZ0erHVJs397ZfJ2g8sB%2BTPGAzZwNB%2ByxfpXpjIoDZeVXGEd1u%2F9NdML%2BujMoGOqUBP%2BkivnMFFlZRl6EK5sDBmGgTr20KAeR%2B8kwl19eBwElsLPN3dutGuG9OhOjmhtjrc7T6kp6TsqG3tfJYy2alRMaQiruiXQg6gF0UXqfoWA8x1fqoHLVePxZ8XYDXJvAvfnS3eKS7%2FwGPQW0PIRGb5MUAyU6OArPLXTZR9CeWKs9%2Bv0pbnYChylHvEPGp%2BOzy5%2FIMLq03hc%2Fg4wczBx%2BGXACRWKBS&X-Amz-Signature=5a3f46458be6f72e92017148af3532f8fc8952c9cfbc8c70cf838c52da367ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
