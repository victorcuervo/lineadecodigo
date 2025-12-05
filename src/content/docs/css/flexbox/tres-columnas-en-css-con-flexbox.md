---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QP7PRTY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmYB7FjOL4TML%2Bsudn2KrAG4O3VcDEkL77MLKqOoVjQIgOkYh7k3RgKQmbp4Ea67lQyfgrGM9RelCK1yr%2BwPWHEUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBRUg4s45spqJbQvCSrcAwo%2F8PfsIWxBE0dUJN3PoawUEeL1GibPt6V8Y5sU8ERNnCvBQ9ht4GZFkQzHCwFDieP87%2Fm9dzuELlNp%2BtnnSKc%2BjEe7H5bw%2FW1wxtaKOPYGrKKbHxZA9Kv9UNwGnY278IWUZUfgDF1TLCidazX0TG79aI1fToQihLf%2FhREDX8OJ3BKuuzlvPqjUWlkbLLvdHer%2BpfhUAAgfO7%2B1q7xSQHJdffXM2E1YR4oVTgcjReNDUnFeWzQIoEYeEcKEjy6RMAzCeVzS49lrA55DqQzvKHehgqual3Q3JaMoYFBM24AhF0cxvszvGc6L%2BT%2BwYAZyF%2Fgc0cZzBdp%2F7Aond%2BQDUCwsooOg9XNsUYtGJBtu6P47Q1wQzHvu45HXBTkGpAvW%2BS%2BZIJqUdWuDYoA4%2B3G5%2BITJFjnV0yNzqlPLIBt4qVVqXkl9Dlud5%2FzvT8Zsh5o%2F29%2BaviXHOjpC4E64Q9dSwdiFBdwKgyFJlp2HnMmA67prtHIjj%2F2cFxFgVGmSpWeITDGxftRyBFez116EQULDxeU4j27%2Bxqehk8qOi2jnGbbipGpoVktht1JchUERO1PWiKSQewvKpPvDscdmGm6YF%2Bp3Zve4FtaSDKNYEaITY6CnN%2BDnSLWcxCHwBU1IMMiqyckGOqUBrlBxcyKa0Svqh%2Fhi81eJ%2FopH1dv7V21wsUPItPMo1UHQGcFQ2Q5%2F70bQzCQhC3eW1jcekGYJTOOC4dgEMwxljb8Tz0OySzwhSRd4oOf7DuS9uS%2F4krt1r8KWYU3hsOhRQQSdeYb8KCjBVpImjAV2tJFYbKd7nX1D%2F%2BglytftRyIjdf2sH53jRjIob8XjOss%2FJUNmgxQjDhCKo1IcCfgFfi47iZe%2F&X-Amz-Signature=cf73dbff0cba211cb51ea80d00a50efe98b1da0459d1d75eac038664bca1c2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QP7PRTY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmYB7FjOL4TML%2Bsudn2KrAG4O3VcDEkL77MLKqOoVjQIgOkYh7k3RgKQmbp4Ea67lQyfgrGM9RelCK1yr%2BwPWHEUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBRUg4s45spqJbQvCSrcAwo%2F8PfsIWxBE0dUJN3PoawUEeL1GibPt6V8Y5sU8ERNnCvBQ9ht4GZFkQzHCwFDieP87%2Fm9dzuELlNp%2BtnnSKc%2BjEe7H5bw%2FW1wxtaKOPYGrKKbHxZA9Kv9UNwGnY278IWUZUfgDF1TLCidazX0TG79aI1fToQihLf%2FhREDX8OJ3BKuuzlvPqjUWlkbLLvdHer%2BpfhUAAgfO7%2B1q7xSQHJdffXM2E1YR4oVTgcjReNDUnFeWzQIoEYeEcKEjy6RMAzCeVzS49lrA55DqQzvKHehgqual3Q3JaMoYFBM24AhF0cxvszvGc6L%2BT%2BwYAZyF%2Fgc0cZzBdp%2F7Aond%2BQDUCwsooOg9XNsUYtGJBtu6P47Q1wQzHvu45HXBTkGpAvW%2BS%2BZIJqUdWuDYoA4%2B3G5%2BITJFjnV0yNzqlPLIBt4qVVqXkl9Dlud5%2FzvT8Zsh5o%2F29%2BaviXHOjpC4E64Q9dSwdiFBdwKgyFJlp2HnMmA67prtHIjj%2F2cFxFgVGmSpWeITDGxftRyBFez116EQULDxeU4j27%2Bxqehk8qOi2jnGbbipGpoVktht1JchUERO1PWiKSQewvKpPvDscdmGm6YF%2Bp3Zve4FtaSDKNYEaITY6CnN%2BDnSLWcxCHwBU1IMMiqyckGOqUBrlBxcyKa0Svqh%2Fhi81eJ%2FopH1dv7V21wsUPItPMo1UHQGcFQ2Q5%2F70bQzCQhC3eW1jcekGYJTOOC4dgEMwxljb8Tz0OySzwhSRd4oOf7DuS9uS%2F4krt1r8KWYU3hsOhRQQSdeYb8KCjBVpImjAV2tJFYbKd7nX1D%2F%2BglytftRyIjdf2sH53jRjIob8XjOss%2FJUNmgxQjDhCKo1IcCfgFfi47iZe%2F&X-Amz-Signature=2efa064c57e2d239f6b6420c8bb9a01713874efff3ab3544dd6b8c383a2ab0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

