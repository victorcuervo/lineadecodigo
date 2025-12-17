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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ75Q2YP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHiG1nqmZ2QCsWn698P4mqoKP8v9Z1XWluo9PnGbs55AiBnqq%2F%2BiaeFBNKyasKyGo86GDMQCxeusx6hUnTKWj78jir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMHsUk6aL%2FGHGTZYehKtwDCLN4veT84OT09KwCafCmJKMyi0oNXkf7CV2tEPNVaYAG7eSi4iI86zdc%2BgZXoT5H%2B1rFqCzCZry%2BxBjBQlt%2Bx2GWGP5rFT9B9NnG%2FYEOA9irQEe5v4kffX7eghWR1soIhRq62HHrzkxNkMefQ1c%2F7Oj%2B7Dk7vqHlt331k7%2FAmtgQSSXVtoE4aN%2FCkZTLDnKLU6NE5JtoDTRYDLov9e04glWX6tzunGq6WfCSIzeYLr%2F2oJZEepVZ3m4hER427bim0UkwYXyBYbcJCZVMGSJgsRIibYZhOSu1thHKIFqv2cp8CWa1BZtKb8ZO4eReKVOrFw0zwFE06RT4TgRfZm2%2FDOfORnd9tut5c4yK6ZJRY%2FYI74KjD5Q9cDHWkvVgGy9nEZ7PFzZFnMxbweD88A%2FX74ItQaAA8onumNs7Rw8MEdE%2FvbqrB29nbXB%2FjW9FK1S6GzMWRBcwG3M%2BPMfDQmVYVsTJJ65iSemOQM4flvaJtaz8KZnYiAz9nt3xmjgevl6LDhjaTkzMFp5GoRJBnMXsi5qEuFFQINUtJEFkvfp%2FkVW69xvZhH3Fk8BBxvX%2Be1MZnLeRRmTmEd0DD2wt21GQ1zm%2BgDta15FNLXHggb19EY5W0uIKi7y2K%2FNgY2Ywue%2BJygY6pgF6EBUYTnPRdP%2Bl9SdJfl0Z2rlLNEQNLmdcVwD9i08OlZnVw88%2FQCZQVQzhu9PV7PEcVOa%2B9QktqCJzKC7ovaDil8jM2ckRiyPtcmjuI0h8JEPJAx42HHL12xgU6fDgbhIbrLARx7tbALo90wa2z35aR5t0O%2BwzBwautPTtI5%2BvkQNdHkWkp%2FnM3m0l1yO1q8Xr3isjAxapX4Qcj3obYOPEbuKkPmKm&X-Amz-Signature=7e2b7dea537bc506b802867a3a26f0dd1b2636f8a18c56760aff2cae85bcc7e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ75Q2YP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHiG1nqmZ2QCsWn698P4mqoKP8v9Z1XWluo9PnGbs55AiBnqq%2F%2BiaeFBNKyasKyGo86GDMQCxeusx6hUnTKWj78jir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMHsUk6aL%2FGHGTZYehKtwDCLN4veT84OT09KwCafCmJKMyi0oNXkf7CV2tEPNVaYAG7eSi4iI86zdc%2BgZXoT5H%2B1rFqCzCZry%2BxBjBQlt%2Bx2GWGP5rFT9B9NnG%2FYEOA9irQEe5v4kffX7eghWR1soIhRq62HHrzkxNkMefQ1c%2F7Oj%2B7Dk7vqHlt331k7%2FAmtgQSSXVtoE4aN%2FCkZTLDnKLU6NE5JtoDTRYDLov9e04glWX6tzunGq6WfCSIzeYLr%2F2oJZEepVZ3m4hER427bim0UkwYXyBYbcJCZVMGSJgsRIibYZhOSu1thHKIFqv2cp8CWa1BZtKb8ZO4eReKVOrFw0zwFE06RT4TgRfZm2%2FDOfORnd9tut5c4yK6ZJRY%2FYI74KjD5Q9cDHWkvVgGy9nEZ7PFzZFnMxbweD88A%2FX74ItQaAA8onumNs7Rw8MEdE%2FvbqrB29nbXB%2FjW9FK1S6GzMWRBcwG3M%2BPMfDQmVYVsTJJ65iSemOQM4flvaJtaz8KZnYiAz9nt3xmjgevl6LDhjaTkzMFp5GoRJBnMXsi5qEuFFQINUtJEFkvfp%2FkVW69xvZhH3Fk8BBxvX%2Be1MZnLeRRmTmEd0DD2wt21GQ1zm%2BgDta15FNLXHggb19EY5W0uIKi7y2K%2FNgY2Ywue%2BJygY6pgF6EBUYTnPRdP%2Bl9SdJfl0Z2rlLNEQNLmdcVwD9i08OlZnVw88%2FQCZQVQzhu9PV7PEcVOa%2B9QktqCJzKC7ovaDil8jM2ckRiyPtcmjuI0h8JEPJAx42HHL12xgU6fDgbhIbrLARx7tbALo90wa2z35aR5t0O%2BwzBwautPTtI5%2BvkQNdHkWkp%2FnM3m0l1yO1q8Xr3isjAxapX4Qcj3obYOPEbuKkPmKm&X-Amz-Signature=de961c1fb5b4910dca263294c7d8aa0c20552370de4d7116a87a9cbd71c4e4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
