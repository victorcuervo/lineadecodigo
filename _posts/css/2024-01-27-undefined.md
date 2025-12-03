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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S3ZYFYD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGW2SfWYqFIAdXfHvqCCrwPkZHBN816KfGDWWZspmLnZAiEA%2F2d8LnzBNNK5XXjvy2fMbGs%2B6E3BaHYJBGSu8eGtvDUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDD2tBEbAYBu2lA2eZSrcA94ysV0n%2FC4UujAImyZTBQJgLBxJB4PeqpKEorPXB1DSIz6CmVxajlfqiN7gArGN0KlPsrGb5fx6bsoZhxX0VxCMdnFk4Rx%2B%2FwebdQeTA6ciSzD81%2B2CBJfqFdKShihFdAC5C0hnJsqsFmvWuDzn84G%2F6riLj%2FQdthE5brc%2BJudjwtte9p8WIhlXA95rZ%2FhIaTSFgSoU9a5m9o9iRt1mmLDR3xYjGB%2B1Ii%2B0PN794M18GD%2BeDLjb2YtoXa4moJ8QyqH%2BrZhmBlbjlP7SVj%2Be3tlsTNMMkO8UbF6zQsmExDnd5HT8nq%2FIzwRsX41YgLtRlXUyfGFL3SO9riybaHOJUOdJ%2FaRAck%2Bc%2F09tKFLcs6KCCOycDivbuoHBuOHs%2BOET4T2eW98fB4R4Ogh0ABCCgEpibxXxccsYWsQVJeDNtBc357xkdRG%2FTCB05QNgAXmYSpS52CqdH6oCAJPh0FW9tPmqgpL4eC4FR7IBASuIjLbSHNaZ%2BLogtrM93zAQ%2BbI3eKA0PqhhIKuwu8z3N2XI3%2FJEhKQ87XT8nma9NOQCuMwO4qoM69qPcrwiRkW8WBULpdleDjE3XkHDqeLrns6ieCSiNR8nhpISLl%2BwPQblaFyEXzdS4ofkIhuGsvHyMJqHwckGOqUB9McthnLLb0GZWOVSZDal64rEL2LsKfaXXc4SnOZBYz788wZPeHmWtp5V90BS3QiKBOaFT%2Bs76Zf70EKUWW8Kck8P6HyvTjVA3QERnj5nzpSXx2B0oCBlgkqPageUAjRMUnaVYJCCKGN4%2BANnKAWNTJPQxxTJa3V8Nw%2BUqcZ1mwHlK8d8Zr%2B2v9D7mX62Z%2BXwMsCHDmSGZENdF9P382FmN2gkU6kD&X-Amz-Signature=d73a77060657bdc074bba3289f8e3834bd9c2eb38773f398b789b400cc2b4861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S3ZYFYD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGW2SfWYqFIAdXfHvqCCrwPkZHBN816KfGDWWZspmLnZAiEA%2F2d8LnzBNNK5XXjvy2fMbGs%2B6E3BaHYJBGSu8eGtvDUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDD2tBEbAYBu2lA2eZSrcA94ysV0n%2FC4UujAImyZTBQJgLBxJB4PeqpKEorPXB1DSIz6CmVxajlfqiN7gArGN0KlPsrGb5fx6bsoZhxX0VxCMdnFk4Rx%2B%2FwebdQeTA6ciSzD81%2B2CBJfqFdKShihFdAC5C0hnJsqsFmvWuDzn84G%2F6riLj%2FQdthE5brc%2BJudjwtte9p8WIhlXA95rZ%2FhIaTSFgSoU9a5m9o9iRt1mmLDR3xYjGB%2B1Ii%2B0PN794M18GD%2BeDLjb2YtoXa4moJ8QyqH%2BrZhmBlbjlP7SVj%2Be3tlsTNMMkO8UbF6zQsmExDnd5HT8nq%2FIzwRsX41YgLtRlXUyfGFL3SO9riybaHOJUOdJ%2FaRAck%2Bc%2F09tKFLcs6KCCOycDivbuoHBuOHs%2BOET4T2eW98fB4R4Ogh0ABCCgEpibxXxccsYWsQVJeDNtBc357xkdRG%2FTCB05QNgAXmYSpS52CqdH6oCAJPh0FW9tPmqgpL4eC4FR7IBASuIjLbSHNaZ%2BLogtrM93zAQ%2BbI3eKA0PqhhIKuwu8z3N2XI3%2FJEhKQ87XT8nma9NOQCuMwO4qoM69qPcrwiRkW8WBULpdleDjE3XkHDqeLrns6ieCSiNR8nhpISLl%2BwPQblaFyEXzdS4ofkIhuGsvHyMJqHwckGOqUB9McthnLLb0GZWOVSZDal64rEL2LsKfaXXc4SnOZBYz788wZPeHmWtp5V90BS3QiKBOaFT%2Bs76Zf70EKUWW8Kck8P6HyvTjVA3QERnj5nzpSXx2B0oCBlgkqPageUAjRMUnaVYJCCKGN4%2BANnKAWNTJPQxxTJa3V8Nw%2BUqcZ1mwHlK8d8Zr%2B2v9D7mX62Z%2BXwMsCHDmSGZENdF9P382FmN2gkU6kD&X-Amz-Signature=422d77669e9a03f37adf06256d255aacba79ebb5df366a7f726303f19385605f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

