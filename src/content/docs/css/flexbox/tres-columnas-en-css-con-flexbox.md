---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IBKNEPI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVhEvBbD3IKzyrZUyoat3%2B8UNtHzAOepuJyOAT74xxZAIgXI7cO%2F9jYh170AmMc8rIDl9F%2BU%2BkXh777d9uIpb9LUcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6FCIBsSco6HE%2B%2B3ircAzm681%2FezM%2BZ1X01%2FbuOzBV7zz5XRj7gQzmNg9borrQiA%2Fve8WKN9KRF%2Fm69WoDK215NLOpbR3VeINY17afzaLS%2F3zBJ2nurnzTg9gzGWJp%2B5px2fqhUyrDEyYao0lmPzoYvgFEjmMfHYUP2eMbEoYiX0Ur9lKjZAmYQS9B5AvwQZpl7mO8Dgyy5hRpHtl9vjPPDNLRQyQ6lCPNwP6FjOu%2F3UayKkTxvtllES60pHkhNQ5LKszrxy2ufC%2B71mOzXmzYuae74tzElapx9EhjQMhtudLp1HV9IbmFlZL5W%2Fij8CB1eC5fWVRHZYEi46IxC8zt9037fjwqlxrg1MDX0WPaHczE1QR8OUFsE96BRzF6RyjzEv0pjEa8yMWmFBqWV%2BQ7mvlMokvpbpBMYY06dYl0Rqnqkgn7%2FWsagP71%2BdGKr0%2FHG4SnCXakt%2FSQsfHlmbsBOKM7lfNcaVGi998ZDo%2F8GWabYXsaqCSClo7VkVC8mxLLwsdeNmQYM1UfSOv%2FVasqUI%2BdGefpKb0OeyToIvRz9muPEockc5kG%2FUmL0jwg6OjFrQvEV7Li7KptXoTe6DynBoLffZ8OOOsqlF4rRv2WnaA50qdlYaDaXoOzwasdCXOfWhVdi0CnGpI5rMLih2MkGOqUBffT7ZLP2V1MO5PrinXQLMsTaN4Iri9wH%2FKxd8qGB3E1nNCFb%2BcmP0fHogNEH2%2FDW4WSYiZiYRIVYub6XBBdWeXU%2Fw5uH0bgbEMK%2Fv5r5owXA028s4RghoCh6Scl0LA1Z9b96z9bj5EatkhXe9p5oFqI0FOBa8EDzrFoq2wrwI1r3yMMVoNOKM1Gd2KeQKo8kBF4rBDcUMjKZf2WBDEcaeVX3MyTN&X-Amz-Signature=5daaa3bcb5cc1aae5f45f067d7b8c933d047b1d7395c4305e16cfded0ae2208d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IBKNEPI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVhEvBbD3IKzyrZUyoat3%2B8UNtHzAOepuJyOAT74xxZAIgXI7cO%2F9jYh170AmMc8rIDl9F%2BU%2BkXh777d9uIpb9LUcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6FCIBsSco6HE%2B%2B3ircAzm681%2FezM%2BZ1X01%2FbuOzBV7zz5XRj7gQzmNg9borrQiA%2Fve8WKN9KRF%2Fm69WoDK215NLOpbR3VeINY17afzaLS%2F3zBJ2nurnzTg9gzGWJp%2B5px2fqhUyrDEyYao0lmPzoYvgFEjmMfHYUP2eMbEoYiX0Ur9lKjZAmYQS9B5AvwQZpl7mO8Dgyy5hRpHtl9vjPPDNLRQyQ6lCPNwP6FjOu%2F3UayKkTxvtllES60pHkhNQ5LKszrxy2ufC%2B71mOzXmzYuae74tzElapx9EhjQMhtudLp1HV9IbmFlZL5W%2Fij8CB1eC5fWVRHZYEi46IxC8zt9037fjwqlxrg1MDX0WPaHczE1QR8OUFsE96BRzF6RyjzEv0pjEa8yMWmFBqWV%2BQ7mvlMokvpbpBMYY06dYl0Rqnqkgn7%2FWsagP71%2BdGKr0%2FHG4SnCXakt%2FSQsfHlmbsBOKM7lfNcaVGi998ZDo%2F8GWabYXsaqCSClo7VkVC8mxLLwsdeNmQYM1UfSOv%2FVasqUI%2BdGefpKb0OeyToIvRz9muPEockc5kG%2FUmL0jwg6OjFrQvEV7Li7KptXoTe6DynBoLffZ8OOOsqlF4rRv2WnaA50qdlYaDaXoOzwasdCXOfWhVdi0CnGpI5rMLih2MkGOqUBffT7ZLP2V1MO5PrinXQLMsTaN4Iri9wH%2FKxd8qGB3E1nNCFb%2BcmP0fHogNEH2%2FDW4WSYiZiYRIVYub6XBBdWeXU%2Fw5uH0bgbEMK%2Fv5r5owXA028s4RghoCh6Scl0LA1Z9b96z9bj5EatkhXe9p5oFqI0FOBa8EDzrFoq2wrwI1r3yMMVoNOKM1Gd2KeQKo8kBF4rBDcUMjKZf2WBDEcaeVX3MyTN&X-Amz-Signature=6e78ddbc8353a9caa8da6f450e98fedeb0bd258480d2d0ecb0e6fe7b0083f3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

