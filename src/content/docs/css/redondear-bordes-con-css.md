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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NF7TIE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCgvNWNRFezSpgtHesOjaRRM5f4H23ynBAAAaTjM6vEsgIgPPP4DT1S8LQMYSAHYKmAed%2BhRc1WmRQB9cHmpL1TPvAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHclOiX1CV9WhCIXxircA2GLhBStzAmrevCmY4vKUTjwBfePzYx%2FQi30jpZJDPqLt2hcjWppfFoRubl2X5mRNLOgbqAtqTqdPez0RXvynPejDrq5rVF%2BrY21%2BfFxM4fxtG5Z5pqz%2BXWCkv8Ghzgf8nMsv6wyoIbPRNRoSb5bjBGl65qUjAZDJKa8hbHkbHCEqKqlSCQRV86v3IyHRoi%2FKYz99%2FqE50kGL%2FC%2Fxdz94xBxrEvkvvdUaflohOs20uqYu4kH6tSpqo%2FDcwu8vrz98OeIJVzAATHOqn1p8oGDsCNP%2BJK3Y7QwTyXCPbsfZL3Z2VfrWCpYRLTdZY%2Buv0KrtOc6YbEg7h4bX2C4Os0h02%2FgQAgmvKX5br8pUsMaTxZJ6X%2Fr8XoaZTM8D5XeC%2BzpAqvFDI5bUJqYP%2FuHEHNchjHrzm4TDch5C%2FxbM1OqeCXsmjwFwFER0laykAhkst1QIQs2Hx1ydNLND1HsE4RThRS9mRrDpp9P6vhsQ7zd57ouErek%2FVjUZJ5j8d2MZkfUYS6ym58%2FLEvAoLzt81oes21Xdauo5gtFm0qFzBh7xhH7xMDf4QDInHP6YUqGdpN%2BWBJeeO8pfzoNCx%2B%2FazFtpPhzQvvkpBCiEv54GbdJ2wAOMm%2FrV1%2B8tkwU8%2BffMMOuxMkGOqUBxjZ%2Bzxul6%2BTEuzdHsUdaWf4rEgJvfEyAQnmL0Hl8kIK6J%2FrXdJvxAV1UhxLdbCS8PXgN0WOjcaCNdnv%2BaB6wNNLjiFpr3mZzj2PDK1DYmIa8U4rwy%2BKGu2WogNwrf71cJtsAUWHH4Cw87KLmtzldp%2F%2FaRIUUxmIMKzan5%2Fyd4tdrroDg3dH1BnkdyMMMTt3Wrs8WkE63E7S2Pf88%2BRNrhfD57qNc&X-Amz-Signature=5d4d04e28a35b7706d46717d71b374f63c420f03f9a063fa8a0bb1135c36e3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NF7TIE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCgvNWNRFezSpgtHesOjaRRM5f4H23ynBAAAaTjM6vEsgIgPPP4DT1S8LQMYSAHYKmAed%2BhRc1WmRQB9cHmpL1TPvAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHclOiX1CV9WhCIXxircA2GLhBStzAmrevCmY4vKUTjwBfePzYx%2FQi30jpZJDPqLt2hcjWppfFoRubl2X5mRNLOgbqAtqTqdPez0RXvynPejDrq5rVF%2BrY21%2BfFxM4fxtG5Z5pqz%2BXWCkv8Ghzgf8nMsv6wyoIbPRNRoSb5bjBGl65qUjAZDJKa8hbHkbHCEqKqlSCQRV86v3IyHRoi%2FKYz99%2FqE50kGL%2FC%2Fxdz94xBxrEvkvvdUaflohOs20uqYu4kH6tSpqo%2FDcwu8vrz98OeIJVzAATHOqn1p8oGDsCNP%2BJK3Y7QwTyXCPbsfZL3Z2VfrWCpYRLTdZY%2Buv0KrtOc6YbEg7h4bX2C4Os0h02%2FgQAgmvKX5br8pUsMaTxZJ6X%2Fr8XoaZTM8D5XeC%2BzpAqvFDI5bUJqYP%2FuHEHNchjHrzm4TDch5C%2FxbM1OqeCXsmjwFwFER0laykAhkst1QIQs2Hx1ydNLND1HsE4RThRS9mRrDpp9P6vhsQ7zd57ouErek%2FVjUZJ5j8d2MZkfUYS6ym58%2FLEvAoLzt81oes21Xdauo5gtFm0qFzBh7xhH7xMDf4QDInHP6YUqGdpN%2BWBJeeO8pfzoNCx%2B%2FazFtpPhzQvvkpBCiEv54GbdJ2wAOMm%2FrV1%2B8tkwU8%2BffMMOuxMkGOqUBxjZ%2Bzxul6%2BTEuzdHsUdaWf4rEgJvfEyAQnmL0Hl8kIK6J%2FrXdJvxAV1UhxLdbCS8PXgN0WOjcaCNdnv%2BaB6wNNLjiFpr3mZzj2PDK1DYmIa8U4rwy%2BKGu2WogNwrf71cJtsAUWHH4Cw87KLmtzldp%2F%2FaRIUUxmIMKzan5%2Fyd4tdrroDg3dH1BnkdyMMMTt3Wrs8WkE63E7S2Pf88%2BRNrhfD57qNc&X-Amz-Signature=bf244e260b34ad891c353eb8ff95e464208be6e091e8e72e1d7f5c7ccce86646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
