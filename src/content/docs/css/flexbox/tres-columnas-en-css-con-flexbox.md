---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCOCDCI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZHp%2FjObqlWh3r1ETF2Jg7ohGSxjFemWEeA4u8vxu%2FQAiEA%2BSvX%2BoPuvNfRs5BmdWcfgfE9GlLinPh76XA2Sp991BMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPWYZiQ69BnXZatxfircA8RDTrVmKGs%2BSJYrVSaX0CQCw55ZWCxtzKI3fj1Dt2tZ%2BNnq6XrAO0qSHnRRQ%2BzRoYT7%2Fay5yp3dHlpRXFZO2AD2sxRbwWQ36sg%2BhXgaa8J%2BscaCcDHpXn367Au4wqbNI%2BFGkvUSjLEiUFVNJlCg0OHQ3bH%2B%2FifT97YemSJ0ZK1Fe%2BRIj%2BbAcKXPzmEbIPh1OJKjQYLETDwmqGk5L11Cwpjy4KG3srXDsIVdwGpNJnCZbAr7VA7kiUDPq5NeLsQNX7%2Bpp6TcMQLdZIuepiEVOEkAmZMyRQewnCAXU09WXnKojIBidd5tOO66qczclVjiOz233MwpxHIpUiVukwuThvGI78vvrN8ztfYKAVcOJdAzxvQfbZFuENRBFu%2BzE%2BWv5V1%2Bg67nzmwkWDMOOqouLOJTMJp65t7uZMZ%2FFpiwesq7Z1zhNw2ZKzG9m0jWeHd3S47jYFuy1vBrddrmsqxwx3eLDS%2BPoQfyAq8fO%2BiulCxb0DzAZUnC1zTTjrhKsLaMEYU%2FgFpQUxPIHHoiXQtmb8xXDg%2FJoY9GR8i2D22NreD3Qlk8vWgAFYhlHd22LJGcIT%2Bizm7rRg%2ByPD%2FTMy8Ygw0upQq%2Fe%2BgOh%2F8zWq0YJV6%2FffwV%2FRdn3GwAB%2FIrMLP9zskGOqUBYwst%2FBXgqHSqix4kryqpSY3mmf0rFoYrtVzX2j%2BV7eo%2FbWtBjZb8kET5ZCkZiIfk%2FnOk%2BOJrrBqibtoaOXItwWGzd68gzaux%2FJz7k2YOxzMIMB1II%2BoIc9krpicA5rINbOvQaHbapeuelYidx2byPsgYMnJvDO4rmyZLVWTm9SBrkzLkXedPe3dizfJT%2BWriKZuKYjL%2BDj6DlKqFeETUkL9r92I8&X-Amz-Signature=8f280df0e8eb35e0065dc3a6a02378abffeb59565834bc51e247a51128731ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCOCDCI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZHp%2FjObqlWh3r1ETF2Jg7ohGSxjFemWEeA4u8vxu%2FQAiEA%2BSvX%2BoPuvNfRs5BmdWcfgfE9GlLinPh76XA2Sp991BMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPWYZiQ69BnXZatxfircA8RDTrVmKGs%2BSJYrVSaX0CQCw55ZWCxtzKI3fj1Dt2tZ%2BNnq6XrAO0qSHnRRQ%2BzRoYT7%2Fay5yp3dHlpRXFZO2AD2sxRbwWQ36sg%2BhXgaa8J%2BscaCcDHpXn367Au4wqbNI%2BFGkvUSjLEiUFVNJlCg0OHQ3bH%2B%2FifT97YemSJ0ZK1Fe%2BRIj%2BbAcKXPzmEbIPh1OJKjQYLETDwmqGk5L11Cwpjy4KG3srXDsIVdwGpNJnCZbAr7VA7kiUDPq5NeLsQNX7%2Bpp6TcMQLdZIuepiEVOEkAmZMyRQewnCAXU09WXnKojIBidd5tOO66qczclVjiOz233MwpxHIpUiVukwuThvGI78vvrN8ztfYKAVcOJdAzxvQfbZFuENRBFu%2BzE%2BWv5V1%2Bg67nzmwkWDMOOqouLOJTMJp65t7uZMZ%2FFpiwesq7Z1zhNw2ZKzG9m0jWeHd3S47jYFuy1vBrddrmsqxwx3eLDS%2BPoQfyAq8fO%2BiulCxb0DzAZUnC1zTTjrhKsLaMEYU%2FgFpQUxPIHHoiXQtmb8xXDg%2FJoY9GR8i2D22NreD3Qlk8vWgAFYhlHd22LJGcIT%2Bizm7rRg%2ByPD%2FTMy8Ygw0upQq%2Fe%2BgOh%2F8zWq0YJV6%2FffwV%2FRdn3GwAB%2FIrMLP9zskGOqUBYwst%2FBXgqHSqix4kryqpSY3mmf0rFoYrtVzX2j%2BV7eo%2FbWtBjZb8kET5ZCkZiIfk%2FnOk%2BOJrrBqibtoaOXItwWGzd68gzaux%2FJz7k2YOxzMIMB1II%2BoIc9krpicA5rINbOvQaHbapeuelYidx2byPsgYMnJvDO4rmyZLVWTm9SBrkzLkXedPe3dizfJT%2BWriKZuKYjL%2BDj6DlKqFeETUkL9r92I8&X-Amz-Signature=b39a533dcd600cd6fd4c645220517f89057df21d1e9c9fa03ccbeb1f5a403ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

