---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEERBC6M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgGJoJQZSnxnWuDiO4mgO1aE5jUHe2h5mBE4gbJbpAgIgQ8v7rGfAbd9RBOnaSHjF9dhYO7zGVkYvwONKUqH3eH8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnZkmaG1tAIbhXpUCrcA3giJGlkKCLkmj7j3IavQ7rS3b5RyzlkGsoB8Rx%2B0NGxG8X1pYTOYhMForP4AikGSRvtR6QQOybWijH7MuCvbiv9qB6LbAbcSZQO%2BKOnjCDVXr1HIdHxMFxN5EZHcqVXKEwWA5NFZzPXevi01qrmrOWciSSm5029aiJrrSqAmdB6Aex9lxVPzwXqo6O%2BGFlLCgwYmKpa6AnfOvgGRr0Vo16hyDoYhbAuxL8RpcVMcy%2BwoRqehJ3FGbLUGphlHZa9kl9%2F1WLYVG9zaNpl8Tpw29qg4fM9R8iwyKEd7YCCtoNAU1FD7Wy0GsJd59sAZfeNF3t1WpbEhx6qvDqAh3RV8sFy%2F0YYISUGPhO1gPRXtr3%2BEZPwNiukK16ZJXwYaTKb8NWK0iDbE1L%2BsosPxaOFRfB9KAH9NNvZsAcWcbL2mdWPoW%2BoD6XPe2y1P9VGGnpOgWa00VOgR%2Futj2eeOW89kZhjFA9ZiUdcsV27LVHTqvwH0xt6Sa2O2UokU%2BNpgQ95oSkr0iCvhnErNu%2FAw3HIal%2Bq4%2Bns%2BEpWgcHa%2FjSYKqRAfvp8zG8nNBJq8XX%2Bbrx7JalmYPeYFheLb4ijzwXoVMG7WlXd8niL5i4oZ6mk%2FB5zoVaUfsjl7Zwfb6DcMOet3skGOqUBCqSBXDmBePZnL0%2FaraqslvFA7Yk%2BZYoYakey7Oj%2BWgNbJOb%2Fb%2Fy3m5qxQqYXTfxw6AIXLFVnhpuZqiEKDxC%2BLCLdjiD79137Q04paYCpv%2FVZowCx%2BDV7EDTo2wo5rTtLi7GpK%2FVwO6AvKGYyCyBQYsWq97ApyWh5g3ywFHdlZVnkH8Ug9lLwBOH58s2sHEqu0ORtsbz2Wi6rWrTmfcT%2FbObqrJ%2Fw&X-Amz-Signature=d6bcc718da474aa5ffa08572878b2205ede9329c3368059b3bd51674d7280419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEERBC6M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgGJoJQZSnxnWuDiO4mgO1aE5jUHe2h5mBE4gbJbpAgIgQ8v7rGfAbd9RBOnaSHjF9dhYO7zGVkYvwONKUqH3eH8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnZkmaG1tAIbhXpUCrcA3giJGlkKCLkmj7j3IavQ7rS3b5RyzlkGsoB8Rx%2B0NGxG8X1pYTOYhMForP4AikGSRvtR6QQOybWijH7MuCvbiv9qB6LbAbcSZQO%2BKOnjCDVXr1HIdHxMFxN5EZHcqVXKEwWA5NFZzPXevi01qrmrOWciSSm5029aiJrrSqAmdB6Aex9lxVPzwXqo6O%2BGFlLCgwYmKpa6AnfOvgGRr0Vo16hyDoYhbAuxL8RpcVMcy%2BwoRqehJ3FGbLUGphlHZa9kl9%2F1WLYVG9zaNpl8Tpw29qg4fM9R8iwyKEd7YCCtoNAU1FD7Wy0GsJd59sAZfeNF3t1WpbEhx6qvDqAh3RV8sFy%2F0YYISUGPhO1gPRXtr3%2BEZPwNiukK16ZJXwYaTKb8NWK0iDbE1L%2BsosPxaOFRfB9KAH9NNvZsAcWcbL2mdWPoW%2BoD6XPe2y1P9VGGnpOgWa00VOgR%2Futj2eeOW89kZhjFA9ZiUdcsV27LVHTqvwH0xt6Sa2O2UokU%2BNpgQ95oSkr0iCvhnErNu%2FAw3HIal%2Bq4%2Bns%2BEpWgcHa%2FjSYKqRAfvp8zG8nNBJq8XX%2Bbrx7JalmYPeYFheLb4ijzwXoVMG7WlXd8niL5i4oZ6mk%2FB5zoVaUfsjl7Zwfb6DcMOet3skGOqUBCqSBXDmBePZnL0%2FaraqslvFA7Yk%2BZYoYakey7Oj%2BWgNbJOb%2Fb%2Fy3m5qxQqYXTfxw6AIXLFVnhpuZqiEKDxC%2BLCLdjiD79137Q04paYCpv%2FVZowCx%2BDV7EDTo2wo5rTtLi7GpK%2FVwO6AvKGYyCyBQYsWq97ApyWh5g3ywFHdlZVnkH8Ug9lLwBOH58s2sHEqu0ORtsbz2Wi6rWrTmfcT%2FbObqrJ%2Fw&X-Amz-Signature=1a0c8f46e3ef89a9a324a841501da746f20aba50cee3947870f2629a5ce5c727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

