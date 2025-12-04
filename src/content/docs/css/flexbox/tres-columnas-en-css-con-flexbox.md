---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSR2B7NL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCID3dTftWK6RamIfNnoizpZ6aOH1o3Izh2Tg0kbRFVeaHAiEA0sBOyvKJryPQcy%2FwWt%2BxrTTStFSUPYIlO7M29WGDk6kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCRyYzIo50BnUbSL1yrcA8RVWzSoJwNt6imSJpo7%2FGYFRTMcu%2F%2BJ8MwauDa%2Fet%2FprOKiBnokWEkgfXFHJs%2Fotq7H0aFa%2BdfuHV6ekB05dPAXYVrKB9mUyQYTARJFhHkfWPV6EDzhLqEgyCOW2oAtNce53V2zNHBf2%2FCWZX5SXyEDTKRqhy6XC335RqpM9xhANNY243xsEriHAgMEnYF4lUBRr%2FOf4VDNDwWy4oTZQfYDl38D0ba%2BdutUf4i4D8MeCVPNAOmZ2kkoThFz9b0EF8jXlYsWjfPXHQG4SVMo6l5FgO3VsRZYwa9OSAsewH7powB22zouitGPJjIJL3EzPRLQ74pPeWSAxkmliK%2BQl3k4jdcaEygLgXoYC90J5eF6XmRnAlfEAgAJjF9ZL9h5OSfZNTBL56KVTKYmLUONCq3DWCerV%2FwHaiuZ5nN7ET1eu73FO3Digd6UO1OysGF18aG%2BsCkhe8FcQZHP0jElxX5YIePyXhMSZtDa%2BXVoUE0GlkqVtpjwhmZsUj9i08PF5tPWb5VGzuhTqRXgrO%2FVuB5uw6OKqiAdoP1hErHHU%2FO2UMXyKE3jUuJrUZL%2F9UZXpQILXITwCiNewTDfYdciVFJDEtki%2BfEcVhZ%2Bg%2FiqUxE1%2BxQsPd8AVv6pnho2MJ%2BqxckGOqUBpUK5QO388dJDbXWxzs3WqQxeT8Izck7cBRP6hkM40DSyxyGdNrgpGHdc%2BjocmbQUGmXm%2Fijva3MtknPpXhElKYpYybVqBNu3oNvSCOj6dgKZ8a%2BPLqWP0p4z8sbmFQhwCHJamnBQeUj0gHTa0l1PPFXfuZDcAhw%2BDW0LKXoMecdeR1V%2BSjt91%2BdwHeNpC0%2FjMGSzyaaVbUDjSJW3dPtTQTJ2RnvV&X-Amz-Signature=85aa4b699efc5898a352f00a6878c84267d2938cc2233b129b4651f93c846cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSR2B7NL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCID3dTftWK6RamIfNnoizpZ6aOH1o3Izh2Tg0kbRFVeaHAiEA0sBOyvKJryPQcy%2FwWt%2BxrTTStFSUPYIlO7M29WGDk6kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCRyYzIo50BnUbSL1yrcA8RVWzSoJwNt6imSJpo7%2FGYFRTMcu%2F%2BJ8MwauDa%2Fet%2FprOKiBnokWEkgfXFHJs%2Fotq7H0aFa%2BdfuHV6ekB05dPAXYVrKB9mUyQYTARJFhHkfWPV6EDzhLqEgyCOW2oAtNce53V2zNHBf2%2FCWZX5SXyEDTKRqhy6XC335RqpM9xhANNY243xsEriHAgMEnYF4lUBRr%2FOf4VDNDwWy4oTZQfYDl38D0ba%2BdutUf4i4D8MeCVPNAOmZ2kkoThFz9b0EF8jXlYsWjfPXHQG4SVMo6l5FgO3VsRZYwa9OSAsewH7powB22zouitGPJjIJL3EzPRLQ74pPeWSAxkmliK%2BQl3k4jdcaEygLgXoYC90J5eF6XmRnAlfEAgAJjF9ZL9h5OSfZNTBL56KVTKYmLUONCq3DWCerV%2FwHaiuZ5nN7ET1eu73FO3Digd6UO1OysGF18aG%2BsCkhe8FcQZHP0jElxX5YIePyXhMSZtDa%2BXVoUE0GlkqVtpjwhmZsUj9i08PF5tPWb5VGzuhTqRXgrO%2FVuB5uw6OKqiAdoP1hErHHU%2FO2UMXyKE3jUuJrUZL%2F9UZXpQILXITwCiNewTDfYdciVFJDEtki%2BfEcVhZ%2Bg%2FiqUxE1%2BxQsPd8AVv6pnho2MJ%2BqxckGOqUBpUK5QO388dJDbXWxzs3WqQxeT8Izck7cBRP6hkM40DSyxyGdNrgpGHdc%2BjocmbQUGmXm%2Fijva3MtknPpXhElKYpYybVqBNu3oNvSCOj6dgKZ8a%2BPLqWP0p4z8sbmFQhwCHJamnBQeUj0gHTa0l1PPFXfuZDcAhw%2BDW0LKXoMecdeR1V%2BSjt91%2BdwHeNpC0%2FjMGSzyaaVbUDjSJW3dPtTQTJ2RnvV&X-Amz-Signature=b352a6263542836589c915542a93915421960474423ab645a572471a4dfa086f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

