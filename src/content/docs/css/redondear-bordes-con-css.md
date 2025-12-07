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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPJAGFV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWPm156aEUlqWWGnysqB7pJ4nqbFyg6I9teAEObX1PFAiEA2khvu3zmNPaBWeVCsB8WSH%2FlMz3NkNrpDCYQwrxujSAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMKa%2FXoPFDbWcpHNyrcA1GddWBS3O%2FTJ18PKyFl%2F3YIFfDg0xP0RX3rXV5OjxnslSOVHkfwu%2BRwhDHuwfhG5ToHxtOJglUfLqIk3Sptli9kiKesD%2BCbMx9vyvP3Bc%2BL9EDegdn%2Fwn9HYt8HGDfNHyzEr%2BanPs4tMhJ5KW%2FbAc%2BT9lto7e4eyjCZCVs8U5JpZqtSbcepcsoXlXuPs7zuexNgnQeYgFmQ0AlnMiS1lmfkZgAZZvI07WtRmfLTALnrJsUKvLyG%2BIxT7RS3WZ4iB8Eqo2g3opLGkXoMuNBBafKEKXl46ySSGGegWwhWzyaFJ1LpMSS5rlGxJgXLgNA6SQqo%2BQ%2Bhtt%2F3DtO9AiD6fPCGynwXaviaKpu%2FcjxIYKcrOwyKY0TbkSzPSHdekTp2S%2BWHIoRe3iCnxWIrfrKfPo1PO4goh0c5hZHlSO%2BQCih2jz9pG2laCJn2B%2FPMO0l0Wc%2BpPy9D5H4%2FNsxEUAPYCOncojKst6SNq%2B6cSh3v3TCyYxa4HX%2BdGinioELS5iqZlo4MiV760s3kawMDBai2sfjGFcOcWr33q9y3Xt%2BMAyEmpNiAZdHbrNcRMOFFkXpiRcvdkSR6DyJjjwdEmIaBRJjHwOP62FiAfVUqo1XuTnuoURZxneLjxFQ5MiPSMLf90skGOqUBJoEysg%2BE09p36%2Fgvxo70EL%2Bfq8bDTlP14Y%2BNciljpk96O5PYR7d7EJtM%2BRmWe2uFFJ7hO4Tyh48t6Nh40l8PQ%2FFjJToYVyrPH7tNK3yvtiglg4sTdmnJWTU2xeMqC84P%2BX0vzxVEkYma%2BYG3h47r2Rg8YLixxsg1Lpe6ntP%2FIWKyikNdhFkDkTcb3tcnLGO7m6WGwEyzCcMnIQaoOJmheM555dGj&X-Amz-Signature=4a1e866b44e75d147692ef7a2dc6844119aba66fb66f13ae508f8b19d1917450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPJAGFV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWPm156aEUlqWWGnysqB7pJ4nqbFyg6I9teAEObX1PFAiEA2khvu3zmNPaBWeVCsB8WSH%2FlMz3NkNrpDCYQwrxujSAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMKa%2FXoPFDbWcpHNyrcA1GddWBS3O%2FTJ18PKyFl%2F3YIFfDg0xP0RX3rXV5OjxnslSOVHkfwu%2BRwhDHuwfhG5ToHxtOJglUfLqIk3Sptli9kiKesD%2BCbMx9vyvP3Bc%2BL9EDegdn%2Fwn9HYt8HGDfNHyzEr%2BanPs4tMhJ5KW%2FbAc%2BT9lto7e4eyjCZCVs8U5JpZqtSbcepcsoXlXuPs7zuexNgnQeYgFmQ0AlnMiS1lmfkZgAZZvI07WtRmfLTALnrJsUKvLyG%2BIxT7RS3WZ4iB8Eqo2g3opLGkXoMuNBBafKEKXl46ySSGGegWwhWzyaFJ1LpMSS5rlGxJgXLgNA6SQqo%2BQ%2Bhtt%2F3DtO9AiD6fPCGynwXaviaKpu%2FcjxIYKcrOwyKY0TbkSzPSHdekTp2S%2BWHIoRe3iCnxWIrfrKfPo1PO4goh0c5hZHlSO%2BQCih2jz9pG2laCJn2B%2FPMO0l0Wc%2BpPy9D5H4%2FNsxEUAPYCOncojKst6SNq%2B6cSh3v3TCyYxa4HX%2BdGinioELS5iqZlo4MiV760s3kawMDBai2sfjGFcOcWr33q9y3Xt%2BMAyEmpNiAZdHbrNcRMOFFkXpiRcvdkSR6DyJjjwdEmIaBRJjHwOP62FiAfVUqo1XuTnuoURZxneLjxFQ5MiPSMLf90skGOqUBJoEysg%2BE09p36%2Fgvxo70EL%2Bfq8bDTlP14Y%2BNciljpk96O5PYR7d7EJtM%2BRmWe2uFFJ7hO4Tyh48t6Nh40l8PQ%2FFjJToYVyrPH7tNK3yvtiglg4sTdmnJWTU2xeMqC84P%2BX0vzxVEkYma%2BYG3h47r2Rg8YLixxsg1Lpe6ntP%2FIWKyikNdhFkDkTcb3tcnLGO7m6WGwEyzCcMnIQaoOJmheM555dGj&X-Amz-Signature=70e769ba23fbfc0f24a6068aa7eb31147ea7dbf0a2c083fa297ce5a1d99767b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
