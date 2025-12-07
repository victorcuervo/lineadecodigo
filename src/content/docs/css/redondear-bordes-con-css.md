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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRW7YSPP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpmq36X%2BDnV3rzmHFVG71sn1cz6oyeH0VXzkv49EoRpAiEA0qFCqebfAL4vKvHr1d0owmhpq8U6Wo9%2BuR%2FN3vnr%2FNUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdfhYnZGTv6SNt7aSrcAyyfrMS%2FcVph9X7LG03D2g0i5RfP7lGlK3NxFppP%2FNygYyyKBwrWykw88lWronYo6J2D%2B4SCbUzw3JZtpk1nIovw8E%2B3ubZfL5vSX2YUXmKaWzM2PP23xlCgBE%2FpG687XoyBwduSpn3%2FJ4RRlXnEcC3Gms0al22nNbpYnITpk9cq3VAb8SkH5y4ZujvfoYAiTXf9o3%2FvNZ5Yekw1%2FqoPfMk6B8UCHT3i5qhuIYvD0gaj3QQmKf0U94fqfNrSPrvgpgb0GIY%2FsqjEjUPYxZk4ZsPWD2klPqnKFPPmnDFp4TCuWOqMgsWZPZE7FAQ%2F%2BrDxL6qGhjbXoq%2FIDFI1CGwBpz0wGjMIcM34TmEmSFgenJlkHEtLV7kX%2BA7TJfRgrnuv5qB3A%2F8OKfAgdX%2FjMeRHyF%2FcHMynbdXdk8tyQtbuWybI%2BjPp6gCGPC7Xr4M8dB0LFm2JEAUaFBESSonphKh%2FL7JAjmXFncHi58O6V9OnjaLpS4Jljo94K8kC6QpraUkt%2Byt6ZvApn4k4DCvrtWJQuNOO3xq%2Bw0kA8K1VVef5j5v4MBU2OKDGy%2FSPnd4iDWlRZTbv9jhonjgXi%2Bg5Z5m0Jb9m92A4fklEUf5OM8tiTXuWvEgL31%2FYE0NrUpsOMOia1MkGOqUBQDxo1aCwapthmQSZSznGMAnhzzpXRL4LGTyeXRInkNGSKwHU5Vm6LKBKolp1zPIw80ROs0IJtwmI80hPIJ6bbLt%2BohX9sQPpoRDhVa3Cg8%2BbWa5crtxR%2BN3LLcxojUg6WeP9%2FOeIcgcAjw6WSvENZr8vUdDxx0eF9XQpBQBXoYR1Sn8efnfYR622%2FQl%2F3TzkvBGuwIY5IY%2FMXDF9P96EPW3NT09d&X-Amz-Signature=2b89a6d3a6af51f8ec7ddb254235d64438a0a5d1d9fc9d88abe5e8414a45cc7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRW7YSPP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpmq36X%2BDnV3rzmHFVG71sn1cz6oyeH0VXzkv49EoRpAiEA0qFCqebfAL4vKvHr1d0owmhpq8U6Wo9%2BuR%2FN3vnr%2FNUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdfhYnZGTv6SNt7aSrcAyyfrMS%2FcVph9X7LG03D2g0i5RfP7lGlK3NxFppP%2FNygYyyKBwrWykw88lWronYo6J2D%2B4SCbUzw3JZtpk1nIovw8E%2B3ubZfL5vSX2YUXmKaWzM2PP23xlCgBE%2FpG687XoyBwduSpn3%2FJ4RRlXnEcC3Gms0al22nNbpYnITpk9cq3VAb8SkH5y4ZujvfoYAiTXf9o3%2FvNZ5Yekw1%2FqoPfMk6B8UCHT3i5qhuIYvD0gaj3QQmKf0U94fqfNrSPrvgpgb0GIY%2FsqjEjUPYxZk4ZsPWD2klPqnKFPPmnDFp4TCuWOqMgsWZPZE7FAQ%2F%2BrDxL6qGhjbXoq%2FIDFI1CGwBpz0wGjMIcM34TmEmSFgenJlkHEtLV7kX%2BA7TJfRgrnuv5qB3A%2F8OKfAgdX%2FjMeRHyF%2FcHMynbdXdk8tyQtbuWybI%2BjPp6gCGPC7Xr4M8dB0LFm2JEAUaFBESSonphKh%2FL7JAjmXFncHi58O6V9OnjaLpS4Jljo94K8kC6QpraUkt%2Byt6ZvApn4k4DCvrtWJQuNOO3xq%2Bw0kA8K1VVef5j5v4MBU2OKDGy%2FSPnd4iDWlRZTbv9jhonjgXi%2Bg5Z5m0Jb9m92A4fklEUf5OM8tiTXuWvEgL31%2FYE0NrUpsOMOia1MkGOqUBQDxo1aCwapthmQSZSznGMAnhzzpXRL4LGTyeXRInkNGSKwHU5Vm6LKBKolp1zPIw80ROs0IJtwmI80hPIJ6bbLt%2BohX9sQPpoRDhVa3Cg8%2BbWa5crtxR%2BN3LLcxojUg6WeP9%2FOeIcgcAjw6WSvENZr8vUdDxx0eF9XQpBQBXoYR1Sn8efnfYR622%2FQl%2F3TzkvBGuwIY5IY%2FMXDF9P96EPW3NT09d&X-Amz-Signature=9ea9c1727d51abed4ee6488599bcd58ce6461fb6e408989f9a153e7feaeb5d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
