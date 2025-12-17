---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRL6U5CV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsHzTGmY9fKckiWhwXL7ipK6Y0ErYd2FWfZNUFQY%2FwNgIhAPXFDeaDijbthAri9W7dHq1K837bbk8txBr1tjZamw61Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy7vjL26%2F6EBofCGX4q3ANaKOTF%2BAluXH%2FlmQDwUkACSE6PvKv4OEI0n4fpWP8hjvVIABRYjn53c%2FAe2O2vigW2xrdUAgpqiyYF6VSX%2BcwGZh1489BKftRxs1K4peH5boiZEvWWgdWVkB4TmOk8I4p0geMMLSTY9S7F15KC%2BFx56g1Lrmu12ucLjS0HuqEbrqFlSkny%2FjuAXvvLHKM0CzMJOTXOT0IZkWaSQhWmD37ZPJ1%2FsYgsBmOx%2FfnWN9JtnQoWg2DrBj3lfiU5ZgqVI%2ByEFKwSTJ9SziabhMj3JvnmHydrR1g25oG7K86yKfF2Wb4KGvCX5mDrKcSxkfSxLciZv37lNtoS2QbZ5ZoW49%2B6V3L8yvRBqlThNAp9FAn8QK9f6UKbf37W3Qd%2F%2FN9i1iicz9mQYvWg8ouablbVt3tSU8%2B9QONu8jdaWE0WAkWW%2FqpCQDDlH0bPveNUiP%2Fafwhap%2FYsw1Qjbq2lRfFE0fycm1cDVRyk6Nr45OmJUSpFyJl8KZagFxano2X54flZ8hsrVe5YemOBPdx65%2FYjyL4NVXTd5TF20Z8wofS6H%2FkrxHsd49MPyYxtQQ8A0jbRoc2YuZqJRkNTBz%2FtTVTFCEpLVfhlXhyXZSSgM4VsONuL%2BOZ1W8TaY6cUX%2BYVLjCYzojKBjqkAQvHn5j5qZOiH4wL6F38aXeFHLi6Zt%2BU%2F6WXykDTI7S3FZzhZnNDwERMTDu8ucSqEVjkgRleAC8CavLTWyqmAwvUpWpo7PjjarKQBmakqpoCHBN2TB1%2BCeIKdPvoVzkyU2fy8UqFuo1bIC5oCXSQDBlv9iYYfmHEvxU7YFLpZYDrR01US6Zs2YO0EXDfu86hg%2BpZRjD%2BcCjdK3ZPm6AoBLdvpGV7&X-Amz-Signature=66f5e97a6330bd28f9c867149a31f38f042de2399d4aa1bdb16edb1da7eefbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRL6U5CV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsHzTGmY9fKckiWhwXL7ipK6Y0ErYd2FWfZNUFQY%2FwNgIhAPXFDeaDijbthAri9W7dHq1K837bbk8txBr1tjZamw61Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy7vjL26%2F6EBofCGX4q3ANaKOTF%2BAluXH%2FlmQDwUkACSE6PvKv4OEI0n4fpWP8hjvVIABRYjn53c%2FAe2O2vigW2xrdUAgpqiyYF6VSX%2BcwGZh1489BKftRxs1K4peH5boiZEvWWgdWVkB4TmOk8I4p0geMMLSTY9S7F15KC%2BFx56g1Lrmu12ucLjS0HuqEbrqFlSkny%2FjuAXvvLHKM0CzMJOTXOT0IZkWaSQhWmD37ZPJ1%2FsYgsBmOx%2FfnWN9JtnQoWg2DrBj3lfiU5ZgqVI%2ByEFKwSTJ9SziabhMj3JvnmHydrR1g25oG7K86yKfF2Wb4KGvCX5mDrKcSxkfSxLciZv37lNtoS2QbZ5ZoW49%2B6V3L8yvRBqlThNAp9FAn8QK9f6UKbf37W3Qd%2F%2FN9i1iicz9mQYvWg8ouablbVt3tSU8%2B9QONu8jdaWE0WAkWW%2FqpCQDDlH0bPveNUiP%2Fafwhap%2FYsw1Qjbq2lRfFE0fycm1cDVRyk6Nr45OmJUSpFyJl8KZagFxano2X54flZ8hsrVe5YemOBPdx65%2FYjyL4NVXTd5TF20Z8wofS6H%2FkrxHsd49MPyYxtQQ8A0jbRoc2YuZqJRkNTBz%2FtTVTFCEpLVfhlXhyXZSSgM4VsONuL%2BOZ1W8TaY6cUX%2BYVLjCYzojKBjqkAQvHn5j5qZOiH4wL6F38aXeFHLi6Zt%2BU%2F6WXykDTI7S3FZzhZnNDwERMTDu8ucSqEVjkgRleAC8CavLTWyqmAwvUpWpo7PjjarKQBmakqpoCHBN2TB1%2BCeIKdPvoVzkyU2fy8UqFuo1bIC5oCXSQDBlv9iYYfmHEvxU7YFLpZYDrR01US6Zs2YO0EXDfu86hg%2BpZRjD%2BcCjdK3ZPm6AoBLdvpGV7&X-Amz-Signature=9a9df379d7d0c23e43d7e8c0b79aebbd82b37ebe8ce226c4b1ea4c4740dc76a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
