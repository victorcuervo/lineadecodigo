---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5OGMKC7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYZK2xOC1m7Zp7b%2FEbKGA8duJdZ2y%2Bf93KE8jLjEhu6AiBJU2xRKO5wFpDVLB3GigrATM3NUfIYWoLZdGKtVgmDOCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMy1grubg2WrwmpjxSKtwDjdMNkoyEbCk%2FbkKI7pbC7WXWNa8jhYZyxFaIN8sTiBMh3BnuMk%2BacieMUuHDT2tW6Gn8f%2BnaGFhdFqIky4%2FmkC%2Bg7EBCJcG3INSj5PByVM1crCxHj%2BXUmcuysTOm6eErIeGPBeIuq0yrEr5uK0tLGm3FbVCNe41IwnewXVwoHMQWXaNrUzMSuutNToFlJIW3i2jqvHcroDr0%2BqdgzRuyT41P337LhJg4244BYAinoVq8dT%2BQoMqEOr%2FDfN5oh26eJMmM0mHi%2FemUlAzTp3RCTIo7yYO1wVVyxxrSRpmyxjZRNWNIzwqytDUO5UEz2QMRoHC%2FUJSfzd93NsyPrq6V6hmJ2h0F3zaHjdgGQhUuVc4RiERLZblcyjunSxIoT%2F4mnn0sZ11spF3303AwgjgqVSztVFUmDZG%2Bl6Sh84WwcEEk0T2LlczRBewoLW6EbUW%2FscRs%2BQ5uY2ol2iE%2Bz6xeiod9j7B8ib7%2Bt3IAXaXBaIKfIpJ8zRoGegj%2FbhVAu9Wfl4dh5yOR5q47TSRGaRjSE%2FSdZMboFwXid1SfEfWNuSdJEG82CeJbt04yPD3XsfdaMg0CYq9%2BNVKIE8%2FooJYENf6zclabd6fwXokFhjcXrWF6KE3d5JSQ1MwFd9kw5onQyQY6pgHijPfedrghFSp%2FzQmsLoxPMO0SV9UTy%2FR8JDnFa2Ux09ORdbugiliO9OYilt42uAdfZ%2BBGmn3pg35vjQWjHFWu%2BW52vejz7fMCFJI3X3Sv3tp6Y0msbQdIV9PEt6YrtX4Dn5KIclEsLRbJBAc93d%2Flkf9WnOrolVRFNspDjZL82eYhSeJqQA%2BaGJxgCcVEj%2Baq4OLjltriKFdF9wUz009T%2BXzzKUMO&X-Amz-Signature=77e158370bf4fde2063963081b9756869a616c7bd0dd5a0d9f6676c93f89f733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5OGMKC7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYZK2xOC1m7Zp7b%2FEbKGA8duJdZ2y%2Bf93KE8jLjEhu6AiBJU2xRKO5wFpDVLB3GigrATM3NUfIYWoLZdGKtVgmDOCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMy1grubg2WrwmpjxSKtwDjdMNkoyEbCk%2FbkKI7pbC7WXWNa8jhYZyxFaIN8sTiBMh3BnuMk%2BacieMUuHDT2tW6Gn8f%2BnaGFhdFqIky4%2FmkC%2Bg7EBCJcG3INSj5PByVM1crCxHj%2BXUmcuysTOm6eErIeGPBeIuq0yrEr5uK0tLGm3FbVCNe41IwnewXVwoHMQWXaNrUzMSuutNToFlJIW3i2jqvHcroDr0%2BqdgzRuyT41P337LhJg4244BYAinoVq8dT%2BQoMqEOr%2FDfN5oh26eJMmM0mHi%2FemUlAzTp3RCTIo7yYO1wVVyxxrSRpmyxjZRNWNIzwqytDUO5UEz2QMRoHC%2FUJSfzd93NsyPrq6V6hmJ2h0F3zaHjdgGQhUuVc4RiERLZblcyjunSxIoT%2F4mnn0sZ11spF3303AwgjgqVSztVFUmDZG%2Bl6Sh84WwcEEk0T2LlczRBewoLW6EbUW%2FscRs%2BQ5uY2ol2iE%2Bz6xeiod9j7B8ib7%2Bt3IAXaXBaIKfIpJ8zRoGegj%2FbhVAu9Wfl4dh5yOR5q47TSRGaRjSE%2FSdZMboFwXid1SfEfWNuSdJEG82CeJbt04yPD3XsfdaMg0CYq9%2BNVKIE8%2FooJYENf6zclabd6fwXokFhjcXrWF6KE3d5JSQ1MwFd9kw5onQyQY6pgHijPfedrghFSp%2FzQmsLoxPMO0SV9UTy%2FR8JDnFa2Ux09ORdbugiliO9OYilt42uAdfZ%2BBGmn3pg35vjQWjHFWu%2BW52vejz7fMCFJI3X3Sv3tp6Y0msbQdIV9PEt6YrtX4Dn5KIclEsLRbJBAc93d%2Flkf9WnOrolVRFNspDjZL82eYhSeJqQA%2BaGJxgCcVEj%2Baq4OLjltriKFdF9wUz009T%2BXzzKUMO&X-Amz-Signature=423ec09426998418887e3b8619188386e480997914f907d9c3dc32371c830d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

