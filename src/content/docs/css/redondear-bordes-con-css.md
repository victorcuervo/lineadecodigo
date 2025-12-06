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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQK4TCO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BA8ZGvTpqQDDWRwZ4DtUfOztAn8zKcJsg3FVD2p%2B6DAiEA%2FuVRdpJfKX1gyxWy7TOkpzdK%2FtbQyHzE4CBHa09Iuacq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF3Noyslyr6i8aPMWSrcA3Der6%2FHmBI6kxfsfp64ahNTVqXyj1IuC%2Fl60snuSFwWTlB1ZViZXGqqH9%2B6LZBdIwVEm3879t1AOVAHpSiBAptEgNz%2Fi0jZzh%2Faaczwi4yf5Z89ApvZ1d%2BsREADJyJemLUFEL9GCvGeCohTs8orbSmHmrFgvKzFGjkf1u6CH0T%2F87wbCGss6V9HBDDgOqyQrwxDdreGp2hFD0uA79qoXuGd0WhfIOC260%2BVhc0Q4SMtoL9ks1bl7Z9SxW1ComuQzVOdEHkWThQAN19eHEfCPsy0LfhTKlYF2pF3o9FV4bv61sgz6lCO2VcL9e6EgIxFsWQI3e3IOlKj5f8g8S0Hl%2Fq7uoicAvVb0JkzkwlOja854CU48jcXF513H3ic2TvajMrUbk321ZHjCxMUHJwJteQ7zETeG0tKvIGzcyQjNt%2Bq9XwQgKU4dxFLzqeZm8Xb7gulZ5MOLjB4pVRv1wdAEiPt61PyYmOTIJEFkPEJmeqChgoOUFvPG6RSiEpgnwVPgb8RlumPI91AFLx807Szc9Qp30%2Fe89Bib%2FexTmUcHmUTZE0NNskhg%2BbzYB4iEgmqkr5zkyjVAuZUcWdbPlMpjrtelKqFH0l%2FHwkgGUxmKNdWRgvNcRpbEVrQUyFcMMPJ0ckGOqUBPbmbDMh3VRsdXpoIwEml6drvbIU0pKIzEq9%2F1HOBVYiW6fZ%2BTyZa0KQ9FNu5TMwSzs4pHpMtGwAKtMGVAbCEplUGiSNepzOObDhkNBbP36zUjawYQuAhxw%2B3n3vuz0IgLOx2%2B15x5gkI0v9yMkQFHHtaxrMgWt5AcQmYNKjJHhMCxrdgHVY0%2BaCEyiFU9UL4eHsMbmNq7y8B4z%2BtL2xXOMINIJ1a&X-Amz-Signature=86d9beb5d9f3dfe67cff2a567d0b2e82fa79defc2e49ef0a517513d957298bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQK4TCO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BA8ZGvTpqQDDWRwZ4DtUfOztAn8zKcJsg3FVD2p%2B6DAiEA%2FuVRdpJfKX1gyxWy7TOkpzdK%2FtbQyHzE4CBHa09Iuacq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF3Noyslyr6i8aPMWSrcA3Der6%2FHmBI6kxfsfp64ahNTVqXyj1IuC%2Fl60snuSFwWTlB1ZViZXGqqH9%2B6LZBdIwVEm3879t1AOVAHpSiBAptEgNz%2Fi0jZzh%2Faaczwi4yf5Z89ApvZ1d%2BsREADJyJemLUFEL9GCvGeCohTs8orbSmHmrFgvKzFGjkf1u6CH0T%2F87wbCGss6V9HBDDgOqyQrwxDdreGp2hFD0uA79qoXuGd0WhfIOC260%2BVhc0Q4SMtoL9ks1bl7Z9SxW1ComuQzVOdEHkWThQAN19eHEfCPsy0LfhTKlYF2pF3o9FV4bv61sgz6lCO2VcL9e6EgIxFsWQI3e3IOlKj5f8g8S0Hl%2Fq7uoicAvVb0JkzkwlOja854CU48jcXF513H3ic2TvajMrUbk321ZHjCxMUHJwJteQ7zETeG0tKvIGzcyQjNt%2Bq9XwQgKU4dxFLzqeZm8Xb7gulZ5MOLjB4pVRv1wdAEiPt61PyYmOTIJEFkPEJmeqChgoOUFvPG6RSiEpgnwVPgb8RlumPI91AFLx807Szc9Qp30%2Fe89Bib%2FexTmUcHmUTZE0NNskhg%2BbzYB4iEgmqkr5zkyjVAuZUcWdbPlMpjrtelKqFH0l%2FHwkgGUxmKNdWRgvNcRpbEVrQUyFcMMPJ0ckGOqUBPbmbDMh3VRsdXpoIwEml6drvbIU0pKIzEq9%2F1HOBVYiW6fZ%2BTyZa0KQ9FNu5TMwSzs4pHpMtGwAKtMGVAbCEplUGiSNepzOObDhkNBbP36zUjawYQuAhxw%2B3n3vuz0IgLOx2%2B15x5gkI0v9yMkQFHHtaxrMgWt5AcQmYNKjJHhMCxrdgHVY0%2BaCEyiFU9UL4eHsMbmNq7y8B4z%2BtL2xXOMINIJ1a&X-Amz-Signature=27d1997cd11227f6d67bb6ed03d0861d4da4b19e5652f6b4add9ba9e608298e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
