---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN2B6XG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDcG%2FZtMpfUDysaZ%2F4kV0PQlOHZpFxSyB0VJauyMMQJeAIgJxKIEKvUO1shJ1GJm1KboTQvtiZRVY0w2VDTfnrHA7kq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDN5dmeuuWwryk8rTuircA92K3o%2ByFJJ9Nkolcz4ykhaXtiRu1JLfRl5GheLHpF7LOFMKh58P%2BO4K3TQyWunA%2FNl0Xu4nIfjKqnKcIZdiFyXP%2FjeuCybrmEDw2IDgXepbw5Eb0rfJXaoDbrYMdLYGhxuChLUj3nsfZ04mu%2BaJEDdmiU5M7JnM6vJ2rG0kYBIt9jDzX3pdQz1Fzjqif%2F6MaQDVrgbis%2Ft9hQa75RMnb4E2DboQWkbUNoUKh18EDCmOcS1C0xtDpT94VERo8TYrVNY8WxFetDYmF1wCFZuTn%2Fu0wMYQV%2F%2FJag15%2FvbCTErvar9BOdY4J2kevhz4D%2FKwOIsXA17Wg4RJbspEzGIwSMm2x%2FHctZTnQhkhqviRQPWkgWoR2esRpfmR1IgJt99G1mwuoLH8JUWmKnQ6RxGvCkaSv3KAoME2XiyLRix0FGuOKN5w%2FCdKZjdZiHavH8B%2FskiWfOYallUBUCojhaTz9TUIlJ%2FfgKy5I4iStir%2FHXWkqoTJ18X%2B3lWfZvUZP2jvb3qe4YvczMe%2BaLN23E%2BrwIGKfWfHBzKss8q3Avz7cOazlZJahrg0hOl2%2FhE6g7M1uRP3AFD2p85cOXZKjQBEPdnYwpAJS0UZ0W6rv1xqzJdZqfViTuZmSxBITu5eMPP%2BvckGOqUB2GF6YLFOlUuxlRzJ6ow6nq7Bhzzt6ALGsR6EK327Vnu9%2Fbw6s3EJTFNm%2Bbs9cgChYvBk0FI7npYE039zfcbSQi7urhvBV9JaZ8luvNMbw%2F7UunFRIO7hCRrPKlnOWNiIaZ%2F9dgmDPRrW745BtnM%2FkJwUNWLoJPqDcOoAnlZ6%2BBCovVUYyDHw1SYD75kn24cN8LT%2FjNoEwFjIgfq0FqMeBMtGT45B&X-Amz-Signature=97b92280f19c11f0433b38d52ccdb6de0df11321e847bd62268062c81423c556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN2B6XG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDcG%2FZtMpfUDysaZ%2F4kV0PQlOHZpFxSyB0VJauyMMQJeAIgJxKIEKvUO1shJ1GJm1KboTQvtiZRVY0w2VDTfnrHA7kq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDN5dmeuuWwryk8rTuircA92K3o%2ByFJJ9Nkolcz4ykhaXtiRu1JLfRl5GheLHpF7LOFMKh58P%2BO4K3TQyWunA%2FNl0Xu4nIfjKqnKcIZdiFyXP%2FjeuCybrmEDw2IDgXepbw5Eb0rfJXaoDbrYMdLYGhxuChLUj3nsfZ04mu%2BaJEDdmiU5M7JnM6vJ2rG0kYBIt9jDzX3pdQz1Fzjqif%2F6MaQDVrgbis%2Ft9hQa75RMnb4E2DboQWkbUNoUKh18EDCmOcS1C0xtDpT94VERo8TYrVNY8WxFetDYmF1wCFZuTn%2Fu0wMYQV%2F%2FJag15%2FvbCTErvar9BOdY4J2kevhz4D%2FKwOIsXA17Wg4RJbspEzGIwSMm2x%2FHctZTnQhkhqviRQPWkgWoR2esRpfmR1IgJt99G1mwuoLH8JUWmKnQ6RxGvCkaSv3KAoME2XiyLRix0FGuOKN5w%2FCdKZjdZiHavH8B%2FskiWfOYallUBUCojhaTz9TUIlJ%2FfgKy5I4iStir%2FHXWkqoTJ18X%2B3lWfZvUZP2jvb3qe4YvczMe%2BaLN23E%2BrwIGKfWfHBzKss8q3Avz7cOazlZJahrg0hOl2%2FhE6g7M1uRP3AFD2p85cOXZKjQBEPdnYwpAJS0UZ0W6rv1xqzJdZqfViTuZmSxBITu5eMPP%2BvckGOqUB2GF6YLFOlUuxlRzJ6ow6nq7Bhzzt6ALGsR6EK327Vnu9%2Fbw6s3EJTFNm%2Bbs9cgChYvBk0FI7npYE039zfcbSQi7urhvBV9JaZ8luvNMbw%2F7UunFRIO7hCRrPKlnOWNiIaZ%2F9dgmDPRrW745BtnM%2FkJwUNWLoJPqDcOoAnlZ6%2BBCovVUYyDHw1SYD75kn24cN8LT%2FjNoEwFjIgfq0FqMeBMtGT45B&X-Amz-Signature=a041e36a9860aed1f5613ffacb494021ba5a19bec37bc5b5d4e3ed3c553ffd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

