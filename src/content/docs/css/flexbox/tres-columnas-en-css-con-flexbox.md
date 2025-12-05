---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TC7LHF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Z3VPxMu5QAgARHQ9rCY0zLl7wHQkFgBe8SUSC2qJkQIgcn1larDue8oXyft%2B%2F0tkZxThhNQ7dG%2Fg4ATPeMs2MSgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMcuS6nsH8NB17GXaircA7KM0Dky8qz5S2FfA6kG4Gb6ve24%2BT2BfHyV%2B5vJh08ICk3IFx22BNhjsly72AJs8sUp1Hnfw5vlX9Gy78CCG9yrrRnQNh3c6PwHmltc%2F%2FhAxYLy9QjehGaDzY5g2nSGQKk2zTueMKcyExn7QRdOeMEjbcMb1v4QpezZItfKc13D1Ul9XercubVDHtesMMhV7gVd0od6%2B%2F6CxRaxGKHSfuL3blzGvPTcrURv9KzrfplLrp%2F0hVOXLdIpOIOfoIOqn6gSqnTVW655lzZH5BtA%2FNmRPuMB67GfpB2%2FsWMqVxmBl329gpUhVabjBXelSxwAf8Y1hqVembr2%2FuGRbIudS%2BcFNVvFhmPdrE5lRkIoxtr7UUkux8UDkFclETH0i4yR6b2UAhA%2FSlGthS8A6eIh4digYArdY53j%2FznWPTJa%2FQ4YO%2FbmqTkEls%2FXiqPjPMlZXQdwQAHaMdF2aV0Fm8l9Fg9A83mxzKC8sNDrJBkdRIxduYNv89qDxi6VszS8DRkUNi1rY8IhyjlaZl2f%2BrWuwrVvkBkpqlhn7Q6Oj3wXJSwZb9T3gjaqEGdYvE5OrV10k%2FDOUAipiKy5qCWXJPyFQgjp%2BBAkPV899q83zFdKxHJduNXQtWZv2fid8iV7MKHsy8kGOqUBu6DsY8072hT4TgYWOXIyNx7Miu58eBAlRFE743wzJKahxTiAwroDLazw%2FRorucUJ%2BUWXpqaQ7C%2BAdgf3uFdwgoJHP6PIFjeeHvkXh5XLk4J0OoTqP5WddQrewj2ljnSMSDhboGO32qk4jgANM%2BHZ7Ee%2Bi8ZxgSi0jmMDC9EZ9%2BI70Bgf1hPFJv%2B6CAbL5h6TgtKxK8puSFT2CvcZvPyxlQW5Ts3y&X-Amz-Signature=e0d3cf6a799c614e2dc2647ca5d081cce3fc458da84b0c70cea46c0c765717a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TC7LHF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Z3VPxMu5QAgARHQ9rCY0zLl7wHQkFgBe8SUSC2qJkQIgcn1larDue8oXyft%2B%2F0tkZxThhNQ7dG%2Fg4ATPeMs2MSgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMcuS6nsH8NB17GXaircA7KM0Dky8qz5S2FfA6kG4Gb6ve24%2BT2BfHyV%2B5vJh08ICk3IFx22BNhjsly72AJs8sUp1Hnfw5vlX9Gy78CCG9yrrRnQNh3c6PwHmltc%2F%2FhAxYLy9QjehGaDzY5g2nSGQKk2zTueMKcyExn7QRdOeMEjbcMb1v4QpezZItfKc13D1Ul9XercubVDHtesMMhV7gVd0od6%2B%2F6CxRaxGKHSfuL3blzGvPTcrURv9KzrfplLrp%2F0hVOXLdIpOIOfoIOqn6gSqnTVW655lzZH5BtA%2FNmRPuMB67GfpB2%2FsWMqVxmBl329gpUhVabjBXelSxwAf8Y1hqVembr2%2FuGRbIudS%2BcFNVvFhmPdrE5lRkIoxtr7UUkux8UDkFclETH0i4yR6b2UAhA%2FSlGthS8A6eIh4digYArdY53j%2FznWPTJa%2FQ4YO%2FbmqTkEls%2FXiqPjPMlZXQdwQAHaMdF2aV0Fm8l9Fg9A83mxzKC8sNDrJBkdRIxduYNv89qDxi6VszS8DRkUNi1rY8IhyjlaZl2f%2BrWuwrVvkBkpqlhn7Q6Oj3wXJSwZb9T3gjaqEGdYvE5OrV10k%2FDOUAipiKy5qCWXJPyFQgjp%2BBAkPV899q83zFdKxHJduNXQtWZv2fid8iV7MKHsy8kGOqUBu6DsY8072hT4TgYWOXIyNx7Miu58eBAlRFE743wzJKahxTiAwroDLazw%2FRorucUJ%2BUWXpqaQ7C%2BAdgf3uFdwgoJHP6PIFjeeHvkXh5XLk4J0OoTqP5WddQrewj2ljnSMSDhboGO32qk4jgANM%2BHZ7Ee%2Bi8ZxgSi0jmMDC9EZ9%2BI70Bgf1hPFJv%2B6CAbL5h6TgtKxK8puSFT2CvcZvPyxlQW5Ts3y&X-Amz-Signature=74a9fff71c5b6d9dcbe9277bac2ffc8d7565e4fa06e4a201321befe2a61b0776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

