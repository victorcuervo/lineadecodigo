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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGSCAFF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Dk78GXM88sscV5w0oBVG7%2BLsR%2FwsimOWIq9pX9ap8AiBpuItgDDKWjEdbDTMaVy0Wmd4nfOG4gsdrvJWMvIeVpSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMtowE9tZpPDxwUaUVKtwDxB6zmMfvdIK1htwkeIFGV1tgJvPwGXnkWd4Ct3OvBRq7fNSf2HfLU%2FMnBWvqryd%2B2w1tHsIOKd6ug6pB2BVh%2F5ObP%2BUWJBOcceyz7mYPTZxNlS3KS9hxgmqQQfJSFKiDc4jD5a0v0frb8lOVZkpo4HWta2mM3ND%2BP3fuLAOir5OLOYApBgSgXbul%2Fjzur9umj%2BsTjzXPZHgegP5L%2Fxlk8zmnVkTJdMyrpIgDfjwWLMDCuneL2Al%2Bm06T6%2BrYTUc4Ipv9wbJ5VKEgZoWRMf4G0HxV3zBOzu0aIFIGAmsRzuvbm6Fov4FsKcnJEsXpYW70xpnAP%2BYkbf952UrwWKtRelSVwlkJnQmYGf6ZV4tigvgMVKncPSTuF%2F7KaXPVsyVYk02xW4w2lyzRmLTps%2Byd0JqkQ5SVM5OEghu9shW50q3EOUxkCVKCkiGNFTGpxg7Fb9OH%2BOyZq07nYH%2BP1thN2SVHY0raMn9Rs6KTYSaxgkbc5%2BrzMthTn43xhsPgsejd7nndAlBqdXoo7Bu%2BmiD3o1fOFg2CxEuOtd4pC4RXhWY23lquOaWmc%2BmA51xxgi%2BuNljy3GazYUXwXdYzomoETqzw7fnu4CON3FhoRFCpZrEL%2BfjVUbLGOKGFTiowzozIyQY6pgFB6j%2BsS%2BkuRQN78l1obVquy0oelRpmKKRLtnEC4SEWx9VqYZHmqs19U2shlCWgJWf2hgzUru8Jn4UiboxLF4JST1Mu4R5Tl9LN38AzzbB2YDZAiZ3JRVFnfRDFKCFQtVlfr9Ars4EON6SuFWzU1cCq5w9V2ZUj20OKO7LTBqH%2BGk95oU96VWFtDhXePHDQudnbhqzOpcMVLK9q50z1B897vspFplIk&X-Amz-Signature=e9ee3ff21cc0e267185e8725bc4df68f332188a7776f963c16d0bd0473c5d986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGSCAFF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Dk78GXM88sscV5w0oBVG7%2BLsR%2FwsimOWIq9pX9ap8AiBpuItgDDKWjEdbDTMaVy0Wmd4nfOG4gsdrvJWMvIeVpSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMtowE9tZpPDxwUaUVKtwDxB6zmMfvdIK1htwkeIFGV1tgJvPwGXnkWd4Ct3OvBRq7fNSf2HfLU%2FMnBWvqryd%2B2w1tHsIOKd6ug6pB2BVh%2F5ObP%2BUWJBOcceyz7mYPTZxNlS3KS9hxgmqQQfJSFKiDc4jD5a0v0frb8lOVZkpo4HWta2mM3ND%2BP3fuLAOir5OLOYApBgSgXbul%2Fjzur9umj%2BsTjzXPZHgegP5L%2Fxlk8zmnVkTJdMyrpIgDfjwWLMDCuneL2Al%2Bm06T6%2BrYTUc4Ipv9wbJ5VKEgZoWRMf4G0HxV3zBOzu0aIFIGAmsRzuvbm6Fov4FsKcnJEsXpYW70xpnAP%2BYkbf952UrwWKtRelSVwlkJnQmYGf6ZV4tigvgMVKncPSTuF%2F7KaXPVsyVYk02xW4w2lyzRmLTps%2Byd0JqkQ5SVM5OEghu9shW50q3EOUxkCVKCkiGNFTGpxg7Fb9OH%2BOyZq07nYH%2BP1thN2SVHY0raMn9Rs6KTYSaxgkbc5%2BrzMthTn43xhsPgsejd7nndAlBqdXoo7Bu%2BmiD3o1fOFg2CxEuOtd4pC4RXhWY23lquOaWmc%2BmA51xxgi%2BuNljy3GazYUXwXdYzomoETqzw7fnu4CON3FhoRFCpZrEL%2BfjVUbLGOKGFTiowzozIyQY6pgFB6j%2BsS%2BkuRQN78l1obVquy0oelRpmKKRLtnEC4SEWx9VqYZHmqs19U2shlCWgJWf2hgzUru8Jn4UiboxLF4JST1Mu4R5Tl9LN38AzzbB2YDZAiZ3JRVFnfRDFKCFQtVlfr9Ars4EON6SuFWzU1cCq5w9V2ZUj20OKO7LTBqH%2BGk95oU96VWFtDhXePHDQudnbhqzOpcMVLK9q50z1B897vspFplIk&X-Amz-Signature=199fd4eab2636d3e3e20c89bf718e7be32c09cf81a019e7dffce1e4ed44885b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
