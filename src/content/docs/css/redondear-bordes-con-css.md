---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAQM3OG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC1WWuMY6ObQC27mscv%2BXDz0e6v%2Bkc%2FP7TveJ0784YC1wIhAMnP7pb%2BwGOvuFIvoJnKY4GqzoQ0RX36pPFdvpIU%2BrZNKv8DCEYQABoMNjM3NDIzMTgzODA1IgxKxn%2FnttQ1dhCZNn4q3AMDowbFPcctnaUomsLdaBKiQch6rfs7MD1%2Ba39yEJsi7GGfxiNurTAMlaDn5NxpPZ2fjuFu5GzseFGFeSGfuBpqEZU49tX4dMOlNXlyFEwoc1wnPaEIGAiEqtNx5YPfWd3qPb%2BL1%2B1XM8neIduirHIvHaAZQCCYXQekcc0%2BWz0fguxh72xBawLvFL25E8sP2AmamVsu1dSMdNdtc31OYYt5g7je3vyhBZCzyDYnnxtCg34W2Fy5mtjWEilkMwj%2BKGTzgootHxvHkme40poOaSsVIyPhGnQbSRVnoQ1%2Fi0%2BExKpkCTlp0MaGoEHF2N%2Fo22cY7qr4NP4eLzyRjNJ7Bl5XpMkzqGV4BZc4EV5EWgvHIQ1iFKH2NPiBUYfUjn6DfjIPbjet%2FmWV%2FFjJU%2FzRk119C7bFDxvVeAD2IEFMymDTgMnP0jYDze9gBFzRByz%2FPzEJeKVmIQxviNMrzpGTtmLddk0VIkv74xusHLKzbg4NAwmFJJmG9yiXI7VJ0TV8SuSYppH1xRIGaUjIITj8YM2Px0RY4ZuNx2f7QYLFMZ5ySgVYDo2aTrC3%2BXvgFKTPzYguugVZM6K%2FNPFt%2BoKAdGUp8%2BZ9Td0nlNbtwkJl1mTB9ZhLbP2CVJvKV%2FCmCDDFg8bJBjqkAdadb9rQwx8ome3WSC1JFDImGtNUL2yTMvGS%2BT%2BF%2BoaXwj7a73DxEskMOjP5J23DB9N%2FUffjQabZw9IXyUuGrvj22QW5DBMQ%2B80TlyT6SCDw8vuhfhsQTwJwA1OrqB%2BWBnDyq%2FJlpIrfbu2Z7KCP7%2FvWSYwHasqOkpI1kyrGsTk%2BUlds0aVoYMj0xdrqt24WWdI6UnKL%2B%2F8SkyyZO8%2Fs1vE%2FMEh4&X-Amz-Signature=364f4d5856fa74d9921b03ca4181e449102fb9bee80705aacee36eceeed1018e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAQM3OG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC1WWuMY6ObQC27mscv%2BXDz0e6v%2Bkc%2FP7TveJ0784YC1wIhAMnP7pb%2BwGOvuFIvoJnKY4GqzoQ0RX36pPFdvpIU%2BrZNKv8DCEYQABoMNjM3NDIzMTgzODA1IgxKxn%2FnttQ1dhCZNn4q3AMDowbFPcctnaUomsLdaBKiQch6rfs7MD1%2Ba39yEJsi7GGfxiNurTAMlaDn5NxpPZ2fjuFu5GzseFGFeSGfuBpqEZU49tX4dMOlNXlyFEwoc1wnPaEIGAiEqtNx5YPfWd3qPb%2BL1%2B1XM8neIduirHIvHaAZQCCYXQekcc0%2BWz0fguxh72xBawLvFL25E8sP2AmamVsu1dSMdNdtc31OYYt5g7je3vyhBZCzyDYnnxtCg34W2Fy5mtjWEilkMwj%2BKGTzgootHxvHkme40poOaSsVIyPhGnQbSRVnoQ1%2Fi0%2BExKpkCTlp0MaGoEHF2N%2Fo22cY7qr4NP4eLzyRjNJ7Bl5XpMkzqGV4BZc4EV5EWgvHIQ1iFKH2NPiBUYfUjn6DfjIPbjet%2FmWV%2FFjJU%2FzRk119C7bFDxvVeAD2IEFMymDTgMnP0jYDze9gBFzRByz%2FPzEJeKVmIQxviNMrzpGTtmLddk0VIkv74xusHLKzbg4NAwmFJJmG9yiXI7VJ0TV8SuSYppH1xRIGaUjIITj8YM2Px0RY4ZuNx2f7QYLFMZ5ySgVYDo2aTrC3%2BXvgFKTPzYguugVZM6K%2FNPFt%2BoKAdGUp8%2BZ9Td0nlNbtwkJl1mTB9ZhLbP2CVJvKV%2FCmCDDFg8bJBjqkAdadb9rQwx8ome3WSC1JFDImGtNUL2yTMvGS%2BT%2BF%2BoaXwj7a73DxEskMOjP5J23DB9N%2FUffjQabZw9IXyUuGrvj22QW5DBMQ%2B80TlyT6SCDw8vuhfhsQTwJwA1OrqB%2BWBnDyq%2FJlpIrfbu2Z7KCP7%2FvWSYwHasqOkpI1kyrGsTk%2BUlds0aVoYMj0xdrqt24WWdI6UnKL%2B%2F8SkyyZO8%2Fs1vE%2FMEh4&X-Amz-Signature=23ce3f28b26660a36af827098d485122cd861d60a9f826dd3e85ec8e775c8a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
