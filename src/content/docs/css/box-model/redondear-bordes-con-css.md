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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUPTYVEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxgo%2FnGMtwZxvJP2lmCU9ok%2F6zB4cAUAcHyU0EDincdAIgY695hwk7liZAoUUP9lL%2BM9U9I2Orhdy89XCuju4pT%2F4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIaBSgzkwIFfeCQyUCrcA%2FY1hQjdgTfIZ2cjHnDj0iBA87j74hOAOpOvDrFeXE9%2FbIloLNC%2Fzb744qyEmdYqQHVaFHanCP%2FVaG0Ha1%2BLJNZGcemt%2BVqPEJoESaueCWsWsT5bQPNucB9PjzlSiH6kE7cseOKLtx73LmkzRPOFEekef60gy4cfvcSVlkjweP3UdCljInjmO5YZ086DV0P8twcRtt8MkEhGQKVtpQ8%2BfIPUaNA%2BxkW8pHffdEQAeN%2ByD9jlcKG4ZoBphs1wI5GtKedbzFaLMcZNiOMOuu58NxgJ0DqWzI9AXiFdCGqPy1zdNXd4zozP%2FrhC03oYl5LKFsRl%2FEkxYOWJMIEZtVq%2FZSlpX5CWWf3ad%2BR3myNVs5Tmk1bx3wYNePoKzWvl0AWJJi0xjvEi2ydzmWHaXI44hSFgPXDgeMFPARdQd3I6Uk3bOuVHqZ7Kd5PlUl9gz2DqAC2URyR6a1SFsjzKtUtBb0nh8Ac34Qx64kYFE1mYyZGhgtnUBsxEUO8atnSae0Zn3CT7Sv4dz8VLGSoemVEe7aXWkEvQVSLp0ikTXbksnxTbbcx6Nhg4xa76lS2wLOLrYI%2BxUCQpa74CbHBEj96OD7oJJJh%2B117FLs4hwZhHMHuMp6r5baWj%2Ba3K4M2TMMHpiMoGOqUBQ2a0ZBEF%2FfdJm0N6SSYVAjDikoZmmE9N2YAmRaKPM4XSnH9vFnycJOCL%2BIe8DoESIAMnfAoFmowFnWcVUIXVFtyUulIhrsQ13FZKe27n6XHoPrB9kjXiBSu67cjnqsgeJGoQk61sbjCHLcOaeNqGTBvgKrKzc9XPgOfjx7KhIkzlzjW7vweLxm%2FWoARR3c4l43jjPWCALl9%2BXtM7zI2LdxpWEMAU&X-Amz-Signature=5d61f12babf4da92830b0bfad7da69edb545e00205bcdbdb1176f061c891e36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUPTYVEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxgo%2FnGMtwZxvJP2lmCU9ok%2F6zB4cAUAcHyU0EDincdAIgY695hwk7liZAoUUP9lL%2BM9U9I2Orhdy89XCuju4pT%2F4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIaBSgzkwIFfeCQyUCrcA%2FY1hQjdgTfIZ2cjHnDj0iBA87j74hOAOpOvDrFeXE9%2FbIloLNC%2Fzb744qyEmdYqQHVaFHanCP%2FVaG0Ha1%2BLJNZGcemt%2BVqPEJoESaueCWsWsT5bQPNucB9PjzlSiH6kE7cseOKLtx73LmkzRPOFEekef60gy4cfvcSVlkjweP3UdCljInjmO5YZ086DV0P8twcRtt8MkEhGQKVtpQ8%2BfIPUaNA%2BxkW8pHffdEQAeN%2ByD9jlcKG4ZoBphs1wI5GtKedbzFaLMcZNiOMOuu58NxgJ0DqWzI9AXiFdCGqPy1zdNXd4zozP%2FrhC03oYl5LKFsRl%2FEkxYOWJMIEZtVq%2FZSlpX5CWWf3ad%2BR3myNVs5Tmk1bx3wYNePoKzWvl0AWJJi0xjvEi2ydzmWHaXI44hSFgPXDgeMFPARdQd3I6Uk3bOuVHqZ7Kd5PlUl9gz2DqAC2URyR6a1SFsjzKtUtBb0nh8Ac34Qx64kYFE1mYyZGhgtnUBsxEUO8atnSae0Zn3CT7Sv4dz8VLGSoemVEe7aXWkEvQVSLp0ikTXbksnxTbbcx6Nhg4xa76lS2wLOLrYI%2BxUCQpa74CbHBEj96OD7oJJJh%2B117FLs4hwZhHMHuMp6r5baWj%2Ba3K4M2TMMHpiMoGOqUBQ2a0ZBEF%2FfdJm0N6SSYVAjDikoZmmE9N2YAmRaKPM4XSnH9vFnycJOCL%2BIe8DoESIAMnfAoFmowFnWcVUIXVFtyUulIhrsQ13FZKe27n6XHoPrB9kjXiBSu67cjnqsgeJGoQk61sbjCHLcOaeNqGTBvgKrKzc9XPgOfjx7KhIkzlzjW7vweLxm%2FWoARR3c4l43jjPWCALl9%2BXtM7zI2LdxpWEMAU&X-Amz-Signature=6b3a67fb1890f77215357ef1cfecc8bd129e6e571d524281036d4c4fe41f3c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
