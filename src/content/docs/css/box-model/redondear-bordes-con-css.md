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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4K2GVW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuJdYNEj6jdMK3LoW7%2F9SFk2O6kGDVl1hclpph1ryUcgIgKbszSHeBZaD81st5930BOGKnGOxU1JGNnaywrKrX2iYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiY0PuA6BjYn4su%2FSrcA3Afg%2BlJeQEL1lGVA3VmdqzRCOIxAlDLzWiDb3nInkPbxuPLrJWW7gM1zDBCUJTZAFl7ZHOAEM8ePgu2KOHCiuwJ9sff2g%2Bj%2FtTkDrZlYPOJUyvVC%2BqpRq0du%2FjLGAsjFzJwdRVSGdY%2B3zPgKIylqnXlbOtK81nxJMZeUVXzCrsTigPinBN8VWwepfpu%2FmNZ4KkRRbZ3BVUt5G4wQlbKdFjWDxRRSbBJuqfbn2e0mU63FeMHDU8Q%2F5ybC7d6I3R%2FIyWzAsA7XEYqAoRht18DZo6IoX4hkm4q2LO5PHnUMNOZOaosN2Zspxa0rawhMaf1veH%2F9BgvwxE%2FFA6I86XDu%2Ba3m%2B2Kapw%2FbC32u7zl%2Bn7M3%2BlLpnF%2F0WxgZ5AO11E5wqbbdo2dQF9zlbJ4LI%2F80PXIFka4t%2BomOyc4Zm9T1lYwKSIf50wj0SVamfIQEbBBegOge4hexCLgw8u473llJRm9%2B3n58KcjGnsNEZaBapGC65n5mOg9TXjqnS%2Fda7On%2F4jw7s6JEM6S1ehgcabYRaVUzqt5NOcYs7yMZBlooi8REb8lOj0HCCsCukPMlYH1mdXuIKH4lSTUZZ4rHA5eaCZ6s4QD27ljCIrZ9t0FE0ll1u4J%2Fze5iGKSvdkiMICAi8oGOqUBiaCbOg%2FLqPL7LBINstkawYakW3TbPuIwSs6S4eLtwGcbjJ81wbItHQLzpuihBVvGhwuJhnQSv62J8FTS0uL1Kohfi6FU8wT3ooCJWiwujfqAQ90G8tDABT1An4MWWlb34%2F2dgHKVqAk1rUFhZMGhjNjEkiWEbv2zfHSPJyA4gEK1AZKXkiapRQPn8xOqrFzb909kNMrx%2FVgk6K5NH5BlB0aMwzTn&X-Amz-Signature=a31d9a525c87501c90172b7582830d616c0e1d913c0abbd2cff08d458984ac60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4K2GVW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuJdYNEj6jdMK3LoW7%2F9SFk2O6kGDVl1hclpph1ryUcgIgKbszSHeBZaD81st5930BOGKnGOxU1JGNnaywrKrX2iYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiY0PuA6BjYn4su%2FSrcA3Afg%2BlJeQEL1lGVA3VmdqzRCOIxAlDLzWiDb3nInkPbxuPLrJWW7gM1zDBCUJTZAFl7ZHOAEM8ePgu2KOHCiuwJ9sff2g%2Bj%2FtTkDrZlYPOJUyvVC%2BqpRq0du%2FjLGAsjFzJwdRVSGdY%2B3zPgKIylqnXlbOtK81nxJMZeUVXzCrsTigPinBN8VWwepfpu%2FmNZ4KkRRbZ3BVUt5G4wQlbKdFjWDxRRSbBJuqfbn2e0mU63FeMHDU8Q%2F5ybC7d6I3R%2FIyWzAsA7XEYqAoRht18DZo6IoX4hkm4q2LO5PHnUMNOZOaosN2Zspxa0rawhMaf1veH%2F9BgvwxE%2FFA6I86XDu%2Ba3m%2B2Kapw%2FbC32u7zl%2Bn7M3%2BlLpnF%2F0WxgZ5AO11E5wqbbdo2dQF9zlbJ4LI%2F80PXIFka4t%2BomOyc4Zm9T1lYwKSIf50wj0SVamfIQEbBBegOge4hexCLgw8u473llJRm9%2B3n58KcjGnsNEZaBapGC65n5mOg9TXjqnS%2Fda7On%2F4jw7s6JEM6S1ehgcabYRaVUzqt5NOcYs7yMZBlooi8REb8lOj0HCCsCukPMlYH1mdXuIKH4lSTUZZ4rHA5eaCZ6s4QD27ljCIrZ9t0FE0ll1u4J%2Fze5iGKSvdkiMICAi8oGOqUBiaCbOg%2FLqPL7LBINstkawYakW3TbPuIwSs6S4eLtwGcbjJ81wbItHQLzpuihBVvGhwuJhnQSv62J8FTS0uL1Kohfi6FU8wT3ooCJWiwujfqAQ90G8tDABT1An4MWWlb34%2F2dgHKVqAk1rUFhZMGhjNjEkiWEbv2zfHSPJyA4gEK1AZKXkiapRQPn8xOqrFzb909kNMrx%2FVgk6K5NH5BlB0aMwzTn&X-Amz-Signature=4d2c71fa10685113a01ae473d3464407a38e79fba23f1df0228055278f4bc269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
