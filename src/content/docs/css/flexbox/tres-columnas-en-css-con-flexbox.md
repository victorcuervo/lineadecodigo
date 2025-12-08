---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJGKVYQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgO8b5O7SS7boYIyjXBhliWvrwCFlEXxEUMOefHgjLlAIgfGzik2ktMBDtayaH8r%2BLTZgfDNwdKQUWtgDWrzm6Bt8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCG3XdRUJEVO9cJwCrcA7PUbElBK1FSJNaIRYQIRBFFs06SQShzhSORzdjLH9a%2F073G3l%2FS5iArvtXi2ycK8gPsuzl3PktGv9siV9NQt5Ah8VigCpwFYXiHWcK1aH5yv3prWG0wWraaCl6fkqqGcDZac896U2CU%2For%2FgUAFg3PTcj3LbsgFxRQGRPjRY7BqqNqdmNAocNBYPPihP1lTPQSRUfouMlqq82fhFdvUDX7rqcXisa%2Foqo%2Fx76oJgspmg19OazaWvbQI6EFwEXa9tEgdxhsSXKE0Kv0KYhBgv516H7t8B%2BdwdZoGDXQkeNgmzYymOZeNJGW9j4QIy%2FxVLUUccN%2Bdt5htjqvsLnNVDvdb7O2wQ%2B2qL%2B1U%2BPnYMzsMMYbuBx9Oh1MzfMbBJSKLX1cfBS2Ns86TaGfitAEh%2BcMkBFqsmSokioDPEhND5cc3Uqv9p%2FSAwruTF2qivQPodcNkPMAjeG4ZU31jstjkSuFKPhgqDWLT6Xl25exOX7CvMjdkEtXXbCcV9RhI8AgQHDuOL6PGknyanS5jdsi3XqD49joJ6LQiEx8SFi8DNJMcLvzEt5J%2FQD7sFA6zjDhEy7K8BIC6BN%2B0kyJbTY5fqL0QYQWNLqkq%2FZX0CLHExW8p7iaJtm4GuLpUHqk%2BMOeG3MkGOqUBKA9XKs98X2BVXcVm63FBWXJjBLOA%2BfC8Npo%2FYgwEPgD4OnfqzPJCEVzsITutv7rb5muD9cXJXbL8FYT9VPfZH4JrOn2G5yJ1KGgEjo6U%2F0fmto50b20nJ9IyidppiHYEzFDjDz%2BG7dF6CUjtk6EyJLDjKpueWaqyLsbUqkMDuOLIgYl0rbhgDgMoUsul8A4d9J2ZCK0m50Ad2Ti5kp68vasax2nW&X-Amz-Signature=c3956f81ec12b1b442572119c514128dbd77d9c7ddf4993f2c52569f3c858dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJGKVYQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgO8b5O7SS7boYIyjXBhliWvrwCFlEXxEUMOefHgjLlAIgfGzik2ktMBDtayaH8r%2BLTZgfDNwdKQUWtgDWrzm6Bt8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCG3XdRUJEVO9cJwCrcA7PUbElBK1FSJNaIRYQIRBFFs06SQShzhSORzdjLH9a%2F073G3l%2FS5iArvtXi2ycK8gPsuzl3PktGv9siV9NQt5Ah8VigCpwFYXiHWcK1aH5yv3prWG0wWraaCl6fkqqGcDZac896U2CU%2For%2FgUAFg3PTcj3LbsgFxRQGRPjRY7BqqNqdmNAocNBYPPihP1lTPQSRUfouMlqq82fhFdvUDX7rqcXisa%2Foqo%2Fx76oJgspmg19OazaWvbQI6EFwEXa9tEgdxhsSXKE0Kv0KYhBgv516H7t8B%2BdwdZoGDXQkeNgmzYymOZeNJGW9j4QIy%2FxVLUUccN%2Bdt5htjqvsLnNVDvdb7O2wQ%2B2qL%2B1U%2BPnYMzsMMYbuBx9Oh1MzfMbBJSKLX1cfBS2Ns86TaGfitAEh%2BcMkBFqsmSokioDPEhND5cc3Uqv9p%2FSAwruTF2qivQPodcNkPMAjeG4ZU31jstjkSuFKPhgqDWLT6Xl25exOX7CvMjdkEtXXbCcV9RhI8AgQHDuOL6PGknyanS5jdsi3XqD49joJ6LQiEx8SFi8DNJMcLvzEt5J%2FQD7sFA6zjDhEy7K8BIC6BN%2B0kyJbTY5fqL0QYQWNLqkq%2FZX0CLHExW8p7iaJtm4GuLpUHqk%2BMOeG3MkGOqUBKA9XKs98X2BVXcVm63FBWXJjBLOA%2BfC8Npo%2FYgwEPgD4OnfqzPJCEVzsITutv7rb5muD9cXJXbL8FYT9VPfZH4JrOn2G5yJ1KGgEjo6U%2F0fmto50b20nJ9IyidppiHYEzFDjDz%2BG7dF6CUjtk6EyJLDjKpueWaqyLsbUqkMDuOLIgYl0rbhgDgMoUsul8A4d9J2ZCK0m50Ad2Ti5kp68vasax2nW&X-Amz-Signature=948cc04e0c2c2d8cc2f51d040df33dab47b751694387695097e556f090925047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

