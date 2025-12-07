---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6P3ISKP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCceshve%2BLViNdyP%2B6Zr1xB6gJ%2FkvQHsMsUHgdkwNmxMQIhAMUEGNwNMj2%2BMtY2UwrBL4m%2BXRYORxgYRZ3hSU5aHmvuKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnGEH6xULcfDYYUQwq3AMydEJxnj3wBWZV6laygxG5b1vIVgzsyFuze9CKE2WtKPNmt%2FoVCwrxsoWpQ8v8LVPb6O8BoXud2yQXHnXn8dRVxosB3z5KmpZPvMQfle95kw%2F6nSV5%2B73WbcxKHpFdoHCW2BEtytjti4Gsg%2FfEAEJmvOgNxxoDSzLjhySJfzq3Rs%2F34k47lEmSRFVbdzIauusrg%2BGIGahbNRakmBT62mq51p%2FaOswqtS5MrapM3CwqP%2FEwD6aUwqlHKoS7iw3OW%2B5yUrjoLD%2BKjNKIpXbg%2BWjGk2tzynUkAt7GF3DDliAlTAb38ySKcQaIaKNOUTVWS7BBn0wLnAVxiFC%2Bmi5vGxPHkJWNYOfeAWohLqHFUG7V50ApARaCxcULuqhm%2FN4bbncsPbjLOyYZJ82i2yG0JRdV6HncNtrQiZulYjpAej1OoYAeN4iZwP7Kq5X7zsoH6mgFsPeZoZBbPBzk16HVAB2me6Q8OCSIOkEznepBgcwOaZHUjU0NK3sA2nbWBVIZkme2vQixq8%2B9%2BDtYmPa4gS4tViOjzdg9zuL4D1BGEzqYvyVKbUApvluGs0h4fXes%2FRA5wkmkNm3%2BHvy74nzuAFhFawPbzXQZXoePOyU8rg3%2BHKZa94BU11kjCH6iRzCGu9bJBjqkASUQpLRk%2BkW0Vo1nNAeLGa8%2FI%2FRGrsi9HWse5%2BNE%2FrfPADL9FEw9E3NuEvZ8uACUNaKqhtaJjbiyR9PZZg5wlBvEiTNcETrtgipKo7jybQ%2FvBbrGx0856x8qy9hkuGxGO0wfUflSoEbGYp7E7rh5ockDa8InfNa6f4DsEplA892810iTHwWopp3XE5ST0yF3a2suTen0zaThJToSmOfA1bL6ISLk&X-Amz-Signature=9cf385b4a8c7409e2005cf220e605262f1491091f6c496a53fdaf982efdf54ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6P3ISKP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCceshve%2BLViNdyP%2B6Zr1xB6gJ%2FkvQHsMsUHgdkwNmxMQIhAMUEGNwNMj2%2BMtY2UwrBL4m%2BXRYORxgYRZ3hSU5aHmvuKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnGEH6xULcfDYYUQwq3AMydEJxnj3wBWZV6laygxG5b1vIVgzsyFuze9CKE2WtKPNmt%2FoVCwrxsoWpQ8v8LVPb6O8BoXud2yQXHnXn8dRVxosB3z5KmpZPvMQfle95kw%2F6nSV5%2B73WbcxKHpFdoHCW2BEtytjti4Gsg%2FfEAEJmvOgNxxoDSzLjhySJfzq3Rs%2F34k47lEmSRFVbdzIauusrg%2BGIGahbNRakmBT62mq51p%2FaOswqtS5MrapM3CwqP%2FEwD6aUwqlHKoS7iw3OW%2B5yUrjoLD%2BKjNKIpXbg%2BWjGk2tzynUkAt7GF3DDliAlTAb38ySKcQaIaKNOUTVWS7BBn0wLnAVxiFC%2Bmi5vGxPHkJWNYOfeAWohLqHFUG7V50ApARaCxcULuqhm%2FN4bbncsPbjLOyYZJ82i2yG0JRdV6HncNtrQiZulYjpAej1OoYAeN4iZwP7Kq5X7zsoH6mgFsPeZoZBbPBzk16HVAB2me6Q8OCSIOkEznepBgcwOaZHUjU0NK3sA2nbWBVIZkme2vQixq8%2B9%2BDtYmPa4gS4tViOjzdg9zuL4D1BGEzqYvyVKbUApvluGs0h4fXes%2FRA5wkmkNm3%2BHvy74nzuAFhFawPbzXQZXoePOyU8rg3%2BHKZa94BU11kjCH6iRzCGu9bJBjqkASUQpLRk%2BkW0Vo1nNAeLGa8%2FI%2FRGrsi9HWse5%2BNE%2FrfPADL9FEw9E3NuEvZ8uACUNaKqhtaJjbiyR9PZZg5wlBvEiTNcETrtgipKo7jybQ%2FvBbrGx0856x8qy9hkuGxGO0wfUflSoEbGYp7E7rh5ockDa8InfNa6f4DsEplA892810iTHwWopp3XE5ST0yF3a2suTen0zaThJToSmOfA1bL6ISLk&X-Amz-Signature=88b44bc4c1c6d37d93724e4bfeb6c7624f42db7c09f9da6c9c431b6aa506dc5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

