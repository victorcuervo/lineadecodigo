---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PIUGJX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCHzxmsgTWr5QVyVX%2BU1YyElU8lnjyhyzY8RDSpy2HYmsCIQCrjhua91fLRbBgTwUH5JrMir7SbY2G6RcN%2B6N2tvEBKSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIML0usSW1kcmioGWIWKtwDJ2Fh2o%2BUO6k%2FOBrPfBa7Ft7maQpxTUY1QTkf%2FKNOmhNjgwFTQGjgc%2FdNUB9lTft6DsYcH5zQTybdGKidhtbUvAZtijtm4jcXTVxs4y2nDCndGouChyxyOw%2BxrXAxpr239DwQC%2BHjm34smwJKdmzoztV9KBPcPKcmc52WXQpvAMEKAtNrEnCeLoqx0zw2Jn3bQSoUHoApdu23DPgpjv%2B%2BH0J9cPjmlJD4UCVdG0T5DWmcfrrj0SrFf%2BjuZtUJE3LPU0W2sXrrzxJXJXy0BU4uNjj1tBypYrTZOAz0oB%2Fj2dD%2FzluP0zWBQAf5471EtIgVXnnG8LIAGmU63%2BgI1i9IEVIhEQaQdfr9Q35wmGS6%2F46tZVfO5yI%2BLIzgQF44VaZU20pROzKCk%2FYtJetMNOQ5ObT8xVdAm98kOPz%2Bix5pntdylbJv0Oq1UxV%2FqqBatFTS8qoIFDFoEKxQLkolTk0U1B0P2uMCXEUfFwLgzCHKDcy8FVW%2BhCzcO2GyFLwFIf86zHqpsgeuizVGyeBepTeKrZWunuKWhyYbeuWsR2bY65EGAx%2FXRBaSJh19j0nIWBns2PR9Ug8ki2%2BnOTfG3damSTO6CXvT%2BDI7ie1pB4%2Bx5Z5QQWGUYRab%2BEdWkY8wxb7GyQY6pgGtMeJNqLu3t0c%2FWfVqQFS%2FnlMmLhwsShJKju9uWTzhjVeqCyeWitLsGLZWdIdFTUWQh2T9P1JP8yFPbDxJyFP5cSEW1CphdLnSX6vHFvUIkfGdvyBGcHJErYSzSRdTSyXFn3pyViTPMP8DvPSAHQ02cyu5IMvuagl95JKgGDpt7bn%2FbWefJiC%2F2h7%2Fz8uXOgs%2FB2yhK785RqT0DSOyfzRUBudwuOVK&X-Amz-Signature=ea625eef41d2a850d61383bddf0e673f479f220f8ecc3b6db6163b503ae28efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PIUGJX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCHzxmsgTWr5QVyVX%2BU1YyElU8lnjyhyzY8RDSpy2HYmsCIQCrjhua91fLRbBgTwUH5JrMir7SbY2G6RcN%2B6N2tvEBKSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIML0usSW1kcmioGWIWKtwDJ2Fh2o%2BUO6k%2FOBrPfBa7Ft7maQpxTUY1QTkf%2FKNOmhNjgwFTQGjgc%2FdNUB9lTft6DsYcH5zQTybdGKidhtbUvAZtijtm4jcXTVxs4y2nDCndGouChyxyOw%2BxrXAxpr239DwQC%2BHjm34smwJKdmzoztV9KBPcPKcmc52WXQpvAMEKAtNrEnCeLoqx0zw2Jn3bQSoUHoApdu23DPgpjv%2B%2BH0J9cPjmlJD4UCVdG0T5DWmcfrrj0SrFf%2BjuZtUJE3LPU0W2sXrrzxJXJXy0BU4uNjj1tBypYrTZOAz0oB%2Fj2dD%2FzluP0zWBQAf5471EtIgVXnnG8LIAGmU63%2BgI1i9IEVIhEQaQdfr9Q35wmGS6%2F46tZVfO5yI%2BLIzgQF44VaZU20pROzKCk%2FYtJetMNOQ5ObT8xVdAm98kOPz%2Bix5pntdylbJv0Oq1UxV%2FqqBatFTS8qoIFDFoEKxQLkolTk0U1B0P2uMCXEUfFwLgzCHKDcy8FVW%2BhCzcO2GyFLwFIf86zHqpsgeuizVGyeBepTeKrZWunuKWhyYbeuWsR2bY65EGAx%2FXRBaSJh19j0nIWBns2PR9Ug8ki2%2BnOTfG3damSTO6CXvT%2BDI7ie1pB4%2Bx5Z5QQWGUYRab%2BEdWkY8wxb7GyQY6pgGtMeJNqLu3t0c%2FWfVqQFS%2FnlMmLhwsShJKju9uWTzhjVeqCyeWitLsGLZWdIdFTUWQh2T9P1JP8yFPbDxJyFP5cSEW1CphdLnSX6vHFvUIkfGdvyBGcHJErYSzSRdTSyXFn3pyViTPMP8DvPSAHQ02cyu5IMvuagl95JKgGDpt7bn%2FbWefJiC%2F2h7%2Fz8uXOgs%2FB2yhK785RqT0DSOyfzRUBudwuOVK&X-Amz-Signature=70d439b38eacfdd8b98760033d3b245ba060fd7fbc211042be1a47e3d16b2a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

