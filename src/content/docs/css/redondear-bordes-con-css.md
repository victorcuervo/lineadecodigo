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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GVYVSM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJOFp%2B14a6kimI4vjeOR7DChuc%2BT3CAzcBJ2qmGvybvAIgUq2j3i%2BUvmaN6XNiycItK0kn5wEG08DHfJY79Qq5zkcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfnBe7j1%2BlsL95H4yrcA5jAsXlJ4DFJxmGwbU0j0a%2FCtJ%2Bb2QN8bNKNfsEINGwesRqljJXHfFz9JSfsUV1IbvAzF%2BtBzIv%2FelPn4RfLXLsA1S0n1WX9kJKYztlIT40ePKa8iReg9J86yqXElUWHPKfcFqhDHM%2F0OH6nrl9WS0KJci9eM%2FTHO2%2FCSA1sLlAQG9TRXnDEQ1k6om%2B2UnHjeSW9p8LCEx5ItAh7TKmyIeUq6kHJ9krh%2FHqCz05ZA8nMXpQtdvgXs7BIpuW6tNw2k9TTReDjdjYWMBvJ6ols5%2Fisju8KXLp24EogRCyjlclIqETw3h78iw8cu9IViZBh%2F5jADwZZ5QJBkgjSya2bRsGKj1r0NOL7IDdkFRHY4V7XGQY5caNTR%2FO1StpoLhImz6jh%2BMWV10G5YkkG%2F2DF0XWzIfqDBuVoiqIgvqx%2FL5cl7siW3D3w0IUiu6KkLDJ0h7xon%2FaDGCXe69XPhlQO%2BxbOJceHu4SuzqQOABi12WGqMxUzzF9Nb2OFvbh6p%2FZiBp%2BDrxtnRQ9X8gWmo3VLnqBBs4wzEnUo52LHVUlX3%2Bp1xuBb9ybWmqJSLmvXEKa2qzEpPaOjJmXzN3pkySf12C%2BlxX5VYZ9r3i5zgmWu8hWqwbOWJChCFYAH2%2BlNMOKz2ckGOqUBRcTS%2BdxCmaFLHZsVTuNu2sCw%2BYTnHIm3%2FEVDX51SngwXyUVsPQzLuKqjxzFrmyL7e6d3ym7RYIfOATy7GATvCWIYgkJ7yWW%2FThJ87yEe%2Bv8jRLzD8%2FD%2FzedeJYjKB71n8BY5zLNoMaiv7EQf9R5fTsGjbJ3GC1JceNdqpne5RULQaaZO7RwmFuEZee%2Bx6pvF9%2FWl%2Bdy9GMudRHuxsBWiZOLSQmkm&X-Amz-Signature=b092e62adb699a5dd9cccb5cb59e7477c660b49f1ea5aacc81bea7032d66c903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GVYVSM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJOFp%2B14a6kimI4vjeOR7DChuc%2BT3CAzcBJ2qmGvybvAIgUq2j3i%2BUvmaN6XNiycItK0kn5wEG08DHfJY79Qq5zkcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfnBe7j1%2BlsL95H4yrcA5jAsXlJ4DFJxmGwbU0j0a%2FCtJ%2Bb2QN8bNKNfsEINGwesRqljJXHfFz9JSfsUV1IbvAzF%2BtBzIv%2FelPn4RfLXLsA1S0n1WX9kJKYztlIT40ePKa8iReg9J86yqXElUWHPKfcFqhDHM%2F0OH6nrl9WS0KJci9eM%2FTHO2%2FCSA1sLlAQG9TRXnDEQ1k6om%2B2UnHjeSW9p8LCEx5ItAh7TKmyIeUq6kHJ9krh%2FHqCz05ZA8nMXpQtdvgXs7BIpuW6tNw2k9TTReDjdjYWMBvJ6ols5%2Fisju8KXLp24EogRCyjlclIqETw3h78iw8cu9IViZBh%2F5jADwZZ5QJBkgjSya2bRsGKj1r0NOL7IDdkFRHY4V7XGQY5caNTR%2FO1StpoLhImz6jh%2BMWV10G5YkkG%2F2DF0XWzIfqDBuVoiqIgvqx%2FL5cl7siW3D3w0IUiu6KkLDJ0h7xon%2FaDGCXe69XPhlQO%2BxbOJceHu4SuzqQOABi12WGqMxUzzF9Nb2OFvbh6p%2FZiBp%2BDrxtnRQ9X8gWmo3VLnqBBs4wzEnUo52LHVUlX3%2Bp1xuBb9ybWmqJSLmvXEKa2qzEpPaOjJmXzN3pkySf12C%2BlxX5VYZ9r3i5zgmWu8hWqwbOWJChCFYAH2%2BlNMOKz2ckGOqUBRcTS%2BdxCmaFLHZsVTuNu2sCw%2BYTnHIm3%2FEVDX51SngwXyUVsPQzLuKqjxzFrmyL7e6d3ym7RYIfOATy7GATvCWIYgkJ7yWW%2FThJ87yEe%2Bv8jRLzD8%2FD%2FzedeJYjKB71n8BY5zLNoMaiv7EQf9R5fTsGjbJ3GC1JceNdqpne5RULQaaZO7RwmFuEZee%2Bx6pvF9%2FWl%2Bdy9GMudRHuxsBWiZOLSQmkm&X-Amz-Signature=8195478957432a5178b2eaacdd36fc86dfcdb73c4cab48fe195f42e565bbd076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
