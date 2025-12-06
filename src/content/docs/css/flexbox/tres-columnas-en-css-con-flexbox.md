---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLAJI67%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMM0QlPOvQM62nUooGX6SkNQawi7nP%2BZT1Ax8OI35iAIhAJva%2BNYNG3E5etTga9Q%2BRw6JzFH50FqufmqV7ilpt%2FS5Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyMgKydiRu9tgS9t4Mq3ANiF%2BdpaqQnvT66ocJ1huqXbvMHCH7CplmPtL6JRTxFZB%2BRW%2FAvDb2PF0zi9nc3evPoRCAcqiA6SZ%2B2usgHJ%2BykJ4GUZO2uguSiwFEH6NtUtyX2k2ty7G%2FnY5COSCuLdoTxqbeCCtDNtfDuw0lhkmPekuiidgwQOZ1muEXCh6KCW7OAM6PRf8JHIKCkgw38WboyG3kiTDzg%2F3sgHqCeLosItqvbSbC8zPow3NHeeyFmBfURuz5AS1o2hJm7ttbKgV9cYSItzdvka1NsNqSAS1geqKJXlPf3n05cqNzyqT2qLI3bL67iM7rUDxu21ZVsUBRAhV07lk2iA7tulMy%2BIueGjDMczF7NrJKuSQHdk5DfjUMwi%2F0EsRO46CrdNbGhcYD1rViQ8ecTfJu%2BxPKQw6B6YZG7O1ABsUhCk7lfKFFRwz%2FfhGfUR2ZW%2BdnbzZ621MFGIUAK%2FQ5UJ7%2BQ2Cnvta52PBu%2Fy5Imd%2BPQNdxLnVXMqybb20SI9i8QbQfySI5h%2BSz8O8WKIeUnI57W5mSJ9abPuT3AmZF4z6LnUnCYoeac%2FzWlxpq070X4nd7qmx5yYQLZVp2%2FzAq4e7TB4I8XQO8L%2Fk%2FP%2F6eknMyH3IcRhQ0DaIdEOWQ0q4dTeputajCp6M3JBjqkActe2Ki1xlhYwzXJhGpODjODXkEcDtRcipPt%2BCRpd1mGv4jjsIQeoiNvLMX%2FlEhUGO3aMTt5b%2BSed9QFGYYGXz0xBsWOvpOYIIMRzPdRjnjw5yqaSGliP9SqKeBkLPvyizW2XlWlnpZBcesfC8e8qay9yYpd32BBUp%2FupNroFudhrEn1GNCpPn4eIW6jC1D6w%2FELWcR2DxGV2mYbBsON%2BLgd5OQD&X-Amz-Signature=a7917401ff4492acf7fbd29dce82ccd849a2e0ee41ce3f8f4ce0f9535c348b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLAJI67%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMM0QlPOvQM62nUooGX6SkNQawi7nP%2BZT1Ax8OI35iAIhAJva%2BNYNG3E5etTga9Q%2BRw6JzFH50FqufmqV7ilpt%2FS5Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyMgKydiRu9tgS9t4Mq3ANiF%2BdpaqQnvT66ocJ1huqXbvMHCH7CplmPtL6JRTxFZB%2BRW%2FAvDb2PF0zi9nc3evPoRCAcqiA6SZ%2B2usgHJ%2BykJ4GUZO2uguSiwFEH6NtUtyX2k2ty7G%2FnY5COSCuLdoTxqbeCCtDNtfDuw0lhkmPekuiidgwQOZ1muEXCh6KCW7OAM6PRf8JHIKCkgw38WboyG3kiTDzg%2F3sgHqCeLosItqvbSbC8zPow3NHeeyFmBfURuz5AS1o2hJm7ttbKgV9cYSItzdvka1NsNqSAS1geqKJXlPf3n05cqNzyqT2qLI3bL67iM7rUDxu21ZVsUBRAhV07lk2iA7tulMy%2BIueGjDMczF7NrJKuSQHdk5DfjUMwi%2F0EsRO46CrdNbGhcYD1rViQ8ecTfJu%2BxPKQw6B6YZG7O1ABsUhCk7lfKFFRwz%2FfhGfUR2ZW%2BdnbzZ621MFGIUAK%2FQ5UJ7%2BQ2Cnvta52PBu%2Fy5Imd%2BPQNdxLnVXMqybb20SI9i8QbQfySI5h%2BSz8O8WKIeUnI57W5mSJ9abPuT3AmZF4z6LnUnCYoeac%2FzWlxpq070X4nd7qmx5yYQLZVp2%2FzAq4e7TB4I8XQO8L%2Fk%2FP%2F6eknMyH3IcRhQ0DaIdEOWQ0q4dTeputajCp6M3JBjqkActe2Ki1xlhYwzXJhGpODjODXkEcDtRcipPt%2BCRpd1mGv4jjsIQeoiNvLMX%2FlEhUGO3aMTt5b%2BSed9QFGYYGXz0xBsWOvpOYIIMRzPdRjnjw5yqaSGliP9SqKeBkLPvyizW2XlWlnpZBcesfC8e8qay9yYpd32BBUp%2FupNroFudhrEn1GNCpPn4eIW6jC1D6w%2FELWcR2DxGV2mYbBsON%2BLgd5OQD&X-Amz-Signature=759cac46e9bbfb68639f9361b0a1efb683cc94b68aacc93a51f361ff7caecdb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

