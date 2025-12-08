---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZSHYVP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkWncP6L9fkcLAiUWUu8CYO3QcP0Fmzji%2FHAgg9fWqkAiEAxiJSKBteprjfBmRxtAnQw1HLe2DfMP6amOMRYOy1jdYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJgQfBoEK9HxkhGLircA5GTXFtYsGzPZN5UUutco3DG71Edm4uet3d396JlOwuTfYrk21K6yJHzUYihAqcYAzHdRYUTFgJr9iy0CcaQhJVF6irqV6DjswdC8%2FC%2FsjvU3vXKSjey7ins3tTLfumcoYSo6y01T1bVMfTSAy8paVWBcCfeywXUkx0AQxMei0NyKc7mE0bpsxM7dGLjBcTfXWw471fXMlYUdoQsCavgw9Mtw2WKidHy5ytlQIq5rpBXETVLfX4QeXJqzIeXzORawUThNqlCRHf44KZ2akdRjWBfTpT4eaUfu7MqryptuIsdBjySOIMtKb%2BK0BlRaUeu4Y8LeFsigO9IYA95YPt1zVkXA9HOq4FwzvToCMfasRl84jGJMsXWDd05FTOLJyIUHnxgEvq7C2oBJ8z0vr%2BWZ1XDbeohacCSKxZdpyx5CtaLpV%2FqpTjiyAMJ4KHlEiRKSFBXnvBuzCKj6h2hSBlLh%2FTNbXKAsWFQwTU%2FFe75yoL0imHfj9BA%2Bm2hRaf0MIspIdRktdkWaxKi26OFrYNZGm4EGBA0X2DIBOjOyewqNc9xGGbeiLPO2xyjdkSN470vwNm5RIngm0VGt1ZNHeOT9x0YEK1s3ZvA%2BjZJ6AYlBljlTSobIecjR5h8sjNWMIWQ28kGOqUBP2oq29JarHIzqbAQ%2Bo5PVhPmS6OnP6%2FxkGzeEWwSoTdnuRszf5pO0%2FiH80dxMGdwE0zYA%2BM4YSnUBUwl6xd%2Bv3leQxB5PyAA0vXcsUQFf3GcTzrdFbQCt%2BgDzybqi3GKHcN%2FVydmYJ%2FgWQRY%2FDrKAvWVRnpWHDClcHKVMbxEA1eh1f5%2BvvX0j%2BfvjUBe7zF6iTlaCmgwRE2HljOXMB%2BWMjdMAKu9&X-Amz-Signature=90d24052826e1b82468043031bc582763449e40cdf4ba7ef0a171b9920355d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZSHYVP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkWncP6L9fkcLAiUWUu8CYO3QcP0Fmzji%2FHAgg9fWqkAiEAxiJSKBteprjfBmRxtAnQw1HLe2DfMP6amOMRYOy1jdYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJgQfBoEK9HxkhGLircA5GTXFtYsGzPZN5UUutco3DG71Edm4uet3d396JlOwuTfYrk21K6yJHzUYihAqcYAzHdRYUTFgJr9iy0CcaQhJVF6irqV6DjswdC8%2FC%2FsjvU3vXKSjey7ins3tTLfumcoYSo6y01T1bVMfTSAy8paVWBcCfeywXUkx0AQxMei0NyKc7mE0bpsxM7dGLjBcTfXWw471fXMlYUdoQsCavgw9Mtw2WKidHy5ytlQIq5rpBXETVLfX4QeXJqzIeXzORawUThNqlCRHf44KZ2akdRjWBfTpT4eaUfu7MqryptuIsdBjySOIMtKb%2BK0BlRaUeu4Y8LeFsigO9IYA95YPt1zVkXA9HOq4FwzvToCMfasRl84jGJMsXWDd05FTOLJyIUHnxgEvq7C2oBJ8z0vr%2BWZ1XDbeohacCSKxZdpyx5CtaLpV%2FqpTjiyAMJ4KHlEiRKSFBXnvBuzCKj6h2hSBlLh%2FTNbXKAsWFQwTU%2FFe75yoL0imHfj9BA%2Bm2hRaf0MIspIdRktdkWaxKi26OFrYNZGm4EGBA0X2DIBOjOyewqNc9xGGbeiLPO2xyjdkSN470vwNm5RIngm0VGt1ZNHeOT9x0YEK1s3ZvA%2BjZJ6AYlBljlTSobIecjR5h8sjNWMIWQ28kGOqUBP2oq29JarHIzqbAQ%2Bo5PVhPmS6OnP6%2FxkGzeEWwSoTdnuRszf5pO0%2FiH80dxMGdwE0zYA%2BM4YSnUBUwl6xd%2Bv3leQxB5PyAA0vXcsUQFf3GcTzrdFbQCt%2BgDzybqi3GKHcN%2FVydmYJ%2FgWQRY%2FDrKAvWVRnpWHDClcHKVMbxEA1eh1f5%2BvvX0j%2BfvjUBe7zF6iTlaCmgwRE2HljOXMB%2BWMjdMAKu9&X-Amz-Signature=895f1e6780b501f6610d14a8dbef92624adb5c63e934d429b61b373a8b41210f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

