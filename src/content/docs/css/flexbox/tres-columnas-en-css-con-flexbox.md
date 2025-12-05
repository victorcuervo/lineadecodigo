---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO7FZHOL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXQ7eGLi88ghb0qqiehK475gKDX0kSTfvIou5GFj7GhAiBCBb7aQ%2BnrfpYlo7DfirJvdQl1KJE7z2cl2NoS7FrSdSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM%2FQiE0GatlchVtK%2FkKtwD7Xd8MYEJYDY5oa3UEwRN5QJn6UzcN7iaXvOsYze5NZXbOViAQywTfdelck%2FNA1QwS7ldTxckn3aZm1%2BjX3W0xY2VijY6s%2F4W6XGShLjUNUTxg9e4i3qNGIsBp5M1RFfdF3KJ%2FIBAYcrpXosCIUKR5212T%2B67OMP9xf7GWEmGE3FcwtBpx2qyJWlXXJdodnoJlWEbCxpn92aCkXnG0CaQMhTNYP9KOqWp6eIEMWeiC4yN4zYUjP8krV2wSwareGYCk2OawzLNoDWh1dQMJeQIkRMIlLrMDIdOaPGhx0zuK4b9u2IgSWHM%2FR%2B8RTe1lRjlp2%2BY79kxERj6sJQhnMe6XsoonbV4fO%2BLfsJJ%2B7bonGui1yuuM%2F2oYso0vtwzLeUU2Z9QPVT9yZTnd9I%2FBA000advMWsnjOXzi0nCsfdvKS7EUKG%2B42fjL7s0%2BZnSJPIKtA7Lx6uC0yuHHLSzfxvjPVgSbj3%2B5yK8JEPavpp0Y3KdH7%2FvOVXmqOurNWT%2B4rTGlsK0ii%2BFwL%2FaQj4aJpDCgkLxsq7IJ2r7VPRCF9HvRa50wFZ%2FgVIG4LM4v203vwzZZnMRqbqOb5X8rHG%2FG2DKsLLacAmhIOoMPn2KaDCmkNK9xc0GiN6k4qNENhUw18bNyQY6pgE6ZH0hqFFXEdVPreS6%2FjzMf8iNSzY2AeAMB1yMD2%2FhFf4lZNPJkPU%2B%2FgR9ts9k%2FENEPVUcqP5%2Fa9Gjzw4Vz923sRIbk9SevJ0V990gaAOVM0EF5MveJrXwGc253k2L%2BlY598UauCkaapNHJ%2BkMhSf4kxqRSxeqGXQNYyFEID4I8AJRRQCCAD7VL8ObCxulMi0I%2B9jCL9zodD6Pb8rW17IZhAJGovda&X-Amz-Signature=d9d25f4f882a7cf3b6e2a08add8350302e86d370771d31be3477cf437f2d19bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO7FZHOL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXQ7eGLi88ghb0qqiehK475gKDX0kSTfvIou5GFj7GhAiBCBb7aQ%2BnrfpYlo7DfirJvdQl1KJE7z2cl2NoS7FrSdSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM%2FQiE0GatlchVtK%2FkKtwD7Xd8MYEJYDY5oa3UEwRN5QJn6UzcN7iaXvOsYze5NZXbOViAQywTfdelck%2FNA1QwS7ldTxckn3aZm1%2BjX3W0xY2VijY6s%2F4W6XGShLjUNUTxg9e4i3qNGIsBp5M1RFfdF3KJ%2FIBAYcrpXosCIUKR5212T%2B67OMP9xf7GWEmGE3FcwtBpx2qyJWlXXJdodnoJlWEbCxpn92aCkXnG0CaQMhTNYP9KOqWp6eIEMWeiC4yN4zYUjP8krV2wSwareGYCk2OawzLNoDWh1dQMJeQIkRMIlLrMDIdOaPGhx0zuK4b9u2IgSWHM%2FR%2B8RTe1lRjlp2%2BY79kxERj6sJQhnMe6XsoonbV4fO%2BLfsJJ%2B7bonGui1yuuM%2F2oYso0vtwzLeUU2Z9QPVT9yZTnd9I%2FBA000advMWsnjOXzi0nCsfdvKS7EUKG%2B42fjL7s0%2BZnSJPIKtA7Lx6uC0yuHHLSzfxvjPVgSbj3%2B5yK8JEPavpp0Y3KdH7%2FvOVXmqOurNWT%2B4rTGlsK0ii%2BFwL%2FaQj4aJpDCgkLxsq7IJ2r7VPRCF9HvRa50wFZ%2FgVIG4LM4v203vwzZZnMRqbqOb5X8rHG%2FG2DKsLLacAmhIOoMPn2KaDCmkNK9xc0GiN6k4qNENhUw18bNyQY6pgE6ZH0hqFFXEdVPreS6%2FjzMf8iNSzY2AeAMB1yMD2%2FhFf4lZNPJkPU%2B%2FgR9ts9k%2FENEPVUcqP5%2Fa9Gjzw4Vz923sRIbk9SevJ0V990gaAOVM0EF5MveJrXwGc253k2L%2BlY598UauCkaapNHJ%2BkMhSf4kxqRSxeqGXQNYyFEID4I8AJRRQCCAD7VL8ObCxulMi0I%2B9jCL9zodD6Pb8rW17IZhAJGovda&X-Amz-Signature=d75480012b9a203231b7108b489c627f721e289a64bd1f4c73f0b34166b3ea8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

