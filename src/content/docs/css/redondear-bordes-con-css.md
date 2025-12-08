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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TRHHLET%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBfwMHGsj42Q7Zc4Cx%2FRaDJWYSuYsV4wfwy%2FLMlW5K3AiEAi0BBGNA643xI1WkdxF4Jkt%2BSGZKV13kcIH8kPetfZIoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgYjS334Fr3xLmS%2BircA1L2c0xHe%2BGLdeuDhh8Vmcoh%2B8OZKTowExSkN0SPHIsVB7OVzELCcU5g0hNwPHUSuqq%2B%2FA74KR59CJmFW2JDbwlUsK3UBGA0VUgK%2BK6d1QJX0do1Qf6EuKhWD4oPH3xBuPm7FAlkTl%2Bthu7ipFjs5enKMJ3acuKDZtFQeZfebulfvgyz5IxSSgpZnYlJkpMzm4TSzi6nrIBAV%2FcDt0JNemG3AuoxFAKrE7HyfMQM5ip15sdrhO1o8pnmhYNRXKWierEUvXHZ7Oa8euFlvNIePZ3YFUVCqu9wLyKTi0DHAACwa2e56kaToI80i4tTKmRQHEzbga6hLwYjKtze0XUL20EkJRvN3AXjZCUZfa8TpONH9qEwB%2FrHJPQpj44ye7myATDdE7%2Bb04sboTra71HJm5ghP1z9LvIQtA4W0A0Wt%2BCTB0XcoA6ZLls49KfXe2phqbo2vqm%2F9IqnFMJB%2Bkh5PLUNKdX%2FQYziiRC%2Bepxn4IQahdfkF3xPXWetbrEBWFiqMeTbNTrhP0U9y%2Braw1qLTP4fCeV2s55VxZDceNP5mAo8A1M9f0bEMg3LxiguESAdZWWTJx4Mf8EpQX%2BhNtwDIHZapGn7pBrCl0He%2BVy9Y1HbyJpLrzDx45W2UTLaMOGH3MkGOqUBoxre7HTlzDodRi5tz6ez3CnmbO2qzGmO1ZO1dkDY%2Bibq1E7lIlDY9NayZ5PABWZ7Bi6JUA1mP8HJxCfZ7HPjnwyPpPeUc8%2BqDtkTf1dFdsigV6Qay5hhp2n8E7fjRwBByccZbG2E9YN8Bzx0B8pJtPH4%2B3jYbxamOnsN0NhL14xCj0M3h22eiXAkdEjk3k0km8POyOC8lkqArgOeF17qSuBnVVck&X-Amz-Signature=f86492e4a5b624a4c03bb2662fe87e79c9a16ce5358ca4cffc2c4571bc36b8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TRHHLET%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBfwMHGsj42Q7Zc4Cx%2FRaDJWYSuYsV4wfwy%2FLMlW5K3AiEAi0BBGNA643xI1WkdxF4Jkt%2BSGZKV13kcIH8kPetfZIoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgYjS334Fr3xLmS%2BircA1L2c0xHe%2BGLdeuDhh8Vmcoh%2B8OZKTowExSkN0SPHIsVB7OVzELCcU5g0hNwPHUSuqq%2B%2FA74KR59CJmFW2JDbwlUsK3UBGA0VUgK%2BK6d1QJX0do1Qf6EuKhWD4oPH3xBuPm7FAlkTl%2Bthu7ipFjs5enKMJ3acuKDZtFQeZfebulfvgyz5IxSSgpZnYlJkpMzm4TSzi6nrIBAV%2FcDt0JNemG3AuoxFAKrE7HyfMQM5ip15sdrhO1o8pnmhYNRXKWierEUvXHZ7Oa8euFlvNIePZ3YFUVCqu9wLyKTi0DHAACwa2e56kaToI80i4tTKmRQHEzbga6hLwYjKtze0XUL20EkJRvN3AXjZCUZfa8TpONH9qEwB%2FrHJPQpj44ye7myATDdE7%2Bb04sboTra71HJm5ghP1z9LvIQtA4W0A0Wt%2BCTB0XcoA6ZLls49KfXe2phqbo2vqm%2F9IqnFMJB%2Bkh5PLUNKdX%2FQYziiRC%2Bepxn4IQahdfkF3xPXWetbrEBWFiqMeTbNTrhP0U9y%2Braw1qLTP4fCeV2s55VxZDceNP5mAo8A1M9f0bEMg3LxiguESAdZWWTJx4Mf8EpQX%2BhNtwDIHZapGn7pBrCl0He%2BVy9Y1HbyJpLrzDx45W2UTLaMOGH3MkGOqUBoxre7HTlzDodRi5tz6ez3CnmbO2qzGmO1ZO1dkDY%2Bibq1E7lIlDY9NayZ5PABWZ7Bi6JUA1mP8HJxCfZ7HPjnwyPpPeUc8%2BqDtkTf1dFdsigV6Qay5hhp2n8E7fjRwBByccZbG2E9YN8Bzx0B8pJtPH4%2B3jYbxamOnsN0NhL14xCj0M3h22eiXAkdEjk3k0km8POyOC8lkqArgOeF17qSuBnVVck&X-Amz-Signature=4f336413f8e303eba12b4bb3eced1aaae477053dd18e80f6082be702eda2919b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
