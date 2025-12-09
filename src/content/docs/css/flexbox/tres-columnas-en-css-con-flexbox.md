---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX5MNE5W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuwiryPySyhnSCiZiFR61XxsxNEpNWcYz1ux%2FroZdutQIhAIKUh4G2V9szTDfP3OaoCqC8KxwTE%2Byd1BVWC%2FyimBGhKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxCouCFn9ZcXTdp0Qq3AM4eKVoTk9z7j3mUS%2FICofQ3MTqf46uzbdEyaNOYuYn5g64b2X4GBgX43RY8zikiecD3UHuF7odB%2FSLyRFXqeVE2iUoKefp8VTXj0V5hCofZPz3aD%2BWSfzPgbJ%2FLD85zIGmaTQMLtzminN6VCjCoICKA13%2FqquJn0aCV7O56htxP9906hhzXoNti5NzCKXRuoId6J0nXzPByT9a9lOMXkuv26%2BonCESuoaT2nu9pO%2B839rQS1K6yfVqQH7JPFHdAEXAGZylKVciiC4Q46su5IHhZtg72Teu2RqgpaLa%2B7qZFsVjbtgrbyJlWlQOlH%2BkzQjdNG5MBtFCywWukxJCyUOcYA6MXpMSSqQeA9FNoZxUlaU%2FineEW6bEMUFDTMgDIMQuN9doTd2USFdo%2FxSbt%2F1%2F93ZDUnNn6hUwfFWyg66dh8ob9tM1s6qtjeMH5uebrZwLknOx7nGqZBLnIoDulpjs5hxKD6RekNStZ5NGN4X0bQuJr4B%2BupcokoVCrLiHz0o6KsXP%2FDa1ZFYYs0EwzRx3eyd%2BncxtYFU0BVpMsZRq%2Bh3kDFmOQsuOxEuYLvelz1Ean41IkR26hiRZRcKG8kLz4GxmQtAGyGqsPYNeYwv7LK1KxFAB1wZCtC%2BNLzDG6d3JBjqkAcndNEENsZNaQ09nYpH0m3w%2BmZE5vGZwB7MbVDEdmvxE8v5dUQV%2F37DnuvfGAWxfwKjYa49OmciEs1r%2FfOUYZsG1dfKHLDfAm6p25TKqJ1pkvAeA5ES2EyDOT06nrgD2Lzg1OWIibswidy5fMBoUZ2QAD7EBS7pF1c1IBHadHQ5tWazFeoCDcu8ABd8XkQj8fHvda0l%2BHbTO1m16gbLJHqfFZ0lh&X-Amz-Signature=d048d21f9435e2d37ff927bc3c02b7085cb922f02c38c212bce56d63c3c973c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX5MNE5W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuwiryPySyhnSCiZiFR61XxsxNEpNWcYz1ux%2FroZdutQIhAIKUh4G2V9szTDfP3OaoCqC8KxwTE%2Byd1BVWC%2FyimBGhKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxCouCFn9ZcXTdp0Qq3AM4eKVoTk9z7j3mUS%2FICofQ3MTqf46uzbdEyaNOYuYn5g64b2X4GBgX43RY8zikiecD3UHuF7odB%2FSLyRFXqeVE2iUoKefp8VTXj0V5hCofZPz3aD%2BWSfzPgbJ%2FLD85zIGmaTQMLtzminN6VCjCoICKA13%2FqquJn0aCV7O56htxP9906hhzXoNti5NzCKXRuoId6J0nXzPByT9a9lOMXkuv26%2BonCESuoaT2nu9pO%2B839rQS1K6yfVqQH7JPFHdAEXAGZylKVciiC4Q46su5IHhZtg72Teu2RqgpaLa%2B7qZFsVjbtgrbyJlWlQOlH%2BkzQjdNG5MBtFCywWukxJCyUOcYA6MXpMSSqQeA9FNoZxUlaU%2FineEW6bEMUFDTMgDIMQuN9doTd2USFdo%2FxSbt%2F1%2F93ZDUnNn6hUwfFWyg66dh8ob9tM1s6qtjeMH5uebrZwLknOx7nGqZBLnIoDulpjs5hxKD6RekNStZ5NGN4X0bQuJr4B%2BupcokoVCrLiHz0o6KsXP%2FDa1ZFYYs0EwzRx3eyd%2BncxtYFU0BVpMsZRq%2Bh3kDFmOQsuOxEuYLvelz1Ean41IkR26hiRZRcKG8kLz4GxmQtAGyGqsPYNeYwv7LK1KxFAB1wZCtC%2BNLzDG6d3JBjqkAcndNEENsZNaQ09nYpH0m3w%2BmZE5vGZwB7MbVDEdmvxE8v5dUQV%2F37DnuvfGAWxfwKjYa49OmciEs1r%2FfOUYZsG1dfKHLDfAm6p25TKqJ1pkvAeA5ES2EyDOT06nrgD2Lzg1OWIibswidy5fMBoUZ2QAD7EBS7pF1c1IBHadHQ5tWazFeoCDcu8ABd8XkQj8fHvda0l%2BHbTO1m16gbLJHqfFZ0lh&X-Amz-Signature=6cd87f3f0ad02b184681a9193d78eea555d3e286c846d02c0896d853499075fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

