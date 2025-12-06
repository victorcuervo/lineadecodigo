---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAOOUKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJsGygCiudp7sONh3uHSZnLsUSQUs5J%2FNb6jyaDvoEswIgKOCY0oP2zUA1vw4vSWafDG7S2WEc8m%2FqPZVsd24ZoGwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDImwSCuVkBBuron7vyrcA1Rzk5%2FQznYirvThqlMmz4eGzKWZgBt3Z%2BkKKAfhdOB%2FEa9P2giEN2beSDMMnXsk01Bmzc0qj5CUyv%2BHep15PSLUgAHzzwOnvHIVCi2iON2RcNbzbRP%2Byzj11gPvfnmEefoEMjOmHgxjrVtBxuhyc4zWUgfTF8TrT6VODPw34UC6Agtuxdy7kIF7OYA6Os26%2F9dSMnCEGH4E1%2BYDDp9dlmp016lbpjAe%2BiLKf3nPt3CR48ZNmC8ZTJJRFpDkJMEfGw5JOJCHcLhwAbxC7jSczu40jkl9C7t7On2z4ikQEPYSoYj0jJGsq6DhKH8CiYA1n99aXRd692ZekYSJQtLK6ftyQDqf%2BNtHTX0EkcXhWLF%2BuILI%2BEmCC3hnF0ZAfCZJtKsvHeqQn%2B4d7Pf4cHwkrL1%2BIWTw80cBK%2FxyZsWYFqJlo07X%2FrhBdnFfj1UlSomvRiIOEhJ9A2WDEWG%2BXhpYgDd8F0lb0APsfv9GGGVil79teFi2Zu4oxudGfPtZwp7PIbw9t6DFrF%2B14WdvcGM9xYU8NpRn9K4IQLQjj2qn%2F%2FnU1zqbyukKummgonUrNx7bByFRpNMBTfFBEwnTmIICVjoewKQWCSoxDzqXcqb2dMZiCdziF%2FmoRRXOyQ0%2FMNXezskGOqUBRzNZiZJI0jVoJXamKZ5jPDknFuxzXi83mywgcT3%2BrBHOsCQwO1aaeTE0mSsuLsYyRzKu1EVhZFF0YZ6T%2BK7TF3EpqKnkyJ7bFXHKbmn17XvaK1TccdG8Cwr5e8SVhwIm%2FJByBP%2B9zDEDfZohLbZWrYcHQK%2BM%2Fqhosr7dcYVGSRwxAV7LUAyzlUGzsh5cff4wMohSLdYniMzwna5vfHuD9oYTTYKT&X-Amz-Signature=a46fe68212fe93303d8031f87c58259d1db08030bacee96876e702eaac177e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAOOUKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJsGygCiudp7sONh3uHSZnLsUSQUs5J%2FNb6jyaDvoEswIgKOCY0oP2zUA1vw4vSWafDG7S2WEc8m%2FqPZVsd24ZoGwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDImwSCuVkBBuron7vyrcA1Rzk5%2FQznYirvThqlMmz4eGzKWZgBt3Z%2BkKKAfhdOB%2FEa9P2giEN2beSDMMnXsk01Bmzc0qj5CUyv%2BHep15PSLUgAHzzwOnvHIVCi2iON2RcNbzbRP%2Byzj11gPvfnmEefoEMjOmHgxjrVtBxuhyc4zWUgfTF8TrT6VODPw34UC6Agtuxdy7kIF7OYA6Os26%2F9dSMnCEGH4E1%2BYDDp9dlmp016lbpjAe%2BiLKf3nPt3CR48ZNmC8ZTJJRFpDkJMEfGw5JOJCHcLhwAbxC7jSczu40jkl9C7t7On2z4ikQEPYSoYj0jJGsq6DhKH8CiYA1n99aXRd692ZekYSJQtLK6ftyQDqf%2BNtHTX0EkcXhWLF%2BuILI%2BEmCC3hnF0ZAfCZJtKsvHeqQn%2B4d7Pf4cHwkrL1%2BIWTw80cBK%2FxyZsWYFqJlo07X%2FrhBdnFfj1UlSomvRiIOEhJ9A2WDEWG%2BXhpYgDd8F0lb0APsfv9GGGVil79teFi2Zu4oxudGfPtZwp7PIbw9t6DFrF%2B14WdvcGM9xYU8NpRn9K4IQLQjj2qn%2F%2FnU1zqbyukKummgonUrNx7bByFRpNMBTfFBEwnTmIICVjoewKQWCSoxDzqXcqb2dMZiCdziF%2FmoRRXOyQ0%2FMNXezskGOqUBRzNZiZJI0jVoJXamKZ5jPDknFuxzXi83mywgcT3%2BrBHOsCQwO1aaeTE0mSsuLsYyRzKu1EVhZFF0YZ6T%2BK7TF3EpqKnkyJ7bFXHKbmn17XvaK1TccdG8Cwr5e8SVhwIm%2FJByBP%2B9zDEDfZohLbZWrYcHQK%2BM%2Fqhosr7dcYVGSRwxAV7LUAyzlUGzsh5cff4wMohSLdYniMzwna5vfHuD9oYTTYKT&X-Amz-Signature=03cd4be2bf2a0a70237eb0b24cacb5372787fff6acb525d8b9fd1684176678e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

