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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUBMDD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApw8sJzi4N1NV6KmRh67P1cEPDiat3wjgq%2FkCo8Pj56AiEA5NIybNAS1zqFuGEkrNc0ZHArBaOP5I%2FA%2Fw9DX5nOBs8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOnmlq71uszvSacNZSrcA7J%2BjaZ22uPhBZWGN2nbH1f1Cm%2FnIMeiUkyVaXEgpNilWBCsKXD1Lx5sFRQsPZqbqAxliFmORh6yfptaTKYjWCg0Sj2oGflyp0JVge2CfJGY3TlR4WK4FNhK6cMiWWthm0IN48FUlklA7THAwLvUrzXSq0n1rv47QGiQQIvUmg7F%2BR%2B8kWJGiVzq2cqD6rARV8w26X6YcjyKMPfduBryn30uhSo%2BYE76S6LwntfxhlnFOKSmcCIoBVjbBsMQAhKK1i240ZBVoUdqoy8YP3FWv7rWnmW%2BBJCnWefdUCKnxgjkTNK4vg0VKyxApKZ9F1pgjr8mZPUB5%2FgDCvfKE7OzS6iTEUrtAaDf8ZTL%2FF6JCQ4%2FmYxPju%2BiQGpz6Xzs0xoSJi9diWY61A1dHrV6UvZyZIBd9MgWyZNCvNcvwbVInBAOouarGb%2Fvbq3QfHVfrffVOkDOT91Y7A5OFSXb6hUDHdGGnYuIMzYGlovGa7G2%2FR3nXQAGNnBIWaeYiDXlu%2FMwtbofWF8FkAFOF5siasixUYGhs5bULW3Mo5Lgk8spZrOxoG50lNMDZhSx0CSWpiZGS51SjOxuMocLo4gRKHfq9QKoXi81choW8Axeq6L3fIYqgAdNYiYHb1kM4Jx1MOLdzskGOqUBL3u9AGeivv90KPZZPzfWbDQBi0NV%2F3rQSy5rwbz8f6CIdXhVUGTPLhKJNy%2BhHIbUfbG5%2FyF%2Be0pTfDDTrBOOzZd%2FbLlwvURE3ISZRS%2BDSVfEX%2FPug0MJAi0vYgt6TxPxoZM7aSvesGbzc0BG%2Bsyq4j6NksAxZf3LLGrN8x%2FkJoLcTMJP5v0vaGMdaJFXTxfE36iPQ4C%2F4WtWaw2mJQt2lK9Cbuh6&X-Amz-Signature=855b8ab15eb90717d3051c73a2db5b561ec36e9837fc8a2c57c8fd9459654925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUBMDD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApw8sJzi4N1NV6KmRh67P1cEPDiat3wjgq%2FkCo8Pj56AiEA5NIybNAS1zqFuGEkrNc0ZHArBaOP5I%2FA%2Fw9DX5nOBs8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOnmlq71uszvSacNZSrcA7J%2BjaZ22uPhBZWGN2nbH1f1Cm%2FnIMeiUkyVaXEgpNilWBCsKXD1Lx5sFRQsPZqbqAxliFmORh6yfptaTKYjWCg0Sj2oGflyp0JVge2CfJGY3TlR4WK4FNhK6cMiWWthm0IN48FUlklA7THAwLvUrzXSq0n1rv47QGiQQIvUmg7F%2BR%2B8kWJGiVzq2cqD6rARV8w26X6YcjyKMPfduBryn30uhSo%2BYE76S6LwntfxhlnFOKSmcCIoBVjbBsMQAhKK1i240ZBVoUdqoy8YP3FWv7rWnmW%2BBJCnWefdUCKnxgjkTNK4vg0VKyxApKZ9F1pgjr8mZPUB5%2FgDCvfKE7OzS6iTEUrtAaDf8ZTL%2FF6JCQ4%2FmYxPju%2BiQGpz6Xzs0xoSJi9diWY61A1dHrV6UvZyZIBd9MgWyZNCvNcvwbVInBAOouarGb%2Fvbq3QfHVfrffVOkDOT91Y7A5OFSXb6hUDHdGGnYuIMzYGlovGa7G2%2FR3nXQAGNnBIWaeYiDXlu%2FMwtbofWF8FkAFOF5siasixUYGhs5bULW3Mo5Lgk8spZrOxoG50lNMDZhSx0CSWpiZGS51SjOxuMocLo4gRKHfq9QKoXi81choW8Axeq6L3fIYqgAdNYiYHb1kM4Jx1MOLdzskGOqUBL3u9AGeivv90KPZZPzfWbDQBi0NV%2F3rQSy5rwbz8f6CIdXhVUGTPLhKJNy%2BhHIbUfbG5%2FyF%2Be0pTfDDTrBOOzZd%2FbLlwvURE3ISZRS%2BDSVfEX%2FPug0MJAi0vYgt6TxPxoZM7aSvesGbzc0BG%2Bsyq4j6NksAxZf3LLGrN8x%2FkJoLcTMJP5v0vaGMdaJFXTxfE36iPQ4C%2F4WtWaw2mJQt2lK9Cbuh6&X-Amz-Signature=4c7e52f631a2313645cf32c860fdc82caa067bfe1a48d43258b71b809034e715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
