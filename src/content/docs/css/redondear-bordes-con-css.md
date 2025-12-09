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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRLPW32%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTV2V%2BBUEWyrDo2cwlYFBhSPTFm2400btSAp3DFeD5JAiEA9ln2KSbsKtyfLszBh%2FkZyw%2BWB6nXWGJlciRWmD0UP8kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIpxUszZtb%2FUsuvOCrcA57GnzU73Qv1V1YbOqrtc7p3WP3VsYLkF2%2FcqhOH90AT145ByA%2Fmie09ApDs75b8bwFyYzELlN7cLXo3K%2FYZmx66VVwILjVbeDeOeyqz28c69YuCEAE36TLcYD2%2FZvz%2BGYAcfvMD%2BSsdUQKw%2BI2Mp518%2FrT9jnYd48iPlyfwgqJQDZC1DyO%2BGDvgE6ZlbmlCaKEDoNoTiVdIDtYF%2FFmopgzh1fpH7Q7KAkmUO6djR2jI%2BlEN1%2BrDyByzX0gxeYQOJ0kbllWVzEpow3YWXhueDeGCYvautOGV1A10cC7gJdqXHHYmUVQWQLgmPkl1QoUkdjvK5LojHS3vbPIOuQ6FWzLLBGAqEnQL80jsS0WIzdTBu3JZMOaILpKmr%2B7FXVbPYnZ4PZkqjqVqyJWHyxlfXwbqBFllhlJeiv5yVvoG15Tm%2Ff5kX12gel6BvOcP7W899%2FGA9YZCxL4d8XM4flkVoOFXjj5nkTcI5uJVu8hjFNfWR%2BMrq7ueKzwRCRl7TBri7IfYylUevW4zvjx9XjhkMpnwoC2F9Dz1B%2FUdkDzTHYmfo8ZPuWvFQi%2F0tIyYovPluVVH%2BBCRYy3TlQBvcIsRjjWC%2FbVGUdIx9xp%2B%2BJUnUxitWkBYD3SmdxWFMYw9MPHk3skGOqUBVChM121OzjiFedvgucubip2Too34ftAZwycHqzV1sAgHXuZi4qBd9SgEq7Pa34sp9zhKLKaEEbGNtM2ePM2RfXkBBzz6LscZUsgvlRihQlHapntLX6YaulnEmgA0NP5IVk615U0co0f9p5TL0jEsJHZD2X2CudJURR2SwVrhLknARx%2BqLjbS4ykswoJhixSfB8seW8sA5Z7tLfVmLKKV0vo4pEeq&X-Amz-Signature=3795d826fe5e4d5eb79d7cc482f8b994a268408ea251478c15624a0e526d3317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRLPW32%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTV2V%2BBUEWyrDo2cwlYFBhSPTFm2400btSAp3DFeD5JAiEA9ln2KSbsKtyfLszBh%2FkZyw%2BWB6nXWGJlciRWmD0UP8kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIpxUszZtb%2FUsuvOCrcA57GnzU73Qv1V1YbOqrtc7p3WP3VsYLkF2%2FcqhOH90AT145ByA%2Fmie09ApDs75b8bwFyYzELlN7cLXo3K%2FYZmx66VVwILjVbeDeOeyqz28c69YuCEAE36TLcYD2%2FZvz%2BGYAcfvMD%2BSsdUQKw%2BI2Mp518%2FrT9jnYd48iPlyfwgqJQDZC1DyO%2BGDvgE6ZlbmlCaKEDoNoTiVdIDtYF%2FFmopgzh1fpH7Q7KAkmUO6djR2jI%2BlEN1%2BrDyByzX0gxeYQOJ0kbllWVzEpow3YWXhueDeGCYvautOGV1A10cC7gJdqXHHYmUVQWQLgmPkl1QoUkdjvK5LojHS3vbPIOuQ6FWzLLBGAqEnQL80jsS0WIzdTBu3JZMOaILpKmr%2B7FXVbPYnZ4PZkqjqVqyJWHyxlfXwbqBFllhlJeiv5yVvoG15Tm%2Ff5kX12gel6BvOcP7W899%2FGA9YZCxL4d8XM4flkVoOFXjj5nkTcI5uJVu8hjFNfWR%2BMrq7ueKzwRCRl7TBri7IfYylUevW4zvjx9XjhkMpnwoC2F9Dz1B%2FUdkDzTHYmfo8ZPuWvFQi%2F0tIyYovPluVVH%2BBCRYy3TlQBvcIsRjjWC%2FbVGUdIx9xp%2B%2BJUnUxitWkBYD3SmdxWFMYw9MPHk3skGOqUBVChM121OzjiFedvgucubip2Too34ftAZwycHqzV1sAgHXuZi4qBd9SgEq7Pa34sp9zhKLKaEEbGNtM2ePM2RfXkBBzz6LscZUsgvlRihQlHapntLX6YaulnEmgA0NP5IVk615U0co0f9p5TL0jEsJHZD2X2CudJURR2SwVrhLknARx%2BqLjbS4ykswoJhixSfB8seW8sA5Z7tLfVmLKKV0vo4pEeq&X-Amz-Signature=a90a5064e028b7e613e4b5d4ab524e42b316d4a58d83066769fdd0459aabfb2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
