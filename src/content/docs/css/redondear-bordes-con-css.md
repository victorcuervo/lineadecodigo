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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4B6OBS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxBh%2FySM1DOycgn9BtEsHqwsbd%2BAxs3TW5C92MJZ7OgCIC5lTICJKGPbVZUwMMymMw2GzVyznFR4lCxrUdIM7g%2BfKv8DCFUQABoMNjM3NDIzMTgzODA1IgwfE4YfQUkyVRf3tQMq3AONAsZbaBbx17oOxvsfA7Sren3EBLYHjBTYRMFiY8k0awOr4ID34wx%2BsZNVcK8eFw9zLZxz0oH7zBUxH2PYeiQuu06M0EInuhaObKkNQVMLi2xuACdb9eLIQ548TzLWCU5hPmzpTksBcZl8rQZzCrHQ7X8x6iQQSwIdXOLPE1UaViEROHoLM1sbW2lIuaNxyYwKR7qj4BX7cg5GhCKPWhvuICU8k9vs0AnL%2FDBOe4QHg8F1n48pokUDypt9zJyE72AOdM59UrYQvz50pacdw3jmIP%2BvImb0xTHjG%2FKteizNEZ%2FpSrIHDPgS%2Bl9jr52gh9fiSGUPUfwFLFpzmDKW3hpxdkrouMIE0v5zSMBFbHZ04qBp%2F4O%2Fm54041bNWdzrJMeZRvSqjpeyQnsIXqh4YVsd1VN5cfxE8o9Qvmrih9AiZtYXoNlbkKliI3OAR4IYAq%2B3CeK%2FgePTjo0%2F5FVFVmx0mE%2B0oWmjZ8d6YwGl53i4U7ZS%2BeF3p0u1BoE4vxzrpp18EopUxi82koUsr9sXd9uSO8WvQlKiPVO92AIU%2FApRRcrnkVCW1k2DaTfBYvP3zBNowqbs6NJ8HmgWHOCXzJ34f8v7bkXSBCtkruklXAM7dSOzL%2B%2F2PTOvyvFHjTC7r8nJBjqnAesiywGAqyVB6iJ%2Fe2OCjdHwX93cLCkUeaU1Foh4TZh0km%2F8IugLGhru9dNp2LZCNw07dr4JB%2F9pnBEV7D6IR0DHDXuG3YgR9WgOvT7wjTHsYB%2Foqp4V59%2Bf7juWgoWCDku7Feqidto3s3Z3Eyo6f6EcjWalOd2VstOT%2FSNJmLKT4Ngue%2BHeGteYNV2NAlJFroFp%2F1N2IVQVEPJupbDOpQcwQ479AIq0&X-Amz-Signature=4f21f3a25a1e421609a41fb6df19e569b9af1ce55ea8b97060f23fd3cc0e9e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4B6OBS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxBh%2FySM1DOycgn9BtEsHqwsbd%2BAxs3TW5C92MJZ7OgCIC5lTICJKGPbVZUwMMymMw2GzVyznFR4lCxrUdIM7g%2BfKv8DCFUQABoMNjM3NDIzMTgzODA1IgwfE4YfQUkyVRf3tQMq3AONAsZbaBbx17oOxvsfA7Sren3EBLYHjBTYRMFiY8k0awOr4ID34wx%2BsZNVcK8eFw9zLZxz0oH7zBUxH2PYeiQuu06M0EInuhaObKkNQVMLi2xuACdb9eLIQ548TzLWCU5hPmzpTksBcZl8rQZzCrHQ7X8x6iQQSwIdXOLPE1UaViEROHoLM1sbW2lIuaNxyYwKR7qj4BX7cg5GhCKPWhvuICU8k9vs0AnL%2FDBOe4QHg8F1n48pokUDypt9zJyE72AOdM59UrYQvz50pacdw3jmIP%2BvImb0xTHjG%2FKteizNEZ%2FpSrIHDPgS%2Bl9jr52gh9fiSGUPUfwFLFpzmDKW3hpxdkrouMIE0v5zSMBFbHZ04qBp%2F4O%2Fm54041bNWdzrJMeZRvSqjpeyQnsIXqh4YVsd1VN5cfxE8o9Qvmrih9AiZtYXoNlbkKliI3OAR4IYAq%2B3CeK%2FgePTjo0%2F5FVFVmx0mE%2B0oWmjZ8d6YwGl53i4U7ZS%2BeF3p0u1BoE4vxzrpp18EopUxi82koUsr9sXd9uSO8WvQlKiPVO92AIU%2FApRRcrnkVCW1k2DaTfBYvP3zBNowqbs6NJ8HmgWHOCXzJ34f8v7bkXSBCtkruklXAM7dSOzL%2B%2F2PTOvyvFHjTC7r8nJBjqnAesiywGAqyVB6iJ%2Fe2OCjdHwX93cLCkUeaU1Foh4TZh0km%2F8IugLGhru9dNp2LZCNw07dr4JB%2F9pnBEV7D6IR0DHDXuG3YgR9WgOvT7wjTHsYB%2Foqp4V59%2Bf7juWgoWCDku7Feqidto3s3Z3Eyo6f6EcjWalOd2VstOT%2FSNJmLKT4Ngue%2BHeGteYNV2NAlJFroFp%2F1N2IVQVEPJupbDOpQcwQ479AIq0&X-Amz-Signature=b7826aba5cf0819a86b2512d98e5ef5b5c4208cbdc567495e6716450eef3fe61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
