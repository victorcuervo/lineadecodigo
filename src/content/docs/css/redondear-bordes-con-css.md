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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNB3RK4Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE80TixCLXWPX%2FG0NsGpIz%2BTArC8QRujhBiAaInbs6UVAiEAt6DD%2BrO9MQTmjonAfWx9t60ZjZpGyIuhsRO64BvrwjAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT42dBoI1iTfECpESrcA801qtxreex5aaz6r5QJZbTiOUkCBI%2BTdcDu0yD5jVuAJqUT%2BNq75viGUFkMIUQEzs%2BO6jsadvhrsyFwyD%2FEociq3hIg%2FX%2BN3WzGgsqXNTUQdeS9SrNHAyuAwSGHizBZ9tgZPMr3GgMn8tRdTkUKmSnBdl4q0BdptzxKiNTg00fSpEvOt50rYFKC%2BSCjMrLy6RrO1BfrC7uHI2F%2F6KK9SRqvrCgGQhjpJBNcDMA4LOsmjRxvm%2B%2Fllwu%2B6br2s8QlW9htD%2BGV%2FV9unzlI%2BP2M8K%2FfCrhMtdk0NXJeV9uvBYu55qtwEXXR8N1jtV%2FCx8SgNqolmkoZgK7G98RaH6XAI3%2B1ALXGchBb1JavCqyBFVGOhx987VuD8JbcmBJccobnI8Q%2FcHSWMDrcHfJnbrITjTt4828gxDlzjSNM2zZ5dnks7Nj%2B9sSQPdRJeD2%2BUmT3R50PfqpmWAZ5VNzyNqRw%2FdFw8mq5XjgbY7%2BWbXmWy0tHA7iykKfWrH1IHM6NxIzaaepb0AffVJsf%2BzjCZPUSC3Hx1jN8o0TZvgBXlYbk1BVOtPRfNuYpfPdJ8LX1pMjwpZPgxe5filxww3kcVukL9zfVMESteZuMI2ont3tzLE9raH5s3DzqFwG8dWetMPzC3ckGOqUBRMRY7TzBaLMhH0VjKIlBiLtKQGUqnOq5bg3Nbk9QLT0IpblNfWfXYlbHgJs9gSrCenPBeBdJuY7%2BFsfRCN7nbmrWwYvJfqiJ9FCfLrtXfW6DWl2ToSVhR1LZyQ95HZBIO8rGbWTNKOkwz8h9q81OezQKE0LaxjNZO8BJKmOKrmH1L34q3zrp1YLDfKngAVSbeRNEcicyUepmQmY%2BLy7HKaUuzpWj&X-Amz-Signature=033eb71d467a0e765d710784e2dea03acc655de4d4105d055d3a0f490d9dde98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNB3RK4Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE80TixCLXWPX%2FG0NsGpIz%2BTArC8QRujhBiAaInbs6UVAiEAt6DD%2BrO9MQTmjonAfWx9t60ZjZpGyIuhsRO64BvrwjAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT42dBoI1iTfECpESrcA801qtxreex5aaz6r5QJZbTiOUkCBI%2BTdcDu0yD5jVuAJqUT%2BNq75viGUFkMIUQEzs%2BO6jsadvhrsyFwyD%2FEociq3hIg%2FX%2BN3WzGgsqXNTUQdeS9SrNHAyuAwSGHizBZ9tgZPMr3GgMn8tRdTkUKmSnBdl4q0BdptzxKiNTg00fSpEvOt50rYFKC%2BSCjMrLy6RrO1BfrC7uHI2F%2F6KK9SRqvrCgGQhjpJBNcDMA4LOsmjRxvm%2B%2Fllwu%2B6br2s8QlW9htD%2BGV%2FV9unzlI%2BP2M8K%2FfCrhMtdk0NXJeV9uvBYu55qtwEXXR8N1jtV%2FCx8SgNqolmkoZgK7G98RaH6XAI3%2B1ALXGchBb1JavCqyBFVGOhx987VuD8JbcmBJccobnI8Q%2FcHSWMDrcHfJnbrITjTt4828gxDlzjSNM2zZ5dnks7Nj%2B9sSQPdRJeD2%2BUmT3R50PfqpmWAZ5VNzyNqRw%2FdFw8mq5XjgbY7%2BWbXmWy0tHA7iykKfWrH1IHM6NxIzaaepb0AffVJsf%2BzjCZPUSC3Hx1jN8o0TZvgBXlYbk1BVOtPRfNuYpfPdJ8LX1pMjwpZPgxe5filxww3kcVukL9zfVMESteZuMI2ont3tzLE9raH5s3DzqFwG8dWetMPzC3ckGOqUBRMRY7TzBaLMhH0VjKIlBiLtKQGUqnOq5bg3Nbk9QLT0IpblNfWfXYlbHgJs9gSrCenPBeBdJuY7%2BFsfRCN7nbmrWwYvJfqiJ9FCfLrtXfW6DWl2ToSVhR1LZyQ95HZBIO8rGbWTNKOkwz8h9q81OezQKE0LaxjNZO8BJKmOKrmH1L34q3zrp1YLDfKngAVSbeRNEcicyUepmQmY%2BLy7HKaUuzpWj&X-Amz-Signature=88ba0a0bbc6c3333b61510da1e93d94c9c21b32b7c2df460fcb5d436cd509f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
