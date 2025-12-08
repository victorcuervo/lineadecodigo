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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQM37BF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAc9pbkMnSu1f4hiUVAKle00FSEBtifRA0FXeuUTVEvvAiAnZJUa%2Bt5wVa4Bh%2B1lK1cUeTvpX22sB%2BfpkiV%2FkLn5fCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLe6GMoe1fZRfobX0KtwDUl0jSplFWBaPet%2FwwYrjPGlQcB2OoLnyDYApMmNT%2BNy4h6L0CVcQwP2u4vH7r6Hj8PakAQZyQbk42RWgZHgdXK%2F9GZab07yD5oT7LToTIWsC%2FgfRT7jApZDXEdY%2B6%2BswcvTJCsxrboQxvDqX8PHfloeXuCyON80QH6TJvdm0lvQa4QjZWu41F5xN3XZYLhZoLt1hwvxmQbJUgVs49HNtxF%2B3n7LXvV8eG%2BNm1QbGm4238GqnWCG%2BUA1xqqMEUwpsgiMJ1vN9zhZqmQZ6Hw4n2Q06XGs4%2B80kWiNwpyZms9wtmHNcDTObGuDnA09AlYfNc41WkUz%2FS9GVRrJcQcKfKpK90vRjCJyF7PY2CyAHQraccs1cHBq0UK0c%2Bg6mzS%2BQr5v%2FQPGMSpeb5Wy4N9Gj4P1z%2F7u3tVX78NurVa5CSgl4Ib4iK%2B%2BJaGOWdwT7dyokqjPCmq%2BrqE2pA6AXWkjD1LN3A54i8j4SfQoSBPOoZKLpZXP%2BtkF7P8daH39RjPaWnRnX9qGF7lCa0uUGKFIItH5mo8qPNM2ama9lgVEjY83Nxa60IUOZFATKaKAqpSHgdZ%2FbzHZAE8UE5ACeDg5y%2B%2FqRZI2cHvHyGe6W8RoYbQCY3XESIYGT4w4qs3cwgojcyQY6pgHXipskr%2FKoNx%2B51XZ5Iyz%2F35LGQBjnLh6FZBB9tO%2BFvF7l%2B9KAfF3Dzf0HZPsnFOsVpbiqYPANqLQ9Yu%2FTUXFkvNdRgkdfdjuO3Or71RZ0%2FQKi%2Fjeh3Nia1ncWCOwuK6RDpoK7gQZjpuVYtK5DfjYsuBWbfKszLqmDg6Ix%2F2zp4dNOLYAEekET2oN8BQy4NUz7jL5TP6bkcXePr6zssVl%2B4bj7riA%2B&X-Amz-Signature=e1f44bc09287f5c46212872b995687c4c554cfaf247a666e067f9f1ddbe3bd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQM37BF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAc9pbkMnSu1f4hiUVAKle00FSEBtifRA0FXeuUTVEvvAiAnZJUa%2Bt5wVa4Bh%2B1lK1cUeTvpX22sB%2BfpkiV%2FkLn5fCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLe6GMoe1fZRfobX0KtwDUl0jSplFWBaPet%2FwwYrjPGlQcB2OoLnyDYApMmNT%2BNy4h6L0CVcQwP2u4vH7r6Hj8PakAQZyQbk42RWgZHgdXK%2F9GZab07yD5oT7LToTIWsC%2FgfRT7jApZDXEdY%2B6%2BswcvTJCsxrboQxvDqX8PHfloeXuCyON80QH6TJvdm0lvQa4QjZWu41F5xN3XZYLhZoLt1hwvxmQbJUgVs49HNtxF%2B3n7LXvV8eG%2BNm1QbGm4238GqnWCG%2BUA1xqqMEUwpsgiMJ1vN9zhZqmQZ6Hw4n2Q06XGs4%2B80kWiNwpyZms9wtmHNcDTObGuDnA09AlYfNc41WkUz%2FS9GVRrJcQcKfKpK90vRjCJyF7PY2CyAHQraccs1cHBq0UK0c%2Bg6mzS%2BQr5v%2FQPGMSpeb5Wy4N9Gj4P1z%2F7u3tVX78NurVa5CSgl4Ib4iK%2B%2BJaGOWdwT7dyokqjPCmq%2BrqE2pA6AXWkjD1LN3A54i8j4SfQoSBPOoZKLpZXP%2BtkF7P8daH39RjPaWnRnX9qGF7lCa0uUGKFIItH5mo8qPNM2ama9lgVEjY83Nxa60IUOZFATKaKAqpSHgdZ%2FbzHZAE8UE5ACeDg5y%2B%2FqRZI2cHvHyGe6W8RoYbQCY3XESIYGT4w4qs3cwgojcyQY6pgHXipskr%2FKoNx%2B51XZ5Iyz%2F35LGQBjnLh6FZBB9tO%2BFvF7l%2B9KAfF3Dzf0HZPsnFOsVpbiqYPANqLQ9Yu%2FTUXFkvNdRgkdfdjuO3Or71RZ0%2FQKi%2Fjeh3Nia1ncWCOwuK6RDpoK7gQZjpuVYtK5DfjYsuBWbfKszLqmDg6Ix%2F2zp4dNOLYAEekET2oN8BQy4NUz7jL5TP6bkcXePr6zssVl%2B4bj7riA%2B&X-Amz-Signature=2b3769131b4fa602e1dd263aa59a16de633e40dc2181f16dc5947d2388c1bca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
