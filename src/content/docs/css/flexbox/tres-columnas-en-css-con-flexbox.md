---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ARNKT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDi03KOXfS6yf5cJyhoIZk5YO01%2FmfSuLf1ViLvekFRkAiA4aUB0sKGOxQSnrKNsbBtV0ddiArhbbzSolJqY8JziqiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGBCewzLBaNCeY58dKtwD3qV0%2FCptoMHYgC45JHHad%2BoWfRaRUoVoPobwtyMILZMReUutiYBrPjVvEM6OHzMToD0no8aZPJLVLuJPP0KfiSHKUO%2BOXmVBs9064MqMDoB%2BPUdANGITMnmVRLlY1RkSeLK2N5d2wqtyPSXKWA%2BQNWPVobVq%2BZjMB9LbI6akkZ3TwGBXrzS%2BAwjFhFS%2FXCs7Ryb%2FijhYY5vAHZQBfEJjBzOCJANNU%2FPzqtO%2F9Em9BZDuisWLq0j%2FS%2BXjvxsjbUDTTvDBSXkgC63358ZjrZANrUzynfFQWkiDYqSK7hlkpQ4oWY1asMoWnOoYemAcAnvW72vyKl3ogxM6qb4Z7ElkYIR64AJfBQi291GprdrDDH5shB6HviB0fJ09gp0ztKEo9hY%2FO6HxDlajF8IeqPaA6QIZTetvgiOsvUFDOmoTqb8V6lcmAdZOMLjvPVbp%2Boge0YlQ4IXFnPBDV9uKI6nzi%2B3PIKKwf80tTbKahSJgACyqz3RkJhUgKh1uhPwHEjKtKkUllPvkjSeRhx7X004U0sLJbVjeXKBAZEzktSyq1N1kuuazadHS%2F7qgktDHr%2BI1sMWyLOId87oE0%2BBOpJO3zk%2BE9dxserimC6AGN2b5lcTxZ8%2BE%2FA8qE%2FDa8I8wzt3cyQY6pgG4L%2F0nmTZ6H7QvWKzyMXs7ojPiJVst9OBWmNxU8gGg%2Fn9Fj0i8L7gZ7AiinndCYx6Ey%2FClTAlGAGyn4QajdUXa9MG9f8oU%2FQCp1sE%2ByDcPelF4PSKbXe0WL015gW3BgUhC6O2%2B6umIDqG2%2Bz579I1qjp2yIkNF0ddzoZt11Ojck1nCDj1ZAeaWtWvHtzt7gU84dBe73sBBZ2hwMauISR820O0xK1an&X-Amz-Signature=1c50f669df18c7565e0d88996ffd1c0e6f542e6ea2f6f976ad1445e3af257882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ARNKT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDi03KOXfS6yf5cJyhoIZk5YO01%2FmfSuLf1ViLvekFRkAiA4aUB0sKGOxQSnrKNsbBtV0ddiArhbbzSolJqY8JziqiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGBCewzLBaNCeY58dKtwD3qV0%2FCptoMHYgC45JHHad%2BoWfRaRUoVoPobwtyMILZMReUutiYBrPjVvEM6OHzMToD0no8aZPJLVLuJPP0KfiSHKUO%2BOXmVBs9064MqMDoB%2BPUdANGITMnmVRLlY1RkSeLK2N5d2wqtyPSXKWA%2BQNWPVobVq%2BZjMB9LbI6akkZ3TwGBXrzS%2BAwjFhFS%2FXCs7Ryb%2FijhYY5vAHZQBfEJjBzOCJANNU%2FPzqtO%2F9Em9BZDuisWLq0j%2FS%2BXjvxsjbUDTTvDBSXkgC63358ZjrZANrUzynfFQWkiDYqSK7hlkpQ4oWY1asMoWnOoYemAcAnvW72vyKl3ogxM6qb4Z7ElkYIR64AJfBQi291GprdrDDH5shB6HviB0fJ09gp0ztKEo9hY%2FO6HxDlajF8IeqPaA6QIZTetvgiOsvUFDOmoTqb8V6lcmAdZOMLjvPVbp%2Boge0YlQ4IXFnPBDV9uKI6nzi%2B3PIKKwf80tTbKahSJgACyqz3RkJhUgKh1uhPwHEjKtKkUllPvkjSeRhx7X004U0sLJbVjeXKBAZEzktSyq1N1kuuazadHS%2F7qgktDHr%2BI1sMWyLOId87oE0%2BBOpJO3zk%2BE9dxserimC6AGN2b5lcTxZ8%2BE%2FA8qE%2FDa8I8wzt3cyQY6pgG4L%2F0nmTZ6H7QvWKzyMXs7ojPiJVst9OBWmNxU8gGg%2Fn9Fj0i8L7gZ7AiinndCYx6Ey%2FClTAlGAGyn4QajdUXa9MG9f8oU%2FQCp1sE%2ByDcPelF4PSKbXe0WL015gW3BgUhC6O2%2B6umIDqG2%2Bz579I1qjp2yIkNF0ddzoZt11Ojck1nCDj1ZAeaWtWvHtzt7gU84dBe73sBBZ2hwMauISR820O0xK1an&X-Amz-Signature=47654af9133e1932feafadad933fbbb7df1fbf97ab4600d8b47baf76c5383f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

