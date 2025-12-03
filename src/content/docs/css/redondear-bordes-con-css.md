---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVZNOPX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDRSi3RItfHRgcyMq14iinGi3DWY5I3axTSq86ZzH62zwIgLan%2FZFnfHjTEytkgYnNBFRbq%2FRMusuAv747cjYxUH%2F0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDELe9yLCxffaV2AJ6yrcA1AlWsw8hsi5q1c%2B%2BJqFLzV5otTTcujQssSK4vxVto657ppr03iRsvXibbAWWK9VZHVVAxoILqTmB6SBqiDD%2F8sVtcmcwSHIsnK1WN9ax2SdydfaPXkjzLkQDxN8kxVnAg8WreGG1E6xD6JfZygGzPrjpuKVbxg9OpY8Vrr%2BUVF4FSHv2jKf2rjcOH5U2UB3sAPAGbns9ifPDxWDayqxu0Q6NNlWURO5c2C%2Bs%2FW9LuLfAUZx067m05mWnmcDuXX9l%2ByMnxKJYlL20K6glSodVicBtl6mZ1at9vWEYQc44PyalYFXsZ%2Blkt7hQXJd0Um%2BiScWHTPJ7Yk5KbjqzXfcti569dq9vlLWzTLvp%2B57r0psYzMgQdqYEonY4pQyfyHbK31YVTNjDZ%2B%2BB9cYNDqG2LHsRo96jsR%2F31eRBiFuJxP%2FdFKlEhcEuyfC1H1VMtIqpCUORx8jjvl%2FefSzxIlh4%2FiwY1TOuKC9cxgAxnmbf0LgUBWveFwsXUjNa7lAen74Lwo%2FSr5KZvnwoIzN77Wan57NR%2FjK%2BCwA3WBuopqp1Hz9DB4%2BAQRAKjaEXPj4ePKfHjLjzDMKGpcpd2ZWy97t7rtM7hNMAa%2BZ6H2OyiFljVfUdsJYs25WxoMn2uzYMOi9wskGOqUBXR%2BbfZiW1Bism48tTynmui%2FTmk2%2BdFBTaSedAjWWYDnzqiMEiNuOdd8wSoOKxiql%2Bi5mbcGGlFGkg9npaj24SXj8PiLVbeHwSVoafQC%2BXLezwumwYY7DXqcsGm2QkGL7gJzt0VPq2PWhcygkW3zO%2FlWT22OpvK2gnV3reXhsm9EhEhEhN3eB8vKtABup9Q0RAayRjqMcXoHtbNnrLMBzOgE3fQu%2F&X-Amz-Signature=a996078cc610a90ceb2471651b6c36282c07d70f07be3ab044c942dbb963106e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVZNOPX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDRSi3RItfHRgcyMq14iinGi3DWY5I3axTSq86ZzH62zwIgLan%2FZFnfHjTEytkgYnNBFRbq%2FRMusuAv747cjYxUH%2F0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDELe9yLCxffaV2AJ6yrcA1AlWsw8hsi5q1c%2B%2BJqFLzV5otTTcujQssSK4vxVto657ppr03iRsvXibbAWWK9VZHVVAxoILqTmB6SBqiDD%2F8sVtcmcwSHIsnK1WN9ax2SdydfaPXkjzLkQDxN8kxVnAg8WreGG1E6xD6JfZygGzPrjpuKVbxg9OpY8Vrr%2BUVF4FSHv2jKf2rjcOH5U2UB3sAPAGbns9ifPDxWDayqxu0Q6NNlWURO5c2C%2Bs%2FW9LuLfAUZx067m05mWnmcDuXX9l%2ByMnxKJYlL20K6glSodVicBtl6mZ1at9vWEYQc44PyalYFXsZ%2Blkt7hQXJd0Um%2BiScWHTPJ7Yk5KbjqzXfcti569dq9vlLWzTLvp%2B57r0psYzMgQdqYEonY4pQyfyHbK31YVTNjDZ%2B%2BB9cYNDqG2LHsRo96jsR%2F31eRBiFuJxP%2FdFKlEhcEuyfC1H1VMtIqpCUORx8jjvl%2FefSzxIlh4%2FiwY1TOuKC9cxgAxnmbf0LgUBWveFwsXUjNa7lAen74Lwo%2FSr5KZvnwoIzN77Wan57NR%2FjK%2BCwA3WBuopqp1Hz9DB4%2BAQRAKjaEXPj4ePKfHjLjzDMKGpcpd2ZWy97t7rtM7hNMAa%2BZ6H2OyiFljVfUdsJYs25WxoMn2uzYMOi9wskGOqUBXR%2BbfZiW1Bism48tTynmui%2FTmk2%2BdFBTaSedAjWWYDnzqiMEiNuOdd8wSoOKxiql%2Bi5mbcGGlFGkg9npaj24SXj8PiLVbeHwSVoafQC%2BXLezwumwYY7DXqcsGm2QkGL7gJzt0VPq2PWhcygkW3zO%2FlWT22OpvK2gnV3reXhsm9EhEhEhN3eB8vKtABup9Q0RAayRjqMcXoHtbNnrLMBzOgE3fQu%2F&X-Amz-Signature=4c0e10379988b12c68afe9c827128f8855251ab298e6983a85e72e0b82fe0cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
