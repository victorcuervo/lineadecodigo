---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFATGACX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBisijVa%2Fh8njOjUclDyFlQZbHJFUK9eAEVA3dPtQfNpAiEAmP5FvvhZeMNSAY4kcZu8yqBXjIuUQPPSxhi9ArfZXXwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzPCItGrQlz6U9QcSrcA3zKYDWoelhW%2Bwf1ZgjEb%2FD%2FsL0tSpOUh%2F9M8L1DEmR%2BjTeQvON7%2Bog5xI9IBBJ%2F9tzriZ2D5ClMbvRx%2FWWeKhv%2Fz8mEvTwiD9wc6UR5DSIbTeJN4bLEwK4MZMAABPPnMkxc8sdSgcQJ%2F79PXWtcCJRflDTzTtxvPnCV6QezH2F1tCBg%2B1nOnRYOI7F5IO8U%2Ba2gNKwvuvRmpT1prpMTHKtJgaRrGo2eNtMhj5KiovBHVSe0ShN6YEFekOCuBmHOrBpPqolS1bbaamu0o%2BzWVnrCXXA9MaD0kU9R3bbswZsrCwT1dE9zFv9WgrO9Hf%2BU3toDH7mEQQ6twJNATbtWfzkw5806bKi7sNDeIDaA92KJdisW30VOVGC6DZP81OTfdLBhKjYJO9kvAsm9eEEtgjLG0wfsSYBovB3jMHAp8N7LPSxENlrhu0cmu0E%2FW5k8TatSlUnlU%2F4%2B5hrf5eDoYcLk1v2EzD7vF3xyy4Qzf9BQHN2hQPScjWx06ASbDmVbgnhPuJ%2F8xbd3jPpSsHTYHczSSDiU8D0BUQRBib6yEtGQWqcIMeC53Afs1a18ClcbOXYzZ48wnq6d4tGXalTNHo1TxBucXJm0DGb8Ocppa%2BR8%2FUcnrGiE02E0uerxMI7E38kGOqUBTs1LbWIr2OEAyn%2Bs9YXVWVU6Ns4OWcJDEJ4AH3bdWIDKxWW%2Bbqb%2BQoFk8Jd6Gf3UDUPnvHSVIFDdvsvR09sofq6QyL17PaLcZJA%2FtFGGJAhohZjnDtmgdWWbfg0G349xwqfEBUFQlTK3MoiEtagPOYfiQeqgH3t27r6QsJVTvEF%2BkWfeKwED%2BcSFa%2BOMyclIzXWKUmk1n93JsFMU46PWPH9tcSWj&X-Amz-Signature=25b9bc734e1ae260cfd42a64ff9cab65d4d8fefeadf1c24d9810ecb36dca7395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFATGACX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBisijVa%2Fh8njOjUclDyFlQZbHJFUK9eAEVA3dPtQfNpAiEAmP5FvvhZeMNSAY4kcZu8yqBXjIuUQPPSxhi9ArfZXXwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzPCItGrQlz6U9QcSrcA3zKYDWoelhW%2Bwf1ZgjEb%2FD%2FsL0tSpOUh%2F9M8L1DEmR%2BjTeQvON7%2Bog5xI9IBBJ%2F9tzriZ2D5ClMbvRx%2FWWeKhv%2Fz8mEvTwiD9wc6UR5DSIbTeJN4bLEwK4MZMAABPPnMkxc8sdSgcQJ%2F79PXWtcCJRflDTzTtxvPnCV6QezH2F1tCBg%2B1nOnRYOI7F5IO8U%2Ba2gNKwvuvRmpT1prpMTHKtJgaRrGo2eNtMhj5KiovBHVSe0ShN6YEFekOCuBmHOrBpPqolS1bbaamu0o%2BzWVnrCXXA9MaD0kU9R3bbswZsrCwT1dE9zFv9WgrO9Hf%2BU3toDH7mEQQ6twJNATbtWfzkw5806bKi7sNDeIDaA92KJdisW30VOVGC6DZP81OTfdLBhKjYJO9kvAsm9eEEtgjLG0wfsSYBovB3jMHAp8N7LPSxENlrhu0cmu0E%2FW5k8TatSlUnlU%2F4%2B5hrf5eDoYcLk1v2EzD7vF3xyy4Qzf9BQHN2hQPScjWx06ASbDmVbgnhPuJ%2F8xbd3jPpSsHTYHczSSDiU8D0BUQRBib6yEtGQWqcIMeC53Afs1a18ClcbOXYzZ48wnq6d4tGXalTNHo1TxBucXJm0DGb8Ocppa%2BR8%2FUcnrGiE02E0uerxMI7E38kGOqUBTs1LbWIr2OEAyn%2Bs9YXVWVU6Ns4OWcJDEJ4AH3bdWIDKxWW%2Bbqb%2BQoFk8Jd6Gf3UDUPnvHSVIFDdvsvR09sofq6QyL17PaLcZJA%2FtFGGJAhohZjnDtmgdWWbfg0G349xwqfEBUFQlTK3MoiEtagPOYfiQeqgH3t27r6QsJVTvEF%2BkWfeKwED%2BcSFa%2BOMyclIzXWKUmk1n93JsFMU46PWPH9tcSWj&X-Amz-Signature=3b7e26dee6de757975844d49bc03a4ae91bb85307ad5975a5396871a03ebdca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

