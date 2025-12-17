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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYXWQAF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFuIcshD2kBBqwon2u27hGopwk0ihHa%2FMMUDJ9gp3jcAiEAgpAjGX6ySXwApyfAL5gIhIOOAB4A8Iwv3QhBLavt9Msq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIhRryUpBn6lRSnk2ircAz5pWWm0Gk8gMWnRVfuFkVZDUetFVE%2FSnm8yp1D4%2FbHVJDy%2B2q4arPXFQnSCipo6ty%2FnwlgwxOli0bjd8wrjhHvz0LBDu0hKLnbpv6H%2FaetPA1y%2FUfflAT9Wsi%2B2osNPSI1iAvFNl%2FM5%2BwddBYcvJ7ftFPN3qAMrLAISyhWkeYLvhYGmDTUwuPEcLX37Z0bWjjKL1c2tIIu%2ByG5XdGBKzX4BrjeLt0HL45MkL35kdD6iucTn69fBdiNM2Jp3sDntGpACfGWYnhLiIjV8rhKefAOJeF2E9F2h5kiVf8GCwxYjoxVaw3hF1nyHKWfn8NHuP%2FUsRqslLGZXbpRIhSnTXzMx7lmjWsbc5mta2MmzZ4yBHBHUp0a2A7zpKHxfsiAbvgAIFenwlJfQWScZbTVfTd0uohcC%2BJKJnO0WwHNZ9eqIakux9%2FB1TWL7ZAKe34fSRiW%2ByTlyyRvgKCeWrKN1%2FHQEQq2%2BiprzTBCEgmZnmcIFRNQlEx6FWOkyWdXtx8jPOR66RuHlJNXSEP7vUrokZno5mGYn8%2Bytxfofswh%2Fe1lpGg5wLn4l6kVEBtNOlpOez%2BAx%2FCTyHUKIrohXtaWzTugyqTnRavzwvMonAjeJS%2FMs7Tg2xlmdDpoINg7CMPeOisoGOqUBZbr%2BGlZG%2Bltw9b7AByP0mqJTboGT31bxdWoWX51bPlTG%2FGPu99CUET2gIqTsWS6Q%2B8jDJdNEy6spt58RUb%2Fk7%2Fgk%2BwJoQqv0O0PdRBurbx801AKY1NGj6ktD31p8eNh%2FC3O21pWtBFTLkNej9fg%2BdYnSNpevyWFV06d%2FaO1czSif9VUNgCrDWLtAknEfvwZX5jBVGwv%2Fcy2uz%2ByiaENYMIqVZ%2BR8&X-Amz-Signature=ffff9e7cfe51f842ab69f3afbb618d9b836ee025d31af33c2fbeb0061dbcd5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYXWQAF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFuIcshD2kBBqwon2u27hGopwk0ihHa%2FMMUDJ9gp3jcAiEAgpAjGX6ySXwApyfAL5gIhIOOAB4A8Iwv3QhBLavt9Msq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIhRryUpBn6lRSnk2ircAz5pWWm0Gk8gMWnRVfuFkVZDUetFVE%2FSnm8yp1D4%2FbHVJDy%2B2q4arPXFQnSCipo6ty%2FnwlgwxOli0bjd8wrjhHvz0LBDu0hKLnbpv6H%2FaetPA1y%2FUfflAT9Wsi%2B2osNPSI1iAvFNl%2FM5%2BwddBYcvJ7ftFPN3qAMrLAISyhWkeYLvhYGmDTUwuPEcLX37Z0bWjjKL1c2tIIu%2ByG5XdGBKzX4BrjeLt0HL45MkL35kdD6iucTn69fBdiNM2Jp3sDntGpACfGWYnhLiIjV8rhKefAOJeF2E9F2h5kiVf8GCwxYjoxVaw3hF1nyHKWfn8NHuP%2FUsRqslLGZXbpRIhSnTXzMx7lmjWsbc5mta2MmzZ4yBHBHUp0a2A7zpKHxfsiAbvgAIFenwlJfQWScZbTVfTd0uohcC%2BJKJnO0WwHNZ9eqIakux9%2FB1TWL7ZAKe34fSRiW%2ByTlyyRvgKCeWrKN1%2FHQEQq2%2BiprzTBCEgmZnmcIFRNQlEx6FWOkyWdXtx8jPOR66RuHlJNXSEP7vUrokZno5mGYn8%2Bytxfofswh%2Fe1lpGg5wLn4l6kVEBtNOlpOez%2BAx%2FCTyHUKIrohXtaWzTugyqTnRavzwvMonAjeJS%2FMs7Tg2xlmdDpoINg7CMPeOisoGOqUBZbr%2BGlZG%2Bltw9b7AByP0mqJTboGT31bxdWoWX51bPlTG%2FGPu99CUET2gIqTsWS6Q%2B8jDJdNEy6spt58RUb%2Fk7%2Fgk%2BwJoQqv0O0PdRBurbx801AKY1NGj6ktD31p8eNh%2FC3O21pWtBFTLkNej9fg%2BdYnSNpevyWFV06d%2FaO1czSif9VUNgCrDWLtAknEfvwZX5jBVGwv%2Fcy2uz%2ByiaENYMIqVZ%2BR8&X-Amz-Signature=9971446b41845a4befc98d9e959dabee33ecec9883c9ffad4b615c8fb9f11e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
