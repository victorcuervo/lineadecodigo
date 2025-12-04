---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JX3AH4Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLi%2FAiPnKdcbdcbdgBFptX1%2F3F5L5oJZ4ox1UYYMiCwIhANkW6taYgjvcuXGxFAqATsm9%2BhRm%2BUu%2BOmTBmyiwQazwKv8DCEkQABoMNjM3NDIzMTgzODA1Igx2k14XhfN1qmOwR3gq3ANUm6RlpJdtFsdo4XpRFZ0IsoQiUHEjquPnQnjcPVJMnn1NEGxm5aHFTUH0L97wn2xlGsQNJv1F%2BAY4d0EgFkjyRrToHg9ogQCEipOedKsSfvXz8JEvtjgKIg9cPzv%2FjJAQONf1%2FCnWJxuR5LqSfpMvdBfU5oGak%2BSDIsFHMWYolqhwPTIAwbBOr8qtUiiegkHPKvvZfpR3WG3WcwR6ZAMOVlAZE5BxaXSmBz82Sto1FwYhDRu2IjitbvI0nz30UAbLtls8WAZ1doxJ0ZT88D%2BtpUVUVXvsZxLodXle%2BZ%2Bal1goYy9gLUW1iwUKl7vGBcrTAvcAeecG42mil3MawdeRgvtsHRcCmfnUXtshM9e9ALz49Lw5gjytDDz6nplXNIgtRaW4asFmomYmYDr4AvrbTi58a1AHP5Wo9d6uyMusntXSyqpqBZEKej7JvSv0taLjy3tLHTVDFaWaafN9xPPVw9MwoWMFcXQfBR%2FkgSpjias%2F1esGnqjh9l%2FphCiPJ9Mz0sMs9Xj0Uh%2Bxz3Jwf7Nl6y8LYKd9CPYeGL6hi8Ettj2%2F90K4Uc877Nndgup8Q1M9QKk80XB9XqS5QbukgRkbKAmLoBV4q27Z%2B1IzgsaIQm6fiG6AR5wf%2F9w8pjDa28bJBjqkAYFwPbDsIWmogycYZRNcWY%2Bs9FuohCnVKIAFfbNzaABgP%2BxivNxlR6MCEtcBiASucGWmF7LhHpYh5gpQjmnIKoEjCg9i1alYe3qPx%2BNakfnbkVaXGJm%2F%2BxKCN3YNqGddyZVbHwZ%2BtvCB9OxGJ6%2Bk89rB01i12Pl%2BP9ZsKgyd9FhZRp5BxYgC50vF5qUkrBCJ3oE8DHzVEkOqoRBbzXoOAY496n5f&X-Amz-Signature=f3dd70e33924bd70c4fc26e0bbea7baea8e610843ecb132d295babc5889f6210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JX3AH4Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLi%2FAiPnKdcbdcbdgBFptX1%2F3F5L5oJZ4ox1UYYMiCwIhANkW6taYgjvcuXGxFAqATsm9%2BhRm%2BUu%2BOmTBmyiwQazwKv8DCEkQABoMNjM3NDIzMTgzODA1Igx2k14XhfN1qmOwR3gq3ANUm6RlpJdtFsdo4XpRFZ0IsoQiUHEjquPnQnjcPVJMnn1NEGxm5aHFTUH0L97wn2xlGsQNJv1F%2BAY4d0EgFkjyRrToHg9ogQCEipOedKsSfvXz8JEvtjgKIg9cPzv%2FjJAQONf1%2FCnWJxuR5LqSfpMvdBfU5oGak%2BSDIsFHMWYolqhwPTIAwbBOr8qtUiiegkHPKvvZfpR3WG3WcwR6ZAMOVlAZE5BxaXSmBz82Sto1FwYhDRu2IjitbvI0nz30UAbLtls8WAZ1doxJ0ZT88D%2BtpUVUVXvsZxLodXle%2BZ%2Bal1goYy9gLUW1iwUKl7vGBcrTAvcAeecG42mil3MawdeRgvtsHRcCmfnUXtshM9e9ALz49Lw5gjytDDz6nplXNIgtRaW4asFmomYmYDr4AvrbTi58a1AHP5Wo9d6uyMusntXSyqpqBZEKej7JvSv0taLjy3tLHTVDFaWaafN9xPPVw9MwoWMFcXQfBR%2FkgSpjias%2F1esGnqjh9l%2FphCiPJ9Mz0sMs9Xj0Uh%2Bxz3Jwf7Nl6y8LYKd9CPYeGL6hi8Ettj2%2F90K4Uc877Nndgup8Q1M9QKk80XB9XqS5QbukgRkbKAmLoBV4q27Z%2B1IzgsaIQm6fiG6AR5wf%2F9w8pjDa28bJBjqkAYFwPbDsIWmogycYZRNcWY%2Bs9FuohCnVKIAFfbNzaABgP%2BxivNxlR6MCEtcBiASucGWmF7LhHpYh5gpQjmnIKoEjCg9i1alYe3qPx%2BNakfnbkVaXGJm%2F%2BxKCN3YNqGddyZVbHwZ%2BtvCB9OxGJ6%2Bk89rB01i12Pl%2BP9ZsKgyd9FhZRp5BxYgC50vF5qUkrBCJ3oE8DHzVEkOqoRBbzXoOAY496n5f&X-Amz-Signature=2b812b9584c0a3f7059d0f916b3ad28b59e2b126c3d2e1be2697bf7c535d5422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

