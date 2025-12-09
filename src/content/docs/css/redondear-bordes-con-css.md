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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SERWFWJL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXcfPgPRBPRblYmj%2BZymEhIOXAcWecRV589ma2lncTAIgSPHAlx%2BlSu6VjHZXwI2w7BErQxeCUUdfZKnpCEztmnsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsSZG00GmQD0FrNYCrcA%2B43os1PTKZAA90ZAzTw%2FEg3Uk%2BMp2Ksbnohnsl35YRykWd5mBwZBX6NXMHlLwoaszl2gP4ZqzmeDOtoAJ3MWdASs0f0fpKDlqtJga2MC6%2BLJy%2BDQPFFszOZNerFTlgCbPAveD3PqfjGwtoJmyH%2Fj5UsWV9oc0GRmwkgSjFFT27XSXVvXpAuQ1lmVrtucQEZTTRWjveVBSQu9KM9M4c6vJO1ZqaZTQP5cdrzjDDwHgQxZzRrJzaaAxBoGyKLkpRZ42mzO8uLuHItjQcdRNg1fyeCI48mtq7kmPz7FugEAOjIYylvy%2FJUuAGkUZ%2BQvpDELnLZPse73oWOAGByhdCj7z5yktz%2BkeDQFFWnYEBTODO%2F2PbEdCy4id4%2B%2B4GsTrjeiA5wcJEE2hVN6i1w%2FVeOhzSHh%2B8Y6G8T7CuIgAKCgM5aWf%2Fn5tGan2RG6Vt5Lg6O3RNzZ7q%2BM2JtBZnxmV2eCJ5ksU0RtR%2F6N2NJS3DdqmKmw6F6LYQeNKk0q3c9NbhYQzzZ73%2FJct1NvwEA7WET8jXDnza9dHqMgfnH7oowUkeTctf%2FBFfIViuOm8UyLqhzV5nBCfUU6RN3EHr605ISr%2FiAxp8ti4kdFuXMB1e5uYmEx3fYXuDcCHiCg8GNMKzD3ckGOqUB%2FR1l3iT4i2BADtnIgJwDvHtrb%2Fomg8p5%2BOt4rDrJoTRQxMINe1n8oC13kysWTCx3PoWBTDbKOnHm8CqPCTYNPMtQe71bwN%2FdLPqEe4ldWan8hH7iBt%2BVip%2FbHebjumq%2Bvcrfoo9Oez82gM8643Cg9J85mVvzT%2BQkeJI%2FxoRAlRCoH1SP5cJgo0ZReWwSlERxIyLf2VVS3IX3WGSTPowTILHAyTrL&X-Amz-Signature=292caf9104b39b5909846581fe400a70a68099d6b54c34e86430a97cae5758f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SERWFWJL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXcfPgPRBPRblYmj%2BZymEhIOXAcWecRV589ma2lncTAIgSPHAlx%2BlSu6VjHZXwI2w7BErQxeCUUdfZKnpCEztmnsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsSZG00GmQD0FrNYCrcA%2B43os1PTKZAA90ZAzTw%2FEg3Uk%2BMp2Ksbnohnsl35YRykWd5mBwZBX6NXMHlLwoaszl2gP4ZqzmeDOtoAJ3MWdASs0f0fpKDlqtJga2MC6%2BLJy%2BDQPFFszOZNerFTlgCbPAveD3PqfjGwtoJmyH%2Fj5UsWV9oc0GRmwkgSjFFT27XSXVvXpAuQ1lmVrtucQEZTTRWjveVBSQu9KM9M4c6vJO1ZqaZTQP5cdrzjDDwHgQxZzRrJzaaAxBoGyKLkpRZ42mzO8uLuHItjQcdRNg1fyeCI48mtq7kmPz7FugEAOjIYylvy%2FJUuAGkUZ%2BQvpDELnLZPse73oWOAGByhdCj7z5yktz%2BkeDQFFWnYEBTODO%2F2PbEdCy4id4%2B%2B4GsTrjeiA5wcJEE2hVN6i1w%2FVeOhzSHh%2B8Y6G8T7CuIgAKCgM5aWf%2Fn5tGan2RG6Vt5Lg6O3RNzZ7q%2BM2JtBZnxmV2eCJ5ksU0RtR%2F6N2NJS3DdqmKmw6F6LYQeNKk0q3c9NbhYQzzZ73%2FJct1NvwEA7WET8jXDnza9dHqMgfnH7oowUkeTctf%2FBFfIViuOm8UyLqhzV5nBCfUU6RN3EHr605ISr%2FiAxp8ti4kdFuXMB1e5uYmEx3fYXuDcCHiCg8GNMKzD3ckGOqUB%2FR1l3iT4i2BADtnIgJwDvHtrb%2Fomg8p5%2BOt4rDrJoTRQxMINe1n8oC13kysWTCx3PoWBTDbKOnHm8CqPCTYNPMtQe71bwN%2FdLPqEe4ldWan8hH7iBt%2BVip%2FbHebjumq%2Bvcrfoo9Oez82gM8643Cg9J85mVvzT%2BQkeJI%2FxoRAlRCoH1SP5cJgo0ZReWwSlERxIyLf2VVS3IX3WGSTPowTILHAyTrL&X-Amz-Signature=8421ddc0934f92883bc75aa4ad9f71930965e92ec9c7a336d52b2f748fd6c342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
