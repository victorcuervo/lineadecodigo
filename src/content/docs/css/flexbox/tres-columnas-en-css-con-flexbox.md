---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JAKUI3D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUDF8F3gGQMCuH7D8GrLAY%2F4TkFtTG%2BKmrBT3aUhzqCAiEAiOefYMqIzbwKiVAYZnX8ys6iTYrIWRipQBuFA56VDOUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9dra6J7XzvNKWnjircA7FD%2BTXVES9V89RV%2FnD1VoJneypUbRZ1dkuHswjkANDmbpKGfR9qjqBntZ93NmyyulcHm%2FTzbpeppnD1Lhl359zaRrAj7kKmB010NgWdNb9STaBlUA4jTU88fmsEbzueN3tPE9%2Bl4SngZwVlrmzy2d8u53PYIGXs9c9BmOTjAQdZ4hk0bYQFoe4T1sM%2B%2BWWGENJN92M%2BWBCAFOdntIB0ypdNQ%2F0sEZcgR4uXC7EZQX2F32HGaOJd3m03Dp%2BIUfFNcRwOB6HM0rIP5mZOIZ9DuhdvOxZfV4HRzRYK7ZwqusICeql4tvlH3RdKJFiHmDLufyMPE4b7qwegw1EZqxRG63ccOeX5aKLGEMYcwcx0XtlzB8NM9Fu30e84IH5j4GSikjVBXIG1HHpPm8vVYuEHYjcwTgqnEUqTyFiun2e9DmyVctBTLx4wBjHN64pQgBOnjgrX%2BJ%2F7i6z7tEhDcDO8KE1N91FGUGhXV402AnNMHDaaK9GM1P7SntYdnIWlw9916%2BrlgjNcGCfnMxOykH2ojB931sFF6zWEx6xgXaL8rWymNCN9OYgg5rDRfD%2FGMSFdAaXTWd%2BGlP97xr%2FUUUb%2FZ%2BNw3i4qr%2FbpOB%2FTGzXLgjW%2F9FSPQcsjz06%2Fbpl0MMiQ3skGOqUBQSBUlsZtGhrFGolKv7ybnnsUH9xTgqXEF7ndTrvgc0dAHO56ovIxTX9ZOUj6mE1DQg%2F8t%2F02Z8Z%2FUSwf0hU0tVyOj2FnFwWSBNLRJhTAB1AMgIrmSedMkDnBO8SOqb%2BMBWO3LPutxBESh6YL9lqnn1xziKBSjst5cRNhZLVSc0VAYnG67GpGBd89iOwpoUWUX2vO%2BjlREsIj4R3hPwqgLZ%2Fnj7qL&X-Amz-Signature=66adefc73165ca58e8aba5384b74905a920c64ab7694a5e8604fb1b65ac98c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JAKUI3D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUDF8F3gGQMCuH7D8GrLAY%2F4TkFtTG%2BKmrBT3aUhzqCAiEAiOefYMqIzbwKiVAYZnX8ys6iTYrIWRipQBuFA56VDOUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9dra6J7XzvNKWnjircA7FD%2BTXVES9V89RV%2FnD1VoJneypUbRZ1dkuHswjkANDmbpKGfR9qjqBntZ93NmyyulcHm%2FTzbpeppnD1Lhl359zaRrAj7kKmB010NgWdNb9STaBlUA4jTU88fmsEbzueN3tPE9%2Bl4SngZwVlrmzy2d8u53PYIGXs9c9BmOTjAQdZ4hk0bYQFoe4T1sM%2B%2BWWGENJN92M%2BWBCAFOdntIB0ypdNQ%2F0sEZcgR4uXC7EZQX2F32HGaOJd3m03Dp%2BIUfFNcRwOB6HM0rIP5mZOIZ9DuhdvOxZfV4HRzRYK7ZwqusICeql4tvlH3RdKJFiHmDLufyMPE4b7qwegw1EZqxRG63ccOeX5aKLGEMYcwcx0XtlzB8NM9Fu30e84IH5j4GSikjVBXIG1HHpPm8vVYuEHYjcwTgqnEUqTyFiun2e9DmyVctBTLx4wBjHN64pQgBOnjgrX%2BJ%2F7i6z7tEhDcDO8KE1N91FGUGhXV402AnNMHDaaK9GM1P7SntYdnIWlw9916%2BrlgjNcGCfnMxOykH2ojB931sFF6zWEx6xgXaL8rWymNCN9OYgg5rDRfD%2FGMSFdAaXTWd%2BGlP97xr%2FUUUb%2FZ%2BNw3i4qr%2FbpOB%2FTGzXLgjW%2F9FSPQcsjz06%2Fbpl0MMiQ3skGOqUBQSBUlsZtGhrFGolKv7ybnnsUH9xTgqXEF7ndTrvgc0dAHO56ovIxTX9ZOUj6mE1DQg%2F8t%2F02Z8Z%2FUSwf0hU0tVyOj2FnFwWSBNLRJhTAB1AMgIrmSedMkDnBO8SOqb%2BMBWO3LPutxBESh6YL9lqnn1xziKBSjst5cRNhZLVSc0VAYnG67GpGBd89iOwpoUWUX2vO%2BjlREsIj4R3hPwqgLZ%2Fnj7qL&X-Amz-Signature=2e0de0b17cc48d6ce8829a4b3ce05d80f33fdc0858567043c8074081564912e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

