---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPYLC6UR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB6YPwJfGXT8oCiCZ%2FBocMuKJTLM5gw8DuYCWZruFL6gIgA598RXol6TEa7arIx8rYgzOyxtbdj%2FCUl9o72LU7XxEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0%2BDY4ygD2F9Fd70ircA7tU5yzsDxMcUQOxXVI1t2VOOg4VISWp0QxYYdGjklEKGJNh37bchbBjgTGA2Whorf83%2FKtIVSGpBrFRntsNWQw69x97Z4H9rgGnox3J4elzXJ0DhFXjEdYRJUnU1AWh%2FzZMymrm5tAHImW44xHAdT9J1YPz0VFbjMlyWplWjLNdtM8FoI1BmdPbEkYXvwk3CwwSvxoAAoTL%2FvvCf6b2sFP3NMy%2FVveRxxROxpG5OHneD1msK9RW1LljRP5EmAzdqCNNs%2B6iUUSJxyp%2Fa5i4hzxOSK9mSoJ2n64S39GNNloRO%2BZuQrHWKbBqFPAOnV5zZRB7idUP%2FWfpqzCYfGQc0IFQNb%2BHmUe6D8ZkvfO0kG4aYpGZZUAWy1TKx%2FnTlAQTJBgUXDXRzCXiD3LZ1UHw%2Fucgf3ST%2BFsMhR9rqreqj07aXeMX%2Bh5JRVOudi1VZz7osFuhnyXpTrW5qVolqnHBnH4yP2flokADeDa3FXtmfQDzz7RxAEs1REOtbH9fz9P9ZMtGXxvDh9JAqP2lKHJuDAyDkOG3Hsws%2FTfOix3v2hMzFiQF32ejgz%2BnLL5TbnXLh1WyEqH2p4gspmZco5pvd%2FgidzBK03uDgIZSAprRAL1VoMA%2BS3wJEN4pbqjgMMbH18kGOqUBmdxqKlP6AAwlw9ZUX39naROht%2FiX0MGREJEVGXUEUFEbPnl0%2FiSTWbBedUX7%2FAfNYC2H03iIvdyfGj5JSQv5dEf%2FidDcAgdKI08XVzbleT9Y%2B941jXX4jpUBUKfP4nd220EjCey78Yn4vLYaU56g8dZgMtYDzcqUOhJaNS2thuygia5giR1aVWD7DXa6%2F04HAsc47906PZ7vdKG%2FVytqeKeFanvp&X-Amz-Signature=05d1dd3aaf6f5eeb4a28630aeecb4eeea3bb52e44b6e1a8745e78d054c23534b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPYLC6UR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB6YPwJfGXT8oCiCZ%2FBocMuKJTLM5gw8DuYCWZruFL6gIgA598RXol6TEa7arIx8rYgzOyxtbdj%2FCUl9o72LU7XxEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0%2BDY4ygD2F9Fd70ircA7tU5yzsDxMcUQOxXVI1t2VOOg4VISWp0QxYYdGjklEKGJNh37bchbBjgTGA2Whorf83%2FKtIVSGpBrFRntsNWQw69x97Z4H9rgGnox3J4elzXJ0DhFXjEdYRJUnU1AWh%2FzZMymrm5tAHImW44xHAdT9J1YPz0VFbjMlyWplWjLNdtM8FoI1BmdPbEkYXvwk3CwwSvxoAAoTL%2FvvCf6b2sFP3NMy%2FVveRxxROxpG5OHneD1msK9RW1LljRP5EmAzdqCNNs%2B6iUUSJxyp%2Fa5i4hzxOSK9mSoJ2n64S39GNNloRO%2BZuQrHWKbBqFPAOnV5zZRB7idUP%2FWfpqzCYfGQc0IFQNb%2BHmUe6D8ZkvfO0kG4aYpGZZUAWy1TKx%2FnTlAQTJBgUXDXRzCXiD3LZ1UHw%2Fucgf3ST%2BFsMhR9rqreqj07aXeMX%2Bh5JRVOudi1VZz7osFuhnyXpTrW5qVolqnHBnH4yP2flokADeDa3FXtmfQDzz7RxAEs1REOtbH9fz9P9ZMtGXxvDh9JAqP2lKHJuDAyDkOG3Hsws%2FTfOix3v2hMzFiQF32ejgz%2BnLL5TbnXLh1WyEqH2p4gspmZco5pvd%2FgidzBK03uDgIZSAprRAL1VoMA%2BS3wJEN4pbqjgMMbH18kGOqUBmdxqKlP6AAwlw9ZUX39naROht%2FiX0MGREJEVGXUEUFEbPnl0%2FiSTWbBedUX7%2FAfNYC2H03iIvdyfGj5JSQv5dEf%2FidDcAgdKI08XVzbleT9Y%2B941jXX4jpUBUKfP4nd220EjCey78Yn4vLYaU56g8dZgMtYDzcqUOhJaNS2thuygia5giR1aVWD7DXa6%2F04HAsc47906PZ7vdKG%2FVytqeKeFanvp&X-Amz-Signature=2bfbe48ec5e7969309b33c3ec841c20f7a1070c03c5129a1037cea8120a683bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

