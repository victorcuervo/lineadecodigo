---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KE62X6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsNl8K7q7Go%2F4%2FUSqmvs%2BLf4j1jYP%2Bw32QkA0Z6SgjUgIgdVMm4T0UaAWdrnPcSzF16HobTBkmb3QnpXj0MfIHPSYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsKaOaPM5Ph4td8PSrcA2ddPoeOcp1D0JVQzgGmulLuYmDelSyEEulU%2BEWHq%2Be3Hv4MbFIChmcBNxe5BGq%2FyGs7fpsPcYG%2B0nQU7SmKHL7U3TczNCM90QpDMn00wUtYUjl7SAOP9sx%2FjFsQ%2FEbQKiZzcT8i0Pdtkk1cMnLT65woTzwxAAU%2BvS%2F2AodhCCWuP2Wf1mHbVYaPeC77YBdoWC3do1xW8esEdvFq8oUPVkZSgwtAKF%2FhBodIrebCISSxy%2FlgJUzH2GBfA8XBflAcBdoJB25m7wsgJ04pe%2BLRvjTQj8OqGuW1ZgtUc1RcSJQpsMNw9rsKE0zL6Ra118ayTGv85TWJv4aXjo4hjxeKtPAUgdo0YppTk7XJTn64VFj00neHt%2FmNsHbSnIpA5vLxmTR1uEzFUvZ8ZMRSbde7lDZVAo0R0r4zlFOA6rl2r5ecnsbkuv3nVLt4TbQ4xHYM%2B4JEt40L37gWdbJKR%2FomKQ8h%2FbyKAlhA9VuSaz1QdW2igtIWW%2Bss48IcGokadWcfwX6MgOOi6ZIvJNv1rfsqa5KNXO8IjFcVGQNulWZmnbJ%2F4XV6a51ahVrQMr9flZvtT4dK5j4wDgwmwt1Wp5NJstZgN9rne2EExRnDBespDtrbhMVS822ia2uQewLPMJOj1MkGOqUBZAlGcXIZEIfxBMLTTqB6BJ%2FfDYNeM9fjBGhCijGJ2gn2zb80GnNa0nYOK75O7hoJN366UW7lSi8iinamHq8Rq9%2BqnpNMQGV1df7odlFZyyas3e1LkaF0GZbpciffor80tSCnQc31sRpZxV9gEipwiFjdvCmlvtSne%2F32MwWKEsCHeESmpacWOFJYjSaOC0h%2FzhXRzQDH%2BXqZytyib1cnvhniBc7F&X-Amz-Signature=0dedbd6ee2dbafb5226c5c046ba53702b0b00a3366e847fc7eff7aa53ee6a18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KE62X6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsNl8K7q7Go%2F4%2FUSqmvs%2BLf4j1jYP%2Bw32QkA0Z6SgjUgIgdVMm4T0UaAWdrnPcSzF16HobTBkmb3QnpXj0MfIHPSYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsKaOaPM5Ph4td8PSrcA2ddPoeOcp1D0JVQzgGmulLuYmDelSyEEulU%2BEWHq%2Be3Hv4MbFIChmcBNxe5BGq%2FyGs7fpsPcYG%2B0nQU7SmKHL7U3TczNCM90QpDMn00wUtYUjl7SAOP9sx%2FjFsQ%2FEbQKiZzcT8i0Pdtkk1cMnLT65woTzwxAAU%2BvS%2F2AodhCCWuP2Wf1mHbVYaPeC77YBdoWC3do1xW8esEdvFq8oUPVkZSgwtAKF%2FhBodIrebCISSxy%2FlgJUzH2GBfA8XBflAcBdoJB25m7wsgJ04pe%2BLRvjTQj8OqGuW1ZgtUc1RcSJQpsMNw9rsKE0zL6Ra118ayTGv85TWJv4aXjo4hjxeKtPAUgdo0YppTk7XJTn64VFj00neHt%2FmNsHbSnIpA5vLxmTR1uEzFUvZ8ZMRSbde7lDZVAo0R0r4zlFOA6rl2r5ecnsbkuv3nVLt4TbQ4xHYM%2B4JEt40L37gWdbJKR%2FomKQ8h%2FbyKAlhA9VuSaz1QdW2igtIWW%2Bss48IcGokadWcfwX6MgOOi6ZIvJNv1rfsqa5KNXO8IjFcVGQNulWZmnbJ%2F4XV6a51ahVrQMr9flZvtT4dK5j4wDgwmwt1Wp5NJstZgN9rne2EExRnDBespDtrbhMVS822ia2uQewLPMJOj1MkGOqUBZAlGcXIZEIfxBMLTTqB6BJ%2FfDYNeM9fjBGhCijGJ2gn2zb80GnNa0nYOK75O7hoJN366UW7lSi8iinamHq8Rq9%2BqnpNMQGV1df7odlFZyyas3e1LkaF0GZbpciffor80tSCnQc31sRpZxV9gEipwiFjdvCmlvtSne%2F32MwWKEsCHeESmpacWOFJYjSaOC0h%2FzhXRzQDH%2BXqZytyib1cnvhniBc7F&X-Amz-Signature=15fb039a5e9dbc5a8c8a6f2613d21e33c15e154a1226351b71ba4abf881d7f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

