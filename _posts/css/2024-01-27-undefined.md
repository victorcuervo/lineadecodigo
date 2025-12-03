---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6INYVG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIC0yj4Z85d%2FQqdYFPWZibUW4BShhmGPPiteIb4yabCtEAiBhMjoF0%2BZ%2F%2BJr63hf7WjcVM8Rbmi5L5Lhp7UMbZlq6wyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM7LT1%2Fvkf%2BwobTsPFKtwD1Alq4b%2BHR7MHC%2FlwGp1khQltgVFVLF06VlrCNqIUFqupKaaoNaoSRo36ncYZBXEIW2JBTSzEeg0HUwyVpx%2BkkzGu5FxbQ1b%2BQTTlj60wuRPO9hBfVOY3N23W2EUK8heI4tyROMo43SfAuJGnGNff3v6D0%2FVmY%2Bm2r7C%2FmHl3WigtiI9VVAq5q86X1BixaCHpHLkNAS30xupDFTXJK9IbNT0Flc4DyoOSyU48nMMGd6I4d9l6Fwb7pHeDzlVQcvFaw8Z1675yM83Y0sKICIKqH0Ttt3i5R72Af2MmIVnvSt8%2BQYE3sjCDUyhxY1z3vt7U%2FchA%2FY5o2frwmfukl0YhLJI0AI0nUcEKBGm39c%2F%2FAzORCzhLwzF6q5UtjrJkPTVGeIdk77OPB12cCGXHxpQ45syn7JxnelEl1VCZpyZsz61ySJFxOU3VbJ9R7cUS7gaYjE30Q05QD3hwoQBkHIj4xopoy3D5fXQ6bCVfV4vZpqDrXaSCQkJ16Z%2BUvfyY0W4Z1abp7UCvOkBYW1PNq9XdXc%2F1l3m1yXaaEBOyS9nLC0oy%2B25K9yhe9xw2EK2x7LreYN%2BeUmx42w2aAQaLg%2BWOUqZUhVbUNc0KFw2botYlcfrK7drJae1gZBjPUiEw4eS9yQY6pgFoSbIA54bDUlNXUy%2BBvZasropauaGkVhItI5aSb8ogl79b4pHWoGYJ8%2FhItTx4Gt6dcBQ8vow2N53KEgNwyRYm5L1NQKTZY%2Bq%2FDyXhJt0GcslypRZv2DYxtJ1uV%2BhFmJ%2BE8W5DrmE6IpBRCCsvX93NcTqJdGJ1xRrVQWugOajg9QpdlbsYy08sl8P1rZnNwYGBcX4Mrh6CYKUiBtN0jf0LEwh7TqiO&X-Amz-Signature=4750cfe36947bdda10a66bf67fde251faba01baa5332c45290445563eda8bf8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6INYVG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIC0yj4Z85d%2FQqdYFPWZibUW4BShhmGPPiteIb4yabCtEAiBhMjoF0%2BZ%2F%2BJr63hf7WjcVM8Rbmi5L5Lhp7UMbZlq6wyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM7LT1%2Fvkf%2BwobTsPFKtwD1Alq4b%2BHR7MHC%2FlwGp1khQltgVFVLF06VlrCNqIUFqupKaaoNaoSRo36ncYZBXEIW2JBTSzEeg0HUwyVpx%2BkkzGu5FxbQ1b%2BQTTlj60wuRPO9hBfVOY3N23W2EUK8heI4tyROMo43SfAuJGnGNff3v6D0%2FVmY%2Bm2r7C%2FmHl3WigtiI9VVAq5q86X1BixaCHpHLkNAS30xupDFTXJK9IbNT0Flc4DyoOSyU48nMMGd6I4d9l6Fwb7pHeDzlVQcvFaw8Z1675yM83Y0sKICIKqH0Ttt3i5R72Af2MmIVnvSt8%2BQYE3sjCDUyhxY1z3vt7U%2FchA%2FY5o2frwmfukl0YhLJI0AI0nUcEKBGm39c%2F%2FAzORCzhLwzF6q5UtjrJkPTVGeIdk77OPB12cCGXHxpQ45syn7JxnelEl1VCZpyZsz61ySJFxOU3VbJ9R7cUS7gaYjE30Q05QD3hwoQBkHIj4xopoy3D5fXQ6bCVfV4vZpqDrXaSCQkJ16Z%2BUvfyY0W4Z1abp7UCvOkBYW1PNq9XdXc%2F1l3m1yXaaEBOyS9nLC0oy%2B25K9yhe9xw2EK2x7LreYN%2BeUmx42w2aAQaLg%2BWOUqZUhVbUNc0KFw2botYlcfrK7drJae1gZBjPUiEw4eS9yQY6pgFoSbIA54bDUlNXUy%2BBvZasropauaGkVhItI5aSb8ogl79b4pHWoGYJ8%2FhItTx4Gt6dcBQ8vow2N53KEgNwyRYm5L1NQKTZY%2Bq%2FDyXhJt0GcslypRZv2DYxtJ1uV%2BhFmJ%2BE8W5DrmE6IpBRCCsvX93NcTqJdGJ1xRrVQWugOajg9QpdlbsYy08sl8P1rZnNwYGBcX4Mrh6CYKUiBtN0jf0LEwh7TqiO&X-Amz-Signature=c7d7d3acecb7c3c5689c0fe1840f5a5c5c69083075ec601893b222b1436ec30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

