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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BS65USH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFts0LNPkuqe0MI25ZIRWV1vI%2BJwjoqTwF%2FqjZDBjVX5AiEAxu9pLDA8IWlyy7lcVjh%2FveZfXeCFgMtFC2LEjvi7XQ8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMhgM4mt2YFaVT6XaSrcA75cE%2FMjTSa2ud2i1mXKCeiD9gIUClWiIgJGusDqDOCNsip%2FDrKHhK4mdu3qIo49CHb7Z8sEQEnPBHwNSWByYxCppZh2UeEFG39PmHCM%2FFYNaWQ9nGRkVzdMt%2BHRFl1lLhOv2tbFBTZzUiaDUnaSMQx%2BXBq%2FX%2BTuOQdXMuUeHndhK4wPW05YC13meV0z4GNBYfQq5J01bFFP3fbOG4D1X7WPeeLgrQFS8Wk1%2BKwr%2FG1mSmkBSRKPtT9SFVXPOAskBpfCHa8Y9eZBmq3G6ZbYwD5S1jzJfQD251HygpkYURcd47dXXXqTsFvvZ9LAoLsBwDykUqck6bCWjuKTxu1Cf%2FZZHpXIyu7Irtkyu8Eayxnh2MkK1QRImrJDe83Vzg0T3cRVPnvy%2BSUuaaqJ2tphe5PJF3lnGHHcOPxNzkTwn88VJO000OMkVphWnfiKNKlgBw5P8U0672KwFVeU%2BLcddVSNYB7dzgcIfF6ha3EMc7kw%2FiMwjgTCMGC4KznsyhNoDjv18c1hYVP8xa9WVozB4oA70cnz9Lbr9a2eptynUPmPpgYTXaq0lrmFlJts3j38aGO6YTlaYUSCLUemm3kmg8YbpDEDMO%2BKKRblkuL7nFMsY7MKe3vTql39VNK7MPnbxskGOqUBorDvykY4m%2BEOgK2qJam%2Fp%2BZIKUryimwycmRGAy0T7Lp3qLzQJwpAWjs%2BBo4XxnZ7QSbkygFNEt9Dpz%2F4JlLBFl7KsO95JjceQxAfTwMoFO85GKBBLY%2BMsntuM6oP%2F0fkq4CWL7RpQzMQag67J%2FhbGIrjlAL5PaciFxRWNguMmdoLCuYe7T05HZ43XxknMid8KNyC5h%2Fxk%2FqyxuW2TDnu1w%2BXbAIC&X-Amz-Signature=98dad65e10351d249bf5f242d04bf55bfb809dc819ee9d07b7e11a75125db21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BS65USH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFts0LNPkuqe0MI25ZIRWV1vI%2BJwjoqTwF%2FqjZDBjVX5AiEAxu9pLDA8IWlyy7lcVjh%2FveZfXeCFgMtFC2LEjvi7XQ8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMhgM4mt2YFaVT6XaSrcA75cE%2FMjTSa2ud2i1mXKCeiD9gIUClWiIgJGusDqDOCNsip%2FDrKHhK4mdu3qIo49CHb7Z8sEQEnPBHwNSWByYxCppZh2UeEFG39PmHCM%2FFYNaWQ9nGRkVzdMt%2BHRFl1lLhOv2tbFBTZzUiaDUnaSMQx%2BXBq%2FX%2BTuOQdXMuUeHndhK4wPW05YC13meV0z4GNBYfQq5J01bFFP3fbOG4D1X7WPeeLgrQFS8Wk1%2BKwr%2FG1mSmkBSRKPtT9SFVXPOAskBpfCHa8Y9eZBmq3G6ZbYwD5S1jzJfQD251HygpkYURcd47dXXXqTsFvvZ9LAoLsBwDykUqck6bCWjuKTxu1Cf%2FZZHpXIyu7Irtkyu8Eayxnh2MkK1QRImrJDe83Vzg0T3cRVPnvy%2BSUuaaqJ2tphe5PJF3lnGHHcOPxNzkTwn88VJO000OMkVphWnfiKNKlgBw5P8U0672KwFVeU%2BLcddVSNYB7dzgcIfF6ha3EMc7kw%2FiMwjgTCMGC4KznsyhNoDjv18c1hYVP8xa9WVozB4oA70cnz9Lbr9a2eptynUPmPpgYTXaq0lrmFlJts3j38aGO6YTlaYUSCLUemm3kmg8YbpDEDMO%2BKKRblkuL7nFMsY7MKe3vTql39VNK7MPnbxskGOqUBorDvykY4m%2BEOgK2qJam%2Fp%2BZIKUryimwycmRGAy0T7Lp3qLzQJwpAWjs%2BBo4XxnZ7QSbkygFNEt9Dpz%2F4JlLBFl7KsO95JjceQxAfTwMoFO85GKBBLY%2BMsntuM6oP%2F0fkq4CWL7RpQzMQag67J%2FhbGIrjlAL5PaciFxRWNguMmdoLCuYe7T05HZ43XxknMid8KNyC5h%2Fxk%2FqyxuW2TDnu1w%2BXbAIC&X-Amz-Signature=decc4a177fbaf421f4121f35fab0042de02a47afe138068fb9d9f37dbcd0df83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
