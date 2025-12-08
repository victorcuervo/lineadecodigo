---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y42UTJ7N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6BKLGj9yjUKtWz6avVljc6ftpkjQZUgiYlBUAr0Q9aAiA%2B09WAXi6XnZrD%2B2ncfMtqaLx8BtSLNCXu4K7wDxbacCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FzTGO595ApMr3yJrKtwD9Xs5m13VtLID4KG29ER6vHyKAvjbQNlZcqSj0fEy0L3%2B9VUL%2F9zVfUTxey1Ctc20m%2Frz9hv%2B69lHykiw64w64IiExBi6lZBhiVQo93VbijY30umr1AWpOkp20vCR%2B0rGjVSa6hxPNxyOvnjSYZU8gSAFIzxJAnchuM07bcIBLDgG2sDw3S6p9GIeaiVUW07%2FMuAuTeQA%2F8FzjMMlZNJpksu9TLiZBznmDr4Q5tmr371soQ4lWxOxikifX6hCryOfJ%2FcVW511C%2BNyEcn4l23npikzztlpRCxc5gYQdZPd%2BBxMF4hL5rm7g9kraZRxppwd4L872fzbafSmx3INv%2BU9zHbc3QAcOEzMc2UQ3xYYZD3zmlr9NI9FGP3CagqA9W3ByhgqrFfqMNg99hVpOyD9dLh2MB748vaF7uHdpFqxauoA7zkcbIN5aOvY4H6kPmXBC4btRRkz0qqSlHp1H8TjWdKbEmouoHKqYHVryudYFlwZrZwwb4YQy%2Frcmg%2FHfGPeDS6n4CSv7Qxgk3QI5BImzSYpg9GEy4HR1pCCYBnv3npSnw%2BzQJwbKgou8Mc6KqTl3RXoMRPbfdNsZObS0Y0GUhTRi5ZQQ2oqNLafSFmMaAmaHyGC%2BMBdhen79MIw8qHYyQY6pgFGeHH3uwS5uYakpYoSK%2BmIHssN89CQ%2F6eRyZ%2Fu5vts%2FF05BSRfFiiBfrFANbhCEQ98VZYZUko7XgvUZlBb7yoMVEng0WnJY2pofbuAemN5VjuW6NzZcN9EjN%2B%2FMkZVih32XrTdSHlku%2Bc9tT6b9qMgWwqWVKr3%2FZBZXtrLQwMOVRba549oGwl6v4E%2FjzAx4or0cqBV7VY1LgFk8ED6nscjK0DEYWDm&X-Amz-Signature=6848a733f6c70103fc2acd68b7ab85cb2a9ecae68826b70834172c2948db6eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y42UTJ7N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6BKLGj9yjUKtWz6avVljc6ftpkjQZUgiYlBUAr0Q9aAiA%2B09WAXi6XnZrD%2B2ncfMtqaLx8BtSLNCXu4K7wDxbacCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FzTGO595ApMr3yJrKtwD9Xs5m13VtLID4KG29ER6vHyKAvjbQNlZcqSj0fEy0L3%2B9VUL%2F9zVfUTxey1Ctc20m%2Frz9hv%2B69lHykiw64w64IiExBi6lZBhiVQo93VbijY30umr1AWpOkp20vCR%2B0rGjVSa6hxPNxyOvnjSYZU8gSAFIzxJAnchuM07bcIBLDgG2sDw3S6p9GIeaiVUW07%2FMuAuTeQA%2F8FzjMMlZNJpksu9TLiZBznmDr4Q5tmr371soQ4lWxOxikifX6hCryOfJ%2FcVW511C%2BNyEcn4l23npikzztlpRCxc5gYQdZPd%2BBxMF4hL5rm7g9kraZRxppwd4L872fzbafSmx3INv%2BU9zHbc3QAcOEzMc2UQ3xYYZD3zmlr9NI9FGP3CagqA9W3ByhgqrFfqMNg99hVpOyD9dLh2MB748vaF7uHdpFqxauoA7zkcbIN5aOvY4H6kPmXBC4btRRkz0qqSlHp1H8TjWdKbEmouoHKqYHVryudYFlwZrZwwb4YQy%2Frcmg%2FHfGPeDS6n4CSv7Qxgk3QI5BImzSYpg9GEy4HR1pCCYBnv3npSnw%2BzQJwbKgou8Mc6KqTl3RXoMRPbfdNsZObS0Y0GUhTRi5ZQQ2oqNLafSFmMaAmaHyGC%2BMBdhen79MIw8qHYyQY6pgFGeHH3uwS5uYakpYoSK%2BmIHssN89CQ%2F6eRyZ%2Fu5vts%2FF05BSRfFiiBfrFANbhCEQ98VZYZUko7XgvUZlBb7yoMVEng0WnJY2pofbuAemN5VjuW6NzZcN9EjN%2B%2FMkZVih32XrTdSHlku%2Bc9tT6b9qMgWwqWVKr3%2FZBZXtrLQwMOVRba549oGwl6v4E%2FjzAx4or0cqBV7VY1LgFk8ED6nscjK0DEYWDm&X-Amz-Signature=8d5f92b8623803ad093657fe26647770c94e6067738b01ba8227104ae4555fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

