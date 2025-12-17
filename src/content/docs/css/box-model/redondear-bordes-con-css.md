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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JGHHPHX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1Owr8V7cGp6RP7%2Fa%2FOG3DBYgyHbpAC2syLNJdwvbEFgIgHYaaz9qB4hrRKSOegXUXc%2BOe5ffCC37W39OJ5AQxT5Aq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLMs%2FA8c7AcX5W0qKircA0cg6eQYWFld33ZmCO5QBh%2FWnNumsB%2B6XRkXI4N6hgLMidr5ypUJBMCJFNjW5L8lTpv5993SS0cAwhCqhhJMgFqUPxGnmXxJUAPeEd0ecz6XEn5FzJr27blLShjShZyMeed30PTnvNsJbuo6KIr%2BHYlCZk5l%2BDYBgCHBejPyXL3juDyIae2bVIfXuiqRAagjV%2BxNalGTh3gCd7UQI9WD7s%2FlA9jG3ulGq04qTkusdmnLntzHc2Y0M%2FE5OwLmEB%2FR1kPKK1zfT%2FwLoEBe9BYp0uDIYlE2Rl0myWWCehE9kIVIHcn8bAwEBj1hWyktWfGaW5CUnKNFuf5%2BRtBjWCpaaZx4hzbTo82hxDd16PQ6ApzfsWEieuampkcI%2B7zxVRwCm3Xrz7HxUW51M64zYNgQsZazPgR%2B6muMHpfmVPwIyO%2BuyY6RtznJ1JkeAOOLOuKI%2BGqVzK8BG%2BhlurweBkIfrkNSYYcMfR%2B5EcAGQ7k1789dhHpE66FMFdR2TrRuQE2FhMFj6d8TKV6cf%2BL%2BzdmkK3oE6e9MSi9x3XqqkOKGEu7ArqPg%2FW41UUJfH3jdtwQVaKBaEXUN2T%2FzQnfYEA8hKdmyQAhwxxeiONJoDJSgjosBmkz%2BDKE9PHV7kWZ0MO2XiMoGOqUBSR1OiCsbmYXYeBY9QJ3sv3LU0F3dM9cQdRV4Vkt39ek0U7AiVhq6ROyYtarff3LdIVa%2Fhh7j7ZeAi2arACqkbXciguMXKS873zK%2FzAL7vi1ghQJusMWyuCASB66pVGt1askRDu5rsX0eg7tYbljnCvLeRrVCwaxuAxMZI%2FBTINiDrZDkkeOLpIKsyqJMjsrLpDzNvR1Unp6HCNVt8qRsdYn2Vr2J&X-Amz-Signature=0ed26cbf085ce584623dd96cbd8244f93da84874dbf0034aa7078e5b415724a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JGHHPHX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1Owr8V7cGp6RP7%2Fa%2FOG3DBYgyHbpAC2syLNJdwvbEFgIgHYaaz9qB4hrRKSOegXUXc%2BOe5ffCC37W39OJ5AQxT5Aq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLMs%2FA8c7AcX5W0qKircA0cg6eQYWFld33ZmCO5QBh%2FWnNumsB%2B6XRkXI4N6hgLMidr5ypUJBMCJFNjW5L8lTpv5993SS0cAwhCqhhJMgFqUPxGnmXxJUAPeEd0ecz6XEn5FzJr27blLShjShZyMeed30PTnvNsJbuo6KIr%2BHYlCZk5l%2BDYBgCHBejPyXL3juDyIae2bVIfXuiqRAagjV%2BxNalGTh3gCd7UQI9WD7s%2FlA9jG3ulGq04qTkusdmnLntzHc2Y0M%2FE5OwLmEB%2FR1kPKK1zfT%2FwLoEBe9BYp0uDIYlE2Rl0myWWCehE9kIVIHcn8bAwEBj1hWyktWfGaW5CUnKNFuf5%2BRtBjWCpaaZx4hzbTo82hxDd16PQ6ApzfsWEieuampkcI%2B7zxVRwCm3Xrz7HxUW51M64zYNgQsZazPgR%2B6muMHpfmVPwIyO%2BuyY6RtznJ1JkeAOOLOuKI%2BGqVzK8BG%2BhlurweBkIfrkNSYYcMfR%2B5EcAGQ7k1789dhHpE66FMFdR2TrRuQE2FhMFj6d8TKV6cf%2BL%2BzdmkK3oE6e9MSi9x3XqqkOKGEu7ArqPg%2FW41UUJfH3jdtwQVaKBaEXUN2T%2FzQnfYEA8hKdmyQAhwxxeiONJoDJSgjosBmkz%2BDKE9PHV7kWZ0MO2XiMoGOqUBSR1OiCsbmYXYeBY9QJ3sv3LU0F3dM9cQdRV4Vkt39ek0U7AiVhq6ROyYtarff3LdIVa%2Fhh7j7ZeAi2arACqkbXciguMXKS873zK%2FzAL7vi1ghQJusMWyuCASB66pVGt1askRDu5rsX0eg7tYbljnCvLeRrVCwaxuAxMZI%2FBTINiDrZDkkeOLpIKsyqJMjsrLpDzNvR1Unp6HCNVt8qRsdYn2Vr2J&X-Amz-Signature=686686bcabbfcd34bf0f95f4615401082fc26117ae6137a916b0b6f6f9ebd05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
