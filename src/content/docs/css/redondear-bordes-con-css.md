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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVVCGQHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXskLzFFuwZ2gNT9CtHTXpNf6VKG%2BGmPzPttd0AtnwTAiA9VcYsyfTLQMN1b40wGD68TQOtL5eIDDee71%2FYe0CMsyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMSXeMzEL0pZvqo0nCKtwDYchi7IYokqBUMzNhHIXdAVhgOQttrteG2xon8qxd02n00DX08gj3G%2B34gGrHRIe5gBXj57txRbq7cTrRlSatisv3TdORSmz0phzfNOfvaRuvvFerHGSFeisgB2xR5a6TZf882gZSjoMlF6dPCjk%2FEaCDqQrTmvlC7EkYLG06lh%2FRFjkC0%2F1C6P9ClPor2twqJ2HccRF%2F%2F7Rdjq76uQzBJGmnNkHnJ3%2BRC%2BWqtuln%2BPPNbhbrGYxRaw%2BRdG0VZ3MrQn0wLOBAADlzXakPr73jq9ejQhKN8p%2B254kBS2U4b6aYtb%2FZnPhNxMh%2Fh1rPFlpE5p0YEZc%2FW48f2lLyJ1apjX1qA9pnOHij77FmwhZro3fvIJupK3TUwQb7bZBuG1ds1vM3J7yX0Fr88pWUEjd93S1pl0A3vN%2BRyni532a98retMLkw9QEks%2Ba%2FyRHQRsi2a43S2VBQFwLMw4MYLkPPNi1dKAgbguj06HT8urt%2BTMFqR4CcdgdEW1b%2FBMykHuFZ5kalZ7feKa0AUuP%2BzECo9ZHsGEaZefrrM0evd3XePjaTs6JBtjdJJx3iLClKWDB3AIbEOfBCsnPvFSc8fb%2F%2B7vqu6mDvbTJCQZCG8Oe3WhKb7lu1UesGoSG%2BiLcw1p7PyQY6pgFIPkXhq3cbk0zARTNcKAVYh5Bsw%2FR30Kr1mSHuEPC8Gfs0YIulO%2FFRA0QLpkSOhpgAhElS5P%2FuM05Bpw7HtdOkojpuULVg3hHZIxUKp9D5g9tDb4inuqqVuA%2FA3EasGg0T5LaMTRVf3JPmQN7YPlMlj4q1VGRmmJ6gvvjfQEsLkDt1N8gNXvOGmZsy1nUpx6QFS9SoH71meIoGl82%2BitG3BzSAaFhg&X-Amz-Signature=cbc7517920ec89c5c0ab35f4424fed65de4987fe892de6d7346db94c27e26b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVVCGQHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXskLzFFuwZ2gNT9CtHTXpNf6VKG%2BGmPzPttd0AtnwTAiA9VcYsyfTLQMN1b40wGD68TQOtL5eIDDee71%2FYe0CMsyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMSXeMzEL0pZvqo0nCKtwDYchi7IYokqBUMzNhHIXdAVhgOQttrteG2xon8qxd02n00DX08gj3G%2B34gGrHRIe5gBXj57txRbq7cTrRlSatisv3TdORSmz0phzfNOfvaRuvvFerHGSFeisgB2xR5a6TZf882gZSjoMlF6dPCjk%2FEaCDqQrTmvlC7EkYLG06lh%2FRFjkC0%2F1C6P9ClPor2twqJ2HccRF%2F%2F7Rdjq76uQzBJGmnNkHnJ3%2BRC%2BWqtuln%2BPPNbhbrGYxRaw%2BRdG0VZ3MrQn0wLOBAADlzXakPr73jq9ejQhKN8p%2B254kBS2U4b6aYtb%2FZnPhNxMh%2Fh1rPFlpE5p0YEZc%2FW48f2lLyJ1apjX1qA9pnOHij77FmwhZro3fvIJupK3TUwQb7bZBuG1ds1vM3J7yX0Fr88pWUEjd93S1pl0A3vN%2BRyni532a98retMLkw9QEks%2Ba%2FyRHQRsi2a43S2VBQFwLMw4MYLkPPNi1dKAgbguj06HT8urt%2BTMFqR4CcdgdEW1b%2FBMykHuFZ5kalZ7feKa0AUuP%2BzECo9ZHsGEaZefrrM0evd3XePjaTs6JBtjdJJx3iLClKWDB3AIbEOfBCsnPvFSc8fb%2F%2B7vqu6mDvbTJCQZCG8Oe3WhKb7lu1UesGoSG%2BiLcw1p7PyQY6pgFIPkXhq3cbk0zARTNcKAVYh5Bsw%2FR30Kr1mSHuEPC8Gfs0YIulO%2FFRA0QLpkSOhpgAhElS5P%2FuM05Bpw7HtdOkojpuULVg3hHZIxUKp9D5g9tDb4inuqqVuA%2FA3EasGg0T5LaMTRVf3JPmQN7YPlMlj4q1VGRmmJ6gvvjfQEsLkDt1N8gNXvOGmZsy1nUpx6QFS9SoH71meIoGl82%2BitG3BzSAaFhg&X-Amz-Signature=68a29f9fa3d0bcca0b1872d88b1124812af0664f61dff5b94563a0b20acf854d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
