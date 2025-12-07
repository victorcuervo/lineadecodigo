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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMBPE3SM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxKk%2F8Ck%2FZgSo%2BEjRKEliidiV0pCOU0Z%2BlBlqcxsxmwIhAJjAuNmsl2W4rZmyAS3M97DBke1E4Gd9sMSErJ8nhysjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ3VTDToFyJLXVG6gq3APULXOzqu36wSAWf4UX2v3lcOJ7WdKCG4xKKp901ejt2rXYuNFTF18VLuwG9OaIUqqMwbGLeZMLZJ6i1OGb1hDk2Kn8xUtvdszOY9iYiXHjLsowsvBSDdtVyy%2BplFVzlNsWkE19ojzFkz%2B8kxc85vQ6oBS%2FPc12m8nyxmjZ89oe%2BjSb%2BkQVkrMBs0byuywUi1a9S5rIY2h1dxBh98JfgIhYkiC3vh2WmOr43FN7HhUXVg9MQjVOwLM%2FAIzuwCHzABdm%2Bvt%2BSB9ycOxQ8%2FulH7llxWBxwpv3%2Bi4NIJrxJoC7SkZIYAha3HOKGOZbfNfD%2FKb8DCKl%2BlIZ0voXrc7hv%2FlBODQuBD9x0XkIWeZFOTDO1j9DWJ3i8NdC7X6ccywYPAzSnkzZLppFWTFlWBq0Zf4i1ulhbxMmUNALwRrNIs9l5fYLN5wsZxIzdxJjgwaiC5OjC%2Bv7nghum8nHJOQxoZgqlrO7vluz3OTmkH1kJVNyHb3DdQRZnwqSsKiiNHnrBnphCDj5BEyberLRsqFKQfCv4u6JdncMcv9a7UXSf3O%2BA7Y%2BeA9jrkl0nrWxsSE68LyfMJ09dW3M1Zh1LOn7eqw01bhpnrBJyHt1owQ47CgqAHR9xg4DEJ%2FfuglJ2DDymtXJBjqkAXlWXSMMhQjPKmhP9xCNRk0IiZrAAbjWgyHf7bwgATSDBirrRrPY83FsaZXWcgarpIjIDRa50jzsrNJNvvdDhKaP6qwOL8HzyEIXfr4mR%2Fn1j1SOhuhkC3TrB56Wc52rA%2FUYrFfAteMcp%2BanBQqjJbGEvr83h7c8Oj%2BWGju0CmIYE5LtQoLkBIr8k7kzfiMhpqvVOMLgArwi78Okpsn2yrmaEpM2&X-Amz-Signature=6097acfdb35ade058a4f041f22febabd31a965838c17d1ffd48144ab1e694cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMBPE3SM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxKk%2F8Ck%2FZgSo%2BEjRKEliidiV0pCOU0Z%2BlBlqcxsxmwIhAJjAuNmsl2W4rZmyAS3M97DBke1E4Gd9sMSErJ8nhysjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ3VTDToFyJLXVG6gq3APULXOzqu36wSAWf4UX2v3lcOJ7WdKCG4xKKp901ejt2rXYuNFTF18VLuwG9OaIUqqMwbGLeZMLZJ6i1OGb1hDk2Kn8xUtvdszOY9iYiXHjLsowsvBSDdtVyy%2BplFVzlNsWkE19ojzFkz%2B8kxc85vQ6oBS%2FPc12m8nyxmjZ89oe%2BjSb%2BkQVkrMBs0byuywUi1a9S5rIY2h1dxBh98JfgIhYkiC3vh2WmOr43FN7HhUXVg9MQjVOwLM%2FAIzuwCHzABdm%2Bvt%2BSB9ycOxQ8%2FulH7llxWBxwpv3%2Bi4NIJrxJoC7SkZIYAha3HOKGOZbfNfD%2FKb8DCKl%2BlIZ0voXrc7hv%2FlBODQuBD9x0XkIWeZFOTDO1j9DWJ3i8NdC7X6ccywYPAzSnkzZLppFWTFlWBq0Zf4i1ulhbxMmUNALwRrNIs9l5fYLN5wsZxIzdxJjgwaiC5OjC%2Bv7nghum8nHJOQxoZgqlrO7vluz3OTmkH1kJVNyHb3DdQRZnwqSsKiiNHnrBnphCDj5BEyberLRsqFKQfCv4u6JdncMcv9a7UXSf3O%2BA7Y%2BeA9jrkl0nrWxsSE68LyfMJ09dW3M1Zh1LOn7eqw01bhpnrBJyHt1owQ47CgqAHR9xg4DEJ%2FfuglJ2DDymtXJBjqkAXlWXSMMhQjPKmhP9xCNRk0IiZrAAbjWgyHf7bwgATSDBirrRrPY83FsaZXWcgarpIjIDRa50jzsrNJNvvdDhKaP6qwOL8HzyEIXfr4mR%2Fn1j1SOhuhkC3TrB56Wc52rA%2FUYrFfAteMcp%2BanBQqjJbGEvr83h7c8Oj%2BWGju0CmIYE5LtQoLkBIr8k7kzfiMhpqvVOMLgArwi78Okpsn2yrmaEpM2&X-Amz-Signature=7884df963333ac9ad0bd79af8d61f8f9266a9e0077611ff688d0de59e6039804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
