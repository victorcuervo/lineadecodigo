---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNDHM24%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFq%2FvhFptXc%2FdTr8g2IviFzwfP%2BEvBkav3vfg%2FRMAwQsAiBnJF1JXmLMO9puvMKvHG1z0g%2BMZXYi2Bc%2FPy9f0b%2BEgSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM1qr%2BRZjr7udlbNH%2FKtwDEzw0lFhL5a2Vris3q62Ai5a4zkKy5ywetxEvKy%2FXwMTbxBRHUXQVa5DJV%2BLuLq0VEgA43VXeTrhIiZHCtOe1OSIjHTjGRgU8qwfzhCij03frbubTE1MtziVl6kmZDYom%2FJN%2BgkcTy3Gp1ceUIAouOIVyr4XcVhLftJacPb%2FQcATLh24kHMacZpHiui%2Ff6QSrNZ9OWbOqRDsY0b49f1Q02O4PSAkXQxqBRrUcWSmit3yajfmiE316BpUZynfxoZd8Uy1Az7rnX6p5WyOU6WYTkb9pBcV2uEDnZu7x15WMx4RCJc0qt1FWYhnA1eUV%2Fm60ztOv5DWn%2BsKW0qTC%2F%2FW1xnm9%2B2yzrFA8SUPzHI0VgzElcrY3waZZQzgyPnHrxeKQZ3x561RVIkwgZ7PuRZCpIOS6lS3Hb9pvuAHZEs8MM0vdbCok16eqht%2B0TgOr34126cT70jZ5CZ1UC%2FdOBmloqGXww%2B0KDo%2B0judLeu8V36ZniZS6qD2M8DMjMfIhXqAqkSWeEL9YeKyHxXhpbksAfsyCbzmhftHB4m6ccB9DHAXt084ulB3H28CgUWEhnXb6z9Dqghhl8DdDhRzJ1T88Gb8zA7aUz5tabBKRErND8V5XtjPnNLi830LlMRYwsJLCyQY6pgFTzybZ9RlvE96rUT0k8K6lITGhDIo4dI%2FmL6D368XMqlqnqzbt%2F6tRFkpn9NokoceZ0yCGivb4tq%2B33PWuIhkOpgGe0CIC6tyQGAVlgrtsPQFjNqhW1lhFkrCXqOnH6A2fE4ZtsOByu%2BZ6uME%2BLV2Hul8tdPaR66rqQ2Izx5MAgmcdpHL2fKZeLFjQbxDyQxiH9FyST43mcKmdt7La4dUmgaYtCbTk&X-Amz-Signature=24742e5ade3c017621dcf4e0d3c925b911fe81e46d78c0699056bf756f4b1b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNDHM24%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFq%2FvhFptXc%2FdTr8g2IviFzwfP%2BEvBkav3vfg%2FRMAwQsAiBnJF1JXmLMO9puvMKvHG1z0g%2BMZXYi2Bc%2FPy9f0b%2BEgSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM1qr%2BRZjr7udlbNH%2FKtwDEzw0lFhL5a2Vris3q62Ai5a4zkKy5ywetxEvKy%2FXwMTbxBRHUXQVa5DJV%2BLuLq0VEgA43VXeTrhIiZHCtOe1OSIjHTjGRgU8qwfzhCij03frbubTE1MtziVl6kmZDYom%2FJN%2BgkcTy3Gp1ceUIAouOIVyr4XcVhLftJacPb%2FQcATLh24kHMacZpHiui%2Ff6QSrNZ9OWbOqRDsY0b49f1Q02O4PSAkXQxqBRrUcWSmit3yajfmiE316BpUZynfxoZd8Uy1Az7rnX6p5WyOU6WYTkb9pBcV2uEDnZu7x15WMx4RCJc0qt1FWYhnA1eUV%2Fm60ztOv5DWn%2BsKW0qTC%2F%2FW1xnm9%2B2yzrFA8SUPzHI0VgzElcrY3waZZQzgyPnHrxeKQZ3x561RVIkwgZ7PuRZCpIOS6lS3Hb9pvuAHZEs8MM0vdbCok16eqht%2B0TgOr34126cT70jZ5CZ1UC%2FdOBmloqGXww%2B0KDo%2B0judLeu8V36ZniZS6qD2M8DMjMfIhXqAqkSWeEL9YeKyHxXhpbksAfsyCbzmhftHB4m6ccB9DHAXt084ulB3H28CgUWEhnXb6z9Dqghhl8DdDhRzJ1T88Gb8zA7aUz5tabBKRErND8V5XtjPnNLi830LlMRYwsJLCyQY6pgFTzybZ9RlvE96rUT0k8K6lITGhDIo4dI%2FmL6D368XMqlqnqzbt%2F6tRFkpn9NokoceZ0yCGivb4tq%2B33PWuIhkOpgGe0CIC6tyQGAVlgrtsPQFjNqhW1lhFkrCXqOnH6A2fE4ZtsOByu%2BZ6uME%2BLV2Hul8tdPaR66rqQ2Izx5MAgmcdpHL2fKZeLFjQbxDyQxiH9FyST43mcKmdt7La4dUmgaYtCbTk&X-Amz-Signature=880d1e025335ca79efc42f4828e73003a840381dcc558a186aa95d8ae20d420b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

