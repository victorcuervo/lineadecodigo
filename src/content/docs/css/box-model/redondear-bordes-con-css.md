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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSWEBBG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkSxzq0%2BmC5b7tvGQJ2U6TtKGTPMRXPUchqwtACNY1AiEAtGXye7iaIxelA3jbL0y3%2BmMJXAiV3qZgKQdhRo1tCmwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO6qiSAAaJE%2B%2BKLDRyrcA%2B9%2FJCQqAHzqSwsWDXGTMIjctWvBHQozT543tdFiSOl%2BsL1DM%2FOyOSgWZs%2FCsQkMnvjhFpA1KHS6nZI%2BfmbUR789mIiUwxQABjtueeJv%2BaYUVXVqFnvo2CLFh9U376MbEnflpwl51Gia1ZLYIAaK9RZa1TK1r0PkIsi2MDnh80zXVNkr4iob3vvZyFLb2Jxs6hlNzmF4VybR2zLWfilobeGiT2i%2BR0t0Oy5lFar%2BugCiLBkqtQvpmIWqqSZEwvovhKIn9C2A4QWJEocdJKrBSDkDRHsm1Nr14Eim3Hb4sd0U%2BhUcrJj4LvKuX9IoQkCq0QUdjHKg0YPxMRbxDcpebJpMkzISyBzP%2Blz7YUbWx%2BYTr9GFgMZF%2FOOWOrz%2F4jpv3mN8VRbBs7zmV%2B8WufAfSzJxBqWRPHwAJ43y4Jo2StR5TKNIwpGGH5828equRduq8kk9L%2FFJla06xmYsrnVAzD78IDoQfULwZ4EW%2B486cqkpYNUbNwr3ver2BXqCnhMsmTC2ZJo6qVYDI4AqQM%2Fw8axK5iMZBvX53GVdrXybMK%2BP7L23Ffxw2Y%2FaFYnB%2F8NMvgmX1CoqxQSCNUqp8nbWu%2FRhu%2Bwfe%2FHhIzcKwsZ7gJd2LlNf%2FeG0r6OSr4ByMImziMoGOqUBMlVVq9FV3ySMPFSazJtj9CDFy%2FE4UTiqCfNPbF%2FxvB8aH%2BXYrP1MYK7gHib5lozJZfxvD7TKWFAhApxIe09jtti71hk%2Bf%2Fx5t9TYx5FSEnxFBYvQ3w5Gr0k7hySDpx3oV3Z27Bc3tim5kUeGZ11evXUiYGjMeIaQzpuyFjjOZSz%2Bj12mJtZ1yxlv21Q3iB6wkuHwZ8U0%2BnQBEAKni1IN80yYGqId&X-Amz-Signature=dd674530e461f08753517da47b467d5f45b0637a454ca9690b50cd46207258d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSWEBBG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkSxzq0%2BmC5b7tvGQJ2U6TtKGTPMRXPUchqwtACNY1AiEAtGXye7iaIxelA3jbL0y3%2BmMJXAiV3qZgKQdhRo1tCmwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO6qiSAAaJE%2B%2BKLDRyrcA%2B9%2FJCQqAHzqSwsWDXGTMIjctWvBHQozT543tdFiSOl%2BsL1DM%2FOyOSgWZs%2FCsQkMnvjhFpA1KHS6nZI%2BfmbUR789mIiUwxQABjtueeJv%2BaYUVXVqFnvo2CLFh9U376MbEnflpwl51Gia1ZLYIAaK9RZa1TK1r0PkIsi2MDnh80zXVNkr4iob3vvZyFLb2Jxs6hlNzmF4VybR2zLWfilobeGiT2i%2BR0t0Oy5lFar%2BugCiLBkqtQvpmIWqqSZEwvovhKIn9C2A4QWJEocdJKrBSDkDRHsm1Nr14Eim3Hb4sd0U%2BhUcrJj4LvKuX9IoQkCq0QUdjHKg0YPxMRbxDcpebJpMkzISyBzP%2Blz7YUbWx%2BYTr9GFgMZF%2FOOWOrz%2F4jpv3mN8VRbBs7zmV%2B8WufAfSzJxBqWRPHwAJ43y4Jo2StR5TKNIwpGGH5828equRduq8kk9L%2FFJla06xmYsrnVAzD78IDoQfULwZ4EW%2B486cqkpYNUbNwr3ver2BXqCnhMsmTC2ZJo6qVYDI4AqQM%2Fw8axK5iMZBvX53GVdrXybMK%2BP7L23Ffxw2Y%2FaFYnB%2F8NMvgmX1CoqxQSCNUqp8nbWu%2FRhu%2Bwfe%2FHhIzcKwsZ7gJd2LlNf%2FeG0r6OSr4ByMImziMoGOqUBMlVVq9FV3ySMPFSazJtj9CDFy%2FE4UTiqCfNPbF%2FxvB8aH%2BXYrP1MYK7gHib5lozJZfxvD7TKWFAhApxIe09jtti71hk%2Bf%2Fx5t9TYx5FSEnxFBYvQ3w5Gr0k7hySDpx3oV3Z27Bc3tim5kUeGZ11evXUiYGjMeIaQzpuyFjjOZSz%2Bj12mJtZ1yxlv21Q3iB6wkuHwZ8U0%2BnQBEAKni1IN80yYGqId&X-Amz-Signature=684e403c96db745fdccaf2c46454a25e2a91451decddd40db54fb35cb0deca61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
