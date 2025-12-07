---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33CTVVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClhosqxjMwCARtp6jyPgk2awEGZBA6WqI1l41m2pEK6wIhANoa7Dw7J8T4%2BzrI5oIOH7i5rNYWpK4KZep8vdk3cMflKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkQHE89ENJtlrg5gq3ANv9c8XYT7EkvmYJaPtb8eDFD0Hz1auZ8sROHgVo1rperszDgn9K38c0aB%2FSqU3E2M15hcwH%2By7A37wcpH%2BcOefHwm1COZ%2FOUH%2Fk48%2BLAftsRVncMzWnzzWNZfn0aJcuyVXJaPEo4gookjR9bqRbu%2BmPZHZvnYrifv3R5DAkEnoSRM2K9XUAVxw3Oc4%2BsxAAQYosNXZh2qVSLrE3wvQioyYlMeZOBCL%2FwnUOS1b%2FlGjR9xANtjaU88XagnbUx%2Bew7OXmOEEipyDhnrjTZsAYrTitAGcH5WsorrF9Ky2Ar1NH%2BVXNoFxA%2B9c6C2JvAvVYqFqOKXr0QkuxTI2gy%2FqRBOTCLjxfd9zRD1DkYdS57nXCmTa3pwmnw9WpAz9w0uUNl4O9bBSDEicepkPIjV7TxlIFedW8iawFANoCjCRbbjnDHLRwt%2BqKWuHz98UAomPzBcP4LSRhqviyUpzJJKJZw5SqdrUNKA6ZVBKClNjjFDIyAiSAv2wVv4PYjpmHTsO8HO0qUcfqn8acSOnCZaok6CeYTKehC6F57fEluBM4Mpen8r1KXFtaUGPkI2CTxqrUkEqlHOqWnMiGthF7ZRxbMEAff8mzlElChkLHvT%2FSRDuV7e9sF%2Bib%2BwaROOCTzCw%2FtLJBjqkAXzjd1S%2FlEI%2FczYK4Hd7Z9FymAYzLqs6GwHixs1ce3Y91ea9J0sOP9Je1UaPhzT40ZbuiezfyhZNVf6G8YuigcMVYAmXJcfxn9sncgTDeSXYLg2hI6G0%2FKwwxxPT3CFR%2FUDp9uMt4fFSoPByKXmCU8DXj4YpxXlQ8%2BpW4o5PRJcBfRcbv4%2BKRts2Sw0%2FmEQ3d9krHvG%2BPvuj%2BxZPlgGvRJNAawp%2B&X-Amz-Signature=bd2b496311efae97fecf91765b3f8dabd5fa4b8e93ad38329f20f81fbefa3aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33CTVVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClhosqxjMwCARtp6jyPgk2awEGZBA6WqI1l41m2pEK6wIhANoa7Dw7J8T4%2BzrI5oIOH7i5rNYWpK4KZep8vdk3cMflKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkQHE89ENJtlrg5gq3ANv9c8XYT7EkvmYJaPtb8eDFD0Hz1auZ8sROHgVo1rperszDgn9K38c0aB%2FSqU3E2M15hcwH%2By7A37wcpH%2BcOefHwm1COZ%2FOUH%2Fk48%2BLAftsRVncMzWnzzWNZfn0aJcuyVXJaPEo4gookjR9bqRbu%2BmPZHZvnYrifv3R5DAkEnoSRM2K9XUAVxw3Oc4%2BsxAAQYosNXZh2qVSLrE3wvQioyYlMeZOBCL%2FwnUOS1b%2FlGjR9xANtjaU88XagnbUx%2Bew7OXmOEEipyDhnrjTZsAYrTitAGcH5WsorrF9Ky2Ar1NH%2BVXNoFxA%2B9c6C2JvAvVYqFqOKXr0QkuxTI2gy%2FqRBOTCLjxfd9zRD1DkYdS57nXCmTa3pwmnw9WpAz9w0uUNl4O9bBSDEicepkPIjV7TxlIFedW8iawFANoCjCRbbjnDHLRwt%2BqKWuHz98UAomPzBcP4LSRhqviyUpzJJKJZw5SqdrUNKA6ZVBKClNjjFDIyAiSAv2wVv4PYjpmHTsO8HO0qUcfqn8acSOnCZaok6CeYTKehC6F57fEluBM4Mpen8r1KXFtaUGPkI2CTxqrUkEqlHOqWnMiGthF7ZRxbMEAff8mzlElChkLHvT%2FSRDuV7e9sF%2Bib%2BwaROOCTzCw%2FtLJBjqkAXzjd1S%2FlEI%2FczYK4Hd7Z9FymAYzLqs6GwHixs1ce3Y91ea9J0sOP9Je1UaPhzT40ZbuiezfyhZNVf6G8YuigcMVYAmXJcfxn9sncgTDeSXYLg2hI6G0%2FKwwxxPT3CFR%2FUDp9uMt4fFSoPByKXmCU8DXj4YpxXlQ8%2BpW4o5PRJcBfRcbv4%2BKRts2Sw0%2FmEQ3d9krHvG%2BPvuj%2BxZPlgGvRJNAawp%2B&X-Amz-Signature=69d6814cecd02274ad5ce3bc95d116df4228af16776b879970887786e1e7062a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

