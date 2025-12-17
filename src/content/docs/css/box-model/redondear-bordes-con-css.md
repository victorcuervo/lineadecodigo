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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS4A245%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdA%2FmU6CHLm1KrWE%2BG%2FXNBwkHWRp757AkkEIkwfDJxvgIgTNEHcMCa6ULuXQoKbOpmtYx%2F11uZzU3OJ2Kc6L8nofcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEhnkwC9Hgr0E21CQCrcA170atT%2F9GqEac%2F9aiAAwSgA8BrOW5WTd3etUHfrexMiEs41bSKLDDH%2FRwaLrQN3kc%2FNhm8laB%2FiiZI1D8Whmp8rGGgegOQsBOkW9hYDJAfN0kLqtKlFptThaPCsKCxXMCr6vcGt7PyxMAVmVWnf3Y8x4fuM4WCCM82asrcY8HqXmrb9uhS3yJqWOFgtwPyUWoHGUQxcY8tZ9bFgGc1tH3f7J5YAEedD6bKLgjQRUPMGHLZKCjfCs%2BbZh%2B6LsfJXM26LXUKtH8gc7I9q89441a%2FTScXahV5AVcXqHwrsoK%2B40nrTRjJ9j3tXKHoUdpm03XegF6G7fzPfuOg%2BefGot%2BY5GjkdEbrY3MiFbQ9DtnG%2BIr6Ed55e8rZwh59X2tuZyWV0YKoYCMgyOcCZ%2BwQqvv1CBWV6MGe%2B8zrKfqx%2BFQYeevi72FXQbZ8vDxTO4FlczO%2Bti4hFMHDGLrGi5ydA0uyLKnnMpCxaevsifSaBu0qvwrtqoIMs%2Brn2DOrNVFGKUx0Momw0EcDbIJi0piD50F0TsqyPEuKmz0PH0Vkaz6CjwFfb%2ByiEPDqaKXJMY5Yy2bLKI97pVivRRepelcvaRsOUL9xvGUaLZe1Zo%2FtHvcr9KDOlwqrYkfwhU2koMLreh8oGOqUBwJmmaZu7mRXY1tZpZDbu4N132S%2BH34SovRyLusNZYO4rm1ECvkUS%2B3RLcdcsk5d3U25UdzC2fZ6xeGIytbs%2F4NTh2R6D0LdwcCGK9%2Fwk2p4KBP5Y4XjPlrEGiE9FQVSCSmZMJ%2Fky3Qv0hWD6HcJ51sTuXVaLRlDLAqTae%2FC3K3kMhU%2FMPp8nXDcKuIo9Vh2%2B9PuL%2FJ%2BOZ6j%2BsJebcgc%2FeQKOEe32&X-Amz-Signature=66a3d63b6fee1e78d7d47ab968c121c3c931af361d25da534b375fe384fec57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS4A245%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdA%2FmU6CHLm1KrWE%2BG%2FXNBwkHWRp757AkkEIkwfDJxvgIgTNEHcMCa6ULuXQoKbOpmtYx%2F11uZzU3OJ2Kc6L8nofcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEhnkwC9Hgr0E21CQCrcA170atT%2F9GqEac%2F9aiAAwSgA8BrOW5WTd3etUHfrexMiEs41bSKLDDH%2FRwaLrQN3kc%2FNhm8laB%2FiiZI1D8Whmp8rGGgegOQsBOkW9hYDJAfN0kLqtKlFptThaPCsKCxXMCr6vcGt7PyxMAVmVWnf3Y8x4fuM4WCCM82asrcY8HqXmrb9uhS3yJqWOFgtwPyUWoHGUQxcY8tZ9bFgGc1tH3f7J5YAEedD6bKLgjQRUPMGHLZKCjfCs%2BbZh%2B6LsfJXM26LXUKtH8gc7I9q89441a%2FTScXahV5AVcXqHwrsoK%2B40nrTRjJ9j3tXKHoUdpm03XegF6G7fzPfuOg%2BefGot%2BY5GjkdEbrY3MiFbQ9DtnG%2BIr6Ed55e8rZwh59X2tuZyWV0YKoYCMgyOcCZ%2BwQqvv1CBWV6MGe%2B8zrKfqx%2BFQYeevi72FXQbZ8vDxTO4FlczO%2Bti4hFMHDGLrGi5ydA0uyLKnnMpCxaevsifSaBu0qvwrtqoIMs%2Brn2DOrNVFGKUx0Momw0EcDbIJi0piD50F0TsqyPEuKmz0PH0Vkaz6CjwFfb%2ByiEPDqaKXJMY5Yy2bLKI97pVivRRepelcvaRsOUL9xvGUaLZe1Zo%2FtHvcr9KDOlwqrYkfwhU2koMLreh8oGOqUBwJmmaZu7mRXY1tZpZDbu4N132S%2BH34SovRyLusNZYO4rm1ECvkUS%2B3RLcdcsk5d3U25UdzC2fZ6xeGIytbs%2F4NTh2R6D0LdwcCGK9%2Fwk2p4KBP5Y4XjPlrEGiE9FQVSCSmZMJ%2Fky3Qv0hWD6HcJ51sTuXVaLRlDLAqTae%2FC3K3kMhU%2FMPp8nXDcKuIo9Vh2%2B9PuL%2FJ%2BOZ6j%2BsJebcgc%2FeQKOEe32&X-Amz-Signature=2778fed597c3d9b73be5d6551972e19b498c981f9383af18e8957f8516f3855c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
