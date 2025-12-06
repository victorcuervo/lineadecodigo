---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXFFIFYT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe3wpD%2BSwBkBrMAFy0cPXC853QkWQ3fhJo2%2Fs1vP18KAiEAvYHtAs0K%2Bew6dMpWsPJbLCyKZ4JdbbxE300F0FoB9wMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOhxq%2B0v%2FrltjGJhJircA5b%2BFT0R0hkeviGBTG9dcEDnA%2FxGrgTIH6%2BI72lxNynuymRAXestro441GEGubB3uGnJO5nACAmENFCEf4nV9eygicUpkFjMkMMi7okYt0dCKG3xyFjXO577sXCFP4e5jrUEc%2FU0epuaVZM5cd0T%2FheF3rYIk%2BXDJQWD%2F39UHYjKcVZogHpZ%2BHj6P5K80eV%2BEQuIQBxut0eqNjsAx3aO9AK4PpPzsuZ%2FmPtJozWDHdZNpBdOsoV%2FshSTLZ8lZdwVtm1bjVoJ2rBkR8xRDGMD3dddVv0IVWQFqjwH9Nw3E9U1UaBPyUZAFKxlsuyS4m0NwujegknuA8iyUQEzPOEZ1jTsoUj1iptwSJYDVE2%2FR8VK89cZ7BMX520WH7LrKnABpn7ZAHNiagaKffuJgfXCYCgj5Hi4y3dHckFp4eiraCLFgr9YtKGtVQNoUUw%2FOEqOaJi4uIvWOUAp0M78JgtgXnTzXVioHvTOCjiPfgGeEq5DHY6ksFcmDWKpfFPk9q0wShLJD8SnTojGxClDYh1tceA3t2ZI5%2FKaD8V2m1CgqCmMMDbCg%2BV7B%2B2gE9CbBkRV1akyjxMVIwi3VNQ0QwtiOZJMQ4IF9XoQNbJ1hEymbpy%2FHK69eRUpUVTRU3GhMPCJ0MkGOqUB7eeQ3Ak6%2FEpJSafIrI9XbFzvFtTAom8yqbNuMWyr%2BZaPRQVUaSDgELbWtm3dk%2BlWUGGx0r%2BW%2BKv4zGrvt9iD4%2B9N6ddHMMlxxiRvtm%2FN338ovn7Kzhkk%2FgO57NInoOuU8VRauoHIwJOtGEw72uu9FRriElEXjzPWPqawWDwpkiMyAIJaAWyIL%2FCYB8Ep0unRKM6sizafIxp7YTcuVCUu53WJh2gS&X-Amz-Signature=a5b169b477cd7785d712a38d905d4c29b6f1e5f83da58ac6aeb86d4ac1a483bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXFFIFYT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe3wpD%2BSwBkBrMAFy0cPXC853QkWQ3fhJo2%2Fs1vP18KAiEAvYHtAs0K%2Bew6dMpWsPJbLCyKZ4JdbbxE300F0FoB9wMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOhxq%2B0v%2FrltjGJhJircA5b%2BFT0R0hkeviGBTG9dcEDnA%2FxGrgTIH6%2BI72lxNynuymRAXestro441GEGubB3uGnJO5nACAmENFCEf4nV9eygicUpkFjMkMMi7okYt0dCKG3xyFjXO577sXCFP4e5jrUEc%2FU0epuaVZM5cd0T%2FheF3rYIk%2BXDJQWD%2F39UHYjKcVZogHpZ%2BHj6P5K80eV%2BEQuIQBxut0eqNjsAx3aO9AK4PpPzsuZ%2FmPtJozWDHdZNpBdOsoV%2FshSTLZ8lZdwVtm1bjVoJ2rBkR8xRDGMD3dddVv0IVWQFqjwH9Nw3E9U1UaBPyUZAFKxlsuyS4m0NwujegknuA8iyUQEzPOEZ1jTsoUj1iptwSJYDVE2%2FR8VK89cZ7BMX520WH7LrKnABpn7ZAHNiagaKffuJgfXCYCgj5Hi4y3dHckFp4eiraCLFgr9YtKGtVQNoUUw%2FOEqOaJi4uIvWOUAp0M78JgtgXnTzXVioHvTOCjiPfgGeEq5DHY6ksFcmDWKpfFPk9q0wShLJD8SnTojGxClDYh1tceA3t2ZI5%2FKaD8V2m1CgqCmMMDbCg%2BV7B%2B2gE9CbBkRV1akyjxMVIwi3VNQ0QwtiOZJMQ4IF9XoQNbJ1hEymbpy%2FHK69eRUpUVTRU3GhMPCJ0MkGOqUB7eeQ3Ak6%2FEpJSafIrI9XbFzvFtTAom8yqbNuMWyr%2BZaPRQVUaSDgELbWtm3dk%2BlWUGGx0r%2BW%2BKv4zGrvt9iD4%2B9N6ddHMMlxxiRvtm%2FN338ovn7Kzhkk%2FgO57NInoOuU8VRauoHIwJOtGEw72uu9FRriElEXjzPWPqawWDwpkiMyAIJaAWyIL%2FCYB8Ep0unRKM6sizafIxp7YTcuVCUu53WJh2gS&X-Amz-Signature=a760b75e6632509ca12a8104893680ba350e6511edb3ec9e1558d88a9193f90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

