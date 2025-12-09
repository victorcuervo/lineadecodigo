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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5UC5AZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsukgnLJiSraQtqvzWipWYkn7P3klEn1rJl7uBVMdSIQIhAKj7RiKrMbGCvhCeUiDKNNkWWUGFEPjjFFTGL5c26ngwKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcMxjnViW4K7yWdEgq3ANOzigzx96sEJnImkxXAryqT0mGUJWDm19aMV7ME%2BAnv06A7kz3Uk9DynlO%2FFlshNwlfaRrfFArqNboIs3UQ%2FVCHMYON3Q3pg%2FpMa6hOnvdpXYE2ws5RnejTiwYEEupdHwuua3g7by4IFlFxhYmYGnUTIQFfiOeAKnnpjko9r6I4C3t%2FNaYF%2F3Guu%2BgENRNeK52g9IxvW8%2B7ZSN4ghqKbwUn0y8kSaN0R2IrPRgmA1dkFOBGr4XR2v%2BA5Th0e9TXDrtB3i5aCkdM%2F%2FzndiZdt5KQZyzb1N1MqVCxmos3StPpUYhOXGTyHeW9MKbiiO4i1mz9JQTcMDJzTHUsY0V%2BvEjNvJONtnXXYidO6IwbsRGrK9wJ4vBFMr02stITVCoO1vXa0I4rm9LtKLJltk2sxw%2BHLmlTjSMH2iakSLRnBprfH4iTYyIOlVtYta2BQP6nbgUFe2tyNzBQyjUtralOMf2D9gJCxSzhSjX2muHY70CoGLInlVPH43LdnH69mGggGYXWbXvQ%2FsBnbDVEQqE6Hh08Ff3Cz9COWUuJP%2BxpC21QNDx6dPpvcG9iEWJsklk0XI6A%2B9KON41K6oy%2Fcbg2klGaLaWpzxrd0nNhwmdq2ay%2BY%2BL%2FDKpyZUJKRpQEDDcrd7JBjqkAXRIlQPgZhqePC6lS2LdZvAkYNHuEwm74IvlHAA1DvyAPgNZ5Mu5KVgub5M7R0lqlVV85SVYiXONh8VnjkktA5RrbHdKcn7pbMO9iYheue7By8AH7E32KCLIY5QJ9Kyd2SXzRkXxsYx0GU%2FZYShFXlOKCGQmvP%2BxrGSGSvOlm1t9aDq45Zmzr9TystC0yghoNMosQPttUHbHbsjuP6HWuT9zKitX&X-Amz-Signature=421d40e641e33fbd9563b0f2c7b75ebe3f13d356ab15e6029a153c64b5f62a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5UC5AZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsukgnLJiSraQtqvzWipWYkn7P3klEn1rJl7uBVMdSIQIhAKj7RiKrMbGCvhCeUiDKNNkWWUGFEPjjFFTGL5c26ngwKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcMxjnViW4K7yWdEgq3ANOzigzx96sEJnImkxXAryqT0mGUJWDm19aMV7ME%2BAnv06A7kz3Uk9DynlO%2FFlshNwlfaRrfFArqNboIs3UQ%2FVCHMYON3Q3pg%2FpMa6hOnvdpXYE2ws5RnejTiwYEEupdHwuua3g7by4IFlFxhYmYGnUTIQFfiOeAKnnpjko9r6I4C3t%2FNaYF%2F3Guu%2BgENRNeK52g9IxvW8%2B7ZSN4ghqKbwUn0y8kSaN0R2IrPRgmA1dkFOBGr4XR2v%2BA5Th0e9TXDrtB3i5aCkdM%2F%2FzndiZdt5KQZyzb1N1MqVCxmos3StPpUYhOXGTyHeW9MKbiiO4i1mz9JQTcMDJzTHUsY0V%2BvEjNvJONtnXXYidO6IwbsRGrK9wJ4vBFMr02stITVCoO1vXa0I4rm9LtKLJltk2sxw%2BHLmlTjSMH2iakSLRnBprfH4iTYyIOlVtYta2BQP6nbgUFe2tyNzBQyjUtralOMf2D9gJCxSzhSjX2muHY70CoGLInlVPH43LdnH69mGggGYXWbXvQ%2FsBnbDVEQqE6Hh08Ff3Cz9COWUuJP%2BxpC21QNDx6dPpvcG9iEWJsklk0XI6A%2B9KON41K6oy%2Fcbg2klGaLaWpzxrd0nNhwmdq2ay%2BY%2BL%2FDKpyZUJKRpQEDDcrd7JBjqkAXRIlQPgZhqePC6lS2LdZvAkYNHuEwm74IvlHAA1DvyAPgNZ5Mu5KVgub5M7R0lqlVV85SVYiXONh8VnjkktA5RrbHdKcn7pbMO9iYheue7By8AH7E32KCLIY5QJ9Kyd2SXzRkXxsYx0GU%2FZYShFXlOKCGQmvP%2BxrGSGSvOlm1t9aDq45Zmzr9TystC0yghoNMosQPttUHbHbsjuP6HWuT9zKitX&X-Amz-Signature=aec5153b7f0a6c8190db6534a278b248a6a54060c83d8f9ce6aa35c9dae92034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
