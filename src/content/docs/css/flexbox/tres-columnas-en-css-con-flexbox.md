---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFC7XMWP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICXIi32ERaRMvHL%2BQS7696kSkzSgk7P0G%2FBAVz2BB7%2F%2BAiB17X1CtGpteCkhP728SQwZzIpLsVgqZjeJKDZ5vDt%2FqCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMaJlzV%2BWDLSAmx5qIKtwDAkBiKEs0VSSkah6Q8JFzwGywni4bk3kQVBfgDmDNogdsoPD80226%2BHA73DHDQIr0Tm02eohiy2UDQ4kY5gxopqTyFIgBtU6Po0JCZGKC%2BlbxoA%2F815UhRIw%2FoC%2BTaA6w6SCFYSGc0juyYQx9l%2F7N03fbBcAHbEd0iFm7elFkyzJJgKO0KRqBbVLibKPX02pd21bu6kXXnS8XTK%2BebIRKvdm0Fj9OTRO%2BLHv2icExGA2vU%2BkSjHX6SImFe9IMXUwwbt1u546XjnfcDovaHZ5zG5mrVZdtVGji59Y4luik9QZIeSCmR%2BlgU7RZRHQw2WGxjldMBf2YYaxu1Hh57fi8Ya8TVtSBFXAfmnxSrtrBkfBR7hOHZoVJBMx4qcpRlgONBC18Ol2xPMhlfkqMeDcz96ZyAPSXO6%2BibWvNClzQyFFyZ59Wdap6lWltAldQCe%2FawS03RyeiGagUQTKo5zCXh3kvIFV6nrYIUex5qeJrhWca6DAoE4iTWjGULzdm7BNYXYIirMokHsehySZ94Z7wgI69HWQjrCUypTBDQVOAva%2BgGnBtWxyrYZEOyNrA10s3BWhMOA%2B8ZI8o9HGAxJlyw%2BmLNjryZATF9cAHD12DLXlwJuVLtKKOqPSDDuQwu5DEyQY6pgEonv5fyMiAxOuu2t4TRIagOQn2tSTB%2F8BOSyjKTrlzbhkLrubL23e6lMO%2F5MzU%2Floz5v955n9jHPnsTAH%2BWtFpggvgz4DPcOW7zLSB767uzWNnd7RsamZILsxVXZ%2FADGELurb5JwoiT7%2B%2BH%2FIRgsUaJEgjlVxkVgTpHV31fQrwsTFQqRsSyBsy3pkK6zSpa2RNgHPUK7Q31ZeUa6gDYAxyw5LwgQ0c&X-Amz-Signature=77f9c9d12cec3b106e27111bb65f7303e3c67bb359e9034376e2c5de5fee6a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFC7XMWP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICXIi32ERaRMvHL%2BQS7696kSkzSgk7P0G%2FBAVz2BB7%2F%2BAiB17X1CtGpteCkhP728SQwZzIpLsVgqZjeJKDZ5vDt%2FqCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMaJlzV%2BWDLSAmx5qIKtwDAkBiKEs0VSSkah6Q8JFzwGywni4bk3kQVBfgDmDNogdsoPD80226%2BHA73DHDQIr0Tm02eohiy2UDQ4kY5gxopqTyFIgBtU6Po0JCZGKC%2BlbxoA%2F815UhRIw%2FoC%2BTaA6w6SCFYSGc0juyYQx9l%2F7N03fbBcAHbEd0iFm7elFkyzJJgKO0KRqBbVLibKPX02pd21bu6kXXnS8XTK%2BebIRKvdm0Fj9OTRO%2BLHv2icExGA2vU%2BkSjHX6SImFe9IMXUwwbt1u546XjnfcDovaHZ5zG5mrVZdtVGji59Y4luik9QZIeSCmR%2BlgU7RZRHQw2WGxjldMBf2YYaxu1Hh57fi8Ya8TVtSBFXAfmnxSrtrBkfBR7hOHZoVJBMx4qcpRlgONBC18Ol2xPMhlfkqMeDcz96ZyAPSXO6%2BibWvNClzQyFFyZ59Wdap6lWltAldQCe%2FawS03RyeiGagUQTKo5zCXh3kvIFV6nrYIUex5qeJrhWca6DAoE4iTWjGULzdm7BNYXYIirMokHsehySZ94Z7wgI69HWQjrCUypTBDQVOAva%2BgGnBtWxyrYZEOyNrA10s3BWhMOA%2B8ZI8o9HGAxJlyw%2BmLNjryZATF9cAHD12DLXlwJuVLtKKOqPSDDuQwu5DEyQY6pgEonv5fyMiAxOuu2t4TRIagOQn2tSTB%2F8BOSyjKTrlzbhkLrubL23e6lMO%2F5MzU%2Floz5v955n9jHPnsTAH%2BWtFpggvgz4DPcOW7zLSB767uzWNnd7RsamZILsxVXZ%2FADGELurb5JwoiT7%2B%2BH%2FIRgsUaJEgjlVxkVgTpHV31fQrwsTFQqRsSyBsy3pkK6zSpa2RNgHPUK7Q31ZeUa6gDYAxyw5LwgQ0c&X-Amz-Signature=621b6ddbd5efb3d6530f588978645499fff3980c3ba726efb76f2ab5867b3a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

