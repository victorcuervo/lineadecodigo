---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSP2DMQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5UHkJcjb0hDg3ZL9lLY5DYXgORuAO%2FQCreol3dfsRbAiAlDUPVI6GfPsjR2xgvzHBvvv5kppVbgaRbPGqPgRZySCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSdjr%2F1Hq2fduGDIKtwDLlfsif68IRLhNo1bwuG8miWE2VhunjZeY0yRvaFlJO2lP7yFiJIjyT2EyS4Bq%2FgLAnl5N4UOq9NwN%2FrmFDwdc%2BWO%2FzKRG%2B5jof6R3xlXztg17dW4SHtphEOFYQQV%2BTprWTxpmPJ0DIgzVke3LlJCnT9OsqtB5NWedvAdtLyUOzsTq6lYSvcRAq%2F7%2BhX4P%2BuLKwW7VNdNl4qePGz3RO4Wdmt9cnSvVpLkJHm7E7RyPeBpLUrqpem3I%2BYDjqbpA5DxeLcBy%2BgWaajE8IrGYEG03kDMW9ckK%2FdMeKxUlgng0hIJ4aRcYncuBm%2B%2BqJpERSb%2B6L1iJqUE3vO1NE%2FqNQ5OC6l2RO%2B6NfOJCPfYt%2Fhqw%2BXQ2zBSE7VngK8En5rQdbb3CqaHZFx9ECy8Xkef4udiuh%2BBoUs0gVDW3lqeKcmstUAD24%2FNpLABqyo%2FO%2BaxzQiOwaBJ64LAkHG5Cy65e1eVRGf5l9GS7cpl%2Fi4Yzhk4PepOTogNgwRthdjOiHhpPkYUVjr5FL1V0I0VlRjSqn9tbATBERd1rrsqhdDiJk7oh5j8Zsxo641NbZKm83yVdzPDPPot7spObQ27dMeaIJfz0fWrZjqHntibItkUdLQoSRwTlky%2Bu6VSkvkfk0ow8OTeyQY6pgEJnC8sNobXZjSIQbXXFjDWxrdm1sI6aiphH6Bbs%2BVVnAwDfeLmA3Cel8tJRjLYmlqS2IhLwWqHD7ByI1QZWacyYb9HP2JJ3N%2FOnu4O51KlJz4X5gh67nPJob36XfjiKJSkkOMTk4t9sfhVRRFlwkh4cCEr8uXUHkl5Ybb19ly9JeFEwYPMUNrmKiMuGoCYvMGgl%2FUnEj9jXiZ5bWP7%2BBAxO%2FpyTXkr&X-Amz-Signature=077a3a37852c8487497ec204769f499ecfa47c1eb9ccf192a2be461530860e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSP2DMQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5UHkJcjb0hDg3ZL9lLY5DYXgORuAO%2FQCreol3dfsRbAiAlDUPVI6GfPsjR2xgvzHBvvv5kppVbgaRbPGqPgRZySCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSdjr%2F1Hq2fduGDIKtwDLlfsif68IRLhNo1bwuG8miWE2VhunjZeY0yRvaFlJO2lP7yFiJIjyT2EyS4Bq%2FgLAnl5N4UOq9NwN%2FrmFDwdc%2BWO%2FzKRG%2B5jof6R3xlXztg17dW4SHtphEOFYQQV%2BTprWTxpmPJ0DIgzVke3LlJCnT9OsqtB5NWedvAdtLyUOzsTq6lYSvcRAq%2F7%2BhX4P%2BuLKwW7VNdNl4qePGz3RO4Wdmt9cnSvVpLkJHm7E7RyPeBpLUrqpem3I%2BYDjqbpA5DxeLcBy%2BgWaajE8IrGYEG03kDMW9ckK%2FdMeKxUlgng0hIJ4aRcYncuBm%2B%2BqJpERSb%2B6L1iJqUE3vO1NE%2FqNQ5OC6l2RO%2B6NfOJCPfYt%2Fhqw%2BXQ2zBSE7VngK8En5rQdbb3CqaHZFx9ECy8Xkef4udiuh%2BBoUs0gVDW3lqeKcmstUAD24%2FNpLABqyo%2FO%2BaxzQiOwaBJ64LAkHG5Cy65e1eVRGf5l9GS7cpl%2Fi4Yzhk4PepOTogNgwRthdjOiHhpPkYUVjr5FL1V0I0VlRjSqn9tbATBERd1rrsqhdDiJk7oh5j8Zsxo641NbZKm83yVdzPDPPot7spObQ27dMeaIJfz0fWrZjqHntibItkUdLQoSRwTlky%2Bu6VSkvkfk0ow8OTeyQY6pgEJnC8sNobXZjSIQbXXFjDWxrdm1sI6aiphH6Bbs%2BVVnAwDfeLmA3Cel8tJRjLYmlqS2IhLwWqHD7ByI1QZWacyYb9HP2JJ3N%2FOnu4O51KlJz4X5gh67nPJob36XfjiKJSkkOMTk4t9sfhVRRFlwkh4cCEr8uXUHkl5Ybb19ly9JeFEwYPMUNrmKiMuGoCYvMGgl%2FUnEj9jXiZ5bWP7%2BBAxO%2FpyTXkr&X-Amz-Signature=76add6bdcc6317ac6682a1595f6e02a54ac8cd6122ea345fbd0073d3d206e9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

