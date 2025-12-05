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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTWEOSI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx3YV4U1eEQTXXBfxb9xAEUworS%2B7kKKA456Zv5LzWBAiEAyN5j6cv3xaIQOTIapePR1GKfO52QXPUz06n0tK3kA90q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPpo1NDZAB%2FfQWATIircA%2Fxmwpvb2dkvpBDT%2FSn95%2Flv%2BJZb2b9uhdDG3UkS%2FpbwvjNnsXkqDaVyy78J%2BdSgBTo0gDojZCls%2FtZtjK3KpEvVYR%2F2g6ga3E5eh26gX1FCw3Dd9x4rQwjayGLmOD0UkQBJmp%2BAymizew4Ye8TesP3gbedd%2BgLckrOJS3p3oJLVFdQ3gncDBzX1JJM9IKMbjp84Av9fDUuAtTeAvJZDgk44Dq4zY1kTrKNp97hGJdDrZ3GAihftbAOsq%2Bxf%2Bk32Ndqvzbe4OatfAiDkDQag6oonj6yg%2FAo4tPF2S32yxGngP%2Fu2GCrK6nNaYOus%2B4f8n5q6sc1e5q0dUpVM14vxmJN5M7XLZwPDgePn7N6BsRorFQvBWJvvavRm3EQPIJpIdsFup0IQjlM2%2BPlH6wiCNYQ4bW1IyYLNaMz9%2B5eCzsQ3re2zqeHeElZd7fagLfbvFyzbIhCUAFMn4t6XRg44YAhzWcPrTbxUf1TS%2FYXsCyera0NhXxoqCPz99E3x9VS2TcOCsT416xH8%2BqLVXwNNYBWBMhdWjN7IqxybS05Q8m1EZHNMKtulPuaQR4IpjgBRDIsxneZpneQ10H9gi%2BtXbEzbnVtBu%2BZ5xRe6oLB9%2FvQRuBGF2EGmhP4fftvaML6MyMkGOqUBGUddkPya%2BQJEdPrCj2EvVkgyEqES59xv3gUA782R24LOn%2BT1jWXpQrQhzE5ifWyXWRYHA9zUMvv4CzW0TE%2B%2FolpSTQPf6rdObt8oiPMvLsk7SgA5AaWtC3UmL%2Be%2BPWq0m8Y%2BPmLZQx7uPIEB6FjPxlZyLwFnS%2FS785Mc4iBYvFRHaKwwuS%2Fnuk6feriD5PyYNCwdJ5QBgbzZEUYgSvF4TccuOGfi&X-Amz-Signature=2bcc1d91090a7ca7124d5516af782896d693ec90c2e67ce23da6c8cf9f68146b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTWEOSI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx3YV4U1eEQTXXBfxb9xAEUworS%2B7kKKA456Zv5LzWBAiEAyN5j6cv3xaIQOTIapePR1GKfO52QXPUz06n0tK3kA90q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPpo1NDZAB%2FfQWATIircA%2Fxmwpvb2dkvpBDT%2FSn95%2Flv%2BJZb2b9uhdDG3UkS%2FpbwvjNnsXkqDaVyy78J%2BdSgBTo0gDojZCls%2FtZtjK3KpEvVYR%2F2g6ga3E5eh26gX1FCw3Dd9x4rQwjayGLmOD0UkQBJmp%2BAymizew4Ye8TesP3gbedd%2BgLckrOJS3p3oJLVFdQ3gncDBzX1JJM9IKMbjp84Av9fDUuAtTeAvJZDgk44Dq4zY1kTrKNp97hGJdDrZ3GAihftbAOsq%2Bxf%2Bk32Ndqvzbe4OatfAiDkDQag6oonj6yg%2FAo4tPF2S32yxGngP%2Fu2GCrK6nNaYOus%2B4f8n5q6sc1e5q0dUpVM14vxmJN5M7XLZwPDgePn7N6BsRorFQvBWJvvavRm3EQPIJpIdsFup0IQjlM2%2BPlH6wiCNYQ4bW1IyYLNaMz9%2B5eCzsQ3re2zqeHeElZd7fagLfbvFyzbIhCUAFMn4t6XRg44YAhzWcPrTbxUf1TS%2FYXsCyera0NhXxoqCPz99E3x9VS2TcOCsT416xH8%2BqLVXwNNYBWBMhdWjN7IqxybS05Q8m1EZHNMKtulPuaQR4IpjgBRDIsxneZpneQ10H9gi%2BtXbEzbnVtBu%2BZ5xRe6oLB9%2FvQRuBGF2EGmhP4fftvaML6MyMkGOqUBGUddkPya%2BQJEdPrCj2EvVkgyEqES59xv3gUA782R24LOn%2BT1jWXpQrQhzE5ifWyXWRYHA9zUMvv4CzW0TE%2B%2FolpSTQPf6rdObt8oiPMvLsk7SgA5AaWtC3UmL%2Be%2BPWq0m8Y%2BPmLZQx7uPIEB6FjPxlZyLwFnS%2FS785Mc4iBYvFRHaKwwuS%2Fnuk6feriD5PyYNCwdJ5QBgbzZEUYgSvF4TccuOGfi&X-Amz-Signature=88a9fe9dacb5d4d8044835e509ec7e27ad08a3d98e5c868bf15de757a2791b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
