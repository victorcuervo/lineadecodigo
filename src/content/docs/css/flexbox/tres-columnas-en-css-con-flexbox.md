---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JDVRWI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCID2lWTuF0VbMal08PimSmWO0%2F2AyhbUOIDyPlulTZqqVAiBtLdqtMffneBSUwLbQlBcOS4lCYMekdGzcSOwrbUFW2Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMkckQVPW5fvX59iFBKtwDoGrdCH4YyPW8PutLN6TWakYwnjCeq%2FRsl3ddYjBWoUUHM1zI2HehVDsoEBsg8bW1b1rTM4JShlZjhqkE2cHs3yIxiLEbWoC1UlFgDt%2BnbgF%2FmOha9hK8Za7j0tfynWQLI43jv1gq0oQ1D6zlZhKecUBIQ7OJqljRJJ2qVTImroUpb57wF%2BYg0cNiRw0o74eA3OAZWcMZ5F0Su7MiffLIWEW6EWJjVyVcHWpVgHfJ4i%2BafHGKjdeBKqezqd2YQsBsHHriYX33BOie41qE4VXXzY8SjBMDnjgwLqivl4A1S7juTcXOobaA%2FLPddp5MipaBs0HN9TO%2BYXrcnNj3tkCnXavwTp9un7%2FRU%2FkpF03SHdAMbn9XHRvX8IxwBi6c6lhe9dClQnsBF61Kyb0JMZe1sfd8V3XlNwda%2B%2BeGD4%2FO7U97CkrQwl4Oyb%2BIcd5azMYTZwlXXO75WQW%2ByYri2B2AcNVeFSCyheIWBxysoLEE%2FrJaSWnT%2FHxFoixH61asjT%2Fqmq%2BLUhTauRqavbCCrG%2B5YTQDc8ACj60zdYrUEo%2F8ZgoqhIgxnKZu5h8sHRvVFXAh96F5velYVQej1rIQ%2F%2BYensnnKmjX5zuUExPNLWk4v3bWerREn8rsvT2wg44wvb7GyQY6pgGhaLUaBOhWYGdsMv87jeB5ZNKh%2FmUjAkAoXsI96tgM52QVahahGXLpRO52%2FcVfFnxrdAoE4um7V4T1dFYwdDe1td9FkgSM%2Fv5lIdgbwsLSlb875QuAgrg0ib0R2Ku91kISMqOLqS54%2BZUkV9vM4AvLNPVZUlJ8PROC7lgICgloMzMckqXFy1AzIpS222IvzMRnaH24TO93p2fJFlAXYQMGiS9s5GMC&X-Amz-Signature=563f8a67ec4b60c53112ba47b92498d2436f58616dd1ddfe25990b93d50ad1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JDVRWI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCID2lWTuF0VbMal08PimSmWO0%2F2AyhbUOIDyPlulTZqqVAiBtLdqtMffneBSUwLbQlBcOS4lCYMekdGzcSOwrbUFW2Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMkckQVPW5fvX59iFBKtwDoGrdCH4YyPW8PutLN6TWakYwnjCeq%2FRsl3ddYjBWoUUHM1zI2HehVDsoEBsg8bW1b1rTM4JShlZjhqkE2cHs3yIxiLEbWoC1UlFgDt%2BnbgF%2FmOha9hK8Za7j0tfynWQLI43jv1gq0oQ1D6zlZhKecUBIQ7OJqljRJJ2qVTImroUpb57wF%2BYg0cNiRw0o74eA3OAZWcMZ5F0Su7MiffLIWEW6EWJjVyVcHWpVgHfJ4i%2BafHGKjdeBKqezqd2YQsBsHHriYX33BOie41qE4VXXzY8SjBMDnjgwLqivl4A1S7juTcXOobaA%2FLPddp5MipaBs0HN9TO%2BYXrcnNj3tkCnXavwTp9un7%2FRU%2FkpF03SHdAMbn9XHRvX8IxwBi6c6lhe9dClQnsBF61Kyb0JMZe1sfd8V3XlNwda%2B%2BeGD4%2FO7U97CkrQwl4Oyb%2BIcd5azMYTZwlXXO75WQW%2ByYri2B2AcNVeFSCyheIWBxysoLEE%2FrJaSWnT%2FHxFoixH61asjT%2Fqmq%2BLUhTauRqavbCCrG%2B5YTQDc8ACj60zdYrUEo%2F8ZgoqhIgxnKZu5h8sHRvVFXAh96F5velYVQej1rIQ%2F%2BYensnnKmjX5zuUExPNLWk4v3bWerREn8rsvT2wg44wvb7GyQY6pgGhaLUaBOhWYGdsMv87jeB5ZNKh%2FmUjAkAoXsI96tgM52QVahahGXLpRO52%2FcVfFnxrdAoE4um7V4T1dFYwdDe1td9FkgSM%2Fv5lIdgbwsLSlb875QuAgrg0ib0R2Ku91kISMqOLqS54%2BZUkV9vM4AvLNPVZUlJ8PROC7lgICgloMzMckqXFy1AzIpS222IvzMRnaH24TO93p2fJFlAXYQMGiS9s5GMC&X-Amz-Signature=584aaf7a9acd5f18f52b988b4f0ced5c94b52a83d0898b1f64d0b1eaab5f94a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

