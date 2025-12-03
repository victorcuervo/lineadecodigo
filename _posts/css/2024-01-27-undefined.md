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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6VCBB7H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCxTsid090cr3fXTBvFzbyb8AuvJ0SzgvmRIEZeNt2hsAIgQmTapdAT74mJ%2FbY9rC8NoM%2FR6bXq4DU%2BQAZdhxJtNqAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDa8zLj4B5wbTxYAdSrcA5TqDZ1jitg11Cs5Ku%2BNEBQdymNeQ4cGmyLqJ7MzuuTvZmFoEPymVJb%2B5HWNjRo6tOzSOZyUAjfbbEdpwFMy3y7oVD010GE14SO9MerWPgmzNlf3MyHMpEtujSeINVMgrO60H4DzKVwtZcJNuZCRejkmzUkfdDlJ2eYBF38gMQUbIBmg0iHUUof3Y29gkdB3kFcCZ5Xsr%2FTO5apwY14Izsilv6Wig1aJkHQyHQNJUneWOa7BAmuhyiLxbMZnhvfW5zDb5852blqSZfmcfwR10W4%2ByYVP38ZcKd7b55%2FNSD915j3OllWdLj1TCzulQnTE%2BU%2B8XREGSA8g9Qyv1hOInZb6mVEHugg%2FlnRMzTWhhVV0wGwVDhBrFDpvPQ5a7grdFET1112JdUy7hoZf2KIMeKhmvHbQ46pkKqjDbEGOPdOcLxGoWAmem%2FIJGkBo754uICKIdI1guAscdfrNirqygAkBPyefBqQ%2BkIyLi4N2FkHsKfG%2Fiq2nDnlQUQZlHjHybdl0NN%2BkUDs5QE0MczFVxuzs%2FkAO0nhIw4H9AENRoRnSHdH15s1HZGkv%2BCFs1hNDvveOC6fW81RTOlqwTbxf0iAU1YHpdamZrydor%2FuYFZ4otfKq%2BOkx3LeIjd9yMLn2v8kGOqUBgTheZVDSHY721IHklgUIvoVvb6CrIFKrFSXzK%2Be4OcivE1CEenO8cxKTAad%2FCc%2BV6vpNbNbM34XGPS7QoKNFrWKFIHlZb6Qa%2FpYePcumeJVPYw5K90njkqOjKwAp2cmOVytqcNMWnBuNYPYryt9UToD4YaTcgVXfJm5I8pLMC4eQkQqIX%2BXKkMpovF21pY8eyLA%2Fq1MBPmjmWvVfLdD2gg7Lxj8G&X-Amz-Signature=47a2481a0feedef839ceb49d460d853bffe51440c73ad5730a9a7397d4df6502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6VCBB7H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCxTsid090cr3fXTBvFzbyb8AuvJ0SzgvmRIEZeNt2hsAIgQmTapdAT74mJ%2FbY9rC8NoM%2FR6bXq4DU%2BQAZdhxJtNqAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDa8zLj4B5wbTxYAdSrcA5TqDZ1jitg11Cs5Ku%2BNEBQdymNeQ4cGmyLqJ7MzuuTvZmFoEPymVJb%2B5HWNjRo6tOzSOZyUAjfbbEdpwFMy3y7oVD010GE14SO9MerWPgmzNlf3MyHMpEtujSeINVMgrO60H4DzKVwtZcJNuZCRejkmzUkfdDlJ2eYBF38gMQUbIBmg0iHUUof3Y29gkdB3kFcCZ5Xsr%2FTO5apwY14Izsilv6Wig1aJkHQyHQNJUneWOa7BAmuhyiLxbMZnhvfW5zDb5852blqSZfmcfwR10W4%2ByYVP38ZcKd7b55%2FNSD915j3OllWdLj1TCzulQnTE%2BU%2B8XREGSA8g9Qyv1hOInZb6mVEHugg%2FlnRMzTWhhVV0wGwVDhBrFDpvPQ5a7grdFET1112JdUy7hoZf2KIMeKhmvHbQ46pkKqjDbEGOPdOcLxGoWAmem%2FIJGkBo754uICKIdI1guAscdfrNirqygAkBPyefBqQ%2BkIyLi4N2FkHsKfG%2Fiq2nDnlQUQZlHjHybdl0NN%2BkUDs5QE0MczFVxuzs%2FkAO0nhIw4H9AENRoRnSHdH15s1HZGkv%2BCFs1hNDvveOC6fW81RTOlqwTbxf0iAU1YHpdamZrydor%2FuYFZ4otfKq%2BOkx3LeIjd9yMLn2v8kGOqUBgTheZVDSHY721IHklgUIvoVvb6CrIFKrFSXzK%2Be4OcivE1CEenO8cxKTAad%2FCc%2BV6vpNbNbM34XGPS7QoKNFrWKFIHlZb6Qa%2FpYePcumeJVPYw5K90njkqOjKwAp2cmOVytqcNMWnBuNYPYryt9UToD4YaTcgVXfJm5I8pLMC4eQkQqIX%2BXKkMpovF21pY8eyLA%2Fq1MBPmjmWvVfLdD2gg7Lxj8G&X-Amz-Signature=b623d6e2610d56f73d169d26364c50128cb55e95e169fd0387fbe29f77452995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

