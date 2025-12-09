---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYILOB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOzRjfqmia0S4ZWsaPiAsJHCk69UzHPknAvJ%2B1cMUZ1gIgI%2BOfqjnuYQ7NWNI2GgIZs0Mv02HcON86RLwCrtP6WQgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJVEvaHv90LdgBqbCrcA%2BH6UCksK4nqaeWmkFgsPq4%2BqLK1uR2uKl6xIExrnlZqunPRpWydrVBy7%2FpHNbFw6sRiPknfELRuCCaJYvkCpiWd4XxTTfKEuspVQLAWIPHNGVgx%2BaRCBgFqCPqkYA%2FQtb6zmzqyFDc3OHWQsNAuZvemfJKXIFGN%2BXHq9%2FKp8%2BMMQVm6%2BXssNYG5DeapEAP9Cs1uRNOqwQ0Wdo%2B1ELlOjR3x9nU4AEvUBj8GhvefYVZdXRtQSbjfWWxEZktYBhXV9j5iW7JdNky%2FObtigyMJrU6MR7JSFOC1AewukwgkBH71E5ms2fOdkS1KKof3leHi0cIQ5kip3Wu4OMpgodcJQ6wE0lT8Yzb%2Bvm1IPE2Lb%2F3I7z6%2Bu5hROm%2BrJ4yr%2BhlyxzR4oWrv1C7junyLyBCYdpOoSEDcKEsWUvSEGox9e5DYh7593TmvlAoRAp79SKlMun6xp4BErdFyWkKw9t6vpNZuYQ94iaiGhhtiU62q4rSM4nzEr5Uvv2cXZEBL5bT130bqooUp5JtfcGwi4Hv0Lr%2FXp8B4ym28Crg7vNj%2BAN4Sz1ja%2FLBkrEBod9cnrqdsOi9IUxqQtP9avoMLmYfS0W2yCGBRoTR%2BgMhzbj4abx0YyFapt7KHshep%2BbrPMKzE38kGOqUBCunVxnpgc7yW3CRm%2B9eJ%2Bt1y6VSQu0MtImPDGA6L3hdvccwbTAxwbEcYXCn29724rUzKmur8fDaF%2Fc%2Ftq2fUBJBtCWX6Pj9U%2FeqZR46ELm8AaIH%2FDbdZzYV%2Fxdn8W2ZQFuaE5kDouoUtjsYhxDxHeyowVI%2B62DqqTcgcqgnafGrLxuwTKHgZbBf900PAU4GjJN4111yi5T7y4b0DjrT05W9aosJR&X-Amz-Signature=5f64f41779e8dd4663f7b414f8a0aefac3481f081ed486091e6ccd232e265164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYILOB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOzRjfqmia0S4ZWsaPiAsJHCk69UzHPknAvJ%2B1cMUZ1gIgI%2BOfqjnuYQ7NWNI2GgIZs0Mv02HcON86RLwCrtP6WQgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJVEvaHv90LdgBqbCrcA%2BH6UCksK4nqaeWmkFgsPq4%2BqLK1uR2uKl6xIExrnlZqunPRpWydrVBy7%2FpHNbFw6sRiPknfELRuCCaJYvkCpiWd4XxTTfKEuspVQLAWIPHNGVgx%2BaRCBgFqCPqkYA%2FQtb6zmzqyFDc3OHWQsNAuZvemfJKXIFGN%2BXHq9%2FKp8%2BMMQVm6%2BXssNYG5DeapEAP9Cs1uRNOqwQ0Wdo%2B1ELlOjR3x9nU4AEvUBj8GhvefYVZdXRtQSbjfWWxEZktYBhXV9j5iW7JdNky%2FObtigyMJrU6MR7JSFOC1AewukwgkBH71E5ms2fOdkS1KKof3leHi0cIQ5kip3Wu4OMpgodcJQ6wE0lT8Yzb%2Bvm1IPE2Lb%2F3I7z6%2Bu5hROm%2BrJ4yr%2BhlyxzR4oWrv1C7junyLyBCYdpOoSEDcKEsWUvSEGox9e5DYh7593TmvlAoRAp79SKlMun6xp4BErdFyWkKw9t6vpNZuYQ94iaiGhhtiU62q4rSM4nzEr5Uvv2cXZEBL5bT130bqooUp5JtfcGwi4Hv0Lr%2FXp8B4ym28Crg7vNj%2BAN4Sz1ja%2FLBkrEBod9cnrqdsOi9IUxqQtP9avoMLmYfS0W2yCGBRoTR%2BgMhzbj4abx0YyFapt7KHshep%2BbrPMKzE38kGOqUBCunVxnpgc7yW3CRm%2B9eJ%2Bt1y6VSQu0MtImPDGA6L3hdvccwbTAxwbEcYXCn29724rUzKmur8fDaF%2Fc%2Ftq2fUBJBtCWX6Pj9U%2FeqZR46ELm8AaIH%2FDbdZzYV%2Fxdn8W2ZQFuaE5kDouoUtjsYhxDxHeyowVI%2B62DqqTcgcqgnafGrLxuwTKHgZbBf900PAU4GjJN4111yi5T7y4b0DjrT05W9aosJR&X-Amz-Signature=e453a63105a3c3bc66cca27aeea5d7470991bd7d767cbabe6d0d3cf463d24bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

