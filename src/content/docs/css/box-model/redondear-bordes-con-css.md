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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIPQ3B7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjlV1Dk75InhFTZejVp97evfxTu8KsCVh0PvNF6W8UEAiEAksM3v0d7233RFmfYnHeLmNQwjx2Crt%2BzjxnNR4aU3wkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBE6n%2FaZle2LHIlU%2BircA6RCI0VBhFoCFXOPuKpSjLhteP1jeauFO6zMZiwHhrh2WGdaPFSfg%2B50PtBec74IXLiuHsAbG8bjkktUL7Q7Zc0FkpgiqHjupMLr%2BXhQNQUiVHZa96oSy%2ByWMTS%2BwGLryOWhZVAf%2Fp2FuQ5mdMH3SW3u%2Fy9GYEP0MAeu%2FESZaEpdGQ7kpnn5VB1uP8lsD%2FwwpYa96pBFJ2To5fxH3mxFnsB4w8We6QTBb8BgBfB%2BkDJqpr77lEWfsp7CCLNHUhPRju5w43DPjA%2BbK0BXUMp9nBJNf1J9qMSjTcMjFizLXM54Ucwa0KAORx0LC41ncsHKtrl9zUIvP6dHINa2lLeAZR1%2B576Fu0GSKaliaKSLV2oR86gJeuC4LbRe5igwhwNor3vBo7WpkqX6uj9STzgGhu6LDzrSfzFzPOBv74C%2F7jz9wzwcB%2BDdjDZCU5cKmFRUVWGJvh%2Foi4BeDF3n9AhW0wjkNWYiI%2FNbKtsmTffuxqko1YAyqZ7C7NBUIpLk0M0tPZlFis837PLaVEDbjxHdhnvPcXAddIZFo3EIb%2BkiM3JRSIcymiYhXCyyPAaP07VRc4SrdfaTG7kdoF4dEQqNHrRucanu8kqDkbNsE41jU3f0neU0Bhl4XxSV2fvhMK3hisoGOqUB5mQZq0f6m82kJbHkr9EDyqAjUSIkVbGZUH6XsA2yCKdI4zo5HXEhT1XW8gWMCzT6uMpKJYxan%2FB%2FcA7Q2Ppju%2FWFt6g1ofgKJ1%2FQ6LH%2BsZqLl7Rdg1JyMzq4xqM5XAI%2FskYmj%2Fq0jvxpShdO9VaRmOjZcjdq2%2FJK%2BlbPiXeP2afnMy0WPo4K7OeCBK7FfoeDhQ%2BDXZsRVpDukA%2BJOcVMeJsPl9HI&X-Amz-Signature=6300f0849ea69fe2465757aa42ec33a9053bb164cd4c0468400b032dfe9b648c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIPQ3B7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjlV1Dk75InhFTZejVp97evfxTu8KsCVh0PvNF6W8UEAiEAksM3v0d7233RFmfYnHeLmNQwjx2Crt%2BzjxnNR4aU3wkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBE6n%2FaZle2LHIlU%2BircA6RCI0VBhFoCFXOPuKpSjLhteP1jeauFO6zMZiwHhrh2WGdaPFSfg%2B50PtBec74IXLiuHsAbG8bjkktUL7Q7Zc0FkpgiqHjupMLr%2BXhQNQUiVHZa96oSy%2ByWMTS%2BwGLryOWhZVAf%2Fp2FuQ5mdMH3SW3u%2Fy9GYEP0MAeu%2FESZaEpdGQ7kpnn5VB1uP8lsD%2FwwpYa96pBFJ2To5fxH3mxFnsB4w8We6QTBb8BgBfB%2BkDJqpr77lEWfsp7CCLNHUhPRju5w43DPjA%2BbK0BXUMp9nBJNf1J9qMSjTcMjFizLXM54Ucwa0KAORx0LC41ncsHKtrl9zUIvP6dHINa2lLeAZR1%2B576Fu0GSKaliaKSLV2oR86gJeuC4LbRe5igwhwNor3vBo7WpkqX6uj9STzgGhu6LDzrSfzFzPOBv74C%2F7jz9wzwcB%2BDdjDZCU5cKmFRUVWGJvh%2Foi4BeDF3n9AhW0wjkNWYiI%2FNbKtsmTffuxqko1YAyqZ7C7NBUIpLk0M0tPZlFis837PLaVEDbjxHdhnvPcXAddIZFo3EIb%2BkiM3JRSIcymiYhXCyyPAaP07VRc4SrdfaTG7kdoF4dEQqNHrRucanu8kqDkbNsE41jU3f0neU0Bhl4XxSV2fvhMK3hisoGOqUB5mQZq0f6m82kJbHkr9EDyqAjUSIkVbGZUH6XsA2yCKdI4zo5HXEhT1XW8gWMCzT6uMpKJYxan%2FB%2FcA7Q2Ppju%2FWFt6g1ofgKJ1%2FQ6LH%2BsZqLl7Rdg1JyMzq4xqM5XAI%2FskYmj%2Fq0jvxpShdO9VaRmOjZcjdq2%2FJK%2BlbPiXeP2afnMy0WPo4K7OeCBK7FfoeDhQ%2BDXZsRVpDukA%2BJOcVMeJsPl9HI&X-Amz-Signature=dd3a40df8473501f85a2d47d471703f718c44db67d4e721dacbf25054c50f314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
