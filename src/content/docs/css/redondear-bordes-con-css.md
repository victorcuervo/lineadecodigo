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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QCI5C6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCDlCf4RUuj42ge6wfY7eDLLEhZx8Oc0rvYkbDrEotCwIgU6wNJx69eJEKt8OK%2F19tmlZ3SHjx6rR53Bq9ixc%2FACUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWI32AE%2BWdeXKnCfCrcAxHUzMHxJMS%2FGS8eGXVxMoMChlxlGq2%2FdZeac3B2bDbBfNsz0MXiHlOGRAyBydhknzJzJS%2FWn%2FvBaJE1H2FAj58OcjQx%2B%2FoYE%2BHuPudb9hry%2FLf8URkYfhZnvQ1CH5Qn6%2FHpSjKg%2BHoOsT1OdenvH6diaBxBfXOPdylsIEN9GfimxfgZRm9%2Bg%2BNjkX7hXhCeS5As4THxU%2BDdXZk0CMpyFFjvqnieeMO6uVM0ff16mPwVRWewx6EQKN%2B%2B0s1X4GrKoHZL4UPIsIZXKyiozYj8irTcYR9UXLUuNiRlu548dNl7%2FsEkTRS%2FolaCQ5n4e%2Fz8p2t8J23TnEamVDxFzCduwojecG4ZgYg68S6cGVj7VGQz9K6%2FutmF1EfzSK4GVRzQcd5CH6V4lkXxxHIAoKVnAm2ovPPVDedR6hZuPFvvlrT08FtH%2BGA9U7bR6SdaVdy%2BXlut4i1WRlEQyyQeveMq3cGQw5hV1qWwwGXKgRCqDi3033CNYyER7dnKjN%2Fj55gEtAz5mQHfRiHnVJRJOqnmWAvAg78Qj7hhS17qc5zSO4djO5wAcnShJCzrLIuQ5wI32rKd51%2FH6VW0FJ5UomqKZsraGkGzZ1EPMVFwj5CpN%2BagQT69kqiHTjvptDRxMP6G3MkGOqUBRPLJ0W79aYyevOThmWHq8V8ZBclgxzzeLr9sQCT%2BkbURhOpptQsCoir3bcIC3CgE8TaRfvOpAVimAStCjyDF%2BTRCWKijv7HP53saNJDpkDFyXaCeUDYdignOykPtvpK5ugCkOZyG6GclxrHI380hSwOI864NXit28QJNene3afrLBkzfDwwSYF4afMsTn%2F9A46xotomAVqFzmFDZzemhM1MEHbcS&X-Amz-Signature=93f87c54be99abf40fde4f4f335957aae82d0a24167a91c1c00cf02a2fab40e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QCI5C6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCDlCf4RUuj42ge6wfY7eDLLEhZx8Oc0rvYkbDrEotCwIgU6wNJx69eJEKt8OK%2F19tmlZ3SHjx6rR53Bq9ixc%2FACUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWI32AE%2BWdeXKnCfCrcAxHUzMHxJMS%2FGS8eGXVxMoMChlxlGq2%2FdZeac3B2bDbBfNsz0MXiHlOGRAyBydhknzJzJS%2FWn%2FvBaJE1H2FAj58OcjQx%2B%2FoYE%2BHuPudb9hry%2FLf8URkYfhZnvQ1CH5Qn6%2FHpSjKg%2BHoOsT1OdenvH6diaBxBfXOPdylsIEN9GfimxfgZRm9%2Bg%2BNjkX7hXhCeS5As4THxU%2BDdXZk0CMpyFFjvqnieeMO6uVM0ff16mPwVRWewx6EQKN%2B%2B0s1X4GrKoHZL4UPIsIZXKyiozYj8irTcYR9UXLUuNiRlu548dNl7%2FsEkTRS%2FolaCQ5n4e%2Fz8p2t8J23TnEamVDxFzCduwojecG4ZgYg68S6cGVj7VGQz9K6%2FutmF1EfzSK4GVRzQcd5CH6V4lkXxxHIAoKVnAm2ovPPVDedR6hZuPFvvlrT08FtH%2BGA9U7bR6SdaVdy%2BXlut4i1WRlEQyyQeveMq3cGQw5hV1qWwwGXKgRCqDi3033CNYyER7dnKjN%2Fj55gEtAz5mQHfRiHnVJRJOqnmWAvAg78Qj7hhS17qc5zSO4djO5wAcnShJCzrLIuQ5wI32rKd51%2FH6VW0FJ5UomqKZsraGkGzZ1EPMVFwj5CpN%2BagQT69kqiHTjvptDRxMP6G3MkGOqUBRPLJ0W79aYyevOThmWHq8V8ZBclgxzzeLr9sQCT%2BkbURhOpptQsCoir3bcIC3CgE8TaRfvOpAVimAStCjyDF%2BTRCWKijv7HP53saNJDpkDFyXaCeUDYdignOykPtvpK5ugCkOZyG6GclxrHI380hSwOI864NXit28QJNene3afrLBkzfDwwSYF4afMsTn%2F9A46xotomAVqFzmFDZzemhM1MEHbcS&X-Amz-Signature=957134a04d65af0a639d9e4ca7061403ea87ff1cbb7e636ec923c88dc85cd0e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
