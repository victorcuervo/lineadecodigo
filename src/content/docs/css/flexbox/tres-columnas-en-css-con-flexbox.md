---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3DWVMJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGXFcj8g9Msia72qFz9m2iYQUZpfHm%2Fb%2F%2FPRtrGNQytAIgKQNDtzihnOXfrjeNdD%2FrSNAjx%2Fj1r2q3GyYXEIKPjdQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB79k5LyFTMO2qlAdCrcAyf38XCbcyBXsuzFyaFGZf974OwWIrlvOws1gl3y%2BmP8TUBLBA2HYBh%2BQKKS6M0mq3KPrIs5dS%2BCUjhURc%2Bm4rhKEoLiAgn8eNPVHjkgkbSVgsRzaSrp4nyA%2BgLtWVQZB6mZjz5PWTwWJB5l4iN%2B4NzaC87rQvcAEWLYFfaYLFE44Ljt8ej0XS6F%2FyPAi%2BJdN4yiECzGJFZRSeF65o1Adls5ZS%2BSga61qn2fPUjgd72lNq9nelNuWDP%2F0WV%2Bk2KvpBQioztniGK9KiEZv2219t0Ew%2F1NrKmILAtguYZ0kqCvQvXhAyAGMIHkY67FuPlvu66DJ%2BKAhJ6qWNhtFtx2NsdFSEkJWEmd%2F0vqkIcC8XS6Xd66IJ0AuZJaDL7BBsYAFs5IoGebWPFdSfRlrWPkO5ede1Pbecf1LDBajezdhrdSwyQdg5%2FNfAYG2KA9ZKHMLF2HNI8%2Btl2nnPu3L3G616LnnIucJxV5F1hfdDc1umfazLA3ALvW0mmhL64JKaqNRCslffxWn1elcif75SEimCwVflsEGqtVYdwqvfYn50mBbMQ5k22TH%2BXuNaLEp4%2FeuQ1h0VkHqsCn%2FaMf5%2FIRRhNwAJRA2jNdqn6VMbBAnZKOIFoOV%2BHfkx7WY98xMI3d3MkGOqUBQyZpqX8fqD%2Biw6cBRnX86pEr03MK2N7GTIi6w48ehPZ6y%2Brqrt8Po77sHGA%2FPkNVgh04X%2FBmn34HKM8iXB7jf9jpQneiN8%2BIbhIEmAN1ov7QETUggvOVtfvvF5X8xsWWkuvcboFP8PPiUIQh48bNAiDn210XOpM0L2caGJcUBx04WDqCqrLk7A3G8fJvgdS59X7nw6c4uPuLu38Htm%2B06jV%2F4WDz&X-Amz-Signature=eba0c546a6cd7b00f0eda09881b7160439f6c081402d57616c7886b5a3c20cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3DWVMJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGXFcj8g9Msia72qFz9m2iYQUZpfHm%2Fb%2F%2FPRtrGNQytAIgKQNDtzihnOXfrjeNdD%2FrSNAjx%2Fj1r2q3GyYXEIKPjdQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB79k5LyFTMO2qlAdCrcAyf38XCbcyBXsuzFyaFGZf974OwWIrlvOws1gl3y%2BmP8TUBLBA2HYBh%2BQKKS6M0mq3KPrIs5dS%2BCUjhURc%2Bm4rhKEoLiAgn8eNPVHjkgkbSVgsRzaSrp4nyA%2BgLtWVQZB6mZjz5PWTwWJB5l4iN%2B4NzaC87rQvcAEWLYFfaYLFE44Ljt8ej0XS6F%2FyPAi%2BJdN4yiECzGJFZRSeF65o1Adls5ZS%2BSga61qn2fPUjgd72lNq9nelNuWDP%2F0WV%2Bk2KvpBQioztniGK9KiEZv2219t0Ew%2F1NrKmILAtguYZ0kqCvQvXhAyAGMIHkY67FuPlvu66DJ%2BKAhJ6qWNhtFtx2NsdFSEkJWEmd%2F0vqkIcC8XS6Xd66IJ0AuZJaDL7BBsYAFs5IoGebWPFdSfRlrWPkO5ede1Pbecf1LDBajezdhrdSwyQdg5%2FNfAYG2KA9ZKHMLF2HNI8%2Btl2nnPu3L3G616LnnIucJxV5F1hfdDc1umfazLA3ALvW0mmhL64JKaqNRCslffxWn1elcif75SEimCwVflsEGqtVYdwqvfYn50mBbMQ5k22TH%2BXuNaLEp4%2FeuQ1h0VkHqsCn%2FaMf5%2FIRRhNwAJRA2jNdqn6VMbBAnZKOIFoOV%2BHfkx7WY98xMI3d3MkGOqUBQyZpqX8fqD%2Biw6cBRnX86pEr03MK2N7GTIi6w48ehPZ6y%2Brqrt8Po77sHGA%2FPkNVgh04X%2FBmn34HKM8iXB7jf9jpQneiN8%2BIbhIEmAN1ov7QETUggvOVtfvvF5X8xsWWkuvcboFP8PPiUIQh48bNAiDn210XOpM0L2caGJcUBx04WDqCqrLk7A3G8fJvgdS59X7nw6c4uPuLu38Htm%2B06jV%2F4WDz&X-Amz-Signature=cb02dee0abe520f23048518cd6c8fbae2107da32c3da835e70cec668ade7e800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

