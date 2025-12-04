---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VLBLXM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEFVMxL3B9gz10SyZ9Oev%2FJXoSFXrqC6u6qWh1FPaSzkAiEApCvyPVzX7FfU2cLEJa2lJp%2BBg%2FPZAFDCIROv%2BKSpbyAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFSrc8iPuISwBuLHpSrcA068NYCKRHeJrXyKdBTZ7Wxzzp7Yj63%2FxoCHiEM9c7xomEANNSgLFPmzZNLtsFGKcZbBl4%2FjfBKGC%2BZOHc86jxLxYIpp%2FP657AEJpGTdVSJIGXihIyK3r0GgDx7mvctjWK2j1%2B1F2IiF%2FZDkVx2f0t3ODCtvOZomWELI7P1UFhfTGmkwOe7ZiTCk%2F4NQ6Cs6QNdLLZqzpRxvpATg4ZsK4AG6WJVvaDN%2BBKwrj3gEtKyPOcLdSfSovWOFtJ2n0KTcS9U9TmpfWw0zQm9Y2vHc%2B53JysAMTEIhSExoRGDoss66dcpzXpttVPhhL9OlXmwabJLJ7xHphGZU4cqmvG2OQI4mFzzWsJNjE2NthxulZ2HvxEIU8F%2FgHtOZY%2Fhr3VXIYgfj%2FCwbtXSijNlKFXtwG2TN6ptUFL03wgdzYCKJL4L0VGPTTSGOP7MmuFwffwQemsIR69gcIL%2BzA79BfxOlnwJRbSN7FSzIDx%2FGyi6z2IXBwCwOplwzznkNTFAYOqblY1hnfwPlvWv6aFwVeyyICntEpLrmbEQdnx5%2BSESi1AA8FiwTgCdT5FMHjHDpaZOZj%2B%2BLfdHsOB2ShVYKqMRBnJn5lY%2BQ3sXtTU%2Fj29eAuQAg1vUAGyNcqzJRKUKRMOCHxckGOqUB5x8FA2bY4K8yCEn55A6Iij4I0dlvhDal1c9Q%2Fd9IfTkpmbp1CbHjVgh46gj%2FU%2FuvnYpnXLeFHlaVBm9vnu39Cjzi3AN3ITs39zJnF%2FXmXDmx5YAD9y8dJxDyWbtzMQhydnSOdc8KJgCDjAyuMSO3M1EcQB3h3VvcAsGWrvysTPqh56TcEU%2BmGEAr%2FCsBEQDKvdod3vNeZBlKDKK%2B4q0jEoItRISx&X-Amz-Signature=be48cfe4dcd05de51e6922ed9e0008b64b53387f23c3d28481d73eee5455b4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VLBLXM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEFVMxL3B9gz10SyZ9Oev%2FJXoSFXrqC6u6qWh1FPaSzkAiEApCvyPVzX7FfU2cLEJa2lJp%2BBg%2FPZAFDCIROv%2BKSpbyAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFSrc8iPuISwBuLHpSrcA068NYCKRHeJrXyKdBTZ7Wxzzp7Yj63%2FxoCHiEM9c7xomEANNSgLFPmzZNLtsFGKcZbBl4%2FjfBKGC%2BZOHc86jxLxYIpp%2FP657AEJpGTdVSJIGXihIyK3r0GgDx7mvctjWK2j1%2B1F2IiF%2FZDkVx2f0t3ODCtvOZomWELI7P1UFhfTGmkwOe7ZiTCk%2F4NQ6Cs6QNdLLZqzpRxvpATg4ZsK4AG6WJVvaDN%2BBKwrj3gEtKyPOcLdSfSovWOFtJ2n0KTcS9U9TmpfWw0zQm9Y2vHc%2B53JysAMTEIhSExoRGDoss66dcpzXpttVPhhL9OlXmwabJLJ7xHphGZU4cqmvG2OQI4mFzzWsJNjE2NthxulZ2HvxEIU8F%2FgHtOZY%2Fhr3VXIYgfj%2FCwbtXSijNlKFXtwG2TN6ptUFL03wgdzYCKJL4L0VGPTTSGOP7MmuFwffwQemsIR69gcIL%2BzA79BfxOlnwJRbSN7FSzIDx%2FGyi6z2IXBwCwOplwzznkNTFAYOqblY1hnfwPlvWv6aFwVeyyICntEpLrmbEQdnx5%2BSESi1AA8FiwTgCdT5FMHjHDpaZOZj%2B%2BLfdHsOB2ShVYKqMRBnJn5lY%2BQ3sXtTU%2Fj29eAuQAg1vUAGyNcqzJRKUKRMOCHxckGOqUB5x8FA2bY4K8yCEn55A6Iij4I0dlvhDal1c9Q%2Fd9IfTkpmbp1CbHjVgh46gj%2FU%2FuvnYpnXLeFHlaVBm9vnu39Cjzi3AN3ITs39zJnF%2FXmXDmx5YAD9y8dJxDyWbtzMQhydnSOdc8KJgCDjAyuMSO3M1EcQB3h3VvcAsGWrvysTPqh56TcEU%2BmGEAr%2FCsBEQDKvdod3vNeZBlKDKK%2B4q0jEoItRISx&X-Amz-Signature=1da6c0f2a44f2c593cfc39c847918bf9434bf4d89e3f67c2218f776a2afd1df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
