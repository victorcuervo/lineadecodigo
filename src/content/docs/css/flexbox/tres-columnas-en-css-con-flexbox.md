---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCQZKBAL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGjiQMoJsAaqdHiQPZbA0sgEt11suThYBZRFA3EXQGe8AiApA3m5gK%2FWWc7Ns7%2FbkyTyPzJ1akhBS17VP92nN%2FnSXir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMoLewknUtTnP2u8OCKtwDeDDtKuCZwzvpl%2BVGmeHmk76D8908W%2F0O9h2VTWaAyUULcO2pKTNBzd5YlR%2B8MXljgEBudwpF8faYZCTs8WM%2F3Ctu9TX2mosSanQnyauveONTOIA7DWFSZXzyLNnPsSlSM89uAaHuLg1a6TR%2BJahN4H5ONEiQQPTZcCkZl1QmMb0t5h%2FTjvlHG%2Br3%2FQiG9MIqlJS4uIcDiA6ltkSKWOVFAm7UwokXleMu6UMe3Vey0SMLCl%2BBR5Q9eGk0GMOecauW1S0blFjvuy4hfggRmPN1lKqnOgZRYqb%2B64s1vanTq5cUpI2m5TYEtvL%2FuavePJLh9xrI5ZYAB6L2KGN7ReKrajleXqchUfZSDaeb2rucpIT%2B9ZydvD2%2FTTdP06qVWw4VIW2iuZ6THC9mLpo6lqm5wy1XoEAkK1d2AQ5fDuzL4UuYWZxPeQsF87syPvCnQVB9ksc3NhiX2Uy8dgjc64ywMkfYwteNMnVck6oAsBZDWreDegMjg%2BGNiRz6MxsTdDQ0cwQ6mbzk8aRA2R5Iycycc2KIPOVnIf1f9w5pHxW0M4yqqXKe9U0gjvsO5BFMHp0WvQdVGDEDj1slGYIsvbtnxkKKP5BHzsUQ6IgrCnRWvMN%2B6iBfr%2BwG1ZM8ET0w0L7GyQY6pgGjaFzEobKODtBGLjLy0m1JDwrIjGaTqoUKxfTXqIemjX8BhFsnKbGZpI7h26iQxEGH4MVcr6isr%2BBbuiGN%2BNPNEJuC1r54DT%2B%2BmXiHA%2Fx2vJ19PjZsbO9b0lsOFo%2Bsis6ijtvlfWaG%2B5SerWyDcnlILaE%2BSevRMgbuSBOJNIMVT7%2FdVq9TZ86ihWcOOMcDTTdqX3wRCKSXC%2FGM%2BI2nx2SnI22fLKpF&X-Amz-Signature=2e4989c8957055e37b460c4a3107797ff871b3e1e1896da1e395f46e253403f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCQZKBAL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGjiQMoJsAaqdHiQPZbA0sgEt11suThYBZRFA3EXQGe8AiApA3m5gK%2FWWc7Ns7%2FbkyTyPzJ1akhBS17VP92nN%2FnSXir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMoLewknUtTnP2u8OCKtwDeDDtKuCZwzvpl%2BVGmeHmk76D8908W%2F0O9h2VTWaAyUULcO2pKTNBzd5YlR%2B8MXljgEBudwpF8faYZCTs8WM%2F3Ctu9TX2mosSanQnyauveONTOIA7DWFSZXzyLNnPsSlSM89uAaHuLg1a6TR%2BJahN4H5ONEiQQPTZcCkZl1QmMb0t5h%2FTjvlHG%2Br3%2FQiG9MIqlJS4uIcDiA6ltkSKWOVFAm7UwokXleMu6UMe3Vey0SMLCl%2BBR5Q9eGk0GMOecauW1S0blFjvuy4hfggRmPN1lKqnOgZRYqb%2B64s1vanTq5cUpI2m5TYEtvL%2FuavePJLh9xrI5ZYAB6L2KGN7ReKrajleXqchUfZSDaeb2rucpIT%2B9ZydvD2%2FTTdP06qVWw4VIW2iuZ6THC9mLpo6lqm5wy1XoEAkK1d2AQ5fDuzL4UuYWZxPeQsF87syPvCnQVB9ksc3NhiX2Uy8dgjc64ywMkfYwteNMnVck6oAsBZDWreDegMjg%2BGNiRz6MxsTdDQ0cwQ6mbzk8aRA2R5Iycycc2KIPOVnIf1f9w5pHxW0M4yqqXKe9U0gjvsO5BFMHp0WvQdVGDEDj1slGYIsvbtnxkKKP5BHzsUQ6IgrCnRWvMN%2B6iBfr%2BwG1ZM8ET0w0L7GyQY6pgGjaFzEobKODtBGLjLy0m1JDwrIjGaTqoUKxfTXqIemjX8BhFsnKbGZpI7h26iQxEGH4MVcr6isr%2BBbuiGN%2BNPNEJuC1r54DT%2B%2BmXiHA%2Fx2vJ19PjZsbO9b0lsOFo%2Bsis6ijtvlfWaG%2B5SerWyDcnlILaE%2BSevRMgbuSBOJNIMVT7%2FdVq9TZ86ihWcOOMcDTTdqX3wRCKSXC%2FGM%2BI2nx2SnI22fLKpF&X-Amz-Signature=ab8244ce0c474e7afcee657c4a51a148509109c2fe40724f075af62d5bf8e317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

