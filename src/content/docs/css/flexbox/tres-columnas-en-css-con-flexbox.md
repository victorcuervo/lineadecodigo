---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BNDWFZZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG4ZmAmVa9iHR0Icqn%2F%2BBQUwCqH1wzPX8uJ6Ko0MfcAiEA2o3XqfxZb4M09rthtcec2B8vHHP01xlycqqecI9xtB8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDu4Jg6KtsNbEbjLmircA3bMZYK3gQ%2FEoV1aB1NVZgw12JT8PYMQpmjJ818gJeuS%2F5jvOcXJFdPNOF%2BoegxkFK4LnbRM%2BeqyIOAkAvsEV6sBXkWQEM6cpwAiWwARnQSTs%2F7JvcLkBOzbstgzjDLIHgOZMZR5bwxXTr4lEylj1tptfAc6cI%2Bll5fSIUuBGtVRZDMWcLIFy%2F3en5MOdBa375UuxK4hHfM3xc5HE%2FeQ3hhUxbRAF411JQcK90cfX4X9CYWp85ELYpENOr0hN177ikzfzfGIazl91TdAmlgUZ1c6yhABPf8K%2BI0AjoyOgW3Klosj76UarfYFktG9gMj99jHFa2u6KLwq1LbqgoQtuTfW5QC2DKxLdpbryHbQObuUxslYcqECjvNc1DKFloTIl7ENkc%2Fm8TG%2Fos4jLIvAO4CBmLAeM6EAwsef8ohgJwXZTl57S4vyj0j7qp%2Fn8A%2BKwxjZymNjEYauge5%2FRCiCrl03X1B4UGGAldw%2FxaQNo92N0go0dFL1CKPOeztuxiRzdpknf77sI2cs49cym747ohkLSUeXa4%2Bhtf7jTlPJHnI6FnigssnqsU%2BO0GF3zW1LLIHsqvMUKslPZ6pPjuNZxluLPTwBFFJzhKoljRjUGUDG3UEH5K8gK3Ci3B8mMJ3oy8kGOqUBMWxhD%2Bcgk3bQvqiJA64RqcuQeJenaTpt6lQDTEgNC2LJd6884QVxV0nO0HFCHJEfOGZpL3SjWiZpVLTtT0jLtBsWBN1crRfFnkTQFJMiSRD6ql2HYC4VKtgadpJ01rEW9LJbmvjEpjscrpFjaxbw5cUtRVPk4u7noMUfADltPQowZvF2%2FxIpdpW2APQioBLod%2B2xSSicIXVXqQRQDhu4%2BTiBXqPx&X-Amz-Signature=97940c94106762ea1c915aed97a4ca12f324d32c077a6ca546197eff96dc3bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BNDWFZZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG4ZmAmVa9iHR0Icqn%2F%2BBQUwCqH1wzPX8uJ6Ko0MfcAiEA2o3XqfxZb4M09rthtcec2B8vHHP01xlycqqecI9xtB8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDu4Jg6KtsNbEbjLmircA3bMZYK3gQ%2FEoV1aB1NVZgw12JT8PYMQpmjJ818gJeuS%2F5jvOcXJFdPNOF%2BoegxkFK4LnbRM%2BeqyIOAkAvsEV6sBXkWQEM6cpwAiWwARnQSTs%2F7JvcLkBOzbstgzjDLIHgOZMZR5bwxXTr4lEylj1tptfAc6cI%2Bll5fSIUuBGtVRZDMWcLIFy%2F3en5MOdBa375UuxK4hHfM3xc5HE%2FeQ3hhUxbRAF411JQcK90cfX4X9CYWp85ELYpENOr0hN177ikzfzfGIazl91TdAmlgUZ1c6yhABPf8K%2BI0AjoyOgW3Klosj76UarfYFktG9gMj99jHFa2u6KLwq1LbqgoQtuTfW5QC2DKxLdpbryHbQObuUxslYcqECjvNc1DKFloTIl7ENkc%2Fm8TG%2Fos4jLIvAO4CBmLAeM6EAwsef8ohgJwXZTl57S4vyj0j7qp%2Fn8A%2BKwxjZymNjEYauge5%2FRCiCrl03X1B4UGGAldw%2FxaQNo92N0go0dFL1CKPOeztuxiRzdpknf77sI2cs49cym747ohkLSUeXa4%2Bhtf7jTlPJHnI6FnigssnqsU%2BO0GF3zW1LLIHsqvMUKslPZ6pPjuNZxluLPTwBFFJzhKoljRjUGUDG3UEH5K8gK3Ci3B8mMJ3oy8kGOqUBMWxhD%2Bcgk3bQvqiJA64RqcuQeJenaTpt6lQDTEgNC2LJd6884QVxV0nO0HFCHJEfOGZpL3SjWiZpVLTtT0jLtBsWBN1crRfFnkTQFJMiSRD6ql2HYC4VKtgadpJ01rEW9LJbmvjEpjscrpFjaxbw5cUtRVPk4u7noMUfADltPQowZvF2%2FxIpdpW2APQioBLod%2B2xSSicIXVXqQRQDhu4%2BTiBXqPx&X-Amz-Signature=cf554f74a6e79d870f85300cf08a6e63d75f7f1bdca94a6f4eff07544d8974d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

