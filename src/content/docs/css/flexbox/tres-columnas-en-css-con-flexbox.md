---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PQNIPJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEWdN1SFU6%2FtzZyUjkS%2FoEb9ZPnWT1UZevuANphqoChNAiAl%2F5EI2TdUe0gSIaAVh97yCwKIyf16cfBvY3531xPZNCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMd0fzugNgtnQi5DhsKtwDObqDWalG7n72M5sJ39wbc%2B6WaY2xiJppV0jTpNUW2IBeYC0Kk7hd1fgAIpasMBRlEdJaLnKAUg26q41Lo07q5VVbTX02U%2BzV3HGM2QCqqhAs7w6OfqVQhaexQ8Mnx2NH2iL7hAfEe0N0BER5dSLk5C9e9iLPttO6ifGBwFL3uBR48JQRHZUg1dk%2BhCw5EVtHycp7fKFTCBnVLAQvP%2B50zri16waj7hm3htlJQr%2BMQnUsecNd1uExFn%2BxqYa6KL5TS3eqolw9k2%2FpzpuAaKnGVQ5%2BNODIWDq73DsslhVMnp8XKSt6CikfK0Dr%2FdizfhSpnyCdaZ1mA%2FAvkq3uI3%2Bz%2FKGLK8rB8HgJ9382Wi5ainUFSKGdH%2BWpJn765S5sWUG5ZsmtD6NRkQiD5z2kDDSGTxyVSx1Q3x286x%2FKBJb2dhSRh6G%2F9QEVv7QUXs1ELBO3xkcyBnLRrs5io%2B40%2BGadqDJVqQzyszLI%2BZvlQSIG%2BPZsg334GRi8lffPJptmABCcp3ixykYlHtSYsWUslXN3Ps9hJEU%2F1JH4AxgZSJhaX6nfJiGwxVT1ZtqKeKRvXU7w9Ek9bLIjt5sp4Eihg1zZO3CgBDtcDUXYQBO0VhZuzKsUlzX%2Bza%2FhIQzpKtAwpcrEyQY6pgH4HSRfI86cY9WwgYnkXwcuYpiiaw9Mp1sDCj6dup7nFjgyMQDdrCZBsHFgwFTfVfxLJK0IXT4RAZrQgqXeNdbYV2RethtZq5LEdjpELKMrJYHvGhBkUEc5K7oVhbseJY79lBnVdVjQQysSdNfYS%2FJZGyBFlG2beCQMeBGK5SoCTse7i8jSjVpjtmzDhbMLgRrTtT5QtkujrC%2B9JLnrkKwsn%2BCiCckF&X-Amz-Signature=f03f163bf13f66de2f6e6c03bcb3411ca1a7046e0646f7ae54fb8e83f2929ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PQNIPJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEWdN1SFU6%2FtzZyUjkS%2FoEb9ZPnWT1UZevuANphqoChNAiAl%2F5EI2TdUe0gSIaAVh97yCwKIyf16cfBvY3531xPZNCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMd0fzugNgtnQi5DhsKtwDObqDWalG7n72M5sJ39wbc%2B6WaY2xiJppV0jTpNUW2IBeYC0Kk7hd1fgAIpasMBRlEdJaLnKAUg26q41Lo07q5VVbTX02U%2BzV3HGM2QCqqhAs7w6OfqVQhaexQ8Mnx2NH2iL7hAfEe0N0BER5dSLk5C9e9iLPttO6ifGBwFL3uBR48JQRHZUg1dk%2BhCw5EVtHycp7fKFTCBnVLAQvP%2B50zri16waj7hm3htlJQr%2BMQnUsecNd1uExFn%2BxqYa6KL5TS3eqolw9k2%2FpzpuAaKnGVQ5%2BNODIWDq73DsslhVMnp8XKSt6CikfK0Dr%2FdizfhSpnyCdaZ1mA%2FAvkq3uI3%2Bz%2FKGLK8rB8HgJ9382Wi5ainUFSKGdH%2BWpJn765S5sWUG5ZsmtD6NRkQiD5z2kDDSGTxyVSx1Q3x286x%2FKBJb2dhSRh6G%2F9QEVv7QUXs1ELBO3xkcyBnLRrs5io%2B40%2BGadqDJVqQzyszLI%2BZvlQSIG%2BPZsg334GRi8lffPJptmABCcp3ixykYlHtSYsWUslXN3Ps9hJEU%2F1JH4AxgZSJhaX6nfJiGwxVT1ZtqKeKRvXU7w9Ek9bLIjt5sp4Eihg1zZO3CgBDtcDUXYQBO0VhZuzKsUlzX%2Bza%2FhIQzpKtAwpcrEyQY6pgH4HSRfI86cY9WwgYnkXwcuYpiiaw9Mp1sDCj6dup7nFjgyMQDdrCZBsHFgwFTfVfxLJK0IXT4RAZrQgqXeNdbYV2RethtZq5LEdjpELKMrJYHvGhBkUEc5K7oVhbseJY79lBnVdVjQQysSdNfYS%2FJZGyBFlG2beCQMeBGK5SoCTse7i8jSjVpjtmzDhbMLgRrTtT5QtkujrC%2B9JLnrkKwsn%2BCiCckF&X-Amz-Signature=008fd0ae53baa3f89b19d82bb524b72159d676ab0874c2dfa1075a083cb07959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

