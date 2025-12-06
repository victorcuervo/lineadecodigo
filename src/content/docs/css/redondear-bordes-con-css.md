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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNFYOIW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUJGuzjX2viWt8L6Qh%2FUxpg%2B0kvcQgjKRWhFaH3nvdQIhALvYz0aJQ%2FHbvREUfCyvheSfhnbzKJlHZUmroTjqdIqtKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJ6Ti%2BPpGE%2FedkHG0q3AOZmlkd4aM5yTaptRL04Rut3ko6UWbTKVm6Ss5UctRv9p6VNMGakD6uWFaSz88CC54aMi26h510M6seOkxu2oh7MxVVeimCVsiV6Y4LmYmRpiR%2B605IH9%2BU9BdM7i6ncUzpauszP5Sd9T%2FqbjEOZW4SEm8SQ1SLY20dVlMCdlxPIiMd0PQrc4H1eYqgL7vFYvRFRVTDgHEadtSLeO66E%2B4%2BYGVaGCDaoihnDva9OiRolAgw2P90eDQl1yHxsQPFXwqDEMDFyTiF5xs2STicYescYnKnQWaQecVr1yQTUcUmVqeR75od%2FWr9yfJLSnsnoK09tZ%2BQ6%2BYvyRH5YrgTsSIy5%2BaKtS6dNj5de%2BCkkyx9%2BjgtMd0PaqFbNJXWemad%2Bov%2F5K57Wy%2BrSdEHUkcVhbutNYy5%2B8t2mGiBJWMTxXYK2czgCknR36HRdkdXLZCioZ8MKk%2BWKHsisu623TZ4l1d7%2FcWg6z%2FjXzRcmXJ3t4ARcaqIbYdWguMEWcf%2FQl3%2FY%2B4jzb%2Bf6gCX2pp2g1PoMsOIxLn1YxRIHfClF1I%2FkI%2BoFNeWDBVgwgNfYmZKGGGxqyqZFpgepErTRKUxNklh3BMSQXBOS5x6j9e5aWE8io%2FxPyelA7io%2B5lwmnkrPTCK3s7JBjqkAVFDuqB92OuzAoYkppaXFYyMlW7YEqU8tFxNLk7HHQyZ9Y%2FC3yOgWoylBpqkxCkVKtYWf29LM55b61NrYTPuEwUU%2FCgFuwbFxcI%2FSSU9fyIJHvbCUODdVc7GSl1NLTEIpy6SrUwc1UC4itLMX1%2FyTv9KKCBDPXfM6e0DsMS%2FkKqQheamsXyD6PEIZ74GP3%2FIQiuQBxCTKXJudS4uvTxKe77RJB1h&X-Amz-Signature=6ff8e470837857b746f373a5bd6f0e0e0ffa79d36237303817f3c625f3d17e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNFYOIW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUJGuzjX2viWt8L6Qh%2FUxpg%2B0kvcQgjKRWhFaH3nvdQIhALvYz0aJQ%2FHbvREUfCyvheSfhnbzKJlHZUmroTjqdIqtKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJ6Ti%2BPpGE%2FedkHG0q3AOZmlkd4aM5yTaptRL04Rut3ko6UWbTKVm6Ss5UctRv9p6VNMGakD6uWFaSz88CC54aMi26h510M6seOkxu2oh7MxVVeimCVsiV6Y4LmYmRpiR%2B605IH9%2BU9BdM7i6ncUzpauszP5Sd9T%2FqbjEOZW4SEm8SQ1SLY20dVlMCdlxPIiMd0PQrc4H1eYqgL7vFYvRFRVTDgHEadtSLeO66E%2B4%2BYGVaGCDaoihnDva9OiRolAgw2P90eDQl1yHxsQPFXwqDEMDFyTiF5xs2STicYescYnKnQWaQecVr1yQTUcUmVqeR75od%2FWr9yfJLSnsnoK09tZ%2BQ6%2BYvyRH5YrgTsSIy5%2BaKtS6dNj5de%2BCkkyx9%2BjgtMd0PaqFbNJXWemad%2Bov%2F5K57Wy%2BrSdEHUkcVhbutNYy5%2B8t2mGiBJWMTxXYK2czgCknR36HRdkdXLZCioZ8MKk%2BWKHsisu623TZ4l1d7%2FcWg6z%2FjXzRcmXJ3t4ARcaqIbYdWguMEWcf%2FQl3%2FY%2B4jzb%2Bf6gCX2pp2g1PoMsOIxLn1YxRIHfClF1I%2FkI%2BoFNeWDBVgwgNfYmZKGGGxqyqZFpgepErTRKUxNklh3BMSQXBOS5x6j9e5aWE8io%2FxPyelA7io%2B5lwmnkrPTCK3s7JBjqkAVFDuqB92OuzAoYkppaXFYyMlW7YEqU8tFxNLk7HHQyZ9Y%2FC3yOgWoylBpqkxCkVKtYWf29LM55b61NrYTPuEwUU%2FCgFuwbFxcI%2FSSU9fyIJHvbCUODdVc7GSl1NLTEIpy6SrUwc1UC4itLMX1%2FyTv9KKCBDPXfM6e0DsMS%2FkKqQheamsXyD6PEIZ74GP3%2FIQiuQBxCTKXJudS4uvTxKe77RJB1h&X-Amz-Signature=be0cc8f19ccf623cef020955d3450632638caf205219dbd1133efe13f03f4c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
