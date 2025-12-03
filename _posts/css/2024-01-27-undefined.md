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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SCX5FU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCLs%2BTh%2FOpzCEtnKi5uLXwq5t1JaoP19Gqq%2BAC5biN%2BAwIhAO9ZsGnrwwWbpSUkIDZM72LIG9grKcrsLpuXfT5IDsVsKv8DCCkQABoMNjM3NDIzMTgzODA1IgwIiuikxdFTDhGAYtQq3ANn%2BUmLBkz4m%2BlbNZQIw51lQAoZFfpSBpPCXWyg0q3MnybALKlM2T3uBPuMcRTWnvy56%2BeeNoAAuM6LrZwqCTraH3mz58JV9PnYO7o%2FdEf3v9ZOfNHAA03U8fkRfQh2AVjHvZreFSKWxlwA8XaNR7dy7H7E%2Fup3SHbGcsZSnrBMC8K8xEQxonAXT4ihnDl00GfCW07j74HvL8qg6lMqSlwMEuDFhFeYphcY1BAOJYdcTJRAzbO7Nk0rRg15suzD1alZRNfm1MI6YXAu7%2BVp5%2BzwehnDS%2Fq6m920Q6QbW5jUO3QmWckonkXyk6OkrcNcfZBcDaAUHRyoe2Cst4O9E7AVypoby7BbGY2yFX%2FijoZVFxWGDhw3ApmknkAdz2Av1CwMGyLXW2lNfkfEURuu20JGpRZcFV%2BPsJ005rdydaanhMOEp0eqqP8oARC8L8wQd5KSmjWMz3dznSPR2lTpPTu5zeHk4wcWbK41Vl9KAeziQU75m9oXadiYqFHDGi1A46cKW3fjcUh%2BvUJqDu1UpGU3CpIKmVVokG75hWWrciWjFiQZNed8%2F2z8aMsS7Shd6YrE3YeUvnmzVd1wToWWB%2FZsZQMKN6jnIjV6r%2BjlJJ1u3nSK4iNVsQxXXl5d9DDN1L%2FJBjqkAWq0d7qRcWgaEkNGnx0QtOf%2FXZ4%2FKOsG9p%2B6yPbF9a0mHdPEDElvCh92rqjKlWQBBYUooiXbeSxgXs7AZR8vz6EFg%2Frc9H7wBD0lspQxGqIXTpPihXw6MfRwHJlIQgpZdimknABE0%2FtNu5hjcAl8U4wjgeqDAL5I8bBZDXudMsALa94OccFnm9XHtEJiSKzLGzu0NGfPHxRZh0j5EpS7gqAMqkLF&X-Amz-Signature=01b5c8c35ad4a98bea0369ba1c1df2891daed14cd6c19d0724fde9c20800a096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SCX5FU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCLs%2BTh%2FOpzCEtnKi5uLXwq5t1JaoP19Gqq%2BAC5biN%2BAwIhAO9ZsGnrwwWbpSUkIDZM72LIG9grKcrsLpuXfT5IDsVsKv8DCCkQABoMNjM3NDIzMTgzODA1IgwIiuikxdFTDhGAYtQq3ANn%2BUmLBkz4m%2BlbNZQIw51lQAoZFfpSBpPCXWyg0q3MnybALKlM2T3uBPuMcRTWnvy56%2BeeNoAAuM6LrZwqCTraH3mz58JV9PnYO7o%2FdEf3v9ZOfNHAA03U8fkRfQh2AVjHvZreFSKWxlwA8XaNR7dy7H7E%2Fup3SHbGcsZSnrBMC8K8xEQxonAXT4ihnDl00GfCW07j74HvL8qg6lMqSlwMEuDFhFeYphcY1BAOJYdcTJRAzbO7Nk0rRg15suzD1alZRNfm1MI6YXAu7%2BVp5%2BzwehnDS%2Fq6m920Q6QbW5jUO3QmWckonkXyk6OkrcNcfZBcDaAUHRyoe2Cst4O9E7AVypoby7BbGY2yFX%2FijoZVFxWGDhw3ApmknkAdz2Av1CwMGyLXW2lNfkfEURuu20JGpRZcFV%2BPsJ005rdydaanhMOEp0eqqP8oARC8L8wQd5KSmjWMz3dznSPR2lTpPTu5zeHk4wcWbK41Vl9KAeziQU75m9oXadiYqFHDGi1A46cKW3fjcUh%2BvUJqDu1UpGU3CpIKmVVokG75hWWrciWjFiQZNed8%2F2z8aMsS7Shd6YrE3YeUvnmzVd1wToWWB%2FZsZQMKN6jnIjV6r%2BjlJJ1u3nSK4iNVsQxXXl5d9DDN1L%2FJBjqkAWq0d7qRcWgaEkNGnx0QtOf%2FXZ4%2FKOsG9p%2B6yPbF9a0mHdPEDElvCh92rqjKlWQBBYUooiXbeSxgXs7AZR8vz6EFg%2Frc9H7wBD0lspQxGqIXTpPihXw6MfRwHJlIQgpZdimknABE0%2FtNu5hjcAl8U4wjgeqDAL5I8bBZDXudMsALa94OccFnm9XHtEJiSKzLGzu0NGfPHxRZh0j5EpS7gqAMqkLF&X-Amz-Signature=d1b3279012c04d66feaa29fb14f757fff92ff622bdb99095b252ce5290ca3369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

