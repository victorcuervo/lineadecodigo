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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FS6OKQZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCfI1wHooImkL9JeTINu1kp6OPvvs9nqG97W%2Buj4oMWDgIfKOtDJpLeHQdICqARGt3BueyiFax9pHg6%2B%2FYMbPRtLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMcFRKKPDz4RiT77dKKtwDUIBK9OgF7bf1BBrwqGJjUMncAddrTinFgA5PBb3Ste8AG7LSCNx5OS7a5jF%2F6%2FFdu%2FABuNAJwRPgSP9ijMyvXnLhEiSO87S73CdftfzBNqEakR05ZvDRvzoVZTiqtf8I%2Fw%2F%2F9ZyVQE%2FWR8tla0mCR1ambECFVlyGSx%2B%2FGYxCjaPIiArYq01EoymOJRZysr%2B0NFy%2FrDLIcwPGn37ibcwJzcrWvlMjr%2Bhnn4DlyOnVFVhqzGALJJ36E%2F06Oej%2F3oxJb5De9KO17%2BYXV5XOQb5YNny6KC3Fuw7ZJH9dLGNEwvKCg%2FjBnKyJcDFz9pW8RH5jVpNg9mn97QnuKAPsXxm0I2MOcUDScgrPhgtZhRVb%2FVdxYUEXA9T2czExfTQioKd5E5LZ6l%2F7x%2BYIaXJHOCsHWXfvz2Ur18SeqOyPDmvgUcbGmkqHMuSStsNuokgf142UyM80UbUjbg3DWYTvhRRJW%2Bzum0R2ETPatEzSQL0ZPbi8bg464IrVqNE41yXxgyRLnWhXzaUV84drZPr4YF24akpTzec%2BW5bwGs%2Bc7zM04lYyCfBXS9IAYiWEuO%2BNe%2F1Ae3WszmEdRd%2Fz5FPntq12Xy9KU%2BCahMdBqGPnNK4W5v206g0vZNXsXgXxLngw%2F9CJygY6pgEYC2ZWihcR0FkpfPMDbTgOlOn6ShbhEQ62Z4V9SulUhb9fFe8o8DZt9OJjAecQ%2BIeZCF6JTVDndJ9HZsDFTaRPI9atVgUkv7L5Fl5MQbQAe9gNzycua2PaN%2FWIVu6SHzcCALK9wrd6SWoRtQZyjQOp8yAjqnyWauW9G4yEvrfn1IHEmyCaOe3DwRZCF9htWhAi7NieR1rFZWdgwTWY4YSzplAMB9iL&X-Amz-Signature=6711ab4c57a9497207e7e02160391953021d0c5846b7aac8e9a5283f8f6d5382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FS6OKQZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCfI1wHooImkL9JeTINu1kp6OPvvs9nqG97W%2Buj4oMWDgIfKOtDJpLeHQdICqARGt3BueyiFax9pHg6%2B%2FYMbPRtLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMcFRKKPDz4RiT77dKKtwDUIBK9OgF7bf1BBrwqGJjUMncAddrTinFgA5PBb3Ste8AG7LSCNx5OS7a5jF%2F6%2FFdu%2FABuNAJwRPgSP9ijMyvXnLhEiSO87S73CdftfzBNqEakR05ZvDRvzoVZTiqtf8I%2Fw%2F%2F9ZyVQE%2FWR8tla0mCR1ambECFVlyGSx%2B%2FGYxCjaPIiArYq01EoymOJRZysr%2B0NFy%2FrDLIcwPGn37ibcwJzcrWvlMjr%2Bhnn4DlyOnVFVhqzGALJJ36E%2F06Oej%2F3oxJb5De9KO17%2BYXV5XOQb5YNny6KC3Fuw7ZJH9dLGNEwvKCg%2FjBnKyJcDFz9pW8RH5jVpNg9mn97QnuKAPsXxm0I2MOcUDScgrPhgtZhRVb%2FVdxYUEXA9T2czExfTQioKd5E5LZ6l%2F7x%2BYIaXJHOCsHWXfvz2Ur18SeqOyPDmvgUcbGmkqHMuSStsNuokgf142UyM80UbUjbg3DWYTvhRRJW%2Bzum0R2ETPatEzSQL0ZPbi8bg464IrVqNE41yXxgyRLnWhXzaUV84drZPr4YF24akpTzec%2BW5bwGs%2Bc7zM04lYyCfBXS9IAYiWEuO%2BNe%2F1Ae3WszmEdRd%2Fz5FPntq12Xy9KU%2BCahMdBqGPnNK4W5v206g0vZNXsXgXxLngw%2F9CJygY6pgEYC2ZWihcR0FkpfPMDbTgOlOn6ShbhEQ62Z4V9SulUhb9fFe8o8DZt9OJjAecQ%2BIeZCF6JTVDndJ9HZsDFTaRPI9atVgUkv7L5Fl5MQbQAe9gNzycua2PaN%2FWIVu6SHzcCALK9wrd6SWoRtQZyjQOp8yAjqnyWauW9G4yEvrfn1IHEmyCaOe3DwRZCF9htWhAi7NieR1rFZWdgwTWY4YSzplAMB9iL&X-Amz-Signature=283ccb5b1c654d863e266b2776d8bbbeb3b0f88ef2742c14e52caf25612e2d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
