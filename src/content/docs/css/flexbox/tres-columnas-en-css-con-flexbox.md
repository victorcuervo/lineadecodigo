---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGXZKEP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWoCgQkUd7s8to0HW9YJxySmH8hXKbxmX5ESq%2BXO3bbQIgMIeMyoTy3%2ByehKJbJx67Iq3obozRrI9YWWxPCvW5wQwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGv1coEvd5CWm2WnyrcA5YCzTi6xsJBcALwKEu%2BRsscuYoxqDCGmmyda7s0xsdRazH2YGFbnF2zRtUlXVcheAS74pNmqQ0zYVWQCmpaEWyVqXV1%2FZp%2B2K0DcI%2BxqLk6BWMnl3%2FJWA8wy7AzgcPUw7WqohG%2ByQBB%2B90ZnnIlZ7XlAsRIcVEhEvF7qgRorUcbwtaFE8bhxgM6gblcKo%2Be2iaptRt6Yy8%2FF8tsWwlM9uI8mlOLBSWsPzZTLtILWufopd2g5k3k6DW9nEMcM%2FykoVwz1e3stko0rxXH35GgoKI9QAkghxJXSBArepa75O8xF3EZYGDWc7J7EBHsS8MubLLT1fnpMDrgmU2UjuB7vpDWPvyhNu47OsKYSA%2FoZmjkIqHC%2BMhq5Q23K5V5IAAxRSnaCmS4XexM4ts6yff9pBgXuVt1mHgbow82ymMSm%2FMujlZm3eE7BcHoifQaD7aHFX9FHULDgMQB9O%2FdT5BpZ7%2BwIrauKerfTqLeIbTteDR1SJbmGzaFghNHhAGnSLbOUYmiGYQW%2Fuc5ZC22z4WeES3WO%2Fld1zQKadViQRDPORqNpAVry1D9wH7dl%2FxGe4Dn6BUhbIaQNuJRdl0TdM%2Bnx1YyFkyi4rOYqBLeacpWNaobkyroP6K22IF603EFMPmt3skGOqUBtrnjXt7qjIjSnGtry4ji4NAUcDcwH9%2FRDchqt11VYTHJm4CaRc0oNyoOtSa1%2FXZJx8OVil7ngUOJHKsW3Pu%2BFL9LTb7JjJybxHzgFGA79BHOYWHDkW26G2HSgDciYQ7kE2jlaE6VkBua5H%2BFdj1iEpjlaQwuhDxwadRqzikZDzQo17vnnWavmCoHegivRKIuzCymc8vY2o3Vh8TYzRlUQqq3V%2BUO&X-Amz-Signature=a3af72c4b9811e153ec7a2d46525972119129cf09574c9301d4907fb59cecd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGXZKEP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWoCgQkUd7s8to0HW9YJxySmH8hXKbxmX5ESq%2BXO3bbQIgMIeMyoTy3%2ByehKJbJx67Iq3obozRrI9YWWxPCvW5wQwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGv1coEvd5CWm2WnyrcA5YCzTi6xsJBcALwKEu%2BRsscuYoxqDCGmmyda7s0xsdRazH2YGFbnF2zRtUlXVcheAS74pNmqQ0zYVWQCmpaEWyVqXV1%2FZp%2B2K0DcI%2BxqLk6BWMnl3%2FJWA8wy7AzgcPUw7WqohG%2ByQBB%2B90ZnnIlZ7XlAsRIcVEhEvF7qgRorUcbwtaFE8bhxgM6gblcKo%2Be2iaptRt6Yy8%2FF8tsWwlM9uI8mlOLBSWsPzZTLtILWufopd2g5k3k6DW9nEMcM%2FykoVwz1e3stko0rxXH35GgoKI9QAkghxJXSBArepa75O8xF3EZYGDWc7J7EBHsS8MubLLT1fnpMDrgmU2UjuB7vpDWPvyhNu47OsKYSA%2FoZmjkIqHC%2BMhq5Q23K5V5IAAxRSnaCmS4XexM4ts6yff9pBgXuVt1mHgbow82ymMSm%2FMujlZm3eE7BcHoifQaD7aHFX9FHULDgMQB9O%2FdT5BpZ7%2BwIrauKerfTqLeIbTteDR1SJbmGzaFghNHhAGnSLbOUYmiGYQW%2Fuc5ZC22z4WeES3WO%2Fld1zQKadViQRDPORqNpAVry1D9wH7dl%2FxGe4Dn6BUhbIaQNuJRdl0TdM%2Bnx1YyFkyi4rOYqBLeacpWNaobkyroP6K22IF603EFMPmt3skGOqUBtrnjXt7qjIjSnGtry4ji4NAUcDcwH9%2FRDchqt11VYTHJm4CaRc0oNyoOtSa1%2FXZJx8OVil7ngUOJHKsW3Pu%2BFL9LTb7JjJybxHzgFGA79BHOYWHDkW26G2HSgDciYQ7kE2jlaE6VkBua5H%2BFdj1iEpjlaQwuhDxwadRqzikZDzQo17vnnWavmCoHegivRKIuzCymc8vY2o3Vh8TYzRlUQqq3V%2BUO&X-Amz-Signature=422efcbcf17736b4ef41966fd50668f325a7d9391c048946f9fd0431a0a0074b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

