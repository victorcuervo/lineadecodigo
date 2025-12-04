---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSHHZ5TK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG6WCE8gn8PyQCEUWM5YYP8Lk1oHfLZl%2F%2BOnrzO2L%2B%2BjAiBsl6vdo%2BfP1pFXl0I1%2FZl4rBJ4ec8JTDXJ6NftPJ7Hiyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMnmSsTGg3WIPPnIp0KtwD0SdpulMm%2BSYGBr8ApsFQoZrDTaf5VPdVXhwsVJwnXdYsRsBSjqPE2G0bm4Fe3f6HxYApMUIA30qvK%2B2lkz6EVCix%2BQVRYPdijOiLTVI7T19S5cmQRrcIKBS3bd1QyDPdyO82%2BgpsZaMTHq%2BW0ciG%2BcGqFN3b5jxYTAfr3rtv4SjVO1blzH4JomB%2Fz5o4HlGo%2FHGAOkEsOS95F0LaXA1ZjiHfht12rDwnmCXsXbAJmzyY3ybOt3%2FfXS2mrbEiuEB4ioY0%2FYHqe4Vl39PpKt5Tw1grvqYLxyaEdPbwdcPDvynlZbMK9%2BUi7t3fsmKDhEjwMkSgn4OZc0B1A2q3Vhtus8PR%2F4FsQW6zDpKFODnjTPeR6TSZGofJyzeM4T%2FD5K8CL2PlROQ13f5%2BV1mzIrjYqIZPshy7GBsvj0NLm3XYHVFvLVlXBPw93kxVLYPdjcpkap1XWwuvFZscAcrPQJbLMt4%2B7JZr5tlLKU2Pj7tWpiIgMfFC1TxJ8Fz9aozhn0N%2BLbqFTNbjUNJTLyNCq77pUL9HjLz8HRUOHM%2BbXV3VdLBrMe75FeW9Et4JHSL28xc6wlbPsgzmqG%2BczT5w2iUkBmPw9WM%2FBYj53XzDOUFGiQFaFm71XKAnCwU%2FWdMwuYPGyQY6pgFrZ29wdXow14%2FHa06UewBSoD6TKjOg8jn6tF%2FfKTYAGZVdQmPJNonS%2FTv5FCadrlU%2BNHS7LFi%2BNoAPZmVPI2p%2F6VyxLvUjesm3FZanr4jSD7KAVMBeDihqdjVd7I5IpSM%2B6vVIHUjNsfg10Wd1FkK3VJfnQVB%2FcFX4EkXlsx8y2e%2BUshezej7J1MRKSCO5lqVqI9yUY8Br1pE4z0W4CKNdwe7Cogov&X-Amz-Signature=d7929fb884071835826899bd1e42c65f50850cb1a1bf2ee9ddf3a92053a68a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSHHZ5TK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG6WCE8gn8PyQCEUWM5YYP8Lk1oHfLZl%2F%2BOnrzO2L%2B%2BjAiBsl6vdo%2BfP1pFXl0I1%2FZl4rBJ4ec8JTDXJ6NftPJ7Hiyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMnmSsTGg3WIPPnIp0KtwD0SdpulMm%2BSYGBr8ApsFQoZrDTaf5VPdVXhwsVJwnXdYsRsBSjqPE2G0bm4Fe3f6HxYApMUIA30qvK%2B2lkz6EVCix%2BQVRYPdijOiLTVI7T19S5cmQRrcIKBS3bd1QyDPdyO82%2BgpsZaMTHq%2BW0ciG%2BcGqFN3b5jxYTAfr3rtv4SjVO1blzH4JomB%2Fz5o4HlGo%2FHGAOkEsOS95F0LaXA1ZjiHfht12rDwnmCXsXbAJmzyY3ybOt3%2FfXS2mrbEiuEB4ioY0%2FYHqe4Vl39PpKt5Tw1grvqYLxyaEdPbwdcPDvynlZbMK9%2BUi7t3fsmKDhEjwMkSgn4OZc0B1A2q3Vhtus8PR%2F4FsQW6zDpKFODnjTPeR6TSZGofJyzeM4T%2FD5K8CL2PlROQ13f5%2BV1mzIrjYqIZPshy7GBsvj0NLm3XYHVFvLVlXBPw93kxVLYPdjcpkap1XWwuvFZscAcrPQJbLMt4%2B7JZr5tlLKU2Pj7tWpiIgMfFC1TxJ8Fz9aozhn0N%2BLbqFTNbjUNJTLyNCq77pUL9HjLz8HRUOHM%2BbXV3VdLBrMe75FeW9Et4JHSL28xc6wlbPsgzmqG%2BczT5w2iUkBmPw9WM%2FBYj53XzDOUFGiQFaFm71XKAnCwU%2FWdMwuYPGyQY6pgFrZ29wdXow14%2FHa06UewBSoD6TKjOg8jn6tF%2FfKTYAGZVdQmPJNonS%2FTv5FCadrlU%2BNHS7LFi%2BNoAPZmVPI2p%2F6VyxLvUjesm3FZanr4jSD7KAVMBeDihqdjVd7I5IpSM%2B6vVIHUjNsfg10Wd1FkK3VJfnQVB%2FcFX4EkXlsx8y2e%2BUshezej7J1MRKSCO5lqVqI9yUY8Br1pE4z0W4CKNdwe7Cogov&X-Amz-Signature=66d7d23e9f091f1f418f500d839302332a45b73648d1ca3d43e06d084601ab7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
