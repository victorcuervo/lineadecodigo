---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XADOOYY4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2TYGta18IOa0p%2FO%2F8eRkgpmhycCY7vPRkAOuPZVst8wIhANqEuYMQDONE0jDMmX%2BMzkRjuJjLzxvoBf5xobilIgC8KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxH9a6W5DiFePEfPAq3ANbzBwx3R3uh%2FPfVnILE6AGLuk9O0OqD6cO9XN1vN7b2acxmw3l0XUW2brPfee0KQlRvuowq2Ibn5UyMmBIt11FF9efVww8cm2uU3mMc%2By3nyz3P6ajyRujz0%2BM%2FuIQ%2FpMrcFpZ4goHTgpTHqlg%2BpBZdHwOPSKrm2YpSwDjp2JYoYEp2w7g47xiEXhvI7b8Pmgw6TqUsXhDQr5vmfg6GIHpO4mXHl%2B9YC3iBabzUYQYyAr6SJHC4ERqfmoFipSv28eocpVkLbRW%2F4emoPCqJq7Ci1ZGYCOzTScXnOxKQKX24cGoI3auo8Nj8YMwTXlHvvTl17BtwL7mpiYW7c8Je0jv5DdGecnh6zGtS07%2BkqiAg3mN6j9CYnhe4FGy%2FvnfwhDBRSi%2BqlJ1AfbDri0AmyFZGlx6cposLPBs1jZOUzr9P7h0npZxd8A7oea%2FwbOHjlWdKWLgnQ7hRGq%2FPnR3fzFcLYlWsLiJLMCKWk3kOgTFOYPaesWVzLrI9XC1RJmcmNWAZymkh%2BZDtm8fDn9hzegb7Q%2FwgABbBzE2AeXUKWLINYz5si9HdCxp3Rx7qsbluacMTmnq2muua5gvqK5HikL8pZ4bPesiIBHgvvfnyoLO6thq%2F9JifqfXt0iE2TClkNvJBjqkAR3RXmH8TQXWT8MjP3g9A3p0XWrNTQNqJq8lne4c82KCLNudAjeINTb00X8pVYet30e6e4%2FB2%2FG%2B%2Btb00oq0FjmLh1dfJ11UlP9hFPhEF%2FSUSf%2F%2FDhR94vwsEQNIR96y6wymvQN9VK4fVhgj6%2F42s2C%2Fjb3%2FmXEorJyvyDrSjCJJVPkWkvYxOEiOEVv97RiXMannXSJPYRGXVQs6fb5RyIk1Nsop&X-Amz-Signature=3647382ef4d70f9d5353175036cc8c068eaab0051a883c1a0b9abb06fefa6e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XADOOYY4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2TYGta18IOa0p%2FO%2F8eRkgpmhycCY7vPRkAOuPZVst8wIhANqEuYMQDONE0jDMmX%2BMzkRjuJjLzxvoBf5xobilIgC8KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxH9a6W5DiFePEfPAq3ANbzBwx3R3uh%2FPfVnILE6AGLuk9O0OqD6cO9XN1vN7b2acxmw3l0XUW2brPfee0KQlRvuowq2Ibn5UyMmBIt11FF9efVww8cm2uU3mMc%2By3nyz3P6ajyRujz0%2BM%2FuIQ%2FpMrcFpZ4goHTgpTHqlg%2BpBZdHwOPSKrm2YpSwDjp2JYoYEp2w7g47xiEXhvI7b8Pmgw6TqUsXhDQr5vmfg6GIHpO4mXHl%2B9YC3iBabzUYQYyAr6SJHC4ERqfmoFipSv28eocpVkLbRW%2F4emoPCqJq7Ci1ZGYCOzTScXnOxKQKX24cGoI3auo8Nj8YMwTXlHvvTl17BtwL7mpiYW7c8Je0jv5DdGecnh6zGtS07%2BkqiAg3mN6j9CYnhe4FGy%2FvnfwhDBRSi%2BqlJ1AfbDri0AmyFZGlx6cposLPBs1jZOUzr9P7h0npZxd8A7oea%2FwbOHjlWdKWLgnQ7hRGq%2FPnR3fzFcLYlWsLiJLMCKWk3kOgTFOYPaesWVzLrI9XC1RJmcmNWAZymkh%2BZDtm8fDn9hzegb7Q%2FwgABbBzE2AeXUKWLINYz5si9HdCxp3Rx7qsbluacMTmnq2muua5gvqK5HikL8pZ4bPesiIBHgvvfnyoLO6thq%2F9JifqfXt0iE2TClkNvJBjqkAR3RXmH8TQXWT8MjP3g9A3p0XWrNTQNqJq8lne4c82KCLNudAjeINTb00X8pVYet30e6e4%2FB2%2FG%2B%2Btb00oq0FjmLh1dfJ11UlP9hFPhEF%2FSUSf%2F%2FDhR94vwsEQNIR96y6wymvQN9VK4fVhgj6%2F42s2C%2Fjb3%2FmXEorJyvyDrSjCJJVPkWkvYxOEiOEVv97RiXMannXSJPYRGXVQs6fb5RyIk1Nsop&X-Amz-Signature=ba9281f4309fad00d547146c26e304ada1964d23966683d1524897e35fa5e95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

