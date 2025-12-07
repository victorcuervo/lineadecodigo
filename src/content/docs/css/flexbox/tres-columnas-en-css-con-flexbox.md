---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBLCG2A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVCiN9nb8%2FhBxILtlJVDp9pgTwFEIOqRezdvomFNfgbAiAQEIIfgFMoRqh%2BIBa83qRymmD9V8vy2vJ48SbBdRXUtyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FcUSQrhv9l2jMMfhKtwDj7kAM%2FZnn7Gk2mgk0tF5G7IocgA46ZdYzibuWRXzDjpFW9lr2mUks7nNrZfWoUbvwOFi2Mk6PCVV1JD0HaEImVcIxWrwE3ab%2BW9q897QElVx2Gx8enyyLPdMxlBITrtfnWsXAKjlzigUZiHmRRQRhH2MAveUh4IxQPEFQZfFONs2v%2Fxfxw2pobqXB9cRi8LQnBzZeFOG0Zzw5o9VMwG0wImTMZSLca9K1F%2BYVeDRDxf8X9p%2BTq9DyFzf7C16Zo9gOOZki9lMIH5dls3wdv4ls9diH1DmAdqkpky%2BIjz%2F4fsQnsuO0jz2hSKHWOMPEZW0Ym%2B5MGh6%2BRjog2E%2B8plCcN56rAxl14II3Dze51DgIpLi0RzKYuSdXJ3RnAXQbCyL0tNvM11keXnGZUHoxVChvWDX9DiGvjdCC%2B%2BdAxfQugebd5cu%2BDq0cTp%2BoeLasrjMcCDaNy0HUfsjd5FV9UCYdj2URXxM0MX7zVMG52SyT4pqrADL11xww1C3f7X0HPOw8EjwPpqXBovXgEKrcwgLtus38Y8ZcYBfw2aACzbBDkZTn1%2FeDXcZW3AhCQZcIo2q9f1g567KQq9fdDtW66X2zRil41QnGm1I1K2O4ychy3wm0a8fz4oF4pjYN5sw68bXyQY6pgH0Cup6vv%2FQW0KoSg8s8BfDqJuT5Bc5OCmEOqeTI02d3wW78G3zQt0QUYuNX%2BCEMuQnqUjiqYJl5O%2Bxsa68PuAo3kE8yngGzidSjmlmg3sLdudbd%2BhJM0dUjj74k7K5UiZgNSDSLk97HS3Gh3Ja3HVtUTBVOb85L8qjfa5uSVsNee9wEyJcbjBkXK51A2jWyiK%2BphVuEZfKDRfSqlOaAe5cdWv2dujF&X-Amz-Signature=a5c170cd726c1578b3f0e6c18cf6a35442de68e9284593a5c99068c611e0123e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBLCG2A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVCiN9nb8%2FhBxILtlJVDp9pgTwFEIOqRezdvomFNfgbAiAQEIIfgFMoRqh%2BIBa83qRymmD9V8vy2vJ48SbBdRXUtyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FcUSQrhv9l2jMMfhKtwDj7kAM%2FZnn7Gk2mgk0tF5G7IocgA46ZdYzibuWRXzDjpFW9lr2mUks7nNrZfWoUbvwOFi2Mk6PCVV1JD0HaEImVcIxWrwE3ab%2BW9q897QElVx2Gx8enyyLPdMxlBITrtfnWsXAKjlzigUZiHmRRQRhH2MAveUh4IxQPEFQZfFONs2v%2Fxfxw2pobqXB9cRi8LQnBzZeFOG0Zzw5o9VMwG0wImTMZSLca9K1F%2BYVeDRDxf8X9p%2BTq9DyFzf7C16Zo9gOOZki9lMIH5dls3wdv4ls9diH1DmAdqkpky%2BIjz%2F4fsQnsuO0jz2hSKHWOMPEZW0Ym%2B5MGh6%2BRjog2E%2B8plCcN56rAxl14II3Dze51DgIpLi0RzKYuSdXJ3RnAXQbCyL0tNvM11keXnGZUHoxVChvWDX9DiGvjdCC%2B%2BdAxfQugebd5cu%2BDq0cTp%2BoeLasrjMcCDaNy0HUfsjd5FV9UCYdj2URXxM0MX7zVMG52SyT4pqrADL11xww1C3f7X0HPOw8EjwPpqXBovXgEKrcwgLtus38Y8ZcYBfw2aACzbBDkZTn1%2FeDXcZW3AhCQZcIo2q9f1g567KQq9fdDtW66X2zRil41QnGm1I1K2O4ychy3wm0a8fz4oF4pjYN5sw68bXyQY6pgH0Cup6vv%2FQW0KoSg8s8BfDqJuT5Bc5OCmEOqeTI02d3wW78G3zQt0QUYuNX%2BCEMuQnqUjiqYJl5O%2Bxsa68PuAo3kE8yngGzidSjmlmg3sLdudbd%2BhJM0dUjj74k7K5UiZgNSDSLk97HS3Gh3Ja3HVtUTBVOb85L8qjfa5uSVsNee9wEyJcbjBkXK51A2jWyiK%2BphVuEZfKDRfSqlOaAe5cdWv2dujF&X-Amz-Signature=3b19a69b386ed6e14dec8d9d21c4bc74b485a7b9719e94310e713181984154a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

