---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRMBBM6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAg3nfOTWelt743LyFWGyslJGwiCFHvDjciGHgbmheQAiBMOkW%2FyjEH0NXkcj9sklAYmj2ykd%2FcYi7BDlBxzcf9jir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMKmG%2FNaQV5gybYi2ZKtwDRUTCs3gcWRlmAddDR5yshKA8AfhPRDxurAQAjfj96c6SYcMaSA0WXOKrZbzXNLnRkU6IBoz64cgbUinQ2RXQuXOOVETIdwovsgR%2BDTdy%2F5Pa59xmoMpixYe7ov3JFzqPBuWizfJ0uGp2tXMbvpzjqahpZ66x8B%2B075CUYIJrUk0BoxOBx5UgCIRtGPavTr5uTOc1DkaoPaubQkEj5nBJrC3GLscnOW48yP%2BphJj2FrQ9xIBqjhk9hiqPZusPZf3bDMEXrkzPQzKQRaJoKIzK2jWUKzKkZsjjI6U4VEBghcv%2BEb5nlRBJ1hEZ%2Bz8iMZUv0b3BvEkGlfgAKeKvo2E64SJH960KStH%2Fb%2FqHHKvreAW8qN2weBYOoB9FWqdHYagK%2BSMPNq2%2BEIj8OpT8jzPad6gLQBZ1rPu2xt9aaxz9JrBN3J1osN7A6VWi4ligpiKIfJzABTnS6Rqb3u2kVFYm6rLEiKtgfb2k21kUEzCDrJLTIJ1bqbXbw3h5dDbKgvgFDicUGsqHUyyrgW%2FTrEz%2Fdhkc2gAXbC3UMiDnEscSdo7zuRjUlc0hXq89UCAwZca%2BEfUmYUZ7ceHniRpLtmpYg5AbcZIkgE8IfoaygT0td%2F3G4v2gPzX5q7QLjnwwnfrGyQY6pgHzyXrt9tztTvx%2FJjDDZ6xg%2F8ofY0%2FpX%2FAx8KjnMg%2Fi%2FlAZ0Of9L%2FlMl8e9VCJrTXL27vzu4sCB55aVt%2Bp3u%2FAcHCDrcd8LFaaLlD9a9RsqLARk3SzBFylZxy3PrgM09d%2FfUSP0nq84K%2Bim%2FyzDqTiv0rJ0jYROq%2BaPO6QON8G6lGkaWaVDVOJClBEm31y4PFvNN7jHPIlxnq4H7FR9w9zdPlIPaLqL&X-Amz-Signature=ad202cd596a2c75829e097a1d37135388679362c0064c96425741a6c9ce22ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRMBBM6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAg3nfOTWelt743LyFWGyslJGwiCFHvDjciGHgbmheQAiBMOkW%2FyjEH0NXkcj9sklAYmj2ykd%2FcYi7BDlBxzcf9jir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMKmG%2FNaQV5gybYi2ZKtwDRUTCs3gcWRlmAddDR5yshKA8AfhPRDxurAQAjfj96c6SYcMaSA0WXOKrZbzXNLnRkU6IBoz64cgbUinQ2RXQuXOOVETIdwovsgR%2BDTdy%2F5Pa59xmoMpixYe7ov3JFzqPBuWizfJ0uGp2tXMbvpzjqahpZ66x8B%2B075CUYIJrUk0BoxOBx5UgCIRtGPavTr5uTOc1DkaoPaubQkEj5nBJrC3GLscnOW48yP%2BphJj2FrQ9xIBqjhk9hiqPZusPZf3bDMEXrkzPQzKQRaJoKIzK2jWUKzKkZsjjI6U4VEBghcv%2BEb5nlRBJ1hEZ%2Bz8iMZUv0b3BvEkGlfgAKeKvo2E64SJH960KStH%2Fb%2FqHHKvreAW8qN2weBYOoB9FWqdHYagK%2BSMPNq2%2BEIj8OpT8jzPad6gLQBZ1rPu2xt9aaxz9JrBN3J1osN7A6VWi4ligpiKIfJzABTnS6Rqb3u2kVFYm6rLEiKtgfb2k21kUEzCDrJLTIJ1bqbXbw3h5dDbKgvgFDicUGsqHUyyrgW%2FTrEz%2Fdhkc2gAXbC3UMiDnEscSdo7zuRjUlc0hXq89UCAwZca%2BEfUmYUZ7ceHniRpLtmpYg5AbcZIkgE8IfoaygT0td%2F3G4v2gPzX5q7QLjnwwnfrGyQY6pgHzyXrt9tztTvx%2FJjDDZ6xg%2F8ofY0%2FpX%2FAx8KjnMg%2Fi%2FlAZ0Of9L%2FlMl8e9VCJrTXL27vzu4sCB55aVt%2Bp3u%2FAcHCDrcd8LFaaLlD9a9RsqLARk3SzBFylZxy3PrgM09d%2FfUSP0nq84K%2Bim%2FyzDqTiv0rJ0jYROq%2BaPO6QON8G6lGkaWaVDVOJClBEm31y4PFvNN7jHPIlxnq4H7FR9w9zdPlIPaLqL&X-Amz-Signature=482da46e2270a427cf51bb779476b0535fe0caa0ec4c8c4c3b4411bce82fd1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

