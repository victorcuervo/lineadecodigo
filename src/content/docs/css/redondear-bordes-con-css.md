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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JPHT5U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FsnSPU%2FvPYeLSDma71Y5x%2FZ28KSCqu%2BZFawQ77arhhQIgeQF5Fg5PezW6IYheTA4gXjVtvlYTZORO4gblAZSA9EwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYpfpKCA%2FrUlNsHtCrcA1SZU7STuEkAyEZ9JEeqVxXd%2BVTaSYCyPy67ol1XLoCB0FSlqQV3ERvOmBsjcFrk8YE0sBXkAozr7R2nvoC04F1AnOpEufLKHTZTjkMn6%2B%2FyE0rYTnzDnfNQL0%2BZ1%2Bjxt3yDadaJT8slkDkPrzhL4cQH%2Fn6430%2BzXZRbgVdZBJU3b7SVnEhiqFvRqntlKozvbJJGO73Enpy%2Fnu4Mx8o2U%2BvYsz0nahdoJ9jnLtNmgL6T7r3Skq5vbMl2Oaa%2FI6XLJff3FZ4f2FnTY%2Bx4AvYLsoFHe3rRPkRNJEVqAzm2SgGu2XBgzHZYDXXVSkWXEthU%2Bw%2B1HtQl2IOA%2FjWAx9mliLTiMV%2F69xR9vOBamMuDXisAyhUzL58KFHSJ0J6fsbOU6E0PSpOT5b9pCQsvCQfVnV%2BYUcY0hBApAVvJgwX%2BYDG%2BGXpj%2FhbNtMlPLeptWaCcRUaTkVAgTv%2BVxSFOzpjSYdVrNwzoV%2Bp2V7aJ5%2BfnaOtzKxH74ikcamwVIuQ1AoDMUADLsK%2Fj8l68lFcmMSLaIzD2chd7Rwn%2FTKgJ0qMALMrEjaVDd%2FSKgJgDwvruV40yaONyopk3S4H1DnXtsOX%2FSItPE%2BgUzAXqYasOLfgyvxbc4E%2Fzteg8dWR80KZwMKWQ28kGOqUBuUFJlAB2ob7AMGz%2BcblNAeQe42PsVjpr3K4rxryhhkXooeDjn3kOU%2FwOFAKeS8SxhS97vLX%2BoXppoMh5LoINWhu7Cm3A4vdhf%2BRCsMQjJdwgT%2BN%2Fn6FzeWwX6fuhCCn0Ya7jcJOlcr4%2BtC4hrsMqaQLXvM8cgwsMtaLuY8tN9CqAobKWYxRXLbzSD8YalIfpahgMhmTTVobGakqzrI%2FobwaKO8Z6&X-Amz-Signature=105466e4e4e33b560c020d21d83a598ce24933e086c059d61736529106f6ff92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JPHT5U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FsnSPU%2FvPYeLSDma71Y5x%2FZ28KSCqu%2BZFawQ77arhhQIgeQF5Fg5PezW6IYheTA4gXjVtvlYTZORO4gblAZSA9EwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYpfpKCA%2FrUlNsHtCrcA1SZU7STuEkAyEZ9JEeqVxXd%2BVTaSYCyPy67ol1XLoCB0FSlqQV3ERvOmBsjcFrk8YE0sBXkAozr7R2nvoC04F1AnOpEufLKHTZTjkMn6%2B%2FyE0rYTnzDnfNQL0%2BZ1%2Bjxt3yDadaJT8slkDkPrzhL4cQH%2Fn6430%2BzXZRbgVdZBJU3b7SVnEhiqFvRqntlKozvbJJGO73Enpy%2Fnu4Mx8o2U%2BvYsz0nahdoJ9jnLtNmgL6T7r3Skq5vbMl2Oaa%2FI6XLJff3FZ4f2FnTY%2Bx4AvYLsoFHe3rRPkRNJEVqAzm2SgGu2XBgzHZYDXXVSkWXEthU%2Bw%2B1HtQl2IOA%2FjWAx9mliLTiMV%2F69xR9vOBamMuDXisAyhUzL58KFHSJ0J6fsbOU6E0PSpOT5b9pCQsvCQfVnV%2BYUcY0hBApAVvJgwX%2BYDG%2BGXpj%2FhbNtMlPLeptWaCcRUaTkVAgTv%2BVxSFOzpjSYdVrNwzoV%2Bp2V7aJ5%2BfnaOtzKxH74ikcamwVIuQ1AoDMUADLsK%2Fj8l68lFcmMSLaIzD2chd7Rwn%2FTKgJ0qMALMrEjaVDd%2FSKgJgDwvruV40yaONyopk3S4H1DnXtsOX%2FSItPE%2BgUzAXqYasOLfgyvxbc4E%2Fzteg8dWR80KZwMKWQ28kGOqUBuUFJlAB2ob7AMGz%2BcblNAeQe42PsVjpr3K4rxryhhkXooeDjn3kOU%2FwOFAKeS8SxhS97vLX%2BoXppoMh5LoINWhu7Cm3A4vdhf%2BRCsMQjJdwgT%2BN%2Fn6FzeWwX6fuhCCn0Ya7jcJOlcr4%2BtC4hrsMqaQLXvM8cgwsMtaLuY8tN9CqAobKWYxRXLbzSD8YalIfpahgMhmTTVobGakqzrI%2FobwaKO8Z6&X-Amz-Signature=029e9099b7e9115ace93cef039d488d2003d40afc081b8466d232273a1aa1152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
