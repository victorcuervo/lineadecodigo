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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2JOW3Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWzaF3105s76Zp7V5i1O2fn7utuaPByulLYgYHM%2F4sEAIhAJ%2FE7JCVUL3dAMKISvKa9WZtObUalMwHwtxEfGe5u48tKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO795G6M3orfzX65Aq3AMJj7xvtti0JvpS4WrAT4wzan%2FUJzGgeO%2BxS%2BMc7Pmi7Qu19LNwBZdcLZo88ilSvP2INOWqocLMaKAVEySRqXmtAgdXxYQrqEQgGyFezJW0LApvminG9zgJAeadrzTzVNOmjmaF2C%2FJC9xKRUBrDcwxHe6qYoxyUW6yGkYDA6aPcsbU8I9CpE%2Fu1SZOlYyAlAlGOqzICzPGTI8o7rovm1VEu23pYGPnbsfyZj9EMCZdSzs34hkh1kyXU4DgcWhGpQJtKLTGJTTvsbLQMVg3q45JNcPOaD7KW%2FN2%2FKU1aj7WJQr%2B7qAgzjZfBnRvjAXRVmYROms7q7A%2FbtG5xtmD3bUEQMQ1dqkTIMqHtOcN8wVbIceT5LiY9vl5AmVfx68t3ugy%2Fv1XZTRYB4RpeCdKCpWKsxsc3bkhDsWSVhfoBw%2FpGCtxlpeqU5hIqYiriTvJKQEPWyEV9g%2F%2FAdFlFSsWXIPLS8w5bb9HtMDpTh9ECfcCmXtM7Mw0hFX%2BXDMa2Nu9VAX0%2FNrrnL68QpnR6kChIvzoFfWXfSLpbCPavlnlTqe6p%2B%2B2TqP8IKD8oBXQAkx2nQ3%2BBroA5xHIpXgPoJ0xvJGNpJvW7JABJe7C%2BXUkOOBm%2Fms6b4kQNQRuHC79yTC6%2FdLJBjqkASHwPKbjqjv0sCEQHl3YsgvBCvSdBfGo8QnoIc4VKmWGiadzNLZRuYqlgRsi1gAqkHBEh0XsXYtbQ%2BceV5now3wa102vlEPiOlBiibGpawQYFjMv2QlF%2FxcjgecVCBSfn252uDs2iNRVlr8HzKQUsudM5dwqurLy1pKPXHYI0PaNKifY0uf96wpM9%2BZLX4r4Bj%2B9BJqtrIO%2BgjBfRDFOrIhYadz2&X-Amz-Signature=d9de7e6fc0a3129b049f76a446f9a9345a0bf2c7af368cc4bc50a6bf7b2ca264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2JOW3Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWzaF3105s76Zp7V5i1O2fn7utuaPByulLYgYHM%2F4sEAIhAJ%2FE7JCVUL3dAMKISvKa9WZtObUalMwHwtxEfGe5u48tKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO795G6M3orfzX65Aq3AMJj7xvtti0JvpS4WrAT4wzan%2FUJzGgeO%2BxS%2BMc7Pmi7Qu19LNwBZdcLZo88ilSvP2INOWqocLMaKAVEySRqXmtAgdXxYQrqEQgGyFezJW0LApvminG9zgJAeadrzTzVNOmjmaF2C%2FJC9xKRUBrDcwxHe6qYoxyUW6yGkYDA6aPcsbU8I9CpE%2Fu1SZOlYyAlAlGOqzICzPGTI8o7rovm1VEu23pYGPnbsfyZj9EMCZdSzs34hkh1kyXU4DgcWhGpQJtKLTGJTTvsbLQMVg3q45JNcPOaD7KW%2FN2%2FKU1aj7WJQr%2B7qAgzjZfBnRvjAXRVmYROms7q7A%2FbtG5xtmD3bUEQMQ1dqkTIMqHtOcN8wVbIceT5LiY9vl5AmVfx68t3ugy%2Fv1XZTRYB4RpeCdKCpWKsxsc3bkhDsWSVhfoBw%2FpGCtxlpeqU5hIqYiriTvJKQEPWyEV9g%2F%2FAdFlFSsWXIPLS8w5bb9HtMDpTh9ECfcCmXtM7Mw0hFX%2BXDMa2Nu9VAX0%2FNrrnL68QpnR6kChIvzoFfWXfSLpbCPavlnlTqe6p%2B%2B2TqP8IKD8oBXQAkx2nQ3%2BBroA5xHIpXgPoJ0xvJGNpJvW7JABJe7C%2BXUkOOBm%2Fms6b4kQNQRuHC79yTC6%2FdLJBjqkASHwPKbjqjv0sCEQHl3YsgvBCvSdBfGo8QnoIc4VKmWGiadzNLZRuYqlgRsi1gAqkHBEh0XsXYtbQ%2BceV5now3wa102vlEPiOlBiibGpawQYFjMv2QlF%2FxcjgecVCBSfn252uDs2iNRVlr8HzKQUsudM5dwqurLy1pKPXHYI0PaNKifY0uf96wpM9%2BZLX4r4Bj%2B9BJqtrIO%2BgjBfRDFOrIhYadz2&X-Amz-Signature=dc1174ab46b0c758b90e51797403f1b15e6113d0498d31773a568bed97262a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
