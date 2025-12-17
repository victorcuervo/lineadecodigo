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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVW5L6AG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVyztH1xJxO0pGufN0TQeyafoWOEFtNKZFXbfasNsxTAiEAi900W1tXzs456wyNd3AH6xLrJnKNMYea7Pka4ZaTCX4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGCnpei85TmrN3ke4CrcAyQfzbgNkzjZJpBd0ANtbpAysEaQcuP0Z%2BTp%2B%2BWtYf8%2BnkVaThnAu%2FvJl9d6mdcE7v8fMzC%2FNhL%2BjLRjH6TkmQd7HLck311xAJmE5BZCqGqx3piCo5tW9wCsCcRI%2FnoEMMuYdrWEhWv3Fu6zH7AxVv%2BAg8OIjjXBixrnUNP8pDFCjU9WnJNehk2DZwZli4ZoOizH8rfSUzkWvaBuEzMEQuvfYdnt2DhalixOXqyhsKL5EykZoh0xsoXEs3Yr9i6gBNWkq%2B7kWoUgZhR8FQM8vktYx9%2BwFyqA%2B%2FKL%2F%2Bb8yF%2BZfEpnhyCFFcXICnEhOCwXvOvVVX46HBowu06B14SsmRWC53EPuajBQiJ2Z72f2KBcR4gyzMGA4IQY5UmikGE4eaG6cYLO4njjsomPW6X8ICFJIjbiFMpTEm1O1A%2BK0HNr7mRQqyQNn%2B7oKbx%2FpkPtvN6skm0NlJjyOUnAfNqeOM84qpA%2FscCJtOVaaGaNXN%2B9SNzPQ2ruFdi9ip%2BtSa2q%2BmC5WRpC8IYc%2F0vYHM6Gc%2FoZ7LNNRoXELuVUQAWeWcOqTc1JT85T52iPHNg1rjRSoX1rvB2Af%2Bct3IoqKLedZG8w3XBDEChgiF3y%2FAw0pSZZNRBzz5GRc3DXMm4jMN37h8oGOqUBfnLKwzMS4AAoswi7Z6SOfBP2v0W5baSKtBHax5Y%2F4hFCvCPg%2BhXq2vWG3B1P7Tgsk8BuOnN3BW%2F38jTQVKI2vxakk8BZbKInrr8N9GZY187I%2BTGaAW7NJPMo%2BxDlGdOAFhAcVs3Di7ozNZWbSJobcUnn7CScQVgiix6yHKn9f%2FihpSlC6qQdoEPaG6SNVTWPoI63nHmGvyq5PgqC01RmfKepdUc1&X-Amz-Signature=e060806a8755eb271a61fff866b77d1f90ab0e95b684b4b531e38bdfa08c3fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVW5L6AG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVyztH1xJxO0pGufN0TQeyafoWOEFtNKZFXbfasNsxTAiEAi900W1tXzs456wyNd3AH6xLrJnKNMYea7Pka4ZaTCX4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGCnpei85TmrN3ke4CrcAyQfzbgNkzjZJpBd0ANtbpAysEaQcuP0Z%2BTp%2B%2BWtYf8%2BnkVaThnAu%2FvJl9d6mdcE7v8fMzC%2FNhL%2BjLRjH6TkmQd7HLck311xAJmE5BZCqGqx3piCo5tW9wCsCcRI%2FnoEMMuYdrWEhWv3Fu6zH7AxVv%2BAg8OIjjXBixrnUNP8pDFCjU9WnJNehk2DZwZli4ZoOizH8rfSUzkWvaBuEzMEQuvfYdnt2DhalixOXqyhsKL5EykZoh0xsoXEs3Yr9i6gBNWkq%2B7kWoUgZhR8FQM8vktYx9%2BwFyqA%2B%2FKL%2F%2Bb8yF%2BZfEpnhyCFFcXICnEhOCwXvOvVVX46HBowu06B14SsmRWC53EPuajBQiJ2Z72f2KBcR4gyzMGA4IQY5UmikGE4eaG6cYLO4njjsomPW6X8ICFJIjbiFMpTEm1O1A%2BK0HNr7mRQqyQNn%2B7oKbx%2FpkPtvN6skm0NlJjyOUnAfNqeOM84qpA%2FscCJtOVaaGaNXN%2B9SNzPQ2ruFdi9ip%2BtSa2q%2BmC5WRpC8IYc%2F0vYHM6Gc%2FoZ7LNNRoXELuVUQAWeWcOqTc1JT85T52iPHNg1rjRSoX1rvB2Af%2Bct3IoqKLedZG8w3XBDEChgiF3y%2FAw0pSZZNRBzz5GRc3DXMm4jMN37h8oGOqUBfnLKwzMS4AAoswi7Z6SOfBP2v0W5baSKtBHax5Y%2F4hFCvCPg%2BhXq2vWG3B1P7Tgsk8BuOnN3BW%2F38jTQVKI2vxakk8BZbKInrr8N9GZY187I%2BTGaAW7NJPMo%2BxDlGdOAFhAcVs3Di7ozNZWbSJobcUnn7CScQVgiix6yHKn9f%2FihpSlC6qQdoEPaG6SNVTWPoI63nHmGvyq5PgqC01RmfKepdUc1&X-Amz-Signature=0ff01ffb1c7e3cb7a69e7e8f83f7af38d9be374eecf42155bc5434d4594d3925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
