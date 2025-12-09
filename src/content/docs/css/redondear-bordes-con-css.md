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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJ4QRNB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4dKJG9PMex7xaj5GSBVwbt35Ua109i5o%2Ffo35tKMAFgIgPWzoSASTgaXR2scYITx23%2B0xm7zxut%2FQbeuqMpODILYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B7KGt7IjqHWrI8circA%2FQzovoXANFnfIohLqlIOJ3FFrVRjFgBcxGtmOrp3D%2BcqRDZUnXGzbgETVVH5htSAfog6pGJkv%2BZs3SWFLmUk1uz%2FqlnyVSKEPeiQBZPBIN0t3jUFLSc0zmXJ%2FzjE7%2B0iqjd%2BsWl54Om4Psfx0GXrJjbENsoVxkeo9nFdZpS8zdWZ8pr%2B26S0%2BQGbsGaGjnKG6vBP1uWyWDmnh7gyJF8hwpbofKD1V2sOFWwTTwoXV0Cp1T3%2FLZDwvbpPcWVntUfEksvrco2KCLnE1j%2FJCBr3fnaWYg6oghpFK%2FKoZVHzuz4LTux1UhGXrdNwhteN6v59JFA72eGXeivIEa%2Fy5Hm2HTbI%2B2IkP2XTxzyfzarZMJtaulttbeBSx%2FU%2BUl1qfmx18GuZaayrKI8%2BLe5nrtIqEN01XGG1isITv%2FAcOWckwhWszVMBf1NJgFTQVakRXQMMYcqBsT3z1fBPxc0N4MQKJV1YhDvkTjOdy%2FVorH0qfesYRmWM9aNUFAZ2E8LX85ndJCSsjCMXlYsyOZyL30Gc%2BCnYFa5VsWV0EEvYZA6kHZt66EVthuXYjPCynoHUXP1kPpN%2FT6b1x7pKGFUyOtJ0nOJ5Q2ZslyzDAPekdmlvod5q8s0bhgCPUMXhoqXMLaO3skGOqUBL3%2FsgHcmbLk3eXJegqQdqIbKwR%2BdqzkW72qOiYAzaNzaxDEK7C0tnQsnH6MzVP3B0NkCx9koE%2BDeuY3pkdXBm7L1g89uQkrgI8Cf%2FmBn3hQX%2BjB0D2MJ35qn1%2Fq%2F3lEnqC5wmLPfGhhlHv66v9%2F1sIqFcPueyaDiHl3Wqz2puX7xcBNMy3RzbGW1kj3JoWoG5GRRnfyL3Pz7MpzToYvT8r3sAfwT&X-Amz-Signature=41a5eeb57141a3e114bdade6dfdc53358a2bc059af547fe82f86cf0936dc8aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJ4QRNB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4dKJG9PMex7xaj5GSBVwbt35Ua109i5o%2Ffo35tKMAFgIgPWzoSASTgaXR2scYITx23%2B0xm7zxut%2FQbeuqMpODILYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B7KGt7IjqHWrI8circA%2FQzovoXANFnfIohLqlIOJ3FFrVRjFgBcxGtmOrp3D%2BcqRDZUnXGzbgETVVH5htSAfog6pGJkv%2BZs3SWFLmUk1uz%2FqlnyVSKEPeiQBZPBIN0t3jUFLSc0zmXJ%2FzjE7%2B0iqjd%2BsWl54Om4Psfx0GXrJjbENsoVxkeo9nFdZpS8zdWZ8pr%2B26S0%2BQGbsGaGjnKG6vBP1uWyWDmnh7gyJF8hwpbofKD1V2sOFWwTTwoXV0Cp1T3%2FLZDwvbpPcWVntUfEksvrco2KCLnE1j%2FJCBr3fnaWYg6oghpFK%2FKoZVHzuz4LTux1UhGXrdNwhteN6v59JFA72eGXeivIEa%2Fy5Hm2HTbI%2B2IkP2XTxzyfzarZMJtaulttbeBSx%2FU%2BUl1qfmx18GuZaayrKI8%2BLe5nrtIqEN01XGG1isITv%2FAcOWckwhWszVMBf1NJgFTQVakRXQMMYcqBsT3z1fBPxc0N4MQKJV1YhDvkTjOdy%2FVorH0qfesYRmWM9aNUFAZ2E8LX85ndJCSsjCMXlYsyOZyL30Gc%2BCnYFa5VsWV0EEvYZA6kHZt66EVthuXYjPCynoHUXP1kPpN%2FT6b1x7pKGFUyOtJ0nOJ5Q2ZslyzDAPekdmlvod5q8s0bhgCPUMXhoqXMLaO3skGOqUBL3%2FsgHcmbLk3eXJegqQdqIbKwR%2BdqzkW72qOiYAzaNzaxDEK7C0tnQsnH6MzVP3B0NkCx9koE%2BDeuY3pkdXBm7L1g89uQkrgI8Cf%2FmBn3hQX%2BjB0D2MJ35qn1%2Fq%2F3lEnqC5wmLPfGhhlHv66v9%2F1sIqFcPueyaDiHl3Wqz2puX7xcBNMy3RzbGW1kj3JoWoG5GRRnfyL3Pz7MpzToYvT8r3sAfwT&X-Amz-Signature=2a2ca4455436041b5db0ea9caefd4e22a2e7bc7e242245df5475cc7e3a00af57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
