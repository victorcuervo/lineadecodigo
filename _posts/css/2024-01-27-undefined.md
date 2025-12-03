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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAOX7JFP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBgCPyTxZ%2B0RGuOT0MlMqgyx5sPFe%2FyyqBdJ%2BuIPvslnAiBbc5oP%2FY8THDoiyrcW2jLF1muduzf3IEXcHcgvfusurSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMq8dZ%2Bi4DVhseiBY3KtwD7M68f3zDHLVT42doU7GMQIcvv6IWL8qYidGludQc%2BG2dtxPZ%2F4lENsYVm2jwluz3%2FFUi49FYJ%2BNzoN5dWdFx%2BY0BLMafg4RpbSEHOomwOcg0yIq7kLXGglwtsY45AArbD6%2BdEdK%2BfCbirn8vaD9%2B23vw1dL%2FRV4mJQwP3tNk1KgR1uITneZu1qBLwNebkh2HY9%2BwG%2BQ7Ko02W5aQ8v56Qk6Vk3VX6ibwjlNoGl%2B2tzQuXJtwHd8ACRr6obSpfHwWSlP3yOvmeJVg7O8m55%2F179Amt7lgXhJs%2BL%2FlPXWpHL2KeYO%2FkIfwMnJDA%2BvWhuRAPAY0NhaHlgck00o2MlJNUKc2OJEo%2BVmsPX%2FLmOL2sjEC%2F%2F4rTSAxRk2PqLYCgwxhOYermAZauMRP1vKCgUtku3uEwQLB32CaPZrJY5z1owspL0gq9Pkbm5%2BhrvCgCiWuWhdAPYJo4DmGICrHnyIymRMzq9rRgaZkw%2BjeaLOyXwv%2FRtC7iu7aASLqwq8J24AU7ImRdVonXKGL2l6WcgplmCGhYRXT6cGfkiU3efDXnmP4hX1fEs%2F5GT1Sub9038kgau2f%2BCw2tqyEgKOmoIsOI%2FmC8it1XYw2cayFQjRhmYJxifGgzlhTCiTGE4gwjJu%2FyQY6pgG2c8Mj9pgJPYLuEoZNYfrg5rVfmbVuH7BuSuy5%2BBIn0VFTUUV%2FHoun9udEtO4kveL%2B9wPFmDdvxZU9FK1xPHtnQZ64iqvptRs%2Bo5Oowtxgj5kGpT3cYq8f3DuL2buOi0ReBpX5HqHILJFv9PEyd4VBnhALbuQAHfP%2FXKrkTK04%2FLD7oIHGr2J9UhRtJAqZ%2F3cPFE8F5ZgPWRtSwd1tuV9voxz2h9Ec&X-Amz-Signature=0bbf9cef419dce48ba1e610cf59bcc25a790daf4901d2829846735bde2a84d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAOX7JFP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBgCPyTxZ%2B0RGuOT0MlMqgyx5sPFe%2FyyqBdJ%2BuIPvslnAiBbc5oP%2FY8THDoiyrcW2jLF1muduzf3IEXcHcgvfusurSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMq8dZ%2Bi4DVhseiBY3KtwD7M68f3zDHLVT42doU7GMQIcvv6IWL8qYidGludQc%2BG2dtxPZ%2F4lENsYVm2jwluz3%2FFUi49FYJ%2BNzoN5dWdFx%2BY0BLMafg4RpbSEHOomwOcg0yIq7kLXGglwtsY45AArbD6%2BdEdK%2BfCbirn8vaD9%2B23vw1dL%2FRV4mJQwP3tNk1KgR1uITneZu1qBLwNebkh2HY9%2BwG%2BQ7Ko02W5aQ8v56Qk6Vk3VX6ibwjlNoGl%2B2tzQuXJtwHd8ACRr6obSpfHwWSlP3yOvmeJVg7O8m55%2F179Amt7lgXhJs%2BL%2FlPXWpHL2KeYO%2FkIfwMnJDA%2BvWhuRAPAY0NhaHlgck00o2MlJNUKc2OJEo%2BVmsPX%2FLmOL2sjEC%2F%2F4rTSAxRk2PqLYCgwxhOYermAZauMRP1vKCgUtku3uEwQLB32CaPZrJY5z1owspL0gq9Pkbm5%2BhrvCgCiWuWhdAPYJo4DmGICrHnyIymRMzq9rRgaZkw%2BjeaLOyXwv%2FRtC7iu7aASLqwq8J24AU7ImRdVonXKGL2l6WcgplmCGhYRXT6cGfkiU3efDXnmP4hX1fEs%2F5GT1Sub9038kgau2f%2BCw2tqyEgKOmoIsOI%2FmC8it1XYw2cayFQjRhmYJxifGgzlhTCiTGE4gwjJu%2FyQY6pgG2c8Mj9pgJPYLuEoZNYfrg5rVfmbVuH7BuSuy5%2BBIn0VFTUUV%2FHoun9udEtO4kveL%2B9wPFmDdvxZU9FK1xPHtnQZ64iqvptRs%2Bo5Oowtxgj5kGpT3cYq8f3DuL2buOi0ReBpX5HqHILJFv9PEyd4VBnhALbuQAHfP%2FXKrkTK04%2FLD7oIHGr2J9UhRtJAqZ%2F3cPFE8F5ZgPWRtSwd1tuV9voxz2h9Ec&X-Amz-Signature=6263cebcce4453444d56003d8f2a4acb57493fc0851cc82e780f63fbfddaa86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

