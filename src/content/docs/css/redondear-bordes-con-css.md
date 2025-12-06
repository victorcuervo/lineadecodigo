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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SB55XA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHnFOqSZBTyXeTYNY6XHuO5VDVqgD6mJqwUY17dWHnGAIgTFF3OmOJAtpegsWhS8Us1HlMihIp4zE7IzxtXaG%2B0woq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMVcoXV5GLH0rjPxSSrcAxoKxIKKyWGQfVRd4jrSsPJOyBWNWhxcIOPjFcdjXYpIgrCW8fcKjckOCG48fkB3ClJ%2BGtYtP%2BkSLJHnu6ORtuhumKz36iiswIlmcac%2FZC%2FfxNdim2nuGchhOK9UJ830c%2BV8oqcuw7kqCd%2BWcFM18%2BWWj%2FMPBqv7WvKv3K5zV9uBzM5EbWOhGMJUMkofQ6RT8wxHUoxZUa%2FmVj5H8O6zKPO5EuiUg6yGzmB%2FW9TKrw0Hzd3Q2ZGo8d0y9qa8Re3LGAJ%2BWPTU5wh2vAJlhzZO7zmgdKdvyUUmo3MY5su5eeobHwkDAUUa0YeqdYh1ravV43yOKg4QGPVgjIy8OC%2FyoTpxY8IFtS6qFLUEdy1N5jL9MvaJ7WLGCRzNbRcM%2F4emoZM%2FSn4TCZqJJRf05b6zLFlTjswKAdESOJe8%2BUod6Q0I9swjW1GoM4T2oeGkxyBSFKx4k8yOCefjtNTZGJh0ySpyhDD24HlZ%2Flvs8pSWAI7j01x3BPLxJE46BZSWNIJn3PVhYy6RFZKTnb9PV0q96m3eOJejb78MYiS%2BE4suCkJEZW9jlGZca1ukFFGgPA9byAfe%2B8BZOimaW0PttKrEH0Y3Sn4ofLxRYDm4hnQDahtE2zqAeQ47GxRFJIuEMNi8z8kGOqUB%2FrENvzKEOzsJ0I7RKH1rHHmJWD00cnfnABpweKyGQi4dxumyIhDH27IzwKHuY69zwJP724lC6W8zQLx4s%2BkNzudWDmCk%2BdNfxU4wkWFkJYF88H16b%2B6uGBHrbBfn2vNbH0WzE0s5NC3zN8Iz8bLfi7Q2x%2FCAitkEAdvyt3RJe8AEyaHxeH%2FExjaED8WKHjz5fTouoG4PtOHUFpMefdcOzuc7qWOI&X-Amz-Signature=7ac0323f3d5f69470eafc3cb39382525f7c512ac40275887940be33513d1c0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SB55XA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHnFOqSZBTyXeTYNY6XHuO5VDVqgD6mJqwUY17dWHnGAIgTFF3OmOJAtpegsWhS8Us1HlMihIp4zE7IzxtXaG%2B0woq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMVcoXV5GLH0rjPxSSrcAxoKxIKKyWGQfVRd4jrSsPJOyBWNWhxcIOPjFcdjXYpIgrCW8fcKjckOCG48fkB3ClJ%2BGtYtP%2BkSLJHnu6ORtuhumKz36iiswIlmcac%2FZC%2FfxNdim2nuGchhOK9UJ830c%2BV8oqcuw7kqCd%2BWcFM18%2BWWj%2FMPBqv7WvKv3K5zV9uBzM5EbWOhGMJUMkofQ6RT8wxHUoxZUa%2FmVj5H8O6zKPO5EuiUg6yGzmB%2FW9TKrw0Hzd3Q2ZGo8d0y9qa8Re3LGAJ%2BWPTU5wh2vAJlhzZO7zmgdKdvyUUmo3MY5su5eeobHwkDAUUa0YeqdYh1ravV43yOKg4QGPVgjIy8OC%2FyoTpxY8IFtS6qFLUEdy1N5jL9MvaJ7WLGCRzNbRcM%2F4emoZM%2FSn4TCZqJJRf05b6zLFlTjswKAdESOJe8%2BUod6Q0I9swjW1GoM4T2oeGkxyBSFKx4k8yOCefjtNTZGJh0ySpyhDD24HlZ%2Flvs8pSWAI7j01x3BPLxJE46BZSWNIJn3PVhYy6RFZKTnb9PV0q96m3eOJejb78MYiS%2BE4suCkJEZW9jlGZca1ukFFGgPA9byAfe%2B8BZOimaW0PttKrEH0Y3Sn4ofLxRYDm4hnQDahtE2zqAeQ47GxRFJIuEMNi8z8kGOqUB%2FrENvzKEOzsJ0I7RKH1rHHmJWD00cnfnABpweKyGQi4dxumyIhDH27IzwKHuY69zwJP724lC6W8zQLx4s%2BkNzudWDmCk%2BdNfxU4wkWFkJYF88H16b%2B6uGBHrbBfn2vNbH0WzE0s5NC3zN8Iz8bLfi7Q2x%2FCAitkEAdvyt3RJe8AEyaHxeH%2FExjaED8WKHjz5fTouoG4PtOHUFpMefdcOzuc7qWOI&X-Amz-Signature=55cff2664e329af9fe0e9c4242f3e941862be0fe76d9a61b710bd4d1f33dd764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
