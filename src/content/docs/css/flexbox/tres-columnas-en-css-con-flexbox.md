---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFNBMYI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJhWUcF0aw93XsynsoN2RIUEWvgVzk36t9ZTR0l5OiiAiBLs5ApNmZb6mdETEtCRSkNLt8SWKgyy5We%2FYckQeso%2Bir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrlQuRfrNsSN0ONVvKtwD1Yd4obFiK9zD1uORxthm1hjK2nlqTF30XXHz8h%2By%2BxPFhY1TlCQxN2%2BdwP1wOt6WDBzNokAoMaJsQuC6x0BA2Qcw4HsPmNk70%2FLYbOy5UiB%2BDMZ8yYFYE8eWIka8LMscPJVz8vJLe%2F74T05RhjSyM3Hfyqpbk3lqbBUKMqK26GDNNvx7%2BYNfROZn2Te%2BZ8CEw9%2BOV5FX0Uhp3ZGYeN5SpH6QIfk2zY9ua45gO7r%2FAoNWm8KAMpTjsER%2B0x53zsc1BJhACF2fl0LZ2f52wUJsO4HkDU8bqMpRK3bRUJuNFkUijqlyRxUsyNzr%2FAhlq4LAQrUSrV788YbM6%2BW1h14ySlGBVyf6WyZkxaxIZ2KqwXzidFjMEJXavvPhqZaGBsp1OteKYrfgbSb0H8%2FI1ywgc0WXmShPi3Dvouah%2FZhbQViuETyZFruZXi2%2F48ehec62zdlBn0vpLTVdCSnGy3OyL4C1BwZrfjtcw6IXMCvaTuE0tOXk4AiVKrYMXGTp8qYxq%2BHZso92NR%2FpAtRpGMqVWNcvSh32z6LnSQto6WmzUCOeqpqtxybWazou8Zi2p293KrrQjqHz7uDmDSUKU1cx6YaO6k3iLKgSpVyaFogXBCPN9e8bdjFkY35Hj70wwKnJyQY6pgFv5h8TG9w%2Fu35lbWbUZ5MSsUvGBv%2BxebBVo7aSakB841v1N5UpD1eSgWCHGHTvMJr5bI1cA6LEWkzEWp%2FN6DuyIWhiRRkKZaPNtLfrfD%2FLm9rMuidatlujng7YYo6rxUaLW6tri88GJT80E2an94iQQBJjuVo8T5QR4DL4HMg%2BMf3g%2FGTdVFqKZBold039Vj%2FHR6FLmn1n%2F27ugwmE16LM4905wQ6b&X-Amz-Signature=220a2e3730e32689ac0c0e020b4da36251a840b8ce10332a0b4a45c0f60e5334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFNBMYI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJhWUcF0aw93XsynsoN2RIUEWvgVzk36t9ZTR0l5OiiAiBLs5ApNmZb6mdETEtCRSkNLt8SWKgyy5We%2FYckQeso%2Bir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrlQuRfrNsSN0ONVvKtwD1Yd4obFiK9zD1uORxthm1hjK2nlqTF30XXHz8h%2By%2BxPFhY1TlCQxN2%2BdwP1wOt6WDBzNokAoMaJsQuC6x0BA2Qcw4HsPmNk70%2FLYbOy5UiB%2BDMZ8yYFYE8eWIka8LMscPJVz8vJLe%2F74T05RhjSyM3Hfyqpbk3lqbBUKMqK26GDNNvx7%2BYNfROZn2Te%2BZ8CEw9%2BOV5FX0Uhp3ZGYeN5SpH6QIfk2zY9ua45gO7r%2FAoNWm8KAMpTjsER%2B0x53zsc1BJhACF2fl0LZ2f52wUJsO4HkDU8bqMpRK3bRUJuNFkUijqlyRxUsyNzr%2FAhlq4LAQrUSrV788YbM6%2BW1h14ySlGBVyf6WyZkxaxIZ2KqwXzidFjMEJXavvPhqZaGBsp1OteKYrfgbSb0H8%2FI1ywgc0WXmShPi3Dvouah%2FZhbQViuETyZFruZXi2%2F48ehec62zdlBn0vpLTVdCSnGy3OyL4C1BwZrfjtcw6IXMCvaTuE0tOXk4AiVKrYMXGTp8qYxq%2BHZso92NR%2FpAtRpGMqVWNcvSh32z6LnSQto6WmzUCOeqpqtxybWazou8Zi2p293KrrQjqHz7uDmDSUKU1cx6YaO6k3iLKgSpVyaFogXBCPN9e8bdjFkY35Hj70wwKnJyQY6pgFv5h8TG9w%2Fu35lbWbUZ5MSsUvGBv%2BxebBVo7aSakB841v1N5UpD1eSgWCHGHTvMJr5bI1cA6LEWkzEWp%2FN6DuyIWhiRRkKZaPNtLfrfD%2FLm9rMuidatlujng7YYo6rxUaLW6tri88GJT80E2an94iQQBJjuVo8T5QR4DL4HMg%2BMf3g%2FGTdVFqKZBold039Vj%2FHR6FLmn1n%2F27ugwmE16LM4905wQ6b&X-Amz-Signature=181e387010f6af09e0ad6b758f9652c615c757819cbdf2a76c58895b18745f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

