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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHEKMJPT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJbQCK0DnvtGbeD4ynlXda%2B3NxS9gtkHkdiDQfKN4o1AiAk0J6RUm10sYTP%2BA888QXXhho9rF7Trbhr6b2EwPQSRiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS0luDR%2FpwijTNXNOKtwDwLgbskOJkzsDalfYCp1WSlwsoiss538YcFgqxzTh7mRkhBdFepgTE%2BXh2%2BB1kuKMOayiUwvT7HU7%2F2AZcJTP7VV4jQOLL%2BveiMuSe7u7VEMUSUpmbIXOXns8cnfkNnGlPNZuISnecS11%2BVG7yRlTW9huTN%2F2rg1YAo%2BpekHzbk007KqmbUVYf26SNY0r5MjsXgOklf8A9aHfZaLDQSLDsDpjARsWibQYZZZ8BvTerZx96LKO2j7G%2Ba4oZ%2BQ1qChtuil6E54VzeJTRpRdzyUIATd7E%2FPBh%2F%2BWZRaXpUmNEQhE4g96TvnSlGkb%2FFIqvC2h14ytrs1Z85FY%2B2yNlE3FB5fwXq%2B8Ddoyk8iMwFtzH%2BMXIY90xznqDCxcID%2BVoNdijJmBZ9KH3eTC70kh8I24GCFDQEFNQ4sDW5baQbYhGoL%2FCPQDxCNWVq5rjCzm29aWzWO4%2Fd%2BwfKd8yqxD6fUWyMLR1Z0ApCXARFApt%2FsdJ%2FW1ol9f59y9fSZvKiBKLgC4xnT2jCVSI%2B%2B96ozXp5nbcZ0R4FVbd0K%2Bt%2FGtx70NtGoCCmAcn0NE7eKM8GB9a3IFPyxekHnDNcTmGTcbY6Y4%2FLIuKYF8Z3ZJWQKu%2BjeA5Hs2FPDWOrK5Wgs3uKMw5v%2FcyQY6pgEADi8rFWaaR%2B6%2Bw%2Fw1eErx3FGGKeQD6yP2yBhIq6rzCZEasvuf2AbMlkcxAwtGDUUP1Qn09S6i%2BEDZIvKSMFNRIfjMMDHCtJXL%2FSU0Bz95SewDYzSH8yPAnkX8eSgi3pyw%2FZR%2BHa6kBxVU0UpsAiWIDKvPt3cajTN6e2QSANZSQfFSPSMqeM8apI8T17Bv60kO%2B9fFHKkKuFvxJnsOtd1tTuxQgvOP&X-Amz-Signature=b130cbb2699b7531d5684250b3c30c4457b3e911d12c6c1cb8f857d33a78a99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHEKMJPT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJbQCK0DnvtGbeD4ynlXda%2B3NxS9gtkHkdiDQfKN4o1AiAk0J6RUm10sYTP%2BA888QXXhho9rF7Trbhr6b2EwPQSRiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS0luDR%2FpwijTNXNOKtwDwLgbskOJkzsDalfYCp1WSlwsoiss538YcFgqxzTh7mRkhBdFepgTE%2BXh2%2BB1kuKMOayiUwvT7HU7%2F2AZcJTP7VV4jQOLL%2BveiMuSe7u7VEMUSUpmbIXOXns8cnfkNnGlPNZuISnecS11%2BVG7yRlTW9huTN%2F2rg1YAo%2BpekHzbk007KqmbUVYf26SNY0r5MjsXgOklf8A9aHfZaLDQSLDsDpjARsWibQYZZZ8BvTerZx96LKO2j7G%2Ba4oZ%2BQ1qChtuil6E54VzeJTRpRdzyUIATd7E%2FPBh%2F%2BWZRaXpUmNEQhE4g96TvnSlGkb%2FFIqvC2h14ytrs1Z85FY%2B2yNlE3FB5fwXq%2B8Ddoyk8iMwFtzH%2BMXIY90xznqDCxcID%2BVoNdijJmBZ9KH3eTC70kh8I24GCFDQEFNQ4sDW5baQbYhGoL%2FCPQDxCNWVq5rjCzm29aWzWO4%2Fd%2BwfKd8yqxD6fUWyMLR1Z0ApCXARFApt%2FsdJ%2FW1ol9f59y9fSZvKiBKLgC4xnT2jCVSI%2B%2B96ozXp5nbcZ0R4FVbd0K%2Bt%2FGtx70NtGoCCmAcn0NE7eKM8GB9a3IFPyxekHnDNcTmGTcbY6Y4%2FLIuKYF8Z3ZJWQKu%2BjeA5Hs2FPDWOrK5Wgs3uKMw5v%2FcyQY6pgEADi8rFWaaR%2B6%2Bw%2Fw1eErx3FGGKeQD6yP2yBhIq6rzCZEasvuf2AbMlkcxAwtGDUUP1Qn09S6i%2BEDZIvKSMFNRIfjMMDHCtJXL%2FSU0Bz95SewDYzSH8yPAnkX8eSgi3pyw%2FZR%2BHa6kBxVU0UpsAiWIDKvPt3cajTN6e2QSANZSQfFSPSMqeM8apI8T17Bv60kO%2B9fFHKkKuFvxJnsOtd1tTuxQgvOP&X-Amz-Signature=cba1a3607a03c0fcbdc654945cb43e7ceb48af7e53954544e45f0cd5f4c934cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
