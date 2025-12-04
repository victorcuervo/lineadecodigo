---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UA5WSFU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDjoD9IrOpHdsHBqaMNacwnLHqrXErqgsTZPBCEuR5QOAIgfGyOTZuF8%2B1ksn7uci8HBHbjf%2Fvjne70%2Fce6tN5YI8sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKwj8P7RUPN3%2FujNNircAxaM8EDRZhFSc%2BLqNbi5xaujxqHHiO6czciK1y667ISAGOsfxqbykvwaCgFXCLvPqFlaTumILpzjZBEcrSqDv8AMbMGnSYz%2FqZ%2BcgyZDuOhtXPAnQT6oYVEfuqACeX376BerufYACecsYIjJ%2BQGZNT4VWgJLVkm9E4cXx1TVbOUXbICg1DStlTWF96jy8H%2FGwe5CEZmju22ceg3cL%2ByhfLNDXol%2FaZwVHmiapoJ%2BhIKqEW568RZPKtIekw7jP5rzyYEwbj3adHL0C9wipuNmIZ6J3kPECAJNyoyWA4D8b1Dpx8xHWqC89RBYR8pVq4BKRf0kXGRJt4xxR27b5xdNwdnjgAuu0hpbroqcMEnMgJTNuRJqVnLkQHFKVzL%2FHRe9kI28rgnFIdXS6Y4ilv55%2F1Bno6Yqo%2FaF9JrhhfrSqjy3YG8d%2Bxzwfx45iBCbfbI9knPmaP18BFvFrveXZSjXk6e3mvfq4x16yS9m6RYWBPy8Q2mNztIUEfpMvgdD2wehoV6SHRmWGNtjd0tRtmb5txOhZ1YP8zEebypeqkJH9yOAyjV6lHkPi1ltOqCcUrFeWScY73Wb1Uoi%2BObWPAScQ5cJQeWlzIl0MDWQwnupfa6NeSbD19bpjaIlPEmVMODTw8kGOqUBIrvlXnHUvMT0Wh2f3ZagCeBCPJR%2BFQffmU%2BPpFw0KlTPBvjrswacztklHltV9Diiv8IWxRMFajTmbRJ7cADgdaicYXGhkna3jnVMkpW3iWX0esd6LknfainflB3qefJqwm8ixXUCcyYlCtZ5oauK0eS92Udv5am66%2FcJogO%2B%2BzjRAocLDKTQJhc0FxbPrwvw179uaoF%2FwobhdIdsL2840gj9uh3w&X-Amz-Signature=a0469c67d80d4510d9237e9377a15b16e0efec8089c54b8283df01e6780bf174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UA5WSFU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDjoD9IrOpHdsHBqaMNacwnLHqrXErqgsTZPBCEuR5QOAIgfGyOTZuF8%2B1ksn7uci8HBHbjf%2Fvjne70%2Fce6tN5YI8sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKwj8P7RUPN3%2FujNNircAxaM8EDRZhFSc%2BLqNbi5xaujxqHHiO6czciK1y667ISAGOsfxqbykvwaCgFXCLvPqFlaTumILpzjZBEcrSqDv8AMbMGnSYz%2FqZ%2BcgyZDuOhtXPAnQT6oYVEfuqACeX376BerufYACecsYIjJ%2BQGZNT4VWgJLVkm9E4cXx1TVbOUXbICg1DStlTWF96jy8H%2FGwe5CEZmju22ceg3cL%2ByhfLNDXol%2FaZwVHmiapoJ%2BhIKqEW568RZPKtIekw7jP5rzyYEwbj3adHL0C9wipuNmIZ6J3kPECAJNyoyWA4D8b1Dpx8xHWqC89RBYR8pVq4BKRf0kXGRJt4xxR27b5xdNwdnjgAuu0hpbroqcMEnMgJTNuRJqVnLkQHFKVzL%2FHRe9kI28rgnFIdXS6Y4ilv55%2F1Bno6Yqo%2FaF9JrhhfrSqjy3YG8d%2Bxzwfx45iBCbfbI9knPmaP18BFvFrveXZSjXk6e3mvfq4x16yS9m6RYWBPy8Q2mNztIUEfpMvgdD2wehoV6SHRmWGNtjd0tRtmb5txOhZ1YP8zEebypeqkJH9yOAyjV6lHkPi1ltOqCcUrFeWScY73Wb1Uoi%2BObWPAScQ5cJQeWlzIl0MDWQwnupfa6NeSbD19bpjaIlPEmVMODTw8kGOqUBIrvlXnHUvMT0Wh2f3ZagCeBCPJR%2BFQffmU%2BPpFw0KlTPBvjrswacztklHltV9Diiv8IWxRMFajTmbRJ7cADgdaicYXGhkna3jnVMkpW3iWX0esd6LknfainflB3qefJqwm8ixXUCcyYlCtZ5oauK0eS92Udv5am66%2FcJogO%2B%2BzjRAocLDKTQJhc0FxbPrwvw179uaoF%2FwobhdIdsL2840gj9uh3w&X-Amz-Signature=a7b70844c33b62a767db056004dd39717995db0cc39f6dc264d8049ca97a70bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

