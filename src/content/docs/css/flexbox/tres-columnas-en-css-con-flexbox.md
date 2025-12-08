---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SEN2ER%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWclYPj5y5EHXJ%2FB%2BxWLlm6D0N%2BVL5ssr1RvJ14FH%2ByAiEA9lfPQogRlI%2B0cq%2B5WSS15yYDAKOkATc1%2FnONXUV5HQkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyJ8BA2YYrgmAv9wSrcAyvyf8aLqTXLs28UopZNYgnsJjTzNc1ASALjsm8s3ZOrtxUjdB%2FOWcSBATtAUojPaqwVyo9OXiSU6lBeRfKs5mE5hvOLT86biOQvKu%2Fn%2BjXkRvJLySvPEE8LZfkKfMEz3FnfxYmDYK9wsVUgtdMi6WoSC0y0wVnday1CWz%2FJmEOdzVupVHqopcbJVcVrQ38nXK9l5tRqkLTS0v6sEfMNaJGQIXp%2B4oN7jxsHGfrmp9GsFMpG9ggHP8MysL3iVK9VW%2Fidks8ajJOtFTvdc18K8VYseoY7NFI0zpIvUR%2FsSP%2B133OeYTu%2FiQWq2wBQXm2YTfl9u8O5l%2BYTrTme%2BOd2XfaxrzPXsAoLThBRvKq3VuYeeKO6ypLwscMfY%2FQeLXBmt28trr5Q%2B%2Bttt9%2FUxCaavRB6R4rvPjDatGuLJjuV9GZtOkt%2B9Ph%2B9FqMPOtN6Tgcf08QIXU9lX0l%2BMBPfJYSlsFEC3s2P4Hvo%2BOIkoNyBzWnlChBkdfBIYLF5Glqn33x%2FHncV8y9Z8OUN%2BmW7Pc2lHUTl%2Flku3uFICsHY63Y%2F40IYWp6AnRMnycZ8UqQmC0rzJeiofc%2FW%2F07nF9arbPOe3nbkHfIXgzEaFta0Raladp0Pf9ARfaf2y201ED6MOPQ2MkGOqUBwS3OJWYXOdq%2FsDluYlUC5xi3J6IzHjAB6V43C7XJVlZ4M%2By2HBdC7HYwW6NsTrqNULHvCUUnkXukTrTzAIP%2FY9ElJyUd3rzVAuBAludQDYjHarNyYlLoubxIwL%2BHdXDjfDqF5zHtwzcxAIXz2UeInTusymabg2Q6Um%2FkPpqZForHIbmuu9%2B05BpkofteiHgbTZZ5U%2B1n%2Fa4WIZiq%2BNXOozxevB%2FM&X-Amz-Signature=a2507cae3c9b46d185051bdcf3a60173321a495575380db6e00abad3b995d547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SEN2ER%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWclYPj5y5EHXJ%2FB%2BxWLlm6D0N%2BVL5ssr1RvJ14FH%2ByAiEA9lfPQogRlI%2B0cq%2B5WSS15yYDAKOkATc1%2FnONXUV5HQkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyJ8BA2YYrgmAv9wSrcAyvyf8aLqTXLs28UopZNYgnsJjTzNc1ASALjsm8s3ZOrtxUjdB%2FOWcSBATtAUojPaqwVyo9OXiSU6lBeRfKs5mE5hvOLT86biOQvKu%2Fn%2BjXkRvJLySvPEE8LZfkKfMEz3FnfxYmDYK9wsVUgtdMi6WoSC0y0wVnday1CWz%2FJmEOdzVupVHqopcbJVcVrQ38nXK9l5tRqkLTS0v6sEfMNaJGQIXp%2B4oN7jxsHGfrmp9GsFMpG9ggHP8MysL3iVK9VW%2Fidks8ajJOtFTvdc18K8VYseoY7NFI0zpIvUR%2FsSP%2B133OeYTu%2FiQWq2wBQXm2YTfl9u8O5l%2BYTrTme%2BOd2XfaxrzPXsAoLThBRvKq3VuYeeKO6ypLwscMfY%2FQeLXBmt28trr5Q%2B%2Bttt9%2FUxCaavRB6R4rvPjDatGuLJjuV9GZtOkt%2B9Ph%2B9FqMPOtN6Tgcf08QIXU9lX0l%2BMBPfJYSlsFEC3s2P4Hvo%2BOIkoNyBzWnlChBkdfBIYLF5Glqn33x%2FHncV8y9Z8OUN%2BmW7Pc2lHUTl%2Flku3uFICsHY63Y%2F40IYWp6AnRMnycZ8UqQmC0rzJeiofc%2FW%2F07nF9arbPOe3nbkHfIXgzEaFta0Raladp0Pf9ARfaf2y201ED6MOPQ2MkGOqUBwS3OJWYXOdq%2FsDluYlUC5xi3J6IzHjAB6V43C7XJVlZ4M%2By2HBdC7HYwW6NsTrqNULHvCUUnkXukTrTzAIP%2FY9ElJyUd3rzVAuBAludQDYjHarNyYlLoubxIwL%2BHdXDjfDqF5zHtwzcxAIXz2UeInTusymabg2Q6Um%2FkPpqZForHIbmuu9%2B05BpkofteiHgbTZZ5U%2B1n%2Fa4WIZiq%2BNXOozxevB%2FM&X-Amz-Signature=eb8ca662da1146fe98658014334cf3fb7c2dd1c540d2b2281883babc2936ae85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

