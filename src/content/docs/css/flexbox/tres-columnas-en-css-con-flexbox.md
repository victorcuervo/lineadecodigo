---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RMILNKZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXSHRBgP%2BZVAGjaVh7RdWVOJemX3Q0dt42NqT88bFPqAiEAm%2BoPv9Wf52cIg1JszTaMPASuBqz9ARol%2BaKvTNfZ218qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbW5hTUt%2Bf1YRc70yrcA8y%2Ba1OcME3OW1jvBY9lNb%2FD7pERKhPqnufxp81Vr%2BxR0tRJOLVAwNEQ7DgvkduPmD6w%2BnZ19zFmzOk6A5sbVQ8phLXUjDolfTkd9fLW1nE2yEdqEYHF2aFoMQU0rCo3fNX5qNndSdF%2BQGr9Vz7bcxyRTUS6eqNk6Ry8THIsXNKOz%2BCjDtY5UB4MDiaqOwf73CUXzqU%2BZYlxmdsWrnXhyrPKqcf74h9eTzyXRUsou95EQ5ZMNAIKFyzyuqzcE8t9LoYCgqIliRPVD0u%2Fx5O0%2B%2F%2Bqq2VTmxP%2FzQbvS%2FMpllMCwdM9aCyCoxJYdb4q%2Bx8vRnXkZICUH%2FR3psqWv5eR6u57fUHaFDxV5PB6w2n912eswOmgP2L8%2Fj50NULrSovRLiy4v4HIauyLTk8jSNnElXNKZSLTpGbQsUZgUpzRwuJeJ7S9zARd%2F32YHeWTcJnJHX%2FGgSJZc%2FXAgC2E%2BLkgw6lUQPrnh4QuHEP2UiJaWl5z3xM1eDMhYElq4n51dUgLRKIc%2Fplmbaz%2BGbBqlEXhu9sU%2FLVy0%2FMqWaYS4NFZhPlKaCSu8eQjR%2FMBmL7CqcsOIUvmdC1n3HlUL6SrSLHymo4ImeEoQcQxI1trEdhM8PyQmllklvsDuLTAY3ZeMISa1ckGOqUBgPIU1ZXFNcmVm%2FJJbRY4bBtoI0HxXaeVK%2FkovoubeQhjZEtRn6kaYNPtEoq67jL1kKC2SMZLP4h%2BQmRIoke8ehfCz173TDP93sa5TPofiClxsdOqkIPeDX5bc3bTGpI8k7kAuMME4JnTwh4M7NHB8m0HNMwFWQohYRUXCqqDh27mUYAXoPQAEZR0wddPwePFmgea0oaZ5qhRirnOaQ3DIXGXoPCN&X-Amz-Signature=8dcfe3068377aaad4ee1b69e381c57e0d786e169fa9b144575fd71427bb11a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RMILNKZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXSHRBgP%2BZVAGjaVh7RdWVOJemX3Q0dt42NqT88bFPqAiEAm%2BoPv9Wf52cIg1JszTaMPASuBqz9ARol%2BaKvTNfZ218qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbW5hTUt%2Bf1YRc70yrcA8y%2Ba1OcME3OW1jvBY9lNb%2FD7pERKhPqnufxp81Vr%2BxR0tRJOLVAwNEQ7DgvkduPmD6w%2BnZ19zFmzOk6A5sbVQ8phLXUjDolfTkd9fLW1nE2yEdqEYHF2aFoMQU0rCo3fNX5qNndSdF%2BQGr9Vz7bcxyRTUS6eqNk6Ry8THIsXNKOz%2BCjDtY5UB4MDiaqOwf73CUXzqU%2BZYlxmdsWrnXhyrPKqcf74h9eTzyXRUsou95EQ5ZMNAIKFyzyuqzcE8t9LoYCgqIliRPVD0u%2Fx5O0%2B%2F%2Bqq2VTmxP%2FzQbvS%2FMpllMCwdM9aCyCoxJYdb4q%2Bx8vRnXkZICUH%2FR3psqWv5eR6u57fUHaFDxV5PB6w2n912eswOmgP2L8%2Fj50NULrSovRLiy4v4HIauyLTk8jSNnElXNKZSLTpGbQsUZgUpzRwuJeJ7S9zARd%2F32YHeWTcJnJHX%2FGgSJZc%2FXAgC2E%2BLkgw6lUQPrnh4QuHEP2UiJaWl5z3xM1eDMhYElq4n51dUgLRKIc%2Fplmbaz%2BGbBqlEXhu9sU%2FLVy0%2FMqWaYS4NFZhPlKaCSu8eQjR%2FMBmL7CqcsOIUvmdC1n3HlUL6SrSLHymo4ImeEoQcQxI1trEdhM8PyQmllklvsDuLTAY3ZeMISa1ckGOqUBgPIU1ZXFNcmVm%2FJJbRY4bBtoI0HxXaeVK%2FkovoubeQhjZEtRn6kaYNPtEoq67jL1kKC2SMZLP4h%2BQmRIoke8ehfCz173TDP93sa5TPofiClxsdOqkIPeDX5bc3bTGpI8k7kAuMME4JnTwh4M7NHB8m0HNMwFWQohYRUXCqqDh27mUYAXoPQAEZR0wddPwePFmgea0oaZ5qhRirnOaQ3DIXGXoPCN&X-Amz-Signature=5dc8332d1450a735946568b7b851350c5cce36d9e0d8ae0bc43b88d2f17b6a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

