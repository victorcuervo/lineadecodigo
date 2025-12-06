---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5BRC6J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGwNaR5OAuxXzpf9wdjKOhSLsJqMM%2Fbv29bk3gP75uqAiEApRr6o2IdfeNvE7T1kRi2kaGdadrEz0gAHpZ0rj6IkK4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEYNDqaHzaw0vbCpFCrcA7eOBX7f%2BtpTxPu6trjxxbVg3esloAZgJM%2Ffl9nMgbH3PCAu1OSvs6hPiCBvijXv3eULWne3sPtn2SCO%2BUX48kqx9RqBKLLH6EVqmW0QOKQo3kDROB7%2FlG7V81bhgSOAKQhMRW5jxpUyAyLxDzfEkscHUZpKVWOYMqYt5YwPPUiLR4M%2FAcdiyxGCU5WPwLLNKWQ9r4ceaQxy29JOz7p320Thz7s5IGh2qtfpRr5INiTgLZN2%2Bh18vQZcOXoLOChG1sPBQabWwOZ2AfWWHy1MRV9ygO7l4qNGVom17IZ40FJ1nJII9V3ufyvjO%2BUhl2r4jfi4g8xnlgEnxYEdqb86TMPHPWv3uRbXpQkVbfGdnyg%2FfyMGU17sITwx5ltdagJxv%2FH4c2LUqfM7APsxxuq%2FBc%2F3iePEeZKy%2BZlyOhbzmA6ui7LPb3Eei%2BS2H4Bf7i5B0eTciluoUlCuTbxWiMyvWfREJfD%2Fcon%2FyyazWWVl01iHl0GITs1si8Ys81II7ets0xfDPZ4inhGbJ2%2BcaVvdhkeQHY6EbkXsZ0%2Bd4EPCRkaUxjVwUgqysY173QKrhh7ekZ%2FHqqO4E6GIcjQxkJQ45dO%2Fu0SpF5YKxMJ9diHzeuHDDbMF2o33Ghqaa1t7MJvK0ckGOqUB3WkHGinb4NZCzNF1YDxDSVVntJi8wAXcQyH69%2FY7DECoW1ZBwdnfQWZgxDmjNJd6F0uzQZAK9c%2FGCUC%2FIpXGDoVBykZ3HtmzEd5zrNuD7YtO7A38ppymh1HkV85MAjqk3x21H61NEPDbJvcwK2dZlSttPFzGD%2FnnCla0ETTkIPQsf1yPPqcpImoHNgr9IQIu%2FxBHS17SDEelSs8LqSP2vNuouTSl&X-Amz-Signature=3e42f27e050c72d60b36d3571186e78886ef804706dd407fde36f6ddfacbdd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5BRC6J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGwNaR5OAuxXzpf9wdjKOhSLsJqMM%2Fbv29bk3gP75uqAiEApRr6o2IdfeNvE7T1kRi2kaGdadrEz0gAHpZ0rj6IkK4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEYNDqaHzaw0vbCpFCrcA7eOBX7f%2BtpTxPu6trjxxbVg3esloAZgJM%2Ffl9nMgbH3PCAu1OSvs6hPiCBvijXv3eULWne3sPtn2SCO%2BUX48kqx9RqBKLLH6EVqmW0QOKQo3kDROB7%2FlG7V81bhgSOAKQhMRW5jxpUyAyLxDzfEkscHUZpKVWOYMqYt5YwPPUiLR4M%2FAcdiyxGCU5WPwLLNKWQ9r4ceaQxy29JOz7p320Thz7s5IGh2qtfpRr5INiTgLZN2%2Bh18vQZcOXoLOChG1sPBQabWwOZ2AfWWHy1MRV9ygO7l4qNGVom17IZ40FJ1nJII9V3ufyvjO%2BUhl2r4jfi4g8xnlgEnxYEdqb86TMPHPWv3uRbXpQkVbfGdnyg%2FfyMGU17sITwx5ltdagJxv%2FH4c2LUqfM7APsxxuq%2FBc%2F3iePEeZKy%2BZlyOhbzmA6ui7LPb3Eei%2BS2H4Bf7i5B0eTciluoUlCuTbxWiMyvWfREJfD%2Fcon%2FyyazWWVl01iHl0GITs1si8Ys81II7ets0xfDPZ4inhGbJ2%2BcaVvdhkeQHY6EbkXsZ0%2Bd4EPCRkaUxjVwUgqysY173QKrhh7ekZ%2FHqqO4E6GIcjQxkJQ45dO%2Fu0SpF5YKxMJ9diHzeuHDDbMF2o33Ghqaa1t7MJvK0ckGOqUB3WkHGinb4NZCzNF1YDxDSVVntJi8wAXcQyH69%2FY7DECoW1ZBwdnfQWZgxDmjNJd6F0uzQZAK9c%2FGCUC%2FIpXGDoVBykZ3HtmzEd5zrNuD7YtO7A38ppymh1HkV85MAjqk3x21H61NEPDbJvcwK2dZlSttPFzGD%2FnnCla0ETTkIPQsf1yPPqcpImoHNgr9IQIu%2FxBHS17SDEelSs8LqSP2vNuouTSl&X-Amz-Signature=ed021620b13ef9c77e269223980b0fb395dffb9c2cb38ccc7780f575b92c0227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

