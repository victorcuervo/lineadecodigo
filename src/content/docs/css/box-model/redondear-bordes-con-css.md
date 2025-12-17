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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DF6RTBM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZikbcbj5Pn5RMORrI0Xzq5XuUrtMU%2F5yd8%2FziUz7fPAiBdtfCVjKPdLhxRnzoKu%2BLghBes90pZOdIn%2BgSQD2QtjyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2BGngJauQJUB2LRUKtwDvLOCSgYWEOHsx9NjHjZ2CDlEO76G296dtMYAPwta%2Bqd6pBPBPf30A0hpJBj19TGD5fsnocGYcHKGx9BF9Ce3Dbqm2Ee4yPjoELuLrf4l9x6iL4fq2vT761mPlzXHXRSJRJHlZl6VXGKzf1kCbMabdRVNa4X0cYmnuUBk0kaLKyWAAiIAeZGXZMfejCFg%2FyIcP0mQkO%2BkB6VEM08ZwwgbVzTzh6kFoLnwBO6C0eABUWqq4KYRedZUdNK1gOOY28rokb0f2vCh31WljbPyWu8yoUC0o7pwhFxX1lAXsmxgDz5oI9m%2B2%2B4PfLgDjBdyvfnaKIRMKU1zvuaCpZOFh8jKb1h8QNoDL%2FK%2Bz8y%2FGqdL6F44Tfz9jKX51Cz3ZguAyxfkbvbvyc0whVUmoGaXowMtGH8B6Sepmr9Qe5wTgTAT5ObhmpBJAOkXLKhpZ7My1jpX9z9WDm2WAC1xb%2FHY9izsEbRbpA%2BGr%2BVktwmLM5j4qXhnTgVI6%2BNMaFNngiG1lA3QSFaHkjETEknUnRjev%2Fc599fokNXf0sAXEfEAasn57UU5y7yXQUB4Fdc4FJGQimecXRBOZWb7OPKNJ%2F9hcWzhbHIsdjPwuQqUOwlQI5vAIZorL%2B9mWa4vQJS9%2FE0w%2Fp6LygY6pgHtb68omByLi1Qabft7Rc7G0nTQbn9N%2BwwOalxlwvhI78mvxsYcdUcf8Q%2BRUJKuBk0Ns6rsrbibPxgwz8GYR7E3irnmwlpdxKqs3XM4YFgoYhI1DsE6nMlisjKMuI1B7mDhDlBKb3SBm7hPkHrQVVsrS7COVgvQRQse8T9ljaJ%2BEZCWWYRM0NgWpFDxjoKZILmdiTgBeFdeukdYfrIcwapLHFTDRVEb&X-Amz-Signature=5141fdc164a2995d31bc478dfec731441b21fa2a29d18cd9876d662f231a9895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DF6RTBM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZikbcbj5Pn5RMORrI0Xzq5XuUrtMU%2F5yd8%2FziUz7fPAiBdtfCVjKPdLhxRnzoKu%2BLghBes90pZOdIn%2BgSQD2QtjyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2BGngJauQJUB2LRUKtwDvLOCSgYWEOHsx9NjHjZ2CDlEO76G296dtMYAPwta%2Bqd6pBPBPf30A0hpJBj19TGD5fsnocGYcHKGx9BF9Ce3Dbqm2Ee4yPjoELuLrf4l9x6iL4fq2vT761mPlzXHXRSJRJHlZl6VXGKzf1kCbMabdRVNa4X0cYmnuUBk0kaLKyWAAiIAeZGXZMfejCFg%2FyIcP0mQkO%2BkB6VEM08ZwwgbVzTzh6kFoLnwBO6C0eABUWqq4KYRedZUdNK1gOOY28rokb0f2vCh31WljbPyWu8yoUC0o7pwhFxX1lAXsmxgDz5oI9m%2B2%2B4PfLgDjBdyvfnaKIRMKU1zvuaCpZOFh8jKb1h8QNoDL%2FK%2Bz8y%2FGqdL6F44Tfz9jKX51Cz3ZguAyxfkbvbvyc0whVUmoGaXowMtGH8B6Sepmr9Qe5wTgTAT5ObhmpBJAOkXLKhpZ7My1jpX9z9WDm2WAC1xb%2FHY9izsEbRbpA%2BGr%2BVktwmLM5j4qXhnTgVI6%2BNMaFNngiG1lA3QSFaHkjETEknUnRjev%2Fc599fokNXf0sAXEfEAasn57UU5y7yXQUB4Fdc4FJGQimecXRBOZWb7OPKNJ%2F9hcWzhbHIsdjPwuQqUOwlQI5vAIZorL%2B9mWa4vQJS9%2FE0w%2Fp6LygY6pgHtb68omByLi1Qabft7Rc7G0nTQbn9N%2BwwOalxlwvhI78mvxsYcdUcf8Q%2BRUJKuBk0Ns6rsrbibPxgwz8GYR7E3irnmwlpdxKqs3XM4YFgoYhI1DsE6nMlisjKMuI1B7mDhDlBKb3SBm7hPkHrQVVsrS7COVgvQRQse8T9ljaJ%2BEZCWWYRM0NgWpFDxjoKZILmdiTgBeFdeukdYfrIcwapLHFTDRVEb&X-Amz-Signature=2700d8aa498e9411ebea1a3d97ce990ae526f436753c27601890744ef68ba049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
