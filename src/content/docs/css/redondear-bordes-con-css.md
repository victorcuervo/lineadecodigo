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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYE63IO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPvRGQY6I1GYsQczAD%2FRwVydHcS%2FxwziPBl2KLuM1IDAIgVaJXE88lLjFdJOSWiM8jSTwm8iBcSnyDW5Gs1qkQz8Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMlaMr%2BoYqQ%2F0LEntyrcA%2BCFnP6qvO6CgrK9zq%2BO9dirAqK%2Fh%2F5Dula1gKebf9Ga32Y4LhSqgt%2FmlIxp6Z6F5LxzcTqQ%2BikChgBVlpUQvRXiHqycl4iY85o4LjKrr%2BhaSvqknj5tJEQWeIUDNgleFCboP8WMsGL0YXjfhcOcTc7p0iP0uzjbg4y1g%2BgwuXPP3x6dSnEOAhOq%2BAPsKot6e38ds32tBPzGMZAfJA2xPPWfQNXWi3CKVoKy0a1WbjLm%2BTDIm61TRqfVW4RBjO2oPtR3QbErFzHRf6Ce%2B2WNUPOK3YWEB%2B3g2tcChpcsIDs9nBJVtphudYIV%2FhCKaao%2B%2BtkDuqYkYOfo9B7aKk%2BdJAWXHkL%2FMKMGMq%2F46Djnv1h%2F%2BLNuEthpPj%2BS6xYW2sDR2BBn9XP14yWLMKut4ZF%2BfYXyRYyLJmEMj9sV0Uhh7vb967VlUw3A8pd0jJkILU%2FLy7vRWDGZ38A46sN4Lcnz4mKDMfTBQn3rn%2F%2FKU8D2mr89ZMXNvERDzlVgXrvGsZbOVsD5hF%2BYUqtTbYH2Cl%2Ff1KjgF%2FhDfTguDgWvLW6RlWzd5XSncmJcq8tQUA0wATUqT7kgaLqktIR06ix9nrs%2B4PBTKk2HaJOt6daJY%2Fu7RU5ZPUNvyfCPq8N8vS6lMNCm0MkGOqUBB08BGkxBy9y%2BJ69PlKGF%2BMVNqvgXAQXi7WaY3QZpuiI8XApxVUy09sYU7kdjDPGUZZMDY2ceZxFzg2UQmxDE5%2B182zCpVpNtai6gZhegFivP%2FTrEHTd8L8eoUscGCNFrDlk%2FgNIo5Tsw7VdUM9f1EOyeCTlK1HRRRgZBId1e0l6bqNSDXGedP5rUV0pJm5wiTZlu0w30jmuG%2Bv0a8djYs0fteXpj&X-Amz-Signature=8ffae0874dcf94ae7b42545fb804df4d526efc601b4ea7d0b838da50f4a2cc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYE63IO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPvRGQY6I1GYsQczAD%2FRwVydHcS%2FxwziPBl2KLuM1IDAIgVaJXE88lLjFdJOSWiM8jSTwm8iBcSnyDW5Gs1qkQz8Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMlaMr%2BoYqQ%2F0LEntyrcA%2BCFnP6qvO6CgrK9zq%2BO9dirAqK%2Fh%2F5Dula1gKebf9Ga32Y4LhSqgt%2FmlIxp6Z6F5LxzcTqQ%2BikChgBVlpUQvRXiHqycl4iY85o4LjKrr%2BhaSvqknj5tJEQWeIUDNgleFCboP8WMsGL0YXjfhcOcTc7p0iP0uzjbg4y1g%2BgwuXPP3x6dSnEOAhOq%2BAPsKot6e38ds32tBPzGMZAfJA2xPPWfQNXWi3CKVoKy0a1WbjLm%2BTDIm61TRqfVW4RBjO2oPtR3QbErFzHRf6Ce%2B2WNUPOK3YWEB%2B3g2tcChpcsIDs9nBJVtphudYIV%2FhCKaao%2B%2BtkDuqYkYOfo9B7aKk%2BdJAWXHkL%2FMKMGMq%2F46Djnv1h%2F%2BLNuEthpPj%2BS6xYW2sDR2BBn9XP14yWLMKut4ZF%2BfYXyRYyLJmEMj9sV0Uhh7vb967VlUw3A8pd0jJkILU%2FLy7vRWDGZ38A46sN4Lcnz4mKDMfTBQn3rn%2F%2FKU8D2mr89ZMXNvERDzlVgXrvGsZbOVsD5hF%2BYUqtTbYH2Cl%2Ff1KjgF%2FhDfTguDgWvLW6RlWzd5XSncmJcq8tQUA0wATUqT7kgaLqktIR06ix9nrs%2B4PBTKk2HaJOt6daJY%2Fu7RU5ZPUNvyfCPq8N8vS6lMNCm0MkGOqUBB08BGkxBy9y%2BJ69PlKGF%2BMVNqvgXAQXi7WaY3QZpuiI8XApxVUy09sYU7kdjDPGUZZMDY2ceZxFzg2UQmxDE5%2B182zCpVpNtai6gZhegFivP%2FTrEHTd8L8eoUscGCNFrDlk%2FgNIo5Tsw7VdUM9f1EOyeCTlK1HRRRgZBId1e0l6bqNSDXGedP5rUV0pJm5wiTZlu0w30jmuG%2Bv0a8djYs0fteXpj&X-Amz-Signature=116bf515dcf95ba7bde32e04040dd298e6bd67a12916091957497421a7872e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
