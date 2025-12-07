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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWW7SBL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLBM9wqjSO%2FLrrIPfYWahNS6T9gBWrsoGqxo0qGTq0wAIhAKUylCcNH3YPH61lT1dbh0wfQEwO2HGhh7i40250Vw%2BAKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh4ycgpqkRZNgvYVwq3APKYOiOKrTOnVXYX9mUaxJmNrcJWR53PmT5Gcnb6HQAygvPJC6qijftbdeWTnzjjuPnd4P5C9IRqHRqfX2CA0YnuHct43JC9oI5JUcv7yYsxURmAdqoFu9IS9snwGx5kFWvezIH7FFIxporCn339OFUmXxCQd8rGzxN8Kip87KuCNa2MiFNGXIoWwDCRAjh%2F6m91ZvU1e1mJ5mrJQRekBRr6mhGE9%2BfFgNRUEceXlD4OLVpRPQif7WBWAdXMvI7GCxw%2BWsAjjFRyQc3Y7OE5eK974a6x443DG1lVtM1QIV0uZ1vtnrIwbjryVQcMHUVYhfdy4kmQ3ZnYlOPGLnoNdmprK%2FUUpDc%2FCQGgP4cVoe%2B7peP8dCRwIMZj6STENdafoe%2Br589aVYReOCt3kQBKCVvb2MFnwRLt3io%2F92d8dEdDZYog%2B%2BGMDTBJc0LVddxjHwZLF6SYiHzpfMg7Au%2FKg1z2FE0vL2x7m3Lm2dhewYTT7dF0aFSn3ErShkC%2BjolouOqD5AWHGOWK7Q6eScOYnfRUbIT%2B%2B4IzA7VUwd7VkIdeEoyuqK6PVB1Dm%2BA3wbL4pHO2BIQ4y4ZK7gFmJHEE9XByPxlkF1exPqe61pWjLS5wqr%2BM2hgUgOBdIfe8TDYoNTJBjqkAaryseGi0OU2el7NPCysSKTb%2BPqVWHGrjw6V1hzZYNqQPYaeLAQoR3TW2qDTH00kXFh8R14OFPESTYQBSfEonBr00rIinXjLiQzQGzG3Ho2XT0ZauFmZsVDQH1C6IVQxPW1HMM%2B0pg4pjW2Jg5rn0zMLqTs7S2ulOskLmRIhEd3ce0inMVXyi6elznvU%2BJcgpr468vfp3OE1hbp90QuyTa6N4ThZ&X-Amz-Signature=80834c2f34cf181f29fb5f7da09776a428bec892626dac3e460a9b4d3d1a8ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWW7SBL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLBM9wqjSO%2FLrrIPfYWahNS6T9gBWrsoGqxo0qGTq0wAIhAKUylCcNH3YPH61lT1dbh0wfQEwO2HGhh7i40250Vw%2BAKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh4ycgpqkRZNgvYVwq3APKYOiOKrTOnVXYX9mUaxJmNrcJWR53PmT5Gcnb6HQAygvPJC6qijftbdeWTnzjjuPnd4P5C9IRqHRqfX2CA0YnuHct43JC9oI5JUcv7yYsxURmAdqoFu9IS9snwGx5kFWvezIH7FFIxporCn339OFUmXxCQd8rGzxN8Kip87KuCNa2MiFNGXIoWwDCRAjh%2F6m91ZvU1e1mJ5mrJQRekBRr6mhGE9%2BfFgNRUEceXlD4OLVpRPQif7WBWAdXMvI7GCxw%2BWsAjjFRyQc3Y7OE5eK974a6x443DG1lVtM1QIV0uZ1vtnrIwbjryVQcMHUVYhfdy4kmQ3ZnYlOPGLnoNdmprK%2FUUpDc%2FCQGgP4cVoe%2B7peP8dCRwIMZj6STENdafoe%2Br589aVYReOCt3kQBKCVvb2MFnwRLt3io%2F92d8dEdDZYog%2B%2BGMDTBJc0LVddxjHwZLF6SYiHzpfMg7Au%2FKg1z2FE0vL2x7m3Lm2dhewYTT7dF0aFSn3ErShkC%2BjolouOqD5AWHGOWK7Q6eScOYnfRUbIT%2B%2B4IzA7VUwd7VkIdeEoyuqK6PVB1Dm%2BA3wbL4pHO2BIQ4y4ZK7gFmJHEE9XByPxlkF1exPqe61pWjLS5wqr%2BM2hgUgOBdIfe8TDYoNTJBjqkAaryseGi0OU2el7NPCysSKTb%2BPqVWHGrjw6V1hzZYNqQPYaeLAQoR3TW2qDTH00kXFh8R14OFPESTYQBSfEonBr00rIinXjLiQzQGzG3Ho2XT0ZauFmZsVDQH1C6IVQxPW1HMM%2B0pg4pjW2Jg5rn0zMLqTs7S2ulOskLmRIhEd3ce0inMVXyi6elznvU%2BJcgpr468vfp3OE1hbp90QuyTa6N4ThZ&X-Amz-Signature=3e4a094840b4c1cb5c389e13b9288e0d9c8e4fc290cf801fb22faede1e35dc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
