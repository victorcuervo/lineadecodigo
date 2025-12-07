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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS27QX65%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkEfP7XoGfGs4IqW0EesSN%2F9lSGgYHep%2FHF2rMzytrnAiEApNmma6K16doXs61KSBW%2FWIpPgjiLIRqdByrI4TFqknsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAlx19ocaCQsU9rLircA4QquZ%2F88autG%2BkGd8rx0qZjNBPoWTkJrHIneWwsfikwZqz7vVMFB3qybavJh6wM7uhLVa3hf3SuKq%2Fow7TEyE3AFE9Jf81IgZrUsVuDJhLllDUSG1%2FSVoQ1dJZp2%2Fbi5JulRjpRo3w8pKMF1udfW08RDsi4SaUMXauT9NQnqzxoeVj38OaH3rLctm44Qp%2Ff5BI8l3%2Beer0iig%2BgE9zONDeQ7zoZ43MgJZxTsJBeHmhR832LChRZZFxHZ3UrWZwjQaS1G0%2Fv%2FEhMkZOwltXAJw5277HtQfV8HFbU9CkoqyWkoGlDXgJtnVCEtANNYnk6KJVm9v8qRXDNnrt8zfxPeH4oJbWlc22%2FnnwGuXzIoWLBegzzMohkZHLrr0ly2%2BuwjUecGO%2BTp5ka37lUvJ83CkijdQliT%2FAf3HoAyx09AydOP3zTZaGfWUshhMvi5LlOKWNDV2ubLBj6SDDCS6XFhl3U0ZzqHsjUmyFL0gUO6CyR8HZJeX%2F623lQzknldcQL2%2FuKDFx8ZOhpgZcPSTyq%2BvmbsfCWo0hDTwH2NHCbvQpx0IL0pp8Tr7p6rxMK944G7zUG6caFIZsxA7OKks34cbRKaEvPaezpP82k%2FtsZUSUlGhMxduTVr0igfzaSMJ%2F%2B0skGOqUBawRDHDzrelbA6tltDBOcTS5lmkhRJiMPAgsX4XuRZM5yx%2Byo6Ke%2FBzW6ar6%2B%2BjalwoVJV2oxCTm%2FN3AAghdfw1s1IXUhDfN9GVCSRr%2FvBPvoDG%2BkPtjoXsjZ2W9SMaY3ysBAI6L5XmXKDi1LBlRo9aEuygGyo2mfCvnha6Lzhafuzp3HGbCqo9wXhrDYEmcC%2FEZvwauZQfUE0hcy0rHHmE3vCsof&X-Amz-Signature=7355924eab4e1c5dafc9ff4fd6ebff735ef73d327c888c1eb36e6f08639a1622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS27QX65%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkEfP7XoGfGs4IqW0EesSN%2F9lSGgYHep%2FHF2rMzytrnAiEApNmma6K16doXs61KSBW%2FWIpPgjiLIRqdByrI4TFqknsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAlx19ocaCQsU9rLircA4QquZ%2F88autG%2BkGd8rx0qZjNBPoWTkJrHIneWwsfikwZqz7vVMFB3qybavJh6wM7uhLVa3hf3SuKq%2Fow7TEyE3AFE9Jf81IgZrUsVuDJhLllDUSG1%2FSVoQ1dJZp2%2Fbi5JulRjpRo3w8pKMF1udfW08RDsi4SaUMXauT9NQnqzxoeVj38OaH3rLctm44Qp%2Ff5BI8l3%2Beer0iig%2BgE9zONDeQ7zoZ43MgJZxTsJBeHmhR832LChRZZFxHZ3UrWZwjQaS1G0%2Fv%2FEhMkZOwltXAJw5277HtQfV8HFbU9CkoqyWkoGlDXgJtnVCEtANNYnk6KJVm9v8qRXDNnrt8zfxPeH4oJbWlc22%2FnnwGuXzIoWLBegzzMohkZHLrr0ly2%2BuwjUecGO%2BTp5ka37lUvJ83CkijdQliT%2FAf3HoAyx09AydOP3zTZaGfWUshhMvi5LlOKWNDV2ubLBj6SDDCS6XFhl3U0ZzqHsjUmyFL0gUO6CyR8HZJeX%2F623lQzknldcQL2%2FuKDFx8ZOhpgZcPSTyq%2BvmbsfCWo0hDTwH2NHCbvQpx0IL0pp8Tr7p6rxMK944G7zUG6caFIZsxA7OKks34cbRKaEvPaezpP82k%2FtsZUSUlGhMxduTVr0igfzaSMJ%2F%2B0skGOqUBawRDHDzrelbA6tltDBOcTS5lmkhRJiMPAgsX4XuRZM5yx%2Byo6Ke%2FBzW6ar6%2B%2BjalwoVJV2oxCTm%2FN3AAghdfw1s1IXUhDfN9GVCSRr%2FvBPvoDG%2BkPtjoXsjZ2W9SMaY3ysBAI6L5XmXKDi1LBlRo9aEuygGyo2mfCvnha6Lzhafuzp3HGbCqo9wXhrDYEmcC%2FEZvwauZQfUE0hcy0rHHmE3vCsof&X-Amz-Signature=ca657803599e44d3ad208a56e0c6b1e0f9c533ea3b6300fffa297bb9e8079b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
