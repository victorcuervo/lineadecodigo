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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZFEUN4X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWtN%2FdQV4VlIjAh8tb5svT0jIYkeBrPEesYoutNfuEvAiEA6dqCHcQTsxQqhfwW2ZPIG5%2BuIIygEcE6t7rjkLs50t4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBuxgIiT23%2FYEMspaSrcAwGie3NcRmPn%2BXAurpT1xNwjQ18l7tnmpXbKMIlE%2BTWAlDohdTNqx2gCZOM37TX36sbVHVwQafcuy%2BCJ9md45%2FXsqXlnCXBrg%2FI%2BZvi%2BDdC3F69CaFfrymcwzAtPbq%2BJ8Cp7GwFkZc2KJRzFtHLqRH5WzRtGZfOwRQ9Ojomsbl1OeWKq1W2v9OXAPs87gcLyssRIsqXaLk8LdHuYgOAbCLlvBeN%2BVfAkq0VCJwEJkEMjDWFCHl8SB8IRgjIG0q1LOezCNZuG4eS9fM5YyKakKfVlxV5bjKo0gLMNqdELZ6PRYFrx6TbpB7Z8WWdn%2FmVJnoGgpY%2BoDzkIXKSeaNnIsSYgA3roz%2FhG8bEg%2FcG%2BvcBDYZvaYfL%2B4kboD%2B%2B1kskIeqhmNwPHcOkiiaBRkX8HWRSBIQdL8A%2BkSXGr1QfqBSL443v2DMKHM68LtBNXDy0O%2FgvGyuPmINJp9pmsWt9v71PSD3yylqslGBE%2Fr9HVI2lgntro8hC9JMmgPWbocOumcAcIbV84LO36ca%2ByLSpStBS2sjScxWlQ%2BvLZ%2BKhKxSpnykzbHY26AbWWlSFETlL8ctPQp0HFRWGNbKZYRSxN5wCeMIxn3TaSm0QUNpwvRmmKYl5szS62BeirU9S6MJLxicoGOqUBYkTpXH3kM3mHaYuAFUVnUZLa8X%2FdyPeGGUVAtSSTPplHf%2BFAIt09GzVulEfrK43JpwJBSw7oaxVlJwx3oJ4mamTlF%2B5CiZHLlvLND7zI3NpGF1QDoLiRI82LDq5rWFxKDs5FlQPAQicNnbGlBsgTAKhSoUwwJQ%2BLQ%2F%2BHtBiWsd86%2F8MTvVX1AdFO3EYnzwQF71JmEa3Awu%2BttyuJkA%2FLAPVQMhgH&X-Amz-Signature=1917bffcac7c02c5f182e2660e27f883e5330775915feefa885c64000849da76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZFEUN4X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWtN%2FdQV4VlIjAh8tb5svT0jIYkeBrPEesYoutNfuEvAiEA6dqCHcQTsxQqhfwW2ZPIG5%2BuIIygEcE6t7rjkLs50t4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBuxgIiT23%2FYEMspaSrcAwGie3NcRmPn%2BXAurpT1xNwjQ18l7tnmpXbKMIlE%2BTWAlDohdTNqx2gCZOM37TX36sbVHVwQafcuy%2BCJ9md45%2FXsqXlnCXBrg%2FI%2BZvi%2BDdC3F69CaFfrymcwzAtPbq%2BJ8Cp7GwFkZc2KJRzFtHLqRH5WzRtGZfOwRQ9Ojomsbl1OeWKq1W2v9OXAPs87gcLyssRIsqXaLk8LdHuYgOAbCLlvBeN%2BVfAkq0VCJwEJkEMjDWFCHl8SB8IRgjIG0q1LOezCNZuG4eS9fM5YyKakKfVlxV5bjKo0gLMNqdELZ6PRYFrx6TbpB7Z8WWdn%2FmVJnoGgpY%2BoDzkIXKSeaNnIsSYgA3roz%2FhG8bEg%2FcG%2BvcBDYZvaYfL%2B4kboD%2B%2B1kskIeqhmNwPHcOkiiaBRkX8HWRSBIQdL8A%2BkSXGr1QfqBSL443v2DMKHM68LtBNXDy0O%2FgvGyuPmINJp9pmsWt9v71PSD3yylqslGBE%2Fr9HVI2lgntro8hC9JMmgPWbocOumcAcIbV84LO36ca%2ByLSpStBS2sjScxWlQ%2BvLZ%2BKhKxSpnykzbHY26AbWWlSFETlL8ctPQp0HFRWGNbKZYRSxN5wCeMIxn3TaSm0QUNpwvRmmKYl5szS62BeirU9S6MJLxicoGOqUBYkTpXH3kM3mHaYuAFUVnUZLa8X%2FdyPeGGUVAtSSTPplHf%2BFAIt09GzVulEfrK43JpwJBSw7oaxVlJwx3oJ4mamTlF%2B5CiZHLlvLND7zI3NpGF1QDoLiRI82LDq5rWFxKDs5FlQPAQicNnbGlBsgTAKhSoUwwJQ%2BLQ%2F%2BHtBiWsd86%2F8MTvVX1AdFO3EYnzwQF71JmEa3Awu%2BttyuJkA%2FLAPVQMhgH&X-Amz-Signature=3ab1a1be290f41677263ffbe673f2cdde39a98e0a3c04aeecf10a5cfc2fa7375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
