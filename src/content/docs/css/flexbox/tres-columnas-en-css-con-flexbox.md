---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVP3E7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbYSf3M%2BSTnpFmfpwLwIaJlmkFDBMmrU83LJMqda2yVAiEAiQwUHZ9fksxJzV3ooBAouP9vcA5SyqZ7pH9y5DPcFcUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFHuz4GKlmTOdScGxyrcA2febDsQIh02PpD%2FfyjF3vXspEGXGbMqnpgz5HjlTljmLIx8o7lOw0CPGpqb57%2BDXdUUXYMfKAIEApvgcB31eLxTNXUm6Ftk%2BRAIrXNcd1k3dmhPxtlMUzWDhOXdUjKga09vmU76IA1CU5NLw7fcrkcvVqUZ2%2FdaaT7J6vyF9iHK3cn5iPUTHuPbxlyJAnuOi%2F5DDuzDQjT9RqVq%2Bac8Rahc2%2BqJmy0AjCfRMvthqjVTVmUnte4v5KVJvN2S8hSgY7PqZI1%2BJtykdFei9rXuoWk37n1umJ82lIJaKof35ZYxdl8qf1AjCjLWl9QAI5BaSqBvrIdsrYOmILcRal1CPxFbjbX4U5mp6yBFy2ohKvjm8u2dXS6laDLi4UnUvZFzsWvQNYXUQa6y4lYSXQSf%2FFn5VmyBYYwWW%2FxE6z1ud46oNlywOBTAzQuZBQa0dnyTj%2Fs%2F8uWx4tvnEwPN4J7T6MzVLznwJ113Pyn%2F2C7c6XBJ1runu7nH2iSD%2BP5YYSquDc2nqWXJ%2BS7k3Qu9iaCz5AWMYqrQSdw3E0wPtD7YXrzkuYDOcSCyIYdEkp2LtqmhFe9Wg9aJ%2FIHGt%2FGlD8uhJ7m4%2BdfFhWubnhL83nadYdSs4OY%2BOefjWxJAz%2BvhMMPJ0ckGOqUBU%2FmeDlGpOEKluD4LuKhP%2F1OcZegQpslbnHhB9Oin0I2VKMlRlpKW44mv4uwKyeJ7GpQhpyW1PLRkoMV9LfXpoNkGwa6UuK5d5Hd%2FEFsICznUjDeI%2Fk%2BSYWiYrJWuX72RPN8%2BdB4nirPWDsPEW1Am9WTxIDYRx1N0W4uCfmHt6t5s%2BkWRM4NJrwXiJBMy9JI8HT2D2tHDLK1Dk78En5qWKuc4WCDK&X-Amz-Signature=c9ddb9cece939b02c32c087211b42982dfb9922bdd052c4262690a9b88c48864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVP3E7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbYSf3M%2BSTnpFmfpwLwIaJlmkFDBMmrU83LJMqda2yVAiEAiQwUHZ9fksxJzV3ooBAouP9vcA5SyqZ7pH9y5DPcFcUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFHuz4GKlmTOdScGxyrcA2febDsQIh02PpD%2FfyjF3vXspEGXGbMqnpgz5HjlTljmLIx8o7lOw0CPGpqb57%2BDXdUUXYMfKAIEApvgcB31eLxTNXUm6Ftk%2BRAIrXNcd1k3dmhPxtlMUzWDhOXdUjKga09vmU76IA1CU5NLw7fcrkcvVqUZ2%2FdaaT7J6vyF9iHK3cn5iPUTHuPbxlyJAnuOi%2F5DDuzDQjT9RqVq%2Bac8Rahc2%2BqJmy0AjCfRMvthqjVTVmUnte4v5KVJvN2S8hSgY7PqZI1%2BJtykdFei9rXuoWk37n1umJ82lIJaKof35ZYxdl8qf1AjCjLWl9QAI5BaSqBvrIdsrYOmILcRal1CPxFbjbX4U5mp6yBFy2ohKvjm8u2dXS6laDLi4UnUvZFzsWvQNYXUQa6y4lYSXQSf%2FFn5VmyBYYwWW%2FxE6z1ud46oNlywOBTAzQuZBQa0dnyTj%2Fs%2F8uWx4tvnEwPN4J7T6MzVLznwJ113Pyn%2F2C7c6XBJ1runu7nH2iSD%2BP5YYSquDc2nqWXJ%2BS7k3Qu9iaCz5AWMYqrQSdw3E0wPtD7YXrzkuYDOcSCyIYdEkp2LtqmhFe9Wg9aJ%2FIHGt%2FGlD8uhJ7m4%2BdfFhWubnhL83nadYdSs4OY%2BOefjWxJAz%2BvhMMPJ0ckGOqUBU%2FmeDlGpOEKluD4LuKhP%2F1OcZegQpslbnHhB9Oin0I2VKMlRlpKW44mv4uwKyeJ7GpQhpyW1PLRkoMV9LfXpoNkGwa6UuK5d5Hd%2FEFsICznUjDeI%2Fk%2BSYWiYrJWuX72RPN8%2BdB4nirPWDsPEW1Am9WTxIDYRx1N0W4uCfmHt6t5s%2BkWRM4NJrwXiJBMy9JI8HT2D2tHDLK1Dk78En5qWKuc4WCDK&X-Amz-Signature=32df0f3d434bf3e3919ed6fcf7ae8e34c54ae3c39b69635d88297e82fdea22dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

