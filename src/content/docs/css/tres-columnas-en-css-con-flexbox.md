---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5YUV44%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHUV%2FdypH7YKdufiYTBdoDJ7lrS18kqK1TKR4k88WzFMAiAgdXHyzXj4eBzoofRgPfIYZOHUaEv2npZBaRDu4ZJDWCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMQDYLzj0axYwwxMGlKtwDm7%2Ba4RJeQyZr%2BGaa7mO8PeVoZHQsf%2FfNr0u0w%2FApxPajwDoMXNpaWrHlbUUvcjHPXFB66g6kOKagLpG12OcnS6HJfb%2BfPRUhbGT%2BaVVCwsFGA147%2FC%2B56yL%2FpcKR8hsjL18ubX9tAMp40TtcMoUh9uxw3KGqFhtpj50GSagKFHxqr870tz%2B1w6Sv1pB%2FrYN6qlfTjy%2B6MFiyso2O%2B4TI8sD8X8%2FpsihEKlZoziqbcLRA5SlIzQW8enk4nOJAu7oHovXjV6C6au4llnNK8lAuO88K12yhT7ZO8MYggb4M4w3JPnzmRw%2BXuxrL6KvHLLfcrqNXO3k4FyjAIAL6qqmz1uqx8jjYwNx%2F8MGUtOrBT9k9N56Cl5vDlFzqNbh6Diz6%2BJEFkSPqDc85BDoyEEVO8VrvvdvJFkj81yniJqFGVRxva0Y%2FN1P0WXX52%2FthDv6l7HCzFckWm02VwTPeIabReW4AIeEVClt0TbLfSevPU%2Flcso0WRwljfuWI31PRZiBzC%2FxxML0WtFeDnPMenpLARrOCJUxwGF2FghU4%2BVREhoTt39i3m58VrPL8KjjVE97%2Bj2I2BX%2FMxK846D8yuW6yomjzgigrtTTMKotljxaDdlKhpc78klAiSVzcqdswit3CyQY6pgEI0E9%2BtD0e7Q%2FU7JTZWq%2BrX9TaH%2BW%2FxKhzQ0uJ2gpi3meZGIp3kLwaDujwKFHwOhyzOlwQVoCQfIuJICSEPvXTGNxPZMxQMDYDW8n%2F5QCvHGb9abz5NOO8qR1%2FjH%2BvTiFAb8JN0MgTnCT7ynnnVzaXcjrJYec8XsAJ6Q3z80b6xLqjb6W36J180Pzsj0cB2%2F4xB5okuGumop4TW8bM%2BEWJtgHyvHrW&X-Amz-Signature=e22f3d05e8d3deeaf6b139ecd5b0ec2530f4d41be6affaa4ad94fa24ce9f40e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5YUV44%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHUV%2FdypH7YKdufiYTBdoDJ7lrS18kqK1TKR4k88WzFMAiAgdXHyzXj4eBzoofRgPfIYZOHUaEv2npZBaRDu4ZJDWCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMQDYLzj0axYwwxMGlKtwDm7%2Ba4RJeQyZr%2BGaa7mO8PeVoZHQsf%2FfNr0u0w%2FApxPajwDoMXNpaWrHlbUUvcjHPXFB66g6kOKagLpG12OcnS6HJfb%2BfPRUhbGT%2BaVVCwsFGA147%2FC%2B56yL%2FpcKR8hsjL18ubX9tAMp40TtcMoUh9uxw3KGqFhtpj50GSagKFHxqr870tz%2B1w6Sv1pB%2FrYN6qlfTjy%2B6MFiyso2O%2B4TI8sD8X8%2FpsihEKlZoziqbcLRA5SlIzQW8enk4nOJAu7oHovXjV6C6au4llnNK8lAuO88K12yhT7ZO8MYggb4M4w3JPnzmRw%2BXuxrL6KvHLLfcrqNXO3k4FyjAIAL6qqmz1uqx8jjYwNx%2F8MGUtOrBT9k9N56Cl5vDlFzqNbh6Diz6%2BJEFkSPqDc85BDoyEEVO8VrvvdvJFkj81yniJqFGVRxva0Y%2FN1P0WXX52%2FthDv6l7HCzFckWm02VwTPeIabReW4AIeEVClt0TbLfSevPU%2Flcso0WRwljfuWI31PRZiBzC%2FxxML0WtFeDnPMenpLARrOCJUxwGF2FghU4%2BVREhoTt39i3m58VrPL8KjjVE97%2Bj2I2BX%2FMxK846D8yuW6yomjzgigrtTTMKotljxaDdlKhpc78klAiSVzcqdswit3CyQY6pgEI0E9%2BtD0e7Q%2FU7JTZWq%2BrX9TaH%2BW%2FxKhzQ0uJ2gpi3meZGIp3kLwaDujwKFHwOhyzOlwQVoCQfIuJICSEPvXTGNxPZMxQMDYDW8n%2F5QCvHGb9abz5NOO8qR1%2FjH%2BvTiFAb8JN0MgTnCT7ynnnVzaXcjrJYec8XsAJ6Q3z80b6xLqjb6W36J180Pzsj0cB2%2F4xB5okuGumop4TW8bM%2BEWJtgHyvHrW&X-Amz-Signature=e85c0cf21a051ec0b15096b5183483f6c13cf237c7d52e2c64a37c864523eeba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

