---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQ55ZR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICLaE%2FgbM8%2FUao2ZiDLIPDaJI8kzj5nMMC%2BXRcESrbvAAiEA%2B83XYc79iadaIIFOtHov4XQcY2WbXLUacTU363zcyOYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKiiwKsyjkjDCnsbUircAw7gX9cey%2Brnvcjg07HIRnI5zEod5GA5Xwm9DfcqRE5gGa3bMEKpzrOIyojXrRgXtwygPEvP65oM6d1wIl2fQBf%2F2OXWmqmDDHYwBbfLIGGvmQdGpJqBbm0KHKbiHpTjKsuipPYvv03VEHZ%2BXzmnirwD7ARv%2BU%2B8AER4psV8w2DM420noILoUAI%2BVVZv043%2BIYYxY7k4kFhsymFe8KPOdgl42NuCNiPoleH8dUf89Ue34S84XkDXWC2XydKvosDdTyvQMSUNzASsommqo%2F1gvQR4FbEqD47jMbx5zRgXDY8k6%2BWErGj5RBZzHwa5nHVyunFj4xpy1SAS%2B%2BG%2FGg1JwFInvKCAWhvkKpbsTx1kzqe74pV1h1rvu3NbCFuKKsPu4oz%2Fwsu%2BJrdy9mS6RwiVjQh9XWrZ1%2BKvdRLIWVkzyxA3TJxOsePas82rPdSoSsdEWDMOBXbk5JPbCxhZ1zoPSRMl23yDkJ6dhLDLrjDarkVaoOSpJgsdI27iF%2FzbrGLZS0fClE20JR6OubbvpMW0nVLzQ8Q9PhNXk7E%2FpiboO5FCa9SoOlWECVbFzmTpY3wkwscEH2bljeWfpmahIrCrT2%2FShhSdK8HCzcKRuQGvxkFGUfA31833GuRzEXSRMKTBwckGOqUBj1Drbr6sklOz7nHcOH5h1PdklFE8jaYf2Rb3fRqtOFr9omZXh4FVpfGFDuBvid%2BKMGd0rWDFIaOhxMAFl8zkrULCrc3qOSUiyMSYn4EXEQiIYwao60tcwuD1t27CRO10W%2BQi6Z0bQH1WNW9W12LiogAIYpP3G29jOodMY5idXfUa%2BrquCSUS1NLAGqPyWas3FwpLBnDl%2BrOOh8QdXk9E1t2Z3XP5&X-Amz-Signature=ea03975d773986904101bcbae030537e4b7969c3ce714083fea13e4a260ee448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQ55ZR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICLaE%2FgbM8%2FUao2ZiDLIPDaJI8kzj5nMMC%2BXRcESrbvAAiEA%2B83XYc79iadaIIFOtHov4XQcY2WbXLUacTU363zcyOYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKiiwKsyjkjDCnsbUircAw7gX9cey%2Brnvcjg07HIRnI5zEod5GA5Xwm9DfcqRE5gGa3bMEKpzrOIyojXrRgXtwygPEvP65oM6d1wIl2fQBf%2F2OXWmqmDDHYwBbfLIGGvmQdGpJqBbm0KHKbiHpTjKsuipPYvv03VEHZ%2BXzmnirwD7ARv%2BU%2B8AER4psV8w2DM420noILoUAI%2BVVZv043%2BIYYxY7k4kFhsymFe8KPOdgl42NuCNiPoleH8dUf89Ue34S84XkDXWC2XydKvosDdTyvQMSUNzASsommqo%2F1gvQR4FbEqD47jMbx5zRgXDY8k6%2BWErGj5RBZzHwa5nHVyunFj4xpy1SAS%2B%2BG%2FGg1JwFInvKCAWhvkKpbsTx1kzqe74pV1h1rvu3NbCFuKKsPu4oz%2Fwsu%2BJrdy9mS6RwiVjQh9XWrZ1%2BKvdRLIWVkzyxA3TJxOsePas82rPdSoSsdEWDMOBXbk5JPbCxhZ1zoPSRMl23yDkJ6dhLDLrjDarkVaoOSpJgsdI27iF%2FzbrGLZS0fClE20JR6OubbvpMW0nVLzQ8Q9PhNXk7E%2FpiboO5FCa9SoOlWECVbFzmTpY3wkwscEH2bljeWfpmahIrCrT2%2FShhSdK8HCzcKRuQGvxkFGUfA31833GuRzEXSRMKTBwckGOqUBj1Drbr6sklOz7nHcOH5h1PdklFE8jaYf2Rb3fRqtOFr9omZXh4FVpfGFDuBvid%2BKMGd0rWDFIaOhxMAFl8zkrULCrc3qOSUiyMSYn4EXEQiIYwao60tcwuD1t27CRO10W%2BQi6Z0bQH1WNW9W12LiogAIYpP3G29jOodMY5idXfUa%2BrquCSUS1NLAGqPyWas3FwpLBnDl%2BrOOh8QdXk9E1t2Z3XP5&X-Amz-Signature=fd885bd69a910de3743db6fde2d5a89c452d3bac0da7916e31fdc453ef5b7ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

