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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KS7T4P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0la4dVD%2BGFc71xf7zSubu%2FJfbN5RingXC81QAxp9mUCIQCSzhDF8qbKaQL6935ep2B0bWSvYbLnj3TVV3P9UlOR9Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM0BR39hY6GJM0AhRQKtwDe%2BUGj3ftBGnciZEVHBIyNgobo%2Fl%2BRuL9BSchgjhudLDQuk22G420Wll%2FIA1MddaXLhap439YKzwqRJ5VcFTIMh6O32DQ6CfWL4Dn313AT3J9IFeI7PNTHhVpb1LNjNl38mQKFolHn9hSg6uprAwPQ4mZhE9u0kGgnEUNejwy8u9UMuIAFqJuP0BK%2FErBE%2FhRcQJYNUKL9D4XWSFYFH%2FgERLw83Zqms494wd%2BhitIJFHJn9Webz4%2BzB6FBfLdDMr%2FC1Zbmk9qzYGOWEEqhZM3J1Uvn0jqw2pQd5e4TS8vT3hSZdZZTx%2BTYLklsGTdbvAtOtP4AVfB201a%2BY3nQpfVH1uVdgUa1f85XqqttETFtyaIHq3z51FxPfYLSvU%2BcjpUsCID67EKGoy8jGhgUGnr3cUJFXl6yc9ngJbCM%2FhqwFbrX222clXfOkatddPVeZ61Ku6ZBY2kOlSSnZ35XaX8mmHz0O8miJ8QuGB5xwpi%2BHeykTl1MJPyTPMQzFC3ve%2BjIguXvqUXFGa5SHjjr9%2Bl5ZWQBYdKwPurUGmgeH6KBdmqwhcrg2Rd%2BpwAg9vDZX7G7aospaXA61PQE%2FPPLyBK0I8bPqtgwmvnb15YOCizmf9JKgbwH1NXzY4JyFgwz67JyQY6pgFviTVFur797GF%2FSOp7F0zf2GLcLIXMBqyFFryLiL1DOREUXFQmNF%2FRW89QN7Af5c2j7y9CDjb0YrAJ1NELLGfIV%2FdW5VY5MczXi6sZgBz6cLLXXMZovAOFEHei8h%2BmTAAJRAJDENXsXx4gmHFswI9WO6oyl3w9EICH5ZEiaYWvqO4F70C4CQpoOlOBKqoUTfbvcZ4NymYHAnahR5Jhq9ulL1lW%2BN3B&X-Amz-Signature=d63aa0f1305cf506bc4300124986ff1115fea0c20d760c72e6db0085a60c0613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KS7T4P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0la4dVD%2BGFc71xf7zSubu%2FJfbN5RingXC81QAxp9mUCIQCSzhDF8qbKaQL6935ep2B0bWSvYbLnj3TVV3P9UlOR9Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM0BR39hY6GJM0AhRQKtwDe%2BUGj3ftBGnciZEVHBIyNgobo%2Fl%2BRuL9BSchgjhudLDQuk22G420Wll%2FIA1MddaXLhap439YKzwqRJ5VcFTIMh6O32DQ6CfWL4Dn313AT3J9IFeI7PNTHhVpb1LNjNl38mQKFolHn9hSg6uprAwPQ4mZhE9u0kGgnEUNejwy8u9UMuIAFqJuP0BK%2FErBE%2FhRcQJYNUKL9D4XWSFYFH%2FgERLw83Zqms494wd%2BhitIJFHJn9Webz4%2BzB6FBfLdDMr%2FC1Zbmk9qzYGOWEEqhZM3J1Uvn0jqw2pQd5e4TS8vT3hSZdZZTx%2BTYLklsGTdbvAtOtP4AVfB201a%2BY3nQpfVH1uVdgUa1f85XqqttETFtyaIHq3z51FxPfYLSvU%2BcjpUsCID67EKGoy8jGhgUGnr3cUJFXl6yc9ngJbCM%2FhqwFbrX222clXfOkatddPVeZ61Ku6ZBY2kOlSSnZ35XaX8mmHz0O8miJ8QuGB5xwpi%2BHeykTl1MJPyTPMQzFC3ve%2BjIguXvqUXFGa5SHjjr9%2Bl5ZWQBYdKwPurUGmgeH6KBdmqwhcrg2Rd%2BpwAg9vDZX7G7aospaXA61PQE%2FPPLyBK0I8bPqtgwmvnb15YOCizmf9JKgbwH1NXzY4JyFgwz67JyQY6pgFviTVFur797GF%2FSOp7F0zf2GLcLIXMBqyFFryLiL1DOREUXFQmNF%2FRW89QN7Af5c2j7y9CDjb0YrAJ1NELLGfIV%2FdW5VY5MczXi6sZgBz6cLLXXMZovAOFEHei8h%2BmTAAJRAJDENXsXx4gmHFswI9WO6oyl3w9EICH5ZEiaYWvqO4F70C4CQpoOlOBKqoUTfbvcZ4NymYHAnahR5Jhq9ulL1lW%2BN3B&X-Amz-Signature=452c2ce1c7b18c6770846a9b79e517585208fcbd566cd493bbdbef6db688e880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
