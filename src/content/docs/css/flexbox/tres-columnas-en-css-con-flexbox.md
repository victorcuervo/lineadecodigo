---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTNSCSP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqYhSEBNwOXBn0HY%2BzobiHmOEz4fpPQA18yVxiJc7r2AiEAzwaKDDh%2B92060afKXLc%2FBKqZusuUB6SQ0Z8DPPep%2FZsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAOtEloZvxLZNuRjircAzpGoBybSw1KSAqb2E47A1ZSFJAnlPICCk4TPtIbMlcvXs1GmnzXwk4XWtNXQ4fHdrzpxJUDJDheI5IX%2Be33Bl5Z5OK2277LoJAT9sC8G7ZSUCnFPv2wulDVgBG6ZFK5nHZwFSACEu6VLUa%2FpuuyyGC24eB47sCHaYkNYhacm%2FY8MY%2FSzRHKEAvk5lkQtZhIz%2F7VB7Q8cYePe%2F8GY78%2FIWSoyPtp5oI1zmCS9P2MmNdyqIYB7cIyeQNO7sIhDBOe0s7jnTgHvYlkzBo%2BNhp1N16gc3A80NfIO6PDinHt24NYajn3%2BNbpMgINreHsRYx9vEJq9u93%2BdBEhbZL0MFUnDJlIUiSpHzuV%2Fun2yDa6CZvGNPxinQZjUAa7tSNLkZ27CzahRMbakuMQprP0UITN3rn8w9%2FujcsxhS%2BCCUYMcOzv%2BWSmXVjXuZtg1u3Rj%2BohNg%2FOvJPH%2BtGJjreegCaALKviDWysoXGpvLSICZbus6sURG9E24sNl1T%2BAJkE0ErYpp3ixu9SMz5jMqWq3jflkK9F27%2B%2B9Th8p6ti1FpbYPqiSS8nwo05nZ08JqfAX9SVW2ahMdgg8quH%2BuaM7OhgwU4tlwyJ7ttMYLw3KbzBv0q7VZOVMWuDxtF7FnwMLLM0ckGOqUBkBka6ewQm0TTS%2B0zqR9DjDG1I0jvbWaraewbW8mTLTl0iEKCRrTJfDrwun6NsybRjRgmCrSceNswusx9f%2FsbcdTtVm14dDMqsTJ3iij41wrNH1Kmk%2BDBYrOTETvbbwFhe0fc8s8lREQsafZwXR1AqWWqjh%2FfOFTSgqceSz9Kxhw82X%2Bln%2FOF%2FvjUH3yahWCz0KCVLYO2Xkrv5gvff3uq%2FTKDpG3a&X-Amz-Signature=25d9695a7e2a11ed6104b6b8d564cf9b33625664f0e4f8e72f37f1c57be5ec24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTNSCSP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqYhSEBNwOXBn0HY%2BzobiHmOEz4fpPQA18yVxiJc7r2AiEAzwaKDDh%2B92060afKXLc%2FBKqZusuUB6SQ0Z8DPPep%2FZsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAOtEloZvxLZNuRjircAzpGoBybSw1KSAqb2E47A1ZSFJAnlPICCk4TPtIbMlcvXs1GmnzXwk4XWtNXQ4fHdrzpxJUDJDheI5IX%2Be33Bl5Z5OK2277LoJAT9sC8G7ZSUCnFPv2wulDVgBG6ZFK5nHZwFSACEu6VLUa%2FpuuyyGC24eB47sCHaYkNYhacm%2FY8MY%2FSzRHKEAvk5lkQtZhIz%2F7VB7Q8cYePe%2F8GY78%2FIWSoyPtp5oI1zmCS9P2MmNdyqIYB7cIyeQNO7sIhDBOe0s7jnTgHvYlkzBo%2BNhp1N16gc3A80NfIO6PDinHt24NYajn3%2BNbpMgINreHsRYx9vEJq9u93%2BdBEhbZL0MFUnDJlIUiSpHzuV%2Fun2yDa6CZvGNPxinQZjUAa7tSNLkZ27CzahRMbakuMQprP0UITN3rn8w9%2FujcsxhS%2BCCUYMcOzv%2BWSmXVjXuZtg1u3Rj%2BohNg%2FOvJPH%2BtGJjreegCaALKviDWysoXGpvLSICZbus6sURG9E24sNl1T%2BAJkE0ErYpp3ixu9SMz5jMqWq3jflkK9F27%2B%2B9Th8p6ti1FpbYPqiSS8nwo05nZ08JqfAX9SVW2ahMdgg8quH%2BuaM7OhgwU4tlwyJ7ttMYLw3KbzBv0q7VZOVMWuDxtF7FnwMLLM0ckGOqUBkBka6ewQm0TTS%2B0zqR9DjDG1I0jvbWaraewbW8mTLTl0iEKCRrTJfDrwun6NsybRjRgmCrSceNswusx9f%2FsbcdTtVm14dDMqsTJ3iij41wrNH1Kmk%2BDBYrOTETvbbwFhe0fc8s8lREQsafZwXR1AqWWqjh%2FfOFTSgqceSz9Kxhw82X%2Bln%2FOF%2FvjUH3yahWCz0KCVLYO2Xkrv5gvff3uq%2FTKDpG3a&X-Amz-Signature=76659ebd4be3fa46e5033554fe8e9bc5daa23abc0acbf17cdeb37eb22232cefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

