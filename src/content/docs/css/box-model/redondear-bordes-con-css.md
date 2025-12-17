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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLWVVDKS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBnNEk%2FTJqFjIctD1YasG16xcFiiZY6Q%2Fqc6hA096S7GAh8Ak%2FPfStHIRIspZeC10u6j9rUlrhJr09dX4VUWIBOuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2GCadoLYZkjxqF5Iq3AMmmvLBZCJNWGPmal%2FHYvYZBET2rOzg3IqiY0ruOasnqbveFqEcFpnHDO9C8gPNCoJPxG%2BbU0nLEq27bgWfrwdUtxFMqgv6s0J1eqt6h%2BvPsQ7SDutUj2QK2RsogDx%2FHv6Yg6Gsj01FZBgla266KT%2BXRPsVrlWy17JTGSaXUiEretkHsscvYiDeywJijDIFFfhmJxxrNdWAfbqykQAY5qhEw05fsASwDGo%2B8TzVDRYvQFU9bNHkN4pDvewYSPDBH9YMXiXI6aeMYX884MHUZM6Fvr%2BJxSjYHBWiCe7TuKQMFR%2BZYweIIYZlq0CxzH3ifW%2BB%2FOIWVTyfsq%2BRZ9yjDAfEQTx5iRpHubEsnUiKh4vxyaoI8YDPAkHbNNG8jFqcGcKciXMVqOg3SwHi%2FoCJI287MUD0BEWWTcT%2FYJUHSfW7De6OT1eQqbjWDlkQ9KXdxRQw0GVXm6GdQEzRMfzWm0TJPlYFNZeTcnyCNW%2FUKlK1S%2BiWSpoZZtEvq9sHAxDG4qw5b53hzGzoFpJUhYFN3q3s%2BC0NZva9Efj5bgr5CcgvPbsBfGZUfLfI60TiLBLX2Wm47zfz31cCwjQwkF35w7i4YjXJp7%2B1l%2F4otMAOXWMED12rNCzfsWTXIAZUWTC1n4vKBjqnAY4kUc0APtH8YS1PBWpfualR%2BTswvwAs0RdnJ3%2Bd9dCyVkMLUNAjgCCGQtm3gMyoQFN8de9I5iwf9DhXV179vs5cSx0WIBhV0WvaubuAsgBjGQV5o8eNqoQikh4MU5kYy%2BzYi26VlzADnlmDcr%2Fo%2B4WdzHTek5dCJ%2FZ5s1wgVSRdeMV3fovTP9sFHHogQ8hkG697VQAQ6lima2mKO8yWnfE5CjbRQRZh&X-Amz-Signature=ae8d621230149c71cf4f87597d689e13f8a2846dc0e59747f2fb3e02b449e960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLWVVDKS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBnNEk%2FTJqFjIctD1YasG16xcFiiZY6Q%2Fqc6hA096S7GAh8Ak%2FPfStHIRIspZeC10u6j9rUlrhJr09dX4VUWIBOuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2GCadoLYZkjxqF5Iq3AMmmvLBZCJNWGPmal%2FHYvYZBET2rOzg3IqiY0ruOasnqbveFqEcFpnHDO9C8gPNCoJPxG%2BbU0nLEq27bgWfrwdUtxFMqgv6s0J1eqt6h%2BvPsQ7SDutUj2QK2RsogDx%2FHv6Yg6Gsj01FZBgla266KT%2BXRPsVrlWy17JTGSaXUiEretkHsscvYiDeywJijDIFFfhmJxxrNdWAfbqykQAY5qhEw05fsASwDGo%2B8TzVDRYvQFU9bNHkN4pDvewYSPDBH9YMXiXI6aeMYX884MHUZM6Fvr%2BJxSjYHBWiCe7TuKQMFR%2BZYweIIYZlq0CxzH3ifW%2BB%2FOIWVTyfsq%2BRZ9yjDAfEQTx5iRpHubEsnUiKh4vxyaoI8YDPAkHbNNG8jFqcGcKciXMVqOg3SwHi%2FoCJI287MUD0BEWWTcT%2FYJUHSfW7De6OT1eQqbjWDlkQ9KXdxRQw0GVXm6GdQEzRMfzWm0TJPlYFNZeTcnyCNW%2FUKlK1S%2BiWSpoZZtEvq9sHAxDG4qw5b53hzGzoFpJUhYFN3q3s%2BC0NZva9Efj5bgr5CcgvPbsBfGZUfLfI60TiLBLX2Wm47zfz31cCwjQwkF35w7i4YjXJp7%2B1l%2F4otMAOXWMED12rNCzfsWTXIAZUWTC1n4vKBjqnAY4kUc0APtH8YS1PBWpfualR%2BTswvwAs0RdnJ3%2Bd9dCyVkMLUNAjgCCGQtm3gMyoQFN8de9I5iwf9DhXV179vs5cSx0WIBhV0WvaubuAsgBjGQV5o8eNqoQikh4MU5kYy%2BzYi26VlzADnlmDcr%2Fo%2B4WdzHTek5dCJ%2FZ5s1wgVSRdeMV3fovTP9sFHHogQ8hkG697VQAQ6lima2mKO8yWnfE5CjbRQRZh&X-Amz-Signature=0fe6ff4fd64846dfc37b1761b53946aebe8d472dfe9858d730d2e28293ed5453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
