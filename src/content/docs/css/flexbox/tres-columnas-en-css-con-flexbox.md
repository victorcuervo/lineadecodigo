---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6VGVMG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo6sh75br3Fhj1d7c%2BuMLrgC8xiprc2X4lRiar5o0nXwIgZaLAiQ5Zzpa4lIU7yv4Owg7UQ2YQ3rsKmubH7UOvIIAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYgxbGgPGXJ06qZNircAwCrX3Bn2bwRaSPcFoxb26a23LGAYhqSai%2FlX%2BSZPwXOa3rRG7jSfKmxWQCjFeG2Iaxi711C%2BQ7ED%2B3ZLVzYL8rV86KLvho2iJCCEdLHNwR4svf5e3T1m%2Fz%2BYkQ6j7B26oDUrEbh5iDPvBlfOl97ilyQLkKhCELwU%2B8BTUk4U%2FBKQOO%2BKiM1ENveaimOHoqWHakaEDpaBXW6TdBrarFZZeNadxPu0YeOr%2FVogJGb0Lfgjh0wfG6LDmT3gTisMK7GUy9NIzAL1bPoWfRnMa9S6dIN8tyb6QBR%2B4xGoVKZtWH6JNmGQ7eNM9er85ieifG7QmcddMNfGfPvbQ%2FeNR33%2FsT8joDVXpaE9hKxNbVVw6I%2FD1y4wkfYpdUtkaQwWAsHqlnzwaRR0RiBHcY7lChtM2lcCSeKfOgBVk9XY4lViJ9MVRXRNAsij0yhmujGDjQhu8S7zMflRNsvEQi6hpVBK%2FvM2NVhnIxlA5UAt1WBG%2BeD%2Bm2tv2EKRm59B6DDNEF776op0cRgz7lU4RSPqbN8mtLeLbKfeFuZ3Cn71cfYVDWBym591fqU8ATXfJp1b1SpIxP4f%2BT%2Fbd4OInHqs0dg0aIU6%2BVgnpC8X8PznqA%2FL%2BG9Dmmw0dta8Z2beg6LML7E38kGOqUBEIPIFLInKQj%2BlDez7hgzdx48ZwYPC5fCYsTHwMVDskSyxvE98iQHZ79v1wsamr0GJvWZSWaB1Y0dx4lKob4GBWjH2qxvA8Awk9GPWUyWB%2BbvAtN7BArnVwDwlqve5FVYtucAsqw752qsGevFkaobr0Bwo1I2k88iw%2FS693s%2B7oFQcVP2G%2BlfiZmiIAgE23ZWH7OaTs7v%2BRL3IYVTSb%2BmdcUVOYvT&X-Amz-Signature=8ac3f562061af08bde2eb77533abf10cbdc63e0f477a05a64cb81d7f2f64c77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6VGVMG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo6sh75br3Fhj1d7c%2BuMLrgC8xiprc2X4lRiar5o0nXwIgZaLAiQ5Zzpa4lIU7yv4Owg7UQ2YQ3rsKmubH7UOvIIAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYgxbGgPGXJ06qZNircAwCrX3Bn2bwRaSPcFoxb26a23LGAYhqSai%2FlX%2BSZPwXOa3rRG7jSfKmxWQCjFeG2Iaxi711C%2BQ7ED%2B3ZLVzYL8rV86KLvho2iJCCEdLHNwR4svf5e3T1m%2Fz%2BYkQ6j7B26oDUrEbh5iDPvBlfOl97ilyQLkKhCELwU%2B8BTUk4U%2FBKQOO%2BKiM1ENveaimOHoqWHakaEDpaBXW6TdBrarFZZeNadxPu0YeOr%2FVogJGb0Lfgjh0wfG6LDmT3gTisMK7GUy9NIzAL1bPoWfRnMa9S6dIN8tyb6QBR%2B4xGoVKZtWH6JNmGQ7eNM9er85ieifG7QmcddMNfGfPvbQ%2FeNR33%2FsT8joDVXpaE9hKxNbVVw6I%2FD1y4wkfYpdUtkaQwWAsHqlnzwaRR0RiBHcY7lChtM2lcCSeKfOgBVk9XY4lViJ9MVRXRNAsij0yhmujGDjQhu8S7zMflRNsvEQi6hpVBK%2FvM2NVhnIxlA5UAt1WBG%2BeD%2Bm2tv2EKRm59B6DDNEF776op0cRgz7lU4RSPqbN8mtLeLbKfeFuZ3Cn71cfYVDWBym591fqU8ATXfJp1b1SpIxP4f%2BT%2Fbd4OInHqs0dg0aIU6%2BVgnpC8X8PznqA%2FL%2BG9Dmmw0dta8Z2beg6LML7E38kGOqUBEIPIFLInKQj%2BlDez7hgzdx48ZwYPC5fCYsTHwMVDskSyxvE98iQHZ79v1wsamr0GJvWZSWaB1Y0dx4lKob4GBWjH2qxvA8Awk9GPWUyWB%2BbvAtN7BArnVwDwlqve5FVYtucAsqw752qsGevFkaobr0Bwo1I2k88iw%2FS693s%2B7oFQcVP2G%2BlfiZmiIAgE23ZWH7OaTs7v%2BRL3IYVTSb%2BmdcUVOYvT&X-Amz-Signature=3f808b849fe10d9fcd0ecbb7efd9868bba10cfe8eea33b94e8f1baf37831ada0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

