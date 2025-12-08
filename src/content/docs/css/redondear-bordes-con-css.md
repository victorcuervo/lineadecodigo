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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWT7XSVQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOL5TQX8C0EBR33T4yrTG8A%2FLF5cf4uH8CV9Qw%2B9pAdgIgHtyyXT%2BnHZP4WBKmPC7i%2FTnEh0jdD5CR6q%2Be8L45gjoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8pjojnrOcdAbXhKCrcA8BCIqqQo%2BqGIXIHDWaaMt%2BX4QH4bCN4pV8zlHy%2BSsSKhpVk%2BXm1OVO9MP%2FV%2BIlxAwEtDpVvx8jkw3pD8Y8MTAOqA9W4RI9aY%2BAimSk5s3fmvVIKUNlCa%2B4exSZ95%2FTNP92H9CRqbmIkqbd2S6QuiKN%2Fbz1CSklkOamVgm0prf05s9pqKQxIYLb69ywW%2BKR%2FUGpDJhtHAMiYIp1iwvLXqrs2XaHcok0V24Rml2VmKgIdIBf%2BcENCu4Zx%2FftwDM7nFefQbun3eLyJEZfzGkggLJh1W8lY3e6TntnZDuT%2FmqKM7OqDnkyYTS5i535%2F7cpefXdhYP%2FbLu7%2BDQ%2FGtV9Gx9emNh3xALGC%2BQpi1C9M2VdxpF8mpJZijCqy5Vkn0j0jfzYx3m%2Fx%2BnhIjM%2FQ0igaJ6mWfVlSi8TXZkj7eyXmGX%2Bd2xXGtr%2FkBgd%2FIQk3H2bH%2BrrKGmXs7UceTTLOz2PlAeT%2F3r6vVZsbFRgO9syLNeTUls%2B220iYA4E1xTsWLn613Qzwh1wDuYrLREo2c4LzgNBl%2Fs9JTNpGmTaZhkns%2BmyYJrd8rSnjcbWURzI4ka%2BsAaCQJx2Y5%2BXV9mkemfDyqqYu%2FbKhwRI4E51mv3Fkx0e2EmCu4r70TIS%2Bq%2FzJMK%2Ft2ckGOqUBieEb2f9r53SAfdBPNaY6bWeaZLHHA5Ut%2FCV1W3UZqWjIQiE9x3Q2KDfEBOVCY1Mu9YTKNQyRfvPMlm%2FUXGGjfFv%2FKjGhhZ1wzTqpVBC08N8IVcuEH9LfTLlj0A42GjKJwvyCeCwEpLqFYtY2LDfuGj3krPc8rIGOpFkEnJ30p%2F2KD7lDLRFGMzLtrGB83WIiNA6SjVwP%2FZVp1wKiqX8psBr7xMYm&X-Amz-Signature=e5adb1a7c3ba426a35d5df938e3fcf83de9be8cba23a14c882db324a97e738f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWT7XSVQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOL5TQX8C0EBR33T4yrTG8A%2FLF5cf4uH8CV9Qw%2B9pAdgIgHtyyXT%2BnHZP4WBKmPC7i%2FTnEh0jdD5CR6q%2Be8L45gjoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8pjojnrOcdAbXhKCrcA8BCIqqQo%2BqGIXIHDWaaMt%2BX4QH4bCN4pV8zlHy%2BSsSKhpVk%2BXm1OVO9MP%2FV%2BIlxAwEtDpVvx8jkw3pD8Y8MTAOqA9W4RI9aY%2BAimSk5s3fmvVIKUNlCa%2B4exSZ95%2FTNP92H9CRqbmIkqbd2S6QuiKN%2Fbz1CSklkOamVgm0prf05s9pqKQxIYLb69ywW%2BKR%2FUGpDJhtHAMiYIp1iwvLXqrs2XaHcok0V24Rml2VmKgIdIBf%2BcENCu4Zx%2FftwDM7nFefQbun3eLyJEZfzGkggLJh1W8lY3e6TntnZDuT%2FmqKM7OqDnkyYTS5i535%2F7cpefXdhYP%2FbLu7%2BDQ%2FGtV9Gx9emNh3xALGC%2BQpi1C9M2VdxpF8mpJZijCqy5Vkn0j0jfzYx3m%2Fx%2BnhIjM%2FQ0igaJ6mWfVlSi8TXZkj7eyXmGX%2Bd2xXGtr%2FkBgd%2FIQk3H2bH%2BrrKGmXs7UceTTLOz2PlAeT%2F3r6vVZsbFRgO9syLNeTUls%2B220iYA4E1xTsWLn613Qzwh1wDuYrLREo2c4LzgNBl%2Fs9JTNpGmTaZhkns%2BmyYJrd8rSnjcbWURzI4ka%2BsAaCQJx2Y5%2BXV9mkemfDyqqYu%2FbKhwRI4E51mv3Fkx0e2EmCu4r70TIS%2Bq%2FzJMK%2Ft2ckGOqUBieEb2f9r53SAfdBPNaY6bWeaZLHHA5Ut%2FCV1W3UZqWjIQiE9x3Q2KDfEBOVCY1Mu9YTKNQyRfvPMlm%2FUXGGjfFv%2FKjGhhZ1wzTqpVBC08N8IVcuEH9LfTLlj0A42GjKJwvyCeCwEpLqFYtY2LDfuGj3krPc8rIGOpFkEnJ30p%2F2KD7lDLRFGMzLtrGB83WIiNA6SjVwP%2FZVp1wKiqX8psBr7xMYm&X-Amz-Signature=3c523574d1934bd3fd3c9de28437ff4cfd8d92141d9c88163cd333cad627aa7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
