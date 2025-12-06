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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3TNUPUM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyqpjqJKB%2FFfxxuEh6Y9EJ7Hj4jfJH9fdQzI66HD%2FRVwIhANHkFnGdDa47trAhgz5xSoN%2BuiOOTNgDA%2FbQoQkOMyabKv8DCHUQABoMNjM3NDIzMTgzODA1IgxxZ7LjcwAMPdq7jYYq3APwC6ggiOVwwaifREN%2F8ciSVqfos4UtOU93ypWYefj8hEgNn5ga5f2RinTN0WdxlCMewUKpjlpdRaOvkvcWP5EXEK3PosZIkIkgpRZga3OX6%2FGtMUwlE%2Fdf7Q4Xmlntk128v55Ia73QiNB32KEPStm%2BehFq3HGyy3jkURWr9zZFyRnkXQM6I2OiycIgsjdHb9cnhf69QrKa226%2BT17Hoyzgg8Z0EqlRgSt%2BTPRWpXX1JuC9OvOI4IgUMhT4VNuSIBgrdgFKdYfD3ztw%2FnECEo%2BEpFdpqpjnNzJ%2BihDKLBcxSwzYEu8H7BK0hgHV0jNB713H92h14hs2mtDMT2mNZhptp7RE6UhmG2oqt7r9gmMuZG6bbej%2BtMwFCF9Mfks%2B0zyGVMXPajcI8kO5Y8pqlMvIvRu4t%2BBcq64fNmjtsIdbm0%2B5bGVON7SLLiLrP0clGWgnjVzCy4Mk01ChE%2FON2Um0wsNQ02w6oPwPS9hB74PQSs%2FXga0%2BU4uvK2i8oeI15JPVXjr4Jn6%2B9vRI4z0zMCv9phCfUFAyweB38LV4Zk3qnCyjEEa5xX93%2BeWFwTEr98ksiY%2BByLQnE%2FhexeSNEBe2D3EmzOxCuxtyhvKuT%2FyTNF42dSK%2B%2BG9rtRHNHTCmptDJBjqkAb5Yx8vm4TRb1JDMiE5Wr8se0PdGhjAKgr%2B0vjBcNi5fhmY6ZNuKGfjdAlRRd3NU9spw75A6C69dDs7g6PAxAwH9ln6JS1IHzWSwJw9CI4vfKcFOB47jrKkBFbKrpUZ1Wd30aK%2BUSnrE43Xs4ctGHdsqihE3WErfw7oMNC8fH9b3UkPPrLiApJsR%2BVreNEdcqCD0JzZ2QWvf2EZSUAZ2ywO%2BQU3V&X-Amz-Signature=ac18882b8e27541f1dc42da4534b6a618ef15b906e575c8ae68366e7b98cd940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3TNUPUM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyqpjqJKB%2FFfxxuEh6Y9EJ7Hj4jfJH9fdQzI66HD%2FRVwIhANHkFnGdDa47trAhgz5xSoN%2BuiOOTNgDA%2FbQoQkOMyabKv8DCHUQABoMNjM3NDIzMTgzODA1IgxxZ7LjcwAMPdq7jYYq3APwC6ggiOVwwaifREN%2F8ciSVqfos4UtOU93ypWYefj8hEgNn5ga5f2RinTN0WdxlCMewUKpjlpdRaOvkvcWP5EXEK3PosZIkIkgpRZga3OX6%2FGtMUwlE%2Fdf7Q4Xmlntk128v55Ia73QiNB32KEPStm%2BehFq3HGyy3jkURWr9zZFyRnkXQM6I2OiycIgsjdHb9cnhf69QrKa226%2BT17Hoyzgg8Z0EqlRgSt%2BTPRWpXX1JuC9OvOI4IgUMhT4VNuSIBgrdgFKdYfD3ztw%2FnECEo%2BEpFdpqpjnNzJ%2BihDKLBcxSwzYEu8H7BK0hgHV0jNB713H92h14hs2mtDMT2mNZhptp7RE6UhmG2oqt7r9gmMuZG6bbej%2BtMwFCF9Mfks%2B0zyGVMXPajcI8kO5Y8pqlMvIvRu4t%2BBcq64fNmjtsIdbm0%2B5bGVON7SLLiLrP0clGWgnjVzCy4Mk01ChE%2FON2Um0wsNQ02w6oPwPS9hB74PQSs%2FXga0%2BU4uvK2i8oeI15JPVXjr4Jn6%2B9vRI4z0zMCv9phCfUFAyweB38LV4Zk3qnCyjEEa5xX93%2BeWFwTEr98ksiY%2BByLQnE%2FhexeSNEBe2D3EmzOxCuxtyhvKuT%2FyTNF42dSK%2B%2BG9rtRHNHTCmptDJBjqkAb5Yx8vm4TRb1JDMiE5Wr8se0PdGhjAKgr%2B0vjBcNi5fhmY6ZNuKGfjdAlRRd3NU9spw75A6C69dDs7g6PAxAwH9ln6JS1IHzWSwJw9CI4vfKcFOB47jrKkBFbKrpUZ1Wd30aK%2BUSnrE43Xs4ctGHdsqihE3WErfw7oMNC8fH9b3UkPPrLiApJsR%2BVreNEdcqCD0JzZ2QWvf2EZSUAZ2ywO%2BQU3V&X-Amz-Signature=52b1b06f7948bdd723a461afac21d112b62704d9aa5a9ada17a6dc6725379f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
