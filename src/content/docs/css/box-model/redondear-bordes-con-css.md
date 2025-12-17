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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRHBD2S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B5%2BOG0OakKUnI%2BrHNOG1yL0%2FAvGr0C6CQ5%2FkA2t03eAiA4L1kV6mvREahpcE%2FYhYIRvHhGUQepHH65xKaODN3z%2Fir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMnlBdJq9Ta2nEQkTZKtwDrarJEd4sCj5LYe9KIefC0lAuqCHHZ8Bz73d%2F80heu%2BN6Ff7CVrCLOkEL2Edk7Ju7QJVrcWWvc4a2cCUzgW71tNp5HakRz5W8sEiq2Zn87acwg8396HkAEsA%2BvBJ%2BU4YTgDEJFRHRGVAPQBERzlL4YeMkY0v1BLK3vZMhb2FAGg6%2FwC811P1hCp0B%2Fu0GgeSOxqnaoJH5bJJQ7XwKdDD1OL4K7l%2FrNh3eHI8KODnYUGJamLsnYLimLCNfAcUqJ68zFv48RtDdge%2BT1uFE7ZkBXM7VY28yiKx3vqXknbZE%2FKOH15GHOfgK0mMEMN9ZPK7upI%2BnpSQZo65BD7QcXfEzkBOiYLZBeo3YBs1i7OTuReCu5DwiEaGPw5ibGOw0%2FD%2BXL0YBWuAvLx6Uv%2BmFrMFwQ8OFKzMwtW9gfkKYz6C3hyzbAja%2BkUN%2FR6hBfCqbH1xNUktI7bf7z5ne30UbkjqBO1ZG93sjqqryx0LHg3823SdHMJkd0r6aeSEwDwbtfW9kx2OrAIucjgg7lAUSCKVvGtHLZ9iYaYAjrDlYJ1cvPiOhaMxfpldCfTLUDGfLd3fPCJ2fEH3neDS5zVR730yhcpTmbRH5XreVNRj4mtckuO35qEs8TA%2BApPswPUgwzfuHygY6pgH5APtzPF3%2FsKvFKBmpnRj1ovRlGUnEwnhl8QhBeI%2BrTXTMpxclj6iVJoD%2BKeeZbmW2I3EKT4VZeFbcV1%2BUW%2BSPVTLzBltwZnadHNhfGcTbzGuD%2Bwr2Zoi%2FHsA7ZXtyx%2BSXXgPVopRt8YhbVUwQbIY0Seo9WuUUvldrtRX6hI5Cp4ooXmBLcA4WFwVsSSFNTsber%2Bu3XHyIpWfMCWXS4cVj27oOpCjk&X-Amz-Signature=09e18cb3d24ccb4ae44c1affc80478d8bd37983fad7916f17cc05d3953a37ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRHBD2S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B5%2BOG0OakKUnI%2BrHNOG1yL0%2FAvGr0C6CQ5%2FkA2t03eAiA4L1kV6mvREahpcE%2FYhYIRvHhGUQepHH65xKaODN3z%2Fir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMnlBdJq9Ta2nEQkTZKtwDrarJEd4sCj5LYe9KIefC0lAuqCHHZ8Bz73d%2F80heu%2BN6Ff7CVrCLOkEL2Edk7Ju7QJVrcWWvc4a2cCUzgW71tNp5HakRz5W8sEiq2Zn87acwg8396HkAEsA%2BvBJ%2BU4YTgDEJFRHRGVAPQBERzlL4YeMkY0v1BLK3vZMhb2FAGg6%2FwC811P1hCp0B%2Fu0GgeSOxqnaoJH5bJJQ7XwKdDD1OL4K7l%2FrNh3eHI8KODnYUGJamLsnYLimLCNfAcUqJ68zFv48RtDdge%2BT1uFE7ZkBXM7VY28yiKx3vqXknbZE%2FKOH15GHOfgK0mMEMN9ZPK7upI%2BnpSQZo65BD7QcXfEzkBOiYLZBeo3YBs1i7OTuReCu5DwiEaGPw5ibGOw0%2FD%2BXL0YBWuAvLx6Uv%2BmFrMFwQ8OFKzMwtW9gfkKYz6C3hyzbAja%2BkUN%2FR6hBfCqbH1xNUktI7bf7z5ne30UbkjqBO1ZG93sjqqryx0LHg3823SdHMJkd0r6aeSEwDwbtfW9kx2OrAIucjgg7lAUSCKVvGtHLZ9iYaYAjrDlYJ1cvPiOhaMxfpldCfTLUDGfLd3fPCJ2fEH3neDS5zVR730yhcpTmbRH5XreVNRj4mtckuO35qEs8TA%2BApPswPUgwzfuHygY6pgH5APtzPF3%2FsKvFKBmpnRj1ovRlGUnEwnhl8QhBeI%2BrTXTMpxclj6iVJoD%2BKeeZbmW2I3EKT4VZeFbcV1%2BUW%2BSPVTLzBltwZnadHNhfGcTbzGuD%2Bwr2Zoi%2FHsA7ZXtyx%2BSXXgPVopRt8YhbVUwQbIY0Seo9WuUUvldrtRX6hI5Cp4ooXmBLcA4WFwVsSSFNTsber%2Bu3XHyIpWfMCWXS4cVj27oOpCjk&X-Amz-Signature=218e8b9964bd08b3454b7b814be97babb15c436080a5b41faaf6c24ed3e2ad06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
