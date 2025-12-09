---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQWS2U4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlBwTWJomtC5B%2F3%2F8QECxhlV4KySGVPNS3DOop0wDQOAIhAL0%2FarGIUYF%2BiIp7yUeh%2F5p9kG7Usimmk%2BHJIrFWsMZhKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNbwXVnMIRI22%2FZxwq3AMLpm%2FHzo%2Bt2AU8bkjCaDIHqVKnUFx2FXYyJKOf1Wxite4iwq6cXeYidOJgrlzQEtDZ24lfpPG%2BiXQqnepuybyjedKRz9nRSUSXWeRfc5fS%2FAveI0BaHqRZ8VN96x6S4Dh4r5ReGSpoxYHwVbAcT0r9m8YAzsLxHEtyKw2aN8T6i%2BzOGwmb1gYNk4OrQInbukP9gNUdAKnQ%2FKPL1u7e5j4ImdChe3vrrbxWDwC%2Bxxb%2FlcvmnpOWrudbixGHj0qMJiwtGh%2BelMu7BAp5K7aYx4r%2Bv1Pxq%2FThrWldTvY%2FWLJkWHfQfkPymX92jwhAW4p0p6W8FWA2Y18CgNvgFHNbqKa17eup7nP3RvmwDiIc44Kr3VRqnpCTYyOmMag7oKrCGa6RG2KM7DW1JE7tT89%2Bi8N8gjdoae6RLQ6aCl%2FMgFBc9hdNqmazaKpC4UL7o%2Fj%2B4jesWjAXFwYK00JYOG1xg0k9nEkVnPSs0WTkDyCrhhI2X0dNKwrg53%2F00ELZvUlRO%2BQoiAYiEVTReb2eK6302H8Tn4hIfluoMo9%2BzdauURPqm58cdN9yvVlQwhzXDVKF3ibXEk5XIWQ8XxOHWYxZAvwBsVnn9ley03apV8KJww6j21OMLSw89NhGa6AV%2FzCRw93JBjqkAZ1q89J88rpe4L%2F0EkNah61cZT5TmEi9GZoZN1ddF4AIBzCFKev4To8CLQtfJS6xfcuYtVq%2FiA7uUS7dEDVUaglYdEH8e4naGGVyngwVUuJdfOFWdkTo8Xhgfpgpbm%2FoQY7B7kvdgcDSJtI3XBMT52r00DFj6Y5c961QHVE634rXplSATMzzgMKXT9X9RnuZFPH%2B8VhgMuEM%2FiWvW74pYCeC1glH&X-Amz-Signature=1fced834a931e8bb71820071e4f4b9279436ff813dac30ea6a3a6398aff8169b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQWS2U4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlBwTWJomtC5B%2F3%2F8QECxhlV4KySGVPNS3DOop0wDQOAIhAL0%2FarGIUYF%2BiIp7yUeh%2F5p9kG7Usimmk%2BHJIrFWsMZhKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNbwXVnMIRI22%2FZxwq3AMLpm%2FHzo%2Bt2AU8bkjCaDIHqVKnUFx2FXYyJKOf1Wxite4iwq6cXeYidOJgrlzQEtDZ24lfpPG%2BiXQqnepuybyjedKRz9nRSUSXWeRfc5fS%2FAveI0BaHqRZ8VN96x6S4Dh4r5ReGSpoxYHwVbAcT0r9m8YAzsLxHEtyKw2aN8T6i%2BzOGwmb1gYNk4OrQInbukP9gNUdAKnQ%2FKPL1u7e5j4ImdChe3vrrbxWDwC%2Bxxb%2FlcvmnpOWrudbixGHj0qMJiwtGh%2BelMu7BAp5K7aYx4r%2Bv1Pxq%2FThrWldTvY%2FWLJkWHfQfkPymX92jwhAW4p0p6W8FWA2Y18CgNvgFHNbqKa17eup7nP3RvmwDiIc44Kr3VRqnpCTYyOmMag7oKrCGa6RG2KM7DW1JE7tT89%2Bi8N8gjdoae6RLQ6aCl%2FMgFBc9hdNqmazaKpC4UL7o%2Fj%2B4jesWjAXFwYK00JYOG1xg0k9nEkVnPSs0WTkDyCrhhI2X0dNKwrg53%2F00ELZvUlRO%2BQoiAYiEVTReb2eK6302H8Tn4hIfluoMo9%2BzdauURPqm58cdN9yvVlQwhzXDVKF3ibXEk5XIWQ8XxOHWYxZAvwBsVnn9ley03apV8KJww6j21OMLSw89NhGa6AV%2FzCRw93JBjqkAZ1q89J88rpe4L%2F0EkNah61cZT5TmEi9GZoZN1ddF4AIBzCFKev4To8CLQtfJS6xfcuYtVq%2FiA7uUS7dEDVUaglYdEH8e4naGGVyngwVUuJdfOFWdkTo8Xhgfpgpbm%2FoQY7B7kvdgcDSJtI3XBMT52r00DFj6Y5c961QHVE634rXplSATMzzgMKXT9X9RnuZFPH%2B8VhgMuEM%2FiWvW74pYCeC1glH&X-Amz-Signature=498d5ca21435079537eb847bd81db19925651210c3437923ad5b46c45669aafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

