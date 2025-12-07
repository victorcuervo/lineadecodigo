---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWNNUZS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb1NGRBTRsD607y%2BAzjsajxaqK7kewkLK9xQaCJyI8XAiA6KyVxwrvGaR3xpi%2BwmhqGL9vEY1PU8aoWKjZ%2FDa4wYCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqL0Wk%2Fhq9uLySSKgKtwDhERKiHr0EWgPLCmuRoTfJ6Uqe9UyLbZ2Uii2u5Zu01sxbw84Qlq2%2B4VuZIXybSekqhW9DXNbMSmqmGHsiMFLa94isypi6gs4VJpbS9KhrVrl4algcg0tYmNw5XCq1FsOAwTHEuurvdSB%2FpwHr5wsJ5BZLiVW6f8f7umkRV4fTePcg2Og0YfsBKqgwL0wsDN2Emr9fSsNDgwThjbcpxs%2Fou5MLncA%2BzF5iif%2BJRS2kjq6Wc9o1cmqFKaD2WT4S2i02NFjSI%2BA%2FItQEsloN%2FRVEM76t5A799e4wEPnW1isbFMSneXMJZgsamBi4GYB%2BhmrvgzBi%2FDcigCB%2BSrqHLkz41KldWrQ883nRpVZqgtReGPRULdyulgd7L%2BxH10JXWffAmyESSE6jIA2DszGV5RuEDzaGgnASmnbEXcBW7G3v6UG5bYOPH4elDUb2fIQ9Wfa6O8jweT3o8viDgXc2GlJufRl7%2BVVMtyQkFQvIjtWKuKIq3YAGjKKPk%2BZJ%2FZYVIPKSF2hfjUfLq1sdeFjO%2FmSPT7poxoRptQ7vzKz%2B2VsB%2Fs7UYl1RJfhZGZNpLn%2F4RYy7%2BZUeHjYpVvaCrK8a%2F9e5P8C7DlAQqOghnU2Bo9Ua3iiz5bnI6U%2BjQdN%2FocwrKDUyQY6pgHJVZ5kFNFC%2FBz%2FJ%2B04HXaT2AYxHGcegq6qa2Z6bW4P5lCDbiq5%2BbBH2vDI5SM7%2FPcLyi8yijq%2Bq4vva%2BTGUgp9FK6iCZHe0KMCm5XThA9L7kkA3WfaCQur%2BACvkwSE4XAm2EoOTGylGYzKw7%2Fiap3BJVK4eVYmtAM%2BXGsMfsPz1x%2BtYdex%2F95xM3pXP8UodaGltDijNolYlc7IMmepiwBVAXT1xbL4&X-Amz-Signature=de033b07df1e421b031a5e37f9060d2e792a95214dadf0297061f634d2f8aae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWNNUZS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb1NGRBTRsD607y%2BAzjsajxaqK7kewkLK9xQaCJyI8XAiA6KyVxwrvGaR3xpi%2BwmhqGL9vEY1PU8aoWKjZ%2FDa4wYCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqL0Wk%2Fhq9uLySSKgKtwDhERKiHr0EWgPLCmuRoTfJ6Uqe9UyLbZ2Uii2u5Zu01sxbw84Qlq2%2B4VuZIXybSekqhW9DXNbMSmqmGHsiMFLa94isypi6gs4VJpbS9KhrVrl4algcg0tYmNw5XCq1FsOAwTHEuurvdSB%2FpwHr5wsJ5BZLiVW6f8f7umkRV4fTePcg2Og0YfsBKqgwL0wsDN2Emr9fSsNDgwThjbcpxs%2Fou5MLncA%2BzF5iif%2BJRS2kjq6Wc9o1cmqFKaD2WT4S2i02NFjSI%2BA%2FItQEsloN%2FRVEM76t5A799e4wEPnW1isbFMSneXMJZgsamBi4GYB%2BhmrvgzBi%2FDcigCB%2BSrqHLkz41KldWrQ883nRpVZqgtReGPRULdyulgd7L%2BxH10JXWffAmyESSE6jIA2DszGV5RuEDzaGgnASmnbEXcBW7G3v6UG5bYOPH4elDUb2fIQ9Wfa6O8jweT3o8viDgXc2GlJufRl7%2BVVMtyQkFQvIjtWKuKIq3YAGjKKPk%2BZJ%2FZYVIPKSF2hfjUfLq1sdeFjO%2FmSPT7poxoRptQ7vzKz%2B2VsB%2Fs7UYl1RJfhZGZNpLn%2F4RYy7%2BZUeHjYpVvaCrK8a%2F9e5P8C7DlAQqOghnU2Bo9Ua3iiz5bnI6U%2BjQdN%2FocwrKDUyQY6pgHJVZ5kFNFC%2FBz%2FJ%2B04HXaT2AYxHGcegq6qa2Z6bW4P5lCDbiq5%2BbBH2vDI5SM7%2FPcLyi8yijq%2Bq4vva%2BTGUgp9FK6iCZHe0KMCm5XThA9L7kkA3WfaCQur%2BACvkwSE4XAm2EoOTGylGYzKw7%2Fiap3BJVK4eVYmtAM%2BXGsMfsPz1x%2BtYdex%2F95xM3pXP8UodaGltDijNolYlc7IMmepiwBVAXT1xbL4&X-Amz-Signature=bbe4fc948966cf361d1ff880df4f5c95e28b936fbe6c1d0bf8f359f293fdd655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

