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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPSTJT5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD42Z%2BRiOhwB6rIR%2BpyMn10T2nI9oFcKjAlAUQpIssTsQIgEtW8il9SUxnUG6MHr5a23Bq3tlLlx8OuePtSxv%2FR4ZIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAwD9q1XZIWboqEcyrcA2WkOb1vfFpIPDMhTXFXMpAZ%2FyuhEr%2FHlEJSilLh8waNH63wyzdm%2FsTSVISsmqdrc%2BIHgmE2wZFxDlFKv9rihEqCmj5Xz4Oge9%2FR1AC10NwUEODgBL6odkmhzEGJ48FRYraDugdiJzaX12RUYQD3abdy6uobpkKsNKroKy5TNMcM4ihePevOqqKBb%2FRA1vsVRA%2FeYOSVRPJqCnx57K6c9jy6kgVv3VwmOS9s6jMbD6LqlJzaWYOGkcf9rD%2FoK8aW3GWOiRfK2lhTnwBx2jteWgN%2BUvcRQTrWoKV%2ByWCYSUXVr0xFSdLYQi48XFLd3QrgIqJkSplo%2FSUkrpPyiNdQ4NmsBHVZ6Eh2%2BSyuxXMfmm0dtp7RBPA4zuhbayRHetGdTWFDVir0DjrVTdkzSkWFfEPpOJVcwEkW22K0IxXYpLv7NfsMLckwjWIv43KvQ1oPDms5QJyFJcrouhn1WhDr7nxTRD9URXHQyH%2Fi%2BmF6oMZhbDKzK1%2BFIF5e6oT9YycosLvsKTJ3gdW6fvf%2F7X9ClyAZTRgWr%2BBLXSUSmCAeis9l1vAXPB4PMtEtK4%2FddjmjFr%2FVLupB%2B4bTR5KzHgfkaifS3V32sTGH%2BxvQgXou%2F07v23UOGMdcH0J4OL5fMIua1ckGOqUByHz4x2CXryAMkBao6lzfz98Ji5J1CxJ%2BsL9EZjmV82h%2BrNuP0BDR7SRxE%2FXfyJVAafeCpjWyFI9KUOoD0UR%2FJ1dn06SKgfb6b8ggbzAbfq772NPH0tkI2IjaOWWrAvkxaxiBV56DhaACQlfKhKhJNIjuzQjjkkUl%2BrcOiE3efxWz6PLbkASHPPuU5IkHrxIZ74Y9tWBY1%2FIf4DTFuYNv%2B3MIPUz9&X-Amz-Signature=f386d31db4d997edf0e21299a1f7cb6d0785adc235a207cba00fa0b6bd45618d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPSTJT5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD42Z%2BRiOhwB6rIR%2BpyMn10T2nI9oFcKjAlAUQpIssTsQIgEtW8il9SUxnUG6MHr5a23Bq3tlLlx8OuePtSxv%2FR4ZIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAwD9q1XZIWboqEcyrcA2WkOb1vfFpIPDMhTXFXMpAZ%2FyuhEr%2FHlEJSilLh8waNH63wyzdm%2FsTSVISsmqdrc%2BIHgmE2wZFxDlFKv9rihEqCmj5Xz4Oge9%2FR1AC10NwUEODgBL6odkmhzEGJ48FRYraDugdiJzaX12RUYQD3abdy6uobpkKsNKroKy5TNMcM4ihePevOqqKBb%2FRA1vsVRA%2FeYOSVRPJqCnx57K6c9jy6kgVv3VwmOS9s6jMbD6LqlJzaWYOGkcf9rD%2FoK8aW3GWOiRfK2lhTnwBx2jteWgN%2BUvcRQTrWoKV%2ByWCYSUXVr0xFSdLYQi48XFLd3QrgIqJkSplo%2FSUkrpPyiNdQ4NmsBHVZ6Eh2%2BSyuxXMfmm0dtp7RBPA4zuhbayRHetGdTWFDVir0DjrVTdkzSkWFfEPpOJVcwEkW22K0IxXYpLv7NfsMLckwjWIv43KvQ1oPDms5QJyFJcrouhn1WhDr7nxTRD9URXHQyH%2Fi%2BmF6oMZhbDKzK1%2BFIF5e6oT9YycosLvsKTJ3gdW6fvf%2F7X9ClyAZTRgWr%2BBLXSUSmCAeis9l1vAXPB4PMtEtK4%2FddjmjFr%2FVLupB%2B4bTR5KzHgfkaifS3V32sTGH%2BxvQgXou%2F07v23UOGMdcH0J4OL5fMIua1ckGOqUByHz4x2CXryAMkBao6lzfz98Ji5J1CxJ%2BsL9EZjmV82h%2BrNuP0BDR7SRxE%2FXfyJVAafeCpjWyFI9KUOoD0UR%2FJ1dn06SKgfb6b8ggbzAbfq772NPH0tkI2IjaOWWrAvkxaxiBV56DhaACQlfKhKhJNIjuzQjjkkUl%2BrcOiE3efxWz6PLbkASHPPuU5IkHrxIZ74Y9tWBY1%2FIf4DTFuYNv%2B3MIPUz9&X-Amz-Signature=21d19b97693c0c78449160add835072224ab05a3899c36c306b8f39d8d270956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
