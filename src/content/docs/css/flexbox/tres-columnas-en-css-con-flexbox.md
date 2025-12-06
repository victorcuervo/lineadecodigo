---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5DFFMA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK2SlOeGY6W1%2FvcwjKc5%2BHitEQhUItuKfo97DnTs%2F4AAiEA4I9FfCTUwpftBxJgS0b%2BPA6mK6cgskuJfmPFWlckexsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDV7B7s1H1OI2mpyPCrcA5JVQ%2F8tkA4sNdX4kEuYN%2BMvai3rpVUzKOxWtD7wWQIuceCDVFxg9iPEypRgZ9Ruuth8HplnZzqrFIx1Ck1vx3wRUQs0H1OgvLivBxD3W3zAA3jgowOKOuyHX8CgTOJhl7rQaI5IOVvRHhFSZBUIdTpSvxhsVOfQXbxl4q%2Fk2zSWcGXfYeiuq%2FNWV6032trXBxa8G2uPJp4kZ1YcpjKys0C%2BFsHVS20YUAv3YFKlbocZs%2BxWuBWT2Z19WVv427tShQF%2FIL3ijb%2BnnXVIf6Q9qgauCkkUO8YnUc%2FkOZsiSordipiBExplkZtK4fMc33oHzZVhC1LWuT0qug%2FrxDzZKo8F1OW%2FgPRiKLneJ%2FBDC9RYr0ZFAlkh8y5rTWfPDUhNT4n2TquZZETy44ILMF6afgJeZPvG7NpTaVAs35RivN4VU1GXwd9fGed09GbwrN6hWxgqezRd6AUHk0nV8d%2B53E3Mktoz7mRGkbaY%2BYtnQvH6zB5IhVqC5caIGL%2F9XlE8NByUtT6l2E%2FSAQEP3i%2FmmVfE%2BdOR9Iby9cSbOREHJ46bcpJea%2Fpp8jDH3f9W24%2FkQU9HtYB7zs2cEFNU2PFp8OFC56o4pfVkFMIelE5SAfnE3x2HycjxQcNjYTZsMPSm0MkGOqUBG5C8itHY%2FsO6gk4Pjbzsc%2BXNPiYj1W%2Fye2wJdA4CymtUaUW2zFQNfI2Flt0%2Fck0KUiSx6T%2B0GkGxUcQeAXRe0RSNwfWzGYAq3KKGObf34oGUEJvs0GE%2Fx51%2F1qn94%2FGe9DoOj3LsmUsN9X%2FFuJSIZ90YPPpjyIgYnqQmEHSVN6OXU7k6zOV5sHEmRCV2ZWbuMNhZWUK2C3TMsSqJeMSITVvf6AvK&X-Amz-Signature=acd818cd9fdc4c77142989e618627aed3c5119d96d314ba62378a66d0d5f55fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5DFFMA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK2SlOeGY6W1%2FvcwjKc5%2BHitEQhUItuKfo97DnTs%2F4AAiEA4I9FfCTUwpftBxJgS0b%2BPA6mK6cgskuJfmPFWlckexsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDV7B7s1H1OI2mpyPCrcA5JVQ%2F8tkA4sNdX4kEuYN%2BMvai3rpVUzKOxWtD7wWQIuceCDVFxg9iPEypRgZ9Ruuth8HplnZzqrFIx1Ck1vx3wRUQs0H1OgvLivBxD3W3zAA3jgowOKOuyHX8CgTOJhl7rQaI5IOVvRHhFSZBUIdTpSvxhsVOfQXbxl4q%2Fk2zSWcGXfYeiuq%2FNWV6032trXBxa8G2uPJp4kZ1YcpjKys0C%2BFsHVS20YUAv3YFKlbocZs%2BxWuBWT2Z19WVv427tShQF%2FIL3ijb%2BnnXVIf6Q9qgauCkkUO8YnUc%2FkOZsiSordipiBExplkZtK4fMc33oHzZVhC1LWuT0qug%2FrxDzZKo8F1OW%2FgPRiKLneJ%2FBDC9RYr0ZFAlkh8y5rTWfPDUhNT4n2TquZZETy44ILMF6afgJeZPvG7NpTaVAs35RivN4VU1GXwd9fGed09GbwrN6hWxgqezRd6AUHk0nV8d%2B53E3Mktoz7mRGkbaY%2BYtnQvH6zB5IhVqC5caIGL%2F9XlE8NByUtT6l2E%2FSAQEP3i%2FmmVfE%2BdOR9Iby9cSbOREHJ46bcpJea%2Fpp8jDH3f9W24%2FkQU9HtYB7zs2cEFNU2PFp8OFC56o4pfVkFMIelE5SAfnE3x2HycjxQcNjYTZsMPSm0MkGOqUBG5C8itHY%2FsO6gk4Pjbzsc%2BXNPiYj1W%2Fye2wJdA4CymtUaUW2zFQNfI2Flt0%2Fck0KUiSx6T%2B0GkGxUcQeAXRe0RSNwfWzGYAq3KKGObf34oGUEJvs0GE%2Fx51%2F1qn94%2FGe9DoOj3LsmUsN9X%2FFuJSIZ90YPPpjyIgYnqQmEHSVN6OXU7k6zOV5sHEmRCV2ZWbuMNhZWUK2C3TMsSqJeMSITVvf6AvK&X-Amz-Signature=856cabaf2afb5ab3396294b9bbe64c204e16bcd6a1d52989aa168dfed0a4eef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

