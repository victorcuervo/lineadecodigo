---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBDJBJB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcG3pgkpE1xhLMlxgyGksT9lyaiYgtp6iPDACZda4m0QIhAM2Ds7EeR9xVTKWwhCjdRKY3ClBAfu2HFwVo2DdJE733KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz367T%2FqBbbUbHN3Wgq3ANqQCwfiHvuJ0tp1VLSvylKl%2FlC78CyI0G4kQ6GFAI066bZTp8TwaNWkEr7zOx8eP5fjWz0wtVfv7TpTahaDd4ggKSEyJkHCLHSOXa8dx%2FyrhemElAUAEAxORiCmRHJrvjoJSQn4vh4htlqenKV7A31yCOxIC3E8BJU%2FjD2op4yn8a4BTGOj%2FMM%2F1eRSsXo4mldTfmMfCbI8HngyZsch1qQHCer9pegNKbbD1LGmR4hfzI4SAeI6i2Xsx5887Y4LUdNAgIO7PmTDCe19qOnoFbpE43MffNlW1BE348NSPw%2Fb8RB7qLKY3zV%2BtKiOCm5dvZe3CsCFDa4LVijILnZL5Rr2aIZUjgNa9PkRZttvKBSUp5mKFcQxD4%2Bis7SkRw3ciNGUwDsOhKrKm7fWh5SpgViXm3Hp7iTbjdwsnJsAGurY8mcrbZ5guJnu%2BfkhSRRjlpbFSP5NbfANNNfnJ9ZZ9mDe50ehf8POewsP%2FQYWOH1%2B3kE9qe9BQByFZ95GAypwZChd7ySHcbSDsxZxh5XjpwFE%2BHc8S4IRPKDMqIrSPndzdNRtd9bXX4uUIzKVqOT4a1ekS55p%2FaF3j7XeCX%2F2G4UOFg25Yug6QZVrKANXcuII8fQWOB91e0RKWszHzCh7dnJBjqkAUpFklIznXOc0Gyi%2F%2BU%2FPDw9VsKwX1xl%2F4dLJBSkVnmRnQHOyEgzzDootYAZYHJrwRzCxu%2B21wutR3DJBmW2%2Fzij%2FvJMH43brcO4uqZHk7tFUXy15AlQmUOzKxgP6t%2BDHnUC8eu%2B0LEHQwc%2BKbvaaTp1Xf5FWDnyP%2FaQaYwLie1TgbgXztAwh4KdqGhqXVXObm685DY5RP6ybm7XE%2BiWaDS4aVOD&X-Amz-Signature=21443f96ca344198c69c59fe3400e3d5905cf45667c05af93466881b1792fb14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBDJBJB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcG3pgkpE1xhLMlxgyGksT9lyaiYgtp6iPDACZda4m0QIhAM2Ds7EeR9xVTKWwhCjdRKY3ClBAfu2HFwVo2DdJE733KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz367T%2FqBbbUbHN3Wgq3ANqQCwfiHvuJ0tp1VLSvylKl%2FlC78CyI0G4kQ6GFAI066bZTp8TwaNWkEr7zOx8eP5fjWz0wtVfv7TpTahaDd4ggKSEyJkHCLHSOXa8dx%2FyrhemElAUAEAxORiCmRHJrvjoJSQn4vh4htlqenKV7A31yCOxIC3E8BJU%2FjD2op4yn8a4BTGOj%2FMM%2F1eRSsXo4mldTfmMfCbI8HngyZsch1qQHCer9pegNKbbD1LGmR4hfzI4SAeI6i2Xsx5887Y4LUdNAgIO7PmTDCe19qOnoFbpE43MffNlW1BE348NSPw%2Fb8RB7qLKY3zV%2BtKiOCm5dvZe3CsCFDa4LVijILnZL5Rr2aIZUjgNa9PkRZttvKBSUp5mKFcQxD4%2Bis7SkRw3ciNGUwDsOhKrKm7fWh5SpgViXm3Hp7iTbjdwsnJsAGurY8mcrbZ5guJnu%2BfkhSRRjlpbFSP5NbfANNNfnJ9ZZ9mDe50ehf8POewsP%2FQYWOH1%2B3kE9qe9BQByFZ95GAypwZChd7ySHcbSDsxZxh5XjpwFE%2BHc8S4IRPKDMqIrSPndzdNRtd9bXX4uUIzKVqOT4a1ekS55p%2FaF3j7XeCX%2F2G4UOFg25Yug6QZVrKANXcuII8fQWOB91e0RKWszHzCh7dnJBjqkAUpFklIznXOc0Gyi%2F%2BU%2FPDw9VsKwX1xl%2F4dLJBSkVnmRnQHOyEgzzDootYAZYHJrwRzCxu%2B21wutR3DJBmW2%2Fzij%2FvJMH43brcO4uqZHk7tFUXy15AlQmUOzKxgP6t%2BDHnUC8eu%2B0LEHQwc%2BKbvaaTp1Xf5FWDnyP%2FaQaYwLie1TgbgXztAwh4KdqGhqXVXObm685DY5RP6ybm7XE%2BiWaDS4aVOD&X-Amz-Signature=aa1d1035a90148d2c747a59d8fea15954247c3cd889359b7b2ae9b6e42b4bab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

