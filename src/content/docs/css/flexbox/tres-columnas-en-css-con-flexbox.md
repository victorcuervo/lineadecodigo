---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2YKKWB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYPT%2FJstr3NU7KyZtCyeB14pk%2FLWK1VljsSrixgYF3oAiEAyXrMLf%2FbZJ%2Bumn1NA9c9s1bS2w%2FjYsnKnu4dg%2BNSVlgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2Fpvu4rS9awxIXgdyrcA%2B7pJDGAFnwQo8VLQ%2BmkMgaRMKXmZqSR%2FuMJr%2FhMqh26FW6YAlqhqLXEKv2aPWojIs0OYiK9XOi2VGgCFQnS3oFe0CKanh2Oq8rBpv0TMnIZPkbQyHjsTHaXZnGx8xUc23JI855zmS9vx9lWLgpejZkde8SUOGksT64KhiViRV902Y3yVveYhifIuQv6Gvp0S3gwWPgv2YC4TYxxgrJiPucXFpZ3%2FaeNi4HPfEJbvAHzCTGRZiJGdjJLsEbxDokr6jHWUfR6yWjqfa52igp%2FhNRLztms%2ByvVc1qKZShy%2Ftr1Xlm%2BgeXlYkjeccmk1EMPqFIZyxW3I35Z3umUaykWM8AMwNDVvznvPwtSrpBQauzSEqR5PLBd6egGkUIrlaef6Gsk7pb2uzc062vkn4vcOqaim8KpbAbzJ7VLQGYDJGCP7wfndK%2FXhO%2FE1tiaZpsB3QCin3tNdbwp8q0ZREl2M%2BRHXcn0HRiX9qacSoLqrfOH1YlbYFlK%2FHzPaJXKuqc%2FCs%2BMPOwcggBxqyI4t%2BEyVs%2F%2Beww7S2yEPPRYoo2ZgBJPIg9Wk4AFeie3afW2ZPVBIJnUwT1z6pUXSX7%2BFG%2B1vDT4A%2F%2FoLLmj9IprA4kK5rbRitE%2BsnztbTxvMVUDMISU2ckGOqUBlH972q%2B8rajx0eEqIW1L8vRBnB8vTNvX3A3WGkL0uramNw2cqodYJXWQowDQ33uoqsSAfrVd0VHJBrGFp3HjQOv8tB4gmEIagmTCCMiTqNT1yRHY623Wktncqu7THUTQocwIHswGeOHqP2z9t9MyqElHtofOesI19MSwCwHVYuQio%2F4DZNd57PaEIHrgNIKOGuB4MQava61kL0QlHZk7E6tpEJjK&X-Amz-Signature=bf5ab4131b071f4368abe800b30a55f2875e1c924402026630ac4bb7ac12e547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2YKKWB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYPT%2FJstr3NU7KyZtCyeB14pk%2FLWK1VljsSrixgYF3oAiEAyXrMLf%2FbZJ%2Bumn1NA9c9s1bS2w%2FjYsnKnu4dg%2BNSVlgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2Fpvu4rS9awxIXgdyrcA%2B7pJDGAFnwQo8VLQ%2BmkMgaRMKXmZqSR%2FuMJr%2FhMqh26FW6YAlqhqLXEKv2aPWojIs0OYiK9XOi2VGgCFQnS3oFe0CKanh2Oq8rBpv0TMnIZPkbQyHjsTHaXZnGx8xUc23JI855zmS9vx9lWLgpejZkde8SUOGksT64KhiViRV902Y3yVveYhifIuQv6Gvp0S3gwWPgv2YC4TYxxgrJiPucXFpZ3%2FaeNi4HPfEJbvAHzCTGRZiJGdjJLsEbxDokr6jHWUfR6yWjqfa52igp%2FhNRLztms%2ByvVc1qKZShy%2Ftr1Xlm%2BgeXlYkjeccmk1EMPqFIZyxW3I35Z3umUaykWM8AMwNDVvznvPwtSrpBQauzSEqR5PLBd6egGkUIrlaef6Gsk7pb2uzc062vkn4vcOqaim8KpbAbzJ7VLQGYDJGCP7wfndK%2FXhO%2FE1tiaZpsB3QCin3tNdbwp8q0ZREl2M%2BRHXcn0HRiX9qacSoLqrfOH1YlbYFlK%2FHzPaJXKuqc%2FCs%2BMPOwcggBxqyI4t%2BEyVs%2F%2Beww7S2yEPPRYoo2ZgBJPIg9Wk4AFeie3afW2ZPVBIJnUwT1z6pUXSX7%2BFG%2B1vDT4A%2F%2FoLLmj9IprA4kK5rbRitE%2BsnztbTxvMVUDMISU2ckGOqUBlH972q%2B8rajx0eEqIW1L8vRBnB8vTNvX3A3WGkL0uramNw2cqodYJXWQowDQ33uoqsSAfrVd0VHJBrGFp3HjQOv8tB4gmEIagmTCCMiTqNT1yRHY623Wktncqu7THUTQocwIHswGeOHqP2z9t9MyqElHtofOesI19MSwCwHVYuQio%2F4DZNd57PaEIHrgNIKOGuB4MQava61kL0QlHZk7E6tpEJjK&X-Amz-Signature=2baccbac0539f5cc9c97b8a39f85ae4d2fb34d7758c1968e84e6b33f1b30c7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

