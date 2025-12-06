---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNMZWXG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt9GvFA2tdyTeYOgJbiS4vtDHJFmqX2lJjf3073PKK%2BgIhALbLeS%2Byy%2F2%2BjHwxMZXgGgZ43bQU3Ymf%2BXj8PWws7fPuKv8DCHUQABoMNjM3NDIzMTgzODA1IgzOIbvbj5aMxIeLYpwq3AOH%2FaoWK8AUTtW5fbSQ%2BGjMts%2FlWlkOo5JlQloZqnZMeyUvypcERpG1%2B3E54s%2FNJAOv47pTFqWCkMwdn1TcXBV1G%2BXD%2F9%2FI6T2ZGqQ2OhapXfBUvPgzX8FcX7xJVa0%2B7NU7nLJUCV0Jt8dcKlBvkYsr0zuCj8y5PLKmjHPLIQYLe6NJTOLZWn12OpHfvKBUdMtLBw705%2Fz18Oc40MEDdtSmGnUjqonCgkD6NPAYtNbdNoirgfAL45vxKTieGwYLWEg4g7MKpifFT0IYQ6aF%2BhadeNFuNSCel41WzoTICuVW2fC9WNVgp4oozae%2Bvhyr0smPz55FIxl%2B%2BPh9CqBH2fN3%2BM4Wdxh8aOU27r8FFZkFQVrsA6bUUu%2FK1bkyeGBY1guGbVMWR3KQN3IyLtb0qRbAA%2FQYkBK%2B3b0JitXtPpi2JnApN%2BB2qsRvQLUnURYL3i4hiF%2FdhQRGR%2FBnHBZZhoTBtsaLr5cvP99WF%2BNbKthvuoaEwf4bYjmGLDiwU4zl%2FhA3owbWBd1sHzk6PBYMYpPNp2oZQ%2F8fx7dIZyzQqmRCRPD2V8NuopXXQMG51GG%2BjCZ1NN%2B3ZNwPT2lZTkAQBj5tOOHyDswP4elHlNeMWBNBIBfVzzKDh2py1MrilzDsptDJBjqkAWnOX2SOf8HZWgkX99a3vHQgPtp8MYVEY2jXKt1cGY6Y3a%2B0D8KXiMVPsoCtjxDOhhWC3U6M7wVuAxyxXms%2B%2FOcY%2FyZYROwXZexdcsDQfelaqILgSLlDnJOlUaf8yCoe4JCiUhR57ghcHHPnooySS40LBPxbM64CZnqQIHXZdFK5uwK5UQsDANToQjkb39tS3bl9BsSortm8oM%2BH6%2FWwfCnfkf0V&X-Amz-Signature=d087be2c92ac90bc966fcb99ea3a6afe958b2f1d570ce7a86434070359e3765b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNMZWXG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt9GvFA2tdyTeYOgJbiS4vtDHJFmqX2lJjf3073PKK%2BgIhALbLeS%2Byy%2F2%2BjHwxMZXgGgZ43bQU3Ymf%2BXj8PWws7fPuKv8DCHUQABoMNjM3NDIzMTgzODA1IgzOIbvbj5aMxIeLYpwq3AOH%2FaoWK8AUTtW5fbSQ%2BGjMts%2FlWlkOo5JlQloZqnZMeyUvypcERpG1%2B3E54s%2FNJAOv47pTFqWCkMwdn1TcXBV1G%2BXD%2F9%2FI6T2ZGqQ2OhapXfBUvPgzX8FcX7xJVa0%2B7NU7nLJUCV0Jt8dcKlBvkYsr0zuCj8y5PLKmjHPLIQYLe6NJTOLZWn12OpHfvKBUdMtLBw705%2Fz18Oc40MEDdtSmGnUjqonCgkD6NPAYtNbdNoirgfAL45vxKTieGwYLWEg4g7MKpifFT0IYQ6aF%2BhadeNFuNSCel41WzoTICuVW2fC9WNVgp4oozae%2Bvhyr0smPz55FIxl%2B%2BPh9CqBH2fN3%2BM4Wdxh8aOU27r8FFZkFQVrsA6bUUu%2FK1bkyeGBY1guGbVMWR3KQN3IyLtb0qRbAA%2FQYkBK%2B3b0JitXtPpi2JnApN%2BB2qsRvQLUnURYL3i4hiF%2FdhQRGR%2FBnHBZZhoTBtsaLr5cvP99WF%2BNbKthvuoaEwf4bYjmGLDiwU4zl%2FhA3owbWBd1sHzk6PBYMYpPNp2oZQ%2F8fx7dIZyzQqmRCRPD2V8NuopXXQMG51GG%2BjCZ1NN%2B3ZNwPT2lZTkAQBj5tOOHyDswP4elHlNeMWBNBIBfVzzKDh2py1MrilzDsptDJBjqkAWnOX2SOf8HZWgkX99a3vHQgPtp8MYVEY2jXKt1cGY6Y3a%2B0D8KXiMVPsoCtjxDOhhWC3U6M7wVuAxyxXms%2B%2FOcY%2FyZYROwXZexdcsDQfelaqILgSLlDnJOlUaf8yCoe4JCiUhR57ghcHHPnooySS40LBPxbM64CZnqQIHXZdFK5uwK5UQsDANToQjkb39tS3bl9BsSortm8oM%2BH6%2FWwfCnfkf0V&X-Amz-Signature=100fa80a0e4f88bb6fe46593c02f078f1e4fb32e58e61afe4eaf4f976ab13e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

