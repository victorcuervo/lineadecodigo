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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7QNL2R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEInG17CPM1vQms7%2BFm90u7lY2PVJX8wXREqoRTMzDO3AiAgGPVx0akSjZmgq18vLWKyokL5efLLRLdPV3zwmUexXCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrP3pHbuq8PtbyjNvKtwDgArRTwRMxIdClIERiUcdJAXxJQGJAlz2Akg4BjlRFt3wFDF8NTRPFQhq0FfxabBvRR0xzE6yNQGzXmhVu%2FY6c7PmpyMl1fRKIRHcw467ViDns49WzNiIeJcooRXq6nLht1s21eC2ECBPLclpInxVenCrGHsBfQdmLHbbYjY%2B1M%2BsG7UMCXnzL%2FT0otARM0TjGeutCoAKbxNlumMPdx6u3WTyQ0bVLvL57nXHcYRGakb%2FPE1Ju9OMJcQ8kwdMXbch00Uju0AQEZIfKgK9eOh07i9BIC1829lq76CiwzhcNLK2A%2F9CAs%2BcICGP4cO8SNVk34KOmGy28jHbYHyvwm8IfCaVS81GwfOmKz5%2Fzt5wlfWvpU0ILSFQde8uR7RYXysdhvS6vQrUsFg810PneapFnBGilQsDnrcCsVYXP1N2P47yf%2BbU4kCsWc%2BXpj%2BWdc6Bbu1tYJ%2BZ6XVkXPjB4PQ1FgL4W1qXXIuUVLiItzGQeGBU1FBj66hQwz%2BH9iycTQbd8WpUzMtuC%2F4bOfDREjRbD4Wdc3AO56w0H9deEa%2Bn0mGcHEue1Cq2FaUAyvuOtJCqsKE1o%2BqSdRj%2B9JoNpQ6CpkLPOxyH9q8GocYFtbq1%2FPYWSZ%2FXlLQXo1fSV%2Bwwsd7OyQY6pgHGLalCgx1YtRO0H7ZrTL1MpgCahMhXVypl9qxJglmlkP%2FsnY%2BMOt%2Fp8EPcRFabrSImEiyrnUgtE4KI989X0CieLPTUXgDbAst%2F5%2Fsw5C87odkMBCTxJxjSQG81doe6jh5TGgxmD4pT0tQQe%2FNMreO0%2BH%2FLlQOAfCNm6ffgyhllBvOAMY8vHoFHzCqtQpRxQ7bwyc4VbQ9tybedaleIIUcIEnSaqrJ%2B&X-Amz-Signature=272f992be17ebbd3a277e05be898908eaa0ef4630545c42eefadc53d8a93a0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7QNL2R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEInG17CPM1vQms7%2BFm90u7lY2PVJX8wXREqoRTMzDO3AiAgGPVx0akSjZmgq18vLWKyokL5efLLRLdPV3zwmUexXCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrP3pHbuq8PtbyjNvKtwDgArRTwRMxIdClIERiUcdJAXxJQGJAlz2Akg4BjlRFt3wFDF8NTRPFQhq0FfxabBvRR0xzE6yNQGzXmhVu%2FY6c7PmpyMl1fRKIRHcw467ViDns49WzNiIeJcooRXq6nLht1s21eC2ECBPLclpInxVenCrGHsBfQdmLHbbYjY%2B1M%2BsG7UMCXnzL%2FT0otARM0TjGeutCoAKbxNlumMPdx6u3WTyQ0bVLvL57nXHcYRGakb%2FPE1Ju9OMJcQ8kwdMXbch00Uju0AQEZIfKgK9eOh07i9BIC1829lq76CiwzhcNLK2A%2F9CAs%2BcICGP4cO8SNVk34KOmGy28jHbYHyvwm8IfCaVS81GwfOmKz5%2Fzt5wlfWvpU0ILSFQde8uR7RYXysdhvS6vQrUsFg810PneapFnBGilQsDnrcCsVYXP1N2P47yf%2BbU4kCsWc%2BXpj%2BWdc6Bbu1tYJ%2BZ6XVkXPjB4PQ1FgL4W1qXXIuUVLiItzGQeGBU1FBj66hQwz%2BH9iycTQbd8WpUzMtuC%2F4bOfDREjRbD4Wdc3AO56w0H9deEa%2Bn0mGcHEue1Cq2FaUAyvuOtJCqsKE1o%2BqSdRj%2B9JoNpQ6CpkLPOxyH9q8GocYFtbq1%2FPYWSZ%2FXlLQXo1fSV%2Bwwsd7OyQY6pgHGLalCgx1YtRO0H7ZrTL1MpgCahMhXVypl9qxJglmlkP%2FsnY%2BMOt%2Fp8EPcRFabrSImEiyrnUgtE4KI989X0CieLPTUXgDbAst%2F5%2Fsw5C87odkMBCTxJxjSQG81doe6jh5TGgxmD4pT0tQQe%2FNMreO0%2BH%2FLlQOAfCNm6ffgyhllBvOAMY8vHoFHzCqtQpRxQ7bwyc4VbQ9tybedaleIIUcIEnSaqrJ%2B&X-Amz-Signature=687f545591bb2918547fed53db23cd2399fddd5e8c6066f7a25166ea0bf78cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
