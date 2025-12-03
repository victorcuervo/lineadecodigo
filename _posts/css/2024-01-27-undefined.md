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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPHWQ27%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDHkyz8ig%2BGM%2Fjnv%2FiwL%2FlsPXRSzcwKO94bJUlb64Id3wIgVlJ1aTE3m4vj2Lklk4lSHi9XO7p%2BHS6INQ2niYc7yqoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHHJdmDlPPZmBbqdpyrcAy3qcM7SJN2Gi5eLCeNo61nsCEhOQLnZRmPgjqxepNVmudAafISdEjnK%2Brie74%2FujmX%2BCu651GC9O5edvSXSk6YHmHxKRyG7oFy3XGAHJbXmVUn%2BcfpQUhWsTNfRhfz5tf2dzpjrZRyerE2dcIaLpbLNjSQW%2BSu%2BJfrreGR1crIZm5qr2HuQ2YOxRSNzQNWXp9qEqy8cVBtsMeW0mpcen%2F1IKhW%2FLlywJZXONkAQB8WzctYqdYco%2BVkE9Ja3uUwNdIaJ5iNAqXIeFgFMVm1RB1zRnUREs7xd2tRAIIB2U4vM7fGNDifepOIIpeWtB94wZqDv4p7IlfPYc5A3bfLAKtb3EfmzKuAXooyJQo9tCH507RYDjnI5GFl4JM3QXYmNnzB6xfTwZhs1u4SGjrJZPNZOGKspjAq6YSmg%2B0aE1BpLiUgbVaNogc%2BDhobHgkHy8%2Fp4uQjCDtYxZQQEi4nerokcg7gjC1qqf68XSIYgkggE9zgtrdHGGi6MQe4rbOMdpVxeRRIAPwyJhkjthQzEfT97gOj2BLEiA6dzkZH2Ek08VPSj%2BPo6IkrOS%2BKpB0%2FYklEL2Zcz6ppbFPz1Zgmk9ztDJQ2L%2F2Bve7IqIekN52QzVHQGDWm%2BQft19xpcMP2UvskGOqUB1%2BBD9gCnrIcROXtW1%2FlHd5O21cx9JAWrZ2f2EJFadtBEdlA%2FE%2Bu69LYyEaxpLwwL50rtPppZPFGq0xi1qR31hil3UvRDMDBn82YUPcmoKkF7kYn08TgM4%2BgGSMSAwFeRH9YsCFEJOsEC%2B1AOcSQZOQCjuJS%2F2QuPc6SZ73SM%2BJ3H4alYErm9QcMUqlWK0Bl9oHghEocOk7Wyap%2B3YNzFnLOw1Ry0&X-Amz-Signature=2e9e130e9e8c354eda22b598462384ee140edec993b9f173f49f62225efcc81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPHWQ27%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDHkyz8ig%2BGM%2Fjnv%2FiwL%2FlsPXRSzcwKO94bJUlb64Id3wIgVlJ1aTE3m4vj2Lklk4lSHi9XO7p%2BHS6INQ2niYc7yqoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHHJdmDlPPZmBbqdpyrcAy3qcM7SJN2Gi5eLCeNo61nsCEhOQLnZRmPgjqxepNVmudAafISdEjnK%2Brie74%2FujmX%2BCu651GC9O5edvSXSk6YHmHxKRyG7oFy3XGAHJbXmVUn%2BcfpQUhWsTNfRhfz5tf2dzpjrZRyerE2dcIaLpbLNjSQW%2BSu%2BJfrreGR1crIZm5qr2HuQ2YOxRSNzQNWXp9qEqy8cVBtsMeW0mpcen%2F1IKhW%2FLlywJZXONkAQB8WzctYqdYco%2BVkE9Ja3uUwNdIaJ5iNAqXIeFgFMVm1RB1zRnUREs7xd2tRAIIB2U4vM7fGNDifepOIIpeWtB94wZqDv4p7IlfPYc5A3bfLAKtb3EfmzKuAXooyJQo9tCH507RYDjnI5GFl4JM3QXYmNnzB6xfTwZhs1u4SGjrJZPNZOGKspjAq6YSmg%2B0aE1BpLiUgbVaNogc%2BDhobHgkHy8%2Fp4uQjCDtYxZQQEi4nerokcg7gjC1qqf68XSIYgkggE9zgtrdHGGi6MQe4rbOMdpVxeRRIAPwyJhkjthQzEfT97gOj2BLEiA6dzkZH2Ek08VPSj%2BPo6IkrOS%2BKpB0%2FYklEL2Zcz6ppbFPz1Zgmk9ztDJQ2L%2F2Bve7IqIekN52QzVHQGDWm%2BQft19xpcMP2UvskGOqUB1%2BBD9gCnrIcROXtW1%2FlHd5O21cx9JAWrZ2f2EJFadtBEdlA%2FE%2Bu69LYyEaxpLwwL50rtPppZPFGq0xi1qR31hil3UvRDMDBn82YUPcmoKkF7kYn08TgM4%2BgGSMSAwFeRH9YsCFEJOsEC%2B1AOcSQZOQCjuJS%2F2QuPc6SZ73SM%2BJ3H4alYErm9QcMUqlWK0Bl9oHghEocOk7Wyap%2B3YNzFnLOw1Ry0&X-Amz-Signature=ccb0946eb75becbd91bff238e466f09f14287ea3534a7c5ce5bbb4fd81bb464c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

