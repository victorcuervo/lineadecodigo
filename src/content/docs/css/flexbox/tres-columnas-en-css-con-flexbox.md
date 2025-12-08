---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUZK2D3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEizFwp13PjgcA76DhHWfb6AxsbeOhOKj6ASI0y2qfV4AiB2oQnNDjKoI%2B%2B5K8ONrXjQcxVMp4Qj%2BaleHxI0XtwKnyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfta33sL7JWklUKhIKtwDy0D%2BDhRIP5FH7dg8EQ1GJwr%2B0rO6CbvXogpqfdy92%2F4eGSrAHboHX2SrS6j%2Bg8xVQcUXAZjghnecAdc2fPS0hj5O%2F4nz7c7u0Fts1zX7miFewdWXRswMb7g%2FbAjz0SupuAJfXX3I8F7Vy4bTv3KefkuhtIIaF6uCJh2ChRXnXY68TOkQTs9IfMx7Nycv1Xsm1VZzypM32bxa%2BLT0UDK%2FM1eqfZlIrDm%2F7d%2FKcLL5Q1T7mspXVFnlXeF7iJ72BBbDL5qJxprw5MPqdJmcJVxslPcGgqs7sdvgpbtlbSIpPUOMr1uod8BcfuIxETD0tkxqPfdtRKtuKQZ3duV54GqL8MLSqWdjbKQcDZJLLwp232dq5xErxGEhA%2F5sYKmtVnVDdYnIZkh6k%2FKDEvgvkxh4bdf3YHcnc1F6%2F%2BANelZrfWPSpD3T7NcWor%2BkbiCVEgFbeSaZwFQORltb9dPw%2BvNmdl%2BRlom5woaJhIv63w%2FrqAim3WQD5Oa21f4GrIwdM4sZNslGGqJJe8ohv6AG7wSTN7VcUw4aGp6qZVADBA8VdRsW69Tq4RzCnzup8ZiQVBk0EgxiAr%2BPj4ZKr1%2FwV4xhqwKCer67iLkgihU98dOYjmpKkX0AasslgZRb%2BdEwkaLdyQY6pgHRARz78xbGt1NQE2S2T6yfLZ5GOY%2BNDve%2Fdxk8AxQmisJ5kdap3mKGfKjKN3XpYhAWW9t7%2FVNTrPM%2FS0EiiLiF3923iZCIjMGiKd7367XvCIOhiedGc1F%2BSX4rsg0thpsDNY8JxOUUpKkymmGU9LVJUFy5NIJVsb%2FfGKU66RuqSaFl3%2FFLs2pnNEFD7CajhzwCelKe9HIPyQLPFRiOpr0JSGWo5WTk&X-Amz-Signature=9a0c48aea4a7248299a547752833a59a68eb53d5914de11484e78395a871700c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUZK2D3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEizFwp13PjgcA76DhHWfb6AxsbeOhOKj6ASI0y2qfV4AiB2oQnNDjKoI%2B%2B5K8ONrXjQcxVMp4Qj%2BaleHxI0XtwKnyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfta33sL7JWklUKhIKtwDy0D%2BDhRIP5FH7dg8EQ1GJwr%2B0rO6CbvXogpqfdy92%2F4eGSrAHboHX2SrS6j%2Bg8xVQcUXAZjghnecAdc2fPS0hj5O%2F4nz7c7u0Fts1zX7miFewdWXRswMb7g%2FbAjz0SupuAJfXX3I8F7Vy4bTv3KefkuhtIIaF6uCJh2ChRXnXY68TOkQTs9IfMx7Nycv1Xsm1VZzypM32bxa%2BLT0UDK%2FM1eqfZlIrDm%2F7d%2FKcLL5Q1T7mspXVFnlXeF7iJ72BBbDL5qJxprw5MPqdJmcJVxslPcGgqs7sdvgpbtlbSIpPUOMr1uod8BcfuIxETD0tkxqPfdtRKtuKQZ3duV54GqL8MLSqWdjbKQcDZJLLwp232dq5xErxGEhA%2F5sYKmtVnVDdYnIZkh6k%2FKDEvgvkxh4bdf3YHcnc1F6%2F%2BANelZrfWPSpD3T7NcWor%2BkbiCVEgFbeSaZwFQORltb9dPw%2BvNmdl%2BRlom5woaJhIv63w%2FrqAim3WQD5Oa21f4GrIwdM4sZNslGGqJJe8ohv6AG7wSTN7VcUw4aGp6qZVADBA8VdRsW69Tq4RzCnzup8ZiQVBk0EgxiAr%2BPj4ZKr1%2FwV4xhqwKCer67iLkgihU98dOYjmpKkX0AasslgZRb%2BdEwkaLdyQY6pgHRARz78xbGt1NQE2S2T6yfLZ5GOY%2BNDve%2Fdxk8AxQmisJ5kdap3mKGfKjKN3XpYhAWW9t7%2FVNTrPM%2FS0EiiLiF3923iZCIjMGiKd7367XvCIOhiedGc1F%2BSX4rsg0thpsDNY8JxOUUpKkymmGU9LVJUFy5NIJVsb%2FfGKU66RuqSaFl3%2FFLs2pnNEFD7CajhzwCelKe9HIPyQLPFRiOpr0JSGWo5WTk&X-Amz-Signature=a2e520074da9169e578f37d9366f04c4e27767b4db18a09201beb2bec3b2390b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

