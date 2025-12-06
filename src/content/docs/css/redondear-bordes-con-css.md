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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEWA77Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyugvJjnlr1%2FEoPQHafkp4edbDBjb7Ownlm5TLP0fJ8QIgGCHyAbLX5iQIAAzv39rvaVcSebxOPO%2FjRucRs40oeVIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpLnQX1JPR8nrB3oSrcA0kVe3iVbm%2FM5TkF9ZIlVGfp0iiUeCjKCIqnmSJgzHD03CAIg2iXaEf9iLtpC2s4k6SWuiQA7eceQd8P1MDUm5BmUmD%2Fbz3GKh13YFJCJYUnZWnOM%2FROo9WcJJObEVCJ9mAXWmjI9pyfn6V771r%2FjQfb1%2BcHYoH5qsUVpaqFwkYF4iMfoUuLI4UHvWEu2YVlWP8%2Bb%2BfcK1gMz1sngr929q3udSnuZWXC%2Fqna%2B8X5UM4501XwOSKokVNpX%2FDA%2FVEcLP%2BA0F8J3xhwfvM4NuZbixt8t5DR0Z272VFWCNtbhjQ2HNVmHLNUkRqEtwM4qEWNhM4r9WGrBXpmPAm%2FYrjU7Ycb6haMroxU1WB%2FaE812Fa3C7i5GfAynj51ikyMeYqNIqzadycgrVYQQJE9M1XIAfFUgHL%2FiqI8HPg0szGcX7LlKfhRZyHOZIEInzQLITp74OTstXb5%2B2GVCSJYmA8rLpqcP%2FJHL6l07B2xjTCV6AYGeEiVM%2Fn6Rt32g0%2FR2P1%2FcRgcJ0Q1b8iq1JiBd2lZfP1n5%2Bek2fzINp7%2F7z8LYVmFgXva6a05QSuSFDF76cvfg8ZkU6DjY21rsrfA3%2BcR6Z5S3QbH0Sducl7Z4e6mbSsy0gaGqpWZYsNdWJUPMOi8z8kGOqUBMjGHR7XnnWLcskIC%2BZb7FVQ4JN%2F3P7lpDQ5Gm5NTqLd%2B6QfJJltpMgtLLJyPRfoVsV980arWguCvA8CYs3aeLT9OgptGJJc04EsiidAXlo6ejFss7A7yVtK8SJKbErEok5ce%2BOClm9Z5u4ueIpoq%2FeIQTX42mQP%2FoZfAPocQ8%2FZ5cBaD9x3atIURSpyeG32Zvmg03zsjukiiIlAZPGNXYQrGPadd&X-Amz-Signature=3865b7911163f1b1e16095e34e599fb546cb6825520f410f87d7cdac2eb37b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEWA77Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyugvJjnlr1%2FEoPQHafkp4edbDBjb7Ownlm5TLP0fJ8QIgGCHyAbLX5iQIAAzv39rvaVcSebxOPO%2FjRucRs40oeVIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpLnQX1JPR8nrB3oSrcA0kVe3iVbm%2FM5TkF9ZIlVGfp0iiUeCjKCIqnmSJgzHD03CAIg2iXaEf9iLtpC2s4k6SWuiQA7eceQd8P1MDUm5BmUmD%2Fbz3GKh13YFJCJYUnZWnOM%2FROo9WcJJObEVCJ9mAXWmjI9pyfn6V771r%2FjQfb1%2BcHYoH5qsUVpaqFwkYF4iMfoUuLI4UHvWEu2YVlWP8%2Bb%2BfcK1gMz1sngr929q3udSnuZWXC%2Fqna%2B8X5UM4501XwOSKokVNpX%2FDA%2FVEcLP%2BA0F8J3xhwfvM4NuZbixt8t5DR0Z272VFWCNtbhjQ2HNVmHLNUkRqEtwM4qEWNhM4r9WGrBXpmPAm%2FYrjU7Ycb6haMroxU1WB%2FaE812Fa3C7i5GfAynj51ikyMeYqNIqzadycgrVYQQJE9M1XIAfFUgHL%2FiqI8HPg0szGcX7LlKfhRZyHOZIEInzQLITp74OTstXb5%2B2GVCSJYmA8rLpqcP%2FJHL6l07B2xjTCV6AYGeEiVM%2Fn6Rt32g0%2FR2P1%2FcRgcJ0Q1b8iq1JiBd2lZfP1n5%2Bek2fzINp7%2F7z8LYVmFgXva6a05QSuSFDF76cvfg8ZkU6DjY21rsrfA3%2BcR6Z5S3QbH0Sducl7Z4e6mbSsy0gaGqpWZYsNdWJUPMOi8z8kGOqUBMjGHR7XnnWLcskIC%2BZb7FVQ4JN%2F3P7lpDQ5Gm5NTqLd%2B6QfJJltpMgtLLJyPRfoVsV980arWguCvA8CYs3aeLT9OgptGJJc04EsiidAXlo6ejFss7A7yVtK8SJKbErEok5ce%2BOClm9Z5u4ueIpoq%2FeIQTX42mQP%2FoZfAPocQ8%2FZ5cBaD9x3atIURSpyeG32Zvmg03zsjukiiIlAZPGNXYQrGPadd&X-Amz-Signature=6691783f493a3585fbc52850c9aba9c72d69ec068a7669f11129787cd6d463f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
