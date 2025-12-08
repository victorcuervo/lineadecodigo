---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKT2GP5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgIQslLIUbwkHzWA%2F85XUZyu3EXFtG%2BhJ%2B5FIM51M1MAiEAn9Q0ddIhf8IF21UvWOg0gWO6FjB5r8BBaGShkwKCoyIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKFB66UA%2FJE%2BNrMNSrcA%2FG9pnLe59n0H2dOjV0nf2QyUUPncv7tm3CJqDSGswp7VFlVLAah4cfAsbB8SLkqOgwosYXEBY98yaCPwGypdT7F3M1xU4B3jSQfpu0yy9JygWnSKeeRg0dflvOuqybE9T5eLxctc%2BK1vClfZa00Sts%2FPyslW88j4LhEtSOoag6Qiq10r4K1XFMVb5Z01furnvD1rxYfGU4S7T5L1ADMF6iy0cKOJe5Q78%2BiDRybVcSSC6uKV2atPOUMwFDw16UaAJXReiz6BjgP24AjxP0r1DnOL1CUcxKntfjqq84CehQEqk1lep3xEoG6jdQzKjCRp69g4kDf%2B2KlSkjuNdHgxhpv4eE9XxJ2Fpr7yMgPu8ufbp%2FDrB7c%2F%2BgONWfj42d8hK7XK2gjaD4yvNhyr1bLZNUCnm%2BZ9B%2FUKxksIPAADqaQTmc16fdi1E3nDNDrg4kyei7K1vekDtmLPaXs3bAFuOffCiuz%2BrgAqrZwOwaH0IkDvkBsocjM0oPutU8dzbI7ED%2FMy4KWUlfKWkwRkQT81jzdQ7zZOD1oh04A4QppwE35TivoPxHmURgPpMukV1bjV%2B68u9fS4HaCCzGlyfbmfo6GLnj%2F9RNx17KZEPILx0Wx%2Bx5TxtdBQt0U7aydMPe02ckGOqUBQuLldzjq9LiiH6VnCb5%2F7h33PGR5h5HScsTY%2BQsPngZ3hHrx174McB5e0iCqQWzYhAlBiVnDYJ9IZUoptRGzfvJ%2BzG6Z8S%2BnCoU7GP226FD79QiMFvGNpjeH1e21lRUBBQbhvmAyjAGWAg%2FGLnd%2BZJgnb%2B5QQfKH%2FbJoYgMGl78m8oLCEkQQx9nGoQc7vgOlWCncLq3DdaQuVqPIdwm8Tw%2B01xCe&X-Amz-Signature=0fffd32546a21c75321e9c47e9cbfc3f8cfa10674d1411c9c56df5534c14ec25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKT2GP5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgIQslLIUbwkHzWA%2F85XUZyu3EXFtG%2BhJ%2B5FIM51M1MAiEAn9Q0ddIhf8IF21UvWOg0gWO6FjB5r8BBaGShkwKCoyIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKFB66UA%2FJE%2BNrMNSrcA%2FG9pnLe59n0H2dOjV0nf2QyUUPncv7tm3CJqDSGswp7VFlVLAah4cfAsbB8SLkqOgwosYXEBY98yaCPwGypdT7F3M1xU4B3jSQfpu0yy9JygWnSKeeRg0dflvOuqybE9T5eLxctc%2BK1vClfZa00Sts%2FPyslW88j4LhEtSOoag6Qiq10r4K1XFMVb5Z01furnvD1rxYfGU4S7T5L1ADMF6iy0cKOJe5Q78%2BiDRybVcSSC6uKV2atPOUMwFDw16UaAJXReiz6BjgP24AjxP0r1DnOL1CUcxKntfjqq84CehQEqk1lep3xEoG6jdQzKjCRp69g4kDf%2B2KlSkjuNdHgxhpv4eE9XxJ2Fpr7yMgPu8ufbp%2FDrB7c%2F%2BgONWfj42d8hK7XK2gjaD4yvNhyr1bLZNUCnm%2BZ9B%2FUKxksIPAADqaQTmc16fdi1E3nDNDrg4kyei7K1vekDtmLPaXs3bAFuOffCiuz%2BrgAqrZwOwaH0IkDvkBsocjM0oPutU8dzbI7ED%2FMy4KWUlfKWkwRkQT81jzdQ7zZOD1oh04A4QppwE35TivoPxHmURgPpMukV1bjV%2B68u9fS4HaCCzGlyfbmfo6GLnj%2F9RNx17KZEPILx0Wx%2Bx5TxtdBQt0U7aydMPe02ckGOqUBQuLldzjq9LiiH6VnCb5%2F7h33PGR5h5HScsTY%2BQsPngZ3hHrx174McB5e0iCqQWzYhAlBiVnDYJ9IZUoptRGzfvJ%2BzG6Z8S%2BnCoU7GP226FD79QiMFvGNpjeH1e21lRUBBQbhvmAyjAGWAg%2FGLnd%2BZJgnb%2B5QQfKH%2FbJoYgMGl78m8oLCEkQQx9nGoQc7vgOlWCncLq3DdaQuVqPIdwm8Tw%2B01xCe&X-Amz-Signature=ae9e56ba7138f1963ac5d87910c6d6b1d99215902a935fc4e165a824122bd5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

