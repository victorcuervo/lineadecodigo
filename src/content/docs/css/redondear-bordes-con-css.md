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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666II7BQ6X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFMLldI5p3OmZHV1cLTSCS1%2BD9tX03OL4qLscEWb%2BrMAiEA37sz8Jjp1kz7MzAiU97yuah4NPxYxNLyKtIrRXJBbAAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEykmdf43cByrZLvmyrcA937GAMXLTBhoXoj6%2FtKtfx3AnCRauttMdoVSapbUXdlfd9YYzokZ3NAWtNs9vOqYVll2b%2BPcQMTcdkM7dWr0j990w7J97kH9Bk4pUdo%2FeiE5FFRPByt8dZn%2FOi%2BIGwFkfoTa1IlLf3A%2Fy%2F5pSpPQvtZsNl6ZNNZ9oeqzTrh9U75X%2B7SSs%2FA8oLIXu4jSi7C58uT4xx2QQUfSt2ixWwr5lxC6FMSz%2FapA6Z%2Bj5wKcvneBCcpWNfKnl1cGjRJHGTFj%2Fpj5KnPvqtKqMTHoBKTmou9OkEVMJshScNYEmMRE34bKCTzukm1CWK54a8tQh4MzHjYC7v1hs4BE6V1lz4F8bE0B2YWJ4wHBylRW9PfEL%2FWF6Me1p61M%2F3kh5AN8a9UpcuFKh1IQO1B8ZKevkPHZD3QsXo70xQ04EVV0ZBn7BljtqEudgrDDBa2m17pArgzZb58gM9FdH9u3VskFsXVDoOzTUQKOIyTXBg6N9xcCBUy7Kd3Coa%2Fhfn0Yujb4xcejFz1kNi3L5qm8%2BG9JLgf%2B7WoR5LnQfXPP5a%2FlzJOKLqBuwtSNiPe7gHrnIgifycfPRfUh6H1Q%2BICv19xw4ToWmhNwtyx5gk4YlbIF05fPprRrhE9uNb4R6Zu%2Fa0UMJ7iy8kGOqUB%2B9PpU3dPMslsphtpenq93CQMGs71sJ%2FVhuXZgq9eyOJ57trCv6NrhI8BKF1pOLnY9kHAyZ%2BzeLPq5dZwjOP7Ne8dt7a9VldvncMqVk2EAflMHs0lOtXKoJ6vTs8zU%2FqhFtOGYuAcGCce14LgkLT881t48qjwRTXgZPzA2FxJXbkhRzCVwwkLhbGzAPzVdb8myU7CF6C%2BBGvpX8m2la6%2BVd9S%2F7%2B7&X-Amz-Signature=f5a593a344892195cb65d999c828c0ac58365b39065580b7f8edbd45bdf73570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666II7BQ6X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFMLldI5p3OmZHV1cLTSCS1%2BD9tX03OL4qLscEWb%2BrMAiEA37sz8Jjp1kz7MzAiU97yuah4NPxYxNLyKtIrRXJBbAAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEykmdf43cByrZLvmyrcA937GAMXLTBhoXoj6%2FtKtfx3AnCRauttMdoVSapbUXdlfd9YYzokZ3NAWtNs9vOqYVll2b%2BPcQMTcdkM7dWr0j990w7J97kH9Bk4pUdo%2FeiE5FFRPByt8dZn%2FOi%2BIGwFkfoTa1IlLf3A%2Fy%2F5pSpPQvtZsNl6ZNNZ9oeqzTrh9U75X%2B7SSs%2FA8oLIXu4jSi7C58uT4xx2QQUfSt2ixWwr5lxC6FMSz%2FapA6Z%2Bj5wKcvneBCcpWNfKnl1cGjRJHGTFj%2Fpj5KnPvqtKqMTHoBKTmou9OkEVMJshScNYEmMRE34bKCTzukm1CWK54a8tQh4MzHjYC7v1hs4BE6V1lz4F8bE0B2YWJ4wHBylRW9PfEL%2FWF6Me1p61M%2F3kh5AN8a9UpcuFKh1IQO1B8ZKevkPHZD3QsXo70xQ04EVV0ZBn7BljtqEudgrDDBa2m17pArgzZb58gM9FdH9u3VskFsXVDoOzTUQKOIyTXBg6N9xcCBUy7Kd3Coa%2Fhfn0Yujb4xcejFz1kNi3L5qm8%2BG9JLgf%2B7WoR5LnQfXPP5a%2FlzJOKLqBuwtSNiPe7gHrnIgifycfPRfUh6H1Q%2BICv19xw4ToWmhNwtyx5gk4YlbIF05fPprRrhE9uNb4R6Zu%2Fa0UMJ7iy8kGOqUB%2B9PpU3dPMslsphtpenq93CQMGs71sJ%2FVhuXZgq9eyOJ57trCv6NrhI8BKF1pOLnY9kHAyZ%2BzeLPq5dZwjOP7Ne8dt7a9VldvncMqVk2EAflMHs0lOtXKoJ6vTs8zU%2FqhFtOGYuAcGCce14LgkLT881t48qjwRTXgZPzA2FxJXbkhRzCVwwkLhbGzAPzVdb8myU7CF6C%2BBGvpX8m2la6%2BVd9S%2F7%2B7&X-Amz-Signature=db6a3bb0ad7ac1d456edc2a4fbfd73073e44aeb0179805386ebb5a7c6a6b0cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
