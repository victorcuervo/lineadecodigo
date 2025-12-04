---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDBLQ7I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCNKVONt4RLaF%2B6WckWiTYkX5h%2FZWEESInXH2gW6O0D2AIhAK1%2BDgqxOZON%2BfrmbL05wVO20WFRJfdfmmY1fZqvccNYKv8DCEUQABoMNjM3NDIzMTgzODA1IgxJgwGZ5YMt2dEK7QEq3APbWJI5S3cXORHaT5CyErWQlOBwiBP6OlfSNRUpvuA9M8SOtIiPnX4XNDQ8o1zavM4fCU%2BGk9%2BHEBzSa6BdDXnnChs30ckg7QNq4qVE1DgVRPVWbLtlSsTzjQ6szyANG61ayVv0sAMUhgbFCgVl51a6CPib4tjb9ViPb2YWEQG9Ipw8q3m7lcZAGAGdXcL05noBIZRMRVRV2VGBKTAtzZ184NkB1eb8N7cm2ul0nDV1pq0BcWd83fvBTIBgnZzOMrlXcpS29LB%2Fed3yeq2fWVYlAHmQHzXpE7dKDF%2FRLJ9JL5TE0eFphkzvA5192IdHhiErDwbd42hjynP93GLg584cSPjS04pS%2FdKuUB9NjuJGS8jsVgZ22gIoJrpJBJBuFDuQKYjJXUrSreYZMgq4oBaL9ug8IPUvPf0xUlEIqZoVf6NSD0POolSyNxPfyK9%2Ba8nF6ycz6ggwJ4He88epvTod5g5VPyxTte3pCk%2Fo%2BzcPFbfT9hKJYzNzuTX0SvjbFnu0%2BHtqT20R0q94lyJUZwJb85hc3%2B10iyzeM3xl2xc%2Bxzzk49q9%2BYuCiczhqhZmgW7y1Zhh4cN2CMGU3%2Bw41yAb1jFSvZusFf%2BF3OUC1rehqfOuXNyfYD%2FoapB0fzC858XJBjqkAQvGeNm52S4hA%2Fu%2FWZIP4Sk8QMBRNSG9gtpLOS%2BPr3yS9MJKy%2FmT6pLJc49BnuwVOYIkwV7M7Zn0vtx2TUTGjNszGYxWtMgNVH4xfbSP1HtAYXxY7uL5bas%2FlxWktJ1sMsw2%2FnWf%2FX5orTBY%2BwYsAk%2BNukgJPRnWKt74HaUoOtSKI7r5T553H5cRVCWGgy%2FBhyXOkMDws9iP3EHEYXiCA1RxeKyv&X-Amz-Signature=4fc4e772b123142eaa5ee2b639cbaf71f55909fac04ee972e2bfb15c5209090e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDBLQ7I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCNKVONt4RLaF%2B6WckWiTYkX5h%2FZWEESInXH2gW6O0D2AIhAK1%2BDgqxOZON%2BfrmbL05wVO20WFRJfdfmmY1fZqvccNYKv8DCEUQABoMNjM3NDIzMTgzODA1IgxJgwGZ5YMt2dEK7QEq3APbWJI5S3cXORHaT5CyErWQlOBwiBP6OlfSNRUpvuA9M8SOtIiPnX4XNDQ8o1zavM4fCU%2BGk9%2BHEBzSa6BdDXnnChs30ckg7QNq4qVE1DgVRPVWbLtlSsTzjQ6szyANG61ayVv0sAMUhgbFCgVl51a6CPib4tjb9ViPb2YWEQG9Ipw8q3m7lcZAGAGdXcL05noBIZRMRVRV2VGBKTAtzZ184NkB1eb8N7cm2ul0nDV1pq0BcWd83fvBTIBgnZzOMrlXcpS29LB%2Fed3yeq2fWVYlAHmQHzXpE7dKDF%2FRLJ9JL5TE0eFphkzvA5192IdHhiErDwbd42hjynP93GLg584cSPjS04pS%2FdKuUB9NjuJGS8jsVgZ22gIoJrpJBJBuFDuQKYjJXUrSreYZMgq4oBaL9ug8IPUvPf0xUlEIqZoVf6NSD0POolSyNxPfyK9%2Ba8nF6ycz6ggwJ4He88epvTod5g5VPyxTte3pCk%2Fo%2BzcPFbfT9hKJYzNzuTX0SvjbFnu0%2BHtqT20R0q94lyJUZwJb85hc3%2B10iyzeM3xl2xc%2Bxzzk49q9%2BYuCiczhqhZmgW7y1Zhh4cN2CMGU3%2Bw41yAb1jFSvZusFf%2BF3OUC1rehqfOuXNyfYD%2FoapB0fzC858XJBjqkAQvGeNm52S4hA%2Fu%2FWZIP4Sk8QMBRNSG9gtpLOS%2BPr3yS9MJKy%2FmT6pLJc49BnuwVOYIkwV7M7Zn0vtx2TUTGjNszGYxWtMgNVH4xfbSP1HtAYXxY7uL5bas%2FlxWktJ1sMsw2%2FnWf%2FX5orTBY%2BwYsAk%2BNukgJPRnWKt74HaUoOtSKI7r5T553H5cRVCWGgy%2FBhyXOkMDws9iP3EHEYXiCA1RxeKyv&X-Amz-Signature=5172d7b7c538bbb2199bd530e7cb61e14b6e06ba8167ef94baf4f95cc08c26c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

