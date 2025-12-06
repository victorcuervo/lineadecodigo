---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466672JY5Z2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW9AokT6bfwsh2T4RUQ7RE5brwZQKagrs4GrjoonqaEAiAzecP%2Bl%2BzpIu9VSo%2Fl7m9ZVRRa1cCElgOJXQVNduye4Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMPs%2BxHbnVvIR3QltDKtwDFIpRlmeBUZtwKQuMoj96eCPj0B3MjnBT%2BekpsP6XTPqnhYZvA06a67BfJlGwFo5FuYxxDw%2BWDmdpgzFrKSrqkbVzN3%2Fy43uF38NhuoRazW7Nz%2FHrgFOjyTQak5IAiYTczqTmqiF8qEPpfkDdP8UhmdvSg0zZ27uZf3f2CL4%2Fs3L88WDGYQlyCimKV578k%2Fajk0jU6EBcBC72slcC03OC%2FJwAIKBKLE6k1usXe6fymkgXxHW85Xwav31Ee7wIHMguwAhVUWkZgAWJ4%2BErKg4WTGkzAA2Az0mb%2B3uMnnASbYz8C9f9PA8EYREFDDYYEsZpxkfoG8C9TqgaOH3%2F%2BThBbkDh24zT3xF%2Fnjzk7rec5c%2FxRK%2FJNZYBWwtA%2F3RpPJlRbXZ%2FIItV44HSRaiGqDGA0LA2FOrgT2zwWsQsEEuV7Sp22AJT0fCEsluvEJ2ebYauS%2FYTpgjco2o6bs7nanVDTtllns0Vk%2F%2Bxr0bGi6mf8PGmzzVle0ZaUazLRFzmSwqpm3ZHeI33UoNEyBz4smOmBIW6dVqWyQKJZmzZ%2Fc0CeWgJ2dotjZEcJ9gD8sLJ%2Fbxp03H7Zk%2FvDmGqm%2FhdSFjgxUeuW6ruOi%2Bts9YZcmivXEV6AGQYGLg3ffTfhskwiczRyQY6pgHSwVosBTP8ZiW%2BplCwrsL1If69%2F2FpURbEGG3LlFbpjaDAn8rsZuGyqQzsMeSVmz%2FD6GHBCqBmGRmni%2FXLcudiIXFl36C9y%2BfTdTChe7zm27BWSIQ33GVsdPpjmCQs%2FGgulO2XmHH9%2BhTh5wROqG6CI2Kz6yIbnwSxv9bx3v%2BY%2BOXa4dYW7acwhejapFZgsXHuaARkTCoyQkXfi0uLdeZcj2pbbVeD&X-Amz-Signature=566d8da705cae3d1a62dd92bc628fa892ba80e16c3cf3003fb70eb70a404968b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466672JY5Z2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW9AokT6bfwsh2T4RUQ7RE5brwZQKagrs4GrjoonqaEAiAzecP%2Bl%2BzpIu9VSo%2Fl7m9ZVRRa1cCElgOJXQVNduye4Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMPs%2BxHbnVvIR3QltDKtwDFIpRlmeBUZtwKQuMoj96eCPj0B3MjnBT%2BekpsP6XTPqnhYZvA06a67BfJlGwFo5FuYxxDw%2BWDmdpgzFrKSrqkbVzN3%2Fy43uF38NhuoRazW7Nz%2FHrgFOjyTQak5IAiYTczqTmqiF8qEPpfkDdP8UhmdvSg0zZ27uZf3f2CL4%2Fs3L88WDGYQlyCimKV578k%2Fajk0jU6EBcBC72slcC03OC%2FJwAIKBKLE6k1usXe6fymkgXxHW85Xwav31Ee7wIHMguwAhVUWkZgAWJ4%2BErKg4WTGkzAA2Az0mb%2B3uMnnASbYz8C9f9PA8EYREFDDYYEsZpxkfoG8C9TqgaOH3%2F%2BThBbkDh24zT3xF%2Fnjzk7rec5c%2FxRK%2FJNZYBWwtA%2F3RpPJlRbXZ%2FIItV44HSRaiGqDGA0LA2FOrgT2zwWsQsEEuV7Sp22AJT0fCEsluvEJ2ebYauS%2FYTpgjco2o6bs7nanVDTtllns0Vk%2F%2Bxr0bGi6mf8PGmzzVle0ZaUazLRFzmSwqpm3ZHeI33UoNEyBz4smOmBIW6dVqWyQKJZmzZ%2Fc0CeWgJ2dotjZEcJ9gD8sLJ%2Fbxp03H7Zk%2FvDmGqm%2FhdSFjgxUeuW6ruOi%2Bts9YZcmivXEV6AGQYGLg3ffTfhskwiczRyQY6pgHSwVosBTP8ZiW%2BplCwrsL1If69%2F2FpURbEGG3LlFbpjaDAn8rsZuGyqQzsMeSVmz%2FD6GHBCqBmGRmni%2FXLcudiIXFl36C9y%2BfTdTChe7zm27BWSIQ33GVsdPpjmCQs%2FGgulO2XmHH9%2BhTh5wROqG6CI2Kz6yIbnwSxv9bx3v%2BY%2BOXa4dYW7acwhejapFZgsXHuaARkTCoyQkXfi0uLdeZcj2pbbVeD&X-Amz-Signature=33a2d294d30318040add971a815d9d30807e7b4d431b7462368320ef33c0e4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

