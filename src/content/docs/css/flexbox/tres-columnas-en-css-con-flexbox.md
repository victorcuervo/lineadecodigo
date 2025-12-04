---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TBVV3V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIANAnJexbp64sKkJCJ5Z7uC8oAEwJOqUD4djb60PxahoAiAOj35g8zmYPz213oHUsUP2X9CkLbajgNp3WYCoE6ZQzir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMsbF1JP3ry%2BLYe2hYKtwDfXuhMLGMdnwbA49Hq1Uhw%2FWutyXfXJ7rPij8uLkl4stYA4Nz7xSiw7vsdIemCgX1nCVR5pzMkSk0R1voso4NnMeYHfC%2FPDAzRNDskYwFMHsyxhnuoRFAHfTEYqfOSeZMlJDccaxsc%2F5DIrFQ2nLiSgYC%2FnAf8moJTDsiJEP52vKlK%2FOdT7J8sW9AkDEQmzBgdbR1HXEL9tO4wq%2BObGsqFYQwawbFyrcRIHtz%2B4ibwCrp90dOpa34D0mds9lB8g4AAtfvVY2j7MaxRCnZFBswGn8qSQG%2B4qBUKS7su8vbu5Y6d%2F2EYbNYl4oFkzaUnDYHSJC7VldE1GkSoQlgyBg5E2Im0MxXxhiJHZjmXUMDo7VlTqLRpay0pxeDhUh1%2FFsp03prJTmB4p1ncVsXIgP8XNjJhTb%2FmA5DnN5fcBbG%2Bmykokida9W%2BoLVRbTVytftgvOO2%2FGCaIqNiutbPF%2FMBuxeINwtmZ7j%2B79fyay6d31hoWwnVRGnpGSOOrLA%2B0OnRVac1q7vSzDjPmw9gkSoqoG5Hr4n%2BUdKq%2Fzc1DLN19%2FC%2BdyNmwW9mwXm%2FXT4okt4YV2w6A8pbP5YTmUt%2FBqcWgKiJuaXOs5i0bE4ngv6vHvJNty93aE1R2MAxpXAwtujEyQY6pgG80TnfXB3XT77HNaTMrgw%2B32GGWQsopretigqQz5JzMe7LdRUKm5%2BPhwJvLqx7XCJXXpp4qVj6D%2FR5iS5FLGlZgvqsXcHJpnFAmDuvqxmFp5KvXOtvbKZnFQ2ALKgNCk1rprl2QXhsInAh%2FiNvM%2BAzaavy6eClNI066thxMtwG3NRyJ%2FhiRDA8AQ%2BEPXlMeOPDNp2tRUHguwtjVCIQkZvtGJVn9gF4&X-Amz-Signature=55081679ebf0153672c450b7367cb44442a93c0939915e1c3bbf54c97957fdd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TBVV3V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIANAnJexbp64sKkJCJ5Z7uC8oAEwJOqUD4djb60PxahoAiAOj35g8zmYPz213oHUsUP2X9CkLbajgNp3WYCoE6ZQzir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMsbF1JP3ry%2BLYe2hYKtwDfXuhMLGMdnwbA49Hq1Uhw%2FWutyXfXJ7rPij8uLkl4stYA4Nz7xSiw7vsdIemCgX1nCVR5pzMkSk0R1voso4NnMeYHfC%2FPDAzRNDskYwFMHsyxhnuoRFAHfTEYqfOSeZMlJDccaxsc%2F5DIrFQ2nLiSgYC%2FnAf8moJTDsiJEP52vKlK%2FOdT7J8sW9AkDEQmzBgdbR1HXEL9tO4wq%2BObGsqFYQwawbFyrcRIHtz%2B4ibwCrp90dOpa34D0mds9lB8g4AAtfvVY2j7MaxRCnZFBswGn8qSQG%2B4qBUKS7su8vbu5Y6d%2F2EYbNYl4oFkzaUnDYHSJC7VldE1GkSoQlgyBg5E2Im0MxXxhiJHZjmXUMDo7VlTqLRpay0pxeDhUh1%2FFsp03prJTmB4p1ncVsXIgP8XNjJhTb%2FmA5DnN5fcBbG%2Bmykokida9W%2BoLVRbTVytftgvOO2%2FGCaIqNiutbPF%2FMBuxeINwtmZ7j%2B79fyay6d31hoWwnVRGnpGSOOrLA%2B0OnRVac1q7vSzDjPmw9gkSoqoG5Hr4n%2BUdKq%2Fzc1DLN19%2FC%2BdyNmwW9mwXm%2FXT4okt4YV2w6A8pbP5YTmUt%2FBqcWgKiJuaXOs5i0bE4ngv6vHvJNty93aE1R2MAxpXAwtujEyQY6pgG80TnfXB3XT77HNaTMrgw%2B32GGWQsopretigqQz5JzMe7LdRUKm5%2BPhwJvLqx7XCJXXpp4qVj6D%2FR5iS5FLGlZgvqsXcHJpnFAmDuvqxmFp5KvXOtvbKZnFQ2ALKgNCk1rprl2QXhsInAh%2FiNvM%2BAzaavy6eClNI066thxMtwG3NRyJ%2FhiRDA8AQ%2BEPXlMeOPDNp2tRUHguwtjVCIQkZvtGJVn9gF4&X-Amz-Signature=6683771a8e54f48138ce049af920be69ae57bbaa629a3bcce61c89e17d5525d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

