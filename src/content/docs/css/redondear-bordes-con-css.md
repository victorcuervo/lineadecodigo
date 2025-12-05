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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3SC232U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHM%2BHEntkulos%2BZAiwg68hdFR9%2FsH7ya9MVCHwd4c5HAiBYAUFNR5tJLuL7K9t8vgynqRwWCZ5gNExmtmWtzobQNCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMEzwNLTruMRHMca%2BEKtwD6dLm%2BANNiOdmICsuCF4aUfQTpUNtXmqjKJJ%2BpsYN7rok7cJqDoVWmi4mMXgfooflj97ZSxt3EaF6z8MUXbAy0wUHzD3IWNc1mjMWywnf7ArRQ1KlgboC4KYo9TBBCh5CMjLfpNSalNoh64eGcgTskM9vzxhBwbW8KrUIqTCjoIwyKb4OQP1WdpwPPySPD%2FineruS4QI851xiEhWz9P7EGrHF9TmDRPMSr9ioHLRZ2APEACHeXNnSaMTM02x14cC7jyLRzOgbbeZMAb%2FgusrDxj9SRHEVv1ykhG96%2F86dzx18DFXlvNQMmtHLAJ1d8PGV74CXrPYZJPZ6Q21hZWj5%2B4icnzeJNN1bvztxDLRxmpNtoYDkKBXS4RlPHApgEthI4p8D2%2BQiYESd0EOLolISd%2Bhx%2FjPfJJfOCFa6CUXhqwJP7YnKA6u9VfrqgbO2I3rFwyKugQqYOkJ2EiI2rL9e9dUT%2Fv0DdUC9S21N4V5lTRKf3Zcfq3DrXnutfavVJykXYVMJF%2FVUBMdTe7kLLRvrFchjGAj%2FDP%2BdU68RZp2RfueR5hmUrOd%2FRroCwHX%2FDLajR6X%2FAJBGQ2qFrEdFZtS9phM5kCyQzaGyjiHPYtzwJfj7T0SL1U8RI2sPEzIw94vIyQY6pgFOOrt%2BQgSbLil%2F4FdgO188IIN2KmCXmipDM9Y9ozvoc%2B%2BQzL0eIkqxCHiJ4rcqEANt66KokpsL0eh6pmdIYKlAKYcAx72e921dL55p1y7wtUEIfX%2FJoh6mZDfOjgHYII8fncNk2%2Frjyyy8m%2FTp6Qwewgl5YA7qt5gFSNEkAlYDAhvMbhUpzPv5TgqhG1hpGEnyzxmDNMDGDA%2BJXCIEmDjbP6XF95MY&X-Amz-Signature=f1f18faad4d82c00a8ad8467fce57e07899cbcc5e4fbc99a043c1c5d69b9d559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3SC232U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHM%2BHEntkulos%2BZAiwg68hdFR9%2FsH7ya9MVCHwd4c5HAiBYAUFNR5tJLuL7K9t8vgynqRwWCZ5gNExmtmWtzobQNCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMEzwNLTruMRHMca%2BEKtwD6dLm%2BANNiOdmICsuCF4aUfQTpUNtXmqjKJJ%2BpsYN7rok7cJqDoVWmi4mMXgfooflj97ZSxt3EaF6z8MUXbAy0wUHzD3IWNc1mjMWywnf7ArRQ1KlgboC4KYo9TBBCh5CMjLfpNSalNoh64eGcgTskM9vzxhBwbW8KrUIqTCjoIwyKb4OQP1WdpwPPySPD%2FineruS4QI851xiEhWz9P7EGrHF9TmDRPMSr9ioHLRZ2APEACHeXNnSaMTM02x14cC7jyLRzOgbbeZMAb%2FgusrDxj9SRHEVv1ykhG96%2F86dzx18DFXlvNQMmtHLAJ1d8PGV74CXrPYZJPZ6Q21hZWj5%2B4icnzeJNN1bvztxDLRxmpNtoYDkKBXS4RlPHApgEthI4p8D2%2BQiYESd0EOLolISd%2Bhx%2FjPfJJfOCFa6CUXhqwJP7YnKA6u9VfrqgbO2I3rFwyKugQqYOkJ2EiI2rL9e9dUT%2Fv0DdUC9S21N4V5lTRKf3Zcfq3DrXnutfavVJykXYVMJF%2FVUBMdTe7kLLRvrFchjGAj%2FDP%2BdU68RZp2RfueR5hmUrOd%2FRroCwHX%2FDLajR6X%2FAJBGQ2qFrEdFZtS9phM5kCyQzaGyjiHPYtzwJfj7T0SL1U8RI2sPEzIw94vIyQY6pgFOOrt%2BQgSbLil%2F4FdgO188IIN2KmCXmipDM9Y9ozvoc%2B%2BQzL0eIkqxCHiJ4rcqEANt66KokpsL0eh6pmdIYKlAKYcAx72e921dL55p1y7wtUEIfX%2FJoh6mZDfOjgHYII8fncNk2%2Frjyyy8m%2FTp6Qwewgl5YA7qt5gFSNEkAlYDAhvMbhUpzPv5TgqhG1hpGEnyzxmDNMDGDA%2BJXCIEmDjbP6XF95MY&X-Amz-Signature=1005b881dd1c946c68a6201783f245b8bba5540835b3d18f472ed17aac5c7f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
