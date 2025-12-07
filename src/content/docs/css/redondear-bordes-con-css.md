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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBHVOA6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3F%2FLfC3q32Jr2tbSZ7i6TL629FL9zsOp3iewZhfq2RAIgeAW%2F7DYWWyLevt3TXv%2B9EjWRW2PokSOBo86KKVh3urcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtQNLvlEP9oT1SdJyrcA%2F37rcoQHux51MVkCgw8fptrUNCuh6JVMF5jELagAT%2BOQbxB9886Fs%2FwqaGdaSAOv8nfXlHUbkzpKvF3n9jGAXCOUeOq%2F1Y%2FmlBwvq60vv05bomsOyd33evd7A%2B6doAIAi1yT0qec30%2BH%2BFg4Oa7ALTmVPDUV%2BqsvXqlHUAvRBPH6xTqcJZgPVCPTLIcBI%2B0uinPstjxwYcetBEGQQIp85iPDmDKZjKDIB5RgQymjqRsVCvUaTG8wmxRjI4UnhkGj1hXc71mQEIQmy3w18VTqw4A4ipoV2Z7BxJjZoMbeAMHjwoMgBxBVTiDZU9mNAUc3f2mg7jDUTSJa8SQOMg6h34Qg9Ja8bhwQ5uhnZrqAtzKF1QuS3XNOxD%2F%2Bz7BDxPjBp5soxEKMkZrtu7Ogzn1fOBteZbEXDaZoNNtCgYpDmeq0OaX14lL%2FOsna8gRzzHPf9MEQ3EqlZ26tpWKryctFIygJ12qog1s4DWWkv8eJjV%2B5Hqb80Y87qrtDm0XXuvd%2BYv7Nd%2BRz7A%2BQv5RyYdLXbdLuRzp9YjH0FcOEnc7GbLBtxooLBG%2FFfGaLT6e0gY6Cfr4ATnN0YwBGjCJewLc0xJE%2FcASjABdcQDbSwVMRk%2BB2rfsXKgL18X1LEu0MPm61skGOqUB0sWwotmGbUlAC%2FwRHV1EYdmLh8xsG3Le93nNMmsJO23Sl1dJvLjQO5UK7%2Fqz01VZFIRdhZOey9jmlDYegokI0rz6KWDzgX9AOaEm78oefGTGdSR1vPC40IjqEP6Wt6%2FzuZ9Z7iLiDhDLNyCqfRJSChMXbk9UVronuqsDQ5xXQvdhkNtz4lbsiPOcEPf%2F%2BPPUyKjnqVtKi8ja4DexpzsAVkv8BKYa&X-Amz-Signature=66a291c87de74503748823cbe23afa54513b99c4ed9d996dfb3f3a9392542e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBHVOA6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3F%2FLfC3q32Jr2tbSZ7i6TL629FL9zsOp3iewZhfq2RAIgeAW%2F7DYWWyLevt3TXv%2B9EjWRW2PokSOBo86KKVh3urcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtQNLvlEP9oT1SdJyrcA%2F37rcoQHux51MVkCgw8fptrUNCuh6JVMF5jELagAT%2BOQbxB9886Fs%2FwqaGdaSAOv8nfXlHUbkzpKvF3n9jGAXCOUeOq%2F1Y%2FmlBwvq60vv05bomsOyd33evd7A%2B6doAIAi1yT0qec30%2BH%2BFg4Oa7ALTmVPDUV%2BqsvXqlHUAvRBPH6xTqcJZgPVCPTLIcBI%2B0uinPstjxwYcetBEGQQIp85iPDmDKZjKDIB5RgQymjqRsVCvUaTG8wmxRjI4UnhkGj1hXc71mQEIQmy3w18VTqw4A4ipoV2Z7BxJjZoMbeAMHjwoMgBxBVTiDZU9mNAUc3f2mg7jDUTSJa8SQOMg6h34Qg9Ja8bhwQ5uhnZrqAtzKF1QuS3XNOxD%2F%2Bz7BDxPjBp5soxEKMkZrtu7Ogzn1fOBteZbEXDaZoNNtCgYpDmeq0OaX14lL%2FOsna8gRzzHPf9MEQ3EqlZ26tpWKryctFIygJ12qog1s4DWWkv8eJjV%2B5Hqb80Y87qrtDm0XXuvd%2BYv7Nd%2BRz7A%2BQv5RyYdLXbdLuRzp9YjH0FcOEnc7GbLBtxooLBG%2FFfGaLT6e0gY6Cfr4ATnN0YwBGjCJewLc0xJE%2FcASjABdcQDbSwVMRk%2BB2rfsXKgL18X1LEu0MPm61skGOqUB0sWwotmGbUlAC%2FwRHV1EYdmLh8xsG3Le93nNMmsJO23Sl1dJvLjQO5UK7%2Fqz01VZFIRdhZOey9jmlDYegokI0rz6KWDzgX9AOaEm78oefGTGdSR1vPC40IjqEP6Wt6%2FzuZ9Z7iLiDhDLNyCqfRJSChMXbk9UVronuqsDQ5xXQvdhkNtz4lbsiPOcEPf%2F%2BPPUyKjnqVtKi8ja4DexpzsAVkv8BKYa&X-Amz-Signature=125b8eaf2b2372978463cf63e9eec7a41d9f7a65a76b8d18a60376de93384c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
