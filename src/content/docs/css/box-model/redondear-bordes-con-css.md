---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XW5WVYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTNDiC%2B7y1rbxOF4HZn6eEakPSvvzjN1sd%2FAoe3Buv7gIgK2IpXYKdCgH%2B11WJUAShks6CS8kEBEm8sLEzRg94y1Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEoX2HoXu5bVvyiIxircA29WofamN1QF7u6Adh2nEa2BmmUWqBs79HO%2FTrzv1oiGuy3VqeSc6QHeShxgc08V1LeHwwOBuV81Z%2F5V5MImZBqFoOK42nZ1eJrkkUULxIsYMns2CnJEOOYEFsj0siSX822K8ilKX4zm4Q7bmJXE8PEsQtorzWeXCM32pFiGbQxRAseUfTPt3QjiU7WinW%2Fu5SjhyX3oLVR3o9UvHHYfB%2BnGjZ69ihkYa3gN316JoFdhrw9RAh4XV3HlDKtt5KJBtHFb2iYXVfPrrCszwGszFnYwMa1J0d3NJukQLC4R3y03L2CimnAjK324OaB9XN4xTfImcKMl6KE87WQJTZlqXTc0duTfv7RVBH%2BnqPjlTzpKsl6ul%2FMkZ1frtsH3%2B29cKSpe1Ng01Vktmz9c%2BA6vhgEIUhvuzdTfpsU63xuyGuh7%2FWXoXj4%2FQ1128z0pyarYsdYmy21DHiHz6reZ52KIGJz2Lb1XrBtZWVZG%2Bwn11UC2iDF9g7LoI18dBOEX5J6NyohrWOnaURC1VMSemdqml6VPv6%2Fu4Tj2LeMKO%2F2nJMQOGwaF%2F2lO9M2Ucyby8%2BgAGdCjJULban8aBpC8zc2pD5dJ%2BSqWTJVwZgxHKOL7UmZx7dLdrnBqurvTqgCEMNyqisoGOqUBUAotAI2C4iQ0upnLa8mdryoVhrwzHr0FaGACqD5vQo2excVYIUDYxBEUlUPD%2BCSAevzquw5LW%2BMYfiHzBjDaEwjwcibuK8Q9pm42Xe3S4nJRkD4yyXDm47rEEBvf1vhIigIsw%2B6A%2B9%2FZKpTdk9zIRl%2Ftyg%2BPFaoDeXMSfGwF18i6oLUxeFQvohF%2FLd1TonN4IcsIhVvJ8rudIBBflbDUtH1kHkNJ&X-Amz-Signature=5890bce953064de493ebbdd2aea8ca2098741284707d266287f7ae73e67d5012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XW5WVYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTNDiC%2B7y1rbxOF4HZn6eEakPSvvzjN1sd%2FAoe3Buv7gIgK2IpXYKdCgH%2B11WJUAShks6CS8kEBEm8sLEzRg94y1Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEoX2HoXu5bVvyiIxircA29WofamN1QF7u6Adh2nEa2BmmUWqBs79HO%2FTrzv1oiGuy3VqeSc6QHeShxgc08V1LeHwwOBuV81Z%2F5V5MImZBqFoOK42nZ1eJrkkUULxIsYMns2CnJEOOYEFsj0siSX822K8ilKX4zm4Q7bmJXE8PEsQtorzWeXCM32pFiGbQxRAseUfTPt3QjiU7WinW%2Fu5SjhyX3oLVR3o9UvHHYfB%2BnGjZ69ihkYa3gN316JoFdhrw9RAh4XV3HlDKtt5KJBtHFb2iYXVfPrrCszwGszFnYwMa1J0d3NJukQLC4R3y03L2CimnAjK324OaB9XN4xTfImcKMl6KE87WQJTZlqXTc0duTfv7RVBH%2BnqPjlTzpKsl6ul%2FMkZ1frtsH3%2B29cKSpe1Ng01Vktmz9c%2BA6vhgEIUhvuzdTfpsU63xuyGuh7%2FWXoXj4%2FQ1128z0pyarYsdYmy21DHiHz6reZ52KIGJz2Lb1XrBtZWVZG%2Bwn11UC2iDF9g7LoI18dBOEX5J6NyohrWOnaURC1VMSemdqml6VPv6%2Fu4Tj2LeMKO%2F2nJMQOGwaF%2F2lO9M2Ucyby8%2BgAGdCjJULban8aBpC8zc2pD5dJ%2BSqWTJVwZgxHKOL7UmZx7dLdrnBqurvTqgCEMNyqisoGOqUBUAotAI2C4iQ0upnLa8mdryoVhrwzHr0FaGACqD5vQo2excVYIUDYxBEUlUPD%2BCSAevzquw5LW%2BMYfiHzBjDaEwjwcibuK8Q9pm42Xe3S4nJRkD4yyXDm47rEEBvf1vhIigIsw%2B6A%2B9%2FZKpTdk9zIRl%2Ftyg%2BPFaoDeXMSfGwF18i6oLUxeFQvohF%2FLd1TonN4IcsIhVvJ8rudIBBflbDUtH1kHkNJ&X-Amz-Signature=17c554b379819464f7ad07ad0e680f069b00e22cd0d4c49bb0b54102b04bbf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
