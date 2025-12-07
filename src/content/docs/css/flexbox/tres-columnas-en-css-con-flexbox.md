---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3F2VEW5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7cFHXziETyGqDMtGXOIZBJLQ6w%2BP36Q0FNt8aYHC17AiBTjC9NUaFejaKsqb3F8bSs5nn%2BDAMUcIY%2Fe91p8nqVUyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFEu%2FBd4ofLdDY8DKtwDppHa%2FwN2K7AInIasjNDIKN8%2Bce%2BuJ0VMllorectuR9ZPIRO5JwMl45MDa3Motauy0bidbWd9w4dgOdZoQmUn7EzSBHngTpQoUTFgF0DkF%2BoMF0eSn%2BQwmZcbeYEkRrnEHGoBlwgTNwRD1qoLT%2Fc9GJAYqk%2Fy%2FR5P9bDGQL9%2B0%2F2WoE6jiC%2F3nArtG%2FBcj6lbYiGaQFjrtMr3un3lIGSQdASyollBHEhv3v9ER7lCMoKYMzPzpspZL1BRwUVqoiLXlnMWFJVB8qliNypUyyCI%2F3mmTEnlF8gE6Y1PxQ9eyZMhNjWnTI7YKN1GFQdqYmA5W0fSgMRlxPmOMlwAbgQcuiSZt1VLxiXkpPWoUvj13vt8IUOxSVohV7yJdh6fWdWTEpfWBYTSax2LSHqG68wHEStZDAZh6lAqxR3jx%2FAXY6Ww64HKkTJln5UxN%2F6LLw3CwYdYeayhfI%2B%2BROpwH0vz9lfVff%2FpBl9cYBtOIvguDjX3bHTF7q6ooKlHaLgToq2ujyDnGox%2FdxZBIjpwpZYX50ht0bv0yCJwqtLfLQIayImvhFAhGrIwACBwYDmqMfu2Rn%2FSQR0HOx6HIBH34cfEkqMQOJmVHswHiXJ3lVs0zPYUblqabsreDg07gIQw5bzWyQY6pgFnp0uz4ADued5jp9zjDeWVUZ8n5tGsB80ERW1xBUfsX%2F2JfVngyvJPPmFe7e%2F0KELbnQp7vYP%2B%2BFrtt%2Buse3hZHCvOI%2BHFnxrcsleqkHuArEzHAZd4FkputJVI%2BnuVDkT8oBHVB6ZNUQTJcRJbnMK184iiwUEwwGxnGoCxSsQBTHA0moo1uKohMoRmieN01ahm1iUrog6gyDm%2Fnai%2Bgvubzkr%2FPuSe&X-Amz-Signature=835ab9f5cdfbfb79e1afc5a1e2c425d88eca6d8ca06b050a805c4a139acbbd55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3F2VEW5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7cFHXziETyGqDMtGXOIZBJLQ6w%2BP36Q0FNt8aYHC17AiBTjC9NUaFejaKsqb3F8bSs5nn%2BDAMUcIY%2Fe91p8nqVUyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFEu%2FBd4ofLdDY8DKtwDppHa%2FwN2K7AInIasjNDIKN8%2Bce%2BuJ0VMllorectuR9ZPIRO5JwMl45MDa3Motauy0bidbWd9w4dgOdZoQmUn7EzSBHngTpQoUTFgF0DkF%2BoMF0eSn%2BQwmZcbeYEkRrnEHGoBlwgTNwRD1qoLT%2Fc9GJAYqk%2Fy%2FR5P9bDGQL9%2B0%2F2WoE6jiC%2F3nArtG%2FBcj6lbYiGaQFjrtMr3un3lIGSQdASyollBHEhv3v9ER7lCMoKYMzPzpspZL1BRwUVqoiLXlnMWFJVB8qliNypUyyCI%2F3mmTEnlF8gE6Y1PxQ9eyZMhNjWnTI7YKN1GFQdqYmA5W0fSgMRlxPmOMlwAbgQcuiSZt1VLxiXkpPWoUvj13vt8IUOxSVohV7yJdh6fWdWTEpfWBYTSax2LSHqG68wHEStZDAZh6lAqxR3jx%2FAXY6Ww64HKkTJln5UxN%2F6LLw3CwYdYeayhfI%2B%2BROpwH0vz9lfVff%2FpBl9cYBtOIvguDjX3bHTF7q6ooKlHaLgToq2ujyDnGox%2FdxZBIjpwpZYX50ht0bv0yCJwqtLfLQIayImvhFAhGrIwACBwYDmqMfu2Rn%2FSQR0HOx6HIBH34cfEkqMQOJmVHswHiXJ3lVs0zPYUblqabsreDg07gIQw5bzWyQY6pgFnp0uz4ADued5jp9zjDeWVUZ8n5tGsB80ERW1xBUfsX%2F2JfVngyvJPPmFe7e%2F0KELbnQp7vYP%2B%2BFrtt%2Buse3hZHCvOI%2BHFnxrcsleqkHuArEzHAZd4FkputJVI%2BnuVDkT8oBHVB6ZNUQTJcRJbnMK184iiwUEwwGxnGoCxSsQBTHA0moo1uKohMoRmieN01ahm1iUrog6gyDm%2Fnai%2Bgvubzkr%2FPuSe&X-Amz-Signature=1ef70e55a10b3a5ff912f07dfa65e293738bde67938c66692b70dbb2682f3e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

