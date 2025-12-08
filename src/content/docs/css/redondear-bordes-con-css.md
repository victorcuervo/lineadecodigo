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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKEUJFS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiuo%2FOVJLILqMoPWK2QDKebBYU%2BPNhuKRc3GnepFKRmQIhAMse%2FkdWX87NrHGfogETIxYiXrcNtur4F3hmSdABAWmuKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7twYQTP%2BGkR7ZrHEq3AMaqdyGEe3X3cz8n5ARxsS8aH6X7kIw1k18hLEWLPuUeA7zhNXsbwZS%2FsSnYhRUvxtptWrBZqrikr2iwnU6wpBap5YWVd%2F5gk9ht3b%2BWR4KlgFEwefISrTDUiHzS7ZR4FVfgOzWSTBjRUUbVnf56NJMIIdbs1J0SdXX5wkt9eXjBXRHCpWTKnd6CHxVeAFFZxVRzbQjS6Gh4MgXebniVIZnC0N4H1cZ3JRytgoYLZ5icyjSGRqMgtWIT5Ax1xC1JmL9Wa2G4EUA2htq4%2FFpfvW97V4r%2FraMtCxG7WPKgVoFMtvL16pRjZt%2FvlCW273qDHCK4xKTqnBWGkXlSRWmsK26F62E52JrtAnvsZ0TKjMz65Go08vSSEbT3MKpkniJAaSK2MZ51ibFio%2B%2FcAHcYyfuC%2F%2BDzGRet4M3j2Kfk7HQvj7VssVwoWUozryg4SRFLJMsWMWiJoFOqNLB3U2y1Se1D2%2B5l3OmImyS7zQh5%2FKw8IJrN7u29c%2F1Ghla10rx8rQJ059mEBILpRkjAEKf5T2OUI1O3nU8ylt7jW7ovSn8FOn2GIninAqRP8pAEpHWjCWpcS9eejDbtfDsp19pmWmItE6xmCOcdrT%2Bo3YBy60ig5HugMyDMH3TJQbUKDCm3dzJBjqkAbBHxc7YSBikiW5l48k6xUfmMBohaEMHUzcOrlUgwR6%2F13XdoncBNrHP7ceZZr0%2B0jMg3Uwe2J71e5Xxd4PPxpHN85DpOfxaD50AEfr%2FxOlpKcSwsTxvHX0VBz%2FVm7xCaloZBcf8dDXUUdLj97bhXDbnmzlx%2BCNgBkSykiTU341kn53X5jEtJAsr07TaDs7XRPew1z2Wips63jedTDmefmUKPEoo&X-Amz-Signature=b236d2309773d1a289dc125f26a54021ed023faaa782a28f2caac08018c2a669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKEUJFS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiuo%2FOVJLILqMoPWK2QDKebBYU%2BPNhuKRc3GnepFKRmQIhAMse%2FkdWX87NrHGfogETIxYiXrcNtur4F3hmSdABAWmuKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7twYQTP%2BGkR7ZrHEq3AMaqdyGEe3X3cz8n5ARxsS8aH6X7kIw1k18hLEWLPuUeA7zhNXsbwZS%2FsSnYhRUvxtptWrBZqrikr2iwnU6wpBap5YWVd%2F5gk9ht3b%2BWR4KlgFEwefISrTDUiHzS7ZR4FVfgOzWSTBjRUUbVnf56NJMIIdbs1J0SdXX5wkt9eXjBXRHCpWTKnd6CHxVeAFFZxVRzbQjS6Gh4MgXebniVIZnC0N4H1cZ3JRytgoYLZ5icyjSGRqMgtWIT5Ax1xC1JmL9Wa2G4EUA2htq4%2FFpfvW97V4r%2FraMtCxG7WPKgVoFMtvL16pRjZt%2FvlCW273qDHCK4xKTqnBWGkXlSRWmsK26F62E52JrtAnvsZ0TKjMz65Go08vSSEbT3MKpkniJAaSK2MZ51ibFio%2B%2FcAHcYyfuC%2F%2BDzGRet4M3j2Kfk7HQvj7VssVwoWUozryg4SRFLJMsWMWiJoFOqNLB3U2y1Se1D2%2B5l3OmImyS7zQh5%2FKw8IJrN7u29c%2F1Ghla10rx8rQJ059mEBILpRkjAEKf5T2OUI1O3nU8ylt7jW7ovSn8FOn2GIninAqRP8pAEpHWjCWpcS9eejDbtfDsp19pmWmItE6xmCOcdrT%2Bo3YBy60ig5HugMyDMH3TJQbUKDCm3dzJBjqkAbBHxc7YSBikiW5l48k6xUfmMBohaEMHUzcOrlUgwR6%2F13XdoncBNrHP7ceZZr0%2B0jMg3Uwe2J71e5Xxd4PPxpHN85DpOfxaD50AEfr%2FxOlpKcSwsTxvHX0VBz%2FVm7xCaloZBcf8dDXUUdLj97bhXDbnmzlx%2BCNgBkSykiTU341kn53X5jEtJAsr07TaDs7XRPew1z2Wips63jedTDmefmUKPEoo&X-Amz-Signature=00ae300c3b9a00aa504d984e2d0bd8369be7dcdbdf8d2c743d037e095a8a42c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
