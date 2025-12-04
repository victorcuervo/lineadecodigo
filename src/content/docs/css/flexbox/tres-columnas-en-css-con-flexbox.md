---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHFEA4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCIMf9U1WBOdtqIoKGYkRRZ0IQqZZ9o4oSqYy0BKVoSwQIhAKHHubzCANqeiQBKss9uyk6UcpeTVpRqp7sGq4BGPnl5Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxPSXFWQ9w%2FYLd0ZA4q3ANivaTVCOn%2BO7AcJh2g6OaOHbHCWjwv1qz7RE5UKJnoQY3qvdhvH8ss3L5t82l%2FVQjpDg%2BGO9qBub5%2FlexF70G72g5DG7lHjrT8scDE3xaVd2F33qN3x2oXKCvSHC2V%2B3EsByAKCqXowA6cHdIGyRT2MHcWF3jpuMvNUaZXPEtcp1MPVUxnnEjaTgntQ5QMBqqY3TN5eoYVHrI83UOlEVqv060vdHUR3fq1MoMZp%2FznANVWGGUvLK6%2FR748aEZkKArUGxpqdwb3rwYfke%2B8EFJM35%2FWSbR607n6CtOiThR%2FdN7qiDu%2B7fYI7%2BvGSVpgS7Xa9HuCJfT%2BriESo3grqGG027hBrzicvrKOZzRbVWxYo2E2DB82t4KKL5Anyk7%2BuJ5pp4XeIgl0gnIfnjDZtasczNUesUEjiVIU2VVJAJjvdOlIqHZg55S7hUWzFPDT7Fyic6T0nKNVzVLZ8naUX0yVUqbRDJ2cJRLqh3pdIl0NM%2FoDBeKqcV8MGicOxKygRc5EBT0SI2RlDLItZDBDQx0hX0n7QLQjSSKzY6QqUv4aiS4paoS9LXzmXdNmo9F7s3yov8dkXv0OpuWUM%2BH78Jx9PFzRDVIhF3OZYGj%2F3rNbTgoN02t0WGGXy9%2BkUDDB6MTJBjqkAV9SoLStSo55Qik8uZXlHn6bbkulP6%2FM0Hl4LSCkPeaeB5I2XKHy8a03RuStbfB0S%2FrdRbDCXsz22gmZVnIfhyibD1uqrEPDYocC97BwRQDYitCzBneYXzvdY0KRuHmCbmHP%2FUNgo3JPjXAN%2FA9icdTswlf76hTEvZLA9YjuT8MOe8ePt%2BKmezRose0Utbx8k%2F9pf1qLkx1MbANmNYzHWzykk0zg&X-Amz-Signature=e548bae582b08843318a439150dd19760a4e878b0a1e77da8e2a8fffe4ecd951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHFEA4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCIMf9U1WBOdtqIoKGYkRRZ0IQqZZ9o4oSqYy0BKVoSwQIhAKHHubzCANqeiQBKss9uyk6UcpeTVpRqp7sGq4BGPnl5Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxPSXFWQ9w%2FYLd0ZA4q3ANivaTVCOn%2BO7AcJh2g6OaOHbHCWjwv1qz7RE5UKJnoQY3qvdhvH8ss3L5t82l%2FVQjpDg%2BGO9qBub5%2FlexF70G72g5DG7lHjrT8scDE3xaVd2F33qN3x2oXKCvSHC2V%2B3EsByAKCqXowA6cHdIGyRT2MHcWF3jpuMvNUaZXPEtcp1MPVUxnnEjaTgntQ5QMBqqY3TN5eoYVHrI83UOlEVqv060vdHUR3fq1MoMZp%2FznANVWGGUvLK6%2FR748aEZkKArUGxpqdwb3rwYfke%2B8EFJM35%2FWSbR607n6CtOiThR%2FdN7qiDu%2B7fYI7%2BvGSVpgS7Xa9HuCJfT%2BriESo3grqGG027hBrzicvrKOZzRbVWxYo2E2DB82t4KKL5Anyk7%2BuJ5pp4XeIgl0gnIfnjDZtasczNUesUEjiVIU2VVJAJjvdOlIqHZg55S7hUWzFPDT7Fyic6T0nKNVzVLZ8naUX0yVUqbRDJ2cJRLqh3pdIl0NM%2FoDBeKqcV8MGicOxKygRc5EBT0SI2RlDLItZDBDQx0hX0n7QLQjSSKzY6QqUv4aiS4paoS9LXzmXdNmo9F7s3yov8dkXv0OpuWUM%2BH78Jx9PFzRDVIhF3OZYGj%2F3rNbTgoN02t0WGGXy9%2BkUDDB6MTJBjqkAV9SoLStSo55Qik8uZXlHn6bbkulP6%2FM0Hl4LSCkPeaeB5I2XKHy8a03RuStbfB0S%2FrdRbDCXsz22gmZVnIfhyibD1uqrEPDYocC97BwRQDYitCzBneYXzvdY0KRuHmCbmHP%2FUNgo3JPjXAN%2FA9icdTswlf76hTEvZLA9YjuT8MOe8ePt%2BKmezRose0Utbx8k%2F9pf1qLkx1MbANmNYzHWzykk0zg&X-Amz-Signature=abebce29f855c7eaf420903c8b0a2b204157dd7f8b2252570e2059a4fd48a9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

