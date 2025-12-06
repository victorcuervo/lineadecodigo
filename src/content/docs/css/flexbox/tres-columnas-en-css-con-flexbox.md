---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5EA75FS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHpog6lpck%2BrPK6NpBsm4tYCxqWhac3r8YIsiHDmWu3AiEAjc3bz5vCz2aDXVxkDJqNGgckwNiifSUGwWWuNK10nxMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPqTU3eKM45V932qFCrcA%2FNRJx5qE2fmvEY9pR7%2B42DcfN6uKcdl7qTefikwYBwXz2S3Ld7cqvIIYzONweTj1WVT29ShCdoVdzHas3ddigOSH5MMWqjOdAKzIWeej1af2Yos7HhyHX65qK%2B9s8h8hX5a0Z2dyGm6MR0NN6kZGKWrAJcPLPN%2F%2BMxP%2FY3E2Ivx3LHGMIG4HKTrl5FGwTeP7iwN8SdLh%2BBYOvKYKb0kQA0pd4AvWUXauXejYloGKdIUgBBhL1VFzv3g%2BngJBdIS7ACU6wawdwJTQEUFM7RBFVcEl6ZIrjQtdkbgUBtT2OMSxVDqmHyZJBmunT5VVJW1%2FFEXMoRnZHLQl%2FYneJr3wT6Z0GqAJkwLt8YXjDEES2wQ%2B74SdFQFQYPLw6XP0j3pXobJhHcaBjw6B5WfvvUoZlJYx6NeZeNknq%2BIm%2BUDezlFTuBuV%2F0HY7t4mx56617nwTJlRqzbnQ9LZ70B5T6Cjf23iImkeuYkmVihoSZuj5fwtIbaTyWH3nanG8absRL93neorXYHUtoUbxH8TT1Eqs37KQ%2FGi6pESHgKt2Ob9dmiR62Gs8U8vhDifoyIpYW1yQQC%2BElHy0bYdCkGWtejBtbJfnK6sTUD3nDeHCLP11nIjL2lF%2FNHpW6pr3ruMLLH0ckGOqUB7XKu036mycIrq62A%2FujoJfFgzPsFGxi9PiNzA1eLruQa2%2BuKk6VUubF%2FBEKfk7JIWm7ZPzeSkuhLsr%2FEYHH5WXBrd1FJSNeUWUWJdl351MxH43TffXuIUcHVFru7RSq6WR8OVoPtjIvEebnL%2BnFspzPR4EnbBAL7ReQB%2F9rOyeJ4Wkq2xWDfR01aI1Lhrd6xEKvETFLrmZ8YBRVsoy%2FzEKgtS2Bp&X-Amz-Signature=4ebbc30cd8f1e154190a8b5ca4f732701e42cb60b88dbdd1c4d614c258404357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5EA75FS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHpog6lpck%2BrPK6NpBsm4tYCxqWhac3r8YIsiHDmWu3AiEAjc3bz5vCz2aDXVxkDJqNGgckwNiifSUGwWWuNK10nxMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPqTU3eKM45V932qFCrcA%2FNRJx5qE2fmvEY9pR7%2B42DcfN6uKcdl7qTefikwYBwXz2S3Ld7cqvIIYzONweTj1WVT29ShCdoVdzHas3ddigOSH5MMWqjOdAKzIWeej1af2Yos7HhyHX65qK%2B9s8h8hX5a0Z2dyGm6MR0NN6kZGKWrAJcPLPN%2F%2BMxP%2FY3E2Ivx3LHGMIG4HKTrl5FGwTeP7iwN8SdLh%2BBYOvKYKb0kQA0pd4AvWUXauXejYloGKdIUgBBhL1VFzv3g%2BngJBdIS7ACU6wawdwJTQEUFM7RBFVcEl6ZIrjQtdkbgUBtT2OMSxVDqmHyZJBmunT5VVJW1%2FFEXMoRnZHLQl%2FYneJr3wT6Z0GqAJkwLt8YXjDEES2wQ%2B74SdFQFQYPLw6XP0j3pXobJhHcaBjw6B5WfvvUoZlJYx6NeZeNknq%2BIm%2BUDezlFTuBuV%2F0HY7t4mx56617nwTJlRqzbnQ9LZ70B5T6Cjf23iImkeuYkmVihoSZuj5fwtIbaTyWH3nanG8absRL93neorXYHUtoUbxH8TT1Eqs37KQ%2FGi6pESHgKt2Ob9dmiR62Gs8U8vhDifoyIpYW1yQQC%2BElHy0bYdCkGWtejBtbJfnK6sTUD3nDeHCLP11nIjL2lF%2FNHpW6pr3ruMLLH0ckGOqUB7XKu036mycIrq62A%2FujoJfFgzPsFGxi9PiNzA1eLruQa2%2BuKk6VUubF%2FBEKfk7JIWm7ZPzeSkuhLsr%2FEYHH5WXBrd1FJSNeUWUWJdl351MxH43TffXuIUcHVFru7RSq6WR8OVoPtjIvEebnL%2BnFspzPR4EnbBAL7ReQB%2F9rOyeJ4Wkq2xWDfR01aI1Lhrd6xEKvETFLrmZ8YBRVsoy%2FzEKgtS2Bp&X-Amz-Signature=90c1c04c2faa516b343bde40cb0bbf677f354fc91bc6dae11e7750725ba6ce83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

