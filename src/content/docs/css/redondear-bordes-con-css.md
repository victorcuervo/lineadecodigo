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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MSX7YFS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Hn55aHVTM0w5KnMrIVjJL3xdG0rnUh%2B6Cp0E97OS%2FAiEAohpCG9PUFGRsmhZAJIM6I%2BR8k4ewjj1WPoJs38nJ2yUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc5KNqQI6scGJcZ3CrcA3UskE1G9QVkm2lFtfF7ibj%2BmM2W%2FYO%2FqPJCyd%2FQbj%2Ba%2FlJ1MoJnc1xunOyVAL135Fq0Rok6QH%2Frtnb3CwTchteHCQUatT0x1gomVUenLbJCdmXlqcq63vKjDpjgIOruGab%2Fl6nQ8gQt%2F%2BvL%2BuAsyAPkDmRnbDQ1je47LXYULAzr1IZy142MosAdsCiGvSCRrskAaBwP3Bjjw77lMRWZGdc2%2F3q6PMdBWOpUzWm%2BOM3iRmJp8B1aZm1bpvc6Fwh7NRYEoy0TWWuLOPOueeoS5kSRLde3%2FS82ctIOEiBMm%2ByR0sMxwItSlcDFrHuW452xoVaKLWhfR3o3sx%2FCErDrhJ1iwuJb7vpoCB288Y8K1krggsIp7jP%2FoOgcYVrQMKYeT5m29twhWbH%2FDZpk3NN5iGGc8XPBlVsaZUb70etpbFF%2FsbQSn4grAAPG7me8FGMwnmyYIf0jGcAbi%2Bx8KZdtxlWUpzl%2BzZAdrRIgEez0ds7tlAV8HbbbGH642fNVKPtZpZs2USaHPRS7WgLGrXZaW6H8U8RGk7invxnPUYemgJ%2BchCPf2aQIGt7gUaeHJr9YLCl%2FgzLHLyyL9ufJiSxUF2N03ODs8scIhlx9qH1vzEKtW2pio%2BO6Y21hIvtdMPu%2B1skGOqUBT7ifjZAAD6qxzVU9cpzcXzPmF9Z1UKmYCNnj0CWpHLV4zWqiRhadH1EzD7RGProBqCXythvKrBL0p%2Bu0r%2BJiQHo8Z80EgjwayOklojtMzRGw5Gl29PzyyC3zX2Oe0qlDp8p0aEIDffar0eIPXyShABr%2B1NWpzN6uFHLyXVn0oUvbRUU40NdITJpxZuznAFgshvoJNScLjlHBvu4NW3curX1rIPey&X-Amz-Signature=7e51c3d0697fb34033b1193030616b06f91074ce10986531fbab330b49bf6a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MSX7YFS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Hn55aHVTM0w5KnMrIVjJL3xdG0rnUh%2B6Cp0E97OS%2FAiEAohpCG9PUFGRsmhZAJIM6I%2BR8k4ewjj1WPoJs38nJ2yUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc5KNqQI6scGJcZ3CrcA3UskE1G9QVkm2lFtfF7ibj%2BmM2W%2FYO%2FqPJCyd%2FQbj%2Ba%2FlJ1MoJnc1xunOyVAL135Fq0Rok6QH%2Frtnb3CwTchteHCQUatT0x1gomVUenLbJCdmXlqcq63vKjDpjgIOruGab%2Fl6nQ8gQt%2F%2BvL%2BuAsyAPkDmRnbDQ1je47LXYULAzr1IZy142MosAdsCiGvSCRrskAaBwP3Bjjw77lMRWZGdc2%2F3q6PMdBWOpUzWm%2BOM3iRmJp8B1aZm1bpvc6Fwh7NRYEoy0TWWuLOPOueeoS5kSRLde3%2FS82ctIOEiBMm%2ByR0sMxwItSlcDFrHuW452xoVaKLWhfR3o3sx%2FCErDrhJ1iwuJb7vpoCB288Y8K1krggsIp7jP%2FoOgcYVrQMKYeT5m29twhWbH%2FDZpk3NN5iGGc8XPBlVsaZUb70etpbFF%2FsbQSn4grAAPG7me8FGMwnmyYIf0jGcAbi%2Bx8KZdtxlWUpzl%2BzZAdrRIgEez0ds7tlAV8HbbbGH642fNVKPtZpZs2USaHPRS7WgLGrXZaW6H8U8RGk7invxnPUYemgJ%2BchCPf2aQIGt7gUaeHJr9YLCl%2FgzLHLyyL9ufJiSxUF2N03ODs8scIhlx9qH1vzEKtW2pio%2BO6Y21hIvtdMPu%2B1skGOqUBT7ifjZAAD6qxzVU9cpzcXzPmF9Z1UKmYCNnj0CWpHLV4zWqiRhadH1EzD7RGProBqCXythvKrBL0p%2Bu0r%2BJiQHo8Z80EgjwayOklojtMzRGw5Gl29PzyyC3zX2Oe0qlDp8p0aEIDffar0eIPXyShABr%2B1NWpzN6uFHLyXVn0oUvbRUU40NdITJpxZuznAFgshvoJNScLjlHBvu4NW3curX1rIPey&X-Amz-Signature=39ed240bda8715aa5d8fe59bee7e0385e625e86da465a947adc96050a96da4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
