---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O66WQMA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmzSu83XKGUrxv9dxbVPTowHffEfx15Cr0jDF0OPtQaAiBqSgkevaVGAkXM6JRdlC3FWLTvda2CS7vjY4ivZh2P7yr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMuAvvR2sUxgmxmUDvKtwD2ddfdeheft%2BsMZevuQexkXPMtjs8V5WJO6vrCHpPo1WhlQxeKnAOd9zplr%2FEQ%2FqPp81JbiGidzCidyBpvw3jrQsMzGdvjBFOJtvNsI03HSVnBr2puNBV4e2sp8rd%2BaYU7ib29E0pR1AL7%2BZBvlnlADnzbwROLKVY8dgLd%2BG1rr7%2FSlFP7v9KqlTtBihI9z4mHJh8EZIKmCRtbotZ3hIkaCCa3NQvofxG5EorxKS0XWtTSu298TNaa3D7v3BtSe%2BScEJkPa1qYSiO3wmSQ6YP0RXjBmOkUEkhxaWhN7z6J4pwOB2b0M4Z%2FODpuS50hDquMj1KL6l4HsqMTuCJ8gExkEK%2B2B%2BaXammlJv%2B7nrgIhrJEfJs%2FADMTSEYUPnmc%2BBIpM8LWK1MV7Je8kEFXL5jY2Zj4QWMKRMXkxE9FLLsz6JVDUxwAg8aVnK2Z0EPfnSfiLzwCgRueCNPOm%2BJ2jwRuoDHG9UNZfGS5zbMnPwqxJcis%2BzmxxJRaexUEkhNzvr60sSMqRXtackmkXO6T95BzANGKg9d0bhPRq5Yp5DXpyYDx73u5dK8ojO0sC1qjSWRqn9rQGmQDAc4ZSAIKyVJEw%2BIzHBVdgSson4FzHlsn6NEdvSHkhHI6OCnIvYwq4zIyQY6pgHGEhPwb%2BKscUeN53OTA8o4ivVPZbTYgmebgi6NJfAppgNWE6xWJWqOHERJf2RZOhpbBxSbRt8CTgqVG7lfuRv7gnDxhll4y5%2BfihnSARjWp3hE87%2BpcXTeDZxTKsllirZ%2BapJHfemPUgaB%2FI36HyspWb%2Fo7P2OSPBBAQTl89pr8ZBSzWS65%2FswDsmoG%2BFG54J6uSr%2FIteZIE569K9nBfAw3bqmZEY6&X-Amz-Signature=02235c96c23275d083f7f617d360356a5be99e1cb2a9284297fc947728de29cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O66WQMA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmzSu83XKGUrxv9dxbVPTowHffEfx15Cr0jDF0OPtQaAiBqSgkevaVGAkXM6JRdlC3FWLTvda2CS7vjY4ivZh2P7yr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMuAvvR2sUxgmxmUDvKtwD2ddfdeheft%2BsMZevuQexkXPMtjs8V5WJO6vrCHpPo1WhlQxeKnAOd9zplr%2FEQ%2FqPp81JbiGidzCidyBpvw3jrQsMzGdvjBFOJtvNsI03HSVnBr2puNBV4e2sp8rd%2BaYU7ib29E0pR1AL7%2BZBvlnlADnzbwROLKVY8dgLd%2BG1rr7%2FSlFP7v9KqlTtBihI9z4mHJh8EZIKmCRtbotZ3hIkaCCa3NQvofxG5EorxKS0XWtTSu298TNaa3D7v3BtSe%2BScEJkPa1qYSiO3wmSQ6YP0RXjBmOkUEkhxaWhN7z6J4pwOB2b0M4Z%2FODpuS50hDquMj1KL6l4HsqMTuCJ8gExkEK%2B2B%2BaXammlJv%2B7nrgIhrJEfJs%2FADMTSEYUPnmc%2BBIpM8LWK1MV7Je8kEFXL5jY2Zj4QWMKRMXkxE9FLLsz6JVDUxwAg8aVnK2Z0EPfnSfiLzwCgRueCNPOm%2BJ2jwRuoDHG9UNZfGS5zbMnPwqxJcis%2BzmxxJRaexUEkhNzvr60sSMqRXtackmkXO6T95BzANGKg9d0bhPRq5Yp5DXpyYDx73u5dK8ojO0sC1qjSWRqn9rQGmQDAc4ZSAIKyVJEw%2BIzHBVdgSson4FzHlsn6NEdvSHkhHI6OCnIvYwq4zIyQY6pgHGEhPwb%2BKscUeN53OTA8o4ivVPZbTYgmebgi6NJfAppgNWE6xWJWqOHERJf2RZOhpbBxSbRt8CTgqVG7lfuRv7gnDxhll4y5%2BfihnSARjWp3hE87%2BpcXTeDZxTKsllirZ%2BapJHfemPUgaB%2FI36HyspWb%2Fo7P2OSPBBAQTl89pr8ZBSzWS65%2FswDsmoG%2BFG54J6uSr%2FIteZIE569K9nBfAw3bqmZEY6&X-Amz-Signature=2127e0f238880506acb168be7e97fbfd0ae4d66f26340dfeb15290a764f0b6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

