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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVBURW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBSk7qLy5jaMOEBfAcZVXybVqJVMuu5x2YW3ZoSd5KudAiEA%2B4bbxCQUmjhLii6bjJl4Von%2F7Q5TMT%2BBf3SrqRQiFt0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLih%2BbKLK%2F72mH2dRSrcA0VZkH86S1nAch6wZEnpfIRKyd1axGjtzP0UJqa8PTc1%2F%2FVK0a72tzGbf9tzQ9id3G2wAdeCfODHfbv1ocaEJQGoG0SodZcTtI%2FGLoygI9BlX8byBaVbFiueND%2FgmXlsxyxro5U4L0zBautOHltjEMVCBt7%2BA9tQ%2BNuzHzU%2BJmkyqWJNd7T%2FyXgvQ96pIhU%2BBBHe9CnoMwidPrp8V6XT4y1LFT0v9vOHP5DQwmEdS4XG%2Bzwsoct8%2FidC7%2BO301v0VTZDx7S8E2A2pmCh9h6U8NMi7Oy6%2B3ndHnSWu25xt%2BRtvgjJIFnu9kVaD7XmIWuQMMnXioj2R2XWz8uL4eNHiXFh9oGZR6eNTQBZqSZQGKkMI4vtJTEox8%2FGOiDtEB3r6lHlHL8Xh46ctidW0kwOIFMDYtyq%2BJIqTRtZ3nPO%2BGhAlTfcCo4dkrELjKtTxd09NQoTviHDBEmeVMKCnOphie12h2ld5lxFJba1buw3%2BUkZwC6kzwuEwzpaY6tq%2FbjxYtA5IloqYgIqnn%2FiNr9Lz21PkOevpKvpZ1aMznMjsMEUAIctONkhz5x55wcmYgO%2FfUSaNIYSFRBe6Qg0DehuXgjNTH8K3m7ky2COpH7koE9rhML7BGYjm072B7bQMIiTwMkGOqUBhQl8xTqPcWNFBD%2Bcm%2B2LTz10m9LPCHsAKedbrUKmgbhpuWJll7%2Ffjcd%2BKt%2FvkN0db6NAFfoiwHCoaZ5xJs7qBYBj7i9yGRDmqekovjvIwqEpBkIL3aFPpi4Muinule25tcYBYotyAyylGVN7EGrLQr30Jhvtnku%2BFl9ThC4P2ZgYlLX%2BPsSAZBBKkdnQs3njebkCJ6t9RwMdPv6S0iN6wtjrWJMw&X-Amz-Signature=ec4b2da10a9c6a9d07edcd5fb21d5404e3ef0aae0a1ee464324c77d11c866562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQVBURW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBSk7qLy5jaMOEBfAcZVXybVqJVMuu5x2YW3ZoSd5KudAiEA%2B4bbxCQUmjhLii6bjJl4Von%2F7Q5TMT%2BBf3SrqRQiFt0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLih%2BbKLK%2F72mH2dRSrcA0VZkH86S1nAch6wZEnpfIRKyd1axGjtzP0UJqa8PTc1%2F%2FVK0a72tzGbf9tzQ9id3G2wAdeCfODHfbv1ocaEJQGoG0SodZcTtI%2FGLoygI9BlX8byBaVbFiueND%2FgmXlsxyxro5U4L0zBautOHltjEMVCBt7%2BA9tQ%2BNuzHzU%2BJmkyqWJNd7T%2FyXgvQ96pIhU%2BBBHe9CnoMwidPrp8V6XT4y1LFT0v9vOHP5DQwmEdS4XG%2Bzwsoct8%2FidC7%2BO301v0VTZDx7S8E2A2pmCh9h6U8NMi7Oy6%2B3ndHnSWu25xt%2BRtvgjJIFnu9kVaD7XmIWuQMMnXioj2R2XWz8uL4eNHiXFh9oGZR6eNTQBZqSZQGKkMI4vtJTEox8%2FGOiDtEB3r6lHlHL8Xh46ctidW0kwOIFMDYtyq%2BJIqTRtZ3nPO%2BGhAlTfcCo4dkrELjKtTxd09NQoTviHDBEmeVMKCnOphie12h2ld5lxFJba1buw3%2BUkZwC6kzwuEwzpaY6tq%2FbjxYtA5IloqYgIqnn%2FiNr9Lz21PkOevpKvpZ1aMznMjsMEUAIctONkhz5x55wcmYgO%2FfUSaNIYSFRBe6Qg0DehuXgjNTH8K3m7ky2COpH7koE9rhML7BGYjm072B7bQMIiTwMkGOqUBhQl8xTqPcWNFBD%2Bcm%2B2LTz10m9LPCHsAKedbrUKmgbhpuWJll7%2Ffjcd%2BKt%2FvkN0db6NAFfoiwHCoaZ5xJs7qBYBj7i9yGRDmqekovjvIwqEpBkIL3aFPpi4Muinule25tcYBYotyAyylGVN7EGrLQr30Jhvtnku%2BFl9ThC4P2ZgYlLX%2BPsSAZBBKkdnQs3njebkCJ6t9RwMdPv6S0iN6wtjrWJMw&X-Amz-Signature=2578e23ec92ef507fd6cc6fec9e4090721f65e692d8ce1658f7d75b2d4e1fa0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

