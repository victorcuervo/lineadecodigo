---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPLBAIE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDwDjz4vGtJICsKfLVCROMjUxW7NUOtakZzcnUCJlZRGAiANPAi9KAogBA5tK3fBqgGtj%2F0qsp1lHH%2B3zSyT%2Fp51pSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMfbPdQysKACFctRw%2FKtwDl%2B2riCjY75k6JQyQGiwGqyrpdO56844iBVSNtF5LH1GybExXsd9FP1M%2BQ6rE%2B%2BZgaTeWezNBxcSp9VOblaQH7vcmGWQsCss12sECL%2BHe8d5R0%2BVullRRjiqFoS78cUcIMwN4H4eEdiZwgoUOLf0Z0Irg5MSB3bgj%2F3bLZU3GIDSll8wriu68sTbY8KM6BPmnEPvS0lpEj6lTGnjaUzyGZbi4gbymm5K1NrAmHBnaDqobs8JBku%2BoxHrf6yjLBlOyBqskO3UQJAzADxMm6Dbe3SgGopPKJRdQw3lJiC%2BWxprVBc2IPTIOYbMYNtHy2i3aAsMen3eC1sDd2jtV5gVZeVRYeomKGcOU4bzrvuTCbnOWvTvszxU5ldDholKFlvVgI68zqcbmeq4aJdXo6N8%2BBJ6KdPdnJsjWsmhY%2FkUYRrl3%2BPjNfmJ1td9euytZx6%2B6zD3IFIvoVKfaKOEB%2BY9NUGVvWiEqsN6y%2FaUUoe2eeRbAZ%2FG9c6pUtJQphfJQ1NmlNC8keJdPcWZiAQMpKZrvNL4iqq2HYt1SMDp77r6f2K82dIKnFim2DZLczheMX7SK%2BsRvRWjQInf2vm3gBRqgUtHjUsajUWPBvSPp8Wuswsuf8CsZvDTWCjVXz%2Fwwq5XDyQY6pgHRtNILcAdqecUdXQVoiSKsmK3p7Pb5RfCmnOXCjo4Xo%2ByMcrTPPtYqnqlEKpLi%2F2haaVYXqB%2B5PeAFVI7utTyyefLTQ%2F91zfouuKqWuM6f9Ph0hzBNlM8nkWylM8WLrgBR0gnjdyE6mOePjOjmIHzle3U2dp3YIoqXWbIv7Cb9fNOtUA3xu%2F1eaNJd9MGcxERBcUHNkN2OcyVJzeOu2Tylgkz3%2BRlv&X-Amz-Signature=2818f1b6b1ebadf23efac13005cdc895f43d4694365103350e0036a2b76a78a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPLBAIE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDwDjz4vGtJICsKfLVCROMjUxW7NUOtakZzcnUCJlZRGAiANPAi9KAogBA5tK3fBqgGtj%2F0qsp1lHH%2B3zSyT%2Fp51pSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMfbPdQysKACFctRw%2FKtwDl%2B2riCjY75k6JQyQGiwGqyrpdO56844iBVSNtF5LH1GybExXsd9FP1M%2BQ6rE%2B%2BZgaTeWezNBxcSp9VOblaQH7vcmGWQsCss12sECL%2BHe8d5R0%2BVullRRjiqFoS78cUcIMwN4H4eEdiZwgoUOLf0Z0Irg5MSB3bgj%2F3bLZU3GIDSll8wriu68sTbY8KM6BPmnEPvS0lpEj6lTGnjaUzyGZbi4gbymm5K1NrAmHBnaDqobs8JBku%2BoxHrf6yjLBlOyBqskO3UQJAzADxMm6Dbe3SgGopPKJRdQw3lJiC%2BWxprVBc2IPTIOYbMYNtHy2i3aAsMen3eC1sDd2jtV5gVZeVRYeomKGcOU4bzrvuTCbnOWvTvszxU5ldDholKFlvVgI68zqcbmeq4aJdXo6N8%2BBJ6KdPdnJsjWsmhY%2FkUYRrl3%2BPjNfmJ1td9euytZx6%2B6zD3IFIvoVKfaKOEB%2BY9NUGVvWiEqsN6y%2FaUUoe2eeRbAZ%2FG9c6pUtJQphfJQ1NmlNC8keJdPcWZiAQMpKZrvNL4iqq2HYt1SMDp77r6f2K82dIKnFim2DZLczheMX7SK%2BsRvRWjQInf2vm3gBRqgUtHjUsajUWPBvSPp8Wuswsuf8CsZvDTWCjVXz%2Fwwq5XDyQY6pgHRtNILcAdqecUdXQVoiSKsmK3p7Pb5RfCmnOXCjo4Xo%2ByMcrTPPtYqnqlEKpLi%2F2haaVYXqB%2B5PeAFVI7utTyyefLTQ%2F91zfouuKqWuM6f9Ph0hzBNlM8nkWylM8WLrgBR0gnjdyE6mOePjOjmIHzle3U2dp3YIoqXWbIv7Cb9fNOtUA3xu%2F1eaNJd9MGcxERBcUHNkN2OcyVJzeOu2Tylgkz3%2BRlv&X-Amz-Signature=f44e1b1695ee88ff71581451b42b22d50450c3168c1f916a6f7d6b7a50a5b69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
