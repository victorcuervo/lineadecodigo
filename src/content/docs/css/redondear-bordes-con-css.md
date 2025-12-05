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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWHY7PG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQbvBL3JMLCksEQ1Krk5ejzro3bqSTrvxEKbCL1K9e%2BwIgaocnqAXbN3tj%2FEBk1MjP%2FmKnqTORW8PUqfCkse1Voh4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKQp5NywkaxagJn2KCrcA3rHUTGFDhyYYeV6s9qw9REt7%2BrfJo29tMT8MwMSq2FXwiJUDO%2F0ALrD%2BOel9MnSoTFbVNQF3QfJ2hGOUU0b02EJDIw4xLoR2%2FT8Jt7C96M%2BJudiAYQKL64u5DedBHbOoAqKa2JHt%2BTqvaWJOLyQcilets1Z1NLMvg4kNFJ0Jya1wMm5nVmRG0gfqa7AHuKpkYtg03PO%2B%2FR680W7oWCR9GCHDpc8MfGorE8FylzNKWQQs6N7m99iu0V%2BF8N1MOw3uF7sp9t5HOE716y%2FoDzP5rT4EtEqwZkzQcVBwLPt6r0ZcsHpHTx9pLAfEbZU9NC0BzDvKQcnl%2FMgc64v1zXd3%2FEkmzgiHkT0%2Be%2BnSR3nDj7N%2FXC5hUUXetxMjwnI%2FEtlqJaAtTncIEbqxCycg1JYIbwPc4ZFCyxdG1fOpmeGvCYtvX6acmVsSdTid5GfCJy6fkvd2p3umjaMHgCXC5SfNSucM76K%2Fjj45ekWiqNo4A%2FBHJP99kLdmxBWsAQ9dNJtJOheSkb4LOLk7%2FMgJewWxui2YvNrq2LkaE%2Ftyu3Y18nRp4mAaZfrlFsXkmpoJnbjac85mOnFD7thT98RRZJtsitusCxCAcPzcTaVo4SzSTT4%2BYRFVDsThdX6qzJcMPCwyckGOqUBM96m%2BboKA3SV%2B55H8pJiKVMkpoeo%2FLUPV%2FKSY2TFMAuvNXELxwWurVxZeDGx3Mnb998ztfV4clM%2FnlGWfsMqDMJIzEFZNvTDRzCdcPJJawTYcFt11v4%2BRVtpYa4c6yrXS%2BvoEgXn7xB2pp3GoVcEOXBItdDe1ScpXFvmx0kjtFjgIqIjSpNUa%2FxYGfFGvocuH2UifmiB%2BtJwJ3MloAJdrOjxd6W8&X-Amz-Signature=2ee2042a2dec0beb6f09413be9913b6c1b82aa82fcaadc34ba1dd0da0c293461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWHY7PG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQbvBL3JMLCksEQ1Krk5ejzro3bqSTrvxEKbCL1K9e%2BwIgaocnqAXbN3tj%2FEBk1MjP%2FmKnqTORW8PUqfCkse1Voh4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKQp5NywkaxagJn2KCrcA3rHUTGFDhyYYeV6s9qw9REt7%2BrfJo29tMT8MwMSq2FXwiJUDO%2F0ALrD%2BOel9MnSoTFbVNQF3QfJ2hGOUU0b02EJDIw4xLoR2%2FT8Jt7C96M%2BJudiAYQKL64u5DedBHbOoAqKa2JHt%2BTqvaWJOLyQcilets1Z1NLMvg4kNFJ0Jya1wMm5nVmRG0gfqa7AHuKpkYtg03PO%2B%2FR680W7oWCR9GCHDpc8MfGorE8FylzNKWQQs6N7m99iu0V%2BF8N1MOw3uF7sp9t5HOE716y%2FoDzP5rT4EtEqwZkzQcVBwLPt6r0ZcsHpHTx9pLAfEbZU9NC0BzDvKQcnl%2FMgc64v1zXd3%2FEkmzgiHkT0%2Be%2BnSR3nDj7N%2FXC5hUUXetxMjwnI%2FEtlqJaAtTncIEbqxCycg1JYIbwPc4ZFCyxdG1fOpmeGvCYtvX6acmVsSdTid5GfCJy6fkvd2p3umjaMHgCXC5SfNSucM76K%2Fjj45ekWiqNo4A%2FBHJP99kLdmxBWsAQ9dNJtJOheSkb4LOLk7%2FMgJewWxui2YvNrq2LkaE%2Ftyu3Y18nRp4mAaZfrlFsXkmpoJnbjac85mOnFD7thT98RRZJtsitusCxCAcPzcTaVo4SzSTT4%2BYRFVDsThdX6qzJcMPCwyckGOqUBM96m%2BboKA3SV%2B55H8pJiKVMkpoeo%2FLUPV%2FKSY2TFMAuvNXELxwWurVxZeDGx3Mnb998ztfV4clM%2FnlGWfsMqDMJIzEFZNvTDRzCdcPJJawTYcFt11v4%2BRVtpYa4c6yrXS%2BvoEgXn7xB2pp3GoVcEOXBItdDe1ScpXFvmx0kjtFjgIqIjSpNUa%2FxYGfFGvocuH2UifmiB%2BtJwJ3MloAJdrOjxd6W8&X-Amz-Signature=94ad9b9e37e6e00d59854f25fc58d0cd712a3fac3f37878d2747be722631d6bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
