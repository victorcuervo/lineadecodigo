---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3W2QBX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjf6XMblgjaZT7XoDmjGn0xrIbh%2FfqfgfdH6e4YIXiZAIgQamn3G0bDdOlTY7E3XfbBycTzyGFybcgOFLxrF1l7nkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFSg7NBdBrXTkdahPircA%2BlHMLQ4UzlM1LEuZbBfcgWzwAA3l8X5zPT5xEx2QrdaLPi3LoTsgr%2Fm3Z8ixfI8qyA8A%2BgrjoFSgll3dMPQ1sIW134cjH8aGfpsCkE%2BCkRNuQt8WGhVSU%2FW72xud6honoaYIm2TD%2Biz2x7zhsy7B0qCceWM4vxE3jjDeMUVB6LeeKFSiTZhmzKD5JSH6znWHAY4DV4rM5EuFOvHdlztj8Ftb1R6g3VDvHwWC48xzI016NSpYRSZ0rGA157ZIu3epGK9PAdlym2CXpuhYCAOlyd4voKKaH0v5to5Q52cIbK0nQgVGTIDUSRds%2FBRve7WE%2B2IreDdxW52xwlcisss6W3i7yx1W3FKy4l6nJTBw5I37djC5%2FpaC1ug5tOWt%2BP91V2EVr0JyKD9fU8PVirspy61zbt%2FCX%2FXbo4KkeTMEPddDQQTGXl70IWdE8jndFw%2BPvoWq6EmiDBj6DEI4H%2FEDmlN3HxoSKXFRUKXD98OqYnHlopYvJVmKuCy%2FfgzH9QCptRgcVghAR6%2FgOJS%2FgaMKiIGUqi9fMo0uqij4fbVjVZPXye8ouI77F2yB9Ii4B9zPnmMWpRM61AHDnwVt2RByZNwBwWymdk1cIWVt2stkb%2F8Y7H61EzCf9v%2F2QV7MOrdzskGOqUBGzQlL1yygdiJYupJGulfin7TsnCuWLiGrNoezeAQIfBnRdn00CHmp3fSTGn2dSCwgYAd3D9L%2BU5c%2B5fakseQjQ0GD0zucbmlQ0NdzH%2BCqH9gPnmr889ifnwANRXVCqZQCf6kwWAYQrNNKlLT5Rft2zJL42LkUJ8axVlDsrETQUancQhIKUO1%2FJal7M6Jho3Xv%2Bw4%2F2bBlhFg%2B0mTHNeta8LTZGY4&X-Amz-Signature=0b9a9c99f6e17035d9311ec590e52c8bcd572212053dd04bc5f0cad837039c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3W2QBX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjf6XMblgjaZT7XoDmjGn0xrIbh%2FfqfgfdH6e4YIXiZAIgQamn3G0bDdOlTY7E3XfbBycTzyGFybcgOFLxrF1l7nkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFSg7NBdBrXTkdahPircA%2BlHMLQ4UzlM1LEuZbBfcgWzwAA3l8X5zPT5xEx2QrdaLPi3LoTsgr%2Fm3Z8ixfI8qyA8A%2BgrjoFSgll3dMPQ1sIW134cjH8aGfpsCkE%2BCkRNuQt8WGhVSU%2FW72xud6honoaYIm2TD%2Biz2x7zhsy7B0qCceWM4vxE3jjDeMUVB6LeeKFSiTZhmzKD5JSH6znWHAY4DV4rM5EuFOvHdlztj8Ftb1R6g3VDvHwWC48xzI016NSpYRSZ0rGA157ZIu3epGK9PAdlym2CXpuhYCAOlyd4voKKaH0v5to5Q52cIbK0nQgVGTIDUSRds%2FBRve7WE%2B2IreDdxW52xwlcisss6W3i7yx1W3FKy4l6nJTBw5I37djC5%2FpaC1ug5tOWt%2BP91V2EVr0JyKD9fU8PVirspy61zbt%2FCX%2FXbo4KkeTMEPddDQQTGXl70IWdE8jndFw%2BPvoWq6EmiDBj6DEI4H%2FEDmlN3HxoSKXFRUKXD98OqYnHlopYvJVmKuCy%2FfgzH9QCptRgcVghAR6%2FgOJS%2FgaMKiIGUqi9fMo0uqij4fbVjVZPXye8ouI77F2yB9Ii4B9zPnmMWpRM61AHDnwVt2RByZNwBwWymdk1cIWVt2stkb%2F8Y7H61EzCf9v%2F2QV7MOrdzskGOqUBGzQlL1yygdiJYupJGulfin7TsnCuWLiGrNoezeAQIfBnRdn00CHmp3fSTGn2dSCwgYAd3D9L%2BU5c%2B5fakseQjQ0GD0zucbmlQ0NdzH%2BCqH9gPnmr889ifnwANRXVCqZQCf6kwWAYQrNNKlLT5Rft2zJL42LkUJ8axVlDsrETQUancQhIKUO1%2FJal7M6Jho3Xv%2Bw4%2F2bBlhFg%2B0mTHNeta8LTZGY4&X-Amz-Signature=19923d9dd8b2cfec2883fcdd5aede60464165eddc9bfef2249ba631a1f4f4336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

