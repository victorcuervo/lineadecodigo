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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466373JK5KS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FTFORy1AHrTJ2%2FjzuIwOx3tJZ2uIqm9oPFTDogasZjAiEA%2FE11uHuwJE5J4vamq%2Bsso%2FmTzSPXv%2BvmZ8W2rh4Wcu8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ7htSptEQwcBIBk1yrcA38CP%2BhtSmZ74uCQd2NwFfIbKnLe9pt7prm%2BmeVArI5dxvryOS7Yqqm5rPKzQjD0VrMsqFa9byW7RBe6oW6OSKSEZX95mW7HT9Bnmo0bQMZDixYUOFmRC071n33XMOQiOJvs0dgtLueVtsn76GCQ%2BMufLT34%2BOA4iSAFqfTZ8GSDJm8AAibAPG%2BsIihR9yuOHBIzwm8ZDUJapHs8BtDSgTU%2Bzwg2Gns0Ej1Na3CZy0Iw3vbWV%2FfgdYKGNVGtdAyWpDUnUAJAVckaVMVNsM3eRO3kRQONFCi0nyZwQ8Xg3oIeN8KlVaVgum0qUS9B9m7KEdCj9cwl0VoFi4JbTiunUGguVm2rEChKF3Tbw1ADqSq%2FLJ9nadF9VpIFpFSQHhDvUGQ4LuVAx68xjIp4tNKaBTX2sYprvCDeXluBpkYrdyQyjAGp5PB2MeSCk7KCyeDyzbEsAVEdmty6NDoz%2BKxeDgN1fFcXBhR8nn3EeW4T2suFEdDfby42HBztKOCJWT1EfWcJ%2FqBsnvZjORVDCoCBk%2FesKa9naHqiYsQxHABzy47Onn3%2Fk4ekiPv4KzYoqQ3l38rxAzEQzJc1ZuxxlNJW5U1paWAy5dh2gj%2B6XCcd8Hr65CCGqTaIIbhxxQeFMLDfh8oGOqUB8a%2B%2F7KPDvlEhNl17XywrOCdm%2BUNPpxE1vbWMoB2RE%2BwLtYx9cNn0Tb%2B0htCZtCAGBNmbQM4r7mWkQFKKxgK7Jymx%2FKc1wFc604i13HuSgMqfNplEx5YIOJ5Utxoo0zrkR3nfS%2BUp%2BHq8KCejkg0ZsmSPmhJVciVIrGKJP1NG%2BnelXswbuFTyUs575yFKOI6LKXU0Yamwfd2k8u8Ck5l51XgsyNYJ&X-Amz-Signature=87759bf99ef9613a1fba7a52e6e32193548e0f82940a0c628d8c6f5ad6919668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466373JK5KS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FTFORy1AHrTJ2%2FjzuIwOx3tJZ2uIqm9oPFTDogasZjAiEA%2FE11uHuwJE5J4vamq%2Bsso%2FmTzSPXv%2BvmZ8W2rh4Wcu8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ7htSptEQwcBIBk1yrcA38CP%2BhtSmZ74uCQd2NwFfIbKnLe9pt7prm%2BmeVArI5dxvryOS7Yqqm5rPKzQjD0VrMsqFa9byW7RBe6oW6OSKSEZX95mW7HT9Bnmo0bQMZDixYUOFmRC071n33XMOQiOJvs0dgtLueVtsn76GCQ%2BMufLT34%2BOA4iSAFqfTZ8GSDJm8AAibAPG%2BsIihR9yuOHBIzwm8ZDUJapHs8BtDSgTU%2Bzwg2Gns0Ej1Na3CZy0Iw3vbWV%2FfgdYKGNVGtdAyWpDUnUAJAVckaVMVNsM3eRO3kRQONFCi0nyZwQ8Xg3oIeN8KlVaVgum0qUS9B9m7KEdCj9cwl0VoFi4JbTiunUGguVm2rEChKF3Tbw1ADqSq%2FLJ9nadF9VpIFpFSQHhDvUGQ4LuVAx68xjIp4tNKaBTX2sYprvCDeXluBpkYrdyQyjAGp5PB2MeSCk7KCyeDyzbEsAVEdmty6NDoz%2BKxeDgN1fFcXBhR8nn3EeW4T2suFEdDfby42HBztKOCJWT1EfWcJ%2FqBsnvZjORVDCoCBk%2FesKa9naHqiYsQxHABzy47Onn3%2Fk4ekiPv4KzYoqQ3l38rxAzEQzJc1ZuxxlNJW5U1paWAy5dh2gj%2B6XCcd8Hr65CCGqTaIIbhxxQeFMLDfh8oGOqUB8a%2B%2F7KPDvlEhNl17XywrOCdm%2BUNPpxE1vbWMoB2RE%2BwLtYx9cNn0Tb%2B0htCZtCAGBNmbQM4r7mWkQFKKxgK7Jymx%2FKc1wFc604i13HuSgMqfNplEx5YIOJ5Utxoo0zrkR3nfS%2BUp%2BHq8KCejkg0ZsmSPmhJVciVIrGKJP1NG%2BnelXswbuFTyUs575yFKOI6LKXU0Yamwfd2k8u8Ck5l51XgsyNYJ&X-Amz-Signature=998e9995871849ad14d30029a9786763dfc303926d1d2b86de2f8e615123acdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
