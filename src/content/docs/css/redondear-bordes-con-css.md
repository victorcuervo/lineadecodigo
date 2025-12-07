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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWABMHZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2BjD4dd%2FFo2qYx49BRKpkBBGuXUQTlypYdr5tAW3oegIhAJOENGQnYccLQyYUyfvVgDyzV9fY7il9zLZNDC46WjQrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqR01X5O1%2F9nx%2B1nkq3ANXbvk4pvSTglGuQYbHuCwPYB0uGM%2FpEK7h1X%2B%2BBYYt%2FiBHvyuXwiciBm2urvytmY6TbmS1EFZH1lItxWXlpsFA8dM7y6fFhdwJaVc3AKiV269KAYr4DHtAvDr6xDcXcWq9q1ZQhu2Q8I7rK0APTzwoGLEFhvjE6ctCha8oy7gwMjCZ3FggMQ8LmPfdJ8fKT4SWNMGM3ouLnOLVf3kEvKeacicjw2I4SU1z12jdzaQ7gF%2BRN9NK6M5BHESd5G%2BCU1eXpulbncuYDGK0C2vIayAFXTl6SWRM01duBgmwLKvjxVquM%2BAADz31%2FN9EBjN8zEY20cG3StuhqXsPkJkEtuUvgrDNYHih4oBOi4%2BHHuJ1ZjC37erOuXGBxO669Wvr5ZN2GU9JfsnnFbFD5IYPIzChyckCqwQn8EFzFioiCIjLCmxJDKpSpHsHTv7hydc5CaFCnpL4Nrv0BYjl9usFkXP3QXpac4XcjeqLTsz3KAa81wrioeANhM6iYA52ICLFAKSuXa6Pvsp2fd5vv0lIxwlg5zRTs%2F1ambzu2KkwSGOM88gQXzbqzHv2MFtl%2F630b0mYAObco6bLKoMYP5jChADsUTE6jzYZ7SRzTP%2BvnQBsB%2BXaHlsi82ghLDiLDTC7%2FdLJBjqkAdVHz5m3S1RDySz6LRRa0yvXO9Wq9rSChAhOjNOqVuHI7uli4%2Fy1%2Bf6iIU9wcdiDDlji67qjaLvnwje26djxndZrfp1ifiAhqTkcLsp0zd72FJln9W7u2jqvzFf6ignk1FHCxq7nPbLWhRJreuTpEdA6mEBkxLRz33SmANlk75LJMXnH%2BYkwtfa5PrpXF0cgdcySpxOv0niMw3Z1LPcqPMdVN%2BPZ&X-Amz-Signature=33fa93bb5bbc0f34740e31e452771e3567bdbec74464201f078ababccc59ba2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWABMHZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2BjD4dd%2FFo2qYx49BRKpkBBGuXUQTlypYdr5tAW3oegIhAJOENGQnYccLQyYUyfvVgDyzV9fY7il9zLZNDC46WjQrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqR01X5O1%2F9nx%2B1nkq3ANXbvk4pvSTglGuQYbHuCwPYB0uGM%2FpEK7h1X%2B%2BBYYt%2FiBHvyuXwiciBm2urvytmY6TbmS1EFZH1lItxWXlpsFA8dM7y6fFhdwJaVc3AKiV269KAYr4DHtAvDr6xDcXcWq9q1ZQhu2Q8I7rK0APTzwoGLEFhvjE6ctCha8oy7gwMjCZ3FggMQ8LmPfdJ8fKT4SWNMGM3ouLnOLVf3kEvKeacicjw2I4SU1z12jdzaQ7gF%2BRN9NK6M5BHESd5G%2BCU1eXpulbncuYDGK0C2vIayAFXTl6SWRM01duBgmwLKvjxVquM%2BAADz31%2FN9EBjN8zEY20cG3StuhqXsPkJkEtuUvgrDNYHih4oBOi4%2BHHuJ1ZjC37erOuXGBxO669Wvr5ZN2GU9JfsnnFbFD5IYPIzChyckCqwQn8EFzFioiCIjLCmxJDKpSpHsHTv7hydc5CaFCnpL4Nrv0BYjl9usFkXP3QXpac4XcjeqLTsz3KAa81wrioeANhM6iYA52ICLFAKSuXa6Pvsp2fd5vv0lIxwlg5zRTs%2F1ambzu2KkwSGOM88gQXzbqzHv2MFtl%2F630b0mYAObco6bLKoMYP5jChADsUTE6jzYZ7SRzTP%2BvnQBsB%2BXaHlsi82ghLDiLDTC7%2FdLJBjqkAdVHz5m3S1RDySz6LRRa0yvXO9Wq9rSChAhOjNOqVuHI7uli4%2Fy1%2Bf6iIU9wcdiDDlji67qjaLvnwje26djxndZrfp1ifiAhqTkcLsp0zd72FJln9W7u2jqvzFf6ignk1FHCxq7nPbLWhRJreuTpEdA6mEBkxLRz33SmANlk75LJMXnH%2BYkwtfa5PrpXF0cgdcySpxOv0niMw3Z1LPcqPMdVN%2BPZ&X-Amz-Signature=15fe9ff6c53917f15ff9bbdde4c8a2accda348325406f769645ff6e80367c3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
