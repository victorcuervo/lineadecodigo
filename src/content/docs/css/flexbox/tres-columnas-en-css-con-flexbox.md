---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEKJLBH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEofM63VJvhWbdOKrpaDqoibWYwpR%2Fkf4tOS9eAOPGDCAiAYv2VDoCQXPBlwvF4R%2FZ03CHy4g%2Br2ArY6JQPyJmzSACqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVoWK2%2BzggHW3uXrWKtwDdMItNEvuZ5pWX3dT%2FpiLda3EPQXt3xG5EYxJTMF0%2Fzgp3YbjIWq6NbZCzIkpz6WQuU9lD8e2EmuiNTN%2FLRcZyjbSxVZv7OsISk3NWrGxEO414xs2z1lWHEymFak0QZ7z2m3Ea5Wy612aPBw143iK3myOn954warzCZI4fPUIyHTm7SAL%2FvV8CJzc1AgxRoMVuqITK68twFQ%2FqMhRh3gZiO9%2Bs7Lrq4p8skAn%2BSAE8DQB6hcHt7u8jot1Lpl1rgCNkAt9UsXLrU966DYWrM6Wvwm8GjZGcEOnUzNcaP4HkoO4euKO5Pf3HETimQcEPjatUGPeRU8RlZg2Q1IIPOV4g7tK%2BiFvkc9fjL2RIIEH193t1uXl56W%2BvUzh5NM%2FpGfeYsk4EAh%2BCJmKu%2Bz7EZNARZvzDCXHTYRWMRYdegCg1cnskgvFIkD%2Fer0yr1xMX0j7F%2FM88kOdzyH9grwjmaJacORx0IPQN7uLCDUG5VlcKoPXC%2FL8W0pmlAx9ltFFfq%2BmgzBdHRP2k7BKP2bwCFce0uG8DJkOU7Ukhfn0NUAC7GhKBpTCdpufnL9BVjwEGAcD2st5qxpl1pIbkRFBRXuBKPVTV5W92S9353mGvZswZ7IHIxjkgBIFK%2FL0zQswy4DdyQY6pgH7LuudDYy4ZBAtRWY53B9YkHFCcU3xU27nUlmSx76igc54qhMrr2GDiiMgoo6d2MXWaQ9PXOscz6MiAAZFangIGf8142UdEIEjaT81MzirDdXLdFyFUJqj1bDmxBxHMoizocn3KRVuXKyzN3j7TBQxKcKMnTBDO30QOj5Jnj%2BY7YI6bzXhR%2BHQa%2B2AaxioHvAeNQAgMi2pQ2WY4Dmi1vEQj6bXVkVK&X-Amz-Signature=b77373d5438302fc44e0597a8fcf1ddbf79f20245336d969e078078f12661116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEKJLBH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEofM63VJvhWbdOKrpaDqoibWYwpR%2Fkf4tOS9eAOPGDCAiAYv2VDoCQXPBlwvF4R%2FZ03CHy4g%2Br2ArY6JQPyJmzSACqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVoWK2%2BzggHW3uXrWKtwDdMItNEvuZ5pWX3dT%2FpiLda3EPQXt3xG5EYxJTMF0%2Fzgp3YbjIWq6NbZCzIkpz6WQuU9lD8e2EmuiNTN%2FLRcZyjbSxVZv7OsISk3NWrGxEO414xs2z1lWHEymFak0QZ7z2m3Ea5Wy612aPBw143iK3myOn954warzCZI4fPUIyHTm7SAL%2FvV8CJzc1AgxRoMVuqITK68twFQ%2FqMhRh3gZiO9%2Bs7Lrq4p8skAn%2BSAE8DQB6hcHt7u8jot1Lpl1rgCNkAt9UsXLrU966DYWrM6Wvwm8GjZGcEOnUzNcaP4HkoO4euKO5Pf3HETimQcEPjatUGPeRU8RlZg2Q1IIPOV4g7tK%2BiFvkc9fjL2RIIEH193t1uXl56W%2BvUzh5NM%2FpGfeYsk4EAh%2BCJmKu%2Bz7EZNARZvzDCXHTYRWMRYdegCg1cnskgvFIkD%2Fer0yr1xMX0j7F%2FM88kOdzyH9grwjmaJacORx0IPQN7uLCDUG5VlcKoPXC%2FL8W0pmlAx9ltFFfq%2BmgzBdHRP2k7BKP2bwCFce0uG8DJkOU7Ukhfn0NUAC7GhKBpTCdpufnL9BVjwEGAcD2st5qxpl1pIbkRFBRXuBKPVTV5W92S9353mGvZswZ7IHIxjkgBIFK%2FL0zQswy4DdyQY6pgH7LuudDYy4ZBAtRWY53B9YkHFCcU3xU27nUlmSx76igc54qhMrr2GDiiMgoo6d2MXWaQ9PXOscz6MiAAZFangIGf8142UdEIEjaT81MzirDdXLdFyFUJqj1bDmxBxHMoizocn3KRVuXKyzN3j7TBQxKcKMnTBDO30QOj5Jnj%2BY7YI6bzXhR%2BHQa%2B2AaxioHvAeNQAgMi2pQ2WY4Dmi1vEQj6bXVkVK&X-Amz-Signature=5a4052ff3708270fe15f1a79aec161045d14e0be0526f9531a68d3df75019576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

