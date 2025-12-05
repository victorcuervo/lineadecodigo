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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4CD45Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKzLqfRyRFG%2F35qB1PCZelibPpP6FEVIhtjceHtyytwAIhAOsNPFk8IN5Ad5aVNLf7xy%2Fxt7egY8X6h%2Fz2DfgH5sgLKv8DCFUQABoMNjM3NDIzMTgzODA1Igx285eV0%2FkBV1Q36%2BMq3AOvMExJnPHuhmawqH70dlrBXfiSFb0dOB5K9uZ3lSReUxriQcC%2BsBTmCjxTTCShDN5XlWCkjnhbzktFu5sYKn44c6Z6wt1v%2F6g8%2BvqjmcZHeoXwwPKT6qPRpSqh10CcQWU9SQB%2FVKUXeKEhSwl24lo%2BgF7HuOzQ1G6wnmeU7AdmMk3ASURkkuXLcawCmQC1CXFFyTGXR3ocIsQbTd1liS015Wn%2BDTSD8R2v8ZteEcNXD1OWuVKUvi97S5I8Y7hf3UCMngWmbvpcGs3qpWD6A70gcfcGJwhst7W646Y7zymNy4fp26kDWt3HvDKa4ayqsHfSXOe3kG47KPcxm70e%2BgcmgIYEfGtjVc5arJULLmW6GD2Zn35GBeQrjG7EzGgdK996CMDsbADzMG9SDyeTvEsDnRU3%2F1grOvh8oRrcQRGgBojtad1MJmQN6JkI%2FpJYj7yblZpoYIV14oZ4GNj5Ri68ihJoO0DrWHlifBmVmipW3NlfjO19UL21mzU4VJf6bxrija1lGJ9pFBjZ1WJ7KXvIpwJ5RN34AG%2Flda8QtvmHQEFy%2BInwsu08g4m1eia4SudaeGdT%2FL0amqNK3Aa11%2BnXCX%2BmQx5MLSspR7nkNPzEABtUYzwuH54dJ0YmFDCKrMnJBjqkAataQwMPDUyPLkjaX%2F0xKL8Iq079Kpsac0ADl%2FF%2FiINASXVpEW%2FDbbt8ACPKtAzGW3n5%2FX5MCtmE7VczSDC2SxKM5cs%2BmL2A7JNnW77QtyGPygBMxfGJPEp7g9%2F6SZOWWBrTqj%2Ft1M6D8lSyet9OE%2FHqD0HuBfnzRUzLiZRlGVQ0WZkUD0cTe2QBfmTiAudanBwUhCDhme0vbULuWIXum8OuHq%2BE&X-Amz-Signature=613fd9ab71524e1235bc4515b004cd01527995d9bc844adecc1a9b9dd81bd814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4CD45Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKzLqfRyRFG%2F35qB1PCZelibPpP6FEVIhtjceHtyytwAIhAOsNPFk8IN5Ad5aVNLf7xy%2Fxt7egY8X6h%2Fz2DfgH5sgLKv8DCFUQABoMNjM3NDIzMTgzODA1Igx285eV0%2FkBV1Q36%2BMq3AOvMExJnPHuhmawqH70dlrBXfiSFb0dOB5K9uZ3lSReUxriQcC%2BsBTmCjxTTCShDN5XlWCkjnhbzktFu5sYKn44c6Z6wt1v%2F6g8%2BvqjmcZHeoXwwPKT6qPRpSqh10CcQWU9SQB%2FVKUXeKEhSwl24lo%2BgF7HuOzQ1G6wnmeU7AdmMk3ASURkkuXLcawCmQC1CXFFyTGXR3ocIsQbTd1liS015Wn%2BDTSD8R2v8ZteEcNXD1OWuVKUvi97S5I8Y7hf3UCMngWmbvpcGs3qpWD6A70gcfcGJwhst7W646Y7zymNy4fp26kDWt3HvDKa4ayqsHfSXOe3kG47KPcxm70e%2BgcmgIYEfGtjVc5arJULLmW6GD2Zn35GBeQrjG7EzGgdK996CMDsbADzMG9SDyeTvEsDnRU3%2F1grOvh8oRrcQRGgBojtad1MJmQN6JkI%2FpJYj7yblZpoYIV14oZ4GNj5Ri68ihJoO0DrWHlifBmVmipW3NlfjO19UL21mzU4VJf6bxrija1lGJ9pFBjZ1WJ7KXvIpwJ5RN34AG%2Flda8QtvmHQEFy%2BInwsu08g4m1eia4SudaeGdT%2FL0amqNK3Aa11%2BnXCX%2BmQx5MLSspR7nkNPzEABtUYzwuH54dJ0YmFDCKrMnJBjqkAataQwMPDUyPLkjaX%2F0xKL8Iq079Kpsac0ADl%2FF%2FiINASXVpEW%2FDbbt8ACPKtAzGW3n5%2FX5MCtmE7VczSDC2SxKM5cs%2BmL2A7JNnW77QtyGPygBMxfGJPEp7g9%2F6SZOWWBrTqj%2Ft1M6D8lSyet9OE%2FHqD0HuBfnzRUzLiZRlGVQ0WZkUD0cTe2QBfmTiAudanBwUhCDhme0vbULuWIXum8OuHq%2BE&X-Amz-Signature=a917c0f8e495a4e4892946b78794f473c73b57cfe2fd534505db845ea0970cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
