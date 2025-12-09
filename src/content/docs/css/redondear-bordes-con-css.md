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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KDAZHW6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCOLNEL%2B4IdZNu4YxUDFrTQMycwUOtjHqlNluUchlPowIgUCOwua%2F79ZarpgjLWhg3yw3G7Oq480f0pzeco61zHhoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0FhJPYtTd4ekonvyrcA07Q4DscgY8SrHdXeuPV6ostoXbpNyBu9NsOFMow4eSg2AbS4KpDla9qh0bTdZyFtlaxsxrqiZRTDNpYEbCbSiEoGbqaPQjqvD5Kw78GU6b5J1WSGVKnPHg02HcwmKGTU%2BFoAB9zDOxDXSZrpTOlSLJUqrhAA3tnQamnGyopya8MC%2FZHZi6KOBPdWbCVujCS9RVCy0J%2BuxOIHqu02RSWV9xl7CcMfhFWTekvPT1C0QkOphtkM9De2W3srYFjES%2FbFhNnObNL%2ByDzim1GrY7h2lTYS7EXM8nE8X%2FbvYpsEyhLjyaPds4CI0pn8PK7dDGyJnCK%2FxiJ%2FzpeMbtMWhh2kynDFLgmg%2FqrFoabZ%2BWB4U1Nd%2Br9MPr1j3Z9iGzdeYx3BhD3pT8on9MyRg1Xcs02ods1VXOeCvvGgAQiIH1UEHs63uFl3uggSOMOCA%2BMHKXGitZtx%2BpwhR0%2FO5XZxD9ejqGw5axWDHr3Z%2FuchSXSXUNczwD7bOdHxXw3GgV9rvU%2F%2FPGTCxzZ433BtO1Bk8obCxIwKf8FO7rbJxPPt%2FTp47XPrn20letm7ocYjQOnSMjjrD3B0VTEIxakEfd0ZgZjPbqSzOIrXGqiMAkze9kyAtPXX7TDNkqDfY3gd93eMKHD38kGOqUBz8SfIjf01yyO4ZJhPHIt7bw1XKZjP%2FCE6%2Bdv7chhZ365z6Q73lqCcY1%2FqC5Ir8nslBsidfG3ryO8qAXma%2FJk0qIjNZil8BMaL2u%2FqEe3d0dLySlCFFOIAQZ8R0R22Fe3beABfHIcn04IXdWZ78NjR4CxucUd3QHd%2B8rDMvzwXmGgJkW92IWGH6GSWb%2B7kYsHQVuTYn6SwJvuq39glx3tquwOCpKJ&X-Amz-Signature=803139de771d726287d02673f9486a44e27a60df7f50ba86e7add77ffe5253df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KDAZHW6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCOLNEL%2B4IdZNu4YxUDFrTQMycwUOtjHqlNluUchlPowIgUCOwua%2F79ZarpgjLWhg3yw3G7Oq480f0pzeco61zHhoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0FhJPYtTd4ekonvyrcA07Q4DscgY8SrHdXeuPV6ostoXbpNyBu9NsOFMow4eSg2AbS4KpDla9qh0bTdZyFtlaxsxrqiZRTDNpYEbCbSiEoGbqaPQjqvD5Kw78GU6b5J1WSGVKnPHg02HcwmKGTU%2BFoAB9zDOxDXSZrpTOlSLJUqrhAA3tnQamnGyopya8MC%2FZHZi6KOBPdWbCVujCS9RVCy0J%2BuxOIHqu02RSWV9xl7CcMfhFWTekvPT1C0QkOphtkM9De2W3srYFjES%2FbFhNnObNL%2ByDzim1GrY7h2lTYS7EXM8nE8X%2FbvYpsEyhLjyaPds4CI0pn8PK7dDGyJnCK%2FxiJ%2FzpeMbtMWhh2kynDFLgmg%2FqrFoabZ%2BWB4U1Nd%2Br9MPr1j3Z9iGzdeYx3BhD3pT8on9MyRg1Xcs02ods1VXOeCvvGgAQiIH1UEHs63uFl3uggSOMOCA%2BMHKXGitZtx%2BpwhR0%2FO5XZxD9ejqGw5axWDHr3Z%2FuchSXSXUNczwD7bOdHxXw3GgV9rvU%2F%2FPGTCxzZ433BtO1Bk8obCxIwKf8FO7rbJxPPt%2FTp47XPrn20letm7ocYjQOnSMjjrD3B0VTEIxakEfd0ZgZjPbqSzOIrXGqiMAkze9kyAtPXX7TDNkqDfY3gd93eMKHD38kGOqUBz8SfIjf01yyO4ZJhPHIt7bw1XKZjP%2FCE6%2Bdv7chhZ365z6Q73lqCcY1%2FqC5Ir8nslBsidfG3ryO8qAXma%2FJk0qIjNZil8BMaL2u%2FqEe3d0dLySlCFFOIAQZ8R0R22Fe3beABfHIcn04IXdWZ78NjR4CxucUd3QHd%2B8rDMvzwXmGgJkW92IWGH6GSWb%2B7kYsHQVuTYn6SwJvuq39glx3tquwOCpKJ&X-Amz-Signature=a5f6de9c3978b74acf78503b81b6f29cf9d849132d4a216ff1fbad78da2b25c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
