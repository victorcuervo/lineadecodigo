---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJF5RJKT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeDMLyMcD2bLrYnKPK%2FiFa3lirz%2BRkVI9idmJUvme8VgIhAL007tnEq5tgXERRdIJcPZSp40Q%2BpEE7VIZAWsaP8n6iKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCksNdL3UyDZhDA9Aq3APVOTxI1c5TOAmD1JiCYd8rJfrQC1qjTa38GRQGoRhtQD6ja9%2F%2FSPcrixf9ThbTgr03gE0kZvz7mHJPlDYeVdNZb45UwY2Ndk%2BHXefN9qLr5KZcygQ4X1WKoFTI%2BHoQeCLxwVJmzAi1SFWfWD%2B7KmuuwGZYsLgltWGHd%2FEwx3k6yjKCt0xw5rOuB22qx906Z6CEf3WJXdOd0ZzWn89b5MPkXvlhn4laxYTG3ZxYij2pFCfoFH049BMOxXOwk29ofyAkQlhL6JD0fyiWIAwYX3va7Fdqlbw%2F%2FgxYFEujtndVEczDPRbCRM4UxO7XCGrLUC3iZmac0%2B9iODD0luDbTaCLo%2Bde4NqNtrwk9cnZCdPzpBBy%2FjEieNoe3%2FTxH9UxY8N3k%2F2GynwLF%2FNtqmn0pLKcz%2FgILkX8aw%2B%2FnIli%2BZ1O6k36REDUKOPqrgDGD%2BCMSDf4Lko%2FbnPSu44WXVR70s4ARr%2F54Umy2i4a1VYzNswhWFXUFpEzYnDYuqwXdGYl6cy8yGDQNKt4E5ZW1iHEblcpzE3AIpt6zUrJaxcIq5KPyALVi%2FlSu3ohCKhqalvVOzskslAcP3d%2FAjAtP71DgIRIvM%2F2BH89FR%2F2QvXqoG%2BjtQ4iOmb8%2BYUhwWzyPTC6yd7JBjqkAXFZ4Lxs6xpbhJwo4s9bO7QgC0FSH3LkChPxixegWPBiUZeLl8qZFPnWOtp4xbJnCC8OCUoZRmtaROl8Ytsr3IapjThX72B3zNNz5VgduJ1RlV8rmf75wXSnB2TOKHr3H4glA5OtrR4vWD90J0xVX0540ag3bQUdEJm2hjX7kzpQeHnaLDePuhhp1%2FLQ%2Bmab9Pq8jZy3grd%2FvuY9E2Lpfu9yKrGb&X-Amz-Signature=82764905f0ae9dfab3e25bc25b9677bd68644a43255ecf9f0f604f95667c0125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJF5RJKT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeDMLyMcD2bLrYnKPK%2FiFa3lirz%2BRkVI9idmJUvme8VgIhAL007tnEq5tgXERRdIJcPZSp40Q%2BpEE7VIZAWsaP8n6iKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCksNdL3UyDZhDA9Aq3APVOTxI1c5TOAmD1JiCYd8rJfrQC1qjTa38GRQGoRhtQD6ja9%2F%2FSPcrixf9ThbTgr03gE0kZvz7mHJPlDYeVdNZb45UwY2Ndk%2BHXefN9qLr5KZcygQ4X1WKoFTI%2BHoQeCLxwVJmzAi1SFWfWD%2B7KmuuwGZYsLgltWGHd%2FEwx3k6yjKCt0xw5rOuB22qx906Z6CEf3WJXdOd0ZzWn89b5MPkXvlhn4laxYTG3ZxYij2pFCfoFH049BMOxXOwk29ofyAkQlhL6JD0fyiWIAwYX3va7Fdqlbw%2F%2FgxYFEujtndVEczDPRbCRM4UxO7XCGrLUC3iZmac0%2B9iODD0luDbTaCLo%2Bde4NqNtrwk9cnZCdPzpBBy%2FjEieNoe3%2FTxH9UxY8N3k%2F2GynwLF%2FNtqmn0pLKcz%2FgILkX8aw%2B%2FnIli%2BZ1O6k36REDUKOPqrgDGD%2BCMSDf4Lko%2FbnPSu44WXVR70s4ARr%2F54Umy2i4a1VYzNswhWFXUFpEzYnDYuqwXdGYl6cy8yGDQNKt4E5ZW1iHEblcpzE3AIpt6zUrJaxcIq5KPyALVi%2FlSu3ohCKhqalvVOzskslAcP3d%2FAjAtP71DgIRIvM%2F2BH89FR%2F2QvXqoG%2BjtQ4iOmb8%2BYUhwWzyPTC6yd7JBjqkAXFZ4Lxs6xpbhJwo4s9bO7QgC0FSH3LkChPxixegWPBiUZeLl8qZFPnWOtp4xbJnCC8OCUoZRmtaROl8Ytsr3IapjThX72B3zNNz5VgduJ1RlV8rmf75wXSnB2TOKHr3H4glA5OtrR4vWD90J0xVX0540ag3bQUdEJm2hjX7kzpQeHnaLDePuhhp1%2FLQ%2Bmab9Pq8jZy3grd%2FvuY9E2Lpfu9yKrGb&X-Amz-Signature=46c7b50bb7be1a390949857f938f907bcf80c3b5344bba79da8b908b9221d230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

