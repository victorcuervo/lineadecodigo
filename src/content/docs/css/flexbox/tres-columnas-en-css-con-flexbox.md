---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTTQU26L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsKyG3FRQEX1aqkmhx45heIIvK5hKm2NjMnJgl9LVD4wIgflyPd30zIyopsF52XAcVuUYARWzzQNaC%2Bav9u4hhWJQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLfj7SWsY%2BQNBO%2F7%2FCrcA4kM9KUmeiXfHY2DRggJ73NtkpG%2F5nIi6Dodz%2B1MelmDBlMqARX3gegHInY94ITFydhyOILa78JgzlUKWATSahGgfs7GZdtjT4jtQ8OuHAdGUR8KY2m70CIYl21S9yienWamIySZEHMosRhEXKFJu%2FNqMp%2F2oH9%2BceHE%2BLHfTHI6Zsr45sltm0yV8LwNzkkZ66dAtHjuwwcewViNELDZhzOpqW6THY8LG7wNGL%2FMU%2BfztcDg%2FQ%2BHJIQZDB1jwwKQfFZhyFw%2Brr0o0BpyFxPAcyo7zQQC1%2BNCWH0%2BDyoLQQ1PNrjxswYd5kNBuEmRTEqsyxtInQLoL%2FGhgGWTEEQoviQU3ass0ivRSATIN%2B8vGUzMpCgUAdm2ThLMQo1EQfmu18WPELweJFOs7xxPnTkdQVQfDjXxkHlWcwJNMH5KnACbI98u8zfDmBPzFlstceMz9fGniOCchQxKfUA46N5JsdPervoZfsanXRF4tjlGgHZQGaFmWtkv5iYglFmS1RhYud3slsa5CfqqJO%2FOMyTHbYYpVi23FdTvXc9xVOEMyqWZbxnQ4gA%2F5LPPorlH%2BsBu8H3CGEon9QFmVU1yeJQKPelERvaUqagmotu%2Fjau%2FaJuccfpjIAuUgD3Nh5wBMPa8z8kGOqUBDM%2FGRug4dvQjUbMLK0hsN37XeCc1UXNTaalGdZk7uLkq%2FTptXZ05wbdYsouQdFvVaEMIzBgIGMKTMUjeIk27y2wxql9eLOg9THLJ29xy5S2mVIvKWUupsr%2FQUyAAj9NTZydnOT%2Bc3%2B2HAanprd5bkuGSJCLWvyKe2Qhzj5SX6IECtkRXhqjH7hY%2BTt2H9seYDxhrv%2BIJX4XxbbFexFjfW5Y5bKHM&X-Amz-Signature=d6e0a6b35d9c1b3a9165abc2828e84b34e786eab80ca149d7114fbc0a60ea514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTTQU26L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsKyG3FRQEX1aqkmhx45heIIvK5hKm2NjMnJgl9LVD4wIgflyPd30zIyopsF52XAcVuUYARWzzQNaC%2Bav9u4hhWJQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLfj7SWsY%2BQNBO%2F7%2FCrcA4kM9KUmeiXfHY2DRggJ73NtkpG%2F5nIi6Dodz%2B1MelmDBlMqARX3gegHInY94ITFydhyOILa78JgzlUKWATSahGgfs7GZdtjT4jtQ8OuHAdGUR8KY2m70CIYl21S9yienWamIySZEHMosRhEXKFJu%2FNqMp%2F2oH9%2BceHE%2BLHfTHI6Zsr45sltm0yV8LwNzkkZ66dAtHjuwwcewViNELDZhzOpqW6THY8LG7wNGL%2FMU%2BfztcDg%2FQ%2BHJIQZDB1jwwKQfFZhyFw%2Brr0o0BpyFxPAcyo7zQQC1%2BNCWH0%2BDyoLQQ1PNrjxswYd5kNBuEmRTEqsyxtInQLoL%2FGhgGWTEEQoviQU3ass0ivRSATIN%2B8vGUzMpCgUAdm2ThLMQo1EQfmu18WPELweJFOs7xxPnTkdQVQfDjXxkHlWcwJNMH5KnACbI98u8zfDmBPzFlstceMz9fGniOCchQxKfUA46N5JsdPervoZfsanXRF4tjlGgHZQGaFmWtkv5iYglFmS1RhYud3slsa5CfqqJO%2FOMyTHbYYpVi23FdTvXc9xVOEMyqWZbxnQ4gA%2F5LPPorlH%2BsBu8H3CGEon9QFmVU1yeJQKPelERvaUqagmotu%2Fjau%2FaJuccfpjIAuUgD3Nh5wBMPa8z8kGOqUBDM%2FGRug4dvQjUbMLK0hsN37XeCc1UXNTaalGdZk7uLkq%2FTptXZ05wbdYsouQdFvVaEMIzBgIGMKTMUjeIk27y2wxql9eLOg9THLJ29xy5S2mVIvKWUupsr%2FQUyAAj9NTZydnOT%2Bc3%2B2HAanprd5bkuGSJCLWvyKe2Qhzj5SX6IECtkRXhqjH7hY%2BTt2H9seYDxhrv%2BIJX4XxbbFexFjfW5Y5bKHM&X-Amz-Signature=ccfd826d21689d23d5360262b2f7addc1d176f3aae18a0b32d8bd9f10a93341c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

