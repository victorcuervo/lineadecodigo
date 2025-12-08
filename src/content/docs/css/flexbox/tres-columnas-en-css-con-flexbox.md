---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULMEMOIQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxuqTkh%2F2KbbljpcioJoHjGotcDG8PXwLV5V6o%2F5zGkwIhAOuS4CDN2j1HVZ1y0pBdAdW4aGWBEvaXBkO%2BRdAQl3H0KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx10MGU30Bzz%2Bmyk0q3APTH6VZfM2MUbYzeuYf0moxjOQRTW1S56dp1hKnyrFaLf9l9BY20Qbwv%2BjyasDxIsvAOtXStUYWQ9p%2BSPj1ce4irbAuqrjYCka%2F21px9k1iisZwAXoMqLeprblPK7x%2F%2BkhTC7U4teMWj6aLR76aCTaPc%2B80s%2BqkBGW92fVgEHVUadyZPJBDmzM31OyqCJqtYivQA4FifCsxhM%2FDuVYaTwvG7QYvpNY6YmfxhLvBD6q2uZMWvZApYf3JqSL%2Fr7WuuFTSVjMfcwQc2uYfaco9EqnoNjvon7IiHKb7BQTR%2FiRKKsyt0pJui%2Bwrowdgz2hTUQkWTAM3myv7u3vfq8ih%2B8Ev%2B6%2FHrA%2F4EFdXTOV35guDRwsjL5UkrEimuJ1eEW9XKaSlNh0rW%2B4FO3%2Bmg3VMvyy%2Bnz4agL7CTMqJoksp4OJPNGOtPmuexeFVEDBct9LU5kmXQoPAHcrG9k0o0ZZfbpvLOolJ1YZFfzD4nkK31b62S9QzAKIZlsLqAsTY5aw0cJODq%2B59qoeCUt%2BhBfAlMDAjeuqeqUrtFjNfGhZX1UiaffkEa4bHCbr3g6EKAftjy0Yf2P0Fp8Gz1uH1oSiRsEhq4rQpKeEQKxV9uarn1ZmwPs41Zem96SmQMyytsTDk7dnJBjqkASeRWPWDlKVbcHNENlGKaAjGmr5V%2Fvyn%2BoLUJFNit1%2F%2B%2F6ye%2FGG5obLGxYrB%2FvZ7sw2EhUjH5b9234vTz0abCWXmgLWKv3WJ6j2bCzhSuu%2BHxFeE5zbCjyLtaBXEkPu2bm8q3ADU9np%2FOLuglDVsrvhilB48S%2FJBC5Mw8AGErnJ8s49QmNht5US5TyUg%2FYj4Zm7xk54kNJylYmZXTiNT9QcbgsLx&X-Amz-Signature=fc5b1575f1faf0327c05ed020b329f78f898916e1a9e55a92f5bf264f0442b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULMEMOIQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxuqTkh%2F2KbbljpcioJoHjGotcDG8PXwLV5V6o%2F5zGkwIhAOuS4CDN2j1HVZ1y0pBdAdW4aGWBEvaXBkO%2BRdAQl3H0KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx10MGU30Bzz%2Bmyk0q3APTH6VZfM2MUbYzeuYf0moxjOQRTW1S56dp1hKnyrFaLf9l9BY20Qbwv%2BjyasDxIsvAOtXStUYWQ9p%2BSPj1ce4irbAuqrjYCka%2F21px9k1iisZwAXoMqLeprblPK7x%2F%2BkhTC7U4teMWj6aLR76aCTaPc%2B80s%2BqkBGW92fVgEHVUadyZPJBDmzM31OyqCJqtYivQA4FifCsxhM%2FDuVYaTwvG7QYvpNY6YmfxhLvBD6q2uZMWvZApYf3JqSL%2Fr7WuuFTSVjMfcwQc2uYfaco9EqnoNjvon7IiHKb7BQTR%2FiRKKsyt0pJui%2Bwrowdgz2hTUQkWTAM3myv7u3vfq8ih%2B8Ev%2B6%2FHrA%2F4EFdXTOV35guDRwsjL5UkrEimuJ1eEW9XKaSlNh0rW%2B4FO3%2Bmg3VMvyy%2Bnz4agL7CTMqJoksp4OJPNGOtPmuexeFVEDBct9LU5kmXQoPAHcrG9k0o0ZZfbpvLOolJ1YZFfzD4nkK31b62S9QzAKIZlsLqAsTY5aw0cJODq%2B59qoeCUt%2BhBfAlMDAjeuqeqUrtFjNfGhZX1UiaffkEa4bHCbr3g6EKAftjy0Yf2P0Fp8Gz1uH1oSiRsEhq4rQpKeEQKxV9uarn1ZmwPs41Zem96SmQMyytsTDk7dnJBjqkASeRWPWDlKVbcHNENlGKaAjGmr5V%2Fvyn%2BoLUJFNit1%2F%2B%2F6ye%2FGG5obLGxYrB%2FvZ7sw2EhUjH5b9234vTz0abCWXmgLWKv3WJ6j2bCzhSuu%2BHxFeE5zbCjyLtaBXEkPu2bm8q3ADU9np%2FOLuglDVsrvhilB48S%2FJBC5Mw8AGErnJ8s49QmNht5US5TyUg%2FYj4Zm7xk54kNJylYmZXTiNT9QcbgsLx&X-Amz-Signature=a0ca911fa2fda85d3a8f69cc4fa7910fc676c61f168e15e877414fb0ecaded3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

