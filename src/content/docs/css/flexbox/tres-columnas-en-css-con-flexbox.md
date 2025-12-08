---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJORWA7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BeSIwlr%2BolO9DNe7lxWDUnIG2D141jlCbrd4za%2BZtgIgOJ6nRV1frrkY5RuJ32axukR7Z3JSH2Z0Q%2FOIooDJp2wqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRd5fjKWzf91iR4bircA8JDWbWZUe9cKmeCKbrkpC0luY%2BrweF56MZpWnIYLyP21tD526tFFdL1hme37nr1igQtqjGulYfsnrMfH8qb3Iop3IJWw9RvJAjkitIiGQL8YGfZghEx6ia44wejGS8ghPWPCJyHwLRShhyIOuPHR2EGxik3SLRG8lfSJw3jMmBmPq32GHVm7p5Ge9XRvmIFb6rP7PHi81V6K9ac7p0%2BUeEGQr%2F7IYMVdBWhwnPxNe9Ga7ZUVQRWY%2FqIW0kyRFkbnNscubZLyWX8M3pXtwIAYKvvSB%2BNWq6DvDunVPZtZZoh1mbypxs07WlceumZ5f9HaCztCqOCNqifknYcLCnpSioIt2SUSEXHHXB8K62Oet5ie31MIVC4%2BKwsOuH0Vc0QCYHol9pU%2B2wbE%2B1ed5cbbGycsR0KWoOmichqjswtYg4gGD6v8qUrpOGB7gUjsEidUvMz8SSZjQAEyGw%2BICqpg7c7swFrcAZQeyjfEaANjjFmDUnBVVNWMzcC402C5p7Ca%2FJVVgZnC6OZpILmZW0xI9A4aWnpJ9EILV45vCR9VZ517m%2F3n5jeTFtfYLz%2BB50Rfhwu%2FzpKfsvK0hdDvZdjzCVGieCWF54G%2FwGc41TGlMxFmyy9lnMFh6%2FN1G4CMJzB28kGOqUBkl4phKseSmHr3XolkB6rckVevHMpqCaBwQVKbsklTa0m20uh26q996Ps6pRKNwCb72IlfYZj06OMewT5mWslUWolh5jAZal601cQPp56FsO5mBXBZP2W3fN17iWAU%2Fo%2Bni9fRwvhdpU3WqLimfGjnxIPmRNQ10LVPhEfb5FYSJk0MOBfokEUp0NNvIktZWfzMJCSYF6wTTshkSJplwbuvKFL80Uy&X-Amz-Signature=c82a64c51d3ac26e92df25070be4e4c616dfa087333b64aaf3665696d89019c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJORWA7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BeSIwlr%2BolO9DNe7lxWDUnIG2D141jlCbrd4za%2BZtgIgOJ6nRV1frrkY5RuJ32axukR7Z3JSH2Z0Q%2FOIooDJp2wqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRd5fjKWzf91iR4bircA8JDWbWZUe9cKmeCKbrkpC0luY%2BrweF56MZpWnIYLyP21tD526tFFdL1hme37nr1igQtqjGulYfsnrMfH8qb3Iop3IJWw9RvJAjkitIiGQL8YGfZghEx6ia44wejGS8ghPWPCJyHwLRShhyIOuPHR2EGxik3SLRG8lfSJw3jMmBmPq32GHVm7p5Ge9XRvmIFb6rP7PHi81V6K9ac7p0%2BUeEGQr%2F7IYMVdBWhwnPxNe9Ga7ZUVQRWY%2FqIW0kyRFkbnNscubZLyWX8M3pXtwIAYKvvSB%2BNWq6DvDunVPZtZZoh1mbypxs07WlceumZ5f9HaCztCqOCNqifknYcLCnpSioIt2SUSEXHHXB8K62Oet5ie31MIVC4%2BKwsOuH0Vc0QCYHol9pU%2B2wbE%2B1ed5cbbGycsR0KWoOmichqjswtYg4gGD6v8qUrpOGB7gUjsEidUvMz8SSZjQAEyGw%2BICqpg7c7swFrcAZQeyjfEaANjjFmDUnBVVNWMzcC402C5p7Ca%2FJVVgZnC6OZpILmZW0xI9A4aWnpJ9EILV45vCR9VZ517m%2F3n5jeTFtfYLz%2BB50Rfhwu%2FzpKfsvK0hdDvZdjzCVGieCWF54G%2FwGc41TGlMxFmyy9lnMFh6%2FN1G4CMJzB28kGOqUBkl4phKseSmHr3XolkB6rckVevHMpqCaBwQVKbsklTa0m20uh26q996Ps6pRKNwCb72IlfYZj06OMewT5mWslUWolh5jAZal601cQPp56FsO5mBXBZP2W3fN17iWAU%2Fo%2Bni9fRwvhdpU3WqLimfGjnxIPmRNQ10LVPhEfb5FYSJk0MOBfokEUp0NNvIktZWfzMJCSYF6wTTshkSJplwbuvKFL80Uy&X-Amz-Signature=c0ef1c785b25a913c41cdeffb7a7750847caf3ccc44c04e71ce8e85b701a0802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

