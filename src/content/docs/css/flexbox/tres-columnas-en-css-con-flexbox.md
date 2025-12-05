---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273KF6CT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWdY2NOc4KF8%2BkJ4xk1QEoxZuvDWiOVMEUsX2Iho5yoAiEAsbRm28AyXJTT0Vl1QF2gXlEKHvzHD9r8JosrOj5Vjwsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP75rae6%2FUCdSzIcQircA72UKoluBpHqcYdfNs2LLbOhI8AzNxQ0TjU7vIRvfDKZ31%2B2vjYisU4SGH6UMP7xlWBL4Vrnx%2FNWjgJB28GfJjUsIr8jlWd4%2FowwrZh%2Bb1sDdlk5ZtwZrGFSOS%2B3XcjNC6jqcD3jF7oNgRONMlo0Tvor%2F626AkA9Ivhvccz0lzyXOkRbuw0oow6fS6OiZkzJ3N33fZQ8M0BP9r0KH1Tf71YtFeoq6MQzu46VwEuoDkOGugIaKSsiP0OcRqcN4qfAmFCAXAiGHkTdZoW3ScmoDjdS%2FsHJ5aXQE03k7IeeHtoHnpvOYeTybFXWtbHBYqUBEV76dS37YNkaqeDSFkjd7sx57miOcEnmTbdp2b6XIEfcc0ovlor4SiJpc0nKkt6KKLwDXnzFrnZPAFrn84PH3iar3UB2uTjFttWJ6KsfgGdlvZtklfdOxEhQnYcbmVwzJOPnJuHIedF9kFnRXEZPC1LaiJkv3IyCdUR5NbK22bc35gjUjkNoX9iqlU1yR9QIRvUbSsFCf0gP5SRHVLXTP%2FgxTcdFnvbORcDR16lLBjh0omjsP8kakuUjSojmHzvskcdb3%2FvtT7Ha4Ia0S4pMVxYWtfEReXtZIpVvJR4Uo6%2FWoYaDCwkbkXHbHeJaMLzzy8kGOqUBQ9XrLUgAMP9yk7voW891X6zi7Lk1p3wxcwIWox3Do%2BDukkAaaMj8OKiUf9QL9CSsuquSvPXKOwi6VD1Wo1gKxWKkDtjqTtgKB6U5jDOeBW9nZs085IGigXarw9zzMAUQErPhhjElENEICJijxG2KVIucwbTVyjs7ofxOYE2bYs3T4OcJXikmrDjT2QrwNdZYX1mlIBfDEzMvG8oRdvFcJBg%2BKHKa&X-Amz-Signature=4baa36164d031a134b249f3a58cd88e3c42c5181071945905507f441b9fadca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273KF6CT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWdY2NOc4KF8%2BkJ4xk1QEoxZuvDWiOVMEUsX2Iho5yoAiEAsbRm28AyXJTT0Vl1QF2gXlEKHvzHD9r8JosrOj5Vjwsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP75rae6%2FUCdSzIcQircA72UKoluBpHqcYdfNs2LLbOhI8AzNxQ0TjU7vIRvfDKZ31%2B2vjYisU4SGH6UMP7xlWBL4Vrnx%2FNWjgJB28GfJjUsIr8jlWd4%2FowwrZh%2Bb1sDdlk5ZtwZrGFSOS%2B3XcjNC6jqcD3jF7oNgRONMlo0Tvor%2F626AkA9Ivhvccz0lzyXOkRbuw0oow6fS6OiZkzJ3N33fZQ8M0BP9r0KH1Tf71YtFeoq6MQzu46VwEuoDkOGugIaKSsiP0OcRqcN4qfAmFCAXAiGHkTdZoW3ScmoDjdS%2FsHJ5aXQE03k7IeeHtoHnpvOYeTybFXWtbHBYqUBEV76dS37YNkaqeDSFkjd7sx57miOcEnmTbdp2b6XIEfcc0ovlor4SiJpc0nKkt6KKLwDXnzFrnZPAFrn84PH3iar3UB2uTjFttWJ6KsfgGdlvZtklfdOxEhQnYcbmVwzJOPnJuHIedF9kFnRXEZPC1LaiJkv3IyCdUR5NbK22bc35gjUjkNoX9iqlU1yR9QIRvUbSsFCf0gP5SRHVLXTP%2FgxTcdFnvbORcDR16lLBjh0omjsP8kakuUjSojmHzvskcdb3%2FvtT7Ha4Ia0S4pMVxYWtfEReXtZIpVvJR4Uo6%2FWoYaDCwkbkXHbHeJaMLzzy8kGOqUBQ9XrLUgAMP9yk7voW891X6zi7Lk1p3wxcwIWox3Do%2BDukkAaaMj8OKiUf9QL9CSsuquSvPXKOwi6VD1Wo1gKxWKkDtjqTtgKB6U5jDOeBW9nZs085IGigXarw9zzMAUQErPhhjElENEICJijxG2KVIucwbTVyjs7ofxOYE2bYs3T4OcJXikmrDjT2QrwNdZYX1mlIBfDEzMvG8oRdvFcJBg%2BKHKa&X-Amz-Signature=0782b8f7d05bcd77af40e8f01982b6155002de4d2a1337dbe90edf119aa1c8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

