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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXCJTLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9bm05WH2elclupKJCC8yMCWeKTTBPSgcz9mdxYlGMWAiEA6lyxfVmoRLe4nbHqxXqtHfMttUAgXcxUq3O21ggIaekq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAF2grNmATSFJqpatSrcA4KWjBx0jSxWfKfW8ZFe%2FWoBoOt68tUU9VKLp3z%2FaydkZ6rlE7vCr3WnS0OIp1%2FeuXjrHpGG8ENpxYmL01KwkSsiPnVk07JEltyfpwLlJ733XO%2FNhdNbl285sTbIVxqALD8BfUGMt4MrVtSEjaBYxwrcozvYjOCCRRe9ji6MdOckZXglOv9%2Bdbn%2FuVtqHQmnkIrjgFvgyJ6Fju9zFkSK8QnPeWEWvWlBntcnTNbSZyx2KHgGDeRxHky8phy5T4k0xKMpMuh6I1c3eeh6QY3gkYsmBP23SkSohMy5f7UHd67r6nqIWtWLSWfKr9QtrHW181BEb8rJkkPPWY9yOuFNQKyp618LMyRgVHfTiUlKR6ptxtnoN6yDY88ruKbhwzLT%2F5IHQ8RebwMlSRwP7IIhP0bcyjDm%2F%2FMvGyIK%2FUahzsf3YKlurD3%2F2yEJ8velgeaGVV1X0FjRq2dPDMxs%2Bwy8%2BgoSAlRYzcbAZz3aJvotQzwN3Z3wVwEzFEbfyK0AT9c1z5%2BGdyE1%2ByP43BY1gUND4MAJLkXdorixcR%2Bek6%2BLHpwLysryn1Gofa8OrUy%2BaLhFL7dfhPJaHfs41i8PexAyMJiyoFj9GRXT6PK0Xe7nQ8i0rKOKtGmmDOzkp00tMMScicoGOqUBEyBcBKzz1K50wENay5yHQUfTXCG0RyY2WufaPBqjridjZxZVfK0JK01s492KusggbJzBEITQAbkK32Sf1VSLREtlBwXTcTJZV7U3U9U9QqZhEjvETYNyOHP4ROKtyCJQx1M79eiEFm7OIH4Z9cgaHkBr5b4H20Bt4oh99og4F0%2B2ldKtg7JvnYWHclHCkpom8Q%2FDOfVR9%2BVek%2BpYI0TyVKrkxEP7&X-Amz-Signature=a49dfe8e67302d77f290f18417563662e5318b1ca08126e2796a4eafda61d610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXCJTLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9bm05WH2elclupKJCC8yMCWeKTTBPSgcz9mdxYlGMWAiEA6lyxfVmoRLe4nbHqxXqtHfMttUAgXcxUq3O21ggIaekq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAF2grNmATSFJqpatSrcA4KWjBx0jSxWfKfW8ZFe%2FWoBoOt68tUU9VKLp3z%2FaydkZ6rlE7vCr3WnS0OIp1%2FeuXjrHpGG8ENpxYmL01KwkSsiPnVk07JEltyfpwLlJ733XO%2FNhdNbl285sTbIVxqALD8BfUGMt4MrVtSEjaBYxwrcozvYjOCCRRe9ji6MdOckZXglOv9%2Bdbn%2FuVtqHQmnkIrjgFvgyJ6Fju9zFkSK8QnPeWEWvWlBntcnTNbSZyx2KHgGDeRxHky8phy5T4k0xKMpMuh6I1c3eeh6QY3gkYsmBP23SkSohMy5f7UHd67r6nqIWtWLSWfKr9QtrHW181BEb8rJkkPPWY9yOuFNQKyp618LMyRgVHfTiUlKR6ptxtnoN6yDY88ruKbhwzLT%2F5IHQ8RebwMlSRwP7IIhP0bcyjDm%2F%2FMvGyIK%2FUahzsf3YKlurD3%2F2yEJ8velgeaGVV1X0FjRq2dPDMxs%2Bwy8%2BgoSAlRYzcbAZz3aJvotQzwN3Z3wVwEzFEbfyK0AT9c1z5%2BGdyE1%2ByP43BY1gUND4MAJLkXdorixcR%2Bek6%2BLHpwLysryn1Gofa8OrUy%2BaLhFL7dfhPJaHfs41i8PexAyMJiyoFj9GRXT6PK0Xe7nQ8i0rKOKtGmmDOzkp00tMMScicoGOqUBEyBcBKzz1K50wENay5yHQUfTXCG0RyY2WufaPBqjridjZxZVfK0JK01s492KusggbJzBEITQAbkK32Sf1VSLREtlBwXTcTJZV7U3U9U9QqZhEjvETYNyOHP4ROKtyCJQx1M79eiEFm7OIH4Z9cgaHkBr5b4H20Bt4oh99og4F0%2B2ldKtg7JvnYWHclHCkpom8Q%2FDOfVR9%2BVek%2BpYI0TyVKrkxEP7&X-Amz-Signature=0e54b2b8ccae7ae7c93b1a6fed9798e7e0b97a9a963d85821bd82fce5d468b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
