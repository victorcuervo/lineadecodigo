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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTDUKYM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk1eY8ok22X40k5hNMYXMmcJicz773DTU92MhcV4upYgIhAPgTfcD9xVyjLcqcCrqf5qnX9qt7TfAj5ug99Rri%2FdmwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRGt43wZ2nrZWDMGwq3AO6din3M4FJnbc4GY9ZQwnlC23oGyMGvJn3eXyznDPHVk4za6PkfSqc653bTX%2BqwE9ps2JM7L3%2BudMz6Z1D%2B4AOz7BiO12y8SFkL4i7djkAGvzD47nPnzk%2BaJouDhUkjJAsc2laP2DJk6ii46Mz%2FbPrWSqYSNrT6XadbHUHEw8t9I51%2FL1xy66d7uf6Hy8YuBHswsUOwEiPcPL9jS0hl5TGXHIkIjTLXdEYfSGYknkdkp6Tpjf6YgIujZW2jYZn0Ggj68yQTrRlrQsi1Hm%2Bet4aZKv9%2BuEHWnjGG0tvOPHHUC%2FmqhWF%2Fyl%2Fk01aFzwIZRIZBLYPWzw8H%2FVCpkMnIUUO2UhqQcBK4JzraMNBJIroidG6CnGwI261fWknDREk9mW07YJKZv8oTtjup6EpHNcWQT3WBoug2g%2FImw3TKJHGJbtJZX28A0U5%2FL4VOWk%2B0ZEq4%2FJZhNClUjlgjdaY0Hqxd5LX09dWMsPiuxoxtbcK3YrKsDY0hymXw5%2BMrLF7WMs32VTVPgwGvJoMnm%2F88YtPuaqmfIIxJU6bfGBJ%2FafeqapdCLyRp%2F6tgv22%2FL1GG3zSVUu6%2FwnhtBvhnktP029a1T6bWg8JSxvna7AGSxaRH6T3UCXCwX1p7RfqPjCpoIvKBjqkASlnpvy%2BmZ1UtIw%2FfiItVf1ASJCzCeMK0ehRqm%2FYy%2B1fwU5hqmi%2FN8cTwKqSC0P1b0WEAj%2B7ZEsqWwgPZ1K1zjrbOIx%2FseGSTnekiCMDxFqRst2V8ruJJOi%2Fjx4j2oDvful9XsDgASxtsGfZnDCnWuVMlAQkt9jgSeUAmTeyEUTyP8y2SSZ3eOzLIBqH73%2F1kDngOZ0YoTYCcY4ybedWFjcCp6K6&X-Amz-Signature=1a32b8ef193351a814409bc64960f66fe39a2a001fea769c693b564bab3f845d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTDUKYM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk1eY8ok22X40k5hNMYXMmcJicz773DTU92MhcV4upYgIhAPgTfcD9xVyjLcqcCrqf5qnX9qt7TfAj5ug99Rri%2FdmwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRGt43wZ2nrZWDMGwq3AO6din3M4FJnbc4GY9ZQwnlC23oGyMGvJn3eXyznDPHVk4za6PkfSqc653bTX%2BqwE9ps2JM7L3%2BudMz6Z1D%2B4AOz7BiO12y8SFkL4i7djkAGvzD47nPnzk%2BaJouDhUkjJAsc2laP2DJk6ii46Mz%2FbPrWSqYSNrT6XadbHUHEw8t9I51%2FL1xy66d7uf6Hy8YuBHswsUOwEiPcPL9jS0hl5TGXHIkIjTLXdEYfSGYknkdkp6Tpjf6YgIujZW2jYZn0Ggj68yQTrRlrQsi1Hm%2Bet4aZKv9%2BuEHWnjGG0tvOPHHUC%2FmqhWF%2Fyl%2Fk01aFzwIZRIZBLYPWzw8H%2FVCpkMnIUUO2UhqQcBK4JzraMNBJIroidG6CnGwI261fWknDREk9mW07YJKZv8oTtjup6EpHNcWQT3WBoug2g%2FImw3TKJHGJbtJZX28A0U5%2FL4VOWk%2B0ZEq4%2FJZhNClUjlgjdaY0Hqxd5LX09dWMsPiuxoxtbcK3YrKsDY0hymXw5%2BMrLF7WMs32VTVPgwGvJoMnm%2F88YtPuaqmfIIxJU6bfGBJ%2FafeqapdCLyRp%2F6tgv22%2FL1GG3zSVUu6%2FwnhtBvhnktP029a1T6bWg8JSxvna7AGSxaRH6T3UCXCwX1p7RfqPjCpoIvKBjqkASlnpvy%2BmZ1UtIw%2FfiItVf1ASJCzCeMK0ehRqm%2FYy%2B1fwU5hqmi%2FN8cTwKqSC0P1b0WEAj%2B7ZEsqWwgPZ1K1zjrbOIx%2FseGSTnekiCMDxFqRst2V8ruJJOi%2Fjx4j2oDvful9XsDgASxtsGfZnDCnWuVMlAQkt9jgSeUAmTeyEUTyP8y2SSZ3eOzLIBqH73%2F1kDngOZ0YoTYCcY4ybedWFjcCp6K6&X-Amz-Signature=a457baa9f3bf2de7c200f2ebe0b91aa92c73cce1f6c4526a8de275b935ec8055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
