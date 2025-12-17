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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLK6F25M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADSvLgp2lBCnqsR1fGGDc%2B0o%2Bhkmx4D5WAwcO6IayQXAiB16fXMmKxTCiXIN663%2BHYJ%2BWDZEONaT8nYcE82PSkS1iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOLIdcciPIxEAgDUrKtwDRBqbzKOtlf1zGvaVCIVzPv7ZAJo9FFRkK5dlPDN6mCabvDYElPusSTSqW7wJbruczt5ylOityAhzWHQg3BbNNURm371e0Alb0juZ%2Ft9soaMrIjG6%2BWwHPAzIZrrEXeGBk4ma7y1AOabdq3cA4Np1wnMAz3PFQuH8SHrk4prW6IS1VIfnjsYkT8taw3yssVlku%2BOd2lUjEw2%2FT5SefXNYZZ7l5zSt4b6jtnTmnSRRD2GUCwuyFAlQ8Dmdgi8pZ8%2BkYaOeEbOkZMAk0wElrN2xjkwUsTO5MQsO7LMrvzvjy1xCywcdVuRZId0Vnr9bwFPvlYOjeZxoxv4%2BQ6fpEMF2u%2BofJujwWuhojSRiV8eiUeGe5SXmpdoqHDjlNAu8OYGyb386RZvAvi%2BGbun6YcE9xNBau9Y%2Ba0fLU3viuoFTGy9EXnveFoXXx4zgVW0OhlBzuX9vqRRXwmjfbNh6Zaca%2BdSgv3ozoI0agY%2BWqTC9JlXmuOVzM5V5zmOQDytX1pZ80xm9va7lETPq%2B2q20VAGy98IYQvS4yR99WMZios95LfHSUXLID7OFOv9tGljrbcEXcKXSFsNpAzaITh1bJLcIv3u%2BLNQ%2Fax1xLkHTZhx5pOl2zPyLxS%2FWH8fw%2Bgwq5%2BLygY6pgG1wKix0VZL6YBhZ%2FnO9BChs7WaEuMQ9LHxgStRH5iPke54yNfn%2Fk0YEWHjbO5%2B3NaJAFGaPZgUnQV3XVyaewlgulHTbtinFOz8%2FEqDxMdoynJiM%2F6CxKv4klDCq70O0GaH%2Fpqkehc9Ick5HVQJEaKNkHIQ9f6Nteohqya1GntHhBFm91sd%2BRk49uaw2NY5v0vbzQFlBfdltTjsuiDeL5N9foJCEOGc&X-Amz-Signature=691abcfd4abddd04260abe70c04f9dc2699b88c8f6d393871ca40a60d915c619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLK6F25M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADSvLgp2lBCnqsR1fGGDc%2B0o%2Bhkmx4D5WAwcO6IayQXAiB16fXMmKxTCiXIN663%2BHYJ%2BWDZEONaT8nYcE82PSkS1iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOLIdcciPIxEAgDUrKtwDRBqbzKOtlf1zGvaVCIVzPv7ZAJo9FFRkK5dlPDN6mCabvDYElPusSTSqW7wJbruczt5ylOityAhzWHQg3BbNNURm371e0Alb0juZ%2Ft9soaMrIjG6%2BWwHPAzIZrrEXeGBk4ma7y1AOabdq3cA4Np1wnMAz3PFQuH8SHrk4prW6IS1VIfnjsYkT8taw3yssVlku%2BOd2lUjEw2%2FT5SefXNYZZ7l5zSt4b6jtnTmnSRRD2GUCwuyFAlQ8Dmdgi8pZ8%2BkYaOeEbOkZMAk0wElrN2xjkwUsTO5MQsO7LMrvzvjy1xCywcdVuRZId0Vnr9bwFPvlYOjeZxoxv4%2BQ6fpEMF2u%2BofJujwWuhojSRiV8eiUeGe5SXmpdoqHDjlNAu8OYGyb386RZvAvi%2BGbun6YcE9xNBau9Y%2Ba0fLU3viuoFTGy9EXnveFoXXx4zgVW0OhlBzuX9vqRRXwmjfbNh6Zaca%2BdSgv3ozoI0agY%2BWqTC9JlXmuOVzM5V5zmOQDytX1pZ80xm9va7lETPq%2B2q20VAGy98IYQvS4yR99WMZios95LfHSUXLID7OFOv9tGljrbcEXcKXSFsNpAzaITh1bJLcIv3u%2BLNQ%2Fax1xLkHTZhx5pOl2zPyLxS%2FWH8fw%2Bgwq5%2BLygY6pgG1wKix0VZL6YBhZ%2FnO9BChs7WaEuMQ9LHxgStRH5iPke54yNfn%2Fk0YEWHjbO5%2B3NaJAFGaPZgUnQV3XVyaewlgulHTbtinFOz8%2FEqDxMdoynJiM%2F6CxKv4klDCq70O0GaH%2Fpqkehc9Ick5HVQJEaKNkHIQ9f6Nteohqya1GntHhBFm91sd%2BRk49uaw2NY5v0vbzQFlBfdltTjsuiDeL5N9foJCEOGc&X-Amz-Signature=343489814c6eba13d828d399f0d9ce07d55bf0f480a829d815a8919d7c324822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
