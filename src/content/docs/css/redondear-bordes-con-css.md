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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667M6H7GE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxskxGfW26C1GvSzXBK1mm3A9dIQY80dHzm3t%2B37d2igIhAMoFdLxOE10mnDLKVfwiWUH3TIr50Qu%2FefB3Llgh4%2BuQKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd4GyQzPxxriz3vlUq3AOGhUjGAXTfxmwdA23LJGtJJFFvk967r7zsQleM2c1ug6n5h32Z8sjNRtXucr4amWwWJO1c527j%2Fyb2nYf2ZsRcWOpwZDqWlPkJx58Pc%2Bel%2B88m3ASJrEeUvXsAy8h6l%2Bnk6B32eh68Xsoi%2Bks9WfJAYhlQMxyq1p5Ar%2BARICkhuvczdFNZQRlqfNYzSci8kxBfL2JK%2F8cxACdFPuKNL6f1iVePYpEMHKFuQgZ9ASM0KG4sGOTFEIvSliPtIQzpx4TWwRB9LOUydAB0U503YukOgt1PBwBLAA0E59wAwGlUvFzitkdwULLvjxRh3BM7T8sAm7vsn87h4O%2B1WYncmoUvkuzdAa6hj3RzP%2FZS94phsR%2B7ebqZtnpyeJKl24LVkYI%2FmlngXbJScSXKhVCJcSeMZZ%2FsjmnpmOF09rq%2F22PhrTKi504G0Mm0tHpEagXj49yiM86K78x1zsBB%2Bju9qwysZPaiiDztZecwzCC%2FSw7Ss2nqkvzOd%2B926qDJKb%2F50hvBlES9XDvXdTF0zPWq7UeyI8K%2FFryoiR8epv%2FM6rL%2FrsE4Xhq4qVxBbnn1GTvvf3TtsSd4u7sbIcqt0pY5t849v4eUBlJUAkxfjI44MMrsE9TkxDbY3u5eh2efeTCW7tjJBjqkAbgmQkSSvQaVgmvpYBiz935EdHW3%2BxManui2gw435MUPgqZLNO3SkKGU%2FMMWwzSP2frhvHF6MSSnr%2BWkL797dUpEBq8T4K4uMEJtHU1mY22XRv11HO2o0L%2BO9q5nxtMFAAJVW3b9mQCsdBcx4lUgoIKKdc1vC5SJI34yc7f7Dy3Elam6PqyOVZ3fEMvYVXwfDFo0JE3xHdMkwIgUjR%2FNFLuDa66H&X-Amz-Signature=4ea2ba2e1297357e47e0f24c0c5e31a998d778d1d29931892abde4b329fe30c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667M6H7GE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxskxGfW26C1GvSzXBK1mm3A9dIQY80dHzm3t%2B37d2igIhAMoFdLxOE10mnDLKVfwiWUH3TIr50Qu%2FefB3Llgh4%2BuQKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd4GyQzPxxriz3vlUq3AOGhUjGAXTfxmwdA23LJGtJJFFvk967r7zsQleM2c1ug6n5h32Z8sjNRtXucr4amWwWJO1c527j%2Fyb2nYf2ZsRcWOpwZDqWlPkJx58Pc%2Bel%2B88m3ASJrEeUvXsAy8h6l%2Bnk6B32eh68Xsoi%2Bks9WfJAYhlQMxyq1p5Ar%2BARICkhuvczdFNZQRlqfNYzSci8kxBfL2JK%2F8cxACdFPuKNL6f1iVePYpEMHKFuQgZ9ASM0KG4sGOTFEIvSliPtIQzpx4TWwRB9LOUydAB0U503YukOgt1PBwBLAA0E59wAwGlUvFzitkdwULLvjxRh3BM7T8sAm7vsn87h4O%2B1WYncmoUvkuzdAa6hj3RzP%2FZS94phsR%2B7ebqZtnpyeJKl24LVkYI%2FmlngXbJScSXKhVCJcSeMZZ%2FsjmnpmOF09rq%2F22PhrTKi504G0Mm0tHpEagXj49yiM86K78x1zsBB%2Bju9qwysZPaiiDztZecwzCC%2FSw7Ss2nqkvzOd%2B926qDJKb%2F50hvBlES9XDvXdTF0zPWq7UeyI8K%2FFryoiR8epv%2FM6rL%2FrsE4Xhq4qVxBbnn1GTvvf3TtsSd4u7sbIcqt0pY5t849v4eUBlJUAkxfjI44MMrsE9TkxDbY3u5eh2efeTCW7tjJBjqkAbgmQkSSvQaVgmvpYBiz935EdHW3%2BxManui2gw435MUPgqZLNO3SkKGU%2FMMWwzSP2frhvHF6MSSnr%2BWkL797dUpEBq8T4K4uMEJtHU1mY22XRv11HO2o0L%2BO9q5nxtMFAAJVW3b9mQCsdBcx4lUgoIKKdc1vC5SJI34yc7f7Dy3Elam6PqyOVZ3fEMvYVXwfDFo0JE3xHdMkwIgUjR%2FNFLuDa66H&X-Amz-Signature=ba15a55fc462fb271c3bc5f92ff6b5cbc83a11801d43d7bfcc7b190d70ce117d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
