---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GXHV3TG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS2OC%2F%2FlwXTtgXZEywj8oagk25fsCTfpRmTrII6PKpqwIgdd41ZHmXCoI%2FeR1pKogKsOfK%2BB79EE%2Ft%2FDrWOxTAcR0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF797kCYbke1VwHqkircA0kHVR3Ky2hHdcSXMcw%2BSL33kmN0obhHR21fYxsZFn86CFzreyEUpPFbINwteWzWUmsYLPBALCspoh8r9feSateavvv36fOQWC25OqaTGfwTY7c4FBYCX3IWiELXV71%2FTzmJ4vmDH5b7KTtgkJ4LmJaOG3%2FoscO%2BIE8QLvSSFy8yRa8vCS1hBGseEXM%2FYmHLxe3f%2Ffc9x9QUJIiiVHn1vAcqWVt9ERjs45W9czUrhl9PE%2FihlOYR3aLHNLpBL%2F7p8e4iVYdIYW22PvUO8eJ6b2IpDxsbZWSY6jfCaIVRnwQsMWZldcI9njKPfFrAddZEQSLSGNMYEGcCbsPh3mkUboNB6as5iBIRQ2PsEB29acSxd3iEz1pIt1Pzi6Okt2%2Bhu6Y1j4%2FOWhgdF0TNtsqCyAl72EymzDkgm7ntRGmg9nI6Z5ZdBtapqJ6CD7rhfSuJlAG6tb8YNlh9OJvjBpOG8BQruEFu%2F9grw0le6FGAvSwTME1dM27tgjZS6Po7E4DrAPuyEmGpAC9QmPp%2Bm1kdak8qVUxXHtA6wy5EH%2BGcNmyB5bFeDZVhfCfj3D%2B9hOTlY1CLxa%2FQ4KAc7XIeeRKnM%2Fc6llid9D04ICpjNpuaXyjqezPl%2FgGNCRKDexoIMNKd1MkGOqUB27pn4QLxvuLMAj9xTOKcs52cWziz5mrbkDv1selMEV%2B5TdJHYVPWHvZ%2FVLU6Rw4A4stFyZYFd6iaszI7QkU0bRCCMl83YV%2BsoDhRgPwo0vYsk%2B85Q06jp8Td6rz5jrTMBq%2B6qGfarOwp9H6zUAZFSXC5vX0955VL24Iuh2JVsDlggv%2BMY87VtVeMiMXgZeAPFStc4ZIgBuxdJGF3Sz%2BufkKO71a2&X-Amz-Signature=db382958bc8a46f540f826efe4c0539d5c73800ce23a805a085cf633a379f68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GXHV3TG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS2OC%2F%2FlwXTtgXZEywj8oagk25fsCTfpRmTrII6PKpqwIgdd41ZHmXCoI%2FeR1pKogKsOfK%2BB79EE%2Ft%2FDrWOxTAcR0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF797kCYbke1VwHqkircA0kHVR3Ky2hHdcSXMcw%2BSL33kmN0obhHR21fYxsZFn86CFzreyEUpPFbINwteWzWUmsYLPBALCspoh8r9feSateavvv36fOQWC25OqaTGfwTY7c4FBYCX3IWiELXV71%2FTzmJ4vmDH5b7KTtgkJ4LmJaOG3%2FoscO%2BIE8QLvSSFy8yRa8vCS1hBGseEXM%2FYmHLxe3f%2Ffc9x9QUJIiiVHn1vAcqWVt9ERjs45W9czUrhl9PE%2FihlOYR3aLHNLpBL%2F7p8e4iVYdIYW22PvUO8eJ6b2IpDxsbZWSY6jfCaIVRnwQsMWZldcI9njKPfFrAddZEQSLSGNMYEGcCbsPh3mkUboNB6as5iBIRQ2PsEB29acSxd3iEz1pIt1Pzi6Okt2%2Bhu6Y1j4%2FOWhgdF0TNtsqCyAl72EymzDkgm7ntRGmg9nI6Z5ZdBtapqJ6CD7rhfSuJlAG6tb8YNlh9OJvjBpOG8BQruEFu%2F9grw0le6FGAvSwTME1dM27tgjZS6Po7E4DrAPuyEmGpAC9QmPp%2Bm1kdak8qVUxXHtA6wy5EH%2BGcNmyB5bFeDZVhfCfj3D%2B9hOTlY1CLxa%2FQ4KAc7XIeeRKnM%2Fc6llid9D04ICpjNpuaXyjqezPl%2FgGNCRKDexoIMNKd1MkGOqUB27pn4QLxvuLMAj9xTOKcs52cWziz5mrbkDv1selMEV%2B5TdJHYVPWHvZ%2FVLU6Rw4A4stFyZYFd6iaszI7QkU0bRCCMl83YV%2BsoDhRgPwo0vYsk%2B85Q06jp8Td6rz5jrTMBq%2B6qGfarOwp9H6zUAZFSXC5vX0955VL24Iuh2JVsDlggv%2BMY87VtVeMiMXgZeAPFStc4ZIgBuxdJGF3Sz%2BufkKO71a2&X-Amz-Signature=74dc2a5a7d13251a2f01c2c0316ec40f98c7581f00668944060d2d4bd1e56786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

