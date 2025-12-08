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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM4BPFM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu5tPXwEOloNKQqhJ2biUJ2vrZAikZyG%2FQ74VodDL8RwIgSVci0OQqL7AhW0u%2BhAbVh1UnWy0Wf7QZLDSr4Z9fXnsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yERi6yKc6k6%2F3tircA6h6k%2Fj05Pouwmqmy2Y10miiS%2BC7ZgsyOWZMmtlZl3hXui%2Bw31W9r1wd2RPPJoxeg5tRGhrOI1P1ngXR6lRQh2PZ0Vvka5zSV8JtOc%2BNCy8gEFkVc78LNk%2FwJXGYFSrp%2B9EoJ%2ByPIz33yhVZWpPhuWSl7yOuzqOL%2FV8NI7%2BK1h7XTDGGEq7wZSKFWGGcRxzqiOVTjCKIBcLZrs8424YsUbMsQ3u2e7h0yJDYor%2F7%2BwpabNgDqgENY2pDd7a8imPL2cIF%2BgvHTS5AC0ODAOQOXoSzNrNoKsMdaz%2FHUmy6yg7iYgRY%2Ffo1tOH8NT1ASRh9%2Bah5z%2BDLKHhVFnQ05j6MyVvO11rSxE0Rj8urGslkknRAQ8fezY1gzsav87q%2FOB4Ah0ayaWLx9AGcnTDHh2Xj805uF%2F3vbH01NTWTxaCz%2FZIdGtGlqvY9txO2zTtDu2FatlB7jw549uMHrJEXeo9%2FaotwsITadLMokMtqZzQWs2Pw5W3vTp3lmfU2%2BtbKunWR%2BY45lYC%2BacSQoSkQEgxkILvRBsVhbRsaj3NAUonImoMgVSzVL1YIcKlgmRQ4UAA6QRzf0sSjV7aOJeXcNHM2MuIsuWmQN7CnXyqjarGyzKYDyE0w%2FlNoW8k119vqMI3v2MkGOqUBYPQvPU3VSrm8nlDfWkGCf13RUxTY%2F0IN2jYSZ97zCEMgYE6rHNXte58e8klumCDwoh1GTQzyOcB8X2WyXzC%2Faz96ZQl9Iw%2FzIDbcNVrJ6opdVLB5OTrQo9slGLyArpvnTnFJoWZj%2FbaNXFpD31D255mPzFrGqlEwkTxQHHc3zTbeLO5%2Bih9sKFHfd55u6VJdTsjA9LpnEPu2LwPU0394A7VuROMD&X-Amz-Signature=390c763cc29473a8e55d8c968de7f8ad7a242d28a4dd12ce0967b4fb3a034b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM4BPFM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu5tPXwEOloNKQqhJ2biUJ2vrZAikZyG%2FQ74VodDL8RwIgSVci0OQqL7AhW0u%2BhAbVh1UnWy0Wf7QZLDSr4Z9fXnsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yERi6yKc6k6%2F3tircA6h6k%2Fj05Pouwmqmy2Y10miiS%2BC7ZgsyOWZMmtlZl3hXui%2Bw31W9r1wd2RPPJoxeg5tRGhrOI1P1ngXR6lRQh2PZ0Vvka5zSV8JtOc%2BNCy8gEFkVc78LNk%2FwJXGYFSrp%2B9EoJ%2ByPIz33yhVZWpPhuWSl7yOuzqOL%2FV8NI7%2BK1h7XTDGGEq7wZSKFWGGcRxzqiOVTjCKIBcLZrs8424YsUbMsQ3u2e7h0yJDYor%2F7%2BwpabNgDqgENY2pDd7a8imPL2cIF%2BgvHTS5AC0ODAOQOXoSzNrNoKsMdaz%2FHUmy6yg7iYgRY%2Ffo1tOH8NT1ASRh9%2Bah5z%2BDLKHhVFnQ05j6MyVvO11rSxE0Rj8urGslkknRAQ8fezY1gzsav87q%2FOB4Ah0ayaWLx9AGcnTDHh2Xj805uF%2F3vbH01NTWTxaCz%2FZIdGtGlqvY9txO2zTtDu2FatlB7jw549uMHrJEXeo9%2FaotwsITadLMokMtqZzQWs2Pw5W3vTp3lmfU2%2BtbKunWR%2BY45lYC%2BacSQoSkQEgxkILvRBsVhbRsaj3NAUonImoMgVSzVL1YIcKlgmRQ4UAA6QRzf0sSjV7aOJeXcNHM2MuIsuWmQN7CnXyqjarGyzKYDyE0w%2FlNoW8k119vqMI3v2MkGOqUBYPQvPU3VSrm8nlDfWkGCf13RUxTY%2F0IN2jYSZ97zCEMgYE6rHNXte58e8klumCDwoh1GTQzyOcB8X2WyXzC%2Faz96ZQl9Iw%2FzIDbcNVrJ6opdVLB5OTrQo9slGLyArpvnTnFJoWZj%2FbaNXFpD31D255mPzFrGqlEwkTxQHHc3zTbeLO5%2Bih9sKFHfd55u6VJdTsjA9LpnEPu2LwPU0394A7VuROMD&X-Amz-Signature=60c78d9ba1f6f7bb8a7129382206e04a8f6be4ee19c59a6a57b3fe8605d116ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
