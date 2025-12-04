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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236MQH7G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BjasrB7ibX9mm1K6KiDSkjV9KUeigT2y4n8EPTPGu2wIge2NixSDfJ1ye78JwK9zOjh0Nz5tB0nJfY4NS%2F00s7y8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFdBpT0DA1NxgYqWcyrcA2rOo9s7hN9%2BW91jXraqaXenSqmluZf%2BkHCIIm6M1B1o0gWS%2BSN6VM%2B%2B2F35sbiW7zICFovaf03RmPOlNhPAjEM7uDNKDGXMHx6T%2BkwUnJhwZgKoCgK4ZOJuaWlnpopTf9JMRqZgFhSOFGsXUMaiwiEHoC%2BhEHDea80FBIrZRijV%2BnLLloaGqcgWMb%2Fe0%2B72vvZQKpuYZy2cQhjF4XAyqoqUPOEFSvp9xTAB5Uuchl6vuAOH%2F3keRcWToDX%2Bw8EZ1GfFVNgXOPYmf7iMNGocHCHsKhkhzyKMcfepoPR2ym9xfFqxO9mpYnckah6E0N2X0clRGrwKQjoFSJyFfeRdardKC7sjDGbm3wfdhITdZA5VTAEbzzMa5VmYCEUsUp%2FX%2FG06%2BB9A6GSP9JQ5VZv4k5iY2V21ZvnHnfxhlzumSD5KvE9NnyFp0VjNOIwzBxm%2B0l0AhUtZFaIm2f50mAUA75DJeK9AAOK%2Bi%2FUJ2AfQ25TwsWJbIksz%2FGbIoo4Y5mLMa2YjHTxxNHJ6J34SXj8q%2F5jWo1WZr9MU5TMHt5mcoLhr1XOl%2BdGhCagc7ew05mAj00wnkXqYKT2svJDR9eVSC1DZ6buJ3IMEY0Ve760OH6BHzMHBeiTxTQUAwTi9MOHbxskGOqUBue14YfqII5PUWljTPYHFL4S6EOu7DwxGanR0CDnqOj0zrdpnwWgmtHjhwmqXNPxinjISqdWId6WXwzEtbHIjA4VC%2FigEa0DDgYghOvRDcU%2Fx2DUKYm0IZzjxXTd3bu43aRusF2O0NKi%2B5zZ3pu5NFvIPF7wGiTx%2BgggUE5RYTaAT4sCR6mlNH1xzJuTqFnspJ5py7c4NzWL2imBjuEJw6kwWzvSx&X-Amz-Signature=91fc7da93085932b553c580a547d1693a82733f5f6065332f3f35afd197b0a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236MQH7G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BjasrB7ibX9mm1K6KiDSkjV9KUeigT2y4n8EPTPGu2wIge2NixSDfJ1ye78JwK9zOjh0Nz5tB0nJfY4NS%2F00s7y8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFdBpT0DA1NxgYqWcyrcA2rOo9s7hN9%2BW91jXraqaXenSqmluZf%2BkHCIIm6M1B1o0gWS%2BSN6VM%2B%2B2F35sbiW7zICFovaf03RmPOlNhPAjEM7uDNKDGXMHx6T%2BkwUnJhwZgKoCgK4ZOJuaWlnpopTf9JMRqZgFhSOFGsXUMaiwiEHoC%2BhEHDea80FBIrZRijV%2BnLLloaGqcgWMb%2Fe0%2B72vvZQKpuYZy2cQhjF4XAyqoqUPOEFSvp9xTAB5Uuchl6vuAOH%2F3keRcWToDX%2Bw8EZ1GfFVNgXOPYmf7iMNGocHCHsKhkhzyKMcfepoPR2ym9xfFqxO9mpYnckah6E0N2X0clRGrwKQjoFSJyFfeRdardKC7sjDGbm3wfdhITdZA5VTAEbzzMa5VmYCEUsUp%2FX%2FG06%2BB9A6GSP9JQ5VZv4k5iY2V21ZvnHnfxhlzumSD5KvE9NnyFp0VjNOIwzBxm%2B0l0AhUtZFaIm2f50mAUA75DJeK9AAOK%2Bi%2FUJ2AfQ25TwsWJbIksz%2FGbIoo4Y5mLMa2YjHTxxNHJ6J34SXj8q%2F5jWo1WZr9MU5TMHt5mcoLhr1XOl%2BdGhCagc7ew05mAj00wnkXqYKT2svJDR9eVSC1DZ6buJ3IMEY0Ve760OH6BHzMHBeiTxTQUAwTi9MOHbxskGOqUBue14YfqII5PUWljTPYHFL4S6EOu7DwxGanR0CDnqOj0zrdpnwWgmtHjhwmqXNPxinjISqdWId6WXwzEtbHIjA4VC%2FigEa0DDgYghOvRDcU%2Fx2DUKYm0IZzjxXTd3bu43aRusF2O0NKi%2B5zZ3pu5NFvIPF7wGiTx%2BgggUE5RYTaAT4sCR6mlNH1xzJuTqFnspJ5py7c4NzWL2imBjuEJw6kwWzvSx&X-Amz-Signature=f120449c8c943d0b2439a0e1bb616f5b4a92aca76af74ca8f4d73595b0e3e756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
