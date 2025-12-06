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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXODN2QL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BF6GFS12oLcp7f0BDHiyEi%2BTkHl45DQBCG2k2bDNcPwIgCspY0f8WQmvb8eo84Dl2qNkLLjdxK%2F3B7AIj%2BVukJwMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFjccQFZrXOiQAnO1ircAze5IHrfD7%2BMvpdWxE%2BexgVivSFYtw2g6lqD8gtdJCdJ5YUD5GoGUPeU%2FgWtN79N0d%2BSKknAmzDOiXoByQcaSrBIgq9zHqXxJ1EXCs59LCg8ESXRPxxnQxal3aKnFhDPSl7TcQl1g5qQ53OSzQslADx5lAb2ycugRLaGYnk2YRLYuzdcWUOiNpb0ngYajGOFbkLbPK%2ByiFeaNN1aXm2p5Z6aPW2bkaTLDxoa%2FgD5nZo5AVClckjAVz6r9BgJxdI%2F20X2ZaIsd3ROJMXloFybDMSo%2Fh0kK%2BB9eiPa96dL9%2F%2FlIKU43IjY9q4AudWE6UQkBtVzg6ad%2BVBY0C85Fz3wlQ8vraIOvXhEzfuuV0TZVz9WMat%2FbEM6WgxK0SPVEh0DS7OtxkV8A0Z1SHalyy60Fhi30Gu0Kh7GRNI79BnXThXzUtrSS83UNlfX9Jv5YwQxKnEWwK1CvrupUJMKk12rqHDhtzIBJMPoN20dItFZobj9un2LiMg0Tj81Wp9BCCCfGwHGJJWF6kVSLAEVgWzUMYbt1I1v4IFiO7Tshikq0NGJ%2BMedpG44RRILdYPLzTtKJ6Qdt2%2FtnlXx9SA6ZOPV5XDFeIs%2BEyuR5ggr%2F9pU4sPHS2GSQkFfF8q%2FGFuKMMzT0skGOqUBG8YTDVzRnqMbP3bqEPj6I9Exj3dofJ393tcIIg3582XWIqMB1rvbBkV8XcfDNa9%2BL1xokHNWbc%2FAMG26L1y74QP9UPDB1F0hjITNjhUCEIYinyldJCaOFoo4UPFjrCEHbPmUWnK2nwnhlghGILswWbWSyOUVDW2NqcrG%2B9q4oTFfvMIs3n8Sgkn4zIancrP8d8V%2FbQmlXIpHobWVXzpJ36XkSq%2Bo&X-Amz-Signature=1b80b101b4bc9a1b9e088533d616ad6b317eaf64dbcd34023fa07c393bf28ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXODN2QL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BF6GFS12oLcp7f0BDHiyEi%2BTkHl45DQBCG2k2bDNcPwIgCspY0f8WQmvb8eo84Dl2qNkLLjdxK%2F3B7AIj%2BVukJwMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFjccQFZrXOiQAnO1ircAze5IHrfD7%2BMvpdWxE%2BexgVivSFYtw2g6lqD8gtdJCdJ5YUD5GoGUPeU%2FgWtN79N0d%2BSKknAmzDOiXoByQcaSrBIgq9zHqXxJ1EXCs59LCg8ESXRPxxnQxal3aKnFhDPSl7TcQl1g5qQ53OSzQslADx5lAb2ycugRLaGYnk2YRLYuzdcWUOiNpb0ngYajGOFbkLbPK%2ByiFeaNN1aXm2p5Z6aPW2bkaTLDxoa%2FgD5nZo5AVClckjAVz6r9BgJxdI%2F20X2ZaIsd3ROJMXloFybDMSo%2Fh0kK%2BB9eiPa96dL9%2F%2FlIKU43IjY9q4AudWE6UQkBtVzg6ad%2BVBY0C85Fz3wlQ8vraIOvXhEzfuuV0TZVz9WMat%2FbEM6WgxK0SPVEh0DS7OtxkV8A0Z1SHalyy60Fhi30Gu0Kh7GRNI79BnXThXzUtrSS83UNlfX9Jv5YwQxKnEWwK1CvrupUJMKk12rqHDhtzIBJMPoN20dItFZobj9un2LiMg0Tj81Wp9BCCCfGwHGJJWF6kVSLAEVgWzUMYbt1I1v4IFiO7Tshikq0NGJ%2BMedpG44RRILdYPLzTtKJ6Qdt2%2FtnlXx9SA6ZOPV5XDFeIs%2BEyuR5ggr%2F9pU4sPHS2GSQkFfF8q%2FGFuKMMzT0skGOqUBG8YTDVzRnqMbP3bqEPj6I9Exj3dofJ393tcIIg3582XWIqMB1rvbBkV8XcfDNa9%2BL1xokHNWbc%2FAMG26L1y74QP9UPDB1F0hjITNjhUCEIYinyldJCaOFoo4UPFjrCEHbPmUWnK2nwnhlghGILswWbWSyOUVDW2NqcrG%2B9q4oTFfvMIs3n8Sgkn4zIancrP8d8V%2FbQmlXIpHobWVXzpJ36XkSq%2Bo&X-Amz-Signature=1019a0b95445262d264e75cc085d4f52e896e71d8eb6c27dd05e41ac54bc2511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
