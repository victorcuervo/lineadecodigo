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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LEY44R5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2Bnh%2BREoQcOlgtdoVLpQ%2BrIN%2BUTXeFt9u9X%2BYqfG5gQIgTiIc7GDhphFvq9Ej7xyLMDSO1k8gPD4FC%2BpAkxYLGs8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXQumwkJ7x5RfKqoCrcAwrpIZQOKikrdGOrEaFnUDRPjx0jpDTGdpHb27JGyReDum01NYCJZOo4nSVjuaGLfolflrFHqmDwSxlylIKsyuVBE6mJSI%2BE5AcF8XRdoFTGsfczpeQ0PjSS5OnJgOB1v%2FPTJ66nm8yK4kb8Ia7QSFCTjbkPMJDD8yJChWccln74z%2FJ%2FAXA5HYJ8gB5btjf%2FpaCLGZPM3UpT2FzfcOhwyI2ZIfHx6nxKFBUsGdjIeiOccopMwRy3aJpsyHW%2BySnxnJxC6O%2FBdeY7UaTzFWB%2BdNal7k12RM5UOUu55NZvN8GGOyl%2FBPxoXtR8irQLsk5K0wgWmZwbw29yv9Nr8jmdTTv%2F6hhl9OezUkCXsB39s%2BRaor1HdOr9dWd%2FVlgnIAGZgqL5WhMVAXsXSx7nRVXrO2S%2FMGCPzQSCMfou360PPQpO%2FqV%2FzMFViemVwpv5ptt9VoiyYZLVvFN7GGYL3%2Bxp4lIXStXIYZXLQ3GBZ2Ccl5iS%2BJlqOJdI5HxSJxKzuNIbKnPnHSirsDfkvMPtu8IiYqmCgkbFwXO2TsM4TARhCxtfE8kXu7JM8rDTAYQhq8eQx%2FobDJHEMQkHKFLBkrj3Rx9qotKiTr6LsSTcitEM%2Fu%2BAWmR81D4z%2BWabZfM0MKqd1MkGOqUBYjxRJ8uZcwS5pFXvmY5yJvWjXx%2BlZBQQ%2BI3wQ2ObJzE%2B7x8cYBuOAyrILv4gjV5q5YPc3I8o7eBidqUOrOeYjCdFQL3aE1a%2BJ68TC6yC5zyONbRH7901XXCxaxKDGUUMFJ%2B8ZG%2BhIdpder%2BWpzjSOEr9ccyIQCys1jGMqcektgMLVt%2FD7shp%2BgV%2Bxgyte9FpK32Kw5iLSTreWr7DCmFO9qpYWZr5&X-Amz-Signature=892dd6c383c29e34b98c9a7bde160348ebbf2424747a13aa8b78f91acb6c26aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LEY44R5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2Bnh%2BREoQcOlgtdoVLpQ%2BrIN%2BUTXeFt9u9X%2BYqfG5gQIgTiIc7GDhphFvq9Ej7xyLMDSO1k8gPD4FC%2BpAkxYLGs8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXQumwkJ7x5RfKqoCrcAwrpIZQOKikrdGOrEaFnUDRPjx0jpDTGdpHb27JGyReDum01NYCJZOo4nSVjuaGLfolflrFHqmDwSxlylIKsyuVBE6mJSI%2BE5AcF8XRdoFTGsfczpeQ0PjSS5OnJgOB1v%2FPTJ66nm8yK4kb8Ia7QSFCTjbkPMJDD8yJChWccln74z%2FJ%2FAXA5HYJ8gB5btjf%2FpaCLGZPM3UpT2FzfcOhwyI2ZIfHx6nxKFBUsGdjIeiOccopMwRy3aJpsyHW%2BySnxnJxC6O%2FBdeY7UaTzFWB%2BdNal7k12RM5UOUu55NZvN8GGOyl%2FBPxoXtR8irQLsk5K0wgWmZwbw29yv9Nr8jmdTTv%2F6hhl9OezUkCXsB39s%2BRaor1HdOr9dWd%2FVlgnIAGZgqL5WhMVAXsXSx7nRVXrO2S%2FMGCPzQSCMfou360PPQpO%2FqV%2FzMFViemVwpv5ptt9VoiyYZLVvFN7GGYL3%2Bxp4lIXStXIYZXLQ3GBZ2Ccl5iS%2BJlqOJdI5HxSJxKzuNIbKnPnHSirsDfkvMPtu8IiYqmCgkbFwXO2TsM4TARhCxtfE8kXu7JM8rDTAYQhq8eQx%2FobDJHEMQkHKFLBkrj3Rx9qotKiTr6LsSTcitEM%2Fu%2BAWmR81D4z%2BWabZfM0MKqd1MkGOqUBYjxRJ8uZcwS5pFXvmY5yJvWjXx%2BlZBQQ%2BI3wQ2ObJzE%2B7x8cYBuOAyrILv4gjV5q5YPc3I8o7eBidqUOrOeYjCdFQL3aE1a%2BJ68TC6yC5zyONbRH7901XXCxaxKDGUUMFJ%2B8ZG%2BhIdpder%2BWpzjSOEr9ccyIQCys1jGMqcektgMLVt%2FD7shp%2BgV%2Bxgyte9FpK32Kw5iLSTreWr7DCmFO9qpYWZr5&X-Amz-Signature=ba9be386ca0c5a30897ea6b0f7fe30dc1f5b477519714abee11c119f92decc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
