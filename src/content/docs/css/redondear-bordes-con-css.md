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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNSAALKV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbiOlJCpfp0qWYETuSn3TeFZR2shBe3cI0IsVKjValSAiEAxjZW827s1I9yuy8wi0hRH3InxM0kRHv2orNqhNQGLvAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FlCSNjQyOyWfEyaCrcA9D%2Fxckd%2FABVme6pbGPqQegjuE5ZYCyfplkymrZWVFuV9d1wKxCEPj6VEWf7V183cdGRyK2NraJ9PbKqOHNX8NB6%2F2asNPb9v2B7%2FxEYTg1DJQmPsyb5hg%2FUAWPB4GC3mQFXb8DTqNiSQcLc2pA1rOtwwXaFbNhpzRTMBBED5Ak5enW8rgaMXhLU2NGH1X%2FUX1pFwCsPisw8uaGIpXyB%2FA41yTx1iqUFcl1iT0JVPTNXiD2PhXkxw2hBABz5aZ2cyHeIEOKUb0M3mlxEH1Se%2FnFvuTDJSSXDOi30sY0Q%2F%2B%2BQNUkeN%2FBEBZTtvQjYZntwTyJ%2BZMplCDh2QSPCyKzt2LKvbpjfAzpQ9g9aZ%2FQBqQMHMMwNl5y7x83mX5qg8m3lifB6HlYdWPT6mf0cdDQ4NPzFWIGKHXyjmaSe8uWnffQZXWLaFtbL%2Bt9inO4KYgS5yQn3BPOAzXDR0bI%2FrLS5UhayEJlut33apPG%2FJnX6W%2F8WnKq7lRC0AJHFhNaEYpKpVQrLsekGXdWsxOm7Tj1QScheNjD%2BJF3HK2KtJRZGsYu9F336Y6TeSlIqeSPhyT3mgg4Pb%2Br99Yo8HA1VSk17Z67WWZVn4ISfTAx88q5rkpmkeExaUDqkuqtEPsY%2FMLS51skGOqUBootBxdj5ttNxPZIYeDGsXdKTp1kWcPSEUiyZ7GO7KI900%2FIdJerFv3G9%2BO13zMFFitqmnjRzUXkAGgCYtLumIHTZxbMcQoFSopclsiQdm9vqsCTrvoTeOJAV2eF8vU8jJ%2BZFcaj%2BPOcGnqOLJCSz8omVlRA0rwszoCzCAKJ%2Fe4GDfhu%2BuG45t4uqFxs6S66ssZZWIn7q1fFktTVQtIrwhQdTYlJI&X-Amz-Signature=c1c19146919bb00574d0eb0c03c6bc62edae7ca5fe70c7e3a365cc415d3733b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNSAALKV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbiOlJCpfp0qWYETuSn3TeFZR2shBe3cI0IsVKjValSAiEAxjZW827s1I9yuy8wi0hRH3InxM0kRHv2orNqhNQGLvAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FlCSNjQyOyWfEyaCrcA9D%2Fxckd%2FABVme6pbGPqQegjuE5ZYCyfplkymrZWVFuV9d1wKxCEPj6VEWf7V183cdGRyK2NraJ9PbKqOHNX8NB6%2F2asNPb9v2B7%2FxEYTg1DJQmPsyb5hg%2FUAWPB4GC3mQFXb8DTqNiSQcLc2pA1rOtwwXaFbNhpzRTMBBED5Ak5enW8rgaMXhLU2NGH1X%2FUX1pFwCsPisw8uaGIpXyB%2FA41yTx1iqUFcl1iT0JVPTNXiD2PhXkxw2hBABz5aZ2cyHeIEOKUb0M3mlxEH1Se%2FnFvuTDJSSXDOi30sY0Q%2F%2B%2BQNUkeN%2FBEBZTtvQjYZntwTyJ%2BZMplCDh2QSPCyKzt2LKvbpjfAzpQ9g9aZ%2FQBqQMHMMwNl5y7x83mX5qg8m3lifB6HlYdWPT6mf0cdDQ4NPzFWIGKHXyjmaSe8uWnffQZXWLaFtbL%2Bt9inO4KYgS5yQn3BPOAzXDR0bI%2FrLS5UhayEJlut33apPG%2FJnX6W%2F8WnKq7lRC0AJHFhNaEYpKpVQrLsekGXdWsxOm7Tj1QScheNjD%2BJF3HK2KtJRZGsYu9F336Y6TeSlIqeSPhyT3mgg4Pb%2Br99Yo8HA1VSk17Z67WWZVn4ISfTAx88q5rkpmkeExaUDqkuqtEPsY%2FMLS51skGOqUBootBxdj5ttNxPZIYeDGsXdKTp1kWcPSEUiyZ7GO7KI900%2FIdJerFv3G9%2BO13zMFFitqmnjRzUXkAGgCYtLumIHTZxbMcQoFSopclsiQdm9vqsCTrvoTeOJAV2eF8vU8jJ%2BZFcaj%2BPOcGnqOLJCSz8omVlRA0rwszoCzCAKJ%2Fe4GDfhu%2BuG45t4uqFxs6S66ssZZWIn7q1fFktTVQtIrwhQdTYlJI&X-Amz-Signature=1e3bc63e6b5cbb3b11f11173f1f94239f50fa3eb7946cc17eda79a003b102d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
