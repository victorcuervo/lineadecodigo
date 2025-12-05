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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYMNB7J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCehzQQokH05HowpeB5plloe8hBR%2FiiWnH9Mi%2F60d1Q1wIgHAp5TZfo%2FrcdOej6JFRTA9StWIFR3CynqFvIZG%2F7560q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGzmeQnbxYBcAyAk%2BCrcA6yDbbEJrUYqUjct3dJ1PnSO8Gh6peHThWTsJpFxNFqDmiCkFRZwHkVkA56wrB8c3Yoz9r6XYRPUS63fvsxGprjA%2FNDrFVDZJ9H3fwFdKisglacmEVOUioUWPcGUKMfeYqxZDg5tChzQV1I%2Bx46nj2XUMkPf7BiPMwLQS4HOgBTlPqvE%2BjZ02oAncaKRcBdsyGl4jvMF7JRD5Y2Rcg421NS4Y3xeq%2FoHIcsKUf0FgD8dHUr5Q7UQBKgOSUOtVBjNGehscnBcB2M8m12nNEQG3JprhLEknnTuNVtY93Twyk2tG7qytS1QGAWu%2Fu6NuczWgTbB9AeLsuWniOQycIUub2ZbwIaEN0ePWpc%2FlpDHhnqWL0%2BxNgNJyPi%2Bc5h5gMB9ct8tMftzHplbLLkEElGPEsSwMLgutLZRNoEYmUNdtWG2Wp0eeNSOIbxE9vSv7DKaaAK3MF0f4%2Fc4pcJnQgNXMjXjiR7HtbgcvWDP%2BrtXk%2FjRJA5ZkbwuL%2FixziS%2FurDB5%2FhSQwkfa%2FvV00wp4V4iGAWcEsNzGYuLrasVCs6Pkyo3mPH8UKi6r%2BHoPriKC8elLYIKbq5LX1fLJ9CVX44RteUY%2FV2YrNBLnWKA6aSYuNDWt%2BUbuuRESu8FdG7EMNOBzMkGOqUBpGoa8HDNklNMPNhc0bDKatQRtA7IuMwmIe9enbdoOY98JZ1jSYR3HHTJLEtOPLudgAGbB4qa5S6Zl%2Fh8rvEjS%2BojeCcxsJ0CGwtJJvj7VZQ1bOwxVzUAoUnQAIJmRMnBWsSRrivwuznJ2GgfZWdmfqTtKxV0qHPslAIsI7e%2F2ysYnjqCqhvGhaDzVwFZNL7taaalhV7EqwKIe5layFqgWsD%2FQjhG&X-Amz-Signature=cd7112a6bfc5d3363b9aed3680c641c0db3cc3339f780d1730e9869d9914bd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYMNB7J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCehzQQokH05HowpeB5plloe8hBR%2FiiWnH9Mi%2F60d1Q1wIgHAp5TZfo%2FrcdOej6JFRTA9StWIFR3CynqFvIZG%2F7560q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGzmeQnbxYBcAyAk%2BCrcA6yDbbEJrUYqUjct3dJ1PnSO8Gh6peHThWTsJpFxNFqDmiCkFRZwHkVkA56wrB8c3Yoz9r6XYRPUS63fvsxGprjA%2FNDrFVDZJ9H3fwFdKisglacmEVOUioUWPcGUKMfeYqxZDg5tChzQV1I%2Bx46nj2XUMkPf7BiPMwLQS4HOgBTlPqvE%2BjZ02oAncaKRcBdsyGl4jvMF7JRD5Y2Rcg421NS4Y3xeq%2FoHIcsKUf0FgD8dHUr5Q7UQBKgOSUOtVBjNGehscnBcB2M8m12nNEQG3JprhLEknnTuNVtY93Twyk2tG7qytS1QGAWu%2Fu6NuczWgTbB9AeLsuWniOQycIUub2ZbwIaEN0ePWpc%2FlpDHhnqWL0%2BxNgNJyPi%2Bc5h5gMB9ct8tMftzHplbLLkEElGPEsSwMLgutLZRNoEYmUNdtWG2Wp0eeNSOIbxE9vSv7DKaaAK3MF0f4%2Fc4pcJnQgNXMjXjiR7HtbgcvWDP%2BrtXk%2FjRJA5ZkbwuL%2FixziS%2FurDB5%2FhSQwkfa%2FvV00wp4V4iGAWcEsNzGYuLrasVCs6Pkyo3mPH8UKi6r%2BHoPriKC8elLYIKbq5LX1fLJ9CVX44RteUY%2FV2YrNBLnWKA6aSYuNDWt%2BUbuuRESu8FdG7EMNOBzMkGOqUBpGoa8HDNklNMPNhc0bDKatQRtA7IuMwmIe9enbdoOY98JZ1jSYR3HHTJLEtOPLudgAGbB4qa5S6Zl%2Fh8rvEjS%2BojeCcxsJ0CGwtJJvj7VZQ1bOwxVzUAoUnQAIJmRMnBWsSRrivwuznJ2GgfZWdmfqTtKxV0qHPslAIsI7e%2F2ysYnjqCqhvGhaDzVwFZNL7taaalhV7EqwKIe5layFqgWsD%2FQjhG&X-Amz-Signature=641334f8106b51b396fc4f8eb212d5532666392a1dd156367e82fd3164bc8c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
