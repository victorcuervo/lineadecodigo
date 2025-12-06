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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUGL745%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtt5415S2kDgUjfNhrMKqNnUix7FlhKHZGNDCy4YlmhgIgMW4f9I8idK8ZQ8EuHl6FO0P0xiGZO%2BXWtS7FmgcwQFAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ7%2BalhOvX3%2FB5HjtSrcAyYm6McqMYvmJ3dHp%2F3fNUT4erHUN0vuOxpGtEIGy2CV2cZkrWk2v4l2LxDHN53LQJOnaU9XD%2Bg3BHx7gBMDNh6luEspSvbmiVfofo5U3BC%2BwbY8R0LEy6t7NC%2FGAX5675skmrGgNwHUe%2F66hQOOYE%2Fdc7XPGBAFHGthUiQS%2BikTTDhtRpv1z%2BoubtyuFKif%2BwIrw7PDAbrKGr92E1W%2FsCBCSYiqxTxingLAaHJbfq55gDUWtho3zP9vHYclXnskaGAAUvAZNN06VilqaeNePHRLzgJZrkIy9R%2F3I%2FR5lOVhIDzyEVD752vo%2BaepWXmA%2BzO4zZhFc0bTxcVYDOOTOI8A13tBbkV4%2BWohJ27gnV0N%2BipRfHRv91bfRGIHvHiFlLMfIs%2FK93QyAL3ExfC8gWCPWYe4QVunCVwBIxWbw6DRDjClZQZNn2EA3NeAFEQrd1TCttTpWr6GmIh43P5gKCNzOUqX6EX86t6KnDHnqqY31AP17YDG%2BW0WgbNGmSgUhE6XruB2%2B%2BRdcFaAlPBgiadn6EnqC4Vqau19CcOLveID2qyFdjV15CuwpJxRO3oefNScJzwRTo34ci%2FLKp7OdvYdT1IuoxFsZYxbgMgabHH6GNqeeBuwUzFLBRQIMIen0MkGOqUB%2B0%2BW%2FHKfdF26TOGr3AjkUCfHKtZ5NUWmTkVWkFoD6p2RKXn3RpBGHRqmfaXWXyRO50ByBCVq3Em1h4VNx5W6qELDk3XnKN3Xz3fY6394%2B2Em8grA2c3daC8o4ej5Gcq4iAoLZFa6o4qmhR9IiXLkjqjFOPOqy7FeiOecKD1a3WKuYqCCh6vN6Wlu%2BmMOaavpqA86I16PZCJynll%2FRj5oPH%2FGk%2B9t&X-Amz-Signature=a5213e5553e95033d17be95885d59189e88526fdeb7073c5d5cb46632ef498c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUGL745%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtt5415S2kDgUjfNhrMKqNnUix7FlhKHZGNDCy4YlmhgIgMW4f9I8idK8ZQ8EuHl6FO0P0xiGZO%2BXWtS7FmgcwQFAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ7%2BalhOvX3%2FB5HjtSrcAyYm6McqMYvmJ3dHp%2F3fNUT4erHUN0vuOxpGtEIGy2CV2cZkrWk2v4l2LxDHN53LQJOnaU9XD%2Bg3BHx7gBMDNh6luEspSvbmiVfofo5U3BC%2BwbY8R0LEy6t7NC%2FGAX5675skmrGgNwHUe%2F66hQOOYE%2Fdc7XPGBAFHGthUiQS%2BikTTDhtRpv1z%2BoubtyuFKif%2BwIrw7PDAbrKGr92E1W%2FsCBCSYiqxTxingLAaHJbfq55gDUWtho3zP9vHYclXnskaGAAUvAZNN06VilqaeNePHRLzgJZrkIy9R%2F3I%2FR5lOVhIDzyEVD752vo%2BaepWXmA%2BzO4zZhFc0bTxcVYDOOTOI8A13tBbkV4%2BWohJ27gnV0N%2BipRfHRv91bfRGIHvHiFlLMfIs%2FK93QyAL3ExfC8gWCPWYe4QVunCVwBIxWbw6DRDjClZQZNn2EA3NeAFEQrd1TCttTpWr6GmIh43P5gKCNzOUqX6EX86t6KnDHnqqY31AP17YDG%2BW0WgbNGmSgUhE6XruB2%2B%2BRdcFaAlPBgiadn6EnqC4Vqau19CcOLveID2qyFdjV15CuwpJxRO3oefNScJzwRTo34ci%2FLKp7OdvYdT1IuoxFsZYxbgMgabHH6GNqeeBuwUzFLBRQIMIen0MkGOqUB%2B0%2BW%2FHKfdF26TOGr3AjkUCfHKtZ5NUWmTkVWkFoD6p2RKXn3RpBGHRqmfaXWXyRO50ByBCVq3Em1h4VNx5W6qELDk3XnKN3Xz3fY6394%2B2Em8grA2c3daC8o4ej5Gcq4iAoLZFa6o4qmhR9IiXLkjqjFOPOqy7FeiOecKD1a3WKuYqCCh6vN6Wlu%2BmMOaavpqA86I16PZCJynll%2FRj5oPH%2FGk%2B9t&X-Amz-Signature=af8b618dc80ebae7c3ec919ba2aca6c75ab29334040fc56a912f88deb296eb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
