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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4G5TIEE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo1XQofXz%2ByfsLPhwAjcmbSeXnzPVbmJJDW1Vq2XU90AiB1hxi%2BqQKUz%2B50ctR4tHQQhY1Fj3a7H5qZvIkyK5SwXCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41ODolDCONyeLvE4KtwDN4O0OOh1%2BdlxtBFWUn4Hy6HOVIKEuRIZ3vGonaYXr2btq3fiKSMLHaL2RBkepsdNOgHW7xyjHBTdNGst1gm3BEAtiZK5eut2qGyFNVTq2iZHkUcLozy0b2Uee%2F2humTB%2BuLrVAiBAu2u8m%2Bgip4Nz%2FrTxZO%2BNzx72%2BXZvsirgWcMIoNHVa264%2FHQQKZHv0RJqRGwK5S%2B%2FGsy7%2FFMhh%2FkWfrK0OplxKUBRajbSqD%2BFXo%2BSP5QLLwWPu7Dnxt4fCF4sEgUri7DyKyVKo8ihpAn2ynjs%2BSWHj%2Bem8rQiUgXu4pGLU5suQZd8pZnDAev1D2z%2BJR7WG23wG8isLjlsri1Du%2B61Ga0n4Db5CWnhrolrb%2BuC1cUnGPHKi8uGijOKAfo1ojiDEShLOYUDuGxxMhX7wXO%2Bh%2F83rte3unj%2FNLNaeV0jwViwIO0AhziXFLt6spoqamneixQQXJZ7AvMqyHOUtjtYH%2FW%2FqMpBB6vsmTmdgKSkYhdwzJH2rFtP%2Fx6XFgZ%2B%2F%2B52x4lRIoPI69rEUX3HFkGbd4my2S6q3UVz1TNNlD8hFdapLGbeVaqJtfp2IYnkZ6NFDcrXOw2OORFmgw9FrMfm5N3E218LCfeVJDnMUvG3jTNLBNDxTZD6ZYw2%2F%2BKygY6pgGQdP7ahZB7iT1Op6eNC%2BXki1E8KsRcG2p8pmRsJXpaCM0tmcGxmDJjKtECwqUiPITD9zRCEMn1rDUt50gyA35L570uOgncfv9XCY3JeHVxHtAIT7EVtQxQ%2BdOVhv97TWUVZ7TRd%2FljHPEj3FaAu5p6O2dAxp%2BVZTqxOXOHXM69urfMOe0E8Sx9a5Dj%2B3Zpg4rUTfFO6lAcm0WS%2B%2BmQR5gDB7JSlDeI&X-Amz-Signature=5223974725b75e65b599ce89d1f21175e731eb22dff7b78d3bd648c743c46992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4G5TIEE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo1XQofXz%2ByfsLPhwAjcmbSeXnzPVbmJJDW1Vq2XU90AiB1hxi%2BqQKUz%2B50ctR4tHQQhY1Fj3a7H5qZvIkyK5SwXCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41ODolDCONyeLvE4KtwDN4O0OOh1%2BdlxtBFWUn4Hy6HOVIKEuRIZ3vGonaYXr2btq3fiKSMLHaL2RBkepsdNOgHW7xyjHBTdNGst1gm3BEAtiZK5eut2qGyFNVTq2iZHkUcLozy0b2Uee%2F2humTB%2BuLrVAiBAu2u8m%2Bgip4Nz%2FrTxZO%2BNzx72%2BXZvsirgWcMIoNHVa264%2FHQQKZHv0RJqRGwK5S%2B%2FGsy7%2FFMhh%2FkWfrK0OplxKUBRajbSqD%2BFXo%2BSP5QLLwWPu7Dnxt4fCF4sEgUri7DyKyVKo8ihpAn2ynjs%2BSWHj%2Bem8rQiUgXu4pGLU5suQZd8pZnDAev1D2z%2BJR7WG23wG8isLjlsri1Du%2B61Ga0n4Db5CWnhrolrb%2BuC1cUnGPHKi8uGijOKAfo1ojiDEShLOYUDuGxxMhX7wXO%2Bh%2F83rte3unj%2FNLNaeV0jwViwIO0AhziXFLt6spoqamneixQQXJZ7AvMqyHOUtjtYH%2FW%2FqMpBB6vsmTmdgKSkYhdwzJH2rFtP%2Fx6XFgZ%2B%2F%2B52x4lRIoPI69rEUX3HFkGbd4my2S6q3UVz1TNNlD8hFdapLGbeVaqJtfp2IYnkZ6NFDcrXOw2OORFmgw9FrMfm5N3E218LCfeVJDnMUvG3jTNLBNDxTZD6ZYw2%2F%2BKygY6pgGQdP7ahZB7iT1Op6eNC%2BXki1E8KsRcG2p8pmRsJXpaCM0tmcGxmDJjKtECwqUiPITD9zRCEMn1rDUt50gyA35L570uOgncfv9XCY3JeHVxHtAIT7EVtQxQ%2BdOVhv97TWUVZ7TRd%2FljHPEj3FaAu5p6O2dAxp%2BVZTqxOXOHXM69urfMOe0E8Sx9a5Dj%2B3Zpg4rUTfFO6lAcm0WS%2B%2BmQR5gDB7JSlDeI&X-Amz-Signature=234b5e10a08982133460fe1479e533d39edb655ec612f38a015d96aaffbf90fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
