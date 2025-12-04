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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YML67IX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAM3Fx0nEJPtQMWLiwV9RzRaN530MIqHxFbvKMoNXO%2FvAiAzo69348EHPaEB79xXUf%2F%2Be1LNecI6BOGbJgoeaJo8Kir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMDJFVZ2sjG7XhBZfYKtwD4ZBOM7lD6lm%2B20atPz3n4XQwL579wkuS2xx16G9Nnumu99NEu98GmdwBpwBjIamCWIEaXuRodKwev9xSn8TImdvE0VHNdKWsfliIPPDvJZvHVQaR50ud92Y13WbJojHyqPjgx5Ulao5qR7eSxKkRwLBVjzQehX3rBqQbhixmFbpP52JFkXdT7g8sCotQ%2FBovMkb%2BG1wG7%2FEO%2FGGGbjPL8atb0V%2BK%2FWnhqxmoI1GP3laUjRKRac5nrl%2FtADqXYTuwle4KDE6PT4cGB8iAgzvLAdJ7mpOP7tFGi3jNtaOs9XzuiiJmNJxFd4Ehh9EN%2BEL0nMjsBCrnYgCU5e77x5VTN4fuhmz0s9ALwk03bYqAbKKYmGde4SDC1coszaf8tke8n6DjaWy%2FCCexSn0jtuRDDszIzhqjF6LTMl0QxGN7rBqiLfgm7XqeO5SShKLrK5flaK%2FsNC5WI8v68idaLf4RVA54JZXSxQC8hF8gbh43GyeIesZccJwH250vojX7rb5e%2FnO6LmRVODNtkMVIXgrjiuTsD898BuOrQ5%2BcVmHQ7N1fwbbJ1KDOKfQ%2BBT%2B2f5eKqP5r9JNdMQ70OA%2BRN0o6Cov1ZAVq9EdY8cI9ICnDnjmdKaRfTnVQ505r8UswlLXDyQY6pgHVtFfTNx1muNidXc3derekPcFPa%2BOmInHqXG585qKFZtBK4Vs8GNmig41CXGO4jEUt7KehoVM3l1URu%2FC%2FXNV%2BL3JBpn4yEbqGwYjOO7U%2BG7jCgpT5gI8%2BRiHSeBd%2FnxAUe28%2FcxztlAnlXR09mIVF%2B3syb7fr49G8dp1cNRbDLjTqZJUy%2BCPHMR4m2LUaXtQUE1r3ouZepd8XzhH4HAsaUGtiBqJT&X-Amz-Signature=72016ea73a3cab5e042ab28c5c58055ca1b1f5f6d2d20ff1f990599875350eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YML67IX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAM3Fx0nEJPtQMWLiwV9RzRaN530MIqHxFbvKMoNXO%2FvAiAzo69348EHPaEB79xXUf%2F%2Be1LNecI6BOGbJgoeaJo8Kir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMDJFVZ2sjG7XhBZfYKtwD4ZBOM7lD6lm%2B20atPz3n4XQwL579wkuS2xx16G9Nnumu99NEu98GmdwBpwBjIamCWIEaXuRodKwev9xSn8TImdvE0VHNdKWsfliIPPDvJZvHVQaR50ud92Y13WbJojHyqPjgx5Ulao5qR7eSxKkRwLBVjzQehX3rBqQbhixmFbpP52JFkXdT7g8sCotQ%2FBovMkb%2BG1wG7%2FEO%2FGGGbjPL8atb0V%2BK%2FWnhqxmoI1GP3laUjRKRac5nrl%2FtADqXYTuwle4KDE6PT4cGB8iAgzvLAdJ7mpOP7tFGi3jNtaOs9XzuiiJmNJxFd4Ehh9EN%2BEL0nMjsBCrnYgCU5e77x5VTN4fuhmz0s9ALwk03bYqAbKKYmGde4SDC1coszaf8tke8n6DjaWy%2FCCexSn0jtuRDDszIzhqjF6LTMl0QxGN7rBqiLfgm7XqeO5SShKLrK5flaK%2FsNC5WI8v68idaLf4RVA54JZXSxQC8hF8gbh43GyeIesZccJwH250vojX7rb5e%2FnO6LmRVODNtkMVIXgrjiuTsD898BuOrQ5%2BcVmHQ7N1fwbbJ1KDOKfQ%2BBT%2B2f5eKqP5r9JNdMQ70OA%2BRN0o6Cov1ZAVq9EdY8cI9ICnDnjmdKaRfTnVQ505r8UswlLXDyQY6pgHVtFfTNx1muNidXc3derekPcFPa%2BOmInHqXG585qKFZtBK4Vs8GNmig41CXGO4jEUt7KehoVM3l1URu%2FC%2FXNV%2BL3JBpn4yEbqGwYjOO7U%2BG7jCgpT5gI8%2BRiHSeBd%2FnxAUe28%2FcxztlAnlXR09mIVF%2B3syb7fr49G8dp1cNRbDLjTqZJUy%2BCPHMR4m2LUaXtQUE1r3ouZepd8XzhH4HAsaUGtiBqJT&X-Amz-Signature=9dcc5b057098d3821a201896ff5622cc0cc7315472999322d24bc99aab1e7093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
