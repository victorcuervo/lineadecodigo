---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CA6JSU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIGUo1SaPpyzHAdSeVtIW4eEEWX7yElyP29rxEcTjOB9KAiA5LWIIX0VI%2FKKhxPf3Jgp24bfanHovoXQhoScWx4hTmyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMF23hTgbhnpwdLideKtwDhgCJloqmCW1QtTohthZ7tdu2DuoTfw9zLK15l03DmZUrl33VqMcVR0RTz1gH3xaOxEHLU2DYmjl4vXieVKm0ecMRZ1ozPgI7FWJjPZ9WMjmG%2BXKRIJukChA%2FgUUDaXCf2I6s66ayRrqL9B5EHg13fsjV4roa8BWxunHB1K5%2B4aJC3wxUTWoh2fMYaPWENbKjmx2Dx72E4Do3NCBPK4wEsp%2FASoKjHTmvhIpRzXurryYVbfWHyDECb98d8RAFXsar2Qsb7z5uVyIf%2BeaLJGKq4oSGzl6kLmF%2B0hpjmWBAfWPxeYmSXsnuZf7Yu2V0GO5gI72WrjZ7lMCiQXe50vg7cgrEGk708ZAQ%2B27qpWyQlAdEr2kNT2YxqTraCZ7v6ZaCzBQ4JZUCOIOCaqP7TL5OkUiypB6PqsrzplWMSX8NNBCLQN6fnaB3RIjMr6XFkYt7B3Gz2Q7%2F3q2KLf0L8OpLkzeiJ6wX%2FSX6KHXlfjUUAut0lTNL1EJQotSkastjFOY22YbGgjyKEVKOFWO5aK%2FNvvIDyI5UcIk8kVXIYojO0G%2BqK4fy%2F9ELpht5n5v5NJeFiGKXHNLTF3h2OnWjdNEzrBm5yBX0SFYH5BArN3lX2qq69IHaYmQUOS0YhxYwmMHByQY6pgH4lZBe1Mjnk5x1rKfj1UOfc0KR%2Bc81xSj2pON5%2FoINTdHGvB3gZTJUgdVd1LhR5stf%2F7pHEp6bMNfwpuNReGGhIXuHqCWN5BeCKMSH6Z5Rt%2BiMbXBmSUW%2FQsgzL9eqxVfKE0wLfNYLFEIspwf5JL0UYDOf%2FxxzfJCAnruNwJ5Fzm2WrTue12ZSZLpU8SlqppQXTLxDaCtvNBHEkru4oPUrDh%2Ba5eb4&X-Amz-Signature=0e8ca3f3c8f2cf4ace4f9a0cc7f49c44d26630e9366c89f11f67b4d8fef2f15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CA6JSU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIGUo1SaPpyzHAdSeVtIW4eEEWX7yElyP29rxEcTjOB9KAiA5LWIIX0VI%2FKKhxPf3Jgp24bfanHovoXQhoScWx4hTmyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMF23hTgbhnpwdLideKtwDhgCJloqmCW1QtTohthZ7tdu2DuoTfw9zLK15l03DmZUrl33VqMcVR0RTz1gH3xaOxEHLU2DYmjl4vXieVKm0ecMRZ1ozPgI7FWJjPZ9WMjmG%2BXKRIJukChA%2FgUUDaXCf2I6s66ayRrqL9B5EHg13fsjV4roa8BWxunHB1K5%2B4aJC3wxUTWoh2fMYaPWENbKjmx2Dx72E4Do3NCBPK4wEsp%2FASoKjHTmvhIpRzXurryYVbfWHyDECb98d8RAFXsar2Qsb7z5uVyIf%2BeaLJGKq4oSGzl6kLmF%2B0hpjmWBAfWPxeYmSXsnuZf7Yu2V0GO5gI72WrjZ7lMCiQXe50vg7cgrEGk708ZAQ%2B27qpWyQlAdEr2kNT2YxqTraCZ7v6ZaCzBQ4JZUCOIOCaqP7TL5OkUiypB6PqsrzplWMSX8NNBCLQN6fnaB3RIjMr6XFkYt7B3Gz2Q7%2F3q2KLf0L8OpLkzeiJ6wX%2FSX6KHXlfjUUAut0lTNL1EJQotSkastjFOY22YbGgjyKEVKOFWO5aK%2FNvvIDyI5UcIk8kVXIYojO0G%2BqK4fy%2F9ELpht5n5v5NJeFiGKXHNLTF3h2OnWjdNEzrBm5yBX0SFYH5BArN3lX2qq69IHaYmQUOS0YhxYwmMHByQY6pgH4lZBe1Mjnk5x1rKfj1UOfc0KR%2Bc81xSj2pON5%2FoINTdHGvB3gZTJUgdVd1LhR5stf%2F7pHEp6bMNfwpuNReGGhIXuHqCWN5BeCKMSH6Z5Rt%2BiMbXBmSUW%2FQsgzL9eqxVfKE0wLfNYLFEIspwf5JL0UYDOf%2FxxzfJCAnruNwJ5Fzm2WrTue12ZSZLpU8SlqppQXTLxDaCtvNBHEkru4oPUrDh%2Ba5eb4&X-Amz-Signature=6c7246d84a8e432ab34ce497ed1d656f57b939e9eedfa613551229f2e2d0716c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

