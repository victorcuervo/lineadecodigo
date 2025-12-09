---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONG2LF6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpOZyPxRVJpLcFRe8xn471nS4jKaRFkOKUs7q9P7zx2AiBftcem3mK5Y4cTQ7fh9S9mz%2Bu%2Fewcr%2B0wfGQP8S7m1SSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgeFqVsBQQiD7ouHKtwD%2FsdSV5HSfGhx7KxOjsOHjYJq5%2FmAfl4mikubhPO3FFyfhkUxoIw60POprd2AybfXtKDnG5DU8GXt7sVKCwk3nrs9ozOjvD5%2FpZzcPogyTmwO%2FCrlFs0%2Bi2IF6d3SCkFvSbgPlMi9b9Ro84bP2%2FWQERStlJ7g8hZ%2FrJvA73m1%2FMWLrNk7pytM%2BL8oNEmM76bU6UCsPAdl0k4X4hzlvN0QLk7yQqjCGmwu88UsvFkHSYNj3f8pVNViSqEjnhs28EXDCbSF0s9bQjBx0lmODVH3b6WjHzx6YSAiWZDWL%2B9xeGowFx%2FDG1U9857ZLQ4VGFRN211ADXSXrZGoeoZXvR6vhJfqkewj9b0QTr%2F673i6EHhQe3VHjjzzKCAWWyedUUlxZWMPrGwfg%2FngYTHLqVasFzApubngbqRKzEjcqQ%2Bk%2FSnlUyvdDjXZXGwlqBRax%2Fq%2FXvVQ5JSjRmpcpuBcKLulQ52BJj8vLV%2ByTBMGtztSmA8mvuO8oXclWRam1cWxW3a0Cs6aXc%2FRSe5fjhEARnCMOajhxKZSTnJDMfK%2BgrJ6KOfXc90ALZ6MRmU%2BnyqP8sPZc76dFlNYS3GH4IRot6UldhWbVju2%2Bw7rCTCYXFOTB3HnL7OLqxImdel2eZIwgKTfyQY6pgEyXWD6aLH5%2BhLf%2FHYGPvKqhHH8KU8bCuiXrLRCUV4qXeUYd7P8I2vgnFDTxZeW0xOrLH1bsieUCZEF6NTKELKIj9rJjtz4b16qh%2BS9IcPdALSv2ZZb5gfzvSJpbRsnJTzR6WxYFdTfcW2fEW%2BS3J801%2F%2FqQkHbKXS4Kj5oM53WE18zqDiPcTYQLRgjzLQz9yxDFLMIQ4gvJoeiwRsZq6AFCxlhTZOq&X-Amz-Signature=2ed3692aa2e7440cc588fa555ab981e2f8229f5336d7b01afaf4a27aef5d4634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONG2LF6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpOZyPxRVJpLcFRe8xn471nS4jKaRFkOKUs7q9P7zx2AiBftcem3mK5Y4cTQ7fh9S9mz%2Bu%2Fewcr%2B0wfGQP8S7m1SSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgeFqVsBQQiD7ouHKtwD%2FsdSV5HSfGhx7KxOjsOHjYJq5%2FmAfl4mikubhPO3FFyfhkUxoIw60POprd2AybfXtKDnG5DU8GXt7sVKCwk3nrs9ozOjvD5%2FpZzcPogyTmwO%2FCrlFs0%2Bi2IF6d3SCkFvSbgPlMi9b9Ro84bP2%2FWQERStlJ7g8hZ%2FrJvA73m1%2FMWLrNk7pytM%2BL8oNEmM76bU6UCsPAdl0k4X4hzlvN0QLk7yQqjCGmwu88UsvFkHSYNj3f8pVNViSqEjnhs28EXDCbSF0s9bQjBx0lmODVH3b6WjHzx6YSAiWZDWL%2B9xeGowFx%2FDG1U9857ZLQ4VGFRN211ADXSXrZGoeoZXvR6vhJfqkewj9b0QTr%2F673i6EHhQe3VHjjzzKCAWWyedUUlxZWMPrGwfg%2FngYTHLqVasFzApubngbqRKzEjcqQ%2Bk%2FSnlUyvdDjXZXGwlqBRax%2Fq%2FXvVQ5JSjRmpcpuBcKLulQ52BJj8vLV%2ByTBMGtztSmA8mvuO8oXclWRam1cWxW3a0Cs6aXc%2FRSe5fjhEARnCMOajhxKZSTnJDMfK%2BgrJ6KOfXc90ALZ6MRmU%2BnyqP8sPZc76dFlNYS3GH4IRot6UldhWbVju2%2Bw7rCTCYXFOTB3HnL7OLqxImdel2eZIwgKTfyQY6pgEyXWD6aLH5%2BhLf%2FHYGPvKqhHH8KU8bCuiXrLRCUV4qXeUYd7P8I2vgnFDTxZeW0xOrLH1bsieUCZEF6NTKELKIj9rJjtz4b16qh%2BS9IcPdALSv2ZZb5gfzvSJpbRsnJTzR6WxYFdTfcW2fEW%2BS3J801%2F%2FqQkHbKXS4Kj5oM53WE18zqDiPcTYQLRgjzLQz9yxDFLMIQ4gvJoeiwRsZq6AFCxlhTZOq&X-Amz-Signature=f50f11b76120320d7720aecdc338d52c49fcfddaa86a79e7b5530cbc9eec9504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

