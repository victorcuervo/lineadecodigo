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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EB2BQ7P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9mOj1sDkTbd9sR0P9LC5NMv5aghG7D6A1yEOlxBmupAiEA%2F0pqUj1diB5ZcJjCeug2dLi0ehkensNsry7SEtBT6Asq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFLUMfzdHLPA95toZSrcAwKpFiHcYpw1KysLcg1Ldcn5qSI%2BrMz8Myy6ReU2syp%2BlYmny3vfX4ivRrl%2BByhT93ROOuDhoWY%2FMZBnIUVUU4Xya6GIe%2FhAXaAmnQiZaltOxKjom3ZKlWlj3nNDSN3uu0KqoICJqX%2Bz2blvTs5vCGXO5ffn3S306vyf6OPHBbG4rFWpycM3IxRtsN4AaEqg48dBqIg0hmbtpJ0ffBd4LzZAacSBCR1kj%2BnqyYlFqZCn9xT4D1EZvO3FF65ocLgCqkOkyrxgiQ2H%2FoX7Rpijw3qP9zw6Go4tDEn%2FEKBwM7cWa3rjxh7ndLqUjsT6nr8vpHwGIDe%2Blwijw283lSNuBDI9voAgTzEotpow%2FLju8wT7FtlcV1IBID3Rp5S7cNc9F5XRlpqWdK23rPbBUi%2FcnG%2FahyNL4g%2BNpuelUrMDXFi7NJBng93uQVCubnd103o4qEEJAGoQkUbfXvJpfRwj1BbNTrz60nIkqsVKH3rGXLmDFhEZlGpqGoFUxsWI%2B6PuYqjrwiJ8SDd0eyzvHlHOtYFhuKAt6ea7E7Gufyv1JBQBeCWYA9QnJf0vBFbXjX94Px%2FoHyGHCiGuHiUJwuLJTymtwF%2Bto3voo%2BGHdQm1YDQR4eGIn7mPO%2Bl6y6Y8MKH9zMkGOqUBNP7GAq3qLDuuqG6KfA05D0KrHJSigZ9Xe1lDCULETOhukHxLLtkr7l1U%2BOmPcVfHyl%2BfjBEXYDJATlvhUC1%2FS%2FABOdt95UStozQX1YDQCaDTPVdI0WyF%2FSaDpTw1Izj3o0gCEwqRMc8Ybg5EjEJF3SoxcLpzhoBCONDg3%2BgF5lVAJukL9F1f%2Fh00OqK34l4CcDCNmuWlOoeEM57ajWXpXF2bgl65&X-Amz-Signature=216ba555f223527bdef31a163357c0208cfe09a31907f12f39feabb365b84af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EB2BQ7P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9mOj1sDkTbd9sR0P9LC5NMv5aghG7D6A1yEOlxBmupAiEA%2F0pqUj1diB5ZcJjCeug2dLi0ehkensNsry7SEtBT6Asq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFLUMfzdHLPA95toZSrcAwKpFiHcYpw1KysLcg1Ldcn5qSI%2BrMz8Myy6ReU2syp%2BlYmny3vfX4ivRrl%2BByhT93ROOuDhoWY%2FMZBnIUVUU4Xya6GIe%2FhAXaAmnQiZaltOxKjom3ZKlWlj3nNDSN3uu0KqoICJqX%2Bz2blvTs5vCGXO5ffn3S306vyf6OPHBbG4rFWpycM3IxRtsN4AaEqg48dBqIg0hmbtpJ0ffBd4LzZAacSBCR1kj%2BnqyYlFqZCn9xT4D1EZvO3FF65ocLgCqkOkyrxgiQ2H%2FoX7Rpijw3qP9zw6Go4tDEn%2FEKBwM7cWa3rjxh7ndLqUjsT6nr8vpHwGIDe%2Blwijw283lSNuBDI9voAgTzEotpow%2FLju8wT7FtlcV1IBID3Rp5S7cNc9F5XRlpqWdK23rPbBUi%2FcnG%2FahyNL4g%2BNpuelUrMDXFi7NJBng93uQVCubnd103o4qEEJAGoQkUbfXvJpfRwj1BbNTrz60nIkqsVKH3rGXLmDFhEZlGpqGoFUxsWI%2B6PuYqjrwiJ8SDd0eyzvHlHOtYFhuKAt6ea7E7Gufyv1JBQBeCWYA9QnJf0vBFbXjX94Px%2FoHyGHCiGuHiUJwuLJTymtwF%2Bto3voo%2BGHdQm1YDQR4eGIn7mPO%2Bl6y6Y8MKH9zMkGOqUBNP7GAq3qLDuuqG6KfA05D0KrHJSigZ9Xe1lDCULETOhukHxLLtkr7l1U%2BOmPcVfHyl%2BfjBEXYDJATlvhUC1%2FS%2FABOdt95UStozQX1YDQCaDTPVdI0WyF%2FSaDpTw1Izj3o0gCEwqRMc8Ybg5EjEJF3SoxcLpzhoBCONDg3%2BgF5lVAJukL9F1f%2Fh00OqK34l4CcDCNmuWlOoeEM57ajWXpXF2bgl65&X-Amz-Signature=e0a31b78bb3a689995e21bba618036faac1a68130e476e14d9e1cdf780c83406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
