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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR26PMTH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtRaA3enkR3ShnliRzNKQyfe5fTIAp%2By5n6m0wQsJR4wIhAN4Jtll4s0omfZcHMIR9fyj4ooFMrHJThStaUMJh1iyhKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3J%2BWNVq0fQlftAa4q3AMRLDPIBuwhdAGN621BRxqsz9%2BYWde8Wo83SBA9YFlaU9jCDpBXWKXj%2BcjR7exbvXZ33CAKLO1lO8pn09El6yeshLYED69RfZ7NZlFqA%2BFis3h0WknNdr6KvNsy7JsJFj5IxOfM1upzrOSZCP7%2BhH%2F1UJLjUy4yxWJTUJUuyNutcEATb1YqPYous5tKIsCmKCHeAtDqQ5sIIsveTh7PFgPXmQVQDvditka0Y25U6T5OditT86jCEL3gbzXz9Ql6ovWUjBzpnBwgvdBr2qawsOwmLpLYmEbLSJJ9zKWvNTzpk7wQ7dK3I%2FOJtCzLnrhVF8U%2B%2F%2Bjo01bWrEgSJnpa9y0Vj55xMWhFXSyG7iDriagmfVoT0y9erqKck%2FhUb6GXI9EBpBhhr596OX4BxBB7PltZcgeDKGXjwEefQlaQdoKPCn8sjUA0SJ%2FNLfgv3cZQAfXfJpbwSKtLJaiEpDWbnaVXPyUiPEG2K1GBCb7L4gtOuVg5VmzEoynxiXcXHGpnTb9BdKbaNJsTRKWs7oOesUY9iwoaMKtlIXYUN33%2F5hEQa0zsJsCKhNfaLG8UAYjRQozseTjptEVkr82PB0KvgOsysb7qbhZbP1TQSJ733RmpzZF6oEv5Buv9L6DZMzCf7tjJBjqkAQB%2FU1wYOuYETcYthaazznu6OK7UXBFnzdnjERIG5yI8LvqhsWDW3glZOsEb7efSLC9dEnkOuj6NN2CKrsUKeDmFKNoscHaLpMU6nmjD2YddcdgJqAolX%2FxB%2BYXmDQhAcHHYAW4VdqaBRCqeHkcXkOZHnY8PUg2K5mzAYVjB%2BlzboF0ChsR8Y1BMpyV%2F7AfHb4kQfBODrqpJJaPQsr0wOq%2FMSWVl&X-Amz-Signature=c653d62c38b8b91a0894fd30d6f96421137d04dd6bc1c996474a5ef81c7766c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR26PMTH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtRaA3enkR3ShnliRzNKQyfe5fTIAp%2By5n6m0wQsJR4wIhAN4Jtll4s0omfZcHMIR9fyj4ooFMrHJThStaUMJh1iyhKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3J%2BWNVq0fQlftAa4q3AMRLDPIBuwhdAGN621BRxqsz9%2BYWde8Wo83SBA9YFlaU9jCDpBXWKXj%2BcjR7exbvXZ33CAKLO1lO8pn09El6yeshLYED69RfZ7NZlFqA%2BFis3h0WknNdr6KvNsy7JsJFj5IxOfM1upzrOSZCP7%2BhH%2F1UJLjUy4yxWJTUJUuyNutcEATb1YqPYous5tKIsCmKCHeAtDqQ5sIIsveTh7PFgPXmQVQDvditka0Y25U6T5OditT86jCEL3gbzXz9Ql6ovWUjBzpnBwgvdBr2qawsOwmLpLYmEbLSJJ9zKWvNTzpk7wQ7dK3I%2FOJtCzLnrhVF8U%2B%2F%2Bjo01bWrEgSJnpa9y0Vj55xMWhFXSyG7iDriagmfVoT0y9erqKck%2FhUb6GXI9EBpBhhr596OX4BxBB7PltZcgeDKGXjwEefQlaQdoKPCn8sjUA0SJ%2FNLfgv3cZQAfXfJpbwSKtLJaiEpDWbnaVXPyUiPEG2K1GBCb7L4gtOuVg5VmzEoynxiXcXHGpnTb9BdKbaNJsTRKWs7oOesUY9iwoaMKtlIXYUN33%2F5hEQa0zsJsCKhNfaLG8UAYjRQozseTjptEVkr82PB0KvgOsysb7qbhZbP1TQSJ733RmpzZF6oEv5Buv9L6DZMzCf7tjJBjqkAQB%2FU1wYOuYETcYthaazznu6OK7UXBFnzdnjERIG5yI8LvqhsWDW3glZOsEb7efSLC9dEnkOuj6NN2CKrsUKeDmFKNoscHaLpMU6nmjD2YddcdgJqAolX%2FxB%2BYXmDQhAcHHYAW4VdqaBRCqeHkcXkOZHnY8PUg2K5mzAYVjB%2BlzboF0ChsR8Y1BMpyV%2F7AfHb4kQfBODrqpJJaPQsr0wOq%2FMSWVl&X-Amz-Signature=d9aaef64ccc49cac59b0aaff007dd3748b354ca2651e428ea63faae5c592df3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
