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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ONMN3KE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChMwlnJ6cP1VOpL%2Blua2wjCP3JpOyOdCH8pfqJj2EXNgIga%2F%2Fz%2B%2F%2FuJ8pCisjvxJYTsaNJDTCx35DmrS6iAb%2BDVzsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGvYUhmvDH6sakXPayrcA%2FLJ2H1xdQJx6geuRMhgfChfAwqVDLR96Bg1f66yLsye6rx84pqYYkFyjfBoMaFM6cmhsexYmJBi1XhOvJdimjkBI%2BxAnqp6yAhmypeIj2cttbQ8tAwX2KUGmcov8l2eR%2FuyU1Jeq%2BcO%2BYddmg5ijmbVWQf%2BA9dZGLKUBcNU0oBFtiDHuWaWtviUJfdxtHXZG1lDABmjAJi0cB9J26Jkn6aanhq5xw27Hr0e5qqF11MdlvwywTNntdXTAUtxedffdnzUI%2FFX8BG6hvpPmHKjEt9TAFU7egSQPP8RHbItA4EyFmwpVMhc6adSx%2BMwNHsJdMdVzUxiZ95qdhYnemIpmpG7xRuhRFtykcj9M%2BC3fMqh76Z3xeyuw%2BKr4AeynIKpeHOKVFKVv0g%2FS62FXGOpvMVAF5CXzSfetZ03Vd7w5EIeREZGkh4llng0SiVrDYr3f1BSOfx9yx2QAfoEG9BtF45k5ADMEkSZ4P0FTr5NUuL%2BIFWi0fRjs3MirjuqtwuX4lUZOWDaTOGVIobzlp8VSkKXr5BQ1KHBdtcPRSx0eVC9P86PtyKULCMIYUShVeyPrRCPgr%2Bkr96FGkzgz2cgS0IsZ0hj8n5WWLntutaN9Z1tyluxOf5YFSabsYijMNOyy8kGOqUB9VCayYoEnnuICD54Gxa6eQFvae9hGbsxr%2FhMS96UsDHY4Wfd2vjsgxujhwWtOf4NRf4ThyWE%2FiGonxIps0cTSdU2%2F2DfvmANAZGn2nHFDXh6Bu%2FkIHvCDeQPLA1J%2Bq%2BHVkfQV%2FKlk2Oea5hTHhaOgm%2FC3YMIutYvgtQGzQaQd1TGQM0w413ZmTtV%2FCOrlsQ%2FH3ZOUiOHxO3fWzAxZ2N6rWapjHrw&X-Amz-Signature=78d8808d399bf29b611b0958c449613226ab8e36ea75a94ff14babf605c45ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ONMN3KE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChMwlnJ6cP1VOpL%2Blua2wjCP3JpOyOdCH8pfqJj2EXNgIga%2F%2Fz%2B%2F%2FuJ8pCisjvxJYTsaNJDTCx35DmrS6iAb%2BDVzsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGvYUhmvDH6sakXPayrcA%2FLJ2H1xdQJx6geuRMhgfChfAwqVDLR96Bg1f66yLsye6rx84pqYYkFyjfBoMaFM6cmhsexYmJBi1XhOvJdimjkBI%2BxAnqp6yAhmypeIj2cttbQ8tAwX2KUGmcov8l2eR%2FuyU1Jeq%2BcO%2BYddmg5ijmbVWQf%2BA9dZGLKUBcNU0oBFtiDHuWaWtviUJfdxtHXZG1lDABmjAJi0cB9J26Jkn6aanhq5xw27Hr0e5qqF11MdlvwywTNntdXTAUtxedffdnzUI%2FFX8BG6hvpPmHKjEt9TAFU7egSQPP8RHbItA4EyFmwpVMhc6adSx%2BMwNHsJdMdVzUxiZ95qdhYnemIpmpG7xRuhRFtykcj9M%2BC3fMqh76Z3xeyuw%2BKr4AeynIKpeHOKVFKVv0g%2FS62FXGOpvMVAF5CXzSfetZ03Vd7w5EIeREZGkh4llng0SiVrDYr3f1BSOfx9yx2QAfoEG9BtF45k5ADMEkSZ4P0FTr5NUuL%2BIFWi0fRjs3MirjuqtwuX4lUZOWDaTOGVIobzlp8VSkKXr5BQ1KHBdtcPRSx0eVC9P86PtyKULCMIYUShVeyPrRCPgr%2Bkr96FGkzgz2cgS0IsZ0hj8n5WWLntutaN9Z1tyluxOf5YFSabsYijMNOyy8kGOqUB9VCayYoEnnuICD54Gxa6eQFvae9hGbsxr%2FhMS96UsDHY4Wfd2vjsgxujhwWtOf4NRf4ThyWE%2FiGonxIps0cTSdU2%2F2DfvmANAZGn2nHFDXh6Bu%2FkIHvCDeQPLA1J%2Bq%2BHVkfQV%2FKlk2Oea5hTHhaOgm%2FC3YMIutYvgtQGzQaQd1TGQM0w413ZmTtV%2FCOrlsQ%2FH3ZOUiOHxO3fWzAxZ2N6rWapjHrw&X-Amz-Signature=9c2b3b3afd942f9669b5d5105a6862ccd86f7b2d4e6978ebeac1cfb6bdcde17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
