---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMBTWSPD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX3S4eni0mtWj6lOsznPPFCowxplMKfYpENNvTsi%2Bu0AIhAINgrG4bWT6K5HCfxYKH6AtA6QqhN8exnCKmxsAxr4dNKv8DCFUQABoMNjM3NDIzMTgzODA1IgxYpXQDg0%2B19T1cVugq3ANxNygDOagwNuSTxsD5QhVB6pCqk5gmbV9D2vKJULXRay2aqbxUfjIa8cX%2FeL7%2FHP4xlfpZ1NrEaxfpugHDLN0sAN5AZydvV2DOXYhmoT%2FkXO%2BFCSFcByCjEEWJIycLgBKkq4QwSieRg3%2F%2BD6BABUMBWmEDvUdiZKIOabtyDLZz2x37xex3AKCcO8jzhefjUhOYHCW6l9B59u6bUTeoktlwx7OUEiR9FrXNNtHFIb58NmSmVfTYf0WnPVjK5a%2FMjImPGCErgjGOJ%2FcyQqA27WS1pHDSYmXwIWGE4LqFzC%2FdTml31BDxc9HHD9qD3QiyKTdMm9VG%2FJHf1RbZptZQ%2BmIWOlo%2Fo6ZWUTNkgHI7NRniBAJk%2B5Q4%2FuYEkthQ%2F1mC9xQJxpNb0raczdw%2BwjaQQBX6koP8oMP6Axvldd5NoyVQS9a2C3MicgNb%2Bb%2FXjm7rAlvhxwMYtrXFvnVr3RwGoytnSB1OpGUGD19O1cla8kQvl%2F2hBAUbvyv3P9hPTPWqDxctlfOkobW26BrVy6j5hAoYBZgrWAaCP7UhZts22M0IK%2BzxL%2BIeHbo1t3hk3aiTtDKwNk1tt4KQisbJ%2BIFmaGvtZBhE1mzmFlSyKBiHOB%2FRVhOq4WOhfMJru6rajjDmr8nJBjqkAQeIZVbBk91%2Fak8eA6hUmFoyxX%2FcF343qGPMDBYvwDoCarH6aBEAb8c4mJxlNjdldZynjPOi7f74%2FVyNGeKMZk5SHxcMPvRsZX9W%2Beee9ku1JdahtJCtiXRu08wZC6QptqngasPPkVQGNVDkd%2Bthcv6ghqnmiUZRI9w3nA1ysiUmI7sHbhTJhu7k2n0sXszEqQjKtiXwptQVSdshtCpTDfvX5Ka6&X-Amz-Signature=6759f742fd5922348c9c4c76a761ab2e6fc4f282d65de4e3d3618dd9ce891e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMBTWSPD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX3S4eni0mtWj6lOsznPPFCowxplMKfYpENNvTsi%2Bu0AIhAINgrG4bWT6K5HCfxYKH6AtA6QqhN8exnCKmxsAxr4dNKv8DCFUQABoMNjM3NDIzMTgzODA1IgxYpXQDg0%2B19T1cVugq3ANxNygDOagwNuSTxsD5QhVB6pCqk5gmbV9D2vKJULXRay2aqbxUfjIa8cX%2FeL7%2FHP4xlfpZ1NrEaxfpugHDLN0sAN5AZydvV2DOXYhmoT%2FkXO%2BFCSFcByCjEEWJIycLgBKkq4QwSieRg3%2F%2BD6BABUMBWmEDvUdiZKIOabtyDLZz2x37xex3AKCcO8jzhefjUhOYHCW6l9B59u6bUTeoktlwx7OUEiR9FrXNNtHFIb58NmSmVfTYf0WnPVjK5a%2FMjImPGCErgjGOJ%2FcyQqA27WS1pHDSYmXwIWGE4LqFzC%2FdTml31BDxc9HHD9qD3QiyKTdMm9VG%2FJHf1RbZptZQ%2BmIWOlo%2Fo6ZWUTNkgHI7NRniBAJk%2B5Q4%2FuYEkthQ%2F1mC9xQJxpNb0raczdw%2BwjaQQBX6koP8oMP6Axvldd5NoyVQS9a2C3MicgNb%2Bb%2FXjm7rAlvhxwMYtrXFvnVr3RwGoytnSB1OpGUGD19O1cla8kQvl%2F2hBAUbvyv3P9hPTPWqDxctlfOkobW26BrVy6j5hAoYBZgrWAaCP7UhZts22M0IK%2BzxL%2BIeHbo1t3hk3aiTtDKwNk1tt4KQisbJ%2BIFmaGvtZBhE1mzmFlSyKBiHOB%2FRVhOq4WOhfMJru6rajjDmr8nJBjqkAQeIZVbBk91%2Fak8eA6hUmFoyxX%2FcF343qGPMDBYvwDoCarH6aBEAb8c4mJxlNjdldZynjPOi7f74%2FVyNGeKMZk5SHxcMPvRsZX9W%2Beee9ku1JdahtJCtiXRu08wZC6QptqngasPPkVQGNVDkd%2Bthcv6ghqnmiUZRI9w3nA1ysiUmI7sHbhTJhu7k2n0sXszEqQjKtiXwptQVSdshtCpTDfvX5Ka6&X-Amz-Signature=594b6c661532307793d9f80e136564045fa682bda6f89e25842b1ae8cb0c6448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

