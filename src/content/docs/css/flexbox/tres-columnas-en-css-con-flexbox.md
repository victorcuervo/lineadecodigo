---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625E5ZLJP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3V4pd89Doozre4SIek%2B1XAnnfEIQjIWnIIbBi4Ox5wAiEAj7TmFRtdisleyFipZnjWEOZMX5BIi179qAAl%2F7X0gh8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ%2Fw%2FfnBUVTTwjBCoyrcA3%2BLcIj3W4X93k37MoTUp17lOsrtQRGUjHykEMuP1ETNKi2vZK1M4X%2F4abMiPJ0%2FR39c9DrMjOduYDi9uQlc7QueqfGshjoKE3ksB0ow3oAQcbzYL8ZX8hOCL8ml5z8%2BktdyHnwQ9Frr8oeZX9ci6FTb%2B%2F9DJ3SpVPVlDOLmrc2g5BtWxbZiNeZe2L%2BaqFisrVZ7PNvjXRwjvLFpL%2FuvUO5Vr2srcykdhScf1xjT8iT0w9Dzdc%2F4XbLAAYWdG%2FalZtNUY57ejzunFRw9VVESH6F%2Fpv0tKBaAnB7xFYDQfwf76vZSLa0ZJ%2BKflEcUPpKD1ouVgNJOJjao%2FFrGNZh8WSrGrwSz5WQkr%2F2WSU%2BqeVEnmso3YK3rPmTx1nkVTSLgPSREEVITE%2FVhhya5XJzpdKOGHMX43ql9lC2eUu3ucDxDxRcBmmsRhLJ8e01PqDuB9Yc%2BBDfkQjyC2TT4DEwhieaDcJ6gsAMAhXqwe2lAgo9yPdRE9NVP3n8iPWNxxqPTxuMoUFoyTW8EH8tPxNUm4RrefyRJ81hPlKK7HHcZrcqEaB%2F%2BBBC%2FUg0GJ7XW628alMrsGfntqTBMvnGndAwJicvsg4vp5UviPC88NlGYJl%2FLWT7FIxhYNrzGTT3NMNX9zskGOqUB2vdJVs9vMK7cAeI9r4Xv9dQpyfYEhrkxYngQOtj%2BqhHfiE6%2B7XZKnKzMSRdLu9RFAMRBDUfX4K8bZ2nUWpz9gVtofmOfLb2lfok5PSe%2FJcxq95dPR8Ge5%2F8CH55IDk0i0MWYKLhjGTKE7Ryd8emcq8Bop5V5oNHCqgqearxCYaXKTifIbunxkK%2FfGje2saLZR3CH0ZgX2Ma19kO9UFvEy77uOXTp&X-Amz-Signature=f21eb5466f08f1336ef6c9b81f03ac5917922f9d462239431f838b8877067620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625E5ZLJP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3V4pd89Doozre4SIek%2B1XAnnfEIQjIWnIIbBi4Ox5wAiEAj7TmFRtdisleyFipZnjWEOZMX5BIi179qAAl%2F7X0gh8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ%2Fw%2FfnBUVTTwjBCoyrcA3%2BLcIj3W4X93k37MoTUp17lOsrtQRGUjHykEMuP1ETNKi2vZK1M4X%2F4abMiPJ0%2FR39c9DrMjOduYDi9uQlc7QueqfGshjoKE3ksB0ow3oAQcbzYL8ZX8hOCL8ml5z8%2BktdyHnwQ9Frr8oeZX9ci6FTb%2B%2F9DJ3SpVPVlDOLmrc2g5BtWxbZiNeZe2L%2BaqFisrVZ7PNvjXRwjvLFpL%2FuvUO5Vr2srcykdhScf1xjT8iT0w9Dzdc%2F4XbLAAYWdG%2FalZtNUY57ejzunFRw9VVESH6F%2Fpv0tKBaAnB7xFYDQfwf76vZSLa0ZJ%2BKflEcUPpKD1ouVgNJOJjao%2FFrGNZh8WSrGrwSz5WQkr%2F2WSU%2BqeVEnmso3YK3rPmTx1nkVTSLgPSREEVITE%2FVhhya5XJzpdKOGHMX43ql9lC2eUu3ucDxDxRcBmmsRhLJ8e01PqDuB9Yc%2BBDfkQjyC2TT4DEwhieaDcJ6gsAMAhXqwe2lAgo9yPdRE9NVP3n8iPWNxxqPTxuMoUFoyTW8EH8tPxNUm4RrefyRJ81hPlKK7HHcZrcqEaB%2F%2BBBC%2FUg0GJ7XW628alMrsGfntqTBMvnGndAwJicvsg4vp5UviPC88NlGYJl%2FLWT7FIxhYNrzGTT3NMNX9zskGOqUB2vdJVs9vMK7cAeI9r4Xv9dQpyfYEhrkxYngQOtj%2BqhHfiE6%2B7XZKnKzMSRdLu9RFAMRBDUfX4K8bZ2nUWpz9gVtofmOfLb2lfok5PSe%2FJcxq95dPR8Ge5%2F8CH55IDk0i0MWYKLhjGTKE7Ryd8emcq8Bop5V5oNHCqgqearxCYaXKTifIbunxkK%2FfGje2saLZR3CH0ZgX2Ma19kO9UFvEy77uOXTp&X-Amz-Signature=f6fdc29e03ba769b3c65bd44a956090f126856c9526d0bbdf0b65f9e27ae018a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

