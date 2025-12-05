---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIBCN3XF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdc80PwmAwfT1CtEhNQkoW0CFF1k62C%2BQMCpqNxqaCYwIgIeTxpZISE1ZcRf%2FZ5%2FI2ZsmhToQknxofK0Q90uftvkUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP7wCVxF8CPxVw5FISrcA4fkA7fsVHG0HoO3LvWKtgWoVWN3Tp6%2FIfw5RFtV3PM4yA4hdA6uaK69LmyiDg58R7uc7Pj5qzMIbQEEkkqiP%2FH2nUsdxeMdiYpOIW8UVJtO78Tdtsvvlu5i52lujTwKLOqie269b4MGkxfXRG1nNjTmKO9ynC0%2BgnR560vkMR2hMPne64ZX13oWsGszpIg7nSetyMgbiM5ftK5R5fdGc1W6j%2B3G%2FWwJZ2RjQWuYH4Ko%2Fsbj8g6RmVmo50HlG0LraF9pJdrux9yxfZSPCVCKBjMci7JGD40ZsjVnEHD2%2FasrAWQEkTo4VreiKVLtdwRO5IDsCGAar1ungky4aRH%2FUjKc12vP9JUoGD3Y3yzTgddpoM5DZu1oiK2mpd494Eg2NDsIKJ%2BKRKH%2BOzG1ViPawmDC6TTFv2R5xkX7Qf932LXjzKina5swhogX5ilIqMjUfFkoDlcCDpeMlcYh0D8luKgxakS1oieIQ%2F8KOmqGHTTTOB0FjjHTRVfzszmrhHJEr9jXOIm%2Bn%2BIjzBauWEGgxmtsVuj2kwBgbfra7shbZ4TNG3XjIbTBY2TrPSBdfDgFuOjm81mP%2BfzyP7Xw1CEXJvG%2B%2FedpviQJ%2FvhftMRbi9YSCjEdPsbpUdO%2F4NjRMKDPyskGOqUBmxH1Ap9GhkIDILCTxtPNO7dX1AKU%2BTTFRebV4dSBLQkZtF5SgreORQFr%2Fin5s8ikWBBqsrUM9E042sIyTVD%2BKCepKIkXNJjCvX0AUnvakb6k1rGXAE%2FXUNFyfQcIPgA64EvBuZWwXVjBe%2BGxam0pQC8UBCJUnw4Ce94E8XxxHJxd7nGvfPPwHiyKYczX%2BXp4rF7fiOjp0VUDlstZMcoIJRpx22es&X-Amz-Signature=89b86c687846aa8b1d0429e8d46b999221bc44355f165add30cb437956ded7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIBCN3XF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdc80PwmAwfT1CtEhNQkoW0CFF1k62C%2BQMCpqNxqaCYwIgIeTxpZISE1ZcRf%2FZ5%2FI2ZsmhToQknxofK0Q90uftvkUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP7wCVxF8CPxVw5FISrcA4fkA7fsVHG0HoO3LvWKtgWoVWN3Tp6%2FIfw5RFtV3PM4yA4hdA6uaK69LmyiDg58R7uc7Pj5qzMIbQEEkkqiP%2FH2nUsdxeMdiYpOIW8UVJtO78Tdtsvvlu5i52lujTwKLOqie269b4MGkxfXRG1nNjTmKO9ynC0%2BgnR560vkMR2hMPne64ZX13oWsGszpIg7nSetyMgbiM5ftK5R5fdGc1W6j%2B3G%2FWwJZ2RjQWuYH4Ko%2Fsbj8g6RmVmo50HlG0LraF9pJdrux9yxfZSPCVCKBjMci7JGD40ZsjVnEHD2%2FasrAWQEkTo4VreiKVLtdwRO5IDsCGAar1ungky4aRH%2FUjKc12vP9JUoGD3Y3yzTgddpoM5DZu1oiK2mpd494Eg2NDsIKJ%2BKRKH%2BOzG1ViPawmDC6TTFv2R5xkX7Qf932LXjzKina5swhogX5ilIqMjUfFkoDlcCDpeMlcYh0D8luKgxakS1oieIQ%2F8KOmqGHTTTOB0FjjHTRVfzszmrhHJEr9jXOIm%2Bn%2BIjzBauWEGgxmtsVuj2kwBgbfra7shbZ4TNG3XjIbTBY2TrPSBdfDgFuOjm81mP%2BfzyP7Xw1CEXJvG%2B%2FedpviQJ%2FvhftMRbi9YSCjEdPsbpUdO%2F4NjRMKDPyskGOqUBmxH1Ap9GhkIDILCTxtPNO7dX1AKU%2BTTFRebV4dSBLQkZtF5SgreORQFr%2Fin5s8ikWBBqsrUM9E042sIyTVD%2BKCepKIkXNJjCvX0AUnvakb6k1rGXAE%2FXUNFyfQcIPgA64EvBuZWwXVjBe%2BGxam0pQC8UBCJUnw4Ce94E8XxxHJxd7nGvfPPwHiyKYczX%2BXp4rF7fiOjp0VUDlstZMcoIJRpx22es&X-Amz-Signature=0340d828a54bcd4dff79c9a974891ec1d7258e15b31798f1829df91719c71bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

