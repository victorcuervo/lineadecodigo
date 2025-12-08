---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7P44KY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx%2BU%2FMIWSDycB38cr%2FQ9D0QP0W1YvEVID9PXvz3g8iTAiBeUO7RSxUX3r%2FgmBNG8mQlS%2FVMUl2d%2BvqpuYHHWNKw3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvdBQQOhIzyda9%2B7rKtwDOF1%2F7PCxwQf4PsJEx5T7MUTDRbrj3aA5V5NNILM7k6yPr6gyUstREg6rALVUhtpNrKrGrCq2zsSF%2FGYyNE4AfEyNnjXDWN8WFOqwmk7AaaaBuCJRjSYcICAvw91doIB4Ypp0SxbsMq6AydfANjPisI20JBVrzTzsMfKjTaTMwZTsuAy7rMRlRybsMJJmiFwDVKkJic8PfEIYfw%2F5uptOcgq4%2F%2BnxllLakr97HGKToDCqco6oqwqfSrE6KiW8Wnc7VmtVS9WIveDhOG3V0%2BT%2FfcrYHQG01EaEzDetibBu8psgOf6PxnUF6dzRzYuGT56%2F0wCEwFnCU29Q%2F7c%2FGoJGWHaqGTmI6rxAZyAHgaqdbsoLx73auJJSoXpNsieQ6tIlheNPGrDC9hM5uVeYgTdkndfIGoB4nuBwk7zwTzgMkoXQ7lWoIVYNyKTpaKoaSRvaDCCGnbwvVxheBNzMbM4gzaPyIw8JGdmqlXf4xtlShJWmQEKK8BkS%2FQv6tK80RItMWpLWunxKiWaIg%2FaP0rPAAOG5qDv4vlEXJ9M12luEDE8EH1XwO6qs1m4dmsnqSCeooD7KaJqDP%2BPRutbTUhu%2FVDs5YtnX5FIkTVbm5Ga1EAmUIz5R9W0fei%2FLx8swuaHYyQY6pgG%2B68Z3n9ECGMr662fgOSYaFcmXANNDiqBGkokf4%2F6k6xYVtyQNVQF%2BDP0co97MJFsCQr6QrYb%2FeNaFBI2mPIWxooj5K7jBsEA4XcI%2Fb7Q6zxZKkKmmWbEaYrc7mzMETQKO%2B3VC6rkIt0zuyZLwr0hXBj5fAiWttrdrhoIqLrqJOPWYsuieHXTeFu%2F4w6v0%2FTttUlR%2BXXgTxplKO16TsIKpIkwdDxSk&X-Amz-Signature=6afd6c8e7ade504c9149587556ef6dbaac649a013e5cb67c2a820cb909e05581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7P44KY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx%2BU%2FMIWSDycB38cr%2FQ9D0QP0W1YvEVID9PXvz3g8iTAiBeUO7RSxUX3r%2FgmBNG8mQlS%2FVMUl2d%2BvqpuYHHWNKw3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvdBQQOhIzyda9%2B7rKtwDOF1%2F7PCxwQf4PsJEx5T7MUTDRbrj3aA5V5NNILM7k6yPr6gyUstREg6rALVUhtpNrKrGrCq2zsSF%2FGYyNE4AfEyNnjXDWN8WFOqwmk7AaaaBuCJRjSYcICAvw91doIB4Ypp0SxbsMq6AydfANjPisI20JBVrzTzsMfKjTaTMwZTsuAy7rMRlRybsMJJmiFwDVKkJic8PfEIYfw%2F5uptOcgq4%2F%2BnxllLakr97HGKToDCqco6oqwqfSrE6KiW8Wnc7VmtVS9WIveDhOG3V0%2BT%2FfcrYHQG01EaEzDetibBu8psgOf6PxnUF6dzRzYuGT56%2F0wCEwFnCU29Q%2F7c%2FGoJGWHaqGTmI6rxAZyAHgaqdbsoLx73auJJSoXpNsieQ6tIlheNPGrDC9hM5uVeYgTdkndfIGoB4nuBwk7zwTzgMkoXQ7lWoIVYNyKTpaKoaSRvaDCCGnbwvVxheBNzMbM4gzaPyIw8JGdmqlXf4xtlShJWmQEKK8BkS%2FQv6tK80RItMWpLWunxKiWaIg%2FaP0rPAAOG5qDv4vlEXJ9M12luEDE8EH1XwO6qs1m4dmsnqSCeooD7KaJqDP%2BPRutbTUhu%2FVDs5YtnX5FIkTVbm5Ga1EAmUIz5R9W0fei%2FLx8swuaHYyQY6pgG%2B68Z3n9ECGMr662fgOSYaFcmXANNDiqBGkokf4%2F6k6xYVtyQNVQF%2BDP0co97MJFsCQr6QrYb%2FeNaFBI2mPIWxooj5K7jBsEA4XcI%2Fb7Q6zxZKkKmmWbEaYrc7mzMETQKO%2B3VC6rkIt0zuyZLwr0hXBj5fAiWttrdrhoIqLrqJOPWYsuieHXTeFu%2F4w6v0%2FTttUlR%2BXXgTxplKO16TsIKpIkwdDxSk&X-Amz-Signature=68fab0257cefd611973d5e3e0254c24ad222b150ee5134cec4c05594f689245b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

