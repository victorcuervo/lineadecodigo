---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLJULCQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELKnmYALwDJvZoEge3h6KBhAYSswrGvO2kwNufzE9lqAiEAjX4qbqfAwVaUedZy%2BwGnvWdkzm7Hk73OH%2FliqK4Kba0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBlzLVHwVfs10K%2BoHCrcA2XkkZcl69q0iQ1gTBWYTxQ7x7zAZBEv19HdRcNLadmYfS3n0iFRm%2FjkawOrEIlsAdBO8HzdmWx1XB%2FNUCxG2kPM3y2igMuufutgyJkTFbWNhBOLoP4p3k7j6Tz%2FlgDXOQSSYYBigrcq78A7p7qPXKRH4y3qmxRtkrQ62dNKydTCv8gSJ0M%2FPI%2BCQXKCk7BEDGEbmRrWS0VyvrhA%2BM1wob3pNoxwTtNiHEuqVq0SGJ%2F1TU6vG2%2FzPNcyXI9v8oFeurTlis6kWYVZZQ1i%2BBxBTfYJClZvDjS3w7m9mHA%2FcFHTK2WKWWe9Ok2ywUOg0BpEhofjW5F2tL2Rq9cWRXsZ52rTUN1e7Tl%2B%2BPqG9fGfb28GrOEv5%2BTj8WlcDnTAsH0KImGcCVWReyIMZ7HWAEVXxy4Bsk4WFMYv57ynyrJZB8SBI%2FETJgidvdPboxG6sfylrruHZUKh%2Bgb5EjLdqJHMkJTx9cyXfDaEb0D4wxQ1JvCGut4NnR0gYxW36O9RP0NnO8bkbJNvfg4qk6lzUixqyXOaDITYAcFqvQZEmorVGkuF5vijNcE4vVLtsUcMcwZ7s%2B4Zgfp2k7ZE6EIxUfSFi%2BN4nr0rIju76bzRPYdfU85RRxVszujsY6eN8LveMMfKxMkGOqUB7qSAa0KNDwM1nVdTnqv3ApOvsCCJyoy7VFuZHgJTuwq%2FrCH%2F0132k18ZAoNctUFskAcYppc2dghdPA8Dv3Cgdy%2B36cmc%2BxMYl13vi%2F0EJVdXkofnjyJ9WtM459xWS4WlVGnL1uXTz%2BRSFB3H9pc3TNqcVpxaaYF4JNTl7NsPtFc95QLh1OpAvY55yOr0Tpn6zpGXz7FIthuffHSRSrFEx2bzD8Jf&X-Amz-Signature=a1db5889f1016b914ac65081d1f9a577f2ba459cb3f8e26878df7f4997671832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLJULCQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELKnmYALwDJvZoEge3h6KBhAYSswrGvO2kwNufzE9lqAiEAjX4qbqfAwVaUedZy%2BwGnvWdkzm7Hk73OH%2FliqK4Kba0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBlzLVHwVfs10K%2BoHCrcA2XkkZcl69q0iQ1gTBWYTxQ7x7zAZBEv19HdRcNLadmYfS3n0iFRm%2FjkawOrEIlsAdBO8HzdmWx1XB%2FNUCxG2kPM3y2igMuufutgyJkTFbWNhBOLoP4p3k7j6Tz%2FlgDXOQSSYYBigrcq78A7p7qPXKRH4y3qmxRtkrQ62dNKydTCv8gSJ0M%2FPI%2BCQXKCk7BEDGEbmRrWS0VyvrhA%2BM1wob3pNoxwTtNiHEuqVq0SGJ%2F1TU6vG2%2FzPNcyXI9v8oFeurTlis6kWYVZZQ1i%2BBxBTfYJClZvDjS3w7m9mHA%2FcFHTK2WKWWe9Ok2ywUOg0BpEhofjW5F2tL2Rq9cWRXsZ52rTUN1e7Tl%2B%2BPqG9fGfb28GrOEv5%2BTj8WlcDnTAsH0KImGcCVWReyIMZ7HWAEVXxy4Bsk4WFMYv57ynyrJZB8SBI%2FETJgidvdPboxG6sfylrruHZUKh%2Bgb5EjLdqJHMkJTx9cyXfDaEb0D4wxQ1JvCGut4NnR0gYxW36O9RP0NnO8bkbJNvfg4qk6lzUixqyXOaDITYAcFqvQZEmorVGkuF5vijNcE4vVLtsUcMcwZ7s%2B4Zgfp2k7ZE6EIxUfSFi%2BN4nr0rIju76bzRPYdfU85RRxVszujsY6eN8LveMMfKxMkGOqUB7qSAa0KNDwM1nVdTnqv3ApOvsCCJyoy7VFuZHgJTuwq%2FrCH%2F0132k18ZAoNctUFskAcYppc2dghdPA8Dv3Cgdy%2B36cmc%2BxMYl13vi%2F0EJVdXkofnjyJ9WtM459xWS4WlVGnL1uXTz%2BRSFB3H9pc3TNqcVpxaaYF4JNTl7NsPtFc95QLh1OpAvY55yOr0Tpn6zpGXz7FIthuffHSRSrFEx2bzD8Jf&X-Amz-Signature=7e360ddddad10c5f3880ed924dc4f5b0c702aa2d82e54d919b479dd1798d9d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

