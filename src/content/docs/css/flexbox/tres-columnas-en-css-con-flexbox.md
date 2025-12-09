---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JBCM7H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDIc60%2FCuDdRyiPbaNgfZz7AZlV2rw0tdncO8d%2BxSJiwIgP4c8iD2a%2BYXscyjp%2B%2B%2FMgr5YHQPXSz15ESML%2Bmw%2FPgcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyO%2BqBTTkgYkdhayCrcAwIykQhdvKvxcIf%2FE%2BPu0%2F9sXelmDhj7Ha%2FR26rGfp1oAiqJXacN7F6nR9uK8OWuBLkdcnpSZPxftaeYX05Edh3uWWvWUGbSYMlUUpKyQR1qucCQRaqDnz%2F9SdzIYhtJJUa0YHmZS6pgHN69%2Bys9qBPuG5pm7SaQi36NfPpC%2FntqINBwp3AhEaa2zbpVgUVUUHha0w%2BlcJny4rQu61J6nhJ2XuowDw0a9mV93A0oL3jdZ1fI10KY1lvKPmNcrU3QLfo1oO4l8ve82aXrqG0fBad9A8NNcJElmw1%2BYfz9Zjjj7rRuDUaIqqYQ5WRdLgPBSujqlSsx4R0V40nzsClZzFM1SlDT%2BB23sW2N0a5fkYMRUGV3BG7Kp1Waw%2BGxeLsG8v%2FQ9NOgOhW7O6ApG1dwA4Q%2Fu1AU37Fgqx12sKwQyG65gmYKkFKiw4JIo5z9p8hoYPKuNmM%2Bo0qT9Xlb867JWU7dIQxQyexzF3UqPtcmca1qknca0maWMz6oX1wSXWr9SR4iKPkpF6jwNpuJNh%2BHdazZssBDWO%2F9jiJeE1vZZdqoBFI4i3trIeMIVksFr2NyNLrToEwg353nXfqPIzBAQCjxnpfeFISvax91%2BpZK%2FDyGgsYyVRxjEQJWhk1xMLyP3skGOqUBB9wFa6EK0NUn%2Bp1XWSR5C17RUxsFLKGB7QSBBvx3lWDjB%2FKAH%2Bgjb4vZj9H7IkCW69lB2Mw3zbbCn4diROH50Z4NLC%2FyerKsF6Kb9nNt%2BA5smcT5Pnzn6V3pbChxJBX8SDyYHC1MH%2F3oybPyBvBWy8SiQ5ODzr4NBSltcpw8qVFYYrCB6o4O1oDEriGwyTwmIk%2FB5pA3F1nQ9alGXA5fAYNO7w0b&X-Amz-Signature=531c57d54158c7398882d3f8cd07a46cd4b7279b74bcf3bd24628f4ba25a06ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JBCM7H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDIc60%2FCuDdRyiPbaNgfZz7AZlV2rw0tdncO8d%2BxSJiwIgP4c8iD2a%2BYXscyjp%2B%2B%2FMgr5YHQPXSz15ESML%2Bmw%2FPgcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyO%2BqBTTkgYkdhayCrcAwIykQhdvKvxcIf%2FE%2BPu0%2F9sXelmDhj7Ha%2FR26rGfp1oAiqJXacN7F6nR9uK8OWuBLkdcnpSZPxftaeYX05Edh3uWWvWUGbSYMlUUpKyQR1qucCQRaqDnz%2F9SdzIYhtJJUa0YHmZS6pgHN69%2Bys9qBPuG5pm7SaQi36NfPpC%2FntqINBwp3AhEaa2zbpVgUVUUHha0w%2BlcJny4rQu61J6nhJ2XuowDw0a9mV93A0oL3jdZ1fI10KY1lvKPmNcrU3QLfo1oO4l8ve82aXrqG0fBad9A8NNcJElmw1%2BYfz9Zjjj7rRuDUaIqqYQ5WRdLgPBSujqlSsx4R0V40nzsClZzFM1SlDT%2BB23sW2N0a5fkYMRUGV3BG7Kp1Waw%2BGxeLsG8v%2FQ9NOgOhW7O6ApG1dwA4Q%2Fu1AU37Fgqx12sKwQyG65gmYKkFKiw4JIo5z9p8hoYPKuNmM%2Bo0qT9Xlb867JWU7dIQxQyexzF3UqPtcmca1qknca0maWMz6oX1wSXWr9SR4iKPkpF6jwNpuJNh%2BHdazZssBDWO%2F9jiJeE1vZZdqoBFI4i3trIeMIVksFr2NyNLrToEwg353nXfqPIzBAQCjxnpfeFISvax91%2BpZK%2FDyGgsYyVRxjEQJWhk1xMLyP3skGOqUBB9wFa6EK0NUn%2Bp1XWSR5C17RUxsFLKGB7QSBBvx3lWDjB%2FKAH%2Bgjb4vZj9H7IkCW69lB2Mw3zbbCn4diROH50Z4NLC%2FyerKsF6Kb9nNt%2BA5smcT5Pnzn6V3pbChxJBX8SDyYHC1MH%2F3oybPyBvBWy8SiQ5ODzr4NBSltcpw8qVFYYrCB6o4O1oDEriGwyTwmIk%2FB5pA3F1nQ9alGXA5fAYNO7w0b&X-Amz-Signature=715625ab9e9a0380396137bd76f5557837cee7ce017c3015482319f7d0edc174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

