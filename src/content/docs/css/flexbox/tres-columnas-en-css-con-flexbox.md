---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFAZTRK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDXCFoHr9e%2Ba8ImjCuOq7ApHIjf%2FKg1NAvbbiDqOPuoAiEAku%2BoW%2FsutRquXP7x1BrFmILdk%2BpUxir88ErJmg6bsXIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjap79IYis%2B59XSnCrcA1WEr6tknUi2%2FTTUs1E0Pgo8tE0An9au5nnfY3BP1VxpkOlGkUiILDCyN0FV%2BR1K6xCwf7DUVZ7Qz4w28UOZPONPiazWCBirUm6OFozeN3pVaUPxaYveeRi1RMqKp8kyIudVpq3Hr%2Fch8r3OaKnYugqx3%2BY7xqjZqzwFzcmJz8%2FDRibpDLyqqqSGUQcSmn5Dwe6GXTqbLVtOw7zGqnlUSwB1yx1fqTpi4Ew5PyoKhDpH4wH3zwGjdrgj%2Bb5pQRrpAGD8xNra4cOrCcRmuU24OnpBVWvZ8nW9zQCVfKGYQtB7tyRI46GqS0U1xXCXwIUpYrEvWYUMeP8ggO7Z9mIYTDHodj1W6yc%2F%2BjysaMgS7pJhenrx5dIW5RhVpskra4uUG4uVC229zofmjP1k6ZCY7GUSlm%2F3tG5s%2B%2Bc%2F%2FxHAgKIF1%2FeYTeAla6ynNFqPTJAqrk4d4PuAhYACrPpIC2EGQnTxjzoPP1SS5lkw8QJ3jH7ZHOnEwNc11%2FZ97Oj6B%2B6eYuGH2aztfCNVjbR1NPq3AMx9GCCZLPYeQK%2F65CW2VdmRvzVK88GO9VR26lP%2FEkbdnTVldk94iMqL1o%2FmQ1fOzrH97pwYA%2F3PW6YEQGaE%2F9f7seS0Teui08EKE2XMMJK61skGOqUBv0vjkOMVWoPjLER1r6nvt8lzESMz2sX%2BobSrUJwtVAgiba7aZPvNJVEMbzF7PCVkom9IcOctc4QH%2F23WOJtlEadOM%2F18H7jsOS1Ko5msPBJbXKXwubrQkyFAQcVKyAy8AmRa5uat%2FA4aWOzNZ1FWc%2FQqNaF1ZHDASYUm4IktyS3H9cqmdw9RL2PfxmSTwTQ4OKAHYKIyAKNWAq2V%2Bc7WMqasEJyV&X-Amz-Signature=5581b4d0e6df6b27884a0164d93924f7f867547f09bcb8134825b7c2b2b35e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFAZTRK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDXCFoHr9e%2Ba8ImjCuOq7ApHIjf%2FKg1NAvbbiDqOPuoAiEAku%2BoW%2FsutRquXP7x1BrFmILdk%2BpUxir88ErJmg6bsXIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjap79IYis%2B59XSnCrcA1WEr6tknUi2%2FTTUs1E0Pgo8tE0An9au5nnfY3BP1VxpkOlGkUiILDCyN0FV%2BR1K6xCwf7DUVZ7Qz4w28UOZPONPiazWCBirUm6OFozeN3pVaUPxaYveeRi1RMqKp8kyIudVpq3Hr%2Fch8r3OaKnYugqx3%2BY7xqjZqzwFzcmJz8%2FDRibpDLyqqqSGUQcSmn5Dwe6GXTqbLVtOw7zGqnlUSwB1yx1fqTpi4Ew5PyoKhDpH4wH3zwGjdrgj%2Bb5pQRrpAGD8xNra4cOrCcRmuU24OnpBVWvZ8nW9zQCVfKGYQtB7tyRI46GqS0U1xXCXwIUpYrEvWYUMeP8ggO7Z9mIYTDHodj1W6yc%2F%2BjysaMgS7pJhenrx5dIW5RhVpskra4uUG4uVC229zofmjP1k6ZCY7GUSlm%2F3tG5s%2B%2Bc%2F%2FxHAgKIF1%2FeYTeAla6ynNFqPTJAqrk4d4PuAhYACrPpIC2EGQnTxjzoPP1SS5lkw8QJ3jH7ZHOnEwNc11%2FZ97Oj6B%2B6eYuGH2aztfCNVjbR1NPq3AMx9GCCZLPYeQK%2F65CW2VdmRvzVK88GO9VR26lP%2FEkbdnTVldk94iMqL1o%2FmQ1fOzrH97pwYA%2F3PW6YEQGaE%2F9f7seS0Teui08EKE2XMMJK61skGOqUBv0vjkOMVWoPjLER1r6nvt8lzESMz2sX%2BobSrUJwtVAgiba7aZPvNJVEMbzF7PCVkom9IcOctc4QH%2F23WOJtlEadOM%2F18H7jsOS1Ko5msPBJbXKXwubrQkyFAQcVKyAy8AmRa5uat%2FA4aWOzNZ1FWc%2FQqNaF1ZHDASYUm4IktyS3H9cqmdw9RL2PfxmSTwTQ4OKAHYKIyAKNWAq2V%2Bc7WMqasEJyV&X-Amz-Signature=171b6e9d2d43417d7ffb4f6844f500f82b5a58e0cdb496c6652e2df9ca62de02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

