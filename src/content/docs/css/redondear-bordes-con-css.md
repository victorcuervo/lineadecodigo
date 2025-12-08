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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZILKUUEJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2F0lD7yev6mkBJYWwu2gYDZcPVSfi%2Fdi0tzR%2BTV%2BLHAIgC30ugtCaHQwBaxM5o9crJ5ypxi4GB1zFUww1RvZLJeUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt5yKU4zMPaYzWMCyrcA5j1QCWaLGEoTaClgBXZZH7OCoMnCEo0U0uu8c%2FwpFAYNgiDQh1GH%2BBs9DL%2BaYNNdGuUVnU1l%2FUKgWhr5oxQDd4EqBmvVTe3YpaE5eBafVp8aUdOKzEq6ZncD3Fh9xtpLOsdR%2BH%2FUEP0T9kr8uMgaFt0WypqMEZ1J9nbWeBAVkzRcXdE91TFeSjY1WqVw1U5xg9SVT%2BnxlDkw%2Fl%2B%2FxZVZhm22J%2B5ABKe1rHWPgt64qTKG7xXxmXqgk5TNEmrccskjIn0AL5LohWVU4IMhi61JZ8o6p8ywY7R7FhbKXs%2BYgEzPtqgh7%2BqZcoz64vLXbMw8VrZG9xmj%2ButP1ROf%2BQBth6%2Fsf%2FrFnNSTv8xjoz%2Fode%2FVF2N03rOwErBv1TJ%2FuKrOPB8ksCADd%2FEJKeQXMcEoMgIQGWZJJw654QzPZQ6SDibP4iiZIcPx2bJl%2BMwOYU4gg1NGc%2FW%2FsYCpLeoJr9oFplJ4gO1I5Xtl4Xb4s7UW5Lx8%2F0nmH60Sou4GRFrbCQc3ac6nT9cHbKAFPJoilh7%2BKReQBKqRr3ZxIdeUZFA6OI0SKjxi%2BeXvrPJoEO%2Fdu%2Fg85wfB9YXEGKXvnn0dkRoAaDpyY2YEeIOC01Dbr9%2FAeMbwvTKYkiU1Br%2FLTkEMPnB28kGOqUBr8EBpaMREYvDVV2yjr%2BJSvbNV1yV%2FRxgTf07%2BQCCms18BaH%2BCK0e4MmHW9QZczmQ5DtpvDQchVE93uITCnSjL3KjjLxl74OBuE%2BFI7FMP9FtF0dtOuC19dvRarAYOlxBDTmlBnJbzvmO8fXiikefKBdfC%2FhZrqeFV1Nxr9WWzXDwMdHmzIbr56QjCdg6U4tfT1j8o01chjjVT9u4XnxrphcyALkS&X-Amz-Signature=023fe798aca2e505cddb2562de64f05bd5a55bbf3904e2795085937e1a1cb942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZILKUUEJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2F0lD7yev6mkBJYWwu2gYDZcPVSfi%2Fdi0tzR%2BTV%2BLHAIgC30ugtCaHQwBaxM5o9crJ5ypxi4GB1zFUww1RvZLJeUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt5yKU4zMPaYzWMCyrcA5j1QCWaLGEoTaClgBXZZH7OCoMnCEo0U0uu8c%2FwpFAYNgiDQh1GH%2BBs9DL%2BaYNNdGuUVnU1l%2FUKgWhr5oxQDd4EqBmvVTe3YpaE5eBafVp8aUdOKzEq6ZncD3Fh9xtpLOsdR%2BH%2FUEP0T9kr8uMgaFt0WypqMEZ1J9nbWeBAVkzRcXdE91TFeSjY1WqVw1U5xg9SVT%2BnxlDkw%2Fl%2B%2FxZVZhm22J%2B5ABKe1rHWPgt64qTKG7xXxmXqgk5TNEmrccskjIn0AL5LohWVU4IMhi61JZ8o6p8ywY7R7FhbKXs%2BYgEzPtqgh7%2BqZcoz64vLXbMw8VrZG9xmj%2ButP1ROf%2BQBth6%2Fsf%2FrFnNSTv8xjoz%2Fode%2FVF2N03rOwErBv1TJ%2FuKrOPB8ksCADd%2FEJKeQXMcEoMgIQGWZJJw654QzPZQ6SDibP4iiZIcPx2bJl%2BMwOYU4gg1NGc%2FW%2FsYCpLeoJr9oFplJ4gO1I5Xtl4Xb4s7UW5Lx8%2F0nmH60Sou4GRFrbCQc3ac6nT9cHbKAFPJoilh7%2BKReQBKqRr3ZxIdeUZFA6OI0SKjxi%2BeXvrPJoEO%2Fdu%2Fg85wfB9YXEGKXvnn0dkRoAaDpyY2YEeIOC01Dbr9%2FAeMbwvTKYkiU1Br%2FLTkEMPnB28kGOqUBr8EBpaMREYvDVV2yjr%2BJSvbNV1yV%2FRxgTf07%2BQCCms18BaH%2BCK0e4MmHW9QZczmQ5DtpvDQchVE93uITCnSjL3KjjLxl74OBuE%2BFI7FMP9FtF0dtOuC19dvRarAYOlxBDTmlBnJbzvmO8fXiikefKBdfC%2FhZrqeFV1Nxr9WWzXDwMdHmzIbr56QjCdg6U4tfT1j8o01chjjVT9u4XnxrphcyALkS&X-Amz-Signature=94c87fb00b20517ac5ec0d8fb725d1dccee91962b35bab6ca5733e2bdcc4406c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
