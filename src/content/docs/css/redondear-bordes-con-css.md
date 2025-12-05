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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WX3ZWGN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKW2ytN4CbQZD7EdqZMu26ZibOS2cbPPbRXJA5HBqKsAiEA1Vx0mHrvQB3g9HtiRLshk%2FvofqgYLlwDIdUcMa0UZUoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAZRfsfVbCeuHP07eSrcAze9KdVfDfyCZuwNFK8TTGwbfOqRduDNXaxO3%2F5KTIlbQZthI274kA5ZLXLh3Pfj2CGIh1LjpP2rs29VSx8dENUASI1tY%2FfVYIGQ9rhawN7POvu9nkYHqPsW3Jz8Q3AtlG7ZQRxZDxAhUXHDKzvuLGKFOjMtjjavG9gX8Aa4e9IHvSRfbn7IuL6giNL3Eqkn5br5cKb5CQp2%2BsdcuAxoJvt%2FymTDqTqX8rAIEd4EoYDYAhR5kl5bbIR9CxnSfZlhAL46PTEZS997MJZFkVloD8KEKN%2Bjtcj0D52kTUFe4VhUgr%2F2CgcUFZqv9sR%2BKb34st49fxxjF20FkAFaRseDnxpqd47CgGLi%2Bt6lMK2kExv2IjenzXbhrIH7KXtIt2FlY9gatXbwlxwSOi8VawzTOuawSXfc0CSl6iFKSetaw8AKAIjybOB2LC9%2BsU3DqN%2FN%2BgsRK%2FPO2U2k%2BYRjz7yMksCgfp89pNhnJt%2BgigkEL7%2FWDSKRxumt7Q0C%2BZ%2BivN52NKL6JB0%2F%2BEpsHA4qQcy7RMijbO%2BDKGs%2F4Owh01Qdth3HS2lHKldoZ6R%2BFwy51bJgydJSIzkDKoaqnXE%2BZThfNa7kPEWqsK63aS3RJ54wqX8T2oTmtdb5euOT4VzOMO2PzckGOqUBn3EGup0J0%2FWwebHeAOxBPE5hJqp%2Fiwmj4b2lmT2cX6cmBWJuZgrW%2F2pWAd4%2F%2BXdHWqQlH%2Ffct0gDo3CsWg6v%2B6e2rSe4WCrmM23B2vdSt5%2BGkX%2BaKAq8k%2BEoHdpb%2FiZAOZA8DF%2BGdBfU3D%2FzdDrcOKJESrOrv7O8ePvOaemx8X%2BpQHDwaNgeipKwMj8dZZU3kc%2BqvvGOzy1NFIZly5HBtIqkbgrH&X-Amz-Signature=3472d41733efafde31d85302b3e9493eb333692b81ecb914b84dc9b588319e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WX3ZWGN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKW2ytN4CbQZD7EdqZMu26ZibOS2cbPPbRXJA5HBqKsAiEA1Vx0mHrvQB3g9HtiRLshk%2FvofqgYLlwDIdUcMa0UZUoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAZRfsfVbCeuHP07eSrcAze9KdVfDfyCZuwNFK8TTGwbfOqRduDNXaxO3%2F5KTIlbQZthI274kA5ZLXLh3Pfj2CGIh1LjpP2rs29VSx8dENUASI1tY%2FfVYIGQ9rhawN7POvu9nkYHqPsW3Jz8Q3AtlG7ZQRxZDxAhUXHDKzvuLGKFOjMtjjavG9gX8Aa4e9IHvSRfbn7IuL6giNL3Eqkn5br5cKb5CQp2%2BsdcuAxoJvt%2FymTDqTqX8rAIEd4EoYDYAhR5kl5bbIR9CxnSfZlhAL46PTEZS997MJZFkVloD8KEKN%2Bjtcj0D52kTUFe4VhUgr%2F2CgcUFZqv9sR%2BKb34st49fxxjF20FkAFaRseDnxpqd47CgGLi%2Bt6lMK2kExv2IjenzXbhrIH7KXtIt2FlY9gatXbwlxwSOi8VawzTOuawSXfc0CSl6iFKSetaw8AKAIjybOB2LC9%2BsU3DqN%2FN%2BgsRK%2FPO2U2k%2BYRjz7yMksCgfp89pNhnJt%2BgigkEL7%2FWDSKRxumt7Q0C%2BZ%2BivN52NKL6JB0%2F%2BEpsHA4qQcy7RMijbO%2BDKGs%2F4Owh01Qdth3HS2lHKldoZ6R%2BFwy51bJgydJSIzkDKoaqnXE%2BZThfNa7kPEWqsK63aS3RJ54wqX8T2oTmtdb5euOT4VzOMO2PzckGOqUBn3EGup0J0%2FWwebHeAOxBPE5hJqp%2Fiwmj4b2lmT2cX6cmBWJuZgrW%2F2pWAd4%2F%2BXdHWqQlH%2Ffct0gDo3CsWg6v%2B6e2rSe4WCrmM23B2vdSt5%2BGkX%2BaKAq8k%2BEoHdpb%2FiZAOZA8DF%2BGdBfU3D%2FzdDrcOKJESrOrv7O8ePvOaemx8X%2BpQHDwaNgeipKwMj8dZZU3kc%2BqvvGOzy1NFIZly5HBtIqkbgrH&X-Amz-Signature=56350633464611ac42b7e5e8639794567db77e8f109c3ea248d8b6a9c965ef8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
