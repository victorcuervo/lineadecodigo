---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XUKHJBG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgHmfpIcVatXQCDMxIbVX1FSA%2BXnYLCbm%2FICIYRPArgwIhAIbaCtAqJg%2Fm9Py1wJHCI2gBB5bZvc4A%2BQaTmVlE0JUVKv8DCFUQABoMNjM3NDIzMTgzODA1Igz16INMm8pyaIuo9ggq3AMGFrDsVqPlKjw6n3faCU4e%2B2nB1CNNyqnQrbn2dyPnst2OgE9OHDVaCE81c2xBg8mYfjzHIzptGCM7HiTWcQks4KbOlhD6opZBH7Pxuy3bLMPFgZpP9ikO3ckRYKpdYRmx6ZdFJFgtvDAr8W3EDpB7aO%2BLwapT%2FYBq007S%2BLwJexfpb1lUrF40He%2BcfNXHlO6QfqF75KhCl2gSu2nQYoX3A8BQ9JFknV%2BRTTEBGCFnBa9oOXS5ECDKqK88ZKiOY3h7PCE66tRhOUsjngzTqbEBPXO4HTbgjcvwSu4p42Id4hHsC62tJFvq7tUxOe4R4d0eS18LITW3jt5HntPOwczZo9C6UhxeYIIVkZo9nzS8YSDv5FMG7UXKHfLus7MDy0wZNyw7dNpolhOeeoB2W4LAyWZxJgNejb7CZJmfNJiK%2BTU%2B5lfv%2B0LGsZDkBpozA5OslFyFincMvM5IOD%2BQF29KRMas%2B4SQdA%2BvKURXgQQHDBDt7inAZDJhbAhRHcBs%2Bft6N4wexKLD72amV%2FXuE082VdV%2Bdg0zFdo5DnNtjb%2FbmT4ZyFAUMjJejmz7MUBLUpds9sr2imrvRk%2FO8%2BQkNHd1Bzzzu%2F6SpYhI9%2Bwi%2BHtoCsC%2B%2BPROFSPffRGe2DCpr8nJBjqkAQvqlfAXk4Bcl6l95PscwQ8zM2YepwwgykrgHJGw4KK9Wg38Cz5w3LWZv5VkJC%2BKdFDQc0xsWc9UNZ0dz7xDCSQvDj4DYzJNXO23YCP%2F37oC%2FL8ZkasOQ7M3ATOO%2F4m2RAnndSK%2BxUjdSD5XMMbOhvQr0RnIU9sJlW3bWYTBhQ9nr0E5XYHTx2EMaxyCLI8SzFPJmMnX2hTXgbz6etwTtl2uTfSg&X-Amz-Signature=a323324eca041cb65832214076cf70681d15a530f5c7e4503f04fa0326347295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XUKHJBG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgHmfpIcVatXQCDMxIbVX1FSA%2BXnYLCbm%2FICIYRPArgwIhAIbaCtAqJg%2Fm9Py1wJHCI2gBB5bZvc4A%2BQaTmVlE0JUVKv8DCFUQABoMNjM3NDIzMTgzODA1Igz16INMm8pyaIuo9ggq3AMGFrDsVqPlKjw6n3faCU4e%2B2nB1CNNyqnQrbn2dyPnst2OgE9OHDVaCE81c2xBg8mYfjzHIzptGCM7HiTWcQks4KbOlhD6opZBH7Pxuy3bLMPFgZpP9ikO3ckRYKpdYRmx6ZdFJFgtvDAr8W3EDpB7aO%2BLwapT%2FYBq007S%2BLwJexfpb1lUrF40He%2BcfNXHlO6QfqF75KhCl2gSu2nQYoX3A8BQ9JFknV%2BRTTEBGCFnBa9oOXS5ECDKqK88ZKiOY3h7PCE66tRhOUsjngzTqbEBPXO4HTbgjcvwSu4p42Id4hHsC62tJFvq7tUxOe4R4d0eS18LITW3jt5HntPOwczZo9C6UhxeYIIVkZo9nzS8YSDv5FMG7UXKHfLus7MDy0wZNyw7dNpolhOeeoB2W4LAyWZxJgNejb7CZJmfNJiK%2BTU%2B5lfv%2B0LGsZDkBpozA5OslFyFincMvM5IOD%2BQF29KRMas%2B4SQdA%2BvKURXgQQHDBDt7inAZDJhbAhRHcBs%2Bft6N4wexKLD72amV%2FXuE082VdV%2Bdg0zFdo5DnNtjb%2FbmT4ZyFAUMjJejmz7MUBLUpds9sr2imrvRk%2FO8%2BQkNHd1Bzzzu%2F6SpYhI9%2Bwi%2BHtoCsC%2B%2BPROFSPffRGe2DCpr8nJBjqkAQvqlfAXk4Bcl6l95PscwQ8zM2YepwwgykrgHJGw4KK9Wg38Cz5w3LWZv5VkJC%2BKdFDQc0xsWc9UNZ0dz7xDCSQvDj4DYzJNXO23YCP%2F37oC%2FL8ZkasOQ7M3ATOO%2F4m2RAnndSK%2BxUjdSD5XMMbOhvQr0RnIU9sJlW3bWYTBhQ9nr0E5XYHTx2EMaxyCLI8SzFPJmMnX2hTXgbz6etwTtl2uTfSg&X-Amz-Signature=1fa8ccbd2aafe1e14443e12220d22d04efa6c05a44e7662900d79da48bf5ac5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

