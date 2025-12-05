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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2C4EGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0mOzmdgHHFpoMhoFIETp4UXh%2BsDk33YR%2FfRLBh0%2FcIgIhAL8RISvS%2FaK7jtHkkUZPgeCq6zRi9RR7jrE1nKdERhk3Kv8DCFsQABoMNjM3NDIzMTgzODA1Igz06OT7UccwAZOeBQoq3AMjHq0cEIrv9AXEIyyha9t3dlmPzVUdsUokk28vOUbE0Kz2cScv7ZGs5adnUu%2F40LdjsItIZinazRdfLCwB0yhnZKypTMXJ%2FAlxVCVSBe2nQfaMMATQijvNggMP%2BcuedPul9m9l1MYXa9IrcrDCOXbW%2FRM%2FDm%2B91rh1TDy8MREQrKpfrnjxIZHd2RPaIRarpTn9Vpj8H3XNjflZHPkjtMyXw0eI1rDQAluwuWqhPnCMUi5QiGnkTZDerZsMfryCe1JFqhWquFQWXi%2BaUV0yF5ftcUzHHZ16fc9%2Bp%2B23LQQUj2yejMbdahCebuoh80qqxLsKySZbfXAJgAZXBpbkcCpD%2BlpUHYSfKu5evjlSqqXwdA1sidemgTZe0%2FdPxosxMmfpb0JOpJUEdeA1kRY%2FoSRCH1YTfqOEyadxFa7kIXfW%2B6H7V90n1pMbEafNoMkhNw4%2F3nvFOmZwMxlLxIAsUfPFlOAEDIpl9EcN1p3QJxlT0hSrcutEwvS2PbC1M9r8mWIIRSRIQ9N%2F8yzmehBByORxEg1uMUkjevWqIviKPvybsF7p%2BunKQsXafPaLJC5y68uTSnvhgWN1Bw230YyiGCW49OXzb33JaTlfcBrZqszMFBm9o5BkiGBfhVZWiTDjzcrJBjqkAcWa84KmNpgTRGoVpaNCOD9lN2D3%2BSsoQVP%2BF49o4trwlWvqlkmFp3XFfkdEh1U%2BOo04HVUy7wrCV8wZ87UDUTHiJVx0VAvsgWHQehi1QPKPzFCIOxJk8q7Dej5GMkwLC9Bv%2F9ay5ipzIBkBiNLBl3lr39%2BJIEMUT1MLu9b6WExw7mpBPJM3lryqVvcvrn1q1tRia98DHrmliuH5UqW7HjguTANw&X-Amz-Signature=9e9347eb4f6d3883b1026cec0f51dd4f7aafdefba95be7e0c3c67377299e1dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2C4EGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0mOzmdgHHFpoMhoFIETp4UXh%2BsDk33YR%2FfRLBh0%2FcIgIhAL8RISvS%2FaK7jtHkkUZPgeCq6zRi9RR7jrE1nKdERhk3Kv8DCFsQABoMNjM3NDIzMTgzODA1Igz06OT7UccwAZOeBQoq3AMjHq0cEIrv9AXEIyyha9t3dlmPzVUdsUokk28vOUbE0Kz2cScv7ZGs5adnUu%2F40LdjsItIZinazRdfLCwB0yhnZKypTMXJ%2FAlxVCVSBe2nQfaMMATQijvNggMP%2BcuedPul9m9l1MYXa9IrcrDCOXbW%2FRM%2FDm%2B91rh1TDy8MREQrKpfrnjxIZHd2RPaIRarpTn9Vpj8H3XNjflZHPkjtMyXw0eI1rDQAluwuWqhPnCMUi5QiGnkTZDerZsMfryCe1JFqhWquFQWXi%2BaUV0yF5ftcUzHHZ16fc9%2Bp%2B23LQQUj2yejMbdahCebuoh80qqxLsKySZbfXAJgAZXBpbkcCpD%2BlpUHYSfKu5evjlSqqXwdA1sidemgTZe0%2FdPxosxMmfpb0JOpJUEdeA1kRY%2FoSRCH1YTfqOEyadxFa7kIXfW%2B6H7V90n1pMbEafNoMkhNw4%2F3nvFOmZwMxlLxIAsUfPFlOAEDIpl9EcN1p3QJxlT0hSrcutEwvS2PbC1M9r8mWIIRSRIQ9N%2F8yzmehBByORxEg1uMUkjevWqIviKPvybsF7p%2BunKQsXafPaLJC5y68uTSnvhgWN1Bw230YyiGCW49OXzb33JaTlfcBrZqszMFBm9o5BkiGBfhVZWiTDjzcrJBjqkAcWa84KmNpgTRGoVpaNCOD9lN2D3%2BSsoQVP%2BF49o4trwlWvqlkmFp3XFfkdEh1U%2BOo04HVUy7wrCV8wZ87UDUTHiJVx0VAvsgWHQehi1QPKPzFCIOxJk8q7Dej5GMkwLC9Bv%2F9ay5ipzIBkBiNLBl3lr39%2BJIEMUT1MLu9b6WExw7mpBPJM3lryqVvcvrn1q1tRia98DHrmliuH5UqW7HjguTANw&X-Amz-Signature=1c4b57ed9adf94cfd8f8a61313ed8200d4cd575c2b9e89260ce6377d665f812a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
