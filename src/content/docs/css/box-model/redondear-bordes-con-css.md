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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QF6QZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsydSxDL%2FYfkpBk%2F37L53EdJlkNouzjArBaOcvHstMlAiAZAebFEyc8MW7iWYnQ86iO6L4ajTkLjQOEdytdRxFcZiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM2g5cPlQ%2FXyjbcxKtwD3w8Dp5o0qVeHjOdnM%2FMUdfoVJnPhrB7cW1wBZk8YfzrWSsl7TXHLMJ%2B2JQdEq5GoaH07A4RuAdAUOLTXih1IefOxpDNEXpsWaGjUVr6VFWbhgBS8YPpMUL7YejYLh1rtlfaqXWYCNhhboumhbY6lf2CK9RmcRqSfK6vhSCdc6C89Ex85hQCkaWa4R8xO2R0YT7id9eNlaz7sk5Os4Tf9HkqBc%2BelHW2sNZU75Eu%2FBx5IyxycaoJhapLiJ14pk%2Fe%2FVif0jF3VkQSWE3mRJziiGJsmkq2phF4IrBe9UYKszETPbzgXFXa2kXW4UR0dEMFiA%2B2AZBLCW9%2BK1GVkcEvx0ck9dZocLXSLm%2FWg5pz1YHRFLOoCbVOPwhxsLC3tCypD2rvFwtwVx%2FbUu1xZEzL1nK5CkmUhMs%2FrjU1uSiP2CP9vTOiJVnkVZLMfVeQmpxc0rCuLw%2Fi0OW1wSi3zzY0G%2BzY%2FaABlE8533wMQdqLLjxGUi75IdA9q5oFFTDMgqqGi7y2yA4CkmCsIgaEJ%2FcrM4BMoK2wQTu%2BN86vTIZmBisprigQUDMX%2BkkXFz0ilEkx5BtEBj4Q2CguHF5wlFKyxCzo27zs%2FFRYUd%2F6jGdBOAIV26oGmoaB307HKDhsw7Z6LygY6pgE%2FuWVib%2BFDy1%2BdylyXVVvePpnFDmAhriv7WavfxdI2Zjub0vt3B7G9YGXPramB2PYOSvRavfuyfaA2PEkl50%2BNLGMNNDHPhNjZ6qn0IBMTB0YA%2Fa%2BxrV8b6hgb6GV2uB%2F4pRXB8%2BgwGY1a7dsWuFep6vRkxe8h73qBsl3sx9MdpUAIHsPRC5kgCsdI%2BzlotsRNmt5dK%2F5uoXz0txrzKVFtbYcMh9H4&X-Amz-Signature=c2d77666a2f769e882ca90c0d5f5a64130b4d62eae38753825e6d47d8cd6d69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QF6QZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsydSxDL%2FYfkpBk%2F37L53EdJlkNouzjArBaOcvHstMlAiAZAebFEyc8MW7iWYnQ86iO6L4ajTkLjQOEdytdRxFcZiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM2g5cPlQ%2FXyjbcxKtwD3w8Dp5o0qVeHjOdnM%2FMUdfoVJnPhrB7cW1wBZk8YfzrWSsl7TXHLMJ%2B2JQdEq5GoaH07A4RuAdAUOLTXih1IefOxpDNEXpsWaGjUVr6VFWbhgBS8YPpMUL7YejYLh1rtlfaqXWYCNhhboumhbY6lf2CK9RmcRqSfK6vhSCdc6C89Ex85hQCkaWa4R8xO2R0YT7id9eNlaz7sk5Os4Tf9HkqBc%2BelHW2sNZU75Eu%2FBx5IyxycaoJhapLiJ14pk%2Fe%2FVif0jF3VkQSWE3mRJziiGJsmkq2phF4IrBe9UYKszETPbzgXFXa2kXW4UR0dEMFiA%2B2AZBLCW9%2BK1GVkcEvx0ck9dZocLXSLm%2FWg5pz1YHRFLOoCbVOPwhxsLC3tCypD2rvFwtwVx%2FbUu1xZEzL1nK5CkmUhMs%2FrjU1uSiP2CP9vTOiJVnkVZLMfVeQmpxc0rCuLw%2Fi0OW1wSi3zzY0G%2BzY%2FaABlE8533wMQdqLLjxGUi75IdA9q5oFFTDMgqqGi7y2yA4CkmCsIgaEJ%2FcrM4BMoK2wQTu%2BN86vTIZmBisprigQUDMX%2BkkXFz0ilEkx5BtEBj4Q2CguHF5wlFKyxCzo27zs%2FFRYUd%2F6jGdBOAIV26oGmoaB307HKDhsw7Z6LygY6pgE%2FuWVib%2BFDy1%2BdylyXVVvePpnFDmAhriv7WavfxdI2Zjub0vt3B7G9YGXPramB2PYOSvRavfuyfaA2PEkl50%2BNLGMNNDHPhNjZ6qn0IBMTB0YA%2Fa%2BxrV8b6hgb6GV2uB%2F4pRXB8%2BgwGY1a7dsWuFep6vRkxe8h73qBsl3sx9MdpUAIHsPRC5kgCsdI%2BzlotsRNmt5dK%2F5uoXz0txrzKVFtbYcMh9H4&X-Amz-Signature=df8a83e9ab26bae79b769c7013add904dfe40bba67c37b6de9e939b14d27396c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
