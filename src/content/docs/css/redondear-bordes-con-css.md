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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AUI4ZE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOnk0nOkzhKmm8L%2FLR1wOF6353QYEb3bZhh3DINiKVfQIgZwWGLlw7%2FgpQMmsCZSjGqWHZ5zzsbYGpaxHAbg%2BCCLgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJyaJYWya7xCGpJICrcA6seElRT4un65ccq383LYxna2DLVIcFg3HC%2BK1REyW7NEvKl%2BpDRNAkVSivrmFPF5eLKyUDpp9bM0uB1aYs1I8u%2F0kx6vokor1EvRXse8tYT1jYhuDFgoCtkYiVYswEpQpNUkWepum2%2BFvzEIIjlk%2BtnZ%2B3htTiTxKjVKx8d2M7qv84He0UCdmnZ0nw%2BU7EuNP3A9THx55iuBLC42A39UO46GfiMPuKjkoN77ag4mKiqzkBqaZHZbeVpN9TUnv8pMd5xoTl9ZIJTZ%2FZmJxYtQZMyelii7dYr%2F5C1Y9JnfTWH2C7Y8Da9IxbsY%2FcPOa8irYd4estT6EcDjtUi3WsNwWJlVe8Au8Ga7aOKKF%2BryaR%2BJXjN%2BgXXlhY7JXT6BGb7YM1F%2FDUTcQAYYtYTsID9GAcoSwJTG5nwHyB%2FxluSvu6rB31YNluOjot%2FDOzOqkTe4y2YLLDFLYE3Lq%2F684kLh65LA9YHFtVdT3u11NF0yqDBQKCDDU7PFfh4UpJmWCznFBML0BJOf8oKq31c9X2H3l2aacopUAmHFJZbgQjUMZev9dB80CZAIOexwt3fdAE1wy3FRg58H9uRaFLJUuXckPllYIHMoTzxWPwdYcEHiTAaeskPQIE%2F0dSDznO4MO671skGOqUBXOReRgklhHuTpzPilPndGhKKd9GWuPatX8S7v6ru4NyyiSF376rEmOKyYHkB4bGASzxbXl4Ukzr25IxrqP%2B0pn7vk7mKC8LMGbPMlKUTi0jbfKGda15%2BPnAaRrmKJWr7cnMBxA08u8CF%2FoE3ID%2BycgVUA8Gf%2FPFhDyqw7aj1qrt4wPnQCod%2Byxq0KwN5GzmjIarDU6x3hs5sdK%2FlRrOfa0%2B%2BHPhl&X-Amz-Signature=103a852d5f262437a0dc1ebdadc0cbc575116e48568435f05dedaf55b3feba1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AUI4ZE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOnk0nOkzhKmm8L%2FLR1wOF6353QYEb3bZhh3DINiKVfQIgZwWGLlw7%2FgpQMmsCZSjGqWHZ5zzsbYGpaxHAbg%2BCCLgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJyaJYWya7xCGpJICrcA6seElRT4un65ccq383LYxna2DLVIcFg3HC%2BK1REyW7NEvKl%2BpDRNAkVSivrmFPF5eLKyUDpp9bM0uB1aYs1I8u%2F0kx6vokor1EvRXse8tYT1jYhuDFgoCtkYiVYswEpQpNUkWepum2%2BFvzEIIjlk%2BtnZ%2B3htTiTxKjVKx8d2M7qv84He0UCdmnZ0nw%2BU7EuNP3A9THx55iuBLC42A39UO46GfiMPuKjkoN77ag4mKiqzkBqaZHZbeVpN9TUnv8pMd5xoTl9ZIJTZ%2FZmJxYtQZMyelii7dYr%2F5C1Y9JnfTWH2C7Y8Da9IxbsY%2FcPOa8irYd4estT6EcDjtUi3WsNwWJlVe8Au8Ga7aOKKF%2BryaR%2BJXjN%2BgXXlhY7JXT6BGb7YM1F%2FDUTcQAYYtYTsID9GAcoSwJTG5nwHyB%2FxluSvu6rB31YNluOjot%2FDOzOqkTe4y2YLLDFLYE3Lq%2F684kLh65LA9YHFtVdT3u11NF0yqDBQKCDDU7PFfh4UpJmWCznFBML0BJOf8oKq31c9X2H3l2aacopUAmHFJZbgQjUMZev9dB80CZAIOexwt3fdAE1wy3FRg58H9uRaFLJUuXckPllYIHMoTzxWPwdYcEHiTAaeskPQIE%2F0dSDznO4MO671skGOqUBXOReRgklhHuTpzPilPndGhKKd9GWuPatX8S7v6ru4NyyiSF376rEmOKyYHkB4bGASzxbXl4Ukzr25IxrqP%2B0pn7vk7mKC8LMGbPMlKUTi0jbfKGda15%2BPnAaRrmKJWr7cnMBxA08u8CF%2FoE3ID%2BycgVUA8Gf%2FPFhDyqw7aj1qrt4wPnQCod%2Byxq0KwN5GzmjIarDU6x3hs5sdK%2FlRrOfa0%2B%2BHPhl&X-Amz-Signature=d6dd294c90baf20645fe00efdc6a1f7ae3e233dca4bdaf43a407092d04eed52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
