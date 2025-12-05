---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYAFDJV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSftDMqycO%2FzffVWk42tzrUdEQj0ABS9yvhLAmkQyECgIgXOvVe18PMWoRUxJBCkm%2Fo4N4PXtFBZg%2FoJ3hZE03hNkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKUlUJe0I143LJFzyyrcA%2BvQmu55ToiB%2FWanoqeACGccyyVN0DDAaNTKekiahO4PV%2F8xjM4x7EUh%2B1fFlS579lNk%2BSCiAQnwgZaYCDDbNOTc0nmdiPcMxJUY8j4p3KOZ5WoHkDfa76kk1fk1vYfjgkD2JL4dVqYDydr8ijKRmfDlgr6nmZFrGdLETawOY91XJaBGO2G%2B6hLlMbl%2BPPrS%2BCHMxNKbTxxyz%2Bvp4fLN6pC%2Bh0lThXEty6ZrgfV4%2FjQ7B9WC7k6Zrz4spar5FanCY0jm0IKbPiKDmchG%2F9B%2B3WNj8v2OwU6dYhai8fMy58acwQs%2BmmV2P3bWmslye6pkSuTtNpYAmBggF34O3HJjRPCGFKMG%2FCJ%2FJ4u0VD2aQoWDLYjAfUbc2nIy0CwvNW0LGVd87G%2F%2FB78%2BloOA0uTx8%2BGKKUAxJl%2BO9m%2FThMPoNSjvDSMzyMFdcpjvnFvb%2FgTQyCK69KNLWOMKxUZ%2B0OizeRJI%2BuwGEFrMc22qYFI7R%2BpMI%2BJ8m35WRsakdMpXIduor9B6TT%2F1DDGJJur%2F4m3ry2kluytuue8ivSmlvBIyuCNzOiN6cIg3XIHyv7DfK%2BbqMqLbGCLDcyCHHnBiYPhvTpV%2BZGYQ4b%2B%2FE3%2BYN2lTxlqAWfDDM0NfWA3ziiMNMOOmyckGOqUB7hoqzozJ8V5O15dyDYSIR2ng28%2FXniRFdmoXO65GmaT3lBO4VGUyTtBlgn7gcIMO81ga6W12IJnbr%2Fp%2B3uwOYhnyWqnOQFnpWzuiGN0AxpUZvT9At4k%2BWkG8%2Febt94UGTUS9dWekUAtWgNwNYxLCeyJpyAs86Tv2DpAgZ2f%2FB6KoM96xKFmJvvoAotRBfFZxqEEl8v37njhpkjINIDjqfEIwJOkG&X-Amz-Signature=a234dea5410461dfcc580ce44cf7e605aefa7599236478114e16fb9176c8f6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYAFDJV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSftDMqycO%2FzffVWk42tzrUdEQj0ABS9yvhLAmkQyECgIgXOvVe18PMWoRUxJBCkm%2Fo4N4PXtFBZg%2FoJ3hZE03hNkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKUlUJe0I143LJFzyyrcA%2BvQmu55ToiB%2FWanoqeACGccyyVN0DDAaNTKekiahO4PV%2F8xjM4x7EUh%2B1fFlS579lNk%2BSCiAQnwgZaYCDDbNOTc0nmdiPcMxJUY8j4p3KOZ5WoHkDfa76kk1fk1vYfjgkD2JL4dVqYDydr8ijKRmfDlgr6nmZFrGdLETawOY91XJaBGO2G%2B6hLlMbl%2BPPrS%2BCHMxNKbTxxyz%2Bvp4fLN6pC%2Bh0lThXEty6ZrgfV4%2FjQ7B9WC7k6Zrz4spar5FanCY0jm0IKbPiKDmchG%2F9B%2B3WNj8v2OwU6dYhai8fMy58acwQs%2BmmV2P3bWmslye6pkSuTtNpYAmBggF34O3HJjRPCGFKMG%2FCJ%2FJ4u0VD2aQoWDLYjAfUbc2nIy0CwvNW0LGVd87G%2F%2FB78%2BloOA0uTx8%2BGKKUAxJl%2BO9m%2FThMPoNSjvDSMzyMFdcpjvnFvb%2FgTQyCK69KNLWOMKxUZ%2B0OizeRJI%2BuwGEFrMc22qYFI7R%2BpMI%2BJ8m35WRsakdMpXIduor9B6TT%2F1DDGJJur%2F4m3ry2kluytuue8ivSmlvBIyuCNzOiN6cIg3XIHyv7DfK%2BbqMqLbGCLDcyCHHnBiYPhvTpV%2BZGYQ4b%2B%2FE3%2BYN2lTxlqAWfDDM0NfWA3ziiMNMOOmyckGOqUB7hoqzozJ8V5O15dyDYSIR2ng28%2FXniRFdmoXO65GmaT3lBO4VGUyTtBlgn7gcIMO81ga6W12IJnbr%2Fp%2B3uwOYhnyWqnOQFnpWzuiGN0AxpUZvT9At4k%2BWkG8%2Febt94UGTUS9dWekUAtWgNwNYxLCeyJpyAs86Tv2DpAgZ2f%2FB6KoM96xKFmJvvoAotRBfFZxqEEl8v37njhpkjINIDjqfEIwJOkG&X-Amz-Signature=51d793a2362aca9760615b980c04447fa21f1190ad66bd42450446c81628e1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

