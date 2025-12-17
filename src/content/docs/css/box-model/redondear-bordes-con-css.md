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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFAXPPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAMWnHN1XOWSNfCEdK1kHDgMhKf7%2F9AcdBQkSOslsbSwIgdU44dZlXERMOHibQba1eBRYkzB%2BGDptPXGqHej%2BO7vgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDRJORfV%2F9I3MpN%2B8ircA1ES7CooLhA%2BcDH4LVDr7S%2FPXW%2BBuMPVF2f14EMvyUSN3A3iUtgRoUFs0K2guMSKJM4jncyu4TqUTzXXYFU%2F7zdkvAdrvdepY3Qh7XmMuRvzLgBQo7VI5TFqOBXXyjGIkaOssSruJgIlrIIPy4TphHBnN8zjZhc4xTXvaNuHo84%2BB3EgGkMPm5I7jFW7Y4Asi6SgMSljRYFSCXcmjzYm6Y%2B3n2XxvsT5Nypc7ARmQH6SuaaDqPOcBDwlovRJ%2B4tnqVE9DacdVivW7I27jEn0HpmYNyupWgcz3c5KLKItOVg5G6%2BUfkSGOEAJrL%2Bvx5A%2B7NV2s8%2BLAmvuBwOO3vO%2Bzzy4zYyhhvX6CvIA%2Fdz8%2FJqrY%2Bgai3PYjwXhqXg4HSK9usPSovSmMgCD4LovU2NxyoKHXkv2QuWgRfqoyjY1QKFpO3JzIULyfCHBVoOn1LocdaWldRATRkHclCL17Nq7fH5G4e2VPIuaqccBQ%2BuZBqruvuTc9pV3Y4zfwwJG94irt6n%2BWwOyVasSDPm8YDkA4dFjPLNZojErNKLuqDM03H2npdANCV4W1zyCsAu3PehB9ysgJReSxnVcrl5ZDkea7r4zX4DNT%2BE2%2FDO8x8TsF6e8KyHLBC3GSho%2BfuWfMJLxicoGOqUBP7BxlHq8ukqAyc41%2FOd0lx5fIdTS0DJNSlA7y9CEJa%2BsOuRgfVX21BfoKPfabgtOO5%2BacWYQb7JuZGy0lbt%2BbB1Cjqcpais%2FDWpWMSM1MzoCuDwV59zUCV541nS0WhKPW1PaNf7sm3RADSLJW6cpeFHghR1xMsPxc4dmDjP0tNBc1FaV94nbpOOm4nOLor1cveIrU0wJSJlcit8uLDMNFwf9jtP0&X-Amz-Signature=7830be9c73917f97072c8aba115b37fa4f5134ce0c24db3fdb38450047ccd8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFAXPPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAMWnHN1XOWSNfCEdK1kHDgMhKf7%2F9AcdBQkSOslsbSwIgdU44dZlXERMOHibQba1eBRYkzB%2BGDptPXGqHej%2BO7vgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDRJORfV%2F9I3MpN%2B8ircA1ES7CooLhA%2BcDH4LVDr7S%2FPXW%2BBuMPVF2f14EMvyUSN3A3iUtgRoUFs0K2guMSKJM4jncyu4TqUTzXXYFU%2F7zdkvAdrvdepY3Qh7XmMuRvzLgBQo7VI5TFqOBXXyjGIkaOssSruJgIlrIIPy4TphHBnN8zjZhc4xTXvaNuHo84%2BB3EgGkMPm5I7jFW7Y4Asi6SgMSljRYFSCXcmjzYm6Y%2B3n2XxvsT5Nypc7ARmQH6SuaaDqPOcBDwlovRJ%2B4tnqVE9DacdVivW7I27jEn0HpmYNyupWgcz3c5KLKItOVg5G6%2BUfkSGOEAJrL%2Bvx5A%2B7NV2s8%2BLAmvuBwOO3vO%2Bzzy4zYyhhvX6CvIA%2Fdz8%2FJqrY%2Bgai3PYjwXhqXg4HSK9usPSovSmMgCD4LovU2NxyoKHXkv2QuWgRfqoyjY1QKFpO3JzIULyfCHBVoOn1LocdaWldRATRkHclCL17Nq7fH5G4e2VPIuaqccBQ%2BuZBqruvuTc9pV3Y4zfwwJG94irt6n%2BWwOyVasSDPm8YDkA4dFjPLNZojErNKLuqDM03H2npdANCV4W1zyCsAu3PehB9ysgJReSxnVcrl5ZDkea7r4zX4DNT%2BE2%2FDO8x8TsF6e8KyHLBC3GSho%2BfuWfMJLxicoGOqUBP7BxlHq8ukqAyc41%2FOd0lx5fIdTS0DJNSlA7y9CEJa%2BsOuRgfVX21BfoKPfabgtOO5%2BacWYQb7JuZGy0lbt%2BbB1Cjqcpais%2FDWpWMSM1MzoCuDwV59zUCV541nS0WhKPW1PaNf7sm3RADSLJW6cpeFHghR1xMsPxc4dmDjP0tNBc1FaV94nbpOOm4nOLor1cveIrU0wJSJlcit8uLDMNFwf9jtP0&X-Amz-Signature=33cfa16f73db63ada222aef8699271f80e3dc33398d8bbab0a6b1f0210a9ae90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
