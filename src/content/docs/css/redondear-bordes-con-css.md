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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIOFGGV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu3gZ5%2FAh34vNWRWg4ILjGwV71V8bQomBDOj1YzfibyAIgOL%2Bp8fLrR75oGO07ILnBi%2BtWNN9NURCZigBi%2FXQTKroqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHxx%2FvEH3sAx6OQEircA1ey3JRJR8FnwNm6owRZ8fKqqM8lrQdWW9SHUzew%2FDZGd5jq4GjDt0Sn8SRcvEWYFNZ%2Fjn6C6VjgfODL5ac7CN04Ol%2F3cfdT4uEAeX7SZccs7ReiIss84MOvXloyWd5ASvJKWRhRJGopW%2BHiFFkwYy8vJ84FqbXeFUCxm5QTFWhaZEew79dQFwQV5Oc3%2FTiLaceKvadrxxYCtmkc9rF07B52KUTmmL4aGvKnsVxLsQRQfY2b%2Fn5pWhS23twQLl8kYrCuuyON0Ggwl9t6E1B4iqnPVCA7MdfRNXf%2F0DSVp2iqzc1KDXYQU%2FLTqS1mJd%2FPZEo0wifXS29UJ%2FfttlF0ZGiHCAFYsTDYGKmqc6drJSy5y7lcm61kOv2SJFbF9SRgD6jHCYqjasWowdHWSZv0tfBi4kN45STAhQZApRQqLeMRTCxhbknFPt89qzr0GntLo6PfgpEyFkferjHUvkviXsYW%2Bvs1YMTPx6XvjixPkUZGFsG6mRzeLiJzfn36P1fRjL4fzDudirVY98DpfxCgCU36o4b%2BAW87QcX3MBBNTXDEjqhg%2FgAv6%2FR9dQw%2FLEsPasv%2FUsCVpqJTwj0OhecAC0GA1Nc5y02tvBW%2FgJZseY789ynWfPouXUKbm%2B%2FyMNuk38kGOqUBxVDvETUm8rBpK%2F4kIf5y7aFtk4VpWEvDnObDVmEr4HXwLztvFXTWqZ9lCCCtWgv5uJ8T10y5WIKAoXDPkCsCqRZckZzAoLkMyX8Qd2sB0PxJgZ0tKRxIyD31DKJKrLXJ0t6miHF%2BBjDDp7jqs5c1lgUDVDTYdqJns31FdNciw1yK2Zr22QpWtxAx%2BQvF%2F%2BJiGN5eBBEbHgoQ5C3HjUl%2FUVQDqS7K&X-Amz-Signature=f2fd5ef22cb0473368c111e768dc79d95df5cc7f7a0e7a0bdddb8f80fa84d56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIOFGGV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu3gZ5%2FAh34vNWRWg4ILjGwV71V8bQomBDOj1YzfibyAIgOL%2Bp8fLrR75oGO07ILnBi%2BtWNN9NURCZigBi%2FXQTKroqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHxx%2FvEH3sAx6OQEircA1ey3JRJR8FnwNm6owRZ8fKqqM8lrQdWW9SHUzew%2FDZGd5jq4GjDt0Sn8SRcvEWYFNZ%2Fjn6C6VjgfODL5ac7CN04Ol%2F3cfdT4uEAeX7SZccs7ReiIss84MOvXloyWd5ASvJKWRhRJGopW%2BHiFFkwYy8vJ84FqbXeFUCxm5QTFWhaZEew79dQFwQV5Oc3%2FTiLaceKvadrxxYCtmkc9rF07B52KUTmmL4aGvKnsVxLsQRQfY2b%2Fn5pWhS23twQLl8kYrCuuyON0Ggwl9t6E1B4iqnPVCA7MdfRNXf%2F0DSVp2iqzc1KDXYQU%2FLTqS1mJd%2FPZEo0wifXS29UJ%2FfttlF0ZGiHCAFYsTDYGKmqc6drJSy5y7lcm61kOv2SJFbF9SRgD6jHCYqjasWowdHWSZv0tfBi4kN45STAhQZApRQqLeMRTCxhbknFPt89qzr0GntLo6PfgpEyFkferjHUvkviXsYW%2Bvs1YMTPx6XvjixPkUZGFsG6mRzeLiJzfn36P1fRjL4fzDudirVY98DpfxCgCU36o4b%2BAW87QcX3MBBNTXDEjqhg%2FgAv6%2FR9dQw%2FLEsPasv%2FUsCVpqJTwj0OhecAC0GA1Nc5y02tvBW%2FgJZseY789ynWfPouXUKbm%2B%2FyMNuk38kGOqUBxVDvETUm8rBpK%2F4kIf5y7aFtk4VpWEvDnObDVmEr4HXwLztvFXTWqZ9lCCCtWgv5uJ8T10y5WIKAoXDPkCsCqRZckZzAoLkMyX8Qd2sB0PxJgZ0tKRxIyD31DKJKrLXJ0t6miHF%2BBjDDp7jqs5c1lgUDVDTYdqJns31FdNciw1yK2Zr22QpWtxAx%2BQvF%2F%2BJiGN5eBBEbHgoQ5C3HjUl%2FUVQDqS7K&X-Amz-Signature=b9d735cf7cee805fd60818d897c30c2f032a670868256a208821b7b05ddfda33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
