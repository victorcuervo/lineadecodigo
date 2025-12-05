---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG7PCVL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9h8HcohFKDNdYMiOFz7zGlzJzc0KqRHGJQo8a7Qr7CAiEA%2B9UtNmGrVjqxZ5dFaCe5GjswtOCWXXxnySrUzZqg2Qcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCI0xvD%2F%2FKmDwxvEUircA4OFp1SkxYpBtqOArXgmxf1hDOz1Hb9BNYD%2B%2BnGjz3gxC3Yzpi53WQANSjFoyr%2B%2FfwFLrgi%2FrkDLEe%2Fw1GvOIO4Rm8JyjqtcPqtrKJkC1w8NcnDzWuUdI07LrNAsFRFLJOnF%2Fnc1mutXF1Zfd62k9h9o7zaNeDUoILUVOFPrl5rtGYwYRUefWy5yolDL%2FiCz2D9rwNotGF8jlUscr8W4KO3tu%2BWX%2F8frj%2BrePQhY%2BgJO1APvLDqIsa9rpgCW7OHRukYTQLkA%2Bg7zlkVFT4la%2FaGhwrOkmq2LM%2BBOcmNIGFnp2oGsEqQ%2FZlikwyOKguup31BdTbgVtbBGUzLbuC%2BK3L43NIzw%2FRwP9w5BLWpkYAbC7aYuLgUPtd805WdAMOVhoeP6e3A5GKH%2FZZmPGHKI7LGcU15cE%2F%2BuXrr%2FIV8kwV9CiSXznI0xOohPTu7Fq0ZB8zEEhyM5jbJW8Q7TXfWhiDogFgpI04knptMoFfa%2Fv6waJY%2Fxj6mecZbndU%2BIDiUo0Ml1ErqxDTXQFfiNRCdc%2FQglkxbTPF4bTLn9JrpM0IZ0GGsdkcAoNFocWU96m9bAwy2pH1rp6zWhltAJCKgny9aO4Ah2i9hAdXky5aH9fcS1O3XlPp0A4pr6BeDEMLeMyMkGOqUBuojtSCie7oX4ms7lCESy%2B22kxwJoAFeiIayxGO%2BUGWKoo2eNEWiY8OW4FsufzdH9unnn6jwTpXIZ87CiSju%2Bnzv%2Btm9e385ExQC5dB6zvUrpZ3FuSjkELO27bqet%2FE%2BDnvXtFd3gme7wT7Q6kEfAigjlZIs6C4MuM36Z%2BZ4Kxwfu2Pqm66acUvoL8AF1DLHr5XwozfPB51GXa%2B6CcU%2FCfiRXNMQs&X-Amz-Signature=1f68ec847bf0e8c833a60e41253003d87fec9694cf55b238104445b108d3b326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG7PCVL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9h8HcohFKDNdYMiOFz7zGlzJzc0KqRHGJQo8a7Qr7CAiEA%2B9UtNmGrVjqxZ5dFaCe5GjswtOCWXXxnySrUzZqg2Qcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCI0xvD%2F%2FKmDwxvEUircA4OFp1SkxYpBtqOArXgmxf1hDOz1Hb9BNYD%2B%2BnGjz3gxC3Yzpi53WQANSjFoyr%2B%2FfwFLrgi%2FrkDLEe%2Fw1GvOIO4Rm8JyjqtcPqtrKJkC1w8NcnDzWuUdI07LrNAsFRFLJOnF%2Fnc1mutXF1Zfd62k9h9o7zaNeDUoILUVOFPrl5rtGYwYRUefWy5yolDL%2FiCz2D9rwNotGF8jlUscr8W4KO3tu%2BWX%2F8frj%2BrePQhY%2BgJO1APvLDqIsa9rpgCW7OHRukYTQLkA%2Bg7zlkVFT4la%2FaGhwrOkmq2LM%2BBOcmNIGFnp2oGsEqQ%2FZlikwyOKguup31BdTbgVtbBGUzLbuC%2BK3L43NIzw%2FRwP9w5BLWpkYAbC7aYuLgUPtd805WdAMOVhoeP6e3A5GKH%2FZZmPGHKI7LGcU15cE%2F%2BuXrr%2FIV8kwV9CiSXznI0xOohPTu7Fq0ZB8zEEhyM5jbJW8Q7TXfWhiDogFgpI04knptMoFfa%2Fv6waJY%2Fxj6mecZbndU%2BIDiUo0Ml1ErqxDTXQFfiNRCdc%2FQglkxbTPF4bTLn9JrpM0IZ0GGsdkcAoNFocWU96m9bAwy2pH1rp6zWhltAJCKgny9aO4Ah2i9hAdXky5aH9fcS1O3XlPp0A4pr6BeDEMLeMyMkGOqUBuojtSCie7oX4ms7lCESy%2B22kxwJoAFeiIayxGO%2BUGWKoo2eNEWiY8OW4FsufzdH9unnn6jwTpXIZ87CiSju%2Bnzv%2Btm9e385ExQC5dB6zvUrpZ3FuSjkELO27bqet%2FE%2BDnvXtFd3gme7wT7Q6kEfAigjlZIs6C4MuM36Z%2BZ4Kxwfu2Pqm66acUvoL8AF1DLHr5XwozfPB51GXa%2B6CcU%2FCfiRXNMQs&X-Amz-Signature=581124fdd270b1e01ce1b07b370a1ece481545c46e60c776657fc3c7dc80c1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

