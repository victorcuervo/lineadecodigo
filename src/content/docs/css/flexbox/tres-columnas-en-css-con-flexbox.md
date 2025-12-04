---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2JMU4B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD5M3BwZmllMUXB1cs66nxxxwPr30OUrk98SGSfYB5yCAIgEjY6he6RXnWbin5PMEtv70ZN3qZjZ2s1sRUwOviNFNAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDjghqobVya8TOVDfSrcAxjfgUZYHjg2KzXWg48ZjJmY%2B2D3jGSY2BT6dA9nrX4lfnZ%2BFdW5RHCbWOiHIe1uFtXnzPxAPq91R722k8T06xYyMSUfOgqfjkJY%2BiBB3g944JlAR8dDVKwbKm1W90%2FJty6xAzmgmisjvpE8r61eBf3jBAQSBY%2BOSubRzxpRtfxGreEOz9wUo1DbIVpx%2F2yMD%2BqHO7BNVLjXecAZT4VmfUi868pxdffbEm%2BUJ1IRJ6%2B53db4q9OQlxqAQl1eVwufNQgkiHaoeTDhsqc1gL4afMU1%2B7XFWPSunUxeapWRJV1U2Ip%2Bt0lXl0gJagDDuQAyKTLmtNsBDl2g%2BFcTKXGKtNN52GHeJLIug8YIcvB59wiNvC3UfkxqI41AUoNhUFhO6Pudt5NRcmuEHTvqi2qk31YHkVI81WSLZOnhhfM31rIKwhcC2a1%2BByd3zz1IYC1NExaBzlB5QOr%2BgUAeM2hyuWKdpo3loIxLYPZE%2Bp3Rv881912cnBM4Z2oMtPsCKXFXbdbrXQfkS7FIB9EK%2FLFJ6sgNqth%2FAQX6REyvB29DjCaDlQfp%2B9REGsI0DIsrutIgZxEQGkwXwm9gkah8ON8ZDZL2VX0O88PDj%2FLnzkaAx1qkjOw1nooyMHqS4Z5AMMS%2BxskGOqUBAHUVHCR5XajCgwcpBlSwF5IMW1xJNuHixAqMAUWr8sWUXIywsw9dsAQcO2eq8R8SctR2yU6XZigc5JXfWazatmyTst6oxKRyVu3AUTvveh4YJzlYrc5haC%2BXO%2F1zuwBhbQ5TgiyonZLkNukujg%2BEVOn7nWThzS%2BsDzIkchWuXQyYVzR86IGmk8x7HOP1KLdVr5jnoAsHYmPwecC1p0vBviB6HEFp&X-Amz-Signature=b661be867210690b8d0c6750589e611f8a0a86291046207c4533bb1657667836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2JMU4B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD5M3BwZmllMUXB1cs66nxxxwPr30OUrk98SGSfYB5yCAIgEjY6he6RXnWbin5PMEtv70ZN3qZjZ2s1sRUwOviNFNAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDjghqobVya8TOVDfSrcAxjfgUZYHjg2KzXWg48ZjJmY%2B2D3jGSY2BT6dA9nrX4lfnZ%2BFdW5RHCbWOiHIe1uFtXnzPxAPq91R722k8T06xYyMSUfOgqfjkJY%2BiBB3g944JlAR8dDVKwbKm1W90%2FJty6xAzmgmisjvpE8r61eBf3jBAQSBY%2BOSubRzxpRtfxGreEOz9wUo1DbIVpx%2F2yMD%2BqHO7BNVLjXecAZT4VmfUi868pxdffbEm%2BUJ1IRJ6%2B53db4q9OQlxqAQl1eVwufNQgkiHaoeTDhsqc1gL4afMU1%2B7XFWPSunUxeapWRJV1U2Ip%2Bt0lXl0gJagDDuQAyKTLmtNsBDl2g%2BFcTKXGKtNN52GHeJLIug8YIcvB59wiNvC3UfkxqI41AUoNhUFhO6Pudt5NRcmuEHTvqi2qk31YHkVI81WSLZOnhhfM31rIKwhcC2a1%2BByd3zz1IYC1NExaBzlB5QOr%2BgUAeM2hyuWKdpo3loIxLYPZE%2Bp3Rv881912cnBM4Z2oMtPsCKXFXbdbrXQfkS7FIB9EK%2FLFJ6sgNqth%2FAQX6REyvB29DjCaDlQfp%2B9REGsI0DIsrutIgZxEQGkwXwm9gkah8ON8ZDZL2VX0O88PDj%2FLnzkaAx1qkjOw1nooyMHqS4Z5AMMS%2BxskGOqUBAHUVHCR5XajCgwcpBlSwF5IMW1xJNuHixAqMAUWr8sWUXIywsw9dsAQcO2eq8R8SctR2yU6XZigc5JXfWazatmyTst6oxKRyVu3AUTvveh4YJzlYrc5haC%2BXO%2F1zuwBhbQ5TgiyonZLkNukujg%2BEVOn7nWThzS%2BsDzIkchWuXQyYVzR86IGmk8x7HOP1KLdVr5jnoAsHYmPwecC1p0vBviB6HEFp&X-Amz-Signature=433d53c02da35006223f49c398367611fa1e29e4f930bf8358510aca1ed2542b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

