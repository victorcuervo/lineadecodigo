---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NECI5F2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgw%2B1K7DYrUh4xrLfpcI7wzXobWvNXoCywMec3XwfOOAIgQ2tbpxwlchupuy2ssNwZZSpY5nFPY4thLlO6KitgsG0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNCK1bOvnC77VmNNBCrcA4NQ2gmF2I0kHv4Sa8dp%2B%2B7H%2FpQMhqN8Q1K7gKmQllDMOcdB8Osm7odpvARabBDSJxrkP6hwc7fLwR%2BGqS8CyNZFcZXtIkYL1PodoelHCLvVJoKHu4n%2FYxPRQBsTZUDdjn%2Bson748t3IyiRkSoTcj3QdeHvYN%2BrPS1ZQkJqk279G1b7vqUipzPHVmDKY5DZ%2BzwO2OeAf%2B%2BC2o0An1xcijnaMpBaGk106coUt9O56pzVuw8UtRbtAJkE4eMbbwf02GWxlQdIBDSGt9X4BR4lkTi%2FtR9NzEA6o4s5Mx2y62cP0RWrDv8rOfUeu3NiDwuljKYSa5qqXZSNo2s8seL8ilN8Q5nmS0cPR9%2FzJH%2FtqZtRAKM2aGE%2F%2Fh9RMnFNPxLJcfjrJuD6S6ddNE2yksjlkw3dLzuRT1ecQg2atsJZh0JZ49i27ct3q%2ByPVo1MWCcf%2FgF3TbYaoxuU0nLCvLD8rH7FV5XBazfAIpVZJZOfRNgLRZg7CsVBnkDkjz6AJ5yhCut03n6Jzp3PpyRPNuJlADOTgMrsfniUK7YnuK8NY2xgn1BP6lAgtqXQpfVWMiqcROpH5KpbAhJ8j3xOhmu8G325AKw1ygHA41OB7hsDTXT%2B%2BCyqd8LQPpFxY5P9BMOCMyMkGOqUBsC7aJJkWTb0nEUFHcFwxOncybknf3G5S8%2FSeuhOXGpI2iEOS6SeSrq%2F37FyDb97KIAteM%2BiibOwSBD%2FBiHtBzCYUBrVj483qCP2MFym1dUyY0tPEjzkuix2qhfjCRHr7oo4o7wdt03tlGAzILIBsjBbollLw4knnTG%2F7puBFjp%2BvAv%2Bs9zfkVQamCPZb7zAuAlOvmAEpDHqWHk3kzkF6bQigKETV&X-Amz-Signature=eca047100580ec144d78cf25b3c1136d4d6ac707e992a731710818e630fd78dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NECI5F2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgw%2B1K7DYrUh4xrLfpcI7wzXobWvNXoCywMec3XwfOOAIgQ2tbpxwlchupuy2ssNwZZSpY5nFPY4thLlO6KitgsG0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNCK1bOvnC77VmNNBCrcA4NQ2gmF2I0kHv4Sa8dp%2B%2B7H%2FpQMhqN8Q1K7gKmQllDMOcdB8Osm7odpvARabBDSJxrkP6hwc7fLwR%2BGqS8CyNZFcZXtIkYL1PodoelHCLvVJoKHu4n%2FYxPRQBsTZUDdjn%2Bson748t3IyiRkSoTcj3QdeHvYN%2BrPS1ZQkJqk279G1b7vqUipzPHVmDKY5DZ%2BzwO2OeAf%2B%2BC2o0An1xcijnaMpBaGk106coUt9O56pzVuw8UtRbtAJkE4eMbbwf02GWxlQdIBDSGt9X4BR4lkTi%2FtR9NzEA6o4s5Mx2y62cP0RWrDv8rOfUeu3NiDwuljKYSa5qqXZSNo2s8seL8ilN8Q5nmS0cPR9%2FzJH%2FtqZtRAKM2aGE%2F%2Fh9RMnFNPxLJcfjrJuD6S6ddNE2yksjlkw3dLzuRT1ecQg2atsJZh0JZ49i27ct3q%2ByPVo1MWCcf%2FgF3TbYaoxuU0nLCvLD8rH7FV5XBazfAIpVZJZOfRNgLRZg7CsVBnkDkjz6AJ5yhCut03n6Jzp3PpyRPNuJlADOTgMrsfniUK7YnuK8NY2xgn1BP6lAgtqXQpfVWMiqcROpH5KpbAhJ8j3xOhmu8G325AKw1ygHA41OB7hsDTXT%2B%2BCyqd8LQPpFxY5P9BMOCMyMkGOqUBsC7aJJkWTb0nEUFHcFwxOncybknf3G5S8%2FSeuhOXGpI2iEOS6SeSrq%2F37FyDb97KIAteM%2BiibOwSBD%2FBiHtBzCYUBrVj483qCP2MFym1dUyY0tPEjzkuix2qhfjCRHr7oo4o7wdt03tlGAzILIBsjBbollLw4knnTG%2F7puBFjp%2BvAv%2Bs9zfkVQamCPZb7zAuAlOvmAEpDHqWHk3kzkF6bQigKETV&X-Amz-Signature=3593b9c1a2ce4f5afd88c952f53314233e66e2b2b23a3193ca8e2afa115340f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

