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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664I2K27V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuHTALH5QzvXa94POqW8epZ6MDKmjL5xpBsmXQM4jAEgIgZhrlxjgoAQ7IpTwnR373Mt4BhX7GPgeoQ8DATQNoU0gq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGv%2BBOUMwsl39kX8MircA5ZAKD4UHPOw1P8aY7qWW8uu8UNcAHHD6UXoGeCS4MC2KMvvmIguupy1uvM9%2FpjTwAffJBdReoDAABcmbXF6IlnBaZZ%2B64KoGZUWuez9Yyr76UtQG6rnpmN%2BMTqcFjK747MsScwjcSiRf5dV0RmIyf5HRHDs6fPIh%2B0nqxjbxY4FhG2lHeOSmTQ1KMJDaQQxMVgVQtkMG9VSvbQNigUM44oFVJXQMoxNhV6DpRyOIO65%2Bx6Ip8aBhJTsOiHz6PAbVnZBysnz%2BFEd4hSNjhUMdIgWC9nL%2BPMnJ%2FVaqoh61nv4igUwn5uh0MuCbcfDB7gufBiKVFT9psz2HziZSpbcKw7I1sifLPmOcMbQkdcgmlNygxnk2ybjukIkCEuauXdv77QaROaPMRIgF1co0zTq03qbwSrCvTwmgALfEn2N%2FUBQg8P6vlGaxpwgPmaBxfZ%2BTz1TD9GrN77aMQKx9KuuSPT29gOaj3U0Me%2Fzefns5Tx0O%2B2w9qoPo%2FXH07HYLRqkrwdqbVLoFqA61R6BwJxZiqhtCL5ZAA4VhcSI9xUtYOZtF0GeSsrwu8a8gan7tGB4oBA%2FH2MjLLgfVWIhK1rjCj3TOegP%2FLuIebzS8EmhmHh%2BGhwuNXMgV8VKMeo5MPH9y8kGOqUBEYLveeEBd19aaV91YOwo%2FlMZJSUHWWPKZwDPd%2FEyRTrnF%2FuJegTFmIOngn1VIl0BIt1Cleynxbq4nbjxAkdTPwATfwaF71gh4hWCnj6H%2Fe9ySGim%2BpHl0f67bdPuWXcfy2kN07DDF3771trYwP%2BaxFX70zzu1mockj%2BNbU2QPfr62ZTi721%2FGqNNn2RmYbaNL45cN5TbIYE496squjCdpV3%2Fuswj&X-Amz-Signature=30e060662a424d62f73f2f1d687ae2717be2b645d80bcfb834920a0ff9a8e510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664I2K27V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuHTALH5QzvXa94POqW8epZ6MDKmjL5xpBsmXQM4jAEgIgZhrlxjgoAQ7IpTwnR373Mt4BhX7GPgeoQ8DATQNoU0gq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGv%2BBOUMwsl39kX8MircA5ZAKD4UHPOw1P8aY7qWW8uu8UNcAHHD6UXoGeCS4MC2KMvvmIguupy1uvM9%2FpjTwAffJBdReoDAABcmbXF6IlnBaZZ%2B64KoGZUWuez9Yyr76UtQG6rnpmN%2BMTqcFjK747MsScwjcSiRf5dV0RmIyf5HRHDs6fPIh%2B0nqxjbxY4FhG2lHeOSmTQ1KMJDaQQxMVgVQtkMG9VSvbQNigUM44oFVJXQMoxNhV6DpRyOIO65%2Bx6Ip8aBhJTsOiHz6PAbVnZBysnz%2BFEd4hSNjhUMdIgWC9nL%2BPMnJ%2FVaqoh61nv4igUwn5uh0MuCbcfDB7gufBiKVFT9psz2HziZSpbcKw7I1sifLPmOcMbQkdcgmlNygxnk2ybjukIkCEuauXdv77QaROaPMRIgF1co0zTq03qbwSrCvTwmgALfEn2N%2FUBQg8P6vlGaxpwgPmaBxfZ%2BTz1TD9GrN77aMQKx9KuuSPT29gOaj3U0Me%2Fzefns5Tx0O%2B2w9qoPo%2FXH07HYLRqkrwdqbVLoFqA61R6BwJxZiqhtCL5ZAA4VhcSI9xUtYOZtF0GeSsrwu8a8gan7tGB4oBA%2FH2MjLLgfVWIhK1rjCj3TOegP%2FLuIebzS8EmhmHh%2BGhwuNXMgV8VKMeo5MPH9y8kGOqUBEYLveeEBd19aaV91YOwo%2FlMZJSUHWWPKZwDPd%2FEyRTrnF%2FuJegTFmIOngn1VIl0BIt1Cleynxbq4nbjxAkdTPwATfwaF71gh4hWCnj6H%2Fe9ySGim%2BpHl0f67bdPuWXcfy2kN07DDF3771trYwP%2BaxFX70zzu1mockj%2BNbU2QPfr62ZTi721%2FGqNNn2RmYbaNL45cN5TbIYE496squjCdpV3%2Fuswj&X-Amz-Signature=16ff6e8ece536d49bcf19eb2f518f9c0bc46f2f9ba1c887740d0c2ac6698a9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
