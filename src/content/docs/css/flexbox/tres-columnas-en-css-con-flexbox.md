---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLTUIZY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDApRoq94cdBNiAMiZVG%2F60IkxgWt7GlXxVWDcWDC4XNwIgCWKoho3t4rw1w%2FmHslBYgpSVlu2Adk2quCjl5nSSxggq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHd9Hmqsgfv7VQ5EaSrcA4PhulaTP%2BMxY%2B5xzak9AFiE6maClTt0i3rOCVR0KQxRbxbA5Os7ZcnpVTyzl22IwfoSx6NSgG8d9ttXR46ZjT9rQ8%2Bsz8W2suh18VfGJUazsIvKg4f22zJzeQk9XiCw8BhBzZZ2j6IcbQRU8XVEovGM2TV4p4%2FDXbXl1iWSYWQ%2FNqv%2FarAHd0GN4mXGjH2uDlzsWUn5sH8CUn91mLSQOpi3clZMJN9iHyERQnAoSeHQzpMvtMy5rHv58MTSRvYSk%2Fras7%2FWFZnZ6SvmuYHg0Cijx1wrO%2Fri7VwnAT2tquDhbaFTLoUNgx8ajZPyCMQF8AohS8kATdS5x23aIXFNMT4dWggzEcja%2FnZMHMCpzFgnLJ1zjovmHWFKmcYBLV7JyVKltdTX%2B5Fpuw%2Ff6VZLpW%2BN3twPyDGFPDq6so%2FI02iHsfBTqGR51vJpPIMCV1MqTx7%2Bw2eg9Zw0KDMsYQFKSGx%2FztkoFf8SBM77vhjVRJlMW9rvSZElzW%2BtDKnVVvTaLwptoQv1apSrX%2B%2Fq4K7H9DvvpniNBEZHt9zAJY0v9neBwBXyCFO99C5UYWd%2Fd%2F4GJ5DVyiwh9tglb9IUVX8uC%2FusGL3tUu50SwFISvO7mwXJ%2BguDEpZXUZEEl%2FBjMPem0MkGOqUB6ec7NNAAMeYhsw95OMvUFyygCttv%2Bb6liDIxvi5dm3LpdALYBGpdAU92m2LN6r6OT39urNBIeq5vGICLmRMK4rOLxeY81ASUaF7ejgMjjqpuc4uyTUkvhUeeLdMrpNtuEdexdXpVocmp0cPEGNmh%2FGkorU7i2vpRvSm%2FRGk2k29A34KrimdwpcS0AH48LzsYOid7ouRDgwnFgRDBlab62kDGuPzq&X-Amz-Signature=50328cf60dc49ad513bef9833e798ca402a7a95a88eb78f1f8ccb779202a62f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLTUIZY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDApRoq94cdBNiAMiZVG%2F60IkxgWt7GlXxVWDcWDC4XNwIgCWKoho3t4rw1w%2FmHslBYgpSVlu2Adk2quCjl5nSSxggq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHd9Hmqsgfv7VQ5EaSrcA4PhulaTP%2BMxY%2B5xzak9AFiE6maClTt0i3rOCVR0KQxRbxbA5Os7ZcnpVTyzl22IwfoSx6NSgG8d9ttXR46ZjT9rQ8%2Bsz8W2suh18VfGJUazsIvKg4f22zJzeQk9XiCw8BhBzZZ2j6IcbQRU8XVEovGM2TV4p4%2FDXbXl1iWSYWQ%2FNqv%2FarAHd0GN4mXGjH2uDlzsWUn5sH8CUn91mLSQOpi3clZMJN9iHyERQnAoSeHQzpMvtMy5rHv58MTSRvYSk%2Fras7%2FWFZnZ6SvmuYHg0Cijx1wrO%2Fri7VwnAT2tquDhbaFTLoUNgx8ajZPyCMQF8AohS8kATdS5x23aIXFNMT4dWggzEcja%2FnZMHMCpzFgnLJ1zjovmHWFKmcYBLV7JyVKltdTX%2B5Fpuw%2Ff6VZLpW%2BN3twPyDGFPDq6so%2FI02iHsfBTqGR51vJpPIMCV1MqTx7%2Bw2eg9Zw0KDMsYQFKSGx%2FztkoFf8SBM77vhjVRJlMW9rvSZElzW%2BtDKnVVvTaLwptoQv1apSrX%2B%2Fq4K7H9DvvpniNBEZHt9zAJY0v9neBwBXyCFO99C5UYWd%2Fd%2F4GJ5DVyiwh9tglb9IUVX8uC%2FusGL3tUu50SwFISvO7mwXJ%2BguDEpZXUZEEl%2FBjMPem0MkGOqUB6ec7NNAAMeYhsw95OMvUFyygCttv%2Bb6liDIxvi5dm3LpdALYBGpdAU92m2LN6r6OT39urNBIeq5vGICLmRMK4rOLxeY81ASUaF7ejgMjjqpuc4uyTUkvhUeeLdMrpNtuEdexdXpVocmp0cPEGNmh%2FGkorU7i2vpRvSm%2FRGk2k29A34KrimdwpcS0AH48LzsYOid7ouRDgwnFgRDBlab62kDGuPzq&X-Amz-Signature=2ab78088199702a01d4bc8a94a99e5c5c00dc6ea4707e9911f5582b0b8519d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

