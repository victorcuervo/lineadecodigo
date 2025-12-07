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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWAL7L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn8TvOfv%2F3YCILjBfA%2FFTf9Wf300mqxWOngFBP4%2BAhUAiAgoXLhncouEnNNE9L%2FIs6rV1GLKGplLAu91RDb7I9p3iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTAx%2Fzm2592G7I3EKtwDzhSnltomiG5OdBdOeGsdGFK0H1aiRsmg8m4QEMZRurKFqSSoUZgw%2B7%2Fpj34kJ0eZ3bLv4XMo4mpr4z%2F361BOe6XcYSFkl0xsv%2BvMx8jDGp%2FOO8Ajeanl6OQc5mB2FR5ic1nky52MckxSUuOYfysmshZlJXQ4yRmtG9EggKlcMuH3KHOI3cNVF9BhIaE5t2JcQIohgMcC389etpVFNAsP9IciJUry02Uidk2tYXWGhzN8lWLs3YvZeeB%2F3MB0HzONHGf4%2F3xcb33YACP7IBG0aTTY8rDMoTM0tNt0j4rT8trAGft5ezlNMFCg%2BSSp%2BYD4rzcpnUXDqK9n9pew0%2F2PfG9uD0EkvA1slixCWLLy%2FcfEjJkVj7Iay8C2MNLdLt3fRpCTXHWZUFbAMnHXxwb%2BUTnZRgkXgKfWkuDT%2Fi3XZdFsuqydhOFUj%2FTe5Kynoe7krvRZC61ghqLmB6X%2FPw%2FCe4GpQ3VOhKQEemOkywUqBy2LbIlov2cZOHic5ASC5%2F8PMX0N0Ay4rC%2FblaW0%2BzsfWyyCbEnz0neLEJCUl9lIaN230JDTMAxNueqTm2qwULn68YDaB6t1S%2BpvOBy0eInlzYsuD6Nih%2F5%2BAp40SKChTmNTVn4B4KkscCvESJswspnVyQY6pgFor7hSYNYh0%2BOkcRYvNgbxNZsisIhxSomANUpsf30iyomGnmJFr1zOQJM23S9CqVljKQormOAt%2FIVjJRZXRBqSd%2B3sIczeEM9OjE2Xpo8Pb1FhKfR0WJpkjy6%2FBMY%2FmYsYDK2KfoDMFt0s3%2Bx13eRoxfaUGqoaJxKsSjieMOooAsCUnp7hgk66b8%2BuSQk%2FINUkReyMsFGX4O5rdgzhnSCAIeARVf1v&X-Amz-Signature=c2c3adf7b9a505e6abd9e43577b433aa642847dfffb0436125bd35b5b832ade0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWAL7L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn8TvOfv%2F3YCILjBfA%2FFTf9Wf300mqxWOngFBP4%2BAhUAiAgoXLhncouEnNNE9L%2FIs6rV1GLKGplLAu91RDb7I9p3iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTAx%2Fzm2592G7I3EKtwDzhSnltomiG5OdBdOeGsdGFK0H1aiRsmg8m4QEMZRurKFqSSoUZgw%2B7%2Fpj34kJ0eZ3bLv4XMo4mpr4z%2F361BOe6XcYSFkl0xsv%2BvMx8jDGp%2FOO8Ajeanl6OQc5mB2FR5ic1nky52MckxSUuOYfysmshZlJXQ4yRmtG9EggKlcMuH3KHOI3cNVF9BhIaE5t2JcQIohgMcC389etpVFNAsP9IciJUry02Uidk2tYXWGhzN8lWLs3YvZeeB%2F3MB0HzONHGf4%2F3xcb33YACP7IBG0aTTY8rDMoTM0tNt0j4rT8trAGft5ezlNMFCg%2BSSp%2BYD4rzcpnUXDqK9n9pew0%2F2PfG9uD0EkvA1slixCWLLy%2FcfEjJkVj7Iay8C2MNLdLt3fRpCTXHWZUFbAMnHXxwb%2BUTnZRgkXgKfWkuDT%2Fi3XZdFsuqydhOFUj%2FTe5Kynoe7krvRZC61ghqLmB6X%2FPw%2FCe4GpQ3VOhKQEemOkywUqBy2LbIlov2cZOHic5ASC5%2F8PMX0N0Ay4rC%2FblaW0%2BzsfWyyCbEnz0neLEJCUl9lIaN230JDTMAxNueqTm2qwULn68YDaB6t1S%2BpvOBy0eInlzYsuD6Nih%2F5%2BAp40SKChTmNTVn4B4KkscCvESJswspnVyQY6pgFor7hSYNYh0%2BOkcRYvNgbxNZsisIhxSomANUpsf30iyomGnmJFr1zOQJM23S9CqVljKQormOAt%2FIVjJRZXRBqSd%2B3sIczeEM9OjE2Xpo8Pb1FhKfR0WJpkjy6%2FBMY%2FmYsYDK2KfoDMFt0s3%2Bx13eRoxfaUGqoaJxKsSjieMOooAsCUnp7hgk66b8%2BuSQk%2FINUkReyMsFGX4O5rdgzhnSCAIeARVf1v&X-Amz-Signature=e9ddeb5af1beda92f42967ffc01914ccab5b14a77e32c94ad122e31450675b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
