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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SP2OYRM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdoD5%2BWQHMV6m7D1FkViSiwwulEr9Q2adlJKjVHVgR8QIgTUet861UVMaA9DpF%2FjDmmt9%2Fxh%2FL3TIpMwp0jg89LQUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDITGmL5OX9zG9a2ixyrcA845%2BfrCBefsZt%2FGVpOS7YHpCaTRrEd%2FCHddoMVbOlY4ZmRwKk2tE2zYCaTuH008lD8hyvgpwiIdWH5LET6qZT5HL%2Fm8ccSiLRuueX3pNoZ8lFLbtUH%2BhdjWJ7ZQwGSHtt%2Fxxv0guHARQ7vNQDsg58UGxdNxX1q2kcDZTAMHjqwArf9dMDlJ6HaGNWQQQmo0oDMqIY0VQPWn880Mq0XSIUA%2BDGN2MG7P4Zz%2FA8wE2jQlMDPpcbk0DxvCVz1fF6ppl%2BlibB1ID%2BBv4szROYQiRuoIrAziZwEz8JPvzFE7u2zPSYbh6cfp8KCE0vPUVrY5dW0YOf9tOMlpMdXe3kleaIWiU8lBmZEnTUzszfF5%2B%2Fhrl0tFUIe5s0byqEz0Yc4k3qQ4eHsN6NuZyl1GkdArsg4OfB5m%2FM1kkHu3g%2B2WGCl03QJp45PiWPBv8acBetqJviHmwREqlWKaP2O%2BV9nGQpCxcYvkSnAmp6GC9VnV5BG5oAC98Yndk5J%2F2WCQoPPLY7jEcacjCY%2Ff6KPCy29G265U0WMWfvV0UY8NaJXgSbUetHYfZb1RH20no22ItoNQGBcCrT6lEpVg9MTsQmOhxCXbcldpAzzpq%2BJXtxVSBUNbMpX262MFBxyWwjRlMOym0MkGOqUBKn7We35jcqZV9ktUqMBfeu1Ze8RAwLzMZre0LVj2DATYmXViCdVwLep9AoADb8C68fj6S4CX3n8OQMdHx%2FnqpCDl9nsYtuxzltQfEs6sQ%2Bey%2FeNSaeLhUiscOxjQuj8OaqW98l2C7WcMT%2FMBOhIKl2LM5fCpVjQkz9yOmHlIwXymzxSGwU5yOlkhM5FePOxBIesnL6aGZb2MJbMNWAc2w%2BPNlZp5&X-Amz-Signature=5f642011afbcea9579bc35013368e8ad6e06324f29687937b48bc872d5922942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SP2OYRM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdoD5%2BWQHMV6m7D1FkViSiwwulEr9Q2adlJKjVHVgR8QIgTUet861UVMaA9DpF%2FjDmmt9%2Fxh%2FL3TIpMwp0jg89LQUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDITGmL5OX9zG9a2ixyrcA845%2BfrCBefsZt%2FGVpOS7YHpCaTRrEd%2FCHddoMVbOlY4ZmRwKk2tE2zYCaTuH008lD8hyvgpwiIdWH5LET6qZT5HL%2Fm8ccSiLRuueX3pNoZ8lFLbtUH%2BhdjWJ7ZQwGSHtt%2Fxxv0guHARQ7vNQDsg58UGxdNxX1q2kcDZTAMHjqwArf9dMDlJ6HaGNWQQQmo0oDMqIY0VQPWn880Mq0XSIUA%2BDGN2MG7P4Zz%2FA8wE2jQlMDPpcbk0DxvCVz1fF6ppl%2BlibB1ID%2BBv4szROYQiRuoIrAziZwEz8JPvzFE7u2zPSYbh6cfp8KCE0vPUVrY5dW0YOf9tOMlpMdXe3kleaIWiU8lBmZEnTUzszfF5%2B%2Fhrl0tFUIe5s0byqEz0Yc4k3qQ4eHsN6NuZyl1GkdArsg4OfB5m%2FM1kkHu3g%2B2WGCl03QJp45PiWPBv8acBetqJviHmwREqlWKaP2O%2BV9nGQpCxcYvkSnAmp6GC9VnV5BG5oAC98Yndk5J%2F2WCQoPPLY7jEcacjCY%2Ff6KPCy29G265U0WMWfvV0UY8NaJXgSbUetHYfZb1RH20no22ItoNQGBcCrT6lEpVg9MTsQmOhxCXbcldpAzzpq%2BJXtxVSBUNbMpX262MFBxyWwjRlMOym0MkGOqUBKn7We35jcqZV9ktUqMBfeu1Ze8RAwLzMZre0LVj2DATYmXViCdVwLep9AoADb8C68fj6S4CX3n8OQMdHx%2FnqpCDl9nsYtuxzltQfEs6sQ%2Bey%2FeNSaeLhUiscOxjQuj8OaqW98l2C7WcMT%2FMBOhIKl2LM5fCpVjQkz9yOmHlIwXymzxSGwU5yOlkhM5FePOxBIesnL6aGZb2MJbMNWAc2w%2BPNlZp5&X-Amz-Signature=8d80f747b7298ab8875a82d309689ad659d7facffb7dcd2eeb85d66a2b1e0e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
