---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4Y47N5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYvyDWvqtmWNhdoQooowfTRYYEIlpswkd5L0rAZ63gNwIgOlAvK6cai%2BkoUtHpnmrKtTkK1uOPCF10az7kpNRipPEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr9zkM2TXpQgUDg4yrcAxvPE3Z7%2BSMlI0brUQGYGfk62ubdGOqKsfbLr2c%2Bo5Hd%2BeiOLdwqxtRgFbTDUtgQSsc440elrk0y5pEEG0Vc3MSDeYLjVWU1x3RYLVkOMc8Ud%2FMGlgIq8L%2F5ROulQ9LUyfgI9tj4kNVCD31WIx6SNaf%2BkZfhf3ECczOgOUEMB85x%2FtthGoDk0TMyop8mFf5oEA00CLmn%2BID%2FrXLedfzqzsVrbJg%2FDMMbiyYd%2F5EahlrBrz2wf9AEh2AKAylwtHEngJyQ7PD455GoYQGwEY6kw6ceViLAb91U6KJqZn0wJLbgvT%2FWSpHYB%2F%2Bxb%2F3ZPAqqK5XK9jRVfZJ7YH8gl6FpxPLWafaEmebNq6rUY8nhwetX%2BTgkMGz2VtqcWmTrdNM5XqkL5VJZFfvAaxvQ5rMk23%2BXvmfbZgTwvrSDV9v%2BspNnJXES3uFIg0M1hdlDt2QKb89KDe0Ra1JG%2FJipdiIPtC3siaiHDCvWv6Hxa4CnuYSKascI%2FX9kMu2dfzhNu5hZyG2T5bVR4W%2FHBvkt2A%2B5dZD1sz7TSNC9nea0dO1nfRMKg16lrJbJA1hsURcW1P7DTCGPvagOuDCzqZafVIe4qCU1lMZjWV9SsuZYIuyl7wCyZ3kFSKL1qiXEjRFTMK261skGOqUBTpDLd09hVk0N5MYFEyT6sbIJRgk8Cza1PP8DTkp%2FA1CuyAgbI429i2X0752sm7rU5OdI9eMPGBO9bahbV5CDPbBCErfGYI5jNr%2B48%2Bz%2BEDssQLb6JbEGMm%2FkpfZuGsIdpKhdVuUx7feB1JuOVY%2F6YJQvgEfhjnFNzGTRE8yfCSv142YmyC99rFllKJrBRKu2%2BtB4Tp0fbbaGSrNvjS1PoDTB6SEK&X-Amz-Signature=809b883f5eaf2aa20ec7f3a6160b345c165d3aa5a0a568a4368de2aade0e41c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4Y47N5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYvyDWvqtmWNhdoQooowfTRYYEIlpswkd5L0rAZ63gNwIgOlAvK6cai%2BkoUtHpnmrKtTkK1uOPCF10az7kpNRipPEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr9zkM2TXpQgUDg4yrcAxvPE3Z7%2BSMlI0brUQGYGfk62ubdGOqKsfbLr2c%2Bo5Hd%2BeiOLdwqxtRgFbTDUtgQSsc440elrk0y5pEEG0Vc3MSDeYLjVWU1x3RYLVkOMc8Ud%2FMGlgIq8L%2F5ROulQ9LUyfgI9tj4kNVCD31WIx6SNaf%2BkZfhf3ECczOgOUEMB85x%2FtthGoDk0TMyop8mFf5oEA00CLmn%2BID%2FrXLedfzqzsVrbJg%2FDMMbiyYd%2F5EahlrBrz2wf9AEh2AKAylwtHEngJyQ7PD455GoYQGwEY6kw6ceViLAb91U6KJqZn0wJLbgvT%2FWSpHYB%2F%2Bxb%2F3ZPAqqK5XK9jRVfZJ7YH8gl6FpxPLWafaEmebNq6rUY8nhwetX%2BTgkMGz2VtqcWmTrdNM5XqkL5VJZFfvAaxvQ5rMk23%2BXvmfbZgTwvrSDV9v%2BspNnJXES3uFIg0M1hdlDt2QKb89KDe0Ra1JG%2FJipdiIPtC3siaiHDCvWv6Hxa4CnuYSKascI%2FX9kMu2dfzhNu5hZyG2T5bVR4W%2FHBvkt2A%2B5dZD1sz7TSNC9nea0dO1nfRMKg16lrJbJA1hsURcW1P7DTCGPvagOuDCzqZafVIe4qCU1lMZjWV9SsuZYIuyl7wCyZ3kFSKL1qiXEjRFTMK261skGOqUBTpDLd09hVk0N5MYFEyT6sbIJRgk8Cza1PP8DTkp%2FA1CuyAgbI429i2X0752sm7rU5OdI9eMPGBO9bahbV5CDPbBCErfGYI5jNr%2B48%2Bz%2BEDssQLb6JbEGMm%2FkpfZuGsIdpKhdVuUx7feB1JuOVY%2F6YJQvgEfhjnFNzGTRE8yfCSv142YmyC99rFllKJrBRKu2%2BtB4Tp0fbbaGSrNvjS1PoDTB6SEK&X-Amz-Signature=54965b2f468e9c996601939f0246bfa8307930c037e64cf44e57e590f689e780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

