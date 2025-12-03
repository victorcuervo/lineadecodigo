---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPS5B3VK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICLQCplsYfcp5%2FZmOniokgy8Gcu9iOIPihNwoUYNooPFAiEA5FFgjMX5wl2QxW62w5UT3IFRuqDO%2FS4cCbZ2eHVwEbIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGCZLxxj0%2BAow6S21SrcA%2FaGAAWwNPX9pjwkeuv98yt2YIYqKm6l3A77xh97kzsUdZZfBTAieajNgqE9c9E1IeCKGn%2BCs7Tn2LFJYLq5TLcsKr2gI0WbcXv8%2FWgRTNJ30DsDk0HtPDaxPdZw1HpMlM8m3ni0AZ%2BXZwGCrIKPpxtcC%2BaBLEv8%2Ba6B%2FQxtOxdtpykV8aEmYwT2XmdqSa2%2B0bFNF1eN2PIAd0E%2BzwrFCBBwKHldXaccUhGf0lK0qTSBpI8ylyP7bfnT5du63EOdQI7uDbloBAg9Y91ck%2BRi4ZGtCW0XGcecglbwEka1a7a1DYCU5C4slaXC%2F%2FZMkmRbZ%2FUb38kdZB9G5LmsFBhTiy9Xk5r%2BM4uAKak6eZ6PxiI2w6i%2FhF1byllJl6GSYrQtlHnAhc2BnKjE8DLmYpuZdvGt4B7UVWNfFBipzYPj6UTd09by5DNfmzj5zCosoSZHHxi7N9tcEDSI05%2B3LCzB8BcD2%2FIOX6bXRGZyNvg%2BQVLedI1mwj2DbCDdyBH%2BTP%2FnezaXy8xu8umMhF7uUzf%2FZEG1R30Gi4VQikvtRDGGINd%2BVno0p%2BVJ25qdpYN9golgsVE9BzAPxpIE%2BAAMvVfX41p%2FP9zINaiDN4Q2Y0NK2%2Fsggy4h0r72m59nSZMiMIKRwskGOqUBfsHqAzfcOth05xfu8zg0bvNxm2ZTYKRmgKRD42BFlzqrZEFIlj6dBstEmRtO4%2BWsICZHlg38B7wkAe65Q6HNlHAS8Wkx4TboQIQ3fcIZFK5VZRUUUUFuzZbX50lBtZcJpvDow7E%2ByRuLgllytp5Dz1OG4qmWhHhTUmwWWhwAOT07i7IMeQQ%2B1r%2Bul8captK46eFnHDdwS2i2PFIVXxNFDaUofTyr&X-Amz-Signature=5c0b452d5c1a5eced69ac744eeba3bee18a612d5e4176787ddbee734abcf522b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPS5B3VK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICLQCplsYfcp5%2FZmOniokgy8Gcu9iOIPihNwoUYNooPFAiEA5FFgjMX5wl2QxW62w5UT3IFRuqDO%2FS4cCbZ2eHVwEbIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGCZLxxj0%2BAow6S21SrcA%2FaGAAWwNPX9pjwkeuv98yt2YIYqKm6l3A77xh97kzsUdZZfBTAieajNgqE9c9E1IeCKGn%2BCs7Tn2LFJYLq5TLcsKr2gI0WbcXv8%2FWgRTNJ30DsDk0HtPDaxPdZw1HpMlM8m3ni0AZ%2BXZwGCrIKPpxtcC%2BaBLEv8%2Ba6B%2FQxtOxdtpykV8aEmYwT2XmdqSa2%2B0bFNF1eN2PIAd0E%2BzwrFCBBwKHldXaccUhGf0lK0qTSBpI8ylyP7bfnT5du63EOdQI7uDbloBAg9Y91ck%2BRi4ZGtCW0XGcecglbwEka1a7a1DYCU5C4slaXC%2F%2FZMkmRbZ%2FUb38kdZB9G5LmsFBhTiy9Xk5r%2BM4uAKak6eZ6PxiI2w6i%2FhF1byllJl6GSYrQtlHnAhc2BnKjE8DLmYpuZdvGt4B7UVWNfFBipzYPj6UTd09by5DNfmzj5zCosoSZHHxi7N9tcEDSI05%2B3LCzB8BcD2%2FIOX6bXRGZyNvg%2BQVLedI1mwj2DbCDdyBH%2BTP%2FnezaXy8xu8umMhF7uUzf%2FZEG1R30Gi4VQikvtRDGGINd%2BVno0p%2BVJ25qdpYN9golgsVE9BzAPxpIE%2BAAMvVfX41p%2FP9zINaiDN4Q2Y0NK2%2Fsggy4h0r72m59nSZMiMIKRwskGOqUBfsHqAzfcOth05xfu8zg0bvNxm2ZTYKRmgKRD42BFlzqrZEFIlj6dBstEmRtO4%2BWsICZHlg38B7wkAe65Q6HNlHAS8Wkx4TboQIQ3fcIZFK5VZRUUUUFuzZbX50lBtZcJpvDow7E%2ByRuLgllytp5Dz1OG4qmWhHhTUmwWWhwAOT07i7IMeQQ%2B1r%2Bul8captK46eFnHDdwS2i2PFIVXxNFDaUofTyr&X-Amz-Signature=5f59442b0c5acca1f85ae48244a476a4096b82fe7f5daa50b1c205fbc43a8476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

