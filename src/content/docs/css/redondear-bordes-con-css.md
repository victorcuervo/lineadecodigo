---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCYYONM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEm68ZMAlLRHbOSjHLpavvQS1mO10DLRhWcklkTgIc8IAiBt34EcXCv6Au9igdbHezgLDllJUJIzW6312wM1vJoZJyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMF5y7qgjyxFkFKjoHKtwDj3owajHVfaThmR1eE529y0gaCHhQfwE8fbKMhsCkH5rJ0vYVfdGeqj7LXEeNnGQsm9DPsA6FOFpgWORc0%2FLMJmcOO37ZvQlrSuXm8ss0oz1ZBQhG8p%2BTqJz12TbGjPnPpG9LLG7gzQXvKKU8C9ErdQ0S3mkc87SdHvinpAC7UAL0n%2FLzqkcThjRLRAt5JnxexMnmibhpPOE7KFtKevPRxd6Z16tYISjHGBGn7U5brmfifYk1wlBFhj0DlPV3wDbPMnVEyWewd%2BcR%2FqyDSlSQbTjSEFQTKt4M11nLPYBjdBtp%2FMITKUf3fAgZqEnXyjO50AEGfopxF1YfTfxGQzCrOrScUalxsOUKV44qRcy2TN1Hqe49zy3nqS6c5sXe0xXISBO4sH7RcD6lWdRLtMM2J5jNs2ZaPYBynUWiLGPNBqeXpStlk9zELyFIvvs%2F3zIlr2mfQh4FMn9wLdb4sKa1rZc5nIF7C4N0o6PNzc38NYU1lFiID%2BDwGWTiFnvWECmzHP3bmVK%2F%2BTeSKYyT2j8UB2bBMvEi9Qu%2FWYnAzd8On2MiCQV%2FSZVip5CbqWO2tzfvP3hFvF0N5SykV6vHUoWjDnjcb4sb4y5ycygzZL3VrmlKtqCOmtult8F9q3Ewp%2BjEyQY6pgGsRxjKUFREdXyFkZzQo3ss9BwaTbYRDAij8YP2i%2FoC9ICs2FH00mrOoy8Ppv7ICE%2Fzvc8x%2FtwzZiEFkHsH8nHUk5mmd9SXz%2FBh34m11CHahtSq%2B8pugvRgext8brc%2B%2BFi9rIa0jcWKfL5W9FVoPPlwxop2AcalCgNBRlEOlkysalgwmMIyMeC%2B1XjFLTajdyeV3ECfxrtUPDCnKHtd4EIbULFVznab&X-Amz-Signature=fe0e3406483b6f71e566db6c56f00ad7cf0b6516d14a75fd2653e714189f1fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCYYONM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEm68ZMAlLRHbOSjHLpavvQS1mO10DLRhWcklkTgIc8IAiBt34EcXCv6Au9igdbHezgLDllJUJIzW6312wM1vJoZJyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMF5y7qgjyxFkFKjoHKtwDj3owajHVfaThmR1eE529y0gaCHhQfwE8fbKMhsCkH5rJ0vYVfdGeqj7LXEeNnGQsm9DPsA6FOFpgWORc0%2FLMJmcOO37ZvQlrSuXm8ss0oz1ZBQhG8p%2BTqJz12TbGjPnPpG9LLG7gzQXvKKU8C9ErdQ0S3mkc87SdHvinpAC7UAL0n%2FLzqkcThjRLRAt5JnxexMnmibhpPOE7KFtKevPRxd6Z16tYISjHGBGn7U5brmfifYk1wlBFhj0DlPV3wDbPMnVEyWewd%2BcR%2FqyDSlSQbTjSEFQTKt4M11nLPYBjdBtp%2FMITKUf3fAgZqEnXyjO50AEGfopxF1YfTfxGQzCrOrScUalxsOUKV44qRcy2TN1Hqe49zy3nqS6c5sXe0xXISBO4sH7RcD6lWdRLtMM2J5jNs2ZaPYBynUWiLGPNBqeXpStlk9zELyFIvvs%2F3zIlr2mfQh4FMn9wLdb4sKa1rZc5nIF7C4N0o6PNzc38NYU1lFiID%2BDwGWTiFnvWECmzHP3bmVK%2F%2BTeSKYyT2j8UB2bBMvEi9Qu%2FWYnAzd8On2MiCQV%2FSZVip5CbqWO2tzfvP3hFvF0N5SykV6vHUoWjDnjcb4sb4y5ycygzZL3VrmlKtqCOmtult8F9q3Ewp%2BjEyQY6pgGsRxjKUFREdXyFkZzQo3ss9BwaTbYRDAij8YP2i%2FoC9ICs2FH00mrOoy8Ppv7ICE%2Fzvc8x%2FtwzZiEFkHsH8nHUk5mmd9SXz%2FBh34m11CHahtSq%2B8pugvRgext8brc%2B%2BFi9rIa0jcWKfL5W9FVoPPlwxop2AcalCgNBRlEOlkysalgwmMIyMeC%2B1XjFLTajdyeV3ECfxrtUPDCnKHtd4EIbULFVznab&X-Amz-Signature=27e0196ebef825aa5a1a438e308bcfbde445d7f6eba40a50a08bd51f5d734940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
