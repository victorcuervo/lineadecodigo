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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMWSJLI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrbF2VVO25bSuK1h0QpwhnaJVYeJEpm5Rlmhgqmor55QIgfA55NMBx3Jz1iivKoqruYTOs%2BstVcEU9vS1z5ZUyEPsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBt8b4%2FIjwd0SqH1pCrcA1%2F6%2FLZh20BSLG7pyHNoBpYq8hMN%2BGg0ZBYDKk9MFg%2F5%2FaeisMqdjwFCA4YuV1xZYmO2tLl4RFlVsTf840iuD2EWWGjmeaL%2FiThaNFXGCM07LkYlvSmzPtYS98WnglLh8IRaYFp6Rjpgj8LgViYfMo4OA2k7Ca6gNBtLStptL9lkk%2FU8%2FrwIpSvQizCY1302g7ayo8U1THvmBFJuSJSApL1Azgai2Ww4F7lr7qBWQHxhpEmqD8B%2FQ5cdzqZrdY5XtaDLMEDzcVhTLdoQcN1Vhp%2BXLTIo8mWVHY%2FN6cUpWfF%2FNMJAtFjmFr7eEhRjerKCcuGy5sq8NGJ731SqHFP%2Bv98q9tYEbaszdEHBErRtbzh2GkZTe0yzszO2XmtyW6g2RYKLHmwKhEDc7bQqsKnwe5NBIGc2TcCOsnip73703UnMRug5fbJhw7sIkXY9NyX2h6SVSt84y9eBwpjV6YytigEeGummdIANLvd4qH6SiIPnmP6mf0mtr6vhkCB9o7liyanADwLV%2B%2BgfBO2%2FQxdk0lkamgrMDveNEQ27KOBXWJIQIVIc2r8h3vn7N%2Fwel3vfmpoB6q1Ph9dwcQ3Qwwj%2FMHNLeVterahNZbKOwf%2Fo%2BWm4FC9hJY5bo3GLqrX3MMDc3MkGOqUB9jXsHUaDgo%2BmUt5dinwye0vs3QrcXBLNbErgwOP2aPV1ojTTgxnnOkgjcMymdjlTJiDa65YFMwOsby1g6ow8fNVTiBFjkkPmrc3LcdrwH1VjipXDq42w%2FjJSI2NTIJ498DWsocPZohEtg3oylLDMzVJu8RFZ3SK7BqxOyu%2FpUxPj1hB0nIVQ2JYiK5tkRUo%2BlHjCVWpBFu3z2xUFyhM3LMsoa3rS&X-Amz-Signature=bd073f2d9f6e0cb5cce5bf20ab126a005db642daca597c98d787aa083ebe11e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMWSJLI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrbF2VVO25bSuK1h0QpwhnaJVYeJEpm5Rlmhgqmor55QIgfA55NMBx3Jz1iivKoqruYTOs%2BstVcEU9vS1z5ZUyEPsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBt8b4%2FIjwd0SqH1pCrcA1%2F6%2FLZh20BSLG7pyHNoBpYq8hMN%2BGg0ZBYDKk9MFg%2F5%2FaeisMqdjwFCA4YuV1xZYmO2tLl4RFlVsTf840iuD2EWWGjmeaL%2FiThaNFXGCM07LkYlvSmzPtYS98WnglLh8IRaYFp6Rjpgj8LgViYfMo4OA2k7Ca6gNBtLStptL9lkk%2FU8%2FrwIpSvQizCY1302g7ayo8U1THvmBFJuSJSApL1Azgai2Ww4F7lr7qBWQHxhpEmqD8B%2FQ5cdzqZrdY5XtaDLMEDzcVhTLdoQcN1Vhp%2BXLTIo8mWVHY%2FN6cUpWfF%2FNMJAtFjmFr7eEhRjerKCcuGy5sq8NGJ731SqHFP%2Bv98q9tYEbaszdEHBErRtbzh2GkZTe0yzszO2XmtyW6g2RYKLHmwKhEDc7bQqsKnwe5NBIGc2TcCOsnip73703UnMRug5fbJhw7sIkXY9NyX2h6SVSt84y9eBwpjV6YytigEeGummdIANLvd4qH6SiIPnmP6mf0mtr6vhkCB9o7liyanADwLV%2B%2BgfBO2%2FQxdk0lkamgrMDveNEQ27KOBXWJIQIVIc2r8h3vn7N%2Fwel3vfmpoB6q1Ph9dwcQ3Qwwj%2FMHNLeVterahNZbKOwf%2Fo%2BWm4FC9hJY5bo3GLqrX3MMDc3MkGOqUB9jXsHUaDgo%2BmUt5dinwye0vs3QrcXBLNbErgwOP2aPV1ojTTgxnnOkgjcMymdjlTJiDa65YFMwOsby1g6ow8fNVTiBFjkkPmrc3LcdrwH1VjipXDq42w%2FjJSI2NTIJ498DWsocPZohEtg3oylLDMzVJu8RFZ3SK7BqxOyu%2FpUxPj1hB0nIVQ2JYiK5tkRUo%2BlHjCVWpBFu3z2xUFyhM3LMsoa3rS&X-Amz-Signature=f32464a807aeb6fb712186dc3b5f2d937981a66acb11c0f0e8bd23d97862eb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
