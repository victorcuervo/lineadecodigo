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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SUZNVW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC0PzCOcVFJIFfqe8XmdyPpGYC4EuRHBs%2FCvXjgVC%2BRgIhAMf%2F4LHOIPygRJWh0WrcItcnvIsYS1sd0lEM8oGt%2FDHsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhaPuNuHSEs30cMz4q3AM0%2FnLtTKdk8mw2kgrsnOPJIoTZ6kGU809z6TnBnHjie5uAdCDDZT%2BRHIFUpaTuHkPRJ9jlX%2F4ybWh0xHoiZqbw4tNGqXG80o2%2BlkE2MK5Q8O9tUMowapQt1jcfZWiAuMudkReeHnnDca2t9Ck%2B8A6aLvt4zKBNmfZhqXVy48q9QxVeZ11BMENx5%2BGtpC1VtgufdXRBTIbTVA0TGgu6G34mVJshM3Nf%2BHuO%2BxB198jg0iOwy3WWCYlhievxq%2FiKo5IYsBf4QcmvVeP8I9VQMLi6c0qftzPxwBaCxfSSylOaJXTwiruural%2F1IXZBRHAaxf3bgXaTXPjSyMFlmV3jNX%2Br5B%2Flx7iECG6bMzrNMvN1nw89salRGcNqHaBjP9qWOI8%2FUcfjnu3WSoO96I8N1dkGkeysuVrcI4agpQXIElhQW6aWqcysOiCpuaHZ5cm1OhheQ9UpHAjccdoL%2F6t8v7gIL6AV8T1p%2FFGJUDijhTLDuIGeGbSxQFeZIbMsWM4xO9NuhweehuZJ%2FULxDAvOwNXCzPA7KufFxK4HDOJ8hYav1bW8sAowK46BIQAQ1ZZAishwQFu5%2BCmaupScI%2Fh2yze9TjlLJRRGCtaDg%2FX6kd6NQHjdmz7U0yM7SKMWzCZodjJBjqkAd1%2BfhI8S5vMN%2F%2Bj%2F17nHOKuFoKogMO1mQBp7BCNP0VZBwm2R5%2FKjlKPQvLzLA7X%2FKVQqbxk1%2FzkCOuw1lj1FiX44vDwpiRzJ7VDUaXG%2FeBcufjapquSc1Y0szA5AhVK9C3tTyNzWxDqtOmUoizLgmgjdP3PGRBho3bSNq1CUh9%2Blh9wJa%2BLfE%2F3qc4oDH6i5VNEaFEXm2IDZfhsqVm27jITJo6A&X-Amz-Signature=8d219093377d38e464a7d3efadad1d6847c344927fb89231277fde0d4400ad30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SUZNVW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC0PzCOcVFJIFfqe8XmdyPpGYC4EuRHBs%2FCvXjgVC%2BRgIhAMf%2F4LHOIPygRJWh0WrcItcnvIsYS1sd0lEM8oGt%2FDHsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhaPuNuHSEs30cMz4q3AM0%2FnLtTKdk8mw2kgrsnOPJIoTZ6kGU809z6TnBnHjie5uAdCDDZT%2BRHIFUpaTuHkPRJ9jlX%2F4ybWh0xHoiZqbw4tNGqXG80o2%2BlkE2MK5Q8O9tUMowapQt1jcfZWiAuMudkReeHnnDca2t9Ck%2B8A6aLvt4zKBNmfZhqXVy48q9QxVeZ11BMENx5%2BGtpC1VtgufdXRBTIbTVA0TGgu6G34mVJshM3Nf%2BHuO%2BxB198jg0iOwy3WWCYlhievxq%2FiKo5IYsBf4QcmvVeP8I9VQMLi6c0qftzPxwBaCxfSSylOaJXTwiruural%2F1IXZBRHAaxf3bgXaTXPjSyMFlmV3jNX%2Br5B%2Flx7iECG6bMzrNMvN1nw89salRGcNqHaBjP9qWOI8%2FUcfjnu3WSoO96I8N1dkGkeysuVrcI4agpQXIElhQW6aWqcysOiCpuaHZ5cm1OhheQ9UpHAjccdoL%2F6t8v7gIL6AV8T1p%2FFGJUDijhTLDuIGeGbSxQFeZIbMsWM4xO9NuhweehuZJ%2FULxDAvOwNXCzPA7KufFxK4HDOJ8hYav1bW8sAowK46BIQAQ1ZZAishwQFu5%2BCmaupScI%2Fh2yze9TjlLJRRGCtaDg%2FX6kd6NQHjdmz7U0yM7SKMWzCZodjJBjqkAd1%2BfhI8S5vMN%2F%2Bj%2F17nHOKuFoKogMO1mQBp7BCNP0VZBwm2R5%2FKjlKPQvLzLA7X%2FKVQqbxk1%2FzkCOuw1lj1FiX44vDwpiRzJ7VDUaXG%2FeBcufjapquSc1Y0szA5AhVK9C3tTyNzWxDqtOmUoizLgmgjdP3PGRBho3bSNq1CUh9%2Blh9wJa%2BLfE%2F3qc4oDH6i5VNEaFEXm2IDZfhsqVm27jITJo6A&X-Amz-Signature=c3a5c7db80f64a24177de66522a136161914373bc0054c27c84596621a91dc6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
