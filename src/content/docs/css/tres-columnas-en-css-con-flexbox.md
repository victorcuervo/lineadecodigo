---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZZN6QRI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG5U%2FIPullQn3pZOtxx5K%2F8YYxR6TpNmlMGPi3Y%2BkeWhAiBN6P9WKeA7b4nAxegMiy2xMwd2JEICsgxr%2FSBQT7MqAir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMk5hp4DW1KgBvk3jxKtwD4GD8XSlBVZoH8trJG9zoLl3KcU%2F7ug6XkdtH8ihU70XGdMfeo6Jz0DmZapq9EGg%2BjCTWVNlHmz4jozWrUkB7OhWKJdWHrcjOmfv229IuCsjsuy8jQ02KZKfJO2MdY4zTGpFjgHu%2B%2BpqsOsQREgjpCA3Mofom91WDMniOxRGYGypsu0JPtkobipgy%2BEGOepfNL0topAUPnBSSs0w1%2FZzrx5N4841VkwMUuTZpRkkZBmAsAiMdJ%2FJ5%2BKS9B4lG1UPxnDhIvpUF8eyU13IPYGZHxKOCsWlgQK8RVa0Nusxpqw8Zmcm%2BWmWBfihAk4peNDP%2F0qyzuef4%2FbRqngRIWdcX%2FS457dkGpP%2FGMsZIGBaq5YL7vp7FVhbiBPP9VUrD3KSzthf2iJtXRJLiaVSZb%2BT03%2FYquVsJFSP0UiA%2BPxXrDZrP%2B6VNfjANQOQqeLPbrfeEbMSQc3hU59dKAQou8KHs%2FaFF1egBz4PkDEmhDOrdaoBsZjDtgTUDmbCORMq50givUmBqzjXqzR8arVwEY2C4bMpTO4qfcGQswtNrny7AgTDXWxJ%2FW3qt3%2Fb7rcC7dIw%2FNu4oHtP8eNzb%2B6xX8%2FRc09wszeD%2BCsmopOqfKcLEUO5P5%2BCLNCFJ56%2FkZJIwiN3CyQY6pgFg0dZ8XtTJTrLa5uyHLHFAcJlxl4MCAPVz3%2F%2Fk7qUX3nm%2FDkdmPnhiBORMDkkHvKEyHr0u85Z29JA1%2BMglM5Y8D8TMMOZqlK5zO8VwI3f0MpIidObhMi6xUI8uDv4k2YXCRvvc5Lw3fWrsRvmRctiwuwO9sQVg0kN1mVo1kA9z7eCJgfmPN1GTYbw7ETAepUaBWQ3O0ShkMgPRYM2GrJeMqAnkRhBA&X-Amz-Signature=fd204b15023b5b08748cd44808257c13e11954e9f34d857f9454f82a4addf9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZZN6QRI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG5U%2FIPullQn3pZOtxx5K%2F8YYxR6TpNmlMGPi3Y%2BkeWhAiBN6P9WKeA7b4nAxegMiy2xMwd2JEICsgxr%2FSBQT7MqAir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMk5hp4DW1KgBvk3jxKtwD4GD8XSlBVZoH8trJG9zoLl3KcU%2F7ug6XkdtH8ihU70XGdMfeo6Jz0DmZapq9EGg%2BjCTWVNlHmz4jozWrUkB7OhWKJdWHrcjOmfv229IuCsjsuy8jQ02KZKfJO2MdY4zTGpFjgHu%2B%2BpqsOsQREgjpCA3Mofom91WDMniOxRGYGypsu0JPtkobipgy%2BEGOepfNL0topAUPnBSSs0w1%2FZzrx5N4841VkwMUuTZpRkkZBmAsAiMdJ%2FJ5%2BKS9B4lG1UPxnDhIvpUF8eyU13IPYGZHxKOCsWlgQK8RVa0Nusxpqw8Zmcm%2BWmWBfihAk4peNDP%2F0qyzuef4%2FbRqngRIWdcX%2FS457dkGpP%2FGMsZIGBaq5YL7vp7FVhbiBPP9VUrD3KSzthf2iJtXRJLiaVSZb%2BT03%2FYquVsJFSP0UiA%2BPxXrDZrP%2B6VNfjANQOQqeLPbrfeEbMSQc3hU59dKAQou8KHs%2FaFF1egBz4PkDEmhDOrdaoBsZjDtgTUDmbCORMq50givUmBqzjXqzR8arVwEY2C4bMpTO4qfcGQswtNrny7AgTDXWxJ%2FW3qt3%2Fb7rcC7dIw%2FNu4oHtP8eNzb%2B6xX8%2FRc09wszeD%2BCsmopOqfKcLEUO5P5%2BCLNCFJ56%2FkZJIwiN3CyQY6pgFg0dZ8XtTJTrLa5uyHLHFAcJlxl4MCAPVz3%2F%2Fk7qUX3nm%2FDkdmPnhiBORMDkkHvKEyHr0u85Z29JA1%2BMglM5Y8D8TMMOZqlK5zO8VwI3f0MpIidObhMi6xUI8uDv4k2YXCRvvc5Lw3fWrsRvmRctiwuwO9sQVg0kN1mVo1kA9z7eCJgfmPN1GTYbw7ETAepUaBWQ3O0ShkMgPRYM2GrJeMqAnkRhBA&X-Amz-Signature=4065646bfc5b3f769ce2b5d31128e45782fd3052b27caa6583a4a827343e599a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

