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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6HJHIQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBX5xnz3nXDgWKN9CGUBpLuVyZI6IJRE3PhuwlP%2B5cpAiEA8tnQKP8ss4WXZqbiub00v4CuOeVGLzKAexEFXPC840cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDQUgc%2BAzBQtkVwDLSrcAz3oqoJ1JvoPlNQ51M3dge7UTUsVz7KvPeFgQ4LGNw8G8yhNmgLZMyhmwul74OhYkmfgg0VvAlRutPQ9YxTZBoq9o1eFMKZaSqzaELIifFu5w8ONu7DXOVl%2FC%2BOVESzKxCGSZZxpWyfbinTPRJc6uLLoZiFIhy5qNjIzdLXy3K0rWHuOROxt%2BewdJ%2B%2FI01xfSxhPjVkjsAt2RZGuhsiFMzvMHhaKd4EK9oPpUz%2B3GYMIQWUEwDqUjPpbgH%2FbTHwCPxu9aZLw9r55DspqdaoRgUWT%2F5McRHe4yXWw48IvRDWsPFPXr2AZ2SpvD4APz%2B6PFsWH276VQuZ3UCOkUWXTrHkZGNx1aY%2BY0b9NjJllnRXDsR%2F3WknbIJCxhnwQM%2BUaygZCtWKGdRY3dJ4ujwFztRdknpykNGBYIG3Vm7sTFZma1z0uKfTyb%2F7vXMKLlDsQVfYpUf5eDGDL6N1p1mlArWOnehsEZayN3FwpFvh%2BVnrGi1BacHMLSzZxadDxVrUkbffN2k%2BQ1Uvf%2BiFxn%2Brp5WPKaL0D%2Fwyos9EA0ljpeZFcaX81oCph1qRziVJniGrPtajhpTe4eGGMRI8dZrx53U8%2FWoYMe%2FRFko7Z1OiBG0CqthTtzewaFyya8MqZMN2ez8kGOqUB6bsGLVuvKiXgx1ZjbcZGUkIo6sEx%2FtUiFohIjFySdTVgExtFsaV7jIUpuIkWehcxZxIL%2FkQSo1MN%2Bs5vqShGPIzHQcVUTfVyJsEtcRT%2FT%2FHpoRioVM%2BeumhTXwP35u7Tx9nmSU08bgIiq6bhLE1JdxKmoewTca5tubwYuzRgozneCJ11J27pm51mNK6bHkukFmfwzfmtcBuc7DDrw7NcY%2FY6Y6et&X-Amz-Signature=1f3b347270fcbe0956dc7c3e423c5219a07730413c3b0eb6db7479fbe8db9f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6HJHIQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBX5xnz3nXDgWKN9CGUBpLuVyZI6IJRE3PhuwlP%2B5cpAiEA8tnQKP8ss4WXZqbiub00v4CuOeVGLzKAexEFXPC840cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDQUgc%2BAzBQtkVwDLSrcAz3oqoJ1JvoPlNQ51M3dge7UTUsVz7KvPeFgQ4LGNw8G8yhNmgLZMyhmwul74OhYkmfgg0VvAlRutPQ9YxTZBoq9o1eFMKZaSqzaELIifFu5w8ONu7DXOVl%2FC%2BOVESzKxCGSZZxpWyfbinTPRJc6uLLoZiFIhy5qNjIzdLXy3K0rWHuOROxt%2BewdJ%2B%2FI01xfSxhPjVkjsAt2RZGuhsiFMzvMHhaKd4EK9oPpUz%2B3GYMIQWUEwDqUjPpbgH%2FbTHwCPxu9aZLw9r55DspqdaoRgUWT%2F5McRHe4yXWw48IvRDWsPFPXr2AZ2SpvD4APz%2B6PFsWH276VQuZ3UCOkUWXTrHkZGNx1aY%2BY0b9NjJllnRXDsR%2F3WknbIJCxhnwQM%2BUaygZCtWKGdRY3dJ4ujwFztRdknpykNGBYIG3Vm7sTFZma1z0uKfTyb%2F7vXMKLlDsQVfYpUf5eDGDL6N1p1mlArWOnehsEZayN3FwpFvh%2BVnrGi1BacHMLSzZxadDxVrUkbffN2k%2BQ1Uvf%2BiFxn%2Brp5WPKaL0D%2Fwyos9EA0ljpeZFcaX81oCph1qRziVJniGrPtajhpTe4eGGMRI8dZrx53U8%2FWoYMe%2FRFko7Z1OiBG0CqthTtzewaFyya8MqZMN2ez8kGOqUB6bsGLVuvKiXgx1ZjbcZGUkIo6sEx%2FtUiFohIjFySdTVgExtFsaV7jIUpuIkWehcxZxIL%2FkQSo1MN%2Bs5vqShGPIzHQcVUTfVyJsEtcRT%2FT%2FHpoRioVM%2BeumhTXwP35u7Tx9nmSU08bgIiq6bhLE1JdxKmoewTca5tubwYuzRgozneCJ11J27pm51mNK6bHkukFmfwzfmtcBuc7DDrw7NcY%2FY6Y6et&X-Amz-Signature=439d7cfa537715f087ccc13f426bade22af4c2be4b52627f812d77ca13d6a708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
