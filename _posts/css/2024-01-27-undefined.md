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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPRZDXR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFqQcy%2Fsbn5%2FSAXl7qmLi7c%2FcB3KaGO1uFf%2BapUY4VR%2BAiBUG2nKDobmfT%2FIHbBGYluMDgVHsmYCXcSosbN4Jd00xCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM6uaMbuFcdiIKcYt3KtwDyhuJoYtd0FgwT28J00TM4CGz9bzDW7LobJYy0uyhvSmVc%2FoTgJs0F%2FhFfoh69X2krjO0qDTXIn62iMnsnuLVhMTmKKJrZKaHuuUkHMYuAn0O1QHFLmQOEY2FNvf9%2FzypefdAivt2xj2cKiUNTpMUTLeGKY8IJuyjqNjGCzZOMYvJ6nckhMq00XjmYx%2FUIX5YBqbdrWAliQ9oqPqiE1DHQg0Mg93%2FWS9kTtMiGKyxCr2rJvn22GoRkJThIUK2EwlJb34XOE4jQJ%2FQ%2F8MKh%2B%2Fl9uJqBEUvmCGeEt7dPekmwUHidgBqMHYaQqjXBLERKUJXHicYxx7ymzR2hwFflRqmtWRTbzKsSeRfNuzFsk2oyMKT5lvNIh%2FDHN4FS5F5pI8bPdfz6tweG%2FhEYiY0vsa6UrSXKU9xzACUt%2BxKoQxQujuvN7TF1PKbQF%2F62NKPbTh4vOZR%2FiuuF7ra8l6%2FEvXw8qP5zJbHuewjf1L2XFpXhsCiAr6wI2C2ecjowCiQ9aL%2Bw4EnMdfnxpHX%2BOfTVE6RvcmVNsYGKMi%2Fd8BEqXyBb1TXTo23M3HcEmhI4lhwc1L97sk9Ibg6Q6cn9pkaXOGSkSufwzBoZBf1Z8dSNXkI7Ta3wRxQpoCGyi0El54wtqbByQY6pgEKAm2MiCz%2F%2FrD6qo7pSbz0iqwPU6dHss4U2cVPE9oy7mljPPYFLig%2FMZ5b%2B%2BDxIFoQrU02VXxwMwd%2BtrgpjFJbvioyyY5tvhDDtJ518UVVhPrlv7VqsDqA3T9kFMvJxVqS72oS8VwUPtIYLPhKPe7BOrbF%2BwLVRWIAZPWVVGG2bpLrnKv4I7gWo%2ByN4GaTyD15viyPgQNgzrte%2FsGOmwv2OiQsCEFI&X-Amz-Signature=4679f7c900c6e8cff9e65621097d3a7c7cabdf3c4236b25bc3d7505388f46484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPRZDXR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFqQcy%2Fsbn5%2FSAXl7qmLi7c%2FcB3KaGO1uFf%2BapUY4VR%2BAiBUG2nKDobmfT%2FIHbBGYluMDgVHsmYCXcSosbN4Jd00xCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM6uaMbuFcdiIKcYt3KtwDyhuJoYtd0FgwT28J00TM4CGz9bzDW7LobJYy0uyhvSmVc%2FoTgJs0F%2FhFfoh69X2krjO0qDTXIn62iMnsnuLVhMTmKKJrZKaHuuUkHMYuAn0O1QHFLmQOEY2FNvf9%2FzypefdAivt2xj2cKiUNTpMUTLeGKY8IJuyjqNjGCzZOMYvJ6nckhMq00XjmYx%2FUIX5YBqbdrWAliQ9oqPqiE1DHQg0Mg93%2FWS9kTtMiGKyxCr2rJvn22GoRkJThIUK2EwlJb34XOE4jQJ%2FQ%2F8MKh%2B%2Fl9uJqBEUvmCGeEt7dPekmwUHidgBqMHYaQqjXBLERKUJXHicYxx7ymzR2hwFflRqmtWRTbzKsSeRfNuzFsk2oyMKT5lvNIh%2FDHN4FS5F5pI8bPdfz6tweG%2FhEYiY0vsa6UrSXKU9xzACUt%2BxKoQxQujuvN7TF1PKbQF%2F62NKPbTh4vOZR%2FiuuF7ra8l6%2FEvXw8qP5zJbHuewjf1L2XFpXhsCiAr6wI2C2ecjowCiQ9aL%2Bw4EnMdfnxpHX%2BOfTVE6RvcmVNsYGKMi%2Fd8BEqXyBb1TXTo23M3HcEmhI4lhwc1L97sk9Ibg6Q6cn9pkaXOGSkSufwzBoZBf1Z8dSNXkI7Ta3wRxQpoCGyi0El54wtqbByQY6pgEKAm2MiCz%2F%2FrD6qo7pSbz0iqwPU6dHss4U2cVPE9oy7mljPPYFLig%2FMZ5b%2B%2BDxIFoQrU02VXxwMwd%2BtrgpjFJbvioyyY5tvhDDtJ518UVVhPrlv7VqsDqA3T9kFMvJxVqS72oS8VwUPtIYLPhKPe7BOrbF%2BwLVRWIAZPWVVGG2bpLrnKv4I7gWo%2ByN4GaTyD15viyPgQNgzrte%2FsGOmwv2OiQsCEFI&X-Amz-Signature=0c68b53de46f5445bda16ab95fe7fe92813a71fb9008d7774df15134e17dbf73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

