---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P7OEIHR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC78HYB3Zc0%2BSrrtd8POpXiFRjk19TALJoP6rG8zKpq6AiEAxFO4hXoPgwijP%2FBnyXEcDmR%2B5meudSVOIyz2hUpv5ogqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8xfRa8KzdWlX93bSrcA2jT3wLVzooW%2FW6fz%2FLof8xfaoXP8MWeTWMecPHv9RPvB5Zyey9NymnyBadd37k5afurm10G1tX732%2Fxl6J5RmGw6uKNn18hgJIOct4C3QkrVEoU5T7zi5%2FpctwLBqFcDz%2FTMlXE4txf3eOUnMeAaWdSXGTeKcDgEKCjEPw0n%2BrvFERpRvBG%2Flc7trm3kNqlz80rJQGPzujsiW0w4I%2BkC1QmXCJjTGvxFfz4OaCpdudsdrH8eXPqwYzS3KoL8wEUZkTP%2FbPyHMwwS%2FiJKDpGOxrGqmxb1%2BPX55NccDxmKi239LojlcSbxPkjb9LdratjL0d%2Bnny0FLpe%2FMcbb%2F0osmMJIxN3ni25qb1uWQ9szOhVVIowpL1%2BaXBnumfBHJXj7IAyjRWO1mCz5URwLeekAOVq%2Br49RRJtq4qMn4mEZgTb83bD8UBIYQvyukx64HHFT4DZRD%2FyjPt6e4omTEX%2Fj5O8R8%2FLUV1I05jrKltYCvsz%2Bfw1RK5acWg5cbU9OO8SSCYaGvOIdXsGfti0vfVeOer6qTnoq2yA6uIhxvqdkhuv6%2BWKgbeIlruFmtS3x1dQVoChnnVCzMsqEzIMNDFg5WfpNrBsdtQFYuNsRhQmXMO4LyQ3lsp0dymQ5tKOMP6z3MkGOqUBTQ1v7M6TkwcjkbbC6ga4UBmTkUwZYriA3LI%2BSIcEEPA1f6nvJz%2B6HkqkShL8pIiGXCVp7%2BHMvbxjim9XJ1nb%2BfcVqmgV5ZamA2D4V9X3gzuL014MYNZAlx3XyM7OvXGt3xYLTf8EBb0hs9lxtIWgZyHPkwXAcbjuoLkwvebY9fbF8XIEUrVEEH1XtGjZVEkejwiuBJjp6H5D%2FRudQDky%2FWp21CGd&X-Amz-Signature=c3ce5f22e380d07026d2d97d1aa1f04b100356a1300e4913ce790d7ef55c6196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P7OEIHR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC78HYB3Zc0%2BSrrtd8POpXiFRjk19TALJoP6rG8zKpq6AiEAxFO4hXoPgwijP%2FBnyXEcDmR%2B5meudSVOIyz2hUpv5ogqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8xfRa8KzdWlX93bSrcA2jT3wLVzooW%2FW6fz%2FLof8xfaoXP8MWeTWMecPHv9RPvB5Zyey9NymnyBadd37k5afurm10G1tX732%2Fxl6J5RmGw6uKNn18hgJIOct4C3QkrVEoU5T7zi5%2FpctwLBqFcDz%2FTMlXE4txf3eOUnMeAaWdSXGTeKcDgEKCjEPw0n%2BrvFERpRvBG%2Flc7trm3kNqlz80rJQGPzujsiW0w4I%2BkC1QmXCJjTGvxFfz4OaCpdudsdrH8eXPqwYzS3KoL8wEUZkTP%2FbPyHMwwS%2FiJKDpGOxrGqmxb1%2BPX55NccDxmKi239LojlcSbxPkjb9LdratjL0d%2Bnny0FLpe%2FMcbb%2F0osmMJIxN3ni25qb1uWQ9szOhVVIowpL1%2BaXBnumfBHJXj7IAyjRWO1mCz5URwLeekAOVq%2Br49RRJtq4qMn4mEZgTb83bD8UBIYQvyukx64HHFT4DZRD%2FyjPt6e4omTEX%2Fj5O8R8%2FLUV1I05jrKltYCvsz%2Bfw1RK5acWg5cbU9OO8SSCYaGvOIdXsGfti0vfVeOer6qTnoq2yA6uIhxvqdkhuv6%2BWKgbeIlruFmtS3x1dQVoChnnVCzMsqEzIMNDFg5WfpNrBsdtQFYuNsRhQmXMO4LyQ3lsp0dymQ5tKOMP6z3MkGOqUBTQ1v7M6TkwcjkbbC6ga4UBmTkUwZYriA3LI%2BSIcEEPA1f6nvJz%2B6HkqkShL8pIiGXCVp7%2BHMvbxjim9XJ1nb%2BfcVqmgV5ZamA2D4V9X3gzuL014MYNZAlx3XyM7OvXGt3xYLTf8EBb0hs9lxtIWgZyHPkwXAcbjuoLkwvebY9fbF8XIEUrVEEH1XtGjZVEkejwiuBJjp6H5D%2FRudQDky%2FWp21CGd&X-Amz-Signature=9ae6e6b07b3c3dea49d36bce206df06d7007946e14efdeed636ab099b4e3c678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

