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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377YOZUB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjHG1vSh3DJ8cjntjP1qW0q4UpPWpNSnB7wjFky3uOdAiEA4aNOVn1B2rGT3rh07yXc2HS%2FAFCSaZGMq5ncq4nne3YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIB7PqZvo9U20jHZ2CrcA9V0G6jBxa42QQY0YsB%2FyzHf7EvItqLq9LnB29zEA2Z6lpcbjQh0VZ%2F1w3CojPkrX97REIIeBDxfEBLAq%2BwN8KO6F3t8L1hbromXFCjd%2BqzqDaSo%2FqrfS1RI%2B3XGTB8JbH%2BbOnur13HyfbOcN0pZYIyPlGzM3AqoT5NdXtb5c%2FBlccbgqDMoSN4A73%2FpGGVlb4fiftG0FUnztmpDXIobiMaDWuqROkL5X7bAREDMh6BqCDI79o4WLSFzcvmSFIdkJ6N6DmR5pZUkiClIoyvcjwHKeW2F6SFQVGTBTj9N4PrmUBAIecY4L%2Fxg7D11VtLKaFu5t2ift3taW%2B0pqlhyjzWEbLinTRLOGeZW28NW3QGHP0nv%2Fweq2EgS8fnABihlv%2FQfvUZA%2BAf8gr%2BICi4S2bS3bBOxp9NESNtyLdL4cMjsQpcLVZfgTeDmJeIg8%2FTFlxft0dbI6SjWxS8JEPkWV7P5%2F6uUu%2Bfy7D1weZL%2BEVOV2w%2BBE54BcUf%2Btq%2FOvRn08wXYuEBM8s7fq44FXu2LOrd6W520tHfvF9fmeRisOtx1adHUsK%2Bo76vE%2Fb32nF1vgGBxuipmS22XTVn7pr3UcLMcWNz0VdIeKERjC%2FvnzQ%2BnErUiT2cwfRvArpCXMJn90skGOqUBRjIxN2Ab1BP1UE2B7TKtZ7CHnU33FPKLnB4cEouoJf5QQgMsIJ5YNCMF1ajX7r9D5yZzDmhvGrQdHUIa7EHPX8hBUIjXhN82TdpWJgVh28hAaHqFmpsvlehldOs5Ru9CXc3C1xCwSA42wCo%2B%2BshJsEZwZMLpqH0WzPJKC0U75GLktD0K9HexwRDPapi0ez0EyAb89nvr3pgd%2F3BEjS7j7gplGdmT&X-Amz-Signature=2d3b21647a487cea701fba18e4d04b68dee79c65a835eefd3b284c04afe84afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377YOZUB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjHG1vSh3DJ8cjntjP1qW0q4UpPWpNSnB7wjFky3uOdAiEA4aNOVn1B2rGT3rh07yXc2HS%2FAFCSaZGMq5ncq4nne3YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIB7PqZvo9U20jHZ2CrcA9V0G6jBxa42QQY0YsB%2FyzHf7EvItqLq9LnB29zEA2Z6lpcbjQh0VZ%2F1w3CojPkrX97REIIeBDxfEBLAq%2BwN8KO6F3t8L1hbromXFCjd%2BqzqDaSo%2FqrfS1RI%2B3XGTB8JbH%2BbOnur13HyfbOcN0pZYIyPlGzM3AqoT5NdXtb5c%2FBlccbgqDMoSN4A73%2FpGGVlb4fiftG0FUnztmpDXIobiMaDWuqROkL5X7bAREDMh6BqCDI79o4WLSFzcvmSFIdkJ6N6DmR5pZUkiClIoyvcjwHKeW2F6SFQVGTBTj9N4PrmUBAIecY4L%2Fxg7D11VtLKaFu5t2ift3taW%2B0pqlhyjzWEbLinTRLOGeZW28NW3QGHP0nv%2Fweq2EgS8fnABihlv%2FQfvUZA%2BAf8gr%2BICi4S2bS3bBOxp9NESNtyLdL4cMjsQpcLVZfgTeDmJeIg8%2FTFlxft0dbI6SjWxS8JEPkWV7P5%2F6uUu%2Bfy7D1weZL%2BEVOV2w%2BBE54BcUf%2Btq%2FOvRn08wXYuEBM8s7fq44FXu2LOrd6W520tHfvF9fmeRisOtx1adHUsK%2Bo76vE%2Fb32nF1vgGBxuipmS22XTVn7pr3UcLMcWNz0VdIeKERjC%2FvnzQ%2BnErUiT2cwfRvArpCXMJn90skGOqUBRjIxN2Ab1BP1UE2B7TKtZ7CHnU33FPKLnB4cEouoJf5QQgMsIJ5YNCMF1ajX7r9D5yZzDmhvGrQdHUIa7EHPX8hBUIjXhN82TdpWJgVh28hAaHqFmpsvlehldOs5Ru9CXc3C1xCwSA42wCo%2B%2BshJsEZwZMLpqH0WzPJKC0U75GLktD0K9HexwRDPapi0ez0EyAb89nvr3pgd%2F3BEjS7j7gplGdmT&X-Amz-Signature=54bca3bce414df6de0cc553be2c08fd5b47987832665037d341b78c5a0293697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
