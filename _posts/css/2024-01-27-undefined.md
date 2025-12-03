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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL3CHFCL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDKMrUZ2EnfA8lmOjfcFZymhrWVLUYyW5ON8E%2BY4a0KLgIhAMgyH%2FpvyTV3CZ9a5ebndleQp02kNgRdjJu8c9lmkI71Kv8DCCIQABoMNjM3NDIzMTgzODA1IgxkYt2caDG6YFxy%2F9kq3APlSrHnCSnpIELbiH52JvgNxxPtoQoBi9fRIeIjdHj0EP29rwondHgJVnHCVXTUSsPRFIukUsnE7IOoxzRVUPEz6m5gO96eaBF9FcXy5VKqyozg2px1gOa7VLd2lkasd2NDkuKHATrolcIxwcViK6A5vP%2BuT%2BdV4S54XgFoyZa7BJfY1ZUi8NXcigarUo4ddgMd6LXcT7ei0njPS%2Bh7fRzccej1hryaRzVBwvtqxvoK3VSBQq8VgZ409YNYvTZlRU%2BZmGBjVUZ4AkZfpr4xOefzmY6okRpf8U9wBc8CAipTOgdfmaSzoJ7XTmUU3QIUt8zlu4ZLm4qnld1UDJqQiIqnbh%2FqS%2BIdvvNe%2BOu7tzh5R45y4uzpE5Lt6i58d6Ag98EFZL8WsLrjxAc7cLUEsVQRtbWov4t%2B03wqymIwgolrJT0oBwODBfHhj9%2BQMjlLRQQw327nXots0ayEbsbbALGu%2BvR1Pprhpqsz0el%2FU9qW9Lk2%2BEgDN6Udcq73ISzuyVAKikEVP0t6raXZa0DdVTQZza9DiIqoSV6fEAjF%2FqunWCv%2Fcw5J7AlS4CgaZ27JHoyMbB3TwMvazYKrilvi7F73t7NTug%2Fk5jia5WJUQNut2Ye6VF7LaeE4SIqPxTC%2Flr7JBjqkAXTcY1FceIP5XaCxgR%2FJ0bNS2sT4cVUQ%2B4cdADOXixkrytAVD2GgVv%2Fp0GIBr9KpG3t3n8NkSPPWuf3I97Nulvx2YSit0H27NvNv0UIzHNdVl%2FLoV6bSnE0EzQAdRpvFqLo4cUn9SGnL46p6ht3BLLb101ouNKeAj16%2FJM6zCsFdFjECjGo67yWo9BtLzyrClGxRWCbPQO5RsAjJzbbcg4hHOCao&X-Amz-Signature=26b0e384111114441485cdb2bfffef248e9a1df67c4110981b589eadade880b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL3CHFCL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDKMrUZ2EnfA8lmOjfcFZymhrWVLUYyW5ON8E%2BY4a0KLgIhAMgyH%2FpvyTV3CZ9a5ebndleQp02kNgRdjJu8c9lmkI71Kv8DCCIQABoMNjM3NDIzMTgzODA1IgxkYt2caDG6YFxy%2F9kq3APlSrHnCSnpIELbiH52JvgNxxPtoQoBi9fRIeIjdHj0EP29rwondHgJVnHCVXTUSsPRFIukUsnE7IOoxzRVUPEz6m5gO96eaBF9FcXy5VKqyozg2px1gOa7VLd2lkasd2NDkuKHATrolcIxwcViK6A5vP%2BuT%2BdV4S54XgFoyZa7BJfY1ZUi8NXcigarUo4ddgMd6LXcT7ei0njPS%2Bh7fRzccej1hryaRzVBwvtqxvoK3VSBQq8VgZ409YNYvTZlRU%2BZmGBjVUZ4AkZfpr4xOefzmY6okRpf8U9wBc8CAipTOgdfmaSzoJ7XTmUU3QIUt8zlu4ZLm4qnld1UDJqQiIqnbh%2FqS%2BIdvvNe%2BOu7tzh5R45y4uzpE5Lt6i58d6Ag98EFZL8WsLrjxAc7cLUEsVQRtbWov4t%2B03wqymIwgolrJT0oBwODBfHhj9%2BQMjlLRQQw327nXots0ayEbsbbALGu%2BvR1Pprhpqsz0el%2FU9qW9Lk2%2BEgDN6Udcq73ISzuyVAKikEVP0t6raXZa0DdVTQZza9DiIqoSV6fEAjF%2FqunWCv%2Fcw5J7AlS4CgaZ27JHoyMbB3TwMvazYKrilvi7F73t7NTug%2Fk5jia5WJUQNut2Ye6VF7LaeE4SIqPxTC%2Flr7JBjqkAXTcY1FceIP5XaCxgR%2FJ0bNS2sT4cVUQ%2B4cdADOXixkrytAVD2GgVv%2Fp0GIBr9KpG3t3n8NkSPPWuf3I97Nulvx2YSit0H27NvNv0UIzHNdVl%2FLoV6bSnE0EzQAdRpvFqLo4cUn9SGnL46p6ht3BLLb101ouNKeAj16%2FJM6zCsFdFjECjGo67yWo9BtLzyrClGxRWCbPQO5RsAjJzbbcg4hHOCao&X-Amz-Signature=e52283d0c0326f3003b9dbb9fbe2934b7dca6256886f2ad3a830d34a441df22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

