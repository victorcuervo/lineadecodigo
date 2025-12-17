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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSST7WH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYNKVnFgUcDSRarZuTX9JQhsOIvFtNjCMJ2IcoGGlNzAiEA0%2BXG4V17NvcNVRV1rAqN9O8AJIAWcD5TDrNzVzjzj0IqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe4mDuWyASBbkvNgyrcAyWsJZnfhW2pBdxfyaUQVXqZp8HMWtxNGyQX2b7iJe7tD1wN2%2FwkX00BbvFlIeC9uwsTHeHHhnzalpTJ7uO9XZXqcoOoFrQc%2FIai5XKTHZoap8SCN%2BknHxJamzu8FzMa5N4dfwZr0poHp0cweYou3pingKupNSts5plm9Ns6nRzoD12CHMAj7UkRqrgpkwk3UH7dGt5ZTmcz7L8SAU0a5pM%2BSQYqtNEB%2FfAsDKxfVi%2B8s%2BBTTJQaV%2BUPowLQDfLUYyt4QAyGms4enVjB2rQSNt055faMWzPwu6vo5jzUmiMNxFWA%2FQXSSnmJXicqoMQzu2Nsl214IkCyEOQYnOTLgM4%2Bqx38AF2HZG69kL%2BS5%2BBFm%2FXnED4s%2BL9qymzK0E1ILXF1an%2FECPi1XuvqH1%2BlDHVGURSSBK3Jht8VE5EYRwsgga8B4WW%2BT8WJ3p7YvB%2BAmloR6x%2B%2BpzUbrICiKuphD0wvMuKt0TtZj8xaYZCSNF70qnfbYjWNCwr6jAAjmZ0lH%2FHZyxvc2QHjYGOKEuohdKShN%2F0E01sXy3mug1KVVsA%2BDVozwuHIq4%2B6WJ15oUHIUxvCp3LOThek1%2FRkXJ4cF9Xq0xtxOHr0o4MKSUJ1zi09%2BE4AMa1PIbrrxyEVMIOMjMoGOqUB8W8vDW%2BvOeNutoPWgJ7TXbvPywXSVxRLcWFS%2BeArno9%2BxvCBKG%2FIM7JLKpVtMQmKai3IISRrk4fI0OS1ZBiFS6Z593k8FvegEO%2B0FCdWY9ztu2qxHHgcsrKueIOSkPqypuTlMLi7kg%2BpGQM%2FCzSPTll6cIrYZkby6gffaHTiyzVwxCuTFu23oZxyf688b0ExsEn3Pjlhmug4qaXu%2Bb3ode17vVDN&X-Amz-Signature=f0ec70880e97efe383bf9b8734b289720bfd5c2b6f202a8f8deba6b7d37873e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSST7WH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYNKVnFgUcDSRarZuTX9JQhsOIvFtNjCMJ2IcoGGlNzAiEA0%2BXG4V17NvcNVRV1rAqN9O8AJIAWcD5TDrNzVzjzj0IqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe4mDuWyASBbkvNgyrcAyWsJZnfhW2pBdxfyaUQVXqZp8HMWtxNGyQX2b7iJe7tD1wN2%2FwkX00BbvFlIeC9uwsTHeHHhnzalpTJ7uO9XZXqcoOoFrQc%2FIai5XKTHZoap8SCN%2BknHxJamzu8FzMa5N4dfwZr0poHp0cweYou3pingKupNSts5plm9Ns6nRzoD12CHMAj7UkRqrgpkwk3UH7dGt5ZTmcz7L8SAU0a5pM%2BSQYqtNEB%2FfAsDKxfVi%2B8s%2BBTTJQaV%2BUPowLQDfLUYyt4QAyGms4enVjB2rQSNt055faMWzPwu6vo5jzUmiMNxFWA%2FQXSSnmJXicqoMQzu2Nsl214IkCyEOQYnOTLgM4%2Bqx38AF2HZG69kL%2BS5%2BBFm%2FXnED4s%2BL9qymzK0E1ILXF1an%2FECPi1XuvqH1%2BlDHVGURSSBK3Jht8VE5EYRwsgga8B4WW%2BT8WJ3p7YvB%2BAmloR6x%2B%2BpzUbrICiKuphD0wvMuKt0TtZj8xaYZCSNF70qnfbYjWNCwr6jAAjmZ0lH%2FHZyxvc2QHjYGOKEuohdKShN%2F0E01sXy3mug1KVVsA%2BDVozwuHIq4%2B6WJ15oUHIUxvCp3LOThek1%2FRkXJ4cF9Xq0xtxOHr0o4MKSUJ1zi09%2BE4AMa1PIbrrxyEVMIOMjMoGOqUB8W8vDW%2BvOeNutoPWgJ7TXbvPywXSVxRLcWFS%2BeArno9%2BxvCBKG%2FIM7JLKpVtMQmKai3IISRrk4fI0OS1ZBiFS6Z593k8FvegEO%2B0FCdWY9ztu2qxHHgcsrKueIOSkPqypuTlMLi7kg%2BpGQM%2FCzSPTll6cIrYZkby6gffaHTiyzVwxCuTFu23oZxyf688b0ExsEn3Pjlhmug4qaXu%2Bb3ode17vVDN&X-Amz-Signature=107b736277cd9029006bae8cc2e682df8ec5f8cca9f9e9d02ff4f0dd0c80a178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
