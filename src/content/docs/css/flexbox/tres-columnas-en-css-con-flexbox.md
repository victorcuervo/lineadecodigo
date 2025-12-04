---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3JYRXP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBSKSKPYruTzr1LeBzOdnDdapJAUPHEcrUOfyDozARlkAiBbxT73yUJIRw0w4dDPhK4fTlV8UqufMUGfGaW%2Fa0MyYSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMsxEOeAmPvrUvWO7OKtwDuXcGPJzmybko%2FxUMZpLeVdYpNTPNiRIzHUcl3MOobRIbQxMUegfKC4Z7DDqDPd4%2B5XOl%2FirMeQ3wBrfLIShqvitVxMSMf2LwavkWFdk6YKmsBFLBTVcX47g6x1OuXvBBEaut%2FvBe53KEK6mCM8T4vpPlc1TjwX6siZjU7pTfSVWNhH7EXNy9ZIcT8uN42uwY9ev9VbGeqm12Shzdwg1XWzoD6l%2Ftc6EyFOZF5hjvWBuBWyk2%2FZtIbS93aAKXx%2BvkMKUThzkwOYAh1mRNjFyq2F6ML8gt6NS6vjn5hrrxRV%2BLy9OdL0YOIdPs1WZK3hn%2FcZ4tLDCjaYa2q35E%2BMa9V4uaZj8e6S9YMFx698M1V%2BIY1sZIuKgTD60s%2B5Wl%2FFlhTNJLepK%2FSckGDt6SOjLbS2JmcJKLzVO%2BZOOGePlrEVtebTALFmGCif39xuqVcF2thxaRRaE59hF3%2FBwJ8hA0AXl49F0q7ZYm235f9MfnZGQ%2F5cBzxf%2BJGNHtO0suIyPVhmTN15ocb8V%2FxJfkmezmbjF3V0HMm89o%2FgX9zOwpG0kWCvWrsHeBoe1ZSQsHNqkIlUEOXMqOMDfBYmYWHvneDD7WeVduwa%2Bt9TzEdIpLJJcDKeLxQYmaL%2FQhOZUw%2F5TDyQY6pgHe3nDmi091DRf78%2FmZZcrh5KMS7KQhMtcdUsjnHYvJsr3NjGuiSgDcGvBwxMSRxE0x%2FhAw4m9t7%2BXcWaDGNq6Fn2XRgyNRop7v5D3RBsLjuxBrGfMmIiGK7Zx5yJzk6ymcFBpbXMdWA0d2i4OwIGt%2Bb%2BOBv08q9OwOVfKJD50z1g6yxi5Ozcdqay8o3S0jPcXHi%2BK8s9e3QOehbyVOCRk4Q%2FFKmqKd&X-Amz-Signature=5eac63eb674f7b3a1b0e062b7e5061fb8521107496e37e03fdd5c1895eb28d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3JYRXP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBSKSKPYruTzr1LeBzOdnDdapJAUPHEcrUOfyDozARlkAiBbxT73yUJIRw0w4dDPhK4fTlV8UqufMUGfGaW%2Fa0MyYSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMsxEOeAmPvrUvWO7OKtwDuXcGPJzmybko%2FxUMZpLeVdYpNTPNiRIzHUcl3MOobRIbQxMUegfKC4Z7DDqDPd4%2B5XOl%2FirMeQ3wBrfLIShqvitVxMSMf2LwavkWFdk6YKmsBFLBTVcX47g6x1OuXvBBEaut%2FvBe53KEK6mCM8T4vpPlc1TjwX6siZjU7pTfSVWNhH7EXNy9ZIcT8uN42uwY9ev9VbGeqm12Shzdwg1XWzoD6l%2Ftc6EyFOZF5hjvWBuBWyk2%2FZtIbS93aAKXx%2BvkMKUThzkwOYAh1mRNjFyq2F6ML8gt6NS6vjn5hrrxRV%2BLy9OdL0YOIdPs1WZK3hn%2FcZ4tLDCjaYa2q35E%2BMa9V4uaZj8e6S9YMFx698M1V%2BIY1sZIuKgTD60s%2B5Wl%2FFlhTNJLepK%2FSckGDt6SOjLbS2JmcJKLzVO%2BZOOGePlrEVtebTALFmGCif39xuqVcF2thxaRRaE59hF3%2FBwJ8hA0AXl49F0q7ZYm235f9MfnZGQ%2F5cBzxf%2BJGNHtO0suIyPVhmTN15ocb8V%2FxJfkmezmbjF3V0HMm89o%2FgX9zOwpG0kWCvWrsHeBoe1ZSQsHNqkIlUEOXMqOMDfBYmYWHvneDD7WeVduwa%2Bt9TzEdIpLJJcDKeLxQYmaL%2FQhOZUw%2F5TDyQY6pgHe3nDmi091DRf78%2FmZZcrh5KMS7KQhMtcdUsjnHYvJsr3NjGuiSgDcGvBwxMSRxE0x%2FhAw4m9t7%2BXcWaDGNq6Fn2XRgyNRop7v5D3RBsLjuxBrGfMmIiGK7Zx5yJzk6ymcFBpbXMdWA0d2i4OwIGt%2Bb%2BOBv08q9OwOVfKJD50z1g6yxi5Ozcdqay8o3S0jPcXHi%2BK8s9e3QOehbyVOCRk4Q%2FFKmqKd&X-Amz-Signature=656bf1ca62c4428eaa0a738c95d791c2d288c612aa9f9c6275094e32600e62dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

