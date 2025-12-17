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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFGCPGJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWWN65QbzlZQkIMsWACycy7r8zLHDWg8gsFCpBhWj6ywIhALpRusU%2BHVoCjOJ%2FpQj%2BnxEVb5nC9Di815nxUu2guWCmKv8DCHcQABoMNjM3NDIzMTgzODA1IgzmAUC2jIY9WniN69Yq3ANsQToTpX5TWK3IdlrHduhfX2EgN4Ci5fDO2oNKm37dL0qxSaq3aZm7MC8Y10HntQZ8iiPADJp6tinOD%2BwvKO62jwa0fqfQ6g3gyPAq7Y%2Fj%2BsNiyxMyMJvU4gddU%2B3e7QxqpqNdHSPLSBIaaGwOq7TErg7V9yf8RSfey%2FpkA94DSKwd7iNaS9NQOxgZFn2HaEGjsv38afb%2FNJI0reSrEdNa0aPfue4Kvdkj2P8qgLlUVQ7VuvDG9RjdhPG0nLOoo3apH89IaZyYfq4GUtVN5176%2BEW9q9SCV3yAJ9JhAxpQAAHvGrmNcI8uA7flZuad8ChEOjrcGBVkGzrRYmxBlmqICf4G5mPaD8YHUIxOQFPLxRgWjzsRUQh3%2FRcq4PHLFWREZHYrsOKaPcXf7akz8FigP0bSd6bacRHSSHJAxrE808%2F34B9m7fh5Qf9YkZIRrt4SkezXvsfI3tsFJioR%2BALfjfJ8g4BPOtbqhfQJ22c59TdkqGHa3i1omTaPFnPILajfhCMA2XauT6OlMWXlQ041%2B8Rtub0R%2F%2FJor6xSKsc39sG3iE7dUdUJqqnlErVqLSMAhkExxK15NRGvn9rxvlPAgF2mjwPDyM7uWeXhXaXydZvabvWSu9qBScoxfzDogonKBjqkASO%2FV%2BztvO4WHFl2vslBNTCSuJdEcADakWxuia3U5S202m18xfTUSPxJuGxlcdUXBM41czq3iwy0iZx4xjtP%2Bsd9pHJdUpjSJlJctYwUX6YSQEpZ3kayjOTutHlJe0vi4s33MlChoHfMmkksC8Cf1nXmRAc9TBwj6rn1EMnBjpVIIx9%2FcR2342Zz46%2FeMGB7MXCNLSaEiXIVYqXOPLbuGM1TuGU%2F&X-Amz-Signature=f0f0a3063603ebc4ea3a97521c90630f1e888695b4402ece9ef77b6baf3b869e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFGCPGJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWWN65QbzlZQkIMsWACycy7r8zLHDWg8gsFCpBhWj6ywIhALpRusU%2BHVoCjOJ%2FpQj%2BnxEVb5nC9Di815nxUu2guWCmKv8DCHcQABoMNjM3NDIzMTgzODA1IgzmAUC2jIY9WniN69Yq3ANsQToTpX5TWK3IdlrHduhfX2EgN4Ci5fDO2oNKm37dL0qxSaq3aZm7MC8Y10HntQZ8iiPADJp6tinOD%2BwvKO62jwa0fqfQ6g3gyPAq7Y%2Fj%2BsNiyxMyMJvU4gddU%2B3e7QxqpqNdHSPLSBIaaGwOq7TErg7V9yf8RSfey%2FpkA94DSKwd7iNaS9NQOxgZFn2HaEGjsv38afb%2FNJI0reSrEdNa0aPfue4Kvdkj2P8qgLlUVQ7VuvDG9RjdhPG0nLOoo3apH89IaZyYfq4GUtVN5176%2BEW9q9SCV3yAJ9JhAxpQAAHvGrmNcI8uA7flZuad8ChEOjrcGBVkGzrRYmxBlmqICf4G5mPaD8YHUIxOQFPLxRgWjzsRUQh3%2FRcq4PHLFWREZHYrsOKaPcXf7akz8FigP0bSd6bacRHSSHJAxrE808%2F34B9m7fh5Qf9YkZIRrt4SkezXvsfI3tsFJioR%2BALfjfJ8g4BPOtbqhfQJ22c59TdkqGHa3i1omTaPFnPILajfhCMA2XauT6OlMWXlQ041%2B8Rtub0R%2F%2FJor6xSKsc39sG3iE7dUdUJqqnlErVqLSMAhkExxK15NRGvn9rxvlPAgF2mjwPDyM7uWeXhXaXydZvabvWSu9qBScoxfzDogonKBjqkASO%2FV%2BztvO4WHFl2vslBNTCSuJdEcADakWxuia3U5S202m18xfTUSPxJuGxlcdUXBM41czq3iwy0iZx4xjtP%2Bsd9pHJdUpjSJlJctYwUX6YSQEpZ3kayjOTutHlJe0vi4s33MlChoHfMmkksC8Cf1nXmRAc9TBwj6rn1EMnBjpVIIx9%2FcR2342Zz46%2FeMGB7MXCNLSaEiXIVYqXOPLbuGM1TuGU%2F&X-Amz-Signature=4e19e99665f05d92b06b09a4311cf30fda7edda84d606b4e5ca6a933f668dd8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
