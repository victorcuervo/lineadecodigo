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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJ4ZR2V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVzc2mTj837%2BqIR8lVTCOkUxW9MVrdZCE8E6%2FNPqlNLAiAMXXDhR0b%2BqO8rKvGjROzAfh7au3JgKTiCedkFiQF%2B6SqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMndzI6L8Bw%2FiSMLmcKtwDjTG%2FAhMukET5%2Fs%2Bc0z05Cm3Wt0J2yy%2B8d6tdEedFhbI1JAZQlD1Pc9GO%2BB%2BcMCrr%2F%2FrjA3y4Pb0rvXUvVO4cSCy5OTZg4uCyt84GblWZIpEPKSRDL60JSTnGif0%2FZERNclaDnuX0tAz4Zmol%2Fu2LfniNykEpCu9E84LZVC1xgXLaPxsaPZpYbxCX%2BGWETIub8kqyvasAYSuQjIj3B52iijj8YrtsG1VJUxun4e6%2BhygaLcruWR4%2FF3TOE%2Bi14gmHJDHIBMPcQC3F3qpo%2BEgZ3Vq7Egi2NAVcOuINE1yBOiVPjJwKXn0YeX%2FLfQGe4kIXN3gZkjZnwIquGFPTkqiGp6FZeYyjWYmZrRQ%2FGQBal2NPGRombrAQCfhSkhBwZQFCGjCDq9WkECAhqCd96VXUXEhI4tkwO8kUwLnxYckzJ3dsKOrrd%2FMJEdUKnQX9HRnnjL0w3qCnheYMjF7WBiqAF8U3UVrwWJMEyiQftszVmpu9%2FTMNK%2FiS8xv7ajMtMWgl0NNUDSjur%2Birq%2BsXbkOJNb7vQEq4EEfz3ahRlZOupqHrRCQzRXHkU1n3TuZWzU%2BoSa843IyHhO7E67B4HmKPpGGHvUJIad2Xo5L7wbMCnEZ97xrTBFuxea7YYhMww%2BTbyQY6pgHLSf%2BbcpfCve76K6tJuovt%2B1gwDxl8wI53quAPWqrsIHR59Tlxu1mcWMVwgqKH1wi5GP9jUQXLrrDTlstVJ99RdK5HCei2TnD0TZlVijCzQmlBHB0l75uSZc1LkKdqCvi58wgjdZLYCzw6M2IvEiqYNtY4V0M9M87%2FN1c%2BQoalM38fELRpsOzW36jJcD%2FJAJ0nKLnn6y3m8ExMOFl75Rg0Ae9S1UDh&X-Amz-Signature=c2f099c598a44581aebe5b9c797b3ddf5661441cfd019449f696b106fe9c0039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJ4ZR2V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVzc2mTj837%2BqIR8lVTCOkUxW9MVrdZCE8E6%2FNPqlNLAiAMXXDhR0b%2BqO8rKvGjROzAfh7au3JgKTiCedkFiQF%2B6SqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMndzI6L8Bw%2FiSMLmcKtwDjTG%2FAhMukET5%2Fs%2Bc0z05Cm3Wt0J2yy%2B8d6tdEedFhbI1JAZQlD1Pc9GO%2BB%2BcMCrr%2F%2FrjA3y4Pb0rvXUvVO4cSCy5OTZg4uCyt84GblWZIpEPKSRDL60JSTnGif0%2FZERNclaDnuX0tAz4Zmol%2Fu2LfniNykEpCu9E84LZVC1xgXLaPxsaPZpYbxCX%2BGWETIub8kqyvasAYSuQjIj3B52iijj8YrtsG1VJUxun4e6%2BhygaLcruWR4%2FF3TOE%2Bi14gmHJDHIBMPcQC3F3qpo%2BEgZ3Vq7Egi2NAVcOuINE1yBOiVPjJwKXn0YeX%2FLfQGe4kIXN3gZkjZnwIquGFPTkqiGp6FZeYyjWYmZrRQ%2FGQBal2NPGRombrAQCfhSkhBwZQFCGjCDq9WkECAhqCd96VXUXEhI4tkwO8kUwLnxYckzJ3dsKOrrd%2FMJEdUKnQX9HRnnjL0w3qCnheYMjF7WBiqAF8U3UVrwWJMEyiQftszVmpu9%2FTMNK%2FiS8xv7ajMtMWgl0NNUDSjur%2Birq%2BsXbkOJNb7vQEq4EEfz3ahRlZOupqHrRCQzRXHkU1n3TuZWzU%2BoSa843IyHhO7E67B4HmKPpGGHvUJIad2Xo5L7wbMCnEZ97xrTBFuxea7YYhMww%2BTbyQY6pgHLSf%2BbcpfCve76K6tJuovt%2B1gwDxl8wI53quAPWqrsIHR59Tlxu1mcWMVwgqKH1wi5GP9jUQXLrrDTlstVJ99RdK5HCei2TnD0TZlVijCzQmlBHB0l75uSZc1LkKdqCvi58wgjdZLYCzw6M2IvEiqYNtY4V0M9M87%2FN1c%2BQoalM38fELRpsOzW36jJcD%2FJAJ0nKLnn6y3m8ExMOFl75Rg0Ae9S1UDh&X-Amz-Signature=0d68d553e1e8c40a62cedcabee912ae80e4cf5ec046b54558563ecd0ac09ed2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
