---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW55UGYJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabQCYsw72pa7%2FrohbuBFMiN4be0v9mDCwYoFP63DVMwIhAPeLGji8hOSRw9%2FQ%2BzpQfJdlZg83q2ce1L%2FAzAiDeHgoKv8DCHoQABoMNjM3NDIzMTgzODA1Igw9Fdvw%2BTIdjvcVA9sq3AN7wF90t9U96i9zHuh7LTa%2BC5ntOBSOAm2ABJNaJEBXdMEJcnlsGK6ewQOJTXmw3S29qbVzvjGlLynJDwZ4Xepd1SkPICOH8EC8Q6zqo7qGKUB3GpVK57h8NWta6kA7rlj7Q7cMbqdWJ6u9TJrjGaGA9XmWjHJQNCeO%2FWrr0ToD1gv9L1KnZuB3oTMiCGH7s3amSYQ2TOYPsXSBYFsozmk1AX9QW%2B7gaW5HWSYd1Z9ADLAqyQXpkkKBPNicAjWR5MyZONSmYTgReeUwdSjxTVIzD8Te5dyzUj02h6M7KFm%2FAcl65s%2BMm5lnA5hRiysqVhz1WQpWpTUj9UKxHPZeQJIsLbdsd%2FsOa5Mms5OaY8M9SYmXW4YntTJE71TC6S9usuYlezxhzr81%2FX%2Fvfrvr8fSpYDV64Rq1lgkssYQ%2FgBuSeObelSrQPrKw1qLRkZRdJCtCqngAhxmVA82Ea0c7zcR0GQtw1%2FpcXIjcyRbN2fkKP3bxb1%2Fkk5Lb%2BYFcMoYshL%2B77kaFlR6%2FPGwD2gsjrup4vNDKN48cZ9oQ5VrSaxvfxWe89gNSuX1hgno83HUbEYeC1ZYJbPsNF2alHRSW6AuBr7K2HMBh9yRNcrugRw7Quie9kHUnrYMkzu2HejCvw9HJBjqkAVXwwTfjzt%2BUyOSSybDEbTJMa16OvPyr4%2BxaVs5S9R7UTnwpQfqcXtRgqeXLoc3fPbklCTmGtdg1p%2BeD7uZv7cSzDyNgyz%2B5Krs1tfijDDOchyhx9QE8C%2FW9POl%2BualgofPFtaBjRnBugL9vHQfbAISEckHQ%2BWu%2FrgfPe9w2fdPCywsIer1ni4B%2FkNpOiuB7Uvx9c509jdrEvpm7tleCvNFMB5N5&X-Amz-Signature=62754a8e30343207c212711ecd2c9cf73fa650fad9bea5832bc4abd8fc14a904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW55UGYJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabQCYsw72pa7%2FrohbuBFMiN4be0v9mDCwYoFP63DVMwIhAPeLGji8hOSRw9%2FQ%2BzpQfJdlZg83q2ce1L%2FAzAiDeHgoKv8DCHoQABoMNjM3NDIzMTgzODA1Igw9Fdvw%2BTIdjvcVA9sq3AN7wF90t9U96i9zHuh7LTa%2BC5ntOBSOAm2ABJNaJEBXdMEJcnlsGK6ewQOJTXmw3S29qbVzvjGlLynJDwZ4Xepd1SkPICOH8EC8Q6zqo7qGKUB3GpVK57h8NWta6kA7rlj7Q7cMbqdWJ6u9TJrjGaGA9XmWjHJQNCeO%2FWrr0ToD1gv9L1KnZuB3oTMiCGH7s3amSYQ2TOYPsXSBYFsozmk1AX9QW%2B7gaW5HWSYd1Z9ADLAqyQXpkkKBPNicAjWR5MyZONSmYTgReeUwdSjxTVIzD8Te5dyzUj02h6M7KFm%2FAcl65s%2BMm5lnA5hRiysqVhz1WQpWpTUj9UKxHPZeQJIsLbdsd%2FsOa5Mms5OaY8M9SYmXW4YntTJE71TC6S9usuYlezxhzr81%2FX%2Fvfrvr8fSpYDV64Rq1lgkssYQ%2FgBuSeObelSrQPrKw1qLRkZRdJCtCqngAhxmVA82Ea0c7zcR0GQtw1%2FpcXIjcyRbN2fkKP3bxb1%2Fkk5Lb%2BYFcMoYshL%2B77kaFlR6%2FPGwD2gsjrup4vNDKN48cZ9oQ5VrSaxvfxWe89gNSuX1hgno83HUbEYeC1ZYJbPsNF2alHRSW6AuBr7K2HMBh9yRNcrugRw7Quie9kHUnrYMkzu2HejCvw9HJBjqkAVXwwTfjzt%2BUyOSSybDEbTJMa16OvPyr4%2BxaVs5S9R7UTnwpQfqcXtRgqeXLoc3fPbklCTmGtdg1p%2BeD7uZv7cSzDyNgyz%2B5Krs1tfijDDOchyhx9QE8C%2FW9POl%2BualgofPFtaBjRnBugL9vHQfbAISEckHQ%2BWu%2FrgfPe9w2fdPCywsIer1ni4B%2FkNpOiuB7Uvx9c509jdrEvpm7tleCvNFMB5N5&X-Amz-Signature=9fe07ca6d6a0c05c4b5f3f0a8cdbe2b0c6d8a4f9d62f63caf3868e04a97db794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

