---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJU4A3YR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5uCV%2ByoDZ0RIAVSCZveCVarsSsurtStIiCy0awtGuKAiEA%2BWR0CR%2FQmigfpgONO3veODbIMqQ4aigjPFVMLZKjZo0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxTg%2FL5QVFCS7JvwircA%2F9ZvG7poMdl8tOcngduvivUFpTh1QKFqSUkcm%2Bv%2BUsUMIoc4ay%2FQlLv0yGQt%2FR18PoLLJCKpslP%2BhLsivt0yAGuZNaDS%2F%2BLpLNHYdv3QzojmBxlt0g7aJ6MvgyeS%2FrrMF3fCQi%2FgJEQOadDwULkXLD1xsc%2FglRdbwmgaQE8I12mjiqSp16SImMqydT6r2qIidfankfFuS%2FTVXvfsriLoDy50X5820NbfF4rPzvhCSkoySjYZgnU%2FjxSdpVUhVlM%2FTafX6lfcjqzcmJ3wItQ8LbZURkBdDikZAkcx8%2FWaYSNB%2BxKhaVTnQkdjHE6S%2BqTsz9xzjyfCoQtOSOUWF6PYFw61FxOo4ScczC4g6apJSxLiAYyrXUNynVVTgOeJ9luQZ4GKIljlA0zy6LFI4sZmg4uyGPx%2BXmEUkof0u5mjChBd5wXRKS38dIDagMHFj8XR97%2F547jvQ5bZ5EIDgDqKgslVhYdzsZVpAlJFcWqtMfu5J8hpsRZfa8Wpj0rxh05dNFRRIj6Ns5BdcURMzVujf3h7jug0mADyU0hRI4hFh5PRhiYNFhie5mhWV9FJ3Rutc6wyPgc0gdxHFmrwJLHE9hnbneD82eQyzRN21xQCJEekqyusVcUFhALrV11MKfezskGOqUB%2FNrQVT7JhFm1geYbGqujl5i8lARM7CdOxboOgs64oUgJoHDtmBV36oF%2FiOH3uCBKC9DImlyw48%2FtXzIIehfQ3B5DyBIWM5J8002t5OFHB1w0MhNB7V%2FU48q7x3eTKDhqr1jzaUQUYvyfeVs7UMPa8XVWm3IQXiWGudGRRpQo9ZGJ79Zr9rI8Z6JvMZyJrCraXqKYAE%2FYvsOkm17Rk27bxUMPQUpq&X-Amz-Signature=bee6807c09dbc0cf8254b450b288d6d21574c92cf5ce950afc6d636b970104d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJU4A3YR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5uCV%2ByoDZ0RIAVSCZveCVarsSsurtStIiCy0awtGuKAiEA%2BWR0CR%2FQmigfpgONO3veODbIMqQ4aigjPFVMLZKjZo0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxTg%2FL5QVFCS7JvwircA%2F9ZvG7poMdl8tOcngduvivUFpTh1QKFqSUkcm%2Bv%2BUsUMIoc4ay%2FQlLv0yGQt%2FR18PoLLJCKpslP%2BhLsivt0yAGuZNaDS%2F%2BLpLNHYdv3QzojmBxlt0g7aJ6MvgyeS%2FrrMF3fCQi%2FgJEQOadDwULkXLD1xsc%2FglRdbwmgaQE8I12mjiqSp16SImMqydT6r2qIidfankfFuS%2FTVXvfsriLoDy50X5820NbfF4rPzvhCSkoySjYZgnU%2FjxSdpVUhVlM%2FTafX6lfcjqzcmJ3wItQ8LbZURkBdDikZAkcx8%2FWaYSNB%2BxKhaVTnQkdjHE6S%2BqTsz9xzjyfCoQtOSOUWF6PYFw61FxOo4ScczC4g6apJSxLiAYyrXUNynVVTgOeJ9luQZ4GKIljlA0zy6LFI4sZmg4uyGPx%2BXmEUkof0u5mjChBd5wXRKS38dIDagMHFj8XR97%2F547jvQ5bZ5EIDgDqKgslVhYdzsZVpAlJFcWqtMfu5J8hpsRZfa8Wpj0rxh05dNFRRIj6Ns5BdcURMzVujf3h7jug0mADyU0hRI4hFh5PRhiYNFhie5mhWV9FJ3Rutc6wyPgc0gdxHFmrwJLHE9hnbneD82eQyzRN21xQCJEekqyusVcUFhALrV11MKfezskGOqUB%2FNrQVT7JhFm1geYbGqujl5i8lARM7CdOxboOgs64oUgJoHDtmBV36oF%2FiOH3uCBKC9DImlyw48%2FtXzIIehfQ3B5DyBIWM5J8002t5OFHB1w0MhNB7V%2FU48q7x3eTKDhqr1jzaUQUYvyfeVs7UMPa8XVWm3IQXiWGudGRRpQo9ZGJ79Zr9rI8Z6JvMZyJrCraXqKYAE%2FYvsOkm17Rk27bxUMPQUpq&X-Amz-Signature=3c88def80e1afd1acfa7098a77e560d1f78eac4b68ceb5da63485177de31261a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

