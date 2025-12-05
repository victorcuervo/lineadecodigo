---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ESFKZQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRrk6k0l3l6hAMhcAEtGCJ6s6%2BNPh00lEwkksbM%2FvFxAIhAPCnDS8FVs2eyZVzUqVBYaObfprnvKtQCi8lIvoLVbHEKv8DCFUQABoMNjM3NDIzMTgzODA1IgwQgPBXLiQQZmmcxbAq3APARnZ5pkPhaVKoYhTHg8la2rH1ArgWSOeD9gLMb3fgNfSVQ1y69WzdJVO4l7afMCOp90Ez8EPdkN1ZlCEnpVNaUJlTkCmI%2FBfSV%2F3qr4lgc5KoNKTRMaGHnyMUrgGyqr%2B77rjfGSGD%2BMyfxup6VbJ3t9Lt3WqI74FpYsDuA8TLKFWBFowNQt3xTObW4OHrIvHr1%2Fic5zAtgPwvMso%2BnIJbWHWfE0mLWElAo9cBqv58yW%2BliIrULE5u3tWKwpbG5Icb1AMbRKjDn%2FwDaTt9r3Mu8Hm3wTnUpC1U2fL%2BP9NwOavNM44km6JcdgALfb3SYL8rZWyAemrYiFOPx%2Br7xdfHp4J7RFBbawdrqCq%2FDBfqVJlbgzcigfMXxIgkKr3s55LzubUJuRHXlF8TNls3v2VP%2FnIuNcGC4vcN34%2BjJ8yRXLQ1ZxD%2FJcb9b7C4sORot6RLvZ7VRj6YNRl6xMLXn1Sa7QhAFdhIebIhkr10uHUh%2B4bnuof6HG%2BC7pAjAIg3GNg3kWonwGN5NYW2E8irxLvW8%2Bx8hBfEo%2BFpZPUvazuY%2BcWtEoYOv2qgNYxHKpF9KvJVJ67bM8WBkD8yx5OoRWxF%2B8lFtlKTQTwgjFvBRcWlZMwFWTjZqSTKUUV40jDQq8nJBjqkAeACysD5vzsS4y1yMrqyv%2F2Ye494jTcRMtXYI1%2B2Y3H9HZpN8XWSHd46H8ysN%2BGKiC1JX%2Biy6VmH0Spcl7aJ6yhYY2BudEg%2FCTiFrUcUw1NsFBGco08zSmLEsbOtwX67QebQPgqV2nOy%2BYR0oNDrutkF5S9LbjrAiVLAx%2B6flHOAFBetmQ6m51vyMMIAnf0wMvm0pbQgHzUoqGlRWUmvk8o3ccz0&X-Amz-Signature=ac91d952dc2c3409d71624dce72a968b682fbe24504af5f3a9f58a86e726dde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ESFKZQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRrk6k0l3l6hAMhcAEtGCJ6s6%2BNPh00lEwkksbM%2FvFxAIhAPCnDS8FVs2eyZVzUqVBYaObfprnvKtQCi8lIvoLVbHEKv8DCFUQABoMNjM3NDIzMTgzODA1IgwQgPBXLiQQZmmcxbAq3APARnZ5pkPhaVKoYhTHg8la2rH1ArgWSOeD9gLMb3fgNfSVQ1y69WzdJVO4l7afMCOp90Ez8EPdkN1ZlCEnpVNaUJlTkCmI%2FBfSV%2F3qr4lgc5KoNKTRMaGHnyMUrgGyqr%2B77rjfGSGD%2BMyfxup6VbJ3t9Lt3WqI74FpYsDuA8TLKFWBFowNQt3xTObW4OHrIvHr1%2Fic5zAtgPwvMso%2BnIJbWHWfE0mLWElAo9cBqv58yW%2BliIrULE5u3tWKwpbG5Icb1AMbRKjDn%2FwDaTt9r3Mu8Hm3wTnUpC1U2fL%2BP9NwOavNM44km6JcdgALfb3SYL8rZWyAemrYiFOPx%2Br7xdfHp4J7RFBbawdrqCq%2FDBfqVJlbgzcigfMXxIgkKr3s55LzubUJuRHXlF8TNls3v2VP%2FnIuNcGC4vcN34%2BjJ8yRXLQ1ZxD%2FJcb9b7C4sORot6RLvZ7VRj6YNRl6xMLXn1Sa7QhAFdhIebIhkr10uHUh%2B4bnuof6HG%2BC7pAjAIg3GNg3kWonwGN5NYW2E8irxLvW8%2Bx8hBfEo%2BFpZPUvazuY%2BcWtEoYOv2qgNYxHKpF9KvJVJ67bM8WBkD8yx5OoRWxF%2B8lFtlKTQTwgjFvBRcWlZMwFWTjZqSTKUUV40jDQq8nJBjqkAeACysD5vzsS4y1yMrqyv%2F2Ye494jTcRMtXYI1%2B2Y3H9HZpN8XWSHd46H8ysN%2BGKiC1JX%2Biy6VmH0Spcl7aJ6yhYY2BudEg%2FCTiFrUcUw1NsFBGco08zSmLEsbOtwX67QebQPgqV2nOy%2BYR0oNDrutkF5S9LbjrAiVLAx%2B6flHOAFBetmQ6m51vyMMIAnf0wMvm0pbQgHzUoqGlRWUmvk8o3ccz0&X-Amz-Signature=5af067a6c8bdaf7bcd298f32de0408495905f45e3f5cb0cea02f2d5df766b65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

