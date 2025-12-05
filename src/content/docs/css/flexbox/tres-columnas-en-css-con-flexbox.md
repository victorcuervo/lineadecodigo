---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6TLNL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN%2BLIKoXU%2BESbZLammBnOyaQcPM7JNOrRhVfYR%2B2gy4gIhAJPEXDflO%2FYgtk5HsM5E9RRc7Uw1aw41de3oCPB9J1AwKv8DCE8QABoMNjM3NDIzMTgzODA1IgwXqLZVIc3YgkAM7ygq3AOMZI4uK0R3YYh5rkzISOXU%2B6wxjOwtBetMFg67%2FRYy8JbfvrVv9kwS81bnGRI%2FllwmlPmy%2FvAb9%2FE%2B8AA8IS7lY42q7SVbaRJC8vXWDhWlvtEsxAueB9YHp8MwKka4M6uSqpkplyqVvw1W63nEim76LQtpGz1ZFvZn3YdSMKDsEpXj8JyRkO5bb9BZiVLy%2BWgziwC21ISU8F%2BPGqaaq05MARgR34B7Gdcy2fMT8KuBN1sXwZiPdlhYBbcflPblDb%2B4he8iTftmXaXObiCnEdzUd14FaC7N7mNFtYm5fZDsBzQ%2F99ayfouW8hLKXjfhRVP%2Fmaii1G7a7tMp13TGe8cJtVXeqJh9rfo2D4oC9RqDRmrx1piClgtQwdx46R%2BDy3y6AsLBATnjQcAIccNF7tEuSTdRLk181y66iZblXlA9VIWB8KDDsH95WQuYa9WGYST3nLqFsXeh52b7DIaza3jUuZGaIUwlNpOF4b%2BhR4l2oEhLlOwoFWKe%2B46imU81rn5dEQusPm2xFwyTj0%2BD9EYA21HOfW6zu%2F0ZSdO5WgSseozEcoqpFzgKu0MVbEO%2FxEg7zBjgDTJNkv1j5rcK%2BjwMe%2BQzq61HVQV7Y%2ByBslJhXnm8X9hDp9AcVr9euzCXjMjJBjqkAUtEBlRzfdgE3rY4eQEQZvoznNbAlpBqsKbvSZOkcUdMt6xB8Al%2B7nRK49o6o2E%2BsKYDtATwpNtJHKOwFd8weQl0Sil9f2VZTdXkJ8L9EPYr%2Bwkj4TreiSyvwKSFcooV2c0aM630uXASd7m1TaNXZN833ihuEllpS3lRN92EXfL3rmPhLUzbR%2Flqyp%2B0Dw65USRR0lqo5ZpEs8T7AKbuaoWraRqh&X-Amz-Signature=72725be8edd2b8e6fb3cb9554982d8657c64fec29a1f1b5b6f27824e3fc7b54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6TLNL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN%2BLIKoXU%2BESbZLammBnOyaQcPM7JNOrRhVfYR%2B2gy4gIhAJPEXDflO%2FYgtk5HsM5E9RRc7Uw1aw41de3oCPB9J1AwKv8DCE8QABoMNjM3NDIzMTgzODA1IgwXqLZVIc3YgkAM7ygq3AOMZI4uK0R3YYh5rkzISOXU%2B6wxjOwtBetMFg67%2FRYy8JbfvrVv9kwS81bnGRI%2FllwmlPmy%2FvAb9%2FE%2B8AA8IS7lY42q7SVbaRJC8vXWDhWlvtEsxAueB9YHp8MwKka4M6uSqpkplyqVvw1W63nEim76LQtpGz1ZFvZn3YdSMKDsEpXj8JyRkO5bb9BZiVLy%2BWgziwC21ISU8F%2BPGqaaq05MARgR34B7Gdcy2fMT8KuBN1sXwZiPdlhYBbcflPblDb%2B4he8iTftmXaXObiCnEdzUd14FaC7N7mNFtYm5fZDsBzQ%2F99ayfouW8hLKXjfhRVP%2Fmaii1G7a7tMp13TGe8cJtVXeqJh9rfo2D4oC9RqDRmrx1piClgtQwdx46R%2BDy3y6AsLBATnjQcAIccNF7tEuSTdRLk181y66iZblXlA9VIWB8KDDsH95WQuYa9WGYST3nLqFsXeh52b7DIaza3jUuZGaIUwlNpOF4b%2BhR4l2oEhLlOwoFWKe%2B46imU81rn5dEQusPm2xFwyTj0%2BD9EYA21HOfW6zu%2F0ZSdO5WgSseozEcoqpFzgKu0MVbEO%2FxEg7zBjgDTJNkv1j5rcK%2BjwMe%2BQzq61HVQV7Y%2ByBslJhXnm8X9hDp9AcVr9euzCXjMjJBjqkAUtEBlRzfdgE3rY4eQEQZvoznNbAlpBqsKbvSZOkcUdMt6xB8Al%2B7nRK49o6o2E%2BsKYDtATwpNtJHKOwFd8weQl0Sil9f2VZTdXkJ8L9EPYr%2Bwkj4TreiSyvwKSFcooV2c0aM630uXASd7m1TaNXZN833ihuEllpS3lRN92EXfL3rmPhLUzbR%2Flqyp%2B0Dw65USRR0lqo5ZpEs8T7AKbuaoWraRqh&X-Amz-Signature=f88a55b11b342f0192a9a884a4b39771ec1b97438a0eed530caf0ae1aed98a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

