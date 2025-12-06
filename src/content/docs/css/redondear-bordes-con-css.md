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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQELCLV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsEnCBaIV19ekl4Za%2F6EJK2zKmtUpuL6RW3r%2B8IF3n%2FAiEAlyUveJ8qigNWPd41WNECIdQsvfzuHMGM%2FRjzAKoiXukq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDM%2FAa5NDBaEGvVI7RCrcA3ozqC%2B20OdM5BAfoKzSCH2WY1g4ST1kzden22b%2FYdzh6cHbV67UEZM7E%2BNFXszetB%2Bbpl6%2FMceC2%2Bztd2IWdIS2dsqpqJuZlNY65d3LKVbZSyiTcNkeOviU%2FW7AfIIgc3CSUgmjW0D6xdE2ERjYlniyWLrJZLYjpmg4jiP12TMLnBFIS7qiR3wl%2BOhbapb8jv%2Fgu30HTx2fPLsCZMtNjKUAvvYR8Yz1L8Gfiwdzo2Za10iH7Sw6iPf83x5acVwhE%2FHHSgwWh1XDZMZ9Kss8uFTrcxPZYsD3NOB0gc5e9Ep6TzQoNv2XafcvPWHrdvntdx%2F%2BFK5uZN8o%2BsHTKUgEr6No9ZsgHJ66Vq4aa7ncqhkMIJrF6aYk1eGnIY3EA69WdUNZnXrzD6%2FQc9%2F%2Fs7d9K%2F4esknZ2jBSxDRiohu26xgRPRvZV5YlEyy7NbGCfTuXhfo1GTFXe7Z7nkSSGIRJS1GnLKYh%2FBgDN56UAzAmGDUQoRvoD02A53iwU0fekD04TxGrxQCy0bN9QsVJeTFwiq4D%2B7o6zl%2BtyqJmuJZHT4I9qhrxvmGBHj54RKYgZFCqbIvUIHCeTurt0e7QaTuExhFoHz%2FPzwp35ktXPGUfEOLjRUrTdZAClOp2iWYaMNPezskGOqUBjNtxMngkeRlUNfBor9TRQDmk8LBoYHme8kfTNSkTlx7r4zqhpjrf0QSDjdv1Kwg6Xipbgx8cd885adwHdAS4TIBqRWG9L%2BsIX%2BlQkIQ1Izeqrp0p7lVlEdXSySjBhazW0zA%2Bfmy5BqoYgtrBAoy4YLlU%2FCJZOanoAS7qGK9LD%2BKJAHfcqaOoBgiR7fQcFFXiWabQ06UPzu9ociKomnSrzUBr%2Fm5V&X-Amz-Signature=94ec6dd60ae7da22478afd1bd0caa3c7fdcef24d7a08dc343fa0ec1b46b2fde5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQELCLV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsEnCBaIV19ekl4Za%2F6EJK2zKmtUpuL6RW3r%2B8IF3n%2FAiEAlyUveJ8qigNWPd41WNECIdQsvfzuHMGM%2FRjzAKoiXukq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDM%2FAa5NDBaEGvVI7RCrcA3ozqC%2B20OdM5BAfoKzSCH2WY1g4ST1kzden22b%2FYdzh6cHbV67UEZM7E%2BNFXszetB%2Bbpl6%2FMceC2%2Bztd2IWdIS2dsqpqJuZlNY65d3LKVbZSyiTcNkeOviU%2FW7AfIIgc3CSUgmjW0D6xdE2ERjYlniyWLrJZLYjpmg4jiP12TMLnBFIS7qiR3wl%2BOhbapb8jv%2Fgu30HTx2fPLsCZMtNjKUAvvYR8Yz1L8Gfiwdzo2Za10iH7Sw6iPf83x5acVwhE%2FHHSgwWh1XDZMZ9Kss8uFTrcxPZYsD3NOB0gc5e9Ep6TzQoNv2XafcvPWHrdvntdx%2F%2BFK5uZN8o%2BsHTKUgEr6No9ZsgHJ66Vq4aa7ncqhkMIJrF6aYk1eGnIY3EA69WdUNZnXrzD6%2FQc9%2F%2Fs7d9K%2F4esknZ2jBSxDRiohu26xgRPRvZV5YlEyy7NbGCfTuXhfo1GTFXe7Z7nkSSGIRJS1GnLKYh%2FBgDN56UAzAmGDUQoRvoD02A53iwU0fekD04TxGrxQCy0bN9QsVJeTFwiq4D%2B7o6zl%2BtyqJmuJZHT4I9qhrxvmGBHj54RKYgZFCqbIvUIHCeTurt0e7QaTuExhFoHz%2FPzwp35ktXPGUfEOLjRUrTdZAClOp2iWYaMNPezskGOqUBjNtxMngkeRlUNfBor9TRQDmk8LBoYHme8kfTNSkTlx7r4zqhpjrf0QSDjdv1Kwg6Xipbgx8cd885adwHdAS4TIBqRWG9L%2BsIX%2BlQkIQ1Izeqrp0p7lVlEdXSySjBhazW0zA%2Bfmy5BqoYgtrBAoy4YLlU%2FCJZOanoAS7qGK9LD%2BKJAHfcqaOoBgiR7fQcFFXiWabQ06UPzu9ociKomnSrzUBr%2Fm5V&X-Amz-Signature=921834efc2609126e64696594434bede77a56c71d3d605386a2ed19d228b7613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
