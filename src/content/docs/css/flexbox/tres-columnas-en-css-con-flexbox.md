---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQX7ZNJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEukiq1jDthpdc0W%2FzyHng%2FYI3yQxFZOJoe8nMLz%2BPSpAiEA3joTKnsXtl2%2Fh1KoUI8OarPG%2FvfUx1nSTthCoMRlULAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPZq2jq%2BvmI5GE8YEyrcA%2FTtMx7JyAhLirWK2xfzJzOxhubDGEemBJJ1wiOUAXuqh2XyH6JnBSi3fzXMesWaDzH0l22NtAhEJg%2BvKk7sW0LXpzVTmLdyBQnwfz1HW8GuuGvZwCZRnMb2Uxld6IjzJX5LeL5X5hlKXDJo40tdim87%2F6zQf%2FCV%2FsyMO40qtlcU%2FgL5fPQ3wgpKIbY49k6nYNoEMERnXKkgb%2FuNGJmP%2FZLofhu5055coTOzmHeZbZZxe4UCRHB206Yds9%2FYcquGIoGIwnqObXkk15Y7qypKn7FVtHzaNmQJBgfGDgAeKdPf22c0TSVXz2TAtkhgyOX7ycbkpgP0S4II%2BQw76pF0tAt5vx1b2vgKGf%2F%2FYJqkaPQh7DCAbEY6MllRz1iMOnTVoiehWmeT%2BgdTBbWQRaMJFHyaz1q8sjsNqSQL4cyR57x3l9p4yMdqclR0p8njRTB22WYFqcTOdktz%2B9ex3rGYmF40jdGZFjmoYqRIjiRf873QPH4%2BtbJOcrSS2vAjM0l4FycscHQ4yzkGCqsoj5x90UTSP812VHW9y%2BASwSdtEw62y0o4T1nGe0Ar4dTmdbzbCeotCB8yjSiqvPd9LR8UGOPy1r0Gdnokjv9dIrVOSaaAE4eliuzu6t0SCGsIMObD0ckGOqUBJIZQ5dBPvGQD4HtiljxoDeNP2zrjyrINRCc2WQqqvWdf6IChKSw1zChsZUKL7Vpy16U%2Bhb31g9Hl1k4uTpBDKWaQ88kBydlg2vqK%2B96nGGAwQkHINlB9%2B7T9Q%2FH56IDzKnFSupI45veEGd4fqul3HSiUnYvKZ6p%2Fuagw0A%2BsNMFzXAEgK%2B4yi%2FIi1BtFnF30J7OJWgtiLaA8YZzJsnFc0CA3mWlw&X-Amz-Signature=fdbda8754e467f170a335d2c2f25806be682adb32586e6b49d435e3e1613fc5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQX7ZNJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEukiq1jDthpdc0W%2FzyHng%2FYI3yQxFZOJoe8nMLz%2BPSpAiEA3joTKnsXtl2%2Fh1KoUI8OarPG%2FvfUx1nSTthCoMRlULAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPZq2jq%2BvmI5GE8YEyrcA%2FTtMx7JyAhLirWK2xfzJzOxhubDGEemBJJ1wiOUAXuqh2XyH6JnBSi3fzXMesWaDzH0l22NtAhEJg%2BvKk7sW0LXpzVTmLdyBQnwfz1HW8GuuGvZwCZRnMb2Uxld6IjzJX5LeL5X5hlKXDJo40tdim87%2F6zQf%2FCV%2FsyMO40qtlcU%2FgL5fPQ3wgpKIbY49k6nYNoEMERnXKkgb%2FuNGJmP%2FZLofhu5055coTOzmHeZbZZxe4UCRHB206Yds9%2FYcquGIoGIwnqObXkk15Y7qypKn7FVtHzaNmQJBgfGDgAeKdPf22c0TSVXz2TAtkhgyOX7ycbkpgP0S4II%2BQw76pF0tAt5vx1b2vgKGf%2F%2FYJqkaPQh7DCAbEY6MllRz1iMOnTVoiehWmeT%2BgdTBbWQRaMJFHyaz1q8sjsNqSQL4cyR57x3l9p4yMdqclR0p8njRTB22WYFqcTOdktz%2B9ex3rGYmF40jdGZFjmoYqRIjiRf873QPH4%2BtbJOcrSS2vAjM0l4FycscHQ4yzkGCqsoj5x90UTSP812VHW9y%2BASwSdtEw62y0o4T1nGe0Ar4dTmdbzbCeotCB8yjSiqvPd9LR8UGOPy1r0Gdnokjv9dIrVOSaaAE4eliuzu6t0SCGsIMObD0ckGOqUBJIZQ5dBPvGQD4HtiljxoDeNP2zrjyrINRCc2WQqqvWdf6IChKSw1zChsZUKL7Vpy16U%2Bhb31g9Hl1k4uTpBDKWaQ88kBydlg2vqK%2B96nGGAwQkHINlB9%2B7T9Q%2FH56IDzKnFSupI45veEGd4fqul3HSiUnYvKZ6p%2Fuagw0A%2BsNMFzXAEgK%2B4yi%2FIi1BtFnF30J7OJWgtiLaA8YZzJsnFc0CA3mWlw&X-Amz-Signature=77532a3f75c61452f5cd99f62e5d38cf4be1086298b36352a82fed0ed2a871d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

