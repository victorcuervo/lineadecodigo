---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIVO5WJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGumzZKg3s0%2F0blaqAqPNRcKqoVTUuFfH2he2SP9V5NAiEAzXa7Xt8CctrgnkP%2B0y4EZZAOD7Q1StKQQrjyuyBzTYoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHOIs5o95xS1whsf6SrcA%2FvSKZFWVBX6gVuorFCcdDx6ifnNmwj7H1yXqCtmiWTEwUvq107Wws1M0pzT6dr5xeW7DHq5kr8C1GtmkzC630CKXS1OckfK%2F5TTPvHliYQ1iLJYEPyWf721lM6N%2BYrKBRWZE6BedUCsRXL6dHpKXnZxD0QTjGQHEoTXp%2FbhrHGXVTU47G8I6oBDXaVkCiakot%2FliSfPEl%2BlOCdtfArDxOvWHkjO69f1KpJmfEmr9HR%2Ff6VDMfHFx4pJ60x019wIaUPCa%2BCyFi7w%2F49rB8hb4Q9awgMTWT9BAjV6Tu%2BBsvzB3SXyiqXGX58ISE4qdwcCWmvj4ZJMeAPhGYND2x90k46r9RrSUBvKlGgY2oWqLEQSvoLQ2VN%2BJe9GEjVI14AJyjS9gJ9ztIWUw3i3dFda84%2Fzw7xDjiJY5lv0TCIRsjL1uv0SxGmhznJakbYQc7Iw%2Bak7TSuGYYlM8Rqq6QhNufsqm%2FVc9dvoFj0I0E6Xw3bO1I8pqZafd%2F0Y6jUSxgKIYclBDC451htIOBjOtz%2BxfF6ARnBpue3TSYwqfO9LKLVSqO8Vur0kNuZAQw8J7kT6lvqCAU8IhQ0m%2FF8Z0n0N0S92wNzq4kYmtl0Ah4A5SX1ickEsOnF80IvHGg7uMOOm0MkGOqUBdpheunDULrrdANL2fgj8J%2FjTzw8qLX1%2B3smjyIHU3rFadeLqIudTXs8%2BJVtqKpBYhXcLq4CcFUi1KnkxFNDR4LM1wsJhITd8UOXUYGO8oKOEQGsBOgdcPzIC13dxBbys6MXTxIG2VbBIJo7SdZdHZpvWDc%2B%2FGnT5zYBVjwJ4bkHT3pmr5cJe3bXf1xS5EXiXcu9nv5M5z1GbhVgZqLqZfYPbVTBb&X-Amz-Signature=c53f9a80ee7c9b0d47d400990436ab92c544d5019d6c3c63a32f2521ffee5fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIVO5WJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGumzZKg3s0%2F0blaqAqPNRcKqoVTUuFfH2he2SP9V5NAiEAzXa7Xt8CctrgnkP%2B0y4EZZAOD7Q1StKQQrjyuyBzTYoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHOIs5o95xS1whsf6SrcA%2FvSKZFWVBX6gVuorFCcdDx6ifnNmwj7H1yXqCtmiWTEwUvq107Wws1M0pzT6dr5xeW7DHq5kr8C1GtmkzC630CKXS1OckfK%2F5TTPvHliYQ1iLJYEPyWf721lM6N%2BYrKBRWZE6BedUCsRXL6dHpKXnZxD0QTjGQHEoTXp%2FbhrHGXVTU47G8I6oBDXaVkCiakot%2FliSfPEl%2BlOCdtfArDxOvWHkjO69f1KpJmfEmr9HR%2Ff6VDMfHFx4pJ60x019wIaUPCa%2BCyFi7w%2F49rB8hb4Q9awgMTWT9BAjV6Tu%2BBsvzB3SXyiqXGX58ISE4qdwcCWmvj4ZJMeAPhGYND2x90k46r9RrSUBvKlGgY2oWqLEQSvoLQ2VN%2BJe9GEjVI14AJyjS9gJ9ztIWUw3i3dFda84%2Fzw7xDjiJY5lv0TCIRsjL1uv0SxGmhznJakbYQc7Iw%2Bak7TSuGYYlM8Rqq6QhNufsqm%2FVc9dvoFj0I0E6Xw3bO1I8pqZafd%2F0Y6jUSxgKIYclBDC451htIOBjOtz%2BxfF6ARnBpue3TSYwqfO9LKLVSqO8Vur0kNuZAQw8J7kT6lvqCAU8IhQ0m%2FF8Z0n0N0S92wNzq4kYmtl0Ah4A5SX1ickEsOnF80IvHGg7uMOOm0MkGOqUBdpheunDULrrdANL2fgj8J%2FjTzw8qLX1%2B3smjyIHU3rFadeLqIudTXs8%2BJVtqKpBYhXcLq4CcFUi1KnkxFNDR4LM1wsJhITd8UOXUYGO8oKOEQGsBOgdcPzIC13dxBbys6MXTxIG2VbBIJo7SdZdHZpvWDc%2B%2FGnT5zYBVjwJ4bkHT3pmr5cJe3bXf1xS5EXiXcu9nv5M5z1GbhVgZqLqZfYPbVTBb&X-Amz-Signature=99b6d2c02e9091e97f0fe3ef6c3982dd970d829addbaf6ab3910bfc64f9b37f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

