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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HVXOUIG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdPMTi8b5PhT1QXaws0nZsRce4OT6v3NZ7%2FqBk9uiVNAiEA0Pn9pzNFhueqynrdM71CDMWQjZYaExnyY7cAT%2BDMtzcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCI9B9Ygdor40mvuyrcA74MpW8kRSAFxRESiF%2FkHCKc5oeFr6G7f%2FmKbyRKSQqRewriceeuZgpfVc%2F54a6%2BqUWm%2F8m1BiRV2Uxk38v13Ni3F2nRPXi46e%2BQytujtiPUnIqyOAGMCU5rpilIlEQ1nRZJ5iI1moJ3%2FgGsSoHvs%2FvkFRV6ePF4ezNCpfknuCYg38CvS6yOOJIhPWdRNHC8HpB8w2nfbI0bGL6oP%2Bg0hcn848w0hmhjYopj02s0Sn1N2mlEWm2RoS9yfvgu6WLWXhp5eI9uZtozp6xD6roKig7ssTRyTprW4Gn6mUkdlmq99zs04EOBI2H%2BxeTmi1qChP9WhtkSYNv79BbHx5fa9jl1p2MQN4lTgYA%2B64KaRrGTSukVXh9h8aJNwmf%2BzZxHOYHr1pZVV5OAS1zBDFiwd1PL4QMChIxeUSYtCDugZFrGvQfWIaXNtQH9km%2Bdwbli0TNtoOVanjNq3hPNpOG2HLdnWpVB5bXN3ligueB5Ny7FOZNdLSU3qX2%2BacfMDWTpGf7OCdF7BTDT4bPSbpw71XQoLJG%2FIAvaRX23IFVk1jbvSbiwy4m4wAGJwjEBCpm7javW0tI%2BfDsZbiUeF0n1DSvPQr%2BJQ4G1hADmsFJxp4JN%2BfvuVjQU8Ri%2FHN4QMO3H18kGOqUBEpqOKUVtzDUI9QcrlZ%2FZozgpoJx3us%2F6Gmh132WA8ZfATwNIO7uqqrKjNJCwVMtVjur%2FMhke8XFsEMX8aUZRSDpKprroPeilX6G%2F5rf%2BSvj%2BnSSKl3eIDLia67BhU6fV5JO3zblXhmnVRVTe%2B0oUutXmhUhI1CZc95WNgNMxJ9qdxVN%2FJrQ8RfmewGAYQ4U9bXe2XjA%2Bup8m2JM2o9O8bnxwd666&X-Amz-Signature=59df3a440f1cdd0fffa43082ad0c679fe5016f999cb5c98ac9c85c604466e90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HVXOUIG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdPMTi8b5PhT1QXaws0nZsRce4OT6v3NZ7%2FqBk9uiVNAiEA0Pn9pzNFhueqynrdM71CDMWQjZYaExnyY7cAT%2BDMtzcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCI9B9Ygdor40mvuyrcA74MpW8kRSAFxRESiF%2FkHCKc5oeFr6G7f%2FmKbyRKSQqRewriceeuZgpfVc%2F54a6%2BqUWm%2F8m1BiRV2Uxk38v13Ni3F2nRPXi46e%2BQytujtiPUnIqyOAGMCU5rpilIlEQ1nRZJ5iI1moJ3%2FgGsSoHvs%2FvkFRV6ePF4ezNCpfknuCYg38CvS6yOOJIhPWdRNHC8HpB8w2nfbI0bGL6oP%2Bg0hcn848w0hmhjYopj02s0Sn1N2mlEWm2RoS9yfvgu6WLWXhp5eI9uZtozp6xD6roKig7ssTRyTprW4Gn6mUkdlmq99zs04EOBI2H%2BxeTmi1qChP9WhtkSYNv79BbHx5fa9jl1p2MQN4lTgYA%2B64KaRrGTSukVXh9h8aJNwmf%2BzZxHOYHr1pZVV5OAS1zBDFiwd1PL4QMChIxeUSYtCDugZFrGvQfWIaXNtQH9km%2Bdwbli0TNtoOVanjNq3hPNpOG2HLdnWpVB5bXN3ligueB5Ny7FOZNdLSU3qX2%2BacfMDWTpGf7OCdF7BTDT4bPSbpw71XQoLJG%2FIAvaRX23IFVk1jbvSbiwy4m4wAGJwjEBCpm7javW0tI%2BfDsZbiUeF0n1DSvPQr%2BJQ4G1hADmsFJxp4JN%2BfvuVjQU8Ri%2FHN4QMO3H18kGOqUBEpqOKUVtzDUI9QcrlZ%2FZozgpoJx3us%2F6Gmh132WA8ZfATwNIO7uqqrKjNJCwVMtVjur%2FMhke8XFsEMX8aUZRSDpKprroPeilX6G%2F5rf%2BSvj%2BnSSKl3eIDLia67BhU6fV5JO3zblXhmnVRVTe%2B0oUutXmhUhI1CZc95WNgNMxJ9qdxVN%2FJrQ8RfmewGAYQ4U9bXe2XjA%2Bup8m2JM2o9O8bnxwd666&X-Amz-Signature=a89fa87e1fbdb0b71492f62479011a2937fa48d7bdd358600ffc79b5b81daf4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
