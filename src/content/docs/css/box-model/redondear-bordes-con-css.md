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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466653CWFOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF38zuP1xMU%2FNuR3p5kyFPK66k8jmBGVBMwSZMo%2FhSo9AiB0aF7fgxJfPEyubUSkAXDn71TDXfgmjqm6MNCRoKdXbyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK0BDq%2ByPGMg3%2FlbzKtwDuwAhKD31qFyIzeHj9wGrVV%2FTeQ1%2FHTs1XgdCSyyVSMdIRNYBGJQPF7mKA5rDuPYciTbAk7zF1e%2FMI%2Fqx51qv329C4M7wQgtUN%2BKASiJFPWpeIQQxX3sz48A2mjm61qFfFI%2BWL%2BRoHya80UuaF%2FfEmwNYPfg9XZMHeELhyXk7VJmyZkmuuYKGFdkER%2BrZ9DZn%2FZe%2FLBkb2ZlZ7UphAbPKWhZpmsJH0Kxw6%2FJPK3Ix7mkmgzOSPOOhCWYU9P9P%2FKwRcCPxsHl3Xjvc7rGMBHqjqYp9yK8N9qjfFvUKUCsizlQLi2BMrOHGTocACA0CQXbXmHw%2FDTvO3KdROu7pnkJldg6IBFdAkrQAHsLcHMpx4mrDc32YiU2Yvvr%2BS%2BJN%2Fx4L%2FPiwtsYwax1TABY0A11LRrCSAP25xd3wwCICasHBcEnSUu8GMijb3bxGzwxqXIxPIvqYp8YRGX%2BFg4wJmgzXO6MPrAnAMAOEkg4k%2FNxROUgfc15c7r0oL1NgKoyyphw6idD4yX5yOhbNU389ZKg1pRaSizYxilxHY9fVonJmUnGL7B5KMp4DWS17i0NgRzU6GfmLs6DQSupZTDQdDMYTCWcXGT5mqTTjeFiPY4T72Jrl8PcOnVFv8WLR6aAw6u%2BJygY6pgHZ6cmWXfuJuBrybmWrDCtOcxpKGblQCI36sYu3h5KvYk2K3mc4nq6fwuFZ6ifazP4Tm1URKL2vvtG4nvY4GYZruE4J4QiQQTWptirJheLc9uJfK6EEv3S%2Fw%2BlJRpwYmbQ3pLG7G3CIj%2FIGBWLLOXxOjMLJHRN2zZflZ2MvfQHYzgH6sCQlTk8iIfjlrTPPHxM8sTbpuwWE34GPt5Bm0SjqIdjOeCAj&X-Amz-Signature=06c99fe512d858c2303644f9bd671cd7d88dcacef7c9e0c25053b3e9f2f6f8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466653CWFOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF38zuP1xMU%2FNuR3p5kyFPK66k8jmBGVBMwSZMo%2FhSo9AiB0aF7fgxJfPEyubUSkAXDn71TDXfgmjqm6MNCRoKdXbyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK0BDq%2ByPGMg3%2FlbzKtwDuwAhKD31qFyIzeHj9wGrVV%2FTeQ1%2FHTs1XgdCSyyVSMdIRNYBGJQPF7mKA5rDuPYciTbAk7zF1e%2FMI%2Fqx51qv329C4M7wQgtUN%2BKASiJFPWpeIQQxX3sz48A2mjm61qFfFI%2BWL%2BRoHya80UuaF%2FfEmwNYPfg9XZMHeELhyXk7VJmyZkmuuYKGFdkER%2BrZ9DZn%2FZe%2FLBkb2ZlZ7UphAbPKWhZpmsJH0Kxw6%2FJPK3Ix7mkmgzOSPOOhCWYU9P9P%2FKwRcCPxsHl3Xjvc7rGMBHqjqYp9yK8N9qjfFvUKUCsizlQLi2BMrOHGTocACA0CQXbXmHw%2FDTvO3KdROu7pnkJldg6IBFdAkrQAHsLcHMpx4mrDc32YiU2Yvvr%2BS%2BJN%2Fx4L%2FPiwtsYwax1TABY0A11LRrCSAP25xd3wwCICasHBcEnSUu8GMijb3bxGzwxqXIxPIvqYp8YRGX%2BFg4wJmgzXO6MPrAnAMAOEkg4k%2FNxROUgfc15c7r0oL1NgKoyyphw6idD4yX5yOhbNU389ZKg1pRaSizYxilxHY9fVonJmUnGL7B5KMp4DWS17i0NgRzU6GfmLs6DQSupZTDQdDMYTCWcXGT5mqTTjeFiPY4T72Jrl8PcOnVFv8WLR6aAw6u%2BJygY6pgHZ6cmWXfuJuBrybmWrDCtOcxpKGblQCI36sYu3h5KvYk2K3mc4nq6fwuFZ6ifazP4Tm1URKL2vvtG4nvY4GYZruE4J4QiQQTWptirJheLc9uJfK6EEv3S%2Fw%2BlJRpwYmbQ3pLG7G3CIj%2FIGBWLLOXxOjMLJHRN2zZflZ2MvfQHYzgH6sCQlTk8iIfjlrTPPHxM8sTbpuwWE34GPt5Bm0SjqIdjOeCAj&X-Amz-Signature=e37092d1ea3c67601d09784d8ff649184e1a22ffdc00a193346b0630f2a722a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
