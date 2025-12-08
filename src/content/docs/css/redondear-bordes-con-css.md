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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4JYBBL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0fMNp5ZWJ%2B1tzv6t4Mf50TDBO%2B1%2FfQp8oYkamu4I%2FfAIhAN2MGPv7HTtJUFSu3OxjZnhcehNZt%2BFHjr8VCs%2BStSofKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSXWnFEp1DZBjT%2FIUq3APN81gk7oP4yDiY8rKgE%2FcE7Z2Ab94%2ByU%2FDGO6nHPJePEy114lse6XREynJlV64RYjT5Pb%2BztltEFm%2FXWqOwTegXT5iXCPH5aexUPlq7Fkf1BXp2E6Fl6uSAwBZQTYyjzZwAREUH8GmZDCeMdtpk6bU9iBepavZsBMIY73PkJrFTDhTrU91xtNBdhoz4f85WMYxYmE18f65hFeANOw%2BDMVsIpaNpCsMTlAe0ann64%2FlQKuAEOho9aNpeMnYAYLvemoh5xaVTwHdklu%2Fxow7vtPOJgfIdQaVV7O0idbb6UESHjfKudPQol7mhMY1H9MRDGIBp0q7XXuwUcvxrGe7MexPGMiFmz%2BRUzyQTD9pBKhp8XbyGuaeM3sm1B%2F3diaBt6CVJ4LHWY6GkwMuiia23BbTKDZ5FMiBXHEdfiia%2Fjf%2BtUTNB1TAGKM%2BOzHztPvG7KQhIns4Jg3cMY9X6otGso%2FkYgux6Q8GFTE1PWR9HS4J0UDUPTXQaYclG%2F1BsbL2GaCeqf2eoq7MK03VPq0%2FrZR0xiAb9GddkIlhRxyEwAxqP1whixENNcmaUJ8nC7zjv6PXyUNM7xhaXku%2Bxrv5YmhplVWfxaIUCyWRKDABCAEX%2BgHJKIMZ0y6bLkipwzDr%2F9zJBjqkAVmBBlb7JRKfaIEtQvZ%2BzHITDcnmFXrfYDqAxu0e6NAyQgAxz%2B%2BdnDnt0EJZ6HQjJ8Kc4K94l0O38jzw9nHaenutP8MVaIovsXc14g9oGxSvEto7fEzdQVjuVK%2BQeUvImmAXpm%2F%2BwkxRSJRZQh8puWMHj8Bboy5pJ%2F2WceCvsiDgtRe74uEBueQCE5VTTqjssuXvKW5aO7TLm3mOYOGknIiunejI&X-Amz-Signature=cc043ee30da6bceb36a94e0a803baba74c3e55aa244a501727e360143f961944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4JYBBL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0fMNp5ZWJ%2B1tzv6t4Mf50TDBO%2B1%2FfQp8oYkamu4I%2FfAIhAN2MGPv7HTtJUFSu3OxjZnhcehNZt%2BFHjr8VCs%2BStSofKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSXWnFEp1DZBjT%2FIUq3APN81gk7oP4yDiY8rKgE%2FcE7Z2Ab94%2ByU%2FDGO6nHPJePEy114lse6XREynJlV64RYjT5Pb%2BztltEFm%2FXWqOwTegXT5iXCPH5aexUPlq7Fkf1BXp2E6Fl6uSAwBZQTYyjzZwAREUH8GmZDCeMdtpk6bU9iBepavZsBMIY73PkJrFTDhTrU91xtNBdhoz4f85WMYxYmE18f65hFeANOw%2BDMVsIpaNpCsMTlAe0ann64%2FlQKuAEOho9aNpeMnYAYLvemoh5xaVTwHdklu%2Fxow7vtPOJgfIdQaVV7O0idbb6UESHjfKudPQol7mhMY1H9MRDGIBp0q7XXuwUcvxrGe7MexPGMiFmz%2BRUzyQTD9pBKhp8XbyGuaeM3sm1B%2F3diaBt6CVJ4LHWY6GkwMuiia23BbTKDZ5FMiBXHEdfiia%2Fjf%2BtUTNB1TAGKM%2BOzHztPvG7KQhIns4Jg3cMY9X6otGso%2FkYgux6Q8GFTE1PWR9HS4J0UDUPTXQaYclG%2F1BsbL2GaCeqf2eoq7MK03VPq0%2FrZR0xiAb9GddkIlhRxyEwAxqP1whixENNcmaUJ8nC7zjv6PXyUNM7xhaXku%2Bxrv5YmhplVWfxaIUCyWRKDABCAEX%2BgHJKIMZ0y6bLkipwzDr%2F9zJBjqkAVmBBlb7JRKfaIEtQvZ%2BzHITDcnmFXrfYDqAxu0e6NAyQgAxz%2B%2BdnDnt0EJZ6HQjJ8Kc4K94l0O38jzw9nHaenutP8MVaIovsXc14g9oGxSvEto7fEzdQVjuVK%2BQeUvImmAXpm%2F%2BwkxRSJRZQh8puWMHj8Bboy5pJ%2F2WceCvsiDgtRe74uEBueQCE5VTTqjssuXvKW5aO7TLm3mOYOGknIiunejI&X-Amz-Signature=53e333009e70317820e381b3996200af4d79697f977537cd848b471e7f5b7460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
