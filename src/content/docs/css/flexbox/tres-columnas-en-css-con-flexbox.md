---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMMZFMUJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fwd%2FWzAZHddeBpDHAsBQmnBtz67c%2BylEnj7kAJUhfvAiEApRBbth3yZBxd4sjv4mxwUKoSyCwCdsdUQOoT19%2BBhssqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzB5DmIwdlU4BneGCrcA2C1OzIPr9ROC8Iy8sO0cIsSpXz37F2uT68TN7LtgUMGoeirBXhmmMzlxbwbsZmXZaqcJ6jJiFafM1vQRWXIfajS%2FgSkdlCTuetGqDehzKJ4YMukd1XYHpjV92c8V8k74xZTgVsKjs4VXIt8mNC7KzLiVVVjVKnu6II9Kp7tEykY4fsQ%2FU%2Bn4rgfGDhzhvy7I3EjrsPB6s%2FWiTOUq%2FPWo8DirNtFplMOsNY3CCRAbB6n6snJMU8qwv1r4jcBZVkQ2z2KkAgzWNVSpLAScDlB5uoQFSfgBJ%2BV52MlAhxtikAJ7nXizmHLyE5BqQ3BPmBBqbT6nz%2FbXg%2B0rN%2Fjey2iIofraK1jubAdm49nn5irU95NvF1iC%2FkbONNz%2FG0kkJLIMm%2B0ADALSVpHGnAioJV%2Fx2KDrphSzuhkfw0GWAhyycLYdHCV1b0EpEESCMzkR0YM%2BEvjeak0Eb1dlwXCeQEQ4DvfJRQSLZ1BD3qLCALScpqNRtN5B8iqx0TLxJ46JbVQ7tqen9XLs9vVY1ILuqZ%2FEcW0C1nzo1IB2%2Fd93stD2qj2ftHzTKNZQCjUj7lKZkbYBA7tHGXaWZfQ4uvmqYA8j8KlQg0e8urFF6etx7jkKvJhWl7f9ihublKS0RqUMIGk38kGOqUBSFlORJlbb4G31K3Zp5EkkCrTfJEGkRoeCIvdQo5OiZw8X3imPeFw9n8JcS8drSysuZjgsjap%2FJ7755t4Wh8PouseMPhskVxrKx9tMIYD78liDFgknoK%2BmYB%2B8e%2Fs1JLGTXaogaTLghVtk60877taMlLttGV0cuQ4RparXdiizRYNRZ0TLu7fLC2ZpAjzljifgH8jrW4SYqlo%2BrlZcRh1baJJcGuN&X-Amz-Signature=0c58898187bb2b01caa374579d7701a50fb1a2d77164c51b94ee63ad2d2cd838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMMZFMUJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fwd%2FWzAZHddeBpDHAsBQmnBtz67c%2BylEnj7kAJUhfvAiEApRBbth3yZBxd4sjv4mxwUKoSyCwCdsdUQOoT19%2BBhssqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzB5DmIwdlU4BneGCrcA2C1OzIPr9ROC8Iy8sO0cIsSpXz37F2uT68TN7LtgUMGoeirBXhmmMzlxbwbsZmXZaqcJ6jJiFafM1vQRWXIfajS%2FgSkdlCTuetGqDehzKJ4YMukd1XYHpjV92c8V8k74xZTgVsKjs4VXIt8mNC7KzLiVVVjVKnu6II9Kp7tEykY4fsQ%2FU%2Bn4rgfGDhzhvy7I3EjrsPB6s%2FWiTOUq%2FPWo8DirNtFplMOsNY3CCRAbB6n6snJMU8qwv1r4jcBZVkQ2z2KkAgzWNVSpLAScDlB5uoQFSfgBJ%2BV52MlAhxtikAJ7nXizmHLyE5BqQ3BPmBBqbT6nz%2FbXg%2B0rN%2Fjey2iIofraK1jubAdm49nn5irU95NvF1iC%2FkbONNz%2FG0kkJLIMm%2B0ADALSVpHGnAioJV%2Fx2KDrphSzuhkfw0GWAhyycLYdHCV1b0EpEESCMzkR0YM%2BEvjeak0Eb1dlwXCeQEQ4DvfJRQSLZ1BD3qLCALScpqNRtN5B8iqx0TLxJ46JbVQ7tqen9XLs9vVY1ILuqZ%2FEcW0C1nzo1IB2%2Fd93stD2qj2ftHzTKNZQCjUj7lKZkbYBA7tHGXaWZfQ4uvmqYA8j8KlQg0e8urFF6etx7jkKvJhWl7f9ihublKS0RqUMIGk38kGOqUBSFlORJlbb4G31K3Zp5EkkCrTfJEGkRoeCIvdQo5OiZw8X3imPeFw9n8JcS8drSysuZjgsjap%2FJ7755t4Wh8PouseMPhskVxrKx9tMIYD78liDFgknoK%2BmYB%2B8e%2Fs1JLGTXaogaTLghVtk60877taMlLttGV0cuQ4RparXdiizRYNRZ0TLu7fLC2ZpAjzljifgH8jrW4SYqlo%2BrlZcRh1baJJcGuN&X-Amz-Signature=4ac14b7a9b7ac3a0c9b509ababf7e1071b9e22e54ebf1666c7bf5a86030bd69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

