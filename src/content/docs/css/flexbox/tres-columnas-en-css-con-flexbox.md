---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWKQV733%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSEw5Avoe8%2B2AeJe74duTN62h1KeyACqsi3qIL2MXA5wIgAiQ19k5PhNVEZ2%2FbgKWr5LbTAniFlxRkcrtGFqXbPbQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3VDnol1hILQA1kQSrcA4mgKU2tWSroGJHVKpFsDn8rTNRj2gVMlyH25PXXGNmiTlPLUhKC4IqH3pzrm9FP0%2BhRIBulvY%2BUC%2BhR7Rpq%2FA1xjaAtMHad44g9Z6OzwSlOIsMXcyHQUI16Z5GsuOj44CelinqhhSJfnAumNm5Q%2FyMeypctd0pFSCIQjWUazvneeKclKDfYWqtfapl0PEgpR0xw17JQ%2FsneXdu2EkBS8%2FdmO8an6wRm4OnXoZvpCPW7vJeHmCMPWvEhUX2uJTnk8IVviw0zNIxpIJVrx4taJaICKmmPrUDpMFWgjWCT5J3wal63WbRIbKQwZ3GhMcqv4LLh04jvS8rTugpcGSiFZ9GopVQ%2FH%2Feblzcch7EJ41D6yUTCLVlc6GxxsiA3wbvmQR0SNS%2FnHrZqQInAOZhZaSDSth3CvdyfMGdDH4KVuQO70NmQK%2BC4lQtUeVVzqYpMwRNQcFLEGqTO25odnYWzPqmmZWs2TM0%2BVyO6txnDaaomXv60g2SvnIK3vrB%2BgmtpLHBchac7gnbSPgmLxXGDJOwbajw%2F93YD7eSpVTjGyPerlcCwL1gjH8RBIVmXsNhRcbuiDQfRugYZiQZktWeWefCEie5dizIQ8cuPuK3gCHXSJdCPr5Hv2Z9oYeCXMKLt2ckGOqUBCYjxcbwvlDP1N2n2ZLmEiwr5BfaVUpMml4sE14GL657ZWqCRHMdjSBgtlp673EwOKHlPQ9e3PyBpmz3gP6hXw9ONKi372vrEK5BhR%2FOaCtPO%2BD7r6hzwL6TuGHpw2MEP2IVvLDwnrGBDnq5Hwd94Kw0rebYgHi9higEk5UickD3tj%2BHqrjlEPaZvOuaXwA7pEPm%2BgDRjTTqTFQOFhbqD4vRC1X2q&X-Amz-Signature=7e4d37c9d5c2a2a161e57d3bd7027d555976d7a216305f186893f6a7c2b47752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWKQV733%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSEw5Avoe8%2B2AeJe74duTN62h1KeyACqsi3qIL2MXA5wIgAiQ19k5PhNVEZ2%2FbgKWr5LbTAniFlxRkcrtGFqXbPbQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3VDnol1hILQA1kQSrcA4mgKU2tWSroGJHVKpFsDn8rTNRj2gVMlyH25PXXGNmiTlPLUhKC4IqH3pzrm9FP0%2BhRIBulvY%2BUC%2BhR7Rpq%2FA1xjaAtMHad44g9Z6OzwSlOIsMXcyHQUI16Z5GsuOj44CelinqhhSJfnAumNm5Q%2FyMeypctd0pFSCIQjWUazvneeKclKDfYWqtfapl0PEgpR0xw17JQ%2FsneXdu2EkBS8%2FdmO8an6wRm4OnXoZvpCPW7vJeHmCMPWvEhUX2uJTnk8IVviw0zNIxpIJVrx4taJaICKmmPrUDpMFWgjWCT5J3wal63WbRIbKQwZ3GhMcqv4LLh04jvS8rTugpcGSiFZ9GopVQ%2FH%2Feblzcch7EJ41D6yUTCLVlc6GxxsiA3wbvmQR0SNS%2FnHrZqQInAOZhZaSDSth3CvdyfMGdDH4KVuQO70NmQK%2BC4lQtUeVVzqYpMwRNQcFLEGqTO25odnYWzPqmmZWs2TM0%2BVyO6txnDaaomXv60g2SvnIK3vrB%2BgmtpLHBchac7gnbSPgmLxXGDJOwbajw%2F93YD7eSpVTjGyPerlcCwL1gjH8RBIVmXsNhRcbuiDQfRugYZiQZktWeWefCEie5dizIQ8cuPuK3gCHXSJdCPr5Hv2Z9oYeCXMKLt2ckGOqUBCYjxcbwvlDP1N2n2ZLmEiwr5BfaVUpMml4sE14GL657ZWqCRHMdjSBgtlp673EwOKHlPQ9e3PyBpmz3gP6hXw9ONKi372vrEK5BhR%2FOaCtPO%2BD7r6hzwL6TuGHpw2MEP2IVvLDwnrGBDnq5Hwd94Kw0rebYgHi9higEk5UickD3tj%2BHqrjlEPaZvOuaXwA7pEPm%2BgDRjTTqTFQOFhbqD4vRC1X2q&X-Amz-Signature=7ee0981cc1ea3b7a9297c2d3f84c56ee23c00edb665b1ef6d3cce133d733eab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

