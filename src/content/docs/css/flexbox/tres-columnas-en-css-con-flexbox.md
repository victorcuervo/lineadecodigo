---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFI6KXL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCoy5ZNGbVs4FEPtY0FhSPyM%2Br1w0kESkD2vldEJ6uzGgIgYbNpnAYpeYP1cpXwM5qWPZggaG%2BpJs4pQ%2FM%2FQH0ZkhIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLdcrYcw0NN90BgMISrcA3GxDF5r8%2BZ7%2FRI2Yi%2FUGUHjtMS%2BuZDPP%2BVwSp%2BSMmV1ni%2BBQJq431%2BehQceYIRn9i3ZEQCeCB8fExHtrFbWtzgyXFWkp0ywpVCHdihfkujwtc4HrlhRC9r71%2FErO1N%2FlCXYx%2F5dCazWZEUgHMTO6yjknDn3N6jtOp8dO663HRj6YGeI2VCAPfluDN6Au%2BUO1q%2Bqv1TXQIjQrng1EpkoWVtjZZ%2FumztKsMWmDEOACCQG3CAmQJ63jn9vSzFrfd9cJ7CI0r1aXCIkDUy9Mao5p7%2BDGOYVfSqIIh8M5n9EO7H8L7UCuMu2sAn%2B%2Fkrf9sD3c4mfYjLQFkr5%2F%2Foov%2FQPjo5xS4thHao7VI6EkuZpZEl1a%2FM2T4B6XeN9wjZx57pAZOEYPh9VAEEg1yL%2BFm64yTBUGzPEmgzk4dylwZvqDEsQy%2FhhUT2loyfDB8tbTipiT9rGYhs8D7ne60w93atugLoRRrHNguFQ3woZ9xlD13h22aNfctXRDCE3PTMc5%2B0ynBrcHYbC0vgzAnva77YwUGdR8lwGpp37844hC336C32Pi5cDWbJYVUiVcftw4WeTIM%2BkvOkJrN0WPUF4pskEolWc2z9Qh%2FVOdPkBfyZTGdnYjzLHTHJOeq4%2FmOEcMLqFxckGOqUBnr0bhuAqOXfR3HX4W593Ph7TtJpO48FaiSWvYxq%2FhzyHfpmOElZ4lLf7r6b0L7JU56WpUVQLYn0QUxnOeAvrg2xRLX6IBtMrLHunKhR%2FYfYtZJjklT6XcO1Au9HNlkZn0K8pO6YN1Lxw5mi08LFsNgcTUn9o%2BNKpXwcvkLKUDcc8wl%2F2tAxaoNu2%2BmO55CVXA%2BI3vwCHRA%2B7xhBkH6EdOAlsFVhy&X-Amz-Signature=1eea024884b33b75226b230034ecb259fdf5228a7fadbc1555765358829dbeff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFI6KXL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCoy5ZNGbVs4FEPtY0FhSPyM%2Br1w0kESkD2vldEJ6uzGgIgYbNpnAYpeYP1cpXwM5qWPZggaG%2BpJs4pQ%2FM%2FQH0ZkhIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLdcrYcw0NN90BgMISrcA3GxDF5r8%2BZ7%2FRI2Yi%2FUGUHjtMS%2BuZDPP%2BVwSp%2BSMmV1ni%2BBQJq431%2BehQceYIRn9i3ZEQCeCB8fExHtrFbWtzgyXFWkp0ywpVCHdihfkujwtc4HrlhRC9r71%2FErO1N%2FlCXYx%2F5dCazWZEUgHMTO6yjknDn3N6jtOp8dO663HRj6YGeI2VCAPfluDN6Au%2BUO1q%2Bqv1TXQIjQrng1EpkoWVtjZZ%2FumztKsMWmDEOACCQG3CAmQJ63jn9vSzFrfd9cJ7CI0r1aXCIkDUy9Mao5p7%2BDGOYVfSqIIh8M5n9EO7H8L7UCuMu2sAn%2B%2Fkrf9sD3c4mfYjLQFkr5%2F%2Foov%2FQPjo5xS4thHao7VI6EkuZpZEl1a%2FM2T4B6XeN9wjZx57pAZOEYPh9VAEEg1yL%2BFm64yTBUGzPEmgzk4dylwZvqDEsQy%2FhhUT2loyfDB8tbTipiT9rGYhs8D7ne60w93atugLoRRrHNguFQ3woZ9xlD13h22aNfctXRDCE3PTMc5%2B0ynBrcHYbC0vgzAnva77YwUGdR8lwGpp37844hC336C32Pi5cDWbJYVUiVcftw4WeTIM%2BkvOkJrN0WPUF4pskEolWc2z9Qh%2FVOdPkBfyZTGdnYjzLHTHJOeq4%2FmOEcMLqFxckGOqUBnr0bhuAqOXfR3HX4W593Ph7TtJpO48FaiSWvYxq%2FhzyHfpmOElZ4lLf7r6b0L7JU56WpUVQLYn0QUxnOeAvrg2xRLX6IBtMrLHunKhR%2FYfYtZJjklT6XcO1Au9HNlkZn0K8pO6YN1Lxw5mi08LFsNgcTUn9o%2BNKpXwcvkLKUDcc8wl%2F2tAxaoNu2%2BmO55CVXA%2BI3vwCHRA%2B7xhBkH6EdOAlsFVhy&X-Amz-Signature=59385291edea0ece6644a1bf440d6be94beea5f8a78c641cf2c5a47b172b6d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

