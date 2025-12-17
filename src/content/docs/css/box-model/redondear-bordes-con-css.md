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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABGD7PP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqWECl%2BmGaHgcc%2FCMGCJkkpW6TfrwYML5TU49lk%2FAkHAiB2%2BBM45RtFGSKjB52%2B0CTYJKy7lg33uLc0SQ75le8ZWiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkCXvQQbnXmihyXVjKtwD1Fy8nHVSfy2A900OO00B0AsMuPBfkZWWmfIewVYYXKapR0G334%2BRocUn2z4inKxMLxXQltm4ojKRi%2FGxfWDKkMjOocft6Bqf%2FADEscoCMdQxs08U%2BJJJNO3%2BXmi7mMfhMGVw8JkRXMrCELEIDDhdVpAMt5Ucnv%2FINHtqOGcirwsGaWP0FlsbikKqv78vAzcU8RC%2BcqlySyQ7ekK0ezVNmvUSjdrsI2mjf7nBMsTBgi%2BJ4AwYnlND1OoxTK0KWOJ08hgDvGV%2F1HrLxljV5xFudFe9ngl2%2B8kJ%2BD9ovoXMl%2FjzfCmPjr1rnLP7P62uODjA8Kj3DW32w5S%2Fg%2BbXw0LoUuaM0D0mY8QCoyvPz68AqY7baYRDMLgoZg7XbuHNLHGZZxNoc2yRV4kArvCOf5%2Fa%2BT1DiFrOc5uHsjMDqR9EmPGR%2FFW6LmJSXumrqSqyhnhmcpFFBgYEAEvxnzeJwNxQqcVuFm3Jmo%2Fgh3zV9kj0oPld3sEqiNHRFUlvj50oR6iAS3KjoPHiSouVEXTwuG1DwesqGCaOGFzSrOwQ2siq3BNa%2BPpN0KO3cJmzIESocmpxZ8FxEDTRLKF8vF71EdMFQogKOR0LUQg8yAi2wb8UVwYjrziI%2Bfe48GthzC0w%2B5%2BLygY6pgFVj5vBkPYkWdqpNCw5qOoLoRErdRr2wbV6uR0Vwrv%2BJFR%2FH66%2BQ3wrfKuQiHUa%2FpplP04SzGdLaiLF5ofhZhTiIpPIAbg4ZRTye74Xr6g3UwojFob6bZ8urVcmzZEa6MxoVntOAN3xntmo3uJDbFi3mrhjuGioS5mOCH7V1rOOgFy54dUBKPHHMT%2Ff9prV8bFvgi%2BDePghVjaC4qsPPGV49AkdxUkT&X-Amz-Signature=650efab7228b770a181f9b62016f02ef9163cbf8560037ac29ff0de710edaab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABGD7PP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqWECl%2BmGaHgcc%2FCMGCJkkpW6TfrwYML5TU49lk%2FAkHAiB2%2BBM45RtFGSKjB52%2B0CTYJKy7lg33uLc0SQ75le8ZWiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkCXvQQbnXmihyXVjKtwD1Fy8nHVSfy2A900OO00B0AsMuPBfkZWWmfIewVYYXKapR0G334%2BRocUn2z4inKxMLxXQltm4ojKRi%2FGxfWDKkMjOocft6Bqf%2FADEscoCMdQxs08U%2BJJJNO3%2BXmi7mMfhMGVw8JkRXMrCELEIDDhdVpAMt5Ucnv%2FINHtqOGcirwsGaWP0FlsbikKqv78vAzcU8RC%2BcqlySyQ7ekK0ezVNmvUSjdrsI2mjf7nBMsTBgi%2BJ4AwYnlND1OoxTK0KWOJ08hgDvGV%2F1HrLxljV5xFudFe9ngl2%2B8kJ%2BD9ovoXMl%2FjzfCmPjr1rnLP7P62uODjA8Kj3DW32w5S%2Fg%2BbXw0LoUuaM0D0mY8QCoyvPz68AqY7baYRDMLgoZg7XbuHNLHGZZxNoc2yRV4kArvCOf5%2Fa%2BT1DiFrOc5uHsjMDqR9EmPGR%2FFW6LmJSXumrqSqyhnhmcpFFBgYEAEvxnzeJwNxQqcVuFm3Jmo%2Fgh3zV9kj0oPld3sEqiNHRFUlvj50oR6iAS3KjoPHiSouVEXTwuG1DwesqGCaOGFzSrOwQ2siq3BNa%2BPpN0KO3cJmzIESocmpxZ8FxEDTRLKF8vF71EdMFQogKOR0LUQg8yAi2wb8UVwYjrziI%2Bfe48GthzC0w%2B5%2BLygY6pgFVj5vBkPYkWdqpNCw5qOoLoRErdRr2wbV6uR0Vwrv%2BJFR%2FH66%2BQ3wrfKuQiHUa%2FpplP04SzGdLaiLF5ofhZhTiIpPIAbg4ZRTye74Xr6g3UwojFob6bZ8urVcmzZEa6MxoVntOAN3xntmo3uJDbFi3mrhjuGioS5mOCH7V1rOOgFy54dUBKPHHMT%2Ff9prV8bFvgi%2BDePghVjaC4qsPPGV49AkdxUkT&X-Amz-Signature=b55f89dbcba9a82c5bc011c34d05b9142570ebfb7dbfbd78ced540e18f8b1fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
