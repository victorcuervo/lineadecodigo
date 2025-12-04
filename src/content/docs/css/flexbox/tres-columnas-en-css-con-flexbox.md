---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PDNCRZK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDsNTdBMToBex0o7o0CmkfMYJXobf7e452RttaYVFMqXgIhALnUnsFXVCOHk8GnqgtIp7XxBtwX%2BeHL%2FZMVPuclJZ9VKv8DCEEQABoMNjM3NDIzMTgzODA1IgxvoDHs3sAZwGew9aUq3ANbr8vfhtamdI0Q8LfAhgukEzf8VV5YzAtVL64n9z2wKu%2Ffot43wJLSuITK1AeIC%2Fkm0jAxZok%2FG%2Fwv8LAApQ%2FqzQNygxjSeIRL%2BczfHbiG1W4cz%2BCO%2FNupLDWx%2Bw4A2POAhbf%2BKOSUPs7R3aginp5HvgfqOTt0xz%2B%2F1eoMqGYG9xcRqCg%2FoH20YrJ2xK%2BAEjr1U2kM%2Ba61usIAHXuMH%2FXgfnBnIFpnZR1mFzclKvCVuiHBddI0q35wk0ED0kUF%2F4%2BYQcddl%2FFehw1iI9XuYqZ0u6hMfCnaWNrTmmF9gjt9efk9%2FzRSEUV64os1vBcnvQCcXDFUnMHPDVehFWnkZ7QJeyxe4zZYhwcKewDSwR%2BmmkC7%2BtjUQdFxZ9bpSmiAHhgwlZRCKw6V3eVPhGUbYs%2FoDs0bun6%2BR%2BwZtg%2FAVJJclW6tSqtTL1WbA1wvEp52Z0HZ19t%2BUUQlJ1%2BJrDi1GBPUKyDmWeLQpjFp%2FRxQsNE%2F5tZLbggYxKQxgVzC5DIBh03R6WgrqsajlO4N9ligcvk1yRRpl26QEFyB7x5ET6jZnNrPz147Ms8ZEsr60y%2BoMm9%2BAG6p6PloErvioGYpppTOgYxosMIu0kPdAzyLSKCI1EvdogKKFsfa8%2BlQZDCQhsXJBjqkAdrI%2BdRMnFo5Qyn%2B3mEEmuBWiCTaT1HxHhgj6jdZALc12n7gZnGs30HfMAO4fWtuSN4nKeD9dyJmQVC0xqglgsB5FlYZt%2FK0tVHWV3lNBRCGsgZGTl5AJvAa5rqScTuNGMx1ibPG3PV10wupVnoN13YBH8okxWtHVHF%2FKNrI9%2FUO6FcXRLPFWCU9QCs%2FuT5Qzcv%2FMZ1QtPN1vVu8gRjEJmlvpcqq&X-Amz-Signature=dbc09600400c309ec73476ef8a58a06630710549c78ccb51f45803bc1c7b5136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PDNCRZK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDsNTdBMToBex0o7o0CmkfMYJXobf7e452RttaYVFMqXgIhALnUnsFXVCOHk8GnqgtIp7XxBtwX%2BeHL%2FZMVPuclJZ9VKv8DCEEQABoMNjM3NDIzMTgzODA1IgxvoDHs3sAZwGew9aUq3ANbr8vfhtamdI0Q8LfAhgukEzf8VV5YzAtVL64n9z2wKu%2Ffot43wJLSuITK1AeIC%2Fkm0jAxZok%2FG%2Fwv8LAApQ%2FqzQNygxjSeIRL%2BczfHbiG1W4cz%2BCO%2FNupLDWx%2Bw4A2POAhbf%2BKOSUPs7R3aginp5HvgfqOTt0xz%2B%2F1eoMqGYG9xcRqCg%2FoH20YrJ2xK%2BAEjr1U2kM%2Ba61usIAHXuMH%2FXgfnBnIFpnZR1mFzclKvCVuiHBddI0q35wk0ED0kUF%2F4%2BYQcddl%2FFehw1iI9XuYqZ0u6hMfCnaWNrTmmF9gjt9efk9%2FzRSEUV64os1vBcnvQCcXDFUnMHPDVehFWnkZ7QJeyxe4zZYhwcKewDSwR%2BmmkC7%2BtjUQdFxZ9bpSmiAHhgwlZRCKw6V3eVPhGUbYs%2FoDs0bun6%2BR%2BwZtg%2FAVJJclW6tSqtTL1WbA1wvEp52Z0HZ19t%2BUUQlJ1%2BJrDi1GBPUKyDmWeLQpjFp%2FRxQsNE%2F5tZLbggYxKQxgVzC5DIBh03R6WgrqsajlO4N9ligcvk1yRRpl26QEFyB7x5ET6jZnNrPz147Ms8ZEsr60y%2BoMm9%2BAG6p6PloErvioGYpppTOgYxosMIu0kPdAzyLSKCI1EvdogKKFsfa8%2BlQZDCQhsXJBjqkAdrI%2BdRMnFo5Qyn%2B3mEEmuBWiCTaT1HxHhgj6jdZALc12n7gZnGs30HfMAO4fWtuSN4nKeD9dyJmQVC0xqglgsB5FlYZt%2FK0tVHWV3lNBRCGsgZGTl5AJvAa5rqScTuNGMx1ibPG3PV10wupVnoN13YBH8okxWtHVHF%2FKNrI9%2FUO6FcXRLPFWCU9QCs%2FuT5Qzcv%2FMZ1QtPN1vVu8gRjEJmlvpcqq&X-Amz-Signature=09d6a3109241e50f5adb862abd93af034be87bb1fefef792809c7de847b07de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

