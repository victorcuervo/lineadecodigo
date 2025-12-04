---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E3F5KQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCfvAaG7Y26jgTGWL%2FmPq6st5pmvi5pe3QgauueMMP09gIhAL%2FJwpxqYwFOZpceus3rVmt7xEH7XtmHdEHFQpxVFuk7Kv8DCEcQABoMNjM3NDIzMTgzODA1Igz8UB8zGVCTREEZJIAq3APNcR%2FYgG7lnsFHlwyL5hV8NwBLsOtGDkKLXQ8MQzTl1p60rb%2B7Dg27wikVFKBHKeOgwN5OAlAiuc3D58xt%2FMENup4NsJCEeN7BGGlxERjZswfCBZSmLLKpGNoF2X56ZJUhoWgotc85cl0o662CfP%2F%2B9WPyePoOCGl%2F8YuW5TfXDpd%2BBswwdooeBKKzQo8PsI5IlfR2Qit3CZTEsdFThOTNiErImz1y9Df%2BgE%2FUTw86KWtJ162rMS79UlKgYilrSogT8R7PG0wJi3TXYW8b2XuUYRBDEMyopXvGxu7jfsWeFlgGnWA2Sqgv8nqIpzzkXzFO0Vf9l6%2FNcyEvxQP2D6QlAFm97UvtjA5esutoELkbrfhdmz0L2Q0T%2FF8NIDmtvcArhauKkRSuYlbixYeEhvDOimS3YcV0UsNYhkXzwpMAY2kS3E30SlxONkKXQGKUXySe6S%2F%2FOg3GbSpLdJ7SsPgjfB57VqUUij8H7fM4vZsNzgZYmxGU%2F1HQpCEBdqTI26oToZ%2BKxW%2Bg6LluYc8n6vsTW9XOaKqIrpwJgS06K%2BR4vY64fdc4WZbTB748KjDR9%2BDXZI3SFZFxRqyQ%2BUM16szcMd6bVQ1YzYT3BmWXy0973dkQMqSetjU6o9VYDjDKocbJBjqkAUJ6gV%2BsVhRV3HcoD7w8RJPQLsolD8gEvct2Fgel3xnsEIAEqLJxiKPsuHCuSL%2Fyyy6nIyc7vvM9lMBOnYsf2%2Bj3fLDRomQVh2pTCxH0mWpupJMlDnWEopsid2f%2FixxRDHqDGsV%2BgRLlyWX7oLUDmRZgZd6eqJerQmaFA7yz4%2BuPUcK2adr1vQ7zE9l4JnRE9FL%2FWEPyQZkmmGf0hVYhc7CW3NwR&X-Amz-Signature=f659ab0db2243508052ee16acd441ceb1730c63372d78b11e011651a15a52b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E3F5KQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCfvAaG7Y26jgTGWL%2FmPq6st5pmvi5pe3QgauueMMP09gIhAL%2FJwpxqYwFOZpceus3rVmt7xEH7XtmHdEHFQpxVFuk7Kv8DCEcQABoMNjM3NDIzMTgzODA1Igz8UB8zGVCTREEZJIAq3APNcR%2FYgG7lnsFHlwyL5hV8NwBLsOtGDkKLXQ8MQzTl1p60rb%2B7Dg27wikVFKBHKeOgwN5OAlAiuc3D58xt%2FMENup4NsJCEeN7BGGlxERjZswfCBZSmLLKpGNoF2X56ZJUhoWgotc85cl0o662CfP%2F%2B9WPyePoOCGl%2F8YuW5TfXDpd%2BBswwdooeBKKzQo8PsI5IlfR2Qit3CZTEsdFThOTNiErImz1y9Df%2BgE%2FUTw86KWtJ162rMS79UlKgYilrSogT8R7PG0wJi3TXYW8b2XuUYRBDEMyopXvGxu7jfsWeFlgGnWA2Sqgv8nqIpzzkXzFO0Vf9l6%2FNcyEvxQP2D6QlAFm97UvtjA5esutoELkbrfhdmz0L2Q0T%2FF8NIDmtvcArhauKkRSuYlbixYeEhvDOimS3YcV0UsNYhkXzwpMAY2kS3E30SlxONkKXQGKUXySe6S%2F%2FOg3GbSpLdJ7SsPgjfB57VqUUij8H7fM4vZsNzgZYmxGU%2F1HQpCEBdqTI26oToZ%2BKxW%2Bg6LluYc8n6vsTW9XOaKqIrpwJgS06K%2BR4vY64fdc4WZbTB748KjDR9%2BDXZI3SFZFxRqyQ%2BUM16szcMd6bVQ1YzYT3BmWXy0973dkQMqSetjU6o9VYDjDKocbJBjqkAUJ6gV%2BsVhRV3HcoD7w8RJPQLsolD8gEvct2Fgel3xnsEIAEqLJxiKPsuHCuSL%2Fyyy6nIyc7vvM9lMBOnYsf2%2Bj3fLDRomQVh2pTCxH0mWpupJMlDnWEopsid2f%2FixxRDHqDGsV%2BgRLlyWX7oLUDmRZgZd6eqJerQmaFA7yz4%2BuPUcK2adr1vQ7zE9l4JnRE9FL%2FWEPyQZkmmGf0hVYhc7CW3NwR&X-Amz-Signature=f2cd646bfcb0c8c6ac8e305de38be0d5d17e3dc333f35d1b6018715b94d68202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

