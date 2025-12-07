---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQT3FNL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBie8Xpzeb4DCugqcpO1zV1UWG7LuZZjCpZOwMeA5y28AiEAyI7GXfGjmF4HpwMg2YIJQSdeXSDTY%2BpNO6W3daGrf6gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK15dQquafvnh9w6lSrcA9MQ3Ff3ibvimRtvjm8P%2BSWG0e%2BtzupxrSBim5Z4Bc2i4KEYL3YvJTiiS6I6l3U3f4a48RXvKed9tEeLw8ii4jhK%2BoarR9LKQif5HbY8FQEnoQgFqm6pqfC8KhXOVp9UGS3pZG3DuQbV0OaSPO9XaILqo86F4MqHWGPrY4JNV07BDuHMIhdUqxi%2BTxSt0PlWTE4UcprDOrFbmXYF810vDFV7XyIsZiiY6%2BMfZxtFHv7g3wKrQqpUFR%2Fa7fPruQgvxFjtoOo1jqSMmtNlJp00BelblbWX2%2FvobFv1qj69zXsQPyb5WlY8%2F4NuUeb9GXjj2uSC77Jo3wwnKR7iPfGT%2BESs%2BJ0DKpR3hu8quLQ00uDsbn3gIwXcGEW%2B2dbbvQaiYPQPOGma%2BV%2FCWM6U4TpVXjAJlaxBYeqT1tVssL3lgxiXSwOQw07nhy5CD4IZLPWJicR%2BEPYjwkp%2BzaiId0R9dc2NX0ZpHMgda16R744NBcTbi9y6KXgQG8Vz0Z9PIOuSNEnHDAxA0GWyQUTD8gqVqrOykX2NkFweLR%2FJj8zTWiBTB1%2B3MVImOxEm15fjDomAOPY50NTmN%2FYZrzDyaElpfsZJWxVUYf1OdlKB3LID3p4SeuhbnYxr%2FtR%2FflcfMOuZ1ckGOqUBuQPgLurVn%2FCon9DoBUepWxsnqGwQA7dNQBkXUfO0RscAFGTQ6epAJdLThJPuDt%2BLq3bXWSHaXXH%2BRQz1%2F1Nwwzrgys1%2BSLSr%2Bu0C0t5JX6S%2Bn3%2Fk0xkRwc00LH7Q8r7ZI6OjmTeGAdRztigG3CuNugpSbvKIBSJUBKr%2BiVu1UIGf%2BSY%2FNiHOkDhnP5gMNDZ2dnyuXNHAL1bGp8DtXNUDDtRtbPCr&X-Amz-Signature=cd4fefff9e41e1a2a2459a6356566ef9a4b33d6fff8ebae88328c0f604317f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQT3FNL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBie8Xpzeb4DCugqcpO1zV1UWG7LuZZjCpZOwMeA5y28AiEAyI7GXfGjmF4HpwMg2YIJQSdeXSDTY%2BpNO6W3daGrf6gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK15dQquafvnh9w6lSrcA9MQ3Ff3ibvimRtvjm8P%2BSWG0e%2BtzupxrSBim5Z4Bc2i4KEYL3YvJTiiS6I6l3U3f4a48RXvKed9tEeLw8ii4jhK%2BoarR9LKQif5HbY8FQEnoQgFqm6pqfC8KhXOVp9UGS3pZG3DuQbV0OaSPO9XaILqo86F4MqHWGPrY4JNV07BDuHMIhdUqxi%2BTxSt0PlWTE4UcprDOrFbmXYF810vDFV7XyIsZiiY6%2BMfZxtFHv7g3wKrQqpUFR%2Fa7fPruQgvxFjtoOo1jqSMmtNlJp00BelblbWX2%2FvobFv1qj69zXsQPyb5WlY8%2F4NuUeb9GXjj2uSC77Jo3wwnKR7iPfGT%2BESs%2BJ0DKpR3hu8quLQ00uDsbn3gIwXcGEW%2B2dbbvQaiYPQPOGma%2BV%2FCWM6U4TpVXjAJlaxBYeqT1tVssL3lgxiXSwOQw07nhy5CD4IZLPWJicR%2BEPYjwkp%2BzaiId0R9dc2NX0ZpHMgda16R744NBcTbi9y6KXgQG8Vz0Z9PIOuSNEnHDAxA0GWyQUTD8gqVqrOykX2NkFweLR%2FJj8zTWiBTB1%2B3MVImOxEm15fjDomAOPY50NTmN%2FYZrzDyaElpfsZJWxVUYf1OdlKB3LID3p4SeuhbnYxr%2FtR%2FflcfMOuZ1ckGOqUBuQPgLurVn%2FCon9DoBUepWxsnqGwQA7dNQBkXUfO0RscAFGTQ6epAJdLThJPuDt%2BLq3bXWSHaXXH%2BRQz1%2F1Nwwzrgys1%2BSLSr%2Bu0C0t5JX6S%2Bn3%2Fk0xkRwc00LH7Q8r7ZI6OjmTeGAdRztigG3CuNugpSbvKIBSJUBKr%2BiVu1UIGf%2BSY%2FNiHOkDhnP5gMNDZ2dnyuXNHAL1bGp8DtXNUDDtRtbPCr&X-Amz-Signature=2bd180d94ea5b784b0fab1c900a62fa33bb448df98c63dd6ab0cb8ecaf688372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

