---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USL33OBZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2FdF%2FTy93vqzO5SPu16xxemHDjw0HUODm9nRvtOXh4AIgARCPWeqs5rInV1gheM2h76U0dkCin%2FoiSVRXQfG5E4MqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy6zlqoHb%2FIwnixSyrcA%2Fl7qNgudEs0DKVgEiaRJY28eSK1W7Clw4ol%2Fs0VtZMHRI0pHlPikJovDvdj8uE8BCogB92I1DCMCN8pHtTE30%2BgqxfQ1xuxH0EG39sC4AcdfknW2JGj83468ZxfF%2B%2BWue25%2FFvxB2orVMmo1yckDpO9EYa93OVbtl8gz%2B0rSteWTq0YSJPshPieYLY6m1p4LxDGHm5X%2BbreU%2FvKGxJLNUGH6AyKswoal1lbw7KkPM5DYCtYeyL5wxo5J3IcAeE6AWImcvVlQzx2L0tp%2FGj1qskiJvI%2Fy0n6k4xEnxBNz%2BUen1G6F6CT7cIbgxPNkH6%2FpEd6wUKHJsJ87i%2BXrJ1NQN%2BXKQfG540RnWQ7m4%2F0RtjcfIidI0vRx4Qiol4NPVv3XBDIcyw%2BwtpGSAWC2anRz9PDCDIl4vjNQdmpbK10Uxc8fbK6OgRZbxEJpDIvPl%2FZvXHIdjbWp6Kk0zavzDP%2Bkr7d2HR%2Bk1MEZZ8MgSOF5%2BG8DmvrAU3nqA0l94QoE0btJVwpwudjbDV%2FiWaOp23ya%2B1krsQaYr0AQWzbXmf5g%2F49A4P6c9gC6na86EQOh1fDYrltEPI3lxbDXY3prMl4RA9TLwCR3bnIZT31p51dW%2B05vL1MtiPTRLrsZ7KwMMGi3ckGOqUBfcbiEs1DVYKeLerM3yrXsd6nO7VwHc4Xyvg5CXBjy0eNsBhXR%2BejEcYPLwh4MopquLIqQ7sFIk%2B7yyatfUgnTII73veL5sNtYjjcMp3OVAFNvxvAaYJFNV0uqmydN8xcEa%2Fb7%2FyxntwcWDMPUARKT44T1%2BbUKT0EL3xGCAMKqYrF%2FCAPuWAcZmnwAnsGlyFz0MQ6qcRnGveRhp0e%2B1LDvvAElHgA&X-Amz-Signature=38b4969f2de44ff52722f212206cbdf782f075c2760e6b58ee56eafe3e3492e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USL33OBZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2FdF%2FTy93vqzO5SPu16xxemHDjw0HUODm9nRvtOXh4AIgARCPWeqs5rInV1gheM2h76U0dkCin%2FoiSVRXQfG5E4MqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy6zlqoHb%2FIwnixSyrcA%2Fl7qNgudEs0DKVgEiaRJY28eSK1W7Clw4ol%2Fs0VtZMHRI0pHlPikJovDvdj8uE8BCogB92I1DCMCN8pHtTE30%2BgqxfQ1xuxH0EG39sC4AcdfknW2JGj83468ZxfF%2B%2BWue25%2FFvxB2orVMmo1yckDpO9EYa93OVbtl8gz%2B0rSteWTq0YSJPshPieYLY6m1p4LxDGHm5X%2BbreU%2FvKGxJLNUGH6AyKswoal1lbw7KkPM5DYCtYeyL5wxo5J3IcAeE6AWImcvVlQzx2L0tp%2FGj1qskiJvI%2Fy0n6k4xEnxBNz%2BUen1G6F6CT7cIbgxPNkH6%2FpEd6wUKHJsJ87i%2BXrJ1NQN%2BXKQfG540RnWQ7m4%2F0RtjcfIidI0vRx4Qiol4NPVv3XBDIcyw%2BwtpGSAWC2anRz9PDCDIl4vjNQdmpbK10Uxc8fbK6OgRZbxEJpDIvPl%2FZvXHIdjbWp6Kk0zavzDP%2Bkr7d2HR%2Bk1MEZZ8MgSOF5%2BG8DmvrAU3nqA0l94QoE0btJVwpwudjbDV%2FiWaOp23ya%2B1krsQaYr0AQWzbXmf5g%2F49A4P6c9gC6na86EQOh1fDYrltEPI3lxbDXY3prMl4RA9TLwCR3bnIZT31p51dW%2B05vL1MtiPTRLrsZ7KwMMGi3ckGOqUBfcbiEs1DVYKeLerM3yrXsd6nO7VwHc4Xyvg5CXBjy0eNsBhXR%2BejEcYPLwh4MopquLIqQ7sFIk%2B7yyatfUgnTII73veL5sNtYjjcMp3OVAFNvxvAaYJFNV0uqmydN8xcEa%2Fb7%2FyxntwcWDMPUARKT44T1%2BbUKT0EL3xGCAMKqYrF%2FCAPuWAcZmnwAnsGlyFz0MQ6qcRnGveRhp0e%2B1LDvvAElHgA&X-Amz-Signature=7114b7c088e30aa76cf26824b35a88f31ac4cf407ddab23b73be2d20803cd431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

