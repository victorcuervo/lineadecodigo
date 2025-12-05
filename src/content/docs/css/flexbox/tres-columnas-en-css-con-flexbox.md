---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGGMA7M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkNnG2uXk5gi9Bisa398Tya6WFINDVMjOsjvPt1UmaWAIgCqnunoMJtQKWPAWuxa%2FQh933tgwBzAxnwvcrtCnkze4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA3yDCP7jqAkAWWidyrcA5Gn%2BA1hiPOoF2KvSd%2BbtqTBdqvrij6JXpITcVixHUiP2zYGgX2HI3AFaNfxvw4EZhz52HjHCKaAB0N%2FajmiYweiC8Gg0pykzgJjfTyfAZojz55%2FUP8%2F4iM93VK5IMDic4ngIMKaR1S78YLD3hAU3hlk%2BWwB0129Q%2BwDh6mHnVfG7efWoOd0Kbi7lO8WFf08%2BD%2Bvu3OB7Wl29wCj5r1d%2BSfIHJBTumiZVLoXdITGB6LdZ5Bmn25nmoOviaw6YZkww8%2FAiT7K4ROXKn1c0ZLfGlVS0gw9C3cyrq5yfYQZOV%2BQghqwlYQOWbxbbRWYUn1kXMgt%2FIi4Ssf3N7msgNv%2BmIjZtsbqZyy5Mh11u5fQVPME914FuOu7G67QkrtNxDBekTjsF5HPOcYnq8Z6qXv5XqjoQidCm6KtNhc6qVt8KeRWKufcnpIM2hIF47Jr%2BnsJsMjIJM0jg7uBEGTfs57nJ4jzLKA5TWqpojkNA1hkQz9DOMbi5rvEXwDMmxHVfqL65dLttgPqpE5lrIVPkZ%2Btcm7cHTajL%2F3XH187j2UkFS5AFzuvu0EvStf1O3gd%2F9dgnLD%2Fs9%2BIk2RODQpyq9QFOcwRuFoV39xFpqq%2BOuDstNeO1BGj8ndYjcXnaMdIMID5y8kGOqUBx%2BTptvuQYfwP6FGu1acwlfFcgWB7uJ%2BM6oUxUvDMaDiiGFgZ%2FKeEMJebGHtbn07ASZXEfIUEOGDCO50DtmhAfUPk%2Fw69FoLasDAnQ3%2BlTTi7%2BAZMeiY8Jx75pXknrdqMt7ig8bK2Ws%2F2hW8EokveRSrS%2FmWyOrNreHNlR1Vtv5ugmDaA2vnNlEfE5cW1jQLJWEhnQSgYNqymHGny4yDhaIn3wq5J&X-Amz-Signature=7c01c8e78a197c08ee79415c3084809db796b72746441394b53be4c20a773d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGGMA7M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkNnG2uXk5gi9Bisa398Tya6WFINDVMjOsjvPt1UmaWAIgCqnunoMJtQKWPAWuxa%2FQh933tgwBzAxnwvcrtCnkze4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA3yDCP7jqAkAWWidyrcA5Gn%2BA1hiPOoF2KvSd%2BbtqTBdqvrij6JXpITcVixHUiP2zYGgX2HI3AFaNfxvw4EZhz52HjHCKaAB0N%2FajmiYweiC8Gg0pykzgJjfTyfAZojz55%2FUP8%2F4iM93VK5IMDic4ngIMKaR1S78YLD3hAU3hlk%2BWwB0129Q%2BwDh6mHnVfG7efWoOd0Kbi7lO8WFf08%2BD%2Bvu3OB7Wl29wCj5r1d%2BSfIHJBTumiZVLoXdITGB6LdZ5Bmn25nmoOviaw6YZkww8%2FAiT7K4ROXKn1c0ZLfGlVS0gw9C3cyrq5yfYQZOV%2BQghqwlYQOWbxbbRWYUn1kXMgt%2FIi4Ssf3N7msgNv%2BmIjZtsbqZyy5Mh11u5fQVPME914FuOu7G67QkrtNxDBekTjsF5HPOcYnq8Z6qXv5XqjoQidCm6KtNhc6qVt8KeRWKufcnpIM2hIF47Jr%2BnsJsMjIJM0jg7uBEGTfs57nJ4jzLKA5TWqpojkNA1hkQz9DOMbi5rvEXwDMmxHVfqL65dLttgPqpE5lrIVPkZ%2Btcm7cHTajL%2F3XH187j2UkFS5AFzuvu0EvStf1O3gd%2F9dgnLD%2Fs9%2BIk2RODQpyq9QFOcwRuFoV39xFpqq%2BOuDstNeO1BGj8ndYjcXnaMdIMID5y8kGOqUBx%2BTptvuQYfwP6FGu1acwlfFcgWB7uJ%2BM6oUxUvDMaDiiGFgZ%2FKeEMJebGHtbn07ASZXEfIUEOGDCO50DtmhAfUPk%2Fw69FoLasDAnQ3%2BlTTi7%2BAZMeiY8Jx75pXknrdqMt7ig8bK2Ws%2F2hW8EokveRSrS%2FmWyOrNreHNlR1Vtv5ugmDaA2vnNlEfE5cW1jQLJWEhnQSgYNqymHGny4yDhaIn3wq5J&X-Amz-Signature=430467c7ca32c1fbc2ad165ca96d5b8d6b3d3c07087d5dec5096b227962b2fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

