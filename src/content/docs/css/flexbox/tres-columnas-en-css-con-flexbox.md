---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637S2IEFO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVfzrUj97ZgFfQSdFpm89ErWxgTdSuyZv9GT3WTN%2BvQIgO5i9aSAAmE%2FvXJdqqvpnqNGWi%2BFIirNvPSTDuzPOL%2F4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq5mNVU29SVro3U0ircA1nekMbS3d4biaSCTPOIIgfwqx7Q1NXfTcJ%2F09zJOdaO1fhKqnY8XYfi8O11VF28imrWb4QkvYF2DFSlt8oUYZWOuEc%2F%2Bh1EPyc%2BhatuhPPskm%2BHjShafrGcthu9WstATowdBoqF6ydahd8PKtK75ToxJzDrcQt4ksj2vuXhZhE51vg0lhAfhNk2ZT4Kg7L02HRT5EfuSdm8gYnKLqbwX%2Bt%2FQ4EoV9OUoMirBkyZXTZp%2BLr486%2F9rP4KfeWoGaERXe7TIG7j%2F686tBUU6gShYLCfxAA%2FYyShClQ75WqiDediwY5frG%2Fc21GW2VNVY0Ct7ArvMWsaIcmP9pVW4U7RL1bWEIj2NillP%2B3u5VEjhWm8bzo16LA4PRC5FvZBg3XECGZB6L6EU%2F7B3hjI3iUZtVBRnyXD%2F7KcnlCAN6yIacGLgS6Ha8mpj8v9GOGbHnp8LVyLknIDPOdiqXPNQOuIM2rquUmYSQjrS8zQ4wl4dSprAf%2Fr4r45EQKMRuCSPba5VCqLy%2BW7OAbCS2zpM2zb96xE7o%2BUVE%2FOB%2Bh0GlNeRCCnrd8MrCoGT3gMy7BnpygqtLDla6ick5CJICccwoUJDklwjiVqmiATuLt%2F0P8jNMYbgc%2BKXhoaDZ7eLm%2BVMKmZ1MkGOqUBvXAoO9XAUEkZIVFRqsliOZJUn3DeZ5o%2Bs%2BEFtkpVfwauaVyY7YZB6rNJB%2Bhh3ZyhTmGFDaCUmi97jCDsKByH7gWvfNS3hI1GLgvkSBcegxw4f3OUwttB6knzFKfwnWc%2B4gfMf%2BtDt9K75rhQrekVxWNHhjMhifrLPRO%2BKoo9ISfspFaylJ5QmKWADeZAu6LwLoD4BxGu0N4Hfw85mDGojfo%2Bm6EX&X-Amz-Signature=8a2f95ddd8534ab8fce97da27d7fd8396feb32c07337a8bf19ff8099cc22d1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637S2IEFO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVfzrUj97ZgFfQSdFpm89ErWxgTdSuyZv9GT3WTN%2BvQIgO5i9aSAAmE%2FvXJdqqvpnqNGWi%2BFIirNvPSTDuzPOL%2F4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq5mNVU29SVro3U0ircA1nekMbS3d4biaSCTPOIIgfwqx7Q1NXfTcJ%2F09zJOdaO1fhKqnY8XYfi8O11VF28imrWb4QkvYF2DFSlt8oUYZWOuEc%2F%2Bh1EPyc%2BhatuhPPskm%2BHjShafrGcthu9WstATowdBoqF6ydahd8PKtK75ToxJzDrcQt4ksj2vuXhZhE51vg0lhAfhNk2ZT4Kg7L02HRT5EfuSdm8gYnKLqbwX%2Bt%2FQ4EoV9OUoMirBkyZXTZp%2BLr486%2F9rP4KfeWoGaERXe7TIG7j%2F686tBUU6gShYLCfxAA%2FYyShClQ75WqiDediwY5frG%2Fc21GW2VNVY0Ct7ArvMWsaIcmP9pVW4U7RL1bWEIj2NillP%2B3u5VEjhWm8bzo16LA4PRC5FvZBg3XECGZB6L6EU%2F7B3hjI3iUZtVBRnyXD%2F7KcnlCAN6yIacGLgS6Ha8mpj8v9GOGbHnp8LVyLknIDPOdiqXPNQOuIM2rquUmYSQjrS8zQ4wl4dSprAf%2Fr4r45EQKMRuCSPba5VCqLy%2BW7OAbCS2zpM2zb96xE7o%2BUVE%2FOB%2Bh0GlNeRCCnrd8MrCoGT3gMy7BnpygqtLDla6ick5CJICccwoUJDklwjiVqmiATuLt%2F0P8jNMYbgc%2BKXhoaDZ7eLm%2BVMKmZ1MkGOqUBvXAoO9XAUEkZIVFRqsliOZJUn3DeZ5o%2Bs%2BEFtkpVfwauaVyY7YZB6rNJB%2Bhh3ZyhTmGFDaCUmi97jCDsKByH7gWvfNS3hI1GLgvkSBcegxw4f3OUwttB6knzFKfwnWc%2B4gfMf%2BtDt9K75rhQrekVxWNHhjMhifrLPRO%2BKoo9ISfspFaylJ5QmKWADeZAu6LwLoD4BxGu0N4Hfw85mDGojfo%2Bm6EX&X-Amz-Signature=a86f6ea60c980dc7779755597b84e8bccf0529e03b1896f71ab122dfa1194592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

