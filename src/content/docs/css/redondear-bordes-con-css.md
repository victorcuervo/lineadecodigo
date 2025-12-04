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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYR7YFH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBcBPLssERMk1VgfTcEqc1Q4jKzgea9y7Q3QKEUbRWZdAiAPQvD1gwbrfMprbWlrpuQdhAk31%2BLLBPgQ%2B%2B%2FMt9eZHyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMGInuJ0tK0NylMhVoKtwDOVuISDYCMuB4xphRz8yZIyeoxwGyrQ0azqNwJH40jdoAuzt5JcfTGune5WgjRomAcfThv3%2BNXag58Honfa0u%2BCRf8HjClTX%2BGpLYq674bjv01yyA%2FaGhID3VrHESWr2vdgq4OdvnOrDNIJ5phYDb4vxrzQ7HQzvBZVi3DsFAVJL40H%2Bla7pwz%2FJoGIP8dW%2Fonu56gncaS9D33jrFb7Wk9GBCdkEMROsAa%2FmWA4nKhmAgIT4vicWhzexPOtyblXOiYkcUSGdwZ%2F33vU4MMFi9OJVTKXyZ2hkR7sPrWexNqktnHo4OATtXBqkrqM5Y%2FQs4ifb%2FCFZlUgmnI%2BpCEWpRqs9xPK%2FNl8uWdA5k2PiLTa%2BW98PoEKusQKbA9fgybHzOMcGs6EZ165ACWhDmbjQ%2Bidf7vbrl7qA%2BqkdkFZEJu%2F%2BfHxr9J5GvFS%2BJMEHvF338%2F6VIBJci1aba8EXPPJhMZDVG6aodqW4GBchBtEYHYCp1cPsbUor2cHN2D5purRnhg5j7E0sdJANmR4anhrwOnXmES6O7fIucwr9nKGlUTaGFz4M9dbhD9YS2TCC15iHHPhR9zB4cuRUTSos13vslPUddds6jnBRftwJnPmmKeCtKTHW5AUxN9ZpHrC4w1ufEyQY6pgHYhJI9MHy6Jz1TaSS%2BpCgd31h%2Frc4xF%2F6nAVWC%2FKyoUlQl6ClitUCL4aRshqspMF6Pl1BFM1TmewngXWjVEbTZ3kk0PiLDaAZVaEwSe0Fp3WKfAe%2BK0v2JbTWogRlYydOfZ3KxuV3BY%2FY0czYaUdlzGEtMqU2MGjVpsawBgW4XruOGTcI5wiIRpuTRlPzyi2Gl1BRX0eQOX8upvp5d9J29J4xMFPQO&X-Amz-Signature=1fb78e0151cbcca1af3181dd0cb75250b17db69674df538dbf17f3abbdf477fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYR7YFH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBcBPLssERMk1VgfTcEqc1Q4jKzgea9y7Q3QKEUbRWZdAiAPQvD1gwbrfMprbWlrpuQdhAk31%2BLLBPgQ%2B%2B%2FMt9eZHyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMGInuJ0tK0NylMhVoKtwDOVuISDYCMuB4xphRz8yZIyeoxwGyrQ0azqNwJH40jdoAuzt5JcfTGune5WgjRomAcfThv3%2BNXag58Honfa0u%2BCRf8HjClTX%2BGpLYq674bjv01yyA%2FaGhID3VrHESWr2vdgq4OdvnOrDNIJ5phYDb4vxrzQ7HQzvBZVi3DsFAVJL40H%2Bla7pwz%2FJoGIP8dW%2Fonu56gncaS9D33jrFb7Wk9GBCdkEMROsAa%2FmWA4nKhmAgIT4vicWhzexPOtyblXOiYkcUSGdwZ%2F33vU4MMFi9OJVTKXyZ2hkR7sPrWexNqktnHo4OATtXBqkrqM5Y%2FQs4ifb%2FCFZlUgmnI%2BpCEWpRqs9xPK%2FNl8uWdA5k2PiLTa%2BW98PoEKusQKbA9fgybHzOMcGs6EZ165ACWhDmbjQ%2Bidf7vbrl7qA%2BqkdkFZEJu%2F%2BfHxr9J5GvFS%2BJMEHvF338%2F6VIBJci1aba8EXPPJhMZDVG6aodqW4GBchBtEYHYCp1cPsbUor2cHN2D5purRnhg5j7E0sdJANmR4anhrwOnXmES6O7fIucwr9nKGlUTaGFz4M9dbhD9YS2TCC15iHHPhR9zB4cuRUTSos13vslPUddds6jnBRftwJnPmmKeCtKTHW5AUxN9ZpHrC4w1ufEyQY6pgHYhJI9MHy6Jz1TaSS%2BpCgd31h%2Frc4xF%2F6nAVWC%2FKyoUlQl6ClitUCL4aRshqspMF6Pl1BFM1TmewngXWjVEbTZ3kk0PiLDaAZVaEwSe0Fp3WKfAe%2BK0v2JbTWogRlYydOfZ3KxuV3BY%2FY0czYaUdlzGEtMqU2MGjVpsawBgW4XruOGTcI5wiIRpuTRlPzyi2Gl1BRX0eQOX8upvp5d9J29J4xMFPQO&X-Amz-Signature=edfeecd1fe8dccc094ab0b60498ca058e51ed8c774ced1a85bcf5ed596e201b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
