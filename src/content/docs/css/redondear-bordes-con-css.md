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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOQLH6R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCYZMQIIkEtOjc4iDybtmijfrLuu7HmdKYlV3a88%2B68wIgXbw2yx0%2FE0QcjwK6ff4LeSK3UoMHd7SJ7hR7XPWo1PYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJDC03IqdNXSXwIeCrcAyehswwI2%2Bw%2FVqwS%2FL8A1XqNUIvXqxuP7Son7hDH7rLIgv2Pv7CE3R5aHcusmeC5bCkLuvv6qSXUZcvR6rRLO0CK4TdJuo0We3%2FrjpvjYxEaNAhB%2FwfaUQKQbeundj5QPXsfuJ34EVJz556Gm8JcMn%2Be3kJrk57kKUMRuFIuLN09tkzbf%2Bcvn4auPf6PDgN96EYCXBqEI4vIcr2TDsVvN9CXhLY3jlCLp733LAQcGa0cUuLuLAq8vdRnUafHdu4e89kKZdEvu7LfCqIpFhfuRrc2dDUeZiOl2wPumdfYLUMoZva4phUhsa0w0OgcogQ3mJDCQ7SVZJaErXufqUnSLdMK2DfS8TT%2Bs%2Bt8E99iSUZaTTQCK4WO6ue82DcNME5gMwH9CbKq51f1WjRBxel8aReLkgyojHmLZBfCVeKcxQb8IoEIluud2e%2FfdjjrRcXPbAUILMIpn14CtTYE%2F47GZUgEqyGvfP%2FzI1PwvxFH%2BduUPWZlx7aA5%2BOKDJ5Cz9CRuKoOcbBN8Q4Z4f8aWr%2FzmdKowTXJvGDGLfBrdiPTUTr9hVwEyUC3zPOrkNKJX3TsN17iG%2FakYTlIqnBcZgkm2Y4O0dcDu2VVMfFBjZvWW70SW%2BulCO4HI6r%2FcUe7MK2F2MkGOqUBWtXZW%2FX%2BGjMhHE35Otg%2Fm2OQR308HS3ssf4%2BSwyX7PYZqWJBOVTYROHwhFTDPjJ3mXxp%2FJLt9w0v0FHemgHSxwwLo2xNy6wryXwk7R69T4llWVgfVc5AEjCZ9lw5kIAyIMUmfqGyqWV%2BYvJxAVojP767S6yNhN1hcV0dUkrGsF5gWPHwcnlYqtunL6dGXpA8w38sZPk2%2B%2Fgr1rz8M6tlHxRmU69s&X-Amz-Signature=959e207d7d1b0eb3ec3b24c59685f9c0346bd08144ad938a07d9396a27f43b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOQLH6R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCYZMQIIkEtOjc4iDybtmijfrLuu7HmdKYlV3a88%2B68wIgXbw2yx0%2FE0QcjwK6ff4LeSK3UoMHd7SJ7hR7XPWo1PYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJDC03IqdNXSXwIeCrcAyehswwI2%2Bw%2FVqwS%2FL8A1XqNUIvXqxuP7Son7hDH7rLIgv2Pv7CE3R5aHcusmeC5bCkLuvv6qSXUZcvR6rRLO0CK4TdJuo0We3%2FrjpvjYxEaNAhB%2FwfaUQKQbeundj5QPXsfuJ34EVJz556Gm8JcMn%2Be3kJrk57kKUMRuFIuLN09tkzbf%2Bcvn4auPf6PDgN96EYCXBqEI4vIcr2TDsVvN9CXhLY3jlCLp733LAQcGa0cUuLuLAq8vdRnUafHdu4e89kKZdEvu7LfCqIpFhfuRrc2dDUeZiOl2wPumdfYLUMoZva4phUhsa0w0OgcogQ3mJDCQ7SVZJaErXufqUnSLdMK2DfS8TT%2Bs%2Bt8E99iSUZaTTQCK4WO6ue82DcNME5gMwH9CbKq51f1WjRBxel8aReLkgyojHmLZBfCVeKcxQb8IoEIluud2e%2FfdjjrRcXPbAUILMIpn14CtTYE%2F47GZUgEqyGvfP%2FzI1PwvxFH%2BduUPWZlx7aA5%2BOKDJ5Cz9CRuKoOcbBN8Q4Z4f8aWr%2FzmdKowTXJvGDGLfBrdiPTUTr9hVwEyUC3zPOrkNKJX3TsN17iG%2FakYTlIqnBcZgkm2Y4O0dcDu2VVMfFBjZvWW70SW%2BulCO4HI6r%2FcUe7MK2F2MkGOqUBWtXZW%2FX%2BGjMhHE35Otg%2Fm2OQR308HS3ssf4%2BSwyX7PYZqWJBOVTYROHwhFTDPjJ3mXxp%2FJLt9w0v0FHemgHSxwwLo2xNy6wryXwk7R69T4llWVgfVc5AEjCZ9lw5kIAyIMUmfqGyqWV%2BYvJxAVojP767S6yNhN1hcV0dUkrGsF5gWPHwcnlYqtunL6dGXpA8w38sZPk2%2B%2Fgr1rz8M6tlHxRmU69s&X-Amz-Signature=b3610ee19998b4fb84780434b4978ce17e918b92c3db426cadaf6df6b13244e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
