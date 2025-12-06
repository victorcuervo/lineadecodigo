---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVURI6N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBeS%2BYvCLyVNzespnQHP4m4ZMpNv2lTWZXzsDlRbDHtAiEAwwDbxYRVz9VFIUJANejNdf12o7itfvLYQPszk2rksH0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDK4NDixLmiBMDQBP6ircAz%2BSEqFCf%2BBaddyUbDZubHMqtn%2Bbo35uNIdvY5Npukyju%2F7uUI4lp8mxfJsm5tTuTAPIcaylp%2FO2lIoN4oTPdfQEYlwCwVsqTMunMGXbQL%2BNcaCP%2FS4acRdw4Lqo0Gcwm0uFIeu35Yc9PiqzS2AOPDemLjciDt4pUPVal8YYXfLxMCAxTQW2859t2ULrG8HA2GHImOeNc7AA%2FbwRr7TNqdYhS1fS7e138xhPS0qxvpnNQRI5EPS01TBVPIqHSOa2Fjj9SqQf8AbGF8G7BWRCShowOByuUeBXT5w776CrkAuJyal9Vzcl5Ns6rsIeenK3xFLk56IbF0rNSza3pvrycImUiwlrT%2BdXBMsy3CP4SvryUvOLzd%2F2n3wHtL4RFoPzOO%2FD00hrv0UK4%2FuJHKsddx2M%2FXbc8OqXhT9mV%2BkLmP3VIHxgVd467sYVZAumvfw8HTJPqldeY9JM3FC07o2GfdYHAG%2F4tGWqi6ZD4cqoZ%2B9jFd33UznMDj6L%2B4n8A%2FD8wjUCKYrtTLrAzLjrgVPJfDEF1OnalpUsvcbzDs4QcwGnTaXcBMPd6%2BxxMmxGwVwW4X8hb%2BU%2F7t15Nfx6RyaTi6fj8J8iUa8cAFcP0Lskl18si%2FxEK7Nv3OAzLm76MImK0MkGOqUBooLS%2B7%2Bb5jEfDUhBHyDhjoAMWgNof33B7wmmbHSUFJlEAKsbQKM772l%2FP7QUdM6T6nD1y2BWdYc5Y1mETMmLgMw7H2GBi9ofq%2BGFT%2FMGMlRd3DwlA19Dko5u1gb4W0SHPflDUUbJ0uqCJJpJN3Npfw%2Fy3wsOcgJtXTmJa4xOfhQm409daP9FrOYSJjBmgbtpKw1ZMcFaWavZi2MkEkEbiafi8owq&X-Amz-Signature=9fde83fa5fe8c09c777055f2ebdb4b3bf1db0516883fe1942cab0ac7feb21a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVURI6N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBeS%2BYvCLyVNzespnQHP4m4ZMpNv2lTWZXzsDlRbDHtAiEAwwDbxYRVz9VFIUJANejNdf12o7itfvLYQPszk2rksH0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDK4NDixLmiBMDQBP6ircAz%2BSEqFCf%2BBaddyUbDZubHMqtn%2Bbo35uNIdvY5Npukyju%2F7uUI4lp8mxfJsm5tTuTAPIcaylp%2FO2lIoN4oTPdfQEYlwCwVsqTMunMGXbQL%2BNcaCP%2FS4acRdw4Lqo0Gcwm0uFIeu35Yc9PiqzS2AOPDemLjciDt4pUPVal8YYXfLxMCAxTQW2859t2ULrG8HA2GHImOeNc7AA%2FbwRr7TNqdYhS1fS7e138xhPS0qxvpnNQRI5EPS01TBVPIqHSOa2Fjj9SqQf8AbGF8G7BWRCShowOByuUeBXT5w776CrkAuJyal9Vzcl5Ns6rsIeenK3xFLk56IbF0rNSza3pvrycImUiwlrT%2BdXBMsy3CP4SvryUvOLzd%2F2n3wHtL4RFoPzOO%2FD00hrv0UK4%2FuJHKsddx2M%2FXbc8OqXhT9mV%2BkLmP3VIHxgVd467sYVZAumvfw8HTJPqldeY9JM3FC07o2GfdYHAG%2F4tGWqi6ZD4cqoZ%2B9jFd33UznMDj6L%2B4n8A%2FD8wjUCKYrtTLrAzLjrgVPJfDEF1OnalpUsvcbzDs4QcwGnTaXcBMPd6%2BxxMmxGwVwW4X8hb%2BU%2F7t15Nfx6RyaTi6fj8J8iUa8cAFcP0Lskl18si%2FxEK7Nv3OAzLm76MImK0MkGOqUBooLS%2B7%2Bb5jEfDUhBHyDhjoAMWgNof33B7wmmbHSUFJlEAKsbQKM772l%2FP7QUdM6T6nD1y2BWdYc5Y1mETMmLgMw7H2GBi9ofq%2BGFT%2FMGMlRd3DwlA19Dko5u1gb4W0SHPflDUUbJ0uqCJJpJN3Npfw%2Fy3wsOcgJtXTmJa4xOfhQm409daP9FrOYSJjBmgbtpKw1ZMcFaWavZi2MkEkEbiafi8owq&X-Amz-Signature=f57a350739e588f6d92d6b0357f4b3ae311689fc2253df3aca6d592114f3d582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

