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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWWRO3N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDY%2BF5%2FVrmTPynEw2M8HClAC8qYfUvIA5sGJIDDFLcmjAiAP2NRLiHa%2BemDhpKyALwJHQ%2B40zkOFxhI1S8YnyUGJXyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6oEUG3E00uHb3UcZKtwDsQ5SrKBniaqJOXZSUjd3Hw%2BKrdWVa0up99vmd%2FRf4jIMkqcZkTd146%2Bl8FoiL0hOGIRZfVhDNjUKyqtaie0wScEG4KfzVKitFH0ZYtRqfBiG9k%2B24h2xN3ulr4dA12yYfsKHhYKjDsaGvVCU9RZwPP398iexHbEGs%2BEI1Rt1y0AORuYzbj8xdGxs4KLR8DxjKwCaLDBclJ67O3C2JLKUz8zt%2FXrWsaW4l6iwtPvf1VBmNMHzb%2BLwkecuMO2y7IGJkYx1Yt19S60VMzWE6epGkOW4MLPGBYnKMY2ujxOl1A0fEbBseTxz%2FYq9TWjh%2BIgfhAAcs69a3njs5g7yqC6rUryqcnu2VuiSfSoL0cIRK5DfWZVrP5Z3ZWpz09heTBgVHhUc9JgWQ6th%2FLP3zoioXUih1iDvJl3eMozgNb0R6TCbzp4H0thn7fGy%2BQHjPdexbUVJlh%2FUpNOF5D50uTaKZcOXGsQurfPCCRqnqaU3k%2FZdslqkq5ODFBMB5SMcUgW%2B5y9uM%2F7mmItdLVECkiGrvf5xnz7bL8uZuCbmAEHM55lfyN%2BDmke5PiwYjcW9FiQV4vN5S%2BGbNrfI2opbEapGV7AzWyONw5ITMqwgooa917Z%2F%2B3Fvb4SghheovH0wrOnAyQY6pgEOVtuVvx5yUkdXc1XiitxqI7fbRynp3u7BQtPJHdAvCCdR%2BM%2BdXI5Le8de4%2B0NWwQQl2JFTIJAKdRfWl2fZfWbacsyRQq9gW2nVzfJXwQPzugoZzaN2Ty3or3DKqcNjWYfoVWKNd%2BAPWkMj%2BO9zbOZZYA4LVN9QGS5rXH%2Fxt4BpAP5IfWRCk4%2Bgqq%2FfvaCkG7eeFFeK2rF6Q79Ck00o4%2BXrmf9X%2F%2BE&X-Amz-Signature=9c797583b59c18bf598cc6c107a77e8d939a973ef0bc291d1dd166220b121848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWWRO3N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDY%2BF5%2FVrmTPynEw2M8HClAC8qYfUvIA5sGJIDDFLcmjAiAP2NRLiHa%2BemDhpKyALwJHQ%2B40zkOFxhI1S8YnyUGJXyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6oEUG3E00uHb3UcZKtwDsQ5SrKBniaqJOXZSUjd3Hw%2BKrdWVa0up99vmd%2FRf4jIMkqcZkTd146%2Bl8FoiL0hOGIRZfVhDNjUKyqtaie0wScEG4KfzVKitFH0ZYtRqfBiG9k%2B24h2xN3ulr4dA12yYfsKHhYKjDsaGvVCU9RZwPP398iexHbEGs%2BEI1Rt1y0AORuYzbj8xdGxs4KLR8DxjKwCaLDBclJ67O3C2JLKUz8zt%2FXrWsaW4l6iwtPvf1VBmNMHzb%2BLwkecuMO2y7IGJkYx1Yt19S60VMzWE6epGkOW4MLPGBYnKMY2ujxOl1A0fEbBseTxz%2FYq9TWjh%2BIgfhAAcs69a3njs5g7yqC6rUryqcnu2VuiSfSoL0cIRK5DfWZVrP5Z3ZWpz09heTBgVHhUc9JgWQ6th%2FLP3zoioXUih1iDvJl3eMozgNb0R6TCbzp4H0thn7fGy%2BQHjPdexbUVJlh%2FUpNOF5D50uTaKZcOXGsQurfPCCRqnqaU3k%2FZdslqkq5ODFBMB5SMcUgW%2B5y9uM%2F7mmItdLVECkiGrvf5xnz7bL8uZuCbmAEHM55lfyN%2BDmke5PiwYjcW9FiQV4vN5S%2BGbNrfI2opbEapGV7AzWyONw5ITMqwgooa917Z%2F%2B3Fvb4SghheovH0wrOnAyQY6pgEOVtuVvx5yUkdXc1XiitxqI7fbRynp3u7BQtPJHdAvCCdR%2BM%2BdXI5Le8de4%2B0NWwQQl2JFTIJAKdRfWl2fZfWbacsyRQq9gW2nVzfJXwQPzugoZzaN2Ty3or3DKqcNjWYfoVWKNd%2BAPWkMj%2BO9zbOZZYA4LVN9QGS5rXH%2Fxt4BpAP5IfWRCk4%2Bgqq%2FfvaCkG7eeFFeK2rF6Q79Ck00o4%2BXrmf9X%2F%2BE&X-Amz-Signature=374d6465ea8579fdee953a37436a75617b23dc6058b14b01422b175a94dd1350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

