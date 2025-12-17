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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IL723CG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjLJDed5emAsmB4aTS6qDJFLJi%2BkgMaMEHypuiMhWnIQIgcAH6inaz3bwgeaufHplnKd8FlChCswWrCcPbcJK1dCUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMbUD1U8qObvxqZ4dircA3HqvEfEmOKfczoNh92KE8aFe19mpRLPa2K6pPRWyx03CkEEFiLDHnSLKZsIAVzTevMHRz5eHBJDIorNYkMDEc57E%2FBepyQJxBw28K5BNUC0nnLcn07TgGkb9q2nsY1K3OJ15arS%2FV9%2FXunBSXefNWP%2BkJ6o5LgonJTzuxeICCVNQyoVji65bF53PFwfSHysIqj0VOls6Y%2FywzChWQHkrCITaEFBupWHrwU8CspxUwlYj8rYzOaYlt1Vlw44jLUItuFck5xTe9MsQyQfHJM6LKShcNfe9rKs15ZPCWHfkf030jCxoSJsSk70SuZGEghSMyagz9ICi9WRz5x3BiO4Phwzsj2F738XDaLDa72WyCiUJqdyPsAKlizc%2BEo0I7ds1FpyJaMnf3nKqBU8g81BhgEtGxXRY0p2KGnRH%2B4m9dqcaHZaqPzJUi6EqTv92mbAN0SXPFZIfxeBkZv0oTrlJ2pvGkWPRdjXrD0vis8juyh0WqaKt6WrOIY4BtY8puF7%2BkLZ3H3org%2BR%2BiBPpIdCMfT3FWd%2BKM8fEpKfPjnefTwD3hBezu7QQUbuBWXTNPLO6UocFeIB3uWpZLfo7O9DpjzJiLgdBvY2%2Fid3GSq%2F3CMNcdnhv2a2IHcKH3GKMP7QicoGOqUB2Zve8WT2fKJNQZ%2FNODYSe2IO6eufOyE3hK3b6X6zL0o5M28m29MJe4RQWlIUiP9KvFzPWMr6UHbR%2F1%2BjJl7tIWLh5RdZb2xUMNNrZqllBYqiv3gEpmEQlNDJl%2BaswDeIJzslld2U%2FYJokF9MdfjlbRFGVEjh%2BLeJ9%2BSh4UrfV23O4UShX9wUBgZpKSxWQqtS4I1aUl3tNW22XsMCpFr9vmsWz%2F8N&X-Amz-Signature=3de201e379b680ae34645f7c0b127e79f7e3f96b7d099e91124ea57133415677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IL723CG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjLJDed5emAsmB4aTS6qDJFLJi%2BkgMaMEHypuiMhWnIQIgcAH6inaz3bwgeaufHplnKd8FlChCswWrCcPbcJK1dCUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMbUD1U8qObvxqZ4dircA3HqvEfEmOKfczoNh92KE8aFe19mpRLPa2K6pPRWyx03CkEEFiLDHnSLKZsIAVzTevMHRz5eHBJDIorNYkMDEc57E%2FBepyQJxBw28K5BNUC0nnLcn07TgGkb9q2nsY1K3OJ15arS%2FV9%2FXunBSXefNWP%2BkJ6o5LgonJTzuxeICCVNQyoVji65bF53PFwfSHysIqj0VOls6Y%2FywzChWQHkrCITaEFBupWHrwU8CspxUwlYj8rYzOaYlt1Vlw44jLUItuFck5xTe9MsQyQfHJM6LKShcNfe9rKs15ZPCWHfkf030jCxoSJsSk70SuZGEghSMyagz9ICi9WRz5x3BiO4Phwzsj2F738XDaLDa72WyCiUJqdyPsAKlizc%2BEo0I7ds1FpyJaMnf3nKqBU8g81BhgEtGxXRY0p2KGnRH%2B4m9dqcaHZaqPzJUi6EqTv92mbAN0SXPFZIfxeBkZv0oTrlJ2pvGkWPRdjXrD0vis8juyh0WqaKt6WrOIY4BtY8puF7%2BkLZ3H3org%2BR%2BiBPpIdCMfT3FWd%2BKM8fEpKfPjnefTwD3hBezu7QQUbuBWXTNPLO6UocFeIB3uWpZLfo7O9DpjzJiLgdBvY2%2Fid3GSq%2F3CMNcdnhv2a2IHcKH3GKMP7QicoGOqUB2Zve8WT2fKJNQZ%2FNODYSe2IO6eufOyE3hK3b6X6zL0o5M28m29MJe4RQWlIUiP9KvFzPWMr6UHbR%2F1%2BjJl7tIWLh5RdZb2xUMNNrZqllBYqiv3gEpmEQlNDJl%2BaswDeIJzslld2U%2FYJokF9MdfjlbRFGVEjh%2BLeJ9%2BSh4UrfV23O4UShX9wUBgZpKSxWQqtS4I1aUl3tNW22XsMCpFr9vmsWz%2F8N&X-Amz-Signature=78c51379337cc1148d6dc73ac64599009229c98125515d0606d146b6aff80139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
