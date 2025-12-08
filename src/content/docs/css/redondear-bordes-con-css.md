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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQBHH26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFIC7we%2FPGH7%2FNZUzF9yGEhFdtb2bRyx%2FH3W%2BFXrYpAiEAs9PpBKZZPUqUMCRO%2FaC3R9WR6L%2F8tTruFDYUigTR%2BhsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDe1nMaob7Rind0jCSrcAye5nvP5ppXDSDj4XR1lRdq%2FiA6bQkI7th%2FT%2BQqZWvUk%2F86CW%2BusnW9FMtw63lZ%2BoUfbQvbJel0izjg%2FKXJS7Xz0kty5zAZJrq4WvvYMM%2FVeMQvX3PxsOFLRpHPYbd2TuZRltiNH%2Bu5WCn0f5VHsDz0leq%2FZRVP0ooh9n4P%2BLvCYtpakA%2FRfxQXy4oafxQjo4a2ApOnJrf%2FsndU2aFpcvsqBSGvrPM16WwZSrk%2FNHCpKKlRisFPzAM9ZkwhdxNmC8xLKSYR1a9vtEUnZYoZexz9Adlg3c1jd%2BI8QTBJ2u8CJ3f%2F3BKm9wJlr3NNOKXaU38eCZSRjxSpMOrvl7NkLXrILbWtWOo09kRHS8Hx2MlIpdlJV%2Bn6EF3bsBNNp5HsfSG%2FojM%2BcVPCBCJ38vEy6j9Ivkyh9EbAc0ZP%2FKtpThjfHD0eEhyaTNEY28vbhCqpf1%2FZizAdAZZsULG7%2F99fpx1fA74iiMZuU0eX%2BDvA2Uz7lHfSr84r76HrRFBzLAaV7UxoAfJjq6a%2FdEHN3v7gSISfhmEsDUXis8PWEocP5l3r1df8a%2FhWsFKwq7Y9PbyzvsgF1gE9UbBiz%2B7ROYpk2rHzv4IhgvYGwB2LkjX2iZac44TEBvA7hVYqLY1tRMN3k28kGOqUBoeZD4f9rb0dclFXNTE0ftskD7%2Fbhd3CCU8RTqDQhVXgI5fPnxtCRKpWn5nbcFj7KQkbekpnFmNLiCWxjSxu%2FbqkLuhS0ew1hbGh1OBZ%2BcHA3f55CKtd6DAAkucAsNV4ycxBDbXK9b4jmA%2BaXux4lHQjkB6FjD7MiURWOY5AQarpuA5L4FIhnPtrCWdpTGceBdMw1ZEMt9VHjSso%2FlEDXR%2FIxZr0l&X-Amz-Signature=a83174aa7f93bed95f604b00bd251413b27619bac4538fe939b2aec96ad53508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQBHH26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFIC7we%2FPGH7%2FNZUzF9yGEhFdtb2bRyx%2FH3W%2BFXrYpAiEAs9PpBKZZPUqUMCRO%2FaC3R9WR6L%2F8tTruFDYUigTR%2BhsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDe1nMaob7Rind0jCSrcAye5nvP5ppXDSDj4XR1lRdq%2FiA6bQkI7th%2FT%2BQqZWvUk%2F86CW%2BusnW9FMtw63lZ%2BoUfbQvbJel0izjg%2FKXJS7Xz0kty5zAZJrq4WvvYMM%2FVeMQvX3PxsOFLRpHPYbd2TuZRltiNH%2Bu5WCn0f5VHsDz0leq%2FZRVP0ooh9n4P%2BLvCYtpakA%2FRfxQXy4oafxQjo4a2ApOnJrf%2FsndU2aFpcvsqBSGvrPM16WwZSrk%2FNHCpKKlRisFPzAM9ZkwhdxNmC8xLKSYR1a9vtEUnZYoZexz9Adlg3c1jd%2BI8QTBJ2u8CJ3f%2F3BKm9wJlr3NNOKXaU38eCZSRjxSpMOrvl7NkLXrILbWtWOo09kRHS8Hx2MlIpdlJV%2Bn6EF3bsBNNp5HsfSG%2FojM%2BcVPCBCJ38vEy6j9Ivkyh9EbAc0ZP%2FKtpThjfHD0eEhyaTNEY28vbhCqpf1%2FZizAdAZZsULG7%2F99fpx1fA74iiMZuU0eX%2BDvA2Uz7lHfSr84r76HrRFBzLAaV7UxoAfJjq6a%2FdEHN3v7gSISfhmEsDUXis8PWEocP5l3r1df8a%2FhWsFKwq7Y9PbyzvsgF1gE9UbBiz%2B7ROYpk2rHzv4IhgvYGwB2LkjX2iZac44TEBvA7hVYqLY1tRMN3k28kGOqUBoeZD4f9rb0dclFXNTE0ftskD7%2Fbhd3CCU8RTqDQhVXgI5fPnxtCRKpWn5nbcFj7KQkbekpnFmNLiCWxjSxu%2FbqkLuhS0ew1hbGh1OBZ%2BcHA3f55CKtd6DAAkucAsNV4ycxBDbXK9b4jmA%2BaXux4lHQjkB6FjD7MiURWOY5AQarpuA5L4FIhnPtrCWdpTGceBdMw1ZEMt9VHjSso%2FlEDXR%2FIxZr0l&X-Amz-Signature=15e0031209139f715abc369e35853a3fe6a37b8c55ee5a31b6f888f05d969b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
