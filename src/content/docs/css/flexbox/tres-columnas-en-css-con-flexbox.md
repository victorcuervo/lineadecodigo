---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666M7REV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4EH7CEVulDMQHifU%2BrhF4lXryn1IwzvkYsks9cKVLuwIhAJJeGavMsKtX9gN4RVLuLzerLeFHD8omZ76kBqtIuE8uKv8DCHEQABoMNjM3NDIzMTgzODA1IgzDryMH6uhS7OkwndYq3AO431SrgeeZaazwJgR1aJRPhua27jhJwCVCyIQamQhM3mhGqL5WOjQ0ELFbBXAgFt4Z%2F9gxIHJL0l0lo4S46idXbPN1vFRSx80r%2B%2FsbpQ%2FY2e9RSMINCeskzGBQX7GQqbKtzg8VTML4Vxilb1dwm0FiW%2F2VoiWNLupawqoC6%2FdvEqVIVFG4Jip2j9toW7Vgo3dX8HxCbDk8kBjebFE2XoXhqLj3gOe9vW5J1GYJX676IHcd%2BWoKJe2K5mek9wQtQA1vZXvRkgf6yIEtgGv%2Fh4q1xLnolvkPrY134YgAVT9lDJpSsFa%2FciIFpiRwODA0fHwf02YKBUD6Sk9YQBfk0nLSyWi0TKs2MDPEFb%2FykpcqI5Wzms%2FNJVnQlAwFERcNwu0S7c8q0Xti6j1%2BMqc7sD5OPNQLLkZMJii7VL5FUb%2FKTKAeHzhTu%2BNCepdZoN6EymVmPHIQVPseVNT6eG6wMncaSyyxPflONCJNufkMQ1xEGNPk1iLGuS%2BFb6sIPwNfPEbVhgVU9nsx2ccdAC57q4DEh85BvsyUp6DdQjLlHwGIwxkKAdpqiFBPpT07ZOWPAPzxGC1gn1L33Roty4zd91G4iobfQvmM6CDt4trd0ONF7AIviq3rn304H%2BJjjzDXvM%2FJBjqkAa22Ao5aweOri9JLnDuTHeqigymUvwbSl%2BKgdaJKzFd%2Ft%2BVhqD7FtBuOPmQMlTDV8GQVfaOFRILGuaFHHqR5shTrHzKgB8YixttPOSG%2FYE7fMtjbOBYxDDfh22p4bjKK9gExaGfvNYqiSbv%2F%2Fng27Ett2G0oy0BwbAaWMcVE64J5NtneVmsYqP4nG8cPtA%2BjlOGPyvFeXyL4m6YEada67lBiQZEo&X-Amz-Signature=44025ef1af0eea0004be9fa020da692b9c6ca48d9a9b4dec77c56a1d6fdf31e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666M7REV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4EH7CEVulDMQHifU%2BrhF4lXryn1IwzvkYsks9cKVLuwIhAJJeGavMsKtX9gN4RVLuLzerLeFHD8omZ76kBqtIuE8uKv8DCHEQABoMNjM3NDIzMTgzODA1IgzDryMH6uhS7OkwndYq3AO431SrgeeZaazwJgR1aJRPhua27jhJwCVCyIQamQhM3mhGqL5WOjQ0ELFbBXAgFt4Z%2F9gxIHJL0l0lo4S46idXbPN1vFRSx80r%2B%2FsbpQ%2FY2e9RSMINCeskzGBQX7GQqbKtzg8VTML4Vxilb1dwm0FiW%2F2VoiWNLupawqoC6%2FdvEqVIVFG4Jip2j9toW7Vgo3dX8HxCbDk8kBjebFE2XoXhqLj3gOe9vW5J1GYJX676IHcd%2BWoKJe2K5mek9wQtQA1vZXvRkgf6yIEtgGv%2Fh4q1xLnolvkPrY134YgAVT9lDJpSsFa%2FciIFpiRwODA0fHwf02YKBUD6Sk9YQBfk0nLSyWi0TKs2MDPEFb%2FykpcqI5Wzms%2FNJVnQlAwFERcNwu0S7c8q0Xti6j1%2BMqc7sD5OPNQLLkZMJii7VL5FUb%2FKTKAeHzhTu%2BNCepdZoN6EymVmPHIQVPseVNT6eG6wMncaSyyxPflONCJNufkMQ1xEGNPk1iLGuS%2BFb6sIPwNfPEbVhgVU9nsx2ccdAC57q4DEh85BvsyUp6DdQjLlHwGIwxkKAdpqiFBPpT07ZOWPAPzxGC1gn1L33Roty4zd91G4iobfQvmM6CDt4trd0ONF7AIviq3rn304H%2BJjjzDXvM%2FJBjqkAa22Ao5aweOri9JLnDuTHeqigymUvwbSl%2BKgdaJKzFd%2Ft%2BVhqD7FtBuOPmQMlTDV8GQVfaOFRILGuaFHHqR5shTrHzKgB8YixttPOSG%2FYE7fMtjbOBYxDDfh22p4bjKK9gExaGfvNYqiSbv%2F%2Fng27Ett2G0oy0BwbAaWMcVE64J5NtneVmsYqP4nG8cPtA%2BjlOGPyvFeXyL4m6YEada67lBiQZEo&X-Amz-Signature=d555c94a1413be08cca0484053b4fca6afb1e06169999b56e424c30c2928783b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

