---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CJGCDT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRsZieIkFd7T3aVwSYtZBGTTW4ZXF%2BS7Y8hLiz9lLCQIgfon5jlptwMg7kixJqTMq1Yf2PyxuoD1WlIBLTRXvNkAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCv6I9ORK1lPyuVz0ircA2DCP3kRbOUyG42IOUwS2a2dvIECJ0scKIo%2FaU7HHU%2BFDfezq%2FLEVeO7Qa7zw8toNdaHI52ErFkB2ZKzwSCarg5osDh4CJdZA3O8VHXbzcfrJS0sxb01Z2IfUbz2TjsDENZOjL3gKoKVbPllhL36lPjS%2BDkG0wWEwgqgIM42zE4SdbzJ2GEny1QXEJrbugJqCLJIjO62W%2FnuPHcsiQ%2BvWemc1jnURlDXifjfQ%2BsykDQkBA0GQmNXms4f8HFJpCDBRpX%2Bq3%2BBPUl5K0Pnw2PSJMfjRVjaX0DjMwtSOxQXpL9GGDB75%2FigVQpCcT%2BEwqMfDS6mHPdSZUS%2F2pdUK1L%2BVPtVlWJUHvM%2ByumzTba0AFPQXgtNkCfO0x6zbev76OFAiyL0SJiUgLH9uqIdx5%2Bq%2BSgd1aGUJ3IlVdZ7G3am%2FFsiWGPRgoFyoSYCbVsOkCgmwLEjitKZojDnUWFaKJXap2yK8hpM1yP4qW7xL76%2BsEUhRyamtARqzpg1170D1t41IFCSNtReBm22T3egTEQLQwPEaFwO3EFX1xXR4wl2B3bneBI4OPZ17bBaqw83UmoyJrtSdF%2BqtQ8FFIP6EgZ%2FusfbumyuxF0Hciz4GRFK%2BKNLlnpxyJ1A6CYi0ZxbMKv5xskGOqUBztMZIjRgNt2M%2FmGYPDdmaHWH4l9x04CN%2FT%2BCI1nbPneiTu9NGX4qE59UQUpvB2ikDveVj0kwKN%2F3gTSf3lrO40TrrP4rj7I9mkEYuZK%2FolG85k%2F50SJ1qluYLAm5wN76OKrWuXlXI%2B6SaozUG7HnbqTbTSsbvRH70XVGf%2FCKETUTaNHlVvqqJTLV9z%2FBVo7k%2F3FR302bWMpgYwRhn9SaCm2HghnA&X-Amz-Signature=b228dbcadd55f7cf6efb9c1963adbbe827653368b8738a133c5d6aac84ce8bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CJGCDT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRsZieIkFd7T3aVwSYtZBGTTW4ZXF%2BS7Y8hLiz9lLCQIgfon5jlptwMg7kixJqTMq1Yf2PyxuoD1WlIBLTRXvNkAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCv6I9ORK1lPyuVz0ircA2DCP3kRbOUyG42IOUwS2a2dvIECJ0scKIo%2FaU7HHU%2BFDfezq%2FLEVeO7Qa7zw8toNdaHI52ErFkB2ZKzwSCarg5osDh4CJdZA3O8VHXbzcfrJS0sxb01Z2IfUbz2TjsDENZOjL3gKoKVbPllhL36lPjS%2BDkG0wWEwgqgIM42zE4SdbzJ2GEny1QXEJrbugJqCLJIjO62W%2FnuPHcsiQ%2BvWemc1jnURlDXifjfQ%2BsykDQkBA0GQmNXms4f8HFJpCDBRpX%2Bq3%2BBPUl5K0Pnw2PSJMfjRVjaX0DjMwtSOxQXpL9GGDB75%2FigVQpCcT%2BEwqMfDS6mHPdSZUS%2F2pdUK1L%2BVPtVlWJUHvM%2ByumzTba0AFPQXgtNkCfO0x6zbev76OFAiyL0SJiUgLH9uqIdx5%2Bq%2BSgd1aGUJ3IlVdZ7G3am%2FFsiWGPRgoFyoSYCbVsOkCgmwLEjitKZojDnUWFaKJXap2yK8hpM1yP4qW7xL76%2BsEUhRyamtARqzpg1170D1t41IFCSNtReBm22T3egTEQLQwPEaFwO3EFX1xXR4wl2B3bneBI4OPZ17bBaqw83UmoyJrtSdF%2BqtQ8FFIP6EgZ%2FusfbumyuxF0Hciz4GRFK%2BKNLlnpxyJ1A6CYi0ZxbMKv5xskGOqUBztMZIjRgNt2M%2FmGYPDdmaHWH4l9x04CN%2FT%2BCI1nbPneiTu9NGX4qE59UQUpvB2ikDveVj0kwKN%2F3gTSf3lrO40TrrP4rj7I9mkEYuZK%2FolG85k%2F50SJ1qluYLAm5wN76OKrWuXlXI%2B6SaozUG7HnbqTbTSsbvRH70XVGf%2FCKETUTaNHlVvqqJTLV9z%2FBVo7k%2F3FR302bWMpgYwRhn9SaCm2HghnA&X-Amz-Signature=018214a7f78867860886c7c4a42bf0c30ddca02b04a49d2c0c2e053d86f340df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

