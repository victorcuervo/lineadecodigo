---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMMJ5XYC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0DNIeqDxNAZrNbxbTf7M4juzd4au2ea3sOiu8fCVqhAIgL01RfzgZ%2BE2MRAKNfNwl06ffmVJ4icdqDVZsOJoCkosq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEx%2FI5iQuMrpDqFPjyrcAyJCoPenGd8QNo9RYzPQYg3O8rCv9VOsmy5boJ8G7C2YRIMRQTIl7Adw%2FKOgpDuACzJJXQysDrbRfAhjbspJ6al3mt1FgmV5B4GOee7dwv0%2FAh%2FZCpHs9Wfyfvd1ovy8gXagEAUfuVuf7JsaZTNXZ%2BhIcf%2BhcOYPeWI8oK6owz7QuPLe8xnm2mfo8fb2ot4rFQ%2FJrqfJ2DCBhWrpChGZ6hlcnfxRitgJRNu2eE81cMsjfJ4rFEMnrzhWhEPC3FhiOByUU3dEH9rki5HsF%2FTGPlz84wQ8qO6Udj%2FGbLxtQOiZKdnTG3%2FI9nL5DzHhm5x1Wwnm%2Bh8gfQRjdcfr1yhAicmLX9VusroZaxgjr5WXCQ3a3Zf9MQ3CnYzxyiCcyFdRkgadydRzP4J1huC6qDYqIB6pi9wXz7xaS6ULND0GRLbEUKjg0d1dIfY7qlCYXdCT0OkcSyZdZ%2B0E8%2FmQ9IZOK8ZlPIgtb8DN7935X%2Fdey28vycJoo590sFsEonNIP2cc4Tvj2qJpeTn7r9%2BB9A9AJpAE9fWLpFGaXwC%2BdOLZ6PadhUBG0iZBIqXDlDJ%2FHMq%2B4ue%2BAY2yXX%2B7x1v7tk4vqGIkruKdlIjOjzzEnmc5BFX31aoQBu0VMCbMgAsfMLKMyMkGOqUB53EPeML2Ji6zSNTcCGzG1JXC6%2Ffew3SzFWOrOO92W9Gnh8otUDRWw5LhE8N3bO6M29jBDmNBh3MKlJyzJvEBTSvGzNllo8MQ6DTB3PpASucT20Gf%2BVHWoWf4M3KfWkQcFDPyFXkLsjWQkxetnqdkS%2B2YcN%2F%2FGrWkTwrNt2ctcudo%2FNLavULer5f7M1Zs3olkwMmf2dHCbNAviVPgmUEYelM6Tw%2BE&X-Amz-Signature=1973d72bab11107900b15d5f7dd698a48b2ff6964a53d3023d7a9bee86520c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMMJ5XYC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0DNIeqDxNAZrNbxbTf7M4juzd4au2ea3sOiu8fCVqhAIgL01RfzgZ%2BE2MRAKNfNwl06ffmVJ4icdqDVZsOJoCkosq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEx%2FI5iQuMrpDqFPjyrcAyJCoPenGd8QNo9RYzPQYg3O8rCv9VOsmy5boJ8G7C2YRIMRQTIl7Adw%2FKOgpDuACzJJXQysDrbRfAhjbspJ6al3mt1FgmV5B4GOee7dwv0%2FAh%2FZCpHs9Wfyfvd1ovy8gXagEAUfuVuf7JsaZTNXZ%2BhIcf%2BhcOYPeWI8oK6owz7QuPLe8xnm2mfo8fb2ot4rFQ%2FJrqfJ2DCBhWrpChGZ6hlcnfxRitgJRNu2eE81cMsjfJ4rFEMnrzhWhEPC3FhiOByUU3dEH9rki5HsF%2FTGPlz84wQ8qO6Udj%2FGbLxtQOiZKdnTG3%2FI9nL5DzHhm5x1Wwnm%2Bh8gfQRjdcfr1yhAicmLX9VusroZaxgjr5WXCQ3a3Zf9MQ3CnYzxyiCcyFdRkgadydRzP4J1huC6qDYqIB6pi9wXz7xaS6ULND0GRLbEUKjg0d1dIfY7qlCYXdCT0OkcSyZdZ%2B0E8%2FmQ9IZOK8ZlPIgtb8DN7935X%2Fdey28vycJoo590sFsEonNIP2cc4Tvj2qJpeTn7r9%2BB9A9AJpAE9fWLpFGaXwC%2BdOLZ6PadhUBG0iZBIqXDlDJ%2FHMq%2B4ue%2BAY2yXX%2B7x1v7tk4vqGIkruKdlIjOjzzEnmc5BFX31aoQBu0VMCbMgAsfMLKMyMkGOqUB53EPeML2Ji6zSNTcCGzG1JXC6%2Ffew3SzFWOrOO92W9Gnh8otUDRWw5LhE8N3bO6M29jBDmNBh3MKlJyzJvEBTSvGzNllo8MQ6DTB3PpASucT20Gf%2BVHWoWf4M3KfWkQcFDPyFXkLsjWQkxetnqdkS%2B2YcN%2F%2FGrWkTwrNt2ctcudo%2FNLavULer5f7M1Zs3olkwMmf2dHCbNAviVPgmUEYelM6Tw%2BE&X-Amz-Signature=fdfc0409f5b6c5ca9fadbce6efcee5ce7d29d6a4fa931831d1a582651b9de53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

