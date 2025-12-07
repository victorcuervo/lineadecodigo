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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AHIQOX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWFvMsTb2x0%2Bfp1DiXiIt7OvpilSz3%2Bu9rWQ9GIQgHDgIgDi5u4RNi2EZPec6GQnCdbbhrHzgBdZhTQ4KuahbKfNMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM91u9A%2BJJzsmY4%2B0yrcA%2Bei51hVAkD1cWTOrJUKhcF3XuASUNV5AGRvPOM3ny%2BJF43RKJGfRW4rNa81%2BB%2FooxjBXH1t33HfK7y6%2BIKwvaOte2BT2swk1wkpRqHYh1o%2BonZEjnTafhvGN%2B6C6XhtNKxq%2BK7B22hDp3RyFRHE7BeMb8dba8f0ePuJyp8WrYyXUvnopIhCMiYykycSGpJxthBI7kqsrHkK10%2FkH18iSwPg%2Fi8vjJJvkvti8F%2BJiDwUrAP2oW7ggZWkeQ9TwtnXhb4YXPdZylSeibci9ft7fRWThxFIMIMfqJWDzs%2FNM68Jeu37Vzzy4AjA3RFgqqek0ptbC9X46Debna9jPakitO0kfR000NbouR8xbaE%2FjLKyJ1L5Wgp6FhrPgudu7AI8LmICgiOogYTvmaNvarEdwRoUCM%2FUC%2FnNfjddU5VVYbnyYdN3o7T%2FAaLnYjHX2XgYGgwMNRXXCF%2F60SV%2B2vUjguQEMw2eKPmCxfTR5iS19e128YZDw3udE9NdgD7INhnVA%2FiT9ivYwNaWOOIgnKJw4hz8rU08MR5xv2ln1HZEy7MBZuIlQ%2Fx03AE7kDnYdooHzjV6CJotr1trHo9shtxm9RL1IH%2BMMIjoXbFR0qZOif1PSOfKwJHbaTUGgjrbMJ%2Bo18kGOqUBtOzrQp4snLMnPczP5h8S0PE3qbdICoY1eObUIdkDmdF3hHXbYgXgb94svRtfeSuJMnNOVeIVBJfizJyfmOJbHOuqRtNrOvieSEGN9T8LBSX642OVDBFEe0TykNFqF4%2Fsy8iOC23JLvaxFHzWWBXhMrfuN5nMflN28SQno82X3asuTSwr%2FUukj4V%2FbvzBDK0uHJT2tGCMgIM6521fikJLSVRmGqVe&X-Amz-Signature=47e18fe9715d21d7e6292dfb17c7adb21fc2824b433e2b10413d456a7955c90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AHIQOX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWFvMsTb2x0%2Bfp1DiXiIt7OvpilSz3%2Bu9rWQ9GIQgHDgIgDi5u4RNi2EZPec6GQnCdbbhrHzgBdZhTQ4KuahbKfNMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM91u9A%2BJJzsmY4%2B0yrcA%2Bei51hVAkD1cWTOrJUKhcF3XuASUNV5AGRvPOM3ny%2BJF43RKJGfRW4rNa81%2BB%2FooxjBXH1t33HfK7y6%2BIKwvaOte2BT2swk1wkpRqHYh1o%2BonZEjnTafhvGN%2B6C6XhtNKxq%2BK7B22hDp3RyFRHE7BeMb8dba8f0ePuJyp8WrYyXUvnopIhCMiYykycSGpJxthBI7kqsrHkK10%2FkH18iSwPg%2Fi8vjJJvkvti8F%2BJiDwUrAP2oW7ggZWkeQ9TwtnXhb4YXPdZylSeibci9ft7fRWThxFIMIMfqJWDzs%2FNM68Jeu37Vzzy4AjA3RFgqqek0ptbC9X46Debna9jPakitO0kfR000NbouR8xbaE%2FjLKyJ1L5Wgp6FhrPgudu7AI8LmICgiOogYTvmaNvarEdwRoUCM%2FUC%2FnNfjddU5VVYbnyYdN3o7T%2FAaLnYjHX2XgYGgwMNRXXCF%2F60SV%2B2vUjguQEMw2eKPmCxfTR5iS19e128YZDw3udE9NdgD7INhnVA%2FiT9ivYwNaWOOIgnKJw4hz8rU08MR5xv2ln1HZEy7MBZuIlQ%2Fx03AE7kDnYdooHzjV6CJotr1trHo9shtxm9RL1IH%2BMMIjoXbFR0qZOif1PSOfKwJHbaTUGgjrbMJ%2Bo18kGOqUBtOzrQp4snLMnPczP5h8S0PE3qbdICoY1eObUIdkDmdF3hHXbYgXgb94svRtfeSuJMnNOVeIVBJfizJyfmOJbHOuqRtNrOvieSEGN9T8LBSX642OVDBFEe0TykNFqF4%2Fsy8iOC23JLvaxFHzWWBXhMrfuN5nMflN28SQno82X3asuTSwr%2FUukj4V%2FbvzBDK0uHJT2tGCMgIM6521fikJLSVRmGqVe&X-Amz-Signature=cfda247139b7df340b130c4a5d525060dab5577b7e06d7c4be5e7e7c3f7a09f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
