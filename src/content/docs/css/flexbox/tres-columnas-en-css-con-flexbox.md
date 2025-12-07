---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MP7MBJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu82BJ94DljhkOXoDWpZqXHLcMCLe9BsZUOL%2BJnDOC4AIgYSYNRG3ugQhE2Ao4vPfuQlXeAy8wrT%2BT2h%2Fx%2BL6pTSMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlQhYRPiOoaUyjGPyrcA2sCLDI8t%2BhmzgBWwpwl5dWZvcpPBsywV2%2FRnvN1KU3jCFXufKO4gbnce%2B%2F47mrsb2pItgCPwyWmkJrzXLSCV5aCco7lEn%2FskUkCGGlQy%2FoEFZP8PgtWHOHO0Rau45%2FH4qeUWJ2Ck66Kwt%2B9APWSeH98DQWQKRa958uuq6H4nwwGJCsd%2BZPDRUpBmqpXYExra3P2HhLhJg6qSUXi6PT5nmN0RZcrYMbBCE9dcGu%2FP%2BUANxhNmxGviVRLsBtk5bRa0JrnG0ZpCKbmF%2Bbw%2FLeUiLF0Jz%2FlT85tnwUai7w3Vhrfq8JaMEG2kLWKqCvORKb5WfPMwTeuaLhwhfNe%2FeYQwJoHOjhGJORKNW3txSczXHgOJxdi%2BSgwwrMHMFISAiIFltRMV51fs8e4i%2BsNzUirrNFUEnSE8UDn5czPBowty32FXvT6ZGhUrBWSnKo28sbaNnWlS3W%2BuLcrKBY6%2BYFlUW4BVDN96CE3XaXrh%2FyvWlS1lGKLYKs9lzg8N8wfIlT3z07o%2FMWDyG04vkAczAAdsVXtbIU2289%2BDBgILddqT8sq7XpAwik1jOor9kpiPqlF8FLVBThRsPibJzUSmQdIStkqJtIfqm9Qvq9z8EdYQW%2B4aGuir%2F7UNkVJaV3GMKTH18kGOqUBBKxplnHUhvS%2FJK%2F3ltkoapHn11sYj91TLbhq3CG5YWJ5m5z8TWKnuLi7Ne9gHTq8dir1W0WEmmHrBZr6hWuX9CQpQGBTpvza%2BrVOg2ftYxgzAo1SndHl4TBu3CHulWhf5%2B64aMwKl1cyQEPEN3gbx9GxALcBLWuEKSKF9H%2FJuq9W9p0o3uDytMUYFwIBh0S1iuVDuvbj%2BeM0rGSGlZFG%2BBo%2FF8kv&X-Amz-Signature=1e47b072df7a1076d824061b0eff862018ef876e937561a491c36dcf18817e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MP7MBJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu82BJ94DljhkOXoDWpZqXHLcMCLe9BsZUOL%2BJnDOC4AIgYSYNRG3ugQhE2Ao4vPfuQlXeAy8wrT%2BT2h%2Fx%2BL6pTSMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlQhYRPiOoaUyjGPyrcA2sCLDI8t%2BhmzgBWwpwl5dWZvcpPBsywV2%2FRnvN1KU3jCFXufKO4gbnce%2B%2F47mrsb2pItgCPwyWmkJrzXLSCV5aCco7lEn%2FskUkCGGlQy%2FoEFZP8PgtWHOHO0Rau45%2FH4qeUWJ2Ck66Kwt%2B9APWSeH98DQWQKRa958uuq6H4nwwGJCsd%2BZPDRUpBmqpXYExra3P2HhLhJg6qSUXi6PT5nmN0RZcrYMbBCE9dcGu%2FP%2BUANxhNmxGviVRLsBtk5bRa0JrnG0ZpCKbmF%2Bbw%2FLeUiLF0Jz%2FlT85tnwUai7w3Vhrfq8JaMEG2kLWKqCvORKb5WfPMwTeuaLhwhfNe%2FeYQwJoHOjhGJORKNW3txSczXHgOJxdi%2BSgwwrMHMFISAiIFltRMV51fs8e4i%2BsNzUirrNFUEnSE8UDn5czPBowty32FXvT6ZGhUrBWSnKo28sbaNnWlS3W%2BuLcrKBY6%2BYFlUW4BVDN96CE3XaXrh%2FyvWlS1lGKLYKs9lzg8N8wfIlT3z07o%2FMWDyG04vkAczAAdsVXtbIU2289%2BDBgILddqT8sq7XpAwik1jOor9kpiPqlF8FLVBThRsPibJzUSmQdIStkqJtIfqm9Qvq9z8EdYQW%2B4aGuir%2F7UNkVJaV3GMKTH18kGOqUBBKxplnHUhvS%2FJK%2F3ltkoapHn11sYj91TLbhq3CG5YWJ5m5z8TWKnuLi7Ne9gHTq8dir1W0WEmmHrBZr6hWuX9CQpQGBTpvza%2BrVOg2ftYxgzAo1SndHl4TBu3CHulWhf5%2B64aMwKl1cyQEPEN3gbx9GxALcBLWuEKSKF9H%2FJuq9W9p0o3uDytMUYFwIBh0S1iuVDuvbj%2BeM0rGSGlZFG%2BBo%2FF8kv&X-Amz-Signature=9f2c1ad0b4f22a3b87c5d7464fa35c271591d73883014d2944fd1021e1c82d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

