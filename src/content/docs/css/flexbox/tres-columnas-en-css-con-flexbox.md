---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXRPNZQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCHZmcNS08yQWz0iiISzi0Qb0oIzgQv%2Byd7RZIBQUw3fQIhAPAfEgUay0UHr0BobuToLy4NI7QfoJdLzcSiBAztcynCKv8DCEUQABoMNjM3NDIzMTgzODA1IgyCbmSS9UXoURKQtqwq3AML87J81%2FkTBnHKfTZrNlGnLX50DQzdPSdA%2B6RLGLAfmmzv9a4eYLHmhvcR1HjT6mRQNPMmWK%2BImozojkiIgo%2FQ%2BDD42oqxTe3QKya3GP26cvN3Ol%2FJBcSSp9jTPdee6CfoKANDNDszNxfyuIxCImnAvA2wZVb2eFW0%2BrvoQAgKJrP3teNxESsVFt8AhCEkofAIi0XX%2BDncxjSNYpfAbKyWa5144sgyx08LBDgztNEKl8ht%2Frk6uDe1F2twNRGBCI5M257v1Sw5ioIDLAbe%2BigzarDeorEERzBHeH9IBLlgUPshuBElJCe9qkztDG9bYdvBaSqqG2CimJ5SMjciaSQjhxyQoGwdiVegHWTmYjiypACbxPdfR44%2FI3%2F7SyM3XnBZKZjDvrwsMWwCJWPEWfygoeCU3zA5pyixq0Q5NTWkiHAAKdIrX%2FimKNQnCDBrChT3rIOc%2FXd%2BP7tzbuJgsCFC3A9qryJfYmmjTPomkwFf9W2%2Bu%2FuKdxqHXJrwpkmiOe5xRHnwTmA0E9FVQbkYvKcXbZHChTtD1RILk%2B6Uz8t0ufqTSoTABGqIVl6Fr%2FhgU4gWtCTppFj1h7%2Bmw9Da%2FAtY0H0YnOh%2BVUz5BYjfPbpZg7%2FybktvwSk39bifejDM5sXJBjqkAZff%2FPP%2F6%2FMs76IhHnJjDL9WIRqZ9OfxGrOQ7G7ZZWD3jleEu9pmsYKB8WLVn8rqp%2FSc6xu0w9pgk4O6ya20JT1sx5YgNQ%2B01W7nzpV6oKwwSzWGUT9FJreCrb7vKPDrfMRfOZ4zD86tUctcPS2hvk%2BRdtVrM%2BCo8U1YyO3PE8xzSPYTfptCOy3cprlKmE3YreR5a%2FRbBUdi0vyA%2FJixGrCm7KwP&X-Amz-Signature=28a19c7897174b9ea25d28887c1211136f8b446647ed280b24490b4f57bccd45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXRPNZQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCHZmcNS08yQWz0iiISzi0Qb0oIzgQv%2Byd7RZIBQUw3fQIhAPAfEgUay0UHr0BobuToLy4NI7QfoJdLzcSiBAztcynCKv8DCEUQABoMNjM3NDIzMTgzODA1IgyCbmSS9UXoURKQtqwq3AML87J81%2FkTBnHKfTZrNlGnLX50DQzdPSdA%2B6RLGLAfmmzv9a4eYLHmhvcR1HjT6mRQNPMmWK%2BImozojkiIgo%2FQ%2BDD42oqxTe3QKya3GP26cvN3Ol%2FJBcSSp9jTPdee6CfoKANDNDszNxfyuIxCImnAvA2wZVb2eFW0%2BrvoQAgKJrP3teNxESsVFt8AhCEkofAIi0XX%2BDncxjSNYpfAbKyWa5144sgyx08LBDgztNEKl8ht%2Frk6uDe1F2twNRGBCI5M257v1Sw5ioIDLAbe%2BigzarDeorEERzBHeH9IBLlgUPshuBElJCe9qkztDG9bYdvBaSqqG2CimJ5SMjciaSQjhxyQoGwdiVegHWTmYjiypACbxPdfR44%2FI3%2F7SyM3XnBZKZjDvrwsMWwCJWPEWfygoeCU3zA5pyixq0Q5NTWkiHAAKdIrX%2FimKNQnCDBrChT3rIOc%2FXd%2BP7tzbuJgsCFC3A9qryJfYmmjTPomkwFf9W2%2Bu%2FuKdxqHXJrwpkmiOe5xRHnwTmA0E9FVQbkYvKcXbZHChTtD1RILk%2B6Uz8t0ufqTSoTABGqIVl6Fr%2FhgU4gWtCTppFj1h7%2Bmw9Da%2FAtY0H0YnOh%2BVUz5BYjfPbpZg7%2FybktvwSk39bifejDM5sXJBjqkAZff%2FPP%2F6%2FMs76IhHnJjDL9WIRqZ9OfxGrOQ7G7ZZWD3jleEu9pmsYKB8WLVn8rqp%2FSc6xu0w9pgk4O6ya20JT1sx5YgNQ%2B01W7nzpV6oKwwSzWGUT9FJreCrb7vKPDrfMRfOZ4zD86tUctcPS2hvk%2BRdtVrM%2BCo8U1YyO3PE8xzSPYTfptCOy3cprlKmE3YreR5a%2FRbBUdi0vyA%2FJixGrCm7KwP&X-Amz-Signature=bb4854455eb1f4dd53ca42d9790b56dbc79e4f63559f1e625b1a4cb5aa369c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

