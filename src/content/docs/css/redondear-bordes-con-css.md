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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5WWEXHA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHiBgOygv%2BU8puvb5iFYVXIflAE%2B0n5usUV4iRrzkRXtAiEAgDO7C3ZnL8yYIsQmLoUeibY%2FCy6lmQgzjosIr%2FhoATAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLCulf1pat%2Bk7SbrYCrcAxbx74RYP8qgPwnFTCfqnZq%2FUWVCtumcd7Z2UaBQ%2BjNhgYlgPyRXt%2BPAw4jUOP7tEBYqnod91pY%2B5R5gNZ2cwpr3OdMMqdI2L1EabBGKmS%2FeHGDsErDM117HJf3QyUDYZH7ZXnWGp1fL4NnLosd%2Bob%2F9POfS0mtmZnskDGZmUHFAeXVO2l%2FTB0NuUDJ6%2FbHikKEcuImugdIb%2FtGcna6YLcTOLmIWHlpVwAe6yLnSDBFV3WNyEvgp6HLwIv4qqWqX4ppRyVJxokEfWfn6ypH%2BTODdIlMaGZACA2kXhEBZyztJ8bcQHWEECfNPVuN5SqCjGXU3JJL%2BhzAN%2FW3n6A6kxyKbkfYRI9Es57JPc8m81imCwuY9sSmkvwGUra6WS1Eosy9v%2B2%2Bn0Z9Q%2FMvwL1A9HLILeXc3oGulgPDwMUdOrcqvzuHGJm%2FgmcsLnIWcdfSqpVBimuiU%2Bu6cPraYNpest2QdE7ctvTyxFZSaGBynUtGNPUYoMF8k3ix96m%2FVv%2F1VyZ2vtbbKugskagtxCqr3K%2B6Afk%2B%2FTUyxckQP4wEKa0ERbnZT6DMxr%2FC%2Bu8jPSgit0692zPKciIhwDmFUs%2F%2F%2BcU4rt7ol5FNpCP7d9nXc3gnMI6%2BxLMYtudxkTZ7ZMKvJxMkGOqUBwzTvgLmB4ajhj09QnGC0VcvwEu3ACrt0s4f4RiAd%2BuS%2FPNzMdIphQxYfJertwepkzHJ3SHVkC8bENf8%2FrVwvX5LOGV6IllEFjm3WUsCJXXmNHEDoSAkfDDQcAt3XYi%2F3AL%2Fc9p%2BxX4e%2F4eCgpHVhuQPKVy52jpDQtHF%2FYOSv%2FrHVemIR6eU9qiyt4oFXGC2sS%2FHWR8JeloPE8J9nGm4zdOLg52UZ&X-Amz-Signature=bcede5fffa973ba2bc1227ef24e3957c83b8254a99fd9029062cc19278e92321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5WWEXHA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHiBgOygv%2BU8puvb5iFYVXIflAE%2B0n5usUV4iRrzkRXtAiEAgDO7C3ZnL8yYIsQmLoUeibY%2FCy6lmQgzjosIr%2FhoATAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLCulf1pat%2Bk7SbrYCrcAxbx74RYP8qgPwnFTCfqnZq%2FUWVCtumcd7Z2UaBQ%2BjNhgYlgPyRXt%2BPAw4jUOP7tEBYqnod91pY%2B5R5gNZ2cwpr3OdMMqdI2L1EabBGKmS%2FeHGDsErDM117HJf3QyUDYZH7ZXnWGp1fL4NnLosd%2Bob%2F9POfS0mtmZnskDGZmUHFAeXVO2l%2FTB0NuUDJ6%2FbHikKEcuImugdIb%2FtGcna6YLcTOLmIWHlpVwAe6yLnSDBFV3WNyEvgp6HLwIv4qqWqX4ppRyVJxokEfWfn6ypH%2BTODdIlMaGZACA2kXhEBZyztJ8bcQHWEECfNPVuN5SqCjGXU3JJL%2BhzAN%2FW3n6A6kxyKbkfYRI9Es57JPc8m81imCwuY9sSmkvwGUra6WS1Eosy9v%2B2%2Bn0Z9Q%2FMvwL1A9HLILeXc3oGulgPDwMUdOrcqvzuHGJm%2FgmcsLnIWcdfSqpVBimuiU%2Bu6cPraYNpest2QdE7ctvTyxFZSaGBynUtGNPUYoMF8k3ix96m%2FVv%2F1VyZ2vtbbKugskagtxCqr3K%2B6Afk%2B%2FTUyxckQP4wEKa0ERbnZT6DMxr%2FC%2Bu8jPSgit0692zPKciIhwDmFUs%2F%2F%2BcU4rt7ol5FNpCP7d9nXc3gnMI6%2BxLMYtudxkTZ7ZMKvJxMkGOqUBwzTvgLmB4ajhj09QnGC0VcvwEu3ACrt0s4f4RiAd%2BuS%2FPNzMdIphQxYfJertwepkzHJ3SHVkC8bENf8%2FrVwvX5LOGV6IllEFjm3WUsCJXXmNHEDoSAkfDDQcAt3XYi%2F3AL%2Fc9p%2BxX4e%2F4eCgpHVhuQPKVy52jpDQtHF%2FYOSv%2FrHVemIR6eU9qiyt4oFXGC2sS%2FHWR8JeloPE8J9nGm4zdOLg52UZ&X-Amz-Signature=16caed1599be6b5c4752a780f8d5938b27a2b23c35964f0da8ef4c39dda054c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
