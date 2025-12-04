---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCMHVBE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFo%2FReqz0GZckhCSZGKrqiB69Ic1eUl%2FjOoTIxCIngZ8AiA7%2BU2nz00zdRZjkCEwOnBEpkbNusWjMHQ6Rsez61UcMir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM8bB89m%2FbUomAg2ZfKtwDB6zwDnAwa3mhRqxVv3JVFwj1nd6mDaS7KIWG8SFOV8OBCeU%2BHW49dxtxZRLMHU46uy6A4Cooj%2FxfZzBH7usJhNpl16jXBO%2FrrjZABNJ%2FbtXNNGhCwyY%2F0%2BJ1RPsQdBetu2N6bgYfyzf0XSeOTmsuxCdE82KZ%2FXpehkzgb5Z4K4I87BhQCoEY8D69x4NWlRLT1fA6b41%2FX5m2nWqWRXHqVLBiT74hslIU4HDl8tKoqU%2F739p6VcZDilu%2FosXkuzN%2FQAjvuS8Fy%2BeOY5ibcqMNhlXkh%2BHVCoKXhayEpCl%2BT9XjW1LlOKhTcGIvejPmIWO2Is0dzrqouhNLMuz8l0qUnUbYlQiRW3c35JGB4udSD0A0pnwseJmmiULM55atDKSozxIRSTpzROBdOE9a2im80dX1JVaGpoUgwYhEk6NRa0SjzTIQfR3tr%2FVfJNOFVqM1S7XDKRlZn%2FjjXG9E3PeKFN%2Fw8r3kdQ8CmE4WdHc%2B6N06eFLLPS496EVV1oOYatAU06qk8TQZ83OqyB9NSaRMjq3M%2BfN0anDD01BzbB6KT6u80EV1lJnv4qJMr2%2BtxUzdJy1iWtoCANZ5RwYS3ZdDPKE8bXhXu5MN7LO%2FfxhA%2B5lOECzN1TBYm4BlYIUwy8rFyQY6pgH2zWN5YIygPzo9maOYP3Yi20JhRBgoIuZ68p5Y5Tfvaj1hQF4kICYORfR%2BRPOQ08kFUtRqZkusYen0Y7UNIUrmW6JDZscLSJr2A1xqC7QDCy5f%2Fon0KQpc5o%2BtNo1uwMpAjvVv1RrWbr0ec8AvFsVBZk%2F5iE%2Fn6Mnu90taoWZU67wyuNj4IUfgaICouRNJZGVO3tslUkNuNh%2BJPGa1UY7%2FTudZ9Nlf&X-Amz-Signature=e25ff881e858c2e98e98eb83f095c1b0ea536d4a5717acebf274309111d4ad1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCMHVBE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFo%2FReqz0GZckhCSZGKrqiB69Ic1eUl%2FjOoTIxCIngZ8AiA7%2BU2nz00zdRZjkCEwOnBEpkbNusWjMHQ6Rsez61UcMir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM8bB89m%2FbUomAg2ZfKtwDB6zwDnAwa3mhRqxVv3JVFwj1nd6mDaS7KIWG8SFOV8OBCeU%2BHW49dxtxZRLMHU46uy6A4Cooj%2FxfZzBH7usJhNpl16jXBO%2FrrjZABNJ%2FbtXNNGhCwyY%2F0%2BJ1RPsQdBetu2N6bgYfyzf0XSeOTmsuxCdE82KZ%2FXpehkzgb5Z4K4I87BhQCoEY8D69x4NWlRLT1fA6b41%2FX5m2nWqWRXHqVLBiT74hslIU4HDl8tKoqU%2F739p6VcZDilu%2FosXkuzN%2FQAjvuS8Fy%2BeOY5ibcqMNhlXkh%2BHVCoKXhayEpCl%2BT9XjW1LlOKhTcGIvejPmIWO2Is0dzrqouhNLMuz8l0qUnUbYlQiRW3c35JGB4udSD0A0pnwseJmmiULM55atDKSozxIRSTpzROBdOE9a2im80dX1JVaGpoUgwYhEk6NRa0SjzTIQfR3tr%2FVfJNOFVqM1S7XDKRlZn%2FjjXG9E3PeKFN%2Fw8r3kdQ8CmE4WdHc%2B6N06eFLLPS496EVV1oOYatAU06qk8TQZ83OqyB9NSaRMjq3M%2BfN0anDD01BzbB6KT6u80EV1lJnv4qJMr2%2BtxUzdJy1iWtoCANZ5RwYS3ZdDPKE8bXhXu5MN7LO%2FfxhA%2B5lOECzN1TBYm4BlYIUwy8rFyQY6pgH2zWN5YIygPzo9maOYP3Yi20JhRBgoIuZ68p5Y5Tfvaj1hQF4kICYORfR%2BRPOQ08kFUtRqZkusYen0Y7UNIUrmW6JDZscLSJr2A1xqC7QDCy5f%2Fon0KQpc5o%2BtNo1uwMpAjvVv1RrWbr0ec8AvFsVBZk%2F5iE%2Fn6Mnu90taoWZU67wyuNj4IUfgaICouRNJZGVO3tslUkNuNh%2BJPGa1UY7%2FTudZ9Nlf&X-Amz-Signature=074d8905e603911e599be4fcf823675ec80053f9331b7ddc48a5a9cb6f080af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

