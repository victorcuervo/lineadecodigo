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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ5S5E3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeIaQfKkBh88UoarxR8FeHnenFSHDoCgnP%2BA%2BzsuleOQIhAOu15Bav0pyISyqbFPYh35wNeEodz7kAkFIMjrE3SFpfKv8DCHMQABoMNjM3NDIzMTgzODA1Igw1Ah247ceO3id23Ykq3APqk7BnuI5f03ANcx7d%2BM6SPsCWmOihRVM5VX6AJ2xFByBF%2B2R7gfq6BbvrvdCCyLAMk1u5tQtgwwU2Qndw0MSCPKmFoNxNaUFUzTMm2ZcMZCq6%2Fd6N5086GhyBKtRdFTOY%2B0Ei4BJoNn1XDE8EE2sSAZcEMBgUgAXzhdoYs0GaVfqCiwiHTFu6t031%2BZpvMJP8OldqlAGo2W5CKox8%2FyDxZArdI5TK9XXvyX4G0PnKbWNJ%2FKYI%2F0%2FuBSl%2BvFzgKSykLu3m8y6FNPQC3Jhs2VHAaoriZUVgGSgJV4LnvrYFjjHxm5GSth6wmPraDdy%2FfpI8R4vLdhXCfW98Vi0HtwRIXCijKwaVJ623%2BGCgcAY62AzaRflUCSyouYz4CiajGm8nw9QnCGnVnmF1zxdsJFTBkyQY5f1ge6WUzGJvFm6jomnKUMDkjG%2F5yFYRQHhNSWsOaSNjmmF0WZ4dcjFGGcJNCsZZnw7vWsHrr4n1Ow665KwjRR%2BIdfz8xqnxihIzz%2BTTYVAUTUZOF1whLpQSxKc0trZfhjL4%2BFOGX7aZ%2B2WYqzlh1kcblKnj%2FTw1HaGRxNddY3KOZAk27AKf%2BdZ8KpWHJxEppJITZeS607gYMuhzPhkS2NoeIz%2BhgKAqizDBl4jKBjqkAdPAkKH%2B75T1vG9g%2BtFICZiiwtDWVpK0rZnzq8eXlZKDsOhI01R8wEparU55XIhw0qI3YGraXzBXs2GCNEBEzHS10Q8mxxVJtX2d5oWn%2BoQU9RZCAAViMcVl7Nq4hDDSmKWhCN8tllrbHl%2FakNphRkQal0lwgGWmZBRFHptEROy%2FoOAS0xQv34tbInvFDy5zgl8xVmHJdf%2FXRMUzQ%2B0Tv3P24Bh0&X-Amz-Signature=dff581935cfddb059676deaaaa597446173e6423807955a68b8153067c13f304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ5S5E3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeIaQfKkBh88UoarxR8FeHnenFSHDoCgnP%2BA%2BzsuleOQIhAOu15Bav0pyISyqbFPYh35wNeEodz7kAkFIMjrE3SFpfKv8DCHMQABoMNjM3NDIzMTgzODA1Igw1Ah247ceO3id23Ykq3APqk7BnuI5f03ANcx7d%2BM6SPsCWmOihRVM5VX6AJ2xFByBF%2B2R7gfq6BbvrvdCCyLAMk1u5tQtgwwU2Qndw0MSCPKmFoNxNaUFUzTMm2ZcMZCq6%2Fd6N5086GhyBKtRdFTOY%2B0Ei4BJoNn1XDE8EE2sSAZcEMBgUgAXzhdoYs0GaVfqCiwiHTFu6t031%2BZpvMJP8OldqlAGo2W5CKox8%2FyDxZArdI5TK9XXvyX4G0PnKbWNJ%2FKYI%2F0%2FuBSl%2BvFzgKSykLu3m8y6FNPQC3Jhs2VHAaoriZUVgGSgJV4LnvrYFjjHxm5GSth6wmPraDdy%2FfpI8R4vLdhXCfW98Vi0HtwRIXCijKwaVJ623%2BGCgcAY62AzaRflUCSyouYz4CiajGm8nw9QnCGnVnmF1zxdsJFTBkyQY5f1ge6WUzGJvFm6jomnKUMDkjG%2F5yFYRQHhNSWsOaSNjmmF0WZ4dcjFGGcJNCsZZnw7vWsHrr4n1Ow665KwjRR%2BIdfz8xqnxihIzz%2BTTYVAUTUZOF1whLpQSxKc0trZfhjL4%2BFOGX7aZ%2B2WYqzlh1kcblKnj%2FTw1HaGRxNddY3KOZAk27AKf%2BdZ8KpWHJxEppJITZeS607gYMuhzPhkS2NoeIz%2BhgKAqizDBl4jKBjqkAdPAkKH%2B75T1vG9g%2BtFICZiiwtDWVpK0rZnzq8eXlZKDsOhI01R8wEparU55XIhw0qI3YGraXzBXs2GCNEBEzHS10Q8mxxVJtX2d5oWn%2BoQU9RZCAAViMcVl7Nq4hDDSmKWhCN8tllrbHl%2FakNphRkQal0lwgGWmZBRFHptEROy%2FoOAS0xQv34tbInvFDy5zgl8xVmHJdf%2FXRMUzQ%2B0Tv3P24Bh0&X-Amz-Signature=0773879a4fef1b3c20ba94d911c040080b8c951c36f56b35f2135831f73cd3a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
