---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DLC5G2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FKJDFehFj%2FW%2FET9cwmxDzyzSBc1WGeP2JATMr9qYIzAiEA9aGH676OpLYO8QugIiDuEGFa48fMimAVThrgBzTCcjIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ54G3yebPDsVv%2FYISrcA3c1X%2B9gCrVorwKZnfTQPURBxELy3KwTkRrQZo7%2BaHVp8P4bTiHc7qgVp3R70oLrvNkZRnYWKmRSFfgSykYa0uSABUTwpzKo1zpc%2F4zqyvvv%2FaPyBTQVfmOTvnYbF34NLk5IVAKD%2FKrvcgUeDCFQpwmoh3r1s1EpVZ9L9gkIptk4yd2deq90ZIBq7c7a2kJcizFGu%2F0Lq7xnqp7WaFKDxhGvzsa7QktgYEil8WWs39TdAEcpb18kQMJva8KClanEBmufLFAV3TgYxML6tgRr30fl27kUCNDpQ4XrK62FffXOv9WCmcK2cdlaYMYBVVGC4yCsHTsOBaFVaQdk6royTXKB7%2Brtsn8Ot0QRPZkINqmgggHFe%2F5jC8iuNfM%2B0mSpduQ45rol3cuK5cnkDoaCG2RfOWVKtnuyHYhaeEEqNr5wjB6ozSFRpxDjplK8HfLzmZwjZf4PihtzGJjaiRKzcsp9KRfz2aYjdDPJB8t4nEIDMz6vDYgG6pDIu65I7H3QNMiQNHy0%2FqDTYhdzDv75JjXpSjaKEHNeyPrRCFdnrb5hboyBYxX4rCGkfpgETC44Ql8XlprPzqpgYhwNYuRVvKlTT5YYY78zYlqDT9NBPhmDPIk4tB9lH8AYM8sWMK3R2MkGOqUBCJTtmeiv0%2BhgpX4ip4ajHeZinUU6ZQkn1z8T%2Byjoc0chYh5WOR2uXCxVGN0ofqUNv4Sh5aIq46mZc2X2uGxQlgwbJTmy8GX57bW6In2j05WG4x%2FGd16dfrh%2FdsaJ9qUCiJaDFffdDGbY%2Fw%2FFSisVafLL5BvTec1vgyMsWs8SV2G4VH60J7FQ49Fmgocpi0pug27bi3CeL0QKx74dwOJJpOONFg%2F%2F&X-Amz-Signature=41961a924cb24ad71f8f997c90059436196449fd0fb27eaf78d1712b34306bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DLC5G2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FKJDFehFj%2FW%2FET9cwmxDzyzSBc1WGeP2JATMr9qYIzAiEA9aGH676OpLYO8QugIiDuEGFa48fMimAVThrgBzTCcjIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ54G3yebPDsVv%2FYISrcA3c1X%2B9gCrVorwKZnfTQPURBxELy3KwTkRrQZo7%2BaHVp8P4bTiHc7qgVp3R70oLrvNkZRnYWKmRSFfgSykYa0uSABUTwpzKo1zpc%2F4zqyvvv%2FaPyBTQVfmOTvnYbF34NLk5IVAKD%2FKrvcgUeDCFQpwmoh3r1s1EpVZ9L9gkIptk4yd2deq90ZIBq7c7a2kJcizFGu%2F0Lq7xnqp7WaFKDxhGvzsa7QktgYEil8WWs39TdAEcpb18kQMJva8KClanEBmufLFAV3TgYxML6tgRr30fl27kUCNDpQ4XrK62FffXOv9WCmcK2cdlaYMYBVVGC4yCsHTsOBaFVaQdk6royTXKB7%2Brtsn8Ot0QRPZkINqmgggHFe%2F5jC8iuNfM%2B0mSpduQ45rol3cuK5cnkDoaCG2RfOWVKtnuyHYhaeEEqNr5wjB6ozSFRpxDjplK8HfLzmZwjZf4PihtzGJjaiRKzcsp9KRfz2aYjdDPJB8t4nEIDMz6vDYgG6pDIu65I7H3QNMiQNHy0%2FqDTYhdzDv75JjXpSjaKEHNeyPrRCFdnrb5hboyBYxX4rCGkfpgETC44Ql8XlprPzqpgYhwNYuRVvKlTT5YYY78zYlqDT9NBPhmDPIk4tB9lH8AYM8sWMK3R2MkGOqUBCJTtmeiv0%2BhgpX4ip4ajHeZinUU6ZQkn1z8T%2Byjoc0chYh5WOR2uXCxVGN0ofqUNv4Sh5aIq46mZc2X2uGxQlgwbJTmy8GX57bW6In2j05WG4x%2FGd16dfrh%2FdsaJ9qUCiJaDFffdDGbY%2Fw%2FFSisVafLL5BvTec1vgyMsWs8SV2G4VH60J7FQ49Fmgocpi0pug27bi3CeL0QKx74dwOJJpOONFg%2F%2F&X-Amz-Signature=3e41e97362ef5fb2928e3db5f0a5c0386a85c7bb32bc417f76d816e4217775be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

