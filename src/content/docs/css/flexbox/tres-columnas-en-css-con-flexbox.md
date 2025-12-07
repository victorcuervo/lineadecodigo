---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALAHFV4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAriZHbzafbw7u%2BLqTGCdkgDhmmPorSnREA7LYhR0IkHAiEAiP%2B92p%2BNmiGOeeW7sgUupAUec1L5RhERqRQBM7b3lFIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtLT83E52VX96baISrcA7VWmfAHvKwF7sNR6HQ9L5Uil4ITKpxB3ht%2FSryLFQiX3w4v%2FdnY%2FJFcd0d1n0qIffBn7RBXq7E6U0VGGZPLtgDu%2BO%2FPZ9uDNVfBsU1FxIFhfR8reyMjkVJnEhsh6lnDwiOPVtcFrSGoWfOa%2F5U0JsWnghiCUyANVeFy%2BlEMA5gxnmd0cp6wAJugKwnJp22j%2Bi4VvwMdEFHJJf7X7FyOBLTVqzfRi4smrvn14ao%2FCtX56yEtCTzG3imELkFPXOnEu22vp4y%2Fg1Wa8gtRnINkoTJtx6wcVgOKDVeHUCraL6Gyya6FrL2wWGma%2FSpvxp8fefFifXirLVT7Z1P6kZNllC%2FWu7uygfgzLZcCZRwZ0zXIJF8hByid4KH56y6LKeRI2MWslRIQTLjfRDLfgLAxIONoyyV4MzggoENE6CwVRuxQXyJNnihFuBF36l0Hf8j2qAt1cQea6E8sGx%2FMI9285ZGd%2BLGyd5mHBxR6RRIZkhl8fcVXeHTJ3YEfBVI4tITayrWZ%2B012KZyD7S4BEJ%2BVYaLv1ECIM4tK8gstKn%2BsB%2FQajpu0UTw5S7%2F8Dwj8nJm1wy%2F62aim0Bml5fH8oWPLL%2B0O4x2JGhqp%2BYifsh2Xswb6Kx4lJzoSx8zcVAPrMLmZ1ckGOqUBgqGD9MpLBVjeoPGYQnuAyja02GboNc7lt%2B%2BvZIedT9b3HHUnHRQw0YjbLWJ8Di7u2GAxTG2ZmymYwbWct9v1FqBJn3QkaHOfE0FL8dKp%2FHcJW0V1YcVDX7SoH35v0oIIT0uiEdmylTQG5GpM%2ByIaooGdXGo30DY6chnokbVv%2BPDo3wUY6CQ1IpG0R8AJ2XdMIQofCFXN2hqoTbGaBLf80Ngkt35S&X-Amz-Signature=5139ba5c36af34f9b68835cd0efd9a3668f9509dcd316541c4a5fa1438a6b894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALAHFV4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAriZHbzafbw7u%2BLqTGCdkgDhmmPorSnREA7LYhR0IkHAiEAiP%2B92p%2BNmiGOeeW7sgUupAUec1L5RhERqRQBM7b3lFIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtLT83E52VX96baISrcA7VWmfAHvKwF7sNR6HQ9L5Uil4ITKpxB3ht%2FSryLFQiX3w4v%2FdnY%2FJFcd0d1n0qIffBn7RBXq7E6U0VGGZPLtgDu%2BO%2FPZ9uDNVfBsU1FxIFhfR8reyMjkVJnEhsh6lnDwiOPVtcFrSGoWfOa%2F5U0JsWnghiCUyANVeFy%2BlEMA5gxnmd0cp6wAJugKwnJp22j%2Bi4VvwMdEFHJJf7X7FyOBLTVqzfRi4smrvn14ao%2FCtX56yEtCTzG3imELkFPXOnEu22vp4y%2Fg1Wa8gtRnINkoTJtx6wcVgOKDVeHUCraL6Gyya6FrL2wWGma%2FSpvxp8fefFifXirLVT7Z1P6kZNllC%2FWu7uygfgzLZcCZRwZ0zXIJF8hByid4KH56y6LKeRI2MWslRIQTLjfRDLfgLAxIONoyyV4MzggoENE6CwVRuxQXyJNnihFuBF36l0Hf8j2qAt1cQea6E8sGx%2FMI9285ZGd%2BLGyd5mHBxR6RRIZkhl8fcVXeHTJ3YEfBVI4tITayrWZ%2B012KZyD7S4BEJ%2BVYaLv1ECIM4tK8gstKn%2BsB%2FQajpu0UTw5S7%2F8Dwj8nJm1wy%2F62aim0Bml5fH8oWPLL%2B0O4x2JGhqp%2BYifsh2Xswb6Kx4lJzoSx8zcVAPrMLmZ1ckGOqUBgqGD9MpLBVjeoPGYQnuAyja02GboNc7lt%2B%2BvZIedT9b3HHUnHRQw0YjbLWJ8Di7u2GAxTG2ZmymYwbWct9v1FqBJn3QkaHOfE0FL8dKp%2FHcJW0V1YcVDX7SoH35v0oIIT0uiEdmylTQG5GpM%2ByIaooGdXGo30DY6chnokbVv%2BPDo3wUY6CQ1IpG0R8AJ2XdMIQofCFXN2hqoTbGaBLf80Ngkt35S&X-Amz-Signature=df89c3ebda5ec477087574702468d2e068e2e4d2646d8ef09b87465a204939e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

