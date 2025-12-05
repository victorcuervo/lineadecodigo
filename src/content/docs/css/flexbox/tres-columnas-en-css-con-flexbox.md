---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GNCXHVF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC49sEaL4m5pao2VczhbyhGYz0kWc1p7tII4cXVSCBwyQIhAJJHP3D1M5dXjQbunX%2BQnAPlMMRp2FbjhPaCb0oIkCAiKv8DCFUQABoMNjM3NDIzMTgzODA1Igx0uk0nmtSeOfd%2BaNAq3AOdifVNNpId3wA5pWeknFmfz1fZosAB2ZpTxiel0dUnnuI7OPvmdXny9flCU%2BVMni2nbIsqEsqh6Eik7jY7zCnPm7XFRwS8lrqYO1xfty8TidUGlZJaCJsvMIsqy6Ddkn6vihcxlamZS0jdq61CZaZ1WdnfGNOvbimhy5XbILTDYzd4Me5d69HvbUVtrZP0IBmS%2BrbG%2FhjZcFS9Rx9hLwFXE9HfiYSKAlhvdbrIHFnZhehaz7dICE4sJp7RtBK%2BXwybu3bbU5X7rUhAOZPTzeKu0k5vwS1Q0NnzGH4ELvsz0f9Lw995sjsQP6SuKb9sfOKIAufBU%2FfvrcIH4ZhZ820LbBXzMWQTpkOdQwPI83LNKcTaKJFbGImLPlCgqfM3Tvwikvw3NmniMCjKvgNgKQRIt5bshVHsmBNbO3yy4v3gs9xw0AkCnGF08Q1fEN5RiRf3MKd9eGX5STKCpz%2BEO1N0XveM%2FHiM7Q6fjbEJ74RmnS%2FXsSdw%2BIZlUdDOVf8XR17MtIFVb48BM1MfWtVkOMRWLLkW5G6VMyIt%2FiLpWif2g9T1LZ8uT%2B7I8EWt%2F7cJkH%2BPbi5CP0Fd%2BScC5x%2BNUXx7nJPNGdd6kfMRH5vRHYRG5%2F1W6thUwHx6GqWInTC%2Fr8nJBjqkAcopZZs5VfSZni4klRRy1b2NkKzopgibNJ3TNbgrw%2FfjlbtZkk3HF3%2BPWTvLemzvsg98pj3bcl3hGsiteIdTyNc7N2LmjiVC5Bwl0BqAMS2xlcYBTrHMz593744LRiGeuVqWQj4vlD8Few5aYwx4vjWo1vv1Ab2DtClJ2bghbZKSmOQk5OlP%2Frhcohby5G6J0oGAx8%2Bhx7Y%2FqCCcuUm0uqMgxvyF&X-Amz-Signature=a7dc0b0fea80bdd1b7552c099d4b256ec38d386fc372b893714b42d0ee0add98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GNCXHVF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC49sEaL4m5pao2VczhbyhGYz0kWc1p7tII4cXVSCBwyQIhAJJHP3D1M5dXjQbunX%2BQnAPlMMRp2FbjhPaCb0oIkCAiKv8DCFUQABoMNjM3NDIzMTgzODA1Igx0uk0nmtSeOfd%2BaNAq3AOdifVNNpId3wA5pWeknFmfz1fZosAB2ZpTxiel0dUnnuI7OPvmdXny9flCU%2BVMni2nbIsqEsqh6Eik7jY7zCnPm7XFRwS8lrqYO1xfty8TidUGlZJaCJsvMIsqy6Ddkn6vihcxlamZS0jdq61CZaZ1WdnfGNOvbimhy5XbILTDYzd4Me5d69HvbUVtrZP0IBmS%2BrbG%2FhjZcFS9Rx9hLwFXE9HfiYSKAlhvdbrIHFnZhehaz7dICE4sJp7RtBK%2BXwybu3bbU5X7rUhAOZPTzeKu0k5vwS1Q0NnzGH4ELvsz0f9Lw995sjsQP6SuKb9sfOKIAufBU%2FfvrcIH4ZhZ820LbBXzMWQTpkOdQwPI83LNKcTaKJFbGImLPlCgqfM3Tvwikvw3NmniMCjKvgNgKQRIt5bshVHsmBNbO3yy4v3gs9xw0AkCnGF08Q1fEN5RiRf3MKd9eGX5STKCpz%2BEO1N0XveM%2FHiM7Q6fjbEJ74RmnS%2FXsSdw%2BIZlUdDOVf8XR17MtIFVb48BM1MfWtVkOMRWLLkW5G6VMyIt%2FiLpWif2g9T1LZ8uT%2B7I8EWt%2F7cJkH%2BPbi5CP0Fd%2BScC5x%2BNUXx7nJPNGdd6kfMRH5vRHYRG5%2F1W6thUwHx6GqWInTC%2Fr8nJBjqkAcopZZs5VfSZni4klRRy1b2NkKzopgibNJ3TNbgrw%2FfjlbtZkk3HF3%2BPWTvLemzvsg98pj3bcl3hGsiteIdTyNc7N2LmjiVC5Bwl0BqAMS2xlcYBTrHMz593744LRiGeuVqWQj4vlD8Few5aYwx4vjWo1vv1Ab2DtClJ2bghbZKSmOQk5OlP%2Frhcohby5G6J0oGAx8%2Bhx7Y%2FqCCcuUm0uqMgxvyF&X-Amz-Signature=f8e30ffaaf455598983e789bbd66e0221cc471124ebbc353d8cb60a4e978bc98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

