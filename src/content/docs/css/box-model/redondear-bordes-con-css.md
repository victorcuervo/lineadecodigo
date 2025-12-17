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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2E2DJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIS9ufo1f%2FClya7GIoMr1lbsCH38UXk6i%2BHUJSfCEngAiArkXQ1uleGyCdtPW75L1e1TJnkoMBacg259iw2fC%2FfTSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5k3lxlClOulsyFloKtwDdkmZEWSlmTMMB0nKPUhtisrSJWpogdEA9Kq4APbjgr%2Fvfueq9Mzwr07nGZrWPnqZcmOMYzI82YNOfLbKYf%2Fewj08FLpHh9x1ngykBia%2BcIQCzqwHtVn%2FYz4i7neq5awBNFx7v1zoDdGERJrTpCBCpUtbafNq8%2FGZI8xH1S0QQNbfAWy%2FUEaABIv6RxWc%2Bm6jChohoAVEImUIUq83lwtPXJwdSUMoXk0PV5zfzaHkWOHMnwJENJ0Kj5hhnyuapvWb74RMWbLXpoYZgvDZM3m7UqUs3KnUcMyD%2FcZmeivZ5BdGhn4PHgEU1YROy8x4UHIuwvDInPH%2BUmu%2BhRYKljLXfj%2BOMSuCtmGPsnBTuBA43fwxujXkSwST1UWvdunlAnNPfRSBzzCBLCN%2BtB2nb57TzjRd9SN9pauiRJzJKWXb4UgFMbOl6l11scnFZwnLoQKQJ6x%2FPInypNiyrU8PwqslKrLhlNCdGz2V9xiizFSPMnVdDU9oJlzF8yLMJ4LVSsKDGTrFscVJqhdb1Wbfro40td3MmO25qW%2FmVqAWS2cbHStKwj2vuE2qC7b7nBhyKxzS0ewhoE9fBecU2mkIHhV0mnSxByg%2BR70SCqdl8XlmHu50ANuNAwpRHdzuDgww1OGKygY6pgFbbTFD46ak%2FyK%2B3w5BJF8Si14rUJ%2BHBZwBxNiQehej%2Blox4W4cRajrHT0nJ8RUiomyO54yPm1c%2B17%2FHin9M20R%2FIvQebMTeiiv6tePshK1jIiFRDH%2BgoYJk0nBi2jIJ31MZy67310fIVISudZOl9YJhPM%2BGohLPiERHl%2FDr0YIqyMGu5y66CiRZI%2BTRmi8dxjpYAz1b0bmoT5PRo2sVS6Kn8bnzWnM&X-Amz-Signature=6153748d002537005fae10715f5a17d1b2290e73b47f6190c250266eeca3e161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2E2DJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIS9ufo1f%2FClya7GIoMr1lbsCH38UXk6i%2BHUJSfCEngAiArkXQ1uleGyCdtPW75L1e1TJnkoMBacg259iw2fC%2FfTSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM5k3lxlClOulsyFloKtwDdkmZEWSlmTMMB0nKPUhtisrSJWpogdEA9Kq4APbjgr%2Fvfueq9Mzwr07nGZrWPnqZcmOMYzI82YNOfLbKYf%2Fewj08FLpHh9x1ngykBia%2BcIQCzqwHtVn%2FYz4i7neq5awBNFx7v1zoDdGERJrTpCBCpUtbafNq8%2FGZI8xH1S0QQNbfAWy%2FUEaABIv6RxWc%2Bm6jChohoAVEImUIUq83lwtPXJwdSUMoXk0PV5zfzaHkWOHMnwJENJ0Kj5hhnyuapvWb74RMWbLXpoYZgvDZM3m7UqUs3KnUcMyD%2FcZmeivZ5BdGhn4PHgEU1YROy8x4UHIuwvDInPH%2BUmu%2BhRYKljLXfj%2BOMSuCtmGPsnBTuBA43fwxujXkSwST1UWvdunlAnNPfRSBzzCBLCN%2BtB2nb57TzjRd9SN9pauiRJzJKWXb4UgFMbOl6l11scnFZwnLoQKQJ6x%2FPInypNiyrU8PwqslKrLhlNCdGz2V9xiizFSPMnVdDU9oJlzF8yLMJ4LVSsKDGTrFscVJqhdb1Wbfro40td3MmO25qW%2FmVqAWS2cbHStKwj2vuE2qC7b7nBhyKxzS0ewhoE9fBecU2mkIHhV0mnSxByg%2BR70SCqdl8XlmHu50ANuNAwpRHdzuDgww1OGKygY6pgFbbTFD46ak%2FyK%2B3w5BJF8Si14rUJ%2BHBZwBxNiQehej%2Blox4W4cRajrHT0nJ8RUiomyO54yPm1c%2B17%2FHin9M20R%2FIvQebMTeiiv6tePshK1jIiFRDH%2BgoYJk0nBi2jIJ31MZy67310fIVISudZOl9YJhPM%2BGohLPiERHl%2FDr0YIqyMGu5y66CiRZI%2BTRmi8dxjpYAz1b0bmoT5PRo2sVS6Kn8bnzWnM&X-Amz-Signature=0bec6290655c5117aca58fa13543d585062693d2f181ea5de6c657550b0d1498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
