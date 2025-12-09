---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGYATZG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6dKTvfHTjdmyGTSpQTcKeOxIAsU95pbbBMgZgB%2BzugIgCrdZuSa3Ka%2FWCqteR6Tv2pd6CFGVVZTyn3%2FG1AHtpTYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtxv%2BDle7DB%2F53j7SrcAxqsUKMRNv%2FZFEhXzTZfqKHU%2B8fY2kgvILaVDz2A4xjDYdg%2By7lj9zUu8PO3SLzuF0Iqa%2F6wTqI3ltZhcAB9LyiDmxtobvRoL0TgvU%2FVRNNYgzXeACoQYvDvus4rDZbrwyj%2Ba5BImbQVziBt7BDFg6GAtR2i%2FKVf0NmY6WjF76E4RO3SPzyyh64nN1pKwxR%2BGI6DELEZpg1MNHe5%2BRAnVi8wzPo3upRHrzPky7vEo6%2B3Gy1atAZdMwO2yYYijH7TwTIf60N%2BWfNP6yMFl9XVgnCbb%2BOES3KM3Gxl39LVEFmYihJJl3B4HeV%2Fj2RMkLTDwFN9iXYCUpiFtqP5k1k7yAejoBmhdC39rHvV5KvAyzJ3%2B2Ws9Q7qUTILwu8tWq57yj8t65uuFOVLPwpcpoGrMnffOq2%2B3R3UYXBXQc4BYFGJAa9rCYkJNvXoa31K1K6RoJTUcCrF06ZcN8pwoTr7h7UpePerH5i1Dit0OF5CzxWjVmItFZ0DJFvB4%2FomJZj0Vx16j0V7LRFY7vfEkXUGD2Y9xgesnCGJrpocS%2F1rGGkcDWYFyoX%2BXpM%2F68OCesO5VZH5p4Z8a2zXVlR0S0V8ZVyNqbmuMC1mdZQaGaZMhzOwYOK44cLSnLqQMdkiMPGt3skGOqUBjfUjVSW3TjFZb7B4FVP5JZMTjaVP8UwhUri96Oet9q6ATVONZUt04Um3L0kgqJiDw%2Fm3TssrtazQiegJFhAX1BxOqbluXl10NirVm1mcB62O5aF7A6nKqG3mOunixk5%2F0G8MKQKgBsd3uINwAjX1YAX4ttDWT0GHYPwjwdPa8lqA73wjwTgFP6XGANIxO0q%2B0PdYBTv8gghPd%2FN8YkDPA6dD4BFC&X-Amz-Signature=0b992280b85ceb5a722ffdae0c5d56113322e68c0d2b6092ba946deec0a761b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGYATZG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6dKTvfHTjdmyGTSpQTcKeOxIAsU95pbbBMgZgB%2BzugIgCrdZuSa3Ka%2FWCqteR6Tv2pd6CFGVVZTyn3%2FG1AHtpTYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtxv%2BDle7DB%2F53j7SrcAxqsUKMRNv%2FZFEhXzTZfqKHU%2B8fY2kgvILaVDz2A4xjDYdg%2By7lj9zUu8PO3SLzuF0Iqa%2F6wTqI3ltZhcAB9LyiDmxtobvRoL0TgvU%2FVRNNYgzXeACoQYvDvus4rDZbrwyj%2Ba5BImbQVziBt7BDFg6GAtR2i%2FKVf0NmY6WjF76E4RO3SPzyyh64nN1pKwxR%2BGI6DELEZpg1MNHe5%2BRAnVi8wzPo3upRHrzPky7vEo6%2B3Gy1atAZdMwO2yYYijH7TwTIf60N%2BWfNP6yMFl9XVgnCbb%2BOES3KM3Gxl39LVEFmYihJJl3B4HeV%2Fj2RMkLTDwFN9iXYCUpiFtqP5k1k7yAejoBmhdC39rHvV5KvAyzJ3%2B2Ws9Q7qUTILwu8tWq57yj8t65uuFOVLPwpcpoGrMnffOq2%2B3R3UYXBXQc4BYFGJAa9rCYkJNvXoa31K1K6RoJTUcCrF06ZcN8pwoTr7h7UpePerH5i1Dit0OF5CzxWjVmItFZ0DJFvB4%2FomJZj0Vx16j0V7LRFY7vfEkXUGD2Y9xgesnCGJrpocS%2F1rGGkcDWYFyoX%2BXpM%2F68OCesO5VZH5p4Z8a2zXVlR0S0V8ZVyNqbmuMC1mdZQaGaZMhzOwYOK44cLSnLqQMdkiMPGt3skGOqUBjfUjVSW3TjFZb7B4FVP5JZMTjaVP8UwhUri96Oet9q6ATVONZUt04Um3L0kgqJiDw%2Fm3TssrtazQiegJFhAX1BxOqbluXl10NirVm1mcB62O5aF7A6nKqG3mOunixk5%2F0G8MKQKgBsd3uINwAjX1YAX4ttDWT0GHYPwjwdPa8lqA73wjwTgFP6XGANIxO0q%2B0PdYBTv8gghPd%2FN8YkDPA6dD4BFC&X-Amz-Signature=224a072af579c34ce8ce981cb6e92d601cb107447089ac9a7fc07fd4eeb50fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

