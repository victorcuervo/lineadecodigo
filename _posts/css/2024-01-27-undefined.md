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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2Y4W3A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDsjGO8l5PKfpAPoZSkpNqM8NMn5%2FLJpCrSAYjkUPOZegIhAPLwZQtdHahCyq9zHIVVIOm4GopR5NoIDu17tB0smE0OKv8DCCwQABoMNjM3NDIzMTgzODA1IgwmcRo2Lnpdku04HAQq3AN4mIKr6eMNOM9RHVanrVWLR50nwwgwb7MzWb46QDP7464x7S4c9I8gqxIiHJvubzWiP4nxQbDVli1mQ3bT8ApGhV%2F2pkqqVjQw9DcmNvoSR3XlIJNATjFKhTZEESF9AjuuAwaGnGjXOZsv5sa5UcRO0BCiCUF%2BgPrYpGmpeVuRlNlRl6qltkR53OYlqAxlykeXacy1aku2%2FIiNIXzROPZtWNMdlJfxL0VUR683iD%2FgU7UiwnLzZrx6LYH7uxnGY3o%2BTUsL59hdeczsCzHvojnnZZityGN5hwGtan2EkQQyGm54id8sm9yhhV6LkQR8hEkHmtwtBaxZM34HWXDnLd4b0t6fVTTnKThRLMkWCO%2BKRoc%2BGH8eIO1NYcsRohEYTaK9YALCKuHp0BU83MXPDgII4CdY%2FnZGhFjKXaZVEKaaSc9yr7JasaPq521US05bHLOwbacKbVodXHbYXvrt0ewiDrmp8pvCxi0u3fcT6Mznh%2F5rdtKZ9LuSk1dVbbMeH0zITXhSnHLmkg25oyKg5H3EZtTWeA0ECBbcus9%2BdAZUbad6HDe975jsnbmoAFpqUWITAH8t30wRfFRZbeXOEkQZpfls4ItvP1YdtVipcD6r3T3XVrVkOIkgnsUXSTCLr8DJBjqkAYA2i8v9Ox%2F722dw3UkuWjpoEF2rO%2F0EtbhS89aL5iGUl4MUiaIGF5kPNL1JqqS2yRNC3TPO8WLXqRKoxq8XeP0iI5cIOzQ3HXIwrmrbVhdQL1SBJ6rkfi72HRSE2vS3VAyFMsDmGi6SVYtxzxFI068pgVzisUhrQslXavpPnHNZIhDBUlgsCZXbwd5eWDysToOXImrgT1GxrM4xf45uVX%2FiQNzr&X-Amz-Signature=dea1b2418f3d1f4ca30b51b566ee4669a4a972766141f8a415ba0750f55c3dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2Y4W3A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDsjGO8l5PKfpAPoZSkpNqM8NMn5%2FLJpCrSAYjkUPOZegIhAPLwZQtdHahCyq9zHIVVIOm4GopR5NoIDu17tB0smE0OKv8DCCwQABoMNjM3NDIzMTgzODA1IgwmcRo2Lnpdku04HAQq3AN4mIKr6eMNOM9RHVanrVWLR50nwwgwb7MzWb46QDP7464x7S4c9I8gqxIiHJvubzWiP4nxQbDVli1mQ3bT8ApGhV%2F2pkqqVjQw9DcmNvoSR3XlIJNATjFKhTZEESF9AjuuAwaGnGjXOZsv5sa5UcRO0BCiCUF%2BgPrYpGmpeVuRlNlRl6qltkR53OYlqAxlykeXacy1aku2%2FIiNIXzROPZtWNMdlJfxL0VUR683iD%2FgU7UiwnLzZrx6LYH7uxnGY3o%2BTUsL59hdeczsCzHvojnnZZityGN5hwGtan2EkQQyGm54id8sm9yhhV6LkQR8hEkHmtwtBaxZM34HWXDnLd4b0t6fVTTnKThRLMkWCO%2BKRoc%2BGH8eIO1NYcsRohEYTaK9YALCKuHp0BU83MXPDgII4CdY%2FnZGhFjKXaZVEKaaSc9yr7JasaPq521US05bHLOwbacKbVodXHbYXvrt0ewiDrmp8pvCxi0u3fcT6Mznh%2F5rdtKZ9LuSk1dVbbMeH0zITXhSnHLmkg25oyKg5H3EZtTWeA0ECBbcus9%2BdAZUbad6HDe975jsnbmoAFpqUWITAH8t30wRfFRZbeXOEkQZpfls4ItvP1YdtVipcD6r3T3XVrVkOIkgnsUXSTCLr8DJBjqkAYA2i8v9Ox%2F722dw3UkuWjpoEF2rO%2F0EtbhS89aL5iGUl4MUiaIGF5kPNL1JqqS2yRNC3TPO8WLXqRKoxq8XeP0iI5cIOzQ3HXIwrmrbVhdQL1SBJ6rkfi72HRSE2vS3VAyFMsDmGi6SVYtxzxFI068pgVzisUhrQslXavpPnHNZIhDBUlgsCZXbwd5eWDysToOXImrgT1GxrM4xf45uVX%2FiQNzr&X-Amz-Signature=43c32c74359f587fae37a73b15a959204fadf43aabaf9213759b35bb66ddab8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

