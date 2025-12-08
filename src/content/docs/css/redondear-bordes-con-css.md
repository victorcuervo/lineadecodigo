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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFJXF3U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNZaL9CRvk5F13VroWZB8ST7VmFa6%2BgTQtoVUP7EIduAiEAuqRBp0zpChanI2VfcfvdxRmuB0ZvUcNA4DxsWzRu8xQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEKXXZYW2dlzVbqKSrcA1sroPAIiV0AG28L4uHxMZ2RTdfxLvWGiGY7zHLIgdzdRMw5%2FvRlzZomdu4RopTqx0zEjRxKnNkkiNRFrmDUxcwdUf3FYdKsJFQmwK%2BtQFiwslJ2BaryeU1DaXtwvh2pJvkdvh32lQtK%2BpaVU7T2Lig%2BipzOW%2F0rDmjCSYH%2FAAeUannukIODVlF3bxk%2FcPxwP2wrJgYi2NTKBptLiX1UI1WwNETIO3UVZReHDidT3lo2s66mRb4fXtZeIduUA6B1pMUsMvPZiU6X6nrbypRPy0DJ5zFh3RgE2QyYrIjcr%2FsQszt%2Bpu%2Bsu8t3rUKKWqGC%2BRDd5pBQQtM9%2B9DP72jKtzh5O7s1%2FCPol6hSoExRWFDpbBHLUrrs6GzVEqFlME%2FW8gMrCvS%2BKofuoRoH5%2BenO8UjkXHDHlNdwITjuvZs3kXaTqu%2FPRHQncGBb%2F%2FRIHHmEiwyY%2FZwOJoQDqu2RCZL81BvvGfhUhT%2FdoAK5gf7JPTuUWxQ8gq%2FkEq4Gj7v07sjMdu9GXySB1Cj1prx5g3C56FuJfWA6Wwe1yGAkUN4hHxbbjy%2Ffpix0Mu3xLLEXJ64ya%2FYtsb4%2FnSZQcigljjIT3bp1%2BQJZQ4gK3i7T0EYpNLg3WljCO1BiZZcqg0iMPvs2ckGOqUB86J8NGBO6Cx3mnLrqND6rQu%2FQq0s%2FKdI3DmIg9Z0NqmvcXr3L7D9gBfQ0nJhPZ4Mz4nyKoRLscn0HR9VOi5T%2BsZk3iw4hmVYjmGo%2FnfOEy1wohRIf0dV3iiTzP66V%2FztIsxKiDGxNN%2BjbDXM%2FYEWV65wWq2ow1z%2FbV8gl58R4x9zyqesdkhpVmWGnriMa68GOCwXfSV9Sa%2FZskH9UMLSTf5KVmhj&X-Amz-Signature=90943ea78d9455f930e4f1663f0248f5c8734c0f12c8b1c1fa827407844097e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFJXF3U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNZaL9CRvk5F13VroWZB8ST7VmFa6%2BgTQtoVUP7EIduAiEAuqRBp0zpChanI2VfcfvdxRmuB0ZvUcNA4DxsWzRu8xQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEKXXZYW2dlzVbqKSrcA1sroPAIiV0AG28L4uHxMZ2RTdfxLvWGiGY7zHLIgdzdRMw5%2FvRlzZomdu4RopTqx0zEjRxKnNkkiNRFrmDUxcwdUf3FYdKsJFQmwK%2BtQFiwslJ2BaryeU1DaXtwvh2pJvkdvh32lQtK%2BpaVU7T2Lig%2BipzOW%2F0rDmjCSYH%2FAAeUannukIODVlF3bxk%2FcPxwP2wrJgYi2NTKBptLiX1UI1WwNETIO3UVZReHDidT3lo2s66mRb4fXtZeIduUA6B1pMUsMvPZiU6X6nrbypRPy0DJ5zFh3RgE2QyYrIjcr%2FsQszt%2Bpu%2Bsu8t3rUKKWqGC%2BRDd5pBQQtM9%2B9DP72jKtzh5O7s1%2FCPol6hSoExRWFDpbBHLUrrs6GzVEqFlME%2FW8gMrCvS%2BKofuoRoH5%2BenO8UjkXHDHlNdwITjuvZs3kXaTqu%2FPRHQncGBb%2F%2FRIHHmEiwyY%2FZwOJoQDqu2RCZL81BvvGfhUhT%2FdoAK5gf7JPTuUWxQ8gq%2FkEq4Gj7v07sjMdu9GXySB1Cj1prx5g3C56FuJfWA6Wwe1yGAkUN4hHxbbjy%2Ffpix0Mu3xLLEXJ64ya%2FYtsb4%2FnSZQcigljjIT3bp1%2BQJZQ4gK3i7T0EYpNLg3WljCO1BiZZcqg0iMPvs2ckGOqUB86J8NGBO6Cx3mnLrqND6rQu%2FQq0s%2FKdI3DmIg9Z0NqmvcXr3L7D9gBfQ0nJhPZ4Mz4nyKoRLscn0HR9VOi5T%2BsZk3iw4hmVYjmGo%2FnfOEy1wohRIf0dV3iiTzP66V%2FztIsxKiDGxNN%2BjbDXM%2FYEWV65wWq2ow1z%2FbV8gl58R4x9zyqesdkhpVmWGnriMa68GOCwXfSV9Sa%2FZskH9UMLSTf5KVmhj&X-Amz-Signature=f8eaf517445719325c3741271f2763c9f3f2182bc12cf56fbeec13ed69171d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
