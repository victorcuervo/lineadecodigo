---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA5D4QWD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNRKPb9ALyzNWTuFHLafEOZwZM6kXebe%2FwMiMuHdtTTQIhANsnPtjbbuIaLRE7wAmMIKs4g81ph8OfzQikSlrx6l4%2FKv8DCFUQABoMNjM3NDIzMTgzODA1IgxUye8mEW%2Fk96KIgYwq3AORe%2BLP6k%2Fxj2zMv0ClaGY%2FPcGqyTM7EqJPz2qXnTo8JI%2ByJAr4%2B8k0cOM9EnEdr2lZHdwHtv%2B6tnf3pGaW0uUTFFXBpupRbQW3L%2FNvz4%2BeS0gevHORAevyfxUpEiQFHbEAbde9kxdEMn9MG2HAQgLa17TJtrYgl4kqwpOi9lL98RbAPa%2F2imV%2FEfqOJZjpnuwh9xx8PlpA1AEW3QFXYO678OScjkYwfdjxKOxM%2BP1R5GCTcimOG1fz%2FwZ5xbWXsgCQaiFGbhQCIn%2F88KRrKr134bZ%2Bahy0UsCPlbjHZSQiRHmEWCSOvMXWecD3K78Z4WepXxqTuWiyIQm1yXr%2BA3ZO0GInamVMnz3WmVH5edibRItEbgJC6WHkfaW7jBl7tYhI1GwZXsbsaJgdk%2BcTWDUt4Xk1SKYIqU2gzfUFo9BoX4E8W2VOOjDEaLDaLnceRmc04YFkjzlKyelvE97%2BuPGhJzrNogoYyW8wFTbmGta8RqAtRnOhpIOO0jUkJ%2FTc2oVjors3xvZTALl2HqFJNb%2FFx%2F9IgnICIwkE%2B7r4OphrXh0ZU2dVGNuD%2FFE%2FTL%2F%2B132cSRKIhNX7%2FLq04oLoPDsQmd7za3It0l8NNmXzy0ALELk3HKBPkrrL2uVjxjChqMnJBjqkASZ8wvz2cFlu93VF18jtYTcS%2BHelzdWSFTTEj4EiJyV4wySJWRRQh%2FOjiYptOSVAkri7QVFQ2ptRK%2BEVoPaBzhhH33smjbUKeWuJt7PandRjAxotjmAqoYc8PmOTPRckHZtiYOguBaQQk2JGer1MxuwggL%2BFxSa0cPD9oEPYJqO41A7tv3VZVk73SVcxEkyGY5uDdPmL7oYXku7HvujfIej7tlfO&X-Amz-Signature=5d0c744e450ad802a4dd718b65924ffd8ef84fe603c68364379a3c4dc2ca4d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA5D4QWD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNRKPb9ALyzNWTuFHLafEOZwZM6kXebe%2FwMiMuHdtTTQIhANsnPtjbbuIaLRE7wAmMIKs4g81ph8OfzQikSlrx6l4%2FKv8DCFUQABoMNjM3NDIzMTgzODA1IgxUye8mEW%2Fk96KIgYwq3AORe%2BLP6k%2Fxj2zMv0ClaGY%2FPcGqyTM7EqJPz2qXnTo8JI%2ByJAr4%2B8k0cOM9EnEdr2lZHdwHtv%2B6tnf3pGaW0uUTFFXBpupRbQW3L%2FNvz4%2BeS0gevHORAevyfxUpEiQFHbEAbde9kxdEMn9MG2HAQgLa17TJtrYgl4kqwpOi9lL98RbAPa%2F2imV%2FEfqOJZjpnuwh9xx8PlpA1AEW3QFXYO678OScjkYwfdjxKOxM%2BP1R5GCTcimOG1fz%2FwZ5xbWXsgCQaiFGbhQCIn%2F88KRrKr134bZ%2Bahy0UsCPlbjHZSQiRHmEWCSOvMXWecD3K78Z4WepXxqTuWiyIQm1yXr%2BA3ZO0GInamVMnz3WmVH5edibRItEbgJC6WHkfaW7jBl7tYhI1GwZXsbsaJgdk%2BcTWDUt4Xk1SKYIqU2gzfUFo9BoX4E8W2VOOjDEaLDaLnceRmc04YFkjzlKyelvE97%2BuPGhJzrNogoYyW8wFTbmGta8RqAtRnOhpIOO0jUkJ%2FTc2oVjors3xvZTALl2HqFJNb%2FFx%2F9IgnICIwkE%2B7r4OphrXh0ZU2dVGNuD%2FFE%2FTL%2F%2B132cSRKIhNX7%2FLq04oLoPDsQmd7za3It0l8NNmXzy0ALELk3HKBPkrrL2uVjxjChqMnJBjqkASZ8wvz2cFlu93VF18jtYTcS%2BHelzdWSFTTEj4EiJyV4wySJWRRQh%2FOjiYptOSVAkri7QVFQ2ptRK%2BEVoPaBzhhH33smjbUKeWuJt7PandRjAxotjmAqoYc8PmOTPRckHZtiYOguBaQQk2JGer1MxuwggL%2BFxSa0cPD9oEPYJqO41A7tv3VZVk73SVcxEkyGY5uDdPmL7oYXku7HvujfIej7tlfO&X-Amz-Signature=246e06edb066011778c3db0ede7f5741529850df34fdbb66d6536f92ba56e85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

