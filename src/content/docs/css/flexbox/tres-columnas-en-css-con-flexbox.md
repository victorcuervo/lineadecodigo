---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRYZT5T6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQsL3FE%2FDeJD8GPLnb2z1z0PgJBgR0pbMH9aeoCWW0AIgUqQimxwTrobrNeYFH1c1T9VCaFjyUN28mFeEIlF%2FBWAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEIOiQbcAvq4J2OS0yrcA8wfbXu15nT5Uup8wAHGIuPqIEb00N2Ghho9%2Fo3%2Byh7NpFa2JW0HCx66wES3hdWoyCdlAQvn8d%2BXOdabJvVNI0MKbaiy9HRTXjXhtT1QRvKRKzwfDoYrtfMNMI5fB3ZAd%2BoDcXFJ6opfTcNLQ0n6csRJ9Au40NdMa53QW6hxSAMhsBe8i3zOB%2F30Zt97EwbL5W5VpmL9MxQH5KfEy7XRBtBjOcFCWVEd5ag7Ghw8tvtw6IXbQrGCZ8ec5uwF%2F81DruUxi%2FjNOYV9CzAOQXk9CIg5Tr9cXKorkDC59v3EaPM9tXWAY6UgE0axixheV%2ByNDuEBvSMc4BjBVRR%2F6BrraEOWyDYMPVBrNqTnPL5AQvNnrNki83F8AR%2FoD9zJXjTbIvg%2FsGZoJlGxcJjYmrraS8HT5JhbCrGveQzWmNOSvPGAio5642ogci2C8y9D%2BaBAHHJOt7OeFujI5bXgieCW6h3wIB7O4LyjBQxkJgx%2F4GU7caHBX9s6Nx%2FsjEslEJ3elquxrlu%2BXdhaP12iR5UY2MMR7NdUy74w%2Bfnk2tA3HzmIjLS8P8nO6LhTf4v2nT0hnVpbspvHEADaIp0xIJrmnNBF%2FqmlwxrBLAB25ueUKXR2d4vCKo0oWw3urLWxMPHvy8kGOqUBjsaCsq93JeUH5yu1ASdVrXEBVsnJ0TjuhHHipWnmT92GRFavLLMN4luSq2Rgf7PiFHGeNQab8V6bOBhZNydWMjVQn7Gshe28QqyIVAGAejXyRIOAbX%2FkHGYTIMdQ2iNUld4T73Ndj5pBzsoPj4Z6YbqXQR3%2BEoHZaYLqkvkDT1rUYjSNmKbPt2D4eKDHz%2Fdr7dUiDGBS%2B%2Fypy1ZkzBLwSmb6yScS&X-Amz-Signature=408a4bbc0d6ad5adc1e053d55571e991c4646eeeaf2f018dde3553f6c787c165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRYZT5T6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQsL3FE%2FDeJD8GPLnb2z1z0PgJBgR0pbMH9aeoCWW0AIgUqQimxwTrobrNeYFH1c1T9VCaFjyUN28mFeEIlF%2FBWAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEIOiQbcAvq4J2OS0yrcA8wfbXu15nT5Uup8wAHGIuPqIEb00N2Ghho9%2Fo3%2Byh7NpFa2JW0HCx66wES3hdWoyCdlAQvn8d%2BXOdabJvVNI0MKbaiy9HRTXjXhtT1QRvKRKzwfDoYrtfMNMI5fB3ZAd%2BoDcXFJ6opfTcNLQ0n6csRJ9Au40NdMa53QW6hxSAMhsBe8i3zOB%2F30Zt97EwbL5W5VpmL9MxQH5KfEy7XRBtBjOcFCWVEd5ag7Ghw8tvtw6IXbQrGCZ8ec5uwF%2F81DruUxi%2FjNOYV9CzAOQXk9CIg5Tr9cXKorkDC59v3EaPM9tXWAY6UgE0axixheV%2ByNDuEBvSMc4BjBVRR%2F6BrraEOWyDYMPVBrNqTnPL5AQvNnrNki83F8AR%2FoD9zJXjTbIvg%2FsGZoJlGxcJjYmrraS8HT5JhbCrGveQzWmNOSvPGAio5642ogci2C8y9D%2BaBAHHJOt7OeFujI5bXgieCW6h3wIB7O4LyjBQxkJgx%2F4GU7caHBX9s6Nx%2FsjEslEJ3elquxrlu%2BXdhaP12iR5UY2MMR7NdUy74w%2Bfnk2tA3HzmIjLS8P8nO6LhTf4v2nT0hnVpbspvHEADaIp0xIJrmnNBF%2FqmlwxrBLAB25ueUKXR2d4vCKo0oWw3urLWxMPHvy8kGOqUBjsaCsq93JeUH5yu1ASdVrXEBVsnJ0TjuhHHipWnmT92GRFavLLMN4luSq2Rgf7PiFHGeNQab8V6bOBhZNydWMjVQn7Gshe28QqyIVAGAejXyRIOAbX%2FkHGYTIMdQ2iNUld4T73Ndj5pBzsoPj4Z6YbqXQR3%2BEoHZaYLqkvkDT1rUYjSNmKbPt2D4eKDHz%2Fdr7dUiDGBS%2B%2Fypy1ZkzBLwSmb6yScS&X-Amz-Signature=bc944755eba5f3b99206d31735321cceb5c244dbbc5fd357cfea96c625fa6383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

