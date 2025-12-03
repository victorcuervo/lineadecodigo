---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YLCDDF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC7xOaJCmi8t2Lqqra7QPAYcdvVVe6wlM%2B0m%2Fj25UFahwIgYNSIUHnRI3Gw7DmFdled9%2B9SqxJqzNBhjWaerzW0x5kq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDPexqFHFwQFXBDMgoSrcA%2Fk8jfQXu4WquTutL4dVYnD%2FXNUFNCPWjVQYRFp%2BffDeihGF00SqjVwkAZ5CkVVoCJEf5cHUPXEbXXqrJMDwEOGoi3QUrpHebNrj%2Fp3KpA%2BQEWVz%2Fh%2FhebOz%2BwBXwWpfhxhQIN9%2FMewVv0U7pgq2EiNCI%2FsdOzz3nTmYe1R7rfE7wrSSclPg0a2iHvtMajpXVBFs3qKraCFn8cjFms26nIL1tii%2B2kIslpncikoet6WvLp8l91ccQRPrI2g0NRR%2FAe%2FkFYaqnCTBsb6FHTH%2F7I8aOYh83F2%2BVEV9exjltNAH9OtDWeuV9KrPIxxLFiGr96avmMwuABcMWQS3DOYPC2fwSrTIwL9Mpyyy08dsuyr3DPmZZ1MS8aQYP2Q%2BgvNrJNmbAEVCZDzMrYk2Fyav%2FVmZH9HexnDE%2Fh3QMlFBb2hAMj8A4x2exV3l9pTg%2Fyrcc430vxDIgfYKP01p4zfvIOZSYIILpaZi%2BUpIn2OveFQi7jb4ABdXptnSNIWUAp%2BaMSF3W0WaV3RxVn47PFhaLlrU0HbNyc91t0NWFHAYhz2tMWvKlvY9JbuEXCQyeLA6ANo9zkmIUjLA4kKR4dj5NxnGNXb13VkTk4%2FKZcAJ%2BW5VdXFF0RFJcz9Jfaj5MPP%2BvckGOqUBwuO4a7mqInhnaMnsaWOGeE86q649rKWgGT2i0GNWn%2BkpfWn7c%2FygkeAt8QYchAy%2BVZW%2Fp4zioet9g7ahU43riAuVQn%2FHYDxPOpeySrPkTxBDJ1OkzDBXwwnRd%2FqGzNCinUkQNNtx%2FQ4uSDwQAz7sAv8t0MwT1rSwoTHumKcau1vsqGxGKRscv%2BJ7kkWIs8piPBBX3eusCTDGbH7X6KL4Anl%2BySHo&X-Amz-Signature=6da6f8d068ff99d59a42dc9b67e9509d51f1fed4295ee351012271e145105743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YLCDDF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC7xOaJCmi8t2Lqqra7QPAYcdvVVe6wlM%2B0m%2Fj25UFahwIgYNSIUHnRI3Gw7DmFdled9%2B9SqxJqzNBhjWaerzW0x5kq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDPexqFHFwQFXBDMgoSrcA%2Fk8jfQXu4WquTutL4dVYnD%2FXNUFNCPWjVQYRFp%2BffDeihGF00SqjVwkAZ5CkVVoCJEf5cHUPXEbXXqrJMDwEOGoi3QUrpHebNrj%2Fp3KpA%2BQEWVz%2Fh%2FhebOz%2BwBXwWpfhxhQIN9%2FMewVv0U7pgq2EiNCI%2FsdOzz3nTmYe1R7rfE7wrSSclPg0a2iHvtMajpXVBFs3qKraCFn8cjFms26nIL1tii%2B2kIslpncikoet6WvLp8l91ccQRPrI2g0NRR%2FAe%2FkFYaqnCTBsb6FHTH%2F7I8aOYh83F2%2BVEV9exjltNAH9OtDWeuV9KrPIxxLFiGr96avmMwuABcMWQS3DOYPC2fwSrTIwL9Mpyyy08dsuyr3DPmZZ1MS8aQYP2Q%2BgvNrJNmbAEVCZDzMrYk2Fyav%2FVmZH9HexnDE%2Fh3QMlFBb2hAMj8A4x2exV3l9pTg%2Fyrcc430vxDIgfYKP01p4zfvIOZSYIILpaZi%2BUpIn2OveFQi7jb4ABdXptnSNIWUAp%2BaMSF3W0WaV3RxVn47PFhaLlrU0HbNyc91t0NWFHAYhz2tMWvKlvY9JbuEXCQyeLA6ANo9zkmIUjLA4kKR4dj5NxnGNXb13VkTk4%2FKZcAJ%2BW5VdXFF0RFJcz9Jfaj5MPP%2BvckGOqUBwuO4a7mqInhnaMnsaWOGeE86q649rKWgGT2i0GNWn%2BkpfWn7c%2FygkeAt8QYchAy%2BVZW%2Fp4zioet9g7ahU43riAuVQn%2FHYDxPOpeySrPkTxBDJ1OkzDBXwwnRd%2FqGzNCinUkQNNtx%2FQ4uSDwQAz7sAv8t0MwT1rSwoTHumKcau1vsqGxGKRscv%2BJ7kkWIs8piPBBX3eusCTDGbH7X6KL4Anl%2BySHo&X-Amz-Signature=154cb1cc1a05f4bf7801b41696adde48ea672760c074130eade7de32755ae8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

