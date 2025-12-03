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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQT2L4S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCqHUfOaH9kZ8M%2F2x0fu9%2Bgdf79iPBhx2GxAVPg4IhnFwIgF1ek2GB06LzyQLtu7%2F5XG%2FGgbkIDzJ9%2F7zhGKaKmsBYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP6ENAgLq0H65%2B5xPircA84hclTRxbgAYThnvf%2FHOZMXkOGK1rLcTv2COp1KnSC%2FYGdFWjTfMEI9majezu65miYFr%2FJFrGVUDzeBOapDGGzwn8wUEwtqcFKdfIk7i%2BCobHGbMNWnA6zYAVOwKF6FOvZf%2Bq4J6Y5qTUjj26hDbnOK1I%2BScvXH2LIFnHosctM8cOjMxO31J439CLN7pMeAopCJLEvHffyhrS02jQtYNpQLLd24cyDyiuVGiHiCz9pfgmaYxaWxK4330FFmMBzOF1XbZrKggkeodA7yg%2F%2F5zsWS%2F3Wx%2FhzmKfr70GcEVNi1c9Tn0xFD3zPz073QRRr5MlwzyTVyXpnK77MEgoQEz9%2FlEuVqzIDckL2xIxLVzE1vm13TUPiM3CDg%2BMU6MDM3koF%2FMeaQjxcZBh0mVLpiospbr6aJqVPjDZcFkjTHbJt6EXELaBZqQ9mxwVxBnXMtTCcbFqSpXjbpy%2Bd74MenkcISiMssbdISNww1ue14VFfU31xS53naHZZyui7W3hdlq%2Bd5c%2BQiZP6UXsTQ4kPWVX4Iu0TIG3l%2FaZJ5v%2F6yt7M1UTAVLmPvKuC5IBeT7vhmtVNGawFhvcvYIFryuyj%2F9VT4gBgiLxBJUCN%2B6blbySkmquvR%2Fwn33T8yycP1MNWWvskGOqUBF4TiE3s0M58tZQxs7gr0I%2BYkpHaDqQldR%2BIlOmsYWJGuSLCMgOjP%2BUT4hZoyyPqXFLYgV23P7bYq%2BUzyvqw%2Fqp57%2FbZ7%2F7JpY0VK6rZEMYpY5IUsSMuIT61I6O02odBmNkkTAvXWTgZYd5FO9tNw0rPYIsB%2FmKTOqjlfMGh8admZqBsANnNu0ftVS%2FeJVwZxTTA62mJoR4f9fE5%2Fii6bX2mkqMOH&X-Amz-Signature=7256e2ef687efee77c749b49bdf3c60d71f2404746693f2b65879d589040a64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQT2L4S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCqHUfOaH9kZ8M%2F2x0fu9%2Bgdf79iPBhx2GxAVPg4IhnFwIgF1ek2GB06LzyQLtu7%2F5XG%2FGgbkIDzJ9%2F7zhGKaKmsBYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP6ENAgLq0H65%2B5xPircA84hclTRxbgAYThnvf%2FHOZMXkOGK1rLcTv2COp1KnSC%2FYGdFWjTfMEI9majezu65miYFr%2FJFrGVUDzeBOapDGGzwn8wUEwtqcFKdfIk7i%2BCobHGbMNWnA6zYAVOwKF6FOvZf%2Bq4J6Y5qTUjj26hDbnOK1I%2BScvXH2LIFnHosctM8cOjMxO31J439CLN7pMeAopCJLEvHffyhrS02jQtYNpQLLd24cyDyiuVGiHiCz9pfgmaYxaWxK4330FFmMBzOF1XbZrKggkeodA7yg%2F%2F5zsWS%2F3Wx%2FhzmKfr70GcEVNi1c9Tn0xFD3zPz073QRRr5MlwzyTVyXpnK77MEgoQEz9%2FlEuVqzIDckL2xIxLVzE1vm13TUPiM3CDg%2BMU6MDM3koF%2FMeaQjxcZBh0mVLpiospbr6aJqVPjDZcFkjTHbJt6EXELaBZqQ9mxwVxBnXMtTCcbFqSpXjbpy%2Bd74MenkcISiMssbdISNww1ue14VFfU31xS53naHZZyui7W3hdlq%2Bd5c%2BQiZP6UXsTQ4kPWVX4Iu0TIG3l%2FaZJ5v%2F6yt7M1UTAVLmPvKuC5IBeT7vhmtVNGawFhvcvYIFryuyj%2F9VT4gBgiLxBJUCN%2B6blbySkmquvR%2Fwn33T8yycP1MNWWvskGOqUBF4TiE3s0M58tZQxs7gr0I%2BYkpHaDqQldR%2BIlOmsYWJGuSLCMgOjP%2BUT4hZoyyPqXFLYgV23P7bYq%2BUzyvqw%2Fqp57%2FbZ7%2F7JpY0VK6rZEMYpY5IUsSMuIT61I6O02odBmNkkTAvXWTgZYd5FO9tNw0rPYIsB%2FmKTOqjlfMGh8admZqBsANnNu0ftVS%2FeJVwZxTTA62mJoR4f9fE5%2Fii6bX2mkqMOH&X-Amz-Signature=5a81fa205f1f72c485e97db6808f97a2277d687515f66e33a81d2963d68e3dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

