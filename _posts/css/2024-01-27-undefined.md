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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUS5235O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDIybwVXzyxRn0NYOIvMdOjBhC9EcKHTkcmBi%2Bk3yPOKAIgcB%2FkGr3TV2VoVI7KFEDGY%2F4ZR1y7Ze6M36Y63KCGiWAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOlayTbB1t30gv%2BYMircA8Mu7Ec6jfviUN5GeIS2wjQLXsEu1Ri2vnSAyvZzFssl%2FoALINbyMiRk5f58%2Bd6G18ZpsE8%2FtRglOKdKvFbItW73MqAuXjRT0G%2FV%2BjmD9jT8E1K2ot6Dhxc4H8QMhLMfRabg4%2Bfkt%2BrOa6M4IMcJCPNfDCwsG7jPGq1DaBQSmqAcdVFnBUjOaSfyKBi%2BlBKU4aIQKFJqOR8O2RCS77yvk0BnE5TdmDWp3TUPmIdElQNYfALlVRr5bWWBCgVIRLyUSeTnEYKgj9TvnvpcQKWWRicLAW8z4e0Ze5c2sdFiXyWXgcEcDzNPSVGS7J2K%2BJAnjtBCGa2J2CYmgrHxcZPvNuGvLz8wrazjJKJudpsXByIXixt8yg8F0AiVCPtvJvgNIJV5YO8zXGeKOXPbr%2BjLH8ghcYaRUew2%2F%2FYhZDX2l7UfoHdXupvXX50zQzjD9dhUhFVmRx5sKmk%2FpVQ8flS2QUZFX5no65M0zUxiyBTDYvwZCJOOJL61pyxkHbi664Gu9rIHt1%2BD%2BYtmIHPKHiIaxYNA0ve0OiQFRi2HULvX8WURf%2FfiLGuWJx0rd6K2qeRtZqZeqzTu66M4WA5oR2zPjto7M2QnPpZHEmHA3JkMw39foEN5xgarT%2BxkdRUDMKCWvskGOqUBANTqJSEVTAvBC%2BaqfUZK9c2klHtfavqULbozOl90RJcJ85cnMBGT%2BQSeIWATjHkXneYp6BjhKs2qsvNu3zTcjGbM22EeOUrM7TfbzPFqmSWR1L2oxxl0%2Fd9OJBiguTP3ElF2dbOnDhXOSXq4tGvsJANw7WX1P2JX4N8UyjtVXs8EbwriYNyjxf32beW7joBSPSSEddP8RI6xLYH7osBoiE4mBOVE&X-Amz-Signature=c228e4600cb9313269741d152c48e1aaf66037ddfe5eaf9b5ffee75b2fcf3c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUS5235O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDIybwVXzyxRn0NYOIvMdOjBhC9EcKHTkcmBi%2Bk3yPOKAIgcB%2FkGr3TV2VoVI7KFEDGY%2F4ZR1y7Ze6M36Y63KCGiWAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOlayTbB1t30gv%2BYMircA8Mu7Ec6jfviUN5GeIS2wjQLXsEu1Ri2vnSAyvZzFssl%2FoALINbyMiRk5f58%2Bd6G18ZpsE8%2FtRglOKdKvFbItW73MqAuXjRT0G%2FV%2BjmD9jT8E1K2ot6Dhxc4H8QMhLMfRabg4%2Bfkt%2BrOa6M4IMcJCPNfDCwsG7jPGq1DaBQSmqAcdVFnBUjOaSfyKBi%2BlBKU4aIQKFJqOR8O2RCS77yvk0BnE5TdmDWp3TUPmIdElQNYfALlVRr5bWWBCgVIRLyUSeTnEYKgj9TvnvpcQKWWRicLAW8z4e0Ze5c2sdFiXyWXgcEcDzNPSVGS7J2K%2BJAnjtBCGa2J2CYmgrHxcZPvNuGvLz8wrazjJKJudpsXByIXixt8yg8F0AiVCPtvJvgNIJV5YO8zXGeKOXPbr%2BjLH8ghcYaRUew2%2F%2FYhZDX2l7UfoHdXupvXX50zQzjD9dhUhFVmRx5sKmk%2FpVQ8flS2QUZFX5no65M0zUxiyBTDYvwZCJOOJL61pyxkHbi664Gu9rIHt1%2BD%2BYtmIHPKHiIaxYNA0ve0OiQFRi2HULvX8WURf%2FfiLGuWJx0rd6K2qeRtZqZeqzTu66M4WA5oR2zPjto7M2QnPpZHEmHA3JkMw39foEN5xgarT%2BxkdRUDMKCWvskGOqUBANTqJSEVTAvBC%2BaqfUZK9c2klHtfavqULbozOl90RJcJ85cnMBGT%2BQSeIWATjHkXneYp6BjhKs2qsvNu3zTcjGbM22EeOUrM7TfbzPFqmSWR1L2oxxl0%2Fd9OJBiguTP3ElF2dbOnDhXOSXq4tGvsJANw7WX1P2JX4N8UyjtVXs8EbwriYNyjxf32beW7joBSPSSEddP8RI6xLYH7osBoiE4mBOVE&X-Amz-Signature=96c80ef3a4c21c408721f2d93ea4208516674fc6ef003a045c4d60113a6f17e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

