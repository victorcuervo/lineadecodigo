---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAHLURS7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfeyLTDLywVU68iBD0A0JpQIctHgtbku%2BJq3286U5AcAiAj8yqf0LJyJI%2FeZ%2F3KgD50h9Do4lpp2ka%2BChHZkQ1n6yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIQvdJ%2B5PHYeQhUeZKtwDqIKPYdH4qtanPFWbv9blixl2s5R7KJ2tWBnpgvT%2FrRl4PZ79GKXKbsayuGw8BGM0WFveDQp7vEwXBOioE%2B0regFaQoC2vSklSUq5BLcNe%2FbKJ9B%2BG3Z0UBsPwJ8VGUX002FkWPp91vDvq6PKYXbXR5fKlL6KT1M1Y2Whg1Xy0rLNfp2p%2BYYEFX5txikiXUZo%2FwFzmU0pSI1pnuSqOGnQDZP948vZ8RHzoeEEwZFrQHCbPigwlvgTP%2FEU%2FWSwgL9GZRP5UxqlhVIQBye1TuEwMFDK%2Fdp23jT%2Fvg3z2JwY1f8Uk7CziTINSKgNKjuucBHofb1EKQRXLL4po50rxIhHyzDpLvfwOZe58bBA1vZoj8ubZpYy22pFUO7p%2BclsCJPbFvaOLgt2oPvX5Rbg6Iusa9LHak8q3EtoX29RlJRUBxvbMi0BrRK2HiaknmIuniOpFI4VLCyDLv9mUajL9MGwRHGUbaiSaHyR2Sg1kZRzVKmpK3umBbJ7jNXM445by1PuFD%2FvjOmRA1trWNQHWdLR1nQw6otLW8s23Y51dAZ4OjzPoQZmha5hv8XSTtNqoIsmvbpmANdwW75dHP4Grqary1Kq2qQ%2BT4lcfJ3%2BqHoTFQVP9TUlBdVyWZdO7r0wg%2F7SyQY6pgGmG9%2FsYOK4%2BFhYZvtG8%2BKlBzNmhViGXAkyuziozs0zT8fEFi2xOQHCviTUqebNM0LVHNf28JwIdCjJ%2Fb728T9%2FPW%2B0V%2FoFhsQBZnqjikuc3yphrzrPp1gcrwf9wNQlZBox8CmOvYciIH7xy4anucNka1owwU9c3e%2BRhGhYJ1JtsijbILNXUYBR8e8hQnBhqRLbhRHAEoBKVvmCh7ErEU0bSJ%2FEUxtP&X-Amz-Signature=663795e1d882423518e2c8808f14c7bd79bc2ac89c6eb2312806e1e91246f527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAHLURS7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfeyLTDLywVU68iBD0A0JpQIctHgtbku%2BJq3286U5AcAiAj8yqf0LJyJI%2FeZ%2F3KgD50h9Do4lpp2ka%2BChHZkQ1n6yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIQvdJ%2B5PHYeQhUeZKtwDqIKPYdH4qtanPFWbv9blixl2s5R7KJ2tWBnpgvT%2FrRl4PZ79GKXKbsayuGw8BGM0WFveDQp7vEwXBOioE%2B0regFaQoC2vSklSUq5BLcNe%2FbKJ9B%2BG3Z0UBsPwJ8VGUX002FkWPp91vDvq6PKYXbXR5fKlL6KT1M1Y2Whg1Xy0rLNfp2p%2BYYEFX5txikiXUZo%2FwFzmU0pSI1pnuSqOGnQDZP948vZ8RHzoeEEwZFrQHCbPigwlvgTP%2FEU%2FWSwgL9GZRP5UxqlhVIQBye1TuEwMFDK%2Fdp23jT%2Fvg3z2JwY1f8Uk7CziTINSKgNKjuucBHofb1EKQRXLL4po50rxIhHyzDpLvfwOZe58bBA1vZoj8ubZpYy22pFUO7p%2BclsCJPbFvaOLgt2oPvX5Rbg6Iusa9LHak8q3EtoX29RlJRUBxvbMi0BrRK2HiaknmIuniOpFI4VLCyDLv9mUajL9MGwRHGUbaiSaHyR2Sg1kZRzVKmpK3umBbJ7jNXM445by1PuFD%2FvjOmRA1trWNQHWdLR1nQw6otLW8s23Y51dAZ4OjzPoQZmha5hv8XSTtNqoIsmvbpmANdwW75dHP4Grqary1Kq2qQ%2BT4lcfJ3%2BqHoTFQVP9TUlBdVyWZdO7r0wg%2F7SyQY6pgGmG9%2FsYOK4%2BFhYZvtG8%2BKlBzNmhViGXAkyuziozs0zT8fEFi2xOQHCviTUqebNM0LVHNf28JwIdCjJ%2Fb728T9%2FPW%2B0V%2FoFhsQBZnqjikuc3yphrzrPp1gcrwf9wNQlZBox8CmOvYciIH7xy4anucNka1owwU9c3e%2BRhGhYJ1JtsijbILNXUYBR8e8hQnBhqRLbhRHAEoBKVvmCh7ErEU0bSJ%2FEUxtP&X-Amz-Signature=5b1f66bd8ca27e566ea79ca1b5de0350b74bede1c200473c1cab1b7c76716ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

