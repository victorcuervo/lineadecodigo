---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXJUHZD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyjTui0fYosK4WNXW55DmzdP%2FMcYbZRgoj7Qh9q2tLggIgSGA5Krcx4o0q1cOhzg2TN7PrTTswOzu3gHLAbJGKIMEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDC88EemvUs10iAl04SrcAz014k6FBo8j9m%2FbWDdgrbtAca6dAcWKrvIdunvWX%2BBQbAysSGwhPAMMds0Bt32NsUsTb8wLI9zJPsVb5fKtSygu%2B29%2FJKak4u30WArX%2FVea8iLrAf8mRby4mqGaUxrdwlEFy%2FH2NaX%2FIzLApOxPJ1oUPDHynOH68ZDcfCQQqtuIHs80hUjy3qVF83%2Fl473DMltMtQHc6cuWFBfdhJL7vv83rEb6gB%2FMqGnQtHmskCNszW19FgaPpCw2C5MH6n%2FECnfAmKbaLH8b0UUreDIeRQkUP9SBsaGWRvbBl9LvWiwyJHzpbM%2F3I3hc1kw813DCGpNiSyAP4fbOwx%2FKeDW%2BG4k8Vr0TSpWnRSSA6g%2BGaYuzTBVjm4ox%2BKWx4ZzTkgEiWDtn3f4D5wV4VPM7iJC9Xi4cgvhjJeUFBd%2BGwjWtxYna%2Fgrw7fvJhSgEyKcR%2F8YM3o6q4pL2x5cGDbJRBx9iZ1tg0jQjeope3EkNUlo86xGO%2FO6PHiK6ndEFTjS5FyV9898SMgVwvZEWl7ZyK2kFXEAEDLtXEkL49q1erztOYDM9yYg9zMBYQPT0xmLNMWXj%2BOZV2v5%2FKI3Hc%2FbDx%2FIbq4KNQHtXPdrGysY2GbJInee0a3tqp9RMocPFXR39MJ3ezskGOqUBIioW9GkDWHToi2sArVfJ5P3%2B2xUHu0YmXCstxlUsIVzLC488uhgvrR%2BXMx2xQPoSeYFnIiKGMC95wYjkYL5B%2FyY2trA%2F1E1zH5Ga9zDAKV4BfZK4sfS7a3eKPr8MqfHvqWCpHtov%2FTnBljrTmkPeP0585g695d3A2mEoLzCR3INzygR7xN89Ri%2FaAGG6ZGsDhpTjMixJ8%2Fuahp9p9LITiQHbQTPN&X-Amz-Signature=86b0d94ebea87b92bb9b68924e22e508b56c8fa8b4d62412fc61e4ea1085d670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXJUHZD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyjTui0fYosK4WNXW55DmzdP%2FMcYbZRgoj7Qh9q2tLggIgSGA5Krcx4o0q1cOhzg2TN7PrTTswOzu3gHLAbJGKIMEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDC88EemvUs10iAl04SrcAz014k6FBo8j9m%2FbWDdgrbtAca6dAcWKrvIdunvWX%2BBQbAysSGwhPAMMds0Bt32NsUsTb8wLI9zJPsVb5fKtSygu%2B29%2FJKak4u30WArX%2FVea8iLrAf8mRby4mqGaUxrdwlEFy%2FH2NaX%2FIzLApOxPJ1oUPDHynOH68ZDcfCQQqtuIHs80hUjy3qVF83%2Fl473DMltMtQHc6cuWFBfdhJL7vv83rEb6gB%2FMqGnQtHmskCNszW19FgaPpCw2C5MH6n%2FECnfAmKbaLH8b0UUreDIeRQkUP9SBsaGWRvbBl9LvWiwyJHzpbM%2F3I3hc1kw813DCGpNiSyAP4fbOwx%2FKeDW%2BG4k8Vr0TSpWnRSSA6g%2BGaYuzTBVjm4ox%2BKWx4ZzTkgEiWDtn3f4D5wV4VPM7iJC9Xi4cgvhjJeUFBd%2BGwjWtxYna%2Fgrw7fvJhSgEyKcR%2F8YM3o6q4pL2x5cGDbJRBx9iZ1tg0jQjeope3EkNUlo86xGO%2FO6PHiK6ndEFTjS5FyV9898SMgVwvZEWl7ZyK2kFXEAEDLtXEkL49q1erztOYDM9yYg9zMBYQPT0xmLNMWXj%2BOZV2v5%2FKI3Hc%2FbDx%2FIbq4KNQHtXPdrGysY2GbJInee0a3tqp9RMocPFXR39MJ3ezskGOqUBIioW9GkDWHToi2sArVfJ5P3%2B2xUHu0YmXCstxlUsIVzLC488uhgvrR%2BXMx2xQPoSeYFnIiKGMC95wYjkYL5B%2FyY2trA%2F1E1zH5Ga9zDAKV4BfZK4sfS7a3eKPr8MqfHvqWCpHtov%2FTnBljrTmkPeP0585g695d3A2mEoLzCR3INzygR7xN89Ri%2FaAGG6ZGsDhpTjMixJ8%2Fuahp9p9LITiQHbQTPN&X-Amz-Signature=690d19879696795faef5c4e6b6c24be485de130356506873b3cc71068aba4e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

