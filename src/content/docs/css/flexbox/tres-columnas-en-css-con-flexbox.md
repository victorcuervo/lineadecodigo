---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVMTV72%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADT5X%2BMXpH1Ie9TVPTs1uNraaGhq3RpFF5hUpSxPjfOAiAwPB%2FClufCB5q0dvBpQ0SyeKPTq13%2BzhsocGw9qIpixSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMu%2F%2F45aInNSuEPxJyKtwDowdh7YrVSHzmyzRd%2BFBOvTIk2j9MaLKEkb%2BWWTt4QyGCpBKKlFxE4XjlNOc1Eh3HPw5eiXQm1dHA0Jv7K47Hf9owzMjN9rvNvnEDArcrD3vmDOpleBdO%2BG0bbbc3434T8ijEmtrAHJsqyn7OWk%2FSnPzOvTCI%2FfeArwkDpxj5MShSk7wArReEKieXfT%2BV%2BASAlpNFPt8YrNC62xeTZR4jfjOHm5H%2F6uxC28RwxtCmVs4cZx9MCxQ90MpZ5z97JGVzKXy62qvaXajnA4l64FYxG0QfKynHmjjDG8GjROcnSABS1DRxYhC%2FXRx4N%2BHveuu2KgXzCa2MfD8qZhWf4AnSH0BbQnNgBpR8NlRx661EVUkD4b%2Fuyo7BxFfBRcPVeTkOhhMVOOP8Wc9%2BW8BI1mqQdty%2B8RhK7jwRL4Eze2J%2Fd7SzvgnYTWetozCVDcPgI6k0leI5pU1UYo2qZRyR5clqK1KDfbogf62AzTrm6f3ltgC7QehGrF76ZgqmbPI0UE6MbZqHXjBcvoZp2ZVSD%2BjyI7%2Fxi4PfQGNLdu%2B4HGkqK%2B3STGFXhbxnP8XNHpWgcb5fiMv41rvLJ8Q9zl7mpk6072GMEPWfBXzzmIHkVLCS1AG5biQKnMNsYj3RmD4w0OzLyQY6pgGeNPF7Gqgf1Z5lmhQwUr6wSboMEkkFQ%2FT0DXB420XzP%2BhGscva4Hf8t73O%2FZE%2BHyKddQ6Cy4HvJEI14gRyjrNeBtUeP2QkVVxHGBqXtRNWfzRVQNEW5PssHAZPA4O8DuDwtWYbba5loe7FO8kxgq0pxN%2FV%2BZAIjpWOX0IYNlt1BBqvpDCcB3KcJmw6R62fVl4waAqAgHS%2FjZ1vW4lmT6SxDIKYm0Ji&X-Amz-Signature=6dab4bab706cb395401425d9c610f7a023eecfecb6514e329f7610e51becda6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVMTV72%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADT5X%2BMXpH1Ie9TVPTs1uNraaGhq3RpFF5hUpSxPjfOAiAwPB%2FClufCB5q0dvBpQ0SyeKPTq13%2BzhsocGw9qIpixSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMu%2F%2F45aInNSuEPxJyKtwDowdh7YrVSHzmyzRd%2BFBOvTIk2j9MaLKEkb%2BWWTt4QyGCpBKKlFxE4XjlNOc1Eh3HPw5eiXQm1dHA0Jv7K47Hf9owzMjN9rvNvnEDArcrD3vmDOpleBdO%2BG0bbbc3434T8ijEmtrAHJsqyn7OWk%2FSnPzOvTCI%2FfeArwkDpxj5MShSk7wArReEKieXfT%2BV%2BASAlpNFPt8YrNC62xeTZR4jfjOHm5H%2F6uxC28RwxtCmVs4cZx9MCxQ90MpZ5z97JGVzKXy62qvaXajnA4l64FYxG0QfKynHmjjDG8GjROcnSABS1DRxYhC%2FXRx4N%2BHveuu2KgXzCa2MfD8qZhWf4AnSH0BbQnNgBpR8NlRx661EVUkD4b%2Fuyo7BxFfBRcPVeTkOhhMVOOP8Wc9%2BW8BI1mqQdty%2B8RhK7jwRL4Eze2J%2Fd7SzvgnYTWetozCVDcPgI6k0leI5pU1UYo2qZRyR5clqK1KDfbogf62AzTrm6f3ltgC7QehGrF76ZgqmbPI0UE6MbZqHXjBcvoZp2ZVSD%2BjyI7%2Fxi4PfQGNLdu%2B4HGkqK%2B3STGFXhbxnP8XNHpWgcb5fiMv41rvLJ8Q9zl7mpk6072GMEPWfBXzzmIHkVLCS1AG5biQKnMNsYj3RmD4w0OzLyQY6pgGeNPF7Gqgf1Z5lmhQwUr6wSboMEkkFQ%2FT0DXB420XzP%2BhGscva4Hf8t73O%2FZE%2BHyKddQ6Cy4HvJEI14gRyjrNeBtUeP2QkVVxHGBqXtRNWfzRVQNEW5PssHAZPA4O8DuDwtWYbba5loe7FO8kxgq0pxN%2FV%2BZAIjpWOX0IYNlt1BBqvpDCcB3KcJmw6R62fVl4waAqAgHS%2FjZ1vW4lmT6SxDIKYm0Ji&X-Amz-Signature=55fae1f09f7834dbefbec41429028f0a9e3a86288f211db1a4e2c1994d4b93fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

