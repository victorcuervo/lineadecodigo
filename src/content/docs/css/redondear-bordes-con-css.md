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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQRNAUO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbLd1e3aKveUAX4FBBanP9ySOjW17k9eEXsqth%2Fu92UwIgW6vN8El7n0B%2F%2FnnPgBSgoNLyzMisaT%2BfkxA4CcJ2o8EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLwNJVwFGZ5igOA7yrcAy58vbkGD1XoumUynrE8ODP%2FFwp2KfV8rfPE1x2IUXBknLPE1Kc%2Fu25HSpZWwWdQeeCwFfhRIUB7hIz%2FJTgCL8nK9OrhLFrIoimWBesogtK7MlsO%2BcIemTHDvDdgOUV%2F%2Fb6ArJn%2FWokLUc3U%2FDJvqG7aMY9qw67dUeGZ3ssIzUMalTAw7DROGgfRtqxksq14jyxbCHaAhbEtBniJCJNiH2k3PuYlWPVT3Ji6OxmULk6mROkQMyxdbz5KnCTUMDhwR%2FqcvQW9MzRm110XpvLObWihQ58vzkhCxyAXa48XWroWMA1S04P2vPWj9js6HoT8Gh76xA%2F87FgD%2FZynJTs4kyAk%2FsJKiJy3kFmK6g%2BYzzPmE%2FRv12BCY7bo%2FaqCE82sYjvyz%2B1t8GFRHt0npaPDFfd06FAc2ntkE65TnGRm9NXNbFQtzDVQxdO3ecA28o%2F2YIS12Nz%2F%2BBRq3k8K2TsLfG04nc3q7KBYApQnzpslRcqJGPrUL1W%2Fk3ae%2B2pJieOn7nQLkCJwC7a6PBYE2BiSqgaglsldzx7tG0HLBoG%2FT144Mnc3u2Du5v70QJW7NBrlyPv%2BOtioKaTcut3Epw24o5JRMxEGXQe2SoPb4BXD67rh8TspsZ80EKdPy%2FGIMOHT2MkGOqUBEPRF172mxooh%2BqYqrW7uc%2BAaosBStrSqG%2Ft2GYlIHaW6ipAHi0i5TarYa5%2FWiR3WyCDERz6YpBH%2FA2%2Fn9wD7AWfkDWY72%2F7oVG5yRcQSjQiNSn02KXE%2BQwLHpy23ow5S98wvoRGP1aJeqeOKoyp6ljNR%2BdnZbtdwBF25DeECdb61B7QTWJPRGFtG%2B%2BwestwqfG0tHG7AuwK%2FQb7Hk6RzvW6nQ3Mr&X-Amz-Signature=d412847cf7f784fe2c9b5f5ef05a4773e924f27d36e518a8eb5a2060fc131ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQRNAUO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbLd1e3aKveUAX4FBBanP9ySOjW17k9eEXsqth%2Fu92UwIgW6vN8El7n0B%2F%2FnnPgBSgoNLyzMisaT%2BfkxA4CcJ2o8EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLwNJVwFGZ5igOA7yrcAy58vbkGD1XoumUynrE8ODP%2FFwp2KfV8rfPE1x2IUXBknLPE1Kc%2Fu25HSpZWwWdQeeCwFfhRIUB7hIz%2FJTgCL8nK9OrhLFrIoimWBesogtK7MlsO%2BcIemTHDvDdgOUV%2F%2Fb6ArJn%2FWokLUc3U%2FDJvqG7aMY9qw67dUeGZ3ssIzUMalTAw7DROGgfRtqxksq14jyxbCHaAhbEtBniJCJNiH2k3PuYlWPVT3Ji6OxmULk6mROkQMyxdbz5KnCTUMDhwR%2FqcvQW9MzRm110XpvLObWihQ58vzkhCxyAXa48XWroWMA1S04P2vPWj9js6HoT8Gh76xA%2F87FgD%2FZynJTs4kyAk%2FsJKiJy3kFmK6g%2BYzzPmE%2FRv12BCY7bo%2FaqCE82sYjvyz%2B1t8GFRHt0npaPDFfd06FAc2ntkE65TnGRm9NXNbFQtzDVQxdO3ecA28o%2F2YIS12Nz%2F%2BBRq3k8K2TsLfG04nc3q7KBYApQnzpslRcqJGPrUL1W%2Fk3ae%2B2pJieOn7nQLkCJwC7a6PBYE2BiSqgaglsldzx7tG0HLBoG%2FT144Mnc3u2Du5v70QJW7NBrlyPv%2BOtioKaTcut3Epw24o5JRMxEGXQe2SoPb4BXD67rh8TspsZ80EKdPy%2FGIMOHT2MkGOqUBEPRF172mxooh%2BqYqrW7uc%2BAaosBStrSqG%2Ft2GYlIHaW6ipAHi0i5TarYa5%2FWiR3WyCDERz6YpBH%2FA2%2Fn9wD7AWfkDWY72%2F7oVG5yRcQSjQiNSn02KXE%2BQwLHpy23ow5S98wvoRGP1aJeqeOKoyp6ljNR%2BdnZbtdwBF25DeECdb61B7QTWJPRGFtG%2B%2BwestwqfG0tHG7AuwK%2FQb7Hk6RzvW6nQ3Mr&X-Amz-Signature=67976da37e91ca80385323bea3563653bd04d3c8c9924290234e1de52934a4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
