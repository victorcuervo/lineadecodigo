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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKCSW4Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6rjWep%2B00%2ByTeyLvsQO4qt904khpeh70ZMbJhLgOxaAIhAMCLefydBODpfRKUFM5jHkjlpaLCR2pDSfw3VmyWO84hKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnFfhQ1ObBYecFUPsq3AOm3hCynk%2FxP9%2FXPtprhqGCWp5FPQdWq%2BkPoOLzMKBSkUNSmZ9sRQzdHiFDcdAjrPOXE6QIZazo%2F31CLRJXXlhLa6b35s0QInEbeuwpTIti7GXEWCiZNAhEOICTSGyIZgmHyhwlN13t5kpXaO5WxKS%2FGmd8jwvt1og5lja1VtLCSXF25CbuBUEkUWmh2QrSqnkfhjL1%2FO66C8hGw2kL9p6vh9iCrmeKkLGicVVcXZ9v7x9najZyOeiHWa3nQ2GvWX9jc1b5QSfim%2B0CN2sl4xpcm1WmmpD9Srm%2FTeBvfIClFE1NbP51vq9lL%2Bed0BtrVUkig7j2ArPBYlI4cqkD2Xc9dFeOJicbamIhKQ%2BX%2FGk%2F4qzKOteN8azj3WdVo%2BMzmwnymaFsr0D1HKKkt%2Fqavbi0J%2BWcxx9ypYrGqcVoRW%2F1aVPU5BtVQB0F2tgfd2s81sA2YJetVOe1x0umZr8QMFMun%2BVO1WyiaB4W%2FCawG%2BT9HQ%2Fil5e3LDbyYY8br4lUVn%2B7347AblEDUH55WW9VbzA%2FNWV8gcgShOOn77ujZOAGKj9cTvBK%2BpMCZf8iSJt%2FO7Js7l1oJhHK6GLj0Ym0k9RPp13mnULVzdRlBYUPtFjKLNkQZ6HUoRFKNicBlDD4%2FdLJBjqkAWhaCxR3bG2wLjOtMnVPlbe9p%2BCGWphWhPN63n%2BzgDTuvQYSSsnzyhBkJcIZMimq6jfCuLTKujovGmfMUVtxkpeCHdwokmtRxl884%2BSZTpqRDtUQ7ZjPrNSNlIf4dd73TMrgnE9MP%2BHy36TJVHs%2Fd0mp%2FFoWww24%2Brawsf0VgBRt38AAIM%2Fi86FsScertwAljsMBiDU9xo%2BjniR57LjUSCCFZBXr&X-Amz-Signature=db129af9208be7f47d2a158db6007a6e3110ccefefb28f818006c960b0230749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKCSW4Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6rjWep%2B00%2ByTeyLvsQO4qt904khpeh70ZMbJhLgOxaAIhAMCLefydBODpfRKUFM5jHkjlpaLCR2pDSfw3VmyWO84hKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnFfhQ1ObBYecFUPsq3AOm3hCynk%2FxP9%2FXPtprhqGCWp5FPQdWq%2BkPoOLzMKBSkUNSmZ9sRQzdHiFDcdAjrPOXE6QIZazo%2F31CLRJXXlhLa6b35s0QInEbeuwpTIti7GXEWCiZNAhEOICTSGyIZgmHyhwlN13t5kpXaO5WxKS%2FGmd8jwvt1og5lja1VtLCSXF25CbuBUEkUWmh2QrSqnkfhjL1%2FO66C8hGw2kL9p6vh9iCrmeKkLGicVVcXZ9v7x9najZyOeiHWa3nQ2GvWX9jc1b5QSfim%2B0CN2sl4xpcm1WmmpD9Srm%2FTeBvfIClFE1NbP51vq9lL%2Bed0BtrVUkig7j2ArPBYlI4cqkD2Xc9dFeOJicbamIhKQ%2BX%2FGk%2F4qzKOteN8azj3WdVo%2BMzmwnymaFsr0D1HKKkt%2Fqavbi0J%2BWcxx9ypYrGqcVoRW%2F1aVPU5BtVQB0F2tgfd2s81sA2YJetVOe1x0umZr8QMFMun%2BVO1WyiaB4W%2FCawG%2BT9HQ%2Fil5e3LDbyYY8br4lUVn%2B7347AblEDUH55WW9VbzA%2FNWV8gcgShOOn77ujZOAGKj9cTvBK%2BpMCZf8iSJt%2FO7Js7l1oJhHK6GLj0Ym0k9RPp13mnULVzdRlBYUPtFjKLNkQZ6HUoRFKNicBlDD4%2FdLJBjqkAWhaCxR3bG2wLjOtMnVPlbe9p%2BCGWphWhPN63n%2BzgDTuvQYSSsnzyhBkJcIZMimq6jfCuLTKujovGmfMUVtxkpeCHdwokmtRxl884%2BSZTpqRDtUQ7ZjPrNSNlIf4dd73TMrgnE9MP%2BHy36TJVHs%2Fd0mp%2FFoWww24%2Brawsf0VgBRt38AAIM%2Fi86FsScertwAljsMBiDU9xo%2BjniR57LjUSCCFZBXr&X-Amz-Signature=20d42f52aa827d26b3fcc46fefa3a8c3698495e41ffff4db4e972008c750007e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
