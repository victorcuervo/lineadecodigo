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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB5YLFE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGEizNUxgFjK2MmMXL9gt%2BewFuBM7H3v2f%2Bb5ZoynygIhAPqEs9p%2Fpc7NxVlW3q9FcJxEEWkTNVcQ1L43jGLnEH7WKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGCTieCqv7aJ%2FsEMQq3AON%2FutWTS6bwkpR%2FMAA0QHgGP6CpAFVpMlIoyuDleYN23yIE8k1MenYq%2FQROLxqEJTsbgn3aiX2eItCbcnhSbHblYgPlKUBt5lBfZxgPFbgO1Mztbr%2Bee2jY7gQLPYBqj3S6eKbCPy8DpUkVYaS32puKZkF9GbzTgeKZqIp0ApMKRDAcaCTEKmw3zu7hyMqoirIJl9WK5eTOZz0NjOvFm2Sjy%2F7dj9bdprH5RhRZ5Qmntv4%2BwOEn1OKmS%2BeN9EplERli7pDNyupha4KSJGQHIasYTBxckguv80H6yJrzM6N8pK%2BgIcK9ExM%2FFSC7iFKZ703JbEPLwnIllL0%2F8y3O4dllwkBT9aDtUmvMSSllFWtCZtfo0Bf3ru51hkBxeJocMbVxVCsnAS877oidYMGTpDpxEI49RYiqrLlKF5QAba6Qz6aJLbZLamqx0hUOk%2B7o90cNXe25fwjcZop%2FCtuhvTQ4WIa5cZXSEMVf0qGXWOi6Ny%2B4Kge%2FpSec5pLNIMEO411A81cDbTuKDMYpHlnE3PMHqmNXHjXhAlCfIl%2Ff54BZmuEEURYGpnQtBiGd%2FFofVSvkNkIddeHIt5Gcm13lCnL0XKGMWPXX3C2tGSfeZiVILShIHaArND93Su0ADDYod3JBjqkAfT97nTPnD2r5rqTEb%2BeTH5rbfn6r5rBETnNv7f4auBDwezz8CVvg6igx%2BozsIIip7rE0zd34y77Tm6cACIf4OsEIdtGUYjoZ26hHrzHlpV%2BTeLVPSKUCp6l0tmOYAj3LOmOVs8kzMM0xiyHdvA8NGeH%2FWbxUJeG%2F3nx8xMzrmWussYsuavTRN4c8utuTouaPk10V2Zz787eUcxsobnyEavhxott&X-Amz-Signature=8679e29eababa7a317a698a03ebb1264296a6adfbfbf810a0c3e40e9dc7dcd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB5YLFE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGEizNUxgFjK2MmMXL9gt%2BewFuBM7H3v2f%2Bb5ZoynygIhAPqEs9p%2Fpc7NxVlW3q9FcJxEEWkTNVcQ1L43jGLnEH7WKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGCTieCqv7aJ%2FsEMQq3AON%2FutWTS6bwkpR%2FMAA0QHgGP6CpAFVpMlIoyuDleYN23yIE8k1MenYq%2FQROLxqEJTsbgn3aiX2eItCbcnhSbHblYgPlKUBt5lBfZxgPFbgO1Mztbr%2Bee2jY7gQLPYBqj3S6eKbCPy8DpUkVYaS32puKZkF9GbzTgeKZqIp0ApMKRDAcaCTEKmw3zu7hyMqoirIJl9WK5eTOZz0NjOvFm2Sjy%2F7dj9bdprH5RhRZ5Qmntv4%2BwOEn1OKmS%2BeN9EplERli7pDNyupha4KSJGQHIasYTBxckguv80H6yJrzM6N8pK%2BgIcK9ExM%2FFSC7iFKZ703JbEPLwnIllL0%2F8y3O4dllwkBT9aDtUmvMSSllFWtCZtfo0Bf3ru51hkBxeJocMbVxVCsnAS877oidYMGTpDpxEI49RYiqrLlKF5QAba6Qz6aJLbZLamqx0hUOk%2B7o90cNXe25fwjcZop%2FCtuhvTQ4WIa5cZXSEMVf0qGXWOi6Ny%2B4Kge%2FpSec5pLNIMEO411A81cDbTuKDMYpHlnE3PMHqmNXHjXhAlCfIl%2Ff54BZmuEEURYGpnQtBiGd%2FFofVSvkNkIddeHIt5Gcm13lCnL0XKGMWPXX3C2tGSfeZiVILShIHaArND93Su0ADDYod3JBjqkAfT97nTPnD2r5rqTEb%2BeTH5rbfn6r5rBETnNv7f4auBDwezz8CVvg6igx%2BozsIIip7rE0zd34y77Tm6cACIf4OsEIdtGUYjoZ26hHrzHlpV%2BTeLVPSKUCp6l0tmOYAj3LOmOVs8kzMM0xiyHdvA8NGeH%2FWbxUJeG%2F3nx8xMzrmWussYsuavTRN4c8utuTouaPk10V2Zz787eUcxsobnyEavhxott&X-Amz-Signature=ad92b760d4b22d396c54e788ad3f12ca2b7d654d70ae2db12a7902b44f80aef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
