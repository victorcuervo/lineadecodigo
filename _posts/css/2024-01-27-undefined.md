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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DYMN42%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGLnGiV12rQjFtY8PmyjpPuZIxOqVkEyuvqbGJ8Bv7EgIgGb1%2FmarOGI6GcYcGntXPjgPJHMQBMsDCH9kcyqq%2FLiIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOJG%2Bp2B%2B73gT7Qk1SrcAyzf1ftApjCwhwkbFE21PtCiPAg%2FLeQ9HYEyWwNAcPAFTBoKDMuAv47TUZPQpNMgnklKntWTXraKwcrkznumJIFixZtWgWvnG74DGymYU6WuwWHzQQGN7KhLRfFzJHTvZxLIRZcYdpWru5x2uKU%2BccUA3VGspO50WLtlTq4WweJ157MsD%2F8FSAsYUzEcR%2BYfz5z7GLVk%2F6x8GJ8WHfferMxtXGLOHBa2MobAS5iQVL4AA%2Fe6nWK8olQE8zRnTyMkn7z7cw34ZTbFFJH5Y%2BX0JWAuVQTtPyKiesLldEkhZvBGNuJwI5MNQXRr9q2wKWkj4Q1JTd%2BDkFfMQJkr7KaLVeEIFF3BOjmFzo960%2BfAE6TEcYsyiNxhjw9SJ8Nr4sOfjTFaDLCzPddgfwepnRjQfJ1RYoJZ23WIYvWZmZNjmL%2FfiS%2BZ%2BkYID%2BAtJjclNNTCUuHWMlqSzL05cf3jFhL%2BptZ0TJTuA97HWbunSmrmwiD3f0lKXTnTiLvu37U89TzuZM3kzLWM62B2A%2F8uVOYCC7H5PojVrlFLIB7wkx0yiPjT%2Fe1he4OIz1SXPVX3MrOWhLIiUpvm03zR5a50HUUJCqf4LOglQNE2Z6RXzf4%2FEY619dh%2BEL4YyMgsfdw0MN7pwMkGOqUB0oFrjtbPoTATakgzvZGwoiS3tw7d3vOKdUIJAw548aMC0FTZTiWI4VMI4PeTa7iw4OzBmTbZgL7M3Fr5yKm%2FBhrr9uRpNHKZh%2FIbI6jLkdJG%2FNYK0RUmoar55hGs1vZwo3p6H4LVKIdy4Bl0nxiL1U4WMtEgM08H1Euu0HYU40TLSa5SRKNRuDehaOxsizWhsVAzUaX1IAFQs2GJ8%2B6bAD%2FafqUZ&X-Amz-Signature=ff78e4ce3470040231e10e340065afa7069710d0f41b3930080d744052e238d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DYMN42%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGLnGiV12rQjFtY8PmyjpPuZIxOqVkEyuvqbGJ8Bv7EgIgGb1%2FmarOGI6GcYcGntXPjgPJHMQBMsDCH9kcyqq%2FLiIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOJG%2Bp2B%2B73gT7Qk1SrcAyzf1ftApjCwhwkbFE21PtCiPAg%2FLeQ9HYEyWwNAcPAFTBoKDMuAv47TUZPQpNMgnklKntWTXraKwcrkznumJIFixZtWgWvnG74DGymYU6WuwWHzQQGN7KhLRfFzJHTvZxLIRZcYdpWru5x2uKU%2BccUA3VGspO50WLtlTq4WweJ157MsD%2F8FSAsYUzEcR%2BYfz5z7GLVk%2F6x8GJ8WHfferMxtXGLOHBa2MobAS5iQVL4AA%2Fe6nWK8olQE8zRnTyMkn7z7cw34ZTbFFJH5Y%2BX0JWAuVQTtPyKiesLldEkhZvBGNuJwI5MNQXRr9q2wKWkj4Q1JTd%2BDkFfMQJkr7KaLVeEIFF3BOjmFzo960%2BfAE6TEcYsyiNxhjw9SJ8Nr4sOfjTFaDLCzPddgfwepnRjQfJ1RYoJZ23WIYvWZmZNjmL%2FfiS%2BZ%2BkYID%2BAtJjclNNTCUuHWMlqSzL05cf3jFhL%2BptZ0TJTuA97HWbunSmrmwiD3f0lKXTnTiLvu37U89TzuZM3kzLWM62B2A%2F8uVOYCC7H5PojVrlFLIB7wkx0yiPjT%2Fe1he4OIz1SXPVX3MrOWhLIiUpvm03zR5a50HUUJCqf4LOglQNE2Z6RXzf4%2FEY619dh%2BEL4YyMgsfdw0MN7pwMkGOqUB0oFrjtbPoTATakgzvZGwoiS3tw7d3vOKdUIJAw548aMC0FTZTiWI4VMI4PeTa7iw4OzBmTbZgL7M3Fr5yKm%2FBhrr9uRpNHKZh%2FIbI6jLkdJG%2FNYK0RUmoar55hGs1vZwo3p6H4LVKIdy4Bl0nxiL1U4WMtEgM08H1Euu0HYU40TLSa5SRKNRuDehaOxsizWhsVAzUaX1IAFQs2GJ8%2B6bAD%2FafqUZ&X-Amz-Signature=f7feb53e3534678959f6840c4ed02954e07d8d82b5d8f710d3991a6d778d189b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

