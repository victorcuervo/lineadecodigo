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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MG5HS6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2ButY80Qe1kuf%2Fa5THAVqV6pH8PU7k172PGRORyZUngIhAPL65Pqi0y6wIbXFseOd7o06ykAbSGt%2FCDPmTKQFty7DKv8DCHUQABoMNjM3NDIzMTgzODA1IgyKOezqkZBLgVh0Ofsq3AOrSx2ofp8%2FFfu%2Fx2zYRfi%2Fd0%2Bsq5E1B6IU16Mlb16Ny9G3KfC1doOI5hQKBVZ5COvwOh1Dmq4Dtj2jsJIthA78%2FYN2y6pEJmDARkINndYundHF4sRgwlQeP5mDcwsa9ZAAy8rps3DV46F6wdfk1uAdWJk8tLl4zzYoGPa1Etk%2BiRNw0CPFBpfrrUybRmRHW5FKS1MJH3vSsKCfoKv8o1lBlRCiFVOLvQmFb8ABNQX4bfoWzcb6cm2kzGJo%2BhoRoYlcn2ypl%2FehQFXGwcu8rLQvinXazT3YLYNwmAzPGkXWwyln0qziDjWvwqmKVQCkinGv0KiAJ0GgqxBm4p%2Fb6X8EcdSRSmP7PLchGW3kKhWnEnyVmmc1lB8i4VMRyNaIU3fdko%2Be9Nvycnc9nISCU3GohFySNgiTyFbzj7E3bCnEnnWK7lA1i9V%2FHVQX1ub%2Bi2XMvSy7MP943T%2FWK389%2FQO0z9jo0yfGUD2sq%2BjxBRFUgX3MLDrlhyqwHv%2Bzxdajfm8aGwc8nZOAjlh97k82Ze5fMJ0Su4%2Fth9%2BAYooCtEtW4yHVBklSNXnC7zcplk5MMpoXPNJZG7LRUlMdghW4n6mwLCiJJiGyDFZeEjj5fKEqDWP3BWWMyy5tVx4M3jCxptDJBjqkATLz432mf9cDzgvO3elooywrE%2BBoyTrtrqHLAQjteQI5AsUh%2B0HeOHohYefZCSJBKl48rXD7yOcvJtyr5l1xb3xRAleFa%2Fe3dF4eQaDDxL9w5G9UBRrXZxe6QdRg0EuD%2FhB2MgZiMuOphx7z6KuCuzRAR2kG8BOs8c%2F2wYRZC%2FLfR5aBotB2IdK4EBaH%2FBnz%2BflAvM8CVf%2F2KKZ1M4awcfP4PNfY&X-Amz-Signature=fa050000e951a56890c0c63067e0925d4b4cdef1e4de6dc36f6dd98246b323e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MG5HS6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2ButY80Qe1kuf%2Fa5THAVqV6pH8PU7k172PGRORyZUngIhAPL65Pqi0y6wIbXFseOd7o06ykAbSGt%2FCDPmTKQFty7DKv8DCHUQABoMNjM3NDIzMTgzODA1IgyKOezqkZBLgVh0Ofsq3AOrSx2ofp8%2FFfu%2Fx2zYRfi%2Fd0%2Bsq5E1B6IU16Mlb16Ny9G3KfC1doOI5hQKBVZ5COvwOh1Dmq4Dtj2jsJIthA78%2FYN2y6pEJmDARkINndYundHF4sRgwlQeP5mDcwsa9ZAAy8rps3DV46F6wdfk1uAdWJk8tLl4zzYoGPa1Etk%2BiRNw0CPFBpfrrUybRmRHW5FKS1MJH3vSsKCfoKv8o1lBlRCiFVOLvQmFb8ABNQX4bfoWzcb6cm2kzGJo%2BhoRoYlcn2ypl%2FehQFXGwcu8rLQvinXazT3YLYNwmAzPGkXWwyln0qziDjWvwqmKVQCkinGv0KiAJ0GgqxBm4p%2Fb6X8EcdSRSmP7PLchGW3kKhWnEnyVmmc1lB8i4VMRyNaIU3fdko%2Be9Nvycnc9nISCU3GohFySNgiTyFbzj7E3bCnEnnWK7lA1i9V%2FHVQX1ub%2Bi2XMvSy7MP943T%2FWK389%2FQO0z9jo0yfGUD2sq%2BjxBRFUgX3MLDrlhyqwHv%2Bzxdajfm8aGwc8nZOAjlh97k82Ze5fMJ0Su4%2Fth9%2BAYooCtEtW4yHVBklSNXnC7zcplk5MMpoXPNJZG7LRUlMdghW4n6mwLCiJJiGyDFZeEjj5fKEqDWP3BWWMyy5tVx4M3jCxptDJBjqkATLz432mf9cDzgvO3elooywrE%2BBoyTrtrqHLAQjteQI5AsUh%2B0HeOHohYefZCSJBKl48rXD7yOcvJtyr5l1xb3xRAleFa%2Fe3dF4eQaDDxL9w5G9UBRrXZxe6QdRg0EuD%2FhB2MgZiMuOphx7z6KuCuzRAR2kG8BOs8c%2F2wYRZC%2FLfR5aBotB2IdK4EBaH%2FBnz%2BflAvM8CVf%2F2KKZ1M4awcfP4PNfY&X-Amz-Signature=3a5b196b4a03b09042cf2d15868b33e9fb505fd52843cbab529fd5b878a13541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
