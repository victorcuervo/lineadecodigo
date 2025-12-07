---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMGOLRX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDilUOmoEOfgJpw%2Fxd32UybNjyPm6Rpo9rJAW7iz7PMoQIgTsCpHYtANwNbX5qg5%2BI7hQjc9R3m5UZcxSzRpn3d5VwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDURffmy6fnbwINTKircA7K4ROjDsMbi92No4R6c2uagIoCMy5pukkrm4m33RGyYYe%2FiIQayw4R%2BzAtnguDiV1RyPqhMzTlIuIrA827Oh%2BhvRUHnePnO8VaP0wv1P80GFoIBlSB8qK3Y7YHVm3odBevGRIwZ2Zi9MGJ9JtJKsEbmbgGP0HoHwtsZlvpDmKs4EJHakkjNta0oxxUtVfAw7xYvYYMCW2v%2BsAmYD1%2FOoke%2FczS7nK%2BEXfKZZ%2Bdnlo9P841TXQCxVeZ3rejPuInArQq6MHtQFtrbQAUhfQo0qG30w%2BHYrc8SwBMNFr10UrptH09DVN1nbTvqqUjbgJZaPab%2BcubVRnPTFCThH6Y5N7M8D3W2G1va7sH0jlRULnhOxly%2Bmokre1k%2FX8cESwrVVoOxgXFms%2BF%2FKozZJZT2qXKt986wTp%2BcinMSzrndeeo14ar7tAOFEl6S%2FVD%2Fomg91KcBgWJhRbcPjpcR07s4FwQ6oPd0GgNojX7xad7CZdpotdE9wTfGhPM5vstM8cWuqljdxPdIBil2iXPgOlYjA%2FvJKwwZuUT0ZCJsz%2B6DaH%2FsvdlCLXXFh9uSfQEPP%2BnFfWRbVYe%2FcoK2lF0ID0eNBTZtVHYxh7Auam1v1eUysxispswvsQYteQ3xLSgxMMbH18kGOqUBC4Tnv9%2BJ5Q9rqyb%2FPLvh6VQEK%2BUiKUAv5OcB2CQdw7vVI6bmSQJYWdJfFy4h%2FuJkJPvEf6gbifquG5CLg%2B8dspY5aOZtXR3%2FRk6tHWujkA8P8AIlE9VzETkPjOw9fSEPxDxY%2FPQxV6mAbk5O71ESteH5tDe%2FqIk6F6hRw34npWDvyWH%2B689PuQcLVTPG2nY1LutD6U4tpTlKoRPupIBNwo0ABaFQ&X-Amz-Signature=c08af642b395cd4488fa3753b09d3896f995d366ad4830990d71e118de6f10c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMGOLRX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDilUOmoEOfgJpw%2Fxd32UybNjyPm6Rpo9rJAW7iz7PMoQIgTsCpHYtANwNbX5qg5%2BI7hQjc9R3m5UZcxSzRpn3d5VwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDURffmy6fnbwINTKircA7K4ROjDsMbi92No4R6c2uagIoCMy5pukkrm4m33RGyYYe%2FiIQayw4R%2BzAtnguDiV1RyPqhMzTlIuIrA827Oh%2BhvRUHnePnO8VaP0wv1P80GFoIBlSB8qK3Y7YHVm3odBevGRIwZ2Zi9MGJ9JtJKsEbmbgGP0HoHwtsZlvpDmKs4EJHakkjNta0oxxUtVfAw7xYvYYMCW2v%2BsAmYD1%2FOoke%2FczS7nK%2BEXfKZZ%2Bdnlo9P841TXQCxVeZ3rejPuInArQq6MHtQFtrbQAUhfQo0qG30w%2BHYrc8SwBMNFr10UrptH09DVN1nbTvqqUjbgJZaPab%2BcubVRnPTFCThH6Y5N7M8D3W2G1va7sH0jlRULnhOxly%2Bmokre1k%2FX8cESwrVVoOxgXFms%2BF%2FKozZJZT2qXKt986wTp%2BcinMSzrndeeo14ar7tAOFEl6S%2FVD%2Fomg91KcBgWJhRbcPjpcR07s4FwQ6oPd0GgNojX7xad7CZdpotdE9wTfGhPM5vstM8cWuqljdxPdIBil2iXPgOlYjA%2FvJKwwZuUT0ZCJsz%2B6DaH%2FsvdlCLXXFh9uSfQEPP%2BnFfWRbVYe%2FcoK2lF0ID0eNBTZtVHYxh7Auam1v1eUysxispswvsQYteQ3xLSgxMMbH18kGOqUBC4Tnv9%2BJ5Q9rqyb%2FPLvh6VQEK%2BUiKUAv5OcB2CQdw7vVI6bmSQJYWdJfFy4h%2FuJkJPvEf6gbifquG5CLg%2B8dspY5aOZtXR3%2FRk6tHWujkA8P8AIlE9VzETkPjOw9fSEPxDxY%2FPQxV6mAbk5O71ESteH5tDe%2FqIk6F6hRw34npWDvyWH%2B689PuQcLVTPG2nY1LutD6U4tpTlKoRPupIBNwo0ABaFQ&X-Amz-Signature=b0566cb5fbd97e677aba28475deb963d186972d53a6928dd926e20dc78e9ef5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

