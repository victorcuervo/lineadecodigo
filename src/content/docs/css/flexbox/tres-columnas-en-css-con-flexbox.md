---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWJMO2ST%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk4k%2B%2BBIfiV0BgEj7hMwdTwszcR08xpjbOktjMJyOaOAiBIUIdx%2BLBwirDTryxLfbowwiGv%2B8%2FjS7Pzyz%2FhQ3Rqmyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMTDaM9TEuYHTx57EGKtwDX0gJj9z%2F2VkZ0UQ7Rjx1ESWGRkgo1NCZDJcE8Rh2F36MRc%2FhBXSh6u7V5iwnp8V%2F2x1SZh3dWnit%2F0hAvdExLQTHEJDhJUN6JWk2tdjcvcIwbcLE1UKlSo9zGpyc%2FUpgTITrOejiQMNlL5qgl18O39H6Ttl2aGx31FYAN8dgmzTAdZY%2BelpNHd8dcq0ZlU5s61S7GBiN0QC%2FZ1m2x8DjlxN8qhXGmCbPeLgMHlGnTnzUsmchqkJdqtjMllynHpPk3htdddbElGD8mFNuUFtyEZO26IIfvR%2B3lEh13plkjSWd9RZSAlo2b6hGpuhz6m5O7VQu8U58O7tngwad%2BFYtRqRvItMKMkISBVjeKRd6IEvyNIeJdDGYf1lOUtwSy5NdPMLC5EBF9duvignYr%2BD78TzIc3RNdpDuco0HtQjx96yVCyh8IBCB0eGM2XuNdlfAvV1VPSq1eZX2fob3UjfWRP9I65i%2FArSVeSdg5NcGdt9w3qW356Q5dKKf%2FceGW%2FzA%2BVR8ev28%2BPnDq%2B%2F2xFofDOMz68DSyAA4Ti0vbsh14AU6OZKAoGT531OKxc6%2F8c4NlAOqZ88yh0tzz6HfDx2AEb0kz%2BnTDXp15isINxsR1W54rwoDrGrctHFdYBEw0sDKyQY6pgHyVyfobDltFP70bdw%2FuzBiAJyS4OTaxj6oaiczpTCy7hjAuHDwW9HzWkcc0YGU%2FWDSrt6E%2Bpw5KgWGuSOfDjhUxbA%2F%2FGLNKL28ojzDoX%2FJOSoXPH5Acmzp%2BwLpz28R9G4o5BhINRJb5Nn5BYIr8cMxLdPeRkzX2T2R1cZ5KCDpSJdh9U7xKHp9SS7sCAAU3QoRnmZBdK7cNMR8A3V%2BhLEryTz3kWUu&X-Amz-Signature=85baa425532cd9f55ddb3057ae90cd9d272d454b5569ea35d22d3f3783c7bcb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWJMO2ST%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk4k%2B%2BBIfiV0BgEj7hMwdTwszcR08xpjbOktjMJyOaOAiBIUIdx%2BLBwirDTryxLfbowwiGv%2B8%2FjS7Pzyz%2FhQ3Rqmyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMTDaM9TEuYHTx57EGKtwDX0gJj9z%2F2VkZ0UQ7Rjx1ESWGRkgo1NCZDJcE8Rh2F36MRc%2FhBXSh6u7V5iwnp8V%2F2x1SZh3dWnit%2F0hAvdExLQTHEJDhJUN6JWk2tdjcvcIwbcLE1UKlSo9zGpyc%2FUpgTITrOejiQMNlL5qgl18O39H6Ttl2aGx31FYAN8dgmzTAdZY%2BelpNHd8dcq0ZlU5s61S7GBiN0QC%2FZ1m2x8DjlxN8qhXGmCbPeLgMHlGnTnzUsmchqkJdqtjMllynHpPk3htdddbElGD8mFNuUFtyEZO26IIfvR%2B3lEh13plkjSWd9RZSAlo2b6hGpuhz6m5O7VQu8U58O7tngwad%2BFYtRqRvItMKMkISBVjeKRd6IEvyNIeJdDGYf1lOUtwSy5NdPMLC5EBF9duvignYr%2BD78TzIc3RNdpDuco0HtQjx96yVCyh8IBCB0eGM2XuNdlfAvV1VPSq1eZX2fob3UjfWRP9I65i%2FArSVeSdg5NcGdt9w3qW356Q5dKKf%2FceGW%2FzA%2BVR8ev28%2BPnDq%2B%2F2xFofDOMz68DSyAA4Ti0vbsh14AU6OZKAoGT531OKxc6%2F8c4NlAOqZ88yh0tzz6HfDx2AEb0kz%2BnTDXp15isINxsR1W54rwoDrGrctHFdYBEw0sDKyQY6pgHyVyfobDltFP70bdw%2FuzBiAJyS4OTaxj6oaiczpTCy7hjAuHDwW9HzWkcc0YGU%2FWDSrt6E%2Bpw5KgWGuSOfDjhUxbA%2F%2FGLNKL28ojzDoX%2FJOSoXPH5Acmzp%2BwLpz28R9G4o5BhINRJb5Nn5BYIr8cMxLdPeRkzX2T2R1cZ5KCDpSJdh9U7xKHp9SS7sCAAU3QoRnmZBdK7cNMR8A3V%2BhLEryTz3kWUu&X-Amz-Signature=ec1a6b78d3e61191cc9caf0d7d28c26891288b444c7e29865fc0d080aae10ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

