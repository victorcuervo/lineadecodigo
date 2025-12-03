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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSF2YFE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIF11xbaO%2F%2FHgjrj5WrdU03Bwy%2F4ZiX7UkNSzPF27ToZDAiEA%2FpbXYcJzPgKGuFuHtvVffDkHTX81ji4%2Bd5g%2FbrI2LVMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKjuvhrtrYmVa9huvircA82lvC3e%2Fwq%2FrfmWsC8TOkffS5ZS1b74IQW71sMuk4R3G8iLBQh8UhOS7Hqynbj3lS85E3KXXulVguae2PzftBLRbvALjlYXUjVdbhLt92fzRfVf%2BAy%2FWyzrEKSWL3eWVKnrJH3wyQuZMWsDsIN%2FimpOWebH2kdAnKbKb145Gg1KvRdNzXmteyQl0bCR1SVNCni2rQBDbzhoM0vy6v1NDHVYl3Gm%2FPBzDp%2Bu6Z40i77%2Ff1AC%2BT5vxyNsWj0Na3wQkxoGrhstwCZdC%2FyuBk5piLj51%2BF2mpqluicr7KI87FjJ7wUe%2FA02NUWmhEDodHSx0wUsRFaEj40NjCX4gQdOzYyHyYzOA5qkRrrecNUocHL96n6dhCXWrD%2B8IE66GQ445RESOnk8oLHyYf5RkPoIBrFnj3fPjMgwXoBaf55suWZbR4B5H0BWZatl%2BmxqXDTrHBN9xrwF3YjzXHcluJEu0tQVsKqM9C2N5vM1An1F7VNoPxXkNBvgX9PWVVCqWkShx2OnkUqcfvKRD3o05GS3n5COsh66uiZ7gi5LOsEF%2ByyMQmgVmBTn9ES7NEnGTyEBEmZWs7M1tj%2BadtyzT06Tk0WuZr887EkHugsI2%2FXn27uOBNiPOmhibjW5qfQKMMC5v8kGOqUBYS6b8fgTOwggIG0PEjxnl9eeFa%2B%2FV%2BoDhPWuhbn4tBeH5ph9X%2BjeTMjj3SK%2BxgYCZeRf5zqXROl%2B5dsFV20yj2%2F%2FOHmgBc7n6MSwqOThVx%2FXuxhLtaxOjEmjBUcsVLascjCNsW4pKpWYE%2BCnsd3ZMfW4JfoSQlbtJL4VraCNH4ykCcHnO2pYB86OKkb8apV%2FdsQk8acJZLbezS8le2IvK1xFVHLl&X-Amz-Signature=3ce0683aa06c4f927da778671cafbf6c495edcc08633c686d5a8c9fbc055dc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSF2YFE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIF11xbaO%2F%2FHgjrj5WrdU03Bwy%2F4ZiX7UkNSzPF27ToZDAiEA%2FpbXYcJzPgKGuFuHtvVffDkHTX81ji4%2Bd5g%2FbrI2LVMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKjuvhrtrYmVa9huvircA82lvC3e%2Fwq%2FrfmWsC8TOkffS5ZS1b74IQW71sMuk4R3G8iLBQh8UhOS7Hqynbj3lS85E3KXXulVguae2PzftBLRbvALjlYXUjVdbhLt92fzRfVf%2BAy%2FWyzrEKSWL3eWVKnrJH3wyQuZMWsDsIN%2FimpOWebH2kdAnKbKb145Gg1KvRdNzXmteyQl0bCR1SVNCni2rQBDbzhoM0vy6v1NDHVYl3Gm%2FPBzDp%2Bu6Z40i77%2Ff1AC%2BT5vxyNsWj0Na3wQkxoGrhstwCZdC%2FyuBk5piLj51%2BF2mpqluicr7KI87FjJ7wUe%2FA02NUWmhEDodHSx0wUsRFaEj40NjCX4gQdOzYyHyYzOA5qkRrrecNUocHL96n6dhCXWrD%2B8IE66GQ445RESOnk8oLHyYf5RkPoIBrFnj3fPjMgwXoBaf55suWZbR4B5H0BWZatl%2BmxqXDTrHBN9xrwF3YjzXHcluJEu0tQVsKqM9C2N5vM1An1F7VNoPxXkNBvgX9PWVVCqWkShx2OnkUqcfvKRD3o05GS3n5COsh66uiZ7gi5LOsEF%2ByyMQmgVmBTn9ES7NEnGTyEBEmZWs7M1tj%2BadtyzT06Tk0WuZr887EkHugsI2%2FXn27uOBNiPOmhibjW5qfQKMMC5v8kGOqUBYS6b8fgTOwggIG0PEjxnl9eeFa%2B%2FV%2BoDhPWuhbn4tBeH5ph9X%2BjeTMjj3SK%2BxgYCZeRf5zqXROl%2B5dsFV20yj2%2F%2FOHmgBc7n6MSwqOThVx%2FXuxhLtaxOjEmjBUcsVLascjCNsW4pKpWYE%2BCnsd3ZMfW4JfoSQlbtJL4VraCNH4ykCcHnO2pYB86OKkb8apV%2FdsQk8acJZLbezS8le2IvK1xFVHLl&X-Amz-Signature=e9f8e9008544a88489e899137d1c2df38760dfdb1f2dbca623aac267952477a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

