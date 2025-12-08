---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WTCOXEU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHBOq1g5eaWUeNwKmNoHBayx%2B70jgpXXOwq35oPbZtNAiEAnU%2BsqdQUdMjNe4vhiVuskWFe2flgtaTYdJo7NdXP4VQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw3jlo2arHIOhYXMSrcA%2BBfOJY0BNOpafEf5qUa9tYLvrcd2iRtXdxU8HazIIXLiFtL5N1OWKuKnNX%2BYqCUOhJ%2Bc8uPXCf%2Bh02PIbQVsUu3%2FHvgjK%2FAb5ssVC%2BljDOx8WC7ZMhEO2RT2ph6F%2B84sqtyGuHXSz1EnZ2qeTq5VESCmeCv1qkjPR6xr4o3H13cY9Cx7t%2BfJZbt8rTR22HADFY%2BOSh471gbO7xtqh9dkNgtBGBOJbuus0c9Gll%2Fc0vZeQEyJlb05s3spbxqPTNJPfudayllLFySPIMbl4uHBRR5FK0xxRRmudRlr9i82L8TSLHH%2F6djkaCXVYqlg%2FQnSmoCYfJy4BUyPJHidppmqVVnzH5icB1kkAXGxZfDGR1dRPCxoUmXCcxoPNYQnJ4Y6I9IZ0t3uHQ24N1iuQSbx89XzMhgPQ%2BFGivesOiLjs9U59EPSQaMscDzpk1X631dwTBCiP4BvcSJoyVP1ukWWzu%2F4k5Ixz3D64Fx5mnNhClAxOv5K8KIdfWEGxIdTCpr9iq2p9HHyZyCD2jbP4MNCaWAISxDLWU674oECG7MwwJzvQehSv%2B2gKQCjtN5ftS3aehhZZEFjwVjrghZEzaCZbySpfveHttgltYibKOIIa30KSMk1CEHRY6mfNGDMO3t2ckGOqUB6E9SvfH7ngWHHihNKf0QaXCb%2B03js%2BHXTFx6hSAYu%2FoW6I1A6R3MG1YYpWwxMoCP5t1pVD5eRtZVAh5KVK5UM6cRGuLqF8I7oXDBcX925b6Vku7%2BAhiFH%2Flxu3zjBMJfzzVma9qG6hfsmMw5rSwqzcfqpvddjLh5yVIC7abMxGxLWG%2BvYB6goCpbrPVckWZ6urW8aqO0%2B2%2FOqGGXTfOIcZHxfl%2Fi&X-Amz-Signature=f3a706a9b752b6ac348d63b64419ff4279997d2165da9080dfc7520b40d30ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WTCOXEU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHBOq1g5eaWUeNwKmNoHBayx%2B70jgpXXOwq35oPbZtNAiEAnU%2BsqdQUdMjNe4vhiVuskWFe2flgtaTYdJo7NdXP4VQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw3jlo2arHIOhYXMSrcA%2BBfOJY0BNOpafEf5qUa9tYLvrcd2iRtXdxU8HazIIXLiFtL5N1OWKuKnNX%2BYqCUOhJ%2Bc8uPXCf%2Bh02PIbQVsUu3%2FHvgjK%2FAb5ssVC%2BljDOx8WC7ZMhEO2RT2ph6F%2B84sqtyGuHXSz1EnZ2qeTq5VESCmeCv1qkjPR6xr4o3H13cY9Cx7t%2BfJZbt8rTR22HADFY%2BOSh471gbO7xtqh9dkNgtBGBOJbuus0c9Gll%2Fc0vZeQEyJlb05s3spbxqPTNJPfudayllLFySPIMbl4uHBRR5FK0xxRRmudRlr9i82L8TSLHH%2F6djkaCXVYqlg%2FQnSmoCYfJy4BUyPJHidppmqVVnzH5icB1kkAXGxZfDGR1dRPCxoUmXCcxoPNYQnJ4Y6I9IZ0t3uHQ24N1iuQSbx89XzMhgPQ%2BFGivesOiLjs9U59EPSQaMscDzpk1X631dwTBCiP4BvcSJoyVP1ukWWzu%2F4k5Ixz3D64Fx5mnNhClAxOv5K8KIdfWEGxIdTCpr9iq2p9HHyZyCD2jbP4MNCaWAISxDLWU674oECG7MwwJzvQehSv%2B2gKQCjtN5ftS3aehhZZEFjwVjrghZEzaCZbySpfveHttgltYibKOIIa30KSMk1CEHRY6mfNGDMO3t2ckGOqUB6E9SvfH7ngWHHihNKf0QaXCb%2B03js%2BHXTFx6hSAYu%2FoW6I1A6R3MG1YYpWwxMoCP5t1pVD5eRtZVAh5KVK5UM6cRGuLqF8I7oXDBcX925b6Vku7%2BAhiFH%2Flxu3zjBMJfzzVma9qG6hfsmMw5rSwqzcfqpvddjLh5yVIC7abMxGxLWG%2BvYB6goCpbrPVckWZ6urW8aqO0%2B2%2FOqGGXTfOIcZHxfl%2Fi&X-Amz-Signature=841b3fde1eb9b22ec620a2a04e0cbb270781c9a477629a9734f7eb839a17562b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

