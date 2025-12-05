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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPH2WGM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVCB4gzxaS6abSs3bwcefE4QFUNZVOfLpYDZIQTWgTsAIgVTK%2FIT2IJ4ACeJ4%2BiRvuBhRw76dZztgN%2BS%2B2RDizcvEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMx10GdZEtqMYVEUuyrcA%2BA%2BW8nWBXUuJEfFi4VPqwvKastQebed%2BVJM1gxBuORwIo03YjEdNV%2FLwpH%2B5SwkK6RWdcBUxCM5XJu6k2PD0VRG%2FOJBcXfImCRULRJ%2F%2Frz2NySa%2BtGLUurxVgWU%2Fev9FwzjxIzo09XK8QHIYwM9GJ5ZHzWxqgfPhQbcMJYj6AILhco0sQjMUdoOWADVHLXkovBSsoTak7hBP9HkBP%2BKlKaIdjjrVWwkWkj5NNq3QB%2B5MfiAAL9jv726uuGl8mhI47DqrfpXGZGqWmGU1d2QL0bvt3VvUhDQ2lRKr7p0JMpl%2BPkAEHjD8W5Pw1FVHDb2rHzSnpCD8Upae2LXWEnbrEoq%2FIl%2ByklW2bv6MEN5yI6RF2TObrf%2BFyG9WjThA4dT0PRRDZLlXIeld8sk846WHsW58uGbj6692knxRgJby1eDl37RO8GjPUvUqQymm6Md62Wrvo6oeuJnKDWbPna6r09dww2R6uP%2BgiqPISrAjYF5CZYnHx2%2FqDB53wxnuxI4okRIQXgSFrKPvjbIjEw1n4g9cKodWQgkf%2BtU1%2BRsNXOZl%2FgKkDeQ21%2B8plFKKLYrJ62nsIivSoROPTktiy3DK2UGsgg759YJjgQxVuEAdF78ZrxSHwzOsnDjV56UMLCvyckGOqUB8OTDKl%2B8eKjIub%2FdfN1BLNjRBB2rmT6XAvP32hkQaSoRHWpPYBHSxvFE7hhTGa1QYRkmqFxGAh%2F2xZemAxSm%2BKeyg4hv018tzi4qPme2rYHNgwtd7UhrBqCWFFYuB4373oLEh1ULQidt%2BYS2YwpDIYa4dditD3QpB%2FBe9QqtQxN7HXPctVgErbFzbLNIU7RuT6fsfIWRn0bEjezwQTTiGgfsVNGU&X-Amz-Signature=c29185777da345b23afb29d47c6cc4294e0064f8609ea78c16710a5936ad3a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPH2WGM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVCB4gzxaS6abSs3bwcefE4QFUNZVOfLpYDZIQTWgTsAIgVTK%2FIT2IJ4ACeJ4%2BiRvuBhRw76dZztgN%2BS%2B2RDizcvEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMx10GdZEtqMYVEUuyrcA%2BA%2BW8nWBXUuJEfFi4VPqwvKastQebed%2BVJM1gxBuORwIo03YjEdNV%2FLwpH%2B5SwkK6RWdcBUxCM5XJu6k2PD0VRG%2FOJBcXfImCRULRJ%2F%2Frz2NySa%2BtGLUurxVgWU%2Fev9FwzjxIzo09XK8QHIYwM9GJ5ZHzWxqgfPhQbcMJYj6AILhco0sQjMUdoOWADVHLXkovBSsoTak7hBP9HkBP%2BKlKaIdjjrVWwkWkj5NNq3QB%2B5MfiAAL9jv726uuGl8mhI47DqrfpXGZGqWmGU1d2QL0bvt3VvUhDQ2lRKr7p0JMpl%2BPkAEHjD8W5Pw1FVHDb2rHzSnpCD8Upae2LXWEnbrEoq%2FIl%2ByklW2bv6MEN5yI6RF2TObrf%2BFyG9WjThA4dT0PRRDZLlXIeld8sk846WHsW58uGbj6692knxRgJby1eDl37RO8GjPUvUqQymm6Md62Wrvo6oeuJnKDWbPna6r09dww2R6uP%2BgiqPISrAjYF5CZYnHx2%2FqDB53wxnuxI4okRIQXgSFrKPvjbIjEw1n4g9cKodWQgkf%2BtU1%2BRsNXOZl%2FgKkDeQ21%2B8plFKKLYrJ62nsIivSoROPTktiy3DK2UGsgg759YJjgQxVuEAdF78ZrxSHwzOsnDjV56UMLCvyckGOqUB8OTDKl%2B8eKjIub%2FdfN1BLNjRBB2rmT6XAvP32hkQaSoRHWpPYBHSxvFE7hhTGa1QYRkmqFxGAh%2F2xZemAxSm%2BKeyg4hv018tzi4qPme2rYHNgwtd7UhrBqCWFFYuB4373oLEh1ULQidt%2BYS2YwpDIYa4dditD3QpB%2FBe9QqtQxN7HXPctVgErbFzbLNIU7RuT6fsfIWRn0bEjezwQTTiGgfsVNGU&X-Amz-Signature=f946d89c78ddeb7b85f4ea7236e79588a9ebf228988754c470a16e5cbfa33934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
