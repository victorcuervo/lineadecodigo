---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HA6EX3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeaJzZgdbPmcAA9XmP1lIvIt2lj6JMAuvf1P9EQ4nR%2FAIgUn9xP4jcD8yYrGmBDasVTnh%2BSxHdmO3CnUozS7etOdoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETL9o1nnw509fL2DircA47WfDYAjsg7yFKcYojcXb0fwn7LGBzDzdlS6sdWk86FHNZpk293lPD0ZTUzlcQfMJEm%2Bzij5S4JiTKwX0mj6XrQiY2Ge0h8OxkHHPn972cwPKaDypwid%2FO9eDTwW5uIiSYTsHA2TvtZDV3Jy5EPcxlIlnyj6e9D78TaXs8iUlTcPK4FfGI1cpyMbC%2FM0%2BfBZ7vO4Q7Y%2BTPBk6anSFBeC9NLS2os2hIRtc8zn2rdyi3r17rfWfMDZiAkFqKtqk3vf9zNyCgPk%2BgvsT%2BP2fWCqQt%2Fehr4yHJApLxILNz6E4Aoq6bToQijNkRh%2FCaXQblKpn%2FjpykJmm6%2BaX3j%2FOG6nudFYD9tNy8oybk31N2waOdhij9FrdPg6TcekSwJt644ex8ld0FJwuHDDj0sJza7FDBGXllWZuv75TDLcCTD%2Bnjw7RD941iRPVeJfTOwxmjEcjIlhM3Oph%2BcWtHEr5Yi%2Bg8fgaCEZOO9FxkzZYTG7fFEzKnnaC1uyejAXcoWufMriMdk6tfLeSjf4lM6eMFEZ%2FvJJvpthGxzKHuhhJvcsZ9t%2BkTtPD8z6DMbKFqO10l5jJLJXEzufIByTvZ25G08kLacp%2FcKZOR3S8kziopuoExdU3GNLAv2gbgbWUW7MMCQ3skGOqUBPIy5%2Bzp0YjAeOhpAIXJ1jKFgoQlFGM8etjcp6YTEEPita85%2BgcKXpZ5VwlK6T1yPCXZ9eQ1kXlHZvf734J5XKpWq%2BzlYrsVjRg%2FIWwEHn7INal1C0zMyO69gVmkQEIJIiY6T9zuxoAP7pLF9ai7kJImRBzkoLk%2F6lympY6B2j78maBAfVjr9DJq028rDUSpgpN5ALFviSYWz%2FnlBH3dlXm3%2Flar3&X-Amz-Signature=3ca018ce82d6b47404d7dfed07586f57e6be5e8688ed574cca812c2b80168fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HA6EX3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeaJzZgdbPmcAA9XmP1lIvIt2lj6JMAuvf1P9EQ4nR%2FAIgUn9xP4jcD8yYrGmBDasVTnh%2BSxHdmO3CnUozS7etOdoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETL9o1nnw509fL2DircA47WfDYAjsg7yFKcYojcXb0fwn7LGBzDzdlS6sdWk86FHNZpk293lPD0ZTUzlcQfMJEm%2Bzij5S4JiTKwX0mj6XrQiY2Ge0h8OxkHHPn972cwPKaDypwid%2FO9eDTwW5uIiSYTsHA2TvtZDV3Jy5EPcxlIlnyj6e9D78TaXs8iUlTcPK4FfGI1cpyMbC%2FM0%2BfBZ7vO4Q7Y%2BTPBk6anSFBeC9NLS2os2hIRtc8zn2rdyi3r17rfWfMDZiAkFqKtqk3vf9zNyCgPk%2BgvsT%2BP2fWCqQt%2Fehr4yHJApLxILNz6E4Aoq6bToQijNkRh%2FCaXQblKpn%2FjpykJmm6%2BaX3j%2FOG6nudFYD9tNy8oybk31N2waOdhij9FrdPg6TcekSwJt644ex8ld0FJwuHDDj0sJza7FDBGXllWZuv75TDLcCTD%2Bnjw7RD941iRPVeJfTOwxmjEcjIlhM3Oph%2BcWtHEr5Yi%2Bg8fgaCEZOO9FxkzZYTG7fFEzKnnaC1uyejAXcoWufMriMdk6tfLeSjf4lM6eMFEZ%2FvJJvpthGxzKHuhhJvcsZ9t%2BkTtPD8z6DMbKFqO10l5jJLJXEzufIByTvZ25G08kLacp%2FcKZOR3S8kziopuoExdU3GNLAv2gbgbWUW7MMCQ3skGOqUBPIy5%2Bzp0YjAeOhpAIXJ1jKFgoQlFGM8etjcp6YTEEPita85%2BgcKXpZ5VwlK6T1yPCXZ9eQ1kXlHZvf734J5XKpWq%2BzlYrsVjRg%2FIWwEHn7INal1C0zMyO69gVmkQEIJIiY6T9zuxoAP7pLF9ai7kJImRBzkoLk%2F6lympY6B2j78maBAfVjr9DJq028rDUSpgpN5ALFviSYWz%2FnlBH3dlXm3%2Flar3&X-Amz-Signature=9f58e9db05e93b7742b2c1dbb3ae1c36e3ce79cb7170517338c37c55518564c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

