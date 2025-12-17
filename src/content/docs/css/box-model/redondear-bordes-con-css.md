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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXQ2Q6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTfCffElFls%2BVWTbE07q%2BPqCmc4htyeI12stVjL5DhTAiBXscHWITrbAGHiIn71duDtMaE8G%2F9%2FeobMJSucx9nioCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMrWJrRnex58K8%2BPRoKtwDkq8q9M6QcaZEgeyaz2DPPrl%2Bb18FtWX311DiS97ajW2GiDDwYHVwVDk9bRFtOanJMu6zkJ5cy%2B4GoY7k2bx%2FGnREQa%2FQFbYBrRhfhZT5W5JAObm%2BCrEfxKz0GarNGyMS%2F4trcBm9KItwbwZX1gDu5mei7IlkgKArLJFx4p8UCpA1qPxz6feJrXVN9X4KyXxqQ6DUXgOTxz6%2BGQv6Tph2jwZoT8kQADls4Uy4PcAcxMKq%2BXMMpt5fjHju6f4Y1GA6kJM%2BXEPZq592ybM%2BINW0nKLUOa4zP9J%2BYr8LSNqxNJU%2F25J9gRWa8JJMj6J4dmllDcTXYqo8GlXZb5wrXuaiEwD8LC3oybsPs8q2SQglhkciZHTpp9YyFWDOUksEve0l9BOQFzHCSIYZspFBiFSMMsfiG2ot61%2B8QDzBCZl7APGwsmSUqo9Ne4pvkyQfLtd4EvM5z3gPXfcGHpDsIc7Ai4XeJozfFsIrjCulU%2FexpqGTdKS%2FeT2JI3ZVzYgP1OT3z8ZQDkSzXHtB21pibaidh%2FJnF%2BlX5ean7hqQHNkAQZrLSQscXes%2B3zzRAhShVbE5AzyaTyplXkH%2FBw%2BCk%2B2WcSMKhufHYN9cQHkSpY0t8BdgqWSk9OzZz3uAlOAw6emIygY6pgGGOXPRX2JopepLxG1JaEQ3m%2F4rpoe%2FuAB93YdMysH2IIbPYr%2F%2FNUUVsi167hq79ix1earchcaDQdbH6DnUrHu1gdxEM2stx%2F7bwtUCJny3GHbEh2qpdUwjjXttitFS9LzpsHewVqWP4EtVWpg68iFmyWPBAZBpxBJArp7LWAQQDB%2FyblYEROwOmkcAPiBVesR5WD75HIKQBF3sL5XnZHuFlR%2FJKcxK&X-Amz-Signature=237d90968991ddbdb03c0a0d68d080a1b85f4fb00b3417e02af06070a584b9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXQ2Q6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTfCffElFls%2BVWTbE07q%2BPqCmc4htyeI12stVjL5DhTAiBXscHWITrbAGHiIn71duDtMaE8G%2F9%2FeobMJSucx9nioCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMrWJrRnex58K8%2BPRoKtwDkq8q9M6QcaZEgeyaz2DPPrl%2Bb18FtWX311DiS97ajW2GiDDwYHVwVDk9bRFtOanJMu6zkJ5cy%2B4GoY7k2bx%2FGnREQa%2FQFbYBrRhfhZT5W5JAObm%2BCrEfxKz0GarNGyMS%2F4trcBm9KItwbwZX1gDu5mei7IlkgKArLJFx4p8UCpA1qPxz6feJrXVN9X4KyXxqQ6DUXgOTxz6%2BGQv6Tph2jwZoT8kQADls4Uy4PcAcxMKq%2BXMMpt5fjHju6f4Y1GA6kJM%2BXEPZq592ybM%2BINW0nKLUOa4zP9J%2BYr8LSNqxNJU%2F25J9gRWa8JJMj6J4dmllDcTXYqo8GlXZb5wrXuaiEwD8LC3oybsPs8q2SQglhkciZHTpp9YyFWDOUksEve0l9BOQFzHCSIYZspFBiFSMMsfiG2ot61%2B8QDzBCZl7APGwsmSUqo9Ne4pvkyQfLtd4EvM5z3gPXfcGHpDsIc7Ai4XeJozfFsIrjCulU%2FexpqGTdKS%2FeT2JI3ZVzYgP1OT3z8ZQDkSzXHtB21pibaidh%2FJnF%2BlX5ean7hqQHNkAQZrLSQscXes%2B3zzRAhShVbE5AzyaTyplXkH%2FBw%2BCk%2B2WcSMKhufHYN9cQHkSpY0t8BdgqWSk9OzZz3uAlOAw6emIygY6pgGGOXPRX2JopepLxG1JaEQ3m%2F4rpoe%2FuAB93YdMysH2IIbPYr%2F%2FNUUVsi167hq79ix1earchcaDQdbH6DnUrHu1gdxEM2stx%2F7bwtUCJny3GHbEh2qpdUwjjXttitFS9LzpsHewVqWP4EtVWpg68iFmyWPBAZBpxBJArp7LWAQQDB%2FyblYEROwOmkcAPiBVesR5WD75HIKQBF3sL5XnZHuFlR%2FJKcxK&X-Amz-Signature=935b4c4fa975378fe48406581a8165f9ba1a76a4ed70d606a0bf7305e76f9987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
