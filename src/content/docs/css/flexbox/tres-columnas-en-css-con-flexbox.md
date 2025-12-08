---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTZGMX6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAhUzP%2Fg7L%2BmatOSi3dXyrpBJPRAZumenuLMnXCjoUWAiEA1RklmCpY1QPF%2Bn8KikT8dcEDBollzIHTCWqpNoVoYywqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEAunZKlvbrgTW0wircA6bPJG42Yk%2Fxqp71Y7GBlARDMOWfKzMI7h6Ieeuo9iDLMdtqdZh00Yn2az3e%2B%2FOOGCd7g%2FIYC6NPU%2FOFN8u2%2Bt01nrgJsNh6O2TSKjpccpR%2F%2F4hUgvXRgQ2TpwWVSVw8wDrZ8GjImg0xZoImW%2B9ib%2BcCPIRN37uQKDJX3xMVL2Icwc9EIcxVPN3O3qRiflhU8obppgcvg6FF6OiSNzeP3yhi0ZKMP7WqUxxP73XsYjcn0JZ4YfOalm891xLsCeCZ7TVtWWed248EJV%2BwNViBCVLxkHdEH00Xa10rdP8szPeYVg3gt6zt1Kk7Sio5DAE%2BUETx2tBZxUAxD%2F6QlX4lN%2BEE2S5ZOrOEvPDeWpZBAAUsVe%2BhyWFq0h7VDyZYl9R8ba%2BRah%2FlYeE1RfOUSC70ExsmQnDI59q6tbKim32NUEMw3iJk4oUylrbkR8a4UeMTf0v5jGmbH0b%2BHjOYm9AgwbFjgVPJElf%2BLld3ygQIl0uCdjeA17T%2Bq6fM48fb%2FAHvI%2F9b5FUpeqkbWSmu7dAmzbJRB6g7BuFtZJZp0YoMOe8fVat9UU8P9aRWSBcGkLcbqANd0WEhfFZdIeLKUx5JRZsst2LKwQSqyOEuR5RQyjri908qNjuw2x71pRZOMKeH3MkGOqUBimJfMz42Lyr3N%2BxRd3ylMWFhBIX7KfvBlfCCLNgXB1fCcc9W4UnjyaegHt6Sj1nw2h449ajLXZix6OUsOm%2FERvsMTtcr9Qh1I%2FCydbxeGUkqyBTsr2ilvkXtyLaUMdsvJUdxrwX%2BBn0xDeKPBxOv4%2B7NM4mt8CpDETJY5Mb%2Ft3isWfe052EcA0ndi%2FkB%2Blm%2BU%2Bbtk6yh0KaveUzEFt4AYhCc0PrY&X-Amz-Signature=ae3fff6944be472c10dd2de745dc901ac80b1e4193dfb53b3cf02531bcee14d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTZGMX6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAhUzP%2Fg7L%2BmatOSi3dXyrpBJPRAZumenuLMnXCjoUWAiEA1RklmCpY1QPF%2Bn8KikT8dcEDBollzIHTCWqpNoVoYywqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEAunZKlvbrgTW0wircA6bPJG42Yk%2Fxqp71Y7GBlARDMOWfKzMI7h6Ieeuo9iDLMdtqdZh00Yn2az3e%2B%2FOOGCd7g%2FIYC6NPU%2FOFN8u2%2Bt01nrgJsNh6O2TSKjpccpR%2F%2F4hUgvXRgQ2TpwWVSVw8wDrZ8GjImg0xZoImW%2B9ib%2BcCPIRN37uQKDJX3xMVL2Icwc9EIcxVPN3O3qRiflhU8obppgcvg6FF6OiSNzeP3yhi0ZKMP7WqUxxP73XsYjcn0JZ4YfOalm891xLsCeCZ7TVtWWed248EJV%2BwNViBCVLxkHdEH00Xa10rdP8szPeYVg3gt6zt1Kk7Sio5DAE%2BUETx2tBZxUAxD%2F6QlX4lN%2BEE2S5ZOrOEvPDeWpZBAAUsVe%2BhyWFq0h7VDyZYl9R8ba%2BRah%2FlYeE1RfOUSC70ExsmQnDI59q6tbKim32NUEMw3iJk4oUylrbkR8a4UeMTf0v5jGmbH0b%2BHjOYm9AgwbFjgVPJElf%2BLld3ygQIl0uCdjeA17T%2Bq6fM48fb%2FAHvI%2F9b5FUpeqkbWSmu7dAmzbJRB6g7BuFtZJZp0YoMOe8fVat9UU8P9aRWSBcGkLcbqANd0WEhfFZdIeLKUx5JRZsst2LKwQSqyOEuR5RQyjri908qNjuw2x71pRZOMKeH3MkGOqUBimJfMz42Lyr3N%2BxRd3ylMWFhBIX7KfvBlfCCLNgXB1fCcc9W4UnjyaegHt6Sj1nw2h449ajLXZix6OUsOm%2FERvsMTtcr9Qh1I%2FCydbxeGUkqyBTsr2ilvkXtyLaUMdsvJUdxrwX%2BBn0xDeKPBxOv4%2B7NM4mt8CpDETJY5Mb%2Ft3isWfe052EcA0ndi%2FkB%2Blm%2BU%2Bbtk6yh0KaveUzEFt4AYhCc0PrY&X-Amz-Signature=c8328ef8ce764fb91f3d0b0904a9348460bb16c869dcdbce205ef9275ea7ae52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

