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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YND73LRW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhQe%2BmfScIUwgo0%2B4l9QiuVm304djYr%2BqJ5ApxRuzEVAiAfLxRJqWWyZOOWFpQQYrm%2BMY0WvJCOC7hRva9HGxYyiCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMH%2BcwDY0e3CdlzRt%2FKtwD0AzSZ3tXihLHatCX%2BYy%2BoZNoAiJoFCw5egK8rrXJY%2FrBi3gKd5z%2FhFm%2BWX9U8dz6xM2bojp318j31eOAqh%2FCo%2Fsq%2BzLr6AUyc7nRWB%2FHMPeswPllzdHDTcci63n4qGFhPY4T30fQemlqaYgeY6lCdq1Py4zkrU%2FrY07WewdEFmDX5F9A6m9K4jn1%2F2FQNxzdfZUjrNdko%2FUm%2B3F5HsPIW2%2BfQgPQqGa0Zl8qdt6NGLRus1bhElnIyGld0r12Eg61kSUM5Y3cYGGQSYhVQHEbzHGd3ezIkQR17hteXWryZ45pjEolhAl1%2FMs4ZP4IzzU89Dq2gvFIOFwFfL62HsNak1LlCMcpNZJhQRHkaLfF8DnCzAf8WUMwLK4Xcc6BMKHXZCC%2Bg%2BRdeE7PZ7TRUTwSlHuNVcmU3eM4H56HF%2BBSglcUeNLF35Qvd1rWXbzDu1SWLshvx6GNFIP5MSMyQsc1Qa4cyP6h9pnzHljjDRRmtLq8EI0EE8ZYYv14NAIzlRRNQrM9v5FfgITRm0YfldsQApJdx6qxUAe6RPugsHjpuNoP2l9%2F4iKbTFTJLUZaO9AnqxyBK4w2czu06CjdOg3DrOihNS9G1G3ELbfMcg2TJnW0%2B0NRRAQzR%2B1Ru8cw0KvJyQY6pgFKrn1eF3g3DXzlfQhFDd7yl%2FaUzAUlz7LZzDbZLKroqk2WlUEYTlvwT2Zb3y6%2B0dsRiceOLz2uiErumu7HF%2FvjTwFpL4JVfOnQkZ0%2FVSLoMc3Ce89LFApYhOqd7sNJunLrYGdCRrel3doVxLyoaKx6lCY8fWTnP8ONFLLqEqzv4GKL5hiWmNJ6sJhp00YyP3xhngpln9vAQt2XVNu72CLw3xr0QDIu&X-Amz-Signature=a7ad442946f374b6b996bd7326c585a77f12b6dce9091522f1b3c4b882f0a238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YND73LRW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhQe%2BmfScIUwgo0%2B4l9QiuVm304djYr%2BqJ5ApxRuzEVAiAfLxRJqWWyZOOWFpQQYrm%2BMY0WvJCOC7hRva9HGxYyiCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMH%2BcwDY0e3CdlzRt%2FKtwD0AzSZ3tXihLHatCX%2BYy%2BoZNoAiJoFCw5egK8rrXJY%2FrBi3gKd5z%2FhFm%2BWX9U8dz6xM2bojp318j31eOAqh%2FCo%2Fsq%2BzLr6AUyc7nRWB%2FHMPeswPllzdHDTcci63n4qGFhPY4T30fQemlqaYgeY6lCdq1Py4zkrU%2FrY07WewdEFmDX5F9A6m9K4jn1%2F2FQNxzdfZUjrNdko%2FUm%2B3F5HsPIW2%2BfQgPQqGa0Zl8qdt6NGLRus1bhElnIyGld0r12Eg61kSUM5Y3cYGGQSYhVQHEbzHGd3ezIkQR17hteXWryZ45pjEolhAl1%2FMs4ZP4IzzU89Dq2gvFIOFwFfL62HsNak1LlCMcpNZJhQRHkaLfF8DnCzAf8WUMwLK4Xcc6BMKHXZCC%2Bg%2BRdeE7PZ7TRUTwSlHuNVcmU3eM4H56HF%2BBSglcUeNLF35Qvd1rWXbzDu1SWLshvx6GNFIP5MSMyQsc1Qa4cyP6h9pnzHljjDRRmtLq8EI0EE8ZYYv14NAIzlRRNQrM9v5FfgITRm0YfldsQApJdx6qxUAe6RPugsHjpuNoP2l9%2F4iKbTFTJLUZaO9AnqxyBK4w2czu06CjdOg3DrOihNS9G1G3ELbfMcg2TJnW0%2B0NRRAQzR%2B1Ru8cw0KvJyQY6pgFKrn1eF3g3DXzlfQhFDd7yl%2FaUzAUlz7LZzDbZLKroqk2WlUEYTlvwT2Zb3y6%2B0dsRiceOLz2uiErumu7HF%2FvjTwFpL4JVfOnQkZ0%2FVSLoMc3Ce89LFApYhOqd7sNJunLrYGdCRrel3doVxLyoaKx6lCY8fWTnP8ONFLLqEqzv4GKL5hiWmNJ6sJhp00YyP3xhngpln9vAQt2XVNu72CLw3xr0QDIu&X-Amz-Signature=a9916d2b469aad7dc36e7ef48e5f3bc80f79a9243e4c0cc6a17fb875d1ed3ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
