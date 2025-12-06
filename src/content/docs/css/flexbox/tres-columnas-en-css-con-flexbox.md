---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQER47U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEghe0qIWkdkPP5YFCL2q24AuwvdWnwo2wDZKLSY4vgsAiEAoRH3iAeupA6b9LuLIIcL6%2BzEG%2F8wtgrlJ%2BICF2d%2Fh0Uq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDM6KYKtNYOrHgAxtoircA50ZuxU09ZUTSBtx8jqwqH363rNXH9WPZXWp4CypV7Xto%2F1to5vo5yaoTN1FBFkiEIAb%2B0FfGYmdEK65JQAv9DII7B2clwUmX4ed6%2BV4Dn8lqg3XU9bs%2FaoNEdzGbUST0aFskR0SSmZ3cMfJTDamGbnzHVuWXcyWZweeIfWKwXHHv8n8JlTppaREawgjN%2FVnxfeNy8XJ9MFyf9sJcZPZ%2F%2BPomos2l21yTtJhbTUVs6i%2FCJsVyZ%2BTmYNPqV0BmE960MIWQoyjEHUI4kfa8%2B1fjTnx3N8lUadNS9kEkhKPULroZqE4mSZYQFgg6ynJkx6kGgy6tCI%2BkXOVjAGtI0iv8l8XcJI52lxzlNaSRjuiyuOLKJDL6UvrBjEJT9O41VM0DHZfQ0o3QJkHVOc1QuvNW5JVCBbcToSilY7RQOAlQ%2B6cuDm5tyA%2Fp0UnTlphGGwEL2viZn4aklS1GVbevfJ%2BATbBU6V2wWzzsRDI9DbZnViXobwCAI3mOlBKxpCuJ9ROsDMci%2Faq3%2FNMriazbYWJ16i8mUORa%2FhL%2B2N2d9j1AoNxkCQYzjlBJnJ8zFvh%2Fw9ELhQVbGyj56f%2FFwMVHggMzErni330GVkpDaa8D2eVOD6HbJWNTVrsu97QxfSxMKem0MkGOqUBaPQCJDmMBCwoVd7Nt9V12894FYTGhsLgu8fnVMlQUSXHAjSJvobEftS2W6YD6dYVO8tOtd44XLFgvQZzweKFbgGxE743AkcRkVg0OHe9nwtfi%2BXTub6O4z7b19G7qf6NjjBM8epp7BcPRVpBKgzQ34XONkshDRXzTroMbBNzI%2F%2FianXNv%2Fax3aFflurorMKnxLZ92%2FPyRp3e%2FPMRHiLD0BfhCp%2BE&X-Amz-Signature=93e86500f0650eb1a4b2f67b1b1a4a5040bf9c43742993ae206f0b5e04305cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQER47U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEghe0qIWkdkPP5YFCL2q24AuwvdWnwo2wDZKLSY4vgsAiEAoRH3iAeupA6b9LuLIIcL6%2BzEG%2F8wtgrlJ%2BICF2d%2Fh0Uq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDM6KYKtNYOrHgAxtoircA50ZuxU09ZUTSBtx8jqwqH363rNXH9WPZXWp4CypV7Xto%2F1to5vo5yaoTN1FBFkiEIAb%2B0FfGYmdEK65JQAv9DII7B2clwUmX4ed6%2BV4Dn8lqg3XU9bs%2FaoNEdzGbUST0aFskR0SSmZ3cMfJTDamGbnzHVuWXcyWZweeIfWKwXHHv8n8JlTppaREawgjN%2FVnxfeNy8XJ9MFyf9sJcZPZ%2F%2BPomos2l21yTtJhbTUVs6i%2FCJsVyZ%2BTmYNPqV0BmE960MIWQoyjEHUI4kfa8%2B1fjTnx3N8lUadNS9kEkhKPULroZqE4mSZYQFgg6ynJkx6kGgy6tCI%2BkXOVjAGtI0iv8l8XcJI52lxzlNaSRjuiyuOLKJDL6UvrBjEJT9O41VM0DHZfQ0o3QJkHVOc1QuvNW5JVCBbcToSilY7RQOAlQ%2B6cuDm5tyA%2Fp0UnTlphGGwEL2viZn4aklS1GVbevfJ%2BATbBU6V2wWzzsRDI9DbZnViXobwCAI3mOlBKxpCuJ9ROsDMci%2Faq3%2FNMriazbYWJ16i8mUORa%2FhL%2B2N2d9j1AoNxkCQYzjlBJnJ8zFvh%2Fw9ELhQVbGyj56f%2FFwMVHggMzErni330GVkpDaa8D2eVOD6HbJWNTVrsu97QxfSxMKem0MkGOqUBaPQCJDmMBCwoVd7Nt9V12894FYTGhsLgu8fnVMlQUSXHAjSJvobEftS2W6YD6dYVO8tOtd44XLFgvQZzweKFbgGxE743AkcRkVg0OHe9nwtfi%2BXTub6O4z7b19G7qf6NjjBM8epp7BcPRVpBKgzQ34XONkshDRXzTroMbBNzI%2F%2FianXNv%2Fax3aFflurorMKnxLZ92%2FPyRp3e%2FPMRHiLD0BfhCp%2BE&X-Amz-Signature=ac43cf502d176dce54f72bcdd583dee95f1a50c1a3801d7d4430bb4bf38cd624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

