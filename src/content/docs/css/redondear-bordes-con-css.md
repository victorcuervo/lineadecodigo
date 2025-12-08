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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67TA6O7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICra6Qy2Pu%2FPNG8%2BxY5Xc19of3T531Yl%2FvjmClss%2F5OfAiEA5Q8xjpSUI8wUsBlsgoPYgOMYD7jfP0AZNl9c1TdLMIcqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI0vZvnnq817aX8gCrcA4Y%2BYEJ1gi9vdkml5%2BnALsGP0xCYWNOXxqBE%2Bme44BIXAcgmBYolACr1djGhYfBWZa%2B82oK5KD1YCF6YhAaXCOt0NsLmGwo9skTbOPk2kOuHntaW9161EMh3eB5cL0xSB%2FUbEv6f4HbxaT3siGgSr2ZaR97aeMgQTHeRi0TLitvcSNdEnMViVlDuwn3AeGkESPCa2m5pGE%2F4wj5ffsAxZulj8puFM%2BjwabKSQ7hHfy3Sv1%2BNevRfQDAmEI%2Byll6ReJYt9M6fkp6a7tFlBCbmGj2vNtZ3LAsWSEdkVgf8Zd%2Btbbs0AEXJCYQQEJ0yWsV0b75sSEtzXgisUiUjrs%2Bnn24OLM8EyNpJSi0CJMe%2BeU6PaLxXPwcjnxVtOLslgDEEMCmtdzvmU%2FSgcash3sMbpir1LrJ0rQpMiB9HpHnGVguFmKAJX5NBy2StvjFU%2FwTpIC2xEaig0Np%2B%2FNo9ovLX8r%2FOZBlNILlkgmG%2FDgF9fGN35kTvXW2MLlCLC3gHj7G2GI%2BXv%2B845ERIvpIbHr%2BKY57odfQ8U2yna2pXYZKh90u20dp7w%2FpH3larbB3o8lXZuhkDZ%2FczFGOdw%2BdZqMKfddouATGaFj03AR9VJtMBp%2BCywzo9QR%2BDQx7M8hvsML%2Fk28kGOqUBfXRutTsBJyhpDXS7%2F8n%2FMt12rPQ5ckdrIsHuQf25H7ZU5Qae%2FvWRvoFzq%2Fd4FzcyOquk%2B5v7sMIA4WVM%2BdXj02h7XoLzs7Y64ZAsJYSevxiYpaHwRZ4sQ0Q0shCwmIiCBk3AuW%2BNTLK7kIIkR2ChQh5HZbhJItQIF18CAoat2YQ6l2H8QbJqqXreRfbWO2Zx7rRABRPk4UQgDMQ4J3FQxllbZuHU&X-Amz-Signature=d3ad0caa00e467fe8f0ebede5597241d23c68f1d1987036dbde7ea06a9befb45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67TA6O7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICra6Qy2Pu%2FPNG8%2BxY5Xc19of3T531Yl%2FvjmClss%2F5OfAiEA5Q8xjpSUI8wUsBlsgoPYgOMYD7jfP0AZNl9c1TdLMIcqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI0vZvnnq817aX8gCrcA4Y%2BYEJ1gi9vdkml5%2BnALsGP0xCYWNOXxqBE%2Bme44BIXAcgmBYolACr1djGhYfBWZa%2B82oK5KD1YCF6YhAaXCOt0NsLmGwo9skTbOPk2kOuHntaW9161EMh3eB5cL0xSB%2FUbEv6f4HbxaT3siGgSr2ZaR97aeMgQTHeRi0TLitvcSNdEnMViVlDuwn3AeGkESPCa2m5pGE%2F4wj5ffsAxZulj8puFM%2BjwabKSQ7hHfy3Sv1%2BNevRfQDAmEI%2Byll6ReJYt9M6fkp6a7tFlBCbmGj2vNtZ3LAsWSEdkVgf8Zd%2Btbbs0AEXJCYQQEJ0yWsV0b75sSEtzXgisUiUjrs%2Bnn24OLM8EyNpJSi0CJMe%2BeU6PaLxXPwcjnxVtOLslgDEEMCmtdzvmU%2FSgcash3sMbpir1LrJ0rQpMiB9HpHnGVguFmKAJX5NBy2StvjFU%2FwTpIC2xEaig0Np%2B%2FNo9ovLX8r%2FOZBlNILlkgmG%2FDgF9fGN35kTvXW2MLlCLC3gHj7G2GI%2BXv%2B845ERIvpIbHr%2BKY57odfQ8U2yna2pXYZKh90u20dp7w%2FpH3larbB3o8lXZuhkDZ%2FczFGOdw%2BdZqMKfddouATGaFj03AR9VJtMBp%2BCywzo9QR%2BDQx7M8hvsML%2Fk28kGOqUBfXRutTsBJyhpDXS7%2F8n%2FMt12rPQ5ckdrIsHuQf25H7ZU5Qae%2FvWRvoFzq%2Fd4FzcyOquk%2B5v7sMIA4WVM%2BdXj02h7XoLzs7Y64ZAsJYSevxiYpaHwRZ4sQ0Q0shCwmIiCBk3AuW%2BNTLK7kIIkR2ChQh5HZbhJItQIF18CAoat2YQ6l2H8QbJqqXreRfbWO2Zx7rRABRPk4UQgDMQ4J3FQxllbZuHU&X-Amz-Signature=463770276e2398c7f4b95e4338c3dcfb8a65dac4338252a38e7e04cb477e9584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
