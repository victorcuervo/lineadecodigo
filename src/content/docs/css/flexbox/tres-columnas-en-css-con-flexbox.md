---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R6JPORT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD5UBSk8VqNr9c5DaF2ehVnwRjb97ZQIp%2Beewd0cPNyQIgMQRRqOmbf2OTXhfCEsjB5ivbtd4AU9PJhXolZCURA0sqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrLKW7s9tJIYWdICrcAxDdwSpHeP08GVu%2BYghbC%2BIPygn7erfSBeplxAtsn0pyxbBa6xoQ3bQ3YTASuZarUIalQt9x0NiO9ds38JYWrI2UR7HHo0adjiOkbSPQHf8QkAsdbTv%2FmBaHdsIn4DrMycKlF%2FK1YWYEoXiFGpUjjtzRBtFGEyUrLZ3knD6QZPx44Cp7uqdHFHmXhrvDTshcRyNdpyfyMiBA%2FCIkPTLHhFOAq6fOW3sVC9UVAiaNML%2B4QiChuKdm7SNp%2Fbss3CJWVcllVKGtXjMkYxuykZh3rgvA17Yxj8vJZdJzK4lqCQtMJQlJq13Y6axLPUtHhWS4f7joeM4YuL6iWGLHIUPhx0xc9D7HRdD2ZAXss%2B8A0BCeRw0vljrihrx%2BfzF0mrwjJG2%2BoggAqx%2BpPp8eeHAEMwbsHEE5hAUVgRFoOgL9Nt%2BHwN3o2pHBQBT3J4JU0bSnX8vgvPnJTj9HHJ8DBfJN7LjgYVL5jBwlX7HRd1%2BFA51JkFuRXS9qxK1GteDXDlNT8HQVxlz4Mgo6s%2BfCV5VfBk9Aw%2BMmevpQnV6mWsVV0LnvAW%2BnedZPO0M%2FoadD4Ay9mlWtFjgvZu5aRGyX%2B%2FxYtfQEvxjH3BjAWbIwlu%2BSri%2Fm3fvMC49Xy%2BAAZBM%2FMK241skGOqUBtqEO7cDUazKi7aVJbmzseGiWpHch%2BltJw%2BoviDtSquYOZlO3JlKvTMJozat%2B2beA9pAp0GBy%2BwyWrvmV71zM0J3h9KdCBSWXn6iIb%2BBoh0W6RJkJiogcOhLGcBEAwesFduWR6vfNrgNk1lkU9sjqvRkHhD%2B5I25X5kkICuNbKPdKqdMV%2BczDaa%2FgrOPy%2BXA91hFLDiTCOB6m5JpFW6xMLQx8W2LD&X-Amz-Signature=76f871dfe68585e67cb2197e267a16a0e506c6bb80b4bd5aaa613416cc085f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R6JPORT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD5UBSk8VqNr9c5DaF2ehVnwRjb97ZQIp%2Beewd0cPNyQIgMQRRqOmbf2OTXhfCEsjB5ivbtd4AU9PJhXolZCURA0sqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrLKW7s9tJIYWdICrcAxDdwSpHeP08GVu%2BYghbC%2BIPygn7erfSBeplxAtsn0pyxbBa6xoQ3bQ3YTASuZarUIalQt9x0NiO9ds38JYWrI2UR7HHo0adjiOkbSPQHf8QkAsdbTv%2FmBaHdsIn4DrMycKlF%2FK1YWYEoXiFGpUjjtzRBtFGEyUrLZ3knD6QZPx44Cp7uqdHFHmXhrvDTshcRyNdpyfyMiBA%2FCIkPTLHhFOAq6fOW3sVC9UVAiaNML%2B4QiChuKdm7SNp%2Fbss3CJWVcllVKGtXjMkYxuykZh3rgvA17Yxj8vJZdJzK4lqCQtMJQlJq13Y6axLPUtHhWS4f7joeM4YuL6iWGLHIUPhx0xc9D7HRdD2ZAXss%2B8A0BCeRw0vljrihrx%2BfzF0mrwjJG2%2BoggAqx%2BpPp8eeHAEMwbsHEE5hAUVgRFoOgL9Nt%2BHwN3o2pHBQBT3J4JU0bSnX8vgvPnJTj9HHJ8DBfJN7LjgYVL5jBwlX7HRd1%2BFA51JkFuRXS9qxK1GteDXDlNT8HQVxlz4Mgo6s%2BfCV5VfBk9Aw%2BMmevpQnV6mWsVV0LnvAW%2BnedZPO0M%2FoadD4Ay9mlWtFjgvZu5aRGyX%2B%2FxYtfQEvxjH3BjAWbIwlu%2BSri%2Fm3fvMC49Xy%2BAAZBM%2FMK241skGOqUBtqEO7cDUazKi7aVJbmzseGiWpHch%2BltJw%2BoviDtSquYOZlO3JlKvTMJozat%2B2beA9pAp0GBy%2BwyWrvmV71zM0J3h9KdCBSWXn6iIb%2BBoh0W6RJkJiogcOhLGcBEAwesFduWR6vfNrgNk1lkU9sjqvRkHhD%2B5I25X5kkICuNbKPdKqdMV%2BczDaa%2FgrOPy%2BXA91hFLDiTCOB6m5JpFW6xMLQx8W2LD&X-Amz-Signature=c120c4b3b3f33d7b564d58888d37434a64655412f5c5013710c7c304a38df183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

