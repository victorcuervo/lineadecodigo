---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRJETEGJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIXZ%2BisKXmd3S3Dl6hHBVsNVNVaqXylyRgturXvyg36AiBt26Bb0ACkKlUE6zvWrOJi0rUdbpZ%2BOIXQ9SwTwaK93ir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMBwXsTrpds0XS%2BSj1KtwDLjxhiCqfibbCnzN109hs%2B12SKjKS5qkL4U0N1jiYaF7r38RkJsboJ%2F7Sx7OBxUgvC%2FNh541mLeL9pli9g%2FLU325%2FV5Z5aYFhIYSO3alegYxmNih%2FqD5NwD%2FwbC%2BsHAwECplaWHA%2BjN9J7KfkmGWbAX5v07q81tuHVe%2BLnDPoTOiv0Bkf8OUkcJA7ZnsciFHCuJHyOaRHbLWyF%2BoeaYPPquBthUjEUf09PK2O6lnfzJvJ2yFo0kK4XRObcflEJmHlodh6jQlAB5tuOJ%2Br8aFyNuzljC77ROnq7HxW%2FTgaH9h%2FpJUTQCfqJGyh2R3hAbmWuVX7FL6LNUDzkMIBhkVCHGWSsQI3WBfyHsQEcc8GRbpH8RAq7rOeBlE21ObAbccse6bsIbjXI5wPi7koqc8NC04AS88x34a64JKzZW3hw186A0C1o4JJjwWZl%2Fex8DlflCIJuBSEIfXjo%2FUpXvauogv32nCAcN1Pd2hA215sSHhLQD4vP4ULqJXiIQaBogE6B4JpOirGvvsE9jUlAnPPbRFjUFqSWTCrfuv3IzDpZJ95yy5HQfdCgF5lh0u1x1gZxrO7VjtNBaM06GOrEj73VentIe%2FYRIQd0HYdq%2Bi53w4dPrV9ZJmW%2FiIDd3EwtafOyQY6pgEUYjlrxnwlTnQ9eekQk%2FV1m%2Fyjpo0qlosN7DoA5sod2m2jcmLMOm22sGgivu60b98R5L6AJLw4tlHcAGSA3Vi09aWSeu0GMN1o%2B0%2BPGYPeryoueQE18V3fNvWMinBoKk1mS4bPyU937Fm2PRSjsYweeXsg8uj0AX3T5Bch7OEmzsnqRQN%2BJGqhqsfKrQ5qZT9%2B%2Byh%2FYfhuxQeu%2BjwDa3jClSWYkozG&X-Amz-Signature=9c1c532b75b5af1afbdcda89bcb4678ebae730bb105e4bd0bef011fb15ac836a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRJETEGJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIXZ%2BisKXmd3S3Dl6hHBVsNVNVaqXylyRgturXvyg36AiBt26Bb0ACkKlUE6zvWrOJi0rUdbpZ%2BOIXQ9SwTwaK93ir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMBwXsTrpds0XS%2BSj1KtwDLjxhiCqfibbCnzN109hs%2B12SKjKS5qkL4U0N1jiYaF7r38RkJsboJ%2F7Sx7OBxUgvC%2FNh541mLeL9pli9g%2FLU325%2FV5Z5aYFhIYSO3alegYxmNih%2FqD5NwD%2FwbC%2BsHAwECplaWHA%2BjN9J7KfkmGWbAX5v07q81tuHVe%2BLnDPoTOiv0Bkf8OUkcJA7ZnsciFHCuJHyOaRHbLWyF%2BoeaYPPquBthUjEUf09PK2O6lnfzJvJ2yFo0kK4XRObcflEJmHlodh6jQlAB5tuOJ%2Br8aFyNuzljC77ROnq7HxW%2FTgaH9h%2FpJUTQCfqJGyh2R3hAbmWuVX7FL6LNUDzkMIBhkVCHGWSsQI3WBfyHsQEcc8GRbpH8RAq7rOeBlE21ObAbccse6bsIbjXI5wPi7koqc8NC04AS88x34a64JKzZW3hw186A0C1o4JJjwWZl%2Fex8DlflCIJuBSEIfXjo%2FUpXvauogv32nCAcN1Pd2hA215sSHhLQD4vP4ULqJXiIQaBogE6B4JpOirGvvsE9jUlAnPPbRFjUFqSWTCrfuv3IzDpZJ95yy5HQfdCgF5lh0u1x1gZxrO7VjtNBaM06GOrEj73VentIe%2FYRIQd0HYdq%2Bi53w4dPrV9ZJmW%2FiIDd3EwtafOyQY6pgEUYjlrxnwlTnQ9eekQk%2FV1m%2Fyjpo0qlosN7DoA5sod2m2jcmLMOm22sGgivu60b98R5L6AJLw4tlHcAGSA3Vi09aWSeu0GMN1o%2B0%2BPGYPeryoueQE18V3fNvWMinBoKk1mS4bPyU937Fm2PRSjsYweeXsg8uj0AX3T5Bch7OEmzsnqRQN%2BJGqhqsfKrQ5qZT9%2B%2Byh%2FYfhuxQeu%2BjwDa3jClSWYkozG&X-Amz-Signature=100f1a31d8bb8e6d95bf87f5d43cb6f4e4b6d981fd69a641115dd21500f1ceb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

