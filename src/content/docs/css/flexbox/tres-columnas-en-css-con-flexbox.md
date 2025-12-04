---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SRW3ZK5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDo4yCC6ypExMJLqmRwqDmA8csXCIiicOjUVV7XxFgyBAiEAuM23VrjoVhNTRDpjgghXsPwsH%2FC52QIGDJsrMjNEhYIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDIkpSKRncK%2Bg6LlVbSrcA2TEjfgr4XM5MOsyM4ye1P3DTq1lfhj2QbCt%2FNmRGlNbX7ImLGRyp1Xua99kfxeGinJTPkvukzndGEmW2R69IdwhHYvF5lzj8iCkIvryWUecBtrInDXi88Hlmo%2F%2Frd6UOf%2FTRQaBgaG4dFLJXOJjD0NkdGOF2G05UN%2BF7jq8k3etU%2F8eZ3%2BZeW9VC%2F8ZdVs3cvEVU86DoAVOHK4UtzshxhArY3cpjcM0KfR4QRSw1sjl7MYV8UJi%2FrM6GuFY2gcKnrHxu6gfUQbF5H9Hq8pMq9%2BOUkxZU2xexsqa%2FmDhUJkxxW9LgHEjCqKVkCyBgiW%2B3f92%2FIWyiuQsuLjJ3%2Bi9d6SaNtmhDxZr25do6Frk2jMI7D%2BTUczQedZND9oLHRcmZ0jfDMJYE8%2FtkI1SsHxng5Po9vpb9UGtezBec6XFs3H6Safz7Tc8z8NUVEDjxpWPppNQUUt8e%2Bj53ABxLftelVdQOE8Ofnr8F8tRnnvU%2BbkrKMpEQl26%2FQOUsbJU1yIs18aRFd%2BR0ZexRgcTJETOCbRA7i4tPAHJLCRqL5Lip2SlOqmyEoP1u%2B2TcqNV1tqLGmbPGsf2ohuhB3mgb6FpURDgpLW4NV6%2F2sHPfnlqlTq1%2BykkwSe89FG7bu0GMParxckGOqUBOQg0jkFL%2FUtOS8K6TCJNhKNwbCBUCZ8crZTHGmztE5Bt8kOaIc1%2Bmv6Yu3GopUS57tvDZ07PFuAInmE4HFEw3rihV2QXErVZ88XWTrHse8ar70M7R4Tay%2B7w4xG%2B4PK7E2f7xRcnUXt7rWhx6jArfRXeHBkLcCA3RenRvnQux53kOX3%2FW3MWKtfeXqMARbIfzUEO0SUe6jzKZnuTuad4dKbgcGi3&X-Amz-Signature=d8b67b72fe0b81c3d9712920d1e79524a7b90ee592a20b91efe97700af7fb580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SRW3ZK5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDo4yCC6ypExMJLqmRwqDmA8csXCIiicOjUVV7XxFgyBAiEAuM23VrjoVhNTRDpjgghXsPwsH%2FC52QIGDJsrMjNEhYIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDIkpSKRncK%2Bg6LlVbSrcA2TEjfgr4XM5MOsyM4ye1P3DTq1lfhj2QbCt%2FNmRGlNbX7ImLGRyp1Xua99kfxeGinJTPkvukzndGEmW2R69IdwhHYvF5lzj8iCkIvryWUecBtrInDXi88Hlmo%2F%2Frd6UOf%2FTRQaBgaG4dFLJXOJjD0NkdGOF2G05UN%2BF7jq8k3etU%2F8eZ3%2BZeW9VC%2F8ZdVs3cvEVU86DoAVOHK4UtzshxhArY3cpjcM0KfR4QRSw1sjl7MYV8UJi%2FrM6GuFY2gcKnrHxu6gfUQbF5H9Hq8pMq9%2BOUkxZU2xexsqa%2FmDhUJkxxW9LgHEjCqKVkCyBgiW%2B3f92%2FIWyiuQsuLjJ3%2Bi9d6SaNtmhDxZr25do6Frk2jMI7D%2BTUczQedZND9oLHRcmZ0jfDMJYE8%2FtkI1SsHxng5Po9vpb9UGtezBec6XFs3H6Safz7Tc8z8NUVEDjxpWPppNQUUt8e%2Bj53ABxLftelVdQOE8Ofnr8F8tRnnvU%2BbkrKMpEQl26%2FQOUsbJU1yIs18aRFd%2BR0ZexRgcTJETOCbRA7i4tPAHJLCRqL5Lip2SlOqmyEoP1u%2B2TcqNV1tqLGmbPGsf2ohuhB3mgb6FpURDgpLW4NV6%2F2sHPfnlqlTq1%2BykkwSe89FG7bu0GMParxckGOqUBOQg0jkFL%2FUtOS8K6TCJNhKNwbCBUCZ8crZTHGmztE5Bt8kOaIc1%2Bmv6Yu3GopUS57tvDZ07PFuAInmE4HFEw3rihV2QXErVZ88XWTrHse8ar70M7R4Tay%2B7w4xG%2B4PK7E2f7xRcnUXt7rWhx6jArfRXeHBkLcCA3RenRvnQux53kOX3%2FW3MWKtfeXqMARbIfzUEO0SUe6jzKZnuTuad4dKbgcGi3&X-Amz-Signature=f024ecbbfac617c699dfaf2a0e0e3eee13155210a9b0bd76aa6ee617e0310f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

