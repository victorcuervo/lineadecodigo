---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX4LQVQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVfnlSQAQyUsVvbqRLXhbCRL8GWeJ4ain1hA3vBS5tUAiEA5N64ktStfm4%2BGrLlPeb4XciycDosj3jklS2BsqU%2Fnvcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKmi6K0FKBFMz7hrHyrcAwcwMvRrqf0pzTkvoTR%2BTeBL91C0AxrLXhiadoKmi5F3%2BufsOPU0WyeLjhZQe8p%2FIXaCQoP%2Bl7OOcgCUXkjCS8xmtJTVcamD7w6Cw%2BREmxGkjFd31GOMhwQeBVooI1Rpyj6Te2auKwv6zEC5tWpD%2BvayPPypKp8G4%2FyY%2BdBQWlZC2QM9hk2%2FxG2d8iy2HWl1cshBdavjrKmGqJtVfAgcped7aN08AFtuupWhOxv1Qlwgc2GE9BbNTUF6HpQc%2FMsf5YXvof%2B4U2J62xSw14m26B7ajxGYpLX8njCglMRHHlGihdUx%2FRO7uEETwfjN%2Fw41QRBd%2FtI0AecwGQ5xFSAh3FrCW9dowWkGvbhvqDg8uh50Od8U%2FDnvOlgVGzgbM6aAZpxknygOuUriAKAoq2dK6jvv8N2yZxAVlznfo050uVvVzyT95wOTSuB2xiWWPLND%2FzPnaVMiMFYA4JDe%2B2OH0o9kwFAMxpjaTG8RGMqh%2BeuRymE3N7lv7jmTfHtfGps%2F3WnadMPZePQw8yDZnsRJggbsz9r3vUGlFxIZ2%2B4cqvxEkfoBVYazPWJzBVcnoI0DIQDD9wsTdwxGGUxz5tNrmDbsFN1ThXAqpYNuKuABvLU3oG68mrbEb3GpsO4bMKmvyckGOqUB%2F%2BKQcW81XwkVH9nRA9Yw4FwtaPC4iq1FarPTxoGBbCSUJDrjThn9%2BRKdQyPGYXddE4RyaoYHl1beoyRkPo97lVjy1kXET%2BFWbmkGVkjZN%2BFpGTScXLHBKO%2Bps8CfNQserM7nhaAz2a3EmZlVmftqXu%2BOegZ1y7UugmnxolPrWW535eBdfp5pT2poGHz6SU3%2BS8GDtRtj3QFC9Uhe1Ztq%2F3WbKnox&X-Amz-Signature=1de055a5091c0af2facbc3ac3cdd1b0491933c51a5bc6de203f4fcf934066a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX4LQVQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVfnlSQAQyUsVvbqRLXhbCRL8GWeJ4ain1hA3vBS5tUAiEA5N64ktStfm4%2BGrLlPeb4XciycDosj3jklS2BsqU%2Fnvcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKmi6K0FKBFMz7hrHyrcAwcwMvRrqf0pzTkvoTR%2BTeBL91C0AxrLXhiadoKmi5F3%2BufsOPU0WyeLjhZQe8p%2FIXaCQoP%2Bl7OOcgCUXkjCS8xmtJTVcamD7w6Cw%2BREmxGkjFd31GOMhwQeBVooI1Rpyj6Te2auKwv6zEC5tWpD%2BvayPPypKp8G4%2FyY%2BdBQWlZC2QM9hk2%2FxG2d8iy2HWl1cshBdavjrKmGqJtVfAgcped7aN08AFtuupWhOxv1Qlwgc2GE9BbNTUF6HpQc%2FMsf5YXvof%2B4U2J62xSw14m26B7ajxGYpLX8njCglMRHHlGihdUx%2FRO7uEETwfjN%2Fw41QRBd%2FtI0AecwGQ5xFSAh3FrCW9dowWkGvbhvqDg8uh50Od8U%2FDnvOlgVGzgbM6aAZpxknygOuUriAKAoq2dK6jvv8N2yZxAVlznfo050uVvVzyT95wOTSuB2xiWWPLND%2FzPnaVMiMFYA4JDe%2B2OH0o9kwFAMxpjaTG8RGMqh%2BeuRymE3N7lv7jmTfHtfGps%2F3WnadMPZePQw8yDZnsRJggbsz9r3vUGlFxIZ2%2B4cqvxEkfoBVYazPWJzBVcnoI0DIQDD9wsTdwxGGUxz5tNrmDbsFN1ThXAqpYNuKuABvLU3oG68mrbEb3GpsO4bMKmvyckGOqUB%2F%2BKQcW81XwkVH9nRA9Yw4FwtaPC4iq1FarPTxoGBbCSUJDrjThn9%2BRKdQyPGYXddE4RyaoYHl1beoyRkPo97lVjy1kXET%2BFWbmkGVkjZN%2BFpGTScXLHBKO%2Bps8CfNQserM7nhaAz2a3EmZlVmftqXu%2BOegZ1y7UugmnxolPrWW535eBdfp5pT2poGHz6SU3%2BS8GDtRtj3QFC9Uhe1Ztq%2F3WbKnox&X-Amz-Signature=9a68ea316781fd5d12f1f6e4ec60cb3a947c49e647b76ad7d005b347ef33d1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

