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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZ7GQ34%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FdRXrJWK9ZbFnYCYfEU6aR5CkkrtznwMSp07St6vrVAiEAtRIdwXkKxRlGgjeP6F%2BtbdC7BdfyCKO6o9v2I9rk62cq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHo%2FUVyBQN8ky2HDmCrcA8Z%2Bg5j0Qr9ox2xkPmHwq0OQkmO7gV6NMnjGCZmwaL4BcS6lrZXAXwkl1bc5E9%2FtRtO9pUgkGU14lOFknTrTuXykBFT1819bGUETPvoAHUX0qYV4On9rxd%2FNXLQ%2BxT%2FsHcKrmDY7NxWG%2F4qYvYHaEW9e4ehc1dkpu94jycadvn2s4wYMI60lWabTJVebH%2F0TxoECM8BK8YuRfyg6XkwXVzCiDx5edPLwnaL2JbiBJPBlIgRBkFP6O%2FZ6bzNMSsQOk5sFl0tQVJeABsN1TGl%2Fx89DmNQA4gukNs4i2Fg78lIqcw5A5qur01KrgjBjv0rQ0HutRhhmRDfZj4IwoIBGlk8bTEncPuYPeNPt50NIKIPddRU%2F%2F2NaoENIeqv%2BFpZjRZFKlpjhcASIfhLw1BsvIbx32ygdDPm8lLZuFydYc4ylgklbOml%2FoGrFrSdh3wjeST%2FFvaDucPmVYY6vZRchOsxTF0eMlKYV5IJgiPqz2sQPZJZq8r7Q9qntJbaUgNUqCu2BHgoXoqWlhWWPtpv52ThPRH1mwahwU1R6yLDOiT%2F1U28YgQMmFSiwi%2BzMplH28D1NYyjYqkcxOs9%2B%2By3NpWPFOrkPgj5PAOkWpm78MIJ71fUvA5salrS2G2LoMJ3rz8kGOqUBrctPXOn6j382cxli1nkaeLce9dl0I6LQ3yvhoNKYpK%2BXz8SGZcaBMdV5lzzJ%2FWjv8RboLpbjjmdL%2BXJGCWNWiH5GWUzYb2Olguq7%2B9pGHIBPoGy72y9%2FhdieUPvD4Sg5f30HXZ6fht6N3qG0JVnzBRTdp%2FUaMi700Paz0aUYrpyk%2BHMIuFfTIN2AW3wPOOQ208jmXNLssTW%2Bat9nkQwcw6%2FcLCFy&X-Amz-Signature=7a67d186a51f3a9cec7f3029cc0e634d486d7f0a35e31fe647baa1af999ed6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZ7GQ34%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FdRXrJWK9ZbFnYCYfEU6aR5CkkrtznwMSp07St6vrVAiEAtRIdwXkKxRlGgjeP6F%2BtbdC7BdfyCKO6o9v2I9rk62cq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHo%2FUVyBQN8ky2HDmCrcA8Z%2Bg5j0Qr9ox2xkPmHwq0OQkmO7gV6NMnjGCZmwaL4BcS6lrZXAXwkl1bc5E9%2FtRtO9pUgkGU14lOFknTrTuXykBFT1819bGUETPvoAHUX0qYV4On9rxd%2FNXLQ%2BxT%2FsHcKrmDY7NxWG%2F4qYvYHaEW9e4ehc1dkpu94jycadvn2s4wYMI60lWabTJVebH%2F0TxoECM8BK8YuRfyg6XkwXVzCiDx5edPLwnaL2JbiBJPBlIgRBkFP6O%2FZ6bzNMSsQOk5sFl0tQVJeABsN1TGl%2Fx89DmNQA4gukNs4i2Fg78lIqcw5A5qur01KrgjBjv0rQ0HutRhhmRDfZj4IwoIBGlk8bTEncPuYPeNPt50NIKIPddRU%2F%2F2NaoENIeqv%2BFpZjRZFKlpjhcASIfhLw1BsvIbx32ygdDPm8lLZuFydYc4ylgklbOml%2FoGrFrSdh3wjeST%2FFvaDucPmVYY6vZRchOsxTF0eMlKYV5IJgiPqz2sQPZJZq8r7Q9qntJbaUgNUqCu2BHgoXoqWlhWWPtpv52ThPRH1mwahwU1R6yLDOiT%2F1U28YgQMmFSiwi%2BzMplH28D1NYyjYqkcxOs9%2B%2By3NpWPFOrkPgj5PAOkWpm78MIJ71fUvA5salrS2G2LoMJ3rz8kGOqUBrctPXOn6j382cxli1nkaeLce9dl0I6LQ3yvhoNKYpK%2BXz8SGZcaBMdV5lzzJ%2FWjv8RboLpbjjmdL%2BXJGCWNWiH5GWUzYb2Olguq7%2B9pGHIBPoGy72y9%2FhdieUPvD4Sg5f30HXZ6fht6N3qG0JVnzBRTdp%2FUaMi700Paz0aUYrpyk%2BHMIuFfTIN2AW3wPOOQ208jmXNLssTW%2Bat9nkQwcw6%2FcLCFy&X-Amz-Signature=238a107454be870b57dc6266db3ec374674822b024e0df1bc437081e6b7fd508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
