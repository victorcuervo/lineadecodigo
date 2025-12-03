---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXKDPGMO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHScAAT0Y4qjTuTza4PWn3wVsPn6mXlcFcvmBYF4ERGVAiEAzbYiI0MZB4xuFG3RqUHfMJE%2BdmTuzGhJqaRa43uvBcwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLEdxpYv0svAChxFFSrcA8ia%2BNCAjq1CclLiDpY78VXvEJ89a2vePpOcjEgWBWnMWgwp2vH8179vDwmS8YfdYf5eXBFRGQII7%2Fnb9BS0rv0ILL0AYfwP7sv8Y12FxbwvOkMsOG42jIRL9Dj6LY7%2Bjdt%2BEdMY5jDWKuPVb1RMxN3hiEiqyVUvrT08wScNyNRY%2FJyQoFjrVc8mA3MN5fCkh49s3tF1iUpehkPy5OaL2II55fNfOKIBqud9iz075eDpA4wKm3%2BZYMysFhtxi0qAqfySA%2Be0Kd5g4KblHml7Is7vqR%2F%2FtitcWbpi8eO2SRE2tOTjsh%2FVxCqcGP00tsuphaoKKHdr0Je7Vd29um4G9%2FMT4mwD5lH8ZFOYcVijc0tmKdZGYF0CJA4CkA3%2BNAxO1JVV7qOE8UIlfkYdKN9gvp%2Bds%2FzHecPeLrRcXnpN6FHtSnd2FJnlGjmL7poy1vYvHXfH1PVCCR0X04AtjPQcHIntLZROxGUJt10TsUpWDZjR9tbo25V6t4bHCse0YCmqWJrnsZBAvEgKfSzWEcXpEGuwDn%2FVmpQKJ7p2gXKCJtGev9uWEehAFszrA8yVyBPbUM9fMIjBwMRtGjZ7oTTMhYpjXjbPhJwjIthwrcbEtJ12aQuHL05gHNNRu17nMNeUvskGOqUBWRNSdNEhlUDX1i6i%2F3Qv82S8gJX5k2MCr1Fz3ET1rrJjuRmOYPHwDz9xxjTRlX%2FHu2OjAX7ITgnK6uw5fZ1N3fFCLNG6Y0v99bjyu8yRpMZAuVbOvlc54zLSWeJGE77xwRTXaPNqLhdz%2BbIFdQokSE%2F0hnwt3tM5Frp5cFBdjmWed%2FDvh6YJpC%2BBzvCWwu7DUgHjPkmRuLzbvC7mIH2vkHb9feMa&X-Amz-Signature=0388de6080aad2edb24e8c010403ab0e80f633ca556854830bbbd07a99e67663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXKDPGMO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHScAAT0Y4qjTuTza4PWn3wVsPn6mXlcFcvmBYF4ERGVAiEAzbYiI0MZB4xuFG3RqUHfMJE%2BdmTuzGhJqaRa43uvBcwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLEdxpYv0svAChxFFSrcA8ia%2BNCAjq1CclLiDpY78VXvEJ89a2vePpOcjEgWBWnMWgwp2vH8179vDwmS8YfdYf5eXBFRGQII7%2Fnb9BS0rv0ILL0AYfwP7sv8Y12FxbwvOkMsOG42jIRL9Dj6LY7%2Bjdt%2BEdMY5jDWKuPVb1RMxN3hiEiqyVUvrT08wScNyNRY%2FJyQoFjrVc8mA3MN5fCkh49s3tF1iUpehkPy5OaL2II55fNfOKIBqud9iz075eDpA4wKm3%2BZYMysFhtxi0qAqfySA%2Be0Kd5g4KblHml7Is7vqR%2F%2FtitcWbpi8eO2SRE2tOTjsh%2FVxCqcGP00tsuphaoKKHdr0Je7Vd29um4G9%2FMT4mwD5lH8ZFOYcVijc0tmKdZGYF0CJA4CkA3%2BNAxO1JVV7qOE8UIlfkYdKN9gvp%2Bds%2FzHecPeLrRcXnpN6FHtSnd2FJnlGjmL7poy1vYvHXfH1PVCCR0X04AtjPQcHIntLZROxGUJt10TsUpWDZjR9tbo25V6t4bHCse0YCmqWJrnsZBAvEgKfSzWEcXpEGuwDn%2FVmpQKJ7p2gXKCJtGev9uWEehAFszrA8yVyBPbUM9fMIjBwMRtGjZ7oTTMhYpjXjbPhJwjIthwrcbEtJ12aQuHL05gHNNRu17nMNeUvskGOqUBWRNSdNEhlUDX1i6i%2F3Qv82S8gJX5k2MCr1Fz3ET1rrJjuRmOYPHwDz9xxjTRlX%2FHu2OjAX7ITgnK6uw5fZ1N3fFCLNG6Y0v99bjyu8yRpMZAuVbOvlc54zLSWeJGE77xwRTXaPNqLhdz%2BbIFdQokSE%2F0hnwt3tM5Frp5cFBdjmWed%2FDvh6YJpC%2BBzvCWwu7DUgHjPkmRuLzbvC7mIH2vkHb9feMa&X-Amz-Signature=fae382f448a5d0aca67891b6af98403ce39f0b8ac9626a33caa58ec57f3fbf35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

