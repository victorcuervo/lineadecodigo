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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFD7CAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ0dnnCWcgFbAwvAlNAWxEcv29LZtUSvAf720Hc0vjXAiBAkJ%2BHGZDVkkn2Veicw1ZNjwbepY8RIw586nvMKDuPjir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvDPOVEIQLx%2Fn8m3rKtwDOYWIBUcLnX0U2E7xwSgqiXKJaWAK%2F%2Bd309%2FHtL1zG5IyfsqMgSDJCmqikOKsLG3Ip2TsfnSm6AtT76Z5z0DaCGxcuryOtCT1AZDGPr0HKBqCUCQhaqKgo13k5UzJR7nn9FaFje8n0PyNqg9tfEEVaEp1RnfXNpvDXaDQG3ZN9DPl1Zm9wwJco5Mk1%2FlDnLji3Asz%2FQlF3jV99uRkpO3RDb3eCO8HRAYPRF2jO9nTH0e%2FaVdDx6mYDyihLNFGA8jl6u6%2FzKU%2BKEw30j0PdCK%2B2Po%2Fs1wVfTM2SaW7TqJJ79Jc7ECCimRTDw52sx8jur5rq7hOy%2BSfhclnwcBNgAUL%2Bnyywq%2Fq1EdqPOWTIc1KtCFj7gn%2BmhHBsr3zgcdZkOZTDTy94BJzrAym3mSSdZRvQk%2BUPJN%2B3q1CA43ikH%2B5ranASBAFx0uUam6VLxET5ylAcL45C1gjMdEI5vKv2qU8A3StCi2jB4HgHd7Z4mCkiLSPY7FvH5c3c%2FqG46e1aJPB5nwUyAtKh9uC%2F0MiqeG5S5fDEv5UgdtKQsS%2B0yc5egu0LHlPPYB3bvA3iJDiz8jM3aA7NCxy27zYkT5U0iHZl7g0ynjK12yLEDL2I0iSWejF2u%2BzBmuxwG%2BdECkw5I6KygY6pgEkXfUhtPzmxKWPTxhlyyiauNZzLC3TqUkZ4W5Ktqsk%2BUdN1MyoJzFcfbSpnG2YOPI5jKBV8s519ikxCFhUM1yuIPmIFXD2WlPj3zaBzpl4AJKp%2FXuB3RrwbTBMTXHskSWmltc8ZPG4KRK9yTLfuFsp3HpINMQyEhMiFFpZjlNI3AxqIWgV4fDge07XaPjXgEthuqIJUQ4EyrOZiFFtwTRbB2nWcRc3&X-Amz-Signature=88e307f247c1fc303b0e53ff1ec846f8a4a55e34ef1d72409a1595d9f2c4bfd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFD7CAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ0dnnCWcgFbAwvAlNAWxEcv29LZtUSvAf720Hc0vjXAiBAkJ%2BHGZDVkkn2Veicw1ZNjwbepY8RIw586nvMKDuPjir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvDPOVEIQLx%2Fn8m3rKtwDOYWIBUcLnX0U2E7xwSgqiXKJaWAK%2F%2Bd309%2FHtL1zG5IyfsqMgSDJCmqikOKsLG3Ip2TsfnSm6AtT76Z5z0DaCGxcuryOtCT1AZDGPr0HKBqCUCQhaqKgo13k5UzJR7nn9FaFje8n0PyNqg9tfEEVaEp1RnfXNpvDXaDQG3ZN9DPl1Zm9wwJco5Mk1%2FlDnLji3Asz%2FQlF3jV99uRkpO3RDb3eCO8HRAYPRF2jO9nTH0e%2FaVdDx6mYDyihLNFGA8jl6u6%2FzKU%2BKEw30j0PdCK%2B2Po%2Fs1wVfTM2SaW7TqJJ79Jc7ECCimRTDw52sx8jur5rq7hOy%2BSfhclnwcBNgAUL%2Bnyywq%2Fq1EdqPOWTIc1KtCFj7gn%2BmhHBsr3zgcdZkOZTDTy94BJzrAym3mSSdZRvQk%2BUPJN%2B3q1CA43ikH%2B5ranASBAFx0uUam6VLxET5ylAcL45C1gjMdEI5vKv2qU8A3StCi2jB4HgHd7Z4mCkiLSPY7FvH5c3c%2FqG46e1aJPB5nwUyAtKh9uC%2F0MiqeG5S5fDEv5UgdtKQsS%2B0yc5egu0LHlPPYB3bvA3iJDiz8jM3aA7NCxy27zYkT5U0iHZl7g0ynjK12yLEDL2I0iSWejF2u%2BzBmuxwG%2BdECkw5I6KygY6pgEkXfUhtPzmxKWPTxhlyyiauNZzLC3TqUkZ4W5Ktqsk%2BUdN1MyoJzFcfbSpnG2YOPI5jKBV8s519ikxCFhUM1yuIPmIFXD2WlPj3zaBzpl4AJKp%2FXuB3RrwbTBMTXHskSWmltc8ZPG4KRK9yTLfuFsp3HpINMQyEhMiFFpZjlNI3AxqIWgV4fDge07XaPjXgEthuqIJUQ4EyrOZiFFtwTRbB2nWcRc3&X-Amz-Signature=f775028b263542ddb953c37baa4a3b0e8a1e7e5e85ea444f2ef0c791572e2a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
