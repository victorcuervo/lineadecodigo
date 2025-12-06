---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ITKTUO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLya3YXAy6eyXPFcFyqndblvACqTSIMzczLJy9Y3D0%2FAIgL%2FwduZR9u3S%2F9iHEudEdrOQwSEFmcrG14Te1C0nh9Kgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAuY%2F7%2FuOHVxao%2B15yrcAx6Q0SwBb32XqIK5DFztNwe9pGYZIFt4IcQWC4Vet8x7SWn82trBxquKvNmsV8Zrdib%2BA8COD%2Fqz5VvAhbGtjcNmN7Ecn64qTKbX1iPXRQYg%2FV5Ffzxpt0UPRi7Kp06vcpVjtjBvktHXKrU8BStSgmAkx3x82DQChrT6ulvfTBNHhY78pA63m%2Bhdtd%2BImCeY87jYlvnP1dHfpluVA3ZT3itTmQ5ZL4LZYS2f2h4yAUTiBC9%2BkZqnj469amaPZSIGlyPEF3s%2BVZ9vACcweYEzIZ3X9BHYZLxPqG%2BBQjpu4xKTDnWnorYbeiXLSJ4qlOp9uJ7NfL%2BSsD4UHDpvnz5iBevjJ2Z6u4lXkddXwQhPWVm0TYufqCwu4cqgO9qJaB%2BzAnIdqCwJSi343ephMoiYZgtH%2B%2BLlkcEQouGlcaKImR6CPUvS4fqa7FlBOhoQxAjHWB%2FJB34LPq%2FJIs%2FZKWcyuPVOEzsrpxJks4aZO9EzUmd2Gd7jQ1cMh0IitFdcg6f69BnBTUQ%2F4%2FY2Xq%2FWtr0uiHmnyxReHzDu2Gkb4U6PDF6LbZA3ZkAByj%2BnthxpanDdCGQjwun7lpej88BQ%2BasRvpJoDLVj2KTrAZEIOLHcAlLTogOhly9NBLqkPLSOMN2J0MkGOqUBPHzBh5aiYEe6mM1qnZAIDo3RMB8m9pcue22%2BhvhGYjVisNbNnG%2BJCqJJLBn18PFp8Sz%2BcIApLqyFG5k2lkCBQ94K1SDq1WGklDgrSmOWK5tPY%2BIcZUdx%2FcEm6pA%2BtTPmB3aYA5cpw0xZFKNc6ZRbdmJgNFJzyMVAegMhVes6KaB%2F9EdJHW%2B0hc9FzJB2PnlnLeb4YVRrqc%2FTsqn3GScJeqvarwfQ&X-Amz-Signature=93d8311c89a5b281518e98ea0c17768aff805135d44583e59d9c1f1cca157501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ITKTUO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLya3YXAy6eyXPFcFyqndblvACqTSIMzczLJy9Y3D0%2FAIgL%2FwduZR9u3S%2F9iHEudEdrOQwSEFmcrG14Te1C0nh9Kgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAuY%2F7%2FuOHVxao%2B15yrcAx6Q0SwBb32XqIK5DFztNwe9pGYZIFt4IcQWC4Vet8x7SWn82trBxquKvNmsV8Zrdib%2BA8COD%2Fqz5VvAhbGtjcNmN7Ecn64qTKbX1iPXRQYg%2FV5Ffzxpt0UPRi7Kp06vcpVjtjBvktHXKrU8BStSgmAkx3x82DQChrT6ulvfTBNHhY78pA63m%2Bhdtd%2BImCeY87jYlvnP1dHfpluVA3ZT3itTmQ5ZL4LZYS2f2h4yAUTiBC9%2BkZqnj469amaPZSIGlyPEF3s%2BVZ9vACcweYEzIZ3X9BHYZLxPqG%2BBQjpu4xKTDnWnorYbeiXLSJ4qlOp9uJ7NfL%2BSsD4UHDpvnz5iBevjJ2Z6u4lXkddXwQhPWVm0TYufqCwu4cqgO9qJaB%2BzAnIdqCwJSi343ephMoiYZgtH%2B%2BLlkcEQouGlcaKImR6CPUvS4fqa7FlBOhoQxAjHWB%2FJB34LPq%2FJIs%2FZKWcyuPVOEzsrpxJks4aZO9EzUmd2Gd7jQ1cMh0IitFdcg6f69BnBTUQ%2F4%2FY2Xq%2FWtr0uiHmnyxReHzDu2Gkb4U6PDF6LbZA3ZkAByj%2BnthxpanDdCGQjwun7lpej88BQ%2BasRvpJoDLVj2KTrAZEIOLHcAlLTogOhly9NBLqkPLSOMN2J0MkGOqUBPHzBh5aiYEe6mM1qnZAIDo3RMB8m9pcue22%2BhvhGYjVisNbNnG%2BJCqJJLBn18PFp8Sz%2BcIApLqyFG5k2lkCBQ94K1SDq1WGklDgrSmOWK5tPY%2BIcZUdx%2FcEm6pA%2BtTPmB3aYA5cpw0xZFKNc6ZRbdmJgNFJzyMVAegMhVes6KaB%2F9EdJHW%2B0hc9FzJB2PnlnLeb4YVRrqc%2FTsqn3GScJeqvarwfQ&X-Amz-Signature=eef50e40f65cb51dd7ac07f2ef94ffd852c38ce6dd42a552570aaa32fa1b4a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

