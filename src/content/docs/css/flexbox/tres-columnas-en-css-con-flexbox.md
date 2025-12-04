---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGOKAVQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICgMnP6OYWNvNX9hpmx5A1w8Vzb0UErJcU1BN472VwSgAiEAunMAM9nMF7AT%2BiJy5EY9sHoZRBjxj2FmzTNJj44obzoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBwztxck5kpEzqn9dircA2uAedRSZEe2%2FUrT7ee3iP91IMLK6IiQ3KJsSrlYNDfUWDZbM%2Fdvz6ATH61TmVqIHgWt5RvofCy%2FvC%2By33QRyTrQtJT1uAzU6pQJdmUaOlAbLVsJhgKhDxZBUuhpAoUsgQf5cfaPsBrGMGovMTRd2Dbf3XgpGevZwA1%2BR9ydEIvLYb62%2BuZzQKH2FVGgMndwJWAstihm8xmB15tjXcqBu0ACWth4KxVGwPjLn%2F1yguijiKxCQYt9ryglV3RPyoWpJ7zZz5AkryHOHDJinqNTwjEMAkfyWrV%2BKQw9aobpEvNDNfB9EE%2FKxeZnVB9r6sKN7fPhaBvQgHledBdun6S73WGuLaUfMIqaF4%2BPMS%2FFYQdR0u5ieofBQenpKTEHIlk9Z2C%2BMnJKxv4tr1F38LgJ8XEoQj%2BnL9sufMXB7bNi8ruywhkG7UEQ4Uk%2FS8H6nD3u21WzWDq4tZ0kdT5Lu2cfvffeEU7D1heltScGYmeEWyAMuYqjsS0sCkGGfCrtGL%2F%2BNMi12XKYUF0Q2TKlgWqI5II2WvoN4YxslN%2F%2BzrHYZDHEPP9ryB2H1qZr6v2IQfp%2FZMg9MshMTFThouOIVbuniqcBoGaSabmnG3UgkLgZUGhLZ7fNYNFt4KXxWg99MMiqxckGOqUBRPFqdj6RZOumAwB9XhVnUY4O0c7k%2B%2F4pbte5zVfdv%2FVq0BRe8KPQnVwjOEb%2B98qwvAWtWnZ2vBMqY%2FBJZ3Z0QT49nHAL%2BNJhLiP27xKYan1%2FBlQWI9jR9T%2BxJtiMiNPg%2FYoMUKUdIOeFxusbGXqdVRWyB83fU1pXHh%2FAdl%2FJQUGP9kqEkeckeJdG135vMaKhyLLQUzxdxvRn7lEHvehewHJZjr9d&X-Amz-Signature=a8f0c36e00b27418eceab8b2b05b1b11006379d946c948db06c1c376118882fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGOKAVQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICgMnP6OYWNvNX9hpmx5A1w8Vzb0UErJcU1BN472VwSgAiEAunMAM9nMF7AT%2BiJy5EY9sHoZRBjxj2FmzTNJj44obzoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBwztxck5kpEzqn9dircA2uAedRSZEe2%2FUrT7ee3iP91IMLK6IiQ3KJsSrlYNDfUWDZbM%2Fdvz6ATH61TmVqIHgWt5RvofCy%2FvC%2By33QRyTrQtJT1uAzU6pQJdmUaOlAbLVsJhgKhDxZBUuhpAoUsgQf5cfaPsBrGMGovMTRd2Dbf3XgpGevZwA1%2BR9ydEIvLYb62%2BuZzQKH2FVGgMndwJWAstihm8xmB15tjXcqBu0ACWth4KxVGwPjLn%2F1yguijiKxCQYt9ryglV3RPyoWpJ7zZz5AkryHOHDJinqNTwjEMAkfyWrV%2BKQw9aobpEvNDNfB9EE%2FKxeZnVB9r6sKN7fPhaBvQgHledBdun6S73WGuLaUfMIqaF4%2BPMS%2FFYQdR0u5ieofBQenpKTEHIlk9Z2C%2BMnJKxv4tr1F38LgJ8XEoQj%2BnL9sufMXB7bNi8ruywhkG7UEQ4Uk%2FS8H6nD3u21WzWDq4tZ0kdT5Lu2cfvffeEU7D1heltScGYmeEWyAMuYqjsS0sCkGGfCrtGL%2F%2BNMi12XKYUF0Q2TKlgWqI5II2WvoN4YxslN%2F%2BzrHYZDHEPP9ryB2H1qZr6v2IQfp%2FZMg9MshMTFThouOIVbuniqcBoGaSabmnG3UgkLgZUGhLZ7fNYNFt4KXxWg99MMiqxckGOqUBRPFqdj6RZOumAwB9XhVnUY4O0c7k%2B%2F4pbte5zVfdv%2FVq0BRe8KPQnVwjOEb%2B98qwvAWtWnZ2vBMqY%2FBJZ3Z0QT49nHAL%2BNJhLiP27xKYan1%2FBlQWI9jR9T%2BxJtiMiNPg%2FYoMUKUdIOeFxusbGXqdVRWyB83fU1pXHh%2FAdl%2FJQUGP9kqEkeckeJdG135vMaKhyLLQUzxdxvRn7lEHvehewHJZjr9d&X-Amz-Signature=5f16407a1360dd1dafa438db813157d6439d83f58ca504c73c4f9894719c0670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

