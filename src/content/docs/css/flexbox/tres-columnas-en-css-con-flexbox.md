---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJVONQ4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCcztJ6CQRc9hZ82L0tY0zJ7OTwK6lYTvsZMaxw%2BJ%2BHyQIgXVEYLOWxeEO43PygKEXoJ9xpxZJjJ2dDjTA1Ih8T2iEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDE3qJWf5gLhGaXBk%2BSrcA7dLYvVGs9UpqvqgarR4P067asYEw%2BmlXCPshwOYUxroUxzpgRLsSOGsbxQxb4grQlpRHW7a%2F%2B5TzqC%2Fh4nx8Fa0RA96Qh7oqp5mC3NaVEwnd%2Bx7JZ1WIjHrhPYuwZ2XtOivuknlXw8MXw64RGNKqNIuj8al6JJT2grmo0RWe3LV1dxK4wUJ63hKA6W4P3cEOXAiX7Y23Nmf1fUB5yubmAI1nTAaR67qcDHhtskNpfwwBmUflgOwHAB2zSRufAa9vRHH1XNhrnRyIOPBY1oUDprCCabsbU4DKn9AiGD6D%2BZC7wEXLSeQFziKM2SHlAknPMSJzYQgtprMKvgnJsMipKEa96%2F9oIGODF1ciqvvlrA%2B3AnN8u7dWcra7I%2BEkUoE%2FwiCD%2FytlGijlWadXParGOAhQwRYI%2BwmYisgjF%2B0P6Ivi1LQYby4GUHcbGbCMLydC90RO5ulwC0fPk%2Bw4hng%2B%2BUZpYvM7tC57OvFWHbMooO3IlaowPllkh47TEvIb43d7jhI41F8GtPpUKRdkKS29oiBuql%2BYsX8pGV8Ughl3w8hzDvgZsW9klmNghLzZmtfN9PmLry6Q6Q9yF9lN6VXCtyqKf8nnfreCDiF40ONJp0BoMUCFnpjGpnln8vWMOfoxMkGOqUB08w%2B0kddDlLJmVqazvfuMtBNsgL0qdf8TQ2L1RwKVrLFD%2FJFx%2BcY7UhjrYKSLHn9i4KOfuGkjxUH2TnHeuaC4NAm5qMt%2F2XChsNFfVKy%2F3eeKCkadkZtKsPMay5Q8D0yB9jTCmwEkASmZcI4i7%2BwGzX60ZCL4iviMyPQCmCqsQMEwokOVcffmx7gaFlUu5LajCgRN2L1XzJXs1n44mVlxP1wLENv&X-Amz-Signature=2dcf75cbc9f8bba97dc6ceda624ed1ba095f7664a66bda12eba20f5efa4132a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJVONQ4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCcztJ6CQRc9hZ82L0tY0zJ7OTwK6lYTvsZMaxw%2BJ%2BHyQIgXVEYLOWxeEO43PygKEXoJ9xpxZJjJ2dDjTA1Ih8T2iEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDE3qJWf5gLhGaXBk%2BSrcA7dLYvVGs9UpqvqgarR4P067asYEw%2BmlXCPshwOYUxroUxzpgRLsSOGsbxQxb4grQlpRHW7a%2F%2B5TzqC%2Fh4nx8Fa0RA96Qh7oqp5mC3NaVEwnd%2Bx7JZ1WIjHrhPYuwZ2XtOivuknlXw8MXw64RGNKqNIuj8al6JJT2grmo0RWe3LV1dxK4wUJ63hKA6W4P3cEOXAiX7Y23Nmf1fUB5yubmAI1nTAaR67qcDHhtskNpfwwBmUflgOwHAB2zSRufAa9vRHH1XNhrnRyIOPBY1oUDprCCabsbU4DKn9AiGD6D%2BZC7wEXLSeQFziKM2SHlAknPMSJzYQgtprMKvgnJsMipKEa96%2F9oIGODF1ciqvvlrA%2B3AnN8u7dWcra7I%2BEkUoE%2FwiCD%2FytlGijlWadXParGOAhQwRYI%2BwmYisgjF%2B0P6Ivi1LQYby4GUHcbGbCMLydC90RO5ulwC0fPk%2Bw4hng%2B%2BUZpYvM7tC57OvFWHbMooO3IlaowPllkh47TEvIb43d7jhI41F8GtPpUKRdkKS29oiBuql%2BYsX8pGV8Ughl3w8hzDvgZsW9klmNghLzZmtfN9PmLry6Q6Q9yF9lN6VXCtyqKf8nnfreCDiF40ONJp0BoMUCFnpjGpnln8vWMOfoxMkGOqUB08w%2B0kddDlLJmVqazvfuMtBNsgL0qdf8TQ2L1RwKVrLFD%2FJFx%2BcY7UhjrYKSLHn9i4KOfuGkjxUH2TnHeuaC4NAm5qMt%2F2XChsNFfVKy%2F3eeKCkadkZtKsPMay5Q8D0yB9jTCmwEkASmZcI4i7%2BwGzX60ZCL4iviMyPQCmCqsQMEwokOVcffmx7gaFlUu5LajCgRN2L1XzJXs1n44mVlxP1wLENv&X-Amz-Signature=cbb2d21563bd0a7e91b46310c40d1540620eb5ea3257da15a41deb308ef206ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

