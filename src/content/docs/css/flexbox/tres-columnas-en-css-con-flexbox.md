---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQPRAXK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICHh5em5mQ16Mff9k%2B1eQdwHl71wooaOaGxhhhicqelKAiEA0kfTQ29cUDRcOpADDBh%2FU8FGlPQruycsPM1aM5WwODsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHFL7ZgOqyJheQ%2BWkircA2W56HWuhU5Z0eZOeY4vYcEl1BK051yjiEA3dvgMcs8xBMycr68uRMTD4NT2cvXHOInqnOuT3bAdtwV0SfOssLfA578H5CSmpQnC7BB3WbZxgbIU5ntCinCKXfO9TZ9RVc2aMyaUD4Or18AgzbyPBMRIvzfeImz478fmhanCNQ9XfD4YHE5HyKOo%2Fwux4adXXOV6jbYOd9GH8zy094MVntd6rYaT%2B94%2FrwUZKCQgQLqw9J%2FAU%2FlMpSwodrMR%2B6TVFgWbJzYgoy72QHzEU0%2BfxptDT2DHffNEs%2Bl%2Bx0a9u7fRP8YzLGXUX9shMEt4YgBXNcf3et1QWhfe4F9tCrJo65%2FTchJxGvlvc9qQgfjgT2GQFvKGI4PQpwzziFh%2BRzYw1ACt57Taj19EcgposFkZngd4rgvb7t%2BZ%2B16qlDVMp454oE4dXPrluWD%2BK0IrBRANtGhJWtZk3OWaPjndIZJa20cM7UEhP%2FSI9q48xtLOZEIOZPbFWc0RXmyzDMk3y1zA4Pz8p0E06QeV6wInawRatL0vKORkUP9ClBQWeePpdqTsSj9M1DICoWy%2BwlczQLiJRI%2FJrh9%2FqIgwovGGiBL6EM%2B6kL5ozgRv1g731QFyxpCbvABtMnmoUjnwU9X6MMatxMkGOqUBxFJ51up%2BOBtoEGdJcl9XPdrCWzqBKNerxyx%2BSvORHbstTdbb%2BMzDZ74VqQCIAhsM13IGCepMbPShtQuq4sRzItTJTANsiu7Bt9EdBIWtEsUJoEwNv1Rie6xrIOuOJdlV9rH1b8BUFrqUCXomgGtbvFn3QY%2B2lMFjRZJGab3gvfquYRSz2GcrcfOS55E15qTgDMUOSxV%2FpwvKEcMe1i94aRKWITzC&X-Amz-Signature=87c7625cdc516822b8f2685609cedc3b2477cfade2d8d9fe32db47062748f7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQPRAXK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICHh5em5mQ16Mff9k%2B1eQdwHl71wooaOaGxhhhicqelKAiEA0kfTQ29cUDRcOpADDBh%2FU8FGlPQruycsPM1aM5WwODsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHFL7ZgOqyJheQ%2BWkircA2W56HWuhU5Z0eZOeY4vYcEl1BK051yjiEA3dvgMcs8xBMycr68uRMTD4NT2cvXHOInqnOuT3bAdtwV0SfOssLfA578H5CSmpQnC7BB3WbZxgbIU5ntCinCKXfO9TZ9RVc2aMyaUD4Or18AgzbyPBMRIvzfeImz478fmhanCNQ9XfD4YHE5HyKOo%2Fwux4adXXOV6jbYOd9GH8zy094MVntd6rYaT%2B94%2FrwUZKCQgQLqw9J%2FAU%2FlMpSwodrMR%2B6TVFgWbJzYgoy72QHzEU0%2BfxptDT2DHffNEs%2Bl%2Bx0a9u7fRP8YzLGXUX9shMEt4YgBXNcf3et1QWhfe4F9tCrJo65%2FTchJxGvlvc9qQgfjgT2GQFvKGI4PQpwzziFh%2BRzYw1ACt57Taj19EcgposFkZngd4rgvb7t%2BZ%2B16qlDVMp454oE4dXPrluWD%2BK0IrBRANtGhJWtZk3OWaPjndIZJa20cM7UEhP%2FSI9q48xtLOZEIOZPbFWc0RXmyzDMk3y1zA4Pz8p0E06QeV6wInawRatL0vKORkUP9ClBQWeePpdqTsSj9M1DICoWy%2BwlczQLiJRI%2FJrh9%2FqIgwovGGiBL6EM%2B6kL5ozgRv1g731QFyxpCbvABtMnmoUjnwU9X6MMatxMkGOqUBxFJ51up%2BOBtoEGdJcl9XPdrCWzqBKNerxyx%2BSvORHbstTdbb%2BMzDZ74VqQCIAhsM13IGCepMbPShtQuq4sRzItTJTANsiu7Bt9EdBIWtEsUJoEwNv1Rie6xrIOuOJdlV9rH1b8BUFrqUCXomgGtbvFn3QY%2B2lMFjRZJGab3gvfquYRSz2GcrcfOS55E15qTgDMUOSxV%2FpwvKEcMe1i94aRKWITzC&X-Amz-Signature=47c1c94af6cd589ea7e954ce31fc3569a542f4c05b3ca09237bde5dbe0e96ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

