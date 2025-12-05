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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRX3IFIP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcTICBstYU1wsHsMoz3jHvZQ1G%2BDTLrSrR%2BrsmECCaVAiEAngxpCtvapdnrE9000GVcEJ8xfiHeoIZNRrM2GU413rYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO9zG7dAZqtuv5uALSrcA0E1LF81EPaA2IBeBDHmCtny9LCtS8RPEP5nvFuoKnP18JeBj5j%2FeMKk6P2%2FADV5rT1%2F24dN9yqggnJUfAfZ7gOQSDJNMZuxkIwD%2BtlApl6Vewd3WxIuiipd3stCxSZcI1qn0Qek57DkQHCCfCJTb5U0MI291%2BoCCrmc0vgwy6j6T6Yj%2FgWBQZGlisC%2Fc79ktpQkYel2giI5cQPceyXhFPs8agSar0u%2BnBoMbXgRs5t%2FxeyllcexcJyBFZfNipubj8gEQOSyhtBC2AWajlFiwIOKqRDdD5JSXklIQ9fp5QU19DvEfA4fmtpcluhGIJAFbd6JnKCdOELXYnVxgOvn7Cz4IX8MRVKBnNm%2BQqYDiUsxdcK5NrtRqLxaCrUv3MuG79RT0RuhAcBIdk94TvCgAtCMW%2F9pwVyTys6OqJ6RbBPclAS65mOVXB1DrB%2FY1VYl7gN1sRkJO%2FO8fpXDi5qyq6WrdpAfNk24mM2rnuKqvpx55sGdw2Pnc5cPzSrI3AxVXShuy0ssdfMRzHmyiaNPvLEBiPWcWgNwd%2BWufFHbknaJjeu4N3IRHcW%2Bo2hWylAXpHLADRxVVe%2F%2B5iK8jBT85Q%2B%2BycTeFDjK3vx8iVLVgRowbbKmrJzzueLx1p4SMMqyyckGOqUBYY98s0Qj4DolGEQpCavjL0qjElUVxsJ%2FHi3x%2BQpw3FReZC3%2BCLR2K5v4dEq2ilYnkNRJ6aSNH1CAlTupzqTCczE5sawGu9%2F7ZGhDm0cdQCO6Yrl8jMAFthl1jFco7HocutgVZwOhElqgB5NnlwqFSldRo6SimLVsHfUuA8kwyFiaKjEoxJQhQBqLL5P0RI34gQw6nljkgW%2BK0%2FExn%2FLj7ch8AbWO&X-Amz-Signature=be15cc7d43dca5c0bc9b78f77e83a5d4e803984e6e700608ea073ca8eecd0242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRX3IFIP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcTICBstYU1wsHsMoz3jHvZQ1G%2BDTLrSrR%2BrsmECCaVAiEAngxpCtvapdnrE9000GVcEJ8xfiHeoIZNRrM2GU413rYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO9zG7dAZqtuv5uALSrcA0E1LF81EPaA2IBeBDHmCtny9LCtS8RPEP5nvFuoKnP18JeBj5j%2FeMKk6P2%2FADV5rT1%2F24dN9yqggnJUfAfZ7gOQSDJNMZuxkIwD%2BtlApl6Vewd3WxIuiipd3stCxSZcI1qn0Qek57DkQHCCfCJTb5U0MI291%2BoCCrmc0vgwy6j6T6Yj%2FgWBQZGlisC%2Fc79ktpQkYel2giI5cQPceyXhFPs8agSar0u%2BnBoMbXgRs5t%2FxeyllcexcJyBFZfNipubj8gEQOSyhtBC2AWajlFiwIOKqRDdD5JSXklIQ9fp5QU19DvEfA4fmtpcluhGIJAFbd6JnKCdOELXYnVxgOvn7Cz4IX8MRVKBnNm%2BQqYDiUsxdcK5NrtRqLxaCrUv3MuG79RT0RuhAcBIdk94TvCgAtCMW%2F9pwVyTys6OqJ6RbBPclAS65mOVXB1DrB%2FY1VYl7gN1sRkJO%2FO8fpXDi5qyq6WrdpAfNk24mM2rnuKqvpx55sGdw2Pnc5cPzSrI3AxVXShuy0ssdfMRzHmyiaNPvLEBiPWcWgNwd%2BWufFHbknaJjeu4N3IRHcW%2Bo2hWylAXpHLADRxVVe%2F%2B5iK8jBT85Q%2B%2BycTeFDjK3vx8iVLVgRowbbKmrJzzueLx1p4SMMqyyckGOqUBYY98s0Qj4DolGEQpCavjL0qjElUVxsJ%2FHi3x%2BQpw3FReZC3%2BCLR2K5v4dEq2ilYnkNRJ6aSNH1CAlTupzqTCczE5sawGu9%2F7ZGhDm0cdQCO6Yrl8jMAFthl1jFco7HocutgVZwOhElqgB5NnlwqFSldRo6SimLVsHfUuA8kwyFiaKjEoxJQhQBqLL5P0RI34gQw6nljkgW%2BK0%2FExn%2FLj7ch8AbWO&X-Amz-Signature=77bc4cfa7e2678efe38a9b83ca38ca0b74b38a0b15006c77039896d39b8feee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
