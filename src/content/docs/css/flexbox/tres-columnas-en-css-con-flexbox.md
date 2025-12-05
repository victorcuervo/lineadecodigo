---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBJ45BVE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBww4LbUAm30VCVgRctMsDbK56biliyNAV68NuncXjnbAiEAv9EH8vd%2Bv2UjnwzxCK1e5krWhgALrrGsHSqZV%2BrgpJcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAuBxaiN%2FW6cV2rgjyrcA3lWy%2FzJ17gKCRA8%2BfpipeM2zn66areMhfYmq1S6sGG0fJBE6T0Bu0f0coj15%2BAT3FKBjO%2BwCDyC4PY2H2JsBNcOcPB7RY0CZcRN2wQFXqHy8HMKGG%2Bmy%2FroUtjGnbO3FMwcGGwznH4BIK2VkbafJO%2B7IoHb9CdMEyTWXWixNQ5suqw6ks5%2FhRPCLfjY6K8biF1bbpPv5Ov2tDdDld2XM%2BGu%2BU%2B0Tjj%2BxK0r4WGpNZ6yQFefEV%2FFlwr4hrlj8xKSTf4Kt6Ne56EiuXct3c9r2jzeJrmdHhxXF0mVPt6AC0S0xRGrCpVAkFUzPM4RMPQvWMc%2FPpwL6OijMNgF74l0%2FhZsspULHEy1yUe53tY8bSPZDQfWuk5MIU4qphDzXjvf5Me6TNfrn2TFEely6GXOdvGhFiWiFBUWCxrEnP8JNHR0unga2smE02cFu7wlo6mJ3y6MLmPlgl66UNGKl3Hyl5OjB1HgzJyyaiSei%2F6cAzRAM6CYU8DWR8h4mI3p3VMh1CEKfuW5m35OdRMXjUGg0qMUaxXcOY175DAzHq2vLuFJT9LUXQ5b9g8cwB9ApGLOgwoRABWlWgSkWbP63pV5SX43Df7NLaVSbTgFhhGYMb%2FKwC34b3Z%2FzNOf1SvmMOXFzckGOqUBIGA03nFiOay1gHleQBH3T%2FLK37lOC3ElKnW%2F0fqVrfCDIY7i3QgvkTKZUdUkkUCgKCWpmFf5N34ksbOJzqxW%2BcfjdgdhCvIv3RHstIBu0hSnS%2BFNHPLtiUokq%2BM8WeFcEWpxQyM4N88Fv8eCug5OBTLrHgUvKj%2BEXYoRCCyFdzePj45kuwy8qS7VxCr61UtvJqBYXpGYC5a2xQO8HB%2FgrlGMoBFt&X-Amz-Signature=2f5b0fc6a8636df9fce5cc28b1fac43775f8307fde8b6f70e6eb08388ece1bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBJ45BVE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBww4LbUAm30VCVgRctMsDbK56biliyNAV68NuncXjnbAiEAv9EH8vd%2Bv2UjnwzxCK1e5krWhgALrrGsHSqZV%2BrgpJcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAuBxaiN%2FW6cV2rgjyrcA3lWy%2FzJ17gKCRA8%2BfpipeM2zn66areMhfYmq1S6sGG0fJBE6T0Bu0f0coj15%2BAT3FKBjO%2BwCDyC4PY2H2JsBNcOcPB7RY0CZcRN2wQFXqHy8HMKGG%2Bmy%2FroUtjGnbO3FMwcGGwznH4BIK2VkbafJO%2B7IoHb9CdMEyTWXWixNQ5suqw6ks5%2FhRPCLfjY6K8biF1bbpPv5Ov2tDdDld2XM%2BGu%2BU%2B0Tjj%2BxK0r4WGpNZ6yQFefEV%2FFlwr4hrlj8xKSTf4Kt6Ne56EiuXct3c9r2jzeJrmdHhxXF0mVPt6AC0S0xRGrCpVAkFUzPM4RMPQvWMc%2FPpwL6OijMNgF74l0%2FhZsspULHEy1yUe53tY8bSPZDQfWuk5MIU4qphDzXjvf5Me6TNfrn2TFEely6GXOdvGhFiWiFBUWCxrEnP8JNHR0unga2smE02cFu7wlo6mJ3y6MLmPlgl66UNGKl3Hyl5OjB1HgzJyyaiSei%2F6cAzRAM6CYU8DWR8h4mI3p3VMh1CEKfuW5m35OdRMXjUGg0qMUaxXcOY175DAzHq2vLuFJT9LUXQ5b9g8cwB9ApGLOgwoRABWlWgSkWbP63pV5SX43Df7NLaVSbTgFhhGYMb%2FKwC34b3Z%2FzNOf1SvmMOXFzckGOqUBIGA03nFiOay1gHleQBH3T%2FLK37lOC3ElKnW%2F0fqVrfCDIY7i3QgvkTKZUdUkkUCgKCWpmFf5N34ksbOJzqxW%2BcfjdgdhCvIv3RHstIBu0hSnS%2BFNHPLtiUokq%2BM8WeFcEWpxQyM4N88Fv8eCug5OBTLrHgUvKj%2BEXYoRCCyFdzePj45kuwy8qS7VxCr61UtvJqBYXpGYC5a2xQO8HB%2FgrlGMoBFt&X-Amz-Signature=004a3294672113c819ba74315f7aaa0dcf6eec9bbc1f9803689591245b8ca808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

