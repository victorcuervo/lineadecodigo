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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSZZXLB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp1NLuebr5rSvbZQDITDHtFq%2BmTu3zWSmPdvx97%2FU3HAIhAMIYBv0Cp9Vcr5QzgeaN3JP4DGwBlwpUBvgxhFlAlIQOKv8DCHUQABoMNjM3NDIzMTgzODA1IgyzZOfs3XmQJSDvwrsq3AMu4jmPxZxA8AAwkibm06AE%2FFTfIkcC0AO7g8bA8lSBRxLepwnumpwjFXBVYpKHz6N8rq%2FCVo75i9pckmo7FGm4%2FZ5Qhn6Os4OZCyjjS7HLG%2BRZlFTAfivAjtoIRtNg4k1oXMqwbKqChWau3XggiQEhTKu%2Bi19trGprAwa3vxVI97K6c0CnJyfS66PtBgpb4MJT7dblx7lJFh6860%2BHzC31G9r0PyGFYZTKZl3141h3Ac2J0caKj6XSTj9uanfrDd1q5JPo5b1fKSPr2sjuB0zNJfWdFF7Gzjys7ZP5V98vxT8CiY%2BY2RGrIE24HI6YCUDPo9ozpB4I48iSwX0v7XHP%2BHLKPrPsEsLg2J6z4jXQP%2Bjd4hSRD86bGyce6g9G2ve%2FWJs%2F6NPZGaSnKgXtWkhaMzNOuDI1U4%2FO84tcimwXk8mKke1wyRk17aDwXWMKr7dxQhni%2F5cLm2pVrO87mNmIG%2BGBSMharo9r%2FNxxDHwVMBHMJmUIbf5uBpys%2ByXSv5D5JfQqvsNooB6aZCgw368S3WCdh1lEPURpFHWLrO6XjLepjPmOtzs3pSZlRvd9QzI7Fv%2FWhwnw9zeHn2Ef0TOVTtNnUVUevXlRnNW%2Fr1RwNIUNxDTLZubDHhbIVDDPptDJBjqkAe1x7KzwnPNzv%2Fy%2BNZJBi97jViA4XlgawQE6OTOyowU8MOsvGpHzWUQt%2F%2FJw%2F6Uazs1I0HTzSF%2B0jsqAV5fGDzA3LNlBK8%2FjONQJ52jotk6SDL7dZL9f16ldUDeRDRPq1wrz%2Fj6wclRCltTYYaejxiwDaAF%2F8e2jUhPS1QaawZQNyrpKPLmVjPbMNIW32w3uj%2BaVJkT1QKbCm47kM1n3SQMO4zBl&X-Amz-Signature=f9632dfc4cacc6a37933e9e64acf4776ec74366f25b6e8005e00e90ccc63a4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSZZXLB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp1NLuebr5rSvbZQDITDHtFq%2BmTu3zWSmPdvx97%2FU3HAIhAMIYBv0Cp9Vcr5QzgeaN3JP4DGwBlwpUBvgxhFlAlIQOKv8DCHUQABoMNjM3NDIzMTgzODA1IgyzZOfs3XmQJSDvwrsq3AMu4jmPxZxA8AAwkibm06AE%2FFTfIkcC0AO7g8bA8lSBRxLepwnumpwjFXBVYpKHz6N8rq%2FCVo75i9pckmo7FGm4%2FZ5Qhn6Os4OZCyjjS7HLG%2BRZlFTAfivAjtoIRtNg4k1oXMqwbKqChWau3XggiQEhTKu%2Bi19trGprAwa3vxVI97K6c0CnJyfS66PtBgpb4MJT7dblx7lJFh6860%2BHzC31G9r0PyGFYZTKZl3141h3Ac2J0caKj6XSTj9uanfrDd1q5JPo5b1fKSPr2sjuB0zNJfWdFF7Gzjys7ZP5V98vxT8CiY%2BY2RGrIE24HI6YCUDPo9ozpB4I48iSwX0v7XHP%2BHLKPrPsEsLg2J6z4jXQP%2Bjd4hSRD86bGyce6g9G2ve%2FWJs%2F6NPZGaSnKgXtWkhaMzNOuDI1U4%2FO84tcimwXk8mKke1wyRk17aDwXWMKr7dxQhni%2F5cLm2pVrO87mNmIG%2BGBSMharo9r%2FNxxDHwVMBHMJmUIbf5uBpys%2ByXSv5D5JfQqvsNooB6aZCgw368S3WCdh1lEPURpFHWLrO6XjLepjPmOtzs3pSZlRvd9QzI7Fv%2FWhwnw9zeHn2Ef0TOVTtNnUVUevXlRnNW%2Fr1RwNIUNxDTLZubDHhbIVDDPptDJBjqkAe1x7KzwnPNzv%2Fy%2BNZJBi97jViA4XlgawQE6OTOyowU8MOsvGpHzWUQt%2F%2FJw%2F6Uazs1I0HTzSF%2B0jsqAV5fGDzA3LNlBK8%2FjONQJ52jotk6SDL7dZL9f16ldUDeRDRPq1wrz%2Fj6wclRCltTYYaejxiwDaAF%2F8e2jUhPS1QaawZQNyrpKPLmVjPbMNIW32w3uj%2BaVJkT1QKbCm47kM1n3SQMO4zBl&X-Amz-Signature=e27d8d3df7faa52624edc013d8640f306d1f4db6448834c0aa497200a188c69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
