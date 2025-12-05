---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6JYJFA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAb2XgQfm8Mbxpjn73k1CbZdB%2BULhTz0Kpj3D%2FRA1npAIgbEkH1mLFo6XcFHDEDuyDLfdQpvGP5c0j0pQI%2FPxMI%2Bkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFBTA2pleklE6jifgyrcAyi8zWzrOsXFqaPbieE7kU3DaMASZbvPew5niUg5GAXkgG4G8yk24oMjUdC%2FMOC0fSYLcZVo5FyuJuoQU%2Bx2zm%2B%2Bocpek7dI73IG7KY446HtAfw45sfv86egttHhWVu8t4qUL45JHcl9wZqWfR2%2BEBxUE9Yepwh35vy3R8upKV1CmO8DQ9HvN3tUEOrXGHuag5t2WRAFdw4bJ5xUMiAxLcMxQuI0ZhS8Guk8mxdB0K2QrWj3oucCzX4hxbOBNg6JOjcbhWwBSKUAAu6sS4TM%2FG%2BKnTOhdnnVoDiKgxQ%2F%2BsjeWv%2FC83CnR0Qf46elEgPShQj3KOljjAawirHCx4q55m8lMYl2DPC2dVnwQEtjLH7MHYvTXZG%2BszalLJ%2FGT3fgoxbqZ91xv2cXHf4ulEK1odQTxIrX6fTYW%2FyzUeaMlkRVta%2BWHWwyfNUhKJCVNqteqrxbplVKkq7yc1c1wXro3XOM7UNSln7Rr0SY4PjJSEwhWpMVpphpvweMhFWxKbDGDMQPAV1vdkAcsnoxcC7x1MPzgdZuykt3cVv7NNWK7dyPkjElsa9ctMA8ltKA5Lre%2FuAeWmjd3C1llvgzObeOtqwAmwlu%2Ba%2BrnrBqpF1b%2F6ywS9mB0jr9YMgPOrgjMK%2BXzckGOqUB01q8dXtKHtusW8YN4SrzajJdpmp%2BEpphYU185rEfutVPfgIFyMoDMtc0TQ8Zv1adck3dglcpL%2BAR%2Bj%2BzJjICeMwOhHTD9eEGZgeT%2BjXBYgIru9IRopp5tiiHBANDwxquTOnG4h%2FSv7zfV%2FAUSsrlosOG%2B0%2FnTZxW3w8w5FkGgkwCEIeTxadTfZcuJIOkDAdnZZ1bUnlWm9fWbG2wqDo%2FfuCz7OoU&X-Amz-Signature=220c0a57eeedcd6af29e44c0e8016143c464d1218338abb58b99d89a553783fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6JYJFA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAb2XgQfm8Mbxpjn73k1CbZdB%2BULhTz0Kpj3D%2FRA1npAIgbEkH1mLFo6XcFHDEDuyDLfdQpvGP5c0j0pQI%2FPxMI%2Bkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFBTA2pleklE6jifgyrcAyi8zWzrOsXFqaPbieE7kU3DaMASZbvPew5niUg5GAXkgG4G8yk24oMjUdC%2FMOC0fSYLcZVo5FyuJuoQU%2Bx2zm%2B%2Bocpek7dI73IG7KY446HtAfw45sfv86egttHhWVu8t4qUL45JHcl9wZqWfR2%2BEBxUE9Yepwh35vy3R8upKV1CmO8DQ9HvN3tUEOrXGHuag5t2WRAFdw4bJ5xUMiAxLcMxQuI0ZhS8Guk8mxdB0K2QrWj3oucCzX4hxbOBNg6JOjcbhWwBSKUAAu6sS4TM%2FG%2BKnTOhdnnVoDiKgxQ%2F%2BsjeWv%2FC83CnR0Qf46elEgPShQj3KOljjAawirHCx4q55m8lMYl2DPC2dVnwQEtjLH7MHYvTXZG%2BszalLJ%2FGT3fgoxbqZ91xv2cXHf4ulEK1odQTxIrX6fTYW%2FyzUeaMlkRVta%2BWHWwyfNUhKJCVNqteqrxbplVKkq7yc1c1wXro3XOM7UNSln7Rr0SY4PjJSEwhWpMVpphpvweMhFWxKbDGDMQPAV1vdkAcsnoxcC7x1MPzgdZuykt3cVv7NNWK7dyPkjElsa9ctMA8ltKA5Lre%2FuAeWmjd3C1llvgzObeOtqwAmwlu%2Ba%2BrnrBqpF1b%2F6ywS9mB0jr9YMgPOrgjMK%2BXzckGOqUB01q8dXtKHtusW8YN4SrzajJdpmp%2BEpphYU185rEfutVPfgIFyMoDMtc0TQ8Zv1adck3dglcpL%2BAR%2Bj%2BzJjICeMwOhHTD9eEGZgeT%2BjXBYgIru9IRopp5tiiHBANDwxquTOnG4h%2FSv7zfV%2FAUSsrlosOG%2B0%2FnTZxW3w8w5FkGgkwCEIeTxadTfZcuJIOkDAdnZZ1bUnlWm9fWbG2wqDo%2FfuCz7OoU&X-Amz-Signature=3d900ca50f1875bee2105a0cd7e3a1ec94cd1e38180e25cc8dce7521dd343c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

