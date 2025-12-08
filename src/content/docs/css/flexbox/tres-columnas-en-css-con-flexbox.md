---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LMIMQJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARYA72OB2xvw8vtxMZcks0SrLUixX2fp7Tog5%2BMxwNJAiEAhpD0p2JQ%2FC1CTW3BmX8UTM4Cf5qeCaSdcSBakt5frvsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAulGiF9URX9c5dq4ircA9fTpzZn4D1Ehr0HlBrQ42CRtrkucRl3O%2Bv7YL9IVIsA%2F5vsVgiihrKavLdjbVDUM7iEFjlCJQ7rhkiSajXKS2%2FaGctjQ0botx74eEkBhuVw%2FaMUSN%2F3KAya8ppTbHYTHTa42B8NtHKDZ9Hp7QhZEM454vtTkdPzI05PWQd6dE%2FQvouPqT7N5yJe0hAgYEy6pt9nnGgvl2QXGSukVnDK8vkPu1pU8Mi3VuUf3yh7%2B%2F9iHAG437tZ0RReo8JI9wYUO6X71Vj8IkgMgWfgcFzoDIoiBNTyyuSLIzkyDfs4v%2B34aJgB3%2BBY%2BLrP4eDLPxZ23icQ48h2Gv%2BhLx6%2Bnm5mpwgcUmlM3dwLi4Q9IFcMQ0jkRDkHOqkQVQRJDfNtVlOnUGhR623cmIHFD%2FdVMX4fepCM7RePKHbIdKTA8Ny1VYBfCwJOC5Kv4C6obJwbKNMt6kcREEI8KMeUegGo%2F8YYsyBMwN5Tn4KrJwzsOX3bSr8%2F57%2FTGroLN3Zg97qRUPhFPPLlwHdHYWJ81i6We8wIWw7wqwQ5RWIoq11%2FiEyNvLjqsU4OpdHiphuJ6SUAFOsAt0CWB%2BWpdIg%2FfEWC94NJb4rYzmFjbXJwetK89IPfJFpbdUlKaEu9pIHbcpKIMMuh2MkGOqUBzGf7ocMgcK3ELk4Hf0VQUuzZXEys3ruTqUKCENFCEhmgG7AwS%2BZZvUGZkjGg9l7ppUFjbkGZPzWT3ErN66R5K%2Fd5UMQ2oJhn6GM6cjmPaQYz6UoX6t7mJo46dhtI4m4O15DIQVzVsNwAXorMLSY%2FIK5Cnad29Spr2Kx%2FEv%2BVz6%2BdpY4sMQKv3wZlBKOyNIeQWP%2FrBY%2FzKMAatV%2BkH1bdq7XkU%2Bo9&X-Amz-Signature=99bc0db2cc53dc3c0be376d95824e9cad85ec717495060edba174330dcbcf8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LMIMQJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARYA72OB2xvw8vtxMZcks0SrLUixX2fp7Tog5%2BMxwNJAiEAhpD0p2JQ%2FC1CTW3BmX8UTM4Cf5qeCaSdcSBakt5frvsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAulGiF9URX9c5dq4ircA9fTpzZn4D1Ehr0HlBrQ42CRtrkucRl3O%2Bv7YL9IVIsA%2F5vsVgiihrKavLdjbVDUM7iEFjlCJQ7rhkiSajXKS2%2FaGctjQ0botx74eEkBhuVw%2FaMUSN%2F3KAya8ppTbHYTHTa42B8NtHKDZ9Hp7QhZEM454vtTkdPzI05PWQd6dE%2FQvouPqT7N5yJe0hAgYEy6pt9nnGgvl2QXGSukVnDK8vkPu1pU8Mi3VuUf3yh7%2B%2F9iHAG437tZ0RReo8JI9wYUO6X71Vj8IkgMgWfgcFzoDIoiBNTyyuSLIzkyDfs4v%2B34aJgB3%2BBY%2BLrP4eDLPxZ23icQ48h2Gv%2BhLx6%2Bnm5mpwgcUmlM3dwLi4Q9IFcMQ0jkRDkHOqkQVQRJDfNtVlOnUGhR623cmIHFD%2FdVMX4fepCM7RePKHbIdKTA8Ny1VYBfCwJOC5Kv4C6obJwbKNMt6kcREEI8KMeUegGo%2F8YYsyBMwN5Tn4KrJwzsOX3bSr8%2F57%2FTGroLN3Zg97qRUPhFPPLlwHdHYWJ81i6We8wIWw7wqwQ5RWIoq11%2FiEyNvLjqsU4OpdHiphuJ6SUAFOsAt0CWB%2BWpdIg%2FfEWC94NJb4rYzmFjbXJwetK89IPfJFpbdUlKaEu9pIHbcpKIMMuh2MkGOqUBzGf7ocMgcK3ELk4Hf0VQUuzZXEys3ruTqUKCENFCEhmgG7AwS%2BZZvUGZkjGg9l7ppUFjbkGZPzWT3ErN66R5K%2Fd5UMQ2oJhn6GM6cjmPaQYz6UoX6t7mJo46dhtI4m4O15DIQVzVsNwAXorMLSY%2FIK5Cnad29Spr2Kx%2FEv%2BVz6%2BdpY4sMQKv3wZlBKOyNIeQWP%2FrBY%2FzKMAatV%2BkH1bdq7XkU%2Bo9&X-Amz-Signature=562beb6190f3ce682880856931c396602bf1a81f571f310fd6f2f54b74156e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

