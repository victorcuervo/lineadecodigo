---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2NM2DT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKBs4SVjzEPslACRSSVe6PQ0Ma%2Bm4caVjfavSVO3iJXgIhAOMU%2BGsQU4PkNxrMsEu1Mo%2B2qkf0J8u8rY7z4TQ15c76KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8x0sVpoRjQR%2FhWh0q3ANjO2yhkEyy1RUlzMp8OesYpNxae4wvuFHQWzUTlM%2Bo4dOb9h99MoAeVyUwtyfl%2Bz7OqvAZ%2BYscyf8pA%2FxwGKArifFCyYPGy1WNqGyTXB7EvshEAOZZz1LluvldEHxsAZ%2B5abQSY89Qryug%2B7lK7Wi0kxfNrJK85HR1TaKZ%2FnV6uADVeG0zJ7WRNfG5CIB4gGEYwSwNKLzHXDUKj4ApdCMy0Mquy1OjKppZVhXbSLtBeSAy0lWF36jzQLbu%2FCkZoDc0j8kRdWU37Dl9fCelxkkz72rGlOTFHr3fL0oH8IldMZ5Bhxiu0GScGxiawxHYTi2HEKZWBQlNE0ZQDWwNsKBBRsZOOu4fIg%2Bjgy1mrcAogoUYhuZqj3PsuPG4EtvhpEHDE0Pm2MwrkgYfwUtghHjhc24MifCbiX9wqFFZt%2Bbws2zcSGXo2ML9%2F8pVhxuhNRgA107ChYH3IMPQV4Z8kP43y9rVPSjr3yjUAlrTiEgyWkmA7kDS1HwJTfViAjLDa7bL7VKPNJSOX0KKV4lAiMnFw0%2FXr%2BdPgmsSjdV0RD459zcRgeY1rOw3iXd1rSrArwHREhw4mVRA%2BMa8z%2FcpYg8SaNsQgNhHvlFnxdBW2vcWZlD%2Ft4T08%2FXDrFpeOTCiot3JBjqkAax4cD%2FHA7DSxa1sfoC%2F0CboIa3Q2hF35WXBDkLqXTo6lJYssmVSHKhnQ11KKpm6EZ51N1InrwNapMJQmUuvxyZ3YJZ8JKTWULtPOwbzvRo2qZUh8DLEbQeqCMojR5cixOzVwEVntqORtFCL3XZl3g5%2Ftv4AgmArqVct3PZ3tcTHl3n1ReMfxltZjcOYOchjz5Rq%2F%2B52rvI0kgvkzK1iGydm0bvo&X-Amz-Signature=3c82fbbcb0bc7414db9cce8074e6182544323181a806ad6929293ab4256d22b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2NM2DT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKBs4SVjzEPslACRSSVe6PQ0Ma%2Bm4caVjfavSVO3iJXgIhAOMU%2BGsQU4PkNxrMsEu1Mo%2B2qkf0J8u8rY7z4TQ15c76KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8x0sVpoRjQR%2FhWh0q3ANjO2yhkEyy1RUlzMp8OesYpNxae4wvuFHQWzUTlM%2Bo4dOb9h99MoAeVyUwtyfl%2Bz7OqvAZ%2BYscyf8pA%2FxwGKArifFCyYPGy1WNqGyTXB7EvshEAOZZz1LluvldEHxsAZ%2B5abQSY89Qryug%2B7lK7Wi0kxfNrJK85HR1TaKZ%2FnV6uADVeG0zJ7WRNfG5CIB4gGEYwSwNKLzHXDUKj4ApdCMy0Mquy1OjKppZVhXbSLtBeSAy0lWF36jzQLbu%2FCkZoDc0j8kRdWU37Dl9fCelxkkz72rGlOTFHr3fL0oH8IldMZ5Bhxiu0GScGxiawxHYTi2HEKZWBQlNE0ZQDWwNsKBBRsZOOu4fIg%2Bjgy1mrcAogoUYhuZqj3PsuPG4EtvhpEHDE0Pm2MwrkgYfwUtghHjhc24MifCbiX9wqFFZt%2Bbws2zcSGXo2ML9%2F8pVhxuhNRgA107ChYH3IMPQV4Z8kP43y9rVPSjr3yjUAlrTiEgyWkmA7kDS1HwJTfViAjLDa7bL7VKPNJSOX0KKV4lAiMnFw0%2FXr%2BdPgmsSjdV0RD459zcRgeY1rOw3iXd1rSrArwHREhw4mVRA%2BMa8z%2FcpYg8SaNsQgNhHvlFnxdBW2vcWZlD%2Ft4T08%2FXDrFpeOTCiot3JBjqkAax4cD%2FHA7DSxa1sfoC%2F0CboIa3Q2hF35WXBDkLqXTo6lJYssmVSHKhnQ11KKpm6EZ51N1InrwNapMJQmUuvxyZ3YJZ8JKTWULtPOwbzvRo2qZUh8DLEbQeqCMojR5cixOzVwEVntqORtFCL3XZl3g5%2Ftv4AgmArqVct3PZ3tcTHl3n1ReMfxltZjcOYOchjz5Rq%2F%2B52rvI0kgvkzK1iGydm0bvo&X-Amz-Signature=bf77e5c5e24b74f14606d2c5b1000234ddb67a116b11f117b5b7c83641f16508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

