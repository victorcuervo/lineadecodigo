---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJIPWFG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F%2BajAdKltgI15%2FSEoA6BbB7pMnIJokKBdw5OOwarXyAiEArCPBg4iIGbNkNrM9N4Vu6rdMn0l2a4WtrsxAgylMSD8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDG6j3IzBoOAJCaYlOircA7%2FKctNrb5uPMz%2FxbE0vPKWQgSNj7BmHHQqWFUS%2FVCvSzS1iZm3%2FInLiSki1CIWtmaP9XLiPa0iFrzcwSLt%2FB%2BYdauKR%2FTs9B7%2B%2BYH7hLU6FAs1QjOA2TL1pQRwKcuLSI4ekEqVvjoixPMLTm5KeRUK7gf6fsKWdjti3wbngRaRgFzv7c5ZQPWhwpdK4EVuyy4CfCIGMt3ZdRewqMKv1XS%2BBZJ%2BsQtbGQ74xOELRSPw4tYHwETL2f9ZgEHU8ZxWSQVWeYSbs4mBclhFPQWCnTxdPMv7nWTqBn0n70LtR%2Bkbdu0AIPH%2FAOhmYQyWGPfpvo7vv%2BLaqYxPXkEhbSpoGHQiUFc2xG03vFGwf1BbLgMpz2wiSjTj1xAgMsxde67ctG6xp%2FlTQL327CZDIZH26ctA8Ey7MBX7Kd3505lQXFyaOQbY2EEDMysPQrhLnNahkS9HoHDe830FcxuS3DlRO7vO%2Fu6dazJyNiZQZPz3vT4be%2F3Pg%2BWjKZhb0kNAoztqvNJ0cy9Gmdyp4ZOG3bSUv%2B0w6vqQ5sMhoztWpkYFZH9u3HCMoekutZkkrkJkl4iJxvj0R00opH5sgERxh0svLdCTCDy9xKodiyMoIL%2BoxbiaBnw5YEKNyjFuAAhLsMO%2BJ0MkGOqUBay4hCgoktxYiGRhNs8ejMMY6CczqnHx0r8%2FU7ZMNJ%2FfDWyRbmNma2bVNz7DCXWE%2FirRovA4JoVJryvZH9pJzaO4cUrZj8wqe69buuThnBm3gV0oUhyAbz3AJ0daaigggy6ePk0tAcvSoA6VfQdrN8ap7sOfmKdgqcw%2B5c42N%2BLO922rGi9zIwvMldcBOQyDXYQJ2FwnR7%2BxyYoYdU7kpI1TM8rrN&X-Amz-Signature=cf9a6b3a8e6eb992694f4f16ffb52cf6b3d4048211a5aa4d2e7f64d101cba0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJIPWFG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F%2BajAdKltgI15%2FSEoA6BbB7pMnIJokKBdw5OOwarXyAiEArCPBg4iIGbNkNrM9N4Vu6rdMn0l2a4WtrsxAgylMSD8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDG6j3IzBoOAJCaYlOircA7%2FKctNrb5uPMz%2FxbE0vPKWQgSNj7BmHHQqWFUS%2FVCvSzS1iZm3%2FInLiSki1CIWtmaP9XLiPa0iFrzcwSLt%2FB%2BYdauKR%2FTs9B7%2B%2BYH7hLU6FAs1QjOA2TL1pQRwKcuLSI4ekEqVvjoixPMLTm5KeRUK7gf6fsKWdjti3wbngRaRgFzv7c5ZQPWhwpdK4EVuyy4CfCIGMt3ZdRewqMKv1XS%2BBZJ%2BsQtbGQ74xOELRSPw4tYHwETL2f9ZgEHU8ZxWSQVWeYSbs4mBclhFPQWCnTxdPMv7nWTqBn0n70LtR%2Bkbdu0AIPH%2FAOhmYQyWGPfpvo7vv%2BLaqYxPXkEhbSpoGHQiUFc2xG03vFGwf1BbLgMpz2wiSjTj1xAgMsxde67ctG6xp%2FlTQL327CZDIZH26ctA8Ey7MBX7Kd3505lQXFyaOQbY2EEDMysPQrhLnNahkS9HoHDe830FcxuS3DlRO7vO%2Fu6dazJyNiZQZPz3vT4be%2F3Pg%2BWjKZhb0kNAoztqvNJ0cy9Gmdyp4ZOG3bSUv%2B0w6vqQ5sMhoztWpkYFZH9u3HCMoekutZkkrkJkl4iJxvj0R00opH5sgERxh0svLdCTCDy9xKodiyMoIL%2BoxbiaBnw5YEKNyjFuAAhLsMO%2BJ0MkGOqUBay4hCgoktxYiGRhNs8ejMMY6CczqnHx0r8%2FU7ZMNJ%2FfDWyRbmNma2bVNz7DCXWE%2FirRovA4JoVJryvZH9pJzaO4cUrZj8wqe69buuThnBm3gV0oUhyAbz3AJ0daaigggy6ePk0tAcvSoA6VfQdrN8ap7sOfmKdgqcw%2B5c42N%2BLO922rGi9zIwvMldcBOQyDXYQJ2FwnR7%2BxyYoYdU7kpI1TM8rrN&X-Amz-Signature=39263e62f8cdc028cae03ebaa5c5f21ca1f151816dbe8c46651782daaf4d4ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

