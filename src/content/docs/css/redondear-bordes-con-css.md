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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNSZ24E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvVMynUa93Mso6RLqdDGx7lLc5uTMuRwIQGZ7%2B6wsNHAIhAOCNFD0NLev%2BtO%2F6pHSF0hd0HFX8%2FYLfcljNbmGl%2BTo2KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfO7a%2FB19oq4bIMyAq3APPXpoLwBCi361FP7H%2FSvzMuHP54RHRYBueVPOviucDFmKo%2FHfclf6xxZuUy2kOHrZ3KVfGLV%2FP9EpYDUDdpIV7kkzDjOcjGVdqi%2Bpz5oZxAVLNEOMxi%2FFlnzBRHsoWyA0zAO%2FzLZITjUXBJglzi%2BV6WPsewr62BgBzhWjfRcXRiCfpkT1D8bdb1rGxAmgR9AqF7Vtxskbalq59eUmvux0eeTjZKGyAu6au1RnyTPzhC%2FrvdslsLQeS2mFNq6m9rqmcuT8GsvS1bMATCWEvXk1gvqvAnpkxgV0fsTBpiskwOHBQ%2BsHlvQufEjG7yYXInDbWnL4DJJkbTKDy0QUtImOfHZRJ5gE%2FEnMZPo0eyQVu9fyfQCaErwoJ7I1x%2FFc0zeNbo0o1nZ5qy6umK1tOIq7IERC3iI3DfA4iNLCXnsPWM30Iw2jL8AfbRpf35RXohxghQio1Fqc4CP68lq7EcNr5ciPTC6rf2dgcbrJ8SScSwKMC53ZAYdmfvhBGdaecRtWsf7DN4i5zDjlUJ3IMuiEI1PcIhZSpckhyr4UxaqICPFebjsZHHZHaoiXd1pgNF2Grtph4wLiWs3zvBR1n57LpOrk3yPbXtWLc1EHm7pQgN%2B05Y7tPTTq%2FpMKRyTCimdXJBjqkAYnN%2BCLRsWhQDsyS%2BVX%2BYauTgkSWuYmt3b2ny%2FC3PIT6DX3MlA8%2BT11kXdfDnVAMZ2Zp77jS8dpWdjdH1bqhOIPL%2FZ73kf5op9vZCN7n3BlrMCaSbK5glh4sk%2F0Z7Wm0KzDRj9%2F9wPT1VxEJOi46KHKJwGlY1QgP5wrBWFDtlRdm4Dq%2BqGSFQyWgD%2B%2FFBwRRs04SaIn9%2BPHxfdEkg5rTx%2F%2FCO%2Ffw&X-Amz-Signature=084785dbe693ea3935a29bf225dee58f1758837897716531d2cb8d73e7fe5c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNSZ24E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvVMynUa93Mso6RLqdDGx7lLc5uTMuRwIQGZ7%2B6wsNHAIhAOCNFD0NLev%2BtO%2F6pHSF0hd0HFX8%2FYLfcljNbmGl%2BTo2KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfO7a%2FB19oq4bIMyAq3APPXpoLwBCi361FP7H%2FSvzMuHP54RHRYBueVPOviucDFmKo%2FHfclf6xxZuUy2kOHrZ3KVfGLV%2FP9EpYDUDdpIV7kkzDjOcjGVdqi%2Bpz5oZxAVLNEOMxi%2FFlnzBRHsoWyA0zAO%2FzLZITjUXBJglzi%2BV6WPsewr62BgBzhWjfRcXRiCfpkT1D8bdb1rGxAmgR9AqF7Vtxskbalq59eUmvux0eeTjZKGyAu6au1RnyTPzhC%2FrvdslsLQeS2mFNq6m9rqmcuT8GsvS1bMATCWEvXk1gvqvAnpkxgV0fsTBpiskwOHBQ%2BsHlvQufEjG7yYXInDbWnL4DJJkbTKDy0QUtImOfHZRJ5gE%2FEnMZPo0eyQVu9fyfQCaErwoJ7I1x%2FFc0zeNbo0o1nZ5qy6umK1tOIq7IERC3iI3DfA4iNLCXnsPWM30Iw2jL8AfbRpf35RXohxghQio1Fqc4CP68lq7EcNr5ciPTC6rf2dgcbrJ8SScSwKMC53ZAYdmfvhBGdaecRtWsf7DN4i5zDjlUJ3IMuiEI1PcIhZSpckhyr4UxaqICPFebjsZHHZHaoiXd1pgNF2Grtph4wLiWs3zvBR1n57LpOrk3yPbXtWLc1EHm7pQgN%2B05Y7tPTTq%2FpMKRyTCimdXJBjqkAYnN%2BCLRsWhQDsyS%2BVX%2BYauTgkSWuYmt3b2ny%2FC3PIT6DX3MlA8%2BT11kXdfDnVAMZ2Zp77jS8dpWdjdH1bqhOIPL%2FZ73kf5op9vZCN7n3BlrMCaSbK5glh4sk%2F0Z7Wm0KzDRj9%2F9wPT1VxEJOi46KHKJwGlY1QgP5wrBWFDtlRdm4Dq%2BqGSFQyWgD%2B%2FFBwRRs04SaIn9%2BPHxfdEkg5rTx%2F%2FCO%2Ffw&X-Amz-Signature=3716049f75c69a9ae1cb934531024abe9082b21b70b3734b814f1aa74aeb809d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
