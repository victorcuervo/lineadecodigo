---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPXCHFXH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqJupWA%2F4u%2FV2crRr2k32O82LwSatRkpQzkw%2BGA7bCiAiEArnPfqGZcNLAvsD05oHMQHmoVIOq1faQqktkH2L%2Bbhh8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIQDfcl%2Fta9fWttQbSrcA1W0Qq6coUwuCk%2FKIMX3IzEM8T3xJTLZ3Id5g3KyVo1%2BJ0vTCtUttVqNHgbvRAPCawJ0S5%2BmFX8BKMfr%2F8yNbtt%2BQIkDXjUPZP%2BhuTln%2F8n2bXbu6btCGBJ%2Bs%2FeQ7JArYcCfFzaqesNPjfJ3mcxOt%2BbhAS3yYk1j1li3MkmuaLzQXD0NiPQK%2B4tm9bQz0Uue55Xms6JYcD6MTjU2JPVbw2nrJYJCQHTgLa7W8SHuKYvgK9pmD5JetBqeBExTxuYq2am2hRThIWr%2FKy7sLAxkbsMqprZ4p%2FtaOnUlmAqp6jXw1oaLJ4ngiaShS9Hwge60HmptJ1pI1EuYNRrGCtlRBKpXHem2%2FAlTPTbk0rqXc6tk3eMx2oJpV1c%2BycgpuAugVz1okyhrYgxUjFfsha967m8xFuxsXCQ%2BJv%2BW7%2BvPvCeMV27pNBtlAC0DRZ7nJ9NWlv2WtEY6yNDe5cu0dj6Y3K1JeV8a3ajn34dEzvsNgQtoLpK%2BCHkV8p%2BKhM%2BdzmY0XsoCEFgT0ygDjk5hyux0zmZ8Eu6sS1wZHJYvnexLRrNd%2BU9L5XUWJLfrECNBVw5ichfshUpWDmrwG1f7ScAd%2BlgQmyrlFMsWSjXQmc7GjMXTUFfKccRxJ8hM0IwhMLym0MkGOqUBqwEFYC4sXyqSy4ZAuwObs4uXTzOuIJuXLe2oVFF1tbCg%2FeKeLFSYAH9Gch4OAeI%2BGDZgoTENoi7ZFixhmZ%2FnRJctiIGb9D%2Fg%2BPirRC6YfzMN1Uc4zAKPhcz7shOamB5cJ5SzgiY9GGSQcJpTWmvg%2BVUfs20u2GzfIIMG4Ew6f1bonTlorOZ2o%2Fa%2FdjK6FB1G1wia55WtD02NKguQFz0Ypqgezk0m&X-Amz-Signature=26fc8495fd650061e0835d951e4f5508e64859e024811c5b52a3524297de1a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPXCHFXH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqJupWA%2F4u%2FV2crRr2k32O82LwSatRkpQzkw%2BGA7bCiAiEArnPfqGZcNLAvsD05oHMQHmoVIOq1faQqktkH2L%2Bbhh8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIQDfcl%2Fta9fWttQbSrcA1W0Qq6coUwuCk%2FKIMX3IzEM8T3xJTLZ3Id5g3KyVo1%2BJ0vTCtUttVqNHgbvRAPCawJ0S5%2BmFX8BKMfr%2F8yNbtt%2BQIkDXjUPZP%2BhuTln%2F8n2bXbu6btCGBJ%2Bs%2FeQ7JArYcCfFzaqesNPjfJ3mcxOt%2BbhAS3yYk1j1li3MkmuaLzQXD0NiPQK%2B4tm9bQz0Uue55Xms6JYcD6MTjU2JPVbw2nrJYJCQHTgLa7W8SHuKYvgK9pmD5JetBqeBExTxuYq2am2hRThIWr%2FKy7sLAxkbsMqprZ4p%2FtaOnUlmAqp6jXw1oaLJ4ngiaShS9Hwge60HmptJ1pI1EuYNRrGCtlRBKpXHem2%2FAlTPTbk0rqXc6tk3eMx2oJpV1c%2BycgpuAugVz1okyhrYgxUjFfsha967m8xFuxsXCQ%2BJv%2BW7%2BvPvCeMV27pNBtlAC0DRZ7nJ9NWlv2WtEY6yNDe5cu0dj6Y3K1JeV8a3ajn34dEzvsNgQtoLpK%2BCHkV8p%2BKhM%2BdzmY0XsoCEFgT0ygDjk5hyux0zmZ8Eu6sS1wZHJYvnexLRrNd%2BU9L5XUWJLfrECNBVw5ichfshUpWDmrwG1f7ScAd%2BlgQmyrlFMsWSjXQmc7GjMXTUFfKccRxJ8hM0IwhMLym0MkGOqUBqwEFYC4sXyqSy4ZAuwObs4uXTzOuIJuXLe2oVFF1tbCg%2FeKeLFSYAH9Gch4OAeI%2BGDZgoTENoi7ZFixhmZ%2FnRJctiIGb9D%2Fg%2BPirRC6YfzMN1Uc4zAKPhcz7shOamB5cJ5SzgiY9GGSQcJpTWmvg%2BVUfs20u2GzfIIMG4Ew6f1bonTlorOZ2o%2Fa%2FdjK6FB1G1wia55WtD02NKguQFz0Ypqgezk0m&X-Amz-Signature=982e5c93b71bf57c1bfa178de3db09263d25de985cd340ee99aaf61a60944c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

