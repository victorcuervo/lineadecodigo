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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF53WZI5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQM36jwCSl2T8VQWBmbz6SRNEhNrrWcNCiv7k4MBc0gIgHFQteNDy6Sea%2B3o3anMDasDQgggiafuCHRrGD0rr7%2FYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK85IXnPX9Q7jQffESrcA6GWYmFBuWfJ7yCJTJJtSlZzGaO7YQOFOg3EPTvpcBV93FoD0Kr8js0Rtjc%2BE%2FgHRsd3HqImfO4g7XMnJjb4KFkd4D3t9hFloj%2FjTeKrwhb4CAbRh1qmQs%2FtbkIw7VA5RWFwQVUFn5PuKbrBDZvBisAWNel22KgKqQf8u9HFV4ohDbkEaXRE9jwB%2FqXX9Qt2FUtjdICrIaQXfPHLcuivn9GuVqT1CAjijXporOSPm0Ou9ZQ5MhwYFkQdvDLC9HFwTM9MhWXdoXvZz2f3g7FBZPnrRpY7GFZ5cfW6k8BwkYt5IWAuC2%2FhVCoD8%2BvQwcaEedvPoQXytXkd%2Bxr3MvulidplteuPtS7NoxXgNrLeuBc%2FE6yl2SSojxgWBfWpAasiGBgT7V4uDj0h0MTfjZ3iSF%2B70RVDuhyYR5N79kQOtlA6wzOu9SNoXeQ9TEbAQ4mmV%2F3fr9Cif36vDbN%2BQqfYIapTdcKbCdtpvGbInum0dWCRXIASzuz8H9vba6h7ULIYDkLkqbDT2NF2Mpaf8bteDCFgptanWQDS5c57Muhvz9%2BUZZMH42I4JUlfViJhd1icNJZl5bzVcreGS5EUCSKdH05XdSHKCkKAOmM9N2qU5JIObmIUD2QkMWjXLUnkMM%2Bm0MkGOqUBWUrvrM1ECINkXdZvsvAC7p3F06zGIrKVk65jQTi09P4ZpQiAuTliWLjSaRFSZOtnDFMhoBf8OvK4whxBQEjVRemEDaxcfXw%2BeTpkAMVAzvOuup47hPqH5w%2BW%2FScIk%2B9l%2BXvOGpth6fE0IZPbL5hTDLORKqvpTfu6a%2F7uLQwfsIhbp7NmRLOwbCl1DHYDgLtXwdZcGKlpzotFEvik8Tl3XFXqHAWS&X-Amz-Signature=107a0b92c5b5cfacceaa9a9ad0a534b82f3895f8cedbe29dff0c88de6d4f526c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF53WZI5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDQM36jwCSl2T8VQWBmbz6SRNEhNrrWcNCiv7k4MBc0gIgHFQteNDy6Sea%2B3o3anMDasDQgggiafuCHRrGD0rr7%2FYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK85IXnPX9Q7jQffESrcA6GWYmFBuWfJ7yCJTJJtSlZzGaO7YQOFOg3EPTvpcBV93FoD0Kr8js0Rtjc%2BE%2FgHRsd3HqImfO4g7XMnJjb4KFkd4D3t9hFloj%2FjTeKrwhb4CAbRh1qmQs%2FtbkIw7VA5RWFwQVUFn5PuKbrBDZvBisAWNel22KgKqQf8u9HFV4ohDbkEaXRE9jwB%2FqXX9Qt2FUtjdICrIaQXfPHLcuivn9GuVqT1CAjijXporOSPm0Ou9ZQ5MhwYFkQdvDLC9HFwTM9MhWXdoXvZz2f3g7FBZPnrRpY7GFZ5cfW6k8BwkYt5IWAuC2%2FhVCoD8%2BvQwcaEedvPoQXytXkd%2Bxr3MvulidplteuPtS7NoxXgNrLeuBc%2FE6yl2SSojxgWBfWpAasiGBgT7V4uDj0h0MTfjZ3iSF%2B70RVDuhyYR5N79kQOtlA6wzOu9SNoXeQ9TEbAQ4mmV%2F3fr9Cif36vDbN%2BQqfYIapTdcKbCdtpvGbInum0dWCRXIASzuz8H9vba6h7ULIYDkLkqbDT2NF2Mpaf8bteDCFgptanWQDS5c57Muhvz9%2BUZZMH42I4JUlfViJhd1icNJZl5bzVcreGS5EUCSKdH05XdSHKCkKAOmM9N2qU5JIObmIUD2QkMWjXLUnkMM%2Bm0MkGOqUBWUrvrM1ECINkXdZvsvAC7p3F06zGIrKVk65jQTi09P4ZpQiAuTliWLjSaRFSZOtnDFMhoBf8OvK4whxBQEjVRemEDaxcfXw%2BeTpkAMVAzvOuup47hPqH5w%2BW%2FScIk%2B9l%2BXvOGpth6fE0IZPbL5hTDLORKqvpTfu6a%2F7uLQwfsIhbp7NmRLOwbCl1DHYDgLtXwdZcGKlpzotFEvik8Tl3XFXqHAWS&X-Amz-Signature=8c35fd78847757e110d6ae66f2d3ffd2c6460dbb730682005cd196b5c0f46b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
