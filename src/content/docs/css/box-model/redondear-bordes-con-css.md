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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIMV4ITV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpzGnV2XuIa4%2BsAL2zezJI1MwYiZAKyXvxxhpXXSsZBQIhAIv2Zt%2FoSVFFo0d32XMhQvVbn4oM6W3xpIC4c12pmp8MKv8DCH8QABoMNjM3NDIzMTgzODA1IgyhsFLc31X6QASX0l8q3AODY6vwfwO4QSItPrAaou7ywrFi9sqwPV8gDFmQSSyXPWO1QEZzNM1%2Fzt9qmKiNMgEhBUvugdWGSq2mlw1QZJugTVpLtN23vbGFO7bdhWDUxALwrx17uxZsyVTZKqtbgphXgXULFjVTtI2WmHbydkuvpJus0RisM%2BNrGKhR5993%2BBmfrYymBXOQVbq%2B7SCU1k3ejEFJvBb77Ofx4gKwXkqIo2RRKoV0vaqazlZvKPnw04SMToGqs4M%2F4YHytoAtMGu3DMguyoU%2Fhpp8ckKtLOYugSBXlhlSOZC%2Bw1LXMUneYvCzeBqW97U4jvgVmBmlgoGr3m8iKI%2FL2NBbGm8UF96ULv5J2shAZag2u76FFXha72nx9RiDeP7dCQKbP9zIen2SZkf5iTkVwQoK%2BjEDqFtO2ZWrXgEjnNHCms4j8tjcnMbO9A1jwI2GJ23h83QJQwmQdi9btP1Kl09liA3xPo2Di6Irhq%2BWbku9FG4LdV3dmq3BVwXGliUw7sPm1xzDbEBspLif8Eh8Y0TYOlZkJihIOVmgn1MwgK4ajDuKsTezCXCEnm1I8kKuhGst69IAAJaUce6EJzlrFWk69ucCso8tBjQhFZR07%2F9HvK859WyXskG6AOd7E3lRkFoYGjCX44rKBjqkATL8n18Daa10kFAYYXuwBuIAwt52N%2FYZ4fATsxmSjb7wt8yIJs%2FcKBtIeWkajZ4md4fTISliHBf9rA%2FbrJ2i11sX02rcdrY%2Bj5HRup3kuQMhQrtzd9elrwVfE738WsTIy8x4U3bH4y4XWUz%2B1aTxEQL9LZ9gmdnlnCeeCahucw80JpcbnplpK1HDlsay5%2BXLVg%2FvLUsVMgNaczl%2FTOSO6M0nkqlP&X-Amz-Signature=2fa3de7a70a9b5dbc831c8b7d62a7d58f96c965e29d06eefc7ddcb4d4aac373a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIMV4ITV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpzGnV2XuIa4%2BsAL2zezJI1MwYiZAKyXvxxhpXXSsZBQIhAIv2Zt%2FoSVFFo0d32XMhQvVbn4oM6W3xpIC4c12pmp8MKv8DCH8QABoMNjM3NDIzMTgzODA1IgyhsFLc31X6QASX0l8q3AODY6vwfwO4QSItPrAaou7ywrFi9sqwPV8gDFmQSSyXPWO1QEZzNM1%2Fzt9qmKiNMgEhBUvugdWGSq2mlw1QZJugTVpLtN23vbGFO7bdhWDUxALwrx17uxZsyVTZKqtbgphXgXULFjVTtI2WmHbydkuvpJus0RisM%2BNrGKhR5993%2BBmfrYymBXOQVbq%2B7SCU1k3ejEFJvBb77Ofx4gKwXkqIo2RRKoV0vaqazlZvKPnw04SMToGqs4M%2F4YHytoAtMGu3DMguyoU%2Fhpp8ckKtLOYugSBXlhlSOZC%2Bw1LXMUneYvCzeBqW97U4jvgVmBmlgoGr3m8iKI%2FL2NBbGm8UF96ULv5J2shAZag2u76FFXha72nx9RiDeP7dCQKbP9zIen2SZkf5iTkVwQoK%2BjEDqFtO2ZWrXgEjnNHCms4j8tjcnMbO9A1jwI2GJ23h83QJQwmQdi9btP1Kl09liA3xPo2Di6Irhq%2BWbku9FG4LdV3dmq3BVwXGliUw7sPm1xzDbEBspLif8Eh8Y0TYOlZkJihIOVmgn1MwgK4ajDuKsTezCXCEnm1I8kKuhGst69IAAJaUce6EJzlrFWk69ucCso8tBjQhFZR07%2F9HvK859WyXskG6AOd7E3lRkFoYGjCX44rKBjqkATL8n18Daa10kFAYYXuwBuIAwt52N%2FYZ4fATsxmSjb7wt8yIJs%2FcKBtIeWkajZ4md4fTISliHBf9rA%2FbrJ2i11sX02rcdrY%2Bj5HRup3kuQMhQrtzd9elrwVfE738WsTIy8x4U3bH4y4XWUz%2B1aTxEQL9LZ9gmdnlnCeeCahucw80JpcbnplpK1HDlsay5%2BXLVg%2FvLUsVMgNaczl%2FTOSO6M0nkqlP&X-Amz-Signature=e0db50d52b2f9b297c7b690f7f9895eb1dd7101d5f20558bd0ff642249781b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
