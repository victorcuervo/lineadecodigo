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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKGIRHS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGabL1bxLoOU8UYToZv1IBhAUwF35QP%2BgJpSjlGyA5UoAiEAkaXZK6iqYh62tCMnSYI6QjeKAd5Fsc7Yp8tbRjmjtdMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxMVNr0N%2FEDXFSmVSrcA4pcJ35uiF1lj2b0HnfyROFW%2FdmQ%2BZg%2BJEm4cDr9a7dh8rGuzgeS85SH1%2F4HfRIvH428l3fHGk79%2BGmwUIQJf9KsIsKFarU7hnTSB9KrR5Yv85x%2B%2BpoORpCKyvESmvhpJqaApYI2SmjHPxCC%2BjQzs%2FFyjUuZI%2FCMbquFSDbn8%2BfI80COT2emkXflc8%2B0AWQOAcrmOk5%2BxxTJT2IKgq%2Fw%2FyZGeturLAfgPBfFajGhINzDl510VQnzmMKtWDC7m28agfOvRL4pwOcJWk31jbTKMDUs%2FYNMxNB9hdmcNjNozVv9sFZVZW6YrifVLF%2FuyJLoLL%2FuaLolqJ1cWeop5cYIMbKFEpte8fmPNBUuWtE6I5WqCFx73EZ0f%2BzBax6EIHn8EybDQF9SyTPXaLoE5YDZdqH%2BZk5q3ahuWv9nWTZ7Ak%2BMAZCE4YRcnYVHvv85Iv02Wr%2FWnnN%2BYZwScoD1cSTGYVrfCBLPD1YRuWcJrS2OsNVZeXMUE2iPyp3mViLRf7lwyG9P5k4CY8EnsbgABpBE0Zf6fuVX561T9yyMR47mPfECVRYPnRpMkZYrWpp0OXfYowU5MKjpk4cFIlFGNFbIabijgmul7BcK3QsLRIP%2FhKpKesfCKD1gzmwA%2Bnn9MPaj1MkGOqUB0WZoV%2BraWLG1QLlMFU4wphmWJhVKherPuZH%2B%2Br6sHqUYJQgVZo7mBavNgEC3vFtwPzd%2BbiZBLDSTvDzC%2F%2FkVP4DQv3FJn%2FrR0m44LEIJ2oVT4ClMnALdwAGRwYdQYK96n1IN1ovz78MmiseZrc6vIvWrsFSAC%2FqkTNnY38oNblr2r%2FUlejmK2P4SjWgrkoMJOZaFICFjr2mXgm74%2FA3xu2i%2BBmEW&X-Amz-Signature=85eafa24a40470d87b94479ec5f4f9c4399aecc08cc4994ef4a1013557a4c509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKGIRHS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGabL1bxLoOU8UYToZv1IBhAUwF35QP%2BgJpSjlGyA5UoAiEAkaXZK6iqYh62tCMnSYI6QjeKAd5Fsc7Yp8tbRjmjtdMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxMVNr0N%2FEDXFSmVSrcA4pcJ35uiF1lj2b0HnfyROFW%2FdmQ%2BZg%2BJEm4cDr9a7dh8rGuzgeS85SH1%2F4HfRIvH428l3fHGk79%2BGmwUIQJf9KsIsKFarU7hnTSB9KrR5Yv85x%2B%2BpoORpCKyvESmvhpJqaApYI2SmjHPxCC%2BjQzs%2FFyjUuZI%2FCMbquFSDbn8%2BfI80COT2emkXflc8%2B0AWQOAcrmOk5%2BxxTJT2IKgq%2Fw%2FyZGeturLAfgPBfFajGhINzDl510VQnzmMKtWDC7m28agfOvRL4pwOcJWk31jbTKMDUs%2FYNMxNB9hdmcNjNozVv9sFZVZW6YrifVLF%2FuyJLoLL%2FuaLolqJ1cWeop5cYIMbKFEpte8fmPNBUuWtE6I5WqCFx73EZ0f%2BzBax6EIHn8EybDQF9SyTPXaLoE5YDZdqH%2BZk5q3ahuWv9nWTZ7Ak%2BMAZCE4YRcnYVHvv85Iv02Wr%2FWnnN%2BYZwScoD1cSTGYVrfCBLPD1YRuWcJrS2OsNVZeXMUE2iPyp3mViLRf7lwyG9P5k4CY8EnsbgABpBE0Zf6fuVX561T9yyMR47mPfECVRYPnRpMkZYrWpp0OXfYowU5MKjpk4cFIlFGNFbIabijgmul7BcK3QsLRIP%2FhKpKesfCKD1gzmwA%2Bnn9MPaj1MkGOqUB0WZoV%2BraWLG1QLlMFU4wphmWJhVKherPuZH%2B%2Br6sHqUYJQgVZo7mBavNgEC3vFtwPzd%2BbiZBLDSTvDzC%2F%2FkVP4DQv3FJn%2FrR0m44LEIJ2oVT4ClMnALdwAGRwYdQYK96n1IN1ovz78MmiseZrc6vIvWrsFSAC%2FqkTNnY38oNblr2r%2FUlejmK2P4SjWgrkoMJOZaFICFjr2mXgm74%2FA3xu2i%2BBmEW&X-Amz-Signature=59d17da309abced84f85a89dd281d9837098e46356b8864ee16d40b6cafea24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
