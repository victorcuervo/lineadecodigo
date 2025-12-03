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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAY7OBC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBm3RPR3D8kjHYL89j62ywGog4OgkARsvcGIuogcYVs%2FAiAPXL6yHDT%2FSB6zu%2BdQpPUeOjn8oMBz1Ai%2BC%2BvWhcyYvyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM0Bh9bBeTVA%2B4tp6BKtwDCu6Qbw8NU%2FuVbJe2kyAwuqPCiZc3B%2Ffs2Y0TL47MT13ppvg2tBepOJqXIX0d1hB2%2FzoyWn7TnMIK3sewJRSXSL4uLQFo5dAsoB9YDfZ1ghF0xGzINbuCsqDPD96WzX9Y8L1jnFjgsSL4N4W7aVUK4NPqm3z4afN8mrMiutnHC70%2BFIRdp9rQ%2BO0gqPVt%2FgUKLDKKDXG6hCdkoMAKZaWcqs0WL4%2F9GptCXTiGtwXQMCVIkp4IcdRkIaSjAdkIBRB30OSowkt30wnNoBxlJmy9I1fHCXF14yMC0L8vCVjBgiocwlCrYAopw3u3jrOaT%2FJEV71o7ZVI8%2B7Bn85qB%2FX%2BEMpeu%2FXE1aig9e45s4KXvt%2BfVYVFrDRKHpoJDNyfN6cYafIpJ8sLJYnCX3JBulNL%2Fqkd5uOvGduwNmBRbDwa4N0mTzubuvrfyOyWh7Wpbok75UTns7G8flMB04jfXWWTXHf2WL9cQHSZiI8m7MHJRTon%2Fxf3EbqTydzdwOAANYnpYQyanVLO7PnWsYlpd97yQ13z5C%2FnKeUilutqvEKQe5JaurpGLuuUBggvEnr8TZl4SHJfMkTpVK9OhQdJf3xX7e4stoHcjxIAfDPpFWg0gQaE4XhcwFdRDIvuNdkw1%2FjCyQY6pgGg9KrlDar%2Bu7oodmvJvR9r7jF9QyP82Up54bztp5SQ611PZLepKnqKppJMT94Puw7JyxrwMkwjGXguPuD1uFov41EtCsSQzNdBAKuuqA4t83y%2Fmac4ahgGTnYCoQdpuJ84ApDXJQPcMJQPCzzYkFiVzB07ff4FBVmwQVR4jKWtXVW6uEzhKIuCdDVXko87Q%2BUIJJ6QnFXfp4MYXGVHLMS3uM3eewbq&X-Amz-Signature=7e068564ea0e9bcc033364a05926ca2807f7ad9dc0810f6b9a2d8e9fd788dd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAY7OBC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBm3RPR3D8kjHYL89j62ywGog4OgkARsvcGIuogcYVs%2FAiAPXL6yHDT%2FSB6zu%2BdQpPUeOjn8oMBz1Ai%2BC%2BvWhcyYvyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM0Bh9bBeTVA%2B4tp6BKtwDCu6Qbw8NU%2FuVbJe2kyAwuqPCiZc3B%2Ffs2Y0TL47MT13ppvg2tBepOJqXIX0d1hB2%2FzoyWn7TnMIK3sewJRSXSL4uLQFo5dAsoB9YDfZ1ghF0xGzINbuCsqDPD96WzX9Y8L1jnFjgsSL4N4W7aVUK4NPqm3z4afN8mrMiutnHC70%2BFIRdp9rQ%2BO0gqPVt%2FgUKLDKKDXG6hCdkoMAKZaWcqs0WL4%2F9GptCXTiGtwXQMCVIkp4IcdRkIaSjAdkIBRB30OSowkt30wnNoBxlJmy9I1fHCXF14yMC0L8vCVjBgiocwlCrYAopw3u3jrOaT%2FJEV71o7ZVI8%2B7Bn85qB%2FX%2BEMpeu%2FXE1aig9e45s4KXvt%2BfVYVFrDRKHpoJDNyfN6cYafIpJ8sLJYnCX3JBulNL%2Fqkd5uOvGduwNmBRbDwa4N0mTzubuvrfyOyWh7Wpbok75UTns7G8flMB04jfXWWTXHf2WL9cQHSZiI8m7MHJRTon%2Fxf3EbqTydzdwOAANYnpYQyanVLO7PnWsYlpd97yQ13z5C%2FnKeUilutqvEKQe5JaurpGLuuUBggvEnr8TZl4SHJfMkTpVK9OhQdJf3xX7e4stoHcjxIAfDPpFWg0gQaE4XhcwFdRDIvuNdkw1%2FjCyQY6pgGg9KrlDar%2Bu7oodmvJvR9r7jF9QyP82Up54bztp5SQ611PZLepKnqKppJMT94Puw7JyxrwMkwjGXguPuD1uFov41EtCsSQzNdBAKuuqA4t83y%2Fmac4ahgGTnYCoQdpuJ84ApDXJQPcMJQPCzzYkFiVzB07ff4FBVmwQVR4jKWtXVW6uEzhKIuCdDVXko87Q%2BUIJJ6QnFXfp4MYXGVHLMS3uM3eewbq&X-Amz-Signature=f26c3620adb532e145279799e68e896711c5bd65969ae8e47f85ce935b546c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
