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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2VRBIP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEwGKNPPszPrjIOqbNPUIAkUaTcWw3JJsp%2F6RCCVAMfAiBG9PMYncmQmxOPdCdySGaD8xda6eK9wxMbkT88odb4nSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRZH0OsEaS2FAP9sKtwDUCuv8CP59bSxmTynUCxCN9zbrN2KAibZ8yQAQx8hVjEjKrOLSda%2BnB4OfOb%2BRm5NxrqnNdRR8pJeglpRhEroZNAXkD8OEbLSchm%2BD6F0uAOryx38H6Tv5fdxBqKHxn%2B1kFjSJH1agE4hDqkmHK5CM0cncmYNJSUXmqpSbjCA%2BXZbPBLq%2FEq2X7V9rt6%2Bw2an%2FMqhm9AsDd4dwtWdFGujKauguFGlm6DOMnO3E7IScnySpjsgO09j5PRbmSVhah4AA32G84Qs1IzRw30fnAGXObLkdauB2VtTE9NTC6h2AXngdtv5BVydIKtHYe4MfCqZzPTz%2FvKSzogh9OvlS3MCVzMh4xFWDQTJLICILwbVfCcQfdke7PXFms4kX1sDnwSKqTwj%2BKSr9Rm3PWQpM2hPlHrwnLX2mkDwXaHHiFnamfsHzEv4Ux9zoIU2irMnSLSaA3Oy5I7Cd9WtpIzTjHa8I1bwsRNmKmVWpa0Vjc1%2B%2BDkI75zc%2FQezTz8LKc5Ls7tdtAu0ow162WBkc%2FpJnwkF6MriBRoWvIX6e1pRXld0uM4dQiNMC4gTPGeBAN8J9Jq4iuM02Wthcqe5u9cDoLI2tFl8zEesvasYMWk9NggQFTFmZHwr9mYqC5wJsIAwuaHYyQY6pgGfuUzbdcD4dA642h3zIELnDSgVYnzFeFN%2FXWi7qgFJaSOiXG76tSMw2QRHjCsNBNt0%2BajboQzebZ9BPfUpzZrhcrx2IHI%2BIPAylX8eQJ%2FXmzG3zOm49agd%2F2pxACCT1GGu8EImA6jrMTfyS9aSl15OU71lVbho6wxfKQ3XcRJqq0uFN166XdmXxTw35JkJS4jy%2FOy%2FqnF15HDdCFPQOwUHitqh0%2Fhm&X-Amz-Signature=bb7be790ebd8f273b7938c2b24fc76116c113322588802ee16419bb19d4e9b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2VRBIP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEwGKNPPszPrjIOqbNPUIAkUaTcWw3JJsp%2F6RCCVAMfAiBG9PMYncmQmxOPdCdySGaD8xda6eK9wxMbkT88odb4nSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRZH0OsEaS2FAP9sKtwDUCuv8CP59bSxmTynUCxCN9zbrN2KAibZ8yQAQx8hVjEjKrOLSda%2BnB4OfOb%2BRm5NxrqnNdRR8pJeglpRhEroZNAXkD8OEbLSchm%2BD6F0uAOryx38H6Tv5fdxBqKHxn%2B1kFjSJH1agE4hDqkmHK5CM0cncmYNJSUXmqpSbjCA%2BXZbPBLq%2FEq2X7V9rt6%2Bw2an%2FMqhm9AsDd4dwtWdFGujKauguFGlm6DOMnO3E7IScnySpjsgO09j5PRbmSVhah4AA32G84Qs1IzRw30fnAGXObLkdauB2VtTE9NTC6h2AXngdtv5BVydIKtHYe4MfCqZzPTz%2FvKSzogh9OvlS3MCVzMh4xFWDQTJLICILwbVfCcQfdke7PXFms4kX1sDnwSKqTwj%2BKSr9Rm3PWQpM2hPlHrwnLX2mkDwXaHHiFnamfsHzEv4Ux9zoIU2irMnSLSaA3Oy5I7Cd9WtpIzTjHa8I1bwsRNmKmVWpa0Vjc1%2B%2BDkI75zc%2FQezTz8LKc5Ls7tdtAu0ow162WBkc%2FpJnwkF6MriBRoWvIX6e1pRXld0uM4dQiNMC4gTPGeBAN8J9Jq4iuM02Wthcqe5u9cDoLI2tFl8zEesvasYMWk9NggQFTFmZHwr9mYqC5wJsIAwuaHYyQY6pgGfuUzbdcD4dA642h3zIELnDSgVYnzFeFN%2FXWi7qgFJaSOiXG76tSMw2QRHjCsNBNt0%2BajboQzebZ9BPfUpzZrhcrx2IHI%2BIPAylX8eQJ%2FXmzG3zOm49agd%2F2pxACCT1GGu8EImA6jrMTfyS9aSl15OU71lVbho6wxfKQ3XcRJqq0uFN166XdmXxTw35JkJS4jy%2FOy%2FqnF15HDdCFPQOwUHitqh0%2Fhm&X-Amz-Signature=dd33e585ecf34de4c3add89700005588be2acf78d8635250622d8410ecf1b708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
