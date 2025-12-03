---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNLUW3UZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIA8y7dfG9P6gQ4rz6FAlzlyUgSG%2B%2FgL89GfsZJfNyh93AiAe5H4T8BfEbbBdoonSUAegnOHoL7f9KrMT4FnU9A1Duyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMdhClhog0LjMApW10KtwDmpaJL85NJjYCov89B9Y0drtD2jcAnmXrhWNfpvervx2YNp8hIaIdArQszbwR%2FGoVYG6guH%2Flz04raAdznPal9JIVFxpaIjWtKBwvHzd%2BT2Zm2U11jIM%2B5kluHK4sIFoV325ghE2hIVaA9Drnk6qxfQoTuOJZ47ImMfCIOduMYNyInZOiY4GFh8q75RefvhurpZR18Iebe00Wk6Tp657AOjff2G4hks7omUmVzYPYqcy%2BLeFEDmpD%2FkelyXvOKHHy9Wt%2FMiJmSgxoAgharslyYRCqriBgehMxsTLsXXFNK9uTmPQojMScAx5WWbhWRJGR%2FvgvsDYPAlYpKuWjK271F9mgwciUu%2BFOobIrqTOXPS95AwPRW3Gclt%2BvfTaXWCGXybL8yxjsafUw%2FSoNWSUec9PKuP1Ob34HzNEG3wh3TkHXFTFgC1COaJC5d%2Baw%2FjdBPjsV88AQ3VixEwkBdV726WotWMJprpZX49Yo6OPFknJcjQBgqlcICyQceMPn7gZHO2DhqpJTc1VylPoHke%2F4lyfFUUMUxPZAqfFVF1v4cuXJhxMsVkaWu7NO9BxHZsC79glaRwS8VSVKlZwPnLEcAfIF4ZyeEV2mL54fFFxuNQksG1Tc0Y8Ye8dJ5Ekwmb7CyQY6pgH0HdWITvZ2jdy5k6w%2BIyhR6u17IV1DckVxT9162%2BQlwb9Kdv4HNLChh5DSqJYptaFzN1RsUqteKugm7gbqU1EepDVcHbQ2V2k4l4ICrgA3RfPCnX8MP0v7tc5TS7%2Bp3OwRqx%2FH4JlEsu7Gg4YLfRM8Sdpz8nr3X0M0WnVPIYehpI62Gjwa%2FXQO2nPPJW40r5QF7XwOEvFncRSMiT86foAYRRdInxk5&X-Amz-Signature=e5f4b98a8ebd94c6d63c0b52792c6341197816028287f8e1fec9b10ab79bd113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNLUW3UZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIA8y7dfG9P6gQ4rz6FAlzlyUgSG%2B%2FgL89GfsZJfNyh93AiAe5H4T8BfEbbBdoonSUAegnOHoL7f9KrMT4FnU9A1Duyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMdhClhog0LjMApW10KtwDmpaJL85NJjYCov89B9Y0drtD2jcAnmXrhWNfpvervx2YNp8hIaIdArQszbwR%2FGoVYG6guH%2Flz04raAdznPal9JIVFxpaIjWtKBwvHzd%2BT2Zm2U11jIM%2B5kluHK4sIFoV325ghE2hIVaA9Drnk6qxfQoTuOJZ47ImMfCIOduMYNyInZOiY4GFh8q75RefvhurpZR18Iebe00Wk6Tp657AOjff2G4hks7omUmVzYPYqcy%2BLeFEDmpD%2FkelyXvOKHHy9Wt%2FMiJmSgxoAgharslyYRCqriBgehMxsTLsXXFNK9uTmPQojMScAx5WWbhWRJGR%2FvgvsDYPAlYpKuWjK271F9mgwciUu%2BFOobIrqTOXPS95AwPRW3Gclt%2BvfTaXWCGXybL8yxjsafUw%2FSoNWSUec9PKuP1Ob34HzNEG3wh3TkHXFTFgC1COaJC5d%2Baw%2FjdBPjsV88AQ3VixEwkBdV726WotWMJprpZX49Yo6OPFknJcjQBgqlcICyQceMPn7gZHO2DhqpJTc1VylPoHke%2F4lyfFUUMUxPZAqfFVF1v4cuXJhxMsVkaWu7NO9BxHZsC79glaRwS8VSVKlZwPnLEcAfIF4ZyeEV2mL54fFFxuNQksG1Tc0Y8Ye8dJ5Ekwmb7CyQY6pgH0HdWITvZ2jdy5k6w%2BIyhR6u17IV1DckVxT9162%2BQlwb9Kdv4HNLChh5DSqJYptaFzN1RsUqteKugm7gbqU1EepDVcHbQ2V2k4l4ICrgA3RfPCnX8MP0v7tc5TS7%2Bp3OwRqx%2FH4JlEsu7Gg4YLfRM8Sdpz8nr3X0M0WnVPIYehpI62Gjwa%2FXQO2nPPJW40r5QF7XwOEvFncRSMiT86foAYRRdInxk5&X-Amz-Signature=b33e54f4ceb7ff22ac6d62e7ebfb225e8bcf37cd70e2176ba51e313982c27490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

