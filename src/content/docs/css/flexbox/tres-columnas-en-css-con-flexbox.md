---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5H4EKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYFtaUtDCCGrbqgHZ20nGV%2FSJpzwDv3tsYuvpwXenPEAIgUATO0q8T6ZXuvF9LUOmgSZ8vwCjzbZmsDwxfnjh0YjQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgy4%2BzhrKAP9bs4ryrcA584DBXFz9UmdcAFN7I2wMnQHFu5gg65VPTBcOr9zYIw4OUrJQRM2hE849G1ldLATfy6EUa8ZD2cDSoQ8TThMocoPmd6aflC0Yt%2BEKDER1nWYIT%2B3G55uecGAaBT%2FAVwF2qHr3g3q%2BgH6WAii6m%2F1RTn1U1EFncXStRa11dM23gCIGunvivBPzbsNE2RSfXjKOuJ6SV98BkbmppfA7gAjPqZr3yzFIHS8nfC%2FPZWFFo9wVbb99PfTjJStKoh61dXZVYOM9H6mknpOW4WLVH%2FPZwFpQEDods6Vm58tY41YKsbsLZ5QWZ2bRgGdd2tFSAvqX5OFOUpAmX3081nUeZtLaTGa5x9FOaPdRgQInIwCYN4ngjDDElb4AKGagk8HBuwqPppcpfXkBvfSIXMfu1QKH1DQhYrkCYZAYBHVwioOkUSW1XxTctpLwZw2xLZf7UCnpc46rJBdKrZr9iX6cyVbyOKhx3VxAGNEBJM0Bi0%2BVO8AlpOnT98WVUxNOIfztqpag%2FoaVNx7W%2FQB7k9Uuy0GWJW%2BnR4hrZWoVr%2Bkb7Kf3cuiInzesBiLmX9hsv0JVLvwmSYZX2Kf1LQdHZQJCwNPrsjbDyMd2kfmcdd5sTDZDLaW%2BCHSBR0mCyitko6MPD02skGOqUBGtsYIhdAtdjGQoKQhNlipWNr4AOA8aGGZ6ltQpuA24r1MMJ1RK1DcX6A2H68zsQmmI92rlWwVK1MS5D%2BL0zxBhOywoxxkWnAABGCbuO012kY%2FmqPDnulWMGF0YRqukp18SBefFC9OIbKUqXfMvR%2BbG%2Fp2P4teLJioXMFxia2FfJ5OSF6YMgmyHxmPwi2O%2Bs5E%2FxSGPcdIJVzlm5NBaNn1hJPjfWP&X-Amz-Signature=298689bd593582b61c619142f6230fb781953873d2357d13feeb6b2533154d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5H4EKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYFtaUtDCCGrbqgHZ20nGV%2FSJpzwDv3tsYuvpwXenPEAIgUATO0q8T6ZXuvF9LUOmgSZ8vwCjzbZmsDwxfnjh0YjQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgy4%2BzhrKAP9bs4ryrcA584DBXFz9UmdcAFN7I2wMnQHFu5gg65VPTBcOr9zYIw4OUrJQRM2hE849G1ldLATfy6EUa8ZD2cDSoQ8TThMocoPmd6aflC0Yt%2BEKDER1nWYIT%2B3G55uecGAaBT%2FAVwF2qHr3g3q%2BgH6WAii6m%2F1RTn1U1EFncXStRa11dM23gCIGunvivBPzbsNE2RSfXjKOuJ6SV98BkbmppfA7gAjPqZr3yzFIHS8nfC%2FPZWFFo9wVbb99PfTjJStKoh61dXZVYOM9H6mknpOW4WLVH%2FPZwFpQEDods6Vm58tY41YKsbsLZ5QWZ2bRgGdd2tFSAvqX5OFOUpAmX3081nUeZtLaTGa5x9FOaPdRgQInIwCYN4ngjDDElb4AKGagk8HBuwqPppcpfXkBvfSIXMfu1QKH1DQhYrkCYZAYBHVwioOkUSW1XxTctpLwZw2xLZf7UCnpc46rJBdKrZr9iX6cyVbyOKhx3VxAGNEBJM0Bi0%2BVO8AlpOnT98WVUxNOIfztqpag%2FoaVNx7W%2FQB7k9Uuy0GWJW%2BnR4hrZWoVr%2Bkb7Kf3cuiInzesBiLmX9hsv0JVLvwmSYZX2Kf1LQdHZQJCwNPrsjbDyMd2kfmcdd5sTDZDLaW%2BCHSBR0mCyitko6MPD02skGOqUBGtsYIhdAtdjGQoKQhNlipWNr4AOA8aGGZ6ltQpuA24r1MMJ1RK1DcX6A2H68zsQmmI92rlWwVK1MS5D%2BL0zxBhOywoxxkWnAABGCbuO012kY%2FmqPDnulWMGF0YRqukp18SBefFC9OIbKUqXfMvR%2BbG%2Fp2P4teLJioXMFxia2FfJ5OSF6YMgmyHxmPwi2O%2Bs5E%2FxSGPcdIJVzlm5NBaNn1hJPjfWP&X-Amz-Signature=17f097b2534ae89051a1714319a5c542281c9c35878b68e8eb445320662a8f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

