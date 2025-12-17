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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y3JF3XO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnyVj%2B63T%2BsXFjiZMHK8URIo8dpgoTvO12nChICw7dGAiEA1vE0PezbBjSh6g7Xw4YTkpqc6X2Ckn8T%2BeCdRliYhQwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPqzQ6o%2FSuH0gcyMircA%2BD2JLYJ5k0%2Bu3iKyJmjSw9uroH17%2FowkHzsLG6QkbYxeFsY%2BpT3MWctRINOTaHAg%2B6HRkiWo%2FY0Vm0P8V4WxIHlU%2FdwiSGkpUsAsYf7VIbVHPQgp5KMkik6%2FCR9%2B94zX2QBlLnEPovczJHYyXcWQyXBFGKXL%2BNbpE5QZ6KUmi%2Fdpi%2FpqLdfHV0dYt4RjNDLmg3FqlsITqshrvD1IfvvYhm7AHdTUI6dFcTwezWAoOUTxKTDI9v%2BooB9l4dUjJMzcCHxEzNKAGR7tWdKlF2r4Bvz1nRvyJmPtVXz7jw6wjWpTLtmOsufdplT1HQzmZwM7SGmQms6znIwo40m14pN05y6EEsLyplOAFvioddA05aUZzSoOCFYuUh0lpmBhA0XRPn9un0T4%2B0CW5vYG54AG3PFN6BqxCoipdzmniYRB%2BU0VlQzwJNcyOyoilmA68Zn6o%2BpsOB%2B2TvF8MTOjaaIRKDl0jvgf%2ByoXe2E43R8SKuviRq4GyYafNCkZ3wyh021qkGbUsL32VwQsZqrzqgCv8efbr5O%2FsE0AchpKUMrRei%2B142HeXWjmNNQbBXkg6FXEl2PnCSDLI8kzpbqV2BhEiWAwEULJ2qy2o35xsiCQXd95L7YQAHMRT5A05FHMIaLjMoGOqUBgyUYc6ttcHkGcQnYxgl5L%2F95wCdq5jFg1AjrKnIokwQCgUS7nD4v4ZYHrCtFwAP8ASWso2KhRt48TuL3LqEJOoqxmfh99x3UPdmDjU6XjdqeUCbVl%2FMIOUCqfugn%2FxpAxaLQcs%2BITFrhad5g%2BlDtRmZV6iSw%2FlIfy8H7QovIPvEB5da2MRn2M8LE2w9y5O0v52owDiJT2YjOCJklDTFoPoUGtEBr&X-Amz-Signature=30251fd59b5869ca50c6256dde4a9c96cf554b8d64b3f65b51f6ca593b0846d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y3JF3XO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnyVj%2B63T%2BsXFjiZMHK8URIo8dpgoTvO12nChICw7dGAiEA1vE0PezbBjSh6g7Xw4YTkpqc6X2Ckn8T%2BeCdRliYhQwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPqzQ6o%2FSuH0gcyMircA%2BD2JLYJ5k0%2Bu3iKyJmjSw9uroH17%2FowkHzsLG6QkbYxeFsY%2BpT3MWctRINOTaHAg%2B6HRkiWo%2FY0Vm0P8V4WxIHlU%2FdwiSGkpUsAsYf7VIbVHPQgp5KMkik6%2FCR9%2B94zX2QBlLnEPovczJHYyXcWQyXBFGKXL%2BNbpE5QZ6KUmi%2Fdpi%2FpqLdfHV0dYt4RjNDLmg3FqlsITqshrvD1IfvvYhm7AHdTUI6dFcTwezWAoOUTxKTDI9v%2BooB9l4dUjJMzcCHxEzNKAGR7tWdKlF2r4Bvz1nRvyJmPtVXz7jw6wjWpTLtmOsufdplT1HQzmZwM7SGmQms6znIwo40m14pN05y6EEsLyplOAFvioddA05aUZzSoOCFYuUh0lpmBhA0XRPn9un0T4%2B0CW5vYG54AG3PFN6BqxCoipdzmniYRB%2BU0VlQzwJNcyOyoilmA68Zn6o%2BpsOB%2B2TvF8MTOjaaIRKDl0jvgf%2ByoXe2E43R8SKuviRq4GyYafNCkZ3wyh021qkGbUsL32VwQsZqrzqgCv8efbr5O%2FsE0AchpKUMrRei%2B142HeXWjmNNQbBXkg6FXEl2PnCSDLI8kzpbqV2BhEiWAwEULJ2qy2o35xsiCQXd95L7YQAHMRT5A05FHMIaLjMoGOqUBgyUYc6ttcHkGcQnYxgl5L%2F95wCdq5jFg1AjrKnIokwQCgUS7nD4v4ZYHrCtFwAP8ASWso2KhRt48TuL3LqEJOoqxmfh99x3UPdmDjU6XjdqeUCbVl%2FMIOUCqfugn%2FxpAxaLQcs%2BITFrhad5g%2BlDtRmZV6iSw%2FlIfy8H7QovIPvEB5da2MRn2M8LE2w9y5O0v52owDiJT2YjOCJklDTFoPoUGtEBr&X-Amz-Signature=7f5d2f424e8754fb12624c26a605db8c1f8ad9188b555489acf0443a4bab8744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
