---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JY4JSH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUZ8u2B28%2BTlMLvsxOTfVTJZlHWFULhsjjvxVDg%2FXdTgIhAOZI7bPD2e84P5L%2FuDIN57XmrRfc4mVzuPbLAflhMExVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyuiIBh%2BtdmRr6U64q3AOOog80godXrj8jqFESp1uoW0HJnIbXhlFNGxJpt7ZPUZH4LiquYCiQeRBCG4IUR600IQqlnLgYF01eCqBMhCO6vx3TZK%2BPl3RKZJ2tfC7X0VMkwrF79iO6OxRKxfOrtWePN9GT07bv2jVPFH%2Fw0wS9xkcsDichEoZV6FwbHvccdhzXwBbZuveKPOZQmtB3KScVVC7hoQjFaOzhLn6Vu7dJf%2Fsvri7RhSHQBxcRbMfGjigom1XB4pD3OvjPtWgJslUBTiS%2FI%2FmcllLUhsJjfadwgkljrvZh5A1qKHHfpEjedIhEqrcfUX%2BlH%2Ff7ELvQ0V19uukszWH2QUB6zO7fTTRNtT0sCXgz%2F1sFRULM4fo%2Btoli9anz7PDL0BPoN23FknA9bhWeFCw1j2y95gcDFFbk75am3t9Jl83t%2Bb9Znjy6oxrBqT3QS%2F42EEtrw9lryJ%2BX5r7qRTHAtmIQYoDBT5SWXWI1BVokcktSK8U%2Fj%2BlI%2FKhZ%2Fo%2F325zz%2Bu%2F1CSGPj4792hzeRocR%2BSxhyxtPMEa2Jbkiastf3PreMqGAPPSHnEQy61Uh7rdQZ0PI%2FdcCTAfWS8Kp4KucLSI68sx2KF0ZsULkeQDi7RMmjFTSOjCrGuRaU3Zx4s0Y2tZwADDy%2FdLJBjqkAe9J3hIyWwunpkqkrFl%2FETfwF3MDid1TbbSKadzO6cqIRfdZpuBR9EStYkFcd%2FXf11Nv%2B%2Faha0g%2BZPal97AtLl7v6a7qYLZ9TOJ%2BQRQ66mV%2F8nvHZellENzlDh3cSvmhfJkdCkW11242FswIIk2aD2RiKUq%2F0IET3hvPWuwlgoIFBMzZ3IPf%2Be7KeVwNneF87DG9UPWM77vNZR7zhI2TzfNKST%2F7&X-Amz-Signature=ae9c4325b3a7a57866f4e2667c799ac29a00e802a77ac12a840536a696dfd0d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JY4JSH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUZ8u2B28%2BTlMLvsxOTfVTJZlHWFULhsjjvxVDg%2FXdTgIhAOZI7bPD2e84P5L%2FuDIN57XmrRfc4mVzuPbLAflhMExVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyuiIBh%2BtdmRr6U64q3AOOog80godXrj8jqFESp1uoW0HJnIbXhlFNGxJpt7ZPUZH4LiquYCiQeRBCG4IUR600IQqlnLgYF01eCqBMhCO6vx3TZK%2BPl3RKZJ2tfC7X0VMkwrF79iO6OxRKxfOrtWePN9GT07bv2jVPFH%2Fw0wS9xkcsDichEoZV6FwbHvccdhzXwBbZuveKPOZQmtB3KScVVC7hoQjFaOzhLn6Vu7dJf%2Fsvri7RhSHQBxcRbMfGjigom1XB4pD3OvjPtWgJslUBTiS%2FI%2FmcllLUhsJjfadwgkljrvZh5A1qKHHfpEjedIhEqrcfUX%2BlH%2Ff7ELvQ0V19uukszWH2QUB6zO7fTTRNtT0sCXgz%2F1sFRULM4fo%2Btoli9anz7PDL0BPoN23FknA9bhWeFCw1j2y95gcDFFbk75am3t9Jl83t%2Bb9Znjy6oxrBqT3QS%2F42EEtrw9lryJ%2BX5r7qRTHAtmIQYoDBT5SWXWI1BVokcktSK8U%2Fj%2BlI%2FKhZ%2Fo%2F325zz%2Bu%2F1CSGPj4792hzeRocR%2BSxhyxtPMEa2Jbkiastf3PreMqGAPPSHnEQy61Uh7rdQZ0PI%2FdcCTAfWS8Kp4KucLSI68sx2KF0ZsULkeQDi7RMmjFTSOjCrGuRaU3Zx4s0Y2tZwADDy%2FdLJBjqkAe9J3hIyWwunpkqkrFl%2FETfwF3MDid1TbbSKadzO6cqIRfdZpuBR9EStYkFcd%2FXf11Nv%2B%2Faha0g%2BZPal97AtLl7v6a7qYLZ9TOJ%2BQRQ66mV%2F8nvHZellENzlDh3cSvmhfJkdCkW11242FswIIk2aD2RiKUq%2F0IET3hvPWuwlgoIFBMzZ3IPf%2Be7KeVwNneF87DG9UPWM77vNZR7zhI2TzfNKST%2F7&X-Amz-Signature=f3d7bd838e53abf366183ddc1e11d546deec2bef020713b2691826982a5ccacf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

