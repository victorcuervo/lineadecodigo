---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2VG4NK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGESZsU60bd6Ck6ZlBA%2F0e6%2BzGEciBcCu0BRulNQPM56AiAzO0aubWWClshbxSIXS5uEzYFEWnY%2F1u60iKWQD4PT9yqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bcc1yOYimJKHxweKtwDoN4%2BKJeArtZANu%2BSTiFFUKvvQoUW5Ct9VMMT93SMIWXolOmm572AyY20QDscYc1LN4tZXSGqI0z2FwIUVQQ%2Bs2e4%2FM57GMGTS04xIrNl6ICH16Iflay1Kyb9cGjAjCCkpsJec0qnFLhsufRQEGghW8%2BXveaGIGgF4XjFTtsGmNPdonfDEB2w0OKtkGQ2XEYsmeu9WrXg%2BoRL%2F4KepgPylAEdPEoQzcX4eT2jQPEymxFsZTpVbYKJUs2Uk7o4kTuWse%2Fv8RLCD78qGtpraIW2xtm%2BtCwiAatkkcnSnT73IJFVeWYGeAoJkExUC3rNSWBrJQA%2FmqxsoY%2B2xLPp2dWkZoJxAOTiNeSMl%2B0zPtcEieeOweXFgPHILiC3HA%2Fkz2SfQS6X6QrEy3zUAWTnMVdlur%2BDPD4WdQYvIeO68IZ00NarTBRa2VOV78YzwJ73k62iwGelpQpiaqJDu3f1RsSc9VeaZB6jZYNW%2BCvEHIKikLm3SdJz9e776lrn1olkBDU93iDjbt8dUvCOi53uYsasYgoOmRmjD4DxQKSMhoVqhIOU5GRo1akQZ%2FkbCjXm1X02xZIr8N5xKN5KYH4SUUbWhgD%2Bmau7qVDEKTrjo5g%2FkOtNQbQMil1pxh2%2FnkYwq%2FPayQY6pgE94bfFYPXefEN2r2XE%2FjxipZLKgS8Z%2B%2BPUOVSI9w%2F5Bk0LnFSHWaU54jwkUPMfTHIIlHczYqyEUUL0Geppw1J263w6FmEmkMN%2B%2Bx7WJK6tatWuifUmpUYPUhANgBwtFpMexImZxh16HF%2Fph8eGlPc1qkE8T9RPgOlIZ45iquHgKgteJ31h424F0v0RZsg7DGLdeGWl7cRd7HB2Pm9ozAjAXsFPxacW&X-Amz-Signature=dd29cdfad6b643b4fe3129870f79027e3dc3d788116007b165ee8fa4080393df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2VG4NK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGESZsU60bd6Ck6ZlBA%2F0e6%2BzGEciBcCu0BRulNQPM56AiAzO0aubWWClshbxSIXS5uEzYFEWnY%2F1u60iKWQD4PT9yqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bcc1yOYimJKHxweKtwDoN4%2BKJeArtZANu%2BSTiFFUKvvQoUW5Ct9VMMT93SMIWXolOmm572AyY20QDscYc1LN4tZXSGqI0z2FwIUVQQ%2Bs2e4%2FM57GMGTS04xIrNl6ICH16Iflay1Kyb9cGjAjCCkpsJec0qnFLhsufRQEGghW8%2BXveaGIGgF4XjFTtsGmNPdonfDEB2w0OKtkGQ2XEYsmeu9WrXg%2BoRL%2F4KepgPylAEdPEoQzcX4eT2jQPEymxFsZTpVbYKJUs2Uk7o4kTuWse%2Fv8RLCD78qGtpraIW2xtm%2BtCwiAatkkcnSnT73IJFVeWYGeAoJkExUC3rNSWBrJQA%2FmqxsoY%2B2xLPp2dWkZoJxAOTiNeSMl%2B0zPtcEieeOweXFgPHILiC3HA%2Fkz2SfQS6X6QrEy3zUAWTnMVdlur%2BDPD4WdQYvIeO68IZ00NarTBRa2VOV78YzwJ73k62iwGelpQpiaqJDu3f1RsSc9VeaZB6jZYNW%2BCvEHIKikLm3SdJz9e776lrn1olkBDU93iDjbt8dUvCOi53uYsasYgoOmRmjD4DxQKSMhoVqhIOU5GRo1akQZ%2FkbCjXm1X02xZIr8N5xKN5KYH4SUUbWhgD%2Bmau7qVDEKTrjo5g%2FkOtNQbQMil1pxh2%2FnkYwq%2FPayQY6pgE94bfFYPXefEN2r2XE%2FjxipZLKgS8Z%2B%2BPUOVSI9w%2F5Bk0LnFSHWaU54jwkUPMfTHIIlHczYqyEUUL0Geppw1J263w6FmEmkMN%2B%2Bx7WJK6tatWuifUmpUYPUhANgBwtFpMexImZxh16HF%2Fph8eGlPc1qkE8T9RPgOlIZ45iquHgKgteJ31h424F0v0RZsg7DGLdeGWl7cRd7HB2Pm9ozAjAXsFPxacW&X-Amz-Signature=4b322f0858c21b68dac6eb0d4b629b2e38085bdfabf498171f2dfaf3249e5c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

