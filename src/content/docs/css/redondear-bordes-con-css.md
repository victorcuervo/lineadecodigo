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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XPT3AD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsGLDxwR677g2pxrYfCcKveLxcpiepw9gqFu%2BOhA6pGAiAbi6PT%2FsKKt12W1%2BzksjfYtpu7XAelxbawhkJIq3966yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM3nG9GWeXsJLKWkIUKtwDDvTFBKzyGlDJj%2F8a%2BW7Og5%2Bdk%2Bx96pSuwj7f7%2B2RwwH82vOh09gBYcoPeXH3mnAtUgTHQkSyt497JW211vsMohQDOJLWdSmk30gcWB3fBrlcht%2F3foJSOu9uYs7oXixrJSBa6PRBnKY0IYjyi1sOa9S4iNSF84yq0pgoDQslzBFRNwHa2LH%2FmMNzo4LeryY8H3Asomci7ekzs2HYlD1L0Btw7oRsfG3zdPzlrkbvqkTpAgQvTGm3BocB%2FGxzZOlELtI1zxTk5LvG2mYwOlb8QBxVKi7sdIRdjpfVFFCDrctS1MfoaP%2F35eG%2BT61%2FnE7c8MPGA51sSPriZfXaLelL54w19rmCILJXSMvmn7uDZvhwwqCJlGEZ2IH2pOS%2F3SQ6BJfwq6lV44RiVAbKl%2BREsaqvnjSFfBpicATAkeYNPSqPXqAlnF4amtx8nJJgJyZh5cWI69tTO5XA1Zeh0sLFOdG8k3Za7z5gtfaIjFHnzW0VuKk2rAzfOlTIx%2BsmpFGXeZrYWHvVZ5iFQp8LCAYmRPVcOg2KHMbZ2abctphILCeBq3M7aQ4LkpWLH0mdfTME%2Bd6Y5X2Mo3NwU5aSroAlj3Hu4C%2BGooeMQjrybdJpKG53a5QS1CsBjjDrHTcwqL3PyQY6pgGyu07TnrU0%2BQAoWy1jHllLvPdiPIKDtVmYLYAx5RLTW8RELcWtmRtvl%2BF6d4Hr9GtcZ9sjsOI%2FSb2ayoPMnwb%2BvyIdQp0Nh8z7uDF9rb2vrsC0ZBdaAXFbltcaPAJueSDCSijvDviWIn%2BWrmiUyBl50XP0kFmfExuaKEr0vCsxlx1mozGFwT7Oye8ul%2FL5%2Bw8JjCRrdjbU6CM%2BT5CpzifSbgJM0Y0U&X-Amz-Signature=e8d41e05ea117b11f5940d9b1e6f778dc58b9bbee0d2cc739dc3ba0f3e64aaa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XPT3AD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsGLDxwR677g2pxrYfCcKveLxcpiepw9gqFu%2BOhA6pGAiAbi6PT%2FsKKt12W1%2BzksjfYtpu7XAelxbawhkJIq3966yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM3nG9GWeXsJLKWkIUKtwDDvTFBKzyGlDJj%2F8a%2BW7Og5%2Bdk%2Bx96pSuwj7f7%2B2RwwH82vOh09gBYcoPeXH3mnAtUgTHQkSyt497JW211vsMohQDOJLWdSmk30gcWB3fBrlcht%2F3foJSOu9uYs7oXixrJSBa6PRBnKY0IYjyi1sOa9S4iNSF84yq0pgoDQslzBFRNwHa2LH%2FmMNzo4LeryY8H3Asomci7ekzs2HYlD1L0Btw7oRsfG3zdPzlrkbvqkTpAgQvTGm3BocB%2FGxzZOlELtI1zxTk5LvG2mYwOlb8QBxVKi7sdIRdjpfVFFCDrctS1MfoaP%2F35eG%2BT61%2FnE7c8MPGA51sSPriZfXaLelL54w19rmCILJXSMvmn7uDZvhwwqCJlGEZ2IH2pOS%2F3SQ6BJfwq6lV44RiVAbKl%2BREsaqvnjSFfBpicATAkeYNPSqPXqAlnF4amtx8nJJgJyZh5cWI69tTO5XA1Zeh0sLFOdG8k3Za7z5gtfaIjFHnzW0VuKk2rAzfOlTIx%2BsmpFGXeZrYWHvVZ5iFQp8LCAYmRPVcOg2KHMbZ2abctphILCeBq3M7aQ4LkpWLH0mdfTME%2Bd6Y5X2Mo3NwU5aSroAlj3Hu4C%2BGooeMQjrybdJpKG53a5QS1CsBjjDrHTcwqL3PyQY6pgGyu07TnrU0%2BQAoWy1jHllLvPdiPIKDtVmYLYAx5RLTW8RELcWtmRtvl%2BF6d4Hr9GtcZ9sjsOI%2FSb2ayoPMnwb%2BvyIdQp0Nh8z7uDF9rb2vrsC0ZBdaAXFbltcaPAJueSDCSijvDviWIn%2BWrmiUyBl50XP0kFmfExuaKEr0vCsxlx1mozGFwT7Oye8ul%2FL5%2Bw8JjCRrdjbU6CM%2BT5CpzifSbgJM0Y0U&X-Amz-Signature=4c24f84704b785c2067bc66305acfe939183092d289e26a4772df980df32fa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
