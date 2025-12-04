---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYY5WPW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCmUPyFc9olLymzfkKDgVpFjqW9Hk7GYcMxytg1pN1OmwIgL5kLFBIY6BHsmlAy6VGedmEZgDBKgd3wde2UwW436Skq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIIn9Im9zlztyifctircA4z0nO2RPWC%2FTJn6WZMGBcVCpGHUKnC0%2Fl67Bzrel98UaMYgO3Z0DZ%2BN1oBWjTrA6X6VifD71bcZcE6symUYxMafKCikb5eGhK%2BiAISvaIZXMPJqODa%2BdgwAJ9ue2uf0%2Bj%2FQt1sVoGNYMtaYFcx1c3lBIrZRMjFeyJ4bjY3OLru1H7xgdDeNPiGJbxXTncz70fXZaDkODJXOyLNbb%2F5jDlNrYAtld%2Fk36GtW%2F6IqhCGSTTs1VPZVkJ6jiK5H2%2BvTgNDoE03xms%2Btr4JdeV9mtB83RyoaudPvep7VbscVDhPWu0vB0y%2Bn66goTIiLJ3vIFkXPc4aA7iR7cwZxrv7LaNgbVp%2FRi0OAgEB2MpypU52bJbBmyoaO%2F7af2lW0fGh5O5DpyuevOa7F1O%2BKlDpuRZp9k934nBua3ajp9TfUxKo6U%2FBTik9UhGdijlPYROj8zFEULsdq182R9X8YMU9xbFqTnWO%2F9Dgvhohj3WGXl252Gp5oTDk%2F3jX3XvpoV4PSSQlGKMVMOoND9CRRNeqFR2TTAdpglWzo3Sdx3AfdRWxBWayHY5Ko8clKNu%2FhTOxTsXXYf%2BHRO2b8f0W7APqpZyEGxRxZnZOY4T7UhLHx8UpCnj4PxSXfHJhzDHpRMNzKxMkGOqUB2UdhQtm05bS6Lzvm2va0RErtFLICfAxT9VVjxm9dHuntYuN7hTIfzzFp6zbtA7oX9S6Nwna3V9AITeT8ltDWkEYSC4vWCOziLg9ovyBsLUJwVV1G1mbjoOqG6uviHW%2B9kJR6OhVdYqxIGoc%2FORJj%2BTliofdYfmlM4tmPnH0EC7IStiiVHqeBG88%2BzN%2BkI%2FicIv7u5R8XtTDIUo4L%2BeBpY9OkC0Le&X-Amz-Signature=6801a1c46b9fd7dc903e95d6fab55d06cb30d150d60053f6d02c40704357609a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYY5WPW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCmUPyFc9olLymzfkKDgVpFjqW9Hk7GYcMxytg1pN1OmwIgL5kLFBIY6BHsmlAy6VGedmEZgDBKgd3wde2UwW436Skq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIIn9Im9zlztyifctircA4z0nO2RPWC%2FTJn6WZMGBcVCpGHUKnC0%2Fl67Bzrel98UaMYgO3Z0DZ%2BN1oBWjTrA6X6VifD71bcZcE6symUYxMafKCikb5eGhK%2BiAISvaIZXMPJqODa%2BdgwAJ9ue2uf0%2Bj%2FQt1sVoGNYMtaYFcx1c3lBIrZRMjFeyJ4bjY3OLru1H7xgdDeNPiGJbxXTncz70fXZaDkODJXOyLNbb%2F5jDlNrYAtld%2Fk36GtW%2F6IqhCGSTTs1VPZVkJ6jiK5H2%2BvTgNDoE03xms%2Btr4JdeV9mtB83RyoaudPvep7VbscVDhPWu0vB0y%2Bn66goTIiLJ3vIFkXPc4aA7iR7cwZxrv7LaNgbVp%2FRi0OAgEB2MpypU52bJbBmyoaO%2F7af2lW0fGh5O5DpyuevOa7F1O%2BKlDpuRZp9k934nBua3ajp9TfUxKo6U%2FBTik9UhGdijlPYROj8zFEULsdq182R9X8YMU9xbFqTnWO%2F9Dgvhohj3WGXl252Gp5oTDk%2F3jX3XvpoV4PSSQlGKMVMOoND9CRRNeqFR2TTAdpglWzo3Sdx3AfdRWxBWayHY5Ko8clKNu%2FhTOxTsXXYf%2BHRO2b8f0W7APqpZyEGxRxZnZOY4T7UhLHx8UpCnj4PxSXfHJhzDHpRMNzKxMkGOqUB2UdhQtm05bS6Lzvm2va0RErtFLICfAxT9VVjxm9dHuntYuN7hTIfzzFp6zbtA7oX9S6Nwna3V9AITeT8ltDWkEYSC4vWCOziLg9ovyBsLUJwVV1G1mbjoOqG6uviHW%2B9kJR6OhVdYqxIGoc%2FORJj%2BTliofdYfmlM4tmPnH0EC7IStiiVHqeBG88%2BzN%2BkI%2FicIv7u5R8XtTDIUo4L%2BeBpY9OkC0Le&X-Amz-Signature=0b142cd06c1ce53f2fcfd734dc11aec515792d7bf06fef9a77f9588c4af8d8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

