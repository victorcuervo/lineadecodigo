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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662324HZUA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBraIJZl7flzoEDmPB5rV902g%2Bw3i6gjBnNd6eoeDfauAiEAvl8S4l5dhfgpDEX%2BJfZKR2AOkhPnavE5au9U1%2Fv00VsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEVuS5WGw2Ui%2FuIVCrcA27lGbiVCTYrtXPlkuNuQ0eClCsYQSNHOU4Fd8LPJumTSZRx3%2FuqySgI2ZnqFSXlTS53nZ35rqMPsWs8gUAvtXRoOmtOaNJHRBKo6w0q1Lb44QRWx99BRwi51xQ0Y%2F98GUFbvD8F6r%2FmR%2FhRQMlMu4mqjkty%2FnN2gIGKsqD%2Bd%2BCaHOx2qN%2BaVY0uSyNBJNW7jG9GTZWH%2BevmlKkHIsP2%2FGNkLvhBKrlZ0hsrEJw%2FNfRR8odBkK8NGXvIEC33RYui76A%2BuD%2FcOn0GPcn5bKetyWGLvPvDgto%2BQmS%2F7dxXxEFRI6P4AauznGUe8xJ%2F%2FS2lB2BddtZunAW3Xd6%2FU%2FMALKpQtqa%2FqZd4lwYeCQVWVr7Ewl40qrk2l%2BrJ7dTZTkTLKBx7gvtRL8XpNIuAULvHc16%2FL1WfmINxC6hQxAhXrI1TD%2FfWEgicrVdMq9gJxZ2llhYBPiZ%2B6JsfIiKdCUbHS%2BZApWK1pM0%2BDfdhLJJFS8pVWIFdxIw2XNDLywQfMKoOKxXpC2JPJjUw0e%2FYDIOnkcJZG0PIPG2F3oZIB51%2F%2BoBddhlPKn4pTSjZLcn0%2Ff2n4wBYmYx9iMeOJTM3KJrbvlO%2B38hF2dKI5yYWfCuunoMnsBNgNpmamotqzQX0MM2ei8oGOqUBW7CMqiRmzmC5PZAfzIdbQ%2Bm3XynUErN%2B0JRWo1lT5ildS%2BtwJgSGCRs89Jk7kQwOhpQjK5MvoCzMN1zv7%2BS5peGPJIreIAx%2BnGnpFA6y2CLYY%2Bps7UwL%2FcwEnmL%2F9%2F%2F5F6%2B28VQLRB6GEeBKCiVDWFfMNpjpPkTtassohRMFql4ADZ%2BVa5mScx5UtXgO8VR%2BQCEltCg83mdv%2BGxHCoviNLuFCXJM&X-Amz-Signature=eda4d3c809cf3e962948880cbff0c6d0ed0dc2df8fe57f263abaaf485aadf5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662324HZUA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBraIJZl7flzoEDmPB5rV902g%2Bw3i6gjBnNd6eoeDfauAiEAvl8S4l5dhfgpDEX%2BJfZKR2AOkhPnavE5au9U1%2Fv00VsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEVuS5WGw2Ui%2FuIVCrcA27lGbiVCTYrtXPlkuNuQ0eClCsYQSNHOU4Fd8LPJumTSZRx3%2FuqySgI2ZnqFSXlTS53nZ35rqMPsWs8gUAvtXRoOmtOaNJHRBKo6w0q1Lb44QRWx99BRwi51xQ0Y%2F98GUFbvD8F6r%2FmR%2FhRQMlMu4mqjkty%2FnN2gIGKsqD%2Bd%2BCaHOx2qN%2BaVY0uSyNBJNW7jG9GTZWH%2BevmlKkHIsP2%2FGNkLvhBKrlZ0hsrEJw%2FNfRR8odBkK8NGXvIEC33RYui76A%2BuD%2FcOn0GPcn5bKetyWGLvPvDgto%2BQmS%2F7dxXxEFRI6P4AauznGUe8xJ%2F%2FS2lB2BddtZunAW3Xd6%2FU%2FMALKpQtqa%2FqZd4lwYeCQVWVr7Ewl40qrk2l%2BrJ7dTZTkTLKBx7gvtRL8XpNIuAULvHc16%2FL1WfmINxC6hQxAhXrI1TD%2FfWEgicrVdMq9gJxZ2llhYBPiZ%2B6JsfIiKdCUbHS%2BZApWK1pM0%2BDfdhLJJFS8pVWIFdxIw2XNDLywQfMKoOKxXpC2JPJjUw0e%2FYDIOnkcJZG0PIPG2F3oZIB51%2F%2BoBddhlPKn4pTSjZLcn0%2Ff2n4wBYmYx9iMeOJTM3KJrbvlO%2B38hF2dKI5yYWfCuunoMnsBNgNpmamotqzQX0MM2ei8oGOqUBW7CMqiRmzmC5PZAfzIdbQ%2Bm3XynUErN%2B0JRWo1lT5ildS%2BtwJgSGCRs89Jk7kQwOhpQjK5MvoCzMN1zv7%2BS5peGPJIreIAx%2BnGnpFA6y2CLYY%2Bps7UwL%2FcwEnmL%2F9%2F%2F5F6%2B28VQLRB6GEeBKCiVDWFfMNpjpPkTtassohRMFql4ADZ%2BVa5mScx5UtXgO8VR%2BQCEltCg83mdv%2BGxHCoviNLuFCXJM&X-Amz-Signature=e12d929878cc436ffefb934df802a1780981b026faa68ed3b87f5f80ba038ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
