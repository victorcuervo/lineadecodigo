---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFGKYRBO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAOkeawRlZt8wsVywZ4KdMwjcrAXrkI%2FX%2BqZL2yhCityAiA%2BsSHj9bgnW%2BCTKkYGvcur2ieUGod9I4788BqcvJbiUSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMOWHNvsnIwMjXA2D1KtwDl8Od6J1ErVzekftHHIRzq%2F5kUqZUVS2c%2B4PsS8%2FrajB8jazKb49JZD%2BJijyliBePD%2BBICzx8C%2FFIuH2v%2BVYO01CRV8ac4qdEY1ietyeucgQ0qb4PjXofCZh7nM454CnZudS2d%2FOvaHYTtbPAhTGr5qKdBMUhu8q7uLZ7XY7rDeH4FJL%2BBhv5v%2Bse4ZzZh3fUUzqdcF6dDT8VIu3mMAAsTMUJN4xeCQAdESE1j0O4voxjwwR9r0inuXoKJpDPG2rD1cuLziYEylZHO28vH5cGS8S2rLCzF7elQuXRdUr3yrNPEoh%2FwOo%2BS%2BVM9n6180pvSceuLaXlTDGLKdVqD3ENsxtxkOmAf804unhBBFx9Ke1V7IzhlJjq87abKbMiCbZ8fYsixxwrgh5ewBGzlhGhBdyaBP3Eh9yKbqfNO94WDsU%2F6UoZiEueEDi0AZ8DViJVzGTTPDB%2BBkCeQ2cYVtcTWdU9zo8u3BE%2FKyYSCy40j5mP2c1hlmB4w%2FJQu7OQpbf10gE1dvP30lXK0n3nXkGhwUrcGXEZQsncQeiBSh8IQjCNuykFZ14fBa8foTHy%2BNy7F01tcAmYn9AEfjsNWd%2F4KrcQm5MMQF2Q192nVTJZwDRoa3BLmBMm3wrgk78wsIXFyQY6pgEcKeiMQH%2BsEZOs1VqwIPg7m8Ksb%2FteLm15IEdy9CJyqb8W9i1oBIqWZ1lmCsHdJvC9ITQqbDG1rg9aSymHgXrPT7O4IOmB8R1mnNrbu769rE1rQ6njUPPsS4apOfFwP8AkV%2FeZYzB9eXW3Qvrfv4w0Vo%2Fa2oDBEQg4R5iI7JRkM9x5o2lHP6fuTYww1jDq3pdpDuR7DV95T0F2YFpeW66olnFStLHi&X-Amz-Signature=a4fbf3a5df220eb6ac21fbafaa8f3fe5c12f2e60fec726e09f5c4f3b005d3d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFGKYRBO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAOkeawRlZt8wsVywZ4KdMwjcrAXrkI%2FX%2BqZL2yhCityAiA%2BsSHj9bgnW%2BCTKkYGvcur2ieUGod9I4788BqcvJbiUSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMOWHNvsnIwMjXA2D1KtwDl8Od6J1ErVzekftHHIRzq%2F5kUqZUVS2c%2B4PsS8%2FrajB8jazKb49JZD%2BJijyliBePD%2BBICzx8C%2FFIuH2v%2BVYO01CRV8ac4qdEY1ietyeucgQ0qb4PjXofCZh7nM454CnZudS2d%2FOvaHYTtbPAhTGr5qKdBMUhu8q7uLZ7XY7rDeH4FJL%2BBhv5v%2Bse4ZzZh3fUUzqdcF6dDT8VIu3mMAAsTMUJN4xeCQAdESE1j0O4voxjwwR9r0inuXoKJpDPG2rD1cuLziYEylZHO28vH5cGS8S2rLCzF7elQuXRdUr3yrNPEoh%2FwOo%2BS%2BVM9n6180pvSceuLaXlTDGLKdVqD3ENsxtxkOmAf804unhBBFx9Ke1V7IzhlJjq87abKbMiCbZ8fYsixxwrgh5ewBGzlhGhBdyaBP3Eh9yKbqfNO94WDsU%2F6UoZiEueEDi0AZ8DViJVzGTTPDB%2BBkCeQ2cYVtcTWdU9zo8u3BE%2FKyYSCy40j5mP2c1hlmB4w%2FJQu7OQpbf10gE1dvP30lXK0n3nXkGhwUrcGXEZQsncQeiBSh8IQjCNuykFZ14fBa8foTHy%2BNy7F01tcAmYn9AEfjsNWd%2F4KrcQm5MMQF2Q192nVTJZwDRoa3BLmBMm3wrgk78wsIXFyQY6pgEcKeiMQH%2BsEZOs1VqwIPg7m8Ksb%2FteLm15IEdy9CJyqb8W9i1oBIqWZ1lmCsHdJvC9ITQqbDG1rg9aSymHgXrPT7O4IOmB8R1mnNrbu769rE1rQ6njUPPsS4apOfFwP8AkV%2FeZYzB9eXW3Qvrfv4w0Vo%2Fa2oDBEQg4R5iI7JRkM9x5o2lHP6fuTYww1jDq3pdpDuR7DV95T0F2YFpeW66olnFStLHi&X-Amz-Signature=4e37284122eabf447f7c9a7f9aa884277aa1deddc6160f7acac41aa2238d7421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

