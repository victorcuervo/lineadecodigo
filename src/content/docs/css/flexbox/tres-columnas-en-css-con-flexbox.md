---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5BAG52%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDVNRu7gIljXwUSU0bZGdnczWvS6gv4oZLnHedceoPwIhALUatppFrA2KKZAXAUYEUASso18CR7D4EFtoJknoj92cKv8DCGQQABoMNjM3NDIzMTgzODA1IgyZljha19yQc1cnXrcq3APmEimZsVpSgazU%2F8st77OBUHEw7hCzvv0Zs270%2B855FUPItLVPQwQZVYmMBdJOH96yo4YbVysNkTXcYP2t3QdUfa%2FthcVC33ZXs7aJ1ozcLOEhzzFtCbJAappYy3cM9YzCVanQoTrgWgS0xrg5MikrO7xXxhjXAkK8f2ciEEuHgbd%2B7nYMdYtSQfvPR8UsCvQSLi2CWN7RyWODhCwIWmwelhzkHnX2KKNvv6ck62N8QsGWxi7nkWngycozaumPFXPIafjcVwHj91toD62%2BxRBTo%2BPu6IreoFjgBCfcxM0RZGULoD0wUpmr5IZ4D5Zdpsy5Qth9FPM9Lk7L%2BIsHekJ3QoJbkzbH7BpNlnXclMWj7MiF4Xud3knfZiVChFJ6%2FCfwFc3aQWUhAHLmjIKKDhCuasfH7kxFDCL1Lyi58IT23abqhtD3KKhIIsGQJ2BKmsYRbUhXfcqHxZLt7UdCWoWXGZJH2elXqLzF01RO6AdaUsLjSoINqyxvZzT8Wl4nz1yp8NnJcFV3y81A5UvXrBGnmvxfnvCkgmRwZnNP80LD0%2B5nBFa%2BKjZpCKJhXosRK2iKZyX57XHVtNGE93jAekktsjcPXPufxeidK6Ow8d2BOIx7wbdO2TiDuTdljjDD18zJBjqkAdNrSIQNfzn6yF5SyVJyBWGzI1NJurj2J%2F3%2FWjTmyW5jj7E3hl2FFmUX05acWjk7SjDbVi6O0W%2FUeb%2BEPejDgoaWKhZTwgh75yE%2FjypRbbnq3fiAh9uX909NvN%2F9sBKKMDwfupulQiTNrXvODVng5g4uVClhtGGIpNZB60VkWRvEkoivPPk0rUR3Rz2wzySwz0IdZIrYlyYtQRTF%2F6owWU6uifiZ&X-Amz-Signature=497acec99ca44076761428ce6ce0faa489e24bd82cb860efd3c60b3141178313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5BAG52%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDVNRu7gIljXwUSU0bZGdnczWvS6gv4oZLnHedceoPwIhALUatppFrA2KKZAXAUYEUASso18CR7D4EFtoJknoj92cKv8DCGQQABoMNjM3NDIzMTgzODA1IgyZljha19yQc1cnXrcq3APmEimZsVpSgazU%2F8st77OBUHEw7hCzvv0Zs270%2B855FUPItLVPQwQZVYmMBdJOH96yo4YbVysNkTXcYP2t3QdUfa%2FthcVC33ZXs7aJ1ozcLOEhzzFtCbJAappYy3cM9YzCVanQoTrgWgS0xrg5MikrO7xXxhjXAkK8f2ciEEuHgbd%2B7nYMdYtSQfvPR8UsCvQSLi2CWN7RyWODhCwIWmwelhzkHnX2KKNvv6ck62N8QsGWxi7nkWngycozaumPFXPIafjcVwHj91toD62%2BxRBTo%2BPu6IreoFjgBCfcxM0RZGULoD0wUpmr5IZ4D5Zdpsy5Qth9FPM9Lk7L%2BIsHekJ3QoJbkzbH7BpNlnXclMWj7MiF4Xud3knfZiVChFJ6%2FCfwFc3aQWUhAHLmjIKKDhCuasfH7kxFDCL1Lyi58IT23abqhtD3KKhIIsGQJ2BKmsYRbUhXfcqHxZLt7UdCWoWXGZJH2elXqLzF01RO6AdaUsLjSoINqyxvZzT8Wl4nz1yp8NnJcFV3y81A5UvXrBGnmvxfnvCkgmRwZnNP80LD0%2B5nBFa%2BKjZpCKJhXosRK2iKZyX57XHVtNGE93jAekktsjcPXPufxeidK6Ow8d2BOIx7wbdO2TiDuTdljjDD18zJBjqkAdNrSIQNfzn6yF5SyVJyBWGzI1NJurj2J%2F3%2FWjTmyW5jj7E3hl2FFmUX05acWjk7SjDbVi6O0W%2FUeb%2BEPejDgoaWKhZTwgh75yE%2FjypRbbnq3fiAh9uX909NvN%2F9sBKKMDwfupulQiTNrXvODVng5g4uVClhtGGIpNZB60VkWRvEkoivPPk0rUR3Rz2wzySwz0IdZIrYlyYtQRTF%2F6owWU6uifiZ&X-Amz-Signature=bf66866b0a6e9b073ab79511f89e8cd26ffde673d51707b884b7a3ec81311a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

