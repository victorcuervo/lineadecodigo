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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYAVJB3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU13Vf9XwSZ0Ak24Mlyxp3x670fJlT5pNaJ35mVqN10AIhANBRmmfHDf9bxIIxvpJITbMWO4aEmafYw5aLtGsAVp%2FpKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk6B38wxdtlYfToBIq3ANw1HAVCbnQvzqf2DGxBtf6LZUgQPEFUhPipompelx8%2F%2FabxCsoAcE7hWQXjji96UwSmhs0pRTO4Ndxx0TUX%2BBnGbHI7yffI2Pzko%2F%2BmXbct%2F5as2U8xg0clV%2B5tjKTqOBuMHHDW6aJVIcukSQDtEhspo6pC2jrM8yp%2BDoU1vBIRX5j5YRBwLtfVm8O3HIRR4VO7ORhJJlH8encSR0t4rIFJLDLW204IHAFOrC%2FOlKHRdvmMD7E8ayv%2FCvwDWKP62tEO0XkO8v7w05SaFb4yuXm47XrThBW%2Bf06fncixMq9z8TCWW1risPLr%2BzFi3DFNIZwne%2FMSTTogFifR1aunLK2AYsxUsX1za9JD2F%2BkF1TXPh28vgMAI8PdZXZmMKtJ4yc%2B%2FnJ%2BPBMwas8gkGy%2BEy41iiiMcLubA53tB0256rshYwNb29FiVsRHw3qCN7tjq%2Bd%2BwRsZ%2FMRnIUJjO6mw%2BrVlM2G5MpboAUUoMRv0Tc6McIOq6YFM%2FfofztdCowx4cMH6QDA3%2F1dyrw3BlUeq8lIfHXPbPAJTyPZGAyHIjUvfQN7eYRpLh7e%2FZalvJsQUNbSf%2F2p3yE1exkdv0kpW802k35JYhTfYikqYkuvUQE6UwhY5yHqRY1KRTe2IzDEmtXJBjqkATDwh2xxwLnD6kRoWr43c9S8rCzewn292kHeoSRsJGc9yVvD6bSm3%2FEwVFAAsJz58HYmOWstsBg9mld6PEAin6fKfRL%2BjkKO%2FQigBqSa7x%2BaTRK1ZweSt3wIEOPsEKKHay%2BOnfHu5Xw3amgENiIPgvWCNbShXeApfixyajbzGwdBOPNX7Ah54iSgjkzNrkctSBLS7%2FL1SoSSshJG7lQBiI1D4HxX&X-Amz-Signature=7777845aa2a9372523a2e854c3179a01acfd5539cd20d5e30cdcb8151a8f8a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYAVJB3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU13Vf9XwSZ0Ak24Mlyxp3x670fJlT5pNaJ35mVqN10AIhANBRmmfHDf9bxIIxvpJITbMWO4aEmafYw5aLtGsAVp%2FpKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk6B38wxdtlYfToBIq3ANw1HAVCbnQvzqf2DGxBtf6LZUgQPEFUhPipompelx8%2F%2FabxCsoAcE7hWQXjji96UwSmhs0pRTO4Ndxx0TUX%2BBnGbHI7yffI2Pzko%2F%2BmXbct%2F5as2U8xg0clV%2B5tjKTqOBuMHHDW6aJVIcukSQDtEhspo6pC2jrM8yp%2BDoU1vBIRX5j5YRBwLtfVm8O3HIRR4VO7ORhJJlH8encSR0t4rIFJLDLW204IHAFOrC%2FOlKHRdvmMD7E8ayv%2FCvwDWKP62tEO0XkO8v7w05SaFb4yuXm47XrThBW%2Bf06fncixMq9z8TCWW1risPLr%2BzFi3DFNIZwne%2FMSTTogFifR1aunLK2AYsxUsX1za9JD2F%2BkF1TXPh28vgMAI8PdZXZmMKtJ4yc%2B%2FnJ%2BPBMwas8gkGy%2BEy41iiiMcLubA53tB0256rshYwNb29FiVsRHw3qCN7tjq%2Bd%2BwRsZ%2FMRnIUJjO6mw%2BrVlM2G5MpboAUUoMRv0Tc6McIOq6YFM%2FfofztdCowx4cMH6QDA3%2F1dyrw3BlUeq8lIfHXPbPAJTyPZGAyHIjUvfQN7eYRpLh7e%2FZalvJsQUNbSf%2F2p3yE1exkdv0kpW802k35JYhTfYikqYkuvUQE6UwhY5yHqRY1KRTe2IzDEmtXJBjqkATDwh2xxwLnD6kRoWr43c9S8rCzewn292kHeoSRsJGc9yVvD6bSm3%2FEwVFAAsJz58HYmOWstsBg9mld6PEAin6fKfRL%2BjkKO%2FQigBqSa7x%2BaTRK1ZweSt3wIEOPsEKKHay%2BOnfHu5Xw3amgENiIPgvWCNbShXeApfixyajbzGwdBOPNX7Ah54iSgjkzNrkctSBLS7%2FL1SoSSshJG7lQBiI1D4HxX&X-Amz-Signature=cf20a9f75a9be5a51a513935f9f41b4065697a78aa49cb2d7dce9e2cad3e3e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
