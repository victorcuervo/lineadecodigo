---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66NFOXH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDctWvwsJ1aC8ccB0RXTra%2BUglSw72ZvefI6z6YE6RhIAiEA05xP2%2BOe%2FRxm5sgtlDu8rgttehFhRBpjJLkwM1WCdbcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHusaDTHF0QE2IBViSrcA3watZfaM2l5GtC%2BLTn%2BOjzKLvOFQLkTgsCHeJVochgosl0oeFDHDDvwz5bQ%2F39nq031XOuRvNgGa4eEpUxMLBAaELFtXcRZH3PSu0ZOso3NbNVEnh%2FipK5uPDyTXhSQwfRE01YFzTc9GdWVF%2BS4B%2BxtlVJcMNuya9iLSrsNTAoX%2FidACOzItZbcnI0RfNehwtJTXDexJ20viBt8Um8XHQ%2F0FIq6%2BXIqMwnw54Ls2Xp8L540yXXXjh8xE7ZYepFPA8fIE4m6V4V%2FsGsXWy5pbqBnLVLRiGdLS3BOG9y%2BHBitvyrW%2F4%2BQwIWrsemhOGzl4MJHL6FnD0uVzvHYBTO8sBRbT2FmwyM7y76MICVzIc%2B9oVkbHtip%2FUvn8Z2wFi9iwR984wNtU%2FJd5SVISvhgRktCZPTGggDg8tYSoT%2FUht%2BGgPCYMbt3eCit5%2FjVLg2xI24xmbAiEvynqEDfj153QJOsTDtQy2f25Ua8Rawc5sQXMwI9latwmEhOUvCyxZhd7VSGfcYTGOpE4Jk1vL49EXrAq1ZEpP5uHzfLmB28bQSfhlYLzATXAC93YRdsWKCiktMMjK7JfHKB3uZm0UmntY%2Flo3Df6aBmwWvqmi5LC0RDZrGjdGSObD5lAf%2FAMMbJxckGOqUByvyKu%2FxAcDPYVPT8V30WHU359%2BNgLMdoS4kD8qhXxmuelDO7W9AwjyMFwma4St2309LSoMFOIdgjigFmGpRhiuSgt52PT%2FeSZJlwIFcB7Kji%2F6t1Ih88FDDkD6UkJmmnrunzHVLGZ6aBv5PqgwfrtaUg85WrOkV3FV9sDHUApLbRm9qlHD5xxJ1FbfABQ3IYyWEDcEF1dbtg5yyCjKkwEjmNx1fC&X-Amz-Signature=af6f58b031f53a285025e799f48ce6a5cd1f79aca5fa92d86271ff9d64cb739d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66NFOXH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDctWvwsJ1aC8ccB0RXTra%2BUglSw72ZvefI6z6YE6RhIAiEA05xP2%2BOe%2FRxm5sgtlDu8rgttehFhRBpjJLkwM1WCdbcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHusaDTHF0QE2IBViSrcA3watZfaM2l5GtC%2BLTn%2BOjzKLvOFQLkTgsCHeJVochgosl0oeFDHDDvwz5bQ%2F39nq031XOuRvNgGa4eEpUxMLBAaELFtXcRZH3PSu0ZOso3NbNVEnh%2FipK5uPDyTXhSQwfRE01YFzTc9GdWVF%2BS4B%2BxtlVJcMNuya9iLSrsNTAoX%2FidACOzItZbcnI0RfNehwtJTXDexJ20viBt8Um8XHQ%2F0FIq6%2BXIqMwnw54Ls2Xp8L540yXXXjh8xE7ZYepFPA8fIE4m6V4V%2FsGsXWy5pbqBnLVLRiGdLS3BOG9y%2BHBitvyrW%2F4%2BQwIWrsemhOGzl4MJHL6FnD0uVzvHYBTO8sBRbT2FmwyM7y76MICVzIc%2B9oVkbHtip%2FUvn8Z2wFi9iwR984wNtU%2FJd5SVISvhgRktCZPTGggDg8tYSoT%2FUht%2BGgPCYMbt3eCit5%2FjVLg2xI24xmbAiEvynqEDfj153QJOsTDtQy2f25Ua8Rawc5sQXMwI9latwmEhOUvCyxZhd7VSGfcYTGOpE4Jk1vL49EXrAq1ZEpP5uHzfLmB28bQSfhlYLzATXAC93YRdsWKCiktMMjK7JfHKB3uZm0UmntY%2Flo3Df6aBmwWvqmi5LC0RDZrGjdGSObD5lAf%2FAMMbJxckGOqUByvyKu%2FxAcDPYVPT8V30WHU359%2BNgLMdoS4kD8qhXxmuelDO7W9AwjyMFwma4St2309LSoMFOIdgjigFmGpRhiuSgt52PT%2FeSZJlwIFcB7Kji%2F6t1Ih88FDDkD6UkJmmnrunzHVLGZ6aBv5PqgwfrtaUg85WrOkV3FV9sDHUApLbRm9qlHD5xxJ1FbfABQ3IYyWEDcEF1dbtg5yyCjKkwEjmNx1fC&X-Amz-Signature=0a48dd87a414d72a8057983017751e7b6b09d397725eabfff7827b1dfdd032ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
