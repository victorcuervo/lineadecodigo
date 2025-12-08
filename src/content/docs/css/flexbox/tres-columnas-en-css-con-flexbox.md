---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIYYSZI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI6K1z3FLFes3OpNlMBvB%2BGnkLvHhR%2B1glYc8cfGhWKwIgaPjQ%2B1S1UMYDHx9jJ2PiFR0oPEYnmoU2DrPDUJEDMEcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtdSyEu7Fe60Y%2BBnyrcA7cOIciGJ283PnGzQqKVpuxFkK%2BP24V62HBALtiLpIynrXE4GJa6W4Wwu2KgXQLFpVjLsED6hpKLPbCzVAwAu%2BJ9lvX76QE%2FAQKuG1L%2BYCtBMZzcMCa%2By37OBbWFBgNs9nzfN1WDw5uCSZePOINygDDYpkFLIvj2n0fCTqdt7PMlRycdZUHQV8xll6KF41mO%2Fw%2BSb5njYZeTKy8zvfxM7UBmkyl4KNXk7zK4N5f96VTpAprnyDsNnpb3Zxbb%2BICQD9Dirh9DX4j623ygBrrBWNL6LqUlmzD9XmZv0xumuRQ%2BClcYlKzw4tdBrxTktGQKKBWKGvm9Zby6jPGIZFFPx65mjsQNRC6aVWthQVo3Wz66UGenzZ4%2Bdtq%2Bep1QngENPanQp5WBR1zDz5tw0qcn4SOdM1SM1v6Bijv7VpzmknUx2BDv5IJYSdY2yw7H87RKkY%2BAWD1SnTiy%2FgRpGEJ%2B7L8uJ8%2BHH2EbijkWQcexrNp3t%2F96Wzxxv4QNg62lJh2zhUbrSziD6nMOayNTzl1Rr9xKJ5AQ7J7LZXaKqa1eOKm1Ss2JSQJak8S2kK5m8g5MiV0OvG08KbJqH1hjGW4s7SL9ZopP%2FxZrUnn3r%2Fbt8mUrtzrbLgU1tDQJK0dbMPD02skGOqUBk0T1p4sytMl3xIoxvBRcL8u2YJ4UnFD42FSKeDuFDXmIkFHANcvIpasotC4CSaoQBkLNHwCjVHG9rbTSI7cbI9p0LnBqlw7M168jHuI2oFk7tTJhOx82DUM1b%2B9ZrMt8RWr8BtKrEUlQ5E1rIDZZ0TYxlECPYoigfY%2FMp4cdDnnLALK8kNu0m8ii%2F3P3UKALr%2BZ4jil04F7n2SJBH17n9nlLKnjC&X-Amz-Signature=fcf5a0be064d45ac042e0f85e53ad1918ed953d3118888f6ab2c5369165e501f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIYYSZI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI6K1z3FLFes3OpNlMBvB%2BGnkLvHhR%2B1glYc8cfGhWKwIgaPjQ%2B1S1UMYDHx9jJ2PiFR0oPEYnmoU2DrPDUJEDMEcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtdSyEu7Fe60Y%2BBnyrcA7cOIciGJ283PnGzQqKVpuxFkK%2BP24V62HBALtiLpIynrXE4GJa6W4Wwu2KgXQLFpVjLsED6hpKLPbCzVAwAu%2BJ9lvX76QE%2FAQKuG1L%2BYCtBMZzcMCa%2By37OBbWFBgNs9nzfN1WDw5uCSZePOINygDDYpkFLIvj2n0fCTqdt7PMlRycdZUHQV8xll6KF41mO%2Fw%2BSb5njYZeTKy8zvfxM7UBmkyl4KNXk7zK4N5f96VTpAprnyDsNnpb3Zxbb%2BICQD9Dirh9DX4j623ygBrrBWNL6LqUlmzD9XmZv0xumuRQ%2BClcYlKzw4tdBrxTktGQKKBWKGvm9Zby6jPGIZFFPx65mjsQNRC6aVWthQVo3Wz66UGenzZ4%2Bdtq%2Bep1QngENPanQp5WBR1zDz5tw0qcn4SOdM1SM1v6Bijv7VpzmknUx2BDv5IJYSdY2yw7H87RKkY%2BAWD1SnTiy%2FgRpGEJ%2B7L8uJ8%2BHH2EbijkWQcexrNp3t%2F96Wzxxv4QNg62lJh2zhUbrSziD6nMOayNTzl1Rr9xKJ5AQ7J7LZXaKqa1eOKm1Ss2JSQJak8S2kK5m8g5MiV0OvG08KbJqH1hjGW4s7SL9ZopP%2FxZrUnn3r%2Fbt8mUrtzrbLgU1tDQJK0dbMPD02skGOqUBk0T1p4sytMl3xIoxvBRcL8u2YJ4UnFD42FSKeDuFDXmIkFHANcvIpasotC4CSaoQBkLNHwCjVHG9rbTSI7cbI9p0LnBqlw7M168jHuI2oFk7tTJhOx82DUM1b%2B9ZrMt8RWr8BtKrEUlQ5E1rIDZZ0TYxlECPYoigfY%2FMp4cdDnnLALK8kNu0m8ii%2F3P3UKALr%2BZ4jil04F7n2SJBH17n9nlLKnjC&X-Amz-Signature=b650d980527cbd5b2a2b1286a5845a89f5b0503f73b55721f64ef93980b89c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

