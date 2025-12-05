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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDTBPBE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp2PTvAdRtTtp3xv9F5HAUG1nJnMdA0l2XX9hFb746pAiAT8LTCXR%2Fmc2A5YxCC8EQgmG7cYX0bf76MBl4RblXaACr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMkfSB1%2FRWoDlYHReQKtwDm%2BtO%2FQDQ32BhE%2Fwu51cghWPswg6rvWNfDMrsk2r2%2BvVzZqtFkhh96ya33T14NEu55T7v0vKgrfzQ0UTHTj0LYU1mvNZhojMt0xuQXKa43PEpHJTqeF6Vk42zFqWeqZNQHC8AWsZFChe9bryRcpCjqCK%2FdslXfW2ZtYVpzv8RGSlzewfKEzFeUUIadfcSRfQfUHHofgvLuiKoIidgJ%2FZVL0GpBYIsfbG2fwwvUaVv35MOFsrmUYsK7%2BQ9oPqPAIvX2r0gYDNg94ju7RrVkaeLBmUZ8SoJ2jzYlIysnvaNoGD0QxPK2To27PsZXg46%2BBq0lOvZPLZ%2BkhBrHhqXuX3VEOlcmXb7s2Mcnq9J2TGAhe6kE4fA%2Fiqj0S9CFvIZ1NGkeZr3TFiWxzgQ0u45JBjunKscQpF2ihmIObA5iFd%2BHcT3nszDjqPOSZWWEhwsv7rKwgFbzPjPWyI8ETCzGZyZpZCkqMikf%2FKyokKofH5Az7LDyi95BgjcEzHpk1rkkJfoEAl6IlEtWsUSabZJkewBjz80K05I1%2FCijonDuR9bJCfWgwL%2BiNhEekUQ%2BO87Ew2Liig0vvco0j9HNRq6LcZ%2Fr6fvbAzeJ6wLm1rUFYHs%2ByKSRI9V1%2F36TP21kD4w4tTKyQY6pgEqDfuPhsKtlsGRhcHnQtlPEVXbzQ%2BQLeIHznFfUoQC6v2I3yl1LrpbL1w%2BW2OWj6FgqDNeuAxi%2BonS%2BtpKgn7oXRxgVYC%2FSeeTXwCUYogYdfapU%2FZ7aE0gxArcNG%2Fp4Z4uQ4tcUIqlKl5XB8fpdRLLlcwyG3u7SwN%2FrgYxdrKYh4VAfyR4YJWRzCKRQk%2Fq7HZIGuDps2CKa%2B%2FtsDBJY3Wz75QeDN8b&X-Amz-Signature=88594ffdf9db4740dbf7cad494ef4fc458e3c7a86d0845a0b3cdb2ede43c6d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDTBPBE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp2PTvAdRtTtp3xv9F5HAUG1nJnMdA0l2XX9hFb746pAiAT8LTCXR%2Fmc2A5YxCC8EQgmG7cYX0bf76MBl4RblXaACr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMkfSB1%2FRWoDlYHReQKtwDm%2BtO%2FQDQ32BhE%2Fwu51cghWPswg6rvWNfDMrsk2r2%2BvVzZqtFkhh96ya33T14NEu55T7v0vKgrfzQ0UTHTj0LYU1mvNZhojMt0xuQXKa43PEpHJTqeF6Vk42zFqWeqZNQHC8AWsZFChe9bryRcpCjqCK%2FdslXfW2ZtYVpzv8RGSlzewfKEzFeUUIadfcSRfQfUHHofgvLuiKoIidgJ%2FZVL0GpBYIsfbG2fwwvUaVv35MOFsrmUYsK7%2BQ9oPqPAIvX2r0gYDNg94ju7RrVkaeLBmUZ8SoJ2jzYlIysnvaNoGD0QxPK2To27PsZXg46%2BBq0lOvZPLZ%2BkhBrHhqXuX3VEOlcmXb7s2Mcnq9J2TGAhe6kE4fA%2Fiqj0S9CFvIZ1NGkeZr3TFiWxzgQ0u45JBjunKscQpF2ihmIObA5iFd%2BHcT3nszDjqPOSZWWEhwsv7rKwgFbzPjPWyI8ETCzGZyZpZCkqMikf%2FKyokKofH5Az7LDyi95BgjcEzHpk1rkkJfoEAl6IlEtWsUSabZJkewBjz80K05I1%2FCijonDuR9bJCfWgwL%2BiNhEekUQ%2BO87Ew2Liig0vvco0j9HNRq6LcZ%2Fr6fvbAzeJ6wLm1rUFYHs%2ByKSRI9V1%2F36TP21kD4w4tTKyQY6pgEqDfuPhsKtlsGRhcHnQtlPEVXbzQ%2BQLeIHznFfUoQC6v2I3yl1LrpbL1w%2BW2OWj6FgqDNeuAxi%2BonS%2BtpKgn7oXRxgVYC%2FSeeTXwCUYogYdfapU%2FZ7aE0gxArcNG%2Fp4Z4uQ4tcUIqlKl5XB8fpdRLLlcwyG3u7SwN%2FrgYxdrKYh4VAfyR4YJWRzCKRQk%2Fq7HZIGuDps2CKa%2B%2FtsDBJY3Wz75QeDN8b&X-Amz-Signature=85c06894402d916d755f6984b09a393575a91038382c401698e9785352763cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
