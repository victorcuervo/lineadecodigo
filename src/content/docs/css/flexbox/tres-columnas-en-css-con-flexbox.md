---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674EDNCGO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjO0VDj1gd2kYT%2BgsABcVrn6UxE%2F2VmKXwY9Uk1NYYwIhAJKEbtC3GCSsLF2m2eLED3GFnwt%2BCjuwAYssTBWzB6bfKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwThD52lGHUeMlm%2FAwq3AMG1yF8CWMK5YWf5bq4plDO%2BDxYur8x2VWRUN1A1a4sWXUTWIcwh4IuXw%2BnEDxnUPRdPme7PXzHnRBR6CooEhp2ECpq5cfyPHrz2OhvtmRbaGMsZ%2FLC%2F4yzbjSlHHJymHXI9q7erTGCLqjcGIKOuEriAeO%2B0cqQq%2B4W%2B968FtL0An4tEwuEJ9Ab03pyyPjEjhApy%2F9uviMLz1gtR0g4zS%2BvLOMppjhvfIbMz%2F50b%2BBVPDiHk8QGyI56NHgsRv%2FyVhFO1LPPdjgZI5J9Zwbf3ZoA1nE%2BJZnFc8bYu%2FIa8495%2B%2ByblogP8MNTg7PpTLrsOOob5LFuWytv3Le3l9NRdmDK6aWtk2c%2FLk4d7e3Rnsvsh2ODpKRBWQ1ltf66KmbRKp0KA7BITrR89695ck%2Fdd3md%2FU%2BDcAMNR%2BZB0p2fGuMd%2B4bbMeEXm13f%2B0NVPoi4%2FkqAvvEirH1QaElUsqCVbpn35mN0M1u%2FC1ZfBX6KpcPGyOKe75XIrbS3IQA3tVPV1bpWj4ggJvRazu7A6%2B0t19FyoOOJ%2FPt5WpEGAyUcLov7GxwH610ncn%2F%2FfjCsra71s7NqLqW7jw2qSD%2BZOmYmlC2aTOS5fRSdMTQE6Ev3x28rTmcwedAEJGfrsk5YtzCfwt3JBjqkAUpmGWjMgQQ5UzxvNMC8MgglVciBvg1GuFzEHNSX6rPxIURweSayaBzPfMNmJQdwZPfkTCcpaTH4wBoZKsFxfu%2Bu6UXu4aN0tRvHlV4iUyLUOJXQGVNReTB7DVkxDL%2F1mNF2qBLBYWSn%2F7Mb4lhktm0FjHu%2BwSw4GBX3M0KU08losQOf22ohh4f154VbWhB4QqYZYFyQM4RaZQnryJj5dwa%2FrCRi&X-Amz-Signature=fb250067fdbe139230d0b5b03ad475e1ebc85917efe5acb375d0edd0fd7f66bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674EDNCGO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjO0VDj1gd2kYT%2BgsABcVrn6UxE%2F2VmKXwY9Uk1NYYwIhAJKEbtC3GCSsLF2m2eLED3GFnwt%2BCjuwAYssTBWzB6bfKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwThD52lGHUeMlm%2FAwq3AMG1yF8CWMK5YWf5bq4plDO%2BDxYur8x2VWRUN1A1a4sWXUTWIcwh4IuXw%2BnEDxnUPRdPme7PXzHnRBR6CooEhp2ECpq5cfyPHrz2OhvtmRbaGMsZ%2FLC%2F4yzbjSlHHJymHXI9q7erTGCLqjcGIKOuEriAeO%2B0cqQq%2B4W%2B968FtL0An4tEwuEJ9Ab03pyyPjEjhApy%2F9uviMLz1gtR0g4zS%2BvLOMppjhvfIbMz%2F50b%2BBVPDiHk8QGyI56NHgsRv%2FyVhFO1LPPdjgZI5J9Zwbf3ZoA1nE%2BJZnFc8bYu%2FIa8495%2B%2ByblogP8MNTg7PpTLrsOOob5LFuWytv3Le3l9NRdmDK6aWtk2c%2FLk4d7e3Rnsvsh2ODpKRBWQ1ltf66KmbRKp0KA7BITrR89695ck%2Fdd3md%2FU%2BDcAMNR%2BZB0p2fGuMd%2B4bbMeEXm13f%2B0NVPoi4%2FkqAvvEirH1QaElUsqCVbpn35mN0M1u%2FC1ZfBX6KpcPGyOKe75XIrbS3IQA3tVPV1bpWj4ggJvRazu7A6%2B0t19FyoOOJ%2FPt5WpEGAyUcLov7GxwH610ncn%2F%2FfjCsra71s7NqLqW7jw2qSD%2BZOmYmlC2aTOS5fRSdMTQE6Ev3x28rTmcwedAEJGfrsk5YtzCfwt3JBjqkAUpmGWjMgQQ5UzxvNMC8MgglVciBvg1GuFzEHNSX6rPxIURweSayaBzPfMNmJQdwZPfkTCcpaTH4wBoZKsFxfu%2Bu6UXu4aN0tRvHlV4iUyLUOJXQGVNReTB7DVkxDL%2F1mNF2qBLBYWSn%2F7Mb4lhktm0FjHu%2BwSw4GBX3M0KU08losQOf22ohh4f154VbWhB4QqYZYFyQM4RaZQnryJj5dwa%2FrCRi&X-Amz-Signature=4665172a606e8a9ffd2099828eafab025a83d6f09640a53022cf4cdadb225da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

