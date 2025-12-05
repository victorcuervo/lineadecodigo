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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRUO2SU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4FRVrQKTdLGzvMBE7jUh5L0egnZaHui9%2Fe9Srvk9yUwIgbTNdeqBdw%2FTLDu5dxMmdb8ywolg8BrsgM4ovmorHqtMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCb6hE197%2FGKk%2FySJCrcA0zggiNgAhDKVwU039dVcz2BMhe5CFW9VlTCHti9wXhkTL5O%2FecrAj0%2BRAZfuIFdB35rzPw45iZWjMJCk1L7UDeWg4KsM78X%2Bfu6q6TsdbCD0nZOR8oaVPawZzs9nMnf4VRy0Yq%2Fk0QjU96hUVBQTWVezmjITWDaNjj6TwEqsSP50SAgYfIcEfLXuOvTvUifzJRTS05%2Fb3JZ0oNtRW%2Bd%2BiJ3AW%2BYBinftHqKip1tmLnj99dQJ2z3ritpYy5wA1pi5hhCX2HFk%2Ft5Wq5wp7Sg7W8%2BVY33%2FX1%2Bh%2FM86Wyg9rj2hsab3lz7gFyWklw%2FVCHZFk9yd2r90EBJ9%2BMzGfsDb62yPL%2ForxvAiONFmWbQ6JLSOswevc49PXYoPuCq6lh%2BTXRXzRbBx%2FpxvAEWIdSXKXdyYm0kascftzcrL3mOesA%2FXO3HZfNH918JpXd8IEh2GkcTuTDJkn1RM9IGHL4d18rB3%2Fj1hfr4qhu7AWborMgWCSOT0C22oWI1AxzqEYUsDslQa7IFU%2FgQuhiLNF4d5vyFNoroqMeSIMJvv8mwU8Wfl1H%2FpWRoQjTzocUjznDpbGU7LKeA2h06VWES6qkH7exvRYzHImAim7YO4IK6A3t91Z%2BDPss8HL1J5COvMNLAyskGOqUBIYRRQOcr5DDr178z3mpk15PsO%2BMbUmLnVkUc5oaDWr7O%2FUswaNbAGmd3uJDWMlOxpW3zt7KiFeaBQA3tW64LeywWnytVgg19Jn7rGfic79YrrrUDjQ0KImmoLcGb3mRldeDc2ezt4O889UIZyNAtYbgkB2pUgvuYJafvNlZW6P4aEvhYaVWj9SW5ySAOjeqXtP4oeeouRM%2BAz7tLn1eK1NMjt81d&X-Amz-Signature=e8416f7ddcba53dd0257c7e74242dbc56305a6b7af5de22e2f5266c87626ecec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRUO2SU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4FRVrQKTdLGzvMBE7jUh5L0egnZaHui9%2Fe9Srvk9yUwIgbTNdeqBdw%2FTLDu5dxMmdb8ywolg8BrsgM4ovmorHqtMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCb6hE197%2FGKk%2FySJCrcA0zggiNgAhDKVwU039dVcz2BMhe5CFW9VlTCHti9wXhkTL5O%2FecrAj0%2BRAZfuIFdB35rzPw45iZWjMJCk1L7UDeWg4KsM78X%2Bfu6q6TsdbCD0nZOR8oaVPawZzs9nMnf4VRy0Yq%2Fk0QjU96hUVBQTWVezmjITWDaNjj6TwEqsSP50SAgYfIcEfLXuOvTvUifzJRTS05%2Fb3JZ0oNtRW%2Bd%2BiJ3AW%2BYBinftHqKip1tmLnj99dQJ2z3ritpYy5wA1pi5hhCX2HFk%2Ft5Wq5wp7Sg7W8%2BVY33%2FX1%2Bh%2FM86Wyg9rj2hsab3lz7gFyWklw%2FVCHZFk9yd2r90EBJ9%2BMzGfsDb62yPL%2ForxvAiONFmWbQ6JLSOswevc49PXYoPuCq6lh%2BTXRXzRbBx%2FpxvAEWIdSXKXdyYm0kascftzcrL3mOesA%2FXO3HZfNH918JpXd8IEh2GkcTuTDJkn1RM9IGHL4d18rB3%2Fj1hfr4qhu7AWborMgWCSOT0C22oWI1AxzqEYUsDslQa7IFU%2FgQuhiLNF4d5vyFNoroqMeSIMJvv8mwU8Wfl1H%2FpWRoQjTzocUjznDpbGU7LKeA2h06VWES6qkH7exvRYzHImAim7YO4IK6A3t91Z%2BDPss8HL1J5COvMNLAyskGOqUBIYRRQOcr5DDr178z3mpk15PsO%2BMbUmLnVkUc5oaDWr7O%2FUswaNbAGmd3uJDWMlOxpW3zt7KiFeaBQA3tW64LeywWnytVgg19Jn7rGfic79YrrrUDjQ0KImmoLcGb3mRldeDc2ezt4O889UIZyNAtYbgkB2pUgvuYJafvNlZW6P4aEvhYaVWj9SW5ySAOjeqXtP4oeeouRM%2BAz7tLn1eK1NMjt81d&X-Amz-Signature=2e2c9011423023cf40e080bae9d0b39534497c05c90f862a711a6f8136e132d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
