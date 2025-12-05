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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FPN2QNR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2WlVgfjkvOxY%2F3TeZQDrN%2FC9mNUHdsl4nkMPS7f3%2BLAiEAlRVtTY%2BoP8xCG1LI8h0vaVmZtPqERB%2BXjbZakFMjZsEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLWFGSXrnxFkxgVAPCrcAy0R3yVtb6m44l62UqNJ3zJ6XTO4t2U7%2F%2BuTf8cuCLVpsmB9%2F9cfROVVDs%2BAVvJkwGWJQNzLi5R3ouqTmV1j6GPbfthwVZOOw1OFmnx6qkWSZpMhHV%2BhT7V5f5BLfKrcjw6gE9MT1F3WIjJ4cUeyn9myoN1AJYN2ZFp8%2B2Q122awluLQZKKD0ayaFH6qkrl6P6hje11R4Uhc7au8fu0rzAACAhP5EN3Gwd6ZAeVzs673TlhOJuDjOKYr%2F1X43u9XwQZk6RWkb%2FRwY%2BHOIyuBgNHz2cco1NSPGWnlb8RNQnDL8hCdczQsFPW%2F0dUNwKQA3VnB7mMlROxqjNP7XSKpOD5%2F3cP0rGlQMYI8TlMwnPCVC2ipzfuX7W1QOP93eVaZBlgzBB%2FUJKqMlbSohCI9kqBg7QecFewwIqxwNlxFsTBFiq4vxhXA7SXmxBSRGzi9Ll7CHTdM%2FbZM%2BwGomTLzZMTjcouRWvAAfp1IpWHrbeVa7FxGtGm9MIC4D8fktFbgOITjlsLj1t58IgyLJ8NEf7Pd6dLZl3nGjSSv2wYwCoVetfKnTFl8CfAn7twNjlI1T1%2Bct13YjSaKgctTSRhwuNr8ujtRp9S9iKRhLQb2abwEweIlMw6QgPboFbmTMOPNyskGOqUB0pLGGHNBTDELxWK%2F0%2B2BwGe2tWhkfL4B%2FPThsJC4YjtdFk%2FfH8tXc9fISQeQiRRuRx5P9ltgdZ%2F85qQJgS%2BuDqCnHhV412JeC9w5Vq47VmCpP1VZbmU5lBrgeBWEVR3aUJbgsb7EuHCL6AGiZ3DMkRpVttEjzO4PX%2B10pLhVaWopKNBZDLt%2B9y56GH4hGEQtGlkGOJb1y3PkQQLYD6ViNVz0phXm&X-Amz-Signature=bc341e78521439c71528f0e279debf8d6bc2d14dcce1ebab193408bdb2662ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FPN2QNR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2WlVgfjkvOxY%2F3TeZQDrN%2FC9mNUHdsl4nkMPS7f3%2BLAiEAlRVtTY%2BoP8xCG1LI8h0vaVmZtPqERB%2BXjbZakFMjZsEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLWFGSXrnxFkxgVAPCrcAy0R3yVtb6m44l62UqNJ3zJ6XTO4t2U7%2F%2BuTf8cuCLVpsmB9%2F9cfROVVDs%2BAVvJkwGWJQNzLi5R3ouqTmV1j6GPbfthwVZOOw1OFmnx6qkWSZpMhHV%2BhT7V5f5BLfKrcjw6gE9MT1F3WIjJ4cUeyn9myoN1AJYN2ZFp8%2B2Q122awluLQZKKD0ayaFH6qkrl6P6hje11R4Uhc7au8fu0rzAACAhP5EN3Gwd6ZAeVzs673TlhOJuDjOKYr%2F1X43u9XwQZk6RWkb%2FRwY%2BHOIyuBgNHz2cco1NSPGWnlb8RNQnDL8hCdczQsFPW%2F0dUNwKQA3VnB7mMlROxqjNP7XSKpOD5%2F3cP0rGlQMYI8TlMwnPCVC2ipzfuX7W1QOP93eVaZBlgzBB%2FUJKqMlbSohCI9kqBg7QecFewwIqxwNlxFsTBFiq4vxhXA7SXmxBSRGzi9Ll7CHTdM%2FbZM%2BwGomTLzZMTjcouRWvAAfp1IpWHrbeVa7FxGtGm9MIC4D8fktFbgOITjlsLj1t58IgyLJ8NEf7Pd6dLZl3nGjSSv2wYwCoVetfKnTFl8CfAn7twNjlI1T1%2Bct13YjSaKgctTSRhwuNr8ujtRp9S9iKRhLQb2abwEweIlMw6QgPboFbmTMOPNyskGOqUB0pLGGHNBTDELxWK%2F0%2B2BwGe2tWhkfL4B%2FPThsJC4YjtdFk%2FfH8tXc9fISQeQiRRuRx5P9ltgdZ%2F85qQJgS%2BuDqCnHhV412JeC9w5Vq47VmCpP1VZbmU5lBrgeBWEVR3aUJbgsb7EuHCL6AGiZ3DMkRpVttEjzO4PX%2B10pLhVaWopKNBZDLt%2B9y56GH4hGEQtGlkGOJb1y3PkQQLYD6ViNVz0phXm&X-Amz-Signature=a745f918a3df0efdae7bc1888a605981267ad34c9476e537167adf69c797f5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
