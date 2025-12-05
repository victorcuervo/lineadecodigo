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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHEKRFEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFn5XZrm8FHADOG1xsBOTCXu1BHMcemA5hcia1jIYi4aAiBZlpiescXcYwBgxwFuUcvhCR36YDWUDrDAgVqEgEO8Lir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMWjms0HFbrU7O%2FwYgKtwDEe22PdvfQv%2Bnvh3krJ7M2rzPNho2s8QAX7RL%2BnHMwjfq4hQAzn7yp8ZSE5sgFDR5%2FZwqT5ukSpzqfHENKKGCEBR%2FRpaV6OwEx3wGsAN66WRWh8338%2Fu1hBn3VvC8X%2Be6TZR7GS%2BqookkhOKzNxd%2B9ztmaqveCaPu4dyBHpuw68SWDYjI2NvGs3tAMJD0T2bWuEF%2FRaZURIZQbM%2Bcn9zF5f8yFiYWsdKlnCkZXXLjnpmOTnj3Dsi4p1qX%2BEvL4U60CkWOxRVs1yRm2XuUfNBJVjIt4CQVCofXQ%2BflaKIkhjshg%2Fkvo6uW1qJh%2B305z%2BCUldbpoaLPfxNX74WntROnfc9axNW0DLFuXvrYGYQ2qC0EBu1c2T0SryYcuU2XsoYHjiwxuLhpuxXBV0QXIamEI5Mg5k0klWtMO9u87G4fgOwYl5Mi7NPzDr0v%2FwtvusfoDF5jo2YYQlOyNuCGPBTiRnr%2Foq1J7uR2vB1tDuPU1rrHsAuY4VBgiPnINYoQoh1Z8wzIYDJ%2FitRJebhEsShey3%2FqgXoGcoCSGo1QqXnOIAeS4rA2c9hFHiB9iQQkNyydit4g3kw4tnTc0MaFIJmj7dwhfyV456XXsPdqgttlYACtiX2o1AkOr1f%2BOCUwlJjNyQY6pgEkswzAyivD%2B2FIqRX2uqnvjqW53DYxmdL%2FKmHwpKAdMkCZXyL9xQzLc24Egl86GSQLgXN3DezXy64%2FsO56pArKuhg8zRWATEoiQBSAaUrMdHqvEdCudiWpAp9nlVCZgqD0%2BiHwwPVe4KcVXECBauIW90opO03nedPvC%2B3mCkbF1EViZKu404u%2BbTWngf3YSBWfXOfYvAJItVBYn%2BTMerVvYlg%2Btk3P&X-Amz-Signature=4691e974e73bb7ac4a8de4f6addae7980ceddb625177c7540d04ffbc3fd56ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHEKRFEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFn5XZrm8FHADOG1xsBOTCXu1BHMcemA5hcia1jIYi4aAiBZlpiescXcYwBgxwFuUcvhCR36YDWUDrDAgVqEgEO8Lir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMWjms0HFbrU7O%2FwYgKtwDEe22PdvfQv%2Bnvh3krJ7M2rzPNho2s8QAX7RL%2BnHMwjfq4hQAzn7yp8ZSE5sgFDR5%2FZwqT5ukSpzqfHENKKGCEBR%2FRpaV6OwEx3wGsAN66WRWh8338%2Fu1hBn3VvC8X%2Be6TZR7GS%2BqookkhOKzNxd%2B9ztmaqveCaPu4dyBHpuw68SWDYjI2NvGs3tAMJD0T2bWuEF%2FRaZURIZQbM%2Bcn9zF5f8yFiYWsdKlnCkZXXLjnpmOTnj3Dsi4p1qX%2BEvL4U60CkWOxRVs1yRm2XuUfNBJVjIt4CQVCofXQ%2BflaKIkhjshg%2Fkvo6uW1qJh%2B305z%2BCUldbpoaLPfxNX74WntROnfc9axNW0DLFuXvrYGYQ2qC0EBu1c2T0SryYcuU2XsoYHjiwxuLhpuxXBV0QXIamEI5Mg5k0klWtMO9u87G4fgOwYl5Mi7NPzDr0v%2FwtvusfoDF5jo2YYQlOyNuCGPBTiRnr%2Foq1J7uR2vB1tDuPU1rrHsAuY4VBgiPnINYoQoh1Z8wzIYDJ%2FitRJebhEsShey3%2FqgXoGcoCSGo1QqXnOIAeS4rA2c9hFHiB9iQQkNyydit4g3kw4tnTc0MaFIJmj7dwhfyV456XXsPdqgttlYACtiX2o1AkOr1f%2BOCUwlJjNyQY6pgEkswzAyivD%2B2FIqRX2uqnvjqW53DYxmdL%2FKmHwpKAdMkCZXyL9xQzLc24Egl86GSQLgXN3DezXy64%2FsO56pArKuhg8zRWATEoiQBSAaUrMdHqvEdCudiWpAp9nlVCZgqD0%2BiHwwPVe4KcVXECBauIW90opO03nedPvC%2B3mCkbF1EViZKu404u%2BbTWngf3YSBWfXOfYvAJItVBYn%2BTMerVvYlg%2Btk3P&X-Amz-Signature=bc15c0235ef39b0b5fb10888074a5fb54f34123c7764f03e3374b549e1f5e2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
