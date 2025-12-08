---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKYNQ5Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9M%2FPU9knXu%2ByYp73gpEJfVCA%2BJOrgouwOSF17LXCtEAiEA20yIH%2FaZ0wIJoJvDK36fcn5kOM5v%2Fe3iTh2cYjkMbQoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0SHkNHa00vwqnt0ircA9vI7uB7XvlpyqAz1L1n76zaojp1vcyX6DgxVCGUV4cKs1RrQNa4ZAH0oV2XfJ8At9NuZFZx0FDtLqp0W1dqVUJ1DaESAEft1bErUDUvEbKQlnCiRL%2Fu2YYKpNaByQj%2FMuaJpxjYyrFEhj9x5oHyTyJPAWeNx%2F%2FMk%2FRaDw8VOu9G22bD0IMoZkmK4sZmfHnkx%2Bw9jbnbTaqbi4NIOHX5i%2FsZZTaG%2Fvs%2FkykXELMbLFCg%2BZoQF%2BseEqgbGGHLTL9dHBAFWUUgcrRZhg3Ur2pKLZj2jlyoIa91UGvBt51v2PCHih64o6PLxlKAH00czhoKzzelorLCEg55xYBubJFkuLZ%2Bhp7VXkNGbewWoyQ3IWEe5nR270LHyH4LlVQbALKVdyfr0zU3hAseglyYqVUbuzDcmJz%2F4mBuRhaBS69utfa8StXyPy4%2BqfKqP0OuK3VcQeunGkc7z4z0RiuxFrbYKkMgfXUfAPS0H%2BSOAy1boMz6lPqYqRYHUaFRmwqmbDqpHqSzVW35pCB2ATPPonPXIOL5uJPlpwcUVDhDGvvlK1IaJPs9wy1oqS7m4nivxNobDOyjBTxFwApEmp3m92I%2FJvqbf4s0uo%2Bbxs3x1tVzcYEhhj8oHlFsqjEIkPDhMJSi3ckGOqUBLU4yU6inwt4JkGHirzUdmEscXwStoxZdUrZKp8IHoDqn7pXmmT0nFJE6qYPyTxD5D0yXPMkuYcU%2FFygxoGu9YnhmHN3uK6xoZXkOZ6weVEFHJH%2FRTBIUNEIP02IslkFxg5P9BmvpkXeOA36M1rKeNXNUA0Y54XsuOtqZsnOrJQnNdzxl255uLcSiYgRg%2F8YTUYk4ZpGLVOAq0ZzVIc%2FpOPqmIgF6&X-Amz-Signature=b6e6edf1e547f313fe0e167c1462518b99325df28c4da2f3052953e63320ac73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKYNQ5Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9M%2FPU9knXu%2ByYp73gpEJfVCA%2BJOrgouwOSF17LXCtEAiEA20yIH%2FaZ0wIJoJvDK36fcn5kOM5v%2Fe3iTh2cYjkMbQoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0SHkNHa00vwqnt0ircA9vI7uB7XvlpyqAz1L1n76zaojp1vcyX6DgxVCGUV4cKs1RrQNa4ZAH0oV2XfJ8At9NuZFZx0FDtLqp0W1dqVUJ1DaESAEft1bErUDUvEbKQlnCiRL%2Fu2YYKpNaByQj%2FMuaJpxjYyrFEhj9x5oHyTyJPAWeNx%2F%2FMk%2FRaDw8VOu9G22bD0IMoZkmK4sZmfHnkx%2Bw9jbnbTaqbi4NIOHX5i%2FsZZTaG%2Fvs%2FkykXELMbLFCg%2BZoQF%2BseEqgbGGHLTL9dHBAFWUUgcrRZhg3Ur2pKLZj2jlyoIa91UGvBt51v2PCHih64o6PLxlKAH00czhoKzzelorLCEg55xYBubJFkuLZ%2Bhp7VXkNGbewWoyQ3IWEe5nR270LHyH4LlVQbALKVdyfr0zU3hAseglyYqVUbuzDcmJz%2F4mBuRhaBS69utfa8StXyPy4%2BqfKqP0OuK3VcQeunGkc7z4z0RiuxFrbYKkMgfXUfAPS0H%2BSOAy1boMz6lPqYqRYHUaFRmwqmbDqpHqSzVW35pCB2ATPPonPXIOL5uJPlpwcUVDhDGvvlK1IaJPs9wy1oqS7m4nivxNobDOyjBTxFwApEmp3m92I%2FJvqbf4s0uo%2Bbxs3x1tVzcYEhhj8oHlFsqjEIkPDhMJSi3ckGOqUBLU4yU6inwt4JkGHirzUdmEscXwStoxZdUrZKp8IHoDqn7pXmmT0nFJE6qYPyTxD5D0yXPMkuYcU%2FFygxoGu9YnhmHN3uK6xoZXkOZ6weVEFHJH%2FRTBIUNEIP02IslkFxg5P9BmvpkXeOA36M1rKeNXNUA0Y54XsuOtqZsnOrJQnNdzxl255uLcSiYgRg%2F8YTUYk4ZpGLVOAq0ZzVIc%2FpOPqmIgF6&X-Amz-Signature=9bf764c9780b07445647bc97b3f0557dc259ece70ccf92b5c45e0a0956966b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

