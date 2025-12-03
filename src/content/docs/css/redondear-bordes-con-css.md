---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHW6LS6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDRh7jJUA5jFdNSXwRMBhlHyrFxvjvarzwgo8vmSz0KUAIgF61dMiSiZ3syr9wWegfuHx1tbIECG2eSr217ryn6x7Uq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPUhOmr%2FGUBGdyh2dSrcAwdvvEVDPmiWhUiUeLSwj0Gr7FHfqvT2BikvnT2eYFT5GGfGVbiOFsIZlRUowBtfAJLjOEhv99mDpLglMIoUInw5RIsCdgbYqdXIYDikhrTRzzbRNlCFJ2CMxI8gSmUO0229vfpR1zYv03S6ICxMdiBeS%2F8BxRx1uJn5eY12g1HKMPAP5eBRLopV5QYJZ%2FfHRdlfSLLv%2BVdNMsAikcHIygkDXzt71D3EVabiO1%2FfF%2FYtL%2FRMKCAynBkjTPRj0hfUx44THQ2OsBKZ%2BEcgdol3QhGVJ8Ic1YAkeigHxk%2FY3gYe39BXqPdvCQJktqW3lz1LrX0%2F5OOu57OHobcGu2xpflUg%2BHLbxAFZbDeW3HnNHrG6g3ZqFo1HegCUCrfLDCxFF%2BRUhzsq9bxgjg6kXP0QpTebLYDCMtz0GOPRIdgzV%2BC68iAciSyVml04zDDEa%2FHjmXTdlgD6KfZgm5hvT15FiXVt3TxGZLzxStbPFNX6VhFu1pnLavUdVWVIAUZQendlAPM%2F6CuGyKjZEmnaEF6oSf2fjjDABu0O4NNFqn6Egds5Op2sj1%2F%2B2uRzBwAHipu9JwsVADEhYJ9ZanlcS9EHYkzc9D0K%2Fw9RrcN%2FaMWRU9X%2BMLNAOwx4eLbSfJy1MMT4wskGOqUBoRtE9k50NRXGrmbpw7UtzYLLYbCC71MoEcNYtRWWYOTzVgxJNBydZQbPwBBSkaIn2PZ2JJet08Ni1Hxn0H8Wc8x1v2vFAeVJ9KI%2Fuf%2B39%2FdYVYxDPgrBqDwt4Z8R64GKMEMipJkLlqBFH6Jgno8F0LsNRVyjdBXHlqmFBDJ3nkDLvIEhkQ8xM1Xq1lOkwYjY2uvi3AZDfgf%2BCyZt%2BY3nzgs0qwCL&X-Amz-Signature=972cf7113ecaafb4d067a7b0e0c2163473f9b020ded58434bb54e524e97d1127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHW6LS6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDRh7jJUA5jFdNSXwRMBhlHyrFxvjvarzwgo8vmSz0KUAIgF61dMiSiZ3syr9wWegfuHx1tbIECG2eSr217ryn6x7Uq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPUhOmr%2FGUBGdyh2dSrcAwdvvEVDPmiWhUiUeLSwj0Gr7FHfqvT2BikvnT2eYFT5GGfGVbiOFsIZlRUowBtfAJLjOEhv99mDpLglMIoUInw5RIsCdgbYqdXIYDikhrTRzzbRNlCFJ2CMxI8gSmUO0229vfpR1zYv03S6ICxMdiBeS%2F8BxRx1uJn5eY12g1HKMPAP5eBRLopV5QYJZ%2FfHRdlfSLLv%2BVdNMsAikcHIygkDXzt71D3EVabiO1%2FfF%2FYtL%2FRMKCAynBkjTPRj0hfUx44THQ2OsBKZ%2BEcgdol3QhGVJ8Ic1YAkeigHxk%2FY3gYe39BXqPdvCQJktqW3lz1LrX0%2F5OOu57OHobcGu2xpflUg%2BHLbxAFZbDeW3HnNHrG6g3ZqFo1HegCUCrfLDCxFF%2BRUhzsq9bxgjg6kXP0QpTebLYDCMtz0GOPRIdgzV%2BC68iAciSyVml04zDDEa%2FHjmXTdlgD6KfZgm5hvT15FiXVt3TxGZLzxStbPFNX6VhFu1pnLavUdVWVIAUZQendlAPM%2F6CuGyKjZEmnaEF6oSf2fjjDABu0O4NNFqn6Egds5Op2sj1%2F%2B2uRzBwAHipu9JwsVADEhYJ9ZanlcS9EHYkzc9D0K%2Fw9RrcN%2FaMWRU9X%2BMLNAOwx4eLbSfJy1MMT4wskGOqUBoRtE9k50NRXGrmbpw7UtzYLLYbCC71MoEcNYtRWWYOTzVgxJNBydZQbPwBBSkaIn2PZ2JJet08Ni1Hxn0H8Wc8x1v2vFAeVJ9KI%2Fuf%2B39%2FdYVYxDPgrBqDwt4Z8R64GKMEMipJkLlqBFH6Jgno8F0LsNRVyjdBXHlqmFBDJ3nkDLvIEhkQ8xM1Xq1lOkwYjY2uvi3AZDfgf%2BCyZt%2BY3nzgs0qwCL&X-Amz-Signature=59c693e6d875ca697fac1b444a6b4ed78ac09c5a861a41abe121bb2db8579247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
