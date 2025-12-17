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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJ7NN2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoFO%2F77F1v3Fu2jPLX8os4xGwVebiRpIoYXsIiW1y1nAiBvi9erWt6iKtbydhD%2BTk1JCk5zgKB2yDqgtnaTh99EFyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMWKMMsoB1PzxmGK9cKtwDPXz40feyUieeokwNahgFxksfQ81elJKMtYxvTY9PiPrqx43R64%2Fvk13FXvjYMjf3FDe2gWza0%2Fb9Ep2uBFJglGvAdX1vn2n5wq3C37QvpESeKc%2BZwG1KdiAMk9IvC%2BI3ywQsW%2FwQBA82vFsktrm%2BoGhZvOPqsICgTYtkH5AU2r%2BaszidQsQgfezeg6CbSnrRXEKQbcamAC%2B5tvkkfYgwlXTcWSEDcPK8FWu6yfBJ4bAHOcGtrqkNibz0FH3nzxQ0UHHCWBpKxo7ZT76jyhFyqmkmL80abvu9HoTeF8vpG0z4CZr%2FGjHshFCW85yKZjWJbdUZgpLe%2B5fXZrjTIG16XfDuhIMg26T3yLfj3VMxpH8obrhwzgbw9Hrb8S8SuKXodPg6GeT0r3sVPs5wOxd3wE0lHPSLHVyQX0IeAj%2BKWybVs9MYWQAItoUwYHRgEuFrwFtn%2F7BhpBPt%2FQVZCSFj7adlFM9zDPCRzzpVxyM3sPjXEYZttVNhL%2Fx43O5LF9Ca9qBHUTXuWHBWQaJY01EJii97VLof1XQ22fWqkT99P8gbbpG2dCX6BxWq2v%2BUPh%2BzAjAxnpjlYUNaJO4XGErxGoR9h%2F3pjX5V6O6y7uBKQtuPY%2BtVX2EYKPHO9eMwyY6KygY6pgHKpqmzDLkTb%2FsI0TiJ5GvPfbEO7BQx%2B9IzM4Nb7Fk4rARF6OBnCEz%2Fd9%2B0KIjWnFRMNO5MYLP1bdgaWHLbbj6DV9%2B8U8e0kNxXhvVdSQt5QV1raKdypLijWyFoIsWjJehA9gjSHv%2FGlY5PEO%2F6I8vJ5CWqxJ%2Bh5%2F79n0FbY%2F5wwp0kd2jwKosl73zbQvq31gDvujnPap%2FkkHempFJjbjsMVjWm9NMf&X-Amz-Signature=140be804ceffd9529d25fbe08bb810688a662fc2e62722a229e3dbaef658c057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJ7NN2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoFO%2F77F1v3Fu2jPLX8os4xGwVebiRpIoYXsIiW1y1nAiBvi9erWt6iKtbydhD%2BTk1JCk5zgKB2yDqgtnaTh99EFyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMWKMMsoB1PzxmGK9cKtwDPXz40feyUieeokwNahgFxksfQ81elJKMtYxvTY9PiPrqx43R64%2Fvk13FXvjYMjf3FDe2gWza0%2Fb9Ep2uBFJglGvAdX1vn2n5wq3C37QvpESeKc%2BZwG1KdiAMk9IvC%2BI3ywQsW%2FwQBA82vFsktrm%2BoGhZvOPqsICgTYtkH5AU2r%2BaszidQsQgfezeg6CbSnrRXEKQbcamAC%2B5tvkkfYgwlXTcWSEDcPK8FWu6yfBJ4bAHOcGtrqkNibz0FH3nzxQ0UHHCWBpKxo7ZT76jyhFyqmkmL80abvu9HoTeF8vpG0z4CZr%2FGjHshFCW85yKZjWJbdUZgpLe%2B5fXZrjTIG16XfDuhIMg26T3yLfj3VMxpH8obrhwzgbw9Hrb8S8SuKXodPg6GeT0r3sVPs5wOxd3wE0lHPSLHVyQX0IeAj%2BKWybVs9MYWQAItoUwYHRgEuFrwFtn%2F7BhpBPt%2FQVZCSFj7adlFM9zDPCRzzpVxyM3sPjXEYZttVNhL%2Fx43O5LF9Ca9qBHUTXuWHBWQaJY01EJii97VLof1XQ22fWqkT99P8gbbpG2dCX6BxWq2v%2BUPh%2BzAjAxnpjlYUNaJO4XGErxGoR9h%2F3pjX5V6O6y7uBKQtuPY%2BtVX2EYKPHO9eMwyY6KygY6pgHKpqmzDLkTb%2FsI0TiJ5GvPfbEO7BQx%2B9IzM4Nb7Fk4rARF6OBnCEz%2Fd9%2B0KIjWnFRMNO5MYLP1bdgaWHLbbj6DV9%2B8U8e0kNxXhvVdSQt5QV1raKdypLijWyFoIsWjJehA9gjSHv%2FGlY5PEO%2F6I8vJ5CWqxJ%2Bh5%2F79n0FbY%2F5wwp0kd2jwKosl73zbQvq31gDvujnPap%2FkkHempFJjbjsMVjWm9NMf&X-Amz-Signature=ad79d37fb8aa56eadfceb6782816140abf07300fad686e0411e96d35b0d16d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
