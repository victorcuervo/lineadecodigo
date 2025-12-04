---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43CUHDD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD09OHThfOv5ME9CwcshXctuXD8ALMOoz41w8vB4gM6UAIgEgdcKDIJmPHaAwRUF0PatgvHzSpCHmFSglZ3WsgL7bgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDcVVsOs%2FkHoqERjzircA4Yy%2FLl6hpfLYFj1LPSFSU7GxiN88%2FpIBcZ7ECW4o1BnzAyy5hEZTX0cTWM8ZlZ86oxkAmJCozFai3J%2Biml67CD0k8RfBCSqFdqOcIlEsAG%2FsVumIAuGB1v5NfM22OZV0jPzgf3%2B916WosptZGCphLAdfBc9rWACx8unwLiH%2BHn%2B3pBPK6FhQzxbL6LH1EGB%2FukNnlaeLzaesfBb4bc%2BPGXmg7UczcjkX%2B%2FBukYJLxXLsL3lPAw%2BSsJTFeBxeIyjtNsp5bTdatvriy37bfJTaAFcyepz0M47sse0q%2B4dLHSFqA5%2BOjWes8m0Uc6w5GrfW3gFpCxqv%2BOi3g%2FB4zYNEjbtG%2B%2FwStlbhwvfIXlTrRr8iYE1mFM7SO7u65eJV37Fsfjy5nTjaUeSJeNi0oIkddGQiixekdNCLgqPAk7091b3KBGahl2SbErMRz17k%2BoCIAEJy8X30X3r9buJBj6MBIJgn6hApHugM1iPBn0jCtDTR0dwbh6w8Jx8lAHjn9hao6d%2FGY7yUITtvAkjAiSSrlwR39gmLG4Dt6vxiPF6bUMQcquY1sXJ578k%2FZSPgPHs6QSsBCYZJJXEm%2FC2ITdYtyrIHrqAPtA6uGyficNLm6Pk8tEYIzmgdXyDSV15MJSMyMkGOqUBhutBHCa6I5OMhxMximj%2FpGyPzPkMyVewYhmK3vA9d6BQR1QCEkTChJnmqwISJDzc000kVN6QrlQQYvM3v5YDciJ0WpJ6LVcPxNbVNk1zKHMHavXQZHgQ6PlG5%2B%2FevNwkfND0eqqBKxEBikXBYZJjWyoYFOiRrWdG9tMMfN0WuqE6yx983aeyfybDeyKYS5hENZGJRGzu0B4V7sga5Q9luq9bcca3&X-Amz-Signature=64b3c23947136683daa7c791a28716696e7c8e5099a17137ca83946f3917b3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43CUHDD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD09OHThfOv5ME9CwcshXctuXD8ALMOoz41w8vB4gM6UAIgEgdcKDIJmPHaAwRUF0PatgvHzSpCHmFSglZ3WsgL7bgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDcVVsOs%2FkHoqERjzircA4Yy%2FLl6hpfLYFj1LPSFSU7GxiN88%2FpIBcZ7ECW4o1BnzAyy5hEZTX0cTWM8ZlZ86oxkAmJCozFai3J%2Biml67CD0k8RfBCSqFdqOcIlEsAG%2FsVumIAuGB1v5NfM22OZV0jPzgf3%2B916WosptZGCphLAdfBc9rWACx8unwLiH%2BHn%2B3pBPK6FhQzxbL6LH1EGB%2FukNnlaeLzaesfBb4bc%2BPGXmg7UczcjkX%2B%2FBukYJLxXLsL3lPAw%2BSsJTFeBxeIyjtNsp5bTdatvriy37bfJTaAFcyepz0M47sse0q%2B4dLHSFqA5%2BOjWes8m0Uc6w5GrfW3gFpCxqv%2BOi3g%2FB4zYNEjbtG%2B%2FwStlbhwvfIXlTrRr8iYE1mFM7SO7u65eJV37Fsfjy5nTjaUeSJeNi0oIkddGQiixekdNCLgqPAk7091b3KBGahl2SbErMRz17k%2BoCIAEJy8X30X3r9buJBj6MBIJgn6hApHugM1iPBn0jCtDTR0dwbh6w8Jx8lAHjn9hao6d%2FGY7yUITtvAkjAiSSrlwR39gmLG4Dt6vxiPF6bUMQcquY1sXJ578k%2FZSPgPHs6QSsBCYZJJXEm%2FC2ITdYtyrIHrqAPtA6uGyficNLm6Pk8tEYIzmgdXyDSV15MJSMyMkGOqUBhutBHCa6I5OMhxMximj%2FpGyPzPkMyVewYhmK3vA9d6BQR1QCEkTChJnmqwISJDzc000kVN6QrlQQYvM3v5YDciJ0WpJ6LVcPxNbVNk1zKHMHavXQZHgQ6PlG5%2B%2FevNwkfND0eqqBKxEBikXBYZJjWyoYFOiRrWdG9tMMfN0WuqE6yx983aeyfybDeyKYS5hENZGJRGzu0B4V7sga5Q9luq9bcca3&X-Amz-Signature=4e8bba29ad49c492dd7560fd3018dd292cf11170c2e7a822856839a9f9035300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

