---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2DQ6XK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUlE1TPd9EtZqovG0hi6FyzQtikYJRTnxNV40w0Nxo8AiEA9f%2B80NUwn2JtJRZpX4TnrK31EekV9h7jEjOX1u7VFIMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUF1NHOpA%2B5XfaJyCrcA%2ByhU2gPP0qOHeaiZqkUD08ZUH3qNEIMxPpB%2F2MeNsYdQQOMRl35s5tPatN9Erl4cXQDvBXZlHLP0SE%2Fx1fPLVvjUYyZSPD613hYnqbN%2FwB%2BOkvzoE9svkNTCI0LYK69rievo1HI%2BPwV%2F46FxQHDr8ZiNSCW6UKirvo7sr3cCqLCbLT4kK%2Fi2Ko5TFtxJQJ9DmW%2B1j8jqxgwEqm27tYK5Z5szItabltXdc8YM%2Fz6TMxvi3E67F7ucnat03NJAMX8BYpXb3HxZ7kSRMvXpG1fl36egJOqrpiUtwWcvWOAI3yQSCwqaqH5GoLsD6%2Btu9dqwDgRQpjYKIfPiOmqW%2BzCTpwCR08UBHNMVCF%2FBSYKznpoXO3vnTNuF%2FsNWl3Iz%2BmC%2B56BcYBezSmhlw38HTfnA0wmCt9OY6to%2FnCnczeq1WHJQrup9kcGy4cTF9U4ZGqoziv%2FX%2BbqgeZ%2BRIF9QnCGdO5TKmYbk1gxjvnX4KdmGxWc3ON5EzeQx7JqmUyL9BOdXTeQQ6WRr5e1n4FpUfjcZKHCl47yxu%2FSwcCnfm7LTI5TTucn6r%2FfNDyUepgDXDq2a6K91WETmZ1eTK%2BsZ%2B83UyR9wJe36M%2F5ljvcmSHTwgL69iRygPcuZXJ6aHxJMOOh3ckGOqUB%2Fo8J6MXxiBMiZDWSZ%2F1czasTx98jidStr%2BRXiyHEgMkTiaA%2BIAVUxVV%2BmCiZwCmh0kbV9D7Qd7A9ms3ajL5HpzjAYXLTDW%2FksNq6771kP44lUpSPr95af0kvx9Jql4iuC6DLlxwCSpWj9yrXNtz1onQhyvDFCPzJRNzLTdDniLsfmHBQWjwKWX3PAaVik631%2FdXZJOcLJxZ%2F6hXTN%2Fq0T9MdY5bz&X-Amz-Signature=e1184ed5120756d8bad915350e3b69c0eec77a4739b11605eeb162238c85aa69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2DQ6XK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUlE1TPd9EtZqovG0hi6FyzQtikYJRTnxNV40w0Nxo8AiEA9f%2B80NUwn2JtJRZpX4TnrK31EekV9h7jEjOX1u7VFIMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUF1NHOpA%2B5XfaJyCrcA%2ByhU2gPP0qOHeaiZqkUD08ZUH3qNEIMxPpB%2F2MeNsYdQQOMRl35s5tPatN9Erl4cXQDvBXZlHLP0SE%2Fx1fPLVvjUYyZSPD613hYnqbN%2FwB%2BOkvzoE9svkNTCI0LYK69rievo1HI%2BPwV%2F46FxQHDr8ZiNSCW6UKirvo7sr3cCqLCbLT4kK%2Fi2Ko5TFtxJQJ9DmW%2B1j8jqxgwEqm27tYK5Z5szItabltXdc8YM%2Fz6TMxvi3E67F7ucnat03NJAMX8BYpXb3HxZ7kSRMvXpG1fl36egJOqrpiUtwWcvWOAI3yQSCwqaqH5GoLsD6%2Btu9dqwDgRQpjYKIfPiOmqW%2BzCTpwCR08UBHNMVCF%2FBSYKznpoXO3vnTNuF%2FsNWl3Iz%2BmC%2B56BcYBezSmhlw38HTfnA0wmCt9OY6to%2FnCnczeq1WHJQrup9kcGy4cTF9U4ZGqoziv%2FX%2BbqgeZ%2BRIF9QnCGdO5TKmYbk1gxjvnX4KdmGxWc3ON5EzeQx7JqmUyL9BOdXTeQQ6WRr5e1n4FpUfjcZKHCl47yxu%2FSwcCnfm7LTI5TTucn6r%2FfNDyUepgDXDq2a6K91WETmZ1eTK%2BsZ%2B83UyR9wJe36M%2F5ljvcmSHTwgL69iRygPcuZXJ6aHxJMOOh3ckGOqUB%2Fo8J6MXxiBMiZDWSZ%2F1czasTx98jidStr%2BRXiyHEgMkTiaA%2BIAVUxVV%2BmCiZwCmh0kbV9D7Qd7A9ms3ajL5HpzjAYXLTDW%2FksNq6771kP44lUpSPr95af0kvx9Jql4iuC6DLlxwCSpWj9yrXNtz1onQhyvDFCPzJRNzLTdDniLsfmHBQWjwKWX3PAaVik631%2FdXZJOcLJxZ%2F6hXTN%2Fq0T9MdY5bz&X-Amz-Signature=5b743c83e8639bd7a519405ebb384d4a700cc20051757048b46d9bd00ed5c394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

