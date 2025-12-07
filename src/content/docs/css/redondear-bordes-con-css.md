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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWDH4E7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFI3d1IpprtPRe3mHUlyeirpoyemCDbO66%2F8Bh%2FLLrUEAiEArg6Dzr4JQpmnxsiYUm%2B2e%2B37q2Grx5%2BJ9ncy%2BwjSo8kqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgiAGdH4IJucoKwTCrcA%2Bah06QJnOz0hQb22FRDA%2FDgfgnwJWUChTOI%2BVjvWsdClXI0X%2FZYHNSplKXgKwlgfHLcLV9FO9u5%2BdQd1aLD5h93hvDml86wGG0ADJzP%2FwB%2FwA5HrH852L5NHGfSaeI%2B7uPL6llNSbesxz1qp9Dx4OUpBIZ62PpqxlHtzKftL95Rk8DE4ARanV1BtdcDxT1SLdXfYc9fmn9oeftnq9yj5nFUEbpS3cSyCsR%2FgoKAtaluFUgDJAN3wi0z3ZvzeHoMZIAT3a6wBxgIyyqYX%2FCUHsx7Ykc%2BSwkx75izo2EGpH6%2Fk6gDEcIybHHEwOpnU2VTmJ00EunnGP1uDpOryUCnjk1wIaO0s44cnXSqGOmG%2F4hwMHvXckDqBqconRg4c4NRJ9KcBtKbIc2SF36O%2B9WDAb34nJeNV2BNVulGkhVds1uPNyen0XlxSOm%2FZnAndfxJxKpYxP0zQtx2i3ivi8NDocMuHdbpjz9Tki3NPxIO9EcfAXS9Ml28qVgd9zCneYGFJMiW7XxjwYN3fZHCYWA6qFoeMBAeQJaPVki3zMGN9T9uvM0%2BSoHo8tDHt7jjkx4Xh8SSos77XhsdwvzSfmOUjQg86J3jHAiaFWTyi4m5GipicNVRL7F78PvXnJfGMLK91skGOqUBbNpfjs7BkJSWf3XJPSiZ63Mf92Zda9wywemLrUUpX6DSq0SpHNVdutigOmz6dzu1Sa43wT6CE8WYLnx2cf5FZPL04Uz8BSl9tM2PMG1jjKs9BNxTLLL5h5nOBR5zwOEPcWMwEG0GQsVAJwvwouHWVFggPR1oA6mmiYNq3nPB7eGkORRBMbMAXh7viUDFaqEoyr5EZSmZAqSACc8zydWoa3XgmLhu&X-Amz-Signature=3ef01fa0a44278e82092aa29874e6e9a63c94a6b412873de3e9c921a3d8cdf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWDH4E7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFI3d1IpprtPRe3mHUlyeirpoyemCDbO66%2F8Bh%2FLLrUEAiEArg6Dzr4JQpmnxsiYUm%2B2e%2B37q2Grx5%2BJ9ncy%2BwjSo8kqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgiAGdH4IJucoKwTCrcA%2Bah06QJnOz0hQb22FRDA%2FDgfgnwJWUChTOI%2BVjvWsdClXI0X%2FZYHNSplKXgKwlgfHLcLV9FO9u5%2BdQd1aLD5h93hvDml86wGG0ADJzP%2FwB%2FwA5HrH852L5NHGfSaeI%2B7uPL6llNSbesxz1qp9Dx4OUpBIZ62PpqxlHtzKftL95Rk8DE4ARanV1BtdcDxT1SLdXfYc9fmn9oeftnq9yj5nFUEbpS3cSyCsR%2FgoKAtaluFUgDJAN3wi0z3ZvzeHoMZIAT3a6wBxgIyyqYX%2FCUHsx7Ykc%2BSwkx75izo2EGpH6%2Fk6gDEcIybHHEwOpnU2VTmJ00EunnGP1uDpOryUCnjk1wIaO0s44cnXSqGOmG%2F4hwMHvXckDqBqconRg4c4NRJ9KcBtKbIc2SF36O%2B9WDAb34nJeNV2BNVulGkhVds1uPNyen0XlxSOm%2FZnAndfxJxKpYxP0zQtx2i3ivi8NDocMuHdbpjz9Tki3NPxIO9EcfAXS9Ml28qVgd9zCneYGFJMiW7XxjwYN3fZHCYWA6qFoeMBAeQJaPVki3zMGN9T9uvM0%2BSoHo8tDHt7jjkx4Xh8SSos77XhsdwvzSfmOUjQg86J3jHAiaFWTyi4m5GipicNVRL7F78PvXnJfGMLK91skGOqUBbNpfjs7BkJSWf3XJPSiZ63Mf92Zda9wywemLrUUpX6DSq0SpHNVdutigOmz6dzu1Sa43wT6CE8WYLnx2cf5FZPL04Uz8BSl9tM2PMG1jjKs9BNxTLLL5h5nOBR5zwOEPcWMwEG0GQsVAJwvwouHWVFggPR1oA6mmiYNq3nPB7eGkORRBMbMAXh7viUDFaqEoyr5EZSmZAqSACc8zydWoa3XgmLhu&X-Amz-Signature=020f6f7c60c4ef27a661d6aa9f0617afd6d35e341efee0e2b5f9d1865979a7df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
