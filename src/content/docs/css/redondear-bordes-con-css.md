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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q4XCMM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm4IVoPasDTBp5jlZShnNpXMwvzYJOispZGIpy2ynO%2FgIgZXA4%2BbAQUo3A4DOPRCbJZbU18q3v6lJnz0h1MAz8zRoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9sgfj6XQksbeGZKyrcAx%2FD1BaoRNXxtcbVuQAyA%2FL1EkE1%2BgnpHI3scXLHwxb6uAOFC%2BTosSgFMf0azZdH2lRb3ZL4RjL91io0d5Hg%2BFwTDyI%2BlbDwRPfaBf58jhBPgLwtXmTRbBz%2B21kMYES1fIXx8m6a3r0f8RNWV3Zb5ZyO6jBx29B3tMB2Wibur96bABIaaBn5h%2FswzTKztkYtdZJXR9FQ1Zel0LIZSPFmGa%2FkNc6inhcBrsTne%2BD8YEo%2Fk1Xv8455hThbvb8%2FmgmSxap57LlKyDuGlFsIC%2F8hGT%2FCOl%2Bn0SMWqT1%2Bx5Y6M1wWF6y6McK1qc%2FDJ1Vttv8QYGK4osfONr6Dn5CfvYDHE2YQTQg9eYuDcJzfHCH5UgIXCeoHF2aUVWolFEJ0LVkGb40oAZT3dML4uEdDptIRdP6qsZEzBPLwcrooNG0krjfHoadWg4wufoPQxTZV4c8Ogm2gEqC8%2FMpy9SQzWgD4VIFjarOZmuvj6yiB%2FO0F6EBKwcDJLlWKIJLD2GG54R4Z%2FzvI%2BdltpOBD5xv3Nr%2BVMkZYJZbzk7NX3BUxy76DuREW4b1e3Adt0MsjAsRGyuSsXtSR%2FNSxu9bs68R%2BP%2FnQZ%2BDq5jYxTbUeYfAq8ZI6riTCBnwwrLgeyRzb6YRMMIrE38kGOqUBNGvgp8aqmCH9U5c8Dx6dvTAkSoQt9OSDnf8rW%2BOk%2BOXmOQqT4d0UbQcfVZjodJTMJ9HlTiWnE20MjtmUd%2FFOSeLyn9JFbF7ZpJpIr84334K%2BjPDsAxFE%2BLcgOrbgPrU6pXaw1SrSbBTeBhtma2bYZs9oGI9f3ZQyjrOn%2Br0B5r3RYlHel66ejy%2F4qzmSo8%2FGWv0y1wX5JivFAgLVLDNQQtKQXnsh&X-Amz-Signature=0bc9152cf8fcedca9070f7c92cf4440b3b5291b58802005664389580dd3d1c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q4XCMM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm4IVoPasDTBp5jlZShnNpXMwvzYJOispZGIpy2ynO%2FgIgZXA4%2BbAQUo3A4DOPRCbJZbU18q3v6lJnz0h1MAz8zRoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9sgfj6XQksbeGZKyrcAx%2FD1BaoRNXxtcbVuQAyA%2FL1EkE1%2BgnpHI3scXLHwxb6uAOFC%2BTosSgFMf0azZdH2lRb3ZL4RjL91io0d5Hg%2BFwTDyI%2BlbDwRPfaBf58jhBPgLwtXmTRbBz%2B21kMYES1fIXx8m6a3r0f8RNWV3Zb5ZyO6jBx29B3tMB2Wibur96bABIaaBn5h%2FswzTKztkYtdZJXR9FQ1Zel0LIZSPFmGa%2FkNc6inhcBrsTne%2BD8YEo%2Fk1Xv8455hThbvb8%2FmgmSxap57LlKyDuGlFsIC%2F8hGT%2FCOl%2Bn0SMWqT1%2Bx5Y6M1wWF6y6McK1qc%2FDJ1Vttv8QYGK4osfONr6Dn5CfvYDHE2YQTQg9eYuDcJzfHCH5UgIXCeoHF2aUVWolFEJ0LVkGb40oAZT3dML4uEdDptIRdP6qsZEzBPLwcrooNG0krjfHoadWg4wufoPQxTZV4c8Ogm2gEqC8%2FMpy9SQzWgD4VIFjarOZmuvj6yiB%2FO0F6EBKwcDJLlWKIJLD2GG54R4Z%2FzvI%2BdltpOBD5xv3Nr%2BVMkZYJZbzk7NX3BUxy76DuREW4b1e3Adt0MsjAsRGyuSsXtSR%2FNSxu9bs68R%2BP%2FnQZ%2BDq5jYxTbUeYfAq8ZI6riTCBnwwrLgeyRzb6YRMMIrE38kGOqUBNGvgp8aqmCH9U5c8Dx6dvTAkSoQt9OSDnf8rW%2BOk%2BOXmOQqT4d0UbQcfVZjodJTMJ9HlTiWnE20MjtmUd%2FFOSeLyn9JFbF7ZpJpIr84334K%2BjPDsAxFE%2BLcgOrbgPrU6pXaw1SrSbBTeBhtma2bYZs9oGI9f3ZQyjrOn%2Br0B5r3RYlHel66ejy%2F4qzmSo8%2FGWv0y1wX5JivFAgLVLDNQQtKQXnsh&X-Amz-Signature=214bb38f9d3ffbd503c3027e39a256b5ab0e8cfdf1dfa62887a13ab9aa0f00fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
