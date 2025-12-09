---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7SMELX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdj7baSaljASGkYJ0z3p3Sc9oTWk57ebt5DQuB%2BNqydAiB26admy9qvziJLQ%2F2rtb1NssKRRbUoV8CFDZ7iYmj17CqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCyMGxPJ%2Fbjg1ag0vKtwD9IHOOPDmdlyS7zs0IWUXYPRGbcBNMqMKBryAYCPL9fOhrZWcU5FzeKBBT%2FHogTB1ibaLdQSkdmJJeFmaZnaf4b8K1QQR8KcsCdwapufFM81ssbnGqMi%2B8q7DZfioFvvLYHckk%2F91g4aGMcUdy%2B45dG39hL4KGaVSLVs2hbi0SOrSIORzOEXLjFaWLq3rS5Rge%2FGFIl9irq8QVyYZBLP66UDjc4mr%2BOgxV3JqOlGiVJxnUooa8VvrOppkx%2BpcHbWDuilim0Jfij7ri81ogvEIGb2C458iBVwAeC4Z6Zt4Z4hIevhbsrPa%2Bxq91UFzc7yIARsc94u7cpuoSxr6ugRpPRBoS7Ebhfa8zeEJf0%2ByEonkeLCzoUNOmUnXzz7KJkCNFjtzmpuy20xv5Z1bXYsuj%2FAcjHezgIUSJM39%2FI0unhF%2BcNN3q1iGNnR8ZHbLLgOUM%2Ba4ucfow1vDDjipUJvegBPnER8swZDFiLZ9vkT674KL3bmUkwocy6DkYtWQLv0VfkNVV%2F43K7hcE6nDAOQp5LbHiUYX227l4ggDSplY8LHuOmHXujv2W7gligkMnZqZ9G8Dn%2BXl2MOlYI4%2FPy0cwxaNsEd3fCbxtLw1bNXTwWSl5ked%2B%2BDsqXC8Fkww1cneyQY6pgE2dQrx2%2BvjfMLr%2BeQw0QAkRRd7ytzamQxpIX10%2FbQkhsNDGY5BnujV5TzgkqKwh2fcMTMCImA5QKWeH6q3FVJ89CNQ7qqOiXi9GJUSjeVg0UaKJTWeb7zJPA0tQ8R7U1e1pKeckTiQfc1VpDDQQtjX707F9W5fastrKvjtgzseFisSUP3yDSGy0H5Hta8IyUDORV%2FoLk8Oet3NX6rHvcVJntBUw%2B0a&X-Amz-Signature=a38f0e62a4b6998fb6c9f53318779c3a8c93c738cffa3de8905bf5af247b654c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7SMELX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdj7baSaljASGkYJ0z3p3Sc9oTWk57ebt5DQuB%2BNqydAiB26admy9qvziJLQ%2F2rtb1NssKRRbUoV8CFDZ7iYmj17CqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCyMGxPJ%2Fbjg1ag0vKtwD9IHOOPDmdlyS7zs0IWUXYPRGbcBNMqMKBryAYCPL9fOhrZWcU5FzeKBBT%2FHogTB1ibaLdQSkdmJJeFmaZnaf4b8K1QQR8KcsCdwapufFM81ssbnGqMi%2B8q7DZfioFvvLYHckk%2F91g4aGMcUdy%2B45dG39hL4KGaVSLVs2hbi0SOrSIORzOEXLjFaWLq3rS5Rge%2FGFIl9irq8QVyYZBLP66UDjc4mr%2BOgxV3JqOlGiVJxnUooa8VvrOppkx%2BpcHbWDuilim0Jfij7ri81ogvEIGb2C458iBVwAeC4Z6Zt4Z4hIevhbsrPa%2Bxq91UFzc7yIARsc94u7cpuoSxr6ugRpPRBoS7Ebhfa8zeEJf0%2ByEonkeLCzoUNOmUnXzz7KJkCNFjtzmpuy20xv5Z1bXYsuj%2FAcjHezgIUSJM39%2FI0unhF%2BcNN3q1iGNnR8ZHbLLgOUM%2Ba4ucfow1vDDjipUJvegBPnER8swZDFiLZ9vkT674KL3bmUkwocy6DkYtWQLv0VfkNVV%2F43K7hcE6nDAOQp5LbHiUYX227l4ggDSplY8LHuOmHXujv2W7gligkMnZqZ9G8Dn%2BXl2MOlYI4%2FPy0cwxaNsEd3fCbxtLw1bNXTwWSl5ked%2B%2BDsqXC8Fkww1cneyQY6pgE2dQrx2%2BvjfMLr%2BeQw0QAkRRd7ytzamQxpIX10%2FbQkhsNDGY5BnujV5TzgkqKwh2fcMTMCImA5QKWeH6q3FVJ89CNQ7qqOiXi9GJUSjeVg0UaKJTWeb7zJPA0tQ8R7U1e1pKeckTiQfc1VpDDQQtjX707F9W5fastrKvjtgzseFisSUP3yDSGy0H5Hta8IyUDORV%2FoLk8Oet3NX6rHvcVJntBUw%2B0a&X-Amz-Signature=2c5ac8b2bff59404a653b68957202a6493c37fdce7c826c7e1430879216e10f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

